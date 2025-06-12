import React from 'react';
import { TextInput, StyleSheet, Platform } from 'react-native';
import { useTheme } from './CountryTheme';
const styles = StyleSheet.create({
    input: {
        height: 48,
        width: '70%',
        ...Platform.select({
            web: {
                outlineWidth: 0,
                outlineColor: 'transparent',
                outlineOffset: 0,
            },
        }),
    },
});
export const CountryFilter = ({ autoFocus = false, placeholder = 'Enter country name', ...rest }) => {
    const { filterPlaceholderTextColor, fontFamily, fontSize, onBackgroundTextColor, } = useTheme();
    const props = {
        autoFocus,
        placeholder,
        ...rest,
    };
    return (React.createElement(TextInput, { testID: 'text-input-country-filter', placeholderTextColor: filterPlaceholderTextColor, style: [
            styles.input,
            { fontFamily, fontSize, color: onBackgroundTextColor },
        ], ...props }));
};
//# sourceMappingURL=CountryFilter.js.map