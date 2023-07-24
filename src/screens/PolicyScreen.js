import React from 'react'
import { ScrollView } from 'react-native'
import { Text, View } from 'react-native'
import { COLORS, FONTS, SHADOWS, SIZES, assets } from '../constants';
import { TouchableOpacity } from 'react-native';
import { BottomMenu, CircleButton } from '../Components';
import { StatusBar } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const DetailsHeader = () => {
    const navigation = useNavigation()

    return (
        <View style={{ width: "100%", height: 90, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
            <CircleButton
                imgUrl={assets.left}
                handlePress={() => navigation.goBack()}
                left={15}
                top={StatusBar.currentHeight + 10}
            />
            <TouchableOpacity
                style={{
                    width: 200,
                    height: 40,
                    backgroundColor: COLORS.white,
                    position: "absolute",
                    borderRadius: SIZES.extraLarge,
                    alignItems: "center",
                    justifyContent: "center",
                    shadowColor: SHADOWS.light,
                    alignSelf: "center",
                    top: StatusBar.currentHeight + 10
                }}
            >
                <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium, fontWeight: FONTS.medium, color: COLORS.primary }}>Policy & Safety</Text>
            </TouchableOpacity>
        </View>
    )
};


function PolicyScreen() {

    const data = [
        {
            title: 'Privacy Policy',
            desc: 'We respect your privacy and protect your personal information. Our Privacy Policy outlines how we collect, use, and safeguard your data. Rest assured that your information is treated confidentially and is used only for order processing and communication purposes.'
        },
        {
            title: 'Secure Payment',
            desc: 'Your online transactions are secure with us. We utilize encrypted and secure payment gateways to process your payments, ensuring that your credit card and banking information are protected from unauthorized access.'
        },
        {
            title: 'Return & Refund Policy',
            desc: 'We offer a hassle-free return and refund policy to ensure your satisfaction with your purchases. If you encounter any issues with your order, you can return the product within the specified period for a full refund or exchange.'
        },
        {
            title: 'Product Authenticity',
            desc: 'We guarantee that all products sold on our platform are 100% authentic and sourced directly from reputable suppliers. Each product undergoes rigorous quality checks to ensure you receive genuine items.'
        },
        {
            title: 'Delivery & Shipping',
            desc: 'We strive to deliver your orders promptly. Our shipping partners work diligently to ensure safe and timely delivery to your doorstep. You can track your orders and stay informed about their status.'
        },
        {
            title: 'User Safety',
            desc: 'We are committed to providing a safe shopping environment for all users. We monitor and implement safety measures to prevent fraudulent activities, unauthorized access, and cyber threats.'
        },
        {
            title: 'Customer Support',
            desc: 'Our customer support team is available to assist you with any queries, concerns, or assistance you may need. Reach out to us through various channels, including phone, email, or live chat.'
        },
        {
            title: 'Child Safety',
            desc: 'Our platform is not intended for use by children under the age of 13. We do not knowingly collect personal information from children. Parents or guardians are encouraged to supervise their childrens online activities.'
        },
        {
            title: 'Reviews & Feedback',
            desc: 'We value your feedback and encourage you to share your shopping experience with us. Honest reviews and feedback help us improve our services and products for the benefit of all our customers.'
        },
    ]

    return (
        <>
            <DetailsHeader />
            <BottomMenu />
            <ScrollView style={{ flex: 1, paddingHorizontal: 15, paddingBottom: 30 }}>
                <Text style={{ marginBottom: 20, fontSize: SIZES.medium, fontWeight: FONTS.regular, color: COLORS.primary }}>
                    Welcome to our Ecommerce Store! Your safety and satisfaction are our top priorities. Please take a moment to review our policy and safety guidelines to ensure a secure and enjoyable shopping experience.
                </Text>
                <View>
                    {data.map((policy) => (
                        <View style={{ marginBottom: 10 }}>
                            <Text style={{ fontSize: SIZES.large, fontWeight: FONTS.bold, color: COLORS.primary, marginBottom: 5 }}>{policy.title}</Text>
                            <Text style={{ fontSize: 14, fontWeight: FONTS.semiBold, color: COLORS.secondary }}>{policy.desc}</Text>
                        </View>
                    ))}
                </View>
                <Text style={{ fontSize: 14, fontWeight: FONTS.semiBold, color: COLORS.primary, marginTop: 20 }}>
                    Please note that by using our Ecommerce Store, you agree to abide by our policies and terms of use. If you have any questions or need further clarification, do not hesitate to contact us.
                </Text>

                <Text style={{ fontSize: 14, fontWeight: FONTS.semiBold, color: COLORS.primary, marginTop: 20 }}>Thank you for choosing our Ecommerce Store. Happy shopping!</Text>
                <View style={{ height: 70 }}>

                </View>
            </ScrollView>


        </>
    )
}

export default PolicyScreen