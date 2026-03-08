
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
       <ScrollView
         contentContainerStyle={styles.scrollContent}
         showsVerticalScrollIndicator={false}
       > 
     <Image
             source={require("../../assets/icon/Logo.png")}
             style={styles.background}
             resizeMode="contain"
           />
    <View style={styles.container} >
    <Text style={styles.text}>Username</Text>
    <TextInput
            style={[styles.input, { paddingRight: 40 }]}
            placeholder="Enter Something"
            placeholderTextColor="blue"
            autoCapitalize="none"
          />
           <Text style={styles.text}>Username</Text>
    <TextInput
            style={[styles.input, { paddingRight: 40 }]}
            placeholder="Enter Something"
             placeholderTextColor="blue"
            autoCapitalize="none"
          />
           <Text style={styles.text}>Username</Text>
    <TextInput
            style={[styles.input, { paddingRight: 40 }]}
            placeholder="Enter Something"
             placeholderTextColor="blue"
            autoCapitalize="none"
          />
           <Text style={styles.text}>Username</Text>
    <TextInput
            style={[styles.input, { paddingRight: 40 }]}
            placeholder="Enter Something"
             placeholderTextColor="blue"
            autoCapitalize="none"
          />
           <Text style={styles.text}>Username</Text>
    <TextInput
            style={[styles.input, { paddingRight: 40 }]}
            placeholder="Enter Something"
            placeholderTextColor="blue"
            autoCapitalize="none"
          />
           <Text style={styles.text}>Username</Text>
    <TextInput
            style={[styles.input, { paddingRight: 40 }]}
            placeholder="Enter Something"
            placeholderTextColor="blue"
            autoCapitalize="none"
            
          />
           <TouchableOpacity style={styles.addButton} onPress={AddAccount}>
          <Text style={styles.addButtonText}>Add to contact</Text>
        </TouchableOpacity>
    </View>
       
    </ScrollView>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff", // fallback color (visible during image load)
  },

    background: {
      width: 400,
      height: 150,
      alignSelf: "center",
    },
  container: { 
    flex: 1,
    padding: 20, 
    width : '90%',
    flexWarp : 'warp',
    gap: 9,
    alignSelf:'center',
  },
    text: { 
    fontSize: 15, 
    fontFamily: "Arial",  
    color: '#0b0b0b'
  },
  
    input: {
    borderWidth:1,
    paddingLeft: 20,
    fontSize: 14,
    color: "black",
    borderColor : 'blue',
    height : 55,
  },

   addButton: { 
    backgroundColor: "#0C46C4", 
    padding: 12, 
    borderRadius: 8, 
    alignItems: "center", 
    marginTop: 50, 
  },
  addButtonText: { 
    color: "#fff", 
    fontSize: 17, 
  },
});