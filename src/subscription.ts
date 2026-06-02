import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 976604399,
  name: '我的去广告规则',
  version: 1,
  author: 'zyg117',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/zyg117/my-gkd-rules',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
