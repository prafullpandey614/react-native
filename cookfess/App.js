import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from './app/screens/Home'
import Home from './app/goalScreens/Home';
import Profiles from './app/screens/Profiles';
import Team from "./app/screens/Team"
import Story from './app/screens/Story';
import AddStory from './app/screens/AddStory';
import SplashScreen from './app/ScreensUi/SplashScreen';
import LoginScreen from './app/ScreensUi/auth/LoginScreen'
import SignupScreen from './app/ScreensUi/auth/SignupScreen';
import HomePage from './app/ScreensUi/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
     <Stack.Navigator screenOptions={{
                    headerShown: false,
                    animation: 'slide_from_right', // Default transition for screen changes
                }}>
        <Stack.Screen
          name="Money Mines"
          component={SplashScreen}
        />
        <Stack.Screen name='Profile' component={Profiles} options={{
                        animation: 'fade', 
                    }} />
        <Stack.Screen name='Team' component={Team}/>
        <Stack.Screen name='Authentication' component={LoginScreen}/>
        <Stack.Screen name='Sign Up' component={SignupScreen}  />
        <Stack.Screen name='Home' component={HomePage}  />
        <Stack.Screen name='Story' component={Story} options={{title: 'StoryLine'}} />
        <Stack.Screen name='Add Story' component={AddStory} options={{title: 'Add Storys'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;