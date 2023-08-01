import * as mongoose from 'mongoose';
import { datesentitySchema } from './models/daomodels/datesentity';

const datesentityModel = mongoose.model('datesentity', datesentitySchema);

export class Seed {

    constructor() {

    }

    

}
