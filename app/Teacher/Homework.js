import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddAccount() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={require("../../assets/home/Student Male-light.png")}
            style={{ width: "14%", padding: 2 }}
          />
          <Text style={styles.text1}>HOMEWORK</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingTop: 80 }}>
        <View style={styles.container2}>
          <Text style={styles.description}>
            The standard Lorem Ipsum passage.{"\n"}
            <Text style={styles.descriptionLight}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </Text>
          </Text>
        </View>

        <Text style={styles.text2}>Subject</Text>

        <View style={styles.formContainer}>
          <Text style={styles.text3}>Add Homework</Text>
          <TextInput
            style={[styles.input, { paddingRight: 40 }]}
            autoCapitalize="none"
          />

          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>
              File is upload successfully
            </Text>
          </TouchableOpacity>
        </View>

        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  container: {
    backgroundColor: "#0C46C4",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },

  logo: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    paddingLeft: 15,
    flexDirection: "row",
    alignSelf: "flex-start",
  },

  text1: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    padding: 15,
    fontFamily: "arial",
    paddingLeft: 20,
    fontWeight: "bold",
  },

  container2: {
    backgroundColor: "white",
    width: "100%",
    padding: 28,
    marginTop: 30,
  },

  description: {
    fontSize: 12,
    color: "black",
    paddingHorizontal: 20,
    paddingTop: 7,
    paddingBottom: 16,
    fontFamily: "Arial",
    lineHeight: 20,
  },

  descriptionLight: {
    opacity: 0.75,
    fontFamily: "Arial",
  },

  text2: {
    backgroundColor: "white",
    width: "100%",
    padding: 30,
    marginLeft: 18,
    fontSize: 22,
    color: "#0C46C4",
    fontWeight: "bold",
  },

  formContainer: {
    paddingHorizontal: 50,
    alignItems: "center",
  },

  text3: {
    fontSize: 15,
    fontFamily: "Arial",
    color: "#0b0b0b",
    alignSelf: "flex-start",
  },

  input: {
    borderWidth: 1,
    paddingLeft: 20,
    fontSize: 14,
    color: "black",
    borderColor: "blue",
    height: 55,
    width: "100%",
  },

  addButton: {
    backgroundColor: "#0C46C4",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 50,
    width: "100%",
  },

  addButtonText: {
    color: "#fff",
    fontSize: 17,
  },

  forgotPassword: {
    color: "#0C46C4",
    textAlign: "center",
    marginTop: 15,
  },
});