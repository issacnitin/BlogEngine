
export default class Batch {
    public static Get(batchapis: any) : Promise<any> {
        var length = batchapis.length;
        return Batch.call(batchapis, 0, length)
                .then((resultData) => {
                        return resultData;
                });
    }

    public static call(batchapis: any, it: number, len: number) : Promise<any> {
        var result: any = [];
        if(it == len) { return new Promise((res) => { return res(result) }) };
        return fetch(batchapis[it])
                .then((response: any) => {
                    return (response.body as ReadableStream).getReader().read()
                        .then((content) => {
                            result.push(String.fromCharCode.apply(null, content.value));
                            return Batch.call(batchapis, it+1, len)
                                .then((res) => {
                                    result.push(res);
                                    return result;
                                })
                        });
                });
    }
}