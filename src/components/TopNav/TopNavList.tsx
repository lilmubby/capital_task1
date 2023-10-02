import pipe from "../../assets/Vector 292.png"
import angle from "../../assets/Vector 55.png"
const TopNavList = () => {
  return (
    <>
      {
        [
          {
            name: "Program Details",
          },
          {
            name: "Application Form",
            src: angle
          },
          {
            name: "WorkFlow",
            src: pipe
          },
          {
            name: "Preview",
          },
        ].map((item : any, index: number) => (
          
            <li key={index} className={item.src ? `img${index}` : ""}>
              {item.name}
            {/* {item.src && <img src={item.src} alt="" /> } */}
            </li>
        
        ))
      }
    </>
  )
}

export default TopNavList