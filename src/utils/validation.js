export function validateFirstLast(str = '') {
  return str.split(' ').length > 1;
}

export function validatePhoneNumber(num) {
  const re = /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/;
  return re.test(num);
}

export function validateEmailAddress(email = '') {
  const re = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;
  return re.test(email);
}

