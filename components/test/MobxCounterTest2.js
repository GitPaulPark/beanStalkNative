import React, {useContext, useEffect} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
// import ObserverWrapper from "../store/mobx/ObserverWrapper";
import { observer } from "mobx-react";
import {useCounterStore} from "../store/mobx/CounterStore";


function MobxCounterTest2 () {

    const { count, increment, decrement,changeCounting, counterStore } = useCounterStore();


    const onPressIncrease = () => {
        console.log("onPressIncreaseBy mobx");
        increment();
        changeCounting();

    }
    const onPressDecrease = () => {
        console.log("onPressDecrease mobx");
        decrement();
    }

    return (
        <View style={styles.block}>
            <Text style={styles.text}>Mobx Count2 </Text>
            <View style={styles.buttonBlock}>
                <Button title={' - 1 '} onPress={onPressDecrease} />
                <Button title={' + 1 '} onPress={onPressIncrease} />
            </View>
            <Text style={styles.smallText}> {count}</Text>

            <Text style={styles.text}>Mobx Count222 </Text>
            <View style={styles.buttonBlock}>
                <Button title={' + 1 '} onPress={onPressIncrease} />
            </View>
            <Text style={styles.smallText}> {counterStore.counting.length}</Text>
        </View>
    )
};

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

export default (observer(MobxCounterTest2));
