import { StyleSheet } from "react-native";
import { COLORS, TEXTS } from '../constants/theme';


export const searchStyles = StyleSheet.create({
    // container for search bar
    container : {
        backgroundColor: "transparent",
        borderTopWidth: 0,
        borderBottomWidth: 0,
        width: '100%',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        borderWidth: 0,
    },
    // search bar input
    input_container : {
        backgroundColor: COLORS.input_background,
        borderRadius: 10,
        height: 42,
        width: "100%",
        borderColor: COLORS.input_border,
        borderWidth: 1,
        borderBottomWidth: 1,
      },
    // search bar input text
    input_text : {
        fontSize: TEXTS.md,
        color: COLORS.text
    },
});

export const AvatarCardStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        borderWidth: 1,
        borderColor: COLORS.input_border,
        borderRadius: 10,
        padding: 12,
        marginBottom: 10,
        backgroundColor: COLORS.white,

    },
    imageContainer: {
        flex: 1,
    },
    avatarImage: {
        width: 147,
        height: 120,
        resizeMode: "cover",
        borderRadius: 7,

    },
    textContainer: {
        flex: 1,
        flexDirection : 'column',
        alignContent : 'center',
        justifyContent : 'flex-start',
        width: "50%",
        marginLeft: 10,
        marginBottom: "auto",
        marginTop: "auto",
    },
    title: {
        fontSize: TEXTS.lg,
        fontWeight: "900",
        color: COLORS.text,
        lineHeight: 30,
        width: "100%",
    },
    descriptionContainer: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginTop: "auto",
        marginBottom: "auto",
        justifyContent: "flex-start"
    },
    description: {
        fontSize: TEXTS.xs,
        color: COLORS.text,
        lineHeight: 20,
        fontWeight: "500"
   },
    iconStyle: {
        color: COLORS.text,
        fontSize: TEXTS.md,
        fontWeight: "900",
        marginBottom: "auto",
        marginTop: "auto",
    }
});

export const HotelCardStyles = StyleSheet.create({
    container: {
        borderRadius: 10,
        marginTop: 7,
        marginBottom: 17,
        paddingHorizontal: 12,
        width: "100%",
    },
    image: {
        width: "100%",
        height: 186,
        resizeMode: "cover",
        borderRadius: 7,

    },
    textContainer: {
        padding: 12,
        position: "absolute",
        left: 0,
        bottom: 0,
        flexDirection : 'column',
        alignContent : 'center',
        width: "70%",
        marginBottom: "auto",
        marginTop: "auto",
        marginLeft: 20,
    },
    title: {
        fontSize: TEXTS.xxl,
        fontWeight: "900",
        color: COLORS.white,
        lineHeight: 30,
        width: "100%",
        elevation: 1,
    },
    descriptionContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: "auto",
        marginBottom: "auto",
        justifyContent: "flex-start",

    },
    description: {
        fontSize: TEXTS.sm,
        color: COLORS.white,
        lineHeight: 20,
        fontWeight: "500",
        elevation: 2,
    },
    iconStyle: {
        color: COLORS.white,
        fontSize: TEXTS.md,
        fontWeight: "900",
        marginBottom: "auto",
        marginTop: "auto",
    },
    waitingContainer:{
        position: "absolute",
        right: 5,
        top: -7,
        backgroundColor: COLORS.primary,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: "#DF4B07",
        padding: 7,
        paddingHorizontal: 10,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    waitingText:{
        fontSize: TEXTS.lg,
        color: COLORS.white,
        fontWeight: "bold"
    }
});

export const ReportCardStyles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 17,
        backgroundColor: COLORS.white,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 28,
        borderColor: COLORS.input_border,
    },
    container_read: {
        backgroundColor: COLORS.disable,
    },
    hotel: {
        fontSize: TEXTS.xxl,
        fontWeight: "bold",
        color: COLORS.primary,
    },
    hotel_read: {
        color: COLORS.secondary
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: "auto",
        marginBottom: "auto",
    },
    icon: {
        color: COLORS.primary,
        flex: 1,
        alignSelf:"center",
        textAlign:"right",
        fontSize: TEXTS.xxl
    },
    title: {
        flex: 1,
        fontSize: TEXTS.md,
        fontWeight: "700",
        color: COLORS.text,
        lineHeight: 20,
    },
    title_read: {
        color: COLORS.grey,
    },
    date: {
        flex: 1,
        fontSize: TEXTS.sm,
        color: COLORS.grey
    }
});

