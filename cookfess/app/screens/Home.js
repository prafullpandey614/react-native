import { StyleSheet, Text, View, Image, Pressable, LogBox } from "react-native";


const Home = ({navigation}) => {
  return (

    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          style={{ width: "100%", height: "100%" }}
          src={
            "https://freepngimg.com/thumb/graphic/54709-6-illustrations-png-download-free.png"
          }
        />
      </View>

      <Pressable style={styles.stpBtn} onPress={() =>
        navigation.navigate('Profile', {name: 'paksh'})
      }>
        <Text style={styles.Btntxt}>प्रवेश-द्वार</Text>
      </Pressable>

      <Text style={styles.txt}>कलयुग के महाभारत की कथा</Text>
    </View>

  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
      alignItems: "center",
      justifyContent: "center",
    },
    txt: {
      color: "white",
      fontSize: 28,
      padding: 12,
    },
    Btntxt: {
      color: "black",
      fontSize: 28,
      padding: 12,
    },
    stpBtn: {
      color: "white",
      fontSize: 22,
      backgroundColor: "pink",
      borderRadius: 12,
      borderWidth: 3,
      borderColor: "white"
    },
    logoBox : {
      width: 400,
      height: 400,
    }
  });

export default Home
