import { Router, Request, Response } from 'express'
import request from 'request-promise'


class OAuthController{
    public router: Router = Router();
    
    constructor(){
        this.router.get('/', (req: Request, res: Response) => {
            res.send('Hello, World!');
        });

        this.router.post('/commands/snack', (req: Request, res: Response) => {
            console.log(req.body)
            let snack = req.body.text
            let requestor = req.body.user_id
            console.log(snack)
            console.log(requestor)
            request.post('http://47fffc9b.ngrok.io/snacks',{
                method: "POST",
                json: true,
                body: {
                    "name": snack,
                    "requestor": requestor
                }
            })
            .promise()
            .then(()=>res.send("Snack Saved!"))
        });

        this.router.get('/oauthredirect', (req: Request, res: Response) => {
            console.log(req.body)
            let { 
                client_id,
                client_secret,
                code
            } = req.body;

            console.log(client_id)
            console.log(client_secret)
            console.log(code)
        
            res.send(`Hello, ${name}!`);
        });
    }
}
export const OAuthRouter: Router = new OAuthController().router;