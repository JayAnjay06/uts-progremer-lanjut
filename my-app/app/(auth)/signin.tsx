import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import imagePath from "@/constans/imagePath";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={"dark"} />

      {/* header */}
      <View style={styles.header}>
        <View style={styles.headerImage}>
          <Image source={imagePath.icon} style={styles.imageHeader} />
        </View>
      </View>

      {/* body */}
      <View style={styles.body}>
        <View style={styles.frameSignIn}>
          <Text style={styles.textSignIn}>Sign In</Text>
        </View>
        <View style={styles.frameInput}>
          <View style={styles.frameText}>
            <Text>Email</Text>
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder="Username"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              style={styles.textInput}
            />
          </View>
          <View style={styles.frameText}>
            <Text>Password</Text>
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              style={styles.textInput}
            />
          </View>
          <TouchableOpacity style={styles.frameLupa}>
            <Text style={styles.textLupa}>Lupa Password</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttom}>
          <TouchableOpacity 
          onPress={() => {
            router.replace('/(root)/(tabs)/home')
          }}
          style={styles.buttomSignIn}>
            <Text style={styles.textButtom}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => {
            router.push('/(auth)/signup')
          }}
          >
            <Text style={styles.text}>Buat akun Anda</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#04616E",
  },
  header: {
    flex: 0.3,
  },
  headerImage: {
    height: 100,
    width: 100,
    marginHorizontal: "auto",
    marginVertical: "auto",
  },
  imageHeader: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  body: {
    flex: 0.7,
    backgroundColor: "#F0F0F0",
    borderTopRightRadius: 50,
  },
  frameSignIn: {
    width: 250,
    height: 50,
    marginTop: 30,
    marginHorizontal: "auto",
  },
  textSignIn: {
    fontSize: 24,
    color: "#828282",
    textAlign: "center",
  },
  frameText: {
    height: 40,
    width: 300,
    justifyContent: "center",
    marginHorizontal: "auto",
    fontSize: 16,
    fontWeight: "bold",
  },
  frameInput: {
    height: 250,
    width: 300,
    marginHorizontal: "auto",
    marginTop: 50,
  },
  input: {
    height: 40,
    width: 300,
    marginHorizontal: "auto",
    backgroundColor: "#FFFFF",
    borderWidth: 0.3,
    borderRadius: 10,
  },
  textInput: {
    height: 40,
    width: "90%",
    marginHorizontal: "auto",
  },
  frameLupa:{
    height:30,
    width:300,
    marginTop:5
  },
  textLupa:{
    fontSize:12,
    textAlign:'right',
    justifyContent:'center'
  },
  buttom:{
    height:50,
    width:300,
    marginHorizontal:'auto'
  },
  buttomSignIn:{
    height:50,
    width:300,
    backgroundColor:'#04616E',
    borderRadius:50,
    justifyContent:'center'
  },
  textButtom:{
    fontSize:16,
    textAlign:'center',
    color:'white'
  },
  text:{
    fontSize:12,
    textAlign:'center',
    marginTop:20,
    color:'blue'  
  }
});