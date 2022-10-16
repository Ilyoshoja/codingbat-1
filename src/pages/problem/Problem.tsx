import React from "react";
import cls from "./problem.module.scss"
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";

interface ProblemProps { }

const Problem: React.FC<ProblemProps> = () => {
    return (
        <div className={cls.problem}>
            <div className={cls.card}>
                <div className={cls.title}>
                    <div className={cls.text}>
                        <h3>Warmap-1</h3>
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
                <p>Simple warmup problems to get started (solutions available). New videos: String Introduction, String Substring, If Boolean Logic 1, If Boolean Logic 2</p>
            </div>
        </div>
    )
}

export default Problem;
