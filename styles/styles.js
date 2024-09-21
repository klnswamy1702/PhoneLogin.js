import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d9006c', // Dark pink background
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'purple', // Purple button
    padding: 15,
    borderRadius: 5,
    width: '80%',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  otpInput: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: 'white',
    marginHorizontal: 5,
    fontSize: 18,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
  },
});
