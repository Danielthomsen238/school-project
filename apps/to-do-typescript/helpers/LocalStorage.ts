export interface tasks {
  [index: number]: { task: string };
}
const storedTasks: { task: string }[] = [];

const useLocalStorage = (formData: { task: string }): tasks => {
  storedTasks.push(formData);
  localStorage.setItem('tasks', JSON.stringify(storedTasks));
  console.log(storedTasks);
  return storedTasks;
};

const getLocalStorage = (): tasks => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  if (tasks) {
    storedTasks.push(...tasks);
  }
  return storedTasks;
};

export { useLocalStorage, getLocalStorage };
