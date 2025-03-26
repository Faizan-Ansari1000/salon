import { launchCamera, launchImageLibrary } from "react-native-image-picker"

export const openCamera = () => {
    const result = launchCamera({ mediaType: 'photo', includeBase64: true })
}

export const openGallery = () => {
    const result = launchImageLibrary({ mediaType: 'mixed', includeBase64: true })
}