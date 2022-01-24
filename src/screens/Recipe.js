import React, {useRef, useState, useEffect} from 'react';
import {
    View, 
    Text,
    Image,
    TouchableOpacity,
    Animated,
    Platform,
    StatusBar
} from 'react-native';
import { SIZES, FONTS, COLORS, icons } from '../../constants';
import Viewers from '../components/Viewers';

const HEADER_HEIGHT = 350; 

const Recipe = ({navigation, route}) => {
    StatusBar.setBackgroundColor('transparent');
    const [selectedRecipe, setSelectedRecipe] = React.useState(null);

    const scrollY = useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        let {recipe} = route.params;
        setSelectedRecipe(recipe);
        console.log(recipe);
    }, []);

    const renderHeaderBar = () => {
        return(
            <View
                style={{
                    position: 'absolute',
                    top: 50,
                    left:0, 
                    right: 0,
                    height:90,
                    flexDirection:'row',
                    justifyContent : 'space-between',
                    paddingHorizontal:SIZES.padding,
                    paddingBottom: 10
                }}
            >

                <Animated.View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor:COLORS.black,
                        opacity: scrollY.interpolate({
                            inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
                            outputRange : [0, 1]
                        })
                    }}
                />

                <Animated.View
                    style={{
                        position : 'absolute',
                        top:0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        alignItems : 'center',
                        justifyContent:'flex-end', 
                        paddingBottom:10,
                        opacity:scrollY.interpolate({
                            inputRange:[HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                            outputRange : [0, 1]
                        }),
                        transform : [
                            {
                                translateY : scrollY.interpolate({
                                    inputRange:[HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                                    outputRange : [50, 0],
                                    extrapolate: 'clamp'
                                })
                            }
                        ]
                    }}
                >
                    <Text style={{color: COLORS.lightGray2, ...FONTS.body4}}>Recipe By: </Text>
                    <Text style={{color: COLORS.white2, ...FONTS.h3, fontWeight : 'bold'}}>{selectedRecipe?.author?.name}</Text>
                </Animated.View>

                <TouchableOpacity
                    style={{
                        alignItems : 'center',
                        justifyContent : 'center',
                        height:35,
                        width:35,
                        borderRadius:18, 
                        borderColor:COLORS.lightGray,
                        backgroundColor:COLORS.transparentBlack5
                    }}
                    onPress={()=>navigation.goBack()}
                >
                    <Image 
                        source={icons.back}
                        style={{
                            width:15,
                            height:15,
                            tintColor : COLORS.lightGray
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        alignItems : 'center',
                        justifyContent : 'center',
                        height:35,
                        width:35,
                    }}
                >
                    <Image 
                        source={selectedRecipe?.isBookmark ? icons.bookmarkFilled : icons.bookmark}
                        style={{
                            width:30,
                            height:30,
                            tintColor : COLORS.darkGreen
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    const renderRecipeCardHeader = () => {
        return (
            <View
                style={{
                    alignItems : 'center',
                }}
            >
                <Animated.Image
                    source={selectedRecipe?.image}
                    resizeMode='contain'
                    style={{
                        height: HEADER_HEIGHT,
                        width : '200%', 
                        transform : [
                            {
                                translateY : scrollY.interpolate({
                                    inputRange : [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                                    outputRange: [-HEADER_HEIGHT/2, 0, HEADER_HEIGHT*0.75]
                                })
                            },
                            {
                                scale : scrollY.interpolate({
                                    inputRange : [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                                    outputRange : [2, 1, 0.75]
                                })
                            }
                        ]
                    }}
                />

                <Animated.View
                    style={{
                        position : 'absolute',
                        bottom : 10,
                        left : 30,
                        right : 30,
                        height:80,
                        transform : [
                            {
                                translateY : scrollY.interpolate({
                                    inputRange : [0, 170, 250],
                                    outputRange : [0, 0, 100],
                                    extrapolate: 'clamp'
                                })
                            }
                        ]
                    }}
                >
                    <RecipeCreatorCardInfo selectedRecipe={selectedRecipe}/>
                </Animated.View>
    
            </View>
        )
    }

    const renderRecipeInfo = () => {
        return (
            <View
                style={{
                    flexDirection:'row',
                    height:130,
                    width:SIZES.width,
                    paddingHorizontal:30,
                    paddingVertical:20,
                    alignItems: 'center'
                }}
            >
                <View
                    style={{
                        flex:1.5,
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{...FONTS.h2, fontWeight : 'bold'}}>
                        {selectedRecipe?.name}
                    </Text>
                    <Text style={{marginTop:5, color:COLORS.lightGray2,...FONTS.body4}}>
                        {selectedRecipe?.duration} | {selectedRecipe?.serving} Serving
                    </Text>
                </View>

                <View
                    style={{
                        flex:1,
                        justifyContent: 'center'
                    }}
                >
                    <Viewers
                        viewersList={selectedRecipe?.viewers}
                    />
                </View>
            </View>
        )
    }

    const renderIngredientHeader = () => {
        return (
            <View
                style={{
                    flexDirection:'row',
                    paddingHorizontal:30,
                    marginTop: SIZES.radius,
                    marginBottom: SIZES.padding
                }}
            >
                <Text
                    style={{
                        flex:1,
                        ...FONTS.h3, fontWeight : 'bold'
                    }}
                >
                    Ingredients
                </Text>
                <Text
                    style={{
                        color: COLORS.lightGray2,
                        ...FONTS.body4
                    }}
                >
                    {selectedRecipe?.ingredients.length}
                </Text>
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor:'white'
            }}
        >
            <StatusBar translucent/>
            <Animated.FlatList
                data={selectedRecipe?.ingredients}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View style={{}}>
                        {renderRecipeCardHeader()}
                        {renderRecipeInfo()}
                        {renderIngredientHeader()}
                    </View>
                }
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    {nativeEvent: { contentOffset : {y : scrollY } }}
                ], { useNativeDriver: true })}
                renderItem={({item}) => {
                    return(
                        <View
                            style={{
                                flexDirection : 'row',
                                paddingHorizontal : 30,
                                marginVertical : 5
                            }}
                        >
                            <View
                               style={{
                                   alignItems : 'center',
                                   justifyContent : 'center',
                                   height : 50,
                                   width : 50,
                                   borderRadius : 5,
                                   backgroundColor : COLORS.lightGray,
                               }} 
                            >
                                <Image 
                                    source={item.icon}
                                    style={{
                                        height:40,
                                        width:40
                                    }}/>
                            </View>

                            <View
                                style={{
                                    flex:1,
                                    paddingHorizontal : 20,
                                    justifyContent: 'center'
                                }}
                            > 
                                <Text style={{...FONTS.body3, fontWeight : 'bold'}}>
                                    {item.description}
                                </Text>
                            </View>

                            <View
                                style={{
                                    alignItems : 'flex-end',
                                    justifyContent: 'center'
                                }}
                            >
                                <Text style={{...FONTS.body3, fontWeight : 'bold'}}>
                                    {item.quantity}
                                </Text>
                            </View>
                        </View>
                )}}
                ListFooterComponent={
                    <View style={{marginBottom:100}}/>
                }
            />
            {renderHeaderBar()}
        </View>
    )
}

export default Recipe;

const RecipeCreatorCardInfo = ({selectedRecipe}) => {
    return (
        <View
            style={{
                flex: 1,
                borderRadius : SIZES.radius,
                backgroundColor : COLORS.transparentBlack7
            }}
        >
            <RecipeCreatorCardDetail selectedRecipe={selectedRecipe}/>
        </View>
    )
}

const RecipeCreatorCardDetail = ({selectedRecipe}) => {
    return(
        <View
            style={{
                flex: 1,
                flexDirection:'row',
                alignItems: 'center'
            }}
        >
            <View
                style={{
                    width : 40,
                    height : 40,
                    marginLeft : 20
                }}
            >
                <Image 
                    source={selectedRecipe?.author?.profilePic}
                    style={{
                        width:40,
                        height : 40,
                        borderRadius:20
                    }}
                />
            </View>

            <View
                style={{
                    flex: 1,
                    marginHorizontal: 20
                }}
            >
                <Text style={{color:COLORS.lightGray2, ...FONTS.body4}}>Recipe By: </Text>
                <Text style={{color:COLORS.white2, ...FONTS.h3,fontWeight : 'bold'}}>{selectedRecipe?.author?.name}</Text>
            </View>

            <TouchableOpacity
                    style={{
                        width:30,
                        height:30,
                        alignItems : 'center',
                        justifyContent : 'center',
                        marginRight:20,
                        borderRadius:5,
                        borderWidth:1,
                        borderColor:COLORS.lightGreen1
                    }}
                    onPress={()=>console.log('View Profile')}
                >
                    <Image
                        source={icons.rightArrow}
                        style={{
                            width: 15,
                            height: 15,
                            tintColor: COLORS.lightGreen1
                        }}
                    />
            </TouchableOpacity>
        </View>
    )
}