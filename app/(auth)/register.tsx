import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../src/components/Button';
import { router } from 'expo-router';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import imagePath from '../../src/constants/imagePath'
import {Ionicons} from '@expo/vector-icons'



const Register = () => {
  
  //Create Account
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('');
  //password
  const [hidePass, setHidePass] = useState(false);
  const [hideConPass, setHideConPass] = useState(false);
  //Error
  const [error, setError] = useState('');
  //Password Matching
  const conPassMatching = (text) =>{
    setConfirmPass(text)
    if(text !== password && text.length > 0 ){
      setError('Password Not Match');
    }else{
      setError('');
    }
  }
  const passMatching = (text) => {
    setPassword(text)
    if(confirmPass && text !== confirmPass){
      setError('Password do not match')
    }else{
      setError('')
    }
  }
  //buttonLink
  const buttonLink = ()=>{
    if(password !== confirmPass || password === ''){
      setError('Password Not Match')
      return
    }
    if(password.length < 6){
      alert('Password must be 6 characters')
      return
    }
    setError('')
    alert('Account Create Successfull')
  }
  
  return (
    <>
    <StatusBar style='dark'/>
    <SafeAreaView style={Styles.Container}>
      <View style={Styles.header}>
        <Text style={Styles.title}>Create Account</Text>
        <Text style={Styles.subTitle}>Create an account and join with us</Text>
      </View>
      <View style={Styles.body}>
        <View style={Styles.inputContainer}>
          <Text style={Styles.label}>Full Name</Text>
          <TextInput
            style={Styles.input}
            value={name}
            onChangeText={setName}
            placeholder='Full Name'
          />
        </View>
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
              style={[Styles.input, error ? Styles.inputError: null, Styles.hidePass]}
              value={password}
              onChangeText={passMatching}
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
        <View style={Styles.inputContainer}>
          <Text style={Styles.label}>Confirm Password</Text>
          <View style={Styles.passCont}>
            <TextInput
              style={[Styles.input, error?Styles.inputError:null, Styles.hidePass]}
              value={confirmPass}
              onChangeText={conPassMatching}
              placeholder='Confirm Password'
              secureTextEntry={!hideConPass}
            />
            <TouchableOpacity 
              style={Styles.eye}
              onPress={() => setHideConPass(!hideConPass)}
            >
              <Ionicons 
                name={hideConPass ? "eye-off" : "eye"} 
                size={22} 
                color="gray"
          />
            </TouchableOpacity>
          </View>
          {error ? <Text style={Styles.errorText}>{error}</Text> : null}
        </View>
        <View style={Styles.button}>
          <Button title='Create' onPress={buttonLink}/>
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
        <Text style={Styles.footerText}>I have an account? <Text style={Styles.create} onPress={()=>{router.push('./login')}}>Login</Text></Text>
      </View>
    </SafeAreaView>
    </>
  )
}

export default Register;

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
  
  inputError:{
    borderColor: 'red', // Error হলে Border লাল
  },
  errorText:{
    color: 'red',
    fontSize: moderateScale(12),
    marginTop: verticalScale(4),
    marginLeft: scale(5)
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