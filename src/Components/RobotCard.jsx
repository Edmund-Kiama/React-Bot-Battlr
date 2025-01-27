//single robot card element
export default function RobotCard ({robotData, handleRecruit, releaseFromDuty,showStat}) {
    return (
        <div className="bot-container" >
            <div className="bot-header">
                <button className="recruit" onClick={() => handleRecruit(robotData)}>Recruit</button>
                <button className="bye-bye" onClick={() => releaseFromDuty(robotData)}>X</button>
            </div>
            <div onClick={()=>showStat(robotData)}>
                <img src={ robotData.avatar_url } alt="avatar"/>
                <p className="catchphrase">{ robotData.catchphrase }</p>
                <div className="bot-name-and-class-div">
                <h2><strong>{ robotData.name }</strong></h2>
                <h3>{ robotData.bot_class }</h3>
                </div>
            </div>
          </div>
    )
}