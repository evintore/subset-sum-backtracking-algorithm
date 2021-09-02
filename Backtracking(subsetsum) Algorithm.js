const targetNumber = 10
const numberArray = []

for(i = 1; i <= targetNumber; i++)
	numberArray.push(i);

function findTotalArray(x){
  let result = []
  function subset_sum(numberArray, targetNumber, subset) {
      let subsetSum, n, remaining

      subset = subset || [] // If subset is defined, pass itself, otherwise pass empty array
      subsetSum = subset.reduce( (sum, item) => sum + item, 0)	// subset sum calculated

      if (subsetSum > targetNumber) return null // if the subset sum is greater than the target number

      if (subsetSum === targetNumber) // if the subset sum is equal to the target number
          result.push(subset)

      for (let i = 0; i < numberArray.length; i++) {
          n = numberArray[i]
          remaining = numberArray.slice(i + 1)	// delete leading elements on numberArray
          subset_sum(remaining, targetNumber, subset.concat([n]))	// added operation on numberArray to subset
      }

      return result
  }
  
  const res = subset_sum(numberArray, x)
  
  
  console.log('findTotalArray(' + x + ')')
  let out = "\n"
  for(let i=0; i < res.length; i++)
  {
  	for(let j=0; j < res[i].length; j++){
  		if(j === res[i].length - 1)
      	out += res[i][j]
      else
      	out += res[i][j] + ' + '
    }
    out += '\n'
  }  
  console.log(out)
}


findTotalArray(targetNumber)