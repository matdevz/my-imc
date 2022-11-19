import React from 'react';
import {Text, View} from 'react-native';
import {styled} from './styles';

interface ResultProps {
    result: {color: string; message: string};
}

export const Result: React.FC<ResultProps> = ({result}) => {
    return (
        <View style={styled.container}>
            <Text style={{...styled.text, color: result.color}}>
                {result.message ? result.message : 'Informe seus dados'}
            </Text>
        </View>
    );
};
