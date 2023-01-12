import { useEffect, useState } from 'react';
import { Container } from '../src/styles/StyledComponents';
import {
  useLocalStorage,
  getLocalStorage,
  tasks,
} from '../helpers/LocalStorage';
import axios from 'axios';

interface form {
  task: string;
}

const Index = () => {
  const [formData, setFormData] = useState<form>({ task: '' });
  const [tasks, setTasks] = useState<tasks>([]);

  useEffect(() => {
    setTasks(getLocalStorage());
  }, []);
  const Save = () => {
    useLocalStorage(formData);
  };
  return (
    <Container>
      <h1>Hello</h1>
      <input
        type="text"
        placeholder="Skriv en opgave"
        value={formData.task}
        onChange={(e) => setFormData({ ...formData, task: e.target.value })}
      />
      <button onClick={() => Save()}>Gem opgave</button>
    </Container>
  );
};

export default Index;
