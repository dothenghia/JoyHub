import { StyleSheet, View } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import JoyText from "../../general/JoyText";

import { COLORS, TEXTS } from "../../../constants/theme";

export default function ReviewCard({ props }) {
    const starsMapping = {
        1: (<View><FontAwesome5Icon name={"star"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} /></View>),
        1.5: (<View style={{flexDirection: 'row'}}>
            <FontAwesome5Icon name={"star"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
            <FontAwesome5Icon name={"star-half"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
        </View>),
        2: (<View style={{flexDirection: 'row'}}>
            <FontAwesome5Icon name={"star"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
            <FontAwesome5Icon name={"star"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
        </View>),
        2.5: (<View style={{flexDirection: 'row'}}>
            <FontAwesome5Icon name={"star"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
            <FontAwesome5Icon name={"star"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
            <FontAwesome5Icon name={"star-half"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
            </View>),
        3: (<View style={{flexDirection: 'row'}}>
            <FontAwesome5Icon name={"star"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
            <FontAwesome5Icon name={"star"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
            <FontAwesome5Icon name={"star"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
        </View>),
        3.5: (<View style={{flexDirection: 'row'}}>
            <FontAwesome5Icon name={"star"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
            <FontAwesome5Icon name={"star"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
            <FontAwesome5Icon name={"star"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
            <FontAwesome5Icon name={"star-half"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
            </View>),
        4: (<View style={{flexDirection: 'row'}}>
            <FontAwesome5Icon name={"star"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
            <FontAwesome5Icon name={"star"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
            <FontAwesome5Icon name={"star"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
            <FontAwesome5Icon name={"star"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
        </View>),
        4.5: (<View style={{flexDirection: 'row'}}>
            <FontAwesome5Icon name={"star"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
            <FontAwesome5Icon name={"star"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
            <FontAwesome5Icon name={"star"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
            <FontAwesome5Icon name={"star"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
            <FontAwesome5Icon name={"star-half"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
            </View>),
        5: (<View style={{flexDirection: 'row'}}>
            <FontAwesome5Icon name={"star"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
            <FontAwesome5Icon name={"star"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
            <FontAwesome5Icon name={"star"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
            <FontAwesome5Icon name={"star"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
            <FontAwesome5Icon name={"star"} solid size={16} color='#FFCA18' style={{marginHorizontal: 1}} />
        </View>),
    }
    return (
        <View style={styles.review_container}>
            <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <JoyText style={styles.review_name}>{props.r_name}</JoyText>
                {starsMapping[props.r_star]}
            </View>

            <JoyText style={styles.review_comment}>{props.r_comment}</JoyText>
        </View>
    );
}

const styles = StyleSheet.create({
    review_container: {
        borderBottomWidth: 2,
        borderBottomColor: COLORS.divider,
        paddingBottom: 14,
        marginHorizontal: 16,
        marginTop: 10,
    },
    review_name: {
        color: COLORS.subheading_text,
        fontSize: TEXTS.md,

        marginTop: 4,
    },
    review_comment: {
        color: COLORS.text,
        fontSize: TEXTS.md,

        marginTop: 4,
    },
});