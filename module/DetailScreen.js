import React from 'react';
import { StyleSheet, Image, ScrollView, Text, View } from 'react-native';

const DetailScreen = ({ route, navigation }) => {
    const {
        name,
        email,
        cell,
        picture,
        date,
        location,
        fullPicture
    } = route.params;

    navigation.setOptions({ title: name })

    return (
        <ScrollView>
            <View>
                <Image style={styles.image} source={{ uri: fullPicture }} />
                <View style={styles.separator}></View>
                <View style={styles.baseView}>
                    <Text style={styles.textTitle}>Name :</Text>
                    <Text style={styles.textlabel}>{name}</Text>
                </View>
                <View style={styles.baseView}>
                    <Text style={styles.textTitle}>Email :</Text>
                    <Text style={styles.textlabel}>{email}</Text>
                </View>
                <View style={styles.baseView}>
                    <Text style={styles.textTitle}>Cell :</Text>
                    <Text style={styles.textlabel}>{cell}</Text>
                </View>
                <View style={styles.baseView}>
                    <Text style={styles.textTitle}>Location :</Text>
                    <Text style={styles.textlabel}>{location}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    separator: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        height: 2,
        backgroundColor: 'black'
    },
    textTitle: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    textlabel: {
        marginTop: 20,
        marginRight: 20,
    },
    baseView: {
        flexDirection: 'row',
    }
});

export default DetailScreen;