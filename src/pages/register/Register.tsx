import React, { useState } from "react";
import "./register.scss"
import { AiOutlineEyeInvisible, AiOutlineEye, AiOutlineUser, AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserInterface } from "../../types/interface";
import { AxiosResponse } from "axios";
import { http } from "../../server"


interface IRegister {
    success: boolean;
}

const Register: React.FC = () => {
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
        // setuser({

        //     password: "",
        //     email: '',
        // })

       

        const { data }: AxiosResponse<IRegister> = (await http.post(
            "/auth/sign-up",
            {email: user.email, password:user.password},
        ))

        console.log(data);
        
    }




    return (
        <div className="registerSection">
            <h3>Register</h3>

            <form onSubmit={handleSubmit}>


                <div className="inputBox">
                    <label>email</label>
                    <div>
                        <i className="userIcon">
                            <AiOutlineUser />
                        </i>
                        <input type="email" name="email" onChange={handleChange} value={user.email || ""} placeholder="Please Enter Here " />
                    </div>

                </div>



                <div className="inputBox">
                    <label>Password</label>
                    <div>
                        <i className="lockIcon"><AiFillLock /></i>
                        <input type={showEye ? "text" : "password"} name="password" onChange={handleChange} value={user.password || ""} placeholder="***********" />
                        <i id="eyeIcon" onClick={() => setShowEye(!showEye)}>
                            {
                                showEye ? < AiOutlineEye /> : <AiOutlineEyeInvisible />

                            }

                        </i>

                    </div>


                </div>
                <Link to={'/login'}>Already have an Account ?</Link>


                <button disabled={
                    !user.email ||
                    !user.password ||
                    user.password.length < 8
                }  >Register</button>
            </form>

        </div>
    )
};

export default Register;
