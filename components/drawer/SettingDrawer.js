import React from 'react';
import {Button, View} from 'react-native';

function SettingDrawer({navigation}) {
  const onPress = () => {
    navigation.goBack();
  };
  return (
    <View>
      <Button title={'뒤로가기'} onPress={onPress} />
    </View>
  );
}

export default SettingDrawer;
