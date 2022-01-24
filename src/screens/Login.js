import React from 'react';
import {
    View, 
    Text,
    ImageBackground,
    StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {images, styles, COLORS} from '../../constants';
import Button from '../components/Button';

const Login = ({navigation}) => {
    StatusBar.setBackgroundColor('transparent');
    return (
        <View style={{flex: 1, backgroundColor: 'black'}}>
            <StatusBar translucent/>
            {renderHeader()}
            {renderDetails(navigation)}
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
                <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}
                    colors={['transparent', '#020202']}
                    style={{height:200, justifyContent:'flex-end', paddingHorizontal:24}}
                >
                    <Text
                        style={{width: '80%', 
                                color : 'white', 
                                fontSize : 40,
                                fontWeight : 'bold',
                                lineHeight : 40
                            }}
                    >
                        Cooking a Delicious Food Recipe
                    </Text>
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}

const renderDetails = (navigation) => {
    return(
        <View style={{flex: 1, paddingHorizontal:24}}>
            <Text style={{marginTop:12, width: '70%', color:'gray', fontSize:16, lineHeight:22}}>
                Discover more than 1200 food recipes in your 
                hands and cooking them easily!
            </Text>
            <View style={{flex:1, justifyContent: 'center'}}>
                <Button buttonText="Login" colors={[COLORS.lime, COLORS.darkGreen]} onPress={()=>navigation.replace('Home')} buttonContainerStyle={{paddingVertical:18, borderRadius:20}}/>
                <Button buttonText="Sign Up" colors={[]} onPress={()=>navigation.replace('Home')} buttonContainerStyle={{marginTop:12, paddingVertical:18, borderRadius:20, borderColor:COLORS.darkLime, borderWidth:1}}/>
            </View>
        </View>
    )
}

export default Login;
