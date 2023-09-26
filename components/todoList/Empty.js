import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function Empty() {
  const image = require('../../assets/images/young_and_happy.png');
  return (
    <View style={styles.block}>
      {image && (
        <Image source={image} style={styles.image} resizeMode={'contain'} />
      )}
      <Text style={styles.description}>야호! 할일이 없습니다!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
  image: {
    width: 240,
    height: 179,
    marginBottom: 16,
  },
});
export default Empty;
