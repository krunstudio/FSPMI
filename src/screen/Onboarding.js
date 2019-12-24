import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  View, TouchableOpacity
} from "react-native";
import { Container, Header, Content, Form, Item, Input, Label, Icon, Text, Button, Footer } from 'native-base';
import { Block, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import argonTheme from "../../constants/Theme";
import Images from "../../constants/Images";

class Onboarding extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      inputUsername: '',
      inputPassword: '',
      hideMode : true,
    }
  }


  onTextPassword (textPassword){
    this.setState({inputPassword : textPassword})
  }
  
  
  onClickHide=()=>{
    this.setState({
    hideMode : !this.state.hideMode
    })   
   console.log("Hide is : ", this.state.hideMode);
  }

  render() {
    console.disableYellowBox = ['Warning: Each', 'Warning: Failed'];
    const { navigation } = this.props;
    return (
      <Container  style={{margin:20}}>
        <Content>
        <View>
              <View style={{alignSelf:'center', marginTop:100}}>
              <Image source={{uri:"https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1549418811/hh1il6ubkdxm3sqnblhf.png"}} style={{width:200, height:100}}></Image>
              </View>
              <View>
                <Form style={styles.formLogin}>
                  <Item floatingLabel>
                    <Label>
                      <Text>Username</Text>  
                    </Label>
                    <Input></Input>            
                  </Item>
                  {
                    this.state.inputUsername == '' ?
                      <View>
                        <Text></Text>
                      </View>
                    :
                      <View>
                        <Text style={styles.alertEmailSuccess}>correct Username</Text>
                      </View>
                  }
                  <Item floatingLabel>
                    <Label StackedLabel>
                      <Text>Password</Text>  
                    </Label>
                    <Input secureTextEntry={this.state.hideMode}></Input>
                    { 
                      this.state.hideMode  ?  
                      <Icon name="eye-off" onPress={this.onClickHide}/> 
                      : 
                      <Icon name="eye" onPress={this.onClickHide}/>
                    }          
                  </Item>
                  {
                    this.state.inputPassword == '' ?
                    <View>
                      <Text></Text>
                    </View>
                  :
                  <View>
                    <Text style={styles.alertPasswordSuccess}>Correct Password</Text>
                  </View>
                  }
                </Form>
                <Button onPress={() => this.props.navigation.navigate("Home")} block style={{backgroundColor:'white', borderRadius:5, marginTop:40, borderWidth:1, borderColor:'red'}}>
                    <Text style={{color:'black'}}>Login</Text>
                </Button>
                <View style={{marginTop:10}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")}>
                  <Text style={{fontSize:10, fontWeight:'bold'}}>Anda belum terdaftar di dalam sistem ini?
                    <Text style={{fontSize:10, color:'blue', fontWeight:'bold'}}>  Klik disini untuk mendaftar</Text>
                  </Text>
                </TouchableOpacity>
                </View>
              </View>
              </View>
        </Content>
        <View style={{backgroundColor:'white'}}>
          <Text style={{fontSize:10}}>
                    DPP FSPMI hanya memberikan bantuan hukum dan lainnya kepada anggota yang sudah terdaftar didalam sistem ini. Pastikan diri anda terdaftar
          </Text>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: theme.COLORS.BLACK
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0
  },
  button2: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    marginTop:10
  },
  logo: {
    width: 225,
    height: 200,
    zIndex: 2,
    position: 'relative',
    marginTop: '-0%'
  },
  title: {
    marginTop:'-85%',
  },
  subTitle: {
    marginTop: 20
  }
});

export default Onboarding;
