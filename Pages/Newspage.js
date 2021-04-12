import React, { useEffect, useState }  from 'react';
import {View,StyleSheet,Text,Button, FlatList} from 'react-native';
const axios = require('axios').default;

import Card from '../Components/Card';



 const Newsdata=({navigation})=>{
     const [news ,setNews]=useState([]);
     useEffect(()=>{
         newsApiData();
     },[]);
    const newsApiData=()=>{
        axios.create({
            baseURL: 'https://newsapi.org/v2/',
            timeout: 10000,
          }).get('top-headlines?country=us&category=business&apiKey=a3be6d87b42442c0af52dd777030dfaf').then(function(value){
              setNews(value.data.articles);
              console.log(news);
          }).catch(function(error){
              console.log(error);
          });
}

  if(!news){
      return null;
  }
    return (<View>
       <FlatList data={news} keyExtractor={(item,index)=>"key"+index } renderItem={({item})=>{
           return <Card item={item}/>
       }} />
    </View>);
}

export default Newsdata;