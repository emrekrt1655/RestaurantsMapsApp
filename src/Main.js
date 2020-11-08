import React, {useEffect, useState} from 'react';
import { SafeAreaView, Text, View, FlatList} from 'react-native';
import MapView from 'react-native-maps';
import {floatBanner} from './styles'
import {City, RestaurantDetail, SearchBar} from './components';
import Axios from 'axios';


let originalList = [];

const Main = (props) => {
  const [cityList, setCityList] = useState([])

  const fetchCities = async () => {
    const {data} = await Axios.get("https://opentable.herokuapp.com/api/cities");
    setCityList(data.cities);
    originalList = [ ...data.cities];
  }

  useEffect(()=>{fetchCities()},[])

  const onCitySearch = (text) =>{
    const filteredList = originalList.filter(city => {
      const userText = text.toUpperCase();
      const cityName = city.toUpperCase();

      return(
        cityName.indexOf(userText) > -1
      );
    })
    setCityList(filteredList)
  };


  return (
    <SafeAreaView style={{flex: 1}}>
       

      <MapView
        style = {{flex:1}}
        initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
      <View style={floatBanner.container}>
        <SearchBar onSearch={ onCitySearch  }/>
        <FlatList
          horizontal
          keyExtractor = {(_, index) => index.toString()}
          data={cityList}
          renderItem = { ({item})=> <City cityName={item} />}
      />
      </View>
      

    </SafeAreaView>
  );
};

export default Main;