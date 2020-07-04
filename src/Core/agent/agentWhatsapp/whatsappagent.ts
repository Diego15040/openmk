class whatsappAgent extends agent{
    protected noc: boolean
    

   constructor(noc: boolean, influence: number, state: string, followers: number){
       noc=noc;
       super(influence, state,followers);
   }

   createAction(): any{
       
    console.log('crear accion');

   }

   createRule(): any{

    console.log('crear regla');

   }


}

class whatsapp1 extends whatsappAgent{
    whatsapp: string
    constructor(  noc: boolean, influence: number, state:string,followers: number, whatsapp: string,){
        super( noc,influence, state,followers );
        this.whatsapp=whatsapp;
        
    }
    
}

