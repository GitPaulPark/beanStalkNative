import React, {useEffect, useRef, useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {getSpeech} from './speech.util';
import Tts from 'react-native-tts';
import {TTSGY_UTIL} from "../common/util/TTSUtil";
import {base64toBlob} from "../common/util/BlobUtil";
import Sound from 'react-native-sound';


const placeHolderText = '할말을 입력하세요.(한글만)';
const returnKeyTypeText = 'done';

function HomeTts() {
  const [text, setText] = useState('');
  const [audioType, setAudioType] = useState('');
  const [sound, setSound] = useState(null);
  useEffect(() => {
    // window.speechSynthesis.getVoices();
    return ()=>{
      if (sound) {
        sound.release();
      }
    }
  }, [sound]);

  const onPress = event => {
    console.log(text);
    event.preventDefault();
  };

  const onTts = () => {
    const voice = "en_GB-semaine-medium";
    TTSGY_UTIL.requestAudio(text,"ko",voice,playTTS);
  }

  const playTTS = (result) => {
    if (result)  {
      const audioBlob = base64toBlob(result.voice_base64,audioType);
      const audioUrl = URL.createObjectURL(audioBlob);
      const soundObject = new Sound(audioUrl, null, (error) => {
        if (error) {
          console.error('Error loading sound:', error);
        } else {
          // Play the sound
          soundObject.play(() => {
            // Release the sound when playback is finished
            soundObject.release();
          });
        }
      })

      }
  }


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
      <View>
        <Button title="Play Audio" onPress={onTts} />
      </View>

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
