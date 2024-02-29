import { Text, StyleSheet } from "react-native";

const SectionTitle = ({ text, isTitle = false }) => {
    return(
        <Text style={isTitle? [styles.text, styles.title] : styles.text}>
            {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 900,
        width: '80%',
        textAlign: 'center'
    },
    title: {
        fontSize: 40
    }
});

export default SectionTitle;