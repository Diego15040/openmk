abstract class agent{

   protected influence:number;
   protected state: string;
   protected followers: number;
 // followers : agent [];
   

    constructor( influence: number, state: string, followers: number){
        this.influence=influence;
        this.state=state;
        this.followers=followers;
    }


    abstract createAction(): any;
    abstract createRule(): any;


    
}