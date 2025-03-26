import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const Makeup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Makeup Services</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.row}>
          <View style={styles.card}>
            <Image source={{ uri: "https://i.pinimg.com/550x/bc/9c/87/bc9c87bdc3b66d791e4870049d72c44a.jpg" }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.serviceName}>Bridal Makeup</Text>
              <Text style={styles.servicePrice}>$100</Text>
              <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate('Booking')}>
                <Text style={styles.bookButtonText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Image source={{ uri: "https://i.pinimg.com/564x/45/5b/d6/455bd6eb6d4ac58ea1a33b1d369dafeb.jpg" }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.serviceName}>Party Makeup</Text>
              <Text style={styles.servicePrice}>$60</Text>
              <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate('Booking')}>
                <Text style={styles.bookButtonText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.fullWidthCard}>
          <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_vdFPYPBxCzrE9K29wkF0-L5eqCrlj0ufXQ&s" }} style={styles.image} />
          <View style={styles.cardContent}>
            <Text style={styles.serviceName}>Airbrush Makeup</Text>
            <Text style={styles.servicePrice}>$80</Text>
            <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate('Booking')}>
              <Text style={styles.bookButtonText}>Book Now</Text>
            </TouchableOpacity>
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
    alignItems: "center",
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
    width: "100%",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: width * 0.45,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  fullWidthCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "95%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 15,
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

export default Makeup;
