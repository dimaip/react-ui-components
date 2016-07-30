import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';

import {DropDown} from './dropDown.js';

const defaultProps = {
    theme: {}
};

test('<DropDown/> should initially have a falsy "isOpen" state value.', t => {
    const dd = shallow(<DropDown {...defaultProps}/>);

    t.falsy(dd.state('isOpen'));
});
test('<DropDown/> should set the "isOpen" state value to opposite when calling the toggle method.', t => {
    const dd = shallow(<DropDown {...defaultProps}/>);

    dd.instance().toggle();

    t.truthy(dd.state('isOpen'));

    dd.instance().toggle();

    t.falsy(dd.state('isOpen'));
});
test('<DropDown/> should set the "isOpen" state value to false when calling the close method.', t => {
    const dd = shallow(<DropDown {...defaultProps}/>);

    dd.instance().close();

    t.falsy(dd.state('isOpen'));
});