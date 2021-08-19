import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    StyleSheet,
    View,
    FlatList
} from 'react-native';
import UserActions, { UserSelectors } from '../redux/UserRedux';
import NavigationRoutes from '../constants/NavigationRoutes';
import Card from '../components/Card';

const ListingScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const dataObject = useSelector(UserSelectors.user);

    const userData = [];
    for (const key in dataObject) {
        userData.push({
            id: key,
            name: dataObject[key].name.first + ' ' + dataObject[key].name.last,
            gender: dataObject[key].gender,
            email: dataObject[key].email,
            cell: dataObject[key].cell,
            picture: dataObject[key].picture.thumbnail,
            date: dataObject[key].registered.data,
            location: dataObject[key].location.country,
            fullPicture: dataObject[key].picture.large,
        });
    }

    useEffect(() => {
        const params = {
            page: page,
            results: 10,
            seed: 'abc',
        }
        dispatch(
            UserActions.userRequest(params)
        );
    }, [page]);

    const onHandleEnd = () => {
        setPage(page + 1);
    };

    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <FlatList
                    data={userData}
                    keyExtractor={user => user.id}
                    renderItem={({ item }) => {
                        return (
                            <Card
                                name={item?.name}
                                gender={item?.gender}
                                email={item?.email}
                                cell={item?.cell}
                                picture={item?.picture}
                                date={item?.date}
                                location={item?.location}
                                onViewDetail={() => {
                                    navigation.navigate(NavigationRoutes.DetailScreen, {
                                        name: item?.name,
                                        gender: item?.gender,
                                        email: item?.email,
                                        cell: item?.cell,
                                        picture: item?.picture,
                                        date: item?.date,
                                        location: item?.location,
                                        fullPicture: item?.fullPicture,
                                    });
                                }}
                            />
                        );
                    }}
                    onEndReached={onHandleEnd}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        margin: 20,
    }
});

export default ListingScreen;