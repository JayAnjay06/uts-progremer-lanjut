import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const HistorysScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>History Screen</Text>
    </View>
  )
}

export default HistorysScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})