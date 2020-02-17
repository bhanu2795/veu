import { StyleSheet, Dimensions } from 'react-native';
import { dimensions, colors, fontSizes, fontWeights } from '../../styles';
import { doubleIndent } from '../../styles/dimensions';

const { indent, halfIndent } = dimensions;
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({

    root: {
        flex: 1
    },

    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default styles;
