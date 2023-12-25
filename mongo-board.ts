/**
 * 一个提供WEB图片弹窗的工具库
 */
import type { IBoardOptions } from './type';

// 把board插入dom
export const insertBoard = (
  boardOptions: IBoardOptions
) => {
  const baseDocument = generateTemplate(
    boardOptions.style,
    boardOptions.imgUrl
  );
  const baseElement = baseDocument.body.firstChild;
  if (baseElement) {
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = './board.css';
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(link);
    // 插入根节点
    document.body.appendChild(baseElement);
  } else console.log('初始化信息出错');
};

const generateTemplate = (
  style: string,
  imgUrl: string[]
) => {
  // const baseTemplate = document.createElement('div');
  // if (style === 'default') {
  //   imgUrl?.forEach((img) => {
  //     const imgTag = document.createElement('img');
  //     imgTag.src = img;
  //     baseTemplate.append(imgTag);
  //   });
  // }
  const baseTemplate = `
  <div class="board-container">
   <div class="board-mask"></div>
   <div class="board-main">
    <svg
      class="board-close"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24">
      <path
        fill="#999"
        d="m12 12.708l3.246 3.246q.14.14.344.15q.204.01.364-.15t.16-.354q0-.194-.16-.354L12.708 12l3.246-3.246q.14-.14.15-.344q.01-.204-.15-.364t-.354-.16q-.194 0-.354.16L12 11.292L8.754 8.046q-.14-.14-.344-.15q-.204-.01-.364.15t-.16.354q0 .194.16.354L11.292 12l-3.246 3.246q-.14.14-.15.344q-.01.204.15.364t.354.16q.194 0 .354-.16zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924q-1.216-1.214-1.925-2.856Q3 13.87 3 12.003q0-1.866.708-3.51q.709-1.643 1.924-2.859q1.214-1.216 2.856-1.925Q10.13 3 11.997 3q1.866 0 3.51.708q1.643.709 2.859 1.924q1.216 1.214 1.925 2.856Q21 10.13 21 11.997q0 1.866-.708 3.51q-.709 1.643-1.924 2.859q-1.214 1.216-2.856 1.925Q13.87 21 12.003 21" />
    </svg>
    <img
      src="https://img.linkstarted.top/blog/wallhaven-1p2m2w.jpg" />
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
