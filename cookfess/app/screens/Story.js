import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, Pressable } from "react-native";
import { useState } from "react";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const data = [
  {
    id: "1",
    image: require("./../../assets/duryodhan.png"),
    successRate: 1,
    story: `# Situation

        Hopes! Hopes and Only Hopes!
        
        Today I am going to write my situation here which I can’t share with anyone, even I am not sure why I am writing it here.
        
        Let’s begin with Career, I am good in academics, and I am also Holding a decent job Offer but this is not what I expected from me. I am getting rejected day by day in many companies and getting ignored by many which automatically can down my self-esteem. It’s totally fine to get rejected but the time is crucial for me and family is expecting a financial support from me at this point.
        
        Suppose I can survive all these issues, but the major thing comes when I think about my relationships which I lost. Actually, I think that I am responsible for everything which is happening in my life.
        
        I have a strong belief that I am a good person and can do anything for my partner for their happiness, I have no ego issues, and I love them from all perspective. In the current scenario I am ready to do anything for them, I don’t know why? Day by Day I am losing my self-respect in front of them, you know why?
        
        Because I love playing with them, teasing them but this time it’s not like playing or teasing it’s a serious game in which my partner is not interested and putting all efforts to ignore me and end this game. But on the other side it’s me and two of my friends who are supporting me on my journey.
        
        We always look for an opportunity, and despite of being disrespected I message my partner eventually. Even sometimes she blocked me, but I requested her to unblock, and I am successful several times.
        
        Let’s talk about my friends, I don’t want to disclose their names here but yes, they are gem in my life.
        
        Suppose I lose everything, but the journey through which I am going will be most memorable and these two friends will be unforgettable for me. Actually, I am also enjoying my disrespect and, in my opinion, if you love someone there is nothing like disrespect.
        
        Here comes the twist, the third person between me and my partner, if my partner accepted him and I don’t know this fact! This will be a blunder and the worst case for me.
        
        Now I think I got the purpose why I am writing all these shits here. 
        
        If I got betrayed by my partner, betrayed will be a wrong word to use here because she is directly telling me to stay away but in my terms it’s betrayal, then I will go in trauma. Two cases might be possible from this point of my life 
        
        1. Either I will be highly engaged in academics again and will be successful as fuck.
        2. Or I might lose my track for a few months 
            
            Let’s discuss more about this second point, I think this is a part of life, Pain which I will feel will be totally obvious because of the way I loved them. Maybe my love is conditional, but the feelings are very pure. And If I got hurt, it will be a deep trauma for me. Only God can save me from this situation. 
            
            So, what will be the solution?
            
            My mind says, do nothing just talk to her, it doesn’t matter how she responds, because it’s you who is in love. But bro, what if you are being a trouble or a reason of irritation for her and you are just doing same things again and again which they don’t like at all! If this is the case, I would never go to them again in my whole life. But for now, it doesn’t feel like an irritative approach from my point of view, but God knows!`,
  },
  {
    id: "2",
    image: require("./../../assets/karan.png"),
    successRate: 0,
    story:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis odit rem asperiores? Maxime aliquam vitae culpa incidunt odit at repellendus exercitationem saepe optio ratione nulla velit qui veritatis numquam minima libero cupiditate quam, itaque aperiam alias illo dolorum. Animi ut tempora possimus suscipit saepe accusantium ea quis cum, fugit quo.",
  },
  {
    id: "3",
    successRate: 2,
    image: require("./../../assets/pitamah.png"),
    story:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis odit rem asperiores? Maxime aliquam vitae culpa incidunt odit at repellendus exercitationem saepe optio ratione nulla velit qui veritatis numquam minima libero cupiditate quam, itaque aperiam alias illo dolorum. Animi ut tempora possimus suscipit saepe accusantium ea quis cum, fugit quo.",
  },
  {
    id: "4",
    successRate: 2,
    image: require("./../../assets/dusashan.png"),
    story:
      `Mai gya tha pratapgarh wha hmko mili ek ladki naam sandhya tiwari
      Usko khet me khub pappi diye 
      Baad me wo shadi kr lo kisi aur se`,
  },
  {
    id: "5",
    successRate: 2,
    image: require("./../../assets/aswathama.png"),
    story:
      `Mai gya tha pratapgarh wha hmko mili ek ladki naam sandhya tiwari
      Usko khet me khub pappi diye 
      Baad me wo shadi kr lo kisi aur se`,
  },
];

const Story = ({ route, navigation }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const { id } = route.params;
  console.log(data[id - 1].image);
  return (
    <View style={styles.container}>
      <View>
        <Image source={data[id - 1].image} style={styles.profilePic}></Image>
      </View>
      <Text style={styles.stats}>
        {/* Succss Rate : {data[id-1].successRate} */}
        युद्ध हारे : 0
      </Text>
      <Pressable onPress={()=>navigation.push('Add Story')}>
        <Text>Add Story</Text>
      </Pressable>
      <ScrollView style={styles.storyBox}>
          
      <Text textWrap={true} numberOfLines={isReadMore ? undefined : 6} style={styles.story}>
        {data[id - 1].story}
      </Text>
      <TouchableOpacity onPress={toggleReadMore} style={styles.rmBtn}>
        <Text style={styles.link}>{isReadMore ? 'Read Less' : 'Read More'}</Text>
      </TouchableOpacity>
      
      </ScrollView>
    </View>
  );
};
styles = StyleSheet.create({
  container: {
    marginTop: screenWidth * 0.08,
    flex: 1,
    // backgroundColor: "skyblue",
    alignItems: "center",
  },
  profilePic: {
    height: 300,
    width: 300,
    borderRadius: 150,
    borderWidth: 10,
    borderColor: "black",
  },
  stats: {
    fontSize: 24,
    fontWeight: "500",
  },
  storyBox:{
    padding: 20,
    backgroundColor: "yellow",
    margin: 20,
    borderRadius: 12,
    borderBlockColor: "black",
    borderWidth: 4,
  },
  rmBtn:{
      borderWidth: 4,

  },
  story:{
      fontSize: 22,

  }
});

export default Story;
