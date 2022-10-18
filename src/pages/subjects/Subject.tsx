import { useState } from 'react'
import { Subjects } from '../../types/interface'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { GiTrophyCup } from "react-icons/gi";
import "./subject.scss"
function Subject() {

  const [arr, setArr] = useState<Subjects[]>(
    [
      {
        title: "Warmap-1",
        text: 'Simple warmup problems to get started (solutions available)'
      },

      {
        title: "Warmap-2",
        text: 'Simple warmup problems to get started (solutions available)'
      },


      {
        title: "Warmap-3",
        text: 'Simple warmup problems to get started (solutions available)'
      },

      {
        title: "String-1",
        text: 'Simple warmup problems to get started (solutions available)'
      },

      {
        title: "String-2",
        text: 'Simple warmup problems to get started (solutions available)'
      },

      {
        title: "String-3",
        text: 'Simple warmup problems to get started (solutions available)'
      },

      {
        title: "Logic-1",
        text: 'Simple warmup problems to get started (solutions available)'
      },


      {
        title: "Logic-2",
        text: 'Simple warmup problems to get started (solutions available)'
      },

      {
        title: "Logic-3",
        text: 'Simple warmup problems to get started (solutions available)'
      },

    ])
  const active = "active"
  const [isActive, setIsActive] = useState(true);
  console.log(setArr);

  return (
    <div className="subjectContainer">
      <div className="subjectsBox">
        {arr.map((subject, index) => {
          return (
            <div className="subjectCard" key={index}>
              <div className="title">
                <h3>{subject.title}</h3>
                <div className="starBox">
                  <i id='filedIcon'><AiFillStar /></i>
                  <i id='filedIcon'><AiFillStar /></i>
                  <i id='filedIcon'><AiFillStar /></i>
                  <i id='filedIcon'><AiFillStar /></i>
                  <i id='unfilled'><AiOutlineStar /></i>

                </div>
              </div>

              <p className='text' id='text'>{subject.text}</p>
              <div className="taskBox">
                <i id='trophy'><GiTrophyCup /></i>
                <p>Task</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="pagination">
        <div onClick={() => setIsActive(true)} className="arrows">{`<<`}</div>
        <div className={isActive ? active : ""} onClick={() => setIsActive(true)}>1</div>
        <div className={isActive ? "" : active} onClick={() => setIsActive(false)}>2</div>
        <div onClick={() => setIsActive(false)} className="arrows">{">>"}</div>

      </div>

    </div>
  )
}

export default Subject