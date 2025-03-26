import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import Toast from "react-native-toast-message";
import ApiInstance from "../../config/Apis/ApiInstance";

export default function Doubt() {
    const [model, setModel] = useState({});
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const sendDoubt = async () => {
        if (!model.name || !model.email || !model.branch || !model.askAdmin) {
            return Toast.show({ type: 'error', text1: 'Please Provide all Fields' });
        }
        try {
            setLoading(true);
            await ApiInstance.post('/userData/askAdmin', model);
            Toast.show({ type: 'success', text1: 'Sent Successfully', text2: 'Your Question has been sent successfully' });
            setLoading(false);
            setModel("");
        } catch (error) {
            console.log(error);
            Toast.show({ type: 'error', text1: 'Internet connection error', text2: error.message });
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Feel Free to Ask!</Text>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} keyboardType="default" placeholder="Name" placeholderTextColor="#999" onChangeText={(e) => setModel({ ...model, name: e })} />
                <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#999" onChangeText={(e) => setModel({ ...model, email: e })} />
                <TextInput style={styles.input} placeholder="Branch" placeholderTextColor="#999" onChangeText={(e) => setModel({ ...model, branch: e })} />
                <TextInput style={[styles.input, styles.textArea]} placeholder="Ask Admin" placeholderTextColor="#999" multiline numberOfLines={4} onChangeText={(e) => setModel({ ...model, askAdmin: e })} />
            </View>

            <TouchableOpacity style={[styles.button, loading && styles.disabledButton]} onPress={sendDoubt} disabled={loading}>
                {loading ? <ActivityIndicator color="#FFF" /> : <Text style={styles.buttonText}>Send</Text>}
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonhome, { width: "100%" }]} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonHome}>Back to Home</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#B8860B",
        textTransform: "uppercase",
        letterSpacing: 1.5,
    },
    inputContainer: {
        width: "100%",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        padding: 12,
        borderWidth: 1,
        borderColor: "#B8860B",
        borderRadius: 10,
        marginBottom: 12,
        backgroundColor: "#F9F9F9",
        fontSize: 16,
        color: "#333",
    },
    textArea: {
        height: 100,
        textAlignVertical: "top",
    },
    button: {
        width: "100%",
        backgroundColor: "#B8860B",
        padding: 14,
        borderRadius: 10,
        alignItems: "center",
        elevation: 3,
        shadowColor: "#B8860B",
        shadowOpacity: 0.5,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 4 },
    },
    disabledButton: {
        backgroundColor: "#D4A017",
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    buttonhome: {
        width: "100%",
        backgroundColor: "white",
        padding: 14,
        borderRadius: 10,
        alignItems: "center",
        elevation: 2,
        shadowColor: "#B8860B",
        marginTop: 5,
        borderColor: '#B8860B',
        borderWidth: 1
    },
    buttonHome: {
        color: "#B8860B",
        fontSize: 18,
        fontWeight: "bold",
    },

});
