import uniqid from 'uniqid';

// filter status constants
export const FILTERSTATUS_ALL = 'all';
export const FILTERSTATUS_ACTIVE = 'active';
export const FILTERSTATUS_COMPLETED = 'completed';

// header text
export const HEADER_TEXT = 'todo list';
// input placeholder
export const INPUT_PLACEHOLDER = 'What needs to be done?';
// button texts
export const BUTTON_FILTER_ALL = 'All';
export const BUTTON_FILTER_ACTIVE = 'Active';
export const BUTTON_FILTER_COMPLETED = 'Completed';
export const BUTTON_FILTER_CLEARALL = 'Clear completed';

// ids
export const EDIT_INPUT_ID = 'editInput';

// keyCodes
export const SUMBIT_KEYCODE = 13;

// localStorage names
export const LSNAME_TODO = 'toDo';
export const LSNAME_FILTER = 'filterToDo';

// initial states
export const INITIAL_PRESET_FILTER = {
  currentStatus: 'all'
}

export const INITIAL_PRESET_TODO = [{
  id: uniqid(),
  isDone: false,
  isDisplay: true,
  isEditing: false,
  value: 'initial ToDo'
}]


