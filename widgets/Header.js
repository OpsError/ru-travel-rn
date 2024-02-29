import { View, StyleSheet, Image } from "react-native";
import LineText from "../shared/LineText";

const Header = () => {
    return(
        <View style={styles.section}>
            <Image style={styles.image} source={require('./images/logo.png')} />
            <View style={styles.textDiv}>
                <LineText text='RU' />
                <LineText text='EN' isLine={false} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        marginTop: 16,
        marginHorizontal: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textDiv: {
        display: 'flex',
        flexDirection: 'row',
        gap: 18
    },
    image: {
        height: 42,
        width: 142,
    },
});

export default Header;