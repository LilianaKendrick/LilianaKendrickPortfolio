import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://avatars3.githubusercontent.com/u/57776892?s=460&u=f39c2577a9a5b4a82d9ec47c6a10e333add8201b&v=4"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Liliana Kendrick</h2>
            <h4 style={{ color: "grey" }}>Junior Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Qualifications ability to work independently with minimal
              supervision, a huge effective team player. Good interpersonal,
              problem solving and decision making skills. Ability to follow oral
              and written instructions. Understanding policy and regulations
              regarding public assistance programs. Bilingual, fluent in only
              verbal communications (Spanish and English). Computers skills,
              Advanced in Windows, Microsoft Word, Excel, Office Procedures,
              Outlook, and Spreadsheet and more..
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>06450</p>
            <h5>Phone</h5>
            <p>(203)600-8767</p>
            <h5>Email</h5>
            <p>lilianakendrick@gmail.com</p>
            <h5>Web</h5>
            <p>https://github.com/LilianaKendrick</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2019}
              endYear={2020}
              schoolName="Unconn"
              schoolDescription="Web Developer, HTML, CSS, Javascript,MySql, Node,React, Java"
            />

            <Education
              startYear={2013}
              endYear={2014}
              schoolName="Lincoln Culinary Arts"
              schoolDescription="Professional Pastry and Baking  Basic Vocational Certificate: Culinary Management Coursework in Business, Restaurant and Hotel Management Emphasis in Fine Pastry Emphasis in Cakes Completed 1,080 hours, Program Credits 37.50."
            />

            <Education
              startYear={2009}
              endYear={2012}
              schoolName="O.H Platt High School"
              schoolDescription="Baking & Business & Child Care  Courses in: Food Preparation, Kitchen Management, Patisserie and Confectionery, International Cuisine, Nutrition courses, Emphasis in Business Administration."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={2020}
              jobName="Gkn Aerospace , Perform Technician"
              jobDescription="Perform equipment setup, operation, equipment adjustments and minor preventative maintenance tasks to meet all standards for safety, quality and efficiency. Run tests on all assemblies and equipment to test for safety and productivity before they are put into production. Required to use hard gages including mics, calipers, pin gages, etc. As well as to read & interpret & customer documents and drawings, including the use of interpret drawing. Perform equipment setup, operation, equipment adjustments and minor preventative maintenance tasks to meet all standards for safety, quality and efficiency. Run tests on all assemblies and equipment to test for safety and productivity before they are put into production. "
            />

            <Experience
              startYear={2019}
              endYear={2019}
              jobName="Philips Respironics , Assembler and Inspector"
              jobDescription="As an assembly worker, we use components in accordance to written specifications; perform visual or other inspections of components to ensure product quality  using hard gages including mics, calipers, pin gages. As well as solder certain pieces. Laser machine operator required to carefully monitor machine inserts and remove each individual piece from the machine. Safely monitored equipment. Performed quality checks. "
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={50} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="NodeJS" progress={50} />
            <Skills skill="React" progress={25} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
