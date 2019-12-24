import React from "react";
import {
  ImageBackground,route,Image,StyleSheet,StatusBar,Dimensions,View,Text, SafeAreaView, FlatList, TouchableOpacity} from "react-native";
import { Container, Icon, Header, Left, Title, Content } from "native-base";
const { height, width } = Dimensions.get("screen");
const intro = height * 20/100;
const menu = height * 25/100;

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      dataMenu : [
        {
          screen: 'Login',
          title: 'Daftarkan Diri Anda',
          icon: 'https://banner2.cleanpng.com/20180723/pkj/kisspng-computer-icons-blog-download-desktop-wallpaper-icon-public-relations-5b55dc047663e3.6999231015323535404849.jpg'
        },
        {
          screen: 'Register',
          title: 'Upload Bukti Bayar',
          icon: 'https://i.ibb.co/jZ4t5WK/receipt-icon-in-black-style-isolated-on-white-vector-12730068-1.jpg'
        },{
          screen: '3',
          title: 'Koran Perjoeangan',
          icon: 'https://i.ibb.co/7Scy559/download-2-1.png'
        },
        {
          screen: '4',
          title: 'Bantuan Hukum',
          icon: 'https://www.davidcarrierlaw.com/wp-content/uploads/2015/08/David-Carrier-mock-ups_v1_elder-law-icon.png'
        },
        {
          id: '5',
          title: 'Instruksi DPP',
          icon: 'https://www.climbhangar18.com/wp-content/uploads/2016/07/private-instruction-icon.png'
        },
        {
          screen: '6',
          title: 'Instruksi PP',
          icon: 'https://www.climbhangar18.com/wp-content/uploads/2016/07/private-instruction-icon.png'
        },
        {
          screen: '7',
          title: 'Instruksi PUK',
          icon: 'https://www.climbhangar18.com/wp-content/uploads/2016/07/private-instruction-icon.png'
        },
        {
          screen: '8',
          title: 'eVoting',
          icon: 'https://i.ibb.co/xJ8ty8X/Hi-Res-20-e1469562862452.jpg'
        },
      ]
    }
  }

  render() {
    console.disableYellowBox = ['Warning: Each', 'Warning: Failed'];
    const { navigation } = this.props;
    return (
      <Container style={{backgroundColor:'#e8e8e8'}}>
        <Content>
        <Header style={{backgroundColor:'#049372'}}><Left style={{flex:1, margin:5}}><Title style={{color:'black', fontWeight:'bold'}}>Beranda FSPMI</Title></Left></Header>
          <View style={{padding:5}}>
            <View style={{backgroundColor:'red', width:'100%', height:intro}}>
              <View style={{flex:1, backgroundColor:'red'}}>
                <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:4,justifyContent:'center'}}>
                  <Text style={{fontSize:15, marginStart:10}}>
                    Aplikasi ini adalah saluran resmi dan alat komunikasi antar sesama anggota KSPI
                  </Text>
                </View>
                <View style={{flex:2, justifyContent:'center',alignItems:'center', backgroundColor:'white', borderTopLeftRadius:90,borderBottomLeftRadius:110}}>
                  <Image source={{uri:"https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1549418811/hh1il6ubkdxm3sqnblhf.png"}} style={{width:100, height:50}}></Image>
                </View>
                </View>
              </View>
            </View>
          </View>
          <SafeAreaView>
          <FlatList
            data={this.state.dataMenu}
            numColumns={2}
            renderItem={({item}) => 
            <View style={{flex:1,margin:10, borderRadius:10, alignItems:'center',justifyContent:'center', backgroundColor:'white', width:'100%', height:menu}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate(`${item.screen}`)}>
              <Image source={{uri:item.icon}} style={{width:80, height:80, borderRadius:40, alignSelf:'center'}}></Image>
              <Text style={{marginTop:20, textAlign:'center'}}>{item.title}</Text>
            </TouchableOpacity>
          </View>
          
            }
            keyExtractor={item => item.title}
          />
        </SafeAreaView>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  
});

export default Home;
