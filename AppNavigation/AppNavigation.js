import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Toast from "react-native-toast-message";
import SignUp from "../../Auth/SignUp";
import Login from "../../Auth/Login";
import Home from "../../Screens/users/Home";
import HairCut from "../../Screens/users/HairCut";
import Booking from "../../Screens/users/Booking";
import SkinCare from "../../Screens/users/SkinCare";
import Massage from "../../Screens/users/Massage";
import Makeup from "../../Screens/users/Makeup";
import { TouchableOpacity } from "react-native";
import { openGallery } from "../../functions/AllFunctions";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Setting from "../../Screens/Setting";
import Updates from "../../Screens/users/Updates";
import Admin from "../../Screens/admin/Admin";
import RegisteredUser from "../../Screens/admin/RegisteredUser";
import NailCare from "../../Screens/users/NailCare";
import ManageServices from "../../Screens/admin/ManageServices";
import UserAppointment from "../../Screens/admin/userAppointment";
import GetNotified from "../../Screens/users/GetNotified";
import Rules from "../../Screens/users/Rules";
import FAQs from "../../Screens/users/FAQs";
import Doubt from "../../Screens/users/Doubt";
import ViewReports from "../../Screens/admin/ViewReports";
import sendImage from "../../Screens/users/sendImage";
import Complains from "../../Screens/admin/Complains";
import UserAccount from "../../Screens/users/userAccount";

export default function AppNavigation() {

    const Stack = createNativeStackNavigator();

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="SignUp">
                    <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
                    <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
                    <Stack.Screen name="Home" options={{ headerTintColor: '#B8860B' }} component={Home} />
                    <Stack.Screen name="HairCut" options={{ headerTintColor: '#B8860B', headerRight: () => <TouchableOpacity onPress={openGallery}><MaterialIcons name="collections" size={24} color="#B8860B" /></TouchableOpacity> }} component={HairCut} />
                    <Stack.Screen name="Booking" options={{ headerTintColor: '#B8860B', headerRight: () => <TouchableOpacity onPress={openCamera}><MaterialIcons name="photo-camera" size={24} color="#B8860B" /></TouchableOpacity> }} component={Booking} />
                    <Stack.Screen name="SkinCare" options={{ headerTintColor: '#B8860B', headerRight: () => <TouchableOpacity onPress={openCamera}><MaterialIcons name="photo-camera" size={24} color="#B8860B" /></TouchableOpacity> }} component={SkinCare} />
                    <Stack.Screen name="Massage" options={{ headerTintColor: '#B8860B', headerRight: () => <TouchableOpacity onPress={openCamera}><MaterialIcons name="photo-camera" size={24} color="#B8860B" /></TouchableOpacity> }} component={Massage} />
                    <Stack.Screen name="Makeup" options={{ headerTintColor: '#B8860B', headerRight: () => <TouchableOpacity onPress={openCamera}><MaterialIcons name="photo-camera" size={24} color="#B8860B" /></TouchableOpacity> }} component={Makeup} />
                    <Stack.Screen name="Setting" options={{ headerTintColor: '#B8860B' }} component={Setting} />
                    <Stack.Screen name="Updates" options={{ headerTintColor: '#B8860B' }} component={Updates} />
                    <Stack.Screen name="Admin" options={{ headerShown: false }} component={Admin} />
                    <Stack.Screen name="RegisteredUser" options={{ headerTintColor: '#B8860B' }} component={RegisteredUser} />
                    <Stack.Screen name="NailCare" options={{ headerShown: false }} component={NailCare} />
                    <Stack.Screen name="ManageServices" options={{ headerTintColor: '#B8860B' }} component={ManageServices} />
                    <Stack.Screen name="UserAppointment" options={{ headerTintColor: '#B8860B' }} component={UserAppointment} />
                    <Stack.Screen name="GetNotified" options={{ headerShown: false }} component={GetNotified} />
                    <Stack.Screen name="Rules" options={{ headerShown: false }} component={Rules} />
                    <Stack.Screen name="FAQs" options={{ headerTintColor: '#B8860B' }} component={FAQs} />
                    <Stack.Screen name="Doubt" options={{ headerShown: false }} component={Doubt} />
                    <Stack.Screen name="ViewReports" options={{ headerTintColor: '#B8860B' }} component={ViewReports} />
                    <Stack.Screen name="sendImage" options={{ headerShown: false }} component={sendImage} />
                    <Stack.Screen name="Complains" options={{ headerTintColor: '#B8860B' }} component={Complains} />
                    <Stack.Screen name="userAccount" options={{ headerShown: false }} component={UserAccount} />
                </Stack.Navigator>
                <Toast />
            </NavigationContainer>
        </>
    )
}