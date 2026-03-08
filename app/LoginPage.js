import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Button, 
  ImageBackground, 
  TouchableOpacity 
} from "react-native";
import { useRouter } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    let role = "guest"; // default role
    if (username === "student" && password === "123") role = "student";
    else if (username === "teacher" && password === "123") role = "teacher";

    switch (role) {
      case "student":
        router.push("/Student/StudentRole");
        break;
      case "teacher":
        router.push("/Teacher/TeacherRole");
        break;
      default:
        router.push("/GuestRole");
    }
  };

  return (
    <ImageBackground
      source={require("../assets/home/DefaultScreen.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.text}>Username</Text>
        <View style={styles.itemContainer}>
          <TextInput
            style={[styles.input, { paddingRight: 40 }]}
            placeholder="SteveJob123"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
          <FontAwesome 
            name="user" 
            size={24} 
            color="#0C46C4" 
            style={styles.inputIcon}
          />
        </View>
        
        <Text style={styles.text}>Password</Text>
        <View style={styles.itemContainer}>
          <TextInput
            style={[styles.input, { paddingRight: 40 }]}
            placeholder="*************"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity 
            onPress={() => setShowPassword(!showPassword)}
            style={styles.inputIcon}
          >
            <AntDesign 
              name={showPassword ? "eye" : "eye-invisible"} 
              size={24} 
              color="#0C46C4" 
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" 
  },
  container: { 
    width: "80%", 
    backgroundColor: "rgba(255,255,255,0.85)", 
    padding: 20, 
    borderRadius: 10,
    marginTop: 100
  },
  text: { 
    fontSize: 15, 
    fontFamily: "Arial", 
    paddingBottom: 10, 
    color: '#333'
  },
  itemContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginBottom: 20,
    position: 'relative',     // important for absolute positioning of icon
  },
  input: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: "#000000",
    padding: 12,
    fontSize: 16,
    color: "#333",
    backgroundColor: "transparent",
  },
  inputIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -12 }], // roughly center vertically
  },
  loginButton: { 
    backgroundColor: "#0C46C4", 
    padding: 12, 
    borderRadius: 8, 
    alignItems: "center", 
    marginTop: 20 
  },
  loginButtonText: { 
    color: "#fff", 
    fontSize: 18, 
    fontWeight: "bold" 
  },
  forgotPassword: { 
    color: "#acaaaa", 
    textAlign: "center", 
    marginTop: 15 
  },
});