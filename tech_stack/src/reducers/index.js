import { combineReducers } from 'redux';
import libraries from './LibraryReducer';
import selectedLibraryId from './SelectionReducer';

export default combineReducers({
  libraries,
  selectedLibraryId
});