declare namespace Express {
    export interface Request {
        ctx?: {
            models: {
                Camera: ModelCtor<Model<any, any>>;
                CameraType: ModelCtor<Model<any, any>>;
                OutfitType: ModelCtor<Model<any, any>>;
            }
        }
    }
}