import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import Header from "../../components/header";
import { SafeAreaView } from "react-native-safe-area-context";
import TernimalCard from '../../components/TernimalCard'
import TitleCard from '../../components/TitleCard'

const students = Array(10).fill('Prajesh Shakya'); // Placeholder; replace with real data

export default function Result() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header
        title="RESULTS"
        image={require('../../assets/home/Person.png')}
      />
      <TernimalCard/>
      <TernimalCard/>

    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff", // fallback color (visible during image load)
  },
 
});