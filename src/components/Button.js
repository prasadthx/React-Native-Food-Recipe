import React from "react";
import { 
    TouchableOpacity,
    Text
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({buttonText, buttonContainerStyle, colors, onPress}) => {
    if(colors.length > 0){
        return (
            <TouchableOpacity
                onPress={onPress}
            >
                <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={colors}
                    style={{
                        ...buttonContainerStyle
                    }}
                >
                    <Text style={{textAlign:'center', color:'white', fontSize:16, lineHeight: 22}}>
                        {buttonText}
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }
    else{
        return (
            <TouchableOpacity
                style={buttonContainerStyle}
                onPress={onPress}
            >
                <Text style={{textAlign:'center', color:'white', fontSize:16, lineHeight: 22}}>
                    {buttonText}
                </Text>
            </TouchableOpacity>
        )
    }
}

export default Button;