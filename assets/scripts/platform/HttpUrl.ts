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


    static config: HttpUrlConfig = {            //获取配置接口
        url: `/game/compound-ball/config`,
    }

    static hecheng: HttpUrlConfig = {            //合成接口1、累积积分2、经验+1
        url: `/game/compound-ball/synthesis-of-the-ball`,
    }
    // {
    //     "ballNumber": 0
    // }


    static redAward: HttpUrlConfig = {            //红包奖励接口
        url: `/game/compound-ball/hongbao-award`,
    }

    static lottery: HttpUrlConfig = {            //抽奖接口（积分满足）
        url: `/game/compound-ball/lottery`,
    }

}


