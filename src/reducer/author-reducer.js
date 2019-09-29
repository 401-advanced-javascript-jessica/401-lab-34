import uuid from 'uuid';

export default (state = [], {type, payload}) => {
    switch(type) {
        case 'AUTHOR_CREATE':
            return [...state, {
                name: payload,
                id: uuid(),
                timestamp: Date.now(),
            }
            ];
        case 'AUTHOR_UPDATE':
            return state.map( author => {
                if (payload.id === author.id){
                    author.name = payload.name;
                    author.id = payload.id;
                    author.timestamp = Date.now();
                }
                return author;
            })
            break;
        case 'AUTHOR_DELETE':

            break;
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        default:
            return state
    }
}