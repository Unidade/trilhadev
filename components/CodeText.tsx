import { Text, TextProps } from 'react-native'

export function CodeText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />
}
