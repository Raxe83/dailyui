import { useState } from "react"
import { NavItem } from "../Navigation/NavItem"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-gray-50 fixed w-full z-50 text-black shadow-lg">
      <div className="max-w-7xl mx-auto lg:px-8">
        <div className="flex items-center py-4">
          <div className="flex items-center">
            <p className="font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-2xl w-48 text-transparent bg-clip-text cursor-pointer">
              Rayden|Studio
            </p>
          </div>
          <nav className="hidden md:flex">
            <ul className="flex space-x-4">
              <NavItem location={""} locationTitle={"Home"} />
              <NavItem location={"About"} locationTitle={"About"} />
              <NavItem location={"Service"} locationTitle={"Service"} />
              <NavItem location={"Reviews"} locationTitle={"Reviews"} />
              <NavItem location={"contact"} locationTitle={"Contact"} />
            </ul>
          </nav>
          <div className="md:hidden flex items-center ml-auto">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-4 bg-gray-50">
            <ul className="space-y-2">
              <NavItem location={""} locationTitle={"Home"} />
              <NavItem location={"About"} locationTitle={"About"} />
              <NavItem location={"Service"} locationTitle={"Service"} />
              <NavItem location={"Reviews"} locationTitle={"Reviews"} />
              <NavItem location={"contact"} locationTitle={"Contact"} />
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
