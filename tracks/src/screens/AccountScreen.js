import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context } from '../context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const AccountScreen = () => {
    const { signout } = useContext(Context);

    return (
        <SafeAreaView forceInset={{ top: 'always' }} >
            <Spacer />
            <Spacer>
                <Button 
                    title='Sign Out'
                    onPress={signout}
                />
            </Spacer>
            
        </SafeAreaView>
    );
};

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <MaterialCommunityIcons  name="account" size={25} />
}

const styles = StyleSheet.create({});

export default AccountScreen;
