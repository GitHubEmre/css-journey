import { describe, expect, test, vi } from 'vitest';
import AlertComponent from '@/components/shared/AlertsComponent.vue';
import { mount } from '@vue/test-utils';

describe('AlertComponent', () => {

    test('should show no alert when initialized', () => {
        const wrapper = mount(AlertComponent);
        expect(wrapper.text()).toBe('');
    })

    test('should show alert message when addAlert is called', async () => {
        const wrapper = mount(AlertComponent);
        wrapper.vm.addAlert('Hello world');
        await wrapper.vm.$nextTick();
        expect(wrapper.text()).toContain('Hello world');
    })

    test('should remove oldest alert when limit of 5 is exceeded', async () => {
        const wrapper = mount(AlertComponent);
        for (let i = 1; i <= 6; i++) {
            wrapper.vm.addAlert('Alert ' + i);
        }
        await wrapper.vm.$nextTick();
        expect(wrapper.text()).not.toContain('Alert 1');
        expect(wrapper.text()).toContain('Alert 6');
    })

    test('should remove alert after 3 seconds', async () => {
        vi.useFakeTimers();

        try {
            const wrapper = mount(AlertComponent);
            wrapper.vm.addAlert('Hello world');
            await wrapper.vm.$nextTick();
            expect(wrapper.text()).toContain('Hello world');

            vi.advanceTimersByTime(3000);
            await wrapper.vm.$nextTick();
            expect(wrapper.text()).not.toContain('Hello world');
        } finally {
            vi.clearAllTimers();
        }
    })

    test('should not remove alert before 3 seconds', async () => {
        vi.useFakeTimers();

        try {
            const wrapper = mount(AlertComponent);
            wrapper.vm.addAlert('Hello world');

            vi.advanceTimersByTime(2999);
            await wrapper.vm.$nextTick();
            expect(wrapper.text()).toContain('Hello world');
        } finally {
            vi.clearAllTimers();
        }
    })
})