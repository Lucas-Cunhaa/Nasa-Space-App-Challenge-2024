import Planet from "../../components/planet"
import NavBar from "../../components/NavBar"
import TopBar from "../../components/TopBar"

import "../../css/home.css"

const HomePage = () => {
    return (
        <>  
        <div className="container"> 
            <div className="top"> 
                <TopBar>MY EXOPLANET</TopBar><br></br>
                <h2 className="home-subtitle"> What it is an exoplanet ?</h2><br></br>
                <h3 className="home-subtitle"> An exoplanet is a planet that orbits a star other than our Sun.</h3>
            </div>
            <div className="home-content">
                <div className="planet-infos">
                    <h2 className="about left">It is one of the biggest exoplanets ever discovered. Its radious is approximately 1.8 times that of Jupiter, but its  mass is only 0.88 times that of Jupiter, resulting in a low density.</h2>
                    <div className="planet">
                        <Planet />
                        <h3 className="planet-name">TrES-4b</h3>
                    </div>
                    <h2  className="about right">Its primarily composed of hydrogen and helium, similar to Jupiter and Saturn.
                    Its extremely hot, with an estimated temperature of about 1,600 K (1,330 °C). - 20</h2>
                </div>
                <div className="links">
                    <button className="link-button"><NavBar link="/createPlanet">Create your own Exoplanet</NavBar></button>
                    <a href="https://science.nasa.gov/exoplanets/">
                         <button className="link-button">Learn More</button>
                    </a>
                </div>
             </div>
            </div>
        </>
    )
}

export default HomePage