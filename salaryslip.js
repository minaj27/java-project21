const arr=[10000,20000,15000,25000,40000,12000];

const result = arr.map((item)=>{
    const Basic= item;
    const HRA= 0.2*Basic;
    const DA = 0.1*Basic;
    const CA = 0.15*Basic;
    const PF = 0.12*Basic;

    const Grosssal = Basic+HRA+DA+CA-PF;

    const objsal = {
        Basic,HRA,DA,CA,PF,Grosssal
    }
    return objsal;
})

console.log(result);
