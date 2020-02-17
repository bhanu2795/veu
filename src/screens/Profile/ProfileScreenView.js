import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Text, Card } from '../../components';
import s from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Profile = ({
    user
}) => (
        <View style={s.root}>
            <SafeAreaView />
            <View style={[s.center, s.titleContainer]}>
                <Text style={s.title}>your profile</Text>
            </View>

            <View style={[s.content, s.center]}>
                <Card containerSize={[s.cardContainer]}>
                    <View>
                        <View style={s.profileContainer}>
                            <View style={s.profileImage}></View>
                        </View>
                        <View style={s.profileContainer}>
                            <Text style={s.ownerText}>{user.firstName + ' ' + user.lastName}</Text>
                        </View>
                    </View>

                    <View>
                        <View>
                            <View style={s.locationTitle}>
                                <Text style={s.locationTitleText}>My Location</Text>
                            </View>
                            <View style={s.location}>
                                <Text style={s.locationText}>Saket, New Delhi - 110028</Text>
                            </View>
                        </View>

                        <View style={[s.options, { borderTopWidth: 1 }]}>
                            <View style={s.optionIcons}>
                                <FontAwesome5
                                    name={'box-open'}
                                    size={25}
                                    color={'#000'}
                                />
                            </View>
                            <View>
                                <Text style={s.optionText}>My Orders</Text>
                            </View>
                        </View>
                        <View style={s.options}>
                            <View style={s.optionIcons}>
                                <FontAwesome5
                                    name={'chevron-up'}
                                    size={25}
                                    color={'#000'}
                                />
                            </View>
                            <View>
                                <Text style={s.optionText}>My Giveways</Text>
                            </View>
                        </View>
                        <View style={s.options}>
                            <View style={s.optionIcons}>
                                <FontAwesome5
                                    name={'heart'}
                                    size={25}
                                    color={'#000'}
                                />
                            </View>
                            <View>
                                <Text style={s.optionText}>My Favrourites</Text>
                            </View>
                        </View>
                        <View style={s.options}>
                            <View style={s.optionIcons}>
                                <FontAwesome5
                                    name={'cog'}
                                    size={25}
                                    color={'#000'}
                                />
                            </View>
                            <View>
                                <Text style={s.optionText}>Settings</Text>
                            </View>
                        </View>
                    </View>

                </Card>
            </View>
        </View>
    );

Profile.navigationOptions = ({ navigation }) => ({
    header: null
});

Profile.propTypes = {
    // onSignIn: T.func,
};

export default Profile;