import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';


export default function Button({title, onPress}:any){
  return(
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={Styles.Button}
    >
      <Text style={Styles.Title}>{title}</Text>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
  Button:{
    width: '100%',
    backgroundColor: '#55b4e0',
    paddingVertical: verticalScale(7),
    paddingHorizontal: scale(10),
    borderRadius: moderateScale(25),
    alignItems: 'center',
  },
  Title:{
    color: '#fff',
    fontWeight: '500',
    fontSize: moderateScale(15),
  }
})