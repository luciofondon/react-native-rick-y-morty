import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LocationList from './src/screens/LocationListScreen';
import EpisodeList from './src/screens/EpisodeListScreen';
import EpisodeDetailScreen from './src/screens/EpisodeDetailScreen';
import LocationDetailScreen from './src/screens/LocationDetailScreen';
import Colors from './src/constants/Colors';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerTintColor: '#fff',
                tabBarLabelStyle: {
                    fontSize: 16,
                    color: '#fff'
                },
                tabBarShowLabel: true,
                tabBarStyle: {
                    backgroundColor: Colors.violet.background
                }
            }}
        >
            <Tab.Screen name="Episodios" component={EpisodeList} />
            <Tab.Screen name="Localizaciones" component={LocationList} />
        </Tab.Navigator>
    );
};

export default function App() {
    const Stack = createStackNavigator();
    const MyTheme = {
        dark: false,
        colors: {
            primary: 'rgb(255, 45, 85)',
            background: 'rgb(242, 242, 242)',
            card: 'rgb(255, 255, 255)',
            text: 'rgb(28, 28, 30)',
            border: 'rgb(199, 199, 204)',
            notification: 'rgb(255, 69, 58)'
        }
    };

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Rick and Morty"
                    component={Home}
                    options={{
                        headerShown: true,
                        headerTintColor: '#fff',
                        headerStyle: {
                            backgroundColor: Colors.violet.background
                        }
                    }}
                />
                <Stack.Screen
                    name="EpisodeDetail"
                    component={EpisodeDetailScreen}
                    options={({ route }) => ({
                        title: route.params.title,
                        headerStyle: {
                            backgroundColor: Colors.violet.background
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        }
                    })}
                />
                <Stack.Screen
                    name="LocationDetail"
                    component={LocationDetailScreen}
                    options={({ route }) => ({
                        title: route.params.title,
                        headerStyle: {
                            backgroundColor: Colors.violet.background
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        }
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
