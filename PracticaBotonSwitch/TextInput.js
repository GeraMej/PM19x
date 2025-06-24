import React, {useState} from "react";
import{
    View,
    Text,
    Button,
    Alert,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
} from "react-native";

const App = () => {
    //
    const [nombre, setNombre]= useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [telefono, setTelefono] = useState("");  

    const mostrarAlerta = () => {
        if (!nombre || !email || !password) {
            if (Platform.OS === 'web') {
                window.alert("Por favor, completa todos los campos obligatorios.");
            }else{
                Alert.alert(
                    "Error",
                    "Por favor, complete todos los campos obligatorios",
                    [{ text: "OK" }]
                );
            }
        }else{
            if (Platform.OS === 'web'){
                window.alert(`Registro exitoso \n Nombre: ${nombre} \n Email: ${email}`);
                limpiarFormulario();
            }else{
                Alert.alert(
                    "Registro exitoso",
                    `Nombre: ${nombre} \n Email: ${email} \n Telefono: ${telefono}`,
                    [{ text: "OK", onPress:() => limpiarFormulario()}]
                )
            }
        }
    };

    const limpiarFormulario = () => {
        setNombre("");
        setEmail("");
        setPassword("");
        setTelefono("");
    };

    return(
        <SafeAreaView style ={styles.container}>
            <View style={styles.formulario}>
                <Text style={styles.titulo}>Formulario de Registro</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre Complweto"
                    value={nombre}
                    onChangeText={setNombre} 
                 />

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none" //Bloquea que la primera letra sea mayuscula
                />

                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry // Oculta el texto ingresado
                />

                <TextInput
                    style={styles.input}
                    placeholder="Teléfono"
                    value={telefono}
                    onChangeText={setTelefono}
                    keyboardType="phone-pad" // Teclado numérico para teléfono
                />
                <Button title="Registrar" onPress={mostrarAlerta} color="#841584"/>

            </View>
        </SafeAreaView>
            
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    formulario: {
        backgroundColor: "#f5f5f5",
        padding: 20,
        borderRadius: 10,
    },
    titulo:{
        fontSize:20,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign : "center",
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor:"white",
    },
});

export default App;