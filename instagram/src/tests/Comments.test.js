import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';

import Comments from '../components/Comments/Comments';
import postData from '../application-data';

describe('Comment Section', () => {
    it('should render an input tag', () => {
        const component = shallow(<Comments />);
        expect(component.find('input').length).toBe(1);
    });

    it('calls componentDidMount', () => {
        sinon.spy(Comments.prototype, 'componentDidMount');
        const component = mount(<Comments comments={postData[0].comments} />);
        expect(Comments.prototype.componentDidMount.calledOnce).toEqual(true);
    });

    it('should store comments in state', () => {
        const component = shallow(<Comments />);
        expect(component.state('comments')).toBeDefined();
    });

    it('adds comments to state upon mounting', () => {
        const component = mount(<Comments comments={postData[1].comments} />);
        expect(component.state('comments')).toEqual(postData[1].comments);
    });
});