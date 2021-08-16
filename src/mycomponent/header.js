import React from 'react';
import { Link } from 'react-router-dom';
export default function Header(props) {
  let headerStyle = { backgroundColor: '#c78604' };
  return (
    <div>
      {/* navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={headerStyle}
      >
        <div className="container-fluid" style={headerStyle}>
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* navbar */}
    </div>
  );
}

Header.defaultProps = {
  title: ' your title here'
};
