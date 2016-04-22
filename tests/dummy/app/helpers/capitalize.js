import Ember from 'ember';

const {
  Helper: { helper },
  String: { capitalize: _capitalize },
  isBlank
} = Ember;

export function capitalize([str]) {
  str = isBlank(str) ? '' : str;
  return _capitalize(str);
}

export default helper(capitalize);
