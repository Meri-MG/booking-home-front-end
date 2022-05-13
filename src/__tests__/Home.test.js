import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/store';
import Home from '../Components/Home';

it('renders home page correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
