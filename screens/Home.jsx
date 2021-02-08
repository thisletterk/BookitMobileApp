import React, { useState } from 'react'
import { Text, View, Image, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import gps from '../assets/icons/gps.png'
import arrow_down from '../assets/icons/down_arrow.png'
import kiss_image from '../assets/images/logo2.png'
import airport from '../assets/icons/airport.png'
import restaurant from '../assets/icons/restautant.png'
import taxi from '../assets/icons/taxi.png'
import pizza from '../assets/icons/pizza.png'
import food from '../assets/icons/food_icon.png'
import appointment from '../assets/icons/appointment.png'
import sport from '../assets/icons/sports_icon.png'




const Home = () => {

    //dummy data starts here

    // dummy data
    const confirmStatus = "C"
    const pendingStatus = "P"

    let categoriesData = [
        {
            id: 1,
            name: "Airport",
            icon: airport,
            color: "blue",
            description: 'Airport',
            more: 'Overview',

        },
        {
            id: 2,
            name: "Restaurant",
            icon: restaurant,
            color: "orange",
            description: 'Restaurant',
            more: 'Overview',

        },
        {
            id: 3,
            name: "Taxi",
            icon: taxi,
            color: "darkgreen",
            description: 'Taxi',
            more: 'Overview',

        },
        {
            id: 4,
            name: "Pizza",
            icon: pizza,
            color: "red",
            description: 'Pizza',
            more: 'Overview',

        },
        {
            id: 5,
            name: "Food",
            icon: food,
            color: "purple",
            description: 'Food',
            more: 'Overview',

        },
        {
            id: 6,
            name: "Sport",
            icon: sport,
            color: "gray",
            description: 'Sport',
            more: 'Overview',

        }
    ]

    //dummy data ends here


    const [categories, setCategories] = useState(categoriesData);

    function renderHeader() {

        return (
            <View style={{ margin: 20, marginTop: 50 }}>
                <View style={{ flexDirection: 'row', }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffff', width: 110, height: 40, borderRadius: 45, }}>

                        <Image
                            source={gps}
                            style={{
                                width: 20,
                                height: 20,
                                right: 8
                            }}
                        />
                        <Text style={{ right: 5, fontWeight: '500' }}>Toronto</Text>

                        <Image
                            source={arrow_down}
                            style={{
                                width: 10,
                                height: 10,
                                left: 0
                            }}
                        />

                    </View>
                    <View style={{ left: 200, marginLeft: 20 }}>
                        <Image
                            source={kiss_image}
                            style={{
                                width: 45,
                                height: 45,
                                borderRadius: 50
                            }}
                        />
                    </View>
                </View>
                <View style={{
                    alignItems: 'center', justifyContent: 'center',
                    top: 100
                }}>
                    <Text style={{
                        color: '#4256FB',
                        fontSize: 16,
                        fontWeight: '500',
                        marginBottom: 20
                    }}>
                        Welcome back, Kiss2020!
                    </Text>
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 36,
                        letterSpacing: 2,
                    }}>What are you{"\n"}
                         looking for?
                </Text>
                </View>
            </View>
        )
    }

    function renderCategory() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                onPress={() => alert('clicked')}
            >

                <View style={{
                    flexDirection: 'column', alignItems: 'center', marginLeft: 50,
                    marginBottom: 30, top: 10, marginHorizontal: 20, marginVertical: 20,
                }}>
                    <Image
                        source={item.icon}
                        style={{
                            width: 40,
                            height: 40,
                            tintColor: '#4256FB'
                        }}
                    />
                    <Text>{item.description}</Text>
                </View>
            </TouchableOpacity>
        )
        return (
            <View style={{ top: 20 }}>

                <FlatList
                    data={categories}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    numColumns={3}
                />
                <View style={{
                    backgroundColor: '#ECEFFF', margin: 20, height: 85,
                    borderRadius: 7, marginTop: 30
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{
                            backgroundColor: '#4256FB', width: 45,
                            justifyContent: 'center', alignItems: 'center', height: 45,
                            borderRadius: 50, top: 20, left: 25,
                        }}>
                            <Image
                                source={appointment}
                                style={{
                                    width: 30,
                                    height: 30,

                                    tintColor: '#ffff',

                                }}
                            />

                        </View>
                        <View style={{
                            flexDirection: 'column',
                            left: 50,
                            top: 15
                        }}>
                            <Text style={{ fontSize: 18, fontWeight: '500', color: '#4256FB', lineHeight: 30, letterSpacing: 3 }}>Tomorrow at 12:30</Text>
                            <Text style={{ fontWeight: '500', letterSpacing: 1 }}>Hairstyling at Kiss Salon</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }



    return (


        <View style={{ flex: 1 }}>
            <View style={{ flex: 2, width: '100%', height: '30%', }}>
                {renderHeader()}
            </View>
            <View style={{
                flex: 2, backgroundColor: '#ffff', width: '100%', height: '70%',
                borderTopLeftRadius: 30, borderTopRightRadius: 30,
                shadowColor: "#ffff",
                shadowOffset: {
                    width: 2,
                    height: 2,
                },
                shadowOpacity: 0.35,
                shadowRadius: 3.84,
                elevation: 3,
            }}>
                {renderCategory()}
            </View>
        </View>


    )
}
export default Home;