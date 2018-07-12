import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Card from '@/common/Card.vue';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Card, {
      slots: {
        default: '<div class="fake-slot-content"></div>',
      },
    });
  });

  xit('should have slot', () => {
    const renderedSlot = wrapper.find('.fake-slot-content');
    console.log(renderedSlot);
    expect(renderedSlot).to.not.be.undefined();
  });
});
