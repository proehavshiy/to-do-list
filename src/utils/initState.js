// constants
import {
  LSNAME_TODO, LSNAME_FILTER,
  INITIAL_PRESET_FILTER, INITIAL_PRESET_TODO
} from "../constants/constants";
// utils
import { manageLocalStorage } from "./manageLocalStorage";

function initState(type) {
  if (
    (!type || typeof type !== 'string') && (type !== LSNAME_TODO && type !== LSNAME_FILTER)
  ) throw new Error(`unset required parameter: string type of state ${LSNAME_TODO} or ${LSNAME_FILTER}`)

  // choose suitable preset
  let statePreset;
  switch (type) {
    case LSNAME_TODO:
      statePreset = INITIAL_PRESET_TODO
      break
    case LSNAME_FILTER:
      statePreset = INITIAL_PRESET_FILTER
      break
    default:
      statePreset = null
  }

  // firstly check localStorage
  // if false set default initial preset
  let result;
  manageLocalStorage(type, 'get')
    ? result = manageLocalStorage(type, 'get')
    : result = statePreset
  return result
}

export { initState }