import React from "react";
import cls from "./problem.module.scss"
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { log } from "console";



const Problem: React.FC = () => {
    let task = useLocation();
    console.log(task);


    return (
        <div className={cls.problem}>
            <div className={cls.card}>
                <div className={cls.title}>
                    <div className={cls.text}>
                        <h3>{task.state.title}</h3>
                        <div>
                            <i id={cls.icon_1}><AiFillStar /></i>
                            <i id={cls.icon_1}><AiFillStar /></i>
                            <i id={cls.icon_1}><AiFillStar /></i>
                            <i id={cls.icon_1}><AiFillStar /></i>
                            <i id={cls.icon_2}><AiOutlineStar /></i>

                        </div>
                    </div>
                    <div className={cls.edit}>
                        <i>
                            <BsPencil />
                        </i>
                        <p>Change</p>
                    </div>

                </div>
                <p>{task.state.description}</p>
            </div>
        </div>
    )
}

export default Problem;
