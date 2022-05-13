import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/store';
import DeleteApartment from '../Components/DeleteApartment';

it('renders delete apartments page correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <DeleteApartment />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
