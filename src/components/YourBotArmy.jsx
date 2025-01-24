export default function YourBotArmy ({ recruits, handleReleaseRecruit }) {

    const displayRecruits = recruits.map(robotData => {
        return (
          <div className="bot-container" key={robotData.id} onClick={() => handleReleaseRecruit(robotData)}>
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
        )
      })

    return (
        <>
        {recruits.length === 0 ? (
            <div className="no-bots-added">
                <img src="https://i.pinimg.com/736x/3e/01/66/3e01667b4c12daee9ea2a1cfabe58e2d.jpg" alt="no bots added"/>
                <p>No Bots Added to your Army <br/>Please try recruiting first !</p>
            </div>
        )
        : 
        (
            <div className="bots-added">
                <h1>YOUR ARMY</h1>
                <div className="main-container">
                    { displayRecruits }
                </div>
            </div>
        )}
        </>
    )
}