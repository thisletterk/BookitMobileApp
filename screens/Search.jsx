import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    Image,
} from 'react-native';
import magnify from '../assets/icons/search.png'
import sport from '../assets/icons/sports_icon.png'
import calendar from '../assets/icons/appointment.png'
import tag from '../assets/icons/tag.png'
import favorite from '../assets/icons/favorite.png'
import image from '../assets/images/logo2.png'


const Search = () => {
    return (
        <SafeAreaView>
            {/* header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, }}>
                <View >
                    <Text style={{ fontSize: 18, fontWeight: '600', left: 170 }}>Discover</Text>
                </View>
                <View>
                    <Image
                        source={magnify}
                        style={{
                            width: 35,
                            height: 35,
                            right: 10,
                            bottom: 5
                        }}
                    />

                </View>
            </View>

            {/* category here */}

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', top: 10, backgroundColor: '#ffff', height: 70, alignItems: 'center', }}>
                <View>
                    <Image
                        source={sport}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: '#4256FB',
                        }}
                    />
                    <Text>Gym</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={calendar}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: '#4256FB',
                        }}
                    />
                    <Text>Any date</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={tag}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: '#4256FB',
                        }}
                    />
                    <Text>Pricing</Text>
                </View>

            </View>

            {/* information box 1 */}
            <View style={{
                width: 400,
                height: 300,
                backgroundColor: "#ffff",
                top: 20,
                borderRadius: 7,
                alignItems: 'center',
                alignSelf: 'center',
                shadowColor: "#ffff",
                shadowOffset: {
                    width: 2,
                    height: 2,
                },
                shadowOpacity: 0.35,
                shadowRadius: 3.84,
                elevation: 3,

            }}>
                <View style={{ flexDirection: 'row', top: 20 }}>

                    <Image
                        source={image}
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: 50,
                            marginTop: 30,
                            left: 20
                        }}
                    />

                    <Image
                        source={favorite}
                        style={{
                            width: 30,
                            height: 30,
                            left: 120,
                            tintColor: 'grey',
                        }}
                    />
                </View>
                <View style={{
                    top: 50,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontWeight: '600',
                        fontSize: 18,
                        color: '#4256FB',
                        marginBottom: 10
                    }}>Kesignton's Gym</Text>
                    <Text style={{
                        fontWeight: '600',

                    }}>Personal Gym, Instructor, Training</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', top: 100 }}>
                    <Image
                        source={tag}
                        style={{
                            width: 25,
                            height: 25,
                            marginLeft: 30,
                            tintColor: 'grey'
                        }}
                    />
                    <Text style={{
                        marginRight: 30,
                        top: 5
                    }}>From $15.00</Text>
                    <Image
                        source={tag}
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: 'grey'
                        }}
                    />
                    <Text style={{
                        marginRight: 30,
                        top: 5
                    }}>45 mins</Text>
                    <Image
                        source={tag}
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: 'grey'
                        }}
                    />
                    <Text style={{
                        marginRight: 30,
                        top: 5
                    }}>4 / 5</Text>
                </View>

            </View>

            {/* information box 2 */}
            <View style={{
                width: 400,
                height: 300,
                backgroundColor: "#ffff",
                top: 30,
                borderRadius: 7,
                alignItems: 'center',
                alignSelf: 'center',
                shadowColor: "#ffff",
                shadowOffset: {
                    width: 2,
                    height: 2,
                },
                shadowOpacity: 0.35,
                shadowRadius: 3.84,
                elevation: 3,

            }}>
                <View style={{ flexDirection: 'row', top: 20 }}>

                    <Image
                        source={image}
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: 50,
                            marginTop: 30,
                            left: 20
                        }}
                    />

                    <Image
                        source={favorite}
                        style={{
                            width: 30,
                            height: 30,
                            left: 120,
                            tintColor: 'grey',
                        }}
                    />
                </View>
                <View style={{
                    top: 50,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontWeight: '600',
                        fontSize: 18,
                        color: '#4256FB',
                        marginBottom: 10
                    }}>Kesignton's Gym</Text>
                    <Text style={{
                        fontWeight: '600',

                    }}>Personal Gym, Instructor, Training</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', top: 100 }}>
                    <Image
                        source={tag}
                        style={{
                            width: 25,
                            height: 25,
                            marginLeft: 30,
                            tintColor: 'grey'
                        }}
                    />
                    <Text style={{
                        marginRight: 30,
                        top: 5
                    }}>From $15.00</Text>
                    <Image
                        source={tag}
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: 'grey'
                        }}
                    />
                    <Text style={{
                        marginRight: 30,
                        top: 5
                    }}>45 mins</Text>
                    <Image
                        source={tag}
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: 'grey'
                        }}
                    />
                    <Text style={{
                        marginRight: 30,
                        top: 5
                    }}>4 / 5</Text>
                </View>

            </View>

        </SafeAreaView>
    )
}

export default Search;