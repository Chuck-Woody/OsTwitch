export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
import * as MessageApiUtil from '../util/message_api_util'

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
})

export const createMessage = message => dispatch => {
  return MessageApiUtil.createMessage(message)
    .then((response) => {
      // console.log(`this is the response from the server ${JSON.stringify(response)}`)
      dispatch(receiveMessage(response))
      }
      )
  ;
};

