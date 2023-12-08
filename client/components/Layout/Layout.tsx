import React, {ReactNode} from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import Footer from './Footer';
import Header from './Header';
import Catogory from '../catogory/Catogory';
import Banner from '../Banner/Banner';

const Layout = ({children}: {children: ReactNode}) => {
  
    return (
      <>
        <StatusBar />
        <View>{children}</View>
        <View style={styles.footer} >
          <Footer />
        </View>
      </>
    );
  };

const styles = StyleSheet.create({
  
  footer:{
    display:"flex",
    width:"100%",
    flex:1,
    justifyContent:'flex-end',
    zIndex:100,
    borderTopWidth:1,
    borderColor:"lightgray",
    position:"absolute",
    bottom:0,
    padding:10
  }
});

export default Layout;
