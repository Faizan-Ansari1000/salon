import { useNavigation } from "@react-navigation/native";
import { Image, ScrollView, Text, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get("window"); 

export default function Home() {
    const navigation = useNavigation();

    navigation.setOptions({
        headerStyle: { backgroundColor: "white" },
        headerRight: () => (
            <View style={styles.headerIcons}>
                <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate("Rules")}>
                    <Icon name="rule" size={24} color="#B8860B" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate("Setting")}>
                    <Icon name="settings" size={24} color="#B8860B" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate("NailCare")}>
                    <Icon name="update" size={24} color="#B8860B" />
                </TouchableOpacity>
            </View>
        ),
    });

    return (
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.heading}>Welcome to Your Salon</Text>
                <Image source={{ uri: 'https://media.istockphoto.com/id/1463137828/photo/3d-render-of-beauty-spa-saloon.jpg?s=612x612&w=0&k=20&c=-pkHokMX_f7t0xfvNkLsXOSsDVSYhfDz0yMrsrRU_Tg=' }} 
                    style={styles.banner} />

                {/* Services Section (Fully Responsive) */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                    <View style={styles.cardContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('HairCut')}>
                            <View style={styles.card}>
                                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/4428/4428089.png" }} style={styles.cardImage} />
                                <Text style={styles.cardText}>Haircut</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('SkinCare')}>
                            <View style={styles.card}>
                                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/2413/2413171.png" }} style={styles.cardImage} />
                                <Text style={styles.cardText}>Skincare</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Massage')}>
                            <View style={styles.card}>
                                <Image source={{ uri: "https://static.vecteezy.com/system/resources/previews/005/720/156/non_2x/massage-icon-illustration-isolated-on-white-background-free-vector.jpg" }} style={styles.cardImage} />
                                <Text style={styles.cardText}>Massage</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Makeup')}>
                            <View style={styles.card}>
                                <Image source={{ uri: "https://www.creativefabrica.com/wp-content/uploads/2022/06/07/1654586613/Makeup-Icon-black-version-580x386.jpg" }} style={styles.cardImage} />
                                <Text style={styles.cardText}>Makeup</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                {/* Trending Styles Section */}
                <Text style={styles.sectionTitle}>Trending Styles</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                    <Image source={{ uri: "https://i.pinimg.com/736x/ec/15/4d/ec154df68640165719959ecb591f44ec.jpg" }} style={styles.trendingImage} />
                    <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgGTMC6SR6iEWkZinfo1TM8-MlqoMHMglVWQ&s" }} style={styles.trendingImage} />
                    <Image source={{ uri: "https://i.pinimg.com/originals/90/76/5a/90765a16ae0c154088a110354b47672c.jpg" }} style={styles.trendingImage} />
                </ScrollView>

                {/* Experts Section (No Changes) */}
                <Text style={styles.sectionTitle}>Our Top Experts</Text>
                <View style={styles.expertsContainer}>
                    <View style={styles.expertCard}>
                        <Image source={{ uri: "https://i.pinimg.com/736x/27/d4/c8/27d4c833b80d767b5cdc7ab22b52c8bd.jpg" }} style={styles.expertImage} />
                        <Text style={styles.expertName}>Sauliha Ansari</Text>
                        <Text style={styles.expertRole}>Hair Specialist</Text>
                    </View>
                    <View style={styles.expertCard}>
                        <Image source={{ uri: "https://i.pinimg.com/736x/23/a5/46/23a546e5e74baed181d06d589cdfe088.jpg" }} style={styles.expertImage} />
                        <Text style={styles.expertName}>Rimsha</Text>
                        <Text style={styles.expertRole}>Makeup Artist</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: { flex: 1, backgroundColor: '#fff' },
    container: { flex: 1, padding: 20, alignItems: 'center' },
    heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 15, color: '#333', textAlign: 'center' },
    banner: { width: width * 0.9, height: 150, borderRadius: 10, marginBottom: 15 },
    
    headerIcons: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: 100,height:'50' },
    iconButton: { padding: 5 },

    scrollView: { marginBottom: 15 },
    cardContainer: { flexDirection: "row", alignItems: "center" },
    card: { width: width * 0.3, alignItems: "center", marginHorizontal: 5, padding: 10, borderRadius: 10, backgroundColor: "#F5F5F5" },
    cardImage: { width: 35, height: 35, marginBottom: 5 },
    cardText: { fontSize: 14, fontWeight: "bold", textAlign: "center" },

    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10, color: '#333' },
    trendingImage: { width: width * 0.35, height: 150, borderRadius: 10, marginRight: 10 },

    expertsContainer: { flexDirection: "row", justifyContent: "space-around", width: "100%" },
    expertCard: { alignItems: "center", padding: 10, borderRadius: 10, backgroundColor: "#F5F5F5", width: "45%" },
    expertImage: { width: 80, height: 80, borderRadius: 40, marginBottom: 5 },
    expertName: { fontSize: 14, fontWeight: "bold" },
    expertRole: { fontSize: 12, color: "gray" },
});
