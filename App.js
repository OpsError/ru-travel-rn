import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Platform, NativeModules, FlatList } from 'react-native';
import Header from './widgets/Header';
import LeadSection from './widgets/LeadSection';
import DescriptionSection from './widgets/DescriptionSection';
import PhotosSection from './widgets/PhotosSection';

const { StatusBarManager } = NativeModules;

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <LeadSection />
      <DescriptionSection />
      <PhotosSection />
      <StatusBar barStyle='light-content' backgroundColor="#fff" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A2C2F',
    flex: 1,
    height: '100%',
    marginTop: StatusBarManager.HEIGHT
  }
});
