import { Navbar } from "flowbite-react";
import Logo from "./Logo"
import Searchbar from "./Searchbar"
export default function MainNavbar() {
  return (
    <Navbar
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href="https://ffcam.fr">
        <Logo />
      </Navbar.Brand>

      <Searchbar />

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          href="/"
          active={true}
        >
          Accueil
        </Navbar.Link>
        <Navbar.Link href="/a-propos">
          A propos
        </Navbar.Link>
        <Navbar.Link href="/contact">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

  )
}
