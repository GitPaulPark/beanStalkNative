import React from 'react';
import {Button, View} from 'react-native';

function HomeScreen({navigation}) {
  // useEffect(() => {
  //   navigation.setOptions({title: '홈'});
  // }, [navigation]);

  const onPress = (path, id) => {
    console.log('on press');
    const info = {
      id: id,
    };
    navigation.push(path, info);
  };

  return (
    <View>
      <Button title={'네비게이션 열기'} onPress={() => onPress('Detail', 1)} />
      <Button title={'Todo 열기'} onPress={() => onPress('Todo', 1)} />
    </View>
  );
}

export default HomeScreen;
