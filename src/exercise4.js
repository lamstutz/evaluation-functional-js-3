
const countSequence = (sequence, input) => {
  if (input !== undefined) {
    return countSeq(sequence, input);
  } else {
    return (input) => {
      return countSeq(sequence, input);
    };
  }
};

const countSeq = (sequence, input) => {
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
