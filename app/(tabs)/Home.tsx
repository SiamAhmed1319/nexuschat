import React, { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  FlatList
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context'; // এটা ঠিক আছে
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Modal from 'react-native-modal';


//Database same
const userDatabase = [
    {
      id: 1,
      name: 'MD Siam Ahmed',
      lastMsg: 'Project Ar kaj koto dor',
      status: 'online',
      time: '10:32pm',
      profileIcon: 'https://siamahmed.unaux.com/Assets/Images/Profile.jpg',
    },//online
    {
      id: 2,
      name: 'MD Muzahiz',
      lastMsg: 'koy toi',
      status: 'online',
      time: '9:02am',
      profileIcon: 'https://siamahmed.unaux.com/Assets/Images/Profile.jpg',
    },//online
    {
      id: 3,
      name: 'Nehal Chowdori',
      lastMsg: 'Kaj ses hobe kobe ',
      status: 'ofline',
      time: '2:55pm',
      profileIcon: 'https://siamahmed.unaux.com/Assets/Images/Profile.jpg',
    },//ofline
    {
      id: 4,
      name: 'Israt Jahan Jannati',
      lastMsg: 'Ki koro vaiya',
      status: 'online',
      time: '10:32pm',
      profileIcon: 'https://siamahmed.unaux.com/Assets/Images/Profile.jpg',
    },//onlin4
    {
      id: 5,
      name: 'Mr. Devil',
      lastMsg: 'App Ar Demo',
      status: 'ofline',
      time: '8:43am',
      profileIcon: 'https://siamahmed.unaux.com/Assets/Images/Profile.jpg',
    },//ofline
    {
      id: 6,
      name: 'Nila Akter',
      lastMsg: 'ki koros',
      status: 'ofline',
      time: '10:52pm',
      profileIcon: 'https://siamahmed.unaux.com/Assets/Images/Profile.jpg',
    },//ofline
    {
      id: 7,
      name: 'Jafor Chowdori',
      lastMsg: 'Project Ar kaj koto dor',
      status: 'ofline',
      time: '10:32pm',
      profileIcon: 'https://siamahmed.unaux.com/Assets/Images/Profile.jpg',
    },//ofline
    {
      id: 8,
      name: 'Rafi Ahmed',
      lastMsg: 'kmon aso vai',
      status: 'online',
      time: '12:32pm',
      profileIcon: 'https://siamahmed.unaux.com/Assets/Images/Profile.jpg',
    },//online
    {
      id: 9,
      name: 'Fatema Islam',
      lastMsg: 'Hi',
      status: 'online',
      time: '10:32pm',
      profileIcon: 'https://siamahmed.unaux.com/Assets/Images/Profile.jpg',
    },//onlime
    {
      id: 10,
      name: 'Onwer',
      lastMsg: 'This Project Onwer',
      status: 'online',
      time: '00:00am',
      profileIcon: 'https://siamahmed.unaux.com/Assets/Images/Profile.jpg',
    },//online
    {
      id: 11,
      name: 'MD Siam Ahmed',
      lastMsg: 'Project Ar kaj koto dor',
      status: 'online',
      time: '10:32pm',
      profileIcon: 'https://siamahmed.unaux.com/Assets/Images/Profile.jpg',
    },//online
    {
      id: 12,
      name: 'MD Muzahiz',
      lastMsg: 'koy toi',
      status: 'online',
      time: '9:02am',
      profileIcon: 'https://siamahmed.unaux.com/Assets/Images/Profile.jpg',
    },//online
    {
      id: 13,
      name: 'Nehal Chowdori',
      lastMsg: 'Kaj ses hobe kobe ',
      status: 'ofline',
      time: '2:55pm',
      profileIcon: 'https://siamahmed.unaux.com/Assets/Images/Profile.jpg',
    },//ofline
    {
      id: 14,
      name: 'Israt Jahan Jannati',
      lastMsg: 'Ki koro vaiya',
      status: 'online',
      time: '10:32pm',
      profileIcon: 'https://siamahmed.unaux.com/Assets/Images/Profile.jpg',
    },//onlin4
    {
      id: 15,
      name: 'Mr. Devil',
      lastMsg: 'App Ar Demo',
      status: 'ofline',
      time: '8:43am',
      profileIcon: 'https://siamahmed.unaux.com/Assets/Images/Profile.jpg',
    },//ofline
    {
      id: 16,
      name: 'Nila Akter',
      lastMsg: 'ki koros',
      status: 'ofline',
      time: '10:52pm',
      profileIcon: 'https://siamahmed.unaux.com/Assets/Images/Profile.jpg',
    },//ofline
    {
      id: 17,
      name: 'Jafor Chowdori',
      lastMsg: 'Project Ar kaj koto dor',
      status: 'ofline',
      time: '10:32pm',
      profileIcon: 'https://siamahmed.unaux.com/Assets/Images/Profile.jpg',
    },//ofline
    {
      id: 18,
      name: 'Rafi Ahmed',
      lastMsg: 'kmon aso vai',
      status: 'online',
      time: '12:32pm',
      profileIcon: 'https://siamahmed.unaux.com/Assets/Images/Profile.jpg',
    },//online
    {
      id: 19,
      name: 'Fatema Islam',
      lastMsg: 'Hi',
      status: 'online',
      time: '10:32pm',
      profileIcon: 'https://siamahmed.unaux.com/Assets/Images/Profile.jpg',
    },//onlime
    {
      id: 20,
      name: 'Onwer',
      lastMsg: 'This Project Onwer',
      status: 'online',
      time: '00:00am',
      profileIcon: 'https://siamahmed.unaux.com/Assets/Images/Profile.jpg',
    },//online
  ];

export default function Home () {
  const router = useRouter();
  //Custom modal
  const [visible, setVisible] = useState(false);
  const [chatId, setChatId] = useState(null);
  //Alert
  const [modalAlert, setModalAlert] = useState(false);
  
  return (
    <>
      <Stack.Screen options={ {
        headerShown: true,
        headerTitle: 'NexusChat',
        headerStyle: { backgroundColor: '#000' },
        headerTintColor: '#ffffff',
        headerRight: ()=>(
          <Pressable style={ { marginRight: 16 }} onPress={() => router.push('../Chat')}>
            <Ionicons name='create' size={24} color='#fff' />
          </Pressable>
        ),
      }} />

      <StatusBar style='light' backgroundColor='#000' />

      <SafeAreaView style={Styles.MainBody} edges={['bottom', 'left', 'right']}>

        <FlatList
          data={userDatabase}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: verticalScale(10) }}
          keyExtractor={(item) => item.id.toString()}

          ListHeaderComponent={() => (
            <View style={Styles.Container}>
              <FlatList
                data={userDatabase.filter((user) => user.status === 'online')}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={ { paddingHorizontal: scale(14) }} // 5. সাইডে padding
                renderItem={({ item }) => (// key এখানে লাগবে না
                  <Pressable onPress={()=> router.push({ pathname: '../chat/Chat', params: { name: item.name, profileIcon: item.profileIcon, status: item.status } })}>
                    <View style={Styles.Profile}>
                      <View style={Styles.ProfileCard}>
                        <Image source={ { uri: item.profileIcon }} style={Styles.storyProfile} />
                        <View style={Styles.storyOnlineDot} />
                      </View>
                      <Text numberOfLines={1} style={Styles.sortName}>{item.name}</Text>
                    </View>
                  </Pressable>
                )}
                />
            </View>
          )}

          renderItem={({
            item:{id, name, lastMsg, status, profileIcon, time}
          }) => (
            <Pressable
              style={({pressed})=>[
                pressed && Styles.press
              ]}
              onPress={()=>router.push({
                pathname: '../chat/Chat', 
                params: { 
                  name: name,
                  profileIcon: profileIcon,
                  status: status
                } 
              })}
              onLongPress={()=>{
                setVisible(true);
                setChatId(id)
              }}
            >
              <View style={Styles.ChatCard}>
                <View style={Styles.ProfileCard}>
                  <Image 
                    source={{
                    uri: profileIcon
                  }}
                    style={Styles.profileIcon}
                  />
                  <View
                    style={[status === 'online' ? Styles.onlineDot: Styles.offlineDot]}
                  />
                </View>
                <View style={Styles.CardBody}>
                  <View style={{ flex: 1 }}>
                    <Text style={Styles.userName}>{name}</Text>
                    <Text
                      numberOfLines={1}
                      style={Styles.lastMsg}
                    >
                      {lastMsg}
                    </Text>
                  </View>
                  <Text style={Styles.msgTime}>{time}</Text>
                </View>
              </View>
            </Pressable>
          )}
        />
        
        <Modal
          isVisible={visible}
          onBackdropPress={()=> setVisible(false) }
          onBackButtonPress={()=>setVisible(false)}
          style={Styles.modal}
        >
          <View style={Styles.modalBox}>
            <View style={Styles.modelHeader}>
              <View style={Styles.modelLine} />
            </View>
            <View style={Styles.modalBody}>
              <Pressable
                style={({pressed})=>[
                Styles.modalItem,
                pressed && Styles.press
              ]}
              >
                <MaterialIcons name='push-pin' size={24} color='gray'/>
                <Text style={[Styles.modalText]}>Pin</Text>
              </Pressable>
              
              <Pressable
                style={({pressed})=>[
                Styles.modalItem,
                pressed && Styles.press
              ]}
              >
                <MaterialIcons name='notifications' size={24} color='gray'/>
                <Text style={[Styles.modalText]}>Mute</Text>
              </Pressable>
              
              <Pressable
                style={({pressed})=>[
                Styles.modalItem,
                pressed && Styles.press
              ]}
              >
                <MaterialIcons name='block' size={24} color='gray'/>
                <Text style={[Styles.modalText]}>Block</Text>
              </Pressable>
              
              <Pressable
                onPress={()=>{
                  setModalAlert(true)
                  setVisible(false)
                }}
                style={({pressed})=>[
                Styles.modalItem,
                pressed && Styles.press
              ]}
              >
                <MaterialIcons name='delete' size={24} color='red'/>
                <Text style={[Styles.modalText, Styles.delete]}>Delete</Text>
              </Pressable>
              
            </View>
          </View>
        </Modal>
        
        <Modal
          isVisible={modalAlert}
          onBackdropPress={()=>setModalAlert(false)}
          onBackButtonPress={()=>setModalAlert(false)}
          style={Styles.alertmodal}
        >
          <View style={Styles.alertbox}>
            <Text style={Styles.alertHeader}>Delete all chat history?</Text>
            <Text style={Styles.alertbody}>Are you sure delete this chat history</Text>
            <View style={Styles.alertbtn}>
              <Pressable
                onPress={()=>setModalAlert(false)}
              >
                <Text>Cancle</Text>
              </Pressable>
              
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </>
  );
};

  //StyleSheet
  const Styles = StyleSheet.create({
    MainBody: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: scale(0),
      paddingBottom: verticalScale(-15),
    },
    ProfileCard: {
      position: 'relative'
    },
    storyOnlineDot: {
      height: scale(12),
      width: scale(12),
      backgroundColor: '#4CD964',
      borderRadius: scale(6),
      borderColor: '#fff',
      borderWidth: scale(2),
      position: 'absolute',
      bottom: scale(6),
      right: scale(2), // 9. bottom একটু উপরে
    },
    onlineDot: {
      height: moderateScale(14),
      width: moderateScale(14),
      backgroundColor: '#4CD964',
      borderRadius: moderateScale(7),
      borderColor: '#fff',
      borderWidth: scale(2),
      position: 'absolute',
      bottom: 2,
      right: 2, // 10. 0 এর জায়গায় 2
    },
    offlineDot: {
      // 11. বানান ঠিক
      height: moderateScale(14),
      width: moderateScale(14),
      backgroundColor: '#8E8E93',
      borderRadius: moderateScale(7),
      borderColor: '#fff',
      borderWidth: scale(2),
      position: 'absolute',
      bottom: 2,
      right: 2,
    },
    Container: {
      marginVertical: verticalScale(10)
    },
    Profile: {
      paddingRight: scale(16),
      alignItems: 'center',
      width: scale(70)
    },
    storyProfile: {
      height: moderateScale(60),
      width: moderateScale(60),
      borderRadius: moderateScale(30),
      marginBottom: verticalScale(6)
    },
    sortName: {
      fontSize: moderateScale(12, 0.3),
      textAlign: 'center'
    },
    press:{
      backgroundColor: '#e5e5e5'
    },
    ChatCard: {
      paddingHorizontal: scale(14),
      paddingVertical: verticalScale(8),
      flexDirection: 'row',
      alignItems: 'center'
    },
    profileIcon: {
      height: moderateScale(55),
      width: moderateScale(55),
      borderRadius: moderateScale(27.5)
    },
    CardBody: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginLeft: scale(12)
    },
    userName: {
      fontSize: moderateScale(16),
      fontWeight: '600'
    },
    lastMsg: {
      color: '#666',
      fontSize: moderateScale(13)
    },
    msgTime: {
      color: '#737373',
      fontSize: moderateScale(11),
      marginLeft: scale(8)
    },
    //Custom Model
    modal:{
      margin: 0,
      justifyContent: 'flex-end',
    },
    modalBox:{
      width: '100%',
      backgroundColor: '#fff',
      borderTopLeftRadius: moderateScale(15),
      borderTopRightRadius: moderateScale(15),
    },
    modelHeader:{
      alignItems: 'center',
    },
    modelLine:{
      height: verticalScale(5),
      width: scale(40),
      borderRadius: moderateScale(5),
      backgroundColor: '#858585',
      marginTop: verticalScale(5),
    },
    modalBody:{
      marginTop: verticalScale(30),
      marginBottom: verticalScale(10)
    },
    modalItem:{
      flexDirection: 'row',
      gap: scale(10),
      alignItems: 'center',
      paddingVertical: verticalScale(5),
      paddingHorizontal: scale(16),
    },
    modalText:{
      fontSize: moderateScale(16),
      fontWeight: '500',
    },
    delete:{
      color: 'red',
    },
    
    //Alert Modal
    alertmodal:{
      
    },
    alertbox:{
      backgroundColor: '#fff',
      borderRadius: moderateScale(8),
      paddingHorizontal: moderateScale(15),
      paddingVertical: moderateScale(10)
    },
    alertHeader:{
      fontSize: moderateScale(18),
      fontWeight: '500',
      marginBottom: verticalScale(10),
    },
    alertbody:{
      fontSize: moderateScale(13),
      fontWeight: '500',
      marginBottom: verticalScale(15),
    },
    alertbtn:{},
  });