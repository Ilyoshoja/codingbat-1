import React, { useState } from "react";
import cls from "./register.module.scss"
import { AiOutlineEyeInvisible, AiOutlineEye, AiOutlineUser, AiFillLock } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AlertInterFace, UserInterface } from "../../types/interface";
import { AxiosResponse } from "axios";
import { http } from "../../server/server"
import CustomizedSnackbars from "../../components/snackbar/CustomizedSnackbars";



interface IRegister {
    success: boolean,
    
}



const Register: React.FC = () => {
    const [showEye, setShowEye] = useState<boolean>(false);
    let navigate = useNavigate();
    const [alert, setAlert] = useState<AlertInterFace>({
        showAlert:false,
        msg:""
    });
 

    const [user, setuser] = useState<UserInterface>({

        password: "",
        email: '',
    })






    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        const { data }: AxiosResponse<IRegister> = (await http.post(
            "/auth/sign-up",
            { email: user.email, password: user.password },

            
        ))

        const { data: email }: AxiosResponse<any> = (await http.get(
            `auth/verification-email/${user.email}`,

        ))



        if(email.success === true && email.message === "Tasdiqlandi"){
                  
            navigate('/')
        }

        

        else if (data.success === false){
            setAlert({ msg: "Bunday Email Oldindan Mavjud", showAlert:true})
        }



        setuser({

            password: "",
            email: '',
        })

     


       
       
    }




    return ( 
        <div className={cls.register}>
            <h3>Sign Up</h3>

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
                <Link to={"/"}>Alredy have an account ?</Link>


                <button disabled={
                    !user.email ||
                    !user.password ||
                    user.password.length < 8
                }  >Sign Up</button>
            </form>

            <CustomizedSnackbars alert= {alert}/>

        </div>
    )
};

export default Register;
