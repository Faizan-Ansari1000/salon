import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from "react-native";
import Toast from "react-native-toast-message";
import ApiInstance from "../config/Apis/ApiInstance";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
    const [model, setModel] = useState({});
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();
    const [user, setUser] = useState(null)

    const submitForm = async () => {
        if (!model.email || !model.password) {
            return Toast.show({ type: 'error', text1: 'Validation error', text2: 'Please provide All Fields' })
        }
        try {
            setLoading(true)
            const userId = AsyncStorage.getItem('userID', user)
            if (!userId) {
                return;
            }
            const res = await ApiInstance.post('/authRoute/login', model)
            const { role } = res.data
            if (role === 'admin') {
                Toast.show({ type: 'success', text1: 'Logged In', text2: 'Welcome Admin' })
                navigation.navigate('Admin')
                setLoading(false)
            } else {
                Toast.show({ type: 'success', text1: 'Successfully Logged In' })
                navigation.navigate('Home')
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
            Toast.show({ type: 'error', text1: 'Internal server error', error: 'Something went wrong' })
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Logged In</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="User Email" placeholderTextColor="#777" onChangeText={(e) => setModel({ ...model, email: e })} editable={!loading} />
                <TextInput style={styles.input} placeholder="User Password" placeholderTextColor="#777" secureTextEntry onChangeText={(e) => setModel({ ...model, password: e })} editable={!loading} />
            </View>
            <TouchableOpacity style={[styles.button, loading && styles.disabledButton]} onPress={submitForm} disabled={loading}>
                {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Login</Text>}
            </TouchableOpacity>
            <Text style={styles.loginText}>Not Account? <Text style={styles.loginLink} onPress={() => navigation.navigate('SignUp')}>SignUp</Text></Text>
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
