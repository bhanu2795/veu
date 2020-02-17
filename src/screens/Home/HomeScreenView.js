import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { Text } from '../../components';
import s from './styles';

data = [
    {
        airline: 'AirIndia',
        from: 'Delhi',
        to: 'Mumbai',
        date: new Date(),
        derparture: '18:00',
        arrival: '20:20'
    },
    {
        airline: 'AirIndia',
        from: 'Delhi',
        to: 'Mumbai',
        date: new Date(),
        derparture: '18:00',
        arrival: '20:20'
    },
    {
        airline: 'AirIndia',
        from: 'Delhi',
        to: 'Mumbai',
        date: new Date(),
        derparture: '18:00',
        arrival: '20:20'
    },
    {
        airline: 'AirIndia',
        from: 'Delhi',
        to: 'Mumbai',
        date: new Date(),
        derparture: '18:00',
        arrival: '20:20'
    },
    {
        airline: 'AirIndia',
        from: 'Delhi',
        to: 'Mumbai',
        date: new Date(),
        derparture: '18:00',
        arrival: '20:20'
    },
    {
        airline: 'AirIndia',
        from: 'Delhi',
        to: 'Mumbai',
        date: new Date(),
        derparture: '18:00',
        arrival: '20:20'
    },
    {
        airline: 'AirIndia',
        from: 'Delhi',
        to: 'Mumbai',
        date: new Date(),
        derparture: '18:00',
        arrival: '20:20'
    }
];

const Home = ({
    ...props
}) => (
        <View style={s.root}>
            <SafeAreaView />
            <ScrollView>
                <View style={s.screenContainer}>
                    <Text>Home</Text>
                </View>
            </ScrollView>
        </View>
    );

// Home.navigationOptions = ({ navigation }) => ({
//     headerLeft: (
//         <TouchableOpacity
//             onPress={() => navigation.openDrawer()}
//         >
//             <Feather
//                 name={'menu'}
//                 size={25}
//                 color={colors.first}
//             />
//         </TouchableOpacity>
//     ),
//     headerLeftContainerStyle: {
//         paddingHorizontal: 10,
//     },
//     headerStyle: {
//         backgroundColor: colors.fourth,
//     },
//     headerTitleAllowFontScaling: true,
//     headerTitle: <HeaderTitle title={'Home'} titleStyle={{
//         textTransform: 'uppercase',
//         color: colors.first
//     }} />
//     // title: 'Home'
// });

Home.propTypes = {
    // onSignIn: T.func,
};

export default Home;