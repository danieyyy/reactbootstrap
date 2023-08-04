import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [selectedOperation, setSelectedOperation] = useState("");
  const [result, setResult] = useState("");

  const handleOperation = (operation) => {
    setSelectedOperation(operation);
    switch (operation) {
      case "add":
        setResult(parseFloat(num1) + parseFloat(num2));
        break;
      case "subtract":
        setResult(parseFloat(num1) - parseFloat(num2));
        break;
      case "multiply":
        setResult(parseFloat(num1) * parseFloat(num2));
        break;
      case "divide":
        setResult(parseFloat(num1) / parseFloat(num2));
        break;
      default:
        setResult("");
    }
  };

  return (
    <div className="container mt-5">
      <Form>
        <Form.Group controlId="num1">
          <Form.Label>Number 1</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter First Number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="num2">
          <Form.Label>Number 2</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Second Number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </Form.Group>
        <div className="p-3">
            <Button className="p-3 m-2" variant="primary" onClick={() => handleOperation("add")}>
            Add
            </Button>
            <Button className="p-3 m-2" variant="secondary" onClick={() => handleOperation("subtract")}>
            Subtract
            </Button>
            <Button className="p-3 m-2" variant="success" onClick={() => handleOperation("multiply")}>
            Multiply
            </Button>
            <Button className="p-3 m-2" variant="warning" onClick={() => handleOperation("divide")}>
            Divide
            </Button>
        </div>
      </Form>

      {result !== "" && (
        <div className="mt-4">
          <h4>Results:</h4>
          {selectedOperation === "add" && <p>Addition: {result}</p>}
          {selectedOperation === "subtract" && <p>Subtraction: {result}</p>}
          {selectedOperation === "multiply" && <p>Multiplication: {result}</p>}
          {selectedOperation === "divide" && <p>Division: {result}</p>}
        </div>
      )}
    </div>
  );
};

export default Calculator;
