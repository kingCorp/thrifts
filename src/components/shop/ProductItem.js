import React from 'react';
import { Button, Image, Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const ProductItem = props => {
    const { price, image, title, onViewDetails, onAddCart } = props;
    let TouchableBtn = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableBtn = TouchableNativeFeedback;
    }

    return (
        <View style={styles.product}>
            <View style={styles.touchable}>
                <TouchableBtn onPress={onViewDetails} useForeground>
                    <View>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: image }} style={styles.image} />
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.price}>$ {price.toFixed(2)}</Text>
                        </View>
                        <View style={styles.actions}>
                            <Button color={Colors.primary} title="View details" onPress={onViewDetails} />
                            <Button color={Colors.primary} title="To Cart" onPress={onAddCart} />
                        </View>
                    </View>
                </TouchableBtn>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: '#fff',
        height: 300,
        margin: 20
    },
    touchable: {
        overflow: 'hidden',
        borderRadius: 10
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    title: {
        fontSize: 18,
        marginVertical: 4,
        fontFamily: 'open-sans-bold',
    },
    price: {
        fontSize: 14,
        color: '#888',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        paddingHorizontal: 20
    },
    details: {
        alignItems: 'center',
        height: '15%',
        padding: 10
    },
});


export default ProductItem