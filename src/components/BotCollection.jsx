export default function BotCollection ({ robots, handleRecruit, releaseFromDuty }) {

    const displayProfiles = robots.map(robotData => {
        return (
          <div key={robotData.id} className="bot-container" >
            <div>
                <p></p>
                <button onClick={() => releaseFromDuty(robotData)}>X</button>
            </div>
            <div  onClick={() => handleRecruit(robotData)}>
                <img src={ robotData.avatar_url } alt="avatar" />
                <p className="catchphrase">{ robotData.catchphrase }</p>
                <div className="bot-name-and-class-div">
                <h2><strong>{ robotData.name }</strong></h2>
                <h3>{ robotData.bot_class }</h3>
                </div>
                <div className="bot-stats">
                <p>Health <span>{ robotData.health }</span> </p>
                <p>Damage <span>{ robotData.damage }</span></p>
                <p>Armor <span>{ robotData.armor }</span></p>
                </div>
                <div className="bot-dates">
                <p>Created at <span>{ robotData.created_at }</span></p>
                <p>Updated at <span>{ robotData.updated_at }</span></p>
                </div>
            </div>
          </div>
        )
      })

    return (
        <>
            <div>
                <h1>BOT PROFILES</h1>
            </div>
            <div className="main-container">
                { displayProfiles }
            </div>
        </>
    )
}