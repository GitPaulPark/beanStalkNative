import React from 'react';
import {View, StyleSheet, TextInput, StatusBar, Text} from "react-native";

function InputButton({phoneWidth, operator, number}) {
    const btnWidth = number.length > 1 ? phoneWidth * 0.42 : phoneWidth * 0.20;
    const btnHeight = phoneWidth * 0.20;
    const backGroundColor = operator ? '#66BB6A': '#26a69a';
    return (
        <View style={[styles.numberButton, {width: btnWidth, height: btnHeight, backgroundColor: backGroundColor}]}>
            <Text style={styles.resultText}>{number}</Text>
        </View>
    );
}


InputButton.defaultProps = {
    operator: false,
};

const styles = StyleSheet.create({
    numberButton: {
        margin: 4,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    resultText: {
        color: '#f6f6f6',
        fontWeight: '600',
        fontSize: 40,
    },
});
export default InputButton;