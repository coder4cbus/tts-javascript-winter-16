function outer(){
	var a = "this is a string";
	var b = {
		nativeType: "object"
	}

  function inner(paramA, paramB) {
  	paramA = "you";
  	paramB = "me";
  	paramB.nativeType = "string cheese";
  	console.log(paramA, paramB);
  }

  inner(a, b);
  console.log(a, b);
}

outer();