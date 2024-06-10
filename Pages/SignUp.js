import React from 'react';
import { View } from 'react-native';
import {SafeAreaView } from 'react-native-safe-area-context';
import Headline from '../component/Title';
import InputText from '../component/InputText';
import ButtonComponent from '../component/Button';
import Konfirmasi from '../component/Confirmation';
import IconButton from '../component/IconButton';

const SignUp = () => {
    return (
        <SafeAreaView>
            <View>
              <View style={{
                marginBottom: 50,
              }}>
                <Headline text="Sign up" />
              </View>

            <View style={{}}>
                <InputText placeholder="Name" />
                <InputText placeholder="Email" />
                <InputText placeholder="Password" />
            </View>

            <View style={{
                marginTop: 10,
                marginLeft: 150,
            }}>
                <Konfirmasi text="Already have an account?" fontSize={14} />
            </View>

            <View style={{
                marginTop: 40,
            }}>
            <ButtonComponent backgroundColor="#FF0000" text="SIGN UP" />
            </View>

            <View style={{
                marginTop: 95
            }}>
                <Konfirmasi text="Or sign up with social account" fontSize={14} />
            </View>

            <View style={{
                marginTop: 10,
            }}>
                <View style={{
                    flexDirection: 'row',
                    gap: 20,
                    marginTop: 10,
                    justifyContent: 'center',
                }}>
                    <IconButton imageSource={require('./assets/google.png')} />
                    <IconButton imageSource={require('./assets/facebook.png')} />
                </View>
            </View>
            </View>
        </SafeAreaView>
    )
}

export default SignUp;