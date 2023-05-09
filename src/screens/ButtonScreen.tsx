import React from 'react';
import CustomButton from '../components/customButton';
import Container from '../shared/fragment/container';
import IconUser from '../components/customInput/iconUser';

function ButtonScreen() {

    return (
        <Container>
            <CustomButton
                rightIcon={true}
                leftIcon={true}
                icon={<IconUser />}
                label={'Deneme'}
                onPress={() => console.log('Now, button disabled')}
                styleDisabled={{ color: 'white' }}
                style={{ fontSize: 20, color: 'white' }}
                containerStyle={{ padding: 10, height: 45, overflow: 'hidden', borderRadius: 4, backgroundColor: 'aqua' }} />

        </Container>
    );
}
export default ButtonScreen;
