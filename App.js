import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SignUp from './SignUp';
import Login from './login'; 
import ForgotPassword from './forget-password';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Login /> {/* Menggunakan komponen Login */}
      {/* <SignUP /> */}
      {/* <ForgotPassword /> */}
    </SafeAreaView>
  );
}

export default Login;
