import { Worker } from 'worker_threads'

const runWorker = (workerData) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', { workerData });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    })
  })
}

const run = async () => {
  const result = await runWorker('This is a worker test')
  console.log(result);
}

run().catch(err => console.error(err))