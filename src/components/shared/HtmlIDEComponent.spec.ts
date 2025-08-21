import { describe, expect, test, vi } from 'vitest';
import HtmlIDEComponent from '@/components/shared/HtmlIDEComponent.vue';
import { mount } from '@vue/test-utils';
import { HtmlTag } from '@/models/HtmlTag';

describe('HtmlIDEComponent', () => {

    test('should render 12 lines by default when initialized', () => {
        const wrapper = mount(HtmlIDEComponent, {
            props: { htmlTags: [] }
        });

        expect(wrapper.findAll('[data-testid="line"]').length).toBe(12);
    });

    test('should render correct number of lines', () => {
        const wrapper = mount(HtmlIDEComponent, {
            props: {
                htmlTags: [
                    new HtmlTag("<div>"),
                    new HtmlTag("</div>")
                ],
                lines: 5
            }
        });

        expect(wrapper.findAll('[data-testid="line"]').length).toBe(5);
    });

    test('should colorize each HtmlTag when initialized', () => {
        const tags = [
            new HtmlTag("<div>"),
            new HtmlTag("</div>")
        ];

        // mock for component isolation
        tags[0].colorize = vi.fn(() => '<span class="fake">&lt;div&gt;</span>');
        tags[1].colorize = vi.fn(() => '<span class="fake">&lt;/div&gt;</span>');

        const wrapper = mount(HtmlIDEComponent, { props: { htmlTags: tags } });

        const htmlTags = wrapper.findAll('[data-testid="html-tag"]');
        expect(htmlTags).toHaveLength(2);
        expect(htmlTags[0].html()).toContain('<span class="fake">&lt;div&gt;</span>');
        expect(htmlTags[1].html()).toContain('<span class="fake">&lt;/div&gt;</span>');
    });

    test('should set correct indentations', async () => {
        const wrapper = mount(HtmlIDEComponent, { props: { htmlTags: [] } });
        await wrapper.setProps({ // Indentations are calculated in a watcher on htmlTags
            htmlTags: [
                new HtmlTag("<div>"),
                new HtmlTag("<img />"),
                new HtmlTag("</div>"),
            ]
        });

        const tags = wrapper.vm.htmlTags;
        expect(tags[0].indentationLevel).toBe(0);
        expect(tags[1].indentationLevel).toBe(1);
        expect(tags[2].indentationLevel).toBe(0);
    });

});