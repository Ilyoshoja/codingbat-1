import cls from './footer.module.scss'
function Footer() {
    const questionsArr = [
        "Java Example Solution Code",
        "Java String Introduction (video)",
        "Java Substring v2 (video)",
        "Java String Equals and Loops",
        "Java String indexOf and Parsing",
        "Java If and Boolean Logic",
        "If Boolean Logic Example Solution Code 1-(video)",
        "If Boolean Logic Example Solution Code 2-(video)",
        "Java For and While Loops",
        "Java Arrays and Loops",
        "Java Map Introduction",
        "Java Map WordCount",
        "Java Functional Mapping",
        "Java Functional Filtering",
    ]
    return (
        <footer>
            <div className={cls.boxes}>

                <div className={cls.inner} >
                    <h3>Java Help</h3>
                    <div className={cls.questions}>
                        {questionsArr.map((questions) => {

                            return (

                                <p>{questions}</p>

                            )
                        })}
                    </div>
                </div>

                <div className={cls.inner}>
                    <h3>Misc Code Practice</h3>
                    <p> Code Badges</p>
                    <p>Introduction to Mod (video)</p>
                    <p>MakeBricks problem and solution (video x 2)</p>
                    <p>FizzBuzz the famous code interview question (video)</p>
                </div>
            </div>

            <h4>Copyright <span>Nick Parlante</span> 2017 - privacy</h4>
        </footer>
    )
}

export default Footer