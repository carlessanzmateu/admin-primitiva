import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import ListCard from '@/common/ListCard.vue';

describe('ListCard', () => {
  let wrapper;
  const infoMock = {
    title: 'Some Title',
    subtitle: 'Some Subtitle',
    description: 'Some Description',
  };

  beforeEach(() => {
    wrapper = shallowMount(ListCard, {
      propsData: { info: infoMock },
    });
  });

  it('renders props title when passed', () => {
    const expectedTitle = 'Some Title';
    expect(wrapper.text()).to.include(expectedTitle);
  });

  it('renders props subtitle when passed', () => {
    const expectedSubtitle = 'Some Subtitle';
    expect(wrapper.text()).to.include(expectedSubtitle);
  });

  it('renders props description when passed', () => {
    const expectedDescription = 'Some Description';
    expect(wrapper.text()).to.include(expectedDescription);
  });
});
