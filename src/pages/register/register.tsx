import React, { useState } from "react";
import "./register.scss"
import { AiOutlineEyeInvisible, AiOutlineEye, AiOutlineUser, AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserInterface } from "../../types/interface";
interface RegisterProps { }

const Register: React.FC<RegisterProps> = () => {
    const [showEye, setShowEye] = useState<boolean>(false);
    const [newUser, setNewUser] = useState<UserInterface>({


        password: "",
        username: '',
    })

    const [userArr, setUserArr] = useState<UserInterface[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value })
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUserArr([...userArr, newUser]);
        setNewUser({

            password: "",
            username: '',
        })
    }

    return (
        <div className="registerSection">
            <h3>Register</h3>

            <form onSubmit={handleSubmit}>


                <div className="inputBox">
                    <label>Username</label>
                    <div>
                        <i className="userIcon">
                            <AiOutlineUser />
                        </i>
                        <input type="text" name="username" onChange={handleChange} value={newUser.username || ""} placeholder="Please Enter Here " />
                    </div>

                </div>



                <div className="inputBox">
                    <label>Password</label>
                    <div>
                        <i className="lockIcon"><AiFillLock /></i>
                        <input type={showEye ? "text" : "password"} name="password" onChange={handleChange} value={newUser.password || ""} placeholder="***********" />
                        <i id="eyeIcon" onClick={() => setShowEye(!showEye)}>
                            {
                                showEye ? < AiOutlineEye /> : <AiOutlineEyeInvisible />

                            }

                        </i>
                        
                    </div>


                </div>
                <Link to={'/login'}>Already have an Account ?</Link>


                <button disabled={
                    !newUser.username ||
                    !newUser.password ||
                    newUser.password.length < 8
                }  >Register</button>
            </form>

        </div>
    )
};

export default Register;
