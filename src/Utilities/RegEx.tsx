export class RegEx {

    // Basic regex func, <tag>*</tag> gives * as result
    static getMatch = (input: string, regex: string): string => {
        var s1: string = regex.substr(0, regex.search('\\*'));
        var s2: string = regex.substr(regex.search('\\*') + 1, regex.length);
        var r1 = input.substr(input.search(s1) + s1.length, input.search(s2) - s2.length);
        return r1
    }
}

export default RegEx;