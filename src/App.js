import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import SelectedWork from "./components/SelectedWork";
import LiveSites from "./components/LiveSites";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }

  applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
    this.swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    var resumePath =
      document.documentElement.lang === window.$primaryLanguage
        ? `res_primaryLanguage.json`
        : `res_secondaryLanguage.json`;
    this.loadResumeFromPath(resumePath);
  }

  swapCurrentlyActiveLanguage(oppositeLangIconId) {
    var pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;
    document
      .getElementById(oppositeLangIconId)
      .removeAttribute("filter", "brightness(40%)");
    document
      .getElementById(pickedLangIconId)
      .setAttribute("filter", "brightness(40%)");
  }

  componentDidMount() {
    this.loadSharedData();
    this.applyPickedLanguage(
      window.$primaryLanguage,
      window.$secondaryLanguageIconId
    );
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      <div>
        <div
          className="col-md-12 mx-auto language"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          <span className="number" style={{ cursor: "pointer", marginLeft: "10px" }} onClick={() => { window.location.href = "mailto:ogi.kahraman@hotmail.com" }}
          >ogi.kahraman@hotmail.com</span>
          <a className="cv-download" href="/Ogulcan_Kahraman_CV.pdf" download="Ogulcan_Kahraman_CV.pdf">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v12m-4-4 4 4 4-4M5 16v4h14v-4" />
            </svg>
            <span>{this.state.resumeData.basic_info?.cv_download_label || 'CV'}</span>
          </a>
          <div className="text-right" style={{ display: "flex", alignItems: "center" }}>
            <div
              onClick={() =>
                this.applyPickedLanguage(
                  window.$primaryLanguage,
                  window.$secondaryLanguageIconId
                )
              }
              style={{ marginRight: "10px", cursor: "pointer" }}
            >
              <span
                className="iconify language-icon"
                data-icon="twemoji-flag-for-flag-turkey"
                data-inline="false"
                id={window.$primaryLanguageIconId}
              ></span>
            </div>
            <div
              onClick={() =>
                this.applyPickedLanguage(
                  window.$secondaryLanguage,
                  window.$primaryLanguageIconId
                )
              }
              style={{ marginRight: "10px", cursor: "pointer" }}
            >
              <span
                className="iconify language-icon"
                data-icon="twemoji-flag-for-flag-united-kingdom"
                data-inline="false"
                id={window.$secondaryLanguageIconId}
              ></span>
            </div>
          </div>
        </div>

        <Header
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedData={this.state.sharedData.basic_info}
        />
        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <SelectedWork content={this.state.resumeData.selected_work} />
        <LiveSites content={this.state.resumeData.live_sites} />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Skills
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Footer
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />

      </div>
    );
  }
}

export default App;
