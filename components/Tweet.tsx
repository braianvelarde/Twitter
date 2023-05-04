import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import tweets from '../assets/data/tweets';

const tweet = tweets[0];

interface Props {
    userName: string,
}

export default function Tweet({tweet}) {
  return (
    <View style={styles.container}>
      <Image source={{uri:tweet.user.image}} style={styles.userImage}/>
      <View style={styles.usernameContainer}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.textContent}>{tweet.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "lightgray",
        backgroundColor: "white"
      },
      textContent: {
        lineHeight: 20,
        marginTop: 5
      },
      userImage: {
        width:50, 
        height:50, 
        borderRadius:50,
      },
      name: {
        fontWeight: "600"
      },
      usernameContainer : {
        marginLeft: 10,
        flex: 1,
      }
});
