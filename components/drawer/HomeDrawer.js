import React from 'react';
import {Button, View} from 'react-native';

function HomeDrawer({navigation}) {
  return (
    <View>
      <Button title={'Drawer 열기'} onPress={() => navigation.openDrawer()} />
      <Button
        title={'Setting 열기'}
        onPress={() => navigation.navigate('Setting')}
      />
      <Button title={'Todo 열기'} onPress={() => navigation.navigate('Todo')} />
      <Button title={'Tts 열기'} onPress={() => navigation.navigate('Tts')} />
    </View>
  );
}

export default HomeDrawer;
