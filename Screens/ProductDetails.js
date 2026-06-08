import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import styles from './HomeProduct.js';
export default function ProductDetailsScreen({ onNavigate, product }) {
    const [selectedSize, setSelectedSize] = useState('L');
    const [selectedColor, setSelectedColor] = useState('Red');
    const [quantity, setQuantity] = useState(1);


    const item = product || {
        name: "Men's Shalwar Kameez",
        price: "RS. 4,999",
        image: require('../images/kurta.jpg'),
        oldPrice: "RS. 7,460",
        discount: "33% off"
    };

    const increaseQty = () => setQuantity(quantity + 1);
    const decreaseQty = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleAddToCart = () => {

        Alert.alert(
            "Added to Cart!",
            `Product: ${item.name}\nSize: ${selectedSize}\nColor: ${selectedColor}\nQuantity: ${quantity}\nTotal: ${item.price}`
        );
    };

    return ( <
        View style = { styles.container } >

        <
        View style = { styles.header } >

        <
        /View>

        <
        View >
        <
        TouchableOpacity hitSlop = {
            { top: 10, bottom: 10, left: 10, right: 10 } }
        onPress = {
            () => onNavigate('Home') } >
        <
        Text style = { styles.backIcon } > Home < /Text> <
        /TouchableOpacity>

        <
        Image source = { item.image }
        style = { styles.productDImage }
        />

        <
        View style = { styles.detailsContainer } >

        <
        Text style = { styles.title } > { item.name } < /Text> <
        View style = { styles.priceRow } >
        <
        Text style = { styles.price } > { item.price } < /Text> <
        Text style = { styles.oldPrice } > RS.9, 000 < /Text>  <
        Text style = { styles.discount } > (33 % off) < /Text>

        <
        View style = {
            { flex: 1, alignItems: 'flex-end' } } >
        <
        Text style = {
            { fontSize: 24, color: 'red' } } > ♥ < /Text> <
        Text style = {
            { fontSize: 10, color: '#888' } } > 450 Likes < /Text> <
        /View> <
        /View>

        <
        Text style = { styles.label } > Size < /Text> <
        View style = { styles.selectorContainer } > {
            ['S', 'M', 'L', 'XL', 'XXL'].map((size) => ( <
                TouchableOpacity key = { size }
                style = {
                    [styles.sizeBox, selectedSize === size && styles.activeSize] }
                onPress = {
                    () => setSelectedSize(size) } >
                <
                Text style = {
                    [styles.sizeText, selectedSize === size && styles.activeSizeText] } > { size } <
                /Text> <
                /TouchableOpacity>
            ))
        } <
        /View>

        <
        Text style = { styles.label } > Color < /Text> <
        View style = { styles.selectorContainer } > {
            ['Red', 'Green', 'Blue'].map((color) => ( <
                TouchableOpacity key = { color }
                style = {
                    [
                        styles.colorCircle,
                        { backgroundColor: color.toLowerCase() },
                        selectedColor === color && styles.activeColor
                    ]
                }
                onPress = {
                    () => setSelectedColor(color) }
                />
            ))
        } <
        /View>

        <
        View style = { styles.qtyRow } >
        <
        Text style = { styles.label } > Quantity < /Text> <
        View style = { styles.counterContainer } >
        <
        TouchableOpacity onPress = { decreaseQty }
        style = { styles.qtyBtn } >
        <
        Text style = { styles.qtyBtnText } > - < /Text> <
        /TouchableOpacity>

        <
        Text style = { styles.qtyValue } > { quantity } < /Text>

        <
        TouchableOpacity onPress = { increaseQty }
        style = { styles.qtyBtn } >
        <
        Text style = { styles.qtyBtnText } > + < /Text> <
        /TouchableOpacity> <
        /View> <
        /View>

        <
        /View> <
        /View>

        <
        TouchableOpacity style = { styles.addToCartBtn }
        onPress = { handleAddToCart } >
        <
        Text style = { styles.addToCartText } > ADD TO CART < /Text> <
        /TouchableOpacity>

        <
        /View>
    );
}

// const styles = StyleSheet.create({
//   container: {
//      flex: 1, 
//      backgroundColor: '#ffffffff' 
//     },

//   header: {
//     backgroundColor: '#0056b8',
//     height: 40,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#b8b8b8ff'
//   },

//   backIcon: { 
//     fontSize: 20, 
//     color: '#333',
//   },

//   headerTitle: {
//      fontSize: 18, 
//      fontWeight: 'bold' 
//     },
//   productImage: { 
//     width: '100%', 
//     height: 400, 
//     resizeMode: 'cover' 
//   },
//   detailsContainer: {
//      padding: 20 
//     },
//   title: { 
//     fontSize: 20, 
//     color: '#333', 
//     marginBottom: 10 
//   },
//   priceRow: { 
//     flexDirection: 'row', 
//     alignItems: 'center', 
//     marginBottom: 20 
//   },
//   price: { 
//     fontSize: 24, 
//     fontWeight: 'bold', 
//     color: '#000', 
//     marginRight: 10 
//   },
//   oldPrice: { 
//     fontSize: 16, 
//     color: '#888', 
//     textDecorationLine: 'line-through', 
//     marginRight: 10 
//   },
//   discount: { 
//     fontSize: 16, 
//     color: '#ff6b6b' 
//   },
//   label: { 
//     fontSize: 16, 
//     color: '#333', 
//     marginBottom: 10, 
//     marginTop: 10
//    },
//   selectorContainer: { 
//     flexDirection: 'row', 
//     marginBottom: 10 
//   },
//   sizeBox: {
//     width: 40, 
//     height: 40, 
//     borderRadius: 20, 
//     borderWidth: 1, 
//     borderColor: '#ddd',
//     justifyContent: 'center', 
//     alignItems: 'center', 
//     marginRight: 15, 
//     backgroundColor: '#f9f9f9'
//   },
//   activeSize: { 
//     backgroundColor: '#0057b8', 
//     borderColor: '#0057b8' 
//   },
//   sizeText: { 
//     color: '#333' 
//   },
//   activeSizeText: { 
//     color: '#fff' 
//   },
//   colorCircle: {
//     width: 30, 
//     height: 30, 
//     borderRadius: 15, 
//     marginRight: 15, 
//     borderWidth: 1, 
//     borderColor: '#fff'
//   },
//   activeColor: { 
//     borderWidth: 2, 
//     borderColor: '#333' 
//   },
//   qtyRow: { 
//     flexDirection: 'row', 
//     justifyContent: 'space-between', 
//     alignItems: 'center', 
//     marginTop: 10, 
//     marginBottom: 80 
//   },
//   counterContainer: { 
//     flexDirection: 'row', 
//     alignItems: 'center' 
//   },
//   qtyBtn: { 
//     width: 35, 
//     height: 35, 
//     backgroundColor: '#f0f0f0', 
//     justifyContent: 'center', 
//     alignItems: 'center', 
//     borderRadius: 5 
//   },
//   qtyBtnText: { 
//     fontSize: 20, 
//     color: '#333' 
//   },
//   qtyValue: { 
//     fontSize: 18,
//      marginHorizontal: 20, 
//      fontWeight: 'bold' 
//     },
//   addToCartBtn: {
//     backgroundColor: '#2ecc71',
//     padding: 18,
//     alignItems: 'center',
//     position: 'absolute',
//     bottom: 0,
//     width: '100%'
//   },
//   addToCartText: { 
//     color: '#fff', 
//     fontSize: 18, 
//     fontWeight: 'bold'
//    }
// });