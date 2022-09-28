import React from "react";
import { Link } from "react-router-dom"

function Navbarrr() {

    return(
      <nav class="navbar bg-light fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">navbar</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to='/'>Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='aboutApp'>About App</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='aboutAuthor'>About Author</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    );

}

export default Navbarrr