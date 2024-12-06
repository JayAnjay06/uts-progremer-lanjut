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
import imagePath from "@/constans/imagePath";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Password:", password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={"dark"} />
      <Image source={imagePath.signUp} style={styles.ImageHeader} />
      <Text style={styles.textHeader}>Sign Up</Text>
      <View style={styles.body}>
        <Text style={styles.textBody}>
          Silahkan Sign Up untuk melanjutkan Sign In
        </Text>
        <View style={styles.columBody}>
          <TextInput
            placeholder="Username"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            style={styles.textInput}
          />
        </View>
        <View style={styles.columBody}>
          <TextInput
            placeholder="No Telepon"
            keyboardType="number-pad"
            value={phone}
            onChangeText={setPhone}
            style={styles.textInput}
          />
        </View>
        <View style={styles.columBody}>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            style={styles.textInput}
          />
        </View>
      </View>
      <TouchableOpacity 
      onPress={() => {
        router.push("/(auth)/signin");
      }}
      style={styles.footer}>
        <Text style={styles.textFooter}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3CB5F2",
  },
  ImageHeader: {
    marginTop: 50,
  },
  textHeader: {
    fontSize: 36,
    marginLeft: 20,
    color: "#FFFFFF",
  },
  body: {
    width: "90%",
    marginHorizontal: "auto",
    marginTop: 5,
  },
  textBody: {
    fontSize: 13,
    color: "#FFFFFF",
  },
  columBody: {
    height: 50,
    width: "80%",
    borderWidth: 1,
    marginHorizontal: "auto",
    marginTop: 15,
    borderRadius: 10,
  },
  textInput: {
    marginVertical: "auto",
    width: "80%",
    marginHorizontal: "auto",
  },
  footer: {
    width: "80%",
    height: 50,
    marginHorizontal: "auto",
    marginTop: 50,
    borderWidth: 1,
    borderRadius: 20,
  },
  textFooter:{
    fontSize:16,
    textAlign:"center",
    marginVertical:"auto",
    color:"#FFFFFF"
  }
});
