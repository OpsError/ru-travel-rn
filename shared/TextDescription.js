import { Text, StyleSheet } from "react-native";

const TextDescription = ({ text, styleSheet }) => {
    return(
        <Text style={[styles.text, styleSheet]}>
            {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        width: '80%',
    }
});

export default TextDescription;