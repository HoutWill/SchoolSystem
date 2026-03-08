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
import QuizBox from "../../components/QuizBox"



export default function Result() {
    const question = "What is first king of Nepal?";
    const options = [
    "Prithvi Narayan Shah",
    "Prithvi Narayan Shah",
    "Prithvi Narayan Shah",
    "Prithvi Narayan Shah",
  ];
    const handleSelectOption = (option) => {
    console.log("Selected:", option);
  };


  return (
    <SafeAreaView style={styles.safeArea}>
      <Header
        title="QUIZ"
        image={require('../../assets/home/Person.png')}
      />
   
       <ScrollView contentContainerStyle={{ padding: 16 }}>
        <QuizBox
          question={question}
          options={options}
          onSelectOption={handleSelectOption}
        />
        <QuizBox
          question={question}
          options={options}
          onSelectOption={handleSelectOption}
        />
        <QuizBox
          question={question}
          options={options}
          onSelectOption={handleSelectOption}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff", // fallback color (visible during image load)
  },
 
});