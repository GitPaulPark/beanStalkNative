import React, {useState} from 'react';
import {View, StyleSheet, Text, Platform, TouchableOpacity, TouchableNativeFeedback, Vibration} from "react-native";
import InputButton from "./InputButton";

const CalculatorElements = ['C', '.', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', '0', '000', '='];

function KeyArea({result, setResult, phoneWidth, phoneHeight, scrollToRight, target, setTarget, operator, setOperator}) {

    const setNumber = (num) => {
        if (parseInt(result) === 0 && parseInt(num) === 0) {
            setResult('0');
        } else if(isNaN(num) && num !== '.' && num !== '=') {
            if (num === 'C') {
                setTarget(0);
                setOperator('');
            } else {
                setTarget(result);
                setOperator(num);
            }
            setResult('0');
        } else if(num === '=') {
            if (target && operator && result) {
                let expression = `${target} ${operator} ${result}`;
                setResult(eval(expression.replaceAll(/,/g, '')).toLocaleString());
                setTarget(0);
                setOperator('');
            }
        } else {
            if (result[result.length - 1] !== '.' || num !== '.') {
                if (parseInt(result) === 0) {
                    setResult(num.toLocaleString());
                } else {
                    const pureResult = result.toString().concat(num).replaceAll(/,/g, '');
                    if (pureResult.length <= 16) {
                        const setLocaleResult = parseInt(pureResult).toLocaleString();
                        setResult(setLocaleResult);
                    }
                }
            }
        }
        Vibration.vibrate(100);
        scrollToRight();
    }

    return (
        <View style={[styles.keyboardArea, {height: phoneHeight * 0.75}]}>
            {Platform.OS === 'ios' ?
                CalculatorElements.map((el, key) => {
                    return <TouchableOpacity activeOpacity={0.5} key={key} onPress={() => setNumber(el)}>
                        <InputButton phoneWidth={phoneWidth} operator={isNaN(el)} number={el}/>
                    </TouchableOpacity>
                }) :
                CalculatorElements.map((el, key) => {
                    return (
                        <TouchableNativeFeedback key={key} onPress={() => setNumber(el)}>
                            <InputButton phoneWidth={phoneWidth} operator={isNaN(el)} number={el}/>;
                        </TouchableNativeFeedback>
                    );
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    keyboardArea: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 21,
        backgroundColor: '#f6f6f6',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default KeyArea;