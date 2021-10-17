import './intro.scss';

const Intro = () => {
    return (
        <div className = "intro" id = "intro">
            <div className = "left">
                <div className = "imgContainer">
                    <img src= "assets/me.jpg" alt= ""/>
                </div>
            </div>
            <div className = "right">
                <div className="wrapper">
                    <h2>Hi There, I´m</h2>
                    <h1>Jesus Gonçalves.</h1>
                    <h3>To see my work, click below.</h3>
                </div>
                <a href = "#portfolio" alt="">
                    <img src= "assets/down.png" alt= ""/>
                </a>
            </div>
        </div>
    )
}

export default Intro;
