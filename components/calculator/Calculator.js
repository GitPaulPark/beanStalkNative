import React, {useRef, useState} from 'react';
import {View, StyleSheet, StatusBar, Dimensions, Text} from "react-native";
import Result from "./Result";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import KeyArea from "./KeyArea";

function Calculator() {
    const [result, setResult] = useState('0');
    const [target, setTarget] = useState(0);
    const [operator, setOperator] = useState('');

    const {top} = useSafeAreaInsets();

    const scrollViewRef = useRef(null);

    const phoneWidth = Dimensions.get('window').width;
    const phoneHeight = Dimensions.get('window').height - top;

    const scrollToRight = () => {
        setTimeout(() => scrollViewRef.current.scrollToEnd({ animated: true }), 100);
    };

    return (
        <>
            <View style={[styles.statusBar, {height: top}]}/>
            <StatusBar style={styles.statusBar}/>
            <Result result={result}
                    target={target}
                    operator={operator}
                    phoneHeight={phoneHeight}
                    scrollViewRef={scrollViewRef}
            />
            <KeyArea phoneWidth={phoneWidth}
                     phoneHeight={phoneHeight}
                     setResult={setResult}
                     result={result}
                     scrollToRight={scrollToRight}
                     target={target}
                     setTarget={setTarget}
                     operator={operator}
                     setOperator={setOperator}
            />
        </>
    );
}

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: '#26a69a',
    },
});


export default Calculator;