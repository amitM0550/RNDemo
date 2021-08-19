import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from 'react-native';

const Card = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.container}>
            <View style={styles.touchable}>
                <TouchableCmp onPress={props.onViewDetail} useForeground>
                    <View style={styles.baseView}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: props.picture }} />
                        </View>
                        <View>
                            <Text style={styles.textLabel}>{props.name}</Text>
                            <Text style={styles.textLabel}>{props.cell}</Text>
                            <Text style={styles.textLabel}>{props.email}</Text>
                            <Text style={styles.textLabel}>{props.location}</Text>
                        </View>
                    </View>
                </TouchableCmp>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 100,
        margin: 10,
    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden',
    },
    baseView: {
        flexDirection: 'row',
    },
    imageContainer: {
        width: '30%',
        height: '100%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    textLabel: {
        marginTop: 5,
        marginLeft: 5,
    }
});

export default Card;