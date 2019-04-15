//gotten values
function getHistory() {
  return document.getElementById('history-value').innerText;
}
//print input value
function printHistory(num) {
  document.getElementById('history-value').innerText = num;
}
//get input value
function getOutput() {
  return document.getElementById('output-value').innerText;
}
//check value and ..
function printOutput(num) {
  if(num ===''){
    document.getElementById('output-value').innerText = num;
  }else{
    document.getElementById('output-value').innerText = getFormattedNumber(num);
  }
}
//convert
function getFormattedNumber(num) {
  if(num ==='-'){
    return '';
  }
  return  Number(num).toLocaleString('en');
}
//cut ',' and string to num
function reverseNumberFormat(num) {
  return Number(num.replace(/,/g,''));
}

//addEvent '+' '-' '/' ....
let operator = document.getElementsByClassName('operator');
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', function(){
    if(this.id ==='clear'){
      printHistory('');
      printOutput('0');
    }
    else if(this.id ==='backspace'){
      let output = reverseNumberFormat(getOutput()).toString();
      if(output) {//has a value
        output = output.substr(0,output.length-1);
        printOutput(output);
      }
    }
    else{
      let output = getOutput();
      let history = getHistory();
      if(output==='' && history !== ''){
        if(isNaN(history[history.length - 1])){
          history = history.substr(0,history.length - 1);
        }
      }
      if(output!=='' || history !== ''){
        output = output ==='' ? output : reverseNumberFormat(output);
        history = history + output;
         if(this.id ==='='){
           let result = eval(history);
           printOutput(result);
           printHistory('');
         }
         else{
           history = history + this.id;
           printHistory(history);
           printOutput('');
         }
      }
    }
  });
}

//Enter numbers
const number = document.getElementsByClassName('number');
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener('click', function(){
    let output = reverseNumberFormat(getOutput());
    if(!isNaN(output)){
      output = output + this.id;
      printOutput(output);
    }
  })
}