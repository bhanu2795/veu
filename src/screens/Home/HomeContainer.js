import { connect } from 'react-redux';
import { compose, hoistStatics, withHandlers } from 'recompose';
import HomeScreenView from './HomeScreenView';
import screens from '../../constants/screens';

const mapStateToProps = state => ({});

const onNavigate = (nav, screen, params) => nav.navigate(screen, params);

const enhance = compose(
    connect(mapStateToProps)
);

export default hoistStatics(enhance)(HomeScreenView);
