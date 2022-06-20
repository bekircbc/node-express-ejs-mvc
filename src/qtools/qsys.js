import * as qmat from './qmat.js';
import * as qsys from './qsys.js';
import * as qstr from './qstr.js';
import path from 'path';

const __dirname = path.resolve(path.dirname(''));

export const smartResponse = (_req, res, json) => {
    const ms = qmat.getRandomNumber(1000, 2000);
    res.json(json);
};

export const getCurrentOperatingSystem = (path) => {
    if (qstr.contains(__dirname, '/')) {
        return 'linux';
    } else {
        return 'windows';
    }
};

export const getOperatingSystemSlash = (path) => {
    if (qsys.getCurrentOperatingSystem() === 'linux') {
        return '/';
    } else {
        return `\\`;
    }
};
