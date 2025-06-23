import { StyleSheet, TextInput } from 'react-native';

const loginStyles = StyleSheet.create({
  background: {
    backgroundColor: '#121212',
    flex: 1,
  },
  container: {
    flex: 1,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    color: '#fff',
    fontSize: 16,
    marginBottom: 30,
    paddingVertical: 8,
  },
  logo: {
    width: 150,
    height: 110,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    color: '#fff',
    fontSize: 16,
    alignSelf: 'center',
    marginBottom: 20,
  },
  link: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    gap: 10,
    color: 'orange',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 5,
  },
  footerLink: {
    color: '#fff',
    fontSize: 12,
    textDecorationLine: 'underline',
  },

  button: {
    width: '100%',
    backgroundColor: '#222',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  TextInput: {
    width: '90%',
    height: 50, 
    backgroundColor: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    color: '#fff',
    fontSize: 16,
    alignSelf: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  
})
export default loginStyles;