import { Image, StyleSheet, View } from "react-native";

const photos = [
    require('./images/place1.png'),
    require('./images/place2.png'),
    require('./images/place3.png'),
    require('./images/place4.png'),
    require('./images/place5.png'),
    require('./images/place6.png'),
    require('./images/place7.png'),
    require('./images/place8.png'),
    require('./images/place9.png'),
    require('./images/place10.png'),
    require('./images/place11.png'),
    require('./images/place12.png'),
]

const PhotosSection = () => {
    return(
        <View style={styles.section}>
            {
                photos.map((element) => 
                // понятное дело, что key на деле будет другой,
                // я просто не хотела заморачиваться с тем, чтобы делать
                // массив объектов
                   <Image style={styles.image} source={element} key={element} /> 
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
        marginTop: 64,
        marginHorizontal: 16,
        display: 'flex',
        gap: 12
    },
    image: {
        // тут я могла бы поставить height по макету,
        // но тогда было бы слишком долго листать эти фото
        width: '100%',
        height: 100
    }
});
// меня также огорчает тот факт, что в rn нет гридов
// хотя наверняка какие-то библиотеки есть
// я посмотрю потом

export default PhotosSection;