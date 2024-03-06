import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import places from './data/placesLink';
import SectionTitle from "../shared/SectionTitle";
import LineText from "../shared/LineText";

const PlacesSection = () => {
    return(
        <View style={styes.section}>
            {
                places.map((place) => 
                // наверное, этот кусок кода надо было запихнуть в другой файл
                <View style={styes.block} key={place.url}>
                    <SectionTitle text={place.title} />
                    <Text style={styes.url}>URL</Text>
                    <LineText text={place.url} styleSheet={styes.link} />
                    <Image style={styes.image} source={place.image} />
                    <Text style={[styes.text, styes.textMargin]}>{place.firstP}</Text>
                    {
                        place.SecondP ? <Text style={styes.text}>{place.SecondP}</Text> : null
                    }
                </View>
                )
            }
        </View>
    )
}

const styes = StyleSheet.create({
    section: {
        marginTop: 14,
        marginHorizontal: 16
    },
    block: {
        marginTop: 50,
    },
    url: {
        fontSize: 12,
        color: '#AAAAAA',
        letterSpacing: 2,
        marginTop: 32
    },
    link: {
        marginTop: 12,
        display: 'flex',
        alignSelf: 'flex-start'
    },
    image: {
        marginTop: 32,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        alignSelf: 'center'
    },
    text: {
        fontSize: 16,
        color: '#FFFFFF',
        lineHeight: 26.08,
        marginTop: 25,
        width: '90%'
    },
    textMargin: {
        marginTop: 32
    }
});

export default PlacesSection;