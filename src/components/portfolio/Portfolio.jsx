import './portfolio.scss';
import {list} from '../../data';

const Portfolio = () => {
    
    return (
        <div className = "portfolio" id = "portfolio">
            <div className = "title">
                <h1>Portfolio</h1>
            </div>
            <div className = "container">
                {list.map(data =>(
                    <div key = {data.id} className = "item">
                        <img src ={data.img} alt=""/>
                        <div className = "tecnologies">
                            <h4>{data.title}</h4>
                            <div className ="info-container">
                                <a target="_blank" href = {data.link} rel="noreferrer" download = {data.download}>{data.text1}</a>
                                <a target="_blank" href = {data.code} rel="noreferrer">{data.text2}</a>
                            </div>
                        </div>
                    </div>
                    
                ))}
                
                <div key = "3" className = "item">
                        <img src ="assets/tictactoe.png" alt=""/>
                        <div className = "tecnologies">
                            <h4>Tic tac toe game</h4>
                            <div className ="info-container">
                                <a target="_blank" href ="https://jesustictactoe.netlify.app/" rel="noreferrer">Go to Page</a>
                                <a target="_blank" href = "https://github.com/deonatto/tictactoe_react" rel="noreferrer">See Code</a>
                            </div>
                        </div>
                </div>
                <div key = "4" className = "item">
                        <img src ="assets/polls.png" alt=""/>
                        <div className = "tecnologies">
                            <h4>Poll Voting Admin</h4>
                            <div className ="info-container">
                                <a target="_blank" href ="assets/admin.txt" rel="noreferrer" download>README</a>
                                <a target="_blank" href = "https://github.com/deonatto/ReactPollVotingApp_admin" rel="noreferrer">Code+Mockups</a>
                            </div>
                        </div>
                </div>
                <div key = "5" className = "item">
                        <img src ="assets/pollsList.png" alt=""/>
                        <div className = "tecnologies">
                            <h4>Poll Voting App</h4>
                            <div className ="info-container">
                                <a target="_blank" href ="assets/user.txt" rel="noreferrer" download>README</a>
                                <a target="_blank" href = "https://github.com/deonatto/ReactPollVotingApp_user" rel="noreferrer">Code+Mockups</a>
                            </div>
                        </div>
                </div>
            </div>

        </div>
    )
}

export default Portfolio;
