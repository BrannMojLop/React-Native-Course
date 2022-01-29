import React from 'react';
import { View, Text } from 'react-native';
import { useEffect } from 'react';

export const Tab2Screen = () => {

    useEffect(() => {
        console.log("Tab 2 Screen");
    }, []);

    return (
        <View>
            <Text>Tab 2 Screen</Text>
        </View>
    );
};
