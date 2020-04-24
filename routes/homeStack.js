import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/homeScreen';
import signIn from '../screens/signinScreen';
import signUp from "../screens/signupScreen";

const screens = {
    Home: {
        screen: Home
    },
    SignIn: {
        screen: signIn
    },
    SignUp: {
        screen: signUp
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);