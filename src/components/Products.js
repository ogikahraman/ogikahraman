import React, { Component } from "react";
import { InView } from "react-intersection-observer";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });

    if (this.props.resumeProducts && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.products;
      var products = this.props.resumeProducts.map((products, index) => {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={products.title}
            style={{ cursor: "pointer" }}
          >
            <span className="products-item d-block">
              <InView
                as="div"
                triggerOnce
                onChange={(inView) => {
                  if (inView) {
                    const element = document.getElementById(`product-${index}`);
                    element.classList.add("swingIn");
                    element.style.opacity = 1;
                  }
                }}
              >
                <div
                  className="foto"
                  onClick={() => detailsModalShow(products)}
                  id={`product-${index}`}
                  style={{ opacity: 0 }}
                >
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + products.images}
                      alt="productsImages"
                      height="auto"
                      style={{
                        marginBottom: 0,
                        paddingBottom: 0,
                        position: "relative",
                        maxWidth: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <br />
                    <p className="products-title-settings mt-3">
                      {products.title}
                    </p>
                    <p className="products-desc-settings mt-3">
                      {products.description}
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
      <section id="products">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black", fontSize: "31px" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{products}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Products;
