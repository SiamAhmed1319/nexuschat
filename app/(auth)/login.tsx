import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../src/components/Button';
import { router } from 'expo-router';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import imagePath from '../../src/constants/imagePath'
import {Ionicons} from '@expo/vector-icons'



const Login = () => {
  
  //Login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  //password
  const [hidePass, setHidePass] = useState(false)
  
  const buttonLink = ()=>{
    alert('Login Successfull')
  }
  
  return (
    <>
    <StatusBar style='dark'/>
    <SafeAreaView style={Styles.Container}>
      <View style={Styles.header}>
        <Text style={Styles.title}>Welcome Back!</Text>
        <Text style={Styles.subTitle}>Login to continue to your account</Text>
      </View>
      <View style={Styles.body}>
        <View style={Styles.inputContainer}>
          <Text style={Styles.label}>Email Address</Text>
          <TextInput
            style={Styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder='Enter Email or Numbe'
            keyboardType='email-address'
            autoCapitalize='none'
          />
        </View>
        <View style={Styles.inputContainer}>
          <Text style={Styles.label}>Password</Text>
          <View style={Styles.passCont}>
            <TextInput
              style={[Styles.input, Styles.hidePass]}
              value={password}
              onChangeText={setPassword}
              placeholder='Password'
              secureTextEntry={!hidePass}
            />
            <TouchableOpacity 
              style={Styles.eye}
              onPress={() => setHidePass(!hidePass)}
            >
              <Ionicons 
                name={hidePass ? "eye-off" : "eye"} 
                size={22} 
                color="gray"
          />
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.rememberMe}>
          <View>
            
            <Text>Remember me</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={()=>{router.push('/(auth)/forgetPass')}}
          >
            <Text style={Styles.forget}>Forget Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.button}>
          <Button title='Login' onPress={buttonLink}/>
        </View>
        <View style={Styles.devider}>
          <View style={Styles.line}/>
          <Text style={Styles.orText}>or</Text>
          <View style={Styles.line}/>
        </View>
        <View style={Styles.social}>
          <TouchableOpacity
            style={Styles.socialIcon}
            onPress={()=>{router.push('/')}}
          >
            <Image
              source={imagePath.google}
              style={Styles.icon}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.socialIcon}
            onPress={()=>{router.push('/')}}
          >
            <Image
              source={imagePath.facebook}
              style={Styles.icon}
              resizeMode='contain'
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={Styles.footer}>
        <Text style={Styles.footerText}>Don't have an account? <Text style={Styles.create} onPress={()=>{router.push('./register')}}>Create</Text></Text>
      </View>
    </SafeAreaView>
    </>
  );
};

export default Login;

const Styles = StyleSheet.create({
  Container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(20),
    paddingHorizontal: scale(16),
  },
  
  header:{
    alignItems: 'center',
    marginBottom: verticalScale(50),
  },
  title:{
    fontSize: moderateScale(22),
    fontWeight: '500',
  },
  subTitle:{
    fontSize: moderateScale(12),
    color: '#909090',
  },
  
  body:{
    gap: verticalScale(15),
    width: '100%',
    paddingHorizontal: scale(15),
  },
  inputContainer:{
    width: '100%',
  },
  label:{
    fontSize: moderateScale(16),
    fontWeight: '500',
    marginBottom: verticalScale(5),
  },
  input:{
    width: '100%',
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(25),
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(7),
    fontSize: moderateScale(15),
  },
  passCont:{
    position: 'relative',
    justifyContent: 'center'
  },
  hidePass:{
    paddingRight: scale(40),
  },
  eye:{
    position: 'absolute',
    right: scale(10),
  },
  
  rememberMe:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(10),
    marginTop: verticalScale(-10),
  },
  forget:{
    color: '#748cf9',
    fontWeight: '500',
  },
  
  button:{
    marginVertical: verticalScale(5),
  },
  
  devider:{
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: scale(15),
  },
  line:{
    backgroundColor: '#000',
    flex: 1,
    height: verticalScale(1),
  },
  orText:{
    marginHorizontal: scale(5),
  },
  
  social:{
    flexDirection: 'row',
    justifyContent: 'center',
    gap: scale(20),
    marginBottom: verticalScale(20),
  },
  socialIcon:{
    height: scale(45),
    width: scale(45),
    borderRadius: moderateScale(22.5),
    padding: moderateScale(10),
    borderWidth: moderateScale(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon:{
    height: scale(30),
    width: scale(30),
    borderRadius: moderateScale(15)
  },
  
  footer:{
    height: verticalScale(30),
    justifyContent: 'center',
  },
  footerText:{
    color: '#909090',
  },
  create:{
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    color: '#748cf9',
  },
});