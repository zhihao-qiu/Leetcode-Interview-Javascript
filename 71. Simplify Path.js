var simplifyPath = function(path) {
  let returnVal = '';
  path = path.replace(/\/+/g, '/');

  if (path.length > 1 && path[path.length - 1] === '/') path = path.substring(0, path.length - 1);

  const pathArr = path.split('/');
  let i = pathArr.length - 1;
  let skipNum = 0;
  while (i > 0) {
    if (pathArr[i] === '..') {
      skipNum++;
    } else if (pathArr[i] !== '.') {
      if (skipNum) {
        skipNum--;
      } else {
        if (returnVal === '') {
          returnVal = `/${pathArr[i]}`;
        } else {
          returnVal = `/${pathArr[i]}${returnVal}`;
        }

      }
    }
    i--;
  }

  if (!returnVal.length) returnVal = '/';
  return returnVal;
};

