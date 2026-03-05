import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, ImageBackground, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    let role = "guest"; // default role
    if (username === "student" && password === "123") role = "student";
    else if (username === "teacher" && password === "123") role = "teacher";

    switch (role) {
      case "student":
        router.push("/StudentRole");
        break;
      case "teacher":
        router.push("/TeacherRole");
        break;
      default:
        router.push("/GuestRole");
    }
  };

  return (
    <ImageBackground
      source={require("../assets/home/home-screen-bg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: "center", alignItems: "center" },
  container: { width: "80%", backgroundColor: "rgba(255,255,255,0.85)", padding: 20, borderRadius: 10 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: { width: "100%", borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 15, borderRadius: 5 },
  loginButton: { backgroundColor: "#3b5998", padding: 12, borderRadius: 8, alignItems: "center", marginTop: 10 },
  loginButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  backText: { color: "#555", textAlign: "center", marginTop: 15 },
});