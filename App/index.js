// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const translateApi = async (text) => {
    // Mock translation for demonstration purposes
    return text.split('').reverse().join('');
};

export default function App() {
    const [text, setText] = useState('');
    const [translation, setTranslation] = useState('');

    const handleTranslate = async () => {
        const translatedText = await translateApi(text);
        setTranslation(translatedText);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Translator App</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter text to translate"
                value={text}
                onChangeText={setText}
            />
            <TouchableOpacity style={styles.button} onPress={handleTranslate}>
                <Text style={styles.buttonText}>Translate</Text>
            </TouchableOpacity>
            {translation && (
                <View style={styles.box}>
                    <Text style={styles.translationText}>Translation: {translation}</Text>
                </View>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        padding: 10,
        borderRadius: 10,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        marginBottom: 10,
        width: '100%',
    },
    button: {
        backgroundColor: '#1E90FF',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    box: {
        backgroundColor: '#F0F0F0',
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
    },
    translationText: {
        fontSize: 16,
        color: '#333333',
    },
});