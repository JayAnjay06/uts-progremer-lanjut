import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const NewsScreen = (props: Props) => {

  return (
    <View style={styles.container}>
      <Text>News Screen</Text>
    </View>
  )
}

export default NewsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})