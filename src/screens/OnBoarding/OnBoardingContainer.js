import {
    compose,
    hoistStatics,
    withHandlers
} from 'recompose';
import { connect } from 'react-redux';
import OnBoardingScreenView from './OnBoardingScreenView';
import screens from '../../constants/screens';

const mapStateToProps = ({ }) => ({});

const onNavigate = (nav, screen, params) => nav.navigate(screen, params);

const enhance = compose(
    connect(mapStateToProps),
    withHandlers({
        navigate: props => () => onNavigate(props.navigation, screens.Register, { title: 'FREA' }),
    })
);

export default hoistStatics(enhance)(OnBoardingScreenView);