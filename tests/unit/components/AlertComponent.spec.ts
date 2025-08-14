import { describe, expect, test, vi } from 'vitest';
import AlertComponent from '@/components/shared/AlertsComponent.vue';
import { mount } from '@vue/test-utils';

//TODO: Voir si c'est pas mieux de mettre le fichier de test directement à côté du composant AlertComponent plutôt que dans un dossier dédié aux tests, si c'est le cas, penser à enlever tests/**/*.vue
//TODO: Vérifier s'il n'y a pas des packages que j'ai importé en trop dans package.json

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

    test('should remove oldest alert when limit is exceeded', async () => {
        const wrapper = mount(AlertComponent);
        for (let i = 1; i <= 6; i++) {
            wrapper.vm.addAlert('Alert ' + i);
        }
        await wrapper.vm.$nextTick();
        expect(wrapper.text()).not.toContain('Alert 1');
        expect(wrapper.text()).toContain('Alert 6');
    })

    test('should remove alert when durationOfAlert is over', async () => {
        vi.useFakeTimers();

        try {
            const wrapper = mount(AlertComponent);
            wrapper.vm.addAlert('Auto remove');
            await wrapper.vm.$nextTick();
            expect(wrapper.text()).toContain('Auto remove');

            vi.advanceTimersByTime(wrapper.vm.durationOfAlert);
            await wrapper.vm.$nextTick();
            expect(wrapper.text()).not.toContain('Auto remove');
        } finally {
            vi.clearAllTimers();
        }
    })
})