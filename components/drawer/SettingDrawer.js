import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {useCounterStore} from "../store/mobx/CounterStore";
import {observer} from "mobx-react";

function SettingDrawer({navigation}) {
  const { count, init,increment,yesInit,willInit } = useCounterStore();
  useEffect(()=>{
      // init();
    console.log("did mount")
  return () => {
    console.log("will unmount")
    increment();

  }},[])

  useEffect(()=>{
    init();
  },[willInit])
  const onPress = () => {
    navigation.goBack();
    yesInit();
  };
  return (
    <View>
      <Button title={'뒤로가기'} onPress={onPress} />

      <View><Text>{count}</Text></View>
    </View>
  );
}

export default (observer(SettingDrawer));
