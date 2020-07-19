import React,{useContext} from 'react';
import {View,Text,StyleSheet,FlatList,Button,TouchableOpacity} from 'react-native';
import {Provider,Context} from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';


const IndexScreen = ({navigation}) => {
    
    const {state,deleteBlogPost} = useContext(Context);
    return <View>
        
        <FlatList data={state} keyExtractor={(blogPost) => blogPost.title} renderItem = {({item}) => {
            return <TouchableOpacity onPress ={() => navigation.navigate("Show",{id: item.id})}> 
                <View style={styles.row}>
                    <Text style={styles.title}>{item.title} - {item.id} </Text>
                    <TouchableOpacity onPress ={() => deleteBlogPost(item.id)}>
                        <Feather name="trash" style={styles.icon} color="black" style={styles.icon}/>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        }}/>
    </View>
}

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Create')} style={{paddingRight:10}}>
            
            <Feather name="plus" size={24} color="black" />
            
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    header:{
        width:120,
        padding:10,
        borderWidth:1,
        borderColor:'red'
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        borderTopWidth: 1,
        borderColor: 'gray',
        paddingHorizontal:20
    },
    title:{
        fontSize:18,

    },
    icon:{
        fontSize:24
    }
})

export default IndexScreen;