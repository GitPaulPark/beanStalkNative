import React, {useEffect, useState} from 'react';
import {StyleSheet, Button, View, Text, Alert, Platform, PermissionsAndroid} from "react-native";
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import RNFS from 'react-native-fs';
import { fromByteArray } from 'base64-js';
import axios from "axios";
import {
    AudioEncoderAndroidType,
    AudioSourceAndroidType,
    AVEncoderAudioQualityIOSType, AVEncodingOption
} from "react-native-audio-recorder-player/index";



function VoiceRecorder() {
    const [audioRecorderPlayer] = useState(new AudioRecorderPlayer());

    const [isRecording, setIsRecording] = useState(false);
    const [audioPath, setAudioPath] = useState('');
    const [contentsAudio, setContentsAudio] = useState('');

    const onStartRecord = async () => {
        let writingPermission;
        let recordingPermission;

        if (Platform.OS === 'android') {
            try {
                const granted = writingPermission = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Permissions for write access',
                        message: 'Give permission to your storage to write a file',
                        buttonPositive: 'ok',
                    },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('You can use the storage');
                    console.log('writing permission : ',writingPermission);
                } else {
                    console.log('permission denied');
                    return;
                }
            } catch (err) {
                console.warn(err);
                return;
            }
        }
        if (Platform.OS === 'android') {
            try {
                const granted = recordingPermission =  await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                    {
                        title: 'Permissions for write access',
                        message: 'Give permission to your storage to write a file',
                        buttonPositive: 'ok',
                    },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('You can use the camera');
                    console.log('recording Permission',recordingPermission);
                } else {
                    console.log('permission denied');
                    return;
                }
            } catch (err) {
                console.warn("📕");
                console.warn(err);
                return;
            }
        }

        const path = Platform.select({
            ios: 'sound.m4a',
            android: '/sdcard/Android/data/com.learnreactnative/cache/sound.mp4',
        });

        const audioSet = {
            AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
            AudioSourceAndroid: AudioSourceAndroidType.MIC,
            AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
            AVNumberOfChannelsKeyIOS: 2,
            AVFormatIDKeyIOS: AVEncodingOption.aac,
        };

        setTimeout(async () => {
            console.log('audioSet', audioSet);
            try {
                console.log("📘");
                const rootPath = Platform.OS === 'ios'
                    ? ''
                    // : ``;
                    : `${RNFS.TemporaryDirectoryPath}/sdcard`;
                console.log("DocumentDirectoryPath :", RNFS.DocumentDirectoryPath);
                console.log("DocumentDirectoryPath :", await RNFS.readdir(RNFS.DocumentDirectoryPath));
                console.log("ExternalStorageDirectoryPath :", RNFS.ExternalStorageDirectoryPath);
                console.log("ExternalStorageDirectoryPath :", await RNFS.readdir(RNFS.ExternalStorageDirectoryPath));
                console.log("TemporaryDirectoryPath :", RNFS.TemporaryDirectoryPath);
                console.log("TemporaryDirectoryPath :", await RNFS.readdir(RNFS.TemporaryDirectoryPath));
                console.log("TemporaryDirectoryPath :", RNFS.TemporaryDirectoryPath+"/sdcard");
                console.log("TemporaryDirectoryPath :", await RNFS.readdir(RNFS.TemporaryDirectoryPath+"/sdcard"));
                console.log("TemporaryDirectoryPath :", RNFS.TemporaryDirectoryPath+"/sdcard/sound");
                console.log("TemporaryDirectoryPath :", await RNFS.readdir(RNFS.TemporaryDirectoryPath+"/sdcard/sound"));

                // console.log("rootPath : ",rootPath);
                // const folderPath = `${rootPath}/sound`;
                // console.log("folderPath : ",folderPath)
                // const folderExists = await RNFS.exists(folderPath);
                // console.log("folderExists : ",folderExists);

                // if (!folderExists) {
                //     console.warn("📙 : folder does not exist.. will be creating a new folder");
                //     try {
                //         console.log(writingPermission === PermissionsAndroid.RESULTS.GRANTED)
                //         if (writingPermission === PermissionsAndroid.RESULTS.GRANTED) {
                //             await RNFS.mkdir(folderPath);
                //         } else {
                //             console.warn("📙 : do not have writing permission");
                //         }
                //     } catch (e) {
                //         console.log("📕 : ",e);
                //         console.log("📕 : ",e.message);
                //     }
                // } else {
                //     console.warn("📘 : folder exists already, will be moving on..");
                // }
                // const filePath = `${folderPath}/sound.${Platform.OS === 'ios' ? 'm4a' : 'mp4'}`;
                // console.log("📘 filePath : ",filePath)
                // const fileExists = await RNFS.exists(filePath);
                // if (!fileExists) {
                //     console.warn(`📙 : File does not exist at path: ${filePath}`);
                // }


                if (recordingPermission === PermissionsAndroid.RESULTS.GRANTED) {
                    const result = await audioRecorderPlayer.startRecorder();
                    console.log("📘📘");
                    setIsRecording(true);
                    console.log("📘📘📘");
                    console.log("📗 record result :", result);
                    setAudioPath(result);
                } else {
                    console.warn(`📙 : do not have recording permission`);
                }
            } catch (e) {
                console.warn("📕📕");
                console.warn(e);
            }
        },2000)
    };

    const onStopRecord = async () => {
        const result = await audioRecorderPlayer.stopRecorder();
        console.log("📗 record stop result :",result);
        // console.log(await RNFS.exists(result));
        // await RNFS.copyFile(result, "/data/data/com.learnreactnative/cache/sdcard/sound/sound.mp4");
        // console.log(await RNFS.exists("/data/data/com.learnreactnative/cache/sdcard/sound/sound.mp4"));
        setIsRecording(false);
        setAudioPath(result);
        console.log("📘 result stat :",RNFS.stat(result));
        const base64Content = await RNFS.readFile(result, 'base64');
        console.log(base64Content.length);
        // await RNFS.writeFile("/data/data/com.learnreactnative/cache/sdcard/sound/sound.mp4", base64Content, 'base64');
        // console.log("📗 to a new folder",await RNFS.exists("/data/data/com.learnreactnative/cache/sdcard/sound/sound.mp4"));
        // const newBase64Content = await RNFS.readFile(result, 'base64');
        // console.log("newBase64Content :",newBase64Content.length);




        // console.log("📗 : ",audioPath);

    };

    const onStartPlay = async (audio) => {
        console.log(audio);
        // const filePath = "/data/data/com.learnreactnative/cache/sdcard/sound/sound.mp4";
        const filePath = audio;
        console.log("📘 file stat : ",RNFS.stat(filePath));

        console.log("📘 filePath : ",filePath)
        const fileExists = await RNFS.exists(filePath);
        console.log("📘 fileExists : ",fileExists);
        if (!fileExists) {
            console.warn(`📙 : File does not exist at path: ${filePath}`);
        }
        if (!!audio) {
            try {
                const path = Platform.select({
                    ios: 'sound.m4a',
                    android: '/data/data/com.learnreactnative/cache/sdcard/sound/sound.mp4',
                });
                console.log("📗 filePath: ",filePath);
                await audioRecorderPlayer.startPlayer(filePath);
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
                        // console.log("📗  content :",content)
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
