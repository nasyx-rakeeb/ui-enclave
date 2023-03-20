import {
    View,
    Text,
    StyleSheet
} from "react-native"
import {colors} from "../constants/colors.js"

const About = () => {
    return (
        <View style={styles.container}>
          <Text>About</Text>
        </View>
    )
}

export default About

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }
    })