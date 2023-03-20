import {
    View,
    Text,
    StyleSheet
} from "react-native"
import {colors} from "../constants/colors.js"

const Home = () => {
    return (
        <View style={styles.container}>
          <Text>Hi!</Text>
        </View>
    )
}

export default Home

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }
    })