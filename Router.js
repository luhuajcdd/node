'use strict';
import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Main from './main/Main'

import PageJump from './page/index'
import PageJumpA from './page/PageJumpA'
import PageJumpB from './page/PageJumpB'

import NativeCall from './nativecall/NativeCall'

const App = () => {
    return (
        <Router>

            <Scene key="root">
                <Scene key="Main"
                       component={Main}
                       title='Main'
                       initial
                />

                <Scene key='jump'>
                    <Scene key='PageJump'
                           component={PageJump}
                           title='界面 跳转'
                           hideNavBar
                    />

                    <Scene key='PageJumpA'
                           component={PageJumpA}
                           title='界面 跳转 A'
                    />

                    <Scene key='PageJumpB'
                           component={PageJumpB}
                           title='界面 跳转 B'
                    />
                </Scene>

                <Scene
                    key="NativeCall"
                    component={NativeCall}
                    title="与Native 交互"
                />

            </Scene>

        </Router>
    );
};

export default App;