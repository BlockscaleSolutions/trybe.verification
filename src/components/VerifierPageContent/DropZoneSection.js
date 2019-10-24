import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CertificateDropzone from "../CertificateDropZone";
import css from "./dropZoneSection.scss";
import { updateCertificate } from "../../reducers/certificate";

class DropZoneSection extends Component {
  async componentDidMount() {
    let API_LOCATION
    const VER_PATH = '/c/'
    const PUBLIC_ROUTE = 'public/cert'
    
    const url = window.location.href
    const certParams = url.split(VER_PATH)[1]
    const [id, network] = certParams.split('?')
    
    // If there is a cert id to look up
    if (id) {
      // Network IDs: 1=prod, 2=staging
      if (network==1) {
        API_LOCATION = 'https://certs.api.convergence.tech:3002'
      } else if (network==2) {
        API_LOCATION = 'http://169.48.26.238:3002'
      } else  {
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
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="row p-5 bg-brand-dark text-white">
        <div className={css.main}>
            <CertificateDropzone />
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
