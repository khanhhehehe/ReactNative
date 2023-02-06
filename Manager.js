import { setStatusBarHidden, StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import ProductName, { ProductDesc as PrD } from './src/screens/ProductName';
import ProductList from './src/screens/ProductList'
import Lab1 from './src/screens/lab1'


export default function Manager(props) {
  let name = 'khanhhehe';
  let age = '19';

  function showData(label = '', value = '') {
    return label + ': ' + value;
  }
  const arrowShowData = (label, value) => {
    return label + ': ' + value;
  }
  const arrowMiniShowData = (label, value) => (label + ': ' + value);

  // tăng giá trị
  let count = 0;
  const [number, setNumber] = useState(0);
  const [trangthai, setTrangthai] = useState(false);

  //danh sach list
  // const list = [
  //   { id: 1, name: 'Bun bo hue', price: 50000 },
  //   { id: 2, name: 'Bun tron', price: 40000 },
  //   { id: 3, name: 'Bun real', price: 35000 },
  // ];


  // let listFood = [
  //   { id: 1, name: 'Thit luoc', price: 30000 },
  //   { id: 2, name: 'Cha gio', price: 35000 },
  //   { id: 3, name: 'Nem', price: 20000 },
  // ];

  const nav = props.navigation;

  const changeTab = () => {
    nav.navigate('Clone', { name: 'Clone' });
  }

  return (
    <View style={styles.container}>
      {/* {
        trangthai
          ? <>
            <Text style={styles.text}>{arrowShowData('Ten', 'khanhhehe')}</Text>
            <Text style={styles.text}>{arrowShowData('Tuoi', '19')}</Text>
            <Text style={styles.text}>{arrowShowData('Dia chi', 'Ha noi')}</Text>
            <Text>{number}</Text>
          </> : null
      }
      <Button title={`Bấm để ${trangthai ? 'ẩn' : 'hiện'} giao diện`} onPress={() => setTrangthai(!trangthai)} />

      <Button title={'Up Number'}
        onPress={() => setNumber(number + 1)}
      // onPress={plus}
      />
      <ProductName name='cơm gà' description='ngon' />
      <ProductName name='cơm thịt bò' />
      <ProductName name='cơm cuộn' />
      <ProductName name='cơm rang' />
      <PrD desc='describe' />

 
      <ProductList data={list} style={styles.backGroundFlat} /> */}

      <Lab1 />
      <TouchableOpacity style={styles.button} onPress={changeTab}>
        <Text style={styles.textTab}>Tab Clone</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F2F1',
    padding: 10
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red',
  },


  textName: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  item: {
    backgroundColor: '#80D8FF',
    borderRadius: 10,
    margin: 10,
    padding: 8,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#00B0FF',
    padding: 10,
    marginTop: 8,
  },
  textTab: {
    fontWeight: 'bold',
    fontSize: 20
  }
});
