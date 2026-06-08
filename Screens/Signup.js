import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  Alert, 
  Image,
  ScrollView          
} from 'react-native';
import styles from './styles';
export default function SignUpScreen({ onNavigate }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const handleRegister = () => {
    if (name === '' || email === '' || pass === '') {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    if (!email.includes('@')) {
      Alert.alert('Error', 'Enter a valid email');
      return;
    }
    if (pass !== confirmPass) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    Alert.alert('Success', 'Account Created!', [
      { text: 'OK', onPress: () => onNavigate('Login') }
    ]);
  };

  return (
    <View style={styles.mainContainer}>

      <Image 
        source={require('../images/Logo.png')}
        style={styles.logo} 
      />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >

        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
           placeholderTextColor="rgba(255, 255, 255, 0.5)"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <View style={styles.dateContainer}>
          <TextInput
            style={styles.dateInput}
            placeholder="Birth Date"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            value={dob}
            onChangeText={setDob}
          />
          <Text style={styles.arrowIcon}></Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Password"
           placeholderTextColor="rgba(255, 255, 255, 0.5)"
          secureTextEntry
          value={pass}
          onChangeText={setPass}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          secureTextEntry
          value={confirmPass}
          onChangeText={setConfirmPass}
        />

        <TouchableOpacity style={styles.btn} onPress={handleRegister}>
          <Text style={styles.btnText}>SIGN UP</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onNavigate('Login')} style={{marginTop: 20}}>
          <Text style={styles.linkText}>Already have an account? Login</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );}

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: '#0057b8',
//   },
//   logo: {
//     position: 'absolute',
//     top: 50,
//     alignSelf: 'center',
//     width: 300,
//     height: 300,
//     resizeMode: 'contain',
//     zIndex: 0,
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     alignItems: 'center',
//     paddingTop: 280,
//     paddingBottom: 30,
//   },
//   title: {
//     color: '#fff',
//     fontSize: 28,
//     marginBottom: 20,
//     fontWeight: 'bold'
//   },
//   input: {
//     width: '80%',
//     borderBottomWidth: 1,
//     borderBottomColor:"rgba(255, 255, 255, 0.5)",
//     marginBottom: 20,
//     fontSize: 18,
//     color: '#fff',
//     paddingVertical: 5
//   },
//   dateContainer: {
//     width: '80%',
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   dateInput: {
//     flex: 1,
//     fontSize: 18,
//     color: '#fff',
//     paddingVertical: 5,
//   },
//   arrowIcon: {
//     color: '#fff',
//     fontSize: 12,
//     paddingRight: 5
//   },
//   btn: {
//     width: '80%',
//     backgroundColor: '#fff',
//     paddingVertical: 13,
//     borderRadius: 5,
//     marginTop: 10
//   },
//   btnText: {
//     textAlign: 'center',
//     color: '#0057b8',
//     fontSize: 18,
//     fontWeight: 'bold'
//   },
//   linkText: {
//     color: '#fff',
//     textDecorationLine: 'underline',
//     fontSize: 16
//   }
// });
