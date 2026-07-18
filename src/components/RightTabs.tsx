import React, { useEffect, useState } from 'react'

export default function RightTabs() {
  const getHash = () => (window.location.hash ? window.location.hash.slice(1) : 'home')
  const [active, setActive] = useState<string>(getHash())

  useEffect(() => {
    const onHash = () => setActive(getHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const links = ['home', 'about', 'projects', 'skills', 'experience', 'contact']

  return (
    <aside className="right-tabs d-none d-md-flex flex-column align-items-center">
      <ul className="nav flex-column">
        {links.map((l) => (
          <li className="nav-item" key={l}>
            <a
              className={`nav-link ${active === l ? 'active' : ''}`}
              href={`#${l}`}
              onClick={() => setActive(l)}
            >
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <a className="btn btn-outline-primary mt-3 d-flex align-items-center" href="/manish-portfolio.md" download>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-download me-2" viewBox="0 0 16 16">
          <path d="M.5 9.9a.5.5 0 0 1 .5.5V14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10.4a.5.5 0 0 1 1 0V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V10.4a.5.5 0 0 1 .5-.5z"/>
          <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.207V10.5a.5.5 0 0 1-1 0V2.207L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
        </svg>
        Resume
      </a>
    </aside>
  )
}
