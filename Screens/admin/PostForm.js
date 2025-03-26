import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";
import ApiInstance from "../../config/Apis/ApiInstance";

export default function PostForm() {

    const [model, setModel] = useState({});
    const [loading, setLoading] = useState(false);

    const postForm = async () => {
        if (!model.name || !model.price || !model.image) {
            return Toast.show({ type: 'error', text1: 'Validation error', text2: 'All Fileds are required' })
        }
        try {
            const res = await ApiInstance.post('/userData/nailcare')
            Toast.show({ type: 'success', text1: 'Posted', text2: 'Successfully Posted' })
        } catch (error) {
            console.log(error)
            Toast.show({ type: 'error', text1: 'Internal server error' })
        }
    }

    return (
        <>
            <View>
                <Text>Updates</Text>
                <TextInput placeholder="Category Name" onChangeText={() => setModel({ ...model, name: e })} />
                <TextInput placeholder="Price" onChangeText={() => setModel({ ...model, price: e })} />
                <TextInput placeholder="Image Link" onChangeText={() => setModel({ ...model, image: e })} />
                <TouchableOpacity>
                    <Text>Post</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}