interface ITodoItemContent {
  content: string;
}
interface ITodoItem extends ITodoItemContent {
  id: string;
  complete: boolean;
  editing: boolean;
}
