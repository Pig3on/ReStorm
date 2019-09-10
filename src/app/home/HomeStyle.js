import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainBox: {
    flexGrow: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  infoBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoItem: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  infoButton: {
    marginBottom: 20,
    alignItems: 'center',
  },
  label: {
    textAlign: 'center',
    fontSize: 15,
    flex: 0.4,
    textAlignVertical: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    textAlignVertical: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  titleItem: {
    marginBottom: 50,
    flexDirection: 'row',
  },
  value: {
    textAlign: 'center',
    fontSize: 20,
    flex: 0.6,
    textAlignVertical: 'center',
  },
  button: {
    borderWidth: 1,
    width: 300,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
  },
  buttonText: {
    fontSize: 50,
  },
});

export default styles;
