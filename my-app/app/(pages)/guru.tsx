import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import ScrollGuru from "@/components/home/scroolG";

const GuruPages = () => {
  const [nama, setNama] = useState("");

  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.header}>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.frameHeader}>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          style={styles.frameIcon}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.textData}>Data Guru</Text>
      </View>

      <ScrollGuru />

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.modal}>
        <AntDesign name="plus" size={30} color="black" />
        <Modal
          isVisible={isModalVisible}
          animationIn={"slideInUp"}
          animationOut={"slideOutDown"}>
          <View style={styles.frameModal}>
            <Text style={styles.textDataSiswa}>Tambah Data Siswa</Text>
            <View style={styles.frameInput}>
              <TextInput
                placeholder="Nama Lengkap"
                autoCapitalize="none"
                value={nama}
                onChangeText={setNama}
              />
            </View>
            <View style={styles.frameInput}>
              <TextInput placeholder="Mapel" />
            </View>
            <View style={styles.frameButom}>
              <TouchableOpacity style={styles.buttom}>
                <Text>Simpan</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.buttom}>
                <Text>Batal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </TouchableOpacity>
    </View>
  );
};

export default GuruPages;

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  frameHeader: {
    paddingVertical: 10,
    width: "90%",
    marginHorizontal: "auto",
    marginTop: 10,
    flexDirection: "row",
  },
  frameIcon: {
    padding: 5,
  },
  textData: {
    fontSize: 18,
    textAlignVertical: "center",
    textAlign: "center",
    width: "75%",
  },
  modal: {
    position: "absolute",
    padding: 10,
    borderWidth: 1,
    bottom: 20,
    right: 20,
    borderRadius: 100,
  },
  frameModal: {
    height: "50%",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    gap: 20,
  },
  textDataSiswa: {
    fontSize: 16,
    padding: 10,
    textAlign: "center",
  },
  frameInput: {
    padding: 10,
    width: 300,
    borderWidth: 0.5,
    borderRadius: 10,
    marginHorizontal: "auto",
  },
  frameButom: {
    padding: 10,
    marginTop: 10,
    width: "80%",
    marginHorizontal: "auto",
    flexDirection: "row",
  },
  buttom: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: "auto",
  },
});
