/**
 * TopScreen
 *
 * @package screens
 * @since XXXX.XX.XX
 * @copyright yuki.onishi
 */
import React from 'react'
import { SafeAreaView } from 'react-native'
/* components */
import { TopTemplate } from '@Component/templates/Top'

/**
 * TopScreen
 * @returns
 */
export const TopScreen: React.VFC = () => {
  return (
    <SafeAreaView>
      <TopTemplate />
    </SafeAreaView>
  )
}
