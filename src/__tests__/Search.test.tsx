import { shallow, ShallowWrapper } from 'enzyme';
import Search from '../Search';

let wrapper: ShallowWrapper;

const defaultProps = {
  handleSubmit: jest.fn(),
  handleChange: jest.fn(),
};

describe('<Search /> component', () => {
  beforeEach(() => {
    wrapper = shallow(<Search {...defaultProps} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should matches its snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
