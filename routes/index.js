const express = require('express');
const { start } = require('repl')
const router = express.Router();
const data = require('../data');
const arr = [1, 3, "Test", 0, "", -1, null, undefined, "Hello World", "hello", "workd", 54, false, true, "-0", "null"];




//-------------------- object--------------

router.get('/data', (req,res,next)=>{
    return res.status(200).json({
        sucess:true,
        data:data,
        message: 'response from server'
    })
})
// console.log(data)
router.get('/obj/string', (req,res,next)=>{
    let strObj = Object.values(data);
    let result = strObj.filter(x=> typeof(x)==="string")
  
    return res.status(200).json({
        sucess:true,
        data:result,
        message: 'response from server'
    })
})

router.get('/obj/number', (req,res,next)=>{
    let numObj = Object.values(data);
    console.log(numObj.filter(x => typeof(x)==="number"));

    return res.status(200).json({
        sucess: true,
        data:numObj,
        message:"response from server"
    })
})

router.get('/obj/start1', (req,res,next)=>{
    let str1 = Object.keys(data)
    // console.log(str1);
    let result ={}
    str1.forEach(elem=>{
        if(elem.startsWith('1')){
            result[elem]= data[elem]
        }
    })
    // console.log(result)

    return res.status(200).json({
        success:true,
        data:result,
        message:"response from server"
    })

})

router.get("/obj/start2", (req, res, next) =>{
    const start2 = Object.keys(data);
     const result = {};
     start2.forEach(elem =>{
        if(elem.startsWith('2')){

            result[elem]=data[elem]
        }
     });
     console.log(result)

     return res.status(200).json({
        success:true,
        data:result,
        message:"response from server"
     })
});

router.get("/obj/low", (req,res,next)=>{
    const lowVal = Object.entries(data).filter(x => x.includes("LOW"));
    console.log(lowVal);

    return res.status(200).json({
        success:true,
        data: lowVal,
        message:"response from the server"
        
    })
    
})

router.get("/obj/nan", (req,res,next)=>{
    const nanValue = Object.values(data).filter(x=> isNaN(x));
    console.log(nanValue)

    return res.status(200).json({
        success:true,
        data: nanValue,
        message:"respnse from the server"
    })
})




//--------------------------- array -------------
router.get("/arr", (req,res,next)=>{
    res.status(200).json({
        sucess:true,
        data:arr,
        message:"Response from server"
    })
});

router.get("/arr/num", (req,res,next)=>{
    const numArr = arr.filter(x=> typeof(x)=="number");
    console.log(numArr);
    
    return res.status(200).json({
        sucess:true,
        data:numArr,
        message:"Response from the server"
    })
})


router.get("/arr/str", (req,res,next)=>{
    const arrStr = arr.filter(x => typeof(x)==="string");
    console.log(arrStr);

   return  res.status(200).json({
        success:true,
        data:arrStr,
        message:"response from server"
    })
})


router.get("/arr/falsy", (req,res,next)=>{
    const falseVal = arr.filter(x => Boolean(x)===false)
    console.log(falseVal);

    res.status(200).json({
        success:true,
        data:falseVal,
        message:"response from server"
    })
});


router.get("/arr/nan", (req,res,next)=>{
    const nanVal = arr.filter(x => isNaN(x));
    console.log(nanVal);

    return res.status(200).json({
        success: true,
        data: nanVal,
        message: "response from server"
    })
});




module.exports = router;