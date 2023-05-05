function divisible_by_11(my_list) {
    let myResult = 0;
    for (let i = 0; i < my_list.length; i++) {
      myResult = myResult + ((my_list[i] % 11 === 0) ? 1 : 0);
    }
    return myResult;
  }
  
  const myList = [0, 11, 22, 33, 44, 55];
  const result = divisible_by_11(myList);
  console.log(result); // Output: 3
  