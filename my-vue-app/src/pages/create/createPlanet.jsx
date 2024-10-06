import CreatePlanetForm from "../../components/CreatePlanetForm";
import Paint from "../../components/paint"
import "../../css/createPlanet.css"

const CreatePlanet = () => {
    return (
        <>
            <div className="create-content">
                <div className="top-create">
                    <h1 className="form-title">Create your own EXOPLANET</h1>
                </div>
                    
                <div className="input-section">
                    <CreatePlanetForm />
                    <Paint />
                </div>
                
                
            </div>

        </>
    )
}

export default CreatePlanet