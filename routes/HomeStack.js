import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Home } from "../screens/Home";
import { ReviewDetails } from "../screens/ReviewDetails";

//define different types of screen
const screens = {
  //screen 1
  Home: {
    screen: Home,
    navigationOptions: {
      title: "GameZone",
    },
  },
  //screen 2
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "Review Details",
    },
  },
};

//create a stack navigator
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#eee",
      height: 60,
    },
  },
});

//export stack navigator
export default createAppContainer(HomeStack);
