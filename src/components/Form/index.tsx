import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styled} from './styles';

interface FormProps {
    weight: string;
    height: string;
    setWeight: (value: string) => void;
    setHeight: (value: string) => void;
    handleCalculate: () => void;
}

export const Form: React.FC<FormProps> = ({
    handleCalculate,
    setWeight,
    setHeight,
    weight,
    height,
}) => {
    const handleWeight = (text: string) => {
        const newText = text.replace(',', '.');
        setWeight(newText);
    };
    const handleHeight = (text: string) => {
        const newText = text.replace(',', '.');
        setHeight(newText);
    };
    return (
        <View style={styled.container}>
            <TextInput
                style={styled.input}
                placeholder='Peso (Kg)'
                placeholderTextColor='#c7c7c7'
                keyboardType='number-pad'
                onChangeText={handleWeight}
                value={weight}
            />
            <TextInput
                style={styled.input}
                placeholder='Altura (cm)'
                placeholderTextColor='#c7c7c7'
                keyboardType='number-pad'
                onChangeText={handleHeight}
                value={height}
            />

            <TouchableOpacity style={styled.button} onPress={handleCalculate}>
                <Text style={styled.buttonText}>Calcular</Text>
            </TouchableOpacity>
        </View>
    );
};
