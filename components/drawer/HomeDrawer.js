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
      <Button title={'계산기 열기'} onPress={() => navigation.navigate('Calculator')} />
      <Button title={'redux 연습 열기'} onPress={() => navigation.navigate('StateManage')} />
      <Button title={'Mobx 연습 열기'} onPress={() => navigation.navigate('Mobx')} />
      <Button title={'Mobx2 연습 열기'} onPress={() => navigation.navigate('Mobx2')} />
      <Button title={'녹음기 열기'} onPress={() => navigation.navigate('VoiceRecorder')} />
    </View>
  );
}

export default HomeDrawer;
