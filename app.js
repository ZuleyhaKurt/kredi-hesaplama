let taksit=0;
let faiz=0;
let faizOranı;
document.querySelector(".btn").addEventListener("click",()=>{
    document.querySelector(".table").style.display="block"
    let select=document.querySelector("#select").value
    document.querySelector("#tür").innerHTML= select
        if(select === "Konut Kredisi"){
            faizOranı=1.29
           }
           else if(select==='İhtiyaç Kredisi'){
            faizOranı = 1.99;
           }
            else if (select=== 'Araç Kredisi') {
            faizOranı = 1.79;
          }
    document.querySelector("#faiz").innerHTML= faizOranı
       
    const vade= document.querySelector("#vade1").value
    console.log(vade)
    document.querySelector("#vade").innerHTML= `${vade} ay`
       
    const  tutar= document.querySelector("#tutar1").value
    console.log(tutar)
    document.querySelector("#miktar").innerHTML= `${tutar} ₺`

    const taksit= (tutar*((faizOranı/100)*(1+faizOranı/100)**vade))/((1+faizOranı/100)**vade-1)
    console.log(taksit)
    document.querySelector("#taksit").innerHTML= `${Math.round(taksit)} ₺`

       const toplamTutar=taksit*vade
       document.querySelector("#tutar").innerHTML=`${Math.round(toplamTutar)} ₺`

})


