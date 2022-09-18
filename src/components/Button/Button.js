import PropTypes from 'prop-types';

export default function Button({
  title, buttonClass, handleClick, id
}) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={buttonClass}
      data-testid={id}
    >
      { title }
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.string,
};

Button.defaultProps = {
  id: 'button'
};
