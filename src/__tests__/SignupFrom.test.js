import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/store';
import SignupFrom from '../Components/SignupFrom';

it('renders sign up form correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <SignupFrom />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
