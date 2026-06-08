import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

import styles from './styles';
export default function LoginScreen({ onNavigate }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username.length === 0 || password.length === 0) {
            Alert.alert('Required', 'Please enter both Name and Password');
            return;
        }
        onNavigate('Home');
    };

    return ( <
        View style = { styles.mainContainer } >
        <
        Image source = { require('../images/Logo.png') }
        style = { styles.logo }
        />

        <
        View style = { styles.container } >
        <
        TextInput style = { styles.input }
        placeholder = "Name"
        placeholderTextColor = "#ccc"
        value = { username }
        onChangeText = { setUsername }
        />

        <
        TextInput style = { styles.input }
        placeholder = "Password"
        placeholderTextColor = "#ccc"
        secureTextEntry value = { password }
        onChangeText = { setPassword }
        />

        <
        Text style = { styles.forgot } > Forgot password ? < /Text>

        <
        TouchableOpacity style = { styles.signInBtn }
        onPress = { handleLogin } >
        <
        Text style = { styles.signInText } > SIGN IN < /Text> <
        /TouchableOpacity>

        <
        Text style = { styles.or } > OR < /Text>

        <
        View style = { styles.googleBtn } >
        <
        Text style = { styles.googleIconLabel } > G < /Text> <
        Text style = { styles.googleText } > LOGIN USING GOOGLE < /Text> <
        /View>

        <
        TouchableOpacity onPress = {
            () => onNavigate('Signup') } >
        <
        Text style = { styles.create } > Create an account < /Text> <
        /TouchableOpacity> <
        /View> <
        /View>
    );
}

// const styles = StyleSheet.create({
//   // New style for the image to fill the screen
//   background: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//     zIndex: 0,
//   },
//   container: { 
//     flex: 1, 
//     // Removed backgroundColor so the image shows through
//     alignItems: 'center', 
//     paddingTop: 260 // Increased padding so text inputs sit below the logo
//   },
//   input: { width: '80%', borderBottomWidth: 1, borderBottomColor:"rgba(255, 255, 255, 0.5)", color: '#fff', marginBottom: 25, fontSize: 18, paddingVertical: 8 },
//   forgot: { color: '#eee', width: '80%', textAlign: 'right', marginBottom: 25 },
//   signInBtn: { width: '80%', backgroundColor: '#fff', paddingVertical: 12, borderRadius: 3, marginBottom: 20 },
//   signInText: { textAlign: 'center', color: '#0057b8', fontWeight: 'bold', fontSize: 18 },
//   or: { color: '#fff', marginVertical: 10 },
//   googleBtn: { 
//     width: '80%', 
//     paddingVertical: 12, 
//     backgroundColor: '#fff', 
//     borderRadius: 3, 
//     marginBottom: 25,
//     flexDirection: 'row', 
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   googleIconLabel: {
//     color: '#d9534f', // Google Red
//     fontWeight: 'bold',
//     fontSize: 20,
//     marginRight: 10, // Add space between G and text
//   },
//   googleText: { 
//     // Removed textAlign: 'center' here, let the parent container handle it
//     color: '#d9534f', 
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   create:
//    { 
//     color: '#fff', 
//     textDecorationLine: 'underline', 
//     fontSize: 15, 
//     marginTop: 5 
//   }
// });