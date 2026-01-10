import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ImageBackground, StyleSheet, KeyboardAvoidingView,
  View, Platform, Text, TouchableOpacity  } from "react-native";

import Input from "../../components/common/Input";
import colors from "../../constants/colors";

const bgImage = require('../../../../assets/backgroundTest.png');

function RegisterScreen({ navigation }: any) {
  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = useContext(AuthContext);

  const handleRegister = () => {
      console.log("Registering:", name, email);
      auth?.login(email, password);
  }

  return (
    <ImageBackground source={bgImage} style={styles.background} resizeMode="cover">
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
        <View style={styles.contentContainer}>
          
          <Text style={styles.title}>Create an{'\n'}Account</Text>

          <View style={styles.inputContainer}>
             <Input 
              placeholder="Name" 
              value={name} 
              onChangeText={setName} 
            />
            <Input 
              placeholder="Last Name" 
              value={lastName} 
              onChangeText={setLastName} 
            />
            <Input 
              placeholder="Email" 
              value={email} 
              onChangeText={setEmail} 
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input 
              placeholder="Password" 
              value={password} 
              onChangeText={setPassword} 
              secureTextEntry 
            />
          </View>

          <TouchableOpacity 
            style={[styles.button, { backgroundColor: colors.calmness }]} 
            onPress={handleRegister}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.replace('Login')}>
              <Text style={styles.linkText}>Log in</Text>
            </TouchableOpacity>
          </View>

        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
    background: { flex: 1, width: '100%', height: '100%' },
    container: { flex: 1, justifyContent: 'center' },
    contentContainer: { paddingHorizontal: 30, marginTop: 60 },
    title: { fontSize: 36, fontWeight: 'bold', color: colors.text, marginBottom: 40 },
    inputContainer: { marginBottom: 20 },
    button: { paddingVertical: 18, borderRadius: 30, alignItems: 'center', marginTop: 20, marginBottom: 20 },
    buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
    footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 10 },
    footerText: { color: '#555' },
    linkText: { fontWeight: 'bold', color: '#000' },
});
