 
var start_getal = 0;
var current_error = 0;
var gate_1 = 0;
var gate_2 = 0;
var valve_1 = 0;
var valve_2 = 0;
var light_1 = 0;
var light_2 = 0;
var water = 0;
var boat = 0;
var startCommand = 0; 
setInterval(Status, 1);




    function gate1() { 
    if(gate_1 == 0 && water !== 1) {
    alert("please raise the water first");
    
    }else if (gate_1 == 0 ) {

        gate_1 = 1;



    } else if(light_1 == 1 && gate_1 == 1){
    
        alert("please turn off the light");

    }else{
        gate_1 = 0;

    }}


    function gate2() { 
    if (water !== 0) {

        alert("please lower the water");

    }else if (gate_2 == 0 ) {

        gate_2 = 1;



    }
    else if(gate_2 == 1 && light_2 == 0){
        gate_2 = 0;

    } else if(gate_2 == 1 && light_2 == 1) {
        alert("please turn off the light");
    }
}



    function valve1(){

        if (valve_1 == 0 && valve_2 == 0 ) {
            valve_1 = 1;
            water = 1

        } else if (valve_1 == 1 && valve_2 == 0) {
            valve_1 = 0;
        }else if( valve_1 == 0 && valve_2 == 1) {
            water = 3;
            valve_1 = 1;          
        }else if(valve_1 == 1 && valve_2 == 1){

            valve_1 = 0;
            water = 0;
        }
    
    }

    function valve2(){
        if (valve_2 == 0 && valve_1 == 0) {

            valve_2 = 1;
            water = 0;


        } else  if (valve_2 == 1 && valve_1 == 0){
            valve_2 = 0;

        }else if(valve_2 == 0 && valve_1 == 1){
            water = 3;
            valve_2 = 1;

        }else if(valve_2 == 1 && valve_1 == 1){
            water = 1;
            valve_2 = 0;

        }
        
    
    }


    function light1(){
        if(light_1==0 && gate_1 == 1){
            light_1=1;
    }else if(light_1==1){
             light_1=0;

    }else if(light_1 == 0 && gate_1 == 0){
        alert("please open the gate first")    
    }
}

function light2(){
    if(light_2==0 && gate_2 == 1){
        light_2=1;
}else if(light_2==1){
         light_2=0;

}else if(light_2 == 0 && gate_2 == 0){
    alert( "Please open the gate first")    

}}








 
  function Status() {



    if ( gate_1 == 0) {
 
 
        document.getElementById("gate_1").style.bottom = "0%";  
     
    } 
    
    else if (  gate_1 == 1) {

        document.getElementById("gate_1").style.bottom = "90%";   

    }
    if(gate_2 == 0) {

        document.getElementById("gate_2").style.bottom = "0%"; 

    }else if(gate_2 == 1){

        document.getElementById("gate_2").style.bottom = "90%"; 

    }

        if ( water == 0 && gate_1 == 0 && gate_2 == 0) {
     

            document.getElementById("water").style.paddingTop = "3%";
        }else if(water == 1 && gate_1 == 0 && gate_2 == 0) {

        document.getElementById("water").style.paddingTop = "17%";

        }else if(water == 3 && gate_1 == 0 && gate_2 == 0){
   
            document.getElementById("water").style.paddingTop = "8%";
        }else{

        }
    
    
        if(light_1 == 0){

  
            document.getElementById("light_1").style.backgroundColor = "#555054";
        }else{
          
            document.getElementById("light_1").style.backgroundColor = "yellow"; 
        }

        if(light_2 == 0){

 
            document.getElementById("light_2").style.backgroundColor = "#555054";
        }else{
  
            document.getElementById("light_2").style.backgroundColor = "yellow"; 
        }
    
        
        if(light_1== 1 && boat == 0 && water == 1){
 
            boat = 1;
            document.getElementById("boatPart_1").style.left = "43%";
        }


        if(boat == 1 && water == 1 && gate_1 == gate_2){
 
            document.getElementById("boatPart_1").style.bottom = "34%";

        }

        if(boat == 1 && water == 3 &&  gate_1 == gate_2){
 
            document.getElementById("boatPart_1").style.bottom = "15%";
        }

        if(boat == 1 && water == 0 && gate_1 == gate_2){
 
            document.getElementById("boatPart_1").style.bottom = "5%";

        }

        if(boat == 1 && light_2 == 1 && water == 0){

        document.getElementById("boatPart_1").style.left = "80%";         

        }}