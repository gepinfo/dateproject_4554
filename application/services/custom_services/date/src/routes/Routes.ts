import { Request, Response, NextFunction } from "express";
import { datesentityController } from '../controller/datesentityController';


export class Routes {
    private datesentity: datesentityController = new datesentityController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/datesentity').post(this.datesentity.GpCreate);
app.route('/datesentity/userid/created_by').get(this.datesentity.GpGetNounCreatedBy);
     }

}