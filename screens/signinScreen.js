import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import firebase from '../firebase/firebase.utils'; 



class signIn extends Component {
    constructor() {
        super();
    
        this.state = {
            email: '', 
            password: '',
            isLoading: false
        }
    }

    updateInputValue = (value, prop) => {
        this.setState({
          [prop]: value
      })
    }

    userSignsIn = () => {
        if(this.state.email === '' && this.state.password === '') {
          Alert.alert('Enter details to signin!')
        } else {
          this.setState({
            isLoading: true,
          })
          firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then((res) => {
            console.log(res)
            console.log('User logged-in successfully!')
            this.setState({
              isLoading: false,
              email: '', 
              password: ''
            })
            this.props.navigation.navigate('Home')
          })
          .catch(error => this.setState({ errorMessage: error.message }))
        }
      }
    
      render() {

        return (
          <View style={styles.container}>  
            <TextInput
              style={styles.inputStyle}
              placeholder="Email"
              value={this.state.email}
              onChangeText={(text) => this.updateInputValue(text, 'email')}
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="Password"
              value={this.state.password}
              onChangeText={(text) => this.updateInputValue(text, 'password')}
              maxLength={15}
              secureTextEntry={true}
            />   
            <Button
              color="#3740FE"
              title="Signin"
              onPress={() => this.userSignsIn()}
            />   
    
            <Text 
              style={styles.loginText}
              onPress={() => this.props.navigation.navigate('Signup')}>
              Don't have account? Click here to signup
            </Text>                          
          </View>
        );
      }
}

export default signIn;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 35,
      backgroundColor: '#fff'
    },
    inputStyle: {
      width: '100%',
      marginBottom: 15,
      paddingBottom: 15,
      alignSelf: "center",
      borderColor: "#ccc",
      borderBottomWidth: 1
    },
    loginText: {
      color: '#3740FE',
      marginTop: 25,
      textAlign: 'center'
    },
  });
