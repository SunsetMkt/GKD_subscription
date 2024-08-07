import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.genexcloud.speedtest',
  name: '花瓣测速',
  groups: [
    {
      key: 1,
      name: '更新提示',
      desc: '点击"以后再说"',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.huawei.genexcloud.speedtest:id/btn_cancle"]',
          exampleUrls:
            'https://m.gkd.li/57941037/03083d39-1d4c-4af7-8ba1-77201b2a87f2',
          snapshotUrls: 'https://i.gkd.li/i/14061490',
        },
      ],
    },
  ],
});
