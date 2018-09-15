import React from "react";
import {Button, DeviceEventEmitter, NativeModules, StyleSheet, Text, View} from "react-native";
import {Actions} from "react-native-router-flux";


class NativeCall extends React.Component {
    constructor(props){
        super(props);
        this.state={
            systemModel:'',
            systemModel_promise:'',
        }
    }

    static navigationOptions = {
        title: 'Welcome',
    };

    async componentDidMount() { //promise: 注意此时要声明为`async`表示该方法为异步方法
        NativeModules.RNCallNative.handleMessageCallback("I press button.",(sysModel)=>{
            this.setState({systemModel:sysModel});
        });
        this.setState({
            //声明await表示等待异步操作结果
            systemModel_promise:await NativeModules.RNCallNative.handleMessagePromise("I press button.")
        });

        //监听事件名为EventName的事件
        DeviceEventEmitter.addListener('EventName', function() {
            alert("send success");
        });
    }


    render() { //render函数返回要渲染的布局
        return (
            <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'space-around' }}>

                <Text style={styles.text} >{this.state.systemModel}</Text>
                <Text style={styles.text} onPress={this.CallAndroid2}>CallNative 2 params</Text>
                <Text style={styles.text} onPress={this.CallAndroid_Callback}>CallNative  callback</Text>

                <Text style={styles.text} >promise: {this.state.systemModel_promise}</Text>
                <Text style={styles.text} onPress={this.CallAndroid_Promise}>CallNative  Promise</Text>

                <Text style={styles.text} onPress={this.CallAndroid_Promise2}>调用本地 2 params  -》 异步回调：Promise</Text>

                <Text style={styles.text} onPress={this.Request}>调用本地网络请求接口 -》 异步回调：Promise</Text>

                <Text style={styles.text} onPress={this.UI}>调用UI组件 -》 异步回调：Promise</Text>

                <Text style={styles.text} onPress={this.Database}>调用数据库 -》 异步回调：Promise</Text>

                <Text style={styles.text} onPress={this.configure}>调用配置 -》 异步回调：Promise</Text>
            </View>


        )
    }

    CallAndroid2=()=>{
        // RNCallNative 与RNCallNativeInterface.getName()一致
        //handleMessage 是 RNCallNativeInterface 中 有@ReactMethod  的方法
        NativeModules.RNCallNative.handleMessage("I press button."," param 2 ");
    }


    CallAndroid_Callback=()=>{
        //在ReactNative侧对应的回到函数也不会立即执行，因为混合开发中的桥接机制是异步的。
        NativeModules.RNCallNative.handleMessageCallback("I press button.",(msg)=>{
            console.log(msg);
        });
    }


    CallAndroid_Promise=()=>{
        //在ReactNative侧对应的回到函数也不会立即执行，因为混合开发中的桥接机制是异步的。
        NativeModules.RNCallNative.handleMessagePromise("I press button.").then((msg) => {
            console.log(msg)
        })
            .catch((error) => {
                console.log(error)
            });
    }


    CallAndroid_Promise2=()=>{
        //在ReactNative侧对应的回到函数也不会立即执行，因为混合开发中的桥接机制是异步的。
        NativeModules.RNCallNative.handleMessage("I press button."," param 2 ").then((msg) => {
            console.log(msg)
        })
            .catch((error) => {
                console.log(error)
            });
    }

    /**
     * 网络请求
     * @return {[type]} [description]
     */
    Request=()=>{
        var nowTime = (new Date()).valueOf();
        console.log(nowTime);
        NativeModules.RNCallNative.request(16897,"{\"cds\":[{\"attr\":{\"id\":0,\"name\":\"Picture_07_Quiet.jpg\",\"size\":1795526,\"type\":10000," +
            "\"typeinfo\":\"cGljdHVyZQ\\u003d\\u003d\",\"value\":\"eyJoZWlnaHQiOjE5MjAsIndpZHRoIjoxMDgwLCJmaWxlS2V5IjoiRmwtODJq " +
            "bzQyZE15MTFMX1ZOblZpWk9UZkRPRSIsInNpemUiOjE3OTU1MjYsImZsYWci OjF9\"},\"cloud_disk_type\":2,\"name\":\"Picture_07_Quiet" +
            ".jpg\",\"parent_id\":522}]}").then((msg) => {
            console.log(msg)
        })
            .catch((error) => {
                console.log(error)
            });
    }
    /**
     *
     */
    Database=()=>{
        NativeModules.RNCallNative.callNativeDatabase("xx").then((msg) => {
            console.log(msg)
        })
            .catch((error) =>{
                console.log(error)
            });
    }
    /**
     *
     */
    configure=()=>{
        NativeModules.RNCallNative.callNativeConfigure("xx").then((msg) => {
            console.log(msg)
        })
            .catch((error) =>{
                console.log(error)
            });
    }

    /**
     *
     */
    UI=()=>{
        NativeModules.RNCallNative.callNativeComponent("xx").then((msg) => {
            console.log(msg)
        })
            .catch((error) =>{
                console.log(error)
            });
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

export default NativeCall