import React from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import { Video } from "expo-av";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  interactionBtns: {
    position: "absolute",
    right: 16,
    alignSelf: "flex-end",
    bottom: 120,
    flexDirection: "column",
  },
  interactionIcons: {
    fontSize: 32,
    marginTop: 24,
  },
  userDetails: {
    bottom: 44,
    left: 16,
    position: "absolute",
    paddingRight: 64,
  },
});

export default ({ shouldPlay, data }) => {
  const { username, comments, likes, caption, video } = data;
  return (
    <View style={{ flex: 1, width, height }}>
      <Video
        source={video}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={shouldPlay}
        isLooping
        style={{ width, height, ...StyleSheet.absoluteFill, flex: 1 }}
      />
      <View style={{ ...styles.interactionBtns }}>
        <FontAwesome
          style={{ ...styles.interactionIcons }}
          name="heart"
          color="white"
        />
        <Text style={{ color: "white", fontSize: 12, textAlign: "center" }}>
          {likes}
        </Text>
        <MaterialCommunityIcons
          style={{ ...styles.interactionIcons }}
          name="comment-processing"
          color="white"
        />
        <Text style={{ color: "white", fontSize: 12, textAlign: "center" }}>
          {comments}
        </Text>
        <MaterialCommunityIcons
          style={{ ...styles.interactionIcons }}
          name="share"
          color="white"
        />
        <Text style={{ color: "white", fontSize: 12, textAlign: "center" }}>
          {parseInt(Math.random() * 100)}
        </Text>
      </View>
      <View style={{ ...styles.userDetails }}>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            marginBottom: 8,
            fontWeight: "bold",
          }}
        >
          @{username}
        </Text>
        <Text style={{ color: "white", fontSize: 14 }}>
          {caption.length > 140 ? caption.slice(0, 140) + "..." : caption}
        </Text>
      </View>
    </View>
  );
};
