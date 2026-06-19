import './App.css'
import './components/Navbar.tsx'
import Navbar from "./components/Navbar.tsx";


function App() {

    const navbarTabs = ["Main view", "In progress", "Postponed", "Completed", "Abandoned", "Impossible"];
    const logName = (item: string) => {console.log(item)}


    return <div><Navbar tabs={navbarTabs} onElementClick={logName}/></div>
}

export default App