import { StyleSheet, Text, View, Image} from 'react-native';
import { Tabs } from 'expo-router';
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';


const RootTab = () => {
  return (
    <Tabs>
      <Tabs.Screen name='Home' options={{
        headerTitle: 'NexusChat',
        title: 'Chat',
        tabBarIcon: ({color, size})=>(
          <MaterialCommunityIcons name="chat" size={24} color="black" />
        ),
      }}/>
      <Tabs.Screen
        name='People'
        options={{
          headerTitle: 'People',
          tabBarIcon: ({ color, size })=>(
            <Ionicons name="people" size={24} color="black" />
          )
        }}
      />
      <Tabs.Screen
        name='Notification'
        options={{
          tabBarIcon: ({ color, size })=>(
            <Ionicons name="notifications" size={24} color="black" />
          )
        }}
      />
      <Tabs.Screen
        name='Profile'
        options={{
          tabBarIcon: ({ color, size }) => {
            return(
              <View style={{}}>
                <Image
                  source={{
                    uri: 'https://siamahmed.unaux.com/Assets/Images/Img2.jpg',
                  }}
                  style={{height:24, width: 24, resizeMod: 'cover', borderRadius: 12, borderWidth: 1}}
                />
              </View>
            )
          },
        }}
    />
    </Tabs>
  );
};

export default RootTab;

const styles = StyleSheet.create({});