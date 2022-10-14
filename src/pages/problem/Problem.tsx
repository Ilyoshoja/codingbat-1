import React from "react";
import './problem.scss'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";

interface ProblemProps { }

const Problem: React.FC<ProblemProps> = () => {
    return (
        <div className="problemSection">
            <div className="problemCard">
                <div className="cardTitle">
                    <div className="title">
                        <h3>Warmap-1</h3>
                        <div className="starBox">
                            <i id='filedIcon'><AiFillStar /></i>
                            <i id='filedIcon'><AiFillStar /></i>
                            <i id='filedIcon'><AiFillStar /></i>
                            <i id='filedIcon'><AiFillStar /></i>
                            <i id='unfilled'><AiOutlineStar /></i>

                        </div>
                    </div>
                    <div className="edit">
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
