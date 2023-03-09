import { StyleSheet } from "react-native"

const authStyle = StyleSheet.create({
    brand: {
        color: "#6379F4",
        fontSize: 26,
        fontWeight: 700,
        textAlign: "center"
    },

    ptbase: {
        paddingTop: 105
    },

    pxbase: {
        paddingRight: 10,
        paddingLeft: 10
    },

    formContainer : {
        minHeight: "100%",
        marginTop: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: "#fff",
    },

    featureTitle : {
        paddingTop: 50,
        fontSize: 24,
        fontWeight: 700,
        lineHeight: 33,
        textAlign: "center"
        
    },

})

module.exports = authStyle;