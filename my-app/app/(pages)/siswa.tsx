import {
  Button,
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
import { Picker } from "@react-native-picker/picker";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import ScrollSiswa from "@/components/home/scroolS";

const SiswaPages = () => {
  const [nama, setNama] = useState("");

  const [selectedValue, setSelectedValue] = useState();

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
        <Text style={styles.textData}>Data Siswa</Text>
      </View>

      <ScrollSiswa />

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
            <Picker
              selectedValue={selectedValue}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}>
              <Picker.Item label="Pria" value="Pria" />
              <Picker.Item label="Wanita" value="Wanita" />
            </Picker>
            <View style={styles.frameInput}>
              <TextInput placeholder="Mapel" />
            </View>
            <View style={styles.frameButom}>
              <TouchableOpacity style={styles.buttomSave}>
                <Text style={{color:'white'}}>Simpan</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.buttomBatal}>
                <Text style={{color:'white'}}>Batal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </TouchableOpacity>
    </View>
  );
};

export default SiswaPages;

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
    paddingVertical:10,
    backgroundColor: "#fff",
    borderRadius: 10,
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
  picker: {
    padding: 10,
    width: 300,
    borderWidth: 0.5,
    borderRadius: 10,
    marginHorizontal: "auto",
  },
  frameButom: {
    paddingVertical:10,
    marginHorizontal: "auto",
    flexDirection: "row",
  },
  buttomSave: {
    backgroundColor:'#7eff29',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:3,
    marginRight:3,
    elevation:2,
    flex:1,
    paddingVertical:10,
    marginLeft:10
  },
  buttomBatal: {
    backgroundColor:'#db240f',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:3,
    marginRight:3,
    elevation:2,
    flex:1,
  },
});
