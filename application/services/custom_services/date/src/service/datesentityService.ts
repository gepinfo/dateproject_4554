import { Request, Response } from 'express';
import {datesentityDao} from '../dao/datesentityDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let datesentity = new datesentityDao();

export class datesentityService {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into datesentityService.ts: GpCreate')
     let  datesentityData = req.body;
     datesentity.GpCreate(datesentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from datesentityService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into datesentityService.ts: GpGetNounCreatedBy')
     let  datesentityData = { created_by: req.query.createdby };
     datesentity.GpGetNounCreatedBy(datesentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from datesentityService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}