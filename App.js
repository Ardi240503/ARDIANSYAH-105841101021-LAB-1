import * as React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeAktif from './assets/icon/home-activated.jpeg';
import HomeNonAktif from './assets/icon/home-inactive.jpeg';
import ShopAktif from './assets/icon/shop-activated.jpeg';
import ShopNonAktif from './assets/icon/shop-inactive.jpeg';
import BagAktif from './assets/icon/bag-activated.jpeg';
import BagNonAktif from './assets/icon/bag-inactive.jpeg';
import FavoritesAktif from './assets/icon/favorites-activated.jpeg';
import FavoritesNonAktif from './assets/icon/favorites-inactive.jpeg';
import ProfilAktif from './assets/icon/profil-activated.jpeg';
import ProfilNonAktif from './assets/icon/profil-inactive.jpeg';

import Login from './Pages/Login'; 
import SignUp from './Pages/SignUp';
import ForgotPassword from './Pages/ForgetPassword';
import VisualSearch from './Pages/VisualSearch';
import Shop from './Pages/Shop';
import Bag from './Pages/Bag';
import Favorites from './Pages/Favorites';
import Profile from './Pages/Profile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Masih Tahap Pengembangan</Text>
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? HomeAktif : HomeNonAktif;
              break;
            case 'Shop':
              iconName = focused ? ShopAktif : ShopNonAktif;
              break;
            case 'Bag':
              iconName = focused ? BagAktif : BagNonAktif;
              break;
            case 'Favorites':
              iconName = focused ? FavoritesAktif : FavoritesNonAktif;
              break;
            case 'Profile':
              iconName = focused ? ProfilAktif : ProfilNonAktif;
              break;
          }

          return <Image source={iconName} style={styles.icon} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Bag" component={Bag} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyTabs">
        <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="VisualSearch" component={VisualSearch} />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="Bag" component={Bag} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default App;