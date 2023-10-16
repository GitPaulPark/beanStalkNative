import React, {useEffect, useState} from 'react';
import {StyleSheet, Button, View, Text, Alert} from "react-native";
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import RNFS from 'react-native-fs';
import axios from "axios";



function VoiceRecorder() {
    const [audioRecorderPlayer] = useState(new AudioRecorderPlayer());

    const [isRecording, setIsRecording] = useState(false);
    const [audioPath, setAudioPath] = useState('');
    const [contentsAudio, setContentsAudio] = useState('');

    const onStartRecord = async () => {
        const result = await audioRecorderPlayer.startRecorder();
        setIsRecording(true);
        setAudioPath(result);
    };

    const onStopRecord = async () => {
        const result = await audioRecorderPlayer.stopRecorder();
        setIsRecording(false);
        setAudioPath(result);
    };

    const onStartPlay = async (audio) => {
        if (!!audio) {
            console.log(audio);
            await audioRecorderPlayer.startPlayer(audio);
        } else {
            const cancelButton = {
                text: '확인',
                onPress: () => {},
                style: 'cancel',
            };
            const options = {
                cancelable: true,
                onDismiss: () => {},
            };
            Alert.alert("오류", "재생할 오디오가 존재하지 않습니다.", [cancelButton], options);
        }
    };

    const onStopPlay = async () => {
        await audioRecorderPlayer.stopPlayer();
    };

    const onContentsDownload = () => {
        const downloadFileName = "test.wav";
        axios.get('http://localhost:8080/api/external/files/audio', {
            params: { selectedFileName: downloadFileName },
            headers: { 'Content-Type': 'audio/wav' },
            responseType: 'arraybuffer'
        })
            .then(async (response) => {
                const uint8Array = new Uint8Array(response.data);
                const fileData = new Blob([uint8Array], { type: 'audio/wav' });
                const filePath = await saveBlobToFile(RNFS.DocumentDirectoryPath + '/test.wav', fileData);
                if (filePath) {
                    setContentsAudio(filePath);
                }
            })
            .catch((error) => {
                console.error('Error get audio file:', error);
            });
    }

    const saveBlobToFile = async (filePath, fileData) => {
        try {
            await RNFS.writeFile(filePath, fileData).then((success) => {
                console.log('FILE WRITTEN!');
            })
            .catch((err) => {
                console.log(err.message);
            });
            return filePath;
        } catch (error) {
            console.error('saveBlobToFile Error: ', error);
            return null;
        }
    }


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{isRecording ? '녹음 중' : '녹음 대기'}</Text>
            <Button
                title={isRecording ? '녹음 중지' : '녹음 시작'}
                onPress={isRecording ? onStopRecord : onStartRecord}
            />
            <Button title="재생 시작" onPress={() => onStartPlay(audioPath)} />
            <Button title="재생 중지" onPress={onStopPlay} />
            <Button title="콘텐츠 다운" onPress={onContentsDownload} />
            <Button title="콘텐츠 삭제" onPress={onStopPlay} />
            <Button title="콘텐츠 재생" onPress={() => onStartPlay(contentsAudio)} />
        </View>
    );
}

const styles = StyleSheet.create({
});


export default VoiceRecorder;
