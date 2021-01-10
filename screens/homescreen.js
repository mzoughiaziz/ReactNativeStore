import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  
  FlatList,
} from 'react-native';

export default class home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, name: "pull",   prix:"50",               image:"https://assets.stickpng.com/images/580b57fbd9996e24bc43bf4f.png"},
        {id:2, name: "Sweetwear",  prix:"50", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxvzkIDNXEyLEt4qy6OZWwKAeqTYGxdB5xA&usqp=CAU"} ,
        {id:3, name: "Pull", prix:"50",     image:"https://assets.stickpng.com/images/580b57fbd9996e24bc43bf53.png"} ,
        {id:4, name: "Veste", prix:"50",   image:"https://www.inuit.fr/img/produits/sweats/INA1400592-inuit_annecy_chavanod_haute_savoie_74_textile_vetement_image_pub_publicitaire_flocage_logo_personnalisable-personnalise_broderie_serigraphie_Sweat-Shirt_homme_marine-blanc.png"} ,
        {id:5, name: "pull",   prix:"50",               image:"https://assets.stickpng.com/images/580b57fbd9996e24bc43bf4f.png"},
        {id:6, name: "Short",   prix:"50",               image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhvmZL2aPajl6z-Lolve6phdR8bMRogEM5wA&usqp=CAU"},
        {id:7, name: "Sweetwear",  prix:"50", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxvzkIDNXEyLEt4qy6OZWwKAeqTYGxdB5xA&usqp=CAU"} ,
        {id:8, name: "Pull", prix:"50",     image:"https://assets.stickpng.com/images/580b57fbd9996e24bc43bf53.png"} ,
        {id:9, name: "Short",   prix:"50",               image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhvmZL2aPajl6z-Lolve6phdR8bMRogEM5wA&usqp=CAU"},
        {id:10, name: "Veste", prix:"50",   image:"https://www.inuit.fr/img/produits/sweats/INA1400592-inuit_annecy_chavanod_haute_savoie_74_textile_vetement_image_pub_publicitaire_flocage_logo_personnalisable-personnalise_broderie_serigraphie_Sweat-Shirt_homme_marine-blanc.png"} ,
       
      ]
    };
  }

  clickEventListener(item) {
    Alert.alert(item.name + " added to cart")
  }

  render() {
    const { navigation } = this.props; 

    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card}onPress={() =>navigation.navigate('productdetails',{name: item.name , price:item.prix , imageuri:item.image})}>
                <View style={styles.cardHeader}>
                </View>
                <Image style={styles.userImage} source={{uri:item.image}}/>
                <View style={styles.cardFooter}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.position}>{item.prix}</Text>
                    <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>
                      <Text style={styles.followButtonText}>Add</Text>  
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
   
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
   alignItems:'center'
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor:"white",
    flexBasis: '46%',
    marginHorizontal: 5,
  },
  cardFooter: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  userImage:{
    height: 120,
    width: 120,
    borderRadius:60,
    alignSelf:'center',
    borderColor:"#DCDCDC",
    borderWidth:3,
  },
  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#008080",
    fontWeight:'bold'
  },
  position:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  followButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
  icon:{
    height: 20,
    width: 20, 
  }
});  