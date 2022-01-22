import React from 'react';
import {
    View, 
    Text,
    ImageBackground,
    StatusBar
} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import {images, styles} from '../../constants';

const Login = () => {
    StatusBar.setBackgroundColor('transparent');
    return (
        <View style={{flex: 1, backgroundColor: 'black'}}>
            <StatusBar translucent/>
            {renderHeader()}
        </View>
    )
}

const renderHeader = () => {
    return (
        <View style={{height: "65%"}}>
            <ImageBackground source={images.loginBackground} 
                style={{flex: 1, justifyContent: 'flex-end'}}
                resizeMode='cover'
            >
            </ImageBackground>
        </View>
    )
}

export default Login;
