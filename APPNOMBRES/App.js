import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const WelcomeApp = () => {
  const [name, setName] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');

  useEffect(() => {
    if (name) {
      setWelcomeMessage(`¡Bienvenido, ${name}!`);
    } else {
      setWelcomeMessage('');
    }
  }, [name]);

  const handleInputChange = (text) => {
    setName(text);
  };

  const handleReset = () => {
    setName('');
    setWelcomeMessage('');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        value={name}
        onChangeText={handleInputChange}
        placeholder="Ingrese su nombre"
      />
      <Button
        title="Limpiar"
        onPress={handleReset}
      />
      {welcomeMessage ? <Text style={{ marginTop: 20 }}>{welcomeMessage}</Text> : null}
    </View>
  );
};

export default WelcomeApp;
