import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { BrowserRouter } from 'react-router-dom';
import RoauterView from '@/router/index.tsx';
import './index.css';
import '@/utils/mock/index';
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <RoauterView />
    </BrowserRouter>
  </Provider>,
  // </React.StrictMode>,
);
