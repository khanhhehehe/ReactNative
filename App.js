import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Manager from './Manager'
import Clone from './Clone'
const Home = (props) => {
  const listFood = [
    { id: 1, name: 'Nguyen Van A', date: '06/02/2023' },
    { id: 2, name: 'Nguyen Van B', date: '05/02/2023' },
    { id: 3, name: 'Nguyen Van C', date: '07/02/2023' },
  ];
  const nav = props.navigation;
  const transDataQuanLy = () => {
    nav.navigate('QuanLy', { list: [...listFood] })
  }
  const transDataAbout = () => {
    nav.navigate('About', { id: 0, name: 'Nguyen Quoc Khanh', date: '02/09/2003' })
  } 
  return (
    <View >
      <View style={styles.containerHome}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg?w=2000',
          }}
          style={styles.img}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={transDataQuanLy}>
        <Text style={styles.textbtn}>Quản lý</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={transDataAbout}>
        <Text style={styles.textbtn}>About</Text>
      </TouchableOpacity>
    </View>
  )
}
function bgNum(num) {
  let bgNumber = (num % 2 === 0) ? styles.bgNumberEven : styles.bgNumberOdd;
  return bgNumber;
}
const QuanLy = (props) => {
  const route = props.route
  const listData = route.params.list

  return (
    <View style={styles.containerQL}>
      <FlatList style={styles.backGroundFlat} data={listData}
        renderItem={({ item }) => <>
          <View style={styles.item2}>
            <Text style={[styles.numberStu, bgNum(item.id)]}>{item.id}</Text>
            <View style={styles.boxItem}>
              <Text style={styles.textItem}>{item.name}</Text>
              <Text style={styles.textItem2}>{item.date}</Text>
            </View>
          </View>
        </>} />
    </View>
  )
}
const About = (props) => {
  const route = props.route
  return (
    <View style={[styles.containerQL,styles.bg_tt]}>
      <View style={styles.ttcanhan}>
        <Text style={styles.texttt}>Họ và tên: </Text>
        <Text style={styles.texttt}>
          {route.params.name}
        </Text>
      </View>

      <View style={styles.ttcanhan}>
        <Text style={styles.texttt}>Ngày sinh: </Text>
        <Text style={styles.texttt}>
          {route.params.date}
        </Text>
      </View>


    </View>
  )
}
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='QuanLy' component={QuanLy} />
        <Stack.Screen name='About' component={About} />
        <Stack.Screen name='Manager' component={Manager} options={{ title: "Tab Manager nè" }} />
        <Stack.Screen name='Clone' component={Clone} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
const styles = StyleSheet.create({
  containerHome: {
    alignItems: 'center',
    justifyContent: 'center'

  }
  , containerQL: {
    flex: 1,
    margin: 5
  },
  img: {
    backgroundColor: '#80DEEA',
    borderRadius: 15,
    width: 150,
    height: 150,

  },
  button: {
    alignItems: 'center',
    backgroundColor: '#00B0FF',
    padding: 10,
    marginTop: 8,
  },
  textbtn: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  backGroundFlat: {
    backgroundColor: '#B5F1CC',
    padding: 10,
    width: '100%',
    borderRadius: 10
  },
  item2: {
    padding: 8,
    backgroundColor: '#E5FDD1',
    borderRadius: 10,
    marginVertical: 8,
    flexDirection: 'row'
  },
  textItem: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000'
  },
  textItem2: {
    fontSize: 18,
    color: '#000'
  },
  numberStu: {
    fontSize: 22,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    margin: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  bgNumberEven: {
    backgroundColor: '#00E676',
    borderRadius: 10,
  },
  bgNumberOdd: {
    backgroundColor: '#039BE5',
    borderRadius: 10,
  },
  boxItem: {
    justifyContent: 'center'
  },
  ttcanhan: {
    flexDirection: 'row'
  },
  bg_tt:{
    backgroundColor:'#00E676',
    alignItems:'center',
    justifyContent:'center'
  },
  texttt:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff'
  },
})