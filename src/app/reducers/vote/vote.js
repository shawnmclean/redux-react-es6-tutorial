import { VOTE } from '../constants/ActionTypes'

// Use dummy data for polls right now
const initialState = [
  {
    polls: [
      {
        id: 0
        text:'Poll 1',
        vote: 0
      },
      {
        id: 1
        text:'Poll 2',
        vote: 0
      }
    ]
  }
]

export default function vote(state = initialState, action) {
  switch (action.type) {
    case VOTE:
        return state.map(poll =>
          poll.id === action.id ?
            { ...poll, vote: poll.vote++ } :
            poll
        )
      break;
    default:

  }
}
