import React, { useEffect, useState } from 'react'
import { Text, View, Button, Pressable } from 'react-native'
import { CodeText } from './CodeText'

import StyledText from './StyledText'

type Step = {
  id: number
  instruction: string
  code?: string
  options?: Option[]
}

type Option = {
  id: string
  label: string
  correct?: boolean
}

const Quiz = ({ steps }: { steps: Step[] }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setQuizCompleted(false)
    }, 3000)

    return () => {
      clearInterval(timeout)
    }
  }, [quizCompleted])

  if (quizCompleted) {
    return <Text>Quiz completed</Text>
  }

  return (
    <View className='flex-1  justify-between px-4 py-5'>
      <StepInstruction
        instruction={steps[currentStep].instruction}
        code={steps[currentStep].code}
      />
      <CodeProgression
        step={steps[currentStep]}
        set={setCurrentStep}
        onNextStep={handleNextStep}
      />
    </View>
  )
}

export default Quiz

const StepInstruction = ({
  instruction,
  code,
}: {
  instruction: string
  code?: string
}) => {
  return (
    <View>
      <StyledText className='text-lg tracking-wider leading-8'>
        {instruction}
      </StyledText>
      {code && <Text>{code}</Text>}
    </View>
  )
}

const CodeProgression = ({
  step,
  onNextStep,
  set,
}: {
  step: Step
  onNextStep: () => void
  set: (step: number) => void
}) => {
  const [progress, setProgress] = useState('')

  console.log(step)
  const handleAnswer = (option: Option) => {
    console.log(option)
    if (option.correct) {
      if (step.code) {
        setProgress(progress + step.code)
      }
      onNextStep()
    } else {
      // show error message
    }
  }

  return (
    <View>
      <View className='bg-white self-start'>
        <CodeText>{progress}</CodeText>
      </View>
      <View className='justify-center items-center' style={{ gap: 20 }}>
        {step.options ? (
          step.options.map((option) => (
            <Pressable
              key={option.id}
              onPress={() => handleAnswer(option)}
              className='bg-slate-700 rounded-lg px-5  py-5'
            >
              <StyledText className='text-white text-base'>
                {option.label}
              </StyledText>
            </Pressable>
          ))
        ) : (
          <Button title='Next' onPress={onNextStep} />
        )}
      </View>

      <View className='mt-5 self-center flex-row' style={{ gap: 50 }}>
        <Button
          onPress={() => set(step.id > 1 ? step.id - 2 : step.id - 1)}
          title='Go Back'
        />
        <Button
          onPress={() => {
            set(0)
            setProgress('')
          }}
          title='Reset'
        />
      </View>
    </View>
  )
}
