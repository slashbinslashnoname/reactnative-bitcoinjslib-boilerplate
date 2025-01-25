import './src/utils/crypto-setup';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { BitcoinService } from './src/utils/bitcoin';
import { useState, useEffect } from 'react';

export default function App() {
  const [address, setAddress] = useState<string>('');
  const [error, setError] = useState<string>('');
  const bitcoin = new BitcoinService();

  const generateAddress = () => {
    try {
      const { address: newAddress } = bitcoin.generateKeyPair();
      console.log('New address generated:', newAddress);
      setAddress(newAddress);
      setError('');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      console.error('Error:', errorMessage);
      setError(errorMessage);
    }
  };

  useEffect(() => {
    generateAddress();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label} onPress={() => console.log(new Date())}>Bitcoin Address:</Text>
        <Text style={styles.address}>{address || 'No address generated'}</Text>
        {error && <Text style={styles.error}>Error: {error}</Text>}
        <TouchableOpacity style={styles.button} onPress={generateAddress}>
          <Text style={styles.buttonText}>Generate Address</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  address: {
    fontSize: 14,
    marginBottom: 16,
    textAlign: 'center',
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
