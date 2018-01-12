import React from 'react';
import { shallow } from 'enzyme';

import Post from '../components/Post/Post';
import postData from '../application-data';

describe('Post', () => {
    it('should render two image tags', () => {
        const component = shallow(<Post key={'2'} postData={postData[0]} />);
        expect(component.find('img').length).toBe(2);
    });
});