function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++){
    let difference = target - array[i];
    for(let j = i + 1; j < array.length; j++){
      console.log(array[j], difference);
      if(array[j] === difference){
        return true;
      }
      else if (array.length === 1){
        console.log(array, target);
        return false;
      }
    }
  }
  return false;
}


/* 
  O(n*2)
*/

/* 
  We need to loop through the array initially and then loop once again so we can compare the numbers in our array
  we then need to add them and compare them to our target
  if it equals to our target, it will return true
  otherwise, if there is only one number in our array or it doesn't equal to our target, it will return false
  *we need to be careful with our returns (the false might override arrays that should be returning true)*
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
