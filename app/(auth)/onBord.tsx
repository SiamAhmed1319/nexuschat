import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import { router } from 'expo-router';
import imagePath from '../../src/constants/imagePath';


export default function onBord () {
  
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(()=>{
    let loading;
    let login;
    
    loading = setTimeout(() => {
      setIsLoading(true)
      login = setTimeout(() => {
        router.push('/login')
      },1000)
    },2000)
    return() => {
      clearTimeout(loading);
      clearTimeout(login);
    }
  },[])
  
  return(
    <>
    <StatusBar style="light" backgroundColor="#5b2bec" />
    <SafeAreaView style={Styles.container}>
      <View style={Styles.header}></View>
      <View style={Styles.body}>
        <Image
          source={imagePath.logo}
          style={Styles.logo}
          resizeMode='contain'
        />
        <Text style={Styles.title}>Welcome</Text>
      </View>
      <View style={Styles.footer}>
        {
          isLoading ? 
          <>
            <ActivityIndicator
            size={
              moderateScale(30)
            }
            color='#4ab5e8'
            />
            <Text style={Styles.loading}>Loading...</Text>
          </>
          : 
          <>
            <Text style={Styles.tag}>made by</Text>
            <Text style={Styles.subTitle}>Mᴅ Sɪᴀᴍ Aʜᴍᴇᴅ</Text>
          </>
        }
      </View>
    </SafeAreaView>
    </>
  )
}

const Styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingVertical: verticalScale(40),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header:{
    
  },
  body:{
    alignItems: 'center',
    gap: verticalScale(10),
  },
  logo:{
    height: scale(50),
    width: scale(50),
    borderRadius: moderateScale(8),
  },
  title:{
    fontSize: moderateScale(35),
    fontWeight: 'bold',
  },
  footer:{
    alignItems: 'center',
    height: verticalScale(50),
    justifyContent: 'flex-end',
  },
  tag:{
    fontSize: moderateScale(12, 0.2),
    color: '#b87b7b',
  },
  subTitle:{
    fontSize: moderateScale(14, 0.3),
    color: '#000000',
  },
  
  //Loading
  loading:{
    fontSize: moderateScale(18, 0.3),
    color: '#4ab5e8',
    gap: verticalScale(5),
  }
})