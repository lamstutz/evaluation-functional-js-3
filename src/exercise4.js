
const countSequence = (sequence, input) => {
  if (input) {
    return countSeq(sequence, input);
  } else {
    return (input) => {
      return countSeq(sequence, input);
    };
  }
};

const countSeq = (sequence, input) => {
  console.log(sequence.length);
  console.log(input.length);
  if (!sequence || !input || sequence.length === 0 || input.length === 0) {
    return 0;
  } else {
    return input.split(sequence).length - 1;
  }
};



module.exports = {
  title: "Exercise 4",
  run: countSequence
};
