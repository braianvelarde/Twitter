import { StyleSheet, Pressable } from 'react-native';
import { Text, View } from '../../components/Themed';
import Tweet from '../../components/Tweet';
import { FlashList } from "@shopify/flash-list";
import tweets from '../../assets/data/tweets';
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlashList data={tweets} 
      estimatedItemSize={10} 
      renderItem={({item})=> <Tweet tweet={item}/>}/>
      <Link href="/new-tweet" asChild>
      <Pressable style={styles.floatingButton}>
      <Entypo name="plus" size={24} color="white" />
      </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  floatingButton: {
    backgroundColor: "#1C9BF0",
    width:50,
    height:50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems:"center",
    position: "absolute",
    right: 15,
    bottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
