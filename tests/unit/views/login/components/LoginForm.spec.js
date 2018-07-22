import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import LoginForm from '@/views/login/components/LoginForm.vue';

describe('LoginForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(LoginForm, {
      mocks: {
        $validator: {
          validate: () => true
        }
      }
    });
  });

  xit('should emit sign in event on valid user and password', () => {
    const validUser = 'test@test.com';
    const validPassword = 'validPassword';

    wrapper.setData({
      userValue: validUser,
      passwordValue: validPassword,
    });

    wrapper.vm.signIn();
    expect(wrapper.emitted('sign-in')).to.be.ok;
  });
});
