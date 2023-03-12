import './button.scss';
const BUTTON_TYPE_CLASSES = {
  goolge: 'google-sign-in',
  inverted: 'inveerted',
};

const butoon = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default butoon;
