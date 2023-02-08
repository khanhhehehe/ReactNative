import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const Home = (props) => {
  const nav = props.navigation;
  const changeProfile=()=>{
    nav.navigate('Profile',{proUser: user});
  }
  const user = {name: 'Nguyen Quoc Khanh',age: '19',add:'Ha Noi',phoneNum: '0123456789',email:'khanhnqph27525@fpt.edu.vn'}
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={changeProfile}>
        <Text style={styles.text}>Thông tin cá nhân</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#00B0FF',
    padding: 10,
    marginTop: 8,
    borderRadius: 10
  },
  text:{
    color:"#fff",
    fontSize:22,
    fontWeight:'bold'
  },
})