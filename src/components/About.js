import React, { Component } from "react";
import { InView } from "react-intersection-observer";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: document.body.getAttribute("data-theme"),
      picName: document.body.getAttribute("data-pic-name"),
    };
  }

  componentDidMount() {
    // "themeChange" olayını dinle
    window.addEventListener("themeChange", this.handleThemeChange);
  }

  componentWillUnmount() {
    // Olay dinleyiciyi kaldır
    window.removeEventListener("themeChange", this.handleThemeChange);
  }

  handleThemeChange = (event) => {
    const { theme, picName } = event.detail;
    this.setState({ theme, picName }); // State'i güncelle
  };

  render() {
    const { theme } = this.state;

    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about1 = this.props.resumeBasicInfo.description1;
      var about2 = this.props.resumeBasicInfo.description2;
    }

    return (
      <section id="about">
        <div className="col-md-12">

          <h1 style={{ color: "black", fontSize: "31px", marginBottom: "31px" }}>
            <span>{sectionName}</span>
          </h1>
          <div id="about-section">

            <InView
              as="div"
              triggerOnce
              onChange={(inView) => {
                if (inView) {
                  const element = document.getElementById("about-section");
                  element.classList.add("fadeInUp");
                }
              }}
            >
              <div className="row center mx-auto mb-5">
                <div className="col-md-4 mb-5 center">
                  <InView
                    as="div"
                    triggerOnce
                    onChange={(inView) => {
                      if (inView) {
                        const element = document.getElementById("polaroid-photo");
                        element.classList.add("fadeInUp");
                      }
                    }}
                  >
                    <div className="polaroid" id="polaroid-photo">
                      <span style={{ cursor: "auto", paddingTop: "25px" }}>
                        {theme === "dark" ?
                          <img height="200px" src={process.env.PUBLIC_URL + "/images/aboutme/ogiPic.jpeg"} alt="Avatar placeholder" /> :
                          <img height="200px" src={process.env.PUBLIC_URL + "/images/aboutme/ogiPicLight.jpeg"} alt="Avatar placeholder" />
                        }
                      </span>
                    </div>
                  </InView>
                </div>

                <div className="col-md-8 center">
                  <div className="col-md-10">
                    <div className="card">
                      <div className="card-header">
                        <span
                          className="iconify"
                          data-icon="emojione:red-circle"
                          data-inline="false"
                        ></span>{" "}
                        &nbsp;{" "}
                        <span
                          className="iconify"
                          data-icon="twemoji:yellow-circle"
                          data-inline="false"
                        ></span>{" "}
                        &nbsp;{" "}
                        <span
                          className="iconify"
                          data-icon="twemoji:green-circle"
                          data-inline="false"
                        ></span>
                      </div>
                      <div
                        className="card-body font-trebuchet text-justify ml-3 mr-3"
                        style={{
                          height: "auto",
                          fontSize: "132%",
                          lineHeight: "200%",
                        }}
                      >
                        <br />
                        <span className="wave">{hello} :) </span>
                        <br />
                        <br />
                        {about1}
                        <br />
                        {about2}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </InView>

          </div>
        </div>
      </section>
    );
  }
}

export default About;
