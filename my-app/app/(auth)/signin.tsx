import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import imagePath from "@/constans/imagePath";
import { router } from "expo-router";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.columHeader}>
          <Image source={imagePath.logo} style={styles.imageHeader} />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.columBody}>
          <View>
            <Text style={styles.textBody}>Sign In</Text>
          </View>
          <View style={styles.columInput}>
          <View style={styles.input}>
            <TextInput
              placeholder="Email Adress"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              style={styles.textInputEmail}
            />
          </View>
          <View style={styles.input}>
          <TextInput
              style={styles.textInputPw}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>
            <TouchableOpacity>
            <Text style={styles.textLupaPw}>Lupa Password</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity 
          onPress={() => {
            router.push("/(root)/(tabs)/home")
          }}
          style={styles.columSignIn}>
            <Text style={styles.textSignIn}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.5,
  },
  columHeader: {
    height: "100%",
    width: "100%",
  },
  imageHeader: {
    height: 100,
    width: 100,
    marginVertical: "auto",
    marginHorizontal: "auto",
  },
  body: {
    flex: 1.5,
  },
  columBody: {
    height: "100%",
    width: "100%",
    backgroundColor: "gray",
    borderTopEndRadius: 100,
  },
  textBody: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginTop:20
  },
  columInput:{
    marginTop:50
  },
  input: {
    height: 50,
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: "auto",
    marginTop:20
  },
  textInputEmail: {
    marginVertical: "auto",
    marginHorizontal: "auto",
    width: 250,
  },
  textInputPw:{
    marginVertical: "auto",
    marginHorizontal: "auto",
    width: 250,
  },
  textLupaPw:{
    marginTop:15,
    fontSize:10,
    marginLeft:"70%", 
    color:"blue",
  },
  columSignIn:{
    height:50,
    width:100,
    borderWidth:1,
    marginTop:20,
    marginHorizontal:"auto",
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,
  },
  textSignIn:{
    textAlign:"center",
    marginVertical:"auto",
    fontWeight:"500",
    color:"white"
  }
});

// import {
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
//   TextInput,
// } from "react-native";
// import React, { useState } from "react";
// import { Link, router } from "expo-router";

// type Props = {};

// const SignInScreen = (props: Props) => {

//   return (
//     <View style={styles.container}>
//       <View>
//         <View>
//         </View>
//         <View style={styles.columInput}>
//           <View>
//             <Text style={styles.textColum}>Sign In</Text>
//           </View>
//           <View style={styles.inputColum}>
//             <TextInput
//               style={styles.input}
//               placeholder="Email"
//               value={email}
//               onChangeText={setEmail}

//             />

//           </View>
//           <View style={styles.columNext}>
//             <TouchableOpacity
//               onPress={() => {
//                 router.dismissAll();
//                 router.push("/(root)/(tabs)/home");
//               }}>
//               <Text style={styles.textNext}>Sign In</Text>
//             </TouchableOpacity>
//           </View>
//           <TouchableOpacity>
// <Link href={"/signup"} asChild>
// <TouchableOpacity style={styles.columSignUp}>
//   <Text style={styles.textSignUp}>SignUp Disini</Text>
// </TouchableOpacity>
// </Link>
// </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default SignInScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   boxApp: {
//     height: 100,
//     width: 100,
//     marginTop: 50,
//     marginHorizontal: "auto",
//   },
//   columInput: {
//     backgroundColor: "grey",
//     height: "100%",
//     marginTop: 25,
//     borderTopLeftRadius: 50,
//   },
//   textColum: {
//     fontSize: 30,
//     fontWeight: "bold",
//     fontFamily: "Open-sans",
//     textAlign: "center",
//     marginTop: 20,
//   },
//   inputColum: {
//     marginTop: 50,
//     width: 300,
//     marginHorizontal: "auto",
//   },
//   input: {
//     height: 50,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 15,
//     marginTop: 20,
//   },
//   columNext:{
//     height:50,
//     width:200,
//     borderWidth:1,
//     borderRadius:20,
//     marginHorizontal:"auto",
//     marginTop:50
//   },
//   textNext:{
//     fontSize:20,
//     textAlign:'center',
//     marginTop:10
//   },
//   columSignUp:{
//     marginHorizontal: "auto",
//     height:50,
//     width:200,
//     marginTop:70
//   },
//   textSignUp:{
//     textAlign:'center',
//     marginVertical:'auto',
//     color:'blue'
//   }
// });
