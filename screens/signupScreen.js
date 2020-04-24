import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button} from 'react-native';
import firebase from '../firebase/firebase.utils';

class signUp extends Component {
  constructor() {
    super();

    this.state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        isLoading: false

    }
}


updateInputValue = (value, prop) => {
  this.setState({
    [prop]: value
})
}

signUpUser = () => {
  if(this.state.email === '' && this.state.password === '') {
    Alert.alert('Enter details to signup!')
  } else {
    this.setState({
      isLoading: true,
    })
    firebase
    .auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((res) => {
      res.user.updateProfile({
        displayName: this.state.displayName
      })
      console.log('User registered successfully!')
      this.setState({
        isLoading: false,
        displayName: '',
        email: '', 
        password: ''
      })
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))      
  }
}

    render() {

      return(
        <View style={styles.container}>  
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          value={this.state.displayName}
          onChangeText={(text) => this.updateInputValue(text, 'displayName')}
        />      
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
          title="Signup"
          onPress={() => this.signUpUser()}
        />

        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('SignIn')}>
          Already Registered? Click here to login
        </Text>                          
      </View>
      )
    }

}

export default signUp;

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
  }

})