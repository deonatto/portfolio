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
                    <h1>Hi There, my name is Jesus Goncalves and i´m a frontend developer.</h1>
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
