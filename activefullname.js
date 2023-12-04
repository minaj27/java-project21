const names=[
    {fname: "Meera", lname: "Patel"},
    {fname: "Sumaira", lname: "Shaikh"},
    {fname: "Kabir", lname: "Khan"},
    {fname: "Sam", lname: "DSouza"},
    {fname: "Arbaz", lname: "Shaikh"}
    ];

    const result= names.map((item)=>({
        ...item,
        fullname : `${item.fname} ${item.lname}`,
        isActive:true
    }))
    console.log(result);
    
    