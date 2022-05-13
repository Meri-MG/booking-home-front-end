import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/store';
import MyReservations from '../Components/MyReservations';

it('renders add apartments page correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <MyReservations />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
