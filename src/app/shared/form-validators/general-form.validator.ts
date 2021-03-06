import { FormControl } from '@angular/forms';

export function customRequiredValidator(control: FormControl): {[s: string]: boolean} {
  const val: string = control.value;
  // not checking if the value is falsey
  if (val && val['name'] && val['display']) {
    return null;
  } else if (val && val['id'] && val['display']) {
    return null;
  }
  return {"fieldRequired": true};
}

export function customOnlyLettersValidator(control: FormControl): {[s: string]: boolean} {
  const letters: RegExp = /^[A-Za-z ]+$/;
  if (control.value && control.value.trim().match(letters)) {
    return null;
  }
  return {"lettersOnly": true};
}

export function numbersOnlyValidator(control: FormControl): {[s: string]: boolean} {
  const nums: RegExp = /^\d+$/;
  if (control.value && control.value.trim().match(nums)) {
    return null;
  }
  return {"numbersOnly": true};
}


export function customOnlyNumbersAndDecimalsValidator(control: FormControl): {[s: string]: boolean} {
  //const num: RegExp = /^[0-9]+([,.][0-9]+)?$/;
  const num: RegExp = /^[0-9]+([.][0-9]+)?$/;
  // convert to string first
  const val = control.value + "";
  if (control.value && val.match(num)) {
    return null;
  }
  return {"decimalAndNumbersOnly": true};
}

/**
 * Regex for allowing alphanumeric,-,_ and space
 * @param control
 */
export function alphaNumericValidator(control: FormControl): {[s: string]: boolean} {
  const alphaNumeric: RegExp = /^[a-z\d\-_\s]+$/i;
  // convert to string first
  const val = (control.value + "").trim();
  if (control.value && val.match(alphaNumeric)) {
    return null;
  }
  return {"alphanumericOnly": true};
}
