import { connect } from 'react-redux';
import { compose, hoistStatics } from 'recompose';
import ProfileScreenView from './ProfileScreenView';

const mapStateToProps = ({ register }) => ({
    user: register.addUser
});

const enhance = compose(connect(mapStateToProps));

export default hoistStatics(enhance)(ProfileScreenView);
