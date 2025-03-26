import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const Haircut = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Haircut Services</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.row}>
          <View style={styles.card}>
            <Image source={{ uri: "https://content.latest-hairstyles.com/wp-content/uploads/ivy-league-haircut-with-fade.jpg" }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.serviceName}>Classic Haircut</Text>
              <Text style={styles.servicePrice}>$15</Text>
              <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate('Booking')}>
                <Text style={styles.bookButtonText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4mSsv4xJF_AdrdnlRPnUWlB7DFPknbw3X9A&s" }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.serviceName}>Fade Cut</Text>
              <Text style={styles.servicePrice}>$18</Text>
              <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate('Booking')}>
                <Text style={styles.bookButtonText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.card}>
            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmE5zK1W0NETP6ano5Q0h_b42ydmCK-VVJ1aqZSwgANXlKqrwgDidcIokvNY_Ft1ohk2c&usqp=CAU" }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.serviceName}>Beard Trim</Text>
              <Text style={styles.servicePrice}>$10</Text>
              <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate('Booking')}>
                <Text style={styles.bookButtonText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Image source={{ uri: "https://www.brittneyhelenehair.ca/wp-content/uploads/2022/01/focused-hairdresser-works-drying-the-hair-of-a-bea-2021-09-24-04-23-52-utc.jpg.webp" }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.serviceName}>Full Grooming</Text>
              <Text style={styles.servicePrice}>$30</Text>
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

export default Haircut;
