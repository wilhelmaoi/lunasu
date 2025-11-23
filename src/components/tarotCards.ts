// 塔罗牌数据配置
export interface TarotCardData {
  id: string;
  name: string;
  imagePath: any; // require() 返回的类型
  category: 'MajorArcana' | 'Cups' | 'Pentacles' | 'Swords' | 'Wands';
}

// 大阿卡纳 (Major Arcana)
const majorArcana: TarotCardData[] = [
  { id: '0', name: '愚者', imagePath: require('../image/BilibiliTarot/MajorArcana/0-愚者.png'), category: 'MajorArcana' },
  { id: '1', name: '魔术师', imagePath: require('../image/BilibiliTarot/MajorArcana/01-魔术师.png'), category: 'MajorArcana' },
  { id: '2', name: '女祭司', imagePath: require('../image/BilibiliTarot/MajorArcana/02-女祭司.png'), category: 'MajorArcana' },
  { id: '3', name: '女皇', imagePath: require('../image/BilibiliTarot/MajorArcana/03-女皇.png'), category: 'MajorArcana' },
  { id: '4', name: '皇帝', imagePath: require('../image/BilibiliTarot/MajorArcana/04-皇帝.png'), category: 'MajorArcana' },
  { id: '5', name: '教皇', imagePath: require('../image/BilibiliTarot/MajorArcana/05-教皇.png'), category: 'MajorArcana' },
  { id: '6', name: '恋人', imagePath: require('../image/BilibiliTarot/MajorArcana/06-恋人.png'), category: 'MajorArcana' },
  { id: '7', name: '战车', imagePath: require('../image/BilibiliTarot/MajorArcana/07-战车.png'), category: 'MajorArcana' },
  { id: '8', name: '力量', imagePath: require('../image/BilibiliTarot/MajorArcana/08-力量.png'), category: 'MajorArcana' },
  { id: '9', name: '隐士', imagePath: require('../image/BilibiliTarot/MajorArcana/09-隐士.png'), category: 'MajorArcana' },
  { id: '10', name: '命运之轮', imagePath: require('../image/BilibiliTarot/MajorArcana/10-命运之轮.png'), category: 'MajorArcana' },
  { id: '11', name: '正义', imagePath: require('../image/BilibiliTarot/MajorArcana/11-正义.png'), category: 'MajorArcana' },
  { id: '12', name: '倒吊人', imagePath: require('../image/BilibiliTarot/MajorArcana/12-倒吊人.png'), category: 'MajorArcana' },
  { id: '13', name: '死神', imagePath: require('../image/BilibiliTarot/MajorArcana/13-死神.png'), category: 'MajorArcana' },
  { id: '14', name: '节制', imagePath: require('../image/BilibiliTarot/MajorArcana/14-节制.png'), category: 'MajorArcana' },
  { id: '15', name: '恶魔', imagePath: require('../image/BilibiliTarot/MajorArcana/15-恶魔.png'), category: 'MajorArcana' },
  { id: '16', name: '高塔', imagePath: require('../image/BilibiliTarot/MajorArcana/16-高塔.png'), category: 'MajorArcana' },
  { id: '17', name: '星星', imagePath: require('../image/BilibiliTarot/MajorArcana/17-星星.png'), category: 'MajorArcana' },
  { id: '18', name: '月亮', imagePath: require('../image/BilibiliTarot/MajorArcana/18-月亮.png'), category: 'MajorArcana' },
  { id: '19', name: '太阳', imagePath: require('../image/BilibiliTarot/MajorArcana/19-太阳.png'), category: 'MajorArcana' },
  { id: '20', name: '审判', imagePath: require('../image/BilibiliTarot/MajorArcana/20-审判.png'), category: 'MajorArcana' },
  { id: '21', name: '世界', imagePath: require('../image/BilibiliTarot/MajorArcana/21-世界.png'), category: 'MajorArcana' },
];

