//3. Do the below programs in arrow functions

//a.Print odd numbers in an array

var odd=(e)=>
{
    var res="";
    for(var i=0;i<e.length-1;i++)
    {
        if(e[i]%2!=0)
        {
            res=res+e[i]+" ";
        }
    }
    res=res+e[e.length-1];
    return res;
}
console.log(odd([1,2,3,4,5]));



// b.Convert all the strings to title caps in a string array

var str=(string)=> {
    var res = string.toLowerCase().split(" ");
    for(var i = 0; i< res.length; i++){
       res[i] = res[i][0].toUpperCase() + res[i].slice(1);
    }
 res.join(" ");
 var result="";
 for(let i=0;i<res.length-1;i++)
 {
     result+=res[i]+" ";
 }
 result+=res[res.length-1]
 return result
 }
 console.log(str("hello world"));







// c.Sum of all numbers in an array

var sum=(arr)=>
{
    var num=0;
    for(var i=0;i<arr.length;i++)
    {
        num+=arr[i];

    }
    return num;
}
console.log(sum([1,2,4,5,6,7]));


// d.Return all the prime numbers in an array

var  prime=(arr)=>
{
    var  res="";
    for(var i=0;i<arr.length;i++)
    {
        var count=0;
        for(var j=1;j<=arr[i];j++)
        {
            if(arr[i]%j===0)
            {
                count++;
            }
        }
        if(count==2)
        {
            res+=arr[i]+" ";
        }
    }
    return res;
 
}
console.log(prime([1,2,3,4,5,6,7,8,9,11]));



// e.Return all the palindromes in an array

var palind=(a)=>
{
    var res="";
    var ans="";
    for(i=0;i<a.length;i++)
    {
        res+=a[i];
        var count=0
        
        for(j=0;j<res.length;j++)
        {
            if(res[j]===res[((res.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===res.length)
        {
            ans+=res+" "
        }
        res="";
    }
    return ans;
 
}
console.log(palind([33,71,643,20,498,20102]));
