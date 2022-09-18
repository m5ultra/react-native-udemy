import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {Button, View, Text, TextInput} from 'react-native'
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'

type RootParamsList = {
  Home: {post: string}
  CreatePost: undefined
}
const Stack = createNativeStackNavigator<RootParamsList>()
type HomeProps = NativeStackScreenProps<RootParamsList, 'Home'>
type CreatePostProps = NativeStackScreenProps<RootParamsList, 'CreatePost'>
function HomeScreen({navigation, route}: HomeProps) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post])

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Text style={{margin: 10}}>Post: {route.params?.post}</Text>
    </View>
  )
}

function CreatePostScreen({navigation}: CreatePostProps) {
  const [postText, setPostText] = React.useState('')

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{height: 200, padding: 10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}
        textAlignVertical={'top'}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: {post: postText},
            merge: true,
          })
        }}
      />
    </>
  )
}
export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'CreatePost'} component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
