import * as turf from '@turf/turf';

class BallService {

    private longitude: number;
    private latitude: number;

    constructor() {
        this.longitude = 0;
        this.latitude = 0;
    }

    public async getRandomLocation(): Promise<number[]> {
        const Radius = 1 // always 1 kilometre
        const center = turf.point([this.longitude, this.latitude]);
        const randomDistance = Math.random() * Radius;
        const randomBearing = Math.random() * 360;
        const randomPoint = turf.destination(center, randomDistance, randomBearing, { units: 'kilometres' });          
        const [randomLongitude, randomLatitude] = randomPoint.geometry.coordinates;
        this.longitude = randomLongitude
        this.latitude = randomLatitude
        return [randomLongitude, randomLatitude];

  }

}

export default new BallService();