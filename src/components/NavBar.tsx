import React, { useEffect, useState } from 'react'
import { FiDownload, FiMenu, FiX } from 'react-icons/fi'

export default function NavBar() {
  const getHash = () => (window.location.hash ? window.location.hash.slice(1) : 'home')
  const [active, setActive] = useState<string>(getHash())

  useEffect(() => {
    const onHash = () => setActive(getHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const links = ['home', 'about', 'projects', 'skills', 'experience', 'contact']
  const [menuOpen, setMenuOpen] = useState(false)

  const onNavigate = (link: string) => {
    setActive(link)
    setMenuOpen(false)
  }

  return (
    <header className="top-nav bg-white border-bottom position-relative">
      <div className="container d-flex align-items-center justify-content-between py-2">
        <button
          type="button"
          className="btn btn-outline-secondary d-md-none mobile-menu-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

        <nav className="d-none d-md-flex">
          <ul className="nav">
            {links.map((l) => (
              <li className="nav-item" key={l}>
                <a
                  className={`nav-link ${active === l ? 'active' : ''}`}
                  href={`#${l}`}
                  onClick={() => onNavigate(l)}
                >
                  {l.charAt(0).toUpperCase() + l.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="d-flex align-items-center gap-2">
          <a className="btn btn-primary d-flex align-items-center" href="/Resume.pdf" download>
            <FiDownload className="me-2" />
            Resume
          </a>
        </div>
      </div>

      <div className={`mobile-nav d-md-none ${menuOpen ? 'open' : ''}`}>
        <ul className="nav flex-column">
          {links.map((l) => (
            <li className="nav-item" key={l}>
              <a
                className={`nav-link ${active === l ? 'active' : ''}`}
                href={`#${l}`}
                onClick={() => onNavigate(l)}
              >
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
