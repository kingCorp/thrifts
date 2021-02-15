import React from 'react';
import {Button, Image, ScrollView, Text, View, StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useSelector } from 'react-redux';

const ProductDetails = (props) => {
    const {route} = props;
 const productId = route.params.productId;
 const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId));

    return(
        <ScrollView>
            <Image style={styles.image} source={{uri: selectedProduct.imageUrl}} />
            <View style={styles.actions}>
            <Button color={Colors.primary} title="Add to cart" onPress={() => {}} />
            </View>
            <Text style={styles.price}>$ {selectedProduct.price}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
   
    image: {
        width: '100%',
        height: 300
    },
    title: {
        fontSize: 18,
        marginVertical: 4,
        fontFamily: 'OpenSans-Bold',
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20,
        fontFamily: 'OpenSans-Bold',
    },
    actions: {
        marginVertical: 10,
        alignItems: 'center',
    },
    description: {
        textAlign: 'center',
        fontSize: 14,
        marginHorizontal: 20,
        fontFamily: 'OpenSans-Bold',
    },
});


export default ProductDetails;