//1.Do the below programs in anonymous function & IIFE

// a.Print odd numbers in an array

//Anonymous Function

var odd=function(e)
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


//IIFE Function

(function(e)
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
    console.log(res);
})([1,2,3,4,5]);

// b.Convert all the strings to title caps in a string array

//Anonymous Function

var str=function (string) {
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

//IIFE Function

(function (string) {
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
 console.log(result);
 }) ("hello world");

// c.Sum of all numbers in an array

// Anonymous Function

var sum=function(arr)
{
    var num=0;
    for(var i=0;i<arr.length;i++)
    {
        num+=arr[i];

    }
    return num;
}
console.log(sum([1,2,4,5,6,7]));

//IIFE Function

(function(arr)
{
    var num=0;
    for(var i=0;i<arr.length;i++)
    {
        num+=arr[i];

    }
    console.log(num);
})
([1,2,4,5,6,7]);

// d.Return all the prime numbers in an array

//Anonymous Function

var  prime=function(arr){
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
console.log(prime([1,2,3,4,5,6,7,8,9,11]))

//IIFE Functions

(function(arr){
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
    console.log(res);
 
})
([1,2,3,4,5,6,7,8,9,11]);

// e.Return all the palindromes in an array

//Anonymous Function

var palind=function(a){
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
console.log(palind([33,71,643,20,498,20102]))

//IIFE
(function(a){
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
    console.log(ans);
 
}) ([33,71,643,20,498,20102]);


// f.Return median of two sorted arrays of same size

//Anonymous Function

var arr=function(a,b){
    var c=[];
    var n=a.length;
    var p=b.length;
    var i=0;
    var j=0;
    var med=0;
    while(i<n && j<p)
    {
        if(a[i]<b[j])
        {
            c.push(a[i])
            i++
        }
        else
        {
            c.push(b[j])
            j++
        }
    }
    
     if(i<n)
     {
         for(let k=i;k<n;k++)
         {
             c.push(a[k])
         }
     }
     else if(j<p)
     {
         for(let m=j;m<p;m++)
         {
             c.push(b[m])
         }
     }
     if(c.length%2===0)
     {
         med=(c[(c.length/2)-1]+c[c.length/2])/2
     }
     else
     {
         med=c[Math.floor(c.length/2)]
     }
     return med;
    
}
console.log(arr([1,2,3,7],[4,5,6,8]));

//IIFE Function

(function(a,b){
    var c=[];
    var n=a.length;
    var p=b.length;
    var i=0;
    var j=0;
    var med=0;
    while(i<n && j<p)
    {
        if(a[i]<b[j])
        {
            c.push(a[i])
            i++
        }
        else
        {
            c.push(b[j])
            j++
        }
    }
    
     if(i<n)
     {
         for(let k=i;k<n;k++)
         {
             c.push(a[k])
         }
     }
     else if(j<p)
     {
         for(let m=j;m<p;m++)
         {
             c.push(b[m])
         }
     }
     if(c.length%2===0)
     {
         med=(c[(c.length/2)-1]+c[c.length/2])/2
     }
     else
     {
         med=c[Math.floor(c.length/2)]
     }
     console.log(med);
    
}) ([1,2,3,7],[4,5,6,8]);

// g.Remove duplicates from an array

//Anonymous Function

var arr=function(a){
    var b=[];
    var n=a.length;
    for(let i=0;i<n-1;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            if(a[i]===a[j])
            {
                delete a[j]
            }
        }
    }
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%10===Math.floor(a[i]%10))
        {
            b.push(a[i])
        }
    }
    let c=""
    for(let i=0;i<b.length-1;i++)
     {
         c+=b[i]+" ";
    }
    c+=b[b.length-1];
     return c;
    
}
console.log(arr([1,1,2,1,2,3,3,3,4,3,3,3,3,2,2,2]));

// IIFE Function

(function(a){
    var b=[];
    var n=a.length;
    for(let i=0;i<n-1;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            if(a[i]===a[j])
            {
                delete a[j]
            }
        }
    }
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%10===Math.floor(a[i]%10))
        {
            b.push(a[i])
        }
    }
    let c=""
    for(let i=0;i<b.length-1;i++)
     {
         c+=b[i]+" ";
    }
    c+=b[b.length-1];
     console.log(c);
    
})([1,1,2,1,2,3,3,3,4,3,3,3,3,2,2,2]);

// h.Rotate an array by k times

// Anonymous Function

var rotate=function(a,k){
    n=a.length;
 c=[];
  d="";
  for(i=0;i<n;i++)
  {
      c[(i+k)%(n)]=a[i]
  }
  for(i=0;i<c.length-1;i++)
  {
      d+=c[i]+" "
  }
  d+=c[c.length-1]
  return d;
}
console.log(rotate([1,2,3,4,5],2))

// IIFE Function

(function(a,k){
    n=a.length;
 c=[];
  d="";
  for(i=0;i<n;i++)
  {
      c[(i+k)%(n)]=a[i]
  }
  for(i=0;i<c.length-1;i++)
  {
      d+=c[i]+" "
  }
  d+=c[c.length-1]
  console.log(d);
}) ([1,2,3,4,5],3);

