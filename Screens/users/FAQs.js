import { useNavigation } from "@react-navigation/native";
import { useState, useLayoutEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function FAQs() {
    const [expanded, setExpanded] = useState(null);
    const navigation = useNavigation();

    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity style={{ marginRight: 15 }} onPress={() => navigation.navigate('Doubt')}>
                <Icon name="quiz" size={28} color="#B8860B" />
            </TouchableOpacity>
        ),
    });


    const faqs = [
        {
            question: "How can I book an appointment?",
            answer: "You can book an appointment through our app by selecting your preferred salon and service."
        },
        {
            question: "What if I am late for my appointment?",
            answer: "If you are late by more than 10 minutes, your appointment may be rescheduled."
        },
        {
            question: "Can I cancel or reschedule my appointment?",
            answer: "Yes, you can cancel or reschedule at least 24 hours before your appointment."
        },
        {
            question: "What payment methods are accepted?",
            answer: "We accept cash, credit/debit cards, and online payments."
        },
        {
            question: "Can I choose a specific stylist?",
            answer: "Yes! You can select your preferred stylist while booking."
        }
    ];

    const toggleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <ScrollView style={styles.container}>
            {faqs.map((faq, index) => (
                <TouchableOpacity key={index} style={styles.card} onPress={() => toggleExpand(index)}>
                    <View style={styles.row}>
                        <Text style={styles.question}>{faq.question}</Text>
                        <Icon
                            name={expanded === index ? "expand-less" : "expand-more"}
                            size={24}
                            color="#B8860B"
                        />
                    </View>
                    {expanded === index && <Text style={styles.answer}>{faq.answer}</Text>}
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F8F8",
        padding: 20,
    },
    card: {
        backgroundColor: "#FFFFFF",
        padding: 15,
        borderRadius: 10,
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginBottom: 10,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    question: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        flex: 1,
    },
    answer: {
        fontSize: 14,
        color: "#555",
        marginTop: 10,
        lineHeight: 22,
    },
});
