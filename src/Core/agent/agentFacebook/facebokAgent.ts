class facebookAgent extends agent{

    //lectura puede ser un numero determinado mayor que 1 menos la probabilidad de lectura
    //retweet puede ser un numero determinado mayor que 1 menos una influencia 
   protected participation: number;
    
    

   constructor(participation: number, state: string ,influence: number,){
    super(participation, state, influence);
       participation=participation;
      
   }

   createAction(): any{
       
    console.log('crear accion');

   }

   createRule(): any{

    

    console.log('crear regla');

   }


}

class facebook1 extends facebookAgent{
    characteristicone: string
    constructor( participation: number, state: string, influence: number,characteristicone: string, ){
        super(participation, state, influence);
        this.characteristicone=characteristicone;
        
    }
    
}

class facebook2 extends facebookAgent{
    characteristic: string
    constructor(characteristic: string, participation, state: string, followers: number, ){
        super(participation, state, followers,);
        this.characteristic=characteristic;
    }
}

class facebook3 extends facebookAgent{
        constructor(participation: number, state: string, influence: number,){
            super(participation, state, influence);
        
        }
    

}
