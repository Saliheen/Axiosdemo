import React from 'react';
import {View,Text,Image, StyleSheet,Dimensions} from 'react-native';

const {width,height}=Dimensions.get('window');
const Card=({item})=>{
    return (<View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.author}>{item.author}</Text>
              <Image style={styles.image} source={{uri:item.urlToImage}}/>
              <Text style={styles.description}>{item.description}</Text>
    </View>);
}

const styles=StyleSheet.create(
   {   title:{
      marginHorizontal:width*0.05,
      marginVertical:width*0.02,
       color:'black',
       fontSize:20,
       fontWeight:'bold'
   },
       description:{
        marginVertical:width*0.05,
        marginHorizontal:width*0.02,
         color:'grey',
         fontSize:18
       },
       image:{
           height:height/4,
           marginLeft:width*0.05,
           marginRight:width*0.05,
           marginVertical:height*0.02
       },
       author:{
           marginVertical:height*0.03,
           marginHorizontal:width*0.01,
           fontSize:15,
           color:'grey'
       }
    ,
    card:{
         backgroundColor:'white',
         margin:10,
         borderRadius:width*0.05,
         shadowColor:'red',
         shadowOffset:{width:10,height:10},
         shadowOpacity:0.8,
         shadowRadius:1
    }
    }
)

export default Card;