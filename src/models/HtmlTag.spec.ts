import { describe, expect, test } from 'vitest';
import { HtmlTag } from '@/models/HtmlTag';

describe('HtmlTag', () => {

    // --- Constructor ---

    test('should throw error if input is not a valid html tag', () => {
        expect(() => new HtmlTag("div")).toThrow("This is not an HTML tag.");
        expect(() => new HtmlTag("<div")).toThrow("This is not an HTML tag.");
        expect(() => new HtmlTag("div>")).toThrow("This is not an HTML tag.");
    });

    test('should initialize properties correctly for opening tag', () => {
        const tag = new HtmlTag("<div>");
        expect(tag.htmlTagRaw).toBe("<div>");
        expect(tag.indentationLevel).toBe(0);
        expect(tag.isOpeningTag).toBe(true);
        expect(tag.isSelfClosingTag).toBe(false);
    });

    test('should initialize properties correctly for closing tag', () => {
        const tag = new HtmlTag("</div>");
        expect(tag.htmlTagRaw).toBe("</div>");
        expect(tag.indentationLevel).toBe(0);
        expect(tag.isOpeningTag).toBe(false);
        expect(tag.isSelfClosingTag).toBe(false);
    });

    test('should initialize properties correctly for self-closing tag', () => {
        const tag = new HtmlTag("<br />");
        expect(tag.htmlTagRaw).toBe("<br />");
        expect(tag.indentationLevel).toBe(0);
        expect(tag.isOpeningTag).toBe(true);
        expect(tag.isSelfClosingTag).toBe(true);
    });

    test('should add whitespace in self closing tag when initialized', () => {
        const tag = new HtmlTag("<br/>");
        expect(tag.htmlTagRaw).toBe("<br />");
    });

    // --- Colorization in light mode ---

    test('should colorize a simple opening tag in light mode', () => {
        localStorage.setItem("isDarkMode", "false");
        const tag = new HtmlTag('<div>');
        expect(tag.colorize()).toBe('<span class="text-brown">&lt;</span><span class="text-brown">div</span><span class="text-brown">&gt;</span>');
    });

    test('should colorize a tag with multiple attributes in light mode', () => {
        const tag = new HtmlTag('<img src="img.png" alt="test" />');
        expect(tag.colorize()).toBe('<span class="text-brown">&lt;</span><span class="text-brown">img </span><span class="text-red-dark">src</span><span class="text-black">=</span><span class="text-blue-darker">"img.png"</span><span class="text-red-dark"> alt</span><span class="text-black">=</span><span class="text-blue-darker">"test"</span><span class="text-brown"> /&gt;</span>');
    });

    test('should colorize a closing tag correctly', () => {
        const tag = new HtmlTag("</div>");
        expect(tag.colorize()).toBe('<span class="text-brown">&lt;/</span><span class="text-brown">div</span><span class="text-brown">&gt;</span>');
    });

    test('should colorize a self-closing tag correctly', () => {
        const tag = new HtmlTag('<br />');
        expect(tag.colorize()).toBe('<span class="text-brown">&lt;</span><span class="text-brown">br</span><span class="text-brown"> /&gt;</span>');
    });

    // --- Colorization in dark mode ---

    test('should colorize a simple opening tag in dark mode', () => {
        localStorage.setItem("isDarkMode", "true");
        const tag = new HtmlTag("<div>");
        expect(tag.colorize()).toBe('<span class="text-gray-light">&lt;</span><span class="text-blue-dark">div</span><span class="text-gray-light">&gt;</span>');
    });

    test('should colorize a tag with multiple attributes in dark mode', () => {
        const tag = new HtmlTag('<img src="img.png" alt="test" />');
        expect(tag.colorize()).toBe('<span class="text-gray-light">&lt;</span><span class="text-blue-dark">img </span><span class="text-blue-light">src</span><span class="text-white-real">=</span><span class="text-orange-dark">"img.png"</span><span class="text-blue-light"> alt</span><span class="text-white-real">=</span><span class="text-orange-dark">"test"</span><span class="text-gray-light"> /&gt;</span>');
    });
});