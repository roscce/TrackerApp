//import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackFrom';
import { FontAwesome } from '@expo/vector-icons';
import Spacer from '../components/Spacer';

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext);
    // Changes the callback and compares it in useLocation hook
    const callback = useCallback((location) => {
        addLocation(location, recording);
    }, [recording]);
    const [err] = useLocation(isFocused || recording, callback);
    
    return (
        <SafeAreaView forceInset={{ top:'always' }}>
            <Spacer>
                <Text h2>Create a Track</Text>
            </Spacer>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    );
};

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome  name="plus-square-o" size={25} />
}

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
