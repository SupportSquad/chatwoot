import { shallowMount } from '@vue/test-utils';
import messageFormatterMixin from '../messageFormatterMixin';

describe('messageFormatterMixin', () => {
  it('returns correct plain text', () => {
    const Component = {
      render() {},
      mixins: [messageFormatterMixin],
    };
    const wrapper = shallowMount(Component);
    const message =
      '<b>Support Hub is an opensource tool. https://www.supportsquad.nl</b>';
    expect(wrapper.vm.getPlainText(message)).toMatch(
      'Support Hub is an opensource tool. https://www.supportsquad.nl'
    );
  });
});
