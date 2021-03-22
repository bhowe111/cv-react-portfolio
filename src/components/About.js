import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="s-about target-section">
        <div className="row">
          <div className="column large-3 tab-12">
            <img
              className="s-about__pic"
              src="images/bhowe-studio.jpeg"
              alt=""
            />
          </div>
          <div className="column large-9 tab-12 s-about__content">
            <h3>About Me</h3>
            <p>
              Hello there! I'm a full-stack software engineer experienced in{" "}
              <span>
                gathering, analyzing and compiling information from disparate
                resources into engaging products.
              </span>{" "}
              My background in the service industry, education, journalism, and
              nonprofit radio informs my problem-solving approach of doing more
              with less.
            </p>

            <p>
              I am most interested in working with organizations actively
              involved in projects to make societies sustainable and equitable.
            </p>

            <p>
              I write, conduct, record, and produce interviews with innovators
              in business technology and the arts. I also play folk rock and go
              bouldering.
            </p>
            <br />
            <div className="row s-about__content-bottom">
              <div className="column w-1000-stack">
                <h3>Contact</h3>
                <p>
                  <a href="mailto:brendan.howe1@gmail.com">
                    brendan.howe1@gmail.com
                  </a>
                </p>
              </div>
              <div className="column w-1000-stack">
                <a href="#0" className="btn btn--download">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    style={{
                      fill: "rgba(0, 0, 0, 1)",
                      transform: "",
                      msFilter: "",
                    }}
                  >
                    <path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z" />
                    <path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z" />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* end row */}
      </section>{" "}
      {/* end s-about */}
    </>
  );
};

export default About;
