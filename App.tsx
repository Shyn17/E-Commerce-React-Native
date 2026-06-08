import React, { useState } from 'react';
import { View } from 'react-native';

import Login from './Screens/Login'; 
import Home from './Screens/homeScreen'; 
import Signup from './Screens/Signup'; 
import ProductDetails from './Screens/ProductDetails'; 

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Login');
  
  const [selectedProduct, setSelectedProduct] = useState(null); 

  const navigate = (screenName, data) => {
    if (data) {
      setSelectedProduct(data); 
    }
    setCurrentScreen(screenName); 
  };

  return (
    <View style={{ flex: 1 }}>
      
      {currentScreen === 'Login' && (
        <Login onNavigate={navigate} />
      )}

      {currentScreen === 'Home' && (
        <Home onNavigate={navigate} />
      )}

      {currentScreen === 'Signup' && (
        <Signup onNavigate={navigate} />
      )}

      {currentScreen === 'Details' && (
        <ProductDetails 
          onNavigate={navigate} 
          product={selectedProduct} 
        />
      )}
      {/* --------------------------------------- */}

    </View>
  );
}