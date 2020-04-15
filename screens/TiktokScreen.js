import React, { useState, useRef } from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import VideoCard from "../components/VideoCard";

import Video1 from "../assets/video1.mp4";
import Video2 from "../assets/video2.mp4";
import Video3 from "../assets/video3.mp4";
import Video4 from "../assets/video4.mp4";
import Video5 from "../assets/video5.mp4";
import Video6 from "../assets/video6.mp4";
import Video7 from "../assets/video7.mp4";
import Video8 from "../assets/video8.mp4";
import Video9 from "../assets/video9.mp4";
import Video10 from "../assets/video10.mp4";

const { height, width } = Dimensions.get("window");

const data = [
  {
    username: "ohmyjoshhhhh",
    likes: "11.7k",
    comments: "128",
    caption:
      "When I feel a little down, I put on my favourite high heels and dance",
    video: Video1,
  },
  {
    username: "henrykornaros",
    likes: "112.9k",
    comments: "112",
    caption: "Do you live in a cornfield, coz I’m stalking you.",
    video: Video2,
  },
  {
    username: "mmmjoemele",
    likes: "2.1M",
    comments: "200k",
    caption: "Disappointed but not surprised.",
    video: Video3,
  },
  {
    username: "carrotlmao",
    likes: "8.7M",
    comments: "2.5M",
    caption: "I got back with my Ex…Box 360",
    video: Video4,
  },
  {
    username: "rexin_around",
    likes: "312.7k",
    comments: "30.2k",
    caption:
      "Pain is temporary, but no matter how hard it gets, the gains and growth are what matters. Suffering is what you make of it, it may be good or bad, it’s all a part of a process, that makes us strong not on the physical only but mentally and spiritually as well. Pain is a growth component, like kids first teeth cutting, it’s meant to hurt, but it’s for the better.",
    video: Video5,
  },
  {
    username: "catherineashley06",
    likes: "407.2k",
    comments: "40.1k",
    caption: "I’m literally thinking since 5 mins for a caption and this is it",
    video: Video6,
  },
  {
    username: "madiprew",
    likes: "113.7k",
    comments: "173",
    caption: "I’m just saying you could do better",
    video: Video7,
  },
  {
    username: "mitchell",
    likes: "47.2k",
    comments: "300",
    caption: "Started from the bottom now we’re here",
    video: Video8,
  },
  {
    username: "dannybeauch",
    likes: "9.4M",
    comments: "10.9k",
    caption: "Call me the referee because I be so official",
    video: Video9,
  },
  {
    username: "elisonavocado",
    likes: "132.2k",
    comments: "10.3k",
    caption: "Why chase you, when I am the catch!",
    video: Video10,
  },
];

export default function TiktokScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // These refs are used to prevent the configs
  // and functions to be re-created on every render
  // change these to class properties if you're using
  // a class component as shown in the discussion
  // here: https://github.com/facebook/react-native/issues/17408
  const viewConfigRef = useRef({
    itemVisiblePercentThreshold: 100,
  });

  const onViewChangedHandlerRef = useRef((item) => {
    if (item.viewableItems.length > 0) {
      setCurrentIndex(item.viewableItems[0].index);
    }
  });

  const renderItem = ({ item, index }) => {
    return <VideoCard data={item} shouldPlay={currentIndex == index} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        data={data}
        keyExtractor={({ username }) => username}
        renderItem={renderItem}
        snapToInterval={height}
        snapToAlignment="center"
        decelerationRate={0.9}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewChangedHandlerRef.current}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  videoStyles: {
    width,
    height,
    backgroundColor: "pink",
  },
});
