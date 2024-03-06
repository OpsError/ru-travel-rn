import { Text, StyleSheet, View } from "react-native";

const LineText = ({ text, isLine = true, styleSheet }) => {
    return(
        <View>
            <Text style={isLine? [styles.text, styles.line, styleSheet] : [styles.text, styleSheet]}>
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