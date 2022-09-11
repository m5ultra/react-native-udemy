import {StyleSheet, View} from 'react-native'
import React, {useState} from 'react'
import {Picker} from '@react-native-picker/picker'
const Demo15 = () => {
  const [selectedLanguage, setSelectedLanguage] = useState()
  return (
    <View style={styl.main}>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => {
          console.log(itemValue, itemIndex)
          setSelectedLanguage(itemValue)
        }}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  )
}

export default Demo15

const styl = StyleSheet.create({
  main: {
    flex: 1,
  },
})
