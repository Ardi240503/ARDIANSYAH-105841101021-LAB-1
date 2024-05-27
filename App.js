import React from 'react';
import { View, Text } from 'react-native';

const CustomButton = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'flex-end', 
      flexDirection: 'row',
      padding: 20,
      marginBottom: 40,
    }}>
      <ButtonComponent backgroundColor='red' text='Login' />
      <ButtonComponent backgroundColor='blue' text='Register'/>
    </View>
  )
}
const ButtonComponent = ({backgroundColor,text})=>{
  return (
      <View style={{
          backgroundColor: backgroundColor,width: 150, height:70,
          borderRadius:10,
          marginLeft: 10
      }}>
          <Text style={{
              color: 'white',
              textAlign: 'center',
              lineHeight:70,
              fontSize:25,
              fontWeight:'bold',

          }}>
              {text}
          </Text>
      </View>        
  )
}
export default CustomButton;
