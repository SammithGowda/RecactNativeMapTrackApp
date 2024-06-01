import { NavigationActions } from "react-navigation";

let navigator;

export const setNavigation = (nav) => {
    navigator = nav;
}

export const navigate = (RouteName, Params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName: RouteName,
            params: Params
        })
    )
}