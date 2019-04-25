
export default class Batch {
    public static Get(batchapis: any) : Promise<any> {
        var length = batchapis.length;
        var result: any = [];
        return Batch.call(batchapis, 0, length, result)
                .then((resultData) => {
                        return resultData;
                });
    }

    public static call(batchapis: any, it: number, len: number, result: any) : Promise<any> {
        if(it == len) { return new Promise((res) => { return res(result) }) };
        return fetch(batchapis[it])
                .then((response: any) => {
                    return (response.body as ReadableStream).getReader().read()
                        .then((content) => {
                            result.push(String.fromCharCode.apply(null, content.value));
                            return Batch.call(batchapis, it+1, len, result)
                                .then((res) => {
                                    return result;
                                })
                        });
                });
    }
}