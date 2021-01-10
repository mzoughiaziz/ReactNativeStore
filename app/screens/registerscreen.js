import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

export default class registerscreen extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
      phone : '' ,
      name : '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    const { navigation } = this.props; 

    return (
      <View style={styles.container}>
        <Image style={styles.bgImage} source={{ uri: "https://img.icons8.com/ios/452/hanger.png" }}/>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Name"
              underlineColorAndroid='transparent'
              onChangeText={(name) => this.setState({name})}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/carbon-copy/2x/user-male-circle.png'}}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/email.png'}}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Phone"
              keyboardType="phone-pad"
              underlineColorAndroid='transparent'
              onChangeText={(phone) => this.setState({phone})}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/ios/452/phone.png'}}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}/>
        </View>



        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() =>navigation.navigate('Login')}>
          <Text style={styles.loginText}>register</Text>
        </TouchableOpacity>


       
      </View>
    );
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputContainer: {
    borderBottomColor: '#DCDCDC',
    backgroundColor: '#DCDCDC',
    borderRadius:30,
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',

    shadowColor: "#808080",
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginRight:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:300,
    borderRadius:30,
    backgroundColor:'transparent'
  },
  btnForgotPassword: {
    height:15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom:10,
    width:300,
    backgroundColor:'transparent'
  },
  loginButton: {
    backgroundColor: "#00b5ec",

    shadowColor: "#808080",
   
  },
  loginText: {
    color: 'white',
  },
  bgImage:{
    marginBottom : 20 ,
    height: 100,
    width: 100,
    alignSelf:'center'
  },
  btnText:{
    color:"grey",
    fontWeight:'bold'
  }
});