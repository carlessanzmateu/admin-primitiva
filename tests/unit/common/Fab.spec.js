import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Fab from '@/common/Fab.vue';

describe('ListCard', () => {
  let wrapper;
  const mockIcon = 'add';

  beforeEach(() => {
    wrapper = shallowMount(Fab, {
      propsData: { iconName: mockIcon },
    });
  });

  it('renders icon when passed', () => {
    const expectedIcon = 'add';
    console.log(wrapper.text())
    expect(wrapper.text()).to.include(expectedIcon);
  });
});
