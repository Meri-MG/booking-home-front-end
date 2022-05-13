import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/store';
import LoginForm from '../Components/LoginForm';

it('renders login form page correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <LoginForm />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
