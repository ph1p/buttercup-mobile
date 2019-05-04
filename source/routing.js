import React from "react";
import { Image, StyleSheet, Text, View, Animated, Easing } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    createReduxContainer,
    createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";

import ArchivesPage from "./components/ArchivesPage.js";
import EntryPage from "./containers/EntryPage.js";
import NewEntryPage from "./containers/NewEntryPage.js";
import AddMetaPage from "./containers/AddMetaPage.js";
import AddArchivePage from "./containers/AddArchivePage.js";
import SearchArchivesPage from "./containers/SearchArchivesPage.js";
import RemoteConnectPage from "./containers/RemoteConnectPage.js";
import RemoteExplorerPage from "./containers/RemoteExplorerPage.js";
import PopupBrowser from "./containers/PopupBrowser.js";
import GroupsPage from "./containers/GroupsPage.js";
import LockPage from "./components/LockPage.js";

export const AppNavigator = createStackNavigator(
    {
        Home: { screen: ArchivesPage },
        Entry: { screen: EntryPage },
        NewEntry: { screen: NewEntryPage },
        AddMeta: { screen: AddMetaPage },
        AddArchive: { screen: AddArchivePage },
        SearchArchives: { screen: SearchArchivesPage },
        RemoteConnect: { screen: RemoteConnectPage },
        RemoteExplorer: { screen: RemoteExplorerPage },
        PopupBrowser: { screen: PopupBrowser },
        GroupsPage: { screen: GroupsPage },
        LockPage: { screen: LockPage }
    },
    {
        initialRouteName: "Home",
        transitionConfig: () => ({
            transitionSpec: {
                duration: 0,
                timing: Animated.timing,
                easing: Easing.step0
            }
        }),
        mode: "card",
        defaultNavigationOptions: {
            headerTintColor: "#454545",
            headerStyle: {
                backgroundColor: "#ffffff",
                borderBottomColor: "#24B5AB",
                borderBottomWidth: 3
            },
            headerTitleStyle: {
                flex: 1
            }
        }
    }
);

const middleware = createReactNavigationReduxMiddleware("root", state => state.nav);
const MainNavigator = createAppContainer(AppNavigator);
const AppWithNavigationState = createReduxContainer(MainNavigator, "root");

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    state: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
