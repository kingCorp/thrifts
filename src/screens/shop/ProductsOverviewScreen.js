import React from 'react';
import { Button, FlatList, Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);
  return (
    <>
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => 
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetails={() => { props.navigation.navigate('ProductDetails', {productId: itemData.item.id, title: itemData.item.title})}}
          onAddCart={() => {}}
        />
      }
    />
    </>
  );
};

export default ProductsOverviewScreen;