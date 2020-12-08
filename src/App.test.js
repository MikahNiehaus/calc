 import { findByTestAttr} from './test/testUtils';
 import App from './App';



import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { shallow, mount, render } from 'enzyme';

const defaultProps = { success: false };

 configure({ adapter: new Adapter() });

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<App {...setupProps}/>);
}

test('renders App without error', () => {
const wrapper = setup();
const component = findByTestAttr(wrapper, 'component-app');
expect(component.length).toBe(1);
});