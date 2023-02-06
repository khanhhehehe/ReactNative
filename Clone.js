import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Clone = (props) => {
  const route = props.route
  
  return (
    <View style={styles.container}>
      <Text>Clone neeeeee {route.params.name?.name||'Manager'}</Text>
    </View>
  )
}

export default Clone

const styles = StyleSheet.create({
    container:{
        justifyContent:'center'
    }
})