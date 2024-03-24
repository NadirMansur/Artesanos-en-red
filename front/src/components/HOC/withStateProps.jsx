
import PropTypes from 'prop-types';

const withStateProps = (Component) => {
  const WithStateProps = (props) => {
    const { state: newArt } = props;

    return <Component {...props} state={newArt} />;
  };

  WithStateProps.propTypes = {
    state: PropTypes.object.isRequired,
  };

  return WithStateProps;
};

export default withStateProps;