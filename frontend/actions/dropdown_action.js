

export const OPEN_DROPDOWN = 'OPEN_DROPDOWN'
export const CLOSE_ALL_DROPDOWNS = 'CLOSE_ALL_DROPDOWNS'

export const openDropDown = (payload) => ({
  type: OPEN_DROPDOWN,
  payload
})

export const closeAllDropDowns = () => ({
  type: CLOSE_ALL_DROPDOWNS,
})