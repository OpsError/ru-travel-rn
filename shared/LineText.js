import { Text, StyleSheet, View } from "react-native";

const LineText = ({ text, isLine = true }) => {
    return(
        <View>
            <Text style={isLine? [styles.text, styles.line] : styles.text}>
                {text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: '#fff',
    },
    line: {
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
    }
});

export default LineText;