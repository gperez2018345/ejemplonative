/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {SafeAreaView, View, Text, StyleSheet, Button} from 'react-native';
import Layout1 from './src/views/layout1/Layout1';

const App = () => {
  const [nombre, setNombre] = useState('Gerardo Perez');
  return (
    <SafeAreaView>
      <Layout1 nombre={nombre} />
    </SafeAreaView>
  );
};

export default App;
