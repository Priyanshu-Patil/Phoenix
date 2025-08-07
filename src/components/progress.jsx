import PropTypes from "prop-types";

const circularProgress = ({ classes = '', size = ''}) => {
    return (
        <div role="progressbar" className={`circular-progress ${size} ${classes}`}></div>
    )
}

circularProgress.propTypes = {
    classes: PropTypes.string,
    size: PropTypes.string,
}

export {circularProgress};