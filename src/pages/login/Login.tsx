import React, { useState } from "react";
import cls from './login.module.scss'
import { AiOutlineEyeInvisible, AiOutlineEye, AiOutlineUser, AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserInterface } from "../../types/interface";
import { AxiosResponse } from "axios";
import { http } from "../../server/server"
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



    const [user, setuser] = useState<UserInterface>({

        password: "",
        email: '',
    })




    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();



        const { data }: AxiosResponse<ILogin> = (await http.post(
            "/auth/sign-in",
            { email: user.email, password: user.password },
        ))

        setuser({

            password: "",
            email: '',
        })

        console.log(data.data.accessToken);


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
                <Link to={"/register"}>Need help to login ?</Link>


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

