import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Editprofile = (props) => {
  const route = props.route
  const [name, setName] = useState(route.params.infoUser.name)
  const [age, setAge] = useState(route.params.infoUser.age)
  const [add, setAdd] = useState(route.params.infoUser.add)
  const [phoneNum, setPhoneNum] = useState(route.params.infoUser.phoneNum)
  const [email, setEmail] = useState(route.params.infoUser.email)
  const nav = props.navigation
  const cancel = () => {
    nav.navigate('Home')
  }
  const save = () => {
    nav.navigate('Profile', { proUser: { name: name, age: age, add: add, phoneNum: phoneNum, email: email } })
  }
  return (
    <View style={styles.container}>
      <View style={styles.boxAll}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={(text) => setAge(text)}
        />
        <TextInput
          style={styles.input}
          value={add}
          onChangeText={(text) => setAdd(text)}
        />
        <TextInput
          style={styles.input}
          value={phoneNum}
          onChangeText={(text) => setPhoneNum(text)}
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <View style={styles.boxbtn}>
          <TouchableOpacity style={styles.button} onPress={cancel}>
            <Text style={styles.text}>Hủy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={save}>
            <Text style={styles.text}>Lưu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Editprofile

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff'
  },
  button: {
    backgroundColor: '#ccc',
    padding: 10,
    backgroundColor: '#4DB6AC',
    borderRadius: 10,
    marginLeft: 12

  },
  boxbtn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 12
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 'bold'
  },
  boxAll: {
    borderRadius: 10,
    backgroundColor: '#80DEEA',
    padding: 12,
  },
  container:{
    flex:1,
    justifyContent:'center',
    padding:8
  }
})