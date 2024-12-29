import express, { NextFunction, Request, Response } from "express";

const router = express.Router();



//endpoints

router.post('/product', (req: Request, res: Response, next: NextFunction) => {
    console.log('creating product');
    res.status(201).json({message: 'product created'});
});




export default router;