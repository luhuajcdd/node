'use strict'
import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";


class PageJumpB extends React.Component {
    static navigationOptions = {
        title: 'Detail',
    };
    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>

                <Button style={styles.button}
                        title="Go to Details... again"
                        onPress={() => this.props.navigation.push('Details', {
                            itemId: Math.floor(Math.random() * 100),
                        })}
                />
                <Button style={styles.button}
                        title="Go to Demo"
                        onPress={() => this.props.navigation.navigate('Demo')}
                />
                <Button style={styles.button}
                        title="Go back"
                        onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}

//定义的styleSheet 以便布局中引用
var styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', },
    textsty: { fontSize: 20, textAlign: 'center', margin: 50, },
    button: {fontSize: 20,margin: 10,},
});


export default PageJumpB