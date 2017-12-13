/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Block, { BlockProps, GutterSize, TextSize } from '.';

describe('<Block />', () => {
  let component: ShallowWrapper<BlockProps, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<Block>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<Block className="TEST_CLASSNAME">block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with xLarge text size', () => {
    beforeEach(() => {
      component = shallow(<Block textSize={TextSize.XLARGE}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with textAlign', () => {
    describe('right', () => {
      beforeEach(() => {
        component = shallow(<Block textAlign="right">block content</Block>);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('center', () => {
      beforeEach(() => {
        component = shallow(<Block textAlign="center">block content</Block>);
      });

      it('includes the aligned center className', () => {
        expect(component.hasClass('y-block__textAlign-center')).toBe(true);
      });
    });
  });

  describe('with ellipsis', () => {
    beforeEach(() => {
      component = shallow(<Block ellipsis={true}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with spacing', () => {
    beforeEach(() => {
      component = shallow(<Block bottomSpacing={GutterSize.XLARGE}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with padding', () => {
    beforeEach(() => {
      component = shallow(<Block padding={GutterSize.SMALL}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with positive push', () => {
    beforeEach(() => {
      component = shallow(<Block push={3}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with negative push', () => {
    beforeEach(() => {
      component = shallow(<Block push={-2}>block content</Block>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
