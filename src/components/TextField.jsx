import PropTypes from 'prop-types';

const TextField = ({
  classes = '',
  helperText,
  label,
  name,
  placeholder = ' ',
  fieldclasses = '',
  ...rest
}) => {
  return (
    <div className={`text-field-wrapper ${classes}`}>
      <input
        className={`text-field ${fieldclasses}`}
        id={name}
        name={name}
        placeholder={placeholder} // floating label ke liye ek space
        {...rest}
      />

      <label
        htmlFor={name}
        className="label-text"
      >
        {label}
      </label>

      {helperText && <p className="helper-text">{helperText}</p>}
    </div>
  );
};

TextField.propTypes = {
  classes: PropTypes.string,
  helperText: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  fieldclasses: PropTypes.string,
};

export default TextField;