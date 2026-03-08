import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function TerminalCard() {
  return (
    <View style={styles.card}>
      <View style={styles.topBar} />

      <Text style={styles.title}>Num1 Terminal</Text>

      <View style={styles.contentBox} />

      <TouchableOpacity style={styles.publishBtn}>
        <Text style={styles.publishText}>Publish</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#E9E9E9",
    borderRadius: 25,
    padding: 25,
    margin: 40,
    overflow: "hidden",
    marginTop: 45,
  },

  topBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 18,
    backgroundColor: "#1F4FBF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1F4FBF",
    marginTop: 20,
    marginBottom: 20,
  },

  contentBox: {
    height: 80,
    backgroundColor: "grey",
    borderRadius: 4,
  },

  publishBtn: {
    marginTop: 20,
    alignSelf: "flex-end",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 8,
  },

  publishText: {
    color: "#1F4FBF",
    fontWeight: "600",
    fontSize: 14,
  },
});