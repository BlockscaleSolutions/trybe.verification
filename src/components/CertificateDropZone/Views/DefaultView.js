import PropTypes from "prop-types";
import css from "./viewerStyles.scss";

const View = ({ hover, accept }) => (
  <div
    className={`${css["viewer-container"]} ${
      // eslint-disable-next-line no-nested-ternary
      hover ? (accept ? css.accept : css.invalid) : css.default
    }`}
    style={{ borderRadius: 40 }}
  >
    <div className={css["image-container"]}>
      <i>
        <img
          alt=".opencert Dropzone"
          src="/static/images/convergence-icon.png"
        />
      </i>
    </div>
    {accept ? null : (
      <div>
        File cannot be read. Please check that you have a valid .opencert file
      </div>
    )}
    <div
      className="text-brand-dark"
      style={{ fontSize: "1.375rem", fontWeight: 500 }}
    >
      Verify your credential here.
    </div>
    {/* <div className="text-muted">to view its contents</div> */}
    <div className="text-muted row">
      <div className="col-2" />
      <div className="col-3">
        <hr />
      </div>
      {/* <div className="col-2">or</div> */}
      <div className="col-3">
        <hr />
      </div>
    </div>
    <div className="text-muted row">
      <div className="mx-auto">
        <button type="button" className={`pointer ${css.btn}`}>
          Select File
        </button>
      </div>
    </div>
  </div>
);

export default View;

View.propTypes = {
  hover: PropTypes.bool,
  accept: PropTypes.bool
};
