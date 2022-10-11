export interface HttpUrlConfig {
    url: string
    requestData?
}
export class HttpUrl {
    
    static getVersion: HttpUrlConfig = {            //获取用户数据版本-优先请求
        url: `/game/compound-ball/member-version`
    }

    static config: HttpUrlConfig = {            //获取配置接口
        url: `/game/compound-ball/config`,
    }

    static configIndex: HttpUrlConfig = {      //首页
        url: `/game/compound-ball/index`,
    }

    static hecheng: HttpUrlConfig = {            //合成接口1、累积积分2、经验+1
        url: `/game/compound-ball/synthesis-of-the-ball`,
    }

    static redAward: HttpUrlConfig = {            //红包奖励接口
        url: `/game/compound-ball/hongbao-award`,
    }

    static lottery: HttpUrlConfig = {            //抽奖接口（积分满足）
        url: `/game/compound-ball/lottery`,
    }

    static cashOutList: HttpUrlConfig = {            //提现列表
        url: `/v2/Withdraw/WithdrawList2`,
    }

    static cashOutMin: HttpUrlConfig = {             //用户当前最小提现额度
        url: `/v2/Withdraw/MinWithDrawData`,
    }


}


