module.exports = function check(str, bracketsConfig) {
  let l = bracketsConfig.length;
  let newstr = '';
  let arr = '';

  for (let i = 0; i < str.length; i++) {
      if ((str[i] === ')' && str[i + 1] === '(')
       ||(str[i] === ']' && str[i + 1] === '(')) {
          newstr += str[i];
          newstr += ' ';
      }
      else {
          newstr += str[i];
      }
  }

  if (newstr.includes(' ')) {
      arr = newstr.substring(' ');

      for (let i = 0; i < l; i++) {
          let el = bracketsConfig[i].join('');
          for (let i = 0; i < arr.length; i++) {
              if (el.includes(arr[i])) {
                  return true;
              }
          }
          return false;
      }
  }
  else {
      arr = newstr;
      for (let i = 0; i < l; i++) {
          let el = bracketsConfig[i].join('');
          if (el.includes(arr[i])) {
              return true;
          }
          return false;
      }
  }



}
