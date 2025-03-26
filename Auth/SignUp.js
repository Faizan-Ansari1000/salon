import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from "react-native";
import Toast from "react-native-toast-message";
import ApiInstance from "../config/Apis/ApiInstance";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignUp() {
    const [model, setModel] = useState({});
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const signUpUser = async () => {
        if (!model.name || !model.email || !model.password) {
            return Toast.show({ type: 'error', text1: 'Validation error', text2: 'Please fill all fields!' });
        }
        try {
            setLoading(true);
            const res = await ApiInstance.post('/authRoute/signUpUser', model);

            await AsyncStorage.setItem('userId', res.data.data._id);
            console.log("Signup Response:", res.data);

            Toast.show({ type: 'success', text1: 'SignUp Successful', text2: 'Account created successfully!' });
            setLoading(false);
            navigation.navigate('Home');
        } catch (error) {
            console.log(error);
            Toast.show({ type: 'error', text1: 'SignUp Failed', text2: error.message });
            setLoading(false);
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Join the Glam World</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="User Name" placeholderTextColor="#777" onChangeText={(e) => setModel({ ...model, name: e })} />
                <TextInput style={styles.input} placeholder="User Email" placeholderTextColor="#777" onChangeText={(e) => setModel({ ...model, email: e })} />
                <TextInput style={styles.input} placeholder="User Password" placeholderTextColor="#777" onChangeText={(e) => setModel({ ...model, password: e })} secureTextEntry={true} />
            </View>
            <TouchableOpacity style={[styles.button, loading && styles.disabledButton]} onPress={signUpUser} disabled={loading}>
                {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Sign Up</Text>}
            </TouchableOpacity>
            <Text style={styles.loginText}>Already have an account? <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>Login</Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#B8860B',
        textTransform: 'uppercase',
        letterSpacing: 1.5,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 12,
        borderWidth: 1,
        borderColor: '#B8860B',
        borderRadius: 10,
        marginBottom: 12,
        backgroundColor: '#F9F9F9',
        fontSize: 16,
        color: '#333',
    },
    button: {
        width: '100%',
        backgroundColor: '#B8860B',
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#B8860B',
        shadowOpacity: 0.5,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 4 },
    },
    disabledButton: {
        backgroundColor: '#D4A017',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    loginText: {
        marginTop: 15,
        fontSize: 14,
        color: '#555',
    },
    loginLink: {
        color: '#B8860B',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});
