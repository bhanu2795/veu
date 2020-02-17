import {
    compose,
    hoistStatics,
    withState,
    withProps,
    withHandlers
} from 'recompose';
import { connect } from 'react-redux';
import RegisterScreenView from './RegisterScreenView';
import { registerOperations } from '../../modules/Register';
import screens from '../../constants/screens';

const withValidation = withProps(({ detail }) => ({
    firstName: {
        isValid: !!detail.firstName && /^[A-Z]+$/i.test(detail.firstName)
    },
    lastName: {
        isValid: !!detail.lastName && /^[A-Z]+$/i.test(detail.lastName)
    },
    email: {
        isValid: !!detail.email && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(detail.email)
    },
    password: {
        isValid: !!detail.password && detail.password.length > 6
    },
    cnfPassword: {
        isValid: detail.password === detail.cnfPassword
    },
}));

const onNavigate = (nav, screen, params) => nav.navigate(screen, params);

const enhance = compose(
    connect(null, { ...registerOperations }),
    withState('detail', 'setDetail', {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        cnfPassword: ''
    }),
    withHandlers({
        addNewUser: props => async () => {
            await props.addNew(props.detail);
            await onNavigate(props.navigation, screens.TabRoot);
        }
    }),
    withValidation
);

export default hoistStatics(enhance)(RegisterScreenView);