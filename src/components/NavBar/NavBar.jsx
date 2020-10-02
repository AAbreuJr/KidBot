import React, {Link} from 'react';
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
    return (
    <>
      {user ?
        <nav className="navbar-nav">
          <div>
            <span className="navbar-brand">
             <div className="d-flex justify-content-around"> {user.name} </div> 
             <div><a href="/games">Your Games</a></div>
              <div><a href="/addgame">Add A Game</a></div>
              <div><a href="/math-game">Math</a></div>
              <div><a href="/science-game">Science</a></div>
              <div><a href="/ss-game">Social Studies</a></div>
              <a className='logoutBtn' href='/' onClick={handleLogout}>
                Log Out
              </a>
              </span>
            </div>
        </nav>
      :
        <nav>
          <div className="nav-wrapper">
            <span  className="navbar-brand">
              <div className=""><a href="/login" ></a></div>
              
              <div><a href="/signup" className="nav-link"></a></div>
            </span>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar;