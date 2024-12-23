import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import { router } from "expo-router";

const HomePages = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />

      {/* header */}
      <View style={styles.header}>
        <View style={styles.frameNamaSekolah}>
          <Text style={styles.textNamaSekolah}>NAMA SEKOLAH</Text>
        </View>
      </View>

      {/* body */}
      <View style={styles.body}>
        <View style={styles.frameBody}>
          <TouchableOpacity
            onPress={() => {
              router.push("/(pages)/siswa");
            }}
            style={styles.frameData}>
            <Text style={styles.textData}>Data Siswa</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.push("/(pages)/guru");
            }}
            style={styles.frameData}>
            <Text style={styles.textData}>Data Guru</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.frameColum}>
          <TouchableOpacity style={styles.frameColumData}>
            <Text style={styles.textData}>Jadwal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.frameColumData}>
            <Text style={styles.textData}>Mapel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.frameColumData}>
            <Text style={styles.textData}>Absensi</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.frameInfo}>
          <Text style={styles.textData}>Semua Informasi</Text>
        </View>
      </View>

      {/* footer */}
      <View style={styles.footer}>
        <View style={styles.frameSemua}>
          <Text style={styles.textSemua}>Lihat semua</Text>
        </View>
        <TouchableOpacity style={styles.frameBerita}>
          <Text style={styles.textBerita}>Semua Berita Yang Ada</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.frameBerita}>
          <Text style={styles.textBerita}>Semua Berita Yang Ada</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.frameBerita}>
          <Text style={styles.textBerita}>Semua Berita Yang Ada</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.frameBerita}>
          <Text style={styles.textBerita}>Semua Berita Yang Ada</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomePages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 100,
    width: "100%",
    backgroundColor: "#34d5eb",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  frameNamaSekolah: {
    height: 100,
    width: "90%",
    marginHorizontal: "auto",
    marginTop: 10,
    justifyContent: "center",
  },
  textNamaSekolah: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  frameMoto: {
    height: 40,
    width: "90%",
    marginHorizontal: "auto",
    marginTop: 10,
    justifyContent: "center",
  },
  textMoto: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },

  // body
  body: {
    height: 400,
    width: "95%",
    marginTop: 5,
    marginHorizontal: "auto",
  },
  frameBody: {
    height: 100,
    width: "95%",
    marginHorizontal: "auto",
    marginTop: 5,
    borderRadius: 10,
    flexDirection: "row",
  },
  frameData: {
    height: 80,
    width: 150,
    backgroundColor: "white",
    marginVertical: "auto",
    borderRadius: 10,
    justifyContent: "center",
    marginHorizontal: "auto",
  },
  textData: {
    fontSize: 16,
    textAlign: "center",
  },
  frameColum: {
    height: 80,
    width: "100%",
    marginHorizontal: "auto",
    marginTop: 15,
    flexDirection: "row",
  },
  frameColumData: {
    height: 80,
    width: 100,
    backgroundColor: "white",
    marginVertical: "auto",
    borderRadius: 10,
    justifyContent: "center",
    marginHorizontal: "auto",
  },
  frameInfo: {
    height: 150,
    width: "95%",
    backgroundColor: "white",
    marginVertical: "auto",
    borderRadius: 10,
    justifyContent: "center",
    marginHorizontal: "auto",
  },

  // footer
  footer: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    gap: 10,
  },
  frameSemua: {
    height: 50,
    width: 350,
    marginHorizontal: "auto",
    justifyContent: "center",
  },
  textSemua: {
    fontSize: 16,
  },
  frameBerita: {
    height: 200,
    width: 350,
    marginHorizontal: "auto",
    justifyContent: "center",
    borderWidth: 0.5,
    borderRadius: 20,
  },
  textBerita: {
    fontSize: 16,
    textAlign: "center",
  },
});
