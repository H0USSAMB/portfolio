import React ,{useState , useEffect} from "react"
import './Header.css'
import linkedin from '../pic/icons8-linkedin-circled-30.png'

const Header = () => {
  // fixed Header
  const [bgbar, setbgbar] = useState(false)
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setbgbar(true)
    } else {
      setbgbar(false)
    }
  }
  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })
  // Toogle Menu
  return (
    <nav className={bgbar ? "navbar active" : "navbar"}>
  <input id="nav-toggle" type="checkbox" />
  <div className="logo">
  <div className="linkedin" ><img src={linkedin} alt=''/></div>
    <span>Samad_yl</span>
  </div>
  <ul className="links">
    <li>
      <a href="#home">Home</a>
    </li>
    <li>
      <a href="#About">About</a>
    </li>
    <li>
      <a href="#projects">Projects</a>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
  </ul>
  <label htmlFor="nav-toggle" className="icon-burger">
    <div className="line" />
    <div className="line" />
    <div className="line" />
  </label>
</nav>

  )
}

export default Header