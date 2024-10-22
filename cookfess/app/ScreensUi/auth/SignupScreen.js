import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

const SignupScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState('IN');  // Default country code is 'IN' (India)
    const [callingCode, setCallingCode] = useState('91');   // Default calling code for India

    const handleSignup = () => {
        // Add your signup logic here (e.g., API call)
        navigation.navigate('Home');

        if (!username || !email || !password || !phoneNumber) {
            Alert.alert('Error', 'Please fill in all fields');
        } else {
            Alert.alert('Success', 'Account created successfully!');
            navigation.navigate('Home');
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text style={styles.title}>Sign Up</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                        autoCapitalize="none"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        autoCapitalize="none"
                    />

                    <View style={styles.phoneContainer}>
                        <CountryPicker
                            withFilter
                            withFlag
                            countryCode={countryCode}
                            withCallingCode
                            withEmoji
                            onSelect={(country) => {
                                setCountryCode(country.cca2);
                                setCallingCode(country.callingCode[0]);
                            }}
                        />
                        <Text style={styles.callingCode}>+{callingCode}</Text>
                        <TextInput
                            style={[styles.input, styles.phoneInput]}
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            keyboardType="phone-pad"
                        />
                    </View>

                    <Pressable style={styles.button} onPress={handleSignup}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#0f172a',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#0f172a',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f8f9fa',
        backgroundColor: '#0f172a',

    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40,
        color: '#fff',
    },
    input: {
        height: 50,
        width: '100%', // Ensure it takes the full width of its container
        maxWidth: 400,  // Set a maximum width to avoid over-expansion
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    phoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    callingCode: {
        marginLeft: 10,
        fontSize: 16,
        color: "#fff"
    },
    phoneInput: {
        marginTop:20,
        marginLeft: 10,
        flex: 1,
        fontSize: 16
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        width: '100%',
        maxWidth: 400,  // Set a maximum width for the button
        alignSelf: 'center', // Center the button horizontally
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default SignupScreen;
