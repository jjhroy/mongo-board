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
  swipeTimeInterval: number;
  /**
   * board风格
   * */
  style: string;
  /**
   * board是否只弹一次
   * */
  onlyOnce: boolean;
  /**
   * board是否只弹一次,是否弹出过了
   * */
  onlyOnceShowed: boolean;
  /**
   * board再次弹出的间隔
   * */
  popTimeInterval: number;
  /**
   * board是否可关闭
   * */
  closeAble: boolean;
  /**
   * board是否会自动关闭
   * */
  autoClose: boolean;
  /**
   * 多久后board自动关闭
   * */
  autoCloseInterval: number;
  /**
   * board状态码
   * */
  statusCode: 0 | 1 | 2 | 3 | 4;
}
