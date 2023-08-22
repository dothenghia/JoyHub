import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function JoyIcon({ name, ...props }) {
    const iconMapping = {
        'Wifi': <AntDesign name={"wifi"} {...props} />,
        'CD/DVD Player': <MaterialCommunityIcons name={"disc-player"} {...props} />,
        'TV': <FontAwesome name={"tv"} {...props} />,
        'Shampoo': <FontAwesome5Icon name={"pump-soap"} {...props} />,
        'Towel': <MaterialCommunityIcons name={"checkbox-multiple-blank"} {...props} />,
        'Electronic Safe/Lock': <Octicons name={"shield-lock"} {...props} />,
        'Mini Fridge': <MaterialCommunityIcons name={"fridge-outline"} {...props} />,


        pool: <MaterialIcons name={"pool"} {...props} />,
        bathtub: <FontAwesome name={"bathtub"} {...props} />,
        ac: <FontAwesome name={"snowflake-o"} {...props} />,
        meal: <MaterialCommunityIcons name={"food-fork-drink"} {...props} />,
    };

    return iconMapping[name] || (<AntDesign name={"question"} {...props} />);
}
