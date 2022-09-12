import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChevronDown } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  return (
    <sec tion id="side-nav" className="">
      <div className="side-nav-content">
      <a className="navbar-brand text-light fw-bold px-4" href="#">
          Dashboard
        </a>
        <ul className="nav-list">
          <li className="nav-list-item">
              <a
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                className="mainList"
              >
                <span><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></span><span> Home</span>
                <span><FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></span>
              </a>
              <ul class="collapse side-dropdown" id="collapseExample">
                 <li><a href="#">Home 1</a></li>
                    <li><a href="#">Home 2</a></li>
                    <li><a href="#">Home 3</a></li>
            </ul>
          </li>
          <li className="nav-list-item">
            <a 
            data-bs-toggle="collapse"
            href="#collapseExample3"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
             className="mainList">
            <span><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></span><span> About</span>
                <span><FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></span>
            </a>
            <ul class="collapse side-dropdown" id="collapseExample3">
                    <li><a href="#">About 1</a></li>
                    <li><a href="#">About 2</a></li>
                    <li><a href="#">About 3</a></li>
            </ul>
          </li>
          <li className="nav-list-item">
            <a href="" className="mainList">
            <span><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></span><span> Contact</span>
            <span><FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></span>
            </a>
          </li>
        </ul>
      </div>
    </sec>
  );
};

export default Sidebar;
