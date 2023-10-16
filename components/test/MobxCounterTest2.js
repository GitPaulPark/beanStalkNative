import React, {useContext, useEffect} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
// import ObserverWrapper from "../store/mobx/ObserverWrapper";
import {inject, observer} from "mobx-react";
import {useCounterStore} from "../store/mobx/CounterStore";


function MobxCounterTest2 (props) {
    const userStore = props.UserStore;
    useEffect(() => {
        console.log("mount -");
        console.log("counterStore2 :",userStore);
        return () => {
            console.log("unmount -");
            console.log("counterStore2 :",userStore);
        };
    }, []);


    const onPressIncrease = () => {
        console.log("onPressIncreaseBy mobx");
        userStore.increment();

    }
    const onPressDecrease = () => {
        console.log("onPressDecrease mobx");
        userStore.decrement();
    }

    return (
        <View style={styles.block}>
            <Text style={styles.text}>UserCount </Text>
            <View style={styles.buttonBlock}>
                <Button title={' - 1 '} onPress={onPressDecrease} />
                <Button title={' + 1 '} onPress={onPressIncrease} />
            </View>
            <Text style={styles.smallText}> {userStore.user.name}</Text>
            <Text style={styles.smallText}> {userStore.user.age}</Text>
            <Text style={styles.smallText}> {userStore.user.height}</Text>
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

export default inject('UserStore')(observer(MobxCounterTest2));
