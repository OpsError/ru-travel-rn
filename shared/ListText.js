import { StyleSheet, Text, View } from "react-native";

const ListText = ({ text, number }) => {
    return(
        <Text style={styles.mainText}>
            {`${text} `}
            <Text style={styles.accentText}>
                {number}
            </Text>
        </Text>
    );
}

const styles = StyleSheet.create({
    mainText: {
        fontSize: 13,
        color: '#fff',
        fontWeight: '900',
        lineHeight: 18
    },
    accentText: {
        fontWeight: '400'
    }
});

export default ListText;