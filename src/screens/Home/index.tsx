import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Form} from '../../components/Form';
import {Header} from '../../components/Header';
import {Result} from '../../components/Result';
import {styled} from './styles';

export const Home: React.FC = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [result, setResult] = useState({color: '', message: ''});

    useEffect(() => {
        if (!weight || !height) {
            setResult({color: '#fff', message: ''});
        }
    }, [weight, height]);

    const handleCalculate = () => {
        if (!weight) {
            return alert('Informe seu peso.');
        }

        if (!height) {
            return alert('Informe sua altura.');
        }

        const weightNumber = Number(weight);
        const heightCubique = Number(height) * Number(height);
        const imc = weightNumber / heightCubique;

        if (imc < 18.5) {
            setResult({
                color: 'red',
                message: 'Você está muito magro',
            });
        } else if (imc > 18.5 && imc < 24.9) {
            setResult({
                color: 'green',
                message: 'Você está normal',
            });
        } else if (imc > 25.0 && imc < 29.9) {
            setResult({
                color: 'yellow',
                message: 'Você está sobrepeso',
            });
        } else if (imc > 30.0 && imc < 39.9) {
            setResult({
                color: 'red',
                message: 'Você está obeso (a)',
            });
        } else {
            setResult({
                color: 'red',
                message: 'Você está muito obeso (a)',
            });
        }
    };

    return (
        <View style={styled.container}>
            <Header
                setWeight={setWeight}
                setHeight={setHeight}
                setResult={setResult}
            />
            <Form
                setWeight={setWeight}
                setHeight={setHeight}
                weight={weight}
                height={height}
                handleCalculate={handleCalculate}
            />
            <Result result={result} />
        </View>
    );
};
