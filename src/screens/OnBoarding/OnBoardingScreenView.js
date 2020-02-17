import React from 'react';
import { View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import T from 'prop-types';

import s from './styles';
import { Text } from '../../components';
import email from '../../assets/images/Email.png';
import google from '../../assets/images/Gmail.png';
import fb from '../../assets/images/Facebook.png';

const OnBoarding = ({
    navigate,
    ...props
}) => (
        <View style={s.root}>
            <SafeAreaView />
            <View style={[s.center, s.titleContainer]}>
                <Text style={s.title}>frea</Text>
            </View>
            <View style={[s.content, s.center]}>
                <View style={[s.innerContent, s.innerTitle]}>
                    <Text style={s.text}>Sign up</Text>
                </View>
                <TouchableOpacity style={[s.innerContent]} onPress={() => navigate()}>
                    <View style={[s.innerContent, s.innerContentContainer, s.shadow]}>
                        <Image style={s.image} source={email} />
                        <Text style={s.text}>email</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[s.innerContent]} onPress={() => navigate()}>
                    <View style={[s.innerContent, s.innerContentContainer, s.shadow]}>
                        <Image style={s.image} source={google} />
                        <Text style={s.text}>google</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[s.innerContent]} onPress={() => navigate()}>
                    <View style={[s.innerContent, s.innerContentContainer, s.shadow]}>
                        <Image style={s.image} source={fb} />
                        <Text style={s.text}>facebook</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );

OnBoarding.navigationOptions = ({
    header: null
});

OnBoarding.propTypes = {
    navigate: T.func,
    _onDone: T.func
};

export default OnBoarding;