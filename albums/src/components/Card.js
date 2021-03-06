import React from 'react';
import {Platform, View} from 'react-native';

const Card = (props) => {

  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderBottomWidth: 0,
    borderRadius: 2,
    borderColor: '#ddd',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    elevation: 1,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
      }
    })

  }
};

export default Card;