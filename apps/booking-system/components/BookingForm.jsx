import { useState } from 'react';
import { StyledForm } from '../src/styles/styledComponents';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { useTimeBetween } from '../helpers/BookingSystem';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: new Date(moment().format().slice(0, 10)),
  });
  const [test, setTest] = useState();
  useTimeBetween(3)
    .then((res) => {
      if (!test) {
        setTest(res);
      }
    })
    .catch((e) => console.log(e));
  const handleSubmit = () => {
    const payload = {
      id: 3,
      name: formData.name,
      from: formData.from.toLocaleDateString('dk'),
      to: formData.to.toLocaleDateString('dk'),
    };
    console.log(payload);
    axios.put('http://localhost:3123/products', payload).then((response) => {
      console.log(response);
    });
  };
  //time functions
  // to get local date string .toLocaleDateString('dk')
  //to get new date with use of moment for datepicker-- new Date(moment().format().slice(0, 10))

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value,
          })
        }
        required
      />

      <label htmlFor="date">Fra dato</label>
      <DatePicker
        selected={formData.from}
        onChange={(date) => setFormData({ ...formData, from: date })}
        minDate={moment().toDate()}
        excludeDates={test}
      />
      <label htmlFor="date">Til dato</label>
      <DatePicker
        selected={formData.to}
        onChange={(date) => setFormData({ ...formData, to: date })}
      />

      <input type="submit" value="Book it" />
    </StyledForm>
  );
};

export default BookingForm;
