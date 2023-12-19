import React from 'react';
import { Text } from 'react-native';

export default function Title({
  text,
  textColor,
  marginTop = 0,
  fontSize = 20,
}) {
  return (
    <Text
      style={{
        color: textColor,
        fontSize: fontSize,
        fontWeight: 'bold',
        marginTop: marginTop,
        textAlign: 'justify',
      }}
    >
      {text}
    </Text>
  );
}
