import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const CustomButton = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center', // column
      alignItems: 'center', // row
      flexDirection: 'row',
      padding: 20,
      marginBottom: 80
    }}>
      <TouchableOpacity style={{
        backgroundColor: 'red',
        width: 150,
        height: 80,
        borderRadius: 10,
        marginRight: 10,
        justifyContent: 'center', // Ensures text is vertically centered
        alignItems: 'center' // Ensures text is horizontally centered
      }}>
        <Text style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 30,
          fontWeight: 'bold',
        }}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        backgroundColor: 'blue',
        width: 150,
        height: 80,
        borderRadius: 10,
        marginLeft: 10,
        justifyContent: 'center', // Ensures text is vertically centered
        alignItems: 'center' // Ensures text is horizontally centered
      }}>
        <Text style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 30,
          fontWeight: 'bold',
        }}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default CustomButton;
