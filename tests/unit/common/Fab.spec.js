import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Fab from '@/common/Fab.vue';

describe('Fab', () => {
  let wrapper;
  const mockIcon = 'add';

  beforeEach(() => {
    wrapper = shallowMount(Fab, {
      propsData: { iconName: mockIcon },
    });
  });

  it('renders icon when passed', () => {
    const expectedIcon = 'add';
    expect(wrapper.text()).to.include(expectedIcon);
  });
});
