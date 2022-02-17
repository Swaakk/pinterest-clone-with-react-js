import "./App.css";
import MenuContainer from "./Components/MenuContainer";
import pinterest from "./Images/pinterest.png";
import Person from "@mui/icons-material/Person"

function App() {
  return (
    <div className="App">
      <div className="menuContainer">
        <img src={pinterest} className="logo" />
        
        <div className="subMenu">
          <div>
            <MenuContainer icon={<Person/>}/>
          </div>
        </div>
      </div>
      <main></main>
    </div>
  );
}

export default App;
