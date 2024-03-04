import { View, StyleSheet, Image, Text, Dimensions } from "react-native";
import SectionTitle from "../shared/SectionTitle";
import TextDescription from "../shared/TextDescription";

const LeadSection = () => {
    return(
        <View style={styles.section}>
            <SectionTitle text='Путешествия по России' isTitle={true} />
            <TextDescription text='Настоящая страна не в выпусках новостей, а здесь.' styleSheet={styles.descr} />
            <Image style={styles.image} source={require('./images/imageLead.png')} />
            <Text style={styles.text}>
                ваша полка — верхняя
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        marginTop: 48,
        marginHorizontal: 16,
        display: 'flex',
        alignItems: 'center',
    },
    image: {
        width: Dimensions.get('window').width,
        marginTop: 40
    },
    text: {
        color: '#fff',
        fontSize: 12,
        letterSpacing: 1.5,
        alignSelf: 'flex-start',
        textTransform: 'uppercase',
        marginTop: 8
    },
    descr: {
        marginTop: 16,
        lineHeight: 20
    }
});

export default LeadSection;