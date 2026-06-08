import React, { useState, useEffect } from 'react';
import { View, Text,ImageBackground, Image, ScrollView, TouchableOpacity,} from 'react-native';
import styles from './HomeProduct.js';

const productsData = [
  { 
    id: 1, 
    name: "Men's Shalwar Kameez", 
    category: 'Men', 
    price: 'RS. 4,999', 
    image: require('../images/kurta.jpg') 
  },
  { 
    id: 2, 
    name: "Women's Jeans", 
    category: 'Women', 
    price: 'RS. 3,499', 
    image: require('../images/womenJeans.jpg') 
  },
  { 
    id: 3, 
    name: "Kids Hoodie", 
    category: 'Kids', 
    price: 'RS. 1,299', 
    image: require('../images/images.jpg') 
  },
  { 
    id: 4, 
    name: "Men's Jacket", 
    category: 'Men', 
    price: 'RS. 8,499', 
    image: require('../images/Jacket.jpg') 
  },
  { 
    id: 5, 
    name: "Summer Dress", 
    category: 'Women', 
    price: 'RS. 8,999', 
    image: require('../images/Summerdress.jpg') 
  },
  { 
    id: 6, 
    name: "Toys", 
    category: 'Kids', 
    price: 'RS. 999', 
    image: require('../images/toys.jpg') 
  },
];

const sliderImages = [
  require('../images/Slider1.jpg'),
  require('../images/Slider2.jpg'),
  require('../images/Slider3.jpg')
];

