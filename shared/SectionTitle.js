import { Text, StyleSheet } from "react-native";

const SectionTitle = ({ text, isTitle = false, styleSheet }) => {
    return(
        <Text style={isTitle? [styles.text, styles.title] : [styles.text, styleSheet]}>
            {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 32,
        fontWeight: '900',
        width: '80%',
        lineHeight: 35
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        lineHeight: 44
    }
});

export default SectionTitle;