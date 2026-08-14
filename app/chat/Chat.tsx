import React from 'react';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    FlatList,
  } from 'react-native';
import {StatusBar} from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
  
  
  const Chat = () => {
  const router = useRouter();
  
  const {name, profileIcon, status} = useLocalSearchParams();
  
  return (
    <>
    
    <StatusBar style='dark' backgroundColor='#000'/>
    <SafeAreaView>
      <Stack.Screen
      options={{
        headerShown: true,
        headerTitle: ()=>(
          <View style={Styles.HeaderContainer}>
            <View style={Styles.ProfileCard}>
              <Image
                source={{
                  uri: profileIcon
                }}
                style={Styles.profile}
              />
              <View style={[status === 'online' && Styles.onlineDot]}/>
            </View>
            <View style={Styles.HeaderText}>
              <Text style={Styles.Title}>{name}</Text>
              {status === 'online' && <Text style={Styles.Status}>Active Now</Text>}
              {status === 'ofline' && <Text style={Styles.Status}>Offline</Text>}
            </View>
          </View>
         ),
        headerRight: () => (
          <View style={{flexDirection: 'row', gap: 25,}}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={()=>router.push('/calls/audio-call')}
            >
              <MaterialIcons name='call' size={20} color='#000' />
            </TouchableOpacity>
            
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={()=>router.push('/calls/video-call')}
            >
              <Ionicons name='videocam' size={20} color='#000' />
            </TouchableOpacity>
            
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={()=>router.push('chat/chat-info')}
            >
              <FontAwesome name='exclamation-circle' size={20} color='#000' />
            </TouchableOpacity>
            
          </View>
        )
      }}
    />
      <ScrollView>
        <View style={Styles.Text}>
          <Text>Chat Screen</Text>
        
        </View>
      </ScrollView>
    </SafeAreaView>
    </>
  );
};

export default Chat;

const Styles = StyleSheet.create({
  HeaderContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  ProfileCard:{
    position: 'relative',
  },
  profile:{
    height: 38,
    width: 38,
    borderRadius: 19,
  },
  HeaderText:{
    marginLeft: 10,
  },
  onlineDot:{
    height: 14,
    width: 14,
    backgroundColor: '#4CD964',
    borderRadius: 7,
    borderColor: '#fff',
    borderWidth: 2,
    position: 'absolute',
    bottom: -1,
    right: -2,
  },
  Title:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  Status:{
    fontSize: 12,
  },
  Text:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});