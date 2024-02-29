import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Platform, NativeModules } from 'react-native';
import Header from './widgets/Header';
import LeadSection from './widgets/LeadSection';

const { StatusBarManager } = NativeModules;

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <LeadSection />
      <StatusBar barStyle='light-content' backgroundColor="#fff" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A2C2F',
    height: '100%',
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
  }
});
