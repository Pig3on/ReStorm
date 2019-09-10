import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    backgroundColor: 'black',
  },
  currentCityText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 35,
  },
  currentCityLabel: {
    fontSize: 20,
    color: 'white',
  },
  changeCityLabel: {
    fontSize: 20,
    color: 'white',
  },
  addCityButton: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
  },
  list: {
    backgroundColor: 'black',
  },
  listItemButton: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: 'white',
  },
  listItemText: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
  },
  modalBox: {
    flexGrow: 1,
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  inputBox: {
    marginBottom: 20,
    justifyContent: 'center',
  },
  modalButtons: {
    marginBottom: 20,
    alignItems: 'center',
  },
  modalButton: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  modalButtonBlock: {
    borderWidth: 1,
    width: 300,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
  },
});

export default styles;
