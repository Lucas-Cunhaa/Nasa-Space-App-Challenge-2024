const CreatePlanet = () => {
    return (
        <>  
            <div className="top"> 
                <h1 className="home-title" >MY EXOPLANET</h1><br></br>
                <h2 className="home-subtitle"> What it is an exoplanet ?</h2><br></br>
                <h3 className="home-subtitle"> An exoplanet is a planet that orbits a star other than our Sun.</h3>
            </div>
            <div className="home-content">
                <div className="planet-infos">
                    <h2 className="about left">It is one of the biggest exoplanets ever discovered. Its radious is approximately 1.8 times that of Jupiter, but its  mass is only 0.88 times that of Jupiter, resulting in a low density.</h2>
                    <div className="planet">
                        <h3 className="planet-name">TrES-4b</h3>
                    </div>
                    <h2  className="about right">Its primarily composed of hydrogen and helium, similar to Jupiter and Saturn.
                    Its extremely hot, with an estimated temperature of about 1,600 K (1,330 °C). - 20</h2>
                </div>
                <div className="create-planet">
                    <button className="create-button">
                        <NavBar link="/createPlanet">Create your own Exoplanet</NavBar>
                    </button>
                </div>                                                      
                <div className="discovery-more">
                <button className="discovery-button"></button>
                </div>
            </div>
        </>
    )
}

export default CreatePlanet