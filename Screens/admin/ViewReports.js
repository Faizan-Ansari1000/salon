import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View, StyleSheet, ActivityIndicator } from "react-native";
import ApiInstance from "../../config/Apis/ApiInstance";
import Toast from "react-native-toast-message";
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function ViewReports() {
    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{ marginStart: 11 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Complains')}>
                        <Icon name="report" size={24} color={'#B8860B'} />
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation]);

    const getData = async () => {
        try {
            setLoading(true);
            const res = await ApiInstance.get('/userData/askAdmin');
            console.log(res.data);
            setPostData(res.data.data);
        } catch (error) {
            console.log(error);
            Toast.show({ type: 'error', text1: 'Connection error', text2: 'Something went wrong' });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Users Doubts</Text>

            {loading ? (
                <ActivityIndicator size="large" color="#B8860B" />
            ) : (
                <FlatList
                    data={postData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Text style={styles.label}>Name: <Text style={styles.value}>{item.name}</Text></Text>
                            <Text style={styles.label}>Email: <Text style={styles.value}>{item.email}</Text></Text>
                            <Text style={styles.label}>Branch: <Text style={styles.value}>{item.branch}</Text></Text>
                            <Text style={styles.label}>User Question: <Text style={styles.value}>{item.askAdmin}</Text></Text>
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
        textAlign: "center",
        marginBottom: 20,
        color: "#B8860B",
        textTransform: "uppercase",
        letterSpacing: 1.5,
    },
    card: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        elevation: 3,
        shadowColor: "#B8860B",
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 3 },
        borderLeftWidth: 4,
        borderLeftColor: "#B8860B",
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 5,
    },
    value: {
        fontWeight: "normal",
        color: "#555",
    },
});
