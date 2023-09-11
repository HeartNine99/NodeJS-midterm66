module.exports = {

  //Api1 ข้อ x%2
  que1(req, res) {
    input = parseInt(JSON.stringify(req.body["input"]));
    console.log("input = " + input);
    output = input / 2;
    console.log("result = " + output);
    res.send(output.toString());
  },

  //Api2 ข้อ LCM
  que2 (req,res){
      x = parseInt(JSON.stringify(req.body['x']))
      y = parseInt(JSON.stringify(req.body['y']))
      console.log('x = '+ x)
      console.log('y = '+ y)

      for(i=x+y;i>0;i--)
      {
          if(y%i==0 && x%i==0){
              gcd=i;
              break;
          }
      }
      console.log('GCD = '+ gcd)
      mid=(x*y)
      if(mid<0){
          mid=mid*-1
      }
      lcm = mid/gcd
      res.send(lcm.toString())
  }
}
