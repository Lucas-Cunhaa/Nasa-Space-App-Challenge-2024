import "../css/topbar.css"

const TopBar = ({children}) => {
    return (
        <h1 className="top">{children}</h1>
    )
}

export default TopBar