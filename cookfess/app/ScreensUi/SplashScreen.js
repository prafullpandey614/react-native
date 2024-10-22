import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation(); // Get the navigation prop
  const handlePress = () => {
      navigation.navigate('Authentication'); // Replace 'TargetScreen' with the name of the screen you want to navigate to
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.LogoContainer}>
        <Image
          style={styles.img}
          source={
            require('../../assets/forexLogo.png')
          }
        />
      </View>
      <View style={styles.SplashMessageContainer}>
          <Text style={styles.messageTxt}>
              Money Mines....
          </Text>
          <Pressable style={styles.btn} onPress={handlePress} >
              <Text>Dive In</Text>
          </Pressable>
      </View>
    </View>
  );
};

styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#0f172a",
    justifyContent: "center",
    // alignItems: "center",
  },
  img: {
    height: "100%",
    resizeMode: "cover",
    // height: 300
    width: "100%",
  },
  LogoContainer: {
      flex: 1,
      // backgroundColor: 'grey',
      width: 300,
      // height: 500,
      paddingTop: 50,
      margin: "auto"
  },
  SplashMessageContainer: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
  },
  messageTxt: {
    color: 'white',
    fontSize: 24,

  },
  btn: {
      marginTop: 20,
      backgroundColor: 'white',
      padding: 12,
      paddingHorizontal: 24,
      borderRadius: 4,
      shadowRadius: 3,
      shadowColor: 'crimson'
  }
});

export default SplashScreen;
