'use strict';
import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {Actions} from "react-native-router-flux";


class PageJump extends React.Component{
    render() {
        return  (
            <View style={{ flex: 1,justifyContent: 'space-around' }}>
                <Text style={styles.text} onPress={() => Actions.PageJumpA()}>Go to PageJump A</Text>

                <Text style={styles.text} onPress={() => Actions.PageJumpB({
                        'itemId':'111',
                        'otherParam':'dddd'
                    })}
                >Go to PageJump B</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize: 16,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor:'#d7d7d7',
    }
})

export default PageJump