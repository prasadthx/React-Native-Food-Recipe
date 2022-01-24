import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import { icons } from "../../constants";
import TabIcon from './TabIcon'

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle : {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0, 
                    elevation: 0,
                    backgroundColor: 'white',
                    borderTopColor: 'transparent',
                    height: 80
                },
                tabBarShowLabel:false
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon : ({focused}) => <TabIcon focused={focused}
                    icon={icons.home} />
                }}
            />
            <Tab.Screen 
                name="Search" 
                component={Home} 
                options={{
                    tabBarIcon : ({focused}) => <TabIcon focused={focused}
                    icon={icons.search} />
                }}
            />
            <Tab.Screen 
                name="Bookmarks" 
                component={Home} 
                options={{
                    tabBarIcon : ({focused}) => <TabIcon focused={focused}
                    icon={icons.bookmark} />
                }}    
            />
            <Tab.Screen 
                name="Settings" 
                component={Home} 
                options={{
                    tabBarIcon : ({focused}) => <TabIcon focused={focused}
                    icon={icons.settings} />
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;