// 圣杯 (Cups)
const cups: TarotCardData[] = [
  { id: 'cups-01', name: '圣杯-01', imagePath: require('../image/BilibiliTarot/Cups/圣杯-01.png'), category: 'Cups' },
  { id: 'cups-02', name: '圣杯-02', imagePath: require('../image/BilibiliTarot/Cups/圣杯-02.png'), category: 'Cups' },
  { id: 'cups-03', name: '圣杯-03', imagePath: require('../image/BilibiliTarot/Cups/圣杯-03.png'), category: 'Cups' },
  { id: 'cups-04', name: '圣杯-04', imagePath: require('../image/BilibiliTarot/Cups/圣杯-04.png'), category: 'Cups' },
  { id: 'cups-05', name: '圣杯-05', imagePath: require('../image/BilibiliTarot/Cups/圣杯-05.png'), category: 'Cups' },
  { id: 'cups-06', name: '圣杯-06', imagePath: require('../image/BilibiliTarot/Cups/圣杯-06.png'), category: 'Cups' },
  { id: 'cups-07', name: '圣杯-07', imagePath: require('../image/BilibiliTarot/Cups/圣杯-07.png'), category: 'Cups' },
  { id: 'cups-08', name: '圣杯-08', imagePath: require('../image/BilibiliTarot/Cups/圣杯-08.png'), category: 'Cups' },
  { id: 'cups-09', name: '圣杯-09', imagePath: require('../image/BilibiliTarot/Cups/圣杯-09.png'), category: 'Cups' },
  { id: 'cups-10', name: '圣杯-10', imagePath: require('../image/BilibiliTarot/Cups/圣杯-10.png'), category: 'Cups' },
  { id: 'cups-page', name: '圣杯侍从', imagePath: require('../image/BilibiliTarot/Cups/圣杯侍从.png'), category: 'Cups' },
  { id: 'cups-knight', name: '圣杯骑士', imagePath: require('../image/BilibiliTarot/Cups/圣杯骑士.png'), category: 'Cups' },
  { id: 'cups-queen', name: '圣杯王后', imagePath: require('../image/BilibiliTarot/Cups/圣杯王后.png'), category: 'Cups' },
  { id: 'cups-king', name: '圣杯国王', imagePath: require('../image/BilibiliTarot/Cups/圣杯国王.png'), category: 'Cups' },
];

// 星币 (Pentacles)
const pentacles: TarotCardData[] = [
  { id: 'pentacles-01', name: '星币-01', imagePath: require('../image/BilibiliTarot/Pentacles/星币-01.png'), category: 'Pentacles' },
  { id: 'pentacles-02', name: '星币-02', imagePath: require('../image/BilibiliTarot/Pentacles/星币-02.png'), category: 'Pentacles' },
  { id: 'pentacles-03', name: '星币-03', imagePath: require('../image/BilibiliTarot/Pentacles/星币-03.png'), category: 'Pentacles' },
  { id: 'pentacles-04', name: '星币-04', imagePath: require('../image/BilibiliTarot/Pentacles/星币-04.png'), category: 'Pentacles' },
  { id: 'pentacles-05', name: '星币-05', imagePath: require('../image/BilibiliTarot/Pentacles/星币-05.png'), category: 'Pentacles' },
  { id: 'pentacles-06', name: '星币-06', imagePath: require('../image/BilibiliTarot/Pentacles/星币-06.png'), category: 'Pentacles' },
  { id: 'pentacles-07', name: '星币-07', imagePath: require('../image/BilibiliTarot/Pentacles/星币-07.png'), category: 'Pentacles' },
  { id: 'pentacles-08', name: '星币-08', imagePath: require('../image/BilibiliTarot/Pentacles/星币-08.png'), category: 'Pentacles' },
  { id: 'pentacles-09', name: '星币-09', imagePath: require('../image/BilibiliTarot/Pentacles/星币-09.png'), category: 'Pentacles' },
  { id: 'pentacles-10', name: '星币-10', imagePath: require('../image/BilibiliTarot/Pentacles/星币-10.png'), category: 'Pentacles' },
  { id: 'pentacles-page', name: '星币侍从', imagePath: require('../image/BilibiliTarot/Pentacles/星币侍从.png'), category: 'Pentacles' },
  { id: 'pentacles-knight', name: '星币骑士', imagePath: require('../image/BilibiliTarot/Pentacles/星币骑士.png'), category: 'Pentacles' },
  { id: 'pentacles-queen', name: '星币王后', imagePath: require('../image/BilibiliTarot/Pentacles/星币王后.png'), category: 'Pentacles' },
  { id: 'pentacles-king', name: '星币国王', imagePath: require('../image/BilibiliTarot/Pentacles/星币国王.png'), category: 'Pentacles' },
];

