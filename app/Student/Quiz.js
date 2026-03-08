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
import Title from '../../components/BigTitle'



export default function Result() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header
        title="QUIZ"
        image={require('../../assets/home/Person.png')}
      />
      <Title
      title="What is frist king of Nepal?"
      />

      <Button
      title="daw"
      />
      
       <Button
      title="daw"
      />
         <Button
      title="daw"
      />

            <Button
      title="daw"
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