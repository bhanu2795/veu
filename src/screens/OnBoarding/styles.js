import { StyleSheet, Dimensions, Platform } from 'react-native';
import { dimensions, colors, fontSizes, fontWeights } from '../../styles';
import { doubleIndent } from '../../styles/dimensions';

const { width, height } = Dimensions.get('window');
const { indent, halfIndent } = dimensions;

const styles = StyleSheet.create({

    root: {
        flex: 1,
        backgroundColor: colors.primary
    },

    content: {
        flex: 1,
        padding: indent
    },

    innerContent: {
        width: '100%'
    },
    
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    title: {
        textTransform: 'uppercase',
        fontSize: fontSizes.big
    },
    
    image: {
        marginRight: halfIndent,
        width: 24
    },
    
    innerTitle: {
        marginBottom: indent
    },
    
    innerContentContainer: {
        padding: indent,
        alignItems: 'center',
        marginBottom: halfIndent,
        backgroundColor: colors.white,
        flexDirection: 'row'
    },

    text: {
        textTransform: 'capitalize'
    },

    titleContainer: {
        paddingVertical: indent
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
    }

});

export default styles;