// 宝剑 (Swords)
const swords: TarotCardData[] = [
  { id: 'swords-01', name: '宝剑-01', imagePath: require('../image/BilibiliTarot/Swords/宝剑-01.png'), category: 'Swords' },
  { id: 'swords-02', name: '宝剑-02', imagePath: require('../image/BilibiliTarot/Swords/宝剑-02.png'), category: 'Swords' },
  { id: 'swords-03', name: '宝剑-03', imagePath: require('../image/BilibiliTarot/Swords/宝剑-03.png'), category: 'Swords' },
  { id: 'swords-04', name: '宝剑-04', imagePath: require('../image/BilibiliTarot/Swords/宝剑-04.png'), category: 'Swords' },
  { id: 'swords-05', name: '宝剑-05', imagePath: require('../image/BilibiliTarot/Swords/宝剑-05.png'), category: 'Swords' },
  { id: 'swords-06', name: '宝剑-06', imagePath: require('../image/BilibiliTarot/Swords/宝剑-06.png'), category: 'Swords' },
  { id: 'swords-07', name: '宝剑-07', imagePath: require('../image/BilibiliTarot/Swords/宝剑-07.png'), category: 'Swords' },
  { id: 'swords-08', name: '宝剑-08', imagePath: require('../image/BilibiliTarot/Swords/宝剑-08.png'), category: 'Swords' },
  { id: 'swords-09', name: '宝剑-09', imagePath: require('../image/BilibiliTarot/Swords/宝剑-09.png'), category: 'Swords' },
  { id: 'swords-10', name: '宝剑-10', imagePath: require('../image/BilibiliTarot/Swords/宝剑-10.png'), category: 'Swords' },
  { id: 'swords-page', name: '宝剑侍从', imagePath: require('../image/BilibiliTarot/Swords/宝剑侍从.png'), category: 'Swords' },
  { id: 'swords-knight', name: '宝剑骑士', imagePath: require('../image/BilibiliTarot/Swords/宝剑骑士.png'), category: 'Swords' },
  { id: 'swords-queen', name: '宝剑王后', imagePath: require('../image/BilibiliTarot/Swords/宝剑王后.png'), category: 'Swords' },
  { id: 'swords-king', name: '宝剑国王', imagePath: require('../image/BilibiliTarot/Swords/宝剑国王.png'), category: 'Swords' },
];

// 权杖 (Wands)
const wands: TarotCardData[] = [
  { id: 'wands-01', name: '权杖-01', imagePath: require('../image/BilibiliTarot/Wands/权杖-01.png'), category: 'Wands' },
  { id: 'wands-02', name: '权杖-02', imagePath: require('../image/BilibiliTarot/Wands/权杖-02.png'), category: 'Wands' },
  { id: 'wands-03', name: '权杖-03', imagePath: require('../image/BilibiliTarot/Wands/权杖-03.png'), category: 'Wands' },
  { id: 'wands-04', name: '权杖-04', imagePath: require('../image/BilibiliTarot/Wands/权杖-04.png'), category: 'Wands' },
  { id: 'wands-05', name: '权杖-05', imagePath: require('../image/BilibiliTarot/Wands/权杖-05.png'), category: 'Wands' },
  { id: 'wands-06', name: '权杖-06', imagePath: require('../image/BilibiliTarot/Wands/权杖-06.png'), category: 'Wands' },
  { id: 'wands-07', name: '权杖-07', imagePath: require('../image/BilibiliTarot/Wands/权杖-07.png'), category: 'Wands' },
  { id: 'wands-08', name: '权杖-08', imagePath: require('../image/BilibiliTarot/Wands/权杖-08.png'), category: 'Wands' },
  { id: 'wands-09', name: '权杖-09', imagePath: require('../image/BilibiliTarot/Wands/权杖-09.png'), category: 'Wands' },
  { id: 'wands-10', name: '权杖-10', imagePath: require('../image/BilibiliTarot/Wands/权杖-10.png'), category: 'Wands' },
  { id: 'wands-page', name: '权杖侍从', imagePath: require('../image/BilibiliTarot/Wands/权杖侍从.png'), category: 'Wands' },
  { id: 'wands-knight', name: '权杖骑士', imagePath: require('../image/BilibiliTarot/Wands/权杖骑士.png'), category: 'Wands' },
  { id: 'wands-queen', name: '权杖王后', imagePath: require('../image/BilibiliTarot/Wands/权杖王后.png'), category: 'Wands' },
  { id: 'wands-king', name: '权杖国王', imagePath: require('../image/BilibiliTarot/Wands/权杖国王.png'), category: 'Wands' },
];

// 所有卡牌
export const allTarotCards: TarotCardData[] = [
  ...majorArcana,
  ...cups,
  ...pentacles,
  ...swords,
  ...wands,
];

// 卡牌背面图片
export const cardBackImage = require('../image/BilibiliTarot/Extra/背景.png');

// 随机选择指定数量的卡牌（不重复）
export function getRandomCards(count: number): TarotCardData[] {
  const shuffled = [...allTarotCards].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

