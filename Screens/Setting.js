import { View, Text, Switch, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { useState } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

export default function Setting() {
    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const navigation = useNavigation();

    const toggleSwitch = () => setIsNotificationsEnabled(previousState => !previousState);

    const logOut = () => {
        try {
            setIsDisabled(true);
            setTimeout(() => {
                setIsDisabled(false);
                navigation.navigate('SignUp');
            }, 4000);
        } catch (error) {
            console.log(error);
            Toast.show({ type: 'error', text1: 'Please Try Again' });
            setIsDisabled(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Settings</Text>

            <View style={styles.settingOption}>
                <Text style={styles.optionText}>Push Notifications</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#B8860B" }}
                    thumbColor={isNotificationsEnabled ? "#fff" : "#f4f3f4"}
                    onValueChange={toggleSwitch}
                    value={isNotificationsEnabled}
                />
            </View>

            <TouchableOpacity style={styles.settingOption} onPress={() => navigation.navigate('FAQs')}>
                <Text style={styles.optionText}>FAQs</Text>
                <Icon name="quiz" size={20} color="#B8860B" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingOption} onPress={() => navigation.navigate('sendImage')}>
                <Text style={styles.optionText}>Send Complain</Text>
                <Icon name="report-problem" size={20} color="#B8860B" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingOption} onPress={() => navigation.navigate('GetNotified')}>
                <Text style={styles.optionText}>Approval</Text>
                <MaterialIcons name="check-circle" size={24} color="#B8860B" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingOption} onPress={() => navigation.navigate('userAccount')}>
                <Text style={styles.optionText}>Account</Text>
                <MaterialIcons name="account-circle" size={24} color="#B8860B" />
            </TouchableOpacity>

            {/* Logout Button with Activity Indicator */}
            <TouchableOpacity
                style={[styles.logoutButton, isDisabled && styles.disabledButton]}
                onPress={logOut}
                disabled={isDisabled}
            >
                {isDisabled ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                    <Text style={styles.logoutText}>Logout</Text>
                )}
            </TouchableOpacity>
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
        fontSize: 24,
        fontWeight: "bold",
        color: "#B8860B",
        marginBottom: 20,
    },
    settingOption: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
    },
    optionText: {
        fontSize: 16,
        color: "#333",
    },
    logoutButton: {
        backgroundColor: "#B8860B",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
    },
    disabledButton: {
        backgroundColor: "#D4A017", // Disabled hone par halka color
    },
    logoutText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    }
});
