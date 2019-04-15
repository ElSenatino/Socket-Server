import { Router, Request, Response,  } from 'express';

export const router = Router();

router.get('/mensaje' , (req : Request , res: Response)=>{

    res.json({
        OK:true  , 
        mensaje:"funciona correctamente"
    })
});
router.post('/mensaje' , (req : Request , res: Response)=>{

    const cuerpo =req.body.cuerpo;

    res.json({
        OK:true  , 
        cuerpo
    })
});

router.post('/mensaje/:id' , (req : Request , res: Response)=>{

    const cuerpo =req.params.id;

    res.json({
        OK:true  , 
        cuerpo
    })
});