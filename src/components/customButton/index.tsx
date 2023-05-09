import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Container from '../../shared/fragment/container';
import Button from 'react-native-button';

type ButtonProps = {
    containerStyle: StyleProp<ViewStyle>,
    disabled?: boolean,
    disabledContainerStyle?: StyleProp<ViewStyle>,
    style: StyleProp<ViewStyle>,
    styleDisabled?: StyleProp<ViewStyle>,
    onPress: () => void,
    label: string | number,
}

function CustomButton({ disabled, containerStyle, disabledContainerStyle, style, styleDisabled, label, onPress }: ButtonProps) {
    return (
        <Container>
            <View>
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
            </View>
        </Container>
    );
}
export default CustomButton;
