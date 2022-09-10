import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Dimensions,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native'
import React, {useState} from 'react'

const Demo08 = () => {
  const [text, onChangeText] = useState('Useless Text')
  const [number, onChangeNumber] = useState('')
  let [desc, setDesc] = useState('')
  let [inputRef] = useState<TextInput | null>(null)

  const handleBtnClick = () => {
    console.log(text)
    console.log(number)
    console.log('desc', desc)
    console.log(inputRef?.focus(), 'input')
  }

  const handleDescChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    console.log(e.nativeEvent.text, 'e')
    setDesc(e.nativeEvent.text)
  }
  const handleDescChange2 = (val: string) => {
    console.log(val)
  }
  // @ts-ignore
  return (
    <View style={styl.main}>
      <TextInput
        autoFocus={true}
        style={styl.input}
        placeholder="Please Input UserName"
        onChangeText={onChangeText}
        value={text}
        keyboardAppearance={'dark'}
        clearButtonMode={'always'}
        keyboardType={'phone-pad'}
      />
      <TextInput
        style={styl.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="请输入密码"
        keyboardType={'default'}
        clearButtonMode="while-editing"
        secureTextEntry={true}
      />
      <TextInput
        style={styl.textarea}
        placeholder={'请输入描述信息'}
        onChange={e => handleDescChange(e)}
        textAlignVertical={'top'}
        multiline={true}
        numberOfLines={5}
      />
      <TextInput
        ref={textInput => (inputRef = textInput)}
        style={styl.textarea}
        placeholder={'请输入描述信息02'}
        onChangeText={val => handleDescChange2(val)}
        textAlignVertical={'top'}
        multiline={true}
        numberOfLines={5}
        clearButtonMode={'unless-editing'}
      />
      <Button title="Click me" onPress={handleBtnClick} />
    </View>
  )
}

export default Demo08

const styl = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    width: Dimensions.get('window').width - 20,
    marginHorizontal: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  textarea: {
    height: 100,
    borderWidth: 1,
    borderBottomColor: 'keyblue',
    textAlignVertical: 'top',
    marginBottom: 10,
  },
})
