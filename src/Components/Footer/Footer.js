import React ,{useEffect ,useState} from "react"
import footer from '../pic/Footer.png'
import './Footer.css'

 const Footer = () => {
     // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
   // This function will scroll the window to the top 
   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });}
    return (
        
            <footer>
                <div className='footer'>
                    <img className="fotimg" src={footer} alt='footer'></img>
                </div>
                {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
            </footer>
    )
}

export default Footer