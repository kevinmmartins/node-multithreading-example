import { workerData, parentPort } from 'worker_threads'

parentPort.postMessage({ 'Running inside worker': workerData })