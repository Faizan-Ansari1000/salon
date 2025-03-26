import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import ApiInstance from "../../config/Apis/ApiInstance";
import Toast from "react-native-toast-message";

export default function Complains() {
    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = useCallback(async () => {
        try {
            setLoading(true);
            const res = await ApiInstance.get('/userData/imageUpload');
            console.log(res.data);
            setPostData(res.data.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            Toast.show({ type: 'error', text1: 'Internet error', text2: 'Check your internet connection' });
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Complaints</Text>
            {loading ? (
                <ActivityIndicator size="large" color="#B8860B" style={styles.loader} />
            ) : (
                <FlatList
                    data={postData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        console.log("📸 Image URL:", item.imageUrl);
                        return (
                            <View style={styles.card}>
                                {item.imageUrl ? (
                                    <Image source={{ uri: item.imageUrl?.startsWith("http") ? item.imageUrl : `http://192.168.2.107:5000/${item.imageUrl}` }}
                                        style={styles.image}
                                        resizeMode="cover"
                                    />
                                ) : (
                                    <Text style={styles.noImageText}>No Image Available</Text>
                                )}
                                <Text style={styles.email}>{item.email}</Text>
                                <Text style={styles.text}>{item.text}</Text>
                            </View>
                        );
                    }}
                />

            )}
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
    loader: {
        marginTop: 50,
    },
    card: {
        backgroundColor: "#f5f5f5",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    email: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    text: {
        fontSize: 14,
        color: "#555",
        marginTop: 5,
        marginBottom: 10,
    },
    image: {
        width: 200,
        height: 200, 
        borderRadius: 10,
        backgroundColor: "#eee"
    },
    noImageText: {
        fontSize: 16,
        color: "#888",
        textAlign: "center",
        marginTop: 10,
    }
});
