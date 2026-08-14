import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView,
  
} from 'react-native';
import { useRouter } from 'expo-router';
import { Stack,  } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import {useFonta, poppins_600Bold } from '@expo-google-fonts/poppins';


const Profile = () => {
  
  const router = useRouter();
  
  return (
  <>
    
    <ScrollView style={Styles.Container}>
      
      <View style={Styles.Header}>
        <Image
          source={{
            uri: 'https://siamahmed.unaux.com/Assets/Images/Img2.jpg'
          }}
          style={Styles.Profile}
        />
        <View style={Styles.HeaderBody}>
          <Text style={Styles.Title}>MD Siam Ahmed</Text>
          <Text style={Styles.subTitle}>+880 1952-068721</Text>
        </View>
        <Pressable 
        style={Styles.AccountBtn}
        onPress={()=>router.push('/profile-settings/switch-profile')}>
          <Text>Another Account</Text>
        </Pressable>
      </View>
      
      <View style={Styles.Card}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={Styles.Row}
          onPress={()=>router.push('/profile-settings/profile-info')}
        >
          <View style={Styles.left}>
            <Ionicons name="newspaper" size={16} color="#222222" />
            <Text style={Styles.text}>Account Informations</Text>
          </View>
          <View style={Styles.right}>
            <MaterialIcons name='keyboard-arrow-right' size={19} color='#222222' />
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity
          activeOpacity={0.6}
          style={Styles.Row}
          onPress={()=>router.push('/profile-settings/password-&-security')}
        >
          <View style={Styles.left}>
            <MaterialIcons name="security" size={17} color="222222" />
            <Text style={Styles.text}>Password & Security</Text>
          </View>
          <View style={Styles.right}>
            <MaterialIcons name='keyboard-arrow-right' size={19} color='222222' />
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity
          activeOpacity={0.6}
          style={Styles.Row}
          onPress={()=>router.push('/profile-settings/privacy-settings')}
        >
          <View style={Styles.left}>
            <Ionicons name="settings" size={16} color="#222222" />
            <Text style={Styles.text}>Privacy Settings</Text>
          </View>
          <View style={Styles.right}>
            <MaterialIcons name='keyboard-arrow-right' size={19} color='#222222' />
          </View>
        </TouchableOpacity>
      </View>
      
      <View style={Styles.Card}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={Styles.Row}
          onPress={()=>router.push('/profile-settings/support')}
        >
          <View style={Styles.left}>
            <MaterialIcons name="support-agent" size={18} color="#222222" />
            <Text style={Styles.text}>Support</Text>
          </View>
          <View style={Styles.right}>
            <MaterialIcons name='keyboard-arrow-right' size={19} color='#222222' />
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity
          activeOpacity={0.6}
          style={Styles.Row}
          onPress={()=>router.push('/profile-settings/report-a-problem')}
        >
          <View style={Styles.left}>
            <MaterialIcons name="report" size={18} color="#222222" />
            <Text style={Styles.text}>Report a problem</Text>
          </View>
          <View style={Styles.right}>
            <MaterialIcons name='keyboard-arrow-right' size={19} color='#222222' />
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity
          activeOpacity={0.6}
          style={Styles.Row}
          onPress={()=>router.push('/profile-settings/privacy-policy')}
        >
          <View style={Styles.left}>
            <FontAwesome name="book" size={16} color="#222222" />
            <Text style={Styles.text}>Privacy policy</Text>
          </View>
          <View style={Styles.right}>
            <MaterialIcons name='keyboard-arrow-right' size={19} color='#222222' />
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity
          activeOpacity={0.6}
          style={Styles.Row}
          onPress={()=>router.push('/profile-settings/invite-a-friend')}
        >
          <View style={Styles.left}>
            <Ionicons name="people" size={18} color="#222222" />
            <Text style={Styles.text}>invite a friend</Text>
          </View>
          <View style={Styles.right}>
            <MaterialIcons name='keyboard-arrow-right' size={19} color='#222222' />
          </View>
        </TouchableOpacity>
        
          <TouchableOpacity
          activeOpacity={0.6}
          style={Styles.Row}
          onPress={()=>router.push('')}
        >
          <View style={Styles.left}>
            <MaterialIcons name="system-update" size={18} color="#222222" />
            <Text style={Styles.text}>App Update</Text>
          </View>
          <View style={Styles.right}>
            <MaterialIcons name='keyboard-arrow-right' size={19} color='#222222' />
          </View>
        </TouchableOpacity>
        
      </View>
      
      <View style={Styles.Card}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={Styles.Row}
          onPress={()=>router.push('/login')}
        >
          <View style={Styles.left}>
            <Ionicons name="log-out" size={19} color="#ff4d4d" />
            <Text style={[Styles.text, Styles.logOut]}>LogOut</Text>
          </View>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  
  </>
  );
};

export default Profile;

const Styles = StyleSheet.create({
  Container:{
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  Header:{
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 24,
  },
  Profile:{
    height: 90,
    width: 90,
    borderWidth: 2,
    borderRadius: 45,
    backgroundColor: '#e0e0e0',
  },
  HeaderBody:{
    marginVertical: 8,
    alignItems: 'center',
  },
  Title:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  subTitle:{
    fontSize: 13,
    fontWeight: '400',
    color: '#666666',
  },
  AccountBtn:{
    backgroundColor: '#4A80F0',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  Card:{
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginHorizontal: 16,
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  Row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    alignItems: 'center',
  },
  left:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  text:{
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 15,
    color: '#222222',
  },
  logOut:{
    color: '#ff4d4d',
  },
});