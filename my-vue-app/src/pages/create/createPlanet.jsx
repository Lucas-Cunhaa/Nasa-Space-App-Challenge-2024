import CreatePlanetForm from "../../components/CreatePlanetForm";
import Paint from "../../components/paint"
import TopBar from "../../components/TopBar";
import "../../css/createPlanet.css"

const CreatePlanet = () => {
    return (
        <>
            <div className="create-content">
                    <TopBar>Create your own Exoplanet</TopBar>
                <div className="input-section">
                    <CreatePlanetForm />
                    <Paint />
                </div>
                
                
            </div>

        </>
    )
}

export default CreatePlanet