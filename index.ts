/**
 * 一个提供WEB图片弹窗的工具库
 */
import type { IBoardOptions } from './type';

/**
 * Mongo-Board的主初始化函数
 * @param boardOptions
 */
export const initBoard = (boardOptions: IBoardOptions) => {
  let boardStatusParma = initBoardStatus(boardOptions);
  // 判断是否缓存了数据
  if (!boardStatusParma) {
    // 重新获取
    boardStatusParma = initBoardStatus(boardOptions);
    insertBoard(boardStatusParma);
  } else {
    insertBoard(boardStatusParma);
  }
};

/**
 * 把board插入到dom的根节点中去
 * @param boardStatusParma
 */
const insertBoard = (boardStatusParma: IBoardOptions) => {
  if (boardStatusParma.statusCode !== 1) {
    // 获取board模版
    const baseDocument = generateTemplate(boardStatusParma);
    // 把board插入页面
    const baseElement = baseDocument.body.firstChild;
    if (baseElement) {
      // 插入根节点
      document.body.appendChild(baseElement);
      // 倒计时自动关闭
      const boardTip = document.querySelector('#board-tip');
      if (boardTip) {
        let countDown = boardStatusParma.autoCloseInterval;
        const tipTimer = setInterval(() => {
          console.log('board information');
          if (countDown > 0)
            boardTip.innerHTML = `将在${countDown--}秒后自动关闭`;
          else {
            clearInterval(tipTimer);
            removeBoard(boardStatusParma);
          }
        }, 1000);
      }
      // 初始化关闭事件
      const closeBtn =
        document.querySelector('#board-close');
      closeBtn?.addEventListener('click', () => {
        removeBoard(boardStatusParma);
      });
    } else console.log('初始化信息出错');
  }
};

/**
 * 生成board的模版
 * @param style
 * @param imgUrl
 * @returns
 */
const generateTemplate = (
  boardStatusParma: IBoardOptions
) => {
  const baseTemplate = `
  <div
    id="mongo-board"
    class="board-container">
    <div class="board-mask"></div>
    <div class="board-main">
      ${
        boardStatusParma.closeAble
          ? `<img
        id="board-close"
        class="board-close"
        src="https://api.iconify.design/solar:close-circle-bold.svg"
        alt="close-btn" />`
          : ''
      } ${boardStatusParma.imgUrl
    .map(
      (url) => `<img
        class="board-img"
        alt="board-img"
        src="${url}" />`
    )
    .join('')} ${
    boardStatusParma.autoClose
      ? `<span
        id="board-tip"
        class="board-tip">
        将在5秒后自动关闭 </span
      >`
      : ''
  }
    </div>
  </div>
`;
  const parser = new DOMParser();
  const baseDocument = parser.parseFromString(
    baseTemplate,
    'text/html'
  );
  return baseDocument;
};

/**
 * 初始化board状态
 * @param boardOptions
 * @returns
 */
const initBoardStatus = (boardOptions: IBoardOptions) => {
  let boardStatus = localStorage.getItem(
    'mongo-board-status'
  );
  if (boardStatus) {
    return JSON.parse(boardStatus) as IBoardOptions;
  } else {
    localStorage.setItem(
      'mongo-board-status',
      JSON.stringify(boardOptions)
    );
    return boardOptions;
  }
};

/**
 * 从dom中移除board
 * @param boardStatusParma
 */
const removeBoard = (boardStatusParma: IBoardOptions) => {
  document.querySelector('#mongo-board')?.remove();
  if (boardStatusParma.onlyOnce) {
    boardStatusParma.onlyOnceShowed = true;
    boardStatusParma.statusCode = 1;
  }
  localStorage.setItem(
    'mongo-board-status',
    JSON.stringify(boardStatusParma)
  );
};
