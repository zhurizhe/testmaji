import { render, screen } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';

import App from './App';

jest.useFakeTimers()

test('renders learn react link', async () => {

const app= render(<App />);
//  jest.runAllTimers();

 jest.runTimersToTime(10000);
const dls =  app.container.innerHTML;
console.log(dls)
  
});
