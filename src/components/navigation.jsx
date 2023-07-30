
import { Route, Routes, Link } from "react-router-dom";
export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container-fluid'>
        <div className='navbar-header'>
        <Link to='/'><img src={process.env.PUBLIC_URL + '/img/PAlogo.png'}  className="iconv" alt="Logo" /></Link>
        <Link to='/'><img src={process.env.PUBLIC_URL + '/img/Prayoga.png'}  className="headv" alt="Logo" /></Link>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
          <li>
              <Link to='/gallery'>
                Our Work
              </Link>
            </li>
            <li>
              <Link to='/ourservices' >
                Services
              </Link>
            </li>
            <li>
              <Link to='/about'>
                About Us
              </Link>
            </li>
            <li>
              <Link to='/contact' >
                Contact Us
              </Link>
            </li>
            {/* <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/ourservices" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Services
              </Link>
              <div className="dropdown-menu" id="dropmenu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/allprojects">All Projects</Link>
                <Link className="dropdown-item" to="/interiors">Interiors</Link>
                <Link className="dropdown-item" to="/archandint">Architecture + Interiors</Link>
                <Link className="dropdown-item" to="/architecture">Architecture</Link>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}
