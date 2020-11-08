import React, {useEffect, useState} from 'react';
import { SafeAreaView, Text, View, FlatList} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import {floatBanner} from './styles'
import {City, RestaurantDetail, SearchBar} from './components';
import Axios from 'axios';


let originalList = [];

const Main = (props) => {
  const [cityList, setCityList] = useState([])
  const [restaurants, setRestaurants] = useState([]);


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
    setCityList(filteredList);
    
  };

  const onCitySelect =  async (city) =>{
    // const {data} = await Axios.get('https://opentable.herokuapp.com/api/restaurants?city='+ city)
    // console.log(data.restaurants)
    const {data: {restaurants}} = await Axios.get('https://opentable.herokuapp.com/api/restaurants?city='+ city)
    setRestaurants(restaurants);
  }


  return (
    <SafeAreaView style={{flex: 1}}>
       

      <MapView
        style = {{flex:1}}
        initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
        {restaurants.map((r, index) => (
          <Marker
          key={index}
          coordinate={{
            latitude: r.lat,
            longitude: r.lng
          }}
        />
        
        ))}
        


    </MapView>
      <View style={floatBanner.container}>
        <SearchBar onSearch={ onCitySearch  }/>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor = {(_, index) => index.toString()}
          data={cityList}
          renderItem = { ({item})=> <City cityName={item} onSelect ={()=> onCitySelect(item)} />}
      />
      </View>
      

    </SafeAreaView>
  );
};

export default Main;