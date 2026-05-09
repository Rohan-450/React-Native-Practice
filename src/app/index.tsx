import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';

const GREEN = '#85cc17';
const LIGHT_BG = '#f6f6f6';
const WHITE = '#FFFFFF';
const DARK_TEXT = '#1A1A1A';
const GRAY_TEXT = '#888888';
const BORDER_GRAY = '#E0E0E0';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(true);

  const handleSignIn = () => {
    console.log('Sign In pressed', { email, password });
    setEmail('');
    setPassword('');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: LIGHT_BG }}>
      <StatusBar barStyle="dark-content" backgroundColor="#EFEFEF" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: 'center',
            paddingHorizontal: 28,
            paddingTop: 48,
            paddingBottom: 40,
            backgroundColor: LIGHT_BG
          }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >

          <View >
            <Image source={require('../../assets/logo2.png')} style={{ width: 150, height: 130 }} />
          </View>

          <Text style={{
            fontSize: 28,
            fontWeight: '700',
            color: DARK_TEXT,
            marginBottom: 8,
            letterSpacing: 0.2
          }}>Sign In</Text>
          <Text style={{
            fontSize: 14,
            color: GRAY_TEXT,
            marginBottom: 36,
            textAlign: 'center'
          }}>Let's experience the joy of telecare AI.</Text>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Email Address</Text>
            <View style={[styles.inputWrapper, emailFocused && styles.inputFocused]}>
              <View>
                <Ionicons name="mail" size={20} color="black" marginRight={10} />
              </View>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Enter your email"
                placeholderTextColor="#B0B0B0"
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
              />
            </View>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Password</Text>
            <View style={[styles.inputWrapper, !emailFocused && styles.inputFocused]}>
              <View>
                <Ionicons name="lock-closed" size={20} color="black" marginRight={10} />
              </View>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                placeholder="Enter your password..."
                placeholderTextColor="#B0B0B0"
                onFocus={() => setEmailFocused(false)}
                onBlur={() => setEmailFocused(true)}
              />
              <Pressable
                onPress={() => setShowPassword(!showPassword)}
              >
                <Text >{showPassword ? <Ionicons name="eye" size={20} color="grey" /> : <Ionicons name="eye-off" size={20} color="grey" />}</Text>
              </Pressable>
            </View>
          </View>

          <Pressable
            style={styles.signInButton}
            onPress={handleSignIn}
          >
            <Text style={{
              color: WHITE,
              fontSize: 16,
              fontWeight: '700',
            }}>Sign In <Ionicons name="arrow-forward" size={20} color="white" /></Text>
          </Pressable>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 16,
            marginBottom: 28
          }}>
            <Pressable style={styles.socialButton}
              onPress={() => alert("Facebook Sign In Pressed")}>
              <Ionicons name="logo-facebook" size={30} color="black" />
            </Pressable>
            <Pressable style={styles.socialButton}
              onPress={() => alert("Google Sign In Pressed")}>
              <Ionicons name="logo-google" size={25} color="black" />
            </Pressable>
            <Pressable style={styles.socialButton}
              onPress={() => alert("Instagram Sign In Pressed")}>
              <Ionicons name="logo-instagram" size={25} color="black" />
            </Pressable>
          </View>

          <View style={{
            flexDirection: 'row',
            marginBottom: 10
          }}>
            <Text style={{
              fontSize: 14,
              fontWeight: '400',
            }}>Don't have an account? </Text>
            <Pressable onPress={() => alert("Sign Up Pressed")}>
              <Text style={{
                fontSize: 14,
                color: GREEN,
                fontWeight: '600'
              }}>Sign Up.</Text>
            </Pressable>
          </View>

          <Pressable
            style={{ marginTop: 2 }}
            onPress={() => alert("Forgot Password Pressed")}
          >
            <Text style={{
              fontSize: 14,
              color: GREEN,
              fontWeight: '500',
              textDecorationLine: 'underline',
            }}>Forgot your password?</Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  // Fields
  fieldContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: DARK_TEXT,
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: BORDER_GRAY,
    paddingHorizontal: 14,
    height: 54,
  },
  inputFocused: {
    borderColor: GREEN,
    shadowColor: GREEN,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: DARK_TEXT,
    paddingVertical: 0,
  },


  // Sign In Button
  signInButton: {
    width: '100%',
    height: 54,
    backgroundColor: GREEN,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 32,
    shadowColor: GREEN,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
  },

  socialButton: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: WHITE,
    borderWidth: 1.5,
    borderColor: BORDER_GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
});

