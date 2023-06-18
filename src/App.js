import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";

function App() {
  const [darkMode, setDarkMode] = useState(true);



  return (
    <div
      className="App"
      style={
        darkMode ? { backgroundColor: "#121212", color:"#fff" } : { backgroundColor: "#fff", color:"#121212" }
      }
    >
      <span
        class="material-symbols-outlined"
        id="dark-mode"
        onClick={(e) => {
          // e.target.classList.add("toggle-animation")
          let txt = e.target.innerText;
          let tag = e.target.classList;
          tag.toggle("toggle-animation");
          setTimeout(()=>{
            // tag.remove("toggle-animation")
            console.log(txt === "wb_sunny");
            if(txt === "wb_sunny"){
              e.target.innerText = "brightness_2"
              tag.toggle("toggle-animation")
              setDarkMode(false)
            }else{
              e.target.innerText = "wb_sunny"
              console.log(false);
              tag.toggle("toggle-animation")
              setDarkMode(true)
            }
          },700)
        }}
      >
        wb_sunny
      </span>
      <Header />
      <Banner />
    </div>
  );
}

export default App;
