import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import imagePath from '@/constans/imagePath'
import { router } from 'expo-router'

export default function SignInPages() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'}/>
      <ImageBackground source={imagePath.bg} style={styles.bg}>

        {/* header */}
        <View style={styles.header}></View>

        {/* body */}
        <View style={styles.body}>
          <View style={styles.content}>
            <View style={styles.frame}>
              <Text style={styles.textSilahkan}>Silahkan Login Ke Akun Anda</Text>
            </View>
            <View style={styles.frameInput}>
              <TextInput style={styles.input}
              placeholder='Email Address'
              />
            </View>
            <View style={styles.frameInput}>
              <TextInput style={styles.input}
              placeholder='Password'
              />
            </View>
            <TouchableOpacity style={styles.framelupa}>
              <Text style={styles.textLupa}>Lupa Password</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                        onPress={() => {
                          router.push('/(tabs)/home')
                        }}
            style={styles.buttom}>
              <Text style={styles.textSigIn}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={() => {
              router.push('/SignUp')
            }}
            style={styles.frameBuat}>
              <Text style={styles.textBuat}>Buat Akun Anda !!!</Text>
            </TouchableOpacity>

          </View>
        </View>

      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  bg:{
    flex:1,
  },
  header:{
    flex:0.4,
  },
  body:{
    flex:0.6,
  },
  content:{
    height:300,
    width:300,
    marginHorizontal:'auto',
    marginTop:10,
  },
  frame:{
    height:60,
    width:300,
    marginTop:10,
    justifyContent:'center'
  },
  frameInput:{
    height:50,
    width:250,
    borderWidth:0.5,
    marginHorizontal:'auto',
    marginTop:10,
    borderRadius:10
  },
  textSilahkan:{
    fontSize:16,
    textAlign:'center'
  },
  input:{
    height:50,
    width:220,
    marginHorizontal:'auto',
  },
  framelupa:{
    height:50,
    width:250,
    marginHorizontal:'auto',
    marginTop:5
  },
  textLupa:{
    fontSize:12,
    textAlign:'right'
  },
  buttom:{
    height:50,
    width:250,
    marginHorizontal:'auto',
    marginTop:5,
    backgroundColor:'#34bdeb',
    justifyContent:'center',
    borderRadius:10
  },
  textSigIn:{
    fontSize:16,
    textAlign:'center'
  },
  frameBuat:{
    height:50,
    width:250,
    marginHorizontal:'auto',
    marginTop:80
  },
  textBuat:{
    fontSize:12,
    textAlign:'center'
  },
})