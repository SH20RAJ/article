// // lib/redis.js
// import Redis from 'ioredis';

// let redis;

// if (!redis) {
//   redis = new Redis(process.env.REDIS_URL);

//   redis.on('error', (err) => {
//     console.error('Redis connection error:', err);
//   });

//   redis.on('connect', () => {
//     console.log('Connected to Redis');
//   });
// }

// export default redis;
