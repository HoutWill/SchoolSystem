import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function StudentDashboard() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Student Dashboard</Text>
      <Button title="Logout" onPress={() => router.push("/home")} />
    </View>
  );
}