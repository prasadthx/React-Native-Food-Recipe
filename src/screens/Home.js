import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
    FlatList,
    Image,
    TextInput
} from 'react-native';
import CategoryCard from '../components/CategoryCard';
import {dummyData, FONTS, COLORS, SIZES, icons, images} from '../../constants'
import TrendingCard from '../components/TrendingCard';

const Home = ({ navigation }) => {
    // StatusBar.setBackgroundColor('white');
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor : 'white'
            }}
        >
            <StatusBar barStyle="dark-content"/>

            <FlatList
                data={dummyData.categories}
                keyExtractor={item => `${item.id}`}
                keyboardDismissMode='on-drag'
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {renderHeader()}
                        {renderSearchBar()}
                        {renderSeeRecipeCard()}
                        {renderTrendingSection(navigation)}
                        {renderCategoryHeader()}
                    </View>
                }
                renderItem={({item}) => {
                    return(
                        <CategoryCard
                            containerStyle={{
                                marginHorizontal: SIZES.padding
                            }}
                            categoryItem={item}
                            onPress={() => navigation.navigate("Recipe", {recipe: item})}
                        />
                    )
                }}
                ListFooterComponent={
                    <View
                        style={{
                            marginBottom : 100
                        }}   
                    />
                }
            />
            
        </SafeAreaView>
    )
}

export default Home;

const renderHeader = () => {
    return(
        <View
            style={{
                flexDirection:'row',
                marginHorizontal: SIZES.padding,
                alignItems: 'center', 
                height:80
            }}
        >
            <View
                style={{
                    flex : 1
                }}
            >
                <Text
                    style={{
                        color : COLORS.darkGreen,
                        ...FONTS.h2,
                        fontWeight : 'bold'
                    }}
                >
                    Hello Prasad..
                </Text>

                <Text
                    style={{
                        marginTop : 3,
                        color : COLORS.gray,
                        ...FONTS.body3
                    }}
                >
                    What do you want to cook today ?
                </Text>
            </View>
            
            <TouchableOpacity
                onPress={() => console.log('Profile')}
            >
                <Image
                    source={images.user}
                    style={{
                        width:40,
                        height:40,
                        borderRadius:20
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

const renderSearchBar = () => {
    return(
        <View
            style={{
                flexDirection : 'row',
                height: 50,
                alignItems: 'center', 
                marginHorizontal : SIZES.padding,
                paddingHorizontal : SIZES.radius,
                borderRadius : 10,
                backgroundColor : COLORS.lightGray
            }}
        >
            <Image 
                source={icons.search}
                style={{
                    width : 20,
                    height :20,
                    tintColor : COLORS.gray
                }}
            />

            <TextInput
                style={{
                    marginLeft : SIZES.radius,
                    ...FONTS.body3
                }}
                placehoderTextColor={COLORS.gray}
                placeholder="Search Recipes"
            />
        </View>
    )
}

const renderSeeRecipeCard = () => {
    return (
        <View 
            style={{
                flexDirection:'row',
                marginTop : SIZES.padding,
                marginHorizontal : SIZES.padding,
                borderRadius : 10,
                backgroundColor : COLORS.lightGreen
            }}
        >
            <View style={{
                width : 100,
                alignItems : 'center',
                justifyContent: 'center'
            }}>
                <Image
                    source={images.recipe}
                    style={{
                        width : 80,
                        height :80,
                    }}
                />
            </View>

            <View
                style={{
                    flex : 1, 
                    paddingVertical : SIZES.radius
                }}
            >
                <Text
                    style={{
                        width : '70%',
                        ...FONTS.body4
                    }}
                >
                    You have 12 recipes that you haven't tried yet!
                </Text>

                <TouchableOpacity
                    style={{
                        marginTop : 10,
                    }}
                    onPress={()=>console.log('See Recipes')}
                >
                    <Text style={{color: COLORS.darkGreen, textDecorationLine:'underline', ...FONTS.h4, fontWeight : 'bold'}}>
                        See Recipes
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const renderTrendingSection = (navigation) => {
    return (
        <View
            style={{
                marginTop : SIZES.padding
            }}
        >
            <Text
                style={{
                    marginHorizontal : SIZES.padding,
                    ...FONTS.h2, 
                    fontWeight : 'bold'
                }}
            >
                Trending Recipe
            </Text>

            <FlatList
                data={dummyData.trendingRecipes}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={({item, index})=> {
                    return (
                        <TrendingCard 
                            containerStyle={{
                                marginLeft : index==0 ? SIZES.padding : 0
                            }}
                            recipeItem={item}
                            onPress={() => navigation.navigate("Recipe", {recipe:item})}
                        />
                    )
                }}
            />
        </View>
    )
}

const renderCategoryHeader = () => {
    return (
        <View
            style={{
                flexDirection:'row',
                alignItems: 'center',
                marginHorizontal : SIZES.padding,
                marginTop : 20
            }}
        >
            <Text
                style={{
                    flex:1, 
                    ...FONTS.h2, 
                    fontWeight : 'bold',
                    color : 'black'
                }}
            >
                Categories
            </Text>

            <TouchableOpacity>
                <Text
                    style={{
                        color : COLORS.gray,
                        ...FONTS.body4
                    }}
                >
                    View All
                </Text>
            </TouchableOpacity>
        </View>
    )
}