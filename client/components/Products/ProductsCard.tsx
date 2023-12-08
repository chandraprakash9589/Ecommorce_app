import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
interface Product {
  name: string;
}
interface ProductDetailsParams {
  id: string;
}
//@ts-ignore

const ProductsCard = ({p}) => {
  const navigation = useNavigation();

  //more details btn
  const handleMoreButton = (id: string) => {
    navigation.navigate('productDetails', {id: id});
    console.log(id, 'id');
  };
  const handleAddToCart = () => {
    Alert.alert('Add to Cart');
  };
  return (
    <View>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={{uri: p?.imageUrl}} />
        <Text style={styles.cardTitle}>{p?.name}</Text>
        <Text style={styles.cardDesc}>
          {p?.description.substring(0, 30)}....more
        </Text>

        <View style={styles.BtnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => handleMoreButton(p._id)}>
            <Text style={styles.btnText}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnCard}
            onPress={() => handleAddToCart()}>
            <Text style={styles.btnText}>ADD ID CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: 'lightgray',
    marginVertical: 5,
    marginHorizontal: 6,
    width: '45%',
    padding: 10,
    backgroundColor: '#fffff',
    justifyContent: 'center',
  },
  cardImage: {
    height: 120,
    width: '100%',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardDesc: {
    fontSize: 10,
    textAlign: 'left',
  },
  BtnContainer: {
    marginTop: 3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#0a66c2',
    height: 25,
    width: 70,
    borderRadius: 5,
    justifyContent: 'center',
  },
  btnCard: {
    backgroundColor: 'orange',
    height: 25,
    width: 70,
    borderRadius: 5,
    justifyContent: 'center',
  },
  btnText: {
    color: '#ffff',
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default ProductsCard;
