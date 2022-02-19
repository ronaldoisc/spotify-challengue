

export const getCurrentTime=()=>{
  const fecha=new Date();
 const  hora=fecha.getHours();

 if(hora >= 0 && hora < 12){
     return "Good Morning"
  }
 
  if(hora >= 12 && hora < 18){
    return "Good Afternoon";
  }
 
  if(hora >= 18 && hora < 24){
    return "Good Night";
  }
}