const categoryData = [
  { 
    name: 'Men', 
    image: require('../images/menCat.jpg')
  },
  { 
    name: 'Women', 
    image: require('../images/WomenCat.jpg')
  },
  { 
    name: 'Kids', 
    image: require('../images/KidsCat.jpg') 
  },
  { 
    name: 'Offer Zone', 
    image: require('../images/Offerzone.jpg') 
  },
];
export default function HomeScreen({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('Men'); 
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  const displayedProducts = activeCategory === 'Offer Zone' 
    ? productsData 
    : productsData.filter(item => item.category === activeCategory);

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.menuIcon}>☰</Text> 
        <Text style={styles.headerTitle}>HOME</Text>
        <View style={styles.headerIcons}>
          <Text style={styles.icon}>🕭</Text>
          <Text style={styles.icon}>🛒</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>

        <ImageBackground 
  source={sliderImages[currentSlide]} 
  style={styles.heroSection}
>

          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>NEW{'\n'}ARRIVALS</Text>
            <Text style={styles.heroSubtitle}>200+ New Items</Text>
            <TouchableOpacity>
              <Text style={styles.shopNowBtn}>Shop it ➜</Text>
            </TouchableOpacity>
            
            <View style={styles.dotsContainer}>
              {sliderImages.map((_, index) => (
                <View key={index} style={[styles.dot, currentSlide === index && styles.activeDot]} />
              ))}
            </View>
          </View>
        </ImageBackground>

        <View style={styles.categoryContainer}>
          {categoryData.map((cat) => (
            <TouchableOpacity 
              key={cat.name} 
              onPress={() => setActiveCategory(cat.name)} 
              style={styles.catItem}
            >
              <View style={[styles.catCircle, activeCategory === cat.name && styles.activeCatCircle]}>
                <Image source={cat.image} style={styles.catImage} />
              </View>
              <Text style={styles.catText}>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.promoContainer}>
  <View style={styles.promoLeft}>
    <Image 
      source={require('../images/Sale.jpg')} 
      style={styles.promoImage} 
    />
  </View>
  <View style={styles.promoRight}>
    <Text style={styles.promoTitle}>SUMMER OFFER</Text>
    <Text style={styles.promoDiscount}>50-70%</Text>
    <Text style={styles.promoSubtitle}>OFF</Text>
  </View>
</View>


<View style={styles.gridContainer}>
  {displayedProducts.map((item) => (
    <TouchableOpacity 
      key={item.id} 
      style={styles.productCard}
      onPress={() => onNavigate('Details', item)} 
    >
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>

  ))}
</View>

      </ScrollView>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1, 
//     backgroundColor: '#f9f9f9' 
//   },

//   header: {
//     backgroundColor: '#0056b8',
//     height: 60,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 15,
//     paddingTop: 15, 
//   },

//   menuIcon: { 
//     color: '#fff', 
//     fontSize: 24 
//   },

//   headerTitle: { 
//     color: '#fff', 
//     fontSize: 18, 
//     fontWeight: 'bold',
//   },

//   headerIcons: { 
//     flexDirection: 'row' 
//   },

//   icon: { 
//     color: '#fff', 
//     fontSize: 20, 
//     marginLeft: 15 
//   },

//   heroSection: {
//     width: '100%',
//     height: 220,
//   },

//   heroOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 87, 184, 0.6)', 
//     justifyContent: 'center',
//     paddingLeft: 20,
//   },

//   heroTitle: {
//     color: '#fff',
//     fontSize: 32,
//     fontWeight: 'bold',
//     lineHeight: 40,
//   },

//   heroSubtitle: { 
//     color: '#eee', 
//     fontSize: 14, 
//     fontStyle: 'italic', 
//     marginBottom: 20 
//   },

//   shopNowBtn: { 
//     color: '#beebc0ff', 
//     fontSize: 16,
//     fontWeight: 'bold' 
//   },
  

//   dotsContainer: {
//     position: 'absolute',
//     bottom: 10,
//     right: 20,
//     flexDirection: 'row',
//   },

//   dot: { 
//     width: 8, 
//     height: 8,
//     borderRadius: 4, 
//     backgroundColor: 'rgba(255,255,255,0.5)', 
//     marginHorizontal: 3 
//   },

//   activeDot: { 
//     backgroundColor: '#fff' 
//   },

//   categoryContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: 20,
//     backgroundColor: '#fff',
//   },
//   catItem: {
//      alignItems: 'center' 
//     },

//   catCircle: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     backgroundColor: '#f0f0f0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 5,
//   },

//   catImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     resizeMode: 'contain',
//   },
//   activeCatCircle: { borderWidth: 2, borderColor: '#0057b8' },
//   catText: { fontSize: 12, color: '#333' },


//   promoContainer: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     margin: 15,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#c9c8c8ff',
//     height: 120,
//     overflow: 'hidden',
//   },
//   promoLeft: {
//      flex: 1, 
//      backgroundColor: '#fff3b0',
//       justifyContent: 'center', 
//       alignItems: 'center'
//      },

//   promoRight: {
//     flex: 1.5,
//     padding: 15,
//     justifyContent: 'center'
//     },
//   promoImage: {
//      width: 150, 
//      height: 150, 
//      resizeMode: 'center' 
//     },
//   promoTitle: { 
//     color: '#555', 
//     fontSize: 12, 
//     fontWeight: 'bold' 
//   },
//   promoDiscount: {
//      color: '#fdd835', 
//      fontSize: 32, 
//      fontWeight: 'bold' 
//     },
//   promoSubtitle: { 
//     color: '#fdd835', 
//     fontSize: 24, 
//     fontWeight: 'bold' 
//   },

//   sectionHeader: { 
//     marginLeft: 15, 
//     marginBottom: 10, 
//     color: '#0057b8', 
//     fontWeight: 'bold' 
//   },
//   gridContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     paddingHorizontal: 15,
//   },
//   productCard: {
//     width: '48%', 
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 15,
//     alignItems: 'center',
//     elevation: 0.5, 
//   },
//   productImage: { width: 150, height: 150, resizeMode: 'contain', marginBottom: 10 },
//   productName: { fontSize: 14, fontWeight: 'bold', color: '#333' },
//   productPrice: { fontSize: 12, color: '#888', marginTop: 5 },
// });