import React, { useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import CustomButton from '../components/customButton';
import IconUser from '../components/customInput/iconUser';
import Container from '../shared/fragment/container';

function ButtonScreen() {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true,
        }).start();
    };
    return (
        <Container>
            <CustomButton
                leftIcon={true}
                icon={<IconUser />}
                label={'Deneme'}
                onPress={() => console.log('Now, button disabled')}
                styleDisabled={{ color: 'white' }}
                style={styles.versionOne}
                containerStyle={{ padding: 10, height: 45, overflow: 'hidden', borderRadius: 4, backgroundColor: 'aqua' }} />
            <CustomButton
                rightIcon={true}
                icon={<IconUser />}
                label={'Deneme'}
                onPress={() => console.log('Now, button disabled')}
                styleDisabled={{ color: 'white' }}
                style={{ fontSize: 20, color: 'white' }}
                containerStyle={{ padding: 10, height: 45, overflow: 'hidden', borderRadius: 4, backgroundColor: 'aqua' }} />
            <CustomButton
                disabled={true}
                label={'Deneme'}
                onPress={() => console.log('Now, button disabled')}
                styleDisabled={{ color: '#697686' }}
                disabledContainerStyle={{ backgroundColor: '#EFF3F9' }}
                containerStyle={{ padding: 10, height: 45, overflow: 'hidden', borderRadius: 4, backgroundColor: 'aqua' }} />
            <CustomButton
                animated
                animatedStyle={[
                    styles.fadingContainer,
                    {
                        // Bind opacity to animated value
                        opacity: fadeAnim,
                    },
                ]}
                label={'Deneme'}
                onPress={fadeIn}
                containerStyle={{ padding: 10, height: 45, overflow: 'hidden', borderRadius: 4, backgroundColor: 'aqua' }} />
            <CustomButton
                animated
                animatedStyle={[
                    styles.fadingContainer,
                    {
                        // Bind opacity to animated value
                        opacity: fadeAnim,
                    },
                ]}
                label={'Deneme'}
                onPress={fadeOut}
                containerStyle={{ padding: 10, height: 45, overflow: 'hidden', borderRadius: 4, backgroundColor: 'aqua' }} />
            <CustomButton
                label={'Deneme'}
                onPress={fadeOut}
                containerStyle={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'grey', padding: 10, }} />
        </Container>
    );
}
const styles = StyleSheet.create({
    versionOne: {
        fontSize: 20,
        color: 'white'
    },
    fadingContainer: {
        padding: 20,
        backgroundColor: 'powderblue',
    },
});
export default ButtonScreen;


