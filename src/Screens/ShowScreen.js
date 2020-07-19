import React,{useContext} from 'react';
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';


const ShowScreen = ({navigation}) => {
    const {state} = useContext(Context);
    
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam("id"))
    return <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
    </View>
}

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Edit',{id: navigation.getParam("id")})} style={{paddingRight:10}}>
            <FontAwesome name="pencil" size={24} color="black" />
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({

})

export default ShowScreen;