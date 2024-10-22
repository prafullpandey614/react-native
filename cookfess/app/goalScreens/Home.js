import { StyleSheet, View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { useState } from 'react';

const Home = () => {
    const [goalList, setGoalList] = useState([]);
    const [currentGoal, setCurrentGoal] = useState("");

    const addGoalHandler = () => {

        setGoalList((prevGoals) => [...prevGoals, currentGoal]);
        setCurrentGoal("");  // Clear the input after adding
    };
    const clearGoal =() => {
        setGoalList([])
    }
    return (
        <View style={styles.container}>
            <View style={styles.upperPart}>
                <Text style={styles.titleText}>
                    Goal Tracker
                </Text>
                <View style={styles.addGoalPart}>
                    <TextInput
                        style={styles.inputText}
                        value={currentGoal}
                        onChangeText={setCurrentGoal}
                    />
                    <Pressable style={styles.addGoalBtn} onPress={addGoalHandler}>
                        <Text style={styles.btnTxt}>Tap Me</Text>
                    </Pressable>
                    <Pressable style={styles.addGoalBtn} onPress={addGoalHandler}>
                        <Text style={styles.btnTxt}>Clear Goal</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.lowerPart}>

            <ScrollView >
                {
                    
                    goalList.map((goal)=>{
                        return (
                            <View key={goal} style={styles.goalItem}>
                                <Text>
                                    {goal}
                                </Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upperPart: {
        flex: 2,
        backgroundColor: "pink",
        textAlign: "center",
    },
    titleText: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
    },
    inputText: {
        height: 80,
        fontSize: 20,
        padding: 5,
        backgroundColor: "white",
        borderRadius: 12,
        borderWidth: 4,
        borderColor: "grey",
    },
    lowerPart: {
        flex: 5,
    },
    addGoalPart: {
        marginTop: 8,
        marginHorizontal: 20,
    },
    addGoalBtn: {
        backgroundColor: "black",
        width: "30%",
        margin: "auto",
        paddingVertical: 9,
        paddingHorizontal: 4,
        marginTop: 10,
        borderRadius: 10,
        marginBottom: 2,
    },
    btnTxt: {
        textAlign: "center",
        color: "white",
    },
    goalItem:{
        backgroundColor: "lightgreen",
        margin: 14,
        padding: 12,
        borderRadius: 8,
        borderWidth: 4,
        borderColor: 'black'
    }
});

export default Home;
