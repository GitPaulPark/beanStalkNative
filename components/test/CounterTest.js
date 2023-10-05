import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrease, decreaseBy, increase, increaseBy} from "../store/firstReducer";
import {Button, StyleSheet, Text, View} from "react-native";

function CounterTest () {
    const value = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    const onPressIncrease = () => {
            dispatch(increase());
    }
    const onPressIncreaseBy = (number) => {
            dispatch(increaseBy(number))
    }
    const onPressDecrease = () => {
            dispatch(decrease());
    }
    const onPressDecreaseBy = (number) => {
        if (number) {
            dispatch(decreaseBy(number))
        }
    }

    return (
        <View style={styles.block}>
            <Text style={styles.text}>navigate </Text>
            <View style={styles.buttonBlock}>
                <Button title={' - 5 '} onPress={()=>onPressDecreaseBy(5)} />
                <Button title={' - 1 '} onPress={onPressDecrease} />
                <Button title={' + 1 '} onPress={onPressIncrease} />
                <Button title={' + 5 '} onPress={()=>onPressIncreaseBy(5)} />
            </View>
            <Text style={styles.smallText}> {value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonBlock: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 48,
    },
    smallText: {
        fontSize: 36,
    },
});

export default CounterTest
