export interface IBoardOptions {
  /**
   * board标识，多个需保证唯一性
   * */
  sign: string;
  /**
   * board图片地址
   * */
  imgUrl: string[];
  /**
   * board图标切换的间隔，仅imgUrl为string[]时有效
   * */
  swipeTimeInterval: string;
  /**
   * board风格
   * */
  style: string;
  /**
   * board是否只弹一次
   * */
  onlyOnce: boolean;
  /**
   * board再次弹出的间隔
   * */
  popTimeInterval: string;
  /**
   * board是否可关闭
   * */
  closeAble: boolean;
}
