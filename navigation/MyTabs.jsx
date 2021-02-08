import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Appointment from '../screens/Appointment';
import Bookmark from '../screens/Bookmark';

const Tab = createMaterialBottomTabNavigator();

function MyTabs(props) {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            barStyle={{
                backgroundColor: 'white',
                shadowColor: "#ffff",
                shadowOffset: {
                    width: 2,
                    height: 2,
                },
                shadowOpacity: 0.35,
                shadowRadius: 3.84,
                elevation: 3,
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name="home" color={focused ? '#4256FB' : 'grey'} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Discover"
                component={Search}
                options={{
                    tabBarLabel: 'Discover',
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name="magnify" color={focused ? '#4256FB' : 'grey'} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Appointment"
                component={Appointment}
                options={{
                    tabBarLabel: 'Appointment',
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name="calendar" color={focused ? '#4256FB' : 'grey'} size={30} />
                    ),
                }}
            />

            <Tab.Screen
                name='Bookmark'
                component={Bookmark}
                options={{
                    tabBarLabel: 'Bookmark',
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name='bookmark'
                            size={30}
                            color={focused ? '#4256FB' : 'grey'}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
export default MyTabs;

