
import { useContext, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Platform } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { ImageBackground, KeyboardAvoidingView } from "react-native";

import Colors from "../../constants/colors";
import Input from "../../components/common/Input";

const bgImage = require('../../../../assets/backgroundTest.png');

function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const auth = useContext(AuthContext);

  return (
    <ImageBackground
      source={bgImage} 
      style={styles.background}
      resizeMode="cover"
      >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : 'height'}
        style={styles.container}
        >
        <View style={styles.contentContainer}>

          <Text style={styles.title}>Welcome back!</Text>

          <View style={styles.inputContainer}>
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
            
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={styles.button} 
            onPress={() => auth?.login(email, password)}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.replace('Register')}>    
              <Text style={styles.linkText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    background: { flex: 1, width: '100%', height: '100%' },
    container: { flex: 1, justifyContent: 'center' },
    contentContainer: { paddingHorizontal: 30, marginTop: 60 },
    title: { fontSize: 36, fontWeight: 'bold', color: Colors.text, marginBottom: 40 },
    inputContainer: { marginBottom: 20 },
    forgotPassword: { alignSelf: 'flex-end', color: '#333', fontSize: 12, fontWeight: '600', marginTop: 5 },
    button: { backgroundColor: Colors.excitement, paddingVertical: 18, borderRadius: 30, alignItems: 'center', marginTop: 20, marginBottom: 20 },
    buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
    footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 10 },
    footerText: { color: '#555' },
    linkText: { fontWeight: 'bold', color: '#000' },
});

export default LoginScreen;


