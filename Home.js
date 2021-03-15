import React, {Component, useEffect} from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Text,
    View
} from 'react-native';

interface Prop {
    navigation : any;
}

interface State {

}

export default class Home extends Component<Prop, State> {
    constructor(props) {
        super(props);

        this.state = {

        };

    }

    render() {
        return (
            <View style={styles.container}> 
                <View style={styles.header}>
                    <Image style={styles.image}
                    source={require('../assets/ava.png')}
                    />
                    <Text style={styles.user}> Hi, User !</Text>
                    <View style={styles.populer}>
                        <Text style={styles.headerContent1}> Barang Populer </Text>
                            {/* <ScrollView>
                            vertical={true}
                            ShowVerticalScrollIndicator={false}
                                <View style={{flexDirection:'row'}}>
                                    <TouchableOpacity style={styles.row1}>
                                    
                                    </TouchableOpacity>
                                </View>
                            </ScrollView> */}
                    </View>
                </View>
            </View>
        );
    }
;}

const styles = StyleSheet.create ({
    container: {
        flex:1,
        width: 1000,
        height: 1000,
        justifyContent: 'center',
    },
    header: {
        width : 350,
        height: 80,
        justifyContent: 'center',
        
        position: 'absolute',
        top: 10,
        left: 30,
    },
    user:{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4F4F4F',
        marginLeft: 60,
    },
    headerContent1:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4F4F4F',
        marginLeft: 10,
        marginTop: 5,
    },
    mainContent:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4F4F4F',
        marginLeft: 10,
        marginTop: 5,
    },
    row1:{
        width: 150,
        height: 200,
        backgroundColor: 'blue',
    },
    image: {
        position:'absolute',
        top: 20,
        left: 10,
    },
    populer:{
        width: 350,
        height: 250,
        // backgroundColor:'red',
        position: 'absolute',
        top: 80,
        left: 0,
    }
})