import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <h1>
          About Page
          <h2>
            <p>
              {" "}
              <div style={{ textAlign: "center" }}>
                <img
                  src="https://avatars3.githubusercontent.com/u/57776892?s=460&u=f39c2577a9a5b4a82d9ec47c6a10e333add8201b&v=4"
                  alt="avatar"
                  style={{ height: "200px" }}
                />
              </div>
              Hello, my name is Liliana Kendrick and I am a Aerospace Technician
              , full time mommy , full time worker an a part time college
              student at Uconn. GKN is to manufacture composite parts for both
              commerical and miltary aircrafts I attended O.H Platt High School
              , in Meriden, CT graduated class of 2009. In 2014, I graduated
              from Lincoln Culinary Arts with a Diploma in Culinary Arts &
              Professional Pastries. Today, I am moving forth my education on
              Full Stack Development through the UCONN coding bootcamp. I hope
              to one day become a working developer alongside an aerospace
              quality technician. In my free time, you can find me spending most
              of my time with my daughter, Leilani and my family.
            </p>
          </h2>
        </h1>
      </div>
    );
  }
}

export default About;
