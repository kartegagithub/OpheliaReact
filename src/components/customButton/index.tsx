import React from 'react';
import { Animated, StyleProp, Text, View, ViewStyle } from 'react-native';
import Button from 'react-native-button';
import { wp } from '../../shared/helpers/veriables';

type ButtonProps = {
    containerStyle: StyleProp<ViewStyle>,
    disabled?: boolean,
    disabledContainerStyle?: StyleProp<ViewStyle>,
    style?: StyleProp<ViewStyle>,
    styleDisabled?: StyleProp<ViewStyle>,
    onPress: () => void,
    label: string | number,
    leftIcon?: boolean,
    rightIcon?: boolean,
    icon?: React.ReactNode,
    animated?: boolean,
    animatedStyle?: any
}

function CustomButton({ disabled, containerStyle, disabledContainerStyle, style, styleDisabled, label, onPress, rightIcon, leftIcon, icon, animated, animatedStyle }: ButtonProps) {
    return (
        <View style={{ marginTop: 10 }}>
            {
                animated && <Animated.View
                    style={animatedStyle}>
                    <Text style={{ fontSize: 28, }}>Fading View!</Text>
                </Animated.View>
            }
            <Button
                style={style}
                styleDisabled={styleDisabled}
                disabled={disabled}
                containerStyle={containerStyle}
                disabledContainerStyle={disabledContainerStyle}
                onPress={onPress}
            >
                {label}
            </Button>
            {
                leftIcon &&
                <View style={{ position: 'absolute', bottom: 0, left: wp(25), top: 16 }}>
                    {icon}
                </View>
            }
            {
                rightIcon &&
                <View style={{ position: 'absolute', bottom: 0, right: wp(25), top: 16 }}>
                    {icon}
                </View>
            }
        </View>
    );
}
export default CustomButton;
