import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  Dimensions,
  FlatList,
  TouchableHighlight,
  Image
} from "react-native";
import karan from "../../assets/karan.png"
import bhism from "../../assets/pitamah.png"
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const data = [
  {
    id: "1",
    name: "Duryodhan",
    image : require("./../../assets/duryodhan.png")
  },
  {
    id: "2",
    name: "Karn",
    image : require("./../../assets/karan.png")

  },
  {
    id: "3",
    name: "Bhishm Pitamah",
    image : require("./../../assets/pitamah.png")

  },
  {
    id: "4",
    name: "Dushashan",
    image : require("./../../assets/dusashan.png")

  },
  {
      id: '5',
      name : "Aswathama",
      image: require("./../../assets/aswathama.png")
  }
];

function Team({navigation}) {
    console.log("karan Image" ,karan)
  return (
    <View style={styles.layout}>
    
     <View style={styles.flatView}>

      <FlatList

        data={data}
        renderItem={({ item,index,separator }) => {
          console.log("Inside the Team", item.image);
          console.log("items id : ",item.id)
          return (
            <View key={item.id} style={styles.member}>
              <Pressable  onPress={()=>
                  navigation.push('Story', {id: item.id})
              }>
                <Image source={item.image} style={styles.image}/>

               
              </Pressable>
              <Text style={styles.txt}>{item.name}
             </Text>
            </View>
          );
        }}

        horizontal={true}
      />
     </View>

    <View>
        <Text style={styles.htxt}>
        कौरवो के पक्ष में आपका स्वागत है
        </Text>
        <Text style={styles.ptxt}>
        कौरव एक संस्कृत शब्द है जो भारत के एक महान राजा कुरु के वंशजों को संदर्भित करता है, जो महाकाव्य महाभारत के कई पात्रों के पूर्वज हैं। आमतौर पर, इस शब्द का उपयोग राजा धृतराष्ट्र और उनकी पत्नी गांधारी के 100 पुत्रों के लिए किया जाता है।
        </Text>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: "black",
    flex: 1,
    // justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    
  },
  flatView: {
    height: 200,
    backgroundColor: "black"
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "green",
    
  },
  member:{
    // flex: 0.3,
    // backgroundColor: "crimson",
    height: 100,
    // width: 100,
    marginRight: 20,
    marginTop: 24,
    marginLeft: 2,
    alignItems: "center",
    justifyContent: "center",
    
  },    
  txt :{
    textAlign: "center",      
    //   flex: 0.4,

    fontSize: 16,
    color: "white"
  },
  htxt: {
      marginTop: screenHeight*0.1,
      color: "yellow",
      fontSize: 28,
    textAlign: "center",      

  },
  ptxt :{
      color: "white",
      width: screenWidth*0.8,
      textAlign: "center",
      fontSize: 18
  }
});

export default Team;
