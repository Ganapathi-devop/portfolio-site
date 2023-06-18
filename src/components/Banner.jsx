import Profile from "../assets/profile.png";
import Txt from "./Txt";
import "./banner.css";

function Banner() {
  

  return (
    <>
      <div className="banner">
        <div className="banner-img-div">
          <img src={Profile} alt="profile img" />
        </div>
        <div className="banner-content-div">
          <h4>Hello I'm</h4>
          <Txt/>

          <h4>GANAPATHI A S</h4>
          <div className="btns">
            <button id="hireme-btn">
              Hire Me <i class="fa-solid fa-right-long"></i>
            </button>
            <button>
              <a
                href="https://docs.google.com/document/d/1mh7qwgwQttCAs1lbnUx3ANQthJ3w0p7QKjMDXtXZ2oU/edit?usp=sharing"
                target="_blank"
              >
                Download CV
              </a>
              <i class="fa-duotone fa-down-to-bracket"></i>
            </button>
          </div>
          <button>
            DM Me through Whatsapp!!! <i class="fa-brands fa-whatsapp"></i>{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Banner;
