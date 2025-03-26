import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View, StyleSheet, Modal, TextInput } from "react-native";
import ApiInstance from "../../config/Apis/ApiInstance";
import Toast from "react-native-toast-message";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function UserAppointment() {
    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [model, setModel] = useState({});
    const [modalLoading, setModalLoading] = useState(false);

    const getData = useCallback(async () => {
        try {
            setLoading(true);
            const res = await ApiInstance.get("/userData/appointment");
            setPostData(res.data.data);
        } catch (error) {
            Toast.show({ type: "error", text1: "No Data Found" });
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getData();
    }, []);

    const sendNotification = async () => {
        if (!model.email || !model.message) {
            return Toast.show({ type: 'error', text1: 'Validation error', text2: 'Please Fill the Input' });
        }
        try {
            setModalLoading(true);
            await ApiInstance.post('/userData/notification', model);
            Toast.show({ type: 'success', text1: 'Successfully pushed Notification' });
            setIsOpen(false);
            setModel("");
        } catch (error) {
            console.log(error);
            Toast.show({ type: 'error', text1: 'Internal server error', text2: 'Something went wrong (Please try Again)' });
        } finally {
            setModalLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            {/* Modal Section */}
            <Modal
                visible={isOpen}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setIsOpen(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Send Notification</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="#aaa"
                            onChangeText={(e) => setModel({ ...model, email: e })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Message (Yes or No)"
                            placeholderTextColor="#aaa"
                            onChangeText={(e) => setModel({ ...model, message: e })}
                        />
                        <View style={styles.modalActions}>
                            <TouchableOpacity style={styles.closeButton} onPress={() => setIsOpen(false)}>
                                <MaterialIcons name="close" size={22} color="#fff" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.sendButton} onPress={sendNotification} disabled={modalLoading}>
                                {modalLoading ? (
                                    <ActivityIndicator size="small" color="#fff" />
                                ) : (
                                    <MaterialIcons name="send" size={24} color={'#fff'} />
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <Text style={styles.header}>📅 Appointments</Text>
            {loading ? (
                <ActivityIndicator size={30} color="#B8860B" />
            ) : (
                <FlatList
                    data={postData}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <View style={styles.infoContainer}>
                                <Text style={styles.label}><Text style={styles.bold}>👤 Name:</Text> {item.name}</Text>
                                <Text style={styles.label}><Text style={styles.bold}>📧 Email:</Text> {item.email}</Text>
                                <Text style={styles.label}><Text style={styles.bold}>📞 Phone No:</Text> {item.phoneNo}</Text>
                                <Text style={styles.label}><Text style={styles.bold}>📌 Category:</Text> {item.category}</Text>
                                <Text style={styles.label}><Text style={styles.bold}>📅 Date & Time:</Text> {item.date_time}</Text>
                                <Text style={styles.label}><Text style={styles.bold}>🏢 Branch:</Text> {item.branch}</Text>
                                <Text style={styles.payment}><Text style={styles.bold}>💰 Payment:</Text> {item.payment}</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.notifyButton}
                                onPress={() => {
                                    setIsOpen(true);
                                }}
                            >
                                <MaterialIcons name="notifications-active" size={28} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            )}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        padding: 20,
    },
    header: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#B8860B",
        marginBottom: 20,
        textAlign: "center",
    },
    card: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        marginBottom: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    infoContainer: {
        flex: 1,
        paddingRight: 10,
    },
    label: {
        fontSize: 15,
        color: "#444",
        marginBottom: 4,
    },
    bold: {
        fontWeight: "bold",
        color: "#000",
    },
    payment: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#B8860B",
        marginTop: 5,
    },
    notifyButton: {
        backgroundColor: "#B8860B",
        padding: 12,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    // Modal Styles
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        width: "85%",
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        elevation: 10,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 15,
    },
    input: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        color: "#333",
        marginBottom: 15,
    },
    modalActions: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    closeButton: {
        flexDirection: "row",
        backgroundColor: "#d9534f",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    sendButton: {
        backgroundColor: "#B8860B",
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        width: 50,
    },
});

