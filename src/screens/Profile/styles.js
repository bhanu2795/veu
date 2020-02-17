import { StyleSheet, Dimensions } from 'react-native';
import { dimensions, colors, fontSizes, fontWeights } from '../../styles';
import { doubleIndent } from '../../styles/dimensions';

const { indent, halfIndent } = dimensions;
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({

    root: {
        flex: 1,
        backgroundColor: colors.primary
    },

    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    title: {
        textTransform: 'uppercase',
        fontSize: fontSizes.big
    },

    titleContainer: {
        paddingVertical: indent
    },

    content: {
        flex: 1,
        padding: indent
    },

    cardContainer: {
        width: '100%',
        flex: 1,
        padding: indent
        // alignItems: 'center'
    },

    profileImage: {
        width: width / 4,
        height: width / 4,
        borderRadius:  (width / 4) / 2,
        backgroundColor: 'red'
    },

    profileContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: doubleIndent
    },

    options: {
        padding: indent,
        borderBottomWidth: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },

    optionText: {
        fontSize: fontSizes.medium,
        textTransform: 'capitalize',
        fontWeight: '300'
    },

    optionIcons: {
        marginRight: indent
    },

    ownerText: {
        fontSize: fontSizes.big,
        textTransform: 'capitalize',
        fontWeight: '600'
    },

    location: {
        borderWidth: 1,
        padding: indent,
        width: '100%',
        marginBottom: indent
    },

    locationTitle: {
        marginBottom: halfIndent
    },

    locationTitleText: {
        fontWeight: '100'
    },

    locationText: {
        fontWeight: '600',
        fontStyle: 'italic',
        textTransform: 'capitalize'
    }

});

export default styles;
