import { Request, Response } from 'express';
import { datesentityService } from '../service/datesentityService';
import { CustomLogger } from '../config/Logger'
let datesentity = new datesentityService();

export class datesentityController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    datesentity.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into datesentityController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from datesentityController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    datesentity.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into datesentityController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from datesentityController.ts: GpGetNounCreatedBy');
    })}


}