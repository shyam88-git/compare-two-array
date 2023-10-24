function compareTwoArray(arr1,arr2){

    if(arr1.length!==arr2.length){

        return false;
    }

    let isSame=arr1.every((currElement)=>{

        if(arr2.indexOf(currElement)>-1){

            return (currElement=arr2[arr2.indexOf(currElement)]);
        }
    });
    if(isSame){

        console.log("Both array are equal");
    }

    else{

        console.log("Both array are not equal");
    }


}
compareTwoArray([5,6,4,2,3,8] ,[8,4,5,3,2,6]);