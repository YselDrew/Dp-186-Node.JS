// // const lines = ['|', '\\', '-', '/']
// const loadingArr  = ['-', '-', '-', '-', '-', '-']
//
// function spinner(obj) {
//   //console.log(lines[obj.counter])
//   console.clear();
//   if (obj.counter > lines.length - 1) {
//     obj.counter = 0;
//   }
//   console.log(lines[obj.counter]);
//   obj.counter = obj.counter + 1;
// }
//
// // setInterval(spinner, 250, {counter: 0})


function loading() {
  console.clear();
  loadingArr.splice(0, 0, '@');
  loadingArr.pop();

  if (loadingArr[loadingArr.length - 1] === '@') {
    console.log('Loaded')
    clearInterval(load)
  }

  console.log(loadingArr);
}

const load = setInterval(loading, 500, {counter: 0})

