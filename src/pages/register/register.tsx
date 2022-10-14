import React, { useState } from "react";
import "./register.scss"
import { AiOutlineEyeInvisible, AiOutlineEye, AiOutlineUser, AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
    const [showEye, setShowEye] = useState<boolean>(false);
    return(
        <div className="registerSection">
            <h3>Register</h3>

            <form>
                <div className="inputBox">
                    <label>Full Name</label>
                    <div>
                        <i className="userIcon">
                            <AiOutlineUser />
                        </i>
                        <input type="text" placeholder="Please Enter Here " />
                    </div>

                </div>

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
                    <label>Email</label>
                    <div>
                        <i className="userIcon">
                            <AiOutlineMail />
                        </i>
                        <input type="email" placeholder="Please Enter Here @" />
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
                <Link to={'/'}>Already have an Account ?</Link>


                <button>Register</button>
            </form>

        </div>
    )
};

export default Register;
