import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import tweets from '../assets/data/tweets';
import { TweetType } from '../types';
import { Entypo, Feather } from '@expo/vector-icons';
import IconButton from './IconButton';

type TweetProps = {
    tweet: TweetType
}

const tweet = tweets[0];

export default function Tweet({tweet}:TweetProps) {
  return (
    <View style={styles.container}>
      <Image source={{uri:tweet.user.image}} style={styles.userImage}/>
      <View style={styles.usernameContainer}>
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.name}>{tweet.user.name}</Text>
            <Text style={styles.userName}>{tweet.user.username} &#183; 2h</Text>
            <Entypo name="dots-three-horizontal" size={16} color="gray" style={{marginLeft:"auto"}} />
        </View>       
        <Text style={styles.textContent}>{tweet.content}</Text>
        {tweet.image &&
            <Image source={{uri: tweet.image}} style={styles.tweetImage}/>
        }
        <View style={styles.footer}>
        <IconButton icon="comment" text={tweet.numberOfComments}/>
        <IconButton icon='retweet' text={tweet.numberOfRetweets} />
        <IconButton icon='heart' text={tweet.numberOfLikes} />
        <IconButton icon='chart' text={tweet.impressions || 0} />
        <IconButton icon='share-apple'/>
        </View>
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
      footer: {
        flexDirection:"row",
        marginVertical:5,
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
      },
      userName: {
        color: "gray",
        marginLeft: 5
      },
      tweetImage: {
        width: "100%",
        aspectRatio: 16/9,
        marginVertical: 10,
        borderRadius:15,
      }
});
