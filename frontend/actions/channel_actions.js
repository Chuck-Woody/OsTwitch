export const ADD_CHANNEL = 'ADD_CHANNEL';
export const UPDATE_CHANNEL = 'UPDATE_CHANNEL'
export const RECEIVE_CHANNELS =`RECEIVE_CHANNELS`
import * as ChannelAPIUtil from '../util/channel_api_util'

export const addChannel = channel => ({
  type: ADD_CHANNEL,
  channel
})

export const updateChannel = channel => ({
  type: UPDATE_CHANNEL,
  channel
})

export const receiveChannels = (channels) => ({
  type: RECEIVE_CHANNELS,
  channels
})


export const fetchChannels = () => dispatch => {
  return ChannelAPIUtil.fetchChannels()
    .then(channels => dispatch(receiveChannels(channels)))
}