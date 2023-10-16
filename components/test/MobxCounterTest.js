import React, {useContext, useEffect} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
// import ObserverWrapper from "../store/mobx/ObserverWrapper";
import { inject, observer } from "mobx-react";

function MobxCounterTest (props) {
    const counterStore = props.counterStore;

    useEffect(() => {
        console.log("📗 :",props.counterStore.counterStore);
        return () => {
        };
    }, []);

        // const { count, increment, decrement } = useCounterStore();


        const onPressIncrease = () => {
            console.log("onPressIncreaseBy mobx");
            counterStore.increment();
        }
        const onPressDecrease = () => {
            console.log("onPressDecrease mobx");
            counterStore.decrement();
        }

        return (
            <View style={styles.block}>
                <Text style={styles.text}>Mobx Count  </Text>
                <View style={styles.buttonBlock}>
                    <Button title={' - 1 '} onPress={onPressDecrease} />
                    <Button title={' + 1 '} onPress={onPressIncrease} />
                </View>
                <Text style={styles.smallText}> {counterStore.count}</Text>
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

export default inject('counterStore')(observer(MobxCounterTest));
