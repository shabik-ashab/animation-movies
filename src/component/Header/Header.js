import React from 'react';
import './header.css'
const Header = () => {
    return (
        <div className="header mb-5">
            <div className="container d-flex">
            <div className="ms-5">
                <p className="header-txt "><span>A</span>nime Flex</p>
            </div>
            <ul class="nav header-nav mt-4 ">
  <li class="nav-item ">
    <a class="nav-link text-light" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-light" href="#">What,s on</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-light" href="#">News</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-light">Contact Us</a>
  </li>
</ul>
            </div>
        <div className="text-center text-light pb-2">
          <h2>Exsiting Animation Movies In Best Price</h2>
          <h4>Subscription Only 50$ MOnth</h4>
        </div>
        </div>
    );
};

export default Header;