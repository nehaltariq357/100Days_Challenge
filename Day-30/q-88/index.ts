// This program calculates the average of all scores given
const averageScore = (...scores: number[]) => {
   // Adds all scores together and divides by the number of scores
  let total = scores.reduce((sum, score) => sum + score);
  return total / scores.length;
};
// Example: finding the average of four scores
console.log(averageScore(90, 70, 80, 85, 75, 88));

// Shows the average score
// We add up all the scores, then divide by how many there are.
