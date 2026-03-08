import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import Header from "../../components/header";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderDate from "../../components/date";

const students = Array(10).fill('Prajesh Shakya'); // Placeholder; replace with real data

export default function Attendance() {

const students = [
  'Prajesh Shakya',
  'P. Shakya',
  'Shakya, P.',
  'Prajesh S.',
  'Prajesh Shakya',
  'P. Shakya',
  'Shakya, P.',
  'Prajesh S.',
  'Prajesh Shakya',
  'P. Shakya',
  'Shakya, P.',
  'Prajesh S.',
  'Prajesh Shakya',
  // Add more if needed; the image shows about 13 rows, but some are cut off
];
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header
        title="ATTENDANCE"
        image={require('../../assets/home/Person.png')}
      />

      <HeaderDate/>

      {/* Black Divider */}
      <View style={styles.blackDivider} />

        <ScrollView style={styles.container}>
      <View style={styles.table}>
        {/* Header Row */}
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>Student Name</Text>
          <Text style={styles.headerText1}>Present</Text>
          <Text style={styles.headerText2}>Absent</Text>
        </View>

        {/* Data Rows */}
        {students.map((name, index) => (
          <View
            key={index}
            style={[
              styles.dataRow,
              index % 2 === 0 ? styles.evenRow : styles.oddRow,
            ]}
          >
            <Text style={styles.nameText}>{name}</Text>
            <View style={styles.checkbox} />
            <View style={styles.checkbox1} />
          </View>
        ))}
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#75a5d4', // Dark blue matching the image
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    flex: 3,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 10,
  },
    headerText2: {
    flex: 3,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'right',
    paddingRight:12,
  },
    headerText1: {
    flex: 3,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'right',
    
  },
  dataRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingLeft:10,
    
  },
  evenRow: {
    backgroundColor: '#F0F8FF', // Light blue for alternating rows
  },
  oddRow: {
    backgroundColor: '#fff', // White for alternating rows
  },
  nameText: {
    flex: 3,
    color: '#333',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#007BFF', // Blue border
    backgroundColor: '#fff',
    marginHorizontal: 90,
    borderRadius: 2,
  },
   checkbox1: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#007BFF', // Blue border
    backgroundColor: '#fff',
    marginHorizontal: 30,
    borderRadius: 2,
  },
  blackDivider: {
    height: 2,
    backgroundColor: '#ffffff',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#4778c2', // Matching blue for table header
    marginTop:10,
  },
  tableHeaderText: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'left',
    
  },
    tableHeaderText1: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'right',
    marginRight:34,
  },
  scrollView: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#D3D3D3', // Gray row background
    borderBottomWidth: 1,
    borderBottomColor: '#A9A9A9',
  },
  nameText: {
    flex: 3,
    color: '#333',
  },
  markInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#00CED1', // Teal border for input
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 4,
    textAlign: 'center',
  },
  blackSpace: {
    height: 100, // Approximate black space; adjust as needed
    backgroundColor: '#fffdfd',
  },

});