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
    alignSelf: 'center',
    marginBottom:15

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
    backgroundColor: 'white',
    padding:5,
    margin:10,
    borderWidth:1,
    borderColor:'#e0e0e0',
    borderRadius:10,
    flexDirection:'row',
    alignItems: 'center'
  },
  text: {
    marginLeft:5,
    fontWeight:'bold',
    color:'#424242'
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