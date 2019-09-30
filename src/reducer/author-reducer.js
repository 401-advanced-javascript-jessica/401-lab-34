import uuid from 'uuid';

export default (state = [], { type, payload }) => {
  switch (type) {
    case 'AUTHOR_CREATE':
      return [...state, {
        name: payload,
        id: uuid(),
        timestamp: Date.now(),
      },
      ];
    case 'AUTHOR_UPDATE':
      return state.map((author) => {
        return payload.id === author.id ? { ...author, name: payload.name } : author;
      });
    case 'AUTHOR_DELETE':
      return state.filter((author) => payload !== author.id);
    default:
      return state;
  }
};
