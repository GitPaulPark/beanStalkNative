import React, {useState} from 'react';
import {
  Image,
  Keyboard,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function AddTodo({onInsert}) {
  const [text, setText] = useState('');

  const placeHolderText = '할일을 입력하세요.';
  const returnKeyTypeText = 'done';
  const image = require('../../assets/icons/add_white/add_white.png');
  const button = (
    <View style={styles.buttonStyle}>
      <Image source={image} />
    </View>
  );

  const onPress = event => {
    event.preventDefault();
    onInsert(text);
    setText('');
    Keyboard.dismiss();
    console.log(text);
  };

  return (
    <View style={styles.block}>
      <TextInput
        placeholder={placeHolderText}
        value={text}
        style={styles.input}
        onChangeText={setText}
        onSubmitEditing={onPress}
        returnKeyType={returnKeyTypeText}
      />

      {Platform.select({
        ios: (
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            {button}
          </TouchableOpacity>
        ),
        android: (
          <View style={styles.circleWrapper}>
            <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
              {button}
            </TouchableOpacity>
          </View>
        ),
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#26a69a',
    borderRadius: 24,
  },
  circleWrapper: {
    overflow: 'hidden',
    borderRadius: 24,
  },
});

export default AddTodo;
