const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCase(string) {
  string = string.split(' ');
  for (var i = 0; i < string.length; i++) {
    string[i]= string[i].charAt(0).toUpperCase() + string[i].slice(1);
  }
  string = string.join(' ');
  return string
}

const titleCased = () => {
  let title = tutorials.map(titleCase)
  return title
}
