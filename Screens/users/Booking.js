import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, ActivityIndicator, StyleSheet, ScrollView } from "react-native";
import Toast from "react-native-toast-message";
import ApiInstance from "../../config/Apis/ApiInstance";

export default function Booking() {
    const [model, setModel] = useState({});
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const submitForm = async () => {
        if (!model.name || !model.email || !model.phoneNo || !model.date_time || !model.category || !model.branch || !model.payment) {
            return Toast.show({ type: 'error', text1: 'Validation error', text2: 'Please provide all fields' });
        }
        setLoading(true);
        try {
            const res = await ApiInstance.post('/userData/appointment', model,);

            console.log("API Response:", res.data);

            Toast.show({ type: 'success', text1: 'Submission Successful', text2: 'Your form has been submitted (Awaiting admin approval)' });
            setModel({});
        } catch (error) {
            console.log("API Error:", error);
            Toast.show({ type: 'error', text1: 'Connection Error', text2: error.message });
        } finally {
            setLoading(false);
        }
    };



    return (
        <View style={styles.container}>
            <Text style={styles.header}>Book Your Appointment</Text>
            <ScrollView>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Name" onChangeText={(e) => setModel({ ...model, name: e })} />
                    <TextInput style={styles.input} placeholder="Email" onChangeText={(e) => setModel({ ...model, email: e })} keyboardType="email-address" />
                    <TextInput style={styles.input} placeholder="Phone No" onChangeText={(e) => setModel({ ...model, phoneNo: e })} keyboardType="phone-pad" />
                    <TextInput style={styles.input} placeholder="Category" onChangeText={(e) => setModel({ ...model, category: e })} />
                    <TextInput style={styles.input} placeholder="Date and Time" onChangeText={(e) => setModel({ ...model, date_time: e })} />
                    <TextInput style={styles.input} placeholder="Branch" onChangeText={(e) => setModel({ ...model, branch: e })} />
                    <TextInput style={styles.input} placeholder="Payment (Online or On-site)" onChangeText={(e) => setModel({ ...model, payment: e })} />
                </View>
                <TouchableOpacity style={styles.submitButton} disabled={loading} onPress={submitForm}>
                    {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.submitText}>Submit</Text>}
                </TouchableOpacity>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    header: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#B8860B",
        marginBottom: 20,
        textAlign: "center",
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        backgroundColor: "#f8f8f8",
        padding: 12,
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#B8860B",
    },
    submitButton: {
        backgroundColor: "#B8860B",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
    },
    submitText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    backText: {
        color: "#B8860B",
        fontSize: 16,
        fontWeight: "bold",
    },
    backButton: {
        borderColor: "#B8860B",
        borderWidth: 1,
        marginTop: 10,
        backgroundColor: "white",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        shadowColor: "#B8860B",
    },

});
