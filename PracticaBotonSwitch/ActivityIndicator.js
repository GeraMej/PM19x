import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button, ActivityIndicator} from "react-native";

export default function App(){
    const [cargando, setCargando] = useState(false);
    const [datos, setDatos] = useState('');

    const SimularCarga =() =>{
        setCargando(true);
        setDatos('');

        setTimeout(() => {
            setCargando(false);
            setDatos('Datos cargados exitosamente');
        }, 8000);
    }
    return(
        <view style={styles.container}>
            <Text>Activity ActivityIndicator :D</Text>
            <Button title="Cargar Datos" onPress={SimularCarga} color='#007AFF'/>
                    {cargando && (
            <ActivityIndicator size='large' color='#007AFF' style={styles.loader}/>
        )}
    {datos !== '' && <Text>{datos}</Text>}
      <StatusBar style="auto" />  
        </view>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5F5F5',
        alignItems:'center',
        justifyContent:'center',
        padding: 20,
    },
    titulo:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    loader: {
        marginTop: 20,
    }
});
