import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomListItemButton from "../common/CustomListItemButton";

function HomeDrawer({navigation}) {
  return (
    <View style={{marginHorizontal: 10, marginTop: 20}}>
      <CustomListItemButton navigation={navigation} icon={'menu'} title={'Drawer 열기'} navigate={'Todo'}/>
      <CustomListItemButton navigation={navigation} icon={'settings'} title={'Setting 열기'} navigate={'Setting'}/>
      <CustomListItemButton navigation={navigation} icon={'todo'} title={'Todo 열기'} navigate={'Todo'}/>
      <CustomListItemButton navigation={navigation} icon={'menu'} title={'계산기 열기'} navigate={'Calculator'}/>
      <CustomListItemButton navigation={navigation} icon={'menu'} title={'Mobx 연습 열기'} navigate={'Mobx'}/>
      <CustomListItemButton navigation={navigation} icon={'menu'} title={'Mobx 객체 연습 열기'} navigate={'Mobx2'}/>
      <CustomListItemButton navigation={navigation} icon={'menu'} title={'녹음기 열기'} navigate={'VoiceRecorder'}/>
    </View>

  );
}

export default HomeDrawer;
