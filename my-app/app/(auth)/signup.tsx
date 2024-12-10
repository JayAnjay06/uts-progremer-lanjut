import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={"dark"} />

      {/* header */}
      <View style={styles.header}>
        <View style={styles.frameHeader}>
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}>
            <Feather
              name="arrow-left"
              size={24}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>
          <View style={styles.frameSignUp}>
            <Text style={styles.textSignUp}>Sign Up</Text>
          </View>
        </View>
      </View>

      {/* body */}
      <View style={styles.body}>
        <View style={styles.frameInput}>
          <View style={styles.frameText}>
            <Text>Username</Text>
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder="Username"
              autoCapitalize="none"
              value={username}
              onChangeText={setUsername}
              style={styles.textInput}
            />
          </View>
          <View style={styles.frameText}>
            <Text>Email</Text>
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder="Email"
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
          <View style={styles.frameText}>
            <Text>confirm Password</Text>
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder="Confirm Password"
              value={confirmpassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={true}
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={styles.buttom}>
        <TouchableOpacity 
          onPress={() => {
            router.replace('/(auth)/signin')
          }}
          style={styles.buttomSignUp}>
            <Text style={styles.textButtom}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#04616E",
  },
  header: {
    flex: 0.1,
  },
  frameHeader: {
    height: 50,
    width: "85%",
    marginHorizontal: "auto",
    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 30,
    marginVertical: "auto",
  },
  frameSignUp: {
    height: 50,
    width: 200,
    justifyContent: "center",
    marginHorizontal: "auto",
  },
  textSignUp: {
    fontSize: 20,
    marginLeft: 50,
    color: "white",
    fontWeight: "bold",
  },
  body: {
    flex: 0.9,
    backgroundColor: "#F0F0F0",
    borderTopLeftRadius: 50,
  },
  frameInput: {
    height: 300,
    width: "90%",
    marginHorizontal: "auto",
    marginTop: 30,
  },
  frameText: {
    height: 40,
    width: 300,
    marginHorizontal: "auto",
    justifyContent: "center",
    fontSize: 16,
    fontWeight: "bold",
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
  buttom:{
    height:150,
    width:300,
    marginHorizontal:'auto',
    marginTop:150
  },
  buttomSignUp:{
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
});
