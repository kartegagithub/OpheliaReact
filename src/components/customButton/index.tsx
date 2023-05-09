import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Container from '../../shared/fragment/container';
import Button from 'react-native-button';
import IconUser from '../customInput/iconUser';

type ButtonProps = {
    containerStyle: StyleProp<ViewStyle>,
    disabled?: boolean,
    disabledContainerStyle?: StyleProp<ViewStyle>,
    style: StyleProp<ViewStyle>,
    styleDisabled?: StyleProp<ViewStyle>,
    onPress: () => void,
    label: string | number,
    leftIcon?: boolean,
    rightIcon?: boolean,
    icon: any
}

function CustomButton({ disabled, containerStyle, disabledContainerStyle, style, styleDisabled, label, onPress, rightIcon, leftIcon, icon }: ButtonProps) {
    return (
        <Container>
            <View style={{ marginTop: 10 }}>
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
                    <View style={{ position: 'absolute', bottom: 0, left: 80, top: 16 }}>
                        {icon}
                    </View>
                }
                {
                    rightIcon &&
                    <View style={{ position: 'absolute', bottom: 0, right: 80, top: 16 }}>
                        {icon}
                    </View>
                }
            </View>
        </Container>
    );
}
export default CustomButton;
