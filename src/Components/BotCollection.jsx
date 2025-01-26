export default function BotCollection ({ robots, handleRecruit, showStat,releaseFromDuty }) {

    const displayProfiles = robots.map(robotData => {
        return (
          <div key={robotData.id} className="bot-container" >
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
      })

    return (
        <div className="bot-collection">
            <h1>BOT PROFILES</h1>
            <div className="main-container">
                { displayProfiles }
            </div>
        </div>
    )
}