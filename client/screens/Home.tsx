import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import Layout from '../components/Layout/Layout';
import Header from '../components/Layout/Header';
import Category from '../components/catogory/Catogory';
import Banner from '../components/Banner/Banner';
import Products from '../components/Products/Products';

const Home = () => {
  return (
    <Layout>
      <Header />
      <Category />
      <Banner/>
     <Products/>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
