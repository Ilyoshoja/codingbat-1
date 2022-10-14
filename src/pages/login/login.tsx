import React, { useState } from "react";
import './login.scss'
import { AiOutlineEyeInvisible, AiOutlineEye, AiOutlineUser, AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";
interface LoginProps { }

const Login: React.FC<LoginProps> = () => {
    const [showEye, setShowEye] = useState<boolean>(false);
    return (
        <div className="loginSection">
            <h3>Sign In</h3>

            <form>
                <div className="inputBox">
                    <label>Username</label>
                    <div>
                        <i className="userIcon">
                            <AiOutlineUser />
                        </i>
                        <input type="text" placeholder="Please Enter Here " />
                    </div>

                </div>


                <div className="inputBox">
                    <label>Password</label>
                    <div>
                        <i className="lockIcon"><AiFillLock /></i>
                        <input type={showEye ? "text" : "password"} placeholder="***********" />
                        <i id="eyeIcon" onClick={() => setShowEye(!showEye)}>
                            {
                                showEye ? < AiOutlineEye /> : <AiOutlineEyeInvisible />

                            }

                        </i>
                    </div>


                </div>
                <Link to={"register"}>Need help to login ?</Link>


                <button>Login</button>
            </form>

        </div>
    )
};

export default Login;

