import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './components/AppNavigator';  // Remova o NavigationContainer daqui
import LoginScreen from './components/LoginScreen';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  return (
    <NavigationContainer> {/* Somente um NavigationContainer no topo */}
      {isAuthenticated ? (
        <AppNavigator setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <LoginScreen setIsAuthenticated={setIsAuthenticated} />
      )}
    </NavigationContainer>
  );
}
