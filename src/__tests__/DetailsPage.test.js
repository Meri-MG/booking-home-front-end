import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/store';
import DetailsPage from '../Components/DetailsPage';

it('renders details page correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <DetailsPage />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
