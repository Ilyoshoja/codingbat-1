import "./footer.scss"
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
        <div className="footerContainer">
            <div className="footerBoxes">

                <div className="footerBox" >
                    <h3>Java Help</h3>
                    <div className="quesitons">
                        {questionsArr.map((questions) => {

                            return (

                                <p>{questions}</p>

                            )
                        })}
                    </div>
                </div>

                <div className="footerBox">
                    <h3>Java Help</h3>
                    <p> Code Badges</p>
                    <p>Introduction to Mod (video)</p>
                    <p>MakeBricks problem and solution (video x 2)</p>
                    <p>FizzBuzz the famous code interview question (video)</p>
                </div>
            </div>

            <h4>Copyright <span>Nick Parlante</span> 2017 - privacy</h4>
        </div>
    )
}

export default Footer