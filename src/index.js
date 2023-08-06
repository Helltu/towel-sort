
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = '';
  if(matrix==null) return res.split('');
  if(matrix.length==0) return matrix;
  for(let i=0; i< matrix.length; i++){
    if((i+1)%2==1) res+=matrix[i]+',';
    else res+=matrix[i].reverse() +',';
  }
  return res.slice(0,-1).split(',');
}
