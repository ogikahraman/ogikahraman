import React, { Component } from "react";
import { InView } from "react-intersection-observer";

class Projects extends Component {
  render() {

    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map((projects, index) => {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span className="portfolio-item d-block">
              <InView
                as="div"
                triggerOnce
                onChange={(inView) => {
                  if (inView) {
                    const element = document.getElementById(`project-${index}`);
                    element.classList.add("fadeSlideUp");
                  }
                }}
              >
                <div
                  className="foto"
                  id={`project-${index}`}
                  style={{ opacity: 0 }}
                >
                  <div>
                    <p className="project-title-settings mt-5">
                      {projects.title}
                    </p>
                    <p className="project-subtitle-settings mt-3">
                      {projects.subtitle}
                    </p>
                    <p className="project-desc-settings mt-3" dangerouslySetInnerHTML={{
                      __html: projects.description.replace(/\n/g, "<br/>")
                    }} style={{ minHeight: "26vh" }}
                    >
                    </p>
                  </div>
                </div>
              </InView>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1
            className="section-title"
            style={{ color: "black", fontSize: "31px" }}
          >
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
