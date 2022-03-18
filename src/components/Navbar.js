// type rfc and enter, to write react-function-component automatically.
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {  //props
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <link className="navbar-brand" to="/">{props.title}</link>  it works 8) */}
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">{props.content}</Link>    it works 9) */}
              <a className="nav-link active" aria-current="page" href="#">{props.content}</a>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/about">{props.xyz}</Link>         it works 10) */}
              <a className="nav-link" href="#">{props.xyz}</a> 
              {/* if we use <a> tag instead of <Link> and 'href' instead of 'to' , then the page will reload on clicking these options, which is not desired because will take more time, thus in react better to use <Link to=""> instead of <a href=""> */}
            </li>
          </ul>
          {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary" type="submit">Search</button>
            </form> */}
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.changeMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

//prop types
Navbar.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  xyz: PropTypes.string
}
//default props
Navbar.defaultProps = {
  title: 'TextUtils',
  content: 'Home',
  xyz: 'AboutUs'
}