import React, { useState } from "react";
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { RectButton } from "./Button";

const DateTime = ({ handleTimeSelect }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        handleTimeSelect(date)
        hideDatePicker();
    };

    return (
        <View>
            <RectButton alignSelf="center" width={200} fontSize={SIZES.large} {...SHADOWS.dark} title="Pick Date And Time" handlePress={showDatePicker} bgColor={COLORS.tertiary} />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    );
};

export default DateTime;