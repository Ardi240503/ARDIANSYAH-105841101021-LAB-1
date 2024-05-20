import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    }}>
      <View style={{
        backgroundColor: 'red',
        width: 100,
        height: 50,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
      }}>

        <Text style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold'
        }}>
          Login
        </Text>


      </View>

      
      <View style={{
        backgroundColor: 'blue',
        width: 100,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
      }}>


        <Text style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
          Register
        </Text>

      </View>

    </View>
  );
}