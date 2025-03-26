import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const Skincare = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Skincare Services</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.row}>
          <View style={styles.card}>
            <Image source={{ uri: "https://img.freepik.com/free-photo/woman-beauty-salon-face-treatment_23-2148875512.jpg" }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.serviceName}>Facial Treatment</Text>
              <Text style={styles.servicePrice}>$25</Text>
              <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate('Booking')}>
                <Text style={styles.bookButtonText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Image source={{ uri: "https://www.shutterstock.com/image-photo/cosmetology-beauty-procedure-young-woman-600nw-1857165001.jpg" }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.serviceName}>Chemical Peel</Text>
              <Text style={styles.servicePrice}>$30</Text>
              <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate('Booking')}>
                <Text style={styles.bookButtonText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.card}>
            <Image source={{ uri: "https://facialaestheticsinc.com/wp-content/uploads/2020/06/microderm-men-thumb.jpg" }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.serviceName}>Microdermabrasion</Text>
              <Text style={styles.servicePrice}>$35</Text>
              <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate('Booking')}>
                <Text style={styles.bookButtonText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Image source={{ uri: "https://www.mirrormirrorhouston.com/wp-content/uploads/2024/04/fraxel-laser-treatment-for-men-mirrormirrorhouston-1.webp" }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.serviceName}>Laser Skin Treatment</Text>
              <Text style={styles.servicePrice}>$50</Text>
              <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate('Booking')}>
                <Text style={styles.bookButtonText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#B8860B",
    marginBottom: 20,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "48%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    padding: 10,
    alignItems: "center",
  },
  serviceName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  servicePrice: {
    fontSize: 14,
    color: "#B8860B",
    marginVertical: 5,
  },
  bookButton: {
    backgroundColor: "#B8860B",
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Skincare;
