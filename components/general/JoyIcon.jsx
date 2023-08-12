import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function JoyIcon({ name, ...props }) {
    const iconMapping = {
        wifi: <AntDesign name={"wifi"} {...props} />,
        pool: <MaterialIcons name={"pool"} {...props} />,
        bathtub: <FontAwesome name={"bathtub"} {...props} />,
        ac: <FontAwesome name={"snowflake-o"} {...props} />,
        meal: <MaterialCommunityIcons name={"food-fork-drink"} {...props} />,
    };

    return iconMapping[name] || (<AntDesign name={"question"} {...props} />);
}
