import NavbarStyle from "../scss/Navbar.module.scss"

const Navbar = () => {
  return (
    <div className={NavbarStyle.navbar}>

        <a href="#a">About Us</a>
        <a href="#s">For You</a>
        <a href="#d">Services</a>
        <a href="#f">Blog</a>
        <a href="#g">Vlog</a>
        <a href="#h">Contact</a>
      
    </div>
  )
}

export default Navbar
