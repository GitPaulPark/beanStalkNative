import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {getSpeech} from './speech.util';
import Tts from 'react-native-tts';

function HomeTts() {
  const [text, setText] = useState('');
  const placeHolderText = '할일을 입력하세요.';
  const returnKeyTypeText = 'done';
  useEffect(() => {
    // window.speechSynthesis.getVoices();
    Tts.setDefaultLanguage('en-IE');
    Tts.setDefaultVoice('com.apple.voice.compact.en-IE.Moira');
    // Tts.setDefaultRate(0.6);
    // Tts.setDefaultPitch(1.5);
    // Tts.addEventListener('tts-start', event => console.log('start', event));
    // Tts.addEventListener('tts-finish', event => console.log('finish', event));
    // Tts.addEventListener('tts-cancel', event => console.log('cancel', event));
    Tts.getInitStatus().then(resolve => {
      const voices = Tts.voices().then(voice => {});
    });
  }, []);

  const onPress = event => {
    console.log(text);
    event.preventDefault();

    Tts.speak(text, {
      iosVoiceId: 'com.apple.voice.compact.en-IE.Moira',
      rate: 0.5,
    });
  };
  const onTts = text => {
    getSpeech(text);
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

export default HomeTts;
