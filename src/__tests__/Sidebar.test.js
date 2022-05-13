import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/store';
import Sidebar from '../Components/Sidebar';

it('renders sidebar correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Sidebar />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
