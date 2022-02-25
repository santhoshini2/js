function requiredRunRate (target, maxOvers, currentScore, oversBowled) {
return (target - currentScore) / (maxOvers - oversBowled);
}
 console.log(requiredRunRate(200,20,150,14));
 console.log(requiredRunRate(215,20,117,12));

