import {environmentFactory} from '../environmentFactory';

class facebook extends environmentFactory{



    getAction(): any{
        console.log('action');
    }

    getLectureProbability(): any{
        console.log('lecture');
    }

    getVariation(): any{
        console.log('variation');
    }

    getNetwork(): any{
        console.log('network');
    }


}