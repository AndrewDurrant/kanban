import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './styles/index.css';
import { Root } from './routes/root';
import ErrorPage from './error-page';
import { Board } from './routes/board';
import { Boards } from './routes/boards';
import Index from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, element: <Index /> 
      },
      {
        path: 'boards',
        element: <Boards />
      },
      {
        path: 'boards/:boardId',
        element: <Board />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
