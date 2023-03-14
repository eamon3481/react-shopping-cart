import { setupWorker } from 'msw';

import { handlers } from './handlers';

const setupMSW = () => {
  const worker = setupWorker(...handlers);
  if (process.env.NODE_ENV === 'development') {
    worker.start();
  }
};

export default setupMSW;
