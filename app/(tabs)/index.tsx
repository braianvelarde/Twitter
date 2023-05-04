import { StyleSheet, Image, FlatList } from 'react-native';
import { Text, View } from '../../components/Themed';
import Tweet from '../../components/Tweet';
import { FlashList } from "@shopify/flash-list";
import tweets from '../../assets/data/tweets';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlashList data={tweets} 
      estimatedItemSize={10} 
      renderItem={({item})=> <Tweet tweet={item}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
