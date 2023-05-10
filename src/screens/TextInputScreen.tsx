import React from 'react';
import Container from '../shared/fragment/container';
import CustomInput from '../components/customInput';
import IconUser from '../components/customInput/iconUser';
import { StyleSheet } from 'react-native';

function TextInputScreen() {

    return (
        <Container>
            <CustomInput
                style={styles.input}
            />
            <CustomInput
                style={styles.input}
                placeholderTextColor={"red"}
                leftIcon={<IconUser />}
            />
            <CustomInput
                style={styles.input}
                placeholderText="placeholder"
                placeholderTextColor={"gray"}
                rightIcon={<IconUser />}
            />
            <CustomInput
                inputStyle={styles.inputStyles}
                textOnBorder={"Title"}
                style={styles.input}
            />
        </Container>
    );
}
export default TextInputScreen;

const styles = StyleSheet.create({
    input: {
        fontSize: 12,
        borderRadius: 4,
        height: 48,
        color: '#697686',
        backgroundColor: "#EFF3F9"
    },
    inputStyles: {
        fontSize: 12,
        color: '#697686',
    },

});
