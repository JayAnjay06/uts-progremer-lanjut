import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";

type Props = {};

const SignInScreen = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Image
            source={require("../assets/images/splash-icon.png")}
            style={styles.boxApp}
          />
        </View>
        <View style={styles.columInput}>
          <View>
            <Text style={styles.textColum}>Sign In</Text>
          </View>
          <View style={styles.inputColum}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.columNext}>
            <TouchableOpacity
              onPress={() => {
                router.dismissAll();
                router.push("/(Tabs)");
              }}>
              <Text style={styles.textNext}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
<Link href={"/signup"} asChild>
<TouchableOpacity style={styles.columSignUp}>
  <Text style={styles.textSignUp}>SignUp Disini</Text>
</TouchableOpacity>
</Link>
</TouchableOpacity> 
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxApp: {
    height: 100,
    width: 100,
    marginTop: 50,
    marginHorizontal: "auto",
  },
  columInput: {
    backgroundColor: "grey",
    height: "100%",
    marginTop: 25,
    borderTopLeftRadius: 50,
  },
  textColum: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Open-sans",
    textAlign: "center",
    marginTop: 20,
  },
  inputColum: {
    marginTop: 50,
    width: 300,
    marginHorizontal: "auto",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    marginTop: 20,
  },
  columNext:{
    height:50,
    width:200,
    borderWidth:1,
    borderRadius:20,
    marginHorizontal:"auto",
    marginTop:50
  },
  textNext:{
    fontSize:20,
    textAlign:'center',
    marginTop:10    
  },
  columSignUp:{
    marginHorizontal: "auto",
    height:50,
    width:200,
    marginTop:70
  },
  textSignUp:{
    textAlign:'center',
    marginVertical:'auto',
    color:'blue'
  }
});


