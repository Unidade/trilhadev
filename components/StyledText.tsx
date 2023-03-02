import { StyleSheet, TextProps, Text } from 'react-native'

export default function StyledText(props: TextProps) {
  return <Text {...props} style={[props.style, styles.text]} />
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Golos',
  },
})
