import { useState } from "react";

import Button from "./components/button";
import Input from "./components/input"
import { Container, Content, Row } from "./styles";

const App = () => {
    const [currentNumber, setCurrentNumber] = useState(0);
    const [firstNumber, setFirstNumber] = useState(0);

    const handleOnClear = () => {
        setCurrentNumber('');
    };

    const handleDisplayNumber = (number) => {
        setCurrentNumber(prev => `${prev}${number}`);
    };

    const handleSum = () => {
        if(firstNumber === 0) {
            setFirstNumber(currentNumber);
        } else {
            const sum = Number(firstNumber) + Number(currentNumber);
            setCurrentNumber(String(sum));
        }
    }

    return (
        <Container>
            <Content>
                <Input value={currentNumber}/>
                <Row>
                    <Button label="+/-" />
                    <Button label="%" />
                    <Button label="√" />
                    <Button label="CL" onClick={handleOnClear}/>
                </Row>
                <Row>
                    <Button label="7" onClick={ () => handleDisplayNumber('7')} />
                    <Button label="8" onClick={ () => handleDisplayNumber('8')} />
                    <Button label="9" onClick={ () => handleDisplayNumber('9')} />
                    <Button label="÷" />
                </Row>
                <Row>
                    <Button label="4" onClick={ () => handleDisplayNumber('4')} />
                    <Button label="5" onClick={ () => handleDisplayNumber('5')} />
                    <Button label="6" onClick={ () => handleDisplayNumber('6')} />
                    <Button label="×" />
                </Row>
                <Row>
                    <Button label="1" onClick={ () => handleDisplayNumber('1')} />
                    <Button label="2" onClick={ () => handleDisplayNumber('2')} />
                    <Button label="3" onClick={ () => handleDisplayNumber('3')} />
                    <Button label="-" />
                </Row>
                
                <Row>
                    <Button label="0" onClick={ () => handleDisplayNumber('0')} />
                    <Button label="." onClick={ () => handleDisplayNumber('.')} />
                    <Button label="=" />
                    <Button label="+" onClick={ handleSum }/>
                </Row>
                
            </Content>
        </Container>
    );
};

export default App;
