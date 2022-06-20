import path from 'path';
import * as qstr from './qstr.js';

const __dirname = path.resolve(path.dirname(''));

export const getApplicationPath = function () {
	let dirName = __dirname;
	dirName = dirName.replace("/qtools", "");
	return qstr.chopRight(dirName, "system");
};
