import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Link } from "expo-router";

type Props = {};

const WelcomeScreen = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.columContainer}>
          <Text style={styles.text}>Welcome To</Text>
          <Text style={styles.text1}>MySchool</Text>
        </View>
        <Image
          source={require("../assets/images/welcome.png")}
          style={styles.columImage}
        />
      </View>
      <View style={styles.columText}>
        <Text style={styles.textColum}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's st andard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </Text>
      </View>
      <Link href={"/signin"} asChild>
        <TouchableOpacity style={styles.columNext}>
          <Text style={styles.textNext}>GET STARTED</Text>
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  columContainer: {
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    fontFamily: "open-sans",
    fontWeight: "200",
    marginLeft: 20,
  },
  text1: {
    marginLeft: 50,
    fontSize: 20,
    fontFamily: "open-sans",
    fontWeight: "bold",
  },
  columImage: {
    height: 250,
    width: 250,
    borderWidth: 1,
    marginTop: 20,
    marginHorizontal: "auto",
    borderRadius: 10,
  },
  columText: {
    marginTop: 20,
    marginHorizontal: "auto",
    width: 300,
    height: 200,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textColum: {
    fontSize: 16,
    lineHeight: 25,
  },
  columNext: {
    borderWidth: 1,
    height: 50,
    width: 200,
    borderRadius: 20,
    marginHorizontal: "auto",
  },
  textNext:{
    textAlign:'center',
    marginVertical:'auto'
  }
});
