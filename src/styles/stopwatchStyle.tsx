import { StyleSheet } from 'react-native';


export const stopwatchStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFFEE',
    alignItems: 'center',
    paddingVertical: 20,

  },
  titleMain: {
    marginTop: "15%",
    fontSize: 32,
    fontFamily: 'PixelifySans-Regular',
    textAlign: "center",
  },
    button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginVertical: 5,
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: 5,
    alignItems: 'center',
  },

  addAndReset:{
    marginTop: "3%",
    
    flexDirection: 'row', 
    gap: '2%',
  
  },
  addButton:{
    backgroundColor: "#01AFDA",
    width: 160,

  },
  resetAllButton:{
    backgroundColor: "#CD9AC0",
    width: 160,
  },
  stopwatch: {
    marginTop: "7%",
    borderWidth: 3,
    backgroundColor: '#DAF0F5',
    padding: 16,
    margin: 10,
    borderRadius: 5,
    width: 300,
    justifyContent:"center",
    // shadowColor: '#000',
    // shadowOffset: { width: 4, height: 4 },
    // shadowOpacity: 1,
    // shadowRadius: 0,
    // elevation: 5,
  },

  timeText:{
    textAlign:"center",
    fontSize: 35,
  },
  display: {
    backgroundColor: '#F7F4D4',
    padding: 10,
    textAlign: 'center',
    marginBottom: 10,
    borderWidth: 3,
    borderRadius:5,
  },
  controllers: {
    gap: "2%",
    flexDirection:'row',
    justifyContent:'center',

  },

  textStyle:{
    fontFamily: 'PixelifySans-Regular', 
    fontSize: 16,
  },
  start:{
    width:82,
    backgroundColor: '#6FDFD1',
  },
  stop:{
    width:82,
    backgroundColor: '#FE9FAB',
  },
  reset:{
    width:82,
    backgroundColor: '#FEE471',
  },
  delete:{
    
    width:150,
    backgroundColor: '#F35569',
  }
  
});
