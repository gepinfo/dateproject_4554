import * as mongoose from 'mongoose';
import datesentityModel from '../models/daomodels/datesentity';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class datesentityDao {
    private datesentity = datesentityModel;
    constructor() { }
    
    public async GpCreate(datesentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into datesentityDao.ts: GpCreate');

    let temp = new datesentityModel(datesentityData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from datesentityDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(datesentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into datesentityDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.datesentity.aggregate(([
                        { $match: { $and: [{ created_by: datesentityData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from datesentityDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}