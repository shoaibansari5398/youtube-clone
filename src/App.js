
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import { Provider } from 'react-redux';
import store from './utils/store';
import Main from './Components/Main';
import WatchPage from './Components/WatchPage';


const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Body />,
		children: [
			{
				path: "/",
				element:<Main/>
			},
			{
				path: "watch",
				element: <WatchPage/>
			},
		// 	{
		// 		path: "demo",
		// 		element: (
		// 			<>
		// 				<Demo />
		// 				<Demo2 />
		// 			</>
		// 		),
		// 	},
		],
	},
]);

function App() {
  return (
		<Provider store={store}>
			<div>
				<Head />
				<RouterProvider router={appRouter} />
			</div>
		</Provider>
	);
}

export default App;
