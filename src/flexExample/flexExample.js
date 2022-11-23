import React from 'react';
import {Text, View} from 'react-native';

const UseStateExample = () => {
  return (
    <View
      style={{
        backgroundColor: 'green',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <Text style={{backgroundColor: 'yellow'}}>Hello</Text>
      <Text style={{backgroundColor: 'yellow'}}> Varshini.</Text>
      <Text style={{backgroundColor: 'yellow'}}> How are you?</Text>
    </View>
  );
};

export default UseStateExample;
