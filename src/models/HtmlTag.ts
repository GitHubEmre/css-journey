import { IHtmlTag } from './IHtmlTag';

export class HtmlTag implements IHtmlTag {
    readonly htmlTagRaw: string;
    indentationLevel: number;
    isOpeningTag: boolean;
    isSelfClosingTag: boolean;

    constructor(htmlTagRaw: string) {
        if (htmlTagRaw.length < 3 || htmlTagRaw[0] !== '<' || htmlTagRaw[htmlTagRaw.length - 1] !== '>') {
            throw new Error("This is not an HTML tag.");
        }
        this.htmlTagRaw = htmlTagRaw;
        this.indentationLevel = 0;
        this.isOpeningTag = htmlTagRaw[1] !== "/";
        this.isSelfClosingTag = htmlTagRaw.length > 3 && htmlTagRaw[htmlTagRaw.length - 2] === "/";
    }

    private getColorizedSpan(content: string, color: string): string {
        return '<span class="text-' + color + '">' + content + '</span>';
    }

    public colorize(): string {
        const propertiesCount = this.htmlTagRaw.split("=").length - 1;

        let colorizedHtmlTag = this.getColorizedSpan("&lt;" + (this.isOpeningTag ? '' : '/'), "gray-light"); // write < or </ in colorized html
        let htmlTagRawCopy = this.htmlTagRaw.slice(this.isOpeningTag ? 1 : 2); // erase < or </ in raw html
        
        let splittedHtmlTagRaw = htmlTagRawCopy.split(this.isOpeningTag ? " " : '>');
        colorizedHtmlTag += this.getColorizedSpan(splittedHtmlTagRaw[0] + (this.isOpeningTag ? ' ' : ''), "blue"); // write tag name in colorized html
        htmlTagRawCopy = splittedHtmlTagRaw.slice(1).join(' '); // erase tag name in raw html

        for(let i = 0; i < propertiesCount; i++) {
            splittedHtmlTagRaw = htmlTagRawCopy.split("=");
            colorizedHtmlTag += this.getColorizedSpan(splittedHtmlTagRaw[0] ?? '', "blue-light"); // write propertyName in colorized html
            colorizedHtmlTag += this.getColorizedSpan('=', "white"); // write = in colorized html
            htmlTagRawCopy = splittedHtmlTagRaw.slice(1).join('=').slice(1); // erase propertyName= in raw html

            splittedHtmlTagRaw = htmlTagRawCopy.split('"');
            colorizedHtmlTag += this.getColorizedSpan('"' + splittedHtmlTagRaw[0] + '"', "orange"); // write "propertyValue" in colorized html
            htmlTagRawCopy = splittedHtmlTagRaw.slice(1).join('"'); // erase "propertyName" in raw html
        }
        
        console.log(colorizedHtmlTag);
        return colorizedHtmlTag += this.getColorizedSpan(this.isSelfClosingTag ? ' /&gt;' : '&gt;', "gray-light"); // write > or  /> in colorized html
    }
}