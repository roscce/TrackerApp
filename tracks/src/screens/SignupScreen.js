import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = () => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents 
                onWillFocus={clearErrorMessage}
            />
            <AuthForm 
                headerText='Sign Up for Tracker'
                errorMessage={ state.errorMessage }
                submitButtonText='Sign Up'
                onSubmit={signup}
            />

            <NavLink 
                text='Already have an account? Sign in!'
                routeName='Signin'
            />
        </View>
    );

};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 350
    }
});

export default SignupScreen;
