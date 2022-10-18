import { useState } from 'react'
import { Subjects } from '../../types/interface'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { GiTrophyCup } from "react-icons/gi";
import cls from "./subject.module.scss"
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
  
  const [isActive, setIsActive] = useState(true);
  console.log(setArr);

  return (
    <div className={cls.subject}>
      <div className={cls.box}>
        {arr.map((subject, index) => {
          return (
            <div className={cls.card} key={index}>
              <div className={cls.title}>
                <h3>{subject.title}</h3>
                <div>
                  <i className={cls.filledIcon}><AiFillStar /></i>
                  <i className={cls.filledIcon}><AiFillStar /></i>
                  <i className={cls.filledIcon}><AiFillStar /></i>
                  <i className={cls.filledIcon}><AiFillStar /></i>
                  <i className={cls.unfilled}><AiOutlineStar /></i>

                </div>
              </div>

              <p className={cls.text} >{subject.text}</p>
              <div className={cls.task}>
                <i className={cls.trophy}><GiTrophyCup /></i>
                <p>Task</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className={cls.pagination}>
        <div onClick={() => setIsActive(true)} className={cls.arrows}>{`<<`}</div>
        <div className={isActive ? cls.active : ""} onClick={() => setIsActive(true)}>1</div>
        <div className={isActive ? "" : cls.active} onClick={() => setIsActive(false)}>2</div>
        <div onClick={() => setIsActive(false)} className={cls.arrows}>{">>"}</div>

      </div>

    </div>
  )
}

export default Subject