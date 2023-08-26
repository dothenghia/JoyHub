import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";

export default function JoyIcon({ name, ...props }) {
    const iconMapping = {
        'Wifi': <AntDesign name={"wifi"} {...props} />,
        'CD/DVD Player': <MaterialCommunityIcons name={"disc-player"} {...props} />,
        'TV': <FontAwesome name={"tv"} {...props} />,
        'Shampoo': <FontAwesome5Icon name={"pump-soap"} {...props} />,
        'Towel': <MaterialCommunityIcons name={"checkbox-multiple-blank"} {...props} />,
        'Electronic Safe/Lock': <Octicons name={"shield-lock"} {...props} />,
        'Mini Fridge': <MaterialCommunityIcons name={"fridge-outline"} {...props} />,
        'Slippers': <Fontisto name={"beach-slipper"} {...props} />,
        'Air conditioner': <FontAwesome name={"snowflake-o"} {...props} />,
        'Coffee Maker': <Feather name={"coffee"} {...props} />,
        'Pool': <MaterialCommunityIcons name={"pool"} {...props} />,
        'River': <MaterialCommunityIcons name={"waterfall"} {...props} />,


    };

    return iconMapping[name] || (<AntDesign name={"question"} {...props} />);
}
