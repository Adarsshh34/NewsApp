import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  const toggleMode=()=>{
    if(props.mode==="light"){
      props.setMode("dark");
      document.body.style.backgroundColor = "#041a2b";
    }
    else{
      props.setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  
  return (
    <>
    {/* navbar-${props.mode} bg-${props.mode} */}
    {/* `navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} */}
        <nav className={`navbar bg-${props.mode} navbar-${props.mode} fixed-top navbar-expand-lg`} >
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Newsjet App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active arrow" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active arrow" aria-current="page" to="/business">bussiness</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active arrow" aria-current="page" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active arrow" aria-current="page" to="/general">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active arrow" aria-current="page" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active arrow" aria-current="page" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active arrow" aria-current="page" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active arrow" aria-current="page" to="/technology">Technology</Link>
        </li>
        
        
        
      </ul>
      <form className="d-flex" role="search">
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={toggleMode}/>
          <label className={`text-${props.mode==="dark"?"light":"dark"} `} htmlFor="flexSwitchCheckChecked">set {props.mode==="light"?"dark":"light"} mode</label>
        </div>
        {/* {`text-${props.mode} bg-${props.mode}`}  */}
        
      </form>
    </div>
  </div>
</nav> 
    </>
  )
}
