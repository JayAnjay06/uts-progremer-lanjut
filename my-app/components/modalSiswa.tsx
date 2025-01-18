import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import axios from 'axios';

const ModalSiswaPages = ({ isVisible, onClose }) => {
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [classId, setClassId] = useState('');

    const handleSubmit = () => {
        const studentData = {
            Nama: name,
            Tanggal_Lahir: birthDate,
            Jenis_Kelamin: gender,
            Alamat: address,
            Kelas_ID: classId,
        };

        axios.post('http://192.168.22.88:8000/api/siswas', studentData)
            .then(response => {
                Alert.alert('Success', 'Data Siswa Berhasil Ditambahkan !');
                onClose();
            })
            .catch(error => {
                Alert.alert('Error', 'Data Siswa Bermasalah.');
            });
    };

    return (
        <Modal isVisible={isVisible} onBackdropPress={onClose}>
            <View style={styles.modalContent}>
                <TextInput placeholder="Nama" onChangeText={setName} style={styles.input} />
                <TextInput placeholder="Tanggal lahir" onChangeText={setBirthDate} style={styles.input} />
                <TextInput placeholder="Kelamin" onChangeText={setGender} style={styles.input} />
                <TextInput placeholder="Alamat" onChangeText={setAddress} style={styles.input} />
                <TextInput placeholder="ID Kelas" onChangeText={setClassId} style={styles.input} />
                <Button title="Tambahkan" onPress={handleSubmit} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
    },
});

export default ModalSiswaPages;