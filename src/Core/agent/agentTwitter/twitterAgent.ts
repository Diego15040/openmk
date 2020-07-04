

export class twitterAgent extends agent{

  protected participation: number;
  protected seed: boolean;
  protected readProbability: number;
  protected shareProbability: number;
  protected retweetProbability: number;
  protected wear: number;
  protected followerArray: Array<agent>;

    
    //message
    //state readed-no readed ; retweeted-no retweteed?
//    estado como una clase aparte que esta con agente generico, el estado en el agente abstracto puede estar como un elemento,


constructor(influence: number, state: string, followers: number, participations: number,  readProbability: number){
       super(influence, state, followers);
       this.participation=participations;
       this.readProbability=readProbability;
   }

    createAction(): void{ //read and retweet
       
    if((this.readProbability)<Math.random() ){
        this.setState('read');

        if((this.shareProbability)>Math.random()){ //posible influencia??
            this.setState('retweeted');

        }


    }
/*  CODIGO DEL PROFE SOBRE MENSAJE INFLUENCIA, TOMAR EN CUENTA
    private void receiveMessage(double messageInfluence) {
        this.message = true;
        this.messageInfluence = messageInfluence;
    }
    */

    function addFollower(follow: agent): void{
         this.followerArray.push(follow);
    }
   

     
   }

   getState(): string{
       return this.state;

   }
   setState(state: string): void{
       this.state=state;
   }

   createRule(): any{

    console.log('crear regla'); //reglas como metodos a acciones con determinadas reglas??

   }

   isSeed(): boolean{
        this.seed=true;
       return this.seed;
   }

  

}


    export class hub extends twitterAgent{
        
    characteristicasone: string;
    constructor(influence: number,  state: string, followers: number, participation: number,  readprobability: number, characteristicones: string){
        super(influence, state, followers, participation, readprobability);
        this.characteristicasone=characteristicones;
    
        
        
        
    }

    hub( characteristicasone: string, followers: number, state:string, readProbability: number){
        this.characteristicasone=characteristicasone;
        this.followers=followers;
        this.readProbability=readProbability;
        this.state=state;
    
        
        
    
        
    }

   
    
}

 export class opinionleader extends twitterAgent{
    characteristic: string
    constructor(influence: number, state: string,  followers: number, characteristics: string, participation: number,  readProbability: number){
       super(influence, state, followers,participation, readProbability);
       this.characteristic=characteristics;
     
    }

   opinionleader( characteristicasone: string, state:string, followers:number, readProbability: number){
        this.characteristic=characteristicasone;
        this.state=state;
        this.followers=followers;
        this.readProbability=readProbability;
        
        
    
        
        
        
    
        
    }
}

 export class averageUser extends twitterAgent{
        constructor(influence: number, state: string,  followers: number, characteristics: string, participation: number,  readProbability: number){
            super(influence, state, followers,participation, readProbability);
        }

        averageUser(participation:  number, followers: number, state: string, readProbability: number){
            this.participation=participation;
            this.followers=followers;
            this.state=state;
            this.readProbability= readProbability;
            
         

        }
    

}