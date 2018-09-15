'use strict'
import React from 'react';
import { ScrollView, Text,View , StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Main extends React.Component{
    render() {
        return (
            <ScrollView>
                <Text style={styles.container_classify_text}>布局</Text>
                <View style={styles.container_classify}>
                    <Text style={styles.item_text}>界面布局</Text>
                </View>

                <Text style={styles.container_classify_text}>Native 调用</Text>
                <View style={styles.container_classify}>
                    <Text style={styles.item_text} onPress={()=>Actions.NativeCall()}>Native 调用</Text>
                </View>

                <Text style={styles.container_classify_text}>界面</Text>
                <View style={styles.container_classify}>
                    <Text style={styles.item_text} onPress={()=>Actions.PageJump()}>界面跳转</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    //分类容器
    container_classify: {
        flexDirection: 'column',
        backgroundColor: '#d7d7d7',
        paddingLeft: 10
    },

    //分类内容
    container_classify_text: {
        fontSize:20,
        color:'#d75700',
        marginTop:15
    },

    //每个条目
    item_text:{
        fontSize:16,
        paddingTop: 5,
        paddingBottom: 5
    }
})

export default Main