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
      <Image source={imagePath.signIn} style={styles.ImageHeader} />
      <Text style={styles.textHeader}>Sign In</Text>
      <View>
        <Text style={styles.textBody}>Silahkan Sign In untuk melenjutkan</Text>
        <View style={styles.body}>
          <View style={styles.bodyInput}>
            <TextInput
              placeholder="Username"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              style={styles.textInput}
            />
          </View>
          <View style={styles.bodyInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => {
              router.push("/(tabs)/home");
            }}>
            <View style={styles.columSignIn}>
              <Text style={styles.textColum}>Sign In</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.navigate("/(auth)/signup");
            }}
            style={styles.columFooter}>
            <Text style={styles.textFooter}>Buat Akun</Text>
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
    backgroundColor: "#3CB5F2",
  },
  ImageHeader: {
    width: "100%",
    height: "40%",
    marginTop: 50,
  },
  textHeader: {
    fontSize: 36,
    fontWeight: "500",
    marginLeft: 20,
    color: "#ffffff",
  },
  textBody: {
    fontSize: 16,
    fontWeight: "100",
    marginLeft: 20,
    color: "#ffffff",
  },
  body: {
    height: 200,
  },
  bodyInput: {
    width: "80%",
    marginHorizontal: "auto",
    borderWidth: 0.4,
    borderRadius: 10,
    marginTop: 20,
  },
  textInput: {
    width: "70%",
    marginHorizontal: "auto",
    color: "gray",
  },
  footer: {
    width: "100%",
    height: "100%",
  },
  columSignIn: {
    height: 50,
    width: 300,
    backgroundColor: "#ffffff",
    marginHorizontal: "auto",
    borderRadius: 10,
  },
  textColum: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: "auto",
    color: "#3CB5F2",
  },
  columFooter: {
    marginTop:40
  },
  textFooter: {
    fontSize: 13,
    textAlign: "center",
    color: "#ffffff",
  },
});