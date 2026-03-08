import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import Header from "../../components/header";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from '../../components/button'
import UploadData from  '../../components/uploadData'
import TitleCard from '../../components/TitleCard'

const students = Array(10).fill('Prajesh Shakya'); // Placeholder; replace with real data

export default function Result() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header
        title="NOTICE AND EVENTS"
        image={require('../../assets/home/Person.png')}
      />

      <TitleCard
      title="Question 1"
      message="awhdhja hjdjwaj awd jdjwa dajwa jdawdkakdf kdjaw d kjawd jdkja kjawkjdawkj dkjaw kj jdjwakjdk jkjdjaw dkaw kjawdjk."
      />
     <UploadData/>

     <Button 
      title="Send"
     />
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff", // fallback color (visible during image load)
  },
 
});