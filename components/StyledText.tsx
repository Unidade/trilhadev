import { StyleSheet, TextProps, Text } from 'react-native'

export default function StyledText(props: TextProps) {
  return <Text style={[props.style, styles.text]} {...props} />
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Golos',
  },
})
