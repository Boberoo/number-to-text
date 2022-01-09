import { render, screen } from '@testing-library/react';
import { NumberToText, numberToText } from './NumberToText';


it('renders the number input and displays result', () => {
  const result = render(<NumberToText/>); //this is for testing static HTML results only
  //const result = mount(<NumberToText/>); does not seem to be part of Jest..???
  const header = screen.getByText(/number to text/i);
  expect(header).toBeInTheDocument();
  const numberLabel = screen.getByText(/enter a number/i);
  expect(numberLabel).toBeInTheDocument();
  const outputLabel = screen.getByText(/your number is/i);
  expect(outputLabel).toBeInTheDocument();
  //result.find('input').simulate('change', { target: { value: '5000' } });
  //const outputResult = screen.getByText(/five thousand/i);
  //expect(outputResult).toBeInTheDocument();
});


it('test the function that converts number to text', () => {
  expect(numberToText(1).toLowerCase()).toEqual("one");
  expect(numberToText(2).toLowerCase()).toEqual("two");
  expect(numberToText(12).toLowerCase()).toEqual("twelve");
  expect(numberToText(110).toLowerCase()).toEqual("one hundred and ten");
  expect(numberToText(1100).toLowerCase()).toEqual("one thousand one hundred");
  expect(numberToText(999).toLowerCase()).toEqual("nine hundred and ninety nine");
  expect(numberToText(9999).toLowerCase()).toEqual("nine thousand nine hundred and ninety nine");
  expect(numberToText(1000000).toLowerCase()).toEqual("one million");
  expect(numberToText(1000001).toLowerCase()).toEqual("one million and one");
  expect(numberToText(2000001).toLowerCase()).toEqual("two million and one");
  expect(numberToText(2101001).toLowerCase()).toEqual("two million one hundred and one thousand and one");
  expect(numberToText(1234567).toLowerCase()).toEqual("one million two hundred and thirty four thousand five hundred and sixty seven");
  expect(numberToText(1000000000).toLowerCase()).toEqual("one billion");
  expect(numberToText(1000000001).toLowerCase()).toEqual("one billion and one");
  expect(numberToText(1000000000000).toLowerCase()).toEqual("one trillion");
  expect(numberToText(1000000000000000).toLowerCase()).toEqual("one quadrillion");
});
