import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Image, ActivityIndicator, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as ImagePicker from 'react-native-image-picker';
import Toast from "react-native-toast-message";
import ApiInstance from "../../config/Apis/ApiInstance";

export default function SendImage() {
    const [model, setModel] = useState({});
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const openGallery = () => {
        let options = { mediaType: 'photo', quality: 1 };
        ImagePicker.launchImageLibrary(options, response => {
            if (response.didCancel) return;
            if (response.assets && response.assets.length > 0) {
                setModel({ ...model, imageUrl: response.assets[0].uri });
            }
        });
    };

    // ✅ Send Image Data
    const sendComplain = async () => {
        if (!model.email || !model.text || !model.imageUrl) {
            return Toast.show({ type: 'error', text1: 'Please fill all fields' });
        }
        try {
            setLoading(true);

            let formData = new FormData();
            formData.append('email', model.email);
            formData.append('text', model.text);
            formData.append('image', {
                uri: model.imageUrl,
                type: 'image/jpeg',
                name: 'complaint.jpg'
            });

            const response = await ApiInstance.post('/userData/imageUpload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            console.log("✅ API Response: ", response.data);

            Toast.show({ type: 'success', text1: 'Complain Sent Successfully' });
            setLoading(false);
            navigation.goBack();
        } catch (error) {
            console.error("Frontend Error: ", error.message);
            Toast.show({ type: 'error', text1: 'Something went wrong' });
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Share Image for Admin</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
                onChangeText={(e) => setModel({ ...model, email: e })}
            />

            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Complain"
                placeholderTextColor="#999"
                multiline
                numberOfLines={4}
                onChangeText={(e) => setModel({ ...model, text: e })}
            />

            <View style={styles.imagePicker}>
                <TouchableOpacity onPress={openGallery} disabled={loading} style={styles.galleryButton}>
                    <MaterialIcons name="collections" size={30} color="#fff" />
                    <Text style={styles.galleryText}>Select Image</Text>
                </TouchableOpacity>
                {model.imageUrl && <Image source={{ uri: model.imageUrl }} style={styles.imagePreview} />}
            </View>

            <TouchableOpacity
                style={[styles.sendButton, loading && styles.disabledButton]}
                onPress={sendComplain}
                disabled={loading}
            >
                {loading ? <ActivityIndicator color="#FFF" /> : <Text style={styles.buttonText}>Send</Text>}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
        justifyContent: "center",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#B8860B",
        textAlign: "center",
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
    imagePicker: {
        alignItems: "center",
        marginBottom: 20,
    },
    galleryButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#B8860B",
        padding: 10,
        borderRadius: 10,
    },
    galleryText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 8,
    },
    imagePreview: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginTop: 10,
    },
    sendButton: {
        backgroundColor: "#B8860B",
        padding: 14,
        borderRadius: 10,
        alignItems: "center",
        elevation: 3,
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
});
