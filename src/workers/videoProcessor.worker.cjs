// videoProcessor.worker.cjs
const { Queue, Worker } = require("bullmq");
const IORedis = require("ioredis");

const connection = new IORedis(process.env.REDIS_URL);

const videoQueue = new Queue("videoQueue", { connection });

const worker = new Worker(
  "videoQueue",
  async (job) => {
    console.log("Processing job:", job.id, job.data);
    // Deep Agent + FFmpeg + OpenAI dipanggil di sini
  },
  { connection }
);

module.exports = { videoQueue };
