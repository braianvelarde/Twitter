import { View, Text } from "react-native";
import React from "react";
import { useSearchParams } from "expo-router";
import tweets from "../../assets/data/tweets";
import Tweet from "../../components/Tweet";

function TweetScreen() {
    const {id} = useSearchParams();

    const tweet = tweets.find(t=>t.id === id);

    if (!tweet) {
        return <Text>Tweet not found</Text>
    }
    return (
        <Tweet tweet={tweet} />
    );
};

export default TweetScreen;