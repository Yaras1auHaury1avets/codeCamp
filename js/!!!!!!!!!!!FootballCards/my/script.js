

function longest(s1, s2) {
    // your code
    let obj = {};
    let arr = (s1+s2).split("");
    arr.sort((a.codePointAt(0), b.codePointAt(0)) => a.codePointAt(0)-b.codePointAt(0));
    return arr;
     return arr.reduce((str, a) => {
      if(a in obj) return str;
      obj[a] = 1;
      return str+a;
    }, "");
    
  }

  let s1 = "aretheyhere";
  let s2 =  "yestheyarehere";
  alert(longest(s1, s2));
  