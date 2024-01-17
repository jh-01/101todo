interface ITodoItemContent {
  content: string;
}
interface TodoItem extends ITodoItemContent {
  id: string;
  complete: boolean;
  editing: boolean;
}
