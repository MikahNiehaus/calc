import checkPropTypes from 'check-prop-types';


export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-testid="${val}"]`);
} 

export const simulateClick = (wrapper, val) => {
    return wrapper.find(`[data-testid="${val}"]`).simulate('click');
}

export const doMath = (wrapper, val, check) => {
    let i = 0;
    while(val.length >i){
       wrapper.find(`[data-testid="${val[i]}"]`).simulate('click')
        i++;
    }
    const component = findByTestAttr(wrapper, 'num');
    expect(component.text()).toBe(check);
}
// export const checkProps = (component, confomingProps) => {
//     const propError = checkPropTypes(
//         component.propTypes,
//         confomingProps,
//         'prop',
//         component.name);
//         expect(propError).toBeUndefined();
    
// }