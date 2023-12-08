import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { categoriesData } from '../../data/CatogoriesData';


interface CategoryItem {
  _id: number;
  name: string;
  path: string;
  icon: string;
}

const Category = () => {
  const navigation = useNavigation();

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {categoriesData?.map((item: CategoryItem) => ( 
          <View key={item._id}>
            <TouchableOpacity
              style={styles.catcontainer}
              onPress={() => navigation.navigate(item.path)}
            >
              <Text>
                <Icon name={item.icon} style={styles.catIcon} />
              </Text>
              <Text style={styles.catTitle}>{item.name} </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fffffff',
    padding: 5,
    flexDirection: 'row',
    flex:1
  },
  catcontainer: {
    padding: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  catIcon: {
    fontSize: 28,
    // verticalAlign does not apply to React Native, consider using marginBottom or marginTop
    marginBottom: 5,
  },
  catTitle: {
    fontSize: 12,
  },
});

export default Category;
