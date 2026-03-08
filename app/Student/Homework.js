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
import Previewbox from  '../../components/PreviewBox'



export default function Attendance() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header
        title="HOMEWORK"
        image={require('../../assets/home/Person.png')}
      />

        <Text style={styles.headerText}>
         link/wdajjd/wdaw 
      </Text>

      <Previewbox/>

     <Button 
      title="Download your homework"
     />
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItem: 'center',
    backgroundColor: "#ffffff", // fallback color (visible during image load)
  },
    headerText: {
    paddingTop:60,
    fontSize: 15,
    fontWeight: '600',
    color: '#0047AB', // Deep blue matching the image
    marginBottom: 20,
    paddingHorizontal: 15,
    textAlign: 'center',

  },
 
});