import { setupWorker } from 'msw';

import { handlers } from './handlers';

const setupMSW = () => {
  const worker = setupWorker(...handlers);
  worker.start();
};

export default setupMSW;
