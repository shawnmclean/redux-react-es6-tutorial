import * as types from '../constants/ActionTypes'

export function vote(id){
  return {
    type: types.VOTE,
    id
  }
}
