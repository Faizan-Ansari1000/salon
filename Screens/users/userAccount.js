import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import ApiInstance from "../../config/Apis/ApiInstance";

export default function UserAccount() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    const [loggingOut, setLoggingOut] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            const userId = await AsyncStorage.getItem("userId");
            console.log("Fetching Profile for User ID:", userId);
            if (!userId) return;

            try {
                const res = await ApiInstance.get(`/authRoute/signUpUser/${userId}`);
                console.log("Profile API Response:", res.data);
                if (res.data.isSuccessfully) {
                    setUser(res.data.data);
                }
            } catch (error) {
                console.log("Error fetching profile", error);
            }
            setLoading(false);
        };
        fetchProfile();
    }, []);

    const logOut = async () => {
        try {
            setLoggingOut(true); 
            await AsyncStorage.removeItem('userId');
            navigation.reset({
                index: 0,
                routes: [{ name: 'SignUp' }],
            });
        } catch (error) {
            console.error("Logout Error:", error);
        } finally {
            setLoggingOut(false);
        }
    };

    if (loading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#B8860B" />
                <Text style={styles.loadingText}>Loading Profile...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {user ? (
                <>
                    {/* Floating Profile Image */}
                    <View style={styles.profileImageContainer}>
                        <Image
                            source={{ uri: user.profilePic || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQC2ALKuFEF7heLZ50-RFvzJ9ML-zuLWxGgU0f63GjuXz69s4ZQNKD6LidCZ-HYRAg60&usqp=CAU" }}
                            style={styles.profileImage}
                        />
                    </View>

                    {/* Name & Email */}
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.email}>{user.email}</Text>

                    {/* Buttons */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Edit Profile</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Setting')}>
                            <Text style={styles.buttonText}>Settings</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, styles.logoutButton]}
                            onPress={logOut}
                            disabled={loggingOut}
                        >
                            {loggingOut ? (
                                <ActivityIndicator size="small" color="#B8860B" />
                            ) : (
                                <Text style={[styles.buttonText, styles.logoutText]}>Logout</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                </>
            ) : (
                <Text style={styles.noProfile}>No profile found</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#F9F9F9",
        paddingHorizontal: 20,
        paddingTop: 100,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F9F9F9",
    },
    loadingText: {
        color: "#B8860B",
        marginTop: 10,
        fontSize: 18,
    },
    profileImageContainer: {
        width: 140,
        height: 140,
        borderRadius: 70,
        borderWidth: 3,
        borderColor: "#B8860B",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        marginBottom: 15,
        backgroundColor: "white",
        shadowColor: "#B8860B",
    },
    profileImage: {
        width: "115%",
        height: "100%",
        resizeMode: "cover",
    },
    name: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 5,
        textAlign: "center",
    },
    email: {
        fontSize: 16,
        color: "#777",
        textAlign: "center",
        marginBottom: 30,
    },
    buttonContainer: {
        width: "100%",
        alignItems: "center",
        marginTop: 10,
    },
    button: {
        backgroundColor: "#B8860B",
        paddingVertical: 14,
        borderRadius: 12,
        width: "90%",
        alignItems: "center",
        marginBottom: 12,
        shadowColor: "#B8860B",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 8,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    logoutButton: {
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "#B8860B",
    },
    logoutText: {
        color: "#B8860B",
    },
    noProfile: {
        fontSize: 18,
        color: "#B8860B",
    },
});
