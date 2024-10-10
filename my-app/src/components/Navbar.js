import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";


export default function Navbar(props) {


  let mycolor = {
    color : 'pink',
    backgroundColor : 'black'
  }


  return (
  
    <div>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-${props.mode}`}>
        <div className="container-fluid">
          <a className={`navbar-brand text-${props.modeText}`} href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"

          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" text aria-current="page" style={{color:props.textColor === 'white'?'black':'white'}} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text" style={{color:props.textColor === 'white'?'black':'white'}} to="/">About</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
            
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              
              /> */}
                {/* <button type="button" className="btn btn-light" onClick={changeModeOfBack}>{props.mode}</button> */}
                <div class={`form-check form-switch text-${props.modeText}`}>
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle} />
              <label class="form-check-label" for="flexSwitchCheckDefault">{props.modeText}</label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired, ///this prop type is of string cannot change its datatye or pass any other datatpe
  aboutText : PropTypes.string.isRequired,
};

// Navbar.defaultProps ={
//   title : 'set text',
//   aboutText : 'about text',
// }

