 import { findByTestAttr, simulateClick, doMath} from '../test/testUtils';
 import Calc from './Calc';
import Adapter from 'enzyme-adapter-react-16';

import { shallow, mount, render,configure } from 'enzyme';

const defaultProps = { success: false };

 configure({ adapter: new Adapter() });

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<Calc {...setupProps}/>);
}

test('renders Calc without error', () => {
const wrapper = setup();
const component = findByTestAttr(wrapper, 'component-calc');
expect(component.length).toBe(1);
});

test('all number buttons', () => {
    const wrapper = setup();
    let i = 0;
    while (i<10){
    simulateClick(wrapper,`${i}`)
    i++;
    }
    simulateClick(wrapper,'0')
    const component = findByTestAttr(wrapper, 'num');
    expect(component.text()).toBe("1234567890");
    });
    test('test Math', () => {
        const wrapper = setup();
        doMath(wrapper,['AC','1','+','1','='],'2');
        doMath(wrapper,['AC','9','9','.','9','+','1','='],'100.9');
        doMath(wrapper,['AC','1','+','1', '+/-','='],'0');
        doMath(wrapper,['AC','1','-','2','='],'-1');
        doMath(wrapper,['AC','1','/','2','='],'0.5');
        doMath(wrapper,['AC','5','%','3','='],'2');
        doMath(wrapper,['AC','8','x','2','='],'16');
        doMath(wrapper,['AC','0','1','1','.','9','2','x','2','='],'23.84');
       
        });
    