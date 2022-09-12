import React from "react";
import Header from "../component/Header/Header";
import "../component/Dasboard.css";
import Sidebar from "../component/Sidebar/Sidebar";
const Dashboard = () => {
   
  return (
    <div className="">
      <div >
      <div id="#content">
        <a  data-bs-toggle="collapse"
                href="#collapseExample2"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                ><Header></Header></a>  
      </div>
      <div class="collapse " id="collapseExample2">
      <Sidebar></Sidebar>
      </div>
      </div>
      <main>
          
          <div className="display-area p-3">
            <p className="fs-1 fw-bold fst-italic">Main display area</p>
          </div>
      </main>
    </div>
  );
};

export default Dashboard;
