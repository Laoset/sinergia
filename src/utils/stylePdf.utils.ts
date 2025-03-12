import { StyleSheet } from '@react-pdf/renderer';
export const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  label: {
    width: '50%',
    fontWeight: 'bold',
  },
  value: {
    width: '50%',
    textAlign: 'right',
  },
});
