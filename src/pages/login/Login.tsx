import React, { useState } from "react";
import cls from './login.module.scss'
import { AiOutlineEyeInvisible, AiOutlineEye, AiOutlineUser, AiFillLock } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserInterface } from "../../types/interface";
import { AxiosResponse } from "axios";
import { http } from "../../server/server"
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { setValue } from "../../redux/isloggedIn";
import { setLanguages } from "../../redux/languagesReducer";


interface ILogin {
    success: boolean;
    message: string;
    data: {
        accessToken: string,
        refreshToken: string,
        tokenType: string,

    };
}



const Login: React.FC = () => {

    const [showEye, setShowEye] = useState<boolean>(false);
    let langId = useAppSelector(state => state.langId.index);
    let dispatch = useAppDispatch()
    // let loged = useAppSelector(state => state.)
    let navigate = useNavigate()


    const [user, setUser] = useState<UserInterface>({

        password: "",
        email: '',
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let body = {
            email: user.email,
            password: user.password,
        }


        const { data }: AxiosResponse<ILogin> = (await http.post(
            "/auth/sign-in",
            body
        ))


        const { data: langData }: AxiosResponse<any> = (await http.get(
            "/language/list-for-users",

        ))

        dispatch(setValue({ value: true, token: data.data.accessToken }))
        dispatch(setLanguages(langData.data));
        navigate(`/${langData.data[`${langId}`].id}`)



        setUser({
            password: "",
            email: '',
        })




    }

    return (
        <div className={cls.login}>
            <h3>Sign In</h3>

            <form onSubmit={handleSubmit}>
                <div className={cls.box}>
                    <label>Username</label>
                    <div>
                        <i className={cls.icon}>
                            <AiOutlineUser />
                        </i>
                        <input type="email" name="email" onChange={handleChange} value={user.email || ""} placeholder="Please Enter Here " />
                    </div>

                </div>


                <div className={cls.box}>
                    <label>Password</label>
                    <div>
                        <i className={cls.icon}><AiFillLock /></i>
                        <input type={showEye ? "text" : "password"} name="password" onChange={handleChange} value={user.password || ""} placeholder="***********" />
                        <i className={cls.eyeIcon} onClick={() => setShowEye(!showEye)}>
                            {
                                showEye ? < AiOutlineEye /> : <AiOutlineEyeInvisible />

                            }

                        </i>
                    </div>


                </div>
                <Link to={"/register"}>Haven't account yet?</Link>


                <button disabled={
                    !user.email ||
                    !user.password ||
                    user.password.length < 8
                }  >Sign In</button>
            </form>

        </div>
    )
};

export default Login;

