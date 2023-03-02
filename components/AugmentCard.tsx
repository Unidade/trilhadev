import { Image } from 'expo-image'
import { TouchableOpacity, View } from 'react-native'
import StyledText from './StyledText'
import { Shadow } from 'react-native-shadow-2'
type ChoiceCardProps = {
  image: string
  text: string
  title: string
  color: string
  onPress: () => void
}

export default function AugumentCard({
  image,
  title,
  text,
  color,
  onPress,
}: ChoiceCardProps) {
  const darkColor = DarkColor(color)

  return (
    <Shadow
      distance={3}
      offset={[0, 1]}
      startColor={color}
      style={{
        paddingBottom: 5,
        flexShrink: 0,
        maxHeight: 200,
        minHeight: 200,
        borderRadius: 8,

        alignSelf: 'stretch',
      }}
    >
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        className='flex-1 px-4 py-2'
        style={{
          borderRadius: 8,
          backgroundColor: color,
          maxHeight: 200,
          minHeight: 200,

          width: '100%',
          flexShrink: 0,
        }}
      >
        <View className='flex-row items-center justify-between'>
          <StyledText className='text-2xl text-slate-800 tracking-widest '>
            {title}
          </StyledText>
          <View
            className='items-center justify-center '
            style={{
              backgroundColor: darkColor,
              flexShrink: 0,
              padding: 7,
              borderRadius: 10,
            }}
          >
            <Image source={image} style={{ height: 64, width: 64 }} />
          </View>
        </View>
        <View className='mt-5'>
          <StyledText className='text-base tracking-wider'>{text}</StyledText>
        </View>
      </TouchableOpacity>
    </Shadow>
  )
}

// Receives a string in the format of rgba(255, 255, 255, 1) return a string in the format of rgba(255, 255, 255, 0.5)
function DarkColor(color: string) {
  const rgbaString = color
  const rgbaArray = rgbaString.split(',') // Convert the string to an array, splitting it by commas

  // Now you can manipulate the last value as needed
  const newLastValue = 1

  // Finally, put the string back together with the new last value
  const newRgbaString = `rgba(${rgbaArray[0]}, ${rgbaArray[1]}, ${rgbaArray[2]}, ${newLastValue})`
  return newRgbaString
}
