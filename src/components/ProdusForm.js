import React from 'react';
import { Input, Textarea, Button } from '@chakra-ui/react';

const initialState = {
  title: '',
  text: '',
  price:0
};

function NoteForm({
  inputValues = initialState,
  onSubmitCallback,
  secondaryButtonClickAction,
  showCancelButton = false,
}) {
  const [value, setValue] = React.useState(inputValues);

  const handleInputChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitCallback(value);
  };

  return (
    
      <form onSubmit={onSubmit}>
        <Input
          name="title"
          value={value.title}
          onChange={handleInputChange}
          placeholder="Titlul produs"
          mb="24px"
        />
        <Textarea
          value={value.text}
          onChange={handleInputChange}
          name="text"
          placeholder="Detaliile produs"
          size="sm"
          mb="24px"
          minHeight="400px"
        />
        <Input
          name="price"
          type="number"
          value={value.price}
          onChange={handleInputChange}
          placeholder="Pret"
          mb="24px"
        />

        <Button type="submit" marginRight="24px" bg="#fe7f2d" color="white">
          Submit
        </Button>
        {showCancelButton ? (
          <Button
            onClick={secondaryButtonClickAction}
            backgroundColor="red.600"
            color="white"
            type="button"
          >
            Cancel
          </Button>
        ) : null}
      </form>
    
  );
}

export default NoteForm;