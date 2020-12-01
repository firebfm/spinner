let spinnerArr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

const spinIt = function(str) {
  let delay = 0
  for (let item of str) {
    setTimeout(() => {
      process.stdout.write('\r' + item + '    ');
    }, delay);
    delay += 200;
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, delay); 
};

spinIt(spinnerArr);