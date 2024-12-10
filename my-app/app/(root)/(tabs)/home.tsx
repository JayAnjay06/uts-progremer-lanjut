import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

const home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />

      {/* header */}
      <View style={styles.header}>
        <View style={styles.frame}>
          <TouchableOpacity>
            <MaterialIcons
              name="filter-list"
              size={30}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.textHeader}>Menu</Text>
          <TouchableOpacity>
            <MaterialIcons
              name="notifications-none"
              size={30}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cari}>
          <AntDesign
            name="search1"
            size={24}
            color="#D9D9D9"
            style={styles.icon}
          />
          <View style={styles.frameCari}>
            <TextInput 
            placeholder="Cari apalah"
            style={styles.textCari} />
          </View>
        </View>
      </View>

      {/* Body */}
      <View style={styles.body}>
        <View style={styles.frameFitur}>
          <Text style={styles.textFitur}>Fitur</Text>
        </View>
        <View style={styles.columFitur}>
          <TouchableOpacity style={styles.fitur}>
            <View style={styles.fiturButtom}>
            </View>
            <Text style={styles.textButtomFitur}>ABSENSI</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.fitur}>
            <View style={styles.fiturButtom}>
            </View>
            <Text style={styles.textButtomFitur}>NILAI</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.fitur}>
            <View style={styles.fiturButtom}>
            </View>
            <Text style={styles.textButtomFitur}>GURU</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.fitur}>
            <View style={styles.fiturButtom}>
            </View>
            <Text style={styles.textButtomFitur}>JADWAL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#04616E",
  },
  header: {
    flex: 0.2,
  },
  frame: {
    height: 50,
    width: "90%",
    marginHorizontal: "auto",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    height: 30,
    width: 30,
    marginVertical: "auto",
    marginHorizontal: 10,
  },
  textHeader: {
    fontSize: 16,
    marginVertical: "auto",
    color:'white'
  },
  cari: {
    height: 40,
    width: 300,
    marginTop: 10,
    marginHorizontal: "auto",
    borderRadius: 10,
    flexDirection: "row",
    borderWidth:0.3
  },
  frameCari: {
    height: 40,
    width: 250,
  },
  textCari: {
    fontSize: 15,
    marginVertical: "auto",
    marginLeft: 10,
  },
  body:{
    flex:0.8,
    backgroundColor:'#F0F0F0',
    borderTopLeftRadius:50
  },
  frameFitur:{
    height:30,
    width:300,
    marginTop:20,
    marginHorizontal:'auto'
  },
  textFitur:{
    fontSize:16
  },
  columFitur:{
    height:200,
    width:350,
    marginHorizontal:'auto',
    flexDirection:'row'
  },
  fitur:{
    height:100,
    width:80,
    borderWidth:0.5,
    marginHorizontal:'auto',
    marginTop:20,
    borderRadius:20
  },
  fiturButtom:{
    height:100,
    width:80,
    borderRadius:20
  },
  textButtomFitur:{
    fontSize:16,
    textAlign:'center',
    marginVertical:'auto',
    fontWeight:'bold',
    marginTop:5
  }
});
