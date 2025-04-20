import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="container">
      <header className="header">
        <div className="name-container">
          <Link to="/" className="square-link">
            <div className="square-icon"></div>
          </Link>
        </div>
        <nav className="nav">
          <Link to="/">home</Link>
          <Link to="/publications">publications</Link>
          <Link to="/projects">projects</Link>
          <Link to="/misc">misc</Link>
        </nav>
      </header>
      <Outlet />
      <footer className="footer">
        © 2025 by Jolie Kim | Last updated: 04/2025
      </footer>
    </div>
  )
}

export default Layout 