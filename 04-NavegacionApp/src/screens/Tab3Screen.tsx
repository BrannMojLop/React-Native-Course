import React from 'react';
import { View, Text } from 'react-native';
import { useEffect } from 'react';

export const Tab3Screen = () => {
    useEffect(() => {
        console.log("Tab 3 Screen");
    }, []);

    return (
        <View>
            <Text>Tab 3 Screen</Text>
        </View>
    );
};
