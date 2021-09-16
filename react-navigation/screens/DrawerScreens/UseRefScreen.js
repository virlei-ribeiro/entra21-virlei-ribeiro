import React, { useRef } from "react";
import { ScrollView, View, Text, TextInput, StyleSheet } from "react-native";
import { Button } from "../../components/Button";

export function UseRefScreen() {
    const inputEl = useRef(null);

    return (
        <ScrollView>
            <Text>useRef retorna um objeto ref mutável, no qual a propriedade .current é inicializada para o argumento passado (initialValue). </Text>  
            
            <View>
                <TextInput ref={inputEl} style={styles.textInput} />
                <Button onPress={() => inputEl.current.focus()} text="Focar no TextInput" />
            </View>
        </ScrollView>
    );
    
}

const styles = StyleSheet.create({
    textInput: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    }
})