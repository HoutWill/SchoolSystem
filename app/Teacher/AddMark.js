import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import Header from "../../components/header";
import { SafeAreaView } from "react-native-safe-area-context";

const students = Array(10).fill('Prajesh Shakya'); // Placeholder; replace with real data

export default function AddMarks() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header
        title="GRADE"
        image={require('../../assets/home/Person.png')}
      />

      <View style={styles.container}>
        <Text style={styles.text}>Class: 3A</Text>
        <Text style={styles.text}>Date: 12/12/21</Text>
      </View>

      {/* Black Divider */}
      <View style={styles.blackDivider} />

      {/* Table Header */}
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Student Name</Text>
        <Text style={styles.tableHeaderText1}>Marks</Text>
      </View>

      {/* Student List */}
      <ScrollView style={styles.scrollView}>
        {students.map((name, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.nameText}>{name}</Text>
            <TextInput
              style={styles.markInput}
              placeholder=""
            />
          </View>
        ))}
      </ScrollView>

      {/* Bottom Black Space */}
      <View style={styles.blackSpace} />

      {/* Bottom Tabs */}
      <View style={styles.bottomTabs}>
        <Text style={styles.tabText}>Subject</Text>
        <Text style={styles.tabText}>Class</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff", // fallback color (visible during image load)
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4778c2', // Blue color
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
    
  },
  text: {
    color: '#FFFFFF', // White text
    fontSize: 18,
    fontWeight: 'bold',
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
  bottomTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#4778c2', // Matching blue bottom bar
  },
  tabText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});