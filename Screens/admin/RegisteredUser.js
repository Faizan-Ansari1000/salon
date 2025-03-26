import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import ApiInstance from "../../config/Apis/ApiInstance";
import Toast from "react-native-toast-message";

export default function RegisteredUser() {
    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
            setLoading(true);
            const res = await ApiInstance.get('/authRoute/signUpUser');
            setPostData(res.data.data);
            setLoading(false)
        } catch (error) {
            console.log(error);
            Toast.show({ type: 'error', text1: 'Error', text2: 'Please check your internet connection' });
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getData();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registered Users</Text>

            {loading ? (
                <ActivityIndicator size="large" color="#B8860B" />
            ) : (
                <FlatList
                    data={postData}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.card}>
                            <Text style={styles.userName}>{item.name}</Text>
                            <Text style={styles.userEmail}>{item.email}</Text>
                        </TouchableOpacity>
                    )}
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
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#B8860B",
        marginBottom: 15,
        textAlign: "center",
    },
    card: {
        backgroundColor: "#FFF8DC",
        padding: 15,
        borderRadius: 10,
        marginBottom: 12,
        shadowColor: "#B8860B",
        shadowOpacity: 0.4,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    userName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    userEmail: {
        fontSize: 14,
        color: "#777",
        marginTop: 5,
    },
});
