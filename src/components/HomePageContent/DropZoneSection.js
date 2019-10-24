import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CertificateDropzone from "../CertificateDropZone";
import css from "./dropZoneSection.scss";
import { updateCertificate } from "../../reducers/certificate";
import { trace } from "../../utils/logger";
import { IS_MAINNET } from "../../config";
import MAIN from "./Main-Demo";
import ROPSTEN from "./Ropsten-Demo";
import { analyticsEvent } from "../Analytics/index";

const DEMO_CERT = IS_MAINNET ? MAIN : ROPSTEN;
const DEMO_CONTENT_KEY = "DEMO_CONTENT";

function demoCount() {
  analyticsEvent(window, {
    category: "USER_INTERACTION",
    action: "DEMO_CERTIFICATE_VIEWED"
  });
}

const DraggableDemoCertificate = () => (
  <div className="d-none d-lg-block">
    <div className="row">
      <div className="col">
        <div
          className={css.pulse}
          draggable="true"
          onDragStart={e => e.dataTransfer.setData(DEMO_CONTENT_KEY, true)}
          onDragEnd={demoCount}
        >
          <a
            href={`data:text/plain;,${JSON.stringify(DEMO_CERT, null, 2)}`}
            download="demo.opencert"
            rel="noindex nofollow"
          >
            <img
              style={{ cursor: "grabbing" }}
              src="/static/images/dropzone/cert.png"
              width="100%"
            />
          </a>
        </div>
      </div>
      <div className="col">
        <img
          src="/static/images/dropzone/arrow.png"
          width="100%"
          draggable="false"
        />
        <span
          style={{
            textAlign: "justify",
            color: "#ff9933"
          }}
        >
          Drag me over here to see a demo certificate and other features
        </span>
        {/* <img
          src="/static/images/opencertslogo.svg"
          width="100%"
          draggable="false"
        /> */}
      </div>
    </div>
  </div>
);

const MobileDemoCertificate = () => (
  <div className="d-block d-lg-none d-xl-none">
    <a
      className="btn btn-primary btn-lg"
      role="button"
      draggable="false"
      id="demoClick"
      style={{
        background: "#28a745",
        border: "none",
        cursor: "pointer"
      }}
      onClick={demoCount}
    >
      Click me for a demo certificate!
    </a>
  </div>
);

class DropZoneSection extends Component {
  async componentDidMount() {

    let API_LOCATION
    const PUBLIC_ROUTE = 'public/cert'
    
    const url = window.location.href
    // const certParams = url.split(VER_PATH)[1]
    const query = url.split('?')[1]
    const [id, network] = query.split('#')

    // If there is a cert id to look up
    if (query) {
      // Network IDs: undefined=prod, 2=staging, dev=local
      if (!network) {
        API_LOCATION = 'https://certs.api.convergence.tech:3002'
      } else if (network==2) {
        API_LOCATION = 'http://169.48.26.238:3002'
      } else  if (network=='dev') {
        API_LOCATION = 'http://localhost:3002'
      }

      const API_URL = `${API_LOCATION}/${PUBLIC_ROUTE}`

      try {
        const certString = await fetch(`${API_URL}/${id}`)
        const cert = certString ? JSON.parse((await certString.json()).cert) : null

        if (cert) {
          this.props.updateCertificate(cert);
        }
      } catch (err) {
        // ...
        console.error(err)
      }
    }

    document.getElementById("demoDrop").addEventListener("drop", e => {
      if (e.dataTransfer.getData(DEMO_CONTENT_KEY)) {
        this.props.updateCertificate(DEMO_CERT);
      }
    });
    document.getElementById("demoClick").addEventListener("click", () => {
      this.props.updateCertificate(DEMO_CERT);
    });
  }

  componentWillUnmount() {
    document
      .getElementById("demoDrop", "demoClick")
      .removeEventListener("drop", () => this.removeListener());
  }

  removeListener = () => trace("drop listener removed");

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="row p-5 bg-brand-dark text-white">
        <div className={css.main}>
          <div className="col-lg-5 col-md-12">
            <div className={css.description}>
              <h1>An easy way to check and verify your certificates</h1>
              <p>
                Whether you&#39;re a student or an employer, Convergence lets you
                verify the certificates you have of anyone from any institution.
                All in one place.
              </p>
              <DraggableDemoCertificate />
              <MobileDemoCertificate />
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12" id="demoDrop">
            <CertificateDropzone />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCertificate: payload => dispatch(updateCertificate(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(DropZoneSection);

DropZoneSection.propTypes = {
  updateCertificate: PropTypes.func
};
