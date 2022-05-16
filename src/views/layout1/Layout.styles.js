import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {},
  tittle: {
    padding: 20,
    fontSize: 30,
    textAlign: 'center',
  },
  subtittle: {
    padding: 5,
    fontSize: 24,
    textAlign: 'center',
  },
  topContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
  },
  hContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  containerGrow9: {
    height: 15,
    width: 75,
    backgroundColor: '#09216C',
  },
  imgContent: {
    width: 90,
    height: 60,
    marginTop: 10,
  },
  words: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 12,
  },
  search: {
    backgroundColor: '#D4D8E5',
    marginLeft: 40,
    marginRight: 40,
    height: 35,
    marginBottom: 30,
  }
});

export default styles;
