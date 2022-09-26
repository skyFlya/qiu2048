export interface HttpUrlConfig {
    url: string
    requestData?
}
export class HttpUrl {

    /**测试 */
    static test: HttpUrlConfig = {
        url: '/game/composite/ad-award',
    }


    static test2: HttpUrlConfig = {
        url: `/game/composite/turntable-award`
    }

}


