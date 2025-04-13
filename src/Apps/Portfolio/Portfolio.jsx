// Assets
import hero_image from "/hero_image.png";
import frontend_image from "/frontend_image.png";
import backend_image from "/backend_image.png";
import about_image from "/about_image.png";
import instagram_icon from "/instagram_icon.svg";
import linkedin_icon from "/linkedin_icon.svg";
import whatsapp_icon from "/whatsapp_icon.svg";


// Styles
import "./Portfolio.css";

// Components
import Window from "../../Components/Window/Window";

// Hooks
import { useSelector, useDispatch } from "react-redux";

// Redux
import {
  minimizeApp,
  minimizeAll,
  unsetAppFullscreen,
  setMobileMode,
} from "../../state/app/appSlice";

const Portfolio = () => {

  const { apps, mobile_settings } = useSelector((state) => state.app)
  const dispatch = useDispatch()

  const handleMinimizeApp = () => {
    console.log("aaaaaaaaaaaaa")
    if(apps["portfolio"].fullscreen){
      dispatch(unsetAppFullscreen({app: apps["portfolio"]}))

    }

    dispatch(minimizeApp(apps["portfolio"].name))

    dispatch(setMobileMode("menu"))

    if(mobile_settings.mode == "running_apps"){
      dispatch(setMobileMode("menu"))
      return
    }

    if(mobile_settings.mode == "fullsized_app"){
      dispatch(minimizeAll())
      dispatch(setMobileMode("menu"))
    }
  }

  const scrollIntoView = (elementId) => {
    var element = document.getElementById(elementId);

    const windowHeader = document.getElementById("window_header_portfolio")
    windowHeader.style.position = "absolute";

    element.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });

    windowHeader.style.position = "relative";
  }
  return (
    <Window app={apps["portfolio"]}>
      <div className={"portfolio"+ `${apps["portfolio"].size_class}`}>
        <nav>
          <ul>
            <li
              onClick={() => { scrollIntoView("about")}}
            >
              About this project
            </li>
            <li
              onClick={() => { scrollIntoView("contact")}}
            >
              Contact-me
            </li>
          </ul>
        </nav>
        <section className="hero">
          <h1>Welcome to my portfolio, I'm <span>Vinicius</span></h1>
          <p>I'm a web developer passionate about exploring new ways to create creative and outstanding projects. I've always been fascinated by the ability to turn ideas into reality through code.</p>
          <img className="hero_img" src={hero_image} alt="desktop image"/>
          <div className="contacts">
            <a
              href="https://www.instagram.com/vinicius_v4z/"
              target="blank"
              className="contact"
            >
              <img src={instagram_icon} alt="instagram icon"/>
            </a>
            <a
              className="contact"
              href="https://www.linkedin.com/in/vinicius-vaz-667341189"
              target="blank"
            >
              <img src={linkedin_icon} alt="linkedin icon"/>
            </a>
            <a
              aria-label="Chat on WhatsApp"
              href=" https://wa.me/5585996004126"
              target="blank"
              className="contact"
            >
              <img src={whatsapp_icon} alt="whatsapp icon"/>
            </a>
          </div>
          <button
            onClick={() => handleMinimizeApp()}
          >
            Explore this project
          </button>

        </section>
        <section className="img_left">
          <h2 className="mobile_version">Frontend</h2>
          <div className="section_content">
          <img src={frontend_image} alt="frontend image"/>
            <div className="section_text">
              <h2>Frontend</h2>
              <p>I have solid experience in developing frontend applications, using modern technologies to create dynamic and responsive interfaces. Proficient in HTML, CSS, and JavaScript, with a strong focus on React for building modular and high-performance interfaces. My knowledge includes creating accessible and optimized layouts, integrating with APIs..</p>
            </div>
          </div>
        </section>
        <section className="img_right">
          <h2 className="mobile_version">Backend</h2>
          <div className="section_content">
            <div className="section_text">
              <h2>Backend</h2>
              <p>I have extensive experience in developing backend applications and servers using Node.js and Express, building scalable architectures. I’ve worked with databases like MongoDB and PostgreSQL, ensuring secure and efficient integrations. My expertise ranges from creating RESTful APIs and authentication to data management and deployment in production environments.</p>
            </div>
            <img src={backend_image} alt="backend image"/>
          </div>
        </section>

        <section className="img_left project_info" id="about">
          <h2 className="mobile_version">About this project</h2>
          <div className="section_content">
            <img src={about_image} alt="project image"/>
            <div className="section_text">
              <h2>About this project</h2>
              <p>My purpose for this project was to find a alternative and creative way to showcase my work, I’ve always enjoyed exploring different and multiple ways to build and design on web. This is my portfolio, all the apps here are the projects that I designed and built(there's a feel more to be added), feel free to explore it.</p>
              <button
            onClick={() => handleMinimizeApp()}
          >
            Explore this project
          </button>
            </div>
          </div>
        </section>
        <section className="final_section" id="contact">
          <h2>Get in touch</h2>
          <p>If you want me to colaborate in your project, you can contact me.</p>
          <div className="contacts">
            <a
              href="https://www.instagram.com/vinicius_v4z/"
              target="blank"
              className="contact"
            >
              <img src={instagram_icon} alt="instagram icon"/>
            </a>
            <a
              className="contact"
              href="https://www.linkedin.com/in/vinicius-vaz-667341189"
              target="blank"
            >
              <img src={linkedin_icon} alt="linkedin icon"/>
            </a>
            <a
              aria-label="Chat on WhatsApp"
              href=" https://wa.me/5585996004126"
              target="blank"
              className="contact"
            >
              <img src={whatsapp_icon} alt="whatsapp icon"/>
            </a>
          </div>
        </section>
      </div>
    </Window>
  )
}

export default Portfolio