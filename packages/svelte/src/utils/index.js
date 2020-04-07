import pkg from '../../package.json';

export function error(msg) {
    console.error('[' + pkg.name + '] ' + msg);
}