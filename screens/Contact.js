import {
    View,
    Text,
    StyleSheet
} from "react-native"
import {colors} from "../constants/colors.js"

const Contact = () => {
    return (
        <View style={styles.container}>
          <Text>Contact</Text>
        </View>
    )
}

export default Contact

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }
    })