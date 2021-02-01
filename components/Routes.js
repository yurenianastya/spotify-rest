import Songs from './Songs';
import Post from './Post';
import Edit from './Edit';
import Login from '../screens/login';
import Signup from '../screens/signup';

import {createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

const NavStack = createStackNavigator({
    Login: {
        screen: Login, 
        navigationOptions: () => ({
            headerTitle: "Login",
            headerShown: false
        })
    },
    Signup: {
        screen: Signup,
        navigationOptions: () => ({
            headerTitle: "Register",
            headerShown: false
        })
    },
    Songs:{
        screen:Songs, 
        navigationOptions: () => ({
            headerShown: false
        })
    },
    Edit:{
        screen:Edit,
        navigationOptions: () => ({
            headerShown: false
        })
    },
    Post:{
        screen:Post,
        navigationOptions: () => ({
            headerShown: false
        })
    },
},{
    headerTitleAlign:"center"
})

const BottomTab = createBottomTabNavigator({
    NavStack:{
        screen:NavStack
    },
    
})

export default Routes = createAppContainer(NavStack)