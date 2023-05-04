import { StyleSheet, Text, View, Image, TextInput, Pressable, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";

const user = {
      id: 'u1',
      username: 'VadimNotJustDev',
      name: 'Vadim',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png',
}

const NewTweet = () => {
  const [newTweet, setNewTweet] = useState<string>("")
  const router = useRouter();
  const onTweetPress =()=>{
    setNewTweet("");
    router.back();
  }
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
      <Link href="../" style={{fontSize:20}}>Cancel</Link>
      <Pressable onPress={onTweetPress} style={styles.tweetButton}>
        <Text style={styles.tweetButtonText}>Tweet</Text>
      </Pressable>
      </View>
      <View style={styles.inputContainer}>
      <Image source={{uri:user.image}} style={styles.image}/>
      <TextInput onChangeText={(text)=>setNewTweet(text)} value={newTweet} placeholder="Whats happening?" multiline numberOfLines={5} style={{flex:1}}/>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default NewTweet;

const styles = StyleSheet.create({
  buttonsContainer:{
    flexDirection:"row",
    marginVertical: 10,
    justifyContent:"space-between",
    alignItems:"center",
  },
  container:{
    flex:1,
    padding:10,
    backgroundColor: "white"
  },
  image: {
    width:50,
    aspectRatio:1,
    borderRadius: 50,
    marginRight:10,
  },
  inputContainer:{
    flexDirection:"row",
  },
  tweetButton:{
    backgroundColor: "#1C9BF0",
    paddingHorizontal:20,
    padding: 10,
    borderRadius:50,
  },
  tweetButtonText:{
    color:"white",
    fontWeight: "bold",
  },
});
