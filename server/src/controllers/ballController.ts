import { Request, Response } from 'express';
import BallService from '../services/ballService';

class BallController {
  public async getRandomLocation(req: Request, res: Response): Promise<Response> {
    try {
      const location = await BallService.getRandomLocation();
      return res.json(location);
    } catch (error) {
        if (error instanceof Error) {
          return res.status(500).json({ error: error.message });
        } else {
          return res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
    
  }
}

export default new BallController();