/**
 * ActionButton
 *
 * @package components
 * @since XXXX.XX.XX
 * @copyright yuki.onishi
 */
import React from 'react'
import { Button } from 'react-native'

/**
 * props
 */
interface Props {
  title: string
  onPress: () => void
}

/**
 * ActionButton
 * @param {Props} props
 * @returns
 */
export const ActionButton: React.VFC<Props> = (props: Props) => {
  /* props */
  const { title, onPress } = props

  return <Button title={title} onPress={onPress} />
}
