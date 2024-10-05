const HomePage = () => {
    return (
        <>
            <h1 className="home-title" >MY EXOPLANETS</h1>
            <h2 className="home-subtitle"> What it is an exoplanet ?</h2>
            <div className="home-content">
                <div className="planet-infos">
                    <h2 className="about"></h2>
                    <div className="planet">
                        <h3 className="planet-name"></h3>
                    </div>
                </div>
                <div className="create-planet">
                    <button className="create-button"></button>
                </div>
                <div className="discovery-more">
                <button className="discovery-button"></button>
                </div>
            </div>
        </>
    )
}

export default HomePage