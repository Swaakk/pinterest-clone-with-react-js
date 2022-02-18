import "./App.css";
import MenuContainer from "./Components/MenuContainer";
import pinterest from "./Images/pinterest.png";
import {Person,Notifications,Chat,FavoriteRounded,QuestionMark,Add} from "@mui/icons-material"
import { useEffect } from "react";
import icons from './Images/icons.png'
import Pin from './Components/Pin'


function App() {

  useEffect(()=>{

    const allIcon = document.querySelectorAll(".iconContainer");


    function setMenuActive(){
      allIcon.forEach((e)=>e.classList.remove('active'))
      this.classList.add('active')
    }

    allIcon.forEach((e)=>e.addEventListener("click", setMenuActive))

  },[]);
    
  return (
    <div className="App">
      <div className="menuContainer">
        <img src={pinterest} className="logo" />
        
        <div className="subMenu">
          <div>
            <MenuContainer icon={<Person/>}/>
            <MenuContainer icon={<Notifications/>}/>
            <MenuContainer icon={<Chat/>}/>
          </div>
          <div>
            <MenuContainer icon={<FavoriteRounded/>}/>
          </div>
          <div>
            <MenuContainer icon={<QuestionMark/>}/>
            <MenuContainer icon={<Add/>}/>
          </div>
        </div>
      </div>
      <main>
        <div className="searchBox">
          <input type="text" placeholder="Search...." />
          <div className="search">
            <img src={icons} alt="" />
          </div>
        </div>
        <div className="mainContainer">
          <Pin pinSize={"small"}/>
          <Pin pinSize={"medium"}/>
          <Pin pinSize={"large"}/>
        </div>
      </main>
    </div>
  );
}

export default App;
