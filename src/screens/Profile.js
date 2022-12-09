import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

export default class Profile extends Component {

    render() {
        return (
            <View>
                <ImageBackground source={require("../../assets/backgrond_profile.jpg")} >
                <View style={styles.header}></View>
                    <Image style={styles.avatar} source={require("../../assets/user.jpg")} />
                    <View style={styles.body}>
                        <View style={styles.bodyContent}>
                            <Text style={styles.name}>Nome</Text>
                            <Text style={styles.info}>Classe primaria / Classe secundaria</Text>
                            <Text style={styles.description}>Breve resumo</Text>

                            <TouchableOpacity style={styles.buttonContainer}>
                                <Text style={styles.text}>SAIR</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonContainer}>
                                <Text style={styles.text}>VOLTAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: "#ffff"
    },
    header: {
        backgroundColor: "#202020",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        // flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#202020",
        color: "#fff"
    },
});