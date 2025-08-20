import { describe, expect, test, vi } from 'vitest';
import CssIDEComponent from '@/components/shared/CssIDEComponent.vue';
import { mount } from '@vue/test-utils';

describe('CssIDEComponent', () => {

    test('should render correct number of lines', () => {
        const wrapper = mount(CssIDEComponent, {
            props: { lines: 5 }
        });

        expect(wrapper.findAll('[data-testid="line"]').length).toBe(5);
    });

    test('should focus input when container is clicked', async () => {
        const wrapper = mount(CssIDEComponent, {
            props: { isSelectorMode: true }
        });

        const input = wrapper.find('[data-testid="code-input"]');
        const spy = vi.spyOn(input.element as HTMLInputElement, 'focus');
        
        await wrapper.find('[data-testid="code-container"]').trigger('click');

        expect(spy).toHaveBeenCalled();
    });

    test('should emit codeChanged when Enter is pressed', async () => {
        const wrapper = mount(CssIDEComponent, {
            props: { isSelectorMode: true }
        });

        const input = wrapper.find('[data-testid="code-input"]');
        await input.setValue('HelloCSS');
        await input.trigger('keydown', { key: 'Enter' });

        expect(wrapper.emitted('codeChanged')).toBeTruthy();
        expect(wrapper.emitted('codeChanged')![0]).toEqual(['hellocss']);
    });

    test('should show selector input in selector mode', () => {
        const wrapper = mount(CssIDEComponent, {
            props: { isSelectorMode: true }
        });
        
        const propertyMod = wrapper.find('[data-testid="selector-mod"]');
        const input = wrapper.find('[data-testid="code-input"]');

        expect(propertyMod.element.contains(input.element)).toBe(true);
    });

    test('should show property input when not in selector mode', () => {
        const wrapper = mount(CssIDEComponent, {
            props: { cssProperty: 'color', cssSelector: '.test', isSelectorMode: false }
        });

        const propertyMod = wrapper.find('[data-testid="property-mod"]');
        const input = wrapper.find('[data-testid="code-input"]');

        expect(propertyMod.element.contains(input.element)).toBe(true);
    });

    test('should reset code when resetCode is called', async () => {
        const wrapper = mount(CssIDEComponent, { props: { isSelectorMode: true } });
        
        const input = wrapper.find('[data-testid="code-input"]');
        await input.setValue('red');
        expect(wrapper.vm.code).toBe('red');
        wrapper.vm.resetCode();
        expect(wrapper.vm.code).toBe('');
    });

    test('should vibrate during 300ms when vibrate is called', async () => {
        vi.useFakeTimers();

        const wrapper = mount(CssIDEComponent);
        expect(wrapper.vm.isVibrating).toBe(false);

        wrapper.vm.vibrate();
        expect(wrapper.vm.isVibrating).toBe(true);

        vi.advanceTimersByTime(300);
        expect(wrapper.vm.isVibrating).toBe(false);

        vi.clearAllTimers();
    });
});