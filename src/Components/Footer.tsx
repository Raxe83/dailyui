import type React from "react"
import { Link } from "react-router-dom"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Rayden | Studio</h3>
            <p className="text-gray-400">Professionelle Webseiten für Ihren Erfolg – Modern, Sicher, Individuell.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-400 text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Privacy" className="hover:text-gray-400 text-white transition duration-300">
                  Datenschutz
                </Link>
              </li>
              {/* <li>
                <Link to="#" className="hover:text-gray-400 text-white transition duration-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-400 text-white transition duration-300">
                  FAQ
                </Link>
              </li> */}
            </ul>
          </div>
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-gray-400 text-white transition duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-400 text-white transition duration-300">
                  Forum
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-400 text-white transition duration-300">
                  Showcase
                </Link>
              </li>
            </ul>
          </div> */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              {/* <li>
                <Link to="#" className="hover:text-gray-400 text-white transition duration-300">
                  Twitter
                </Link>
              </li> */}
              <li>
                <Link to="#" className="hover:text-gray-400 text-white transition duration-300">
                  Instagram
                </Link>
              </li>
              {/* <li>
                <Link to="#" className="hover:text-gray-400 text-white transition duration-300">
                  LinkedIn
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2023 Rayden | Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

