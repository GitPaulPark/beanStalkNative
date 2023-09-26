import React, {useRef} from 'react';
import {View, StyleSheet, TextInput, StatusBar, Text, ScrollView} from "react-native";
import {get} from "react-native/Libraries/TurboModule/TurboModuleRegistry";

function Result({ result, scrollViewRef, phoneHeight, target, operator}) {
    const getValue = (val) => {
        if (Math.abs(parseInt(val)) > 0) {
            return val;
        } else {
            return '';
        }
    }

    const fontSize = result.length >= 11 ? 40 : 60;
    const visibleResult = parseInt(result) ? result : target;
    const expression = `${getValue(target)} ${operator} ${getValue(result)}`

    return (
        <View style={[styles.resultBox, {height: phoneHeight * 0.25}]}>
            <View style={[styles.preview, {height: phoneHeight * 0.065}]}>
                <Text style={styles.previewText}>{expression}</Text>
            </View>
            <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollContainer} horizontal>
                <View style={styles.resultDetail}>
                    <Text style={[styles.resultText, {fontSize}]}>{visibleResult}</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    resultBox: {
        width: '100%',
        backgroundColor: '#26a69a',
        padding: 15,
        paddingHorizontal: 24,
    },
    preview: {
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    previewText: {
        color: '#d7d7d7',
        fontWeight: '600',
    },
    resultDetail: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    resultText: {
        color: '#f6f6f6',
        fontWeight: '600',
    },
});
export default Result;