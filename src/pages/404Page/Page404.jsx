import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import "./Page404.css";
import Image404 from "../../assets/404Image.webp";
import { Link } from "react-router-dom";

const Page404 = () => {
  const [collapse, setCollapse] = useState(false);
  useEffect(() => {
    setCollapse(false);
  }, []);
  return (
    <div>
      <NavBar setCollapse={setCollapse} />
      <div className="flex">
        <SideBar collapse={collapse} />
        <main className="main-container flex flex-col items-center">
          <figure className="img-404-container">
            <img src={Image404} alt="404-page-keep" className="img-404" />
          </figure>
          <h1 className="title-404">Uh oh...</h1>
          <p className="content-404">
            We can't find the page you are looking for.
          </p>
          <Link to="/" className="back-to-home-btn link">
            Back to home
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Page404;
