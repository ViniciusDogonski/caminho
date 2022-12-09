import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    ImageBackground,
} from "react-native";

export default function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../assets/backgrond.jpg")} style={styles.image}>

                <Image style={styles.logo} source={require("../../assets/logo.png")} />

                <StatusBar style="auto" />
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email"
                        placeholderTextColor="#fff"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Senha"
                        placeholderTextColor="#fff"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>

                <TouchableOpacity>
                    <Text style={styles.forgot_button}>Esqueceu a senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundImage: require("../../assets/backgrond.jpg"),
        justifyContent: "center",
    },

    logo: {
        marginBottom: 40,
    },

    inputView: {
        backgroundColor: "#202020",
        color:"#ffff",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,

        alignItems: "center",
    },

    TextInput: {
        // height: 50,
        flex: 1,
        // padding: 10,
        // marginLeft: 20,
        color:"#ffff",
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#474747",
        color:"#fff",
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
      },
      loginText:{
        color:'#ffff'
      }
});