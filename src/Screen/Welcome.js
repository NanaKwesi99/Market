import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";

const Welcome = () => {
    const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.Image}>
        <Image style={{ width: "100%", height: '100%', resizeMode: 'stretch'}} source={require("../../assets/welcome.jpg")} />
      </View>
      <View style={styles.Button}>
            <TouchableOpacity style={styles.button} onPress={ ()=> navigate('Shop') }>
              <Text style={styles.buttonText}>Buy</Text>  
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Image: {
      flex: 7,
  },
  Button: {
      flex: 3, 
     backgroundColor: '#fff',
    
    },
  button: {
      position: 'absolute',
      backgroundColor: 'black',
      justifyContent: 'center',
      alignContent: 'center',
      top: 100,
      bottom: 50, 
      width: '80%',
     height: 50,
    borderRadius: 10,
    marginHorizontal: 50,
  },
  buttonText: {
      textAlign: 'center',
      color: '#fff',
      fontWeight: 'bold',
  }
});
