import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {observer} from "mobx-react";

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

export default (observer(SettingDrawer));
