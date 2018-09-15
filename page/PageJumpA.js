
'use strict';
import React,{Component} from 'react';
import {View} from 'react-native';

class PageJumpA extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
            </View>
        );
    }
}

export default PageJumpA