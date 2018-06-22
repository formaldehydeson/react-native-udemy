// Import libraries for making a component
import React from 'react';
import { View, Text, Platform } from 'react-native';

// Make a component
const Header = ({headerText}) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    position: 'relative',
    ...Platform.select({
      ios: {
        marginTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2
      },
      android: {
        marginTop: 25,
        elevation: 2
      }
    })
  },
  textStyle: {
    fontSize: 20
  }
};


// Make the component available to other parts of the app
export { Header };