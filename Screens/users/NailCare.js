import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ApiInstance from "../../config/Apis/ApiInstance";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";

export default function NailCare() {
    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const getData = async () => {
        try {
            setLoading(true);
            const res = await ApiInstance.get("/userData/nailcare");
            setPostData(res.data.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            Toast.show({ type: "error", text1: "Check your internet connection" });
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Updates</Text>
            {loading ? (
                <ActivityIndicator size={30} color="#B8860B" />
            ) : (
                <FlatList
                    data={postData}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                            <View style={styles.textContainer}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.price}>Price: ${item.price}</Text>
                                <Text>LastDate: Eid 3rd</Text>
                            </View>
                            <TouchableOpacity style={styles.bookingButton} onPress={() => navigation.navigate('Booking')}>
                                <MaterialIcons name="event-note" size={24} color="#fff" /> 
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
        backgroundColor: "#fff",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#B8860B",
        textAlign: "center",
        marginBottom: 15,
    },
    card: {
        backgroundColor: "#F9F9F9",
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#B8860B",
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 4,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    price: {
        fontSize: 16,
        color: "#B8860B",
        marginTop: 5,
    },
    bookingButton: {
        backgroundColor: "#B8860B",
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
        shadowColor: "#B8860B",
        shadowOpacity: 0.5,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
    },
});
