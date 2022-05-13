import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/store';
import Hero from '../Components/Hero';

it('renders main page correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Hero />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
