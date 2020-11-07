import {Dimensions, StyleSheet} from 'react-native';

export const searchbarStyle = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    padding:5,
    borderRadius:5,
    width: Dimensions.get('window').width * 0.8,
    top:10,
    left:10,
    flexDirection:'row',
    alignSelf: 'center'

  },
  input: {
    padding:0,
    marginLeft:5
    
  },
  icon:{
    color:'gray'
  }
});

export const cityStyle = StyleSheet.create({
  container: {

  },
  text: {

  },
});

export const detailStyle = StyleSheet.create({
  container: {
    
  },
  name: {

  },
  address: {

  },
  phone: {

  },
});

export const floatBanner = StyleSheet.create({
  container:{
    position: 'absolute',

  }
})