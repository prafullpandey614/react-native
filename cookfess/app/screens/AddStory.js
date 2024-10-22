import React,{useState} from 'react'
import { SafeAreaView, TextInput, Text, StyleSheet } from 'react-native'

const AddStory = () => {
    const [storyText, setStoryText] = useState("")
  return (
        <SafeAreaView>
            <Text>HiiiiiLorem40 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod omnis totam eum, impedit perspiciatis veritatis, excepturi qui voluptatum doloremque repellendus labore praesentium dolor blanditiis vel illo iusto, quas quisquam maxime odit voluptate saepe atque enim nobis ab. Natus rerum provident quasi mollitia, nobis nihil ea voluptatum ut veritatis praesentium. Natus?</Text>
            <TextInput
            style={styles.input} 
            onChange={setStoryText}
            value={storyText}
            multiline
            />

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      minHeight: 140
    },
  });
  
export default AddStory