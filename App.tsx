/**
 * App
 *
 * @package components
 * @since XXXX.XX.XX
 * @copyright yuki.onishi
 */
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
/* screens */
import { TopScreen } from '@Screen/Top'

/**
 * App
 * @returns
 */
const App: React.VFC = () => {
  return <TopScreen />
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
