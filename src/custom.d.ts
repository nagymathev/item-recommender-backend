declare namespace Express {
    export interface Request {
        ctx?: {
            models: {
                Camera: ModelCtor<Model<any, any>>;
            }
        }
    }
}