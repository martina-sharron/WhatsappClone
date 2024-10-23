import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import calls from '../Screen/calls';
import chat from '../Screen/chat';
import community from '../Screen/community';
import update from '../Screen/update';
import { Image, } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <PaperProvider>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: { backgroundColor: '#262626', height: 70 },
                    tabBarLabelStyle: { fontSize: 14, fontWeight: '700', color: 'white' },
                }}
            >
                <Tab.Screen
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Chats',
                        tabBarBadge: 3,
                        tabBarBadgeStyle: { backgroundColor: '#25D366', color: 'black' },
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3193/3193015.png' }}
                                style={{
                                    height: 26,
                                    width: 26,
                                    tintColor: focused ? '#25D366' : 'white',
                                }}
                            />
                        ),
                    }}
                    name="Chats"
                    component={chat}
                />
                <Tab.Screen
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Updates',
                        tabBarBadge: 2,
                        tabBarBadgeStyle: { backgroundColor: '#25D366', color: '#25D366' },
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/12595/12595841.png' }}
                                style={{
                                    height: 26,
                                    width: 26,
                                    tintColor: focused ? '#25D366' : 'white',
                                }}
                            />
                        ),
                    }}
                    name="Updates"
                    component={update}
                />
                <Tab.Screen
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Communities',
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/7466/7466353.png' }}
                                style={{
                                    height: 26,
                                    width: 26,
                                    tintColor: focused ? '#25D366' : 'white',
                                }}
                            />
                        ),
                    }}
                    name="Communities"
                    component={community}
                />
                <Tab.Screen
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Calls',
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/159/159832.png' }}
                                style={{
                                    height: 26,
                                    width: 26,
                                    tintColor: focused ? '#25D366' : 'white',
                                }}
                            />
                        ),
                    }}
                    name="Calls"
                    component={calls}
                />
            </Tab.Navigator>
        </PaperProvider>
    );
}
