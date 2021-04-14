function Person(sexe, acharge,bonus, allocation,salairebrut){
    this.sexe=sexe;
    this.allocation=allocation;
    this.acharge=acharge;
    this.bonus=bonus;
    this.salairebrut=salairebrut;
    this.Salaire=function Salaire(){
        let taxes=((0.18+0.07+0.05)*this.salairebrut);
        if (this.sexe==="F"){
            taxes-=0.02*salairebrut;
        }
        
        switch(this.acharge){
            case 3:
                taxes-=0.01*salairebrut;
                break;
            case 4:
                taxes-=0.02*salairebrut;
                break;
            default:
        }
        let salaire=this.salairebrut-taxes;
        if (this.bonus==="on"){
            salaire+=100;
        }
        if (this.allocation==="on"){
            salaire+=150;
        }
        return salaire;
    }
}

var grossSalary=document.getElementById("grossSalary").value;
var additionBonus=document.getElementById("additionBonus").value;
var gender=document.getElementById("gender").value;
var additionAllowance=document.getElementById("additionAllowance").value;
var dependents=document.getElementById("dependents").value;



let person1=new Person(gender,dependents,additionBonus,additionAllowance,grossSalary);
document.forms[0].elements["Salaire net"] = person1.Salaire();*/
/*console.log(person1);
console.log("Salaire net : "+person1.Salaire());*/

/*let person2=new Person("Simon",27,"f",4,100, 45000);
console.log(person2);
console.log("Salaire net : "+person2.Salaire());