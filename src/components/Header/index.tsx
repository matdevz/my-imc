import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {styled} from './styles';

interface HeaderProps {
    setWeight: (value: string) => void;
    setHeight: (value: string) => void;
    setResult: ({}: {color: string; message: string}) => void;
}

export const Header: React.FC<HeaderProps> = ({
    setWeight,
    setHeight,
    setResult,
}) => {
    const handleClear = () => {
        setWeight('');
        setHeight('');
        setResult({
            color: '#fff',
            message: '',
        });
    };

    return (
        <View style={styled.container}>
            <Text style={styled.title}>Calculadora IMC</Text>

            <TouchableOpacity style={styled.button} onPress={handleClear}>
                <Text style={styled.buttonText}>Limpar</Text>
            </TouchableOpacity>
        </View>
    );
};
