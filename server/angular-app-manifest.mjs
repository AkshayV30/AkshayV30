
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24683, hash: 'cf5be77b0e1b0bc15840f7be5533bfac561bf003a2c460fb6ca338b1b80854a6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17055, hash: '51906eb5e81c1459876ea4fe2e758fde9f2ebcfb90a8a46b02ff0dfe1b892dbd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-YRDRGDHF.css': {size: 18702, hash: 'BTm77oUnFFo', text: () => import('./assets-chunks/styles-YRDRGDHF_css.mjs').then(m => m.default)}
  },
};
