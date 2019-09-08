import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    mainBox:{
        flex:1,
        backgroundColor:'black'
    },
    currentCityText:{
        color:'white',
        textAlign:'center',
        fontSize:35
    },
    currentCityLabel:{
        fontSize:20,
        color:'white',
    },
    changeCityLabel:{
        fontSize:20,
        color:'white',
    },
    addCityButton:{
        margin:10,
        borderWidth:1,
        borderColor:'white',
        borderRadius:5
    },
    list:{
        backgroundColor:'black'
    },
    listItemButton:{
        borderTopWidth:0.5,
        borderBottomWidth:0.5,
        borderColor:'white'
    },
    listItemText:{
        textAlign:'center',
        fontSize:25,
        color:'white',
    }
})


export default styles;