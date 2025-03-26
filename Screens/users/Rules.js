import { Text, View, StyleSheet, Dimensions, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get("window");

export default function Rules() {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Icon name="rule" size={30} color="#B8860B" />
                <Text style={styles.heading}>Rules & Guidelines</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                {/* Rule Cards */}
                {rulesData.map((rule, index) => (
                    <View key={index} style={styles.card}>
                        <View style={styles.ruleHeader}>
                            <Icon name={rule.icon} size={24} color="#B8860B" />
                            <Text style={styles.ruleTitle}>{rule.title}</Text>
                        </View>
                        <Text style={styles.ruleText}>{rule.description}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

// Rules Data
const rulesData = [
    {
        title: "Be Respectful",
        description: "Treat others with kindness and respect. Any form of harassment or discrimination is strictly prohibited.",
        icon: "people",
    },
    {
        title: "Appointment Policies",
        description: "Arrive on time for appointments. Late arrivals may result in rescheduling or reduced service time.",
        icon: "schedule",
    },
    {
        title: "Hygiene Standards",
        description: "Maintain proper hygiene before coming to the salon. Clean hair and skin help in providing better service.",
        icon: "spa",
    },
    {
        title: "Cancellations",
        description: "If you need to cancel an appointment, please notify us at least 24 hours in advance.",
        icon: "event-busy",
    },
    {
        title: "Payments & Refunds",
        description: "All payments must be made at the time of service. Refunds are only applicable under special conditions.",
        icon: "payment",
    },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAF9F6",
        paddingTop: 50,
        alignItems: "center",
    },
    scrollContainer: {
        paddingBottom: 20,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginBottom: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#B8860B",
        textTransform: "uppercase",
    },
    card: {
        backgroundColor: "#FFFFFF",
        width: width * 0.9,
        padding: 18,
        borderRadius: 12,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    ruleHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginBottom: 5,
    },
    ruleTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    ruleText: {
        fontSize: 14,
        color: "#555",
        lineHeight: 22,
    },
});

