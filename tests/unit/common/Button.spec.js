import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Button from '@/common/Button.vue';

describe('Button', () => {
  let wrapper;
  const mockButtonText = 'some text';

  beforeEach(() => {
    wrapper = shallowMount(Button, {
      propsData: { buttonText: mockButtonText },
    });
  });

  it('renders text when passed', () => {
    const expectedText = mockButtonText;
    expect(wrapper.text()).to.include(expectedText);
  });

  xit('emit button-clicked event when click the component', () => {
    const button = wrapper.find('.button-custom-styles');
    console.log(wrapper);
    button.trigger('click');
    // expect(wrapper.emitted('button-clicked')).to
  });
});
