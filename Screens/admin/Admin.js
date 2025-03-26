import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function Admin() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Admin Panel</Text>
            </View>

            {/* Admin Info Box */}
            <View style={styles.infoBox}>
                <MaterialIcons name="admin-panel-settings" size={30} color="#B8860B" />
                <Text style={styles.infoText}>Welcome, Admin! Manage your salon services efficiently.</Text>
            </View>

            {/* Buttons Section */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisteredUser')}>
                    <MaterialIcons name="group" size={24} color="white" />
                    <Text style={styles.buttonText}>Registered Users</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ManageServices')}>
                    <MaterialIcons name="miscellaneous-services" size={24} color="white" />
                    <Text style={styles.buttonText}>Manage Services</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ViewReports')}>
                    <MaterialIcons name="assessment" size={24} color="white" />
                    <Text style={styles.buttonText}>View Reports</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserAppointment')}>
                    <MaterialIcons name="book-online" size={24} color={'white'} />
                    <Text style={styles.buttonText}>Appointments</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.homeButton]} onPress={() => navigation.navigate('Home')}>
                    <MaterialIcons name="home" size={24} color="white" />
                    <Text style={styles.buttonText}>Go to Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    header: {
        width: "100%",
        backgroundColor: "#B8860B",
        paddingVertical: 20,
        alignItems: "center",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        elevation: 5,
    },
    headerText: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#fff",
        textTransform: "uppercase",
        letterSpacing: 1.5,
    },
    infoBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFF4E5",
        padding: 12,
        borderRadius: 10,
        width: "90%",
        marginVertical: 20,
        elevation: 3,
    },
    infoText: {
        fontSize: 16,
        color: "#333",
        marginLeft: 10,
        flexShrink: 1,
    },
    buttonContainer: {
        width: "100%",
        alignItems: "center",
        marginTop: 20,
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        backgroundColor: "#B8860B",
        padding: 14,
        borderRadius: 10,
        marginVertical: 10,
        elevation: 5,
        shadowColor: "#B8860B",
        shadowOpacity: 0.5,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 4 },
    },
    homeButton: {
        backgroundColor: "#333",
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase",
        marginLeft: 10,
    },
});
