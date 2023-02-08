import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Profile = (props) => {
  const route = props.route
  const nav = props.navigation
  const changeEditprofile = () => {
    nav.navigate('Editprofile', { infoUser: route.params.proUser })
  }
  return (
    <View style={styles.container}>
      <View style={styles.bg_img}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg?w=2000',
          }}
          style={styles.img}
        />
        <TouchableOpacity style={styles.button} onPress={changeEditprofile}>
          <Text style={styles.text}>Sửa</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bgInfo}>
        <View style={styles.infoUser}>
          <Text style={styles.text}>Tên: </Text>
          <Text style={styles.text}>{route.params.proUser.name}</Text>
        </View>
        <View style={styles.infoUser}>
          <Text style={styles.text}>Tuổi: </Text>
          <Text style={styles.text}>{route.params.proUser.age}</Text>
        </View>
        <View style={styles.infoUser}>
          <Text style={styles.text}>Địa chỉ: </Text>
          <Text style={styles.text}>{route.params.proUser.add}</Text>
        </View>
        <View style={styles.infoUser}>
          <Text style={styles.text}>Số điện thoại: </Text>
          <Text style={styles.text}>{route.params.proUser.phoneNum}</Text>
        </View>
        <View style={styles.infoUser}>
          <Text style={styles.text}>Email: </Text>
          <Text style={styles.text}>{route.params.proUser.email}</Text>
        </View>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingVertical: 10
  },
  img: {
    backgroundColor: '#80DEEA',
    borderRadius: 15,
    width: 150,
    height: 150,
    marginRight: 20
  },
  infoUser: {
    flexDirection: 'row'
  },
  bg_img: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  button: {
    backgroundColor: '#40C4FF',
    padding: 15,
    borderRadius: 50,
  },
  bgInfo: {
    backgroundColor: '#90A4AE',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 8,
    marginTop: 20
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 'bold'
  },
})