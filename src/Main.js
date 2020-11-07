import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import MapView from 'react-native-maps';
import {floatBanner} from './styles'
import {City, RestaurantDetail, SearchBar} from './components';

const Main = (props) => {
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
    <SearchBar/>
    </View>
      

    </SafeAreaView>
  );
};

export default Main;