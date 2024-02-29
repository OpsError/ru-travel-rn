import { Text, StyleSheet } from "react-native";

const TextDescription = ({ text }) => {
    return(
        <Text style={styles.text}>
            {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 16,
        marginTop: 16,
        textAlign: 'center',
        width: '80%'
    }
});

export default TextDescription;