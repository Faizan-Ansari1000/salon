import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const Massage = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Massage Services</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.row}>
          <View style={styles.card}>
            <Image source={{ uri: "https://img.freepik.com/free-photo/high-angle-man-relaxing-spa_23-2150911773.jpg" }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.serviceName}>Swedish Massage</Text>
              <Text style={styles.servicePrice}>$40</Text>
              <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate('Booking')}>
                <Text style={styles.bookButtonText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Image source={{ uri: "https://www.shutterstock.com/image-photo/deep-tissue-massages-answer-muscle-260nw-2441018221.jpg" }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.serviceName}>Deep Tissue Massage</Text>
              <Text style={styles.servicePrice}>$50</Text>
              <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate('Booking')}>
                <Text style={styles.bookButtonText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.card}>
            <Image source={{ uri: "https://media.istockphoto.com/id/624684132/photo/stone-massage.jpg?s=612x612&w=0&k=20&c=Yto_sxuB0HxnB40ccchirv3PkF1J94NAzF-3LNpg7nc=" }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.serviceName}>Hot Stone Massage</Text>
              <Text style={styles.servicePrice}>$60</Text>
              <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate('Booking')}>
                <Text style={styles.bookButtonText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Image source={{ uri: "https://thumbs.dreamstime.com/b/thai-woman-making-massage-to-man-hands-women-men-spa-time-relax-34756529.jpg" }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.serviceName}>Thai Massage</Text>
              <Text style={styles.servicePrice}>$55</Text>
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

export default Massage;
