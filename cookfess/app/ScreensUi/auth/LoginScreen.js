import React, { useState } from 'react';
import { View, Text, TextInput, Pressable,Alert } from 'react-native';
import styles from './styles';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const navigator = useNavigation();
    const handlePress = () => {
        navigation.navigate('Sign Up'); // Replace 'TargetScreen' with the name of the screen you want to navigate to
    };
    const handleLogin = () => {
        // Add your login logic here (e.g., API call)
        if (email === '' || password === '') {
            Alert.alert('Error', 'Please enter both email and password');
        } else {
            // You can navigate to a different screen after successful login
            navigation.navigate('HomeScreen');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
            />

            <Pressable style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
            <Pressable style={styles.signup_url} onPress={handlePress}>
                <Text style={styles.linktxt}>Don't Have a Account ? Signup Here !</Text>
            </Pressable>
        </View>
    );
};
export default LoginScreen;
