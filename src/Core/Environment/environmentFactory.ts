import { RulesEditComponent } from 'src/app/components/rules-edit/rules-edit.component';

  export abstract class environmentFactory{

    periods: number;
    nsimulation: number;


   public getPeriods(){
       this.periods=this.periods;
   }

   public getnSimulation(){
       this.nsimulation=this.nsimulation;

   }

   public setPeriods(p: number){
       this.periods=p;
   }

   public setnSimulation(n: number){
       this.nsimulation=n;
   }

   

   abstract getVariation(): any;

   abstract getAction(): any;

   abstract getLectureProbability(): number;

   abstract getNetwork(): string;
   





}