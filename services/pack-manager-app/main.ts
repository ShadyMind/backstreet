import { redisConnect } from '../deps.ts';

const redisClient = await redisConnect({
    hostname: 'service-mq',
    port: 6379,
    tls: false,
    db: 1,
    password: '123',
    name: 'woolha-app',
    maxRetryCount: 10,
    retryInterval: 100000,
});
console.log(await redisClient.ping());

export { redisClient };