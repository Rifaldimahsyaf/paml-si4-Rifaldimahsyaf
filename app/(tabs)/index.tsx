import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rifaldi Mahsyaf Azmi</Text>
      <Text style={styles.title}>sistem informasi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Mengisi seluruh layar
    justifyContent: 'center', // Posisi vertikal di tengah
    alignItems: 'center', // Posisi horizontal di tengah
    backgroundColor: '#f0f8ff', // Warna latar belakang (biru muda)
  },
  title: {
    fontSize: 24, // Ukuran teks
    fontWeight: 'bold', // Teks tebal
    color: '#2c3e50', // Warna teks (biru tua)
  },
});
