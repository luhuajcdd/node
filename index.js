'use strict';
import React from 'react';
import { AppRegistry} from 'react-native';
import App from './Router';

//JS端注册要暴漏出去的组件 名字（NativeComponent）需要与我们在Native端声明的要加载到native端的组件名字（2.4步骤中getMainComponentName）相同
AppRegistry.registerComponent('NativeComponent', () => App);
