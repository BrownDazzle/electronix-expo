import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'
import { Text } from 'react-native'

function InputError({ error }) {
    return (
        <Text style={{ fontSize: SIZES.medium, fontWeight: FONTS.semiBold, color: COLORS.tertiary, marginLeft: 5, marginBottom: 2 }}>{error}</Text>
    )
}

export default InputError