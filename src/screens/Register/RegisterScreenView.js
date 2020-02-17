import React from 'react';
import { View, SafeAreaView, TouchableOpacity } from 'react-native';
import T from 'prop-types';
import s from './styles';
import { Text, HeaderTitle, Input, Button } from '../../components';
import { colors } from '../../styles';
import Feather from 'react-native-vector-icons/Feather';
import { SvgUri } from 'react-native-svg';

const Register = ({
    detail,
    setDetail,
    firstName,
    lastName,
    email,
    password,
    cnfPassword,
    addNewUser,
    ...props
}) => (
        <View style={s.root}>
            <SafeAreaView />
            <View style={[s.content]}>
                <View style={[s.center, s.imageContainer]}>
                    <SvgUri uri={'https://projects.invisionapp.com/assets/19322409/652156783/20B00E0BB689260CF12F126DE8D9AA73646018DB6209DC11A820C3060F2A610A/download?cacheVersion=1'} />
                </View>
                <View style={[s.innerContent, s.innerTitle]}>
                    <Text style={s.text}>Sign up</Text>
                </View>

                <View style={[s.innerContent, s.innerTitle]}>
                    <Input
                        placeholder={'First Name'}
                        maxLength={30}
                        secondContainerStyle={[s.secondContainerStyle]}
                        value={detail.firstName}
                        returnKeyType={'next'}
                        onChangeText={(text) => { setDetail({ ...detail, firstName: text }); }}
                        containerStyle={[s.containerStyle, s.shadow]}
                        onSubmitEditing={() => { inputRefs.qty.focus(); }}
                    />
                </View>

                <View style={[s.innerContent, s.innerTitle]}>
                    <Input
                        placeholder={'Last Name'}
                        maxLength={30}
                        secondContainerStyle={[s.secondContainerStyle]}
                        value={detail.lastName}
                        returnKeyType={'next'}
                        onChangeText={(text) => { setDetail({ ...detail, lastName: text }); }}
                        containerStyle={[s.containerStyle, s.shadow]}
                        onSubmitEditing={() => { inputRefs.qty.focus(); }}
                    />
                </View>

                <View style={[s.innerContent, s.innerTitle]}>
                    <Input
                        placeholder={'Email ID'}
                        maxLength={30}
                        secondContainerStyle={[s.secondContainerStyle]}
                        value={detail.email}
                        returnKeyType={'next'}
                        keyboardType={'email-address'}
                        onChangeText={(text) => { setDetail({ ...detail, email: text }); }}
                        containerStyle={[s.containerStyle, s.shadow]}
                        onSubmitEditing={() => { inputRefs.qty.focus(); }}
                    />
                </View>

                <View style={[s.innerContent, s.innerTitle]}>
                    <Input
                        placeholder={'Create Password'}
                        maxLength={30}
                        secondContainerStyle={[s.secondContainerStyle]}
                        value={detail.password}
                        secureTextEntry={true}
                        returnKeyType={'next'}
                        onChangeText={(text) => { setDetail({ ...detail, password: text }); }}
                        containerStyle={[s.containerStyle, s.shadow]}
                        onSubmitEditing={() => { inputRefs.qty.focus(); }}
                    />
                </View>

                <View style={[s.innerContent, s.innerTitle]}>
                    <Input
                        placeholder={'Repeat Password'}
                        maxLength={30}
                        secondContainerStyle={[s.secondContainerStyle]}
                        value={detail.cnfPassword}
                        secureTextEntry={true}
                        returnKeyType={'done'}
                        onChangeText={(text) => { setDetail({ ...detail, cnfPassword: text }); }}
                        containerStyle={[s.containerStyle, s.shadow]}
                        onSubmitEditing={() => { inputRefs.qty.focus(); }}
                    />
                </View>

                <View style={[s.innerContent, s.innerTitle]}>
                    <Button secondaryOpacity disabled={!(firstName.isValid && lastName.isValid && email.isValid && password.isValid && cnfPassword.isValid)} backgroundColor={colors.black} onPress={() => addNewUser()} titleStyle={s.btnText} title={'SIGN UP'} />
                </View>
            </View>
        </View>
    );

Register.navigationOptions = ({ navigation }) => ({
    headerTitle: <HeaderTitle title={'FREA'} />,
    headerLeft: (
        <TouchableOpacity
            onPress={() => navigation.goBack()}
        >
            <Feather
                name={'arrow-left'}
                size={25}
                color={'#000'}
            />
        </TouchableOpacity>
    ),
    headerLeftContainerStyle: {
        paddingHorizontal: 10,
    },
    headerStyle: {
        backgroundColor: colors.primary
    }
});

Register.propTypes = {
    registerData: T.object.isRequired,
    setRegisterData: T.func.isRequired,
    register: T.func.isRequired,
    navigation: T.object.isRequired,
    keyBoard: T.bool.isRequired,
    inputRefs: T.object.isRequired,
    firstName: T.object.isRequired,
    lastName: T.object.isRequired,
    email: T.object.isRequired,
    password: T.object.isRequired,
    confirmPassword: T.object.isRequired,
    mobileNumber: T.object.isRequired,
    phoneCode: T.object.isRequired,
    props: T.object
};

export default Register;