export const DetailHotelStyles = StyleSheet.create({
    hotelNameContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        alignVertical: "center",
        marginBottom: 10,
        marginTop: 10,
        gap: 12
    },
    hotelName: {
        fontSize: TEXTS['3xl'],
        fontWeight: "bold",
        color: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",

    },
    confirmBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 10,
        padding: 12,
        gap: 20,
        width: "100%",
        height: 64,
        backgroundColor: COLORS.disable,
        borderRadius: 10,
    },
    confirmButton: {
        flex: 1,
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        height: 45,
        marginTop: "auto",
        marginBottom: "auto",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
    },
    buttonText: {
        fontSize: TEXTS.md,
        fontWeight: "bold",
        color: COLORS.white,
    },
    cancelButton: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        borderRadius: 10,
        height: 45,
        marginTop: "auto",
        marginBottom: "auto",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
    },
    hotelDetailsContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginBottom: 10,
        gap: 10,
    },
    hotelDetailsTitle: {
        fontSize: TEXTS['4xl'],
        fontWeight: "bold",
        color: COLORS.primary,
    },
    hotelDetails: {
        fontSize: TEXTS.md,
        fontWeight: "bold",
        color: COLORS.text,
        textAlign:"justify"
    },
    ownerField: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 6,
        gap: 10,
        width: "100%",
    },
    ownerTitle: {
        fontSize: TEXTS.md,
        fontWeight: "600",
        color: COLORS.heading_text,
        justifyContent: "flex-start",
    },
    ownerDetails: {
        fontSize: TEXTS.md,
        fontWeight: "600",
        color: COLORS.text,
        justifyContent: "flex-end",
    },
});

export const RoomStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 17,
        padding: 20,
        width: "100%",
        height: 200,
        borderColor: COLORS.input_border,
        borderWidth: 1,
        borderRadius: 10,
    },
    description: {
        fontSize: TEXTS.lg,
        // fontWeight: "bold",
    },
    descriptionContainer: {
        flexDirection: "row",
    },
    image: {
        height: 168,
        width: 110,
        resizeMode: "cover",
        borderRadius: 7,
    },
    price: {
        fontSize: TEXTS.lg,
        fontWeight: "bold",
        // color: COLORS.text,
    },
    textContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginBottom: 10,
        padding: 12,
        gap: 7,
    },
    title: {
        fontSize: TEXTS.xl,
        fontWeight: "bold",
        color: COLORS.primary,
    }
});

export const DetailRoomStyles = StyleSheet.create({
    roomNameContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginBottom: 10,
        marginTop: 10,
        gap: 6
    },
    roomName: {
        fontSize: TEXTS['3xl'],
        fontWeight: "900",
    },
    roomPrice: {
        fontSize: TEXTS['2xl'],
        fontWeight: "700",
    },
    roomDetailsContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginBottom: 10,
        gap: 10,
    },
    roomInfoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 6,
        gap: 20,
        width: "100%",
    },
    roomInfoField: {
        flex: 1,
        flexDirection: "row",
        gap: 3,
        fontSize: TEXTS.md,
        fontWeight: "600",
        color: COLORS.heading_text,
        // borderWidth: 1,
        borderColor: COLORS.input_border,
        borderRadius: 3,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginRight: 20,
    },
    roomInfoLabel: {
        fontSize: TEXTS.xl,
        fontWeight: "600",
        color: COLORS.text,
        justifyContent: "center",
    },
    roomInfoIcon: {
        fontSize: TEXTS['3xl'],
        fontWeight: "600",
        color: COLORS.text,
        justifyContent: "center",
    },
    roomAmenContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 6,
        gap: 10,
        width: "100%",
    },
    roomAmenField: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 3,
        backgroundColor: COLORS.disable,
        marginRight: 10,
        gap: 10,
    },
    roomAmenLabel: {
        fontSize: TEXTS.md,
        fontWeight: "600",
        color: COLORS.text,

    },
    roomAmenIcon: {
        fontSize: TEXTS['3xl'],

        fontWeight: "600",
        color: COLORS.text,
        justifyContent: "center",
    },
    roomFieldContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginBottom: 5,
        gap: 10,
    },
    roomFieldLabel: {
        fontSize: TEXTS.xxl,
        fontWeight: "bold",
        color: COLORS.primary,
    },
    roomField: {
        fontSize: TEXTS.md,
        color: COLORS.text,
        textAlign:"justify"
    },
});

export const ReportDetailStyles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 17,
        backgroundColor: COLORS.white,
        marginBottom: 16,
        borderRadius: 10,
    },
    idContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // marginBottom: 6,
        // gap: 10,
        width: "100%",
    },
    idText: {
        fontSize: TEXTS.lg,
        // fontWeight: "bold",
        color: COLORS.text,
    },
    date: {
        fontSize: TEXTS.lg,
        // fontWeight: "bold",
        color: COLORS.text,
    },
    title: {
        fontSize: TEXTS.xxl,
        fontWeight: "bold",
        color: COLORS.primary,
        // marginBottom: 10,
    },
    descriptionContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    descriptionTitle: {
        fontSize: TEXTS.xxl,
        fontWeight: "bold",
        color: COLORS.primary,
        // marginBottom: 10,
    },
    descriptionText: {
        fontSize: TEXTS.lg,
        fontWeight: "bold",
        color: COLORS.text,
        textAlign:"justify",
        marginTop: 10,
    },
    contactButton: {
        flex: 1,
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        height: 45,
        marginTop: "auto",
        marginBottom: "auto",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
    },
    buttonText: {
        fontSize: TEXTS.md,
        fontWeight: "bold",
        color: COLORS.white,
    },
    removeButton: {
        flex: 1,
        backgroundColor: "#FF0000",
        borderRadius: 10,
        height: 45,
        marginTop: "auto",
        marginBottom: "auto",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
    },
    removeButtonText: {
        fontSize: TEXTS.md,
        fontWeight: "bold",
        color: COLORS.white,
    },


});
