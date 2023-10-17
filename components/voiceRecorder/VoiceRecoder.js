import React, {useEffect, useState} from 'react';
import {StyleSheet, Button, View, Text, Alert} from "react-native";
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import RNFS from 'react-native-fs';
import { fromByteArray } from 'base64-js';
import axios from "axios";



function VoiceRecorder() {
    const [audioRecorderPlayer] = useState(new AudioRecorderPlayer());

    const [isRecording, setIsRecording] = useState(false);
    const [audioPath, setAudioPath] = useState('');
    const [contentsAudio, setContentsAudio] = useState('');

    const onStartRecord = async () => {
        const result = await audioRecorderPlayer.startRecorder();
        setIsRecording(true);
        console.log("📗 record result :",result);
        setAudioPath("");
    };

    const onStopRecord = async () => {
        const result = await audioRecorderPlayer.stopRecorder();
        console.log("📗 record stop result :",result);
        setIsRecording(false);
        setAudioPath(result);
        console.log("📗 : ",audioPath);
    };

    const onStartPlay = async (audio) => {
        console.log(audio);
        if (!!audio) {
            console.log(audio);
            try {
                await audioRecorderPlayer.startPlayer(audio);
            } catch (e) {
                console.warn(e);
            }
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
        console.log("📘 onContentsDownload");

        const downloadFileName = "sound.m4a";
        axios.get('http://192.168.11.27:8080/api/external/files/audio', {
            params: { selectedFileName: downloadFileName },
            responseType: 'arraybuffer'
        })
            .then(async (response) => {
                console.log("📗data :", response.data);
                console.log("📗type :",typeof response.data);
                const uint8Array = new Uint8Array(response.data);
                const fileData = fromByteArray(uint8Array);
                console.log("📗 type ",typeof fileData);
                console.log("📗 path:", RNFS.DocumentDirectoryPath);
                const filePath = await saveBlobToFile(RNFS.DocumentDirectoryPath + '/sound.m4a', fileData);
                if (filePath) {
                    console.log("📗 filePath:", filePath);
                    const fileLocation = "file://" + filePath;
                    console.log("📗  fileLocation :",fileLocation)
                    try {
                        const content = await RNFS.readFile(filePath, 'base64');
                        console.log("📗  content :",content)
                    } catch (e) {
                        console.warn(e);

                    }
                    setContentsAudio( fileLocation);
                }
            })
            .catch((error) => {
                console.error('Error get audio file:', error);
            });
    }

    const saveBlobToFile = async (filePath, fileData) => {
        try {
            await RNFS.writeFile(filePath, fileData,'base64').then((success) => {
                console.log('FILE WRITTEN!');
            })
            .catch((err) => {
                console.warn("📕");
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
