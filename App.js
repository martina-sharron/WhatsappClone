import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from './Navigation/BottomTab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatDetail from './Component/ChatDetail'
import { View, Text, Image, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import SplashScreen from './Component/SplashScreen';
import Scan from './Component/Scan';
import Camera from './Component/Camera';
import Settings from './Component/Settings';
import Addchat from './Component/Addchat';
import MetaAIChat from './Component/MetaAIChat';




const Stack = createNativeStackNavigator()

const App = () => {
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='meta'>
        <Stack.Screen
          name="meta"
          component={SplashScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="metapage"
          component={MetaAIChat}
          options={{
            headerStyle: { backgroundColor: '#111a13', },
            headerTintColor: '#fff',
            headerTitle: () => (
              <View style={{ flexDirection: 'row', gap: 10 }}>
                <Image source={{ uri: 'https://biz-file.com/c/2404/734670-700x364.png?5' }} style={{ height: 50, width: 50, borderRadius: 30, right: 20 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', right: 20 }}>
                  <View>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: '800' }}>Meta AI</Text>
                    <Text style={{ color: 'white', fontSize: 14 }}>With LIama 3.2</Text>
                  </View>
                </View>
              </View>
            )
          }} />

        <Stack.Screen
          name="addchat"
          component={Addchat}
          options={{
            headerStyle: { backgroundColor: '#111a13', },
            headerTintColor: '#fff',
            headerTitle: () => (
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                  <Text style={{ color: 'white', fontSize: 20, fontWeight: '800' }}>Select contact</Text>
                  <Text style={{ color: 'white', fontSize: 14 }}>99 contacts</Text>
                </View>
                <View style={{ flexDirection: 'row', left: 110 }}>
                  <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/128/5636/5636698.png' }}
                    style={{ width: 30, height: 30, tintColor: 'white', marginRight: 17 }}
                  />
                  <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4947/4947596.png' }}
                    style={{ width: 30, height: 30, tintColor: 'white' }}
                  />
                </View>
              </View>
            )
          }}
        />
        <Stack.Screen
          name="BottomNav"
          component={BottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="scanpage"
          component={Scan}
          options={{
            headerStyle: { backgroundColor: '#111a13', },
            headerTintColor: '#fff',
            headerTitle: () => (
              <Text style={{ color: 'white', fontSize: 20, fontWeight: '800' }}>Scan UPI QR code</Text>
            )
          }}
        />
        <Stack.Screen
          name="campage"
          component={Camera}
          options={{ headerStyle: { backgroundColor: '#111a13', height: 300 }, }}
        />
        <Stack.Screen
          name="setting"
          component={Settings}
          options={{
            headerStyle: { backgroundColor: '#111a13' },
            headerTintColor: '#fff',
            headerTitle: () => (
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: '800' }}>Settings</Text>
                <Image
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/128/151/151773.png' }}
                  style={{ width: 20, height: 20, tintColor: 'white', marginLeft: 210 }}
                />
              </View>
            )
          }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatDetail}
          options={({ route }) => ({
            headerStyle: {
              backgroundColor: '#111a13',
            },
            headerTintColor: '#fff',
            headerTitle: () => {
              const { name, avatar } = route.params;
              return (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={{ uri: avatar }}
                    style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
                  />
                  <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{name}</Text>
                </View>
              )
            },
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 10 }}>

                <Icon name="videocam-outline" color="#fff" size={24} style={{ marginRight: 20 }} />
                <Icon name="call-outline" color="#fff" size={24} style={{ marginRight: 20 }} />
                <Icon name="ellipsis-vertical" color="#fff" size={24} />
              </View>
            ),
          })}
        />
      </Stack.Navigator>
      <StatusBar
        backgroundColor="#111a13"
        barStyle="light-content" />
    </NavigationContainer>
  )
}

export default App
