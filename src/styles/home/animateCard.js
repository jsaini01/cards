import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Wraper: {
    borderRadius: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#c0c0c0',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  mainHeading: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  heading: {
    fontSize: 17,
    fontWeight: '400',
    textTransform: 'uppercase',
    color: 'black',
    textAlign: 'center',
  },
  numberWraper: {
    fontWeight: '500',
    fontSize: 18,
    marginTop: 30,
  },
  number: {
    color: 'black',
  },
  statusVerify: {
    fontWeight: '500',
    fontSize: 18,
    textTransform: 'capitalize',
    lineHeight: 30,
  },
  status: {
    color: 'black',
  },
  modalWraper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 780,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  modalView: {
    borderRadius: 10,
    height: 600,
  },
  modalHeading: {
    color: 'black',
  },
  crossWrap: {
    position: 'absolute',
    bottom: 30,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  cross: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
  },
});

export default styles;
