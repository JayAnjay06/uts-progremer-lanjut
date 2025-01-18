import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router } from 'expo-router';
import ModalSiswaPages from 'components/modalSiswa';
import KelasModalPages from 'components/modalKelas';
import ModalGuruPages from 'components/modalGuru';

const HomePages = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.frameTotal}>
        <View style={styles.frameTotalSemua}>
          <Text style={styles.textTotalSemua}>Jumlah Siswa</Text>
          <Text style={styles.textTotalSemua}>50</Text>
        </View>
        <View style={styles.frameTotalSemua}>
          <Text style={styles.textTotalSemua}>Jumlah Kelas</Text>
          <Text style={styles.textTotalSemua}>10</Text>
        </View>
        <View style={styles.frameTotalSemua}>
          <Text style={styles.textTotalSemua}>Jumlah Guru</Text>
          <Text style={styles.textTotalSemua}>20</Text>
        </View>
      </View>

      {/* React-Native-Modal */}
      <View style={styles.frameTambah}>
      <View style={styles.bouttom}>
          <TouchableOpacity style={styles.bouttom} onPress={toggleModal}>
            <Text style={styles.textTambah}>Tambahkan Siswa</Text>
            <ModalSiswaPages isVisible={isModalVisible} onClose={toggleModal} />
          </TouchableOpacity>
        </View>
      <View style={styles.bouttom}>
          <TouchableOpacity style={styles.bouttom} onPress={toggleModal}>
            <Text style={styles.textTambah}>Tambahkan Kelas</Text>
            <KelasModalPages isVisible={isModalVisible} onClose={toggleModal} />
          </TouchableOpacity>
        </View>
      <View style={styles.bouttom}>
          <TouchableOpacity style={styles.bouttom} onPress={toggleModal}>
            <Text style={styles.textTambah}>Tambahkan Guru</Text>
            <ModalGuruPages isVisible={isModalVisible} onClose={toggleModal} />
          </TouchableOpacity>
        </View>
      </View>

      {/* SideBar Menu */}
      <View style={styles.sidebar}>
        <TouchableOpacity style={styles.tabsBottom}
          onPress={() => {
            router.push("/(pages)/siswa");
          }}
        >
          <Text style={styles.textSidebar}>Siswa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabsBottom}
          onPress={() => {
            router.push("/(pages)/kelas");
          }}
        >
          <Text style={styles.textSidebar}>Kelas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabsBottom}
          onPress={() => {
            router.push("/(pages)/guru");
          }}
        >
          <Text style={styles.textSidebar}>Guru</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabsBottom}
          onPress={() => {
            router.push("/(pages)/mapel");
          }}
        >
          <Text style={styles.textSidebar}>Mapel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabsBottom}
          onPress={() => {
            router.push("/(pages)/nilai");
          }}
        >
          <Text style={styles.textSidebar}>Nilai</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HomePages

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  frameTotal: {
    width: '100%',
    height: 150,
    marginTop: 10,
    flexDirection: 'row',
    gap: 2,
  },
  frameTotalSemua: {
    height: 50,
    width: 110,
    marginVertical: 'auto',
    marginHorizontal: 'auto',
    borderWidth: 0.4,
    borderRadius: 10
  },
  textTotalSemua: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  frameTambah: {
    height: 70,
    width: 320,
    marginHorizontal: 'auto',
    marginTop: 5,
    flexDirection: 'row',
    gap: 10
  },
  bouttom: {
    width: 100,
    height: 50,
    marginVertical: 'auto',
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 0.5,
    borderRadius: 5
  },
  textTambah: {
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center'
  },
  sidebar: {
    width: '100%',
    height: 50,
    marginHorizontal: 'auto',
    marginTop: 380,
    flexDirection: 'row',
    gap: 2
  },
  tabsBottom: {
    height: 40,
    width: 70,
    justifyContent: 'center',
    marginVertical: 'auto'
  },
  textSidebar: {
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: '500'
  }
})