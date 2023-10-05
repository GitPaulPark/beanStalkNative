import React, {useEffect, useState} from 'react';
import {StyleSheet, Button, View, Text} from "react-native";
import AudioRecorderPlayer from 'react-native-audio-recorder-player';



function VoiceRecorder() {
    const [audioRecorderPlayer] = useState(new AudioRecorderPlayer());
    const [isRecording, setIsRecording] = useState(false);
    const [audioPath, setAudioPath] = useState('');

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

    const onStartPlay = async () => {
        await audioRecorderPlayer.startPlayer(audioPath);
    };

    const onStopPlay = async () => {
        await audioRecorderPlayer.stopPlayer();
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{isRecording ? '녹음 중' : '녹음 대기'}</Text>
            <Button
                title={isRecording ? '녹음 중지' : '녹음 시작'}
                onPress={isRecording ? onStopRecord : onStartRecord}
            />
            <Button title="재생 시작" onPress={onStartPlay} />
            <Button title="재생 중지" onPress={onStopPlay} />
        </View>
    );
}

const styles = StyleSheet.create({
});


export default VoiceRecorder;