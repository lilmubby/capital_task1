import hamburger from "../../assets/Group 503.png"
import home from "../../assets/image 295.png"
import list from "../../assets/image 298.png"
import "./Icon.css"

const Icon = () => {
  return (
    <div className="icon_wrapper">
      <img src={hamburger} alt="" />
      <div className="home_container">
        <img src={home} alt="" />
        <img src={list} alt="" />
      </div>
    </div>
  )
}

export default Icon