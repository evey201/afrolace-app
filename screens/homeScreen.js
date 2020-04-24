import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default function Home({ navigation }) {
    const pressHandler = () => {
        navigation.navigate('SignIn');
    }

    const pressHandles = () => {
        navigation.navigate('SignUp');
    }

    return (
      <View>
        <Text>Sign in Here</Text>
        <Button title='Sign IN' onPress={pressHandler} />
        <Text>Dont have an account, create on here</Text>
        <Button title='sign up' onPress= { pressHandles } />
      </View>
    );
}