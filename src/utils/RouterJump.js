import HiGlobal from './HiGlobal';

let panelScreen;
export function injectPageEl(id) {
  panelScreen = HiGlobal[id];
}

export function JumpPage(name, params = {}) {
  panelScreen.jumpPage(name, params);
}
