import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Modal } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function ManageServices() {
    const navigation = useNavigation();
    const [isOpen, setIsOpen] = useState(false);

    navigation.setOptions({
        headerRight: () => 
            <TouchableOpacity onPress={() => setIsOpen(true)} style={{ marginStart: 22 }}>
                <MaterialIcons name="miscellaneous-services" size={28} color="#B8860B" />
            </TouchableOpacity>
        
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Manage Your Services</Text>

            <View style={styles.infoBox}>
                <MaterialIcons name="info-outline" size={30} color="#B8860B" />
                <Text style={styles.infoText}>
                    Tap on the services icon to manage salon services.
                </Text>
            </View>

            <View style={styles.servicePreview}>
                <Text style={styles.previewTitle}>Popular Services</Text>
                <View style={styles.serviceRow}>
                    <MaterialIcons name="content-cut" size={24} color="#B8860B" />
                    <Text style={styles.serviceText}>HairCut</Text>
                </View>
                <View style={styles.serviceRow}>
                    <MaterialIcons name="brush" size={24} color="#B8860B" />
                    <Text style={styles.serviceText}>Makeup</Text>
                </View>
                <View style={styles.serviceRow}>
                    <MaterialIcons name="spa" size={24} color="#B8860B" />
                    <Text style={styles.serviceText}>Massage</Text>
                </View>
            </View>

            {/* Modal */}
            <Modal
                transparent={true}
                visible={isOpen}
                animationType="fade"
                onRequestClose={() => setIsOpen(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Services</Text>

                        <TouchableOpacity style={styles.modalButton} onPress={() => { setIsOpen(false); navigation.navigate('HairCut'); }}>
                            <Text style={styles.buttonText}>HairCut</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={() => { setIsOpen(false); navigation.navigate('Makeup'); }}>
                            <Text style={styles.buttonText}>Makeup</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={() => { setIsOpen(false); navigation.navigate('Massage'); }}>
                            <Text style={styles.buttonText}>Massage</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={() => { setIsOpen(false); navigation.navigate('NailCare'); }}>
                            <Text style={styles.buttonText}>NailCare</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={() => { setIsOpen(false); navigation.navigate('SkinCare'); }}>
                            <Text style={styles.buttonText}>SkinCare</Text>
                        </TouchableOpacity>

                        {/* Close Button */}
                        <TouchableOpacity onPress={() => setIsOpen(false)} style={styles.closeButton}>
                            <MaterialIcons name="close" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
        color: "#B8860B",
        marginBottom: 20,
        textTransform: "uppercase",
        letterSpacing: 1.5,
    },
    infoBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFF4E5",
        padding: 12,
        paddingEnd:30,
        borderRadius: 10,
        marginBottom: 20,
        width: "90%",
    },
    infoText: {
        fontSize: 16,
        color: "#333",
        marginLeft: 10,
    },
    servicePreview: {
        width: "90%",
        backgroundColor: "#FFF4E5",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    previewTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#B8860B",
        marginBottom: 10,
    },
    serviceRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    serviceText: {
        fontSize: 16,
        marginLeft: 8,
        color: "#333",
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    modalContainer: {
        width: "60%",
        backgroundColor: "#fff",
        padding: 15,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#B8860B",
        marginBottom: 10,
    },
    modalButton: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    closeButton: {
        backgroundColor: "#B8860B",
        padding: 8,
        borderRadius: 20,
        alignSelf: "flex-end",
        marginTop: 10,
    },
});
