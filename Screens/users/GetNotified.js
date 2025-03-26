import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View, StyleSheet, TextInput } from "react-native";
import ApiInstance from "../../config/Apis/ApiInstance";
import Toast from "react-native-toast-message";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function GetNotified() {
    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState("");

    const getData = async () => {
        try {
            setLoading(true);
            const res = await ApiInstance.get('userData/notification');
            setPostData(res.data.data);
        } catch (error) {
            console.error("API Error:", error);
            Toast.show({ type: "error", text1: "Error", text2: "Failed to fetch notifications" });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>📢 Approval Notifications</Text>
            <TextInput
                style={styles.searchBar}
                placeholder="Search by email..."
                placeholderTextColor="#888"
                value={searchText}
                onChangeText={setSearchText}
            />
            {loading ? (
                <ActivityIndicator size={30} color="#B8860B" />
            ) : postData.length === 0 ? (
                <Text style={styles.noNotifications}>No notifications available</Text>
            ) : (
                <FlatList
                    data={postData}
                    keyExtractor={(item, index) => item._id || index.toString()}
                    renderItem={({ item }) => {
                        const isHighlighted = item.email.toLowerCase().includes(searchText.toLowerCase());
                        return (
                            <TouchableOpacity style={[styles.card, isHighlighted && styles.highlightedCard]}>
                                <View style={styles.iconContainer}>
                                    <MaterialIcons name="notifications-active" size={24} color="#B8860B" />
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.emailText}>{item.email}</Text>
                                    <Text style={styles.messageText}>{item.message}</Text>
                                    <Text style={styles.dateText}>📅 {item.dateTime}</Text>
                                </View>
                            </TouchableOpacity>
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
        backgroundColor: "#F5F5F5",
        padding: 20,
    },
    header: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center",
        color: "#222",
    },
    searchBar: {
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#B8860B",
        color: "#333",
        fontSize: 16,
        marginBottom: 15,
    },
    noNotifications: {
        textAlign: "center",
        fontSize: 16,
        color: "#888",
        marginTop: 20,
    },
    card: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 12,
        marginBottom: 12,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        borderWidth: 1,
        borderColor: "#ddd",
    },
    highlightedCard: {
        borderColor: "#B8860B",
        backgroundColor: "#FFF7E1",
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#FFF0C2",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
    },
    emailText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#222",
    },
    messageText: {
        fontSize: 14,
        color: "#444",
        marginTop: 3,
    },
    dateText: {
        fontSize: 13,
        color: "#777",
        marginTop: 3,
    },
});
