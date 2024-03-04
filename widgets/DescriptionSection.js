import { View, StyleSheet, Text } from "react-native";
import SectionTitle from "../shared/SectionTitle";
import TextDescription from "../shared/TextDescription";
import ListText from "../shared/ListText";

const DescriptionSection = () => {
    return(
        <View style={styles.section}>
            <SectionTitle styleSheet={styles.title} text='Чего мы там не видели?' />
            <TextDescription text='По опросам ВЦИОМ, 95% россиян мечтают куда-нибудь поехать, 
            но только 36% планируют провести отпуск в родной стране. Мол, чего мы тут, дома, не видели? 
            На самом деле, Россия — это целая вселенная с ласковым морем юга, густыми лесами Саян и суровыми 
            льдами плато Путорана. А ещё увидеть все эти красоты можно без миллионов на счету, загранпаспорта 
            и многочасовых перелетов. Как, например, Вера Башмакова — смелая молодая мама, которая взяла в 
            охапку троих детей, усадила их в свою «Ладу» и проехала 20 тысяч километров по родной стране. Мы выбрали 
            и описали некоторые интересные места, достойные вашего отпуска.' styleSheet={styles.text} />
            <View style={styles.blockList}>
                <ListText text='Часовых поясов' number='11' />
                <ListText text='Объектов природного наследия ЮНЕСКО' number='12' />
                <ListText text='Объектов культурного наследия ЮНЕСКО' number='16' />
                <ListText text='Природных заповедников' number='105' />
                <ListText text='Аэропортов' number='241' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        marginTop: 64,
        marginHorizontal: 16
    },
    title: {
        width: '60%',
        alignSelf: 'flex-start'
    },
    text: {
        width: '100%',
        textAlign: 'left',
        marginTop: 40,
        lineHeight: 26.08
    },
    blockList: {
        marginTop: 34,
    }
});

export default DescriptionSection;