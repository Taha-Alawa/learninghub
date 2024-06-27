import { Link } from "react-router-dom"
import social from "../assets/images/whatsapp.png"
import social2 from "../assets/images/instagram.png"
import social3 from "../assets/images/tiktok.png"
import social4 from "../assets/images/snapchat.png"

const Footer = () => {
  return (
    <footer>
      <section className="input">
        <h1>
          Lorem ipsum dolor sit amet.
        </h1>
        <input type="email" name="" id="" />
      </section>
      <section className="footer">
        <div>
          <h2>Learning<span>Hub</span></h2>
          <ul>
            <li><img src={social} alt="" /></li>
            <li><img src={social2} alt="" /></li>
            <li><img src={social3} alt="" /></li>
            <li><img src={social4} alt="" /></li>
          </ul>
        </div>
        <ul>
          <li><h2>Links</h2></li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Service</Link>
          </li>
          <li>
            <Link to="/">Features</Link>
          </li>
          <li>
            <Link to="/">Product</Link>
          </li>
          <li>
            <Link to="/">Testmonial</Link>
          </li>
          <li>
            <Link to="/">FAQ</Link>
          </li>
        </ul>
        <ul>
          <li>
            <h2>Support</h2>
          </li>
          <li>
            <Link to="/">Lorem, ipsum.</Link>
          </li>
          <li>
            <Link to="/">Lorem, ipsum dolor.</Link>
          </li>
          <li>
            <Link to="/">lorem</Link>
          </li>
          <li>
            <Link to="/">Lorem, ipsum.</Link>
          </li>
          <li>
            <Link to="/">lorem</Link>
          </li>
        </ul>
        <h2>Stay up to date</h2>
      </section>
    </footer>
  )
}

export default Footer
