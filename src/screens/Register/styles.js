import { StyleSheet, Dimensions, Platform } from 'react-native';
import { dimensions, colors, fontSizes, fontWeights } from '../../styles';

const { width, height } = Dimensions.get('window');
const { indent, halfIndent, doubleIndent } = dimensions;


const styles = StyleSheet.create({

    root: {
        flex: 1,
        backgroundColor: colors.primary
    },

    content: {
        flex: 1,
        padding: indent
    },

    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageContainer: {
        marginVertical: indent
    },

    innerContent: {
        width: '100%'
    },

    innerTitle: {
        marginBottom: indent
    },

    text: {
        textTransform: 'capitalize'
    },

    containerStyle: {
        // marginVertical: dimensions.verticalIndent / 2,
        width: '100%'
    },

    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: colors.shadowColor,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
            },
            android: {
                elevation: 1,
            },
        })
    },

});

export default styles;