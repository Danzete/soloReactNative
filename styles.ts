import { StyleSheet, View } from 'react-native';




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  banner: {
    height: 300,
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  bannerTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  bannerDesc: {
    fontSize: 16,
    color: '#ccc',
    marginTop: 10,
  },
  bannerButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#e50914',
    borderRadius: 5,
  },
  bannerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  animeItem: {
    width: 150,
    marginRight: 10,
  },
  animeImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  animeTitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#1c1c1c',
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
  },
  footerIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
});

export default styles;