import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, ListItem, Icon} from "@rneui/base";

function CustomListItemButton({navigation, icon, title, navigate}) {
    return (
        <ListItem bottomDivider style={styles.listItem} onPress={() => navigation.navigate(navigate)}>
            <Icon name={icon} color='gray'/>
            <ListItem.Content>
                <ListItem.Title>{title}</ListItem.Title>
            </ListItem.Content>
            <Icon name="chevron-right" color="gray"/>
        </ListItem>
    );
}

const styles = StyleSheet.create({
    listItem: {
        marginBottom: 4
    },
});

export default CustomListItemButton;
