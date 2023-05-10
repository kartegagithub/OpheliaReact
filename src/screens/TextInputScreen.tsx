import React, { useEffect } from 'react';
import Container from '../shared/fragment/container';
import CustomInput from '../components/customInput';
import IconUser from '../components/customInput/iconUser';
import { StyleSheet } from 'react-native';

function TextInputScreen() {
    const [errorMessage, setErrorMessage] = React.useState("");
    const [value, setValue] = React.useState("");
    const handleChange=(text:any)=>{
        setValue(text)
    }
    useEffect(() => {
        validateEmail();
    }, [value]);

    const validateEmail = () => {
        const valueRegex = /^.{5,}$/;
        if (!valueRegex.test(value)) {
            setErrorMessage('* Geçersiz Değer');
        } else {
            setErrorMessage('');
        }
    }
    return (
        <Container>
            <CustomInput
                placeholderText="disable input"
                editable={false}
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
            <CustomInput
                value={value}
                onChangeText={(text) => handleChange(text)}
                errorMessage={errorMessage}
                inputStyle={styles.inputStyles}
                style={[styles.inputError, {borderColor : errorMessage ? "#dc143c" : "#fff"}]}
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
        top:8,
        color: '#697686',
    },
    inputError:{
        fontSize: 12,
        borderRadius: 4,
        borderWidth:1,
        height: 48,
        color: '#697686',
        backgroundColor: "#EFF3F9"
    }

});
