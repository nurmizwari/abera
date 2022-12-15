import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-lg bg-light">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <img
                src="https://backend-service.abera.id/apis/images/profile/1659013315203085300.png"
                alt="gambar"
                width={118}
                className="me-3"
              />
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Partner
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Portofolio
                </a>
              </li>
            </ul>
            <div className="dd">
              <button
                type="submit"
                className="btn  rounded-pill "
                style={{
                  background: "#205887",
                  color: "white",
                  paddingRight: "30px",
                  paddingLeft: "30px",
                }}
              >
                Company Profile
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
