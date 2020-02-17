import React from 'react';
import { View } from 'react-native';
import Text from '../Text';

import s from './styles';

const Card = ({
  title,
  containerSize,
  children,
  ...props
}) => (
    <View style={[s.containerStyle, s.shadow, containerSize ? containerSize : s.containerSize]}>
      {
        !!title &&
        <View>
          <Text style={s.titleText}>{title}</Text>
        </View>
      }
      <View>
        {children}
      </View>
    </View>
  );

Card.propTypes = {
};

export default Card;
