export default function Stats ({robot, goBack, handleRecruit}) {
   
    return (
        <div className="stats-main-container">
            <div key={robot.id} className="stats-container" >
                <div>
                    <img src={ robot.avatar_url } alt="avatar"/>
                    <p className="stats-catchphrase">{ robot.catchphrase }</p>
                    <div className="stats-bot-name-and-class-div">
                    <h2><strong>{ robot.name }</strong></h2>
                    <h3>{ robot.bot_class }</h3>
                    </div>
                    <div className="stats-bot-stats">
                    <p>Health <span>{ robot.health }</span> </p>
                    <p>Damage <span>{ robot.damage }</span></p>
                    <p>Armor <span>{ robot.armor }</span></p>
                    </div>
                    <div className="stats-bot-dates">
                    <p>Created at <span>{ robot.created_at }</span></p>
                    <p>Updated at <span>{ robot.updated_at }</span></p>
                    </div>
                    <div className="footer">
                    <button className="stats-recruit" onClick={() => handleRecruit(robot)}>Recruit</button>
                    <button className="stats-go-back" onClick={() => goBack()}>Go Back</button>
                    </div>
                </div>
            </div>
        </div>
      )
}