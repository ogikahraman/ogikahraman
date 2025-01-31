import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.resumeBasicInfo) {
      var networks = this.props.resumeBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4 text-center d-inline-block">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class} style={{ fontSize: "4rem", display: "block" }}></i>
              <p style={{ marginTop: "0.5rem" }}>{network.name}</p>
            </a>
          </span>
        );

      });
    }


    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.contactus;
    }

    return (
      <footer>
        <div className="col-md-12">
          <div className="social-title">{sectionName}</div>

          <div className="social-links">{networks}</div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>

                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.name
                  : "???"}{" "}
                &copy;{" Copyright"}
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
