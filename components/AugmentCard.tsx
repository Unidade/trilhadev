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
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      className='flex-1 '
      style={{
        borderRadius: 8,
        backgroundColor: color,
        maxHeight: 200,
        minHeight: 200,
        flex: 1,
        width: '100%',
        flexShrink: 0,
      }}
    >
      <Shadow
        distance={3}
        offset={[0, 1]}
        startColor={color}
        style={{
          borderRadius: 8,
          alignSelf: 'stretch',
          flex: 1,
          maxHeight: 200,
          minHeight: 200,
          flexShrink: 0,
        }}
      >
        <View className='px-4 py-2'>
          <View className='flex-row items-center justify-between'>
            <StyledText className='text-2xl text-slate-800 tracking-widest '>
              {title}
            </StyledText>
            <View
              className='items-center justify-center '
              style={{
                backgroundColor: color,
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
        </View>
      </Shadow>
    </TouchableOpacity>
  )
}
