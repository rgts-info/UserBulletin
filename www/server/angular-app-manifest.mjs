
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/UserBulletin/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/UserBulletin"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8998, hash: 'e8e379853e00bae3a2804a5d008d58a2da57a152779d89665273a81af088ad84', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2350, hash: '2082f9501cfc1d8fdd632684ada06dcdf2b8ff681daa21e0305b03509343caab', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 73113, hash: '72881b66c8db8dd8fcf760de99eeedf4f025980690403e81ad1e06fe2857fcc7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-FV7ERX2C.css': {size: 48329, hash: 'BaHtYXXmfEE', text: () => import('./assets-chunks/styles-FV7ERX2C_css.mjs').then(m => m.default)}
  },
};
