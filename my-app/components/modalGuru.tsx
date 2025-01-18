import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import axios from 'axios';

const ModalGuruPages = ({ isVisible, onClose }) => {
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubmit = () => {
        const guruData = {
            Nama: name,
            Tanggal_Lahir: birthDate,
            Jenis_Kelamin: gender,
            Alamat: address,
            Mata_Pelajaran: subject,
        };

        axios.post('http://192.168.22.88:8000/api/gurus', guruData)
            .then(response => {
                Alert.alert('Success', 'Data Guru Berhasil Ditambahkan !');
                onClose(); 
                setName('');
                setBirthDate('');
                setGender('');
                setAddress('');
                setSubject('');
            })
            .catch(error => {
                Alert.alert('Error', 'Data guru Bermasalah.');
            });
    };

    return (
        <Modal isVisible={isVisible} onBackdropPress={onClose}>
            <View style={styles.modalContent}>
                <TextInput
                    placeholder="Nama"
                    onChangeText={setName}
                    style={styles.input}
                />
                < TextInput
                    placeholder="Tanggal Lahir (YYYY-MM-DD)"
                    onChangeText={setBirthDate}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Kelamin"
                    onChangeText={setGender}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Alamat"
                    onChangeText={setAddress}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Mata Pelajaran"
                    onChangeText={setSubject}
                    style={styles.input}
                />
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

export default ModalGuruPages;