import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function DetailScreen({route, navigation}) {
  useEffect(() => {
    navigation.setOptions({
      title: `상세정보 - ${route.params.id}`,
    });
  }, [navigation, route.params.id]);

  const next = () => {
    const nextId = route.params.id + 1;
    const info = {
      id: nextId,
    };
    navigation.navigate('Detail', info);
  };
  const previous = () => {
    const nextId = route.params.id - 1;
    const info = {
      id: nextId,
    };
    navigation.navigate('Detail', info);
  };

  const pushNext = () => {
    const nextId = route.params.id + 1;
    const info = {
      id: nextId,
    };
    navigation.push('Detail', info);
  };
  const pushPrevious = () => {
    const nextId = route.params.id - 1;
    const info = {
      id: nextId,
    };
    navigation.push('Detail', info);
  };

  const backward = () => {
    navigation.pop();
  };
  const goHome = () => {
    navigation.popToTop();
  };
  return (
    <View style={styles.block}>
      <Text style={styles.text}>navigate </Text>
      <View style={styles.buttonBlock}>
        <Button title={'이전'} onPress={previous} />
        <Button title={'다음'} onPress={next} />
      </View>
      <Text style={styles.smallText}>id : {route.params.id}</Text>

      <Text style={styles.text}>----------------</Text>

      <Text style={styles.text}>push</Text>
      <View style={styles.buttonBlock}>
        <Button title={'이전'} onPress={pushPrevious} />
        <Button title={'다음'} onPress={pushNext} />
      </View>
      <Text style={styles.smallText}>id : {route.params.id}</Text>
      <Text style={styles.text}>----------------</Text>
      <View style={styles.buttonBlock}>
        <Button title={'뒤로가기'} onPress={backward} />
        <Button title={'처음으로'} onPress={goHome} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
  },
  smallText: {
    fontSize: 36,
  },
});

export default DetailScreen;
