/**
 * TopTemplate
 *
 * @package Components
 * @since XXXX.XX.XX
 * @copyright yuki.onishi
 */
import React from 'react'
/* components */
import { ActionButton } from '@Component/common/ActionButton'

/**
 * TopScreen
 * @returns
 */
export const TopTemplate: React.VFC = () => {
  return (
    <ActionButton
      title="ボタン"
      onPress={() => {
        //
      }}
    />
  )
}
