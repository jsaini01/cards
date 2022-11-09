import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#191970',
    paddingVertical: 18,
    borderBottomWidth: 2,
    borderBottomColor: '#483d8b',
  },
  imageWrap: {
    backgroundColor: 'blue',
    paddingVertical: 4,
    paddingHorizontal: 15,
    borderRadius: 50,
    marginLeft: 15,
    fontSize: 30,
    fontWeight: '700',
    color: 'white',
  },
  textWraper: {
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  text: {
    color: '#a9a9a9',
    fontWeight: '500',
    fontSize: 18,
    flexDirection: 'column',
  },
  textName: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
    flexDirection: 'column',
  },
});

export default styles;
