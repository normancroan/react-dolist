import uuid from 'uuid';

//ADD TODO
export const addTodo = ({name = '', isCompleted = false} = {}) => {
    return {
        id: uuid(),
        name,
        isCompleted
    }
}