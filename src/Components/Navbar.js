import React from 'react'
//import PropTypes from 'prop-types';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.tittle}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a class="nav-link" href="#">home</a>
          <a class="nav-link" href="#">Features</a>
          <a class="nav-link disabled">Disabled</a>
          <a className="nav-link" href="/About us"> {props.Features}</a>
          

        </div>
      </div>
      </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input my-3" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label my-2" for="flexSwitchCheckDefault"> Mode</label>
</div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input my-3" onClick={props.AnotherMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label my-2" for="flexSwitchCheckDefault"> Mode</label>
</div>
  </nav>
  
  )
}

/*
Navbar.proptypes = {
  tittle:PropTypes.string.isRequired,
  Features:PropTypes.string.isRequired
};

Navbar.deafaultProps = {
  tittle:"no tittle",
  Features:"hello"
}

// deafaultProps exiCutes when no One prop runs*/