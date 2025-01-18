import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import axios from 'axios';

const KelasModalPages = ({ isVisible, onClose }) => {
    const [className, setClassName] = useState('');
    const [waliKelasId, setWaliKelasId] = useState('');

    const handleSubmit = () => {
        const classData = {
            Nama_Kelas: className,
            Wali_Kelas_ID: waliKelasId,
        };

        axios.post('http://192.168.22.88:8000/api/kelas', classData)
            .then(response => {
                Alert.alert('Success', 'Data Kelas Berhasil Ditambahkan!');
                onClose();
                setClassName('');
                setWaliKelasId('');
            })
            .catch(error => {
                Alert.alert('Error', 'Data Kelas Bermasalah.');
            });
    };

    return (
        <Modal isVisible={isVisible} onBackdropPress={onClose}>
            <View style={styles.modalContent}>
                <TextInput
                    placeholder="Nama Kelas"
                    onChangeText={setClassName}
                    style={styles.input}
                />
                <TextInput
                    placeholder="ID Wali Kelas"
                    onChangeText={setWaliKelasId}
                    style={styles.input}
                    keyboardType="numeric"
                />
                <Button title="Tambahkan" onPress={handleSubmit} />
            </ View>
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

export default KelasModalPages;