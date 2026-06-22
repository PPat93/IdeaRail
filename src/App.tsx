import './App.css'
import './components/Navbar.tsx'
import Navbar from "./components/Navbar.tsx";
import CRUDbar from "./components/CRUDbar.tsx";


function App() {

    const navbarTabs = ["Main view", "In progress", "Postponed", "Completed", "Abandoned", "Impossible"];
    const logName = (item: string) => {
        item = item.toLocaleLowerCase().replace(/\s/g, "");
        console.log(item)
    }

    return <div>
        <Navbar tabs={navbarTabs} onElementClick={logName}/>
        <div><CRUDbar/></div>
    </div>
}

export default App