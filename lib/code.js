/**
 * @author      Icemic Jia <bingfeng.web@gmail.com>
 * @copyright   2017 Icemic Jia
 * @link        https://github.com/Icemic/huozi.js
 * @license     https://github.com/Icemic/huozi.js/blob/master/LICENSE
 *
 * 本程序根据使用目的采用双授权的方式，你可以根据如下条款选择适合你的许可协议：
 * 
 * - 对于全部的使用目的，均可选择 GNU Affero General Public License 3.0。
 * - 对于非商业目的的使用，可选择 Apache License 2.0。此处非商业目的的定义和区分方法与 Creative Commons BY-NC 4.0 International 中的相关条目一致。
 * - 特别地，当用户将本程序与 AVG.js，或更具体的，avg-core 库同时使用时，无论用于商业或非商业，均可选择 Apache License 2.0。关于 AVG.js 的详情，请访问：https://github.com/avgjs/avg-core
 * - 特别地，当用户将本程序与 pixi-richtext (https://github.com/avgjs/pixi-richtext) 库同时使用时，无论用于商业或非商业，均可选择 Apache License 2.0。
 *
 * English Translation:
 * 
 * This software uses a dual license, you can choose the appropriate license under the following terms:
 * 
 * - GNU Affero General Public License 3.0 is available for all purposes.
 * - Apache License 2.0 is available for non-commercial use. The definition of non-commercial use is consistent with the relevant entries in Creative Commons BY-NC 4.0 International.
 * - In particular, Apache License 2.0 is available for users who use this software with AVG.js, or more specifically, the avg-core library, whether for commercial or non-commercial use. For more details about AVG.js, see: https://github.com/avgjs/avg-core
 * - In particular, Apache License 2.0 is available for users who use the pixi-richtext (https://github.com/avgjs/pixi-richtext) library, whether for commercial or non-commercial use.
 */

export const DIANHAO = `。，、．：；！‼？⁇`;
export const BIAOHAO = `「」『』“”‘’（）【】〖〗〔〕［］｛｝⸺—…●•–～~～～·﹏《》〈〉＿/／`;
export const BIAODIAN = `${BIAOHAO}${DIANHAO} `;
export const BIAODIANVALIDATEND = `。，、．：；！‼？⁇」』”’）】〗〕］｝》〉 `
export const BIAODIANVALIDATSTART = `「『“‘（【〖〔［｛《〈 `
export const INCOMPRESSIBLE = '‼⁇⸺—';
export const COMPRESSLEFT = '「『“‘（【〖〔［｛《〈';