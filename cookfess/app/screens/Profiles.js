import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  Dimensions
} from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

function Profiles({navigation}) {
  return (
    <View style={styles.layout}>
      <Pressable
        style={styles.parts}
        onPress={() =>
            navigation.navigate('Team', {name: 'paksh'})
          }
      >
        <ImageBackground
          style={styles.image}
          source={{
            uri: "https://i.pinimg.com/736x/3a/f5/d1/3af5d184a369154ac08650deb0bab3f2.jpg",
          }}
          resizeMode="cover"
        >
          <Text style={styles.txt}>कौरव</Text>
        </ImageBackground>
      </Pressable>

      <Pressable
        style={styles.parts}
        onPress={() => {
          console.log("Pandav clicked");
        }}
      >
        <ImageBackground
          style={styles.image}
          source={{
            uri: "https://th.bing.com/th/id/OIP.n0-t_Y1Bsb5S9wPYnMqAuAHaEK?rs=1&pid=ImgDetMain",
          }}
          resizeMode="cover"
        >
          <Text style={styles.txt}>पांडव</Text>
        </ImageBackground>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
  },
  parts: {
    margin: 10, // Spacing between the boxes
    width: screenWidth*0.8,
    height: screenHeight*0.4,
    borderRadius: 20,
    overflow: "hidden", // To make sure the background image fits within rounded borders
  },
  image: {
    flex: 1,
    justifyContent: "center", // Center text vertically
    alignItems: "center", // Center text horizontally
  },
  txt: {
    textAlign: "center",
    fontSize: 24,
    color: "white",
    backgroundColor: "crimson", // Add a transparent background for better text readability
    padding: 20,
    borderRadius: 12,
    marginTop: screenHeight*0.3,
  },
});

export default Profiles;
