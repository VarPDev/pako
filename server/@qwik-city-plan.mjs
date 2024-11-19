import {
  c as d,
  i as o,
  u as f,
  a as ce,
  _ as r,
  b as e,
  S,
  F as c,
  d as $,
  e as _,
  L as g,
  f as t,
  g as U,
  h as T,
  j as p,
  k as P,
  l as R,
  m as h,
  n as y,
  r as F,
  o as A,
  p as ue,
  R as B,
  q as de,
  s as j,
  t as E,
  v as he,
  w as I,
} from './q-f5c7d7d3.js'
import { set as C, isWithinInterval as W, format as ge } from 'date-fns'
import me from 'number-to-words'
import {
  createContext as pe,
  Component as fe,
  createRef as be,
  createElement as q,
} from 'react'
import { renderToString as ve } from 'react-dom/server'
import { jsx as we } from 'react/jsx-runtime'
import { StructuredText as xe } from 'react-datocms/structured-text'
const ke = n => {
    const l = f(),
      a = f(!1),
      i = { el: l, isVisible: a, observer: null }
    return (
      ce($('s_CHnWD2D8Ibg', [i])),
      r(
        c,
        {
          children: e(
            'div',
            {
              ref: i.el,
              class: `w-full animation ${n.pop && 'pop'}
      ${i.isVisible.value && 'isVisible'}`,
            },
            null,
            r(S, null, 3, '09_0'),
            1,
            null,
          ),
        },
        1,
        '09_1',
      )
    )
  },
  m = d(o(ke, 's_sdm0n9ZoKr0')),
  ye = `.cat-background{position:fixed;height:170px;width:192.1px;top:50%;left:50%;margin-top:-85px;margin-left:-96px;z-index:-1;opacity:.2}.cat-background .ear{position:absolute;top:-30%;height:60%;width:25%;background:#fff}.cat-background .ear:before,.cat-background .ear:after{content:"";position:absolute;bottom:24%;height:10%;width:5%;border-radius:50%;background:#161616}.cat-background .ear:after{transform-origin:50% 100%}.cat-background .ear--left{left:-7%;border-radius:70% 30% 0% 0%/100% 100% 0% 0%;transform:rotate(-15deg)}.cat-background .ear--left:before,.cat-background .ear--left:after{right:10%}.cat-background .ear--left:after{transform:rotate(-45deg)}.cat-background .ear--right{right:-7%;border-radius:30% 70% 0% 0%/100% 100% 0% 0%;transform:rotate(15deg)}.cat-background .ear--right:before,.cat-background .ear--right:after{left:10%}.cat-background .ear--right:after{transform:rotate(45deg)}.cat-background .face{position:absolute;height:100%;width:100%;background:#161616;border-radius:50%}.cat-background .eye{position:absolute;top:35%;height:30%;width:31%;background:#fff;border-radius:50%/60% 60% 40% 40%}.cat-background .eye:after{content:"";position:absolute;top:0;left:0;height:0;width:100%;border-radius:0 0 50% 50Array/0Array 0 40% 40%;background:#161616;animation:blink 4s infinite ease-in}@keyframes blink{0%{height:0}90%{height:0}92.5%{height:100%}95%{height:0}97.5%{height:100%}to{height:0}}.cat-background .eye:before{content:"";position:absolute;top:60%;height:10%;width:15%;background:#fff;border-radius:50%}.cat-background .eye--left{left:0}.cat-background .eye--left:before{right:-5%}.cat-background .eye--right{right:0}.cat-background .eye--right:before{left:-5%}.cat-background .eye-pupil{position:absolute;top:25%;height:50%;width:20%;background:#161616;border-radius:50%;animation:look-around 4s infinite}@keyframes look-around{0%{transform:translate(0)}5%{transform:translate(50%,-25%)}10%{transform:translate(50%,-25%)}15%{transform:translate(-100%,-25%)}20%{transform:translate(-100%,-25%)}25%{transform:translate(0)}to{transform:translate(0)}}.cat-background .eye--left .eye-pupil{right:30%}.cat-background .eye--right .eye-pupil{left:30%}.cat-background .eye-pupil:after{content:"";position:absolute;top:30%;right:-5%;height:20%;width:35%;border-radius:50%;background:#fff}.cat-background .muzzle{position:absolute;top:60%;left:50%;height:6%;width:10%;background:#fff;transform:translate(-50%);border-radius:50%/30% 30% 70% 70%}
`,
  _e = () => (
    _(o(ye, 's_xTYSAGLBrBU')),
    r(
      c,
      {
        children: e(
          'div',
          null,
          { class: 'cat-background' },
          [
            e('div', null, { class: 'ear ear--left' }, null, 3, null),
            e('div', null, { class: 'ear ear--right' }, null, 3, null),
            e(
              'div',
              null,
              { class: 'face' },
              [
                e(
                  'div',
                  null,
                  { class: 'eye eye--left' },
                  e('div', null, { class: 'eye-pupil' }, null, 3, null),
                  3,
                  null,
                ),
                e(
                  'div',
                  null,
                  { class: 'eye eye--right' },
                  e('div', null, { class: 'eye-pupil' }, null, 3, null),
                  3,
                  null,
                ),
                e('div', null, { class: 'muzzle' }, null, 3, null),
              ],
              3,
              null,
            ),
          ],
          3,
          null,
        ),
      },
      3,
      'ev_0',
    )
  ),
  ze = d(o(_e, 's_k9rs7QcCFAU')),
  Me = `.cat-walk-container{position:fixed;z-index:9999;transform:scale(.5);transform-origin:right bottom;animation:init-cat 3s linear 1,walk-around 20s linear 3.2s infinite;right:0;bottom:0}@keyframes init-cat{0%{bottom:83%}to{bottom:0}}@keyframes init-cat-zig-zag{0%{bottom:83%;right:0}10%{right:10%}20%{right:2%}30%{right:15%}40%{right:7%}50%{right:12%}60%{right:0}70%{right:8%}80%{right:0%}90%{right:10%}to{bottom:0;right:0}}@keyframes walk-around{0%{right:0;bottom:0}5%{right:4%;bottom:5px}10%{right:8%;bottom:0}15%{right:12%;bottom:5px}20%{right:16%;bottom:0}25%{right:20%;bottom:5px}30%{right:24%;bottom:0}35%{right:28%;bottom:5px}40%{right:32%;bottom:0}45%{right:36%;bottom:5px}50%{right:40%;bottom:0}55%{right:36%;bottom:5px}60%{right:32%;bottom:0}65%{right:28%;bottom:5px}70%{right:24%;bottom:0}75%{right:20%;bottom:5px}80%{right:16%;bottom:0}85%{right:12%;bottom:5px}90%{right:8%;bottom:0}95%{right:4%;bottom:5px}to{right:0;bottom:0}}.cat-walk-container #tail{position:absolute;margin-left:40px;margin-top:40px;height:60px;width:80px;border:15px solid #d3b897;border-radius:50px;display:inline-block;z-index:0}.cat-walk-container #tail-mask{position:absolute;margin-top:40px;margin-left:100px;height:30px;width:75px;background-color:#fff;z-index:0;text-align:center;padding-top:2px;padding-left:7px;color:#000}.cat-walk-container #tail-end{position:absolute;margin-top:63px;margin-left:130px;height:17px;width:17px;border-radius:50%;background-color:#d3b897;z-index:1}.cat-walk-container #body{position:relative;height:130px;width:110px;background-color:#e9cba7;border-radius:22px;display:inline-block;overflow:hide;z-index:1}.cat-walk-container .ear{position:relative;margin-top:-20px;height:45px;width:50px;background-color:#e9cba7;display:inline-block;z-index:2}.cat-walk-container #ear-left{clip-path:polygon(0 0,0% 100%,100% 60%)}.cat-walk-container #ear-right{margin-left:6px;clip-path:polygon(100% 0,0% 60%,100% 100%)}.cat-walk-container .ear-inner{position:relative;height:30px;width:50px;background-color:#d3b897;z-index:3}.cat-walk-container #ear-inner-left{margin-top:8px;margin-left:5px;clip-path:polygon(0 0,100% 90%,0 100%)}.cat-walk-container #ear-inner-right{margin-top:8px;margin-left:-4px;clip-path:polygon(100% 0%,100% 100%,0 90%)}.cat-walk-container #mask{position:relative;background-color:#e9cba7;margin-top:-29px;height:50px;width:110px;border-radius:50%;z-index:4}.cat-walk-container #patch{position:relative;margin-top:-50px;z-index:5}.cat-walk-container .fur{width:5px;background-color:#c0a98b;display:inline-block}.cat-walk-container .fur:first-of-type{margin-left:40%;height:15px;float:left}.cat-walk-container .fur:nth-of-type(2){margin-left:4px;height:5px;float:left}.cat-walk-container .fur:nth-of-type(3){margin-left:4px;height:10px;float:left}.cat-walk-container #eyes{position:relative;margin-top:30%;z-index:5}.cat-walk-container .eye{height:18px;width:18px;border-radius:50%;background-color:#554d44;display:inline-block}.cat-walk-container #eye-left{margin-left:27%}.cat-walk-container #eye-right{margin-left:10%}.cat-walk-container .shine{height:7px;width:7px;border-radius:50%;background-color:#fff;margin-top:2px;margin-left:1px}.cat-walk-container #whisk-left{display:inline-block}.cat-walk-container .whisker{height:3px;width:25px;background-color:#d3b897;margin-bottom:6px}.cat-walk-container #whisk-one{transform:rotate(15deg)}.cat-walk-container #whisk-three{transform:rotate(-15deg)}.cat-walk-container #nose{position:absolute;margin-left:15%;height:17px;width:18px;background-color:#554d44;clip-path:ellipse(40% 22% at 50% 50%);display:inline-block;z-index:6}.cat-walk-container #whisk-right{display:inline-block;margin-left:56px}.cat-walk-container #whisk-four{transform:rotate(-15deg)}.cat-walk-container #whisk-six{transform:rotate(15deg)}.cat-walk-container #smile{position:relative;margin-left:29%;margin-top:-22%;z-index:5}.cat-walk-container #smile-left-align{display:inline-block;position:absolute}.cat-walk-container #smile-left{height:10px;width:20px;border-radius:0 0 10px 10px;background-color:#e9cba7;border:2px solid #554d44}.cat-walk-container #mask-left{margin-top:-58%;height:4px;width:20px;background-color:#e9cba7}.cat-walk-container #smile-right-align{display:inline-block;margin-left:22px;position:absolute}.cat-walk-container #smile-right{height:10px;width:20px;border-radius:0 0 10px 10px;background-color:#e9cba7;border:2px solid #554d44}.cat-walk-container #mask-right{margin-top:-58%;height:4px;width:24px;background-color:#e9cba7}.cat-walk-container #tongue{position:relative;margin-top:7px;margin-left:auto;margin-right:auto;height:17px;width:15px;border-radius:25px;background-color:#fc90a5;z-index:4}.cat-walk-container #tummy{margin-top:13%;margin-left:auto;margin-right:auto;height:30px;width:60px;border-radius:50px 50px 0 0;background-color:#f4e7d1}.cat-walk-container #credit{position:absolute;font-family:sans-serif;font-size:12px;color:#b9b9b9;margin-top:70px;left:20px}
`,
  Se = () => (
    _(o(Me, 's_ik8BQrQgw9g')),
    r(
      c,
      {
        children: e(
          'div',
          null,
          { class: 'cat-walk-container' },
          [
            e('div', null, { id: 'tail' }, null, 3, null),
            e('div', null, { id: 'tail-mask' }, 'WOW', 3, null),
            e('div', null, { id: 'tail-end' }, null, 3, null),
            e(
              'div',
              null,
              { id: 'body' },
              [
                e(
                  'div',
                  null,
                  { class: 'ear', id: 'ear-left' },
                  e(
                    'div',
                    null,
                    { class: 'ear-inner', id: 'ear-inner-left' },
                    null,
                    3,
                    null,
                  ),
                  3,
                  null,
                ),
                e(
                  'div',
                  null,
                  { class: 'ear', id: 'ear-right' },
                  e(
                    'div',
                    null,
                    { class: 'ear-inner', id: 'ear-inner-right' },
                    null,
                    3,
                    null,
                  ),
                  3,
                  null,
                ),
                e('div', null, { id: 'mask' }, null, 3, null),
                e(
                  'div',
                  null,
                  { id: 'patch' },
                  [
                    e('div', null, { class: 'fur' }, null, 3, null),
                    e('div', null, { class: 'fur' }, null, 3, null),
                    e('div', null, { class: 'fur' }, null, 3, null),
                  ],
                  3,
                  null,
                ),
                e(
                  'div',
                  null,
                  { id: 'eyes' },
                  [
                    e(
                      'div',
                      null,
                      { class: 'eye', id: 'eye-left' },
                      e(
                        'div',
                        null,
                        { class: 'shine', id: 'shine-left' },
                        null,
                        3,
                        null,
                      ),
                      3,
                      null,
                    ),
                    e(
                      'div',
                      null,
                      { class: 'eye', id: 'eye-right' },
                      e(
                        'div',
                        null,
                        { class: 'shine', id: 'shine-right' },
                        null,
                        3,
                        null,
                      ),
                      3,
                      null,
                    ),
                  ],
                  3,
                  null,
                ),
                e(
                  'div',
                  null,
                  { id: 'whisk-left' },
                  [
                    e(
                      'div',
                      null,
                      { class: 'whisker', id: 'whisk-one' },
                      null,
                      3,
                      null,
                    ),
                    e('div', null, { class: 'whisker' }, null, 3, null),
                    e(
                      'div',
                      null,
                      { class: 'whisker', id: 'whisk-three' },
                      null,
                      3,
                      null,
                    ),
                  ],
                  3,
                  null,
                ),
                e('div', null, { id: 'nose' }, null, 3, null),
                e(
                  'div',
                  null,
                  { id: 'whisk-right' },
                  [
                    e(
                      'div',
                      null,
                      { class: 'whisker', id: 'whisk-four' },
                      null,
                      3,
                      null,
                    ),
                    e('div', null, { class: 'whisker' }, null, 3, null),
                    e(
                      'div',
                      null,
                      { class: 'whisker', id: 'whisk-six' },
                      null,
                      3,
                      null,
                    ),
                  ],
                  3,
                  null,
                ),
                e(
                  'div',
                  null,
                  { id: 'smile' },
                  [
                    e(
                      'div',
                      null,
                      { id: 'smile-left-align' },
                      [
                        e('div', null, { id: 'smile-left' }, null, 3, null),
                        e('div', null, { id: 'mask-left' }, null, 3, null),
                      ],
                      3,
                      null,
                    ),
                    e(
                      'div',
                      null,
                      { id: 'smile-right-align' },
                      [
                        e('div', null, { id: 'smile-right' }, null, 3, null),
                        e('div', null, { id: 'mask-right' }, null, 3, null),
                      ],
                      3,
                      null,
                    ),
                  ],
                  3,
                  null,
                ),
                e('div', null, { id: 'tongue' }, null, 3, null),
                e('div', null, { id: 'tummy' }, null, 3, null),
              ],
              3,
              null,
            ),
          ],
          3,
          null,
        ),
      },
      3,
      'wM_0',
    )
  ),
  je = d(o(Se, 's_0DhRUxBQU40')),
  Ce = () =>
    r(
      c,
      {
        children: e(
          'div',
          null,
          { class: 'container mx-auto' },
          e(
            'div',
            null,
            { class: 'card bg-base-100 shadow-xl image-full w-full' },
            e(
              'div',
              null,
              { class: 'card-body' },
              e(
                'div',
                null,
                { class: 'flex items-center gap-8 flex-col md:flex-row' },
                [
                  e(
                    'svg',
                    null,
                    {
                      class: 'w-16 md:w-40 rotate-[270deg]',
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 323.057 323.057',
                      'xml:space': 'preserve',
                    },
                    [
                      e(
                        'path',
                        null,
                        {
                          class: 'fill-primary',
                          d: 'M281.442 256.312c-47.124 59.364-139.536 44.676-160.956-29.376-1.224-3.672-1.836-7.956-2.448-11.628 49.572-11.016 97.92-47.124 102.204-90.576 3.672-39.168-36.108-50.796-62.424-28.764-31.212 26.316-53.244 64.872-55.08 105.875-31.824 4.284-63.036-4.284-80.172-35.496-28.764-52.631 9.792-123.624 61.2-144.432 5.508-1.836 3.06-10.404-2.448-8.568C10.326 33.544-26.394 132.688 21.954 191.439c18.972 22.645 49.572 29.988 81.396 26.316 4.284 41.616 36.72 74.664 75.275 87.516 44.676 14.688 85.68-6.731 111.996-41.616 4.285-5.508-4.896-12.239-9.179-7.343zM144.354 132.688c9.792-13.464 22.644-28.764 39.168-34.272 15.911-5.508 21.42 16.524 22.031 26.316.612 12.24-7.956 23.256-15.912 31.824-16.523 18.971-44.063 35.496-72.215 42.839 1.836-23.868 13.464-47.123 26.928-66.707z',
                        },
                        null,
                        3,
                        null,
                      ),
                      e(
                        'path',
                        null,
                        {
                          class: 'fill-primary',
                          d: 'M315.713 233.668c-17.136 0-34.884 1.224-51.408 5.508-6.731 1.836-3.672 11.016 3.061 9.792 13.464-2.448 27.54-1.836 41.004-1.224-.612 7.955-1.224 16.523-2.448 24.479-1.224 6.12-5.508 15.3-1.836 21.42 1.836 3.061 4.896 3.061 7.956 1.836 7.344-3.06 7.344-15.912 8.568-22.644 1.836-11.017 2.447-21.42 2.447-32.437 0-3.67-3.672-6.73-7.344-6.73z',
                        },
                        null,
                        3,
                        null,
                      ),
                    ],
                    3,
                    null,
                  ),
                  e(
                    'div',
                    null,
                    null,
                    [
                      e(
                        'h2',
                        null,
                        { class: 'card-title text-l md:text-2xl mb-6' },
                        "Do you want to build castles? Let's do it together!",
                        3,
                        null,
                      ),
                      e(
                        'p',
                        null,
                        {
                          class:
                            'text-m md:text-1xl flex gap-2 items-center flex-wrap',
                        },
                        [
                          'pasquale.delucia96@gmail.com',
                          ' ',
                          r(
                            g,
                            {
                              class: 'btn btn-square btn-outline btn-xs',
                              href: 'mailto:pasquale.delucia96@gmail.com',
                              target: '_blank',
                              'aria-label': 'pasquale.delucia96@gmail.com',
                              'data-goatcounter-click': 'send-email',
                              'data-goatcounter-title': 'Send Email',
                              'data-goatcounter-referrer': 'referrer',
                              children: e(
                                'svg',
                                null,
                                {
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  width: '24',
                                  height: '24',
                                  viewBox: '0 0 24 24',
                                  fill: 'none',
                                  stroke: 'currentColor',
                                  'stroke-width': '2',
                                  'stroke-linecap': 'round',
                                  'stroke-linejoin': 'round',
                                  class:
                                    'feather feather-external-link w-3 h-3',
                                },
                                [
                                  e(
                                    'path',
                                    null,
                                    {
                                      d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6',
                                    },
                                    null,
                                    3,
                                    null,
                                  ),
                                  e(
                                    'polyline',
                                    null,
                                    { points: '15 3 21 3 21 9' },
                                    null,
                                    3,
                                    null,
                                  ),
                                  e(
                                    'line',
                                    null,
                                    { x1: '10', y1: '14', x2: '21', y2: '3' },
                                    null,
                                    3,
                                    null,
                                  ),
                                ],
                                3,
                                null,
                              ),
                              [t]: {
                                class: t,
                                href: t,
                                target: t,
                                'aria-label': t,
                                'data-goatcounter-click': t,
                                'data-goatcounter-title': t,
                                'data-goatcounter-referrer': t,
                              },
                            },
                            3,
                            'N9_0',
                          ),
                        ],
                        1,
                        null,
                      ),
                    ],
                    1,
                    null,
                  ),
                ],
                1,
                null,
              ),
              1,
              null,
            ),
            1,
            null,
          ),
          1,
          null,
        ),
      },
      1,
      'N9_1',
    ),
  qe = d(o(Ce, 's_pCebMzCWV9M')),
  Le = `.eggs{margin:1em auto;text-align:center;position:fixed;transform:translate(-50%,-50%);top:50%;left:50%;opacity:.2}.egg{width:140px;height:200px;margin:1em auto;background:#fbe9e7;border-radius:50%/60% 60% 40% 40%;overflow:hidden;display:inline-block}.stripe{height:20%}.stripe:not(:first-child){border-top:2px solid #fff}.stripe:nth-child(1){background-color:#ffbde8}.stripe:nth-child(2){background-color:#bde8ff}.stripe:nth-child(3){background-color:#e8ffbd}.stripe:nth-child(4){background-color:#ffe8bd}.stripe:nth-child(5){background-color:#e8bdff}@keyframes egg-left-animation{0%{transform:rotate(-15deg)}to{transform:rotate(-10deg)}}@keyframes egg-right-animation{0%{transform:rotate(30deg)}to{transform:rotate(25deg)}}.egg-left{transform:rotate(-10deg);animation:egg-left-animation .8s linear 0s infinite alternate}.egg-right{transform:rotate(25deg);animation:egg-right-animation .7s linear 0s infinite alternate;background-color:#ec407a;background-image:url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23FFFFFF' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")}
`,
  Pe = () => (
    _(o(Le, 's_M7JMtWmYWDA')),
    r(
      c,
      {
        children: e(
          'div',
          null,
          { class: 'eggs' },
          [
            e(
              'div',
              null,
              { class: 'egg egg-left' },
              [
                e('div', null, { class: 'stripe' }, null, 3, null),
                e('div', null, { class: 'stripe' }, null, 3, null),
                e('div', null, { class: 'stripe' }, null, 3, null),
                e('div', null, { class: 'stripe' }, null, 3, null),
                e('div', null, { class: 'stripe' }, null, 3, null),
              ],
              3,
              null,
            ),
            e('div', null, { class: 'egg egg-right' }, null, 3, null),
          ],
          3,
          null,
        ),
      },
      3,
      'vR_0',
    )
  ),
  Fe = d(o(Pe, 's_tC1zfRJh9xU')),
  H = U('common.show'),
  V = U('common.snow'),
  Ae = () => {
    const n = T(H),
      l = new Date().getFullYear()
    return r(
      c,
      {
        children: e(
          'footer',
          null,
          { class: 'footer items-center p-4 bg-neutral text-neutral-content' },
          [
            e(
              'aside',
              null,
              { class: 'items-center grid-flow-col' },
              [
                e(
                  'svg',
                  null,
                  {
                    width: '36',
                    height: '36',
                    viewBox: '0 0 24 24',
                    xmlns: 'http://www.w3.org/2000/svg',
                    'fill-rule': 'evenodd',
                    'clip-rule': 'evenodd',
                    class: 'fill-current',
                  },
                  e(
                    'path',
                    null,
                    {
                      d: 'M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z',
                    },
                    null,
                    3,
                    null,
                  ),
                  3,
                  null,
                ),
                e(
                  'p',
                  null,
                  null,
                  ['Copyright ', l, ' - All right reserved'],
                  1,
                  null,
                ),
              ],
              1,
              null,
            ),
            e(
              'nav',
              null,
              {
                class:
                  'w-full flex flex-col items-center md:w-auto md:flex-row gap-4 md:place-self-center md:justify-self-end',
              },
              [
                r(
                  g,
                  {
                    href: 'https://qwik.builder.io/',
                    target: '_blank',
                    'data-goatcounter-click': 'open-quik',
                    'data-goatcounter-title': 'Open Quik',
                    'data-goatcounter-referrer': 'referrer',
                    children: 'made with qwik',
                    [t]: {
                      href: t,
                      target: t,
                      'data-goatcounter-click': t,
                      'data-goatcounter-title': t,
                      'data-goatcounter-referrer': t,
                    },
                  },
                  3,
                  'yk_0',
                ),
                r(
                  g,
                  {
                    href: '/blog',
                    'data-goatcounter-click': 'open-articles',
                    'data-goatcounter-title': 'Open Articles',
                    'data-goatcounter-referrer': 'footer',
                    children: 'Blog',
                    [t]: {
                      href: t,
                      'data-goatcounter-click': t,
                      'data-goatcounter-title': t,
                      'data-goatcounter-referrer': t,
                    },
                  },
                  3,
                  'yk_1',
                ),
                r(
                  g,
                  {
                    href: '/projects',
                    'data-goatcounter-click': 'open-projects',
                    'data-goatcounter-title': 'Open Projects',
                    'data-goatcounter-referrer': 'footer',
                    children: 'Projects',
                    [t]: {
                      href: t,
                      'data-goatcounter-click': t,
                      'data-goatcounter-title': t,
                      'data-goatcounter-referrer': t,
                    },
                  },
                  3,
                  'yk_2',
                ),
                r(
                  g,
                  {
                    href: '/button-game',
                    'data-goatcounter-click': 'open-game',
                    'data-goatcounter-title': 'Open Game',
                    'data-goatcounter-referrer': 'referrer',
                    children: 'Try this game',
                    [t]: {
                      href: t,
                      'data-goatcounter-click': t,
                      'data-goatcounter-title': t,
                      'data-goatcounter-referrer': t,
                    },
                  },
                  3,
                  'yk_3',
                ),
                r(
                  g,
                  {
                    href: 'https://www.amazon.it/hz/wishlist/ls/2JT4PUEODMY27?ref_=wl_share',
                    'data-goatcounter-click': 'open-wishlist',
                    'data-goatcounter-title': 'Open Wishilist',
                    'data-goatcounter-referrer': 'referrer',
                    target: '_blank',
                    children: 'Wishlist',
                    [t]: {
                      href: t,
                      'data-goatcounter-click': t,
                      'data-goatcounter-title': t,
                      'data-goatcounter-referrer': t,
                      target: t,
                    },
                  },
                  3,
                  'yk_4',
                ),
                e(
                  'label',
                  null,
                  {
                    class: 'cursor-pointer',
                    'data-goatcounter-click': p(
                      a => (a.value, 'open'),
                      [n],
                      '"cat-mode-"+p0.value?"open":"close"',
                    ),
                    'data-goatcounter-title': 'Cat Mode',
                    'data-goatcounter-referrer': 'referrer',
                    onClick$: $('s_jWy0aWw4FvU', [n]),
                  },
                  'CLick me',
                  3,
                  null,
                ),
              ],
              1,
              null,
            ),
          ],
          1,
          null,
        ),
      },
      1,
      'yk_5',
    )
  },
  Ie = d(o(Ae, 's_GvPhUJ5Kg9Q')),
  Oe = () =>
    r(
      c,
      {
        children: e(
          'div',
          null,
          { class: 'navbar bg-base-100' },
          [
            e(
              'div',
              null,
              { class: 'navbar-start' },
              e(
                'div',
                null,
                { class: 'dropdown' },
                [
                  e(
                    'label',
                    null,
                    { tabIndex: 0, class: 'btn btn-ghost btn-circle' },
                    e(
                      'svg',
                      null,
                      {
                        xmlns: 'http://www.w3.org/2000/svg',
                        class: 'h-5 w-5',
                        fill: 'none',
                        viewBox: '0 0 24 24',
                        stroke: 'currentColor',
                      },
                      e(
                        'path',
                        null,
                        {
                          'stroke-linecap': 'round',
                          'stroke-linejoin': 'round',
                          'stroke-width': '2',
                          d: 'M4 6h16M4 12h16M4 18h7',
                        },
                        null,
                        3,
                        null,
                      ),
                      3,
                      null,
                    ),
                    3,
                    null,
                  ),
                  e(
                    'ul',
                    null,
                    {
                      tabIndex: 0,
                      class:
                        'menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52',
                    },
                    [
                      e(
                        'li',
                        null,
                        null,
                        r(
                          g,
                          { href: '/', children: 'Homepage', [t]: { href: t } },
                          3,
                          '8h_0',
                        ),
                        1,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        r(
                          g,
                          {
                            href: '/blog',
                            'data-goatcounter-click': 'open-articles',
                            'data-goatcounter-title': 'Open Articles',
                            'data-goatcounter-referrer': 'header',
                            children: 'Blog',
                            [t]: {
                              href: t,
                              'data-goatcounter-click': t,
                              'data-goatcounter-title': t,
                              'data-goatcounter-referrer': t,
                            },
                          },
                          3,
                          '8h_1',
                        ),
                        1,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        r(
                          g,
                          {
                            href: '/projects',
                            'data-goatcounter-click': 'open-projects',
                            'data-goatcounter-title': 'Open Projects',
                            'data-goatcounter-referrer': 'header',
                            children: 'Projects',
                            [t]: {
                              href: t,
                              'data-goatcounter-click': t,
                              'data-goatcounter-title': t,
                              'data-goatcounter-referrer': t,
                            },
                          },
                          3,
                          '8h_2',
                        ),
                        1,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        r(
                          g,
                          {
                            href: '/Pasquale_De_Lucia-Resume.pdf',
                            target: '_blank',
                            'data-goatcounter-click': 'get-resume',
                            'data-goatcounter-title': 'Get Resume',
                            'data-goatcounter-referrer': 'header',
                            children: 'Resume',
                            [t]: {
                              href: t,
                              target: t,
                              'data-goatcounter-click': t,
                              'data-goatcounter-title': t,
                              'data-goatcounter-referrer': t,
                            },
                          },
                          3,
                          '8h_3',
                        ),
                        1,
                        null,
                      ),
                    ],
                    1,
                    null,
                  ),
                ],
                1,
                null,
              ),
              1,
              null,
            ),
            e(
              'div',
              null,
              { class: 'navbar-center' },
              r(
                g,
                {
                  href: '/',
                  class: 'normal-case text-xl text-gradient-hover',
                  children: 'Nyruchi',
                  [t]: { href: t, class: t },
                },
                3,
                '8h_4',
              ),
              1,
              null,
            ),
            e('div', null, { class: 'navbar-end' }, null, 3, null),
          ],
          1,
          null,
        ),
      },
      1,
      '8h_5',
    ),
  De = d(o(Oe, 's_o4ccBuvIYCs')),
  Te = `.reindeer{--rudolph-antler: #ddb892;--rudolph-body: #9d6b53;--rudolph-body-dark: #946651;--rudolph-nose: #8c6351;--rudolph-nose-red: #690500;--rudolph-eye: #432818;--rudolph-ear: #774936;--rudolph-belly: #ede0d4;--rudolph-leg: #432818;position:fixed;transform:translate(-50%,-50%);top:50%;left:50%;width:16rem;height:16rem;z-index:-1;opacity:.2}.reindeer .antler{position:absolute;margin:2.7rem 0 0 2.3rem;width:5rem;height:.7rem;border-radius:.35rem;background-color:var(--rudolph-antler);transform-origin:5.7rem 0;transform:translate(-1rem,2.5rem) rotate(20deg)}.reindeer .antler.antler--right{transform:scaleX(-1) translate(-1rem,2.5rem) rotate(20deg)}.reindeer .antler .hook:first-child{position:absolute;top:-2.3rem;left:-2.3rem;width:3rem;height:3rem;background:radial-gradient(circle at 100% 0,transparent,transparent 2.3rem,var(--rudolph-antler) 2.3rem,var(--rudolph-antler) 3rem,transparent 3rem)}.reindeer .antler .hook:nth-child(2){position:absolute;top:-1.7rem;width:2.4rem;height:2.4rem;background:radial-gradient(circle at 100% 0,transparent,transparent 1.7rem,var(--rudolph-antler) 1.7rem,var(--rudolph-antler) 2.4rem,transparent 2.4rem)}.reindeer .antler .hook:nth-child(3){position:absolute;top:-1.3rem;left:1.5rem;width:2rem;height:2rem;background:radial-gradient(circle at 100% 0,transparent,transparent 1.3rem,var(--rudolph-antler) 1.3rem,var(--rudolph-antler) 2rem,transparent 2rem)}.reindeer .antler .hook:before{content:"";display:block;position:absolute;top:-.35rem;width:.7rem;height:.7rem;background-color:var(--rudolph-antler);border-radius:.35rem}.reindeer .head{position:absolute;z-index:3;top:4rem;left:5rem;width:6rem;height:6rem}.reindeer .head .face{position:absolute;width:6rem;height:6rem;background:var(--rudolph-body);border-radius:50%/50% 50% 60% 60%}.reindeer .head .face:after{content:"";display:block;position:absolute;top:.05rem;left:.5rem;width:5rem;height:5.4rem;border-radius:50%;background:radial-gradient(circle at center,transparent,transparent 2.5rem,var(--rudolph-body-dark) 2.5rem,var(--rudolph-body-dark) 5rem);background-position:0 .2rem;transform:scaleX(1.1) rotate(45deg) scaleX(1.1) scale(.9)}.reindeer .ear{position:absolute;left:-2.6rem;top:1.5rem;width:5rem;height:2rem;background:var(--rudolph-body);border-radius:50% 50% 60% 40%/50% 40% 40% 50%;transform:rotate(-10deg) scale(.8)}.reindeer .ear:after{content:"";display:block;position:absolute;left:1rem;top:.5rem;width:3rem;height:1.2rem;background:var(--rudolph-ear);border-radius:50% 50% 50% 40%/50% 40% 60% 50%}.reindeer .ear.ear--right{left:auto;right:-2.6rem;transform:rotate(10deg) scaleX(-1) scale(.8)}.reindeer .eye{position:absolute;top:2.5rem;left:2rem;width:.6rem;height:.8rem;border-radius:50%;background-color:var(--rudolph-eye);transform:rotate(10deg)}.reindeer .eye.eye--right{left:3.4rem;transform:rotate(-10deg)}.reindeer .nose{position:absolute;top:3.5rem;left:.7rem;width:4.6rem;height:3.6rem;border-radius:50%;background-color:var(--rudolph-nose)}.reindeer .nose:before{content:"";display:block;position:absolute;top:.3rem;left:.6rem;width:3.4rem;height:2.6rem;border-radius:50%;background-color:var(--rudolph-nose-red)}.reindeer .nose:after{content:"";display:block;position:absolute;top:.6rem;left:1.6rem;width:1.8rem;height:1.2rem;border-radius:50%;background-color:#ffffff1a}.reindeer .body{position:absolute;top:9.6rem;left:5rem;width:6rem;height:6rem;background:var(--rudolph-body);border-radius:3rem 3rem 0 0/4rem 4rem 0 0}.reindeer .body:after{content:"";display:block;position:absolute;width:3rem;height:4rem;background-color:var(--rudolph-belly);border-radius:50%;top:0rem;left:1.5rem}.reindeer .hand{position:absolute;z-index:2;top:1rem;left:.8rem;width:2rem;height:2rem;background:radial-gradient(circle at 100% 0,transparent,transparent 1.15rem,var(--rudolph-leg) 1.2rem,var(--rudolph-leg) 2rem,transparent 2.05rem);transform:scaleX(.7) rotate(10deg)}.reindeer .hand:after{content:"";display:block;position:absolute;top:1.2rem;left:1.6rem;width:.8rem;height:.8rem;background-color:var(--rudolph-leg);border-radius:50%}.reindeer .hand.hand--right{left:3.2rem;transform:scaleX(-1) scaleX(.7) rotate(10deg)}.reindeer .legs{position:absolute;left:-1rem;top:2rem;width:8rem;height:4rem;overflow:hidden}.reindeer .legs:before{content:"";display:block;position:absolute;top:1rem;left:.3rem;width:2rem;height:3.4rem;background-color:var(--rudolph-body);border-radius:50%;transform:rotate(-20deg)}.reindeer .legs:after{content:"";display:block;position:absolute;top:1rem;right:.3rem;width:2rem;height:3.4rem;background-color:var(--rudolph-body);border-radius:50%;transform:rotate(20deg)}.reindeer .foot{position:absolute;width:3rem;height:1.5rem;background-color:var(--rudolph-leg);border-radius:1.5rem 1.5rem 0 0;top:4.5rem}.reindeer .foot.foot--right{left:3rem}
`,
  He = () => (
    _(o(Te, 's_0HhqKOJuYCM')),
    r(
      c,
      {
        children: e(
          'div',
          null,
          { class: 'reindeer' },
          [
            e(
              'div',
              null,
              { class: 'antler' },
              [
                e('div', null, { class: 'hook' }, null, 3, null),
                e('div', null, { class: 'hook' }, null, 3, null),
                e('div', null, { class: 'hook' }, null, 3, null),
              ],
              3,
              null,
            ),
            e(
              'div',
              null,
              { class: 'antler antler--right' },
              [
                e('div', null, { class: 'hook' }, null, 3, null),
                e('div', null, { class: 'hook' }, null, 3, null),
                e('div', null, { class: 'hook' }, null, 3, null),
              ],
              3,
              null,
            ),
            e(
              'div',
              null,
              { class: 'body' },
              [
                e('div', null, { class: 'hand' }, null, 3, null),
                e('div', null, { class: 'hand hand--right' }, null, 3, null),
                e('div', null, { class: 'legs' }, null, 3, null),
                e('div', null, { class: 'foot' }, null, 3, null),
                e('div', null, { class: 'foot foot--right' }, null, 3, null),
              ],
              3,
              null,
            ),
            e(
              'div',
              null,
              { class: 'head' },
              [
                e('div', null, { class: 'ear' }, null, 3, null),
                e('div', null, { class: 'ear ear--right' }, null, 3, null),
                e('div', null, { class: 'face' }, null, 3, null),
                e('div', null, { class: 'eye' }, null, 3, null),
                e('div', null, { class: 'eye eye--right' }, null, 3, null),
                e('div', null, { class: 'nose' }, null, 3, null),
              ],
              3,
              null,
            ),
          ],
          3,
          null,
        ),
      },
      3,
      'cm_0',
    )
  ),
  Re = d(o(He, 's_0Bd6yCHL7MI')),
  Be = `.santa-container{position:fixed;z-index:9999;opacity:1;transform-origin:right bottom;animation:init-santa 3s linear 1,walk-around 20s linear 3.2s infinite;height:46.875em;width:37.5em;right:0;bottom:0;transform:scale(.1)}.santa-container .santa{background-color:#edbb93;height:6.25em;width:18.75em;position:absolute;transform:translate(-50%);left:50%;top:17.5em}.santa-container .ears{position:absolute;height:4.37em;width:23.75em;background-color:#e59076;transform:translate(-50%);left:50%;top:18.75em;border-radius:3.12em}.santa-container .santa:before{content:"";position:absolute;height:1.56em;width:1.56em;background-color:#0c2137;border-radius:50%;top:2.5em;left:5em;box-shadow:6.25em 0 #0c2137}.santa-container .moustache{position:absolute;height:4.37em;width:11.25em;background-color:#e3e1ed;left:-2.18em;top:5em;border-radius:3.12em 0}.santa-container .moustache:before{position:absolute;content:"";height:4.37em;width:11.25em;background-color:#e3e1ed;left:11.25em;top:0;border-radius:0 3.12em}.santa-container .beard:after{content:"";background-color:#e3e1ed;height:20.62em;width:6.25em;border-radius:6.87em;position:absolute;top:3.12em;right:9.68em}.santa-container .beard:before{background-color:#d3d2e8;height:17.5em;width:6.87em;border-radius:6.87em;position:absolute;content:"";top:1.87em;right:5em;z-index:0;box-shadow:-8.75em 0 #d3d2e8}.santa-container .beard{background-color:#bfc2e0;height:15.62em;width:6.25em;border-radius:6.87em;position:absolute;top:21.25em;left:25em;box-shadow:-18.75em 0 #bfc2e0}.santa-container .mouth{background:linear-gradient(#ffffff 1.87em,#0c2137 1.87em);height:5.62em;width:4.37em;position:absolute;top:23.75em;left:16.25em;border-radius:0 0 4.375em 4.37em;overflow:hidden}.santa-container .mouth:before{content:"";position:absolute;background-color:#ea385f;height:2.81em;width:3.43em;top:3.43em;left:-.62em;border-radius:.62em}.santa-container .hair{height:5em;width:23.12em;background-color:#c3c1df;position:absolute;transform:translate(-50%);left:50%;top:15em;border-radius:5em}.santa-container .hair:before{position:absolute;content:"";width:25.62em;background-color:#d2d3e6;height:6.25em;left:-1.25em;bottom:2.5em;border-radius:1.25em}.santa-container .hair:after{position:absolute;content:"";height:10em;width:23.75em;background-color:#ea385d;bottom:8.75em;border-radius:16.25em 0 0}.santa-container .hat{position:absolute;background-color:#c82a50;height:6.25em;width:3.12em;left:30.81em;top:1.25em;border-radius:0 2.5em 0 0}.santa-container .hat:before{position:absolute;content:"";background-color:#e1e0ec;height:11.25em;width:11.25em;top:4.37em;left:-1.87em;border-radius:50%}@media screen and (max-width: 800px){.santa-container .container{font-size:.75em}}@keyframes init-santa{0%{bottom:83%}to{bottom:0}}@keyframes init-santa-zig-zag{0%{bottom:83%;right:0}10%{right:10%}20%{right:2%}30%{right:15%}40%{right:7%}50%{right:12%}60%{right:0}70%{right:8%}80%{right:0%}90%{right:10%}to{bottom:0;right:0}}@keyframes walk-around{0%{right:0;bottom:0}5%{right:4%;bottom:5px}10%{right:8%;bottom:0}15%{right:12%;bottom:5px}20%{right:16%;bottom:0}25%{right:20%;bottom:5px}30%{right:24%;bottom:0}35%{right:28%;bottom:5px}40%{right:32%;bottom:0}45%{right:36%;bottom:5px}50%{right:40%;bottom:0}55%{right:36%;bottom:5px}60%{right:32%;bottom:0}65%{right:28%;bottom:5px}70%{right:24%;bottom:0}75%{right:20%;bottom:5px}80%{right:16%;bottom:0}85%{right:12%;bottom:5px}90%{right:8%;bottom:0}95%{right:4%;bottom:5px}to{right:0;bottom:0}}
`,
  Ee = () => (
    _(o(Be, 's_BsrO2LM87qo')),
    r(
      c,
      {
        children: e(
          'div',
          null,
          { class: 'santa-container' },
          [
            e('div', null, { class: 'ears' }, null, 3, null),
            e('div', null, { class: 'beard' }, null, 3, null),
            e('div', null, { class: 'mouth' }, null, 3, null),
            e('div', null, { class: 'hat' }, null, 3, null),
            e('div', null, { class: 'hair' }, null, 3, null),
            e(
              'div',
              null,
              { class: 'santa' },
              e('div', null, { class: 'moustache' }, null, 3, null),
              3,
              null,
            ),
          ],
          3,
          null,
        ),
      },
      3,
      'gI_0',
    )
  ),
  We = d(o(Ee, 's_o6tPurUTJPc')),
  Ze = async ({ cacheControl: n }) => {
    n({ staleWhileRevalidate: 604800, maxAge: 5 })
  },
  $e = () => {
    P()
    const n = f(!1)
    R(H, n)
    const l = new Date(),
      a = C(l, { month: 11, date: 5 }),
      i = C(l, { year: l.getFullYear() + 1, month: 0, date: 15 }),
      s = W(l, { start: a, end: i }),
      u = f(s ? new Array(200).fill(0) : null)
    R(V, u)
    const b = C(l, { month: 2, date: 5 }),
      z = C(l, { month: 3, date: 5 }),
      v = W(l, { start: b, end: z })
    return r(
      c,
      {
        children: [
          n.value &&
            u.value &&
            e(
              'div',
              null,
              { class: 'snow-container' },
              u.value.map((w, x) =>
                e('div', null, { class: 'snow' }, null, 3, x),
              ),
              1,
              'q8_0',
            ),
          r(De, null, 3, 'q8_1'),
          e(
            'main',
            null,
            null,
            [
              n.value && !u.value && !v && r(ze, null, 3, 'q8_2'),
              n.value && !u.value && !v && r(je, null, 3, 'q8_3'),
              n.value && u.value && r(We, null, 3, 'q8_4'),
              n.value && u.value && r(Re, null, 3, 'q8_5'),
              n.value && v && r(Fe, null, 3, 'q8_6'),
              r(S, null, 3, 'q8_7'),
              r(
                m,
                {
                  children: e(
                    'section',
                    null,
                    { class: 'inner-section' },
                    r(qe, null, 3, 'q8_8'),
                    1,
                    null,
                  ),
                },
                1,
                'q8_9',
              ),
            ],
            1,
            null,
          ),
          r(Ie, null, 3, 'q8_10'),
        ],
      },
      1,
      'q8_11',
    )
  },
  Ue = d(o($e, 's_6Y0uFrvPmQs')),
  Ve = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ue, onGet: Ze },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Je = n => {
    const l = [...n.articles]
    return r(
      c,
      {
        children: e(
          'div',
          null,
          { class: 'container mx-auto' },
          e(
            'div',
            null,
            { class: 'grid md:grid-cols-2 justify-items-center gap-12' },
            l.map(a =>
              r(
                g,
                {
                  get href() {
                    return a.href
                  },
                  target: '_blank',
                  'data-goatcounter-click': 'open-article',
                  'data-goatcounter-title': 'Open Article',
                  get 'data-goatcounter-referrer'() {
                    return n.referrer || 'referrer'
                  },
                  children: e(
                    'article',
                    null,
                    { class: 'prose' },
                    [
                      e('h3', null, null, h(a, 'title'), 1, null),
                      e(
                        'p',
                        null,
                        { class: 'flex items-center gap-2' },
                        [
                          h(a, 'date'),
                          ' ',
                          e(
                            'span',
                            null,
                            {
                              class:
                                'bg-secondary text-black p-1 text-xs rounded',
                            },
                            h(a, 'lang'),
                            1,
                            null,
                          ),
                        ],
                        1,
                        null,
                      ),
                      e('p', null, null, h(a, 'description'), 1, null),
                    ],
                    1,
                    null,
                  ),
                  [t]: {
                    href: y(a, 'href'),
                    target: t,
                    'data-goatcounter-click': t,
                    'data-goatcounter-title': t,
                    'data-goatcounter-referrer': p(
                      i => i.referrer || 'referrer',
                      [n],
                      'p0.referrer||"referrer"',
                    ),
                  },
                },
                1,
                a.id,
              ),
            ),
            1,
            null,
          ),
          1,
          null,
        ),
      },
      1,
      'VS_0',
    )
  },
  J = d(o(Je, 's_aHaxQW3gUTM')),
  Qe = n => {
    let l = [...n.items]
    return (
      n.limit && (l = l.splice(0, n.limit)),
      r(
        c,
        {
          children: e(
            'div',
            null,
            null,
            e(
              'div',
              null,
              { class: 'grid md:grid-cols-3 justify-items-center gap-12' },
              l.map(a =>
                r(
                  g,
                  {
                    get href() {
                      return a.href
                    },
                    target: '_blank',
                    get 'aria-label'() {
                      return a.action
                    },
                    class:
                      'card bg-base-100 shadow-xl image-full w-full max-w-[18rem]',
                    'data-goatcounter-click': 'click-card',
                    get 'data-goatcounter-title'() {
                      return a.title
                    },
                    get 'data-goatcounter-referrer'() {
                      return n.referrer || 'referrer'
                    },
                    children: [
                      a.image &&
                        e(
                          'figure',
                          null,
                          null,
                          e(
                            'img',
                            { src: h(a, 'image'), alt: h(a, 'altImage') },
                            { height: 250, width: 250 },
                            null,
                            3,
                            null,
                          ),
                          1,
                          'tS_0',
                        ),
                      e(
                        'div',
                        null,
                        { class: 'card-body' },
                        [
                          e(
                            'h2',
                            null,
                            { class: 'card-title' },
                            h(a, 'title'),
                            1,
                            null,
                          ),
                          e(
                            'p',
                            null,
                            null,
                            [
                              h(a, 'description'),
                              e('br', null, null, null, 3, null),
                              e('br', null, null, null, 3, null),
                              e(
                                'span',
                                null,
                                {
                                  class:
                                    'bg-secondary text-black rounded-3xl p-1 text-xs',
                                },
                                h(a, 'type'),
                                1,
                                null,
                              ),
                            ],
                            1,
                            null,
                          ),
                          e(
                            'div',
                            null,
                            { class: 'card-actions justify-end' },
                            e(
                              'label',
                              null,
                              { class: 'btn btn-square btn-outline btn-sm' },
                              e(
                                'svg',
                                null,
                                {
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  width: '22',
                                  height: '22',
                                  viewBox: '0 0 22 22',
                                  fill: 'none',
                                  stroke: 'currentColor',
                                  'stroke-width': '2',
                                  'stroke-linecap': 'round',
                                  'stroke-linejoin': 'round',
                                  class:
                                    'feather feather-external-link h-3 w-3',
                                },
                                [
                                  e(
                                    'path',
                                    null,
                                    {
                                      d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6',
                                    },
                                    null,
                                    3,
                                    null,
                                  ),
                                  e(
                                    'polyline',
                                    null,
                                    { points: '15 3 21 3 21 9' },
                                    null,
                                    3,
                                    null,
                                  ),
                                  e(
                                    'line',
                                    null,
                                    { x1: '10', y1: '14', x2: '21', y2: '3' },
                                    null,
                                    3,
                                    null,
                                  ),
                                ],
                                3,
                                null,
                              ),
                              3,
                              null,
                            ),
                            3,
                            null,
                          ),
                        ],
                        1,
                        null,
                      ),
                    ],
                    [t]: {
                      href: y(a, 'href'),
                      target: t,
                      'aria-label': y(a, 'action'),
                      class: t,
                      'data-goatcounter-click': t,
                      'data-goatcounter-title': y(a, 'title'),
                      'data-goatcounter-referrer': p(
                        i => i.referrer || 'referrer',
                        [n],
                        'p0.referrer||"referrer"',
                      ),
                    },
                  },
                  1,
                  a.id,
                ),
              ),
              1,
              null,
            ),
            1,
            null,
          ),
        },
        1,
        'tS_1',
      )
    )
  },
  Q = d(o(Qe, 's_Yj7Oj0dysis')),
  Ge = `.area{background:#4e54c8;background:-webkit-linear-gradient(to left,#8f94fb,#4e54c8);width:100%;height:100vh}.circles{position:absolute;bottom:0;left:0;width:100%;height:calc(100vh - 64px);overflow:hidden}.circles li{position:absolute;display:block;list-style:none;width:20px;height:20px;background:rgba(255,255,255,.2);animation:animate 25s linear infinite;bottom:-150px}.circles li:nth-child(1){left:25%;width:80px;height:80px;animation-delay:0s}.circles li:nth-child(2){left:10%;width:20px;height:20px;animation-delay:2s;animation-duration:12s}.circles li:nth-child(3){left:70%;width:20px;height:20px;animation-delay:4s}.circles li:nth-child(4){left:40%;width:60px;height:60px;animation-delay:0s;animation-duration:18s}.circles li:nth-child(5){left:65%;width:20px;height:20px;animation-delay:0s}.circles li:nth-child(6){left:75%;width:110px;height:110px;animation-delay:3s}.circles li:nth-child(7){left:35%;width:150px;height:150px;animation-delay:7s}.circles li:nth-child(8){left:50%;width:25px;height:25px;animation-delay:15s;animation-duration:45s}.circles li:nth-child(9){left:20%;width:15px;height:15px;animation-delay:2s;animation-duration:35s}.circles li:nth-child(10){left:85%;width:150px;height:150px;animation-delay:0s;animation-duration:11s}@keyframes animate{0%{transform:translateY(0) rotate(0);opacity:1;border-radius:0}to{transform:translateY(-1000px) rotate(720deg);opacity:0;border-radius:50%}}
`,
  Ne = () => (
    _(o(Ge, 's_CkFs2bTI3Zs')),
    r(
      c,
      {
        children: e(
          'ul',
          null,
          { class: 'circles' },
          [
            e('li', null, null, null, 3, null),
            e('li', null, null, null, 3, null),
            e('li', null, null, null, 3, null),
            e('li', null, null, null, 3, null),
            e('li', null, null, null, 3, null),
            e('li', null, null, null, 3, null),
            e('li', null, null, null, 3, null),
            e('li', null, null, null, 3, null),
            e('li', null, null, null, 3, null),
            e('li', null, null, null, 3, null),
          ],
          3,
          null,
        ),
      },
      3,
      'HG_0',
    )
  ),
  Ye = d(o(Ne, 's_0hvFUpzGAyM')),
  Ke = () =>
    r(
      c,
      {
        children: e(
          'svg',
          null,
          {
            class: 'w-full',
            viewBox: '184.6301 223.3697 497.5289 319.6713',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          e(
            'g',
            null,
            {
              id: 'objects',
              transform: 'matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)',
            },
            e(
              'g',
              null,
              null,
              [
                e(
                  'g',
                  null,
                  null,
                  [
                    e(
                      'path',
                      null,
                      {
                        d: 'M203.088,436.81c0,0,121.289-218.016,234.086-213.367c52.271,2.155,80.667,54.58,189.018,187.39 c23.68,29.025-73.957,0.844-99.832-13.711c0,0,29.678,71.323,17.55,81.504C521.256,497.642,188.534,470.771,203.088,436.81z',
                      },
                      null,
                      3,
                      null,
                    ),
                    e(
                      'path',
                      null,
                      {
                        style: 'fill:#FF0000;',
                        d: 'M214.989,431.339c0,0,117.473-205.47,219.314-200.9c52.262,2.345,64.324,43.946,183.472,178.285 c24.855,28.025-78.717-9.817-104.593-24.371c0,0,33.153,80.05,21.025,90.231C511.553,493.6,200.434,465.299,214.989,431.339z',
                      },
                      null,
                      3,
                      null,
                    ),
                    e(
                      'path',
                      null,
                      {
                        d: 'M533.792,394.077c-23.439-14.475-31.93-28.12-58.411-67.336c0,0,39.928,64.925,46.647,80.675 c6.72,15.75-3.59-15.027,0.655-15.027S536.182,395.552,533.792,394.077z',
                      },
                      null,
                      3,
                      null,
                    ),
                    e(
                      'path',
                      null,
                      {
                        style: 'fill:#BA0808;',
                        d: 'M475.381,326.74c0,0,89.802,82.597,124.642,83.022c0,0-3.117,4.079-3.667,5.668 c-0.417,1.205-47.293-3.131-79.019-31.988C504.21,371.502,484.852,340.772,475.381,326.74z',
                      },
                      null,
                      3,
                      null,
                    ),
                    e(
                      'path',
                      null,
                      {
                        d: 'M460.028,332.805c0,0,24.459,12.937,54.497,60.486C525.396,410.499,497.02,347.764,460.028,332.805z',
                      },
                      null,
                      3,
                      null,
                    ),
                  ],
                  3,
                  null,
                ),
                e(
                  'g',
                  null,
                  null,
                  [
                    e(
                      'path',
                      null,
                      {
                        d: 'M556.344,493.337c-0.495-6.746-0.266-11.763-17.707-26.07c-18.356-9.955-32.218-13.512-43.255-14.848 c-3.575-0.434,18.395-3.008,15.385-3.985c-48.516-15.768-95.818-12.332-95.818-12.332l17.284-10.511 c-28.604-7.885-89.09-6.377-115.904-2.459l19.429-9.216c-38.666-1.87-84.902,3.968-107.871,15.085 c-2.298,1.113,1.069-6.262,1.069-6.262l-16.761,4.67c-18.54,6.636-26.521,14.498-27.281,33.827l-0.266,30.723 c-0.547,9.507,11.494,17.166,27.468,13.458c0,0,38.529-8.045,155.166,0.17c110.185,7.761,149.423,34.535,149.423,34.535 c18.271,8.081,28.894-1.364,35.337-19.125L556.344,493.337z',
                      },
                      null,
                      3,
                      null,
                    ),
                    e(
                      'path',
                      null,
                      {
                        style: 'fill:#FFFFFF;',
                        d: 'M528.875,536.977c-2.731,0-5.852-0.742-9.28-2.21c-2.893-1.851-11.365-8.533-40.852-16.815 c-2.076-0.583,6.857-1.092,6.857-1.092c-17.284-2.426-53.776-10.246-77.602-13.34c-5.678-0.736,14.43-2.911,8.247-3.54 c-7.153-0.728-40.685,0.111-48.537-0.442c-31.446-2.215-80.92,0.038-99.922-9.867c-2.489-1.299,9.185,6.156,6.465,6.156 c-24.087,0-40.298,0.677-50.245,1.937c-9.512,1.206-13.959-3.055-13.428-2.129c2.351,4.093,0.586,3.785,0.298,3.846l-0.132,0.029 c-2.276,0.528-4.515,0.796-6.654,0.796c-4.98,0-9.374-1.504-11.753-4.024c-1.165-1.234-1.715-2.57-1.634-3.974l0.01-0.297 l0.264-30.629c0.62-15.518,8.887-24.977,30.719-31.243l-3.841,7.378c23.752-10.107,37.347-19.779,95.009-19.811 c-0.869,1.197-13.039,11.432-13.039,11.432s49.021-6.378,118.219,0.293c-0.345,0.98-10.979,8.693-10.979,8.693 s27.088,1.414,30.727,1.414c18.132,0,40.48,4.552,55.287,9.047c-5.862,0.758-8.545,3.736-8.667,4.067 c0,0,7.456,1.579,11.333,2.54c13.608,3.373,54.946,16.387,54.501,37.883l-4.103,26.396 c-6.491,17.443-14.537,17.506-17.238,17.506C528.894,536.977,528.884,536.977,528.875,536.977z',
                      },
                      null,
                      3,
                      null,
                    ),
                    e(
                      'path',
                      null,
                      {
                        style: 'fill:#E5E5E5;',
                        d: 'M542.38,527.54c-5.555,9.388-11.281,9.437-13.476,9.437h-0.037c-2.729,0-5.845-0.752-9.277-2.22 c-2.888-1.843-11.365-8.525-40.85-16.809c-2.074-0.583,6.865-1.092,6.865-1.092c-17.296-2.426-53.779-10.249-77.613-13.342 c-5.676-0.74,14.434-2.912,8.248-3.542c-7.156-0.728-40.68,0.109-48.528-0.437c-31.45-2.22-80.923,0.036-99.929-9.873 c-2.486-1.298,9.182,6.162,6.465,6.162c-24.088,0-40.292,0.679-50.238,1.94c-9.521,1.201-13.96-3.056-13.438-2.134 c2.352,4.087,0.594,3.784,0.303,3.845l-0.134,0.036c-2.28,0.521-4.512,0.788-6.646,0.788c-4.985,0-9.376-1.503-11.753-4.026 c-1.176-1.226-1.722-2.571-1.637-3.967l0.012-0.303l0.255-30.625c0.437-10.71,4.499-18.521,14.143-24.404 c-3.026,2.767-10.606,9.034-9.595,20.151l0.379,24.713l0,0c0.48,3.79,2.412,6.049,3.714,7.126 c3.942,3.259,9.092,2.444,14.077,2.444c2.134,0,4.378-0.267,6.646-0.788l0.134-0.036c0.291-0.061,2.049,0.242-0.291-3.845 c-0.534-0.922,3.917,3.335,13.427,2.134c9.945-1.261,26.149-1.939,50.238-1.939c2.729,0-8.951-7.46-6.465-6.162 c19.006,9.909,68.479,7.653,99.929,9.873c7.847,0.546,44.637,3.15,51.793,3.878c6.174,0.63-11.942,4.718-6.267,5.458 c23.833,3.093,57.562,7.328,74.845,9.754c0,0-9.502,1.843-7.429,2.426c29.498,8.284,36.048,11.863,38.947,13.706 c3.42,1.468,6.537,2.22,9.278,2.22c0,0,0.013,0,0.024,0C539.335,528.086,540.705,528.086,542.38,527.54z',
                      },
                      null,
                      3,
                      null,
                    ),
                  ],
                  3,
                  null,
                ),
                e(
                  'g',
                  null,
                  null,
                  [
                    e(
                      'path',
                      null,
                      {
                        d: 'M605.095,470.902c-5.431-4.046-36.53-20.999-24.974-55.587c3.386-10.132,13.794-22.931,20.729-28.708 c0.821-0.684-5.086,14.443-0.303,10.613c15.538-12.441,39.81-23.444,55.914-19.135c1.367,0.365-11.646,7.652-10.29,8.143 c1.887,0.684,26.38,8.642,35.988,29.462c0,0-5.607-4.122-8.688,0.633c-1.833,2.83,6.723,11.623,2.112,34.466 c-2.233,11.067-12.674,28.604-23.56,30.354c0,0,0.815-9.578-1.444-8.624c-26.237,11.081-51.548,7.984-53.772,4.549 C596.574,476.708,608.104,473.147,605.095,470.902z',
                      },
                      null,
                      3,
                      null,
                    ),
                    e(
                      'path',
                      null,
                      {
                        style: 'fill:#FFFFFF;',
                        d: 'M608.822,474.511c1.157,0.009,3.928-1.543,2.063-3.746c-2.355-2.785-36.885-17.396-24.813-53.705 c1.679-5.053,8.041-16.109,7.688-13.904c-0.38,2.38,0.308,9.543,4.334,4.48c9.447-11.881,31.036-24.835,44.784-24.465 c0.031,0.349-4.611,2.905-3.173,5.335c1.016,1.72,22.305,4.403,37.19,22.769c-4.756-2.631-8.386,1.096-8.268,2.578 c0.654,8.168,6.186,15.753,2.858,32.772c-1.774,9.07-7.771,21.953-13.181,25.268c-0.985-1.39,0.256-6.953-4.077-10.876 c-0.884-0.799-0.013,1.927-4.843,5.596C631.506,480.192,609.646,475.228,608.822,474.511z',
                      },
                      null,
                      3,
                      null,
                    ),
                    e(
                      'path',
                      null,
                      {
                        style: 'fill:#E5E5E5;',
                        d: 'M672.589,437.448c-0.045,2.924-0.372,6.208-1.128,9.938c-1.849,9.047-7.934,21.897-13.366,25.168 c-0.973-1.401-1.251-7.848-3.069-10.749c-0.253-0.404-0.952,1.77-5.817,5.396c-17.977,13.455-39.798,8.336-40.615,7.615 c1.151,0.008,3.939-1.524,2.087-3.733c-2.212-2.66-33.201-16.129-25.995-48.304c0.181,25.242,25.101,36.229,27.073,38.608 c1.852,2.209-0.927,3.741-2.09,3.731c0.821,0.724,22.651,5.841,40.627-7.613c4.854-3.627,3.983-6.344,4.879-5.557 c2.53,2.225,4.097,9.3,3.999,10.91c5.433-3.273,11.528-16.122,13.366-25.17C672.551,437.606,672.576,437.521,672.589,437.448z',
                      },
                      null,
                      3,
                      null,
                    ),
                  ],
                  3,
                  null,
                ),
              ],
              3,
              null,
            ),
            3,
            null,
          ),
          3,
          null,
        ),
      },
      3,
      'Fg_0',
    ),
  Xe = d(o(Ke, 's_F4XGSf5645s')),
  et =
    '/assets/664d087c-pako_cropped.webp 200w, /assets/f00be9d3-pako_cropped.webp 400w, /assets/bdec0c37-pako_cropped.webp 600w, /assets/a93cfc9e-pako_cropped.webp 800w, /assets/65b6374b-pako_cropped.webp 1200w',
  tt = 1200,
  lt = 1200,
  nt = { srcSet: et, width: tt, height: lt }
function rt(n, l, a, i) {
  return e(
    'img',
    { decoding: 'async', loading: 'lazy', ...n },
    nt,
    void 0,
    3,
    l,
  )
}
const at = n => {
    P()
    const l = T(H),
      a = T(V),
      i = new Date().getFullYear(),
      s = new Date('1/1/2015').getFullYear(),
      u = me.toWords(i - s)
    return (
      u.charAt(0).toUpperCase(),
      u.slice(1),
      r(
        c,
        {
          children: e(
            'div',
            null,
            { class: 'hero min-h-[calc(100vh-64px)] bg-base-200' },
            [
              r(Ye, null, 3, 'ED_0'),
              e(
                'div',
                null,
                { class: 'hero-content flex-col lg:flex-row' },
                [
                  e(
                    'div',
                    null,
                    { class: 'relative' },
                    [
                      r(
                        rt,
                        {
                          loading: 'eager',
                          alt: 'Pasquale De Lucia picture',
                          class:
                            'max-w-[18rem] xs:max-w-[8rem] sm:max-w-[12rem] md:max-w-xs rounded-lg shadow-2xl',
                          [t]: { loading: t, alt: t, class: t },
                        },
                        3,
                        'ED_1',
                      ),
                      l.value &&
                        a.value &&
                        r(
                          c,
                          {
                            children: e(
                              'div',
                              null,
                              {
                                class:
                                  'absolute top-[-34px] right-[-48px] w-[100px] rotate-[26deg]',
                              },
                              r(Xe, null, 3, 'ED_2'),
                              1,
                              null,
                            ),
                          },
                          1,
                          'ED_3',
                        ),
                    ],
                    1,
                    null,
                  ),
                  e(
                    'div',
                    null,
                    { class: 'prose m-6 md:my-0' },
                    [
                      e(
                        'h1',
                        null,
                        { class: 'text-5xl font-bold' },
                        'Pasquale De Lucia',
                        3,
                        null,
                      ),
                      e(
                        'p',
                        null,
                        { class: 'text-xl text-gradient' },
                        [
                          'Web Wizard and ',
                          e('strong', null, null, 'JavaScript Lover', 3, null),
                        ],
                        3,
                        null,
                      ),
                      e(
                        'p',
                        null,
                        null,
                        [
                          'I craft digital wonders as a ',
                          p(b => b.role, [n], 'p0.role'),
                          ' at ',
                          p(b => b.company, [n], 'p0.company'),
                          '.',
                        ],
                        3,
                        null,
                      ),
                      e(
                        'p',
                        null,
                        null,
                        [
                          'With a solid ',
                          u,
                          ' years of',
                          ' ',
                          e('strong', null, null, 'web development', 3, null),
                          " under my belt, I'm here to make your online dreams a reality.",
                        ],
                        1,
                        null,
                      ),
                      e(
                        'p',
                        null,
                        null,
                        r(
                          g,
                          {
                            href: '#links',
                            class: 'btn btn-primary text-white',
                            'data-goatcounter-click': 'get-resume',
                            'data-goatcounter-title': 'Get Resume',
                            'data-goatcounter-referrer': 'index-hero',
                            children: 'Get resume',
                            [t]: {
                              href: t,
                              class: t,
                              'data-goatcounter-click': t,
                              'data-goatcounter-title': t,
                              'data-goatcounter-referrer': t,
                            },
                          },
                          3,
                          'ED_4',
                        ),
                        1,
                        null,
                      ),
                    ],
                    1,
                    null,
                  ),
                ],
                1,
                null,
              ),
            ],
            1,
            null,
          ),
        },
        1,
        'ED_5',
      )
    )
  },
  it = d(o(at, 's_Jevt7v9CDh4')),
  ot = '_icon_mcn59_1',
  Z = { icon: ot },
  st = n =>
    r(
      c,
      {
        children: e(
          'ul',
          null,
          null,
          n.links.map(l =>
            e(
              'li',
              null,
              { class: 'mb-4' },
              r(
                g,
                {
                  class:
                    'link-container flex items-center justify-between transition duration-200 font-bold bg-primary border-primary border-2 hover:bg-transparent hover:text-primary py-2 w-100 text-white rounded-lg pl-4 md:px-4',
                  get href() {
                    return l.url
                  },
                  target: '_blank',
                  rel: 'noopener',
                  'data-goatcounter-click': 'link-item',
                  get 'data-goatcounter-title'() {
                    return l.title
                  },
                  get 'data-goatcounter-referrer'() {
                    return n.referrer || 'referrer'
                  },
                  children: [
                    e(
                      'span',
                      { dangerouslySetInnerHTML: h(l, 'svg') },
                      { class: Z.icon + ' p-2' },
                      null,
                      3,
                      null,
                    ),
                    e('span', null, null, h(l, 'title'), 1, null),
                    e(
                      'span',
                      { dangerouslySetInnerHTML: h(l, 'svg') },
                      { class: Z.icon + ' p-2 invisible opacity-0' },
                      null,
                      3,
                      null,
                    ),
                  ],
                  [t]: {
                    class: t,
                    href: y(l, 'url'),
                    target: t,
                    rel: t,
                    'data-goatcounter-click': t,
                    'data-goatcounter-title': y(l, 'title'),
                    'data-goatcounter-referrer': p(
                      a => a.referrer || 'referrer',
                      [n],
                      'p0.referrer||"referrer"',
                    ),
                  },
                },
                1,
                'YJ_0',
              ),
              1,
              l.id,
            ),
          ),
          1,
          null,
        ),
      },
      1,
      'YJ_1',
    ),
  ct = d(o(st, 's_x0jeNTb2iQc')),
  ut = '_container_q7mvx_1',
  dt = { container: ut },
  ht = n =>
    r(
      c,
      {
        children: e(
          'div',
          null,
          { class: 'container mx-auto ' + dt.container },
          [
            e(
              'h3',
              null,
              { class: 'text-center mb-4 text-xl font-bold' },
              p(l => l.title, [n], 'p0.title'),
              3,
              null,
            ),
            e(
              'div',
              null,
              { class: 'flex flex-wrap justify-center gap-12' },
              n.stacks.map(l =>
                r(
                  g,
                  {
                    get href() {
                      return l.href
                    },
                    target: '_blank',
                    get 'aria-label'() {
                      return l.href
                    },
                    class: 'w-full max-w-[3rem] min-w-[2rem]',
                    children: e(
                      'div',
                      { dangerouslySetInnerHTML: h(l, 'svg') },
                      null,
                      null,
                      3,
                      null,
                    ),
                    [t]: {
                      href: y(l, 'href'),
                      target: t,
                      'aria-label': y(l, 'href'),
                      class: t,
                    },
                  },
                  1,
                  l.id,
                ),
              ),
              1,
              null,
            ),
          ],
          1,
          null,
        ),
      },
      1,
      'uZ_0',
    ),
  O = d(o(ht, 's_o91wC8IGdho')),
  gt = n =>
    r(
      c,
      {
        children: e(
          'div',
          null,
          { class: 'container mx-auto w-full h-full' },
          e(
            'div',
            null,
            { class: 'relative wrap overflow-hidden p-10 h-full' },
            [
              e(
                'div',
                null,
                {
                  class:
                    'border-2-2 border-secondary absolute h-full border left-5 md:left-1/2',
                  style: 'border-radius: 1%;',
                },
                null,
                3,
                null,
              ),
              n.items.map(
                (l, a) => (
                  P(),
                  a % 2 === 0
                    ? r(
                        m,
                        {
                          pop: !0,
                          children: e(
                            'div',
                            null,
                            {
                              class:
                                'mb-8 flex justify-between items-center w-full flex-row-reverse left-timeline',
                            },
                            [
                              e(
                                'div',
                                null,
                                { class: 'order-1 w-0 md:w-5/12' },
                                null,
                                3,
                                null,
                              ),
                              e(
                                'div',
                                null,
                                {
                                  class:
                                    'order-1 w-full md:w-5/12 px-1 py-4 text-left md:text-right',
                                },
                                [
                                  e(
                                    'p',
                                    null,
                                    { class: 'mb-3 text-base text-secondary' },
                                    h(l, 'startDate'),
                                    1,
                                    null,
                                  ),
                                  e(
                                    'h3',
                                    null,
                                    {
                                      class:
                                        'mb-3 font-bold text-lg md:text-2xl',
                                    },
                                    h(l, 'company'),
                                    1,
                                    null,
                                  ),
                                  e(
                                    'p',
                                    null,
                                    {
                                      class:
                                        'mb-3 font-bold text-md md:text-xl',
                                    },
                                    h(l, 'role'),
                                    1,
                                    null,
                                  ),
                                  e(
                                    'p',
                                    null,
                                    {
                                      class:
                                        'text-sm md:text-base leading-snug text-gray-50 text-opacity-100',
                                    },
                                    h(l, 'description'),
                                    1,
                                    null,
                                  ),
                                ],
                                1,
                                null,
                              ),
                            ],
                            1,
                            null,
                          ),
                          [t]: { pop: t },
                        },
                        1,
                        l.id,
                      )
                    : r(
                        m,
                        {
                          pop: !0,
                          children: e(
                            'div',
                            null,
                            {
                              class:
                                'mb-8 flex justify-between items-center w-full right-timeline',
                            },
                            [
                              e(
                                'div',
                                null,
                                { class: 'order-1 w-0 md:w-5/12' },
                                null,
                                3,
                                null,
                              ),
                              e(
                                'div',
                                null,
                                {
                                  class:
                                    'order-1  w-full md:w-5/12 px-1 py-4 text-left',
                                },
                                [
                                  e(
                                    'p',
                                    null,
                                    { class: 'mb-3 text-base text-secondary' },
                                    h(l, 'startDate'),
                                    1,
                                    null,
                                  ),
                                  e(
                                    'h3',
                                    null,
                                    {
                                      class:
                                        'mb-3 font-bold text-lg md:text-2xl',
                                    },
                                    h(l, 'company'),
                                    1,
                                    null,
                                  ),
                                  e(
                                    'p',
                                    null,
                                    {
                                      class:
                                        'mb-3 font-bold text-md md:text-xl',
                                    },
                                    h(l, 'role'),
                                    1,
                                    null,
                                  ),
                                  e(
                                    'p',
                                    null,
                                    {
                                      class:
                                        'text-sm md:text-base leading-snug text-gray-50 text-opacity-100',
                                    },
                                    h(l, 'description'),
                                    1,
                                    null,
                                  ),
                                ],
                                1,
                                null,
                              ),
                            ],
                            1,
                            null,
                          ),
                          [t]: { pop: t },
                        },
                        1,
                        l.id,
                      )
                ),
              ),
            ],
            1,
            null,
          ),
          1,
          null,
        ),
      },
      1,
      'VS_0',
    ),
  mt = d(o(gt, 's_sZIPqDBaEpc'))
function pt(n) {
  switch (!0) {
    case n.includes('ita'):
      return 'ITA'
    default:
      return 'ENG'
  }
}
const G = async ({ devToApiKey: n, limit: l }) => {
    const a = await fetch(
      `https://dev.to/api/articles/me/published?per_page=${l || 30}`,
      { headers: new Headers({ 'api-key': n }) },
    )
    if (a.status !== 200) throw Error(a.status.toString())
    return (await a.json()).map(s => ({
      id: s.id,
      href: s.url,
      title: s.title,
      description: s.description,
      bodyMarkdown: s.body_markdown,
      username: s.user.username,
      slug: s.slug,
      date: ge(new Date(s.published_timestamp), 'PP'),
      lang: pt(s.tag_list),
    }))
  },
  ft = [
    {
      id: 1,
      title: 'Github',
      url: 'https://github.com/VarPDev',
      svg: `
      <svg fill="#ffffff" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    `,
    },
    {
      id: 2,
      title: 'Linkedin',
      url: 'https://www.linkedin.com/in/pasquale-de-lucia-web-dev/',
      svg: `
      <svg fill="#ffffff" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>    
    `,
    },
    {
      id: 3,
      title: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/8172268/pasquale-de-lucia',
      svg: `
      <svg fill="#ffffff" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Stack Overflow</title><path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z"/></svg>
    `,
    },
    {
      id: 4,
      title: 'DEV.to',
      url: 'https://dev.to/varpdev',
      svg: `
      <svg fill="#ffffff" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>dev.to</title><path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/></svg>
    `,
    },
    {
      id: 5,
      title: 'Resume',
      url: '/Pasquale_De_Lucia-Resume.pdf',
      svg: `
      <svg fill="#ffffff" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>ReadMe</title><path d="M22.0113 3.269h-5.8219a4.2894 4.2894 0 0 0-4.1854 3.3452A4.2894 4.2894 0 0 0 7.8186 3.269h-5.818A2.0007 2.0007 0 0 0 0 5.2697v10.2434a2.0007 2.0007 0 0 0 2.0007 2.0007h3.7372c4.2574 0 5.5299 1.0244 6.138 3.133a.112.112 0 0 0 .1121.084h.024a.112.112 0 0 0 .112-.084c.6122-2.1086 1.8847-3.133 6.138-3.133h3.7373A2.0007 2.0007 0 0 0 24 15.5131V5.2697a2.0007 2.0007 0 0 0-1.9887-2.0006Zm-11.928 11.0557a.144.144 0 0 1-.144.144H3.2571a.144.144 0 0 1-.144-.144v-.9523a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm0-2.5368a.144.144 0 0 1-.144.144H3.2571a.144.144 0 0 1-.144-.144v-.9523a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm0-2.5368a.144.144 0 0 1-.144.144H3.2571a.144.144 0 0 1-.144-.144v-.9524a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm10.8037 5.0696a.144.144 0 0 1-.144.144h-6.6823a.144.144 0 0 1-.144-.144v-.9523a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm0-2.5368a.144.144 0 0 1-.144.144h-6.6823a.144.144 0 0 1-.144-.144v-.9523a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm0-2.5368a.144.144 0 0 1-.144.144h-6.6823a.144.144 0 0 1-.144-.144v-.9484a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144v.9524z"/></svg>
    `,
    },
  ],
  N = [
    {
      id: 6,
      title: 'Qwik',
      description: 'I joined this open source project as a contributor',
      altImage: 'Qwik logo picture',
      image: '/qwik-logo.png',
      action: 'Check framework',
      type: 'Qwik',
      color: 'orange-600',
      href: 'https://qwik.builder.io/',
    },
    {
      id: 5,
      title: 'PLMaker',
      description: 'Price list generator with some utilities',
      altImage: 'price list maker',
      image: '/price-list.jpeg',
      action: 'Try it',
      type: 'NextJS | Angular',
      color: 'orange-600',
      href: 'https://plmaker.dejizen.com/',
    },
    {
      id: 4,
      title: 'Dejizen',
      description: 'A brand that build many things',
      altImage: 'dejizen',
      image: '/dejizen.svg',
      action: 'Try it',
      type: 'NodeJS | pug',
      color: 'orange-600',
      href: 'https://dejizen.com/',
    },
    {
      id: 3,
      title: 'Rick & Morty',
      description:
        'Wiki about Rick and Morty, an adult animated science fiction sitcom',
      altImage: 'rick and morty',
      image: '/rick_and_morty.png',
      action: 'Try it',
      type: 'Angular',
      color: 'orange-600',
      href: 'https://rick-and-morty-e.web.app/',
    },
    {
      id: 2,
      title: 'This website',
      description: 'Feel free to check out how I developed this website',
      altImage: 'Pasquale De Lucia picture',
      image: '/Pako.jpeg',
      action: 'Check code',
      type: 'Qwik',
      color: 'orange-600',
      href: 'https://github.com/VarPDev/pako',
    },
    {
      id: 1,
      title: 'Resume me',
      description: 'An app built with Flutter to share your own resume',
      altImage: 'Resume me app logo',
      image: '/resume_me.png',
      action: 'Download',
      type: 'Flutter',
      color: 'orange-600',
      href: 'https://apps.apple.com/it/app/resume-me/id1663622782',
    },
  ],
  bt = [
    {
      id: 1,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Angular</title><path d="M9.96 12.648h4.08L12 7.74l-2.04 4.908zM12 0 .828 3.984l1.704 14.772L12 24l9.468-5.244 1.704-14.772L12 0zm6.972 18.312h-2.604l-1.404-3.504H9.036l-1.404 3.504H5.028L12 2.652l6.972 15.66z"/></svg>
    `,
      href: 'https://angular.io/',
    },
    {
      id: 2,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>React</title><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>
    `,
      href: 'https://react.dev/',
    },
    {
      id: 3,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Flutter</title><path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/></svg>
    `,
      href: 'https://flutter.dev/',
    },
    {
      id: 4,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>
    `,
      href: 'https://en.wikipedia.org/wiki/JavaScript',
    },
    {
      id: 5,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Next.js</title><path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"/></svg>
    `,
      href: 'https://nextjs.org/',
    },
    {
      id: 6,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Nuxt.js</title><path d="M13.4642 19.8295h8.9218c.2834 0 .5618-.0723.8072-.2098a1.5899 1.5899 0 0 0 .5908-.5732 1.5293 1.5293 0 0 0 .216-.783 1.529 1.529 0 0 0-.2167-.7828L17.7916 7.4142a1.5904 1.5904 0 0 0-.5907-.573 1.6524 1.6524 0 0 0-.807-.2099c-.2833 0-.5616.0724-.807.2098a1.5904 1.5904 0 0 0-.5907.5731L13.4642 9.99l-2.9954-5.0366a1.5913 1.5913 0 0 0-.591-.573 1.6533 1.6533 0 0 0-.8071-.2098c-.2834 0-.5617.0723-.8072.2097a1.5913 1.5913 0 0 0-.591.573L.2168 17.4808A1.5292 1.5292 0 0 0 0 18.2635c-.0001.2749.0744.545.216.783a1.59 1.59 0 0 0 .5908.5732c.2454.1375.5238.2098.8072.2098h5.6003c2.219 0 3.8554-.9454 4.9813-2.7899l2.7337-4.5922L16.3935 9.99l4.3944 7.382h-5.8586ZM7.123 17.3694l-3.9083-.0009 5.8586-9.8421 2.9232 4.921-1.9572 3.2892c-.7478 1.1967-1.5972 1.6328-2.9163 1.6328z"/></svg>  
    `,
      href: 'https://nuxt.com/',
    },
    {
      id: 7,
      svg: `
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Qwik</title><path d="M7.5469 0a2.957 2.957 0 0 0-2.5606 1.4785L.5332 9.1915a2.957 2.957 0 0 0 0 2.957l4.4531 7.7128A2.955 2.955 0 0 0 7.547 21.338H12l8.5938 2.6484c.2409.0742.4512-.1782.3359-.4023l-1.916-3.7227 4.4531-7.7129a2.957 2.957 0 0 0 0-2.957l-4.4531-7.7129A2.957 2.957 0 0 0 16.453 0zm0 .7656L17.7324 10.67l-1.8965 1.8985.5782 7.5332L6.2676 10.67l2.371-2.373z"/></svg>
    `,
      href: 'https://qwik.builder.io/',
    },
  ],
  vt = [
    {
      id: 1,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Node.js</title><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/></svg>
    `,
      href: 'https://nodejs.org/en',
    },
    {
      id: 2,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>MongoDB</title><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg>
    `,
      href: 'https://www.mongodb.com/en-us',
    },
    {
      id: 3,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>C Sharp</title><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z"/></svg>
    `,
      href: 'https://dotnet.microsoft.com/en-us/',
    },
  ],
  wt = [
    {
      id: 1,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Visual Studio Code</title><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>
    `,
      href: 'https://code.visualstudio.com/',
    },
    {
      id: 2,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    `,
      href: 'https://github.com/',
    },
    {
      id: 3,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>npm</title><path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"/></svg>
    `,
      href: 'https://www.npmjs.com/',
    },
    {
      id: 4,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Tailwind CSS</title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>
    `,
      href: 'https://tailwindcss.com/',
    },
  ],
  D = [
    {
      id: 1,
      startDate: 'Jan 2022',
      endDate: 'Current',
      company: 'ScuolaZoo',
      slug: 'The voice of the new generations',
      description: `I started in this company as a full-stack developer, in the first year I developed a new mobile app for IOS and Android, 
      stabilized a platform to create and print your own diary and started to think about the future technology which could be used in ScuolaZoo. 
      In the second year I projected the architecture of all new systems that will replace the old ecosystem, reaching the full-stack engineer promotion.`,
      role: 'Full-stack engineer',
    },
    {
      id: 2,
      startDate: 'Mar 2019',
      endDate: 'Jan 2022',
      company: 'Semantyca',
      description: `Worked in Milan based company Semantyca in a team of 7 people.
    During this three years I taught my colleagues the front-end best practices and new frameworks or new tools, becoming a front-end tech lead.
    I also interacted with customers, to decide on the specifications and for post production.`,
      slug: 'A software house with twenty years of experience in building databases',
      role: 'Lead front-end',
    },
    {
      id: 3,
      startDate: 'Jul 2018',
      endDate: 'Mar 2019',
      company: 'Botsociety',
      description: `I started to did some new features to the existings web products and bug fixing. 
      After showing my potential to the team, I was included in the refactoring of all Botsociety ecosystem.`,
      slug: '',
      role: 'Full-stack JavaScript developer',
    },
    {
      id: 4,
      startDate: 'Jun 2017',
      endDate: 'Jul 2018',
      company: 'MainStreaming',
      description: `I created a library that allows customers to use a full customizable video editor using pure javascript and
    developed the MainStreaming backoffice with Angular framework`,
      slug: '',
      role: 'Full-stack developer',
    },
    {
      id: 5,
      startDate: 'Feb 2016',
      endDate: 'Jun 2017',
      company: 'Zinformatica',
      description: `After demonstrating my aptitude for development, a tech lead selected me to initiate and lead a new AngularJS 
    project, this product allowed our client to drive sales to new heights.`,
      slug: '',
      role: 'Full-stack developer',
    },
  ],
  xt = `h2{font-size:1.875rem;line-height:2.25rem;font-weight:700;text-transform:uppercase}
`,
  kt =
    '/assets/b6ff3ea8-badge-first-pr.webp 200w, /assets/fd499dfb-badge-first-pr.webp 400w, /assets/afd2a267-badge-first-pr.webp 600w, /assets/8e87c3b5-badge-first-pr.webp 800w, /assets/59cf075d-badge-first-pr.webp 896w',
  yt = 896,
  _t = 768,
  zt = { srcSet: kt, width: yt, height: _t }
function Mt(n, l, a, i) {
  return e(
    'img',
    { decoding: 'async', loading: 'lazy', ...n },
    zt,
    void 0,
    3,
    l,
  )
}
const St = async n =>
    await G({ devToApiKey: n.env.get('DEV_TO_API_KEY'), limit: 4 }),
  Y = F(o(St, 's_7CjMt5KkVcg')),
  jt = () => {
    _(o(xt, 's_0w9yJ3mmM7E'))
    const n = Y()
    return r(
      c,
      {
        children: [
          e(
            'section',
            null,
            null,
            r(
              it,
              {
                get role() {
                  return D[0].role
                },
                get company() {
                  return D[0].company
                },
                [t]: { role: t, company: t },
              },
              3,
              'eZ_0',
            ),
            1,
            null,
          ),
          r(
            m,
            {
              children: e(
                'section',
                null,
                { class: 'title-section text-center' },
                e('h2', null, null, 'Latest projects', 3, null),
                3,
                null,
              ),
            },
            3,
            'eZ_1',
          ),
          r(
            m,
            {
              children: e(
                'section',
                null,
                { class: 'inner-section' },
                [
                  r(
                    Q,
                    {
                      items: N,
                      limit: 3,
                      referrer: 'index-project',
                      [t]: { items: t, limit: t, referrer: t },
                    },
                    3,
                    'eZ_2',
                  ),
                  e(
                    'p',
                    null,
                    { class: 'flex justify-center pt-6' },
                    r(
                      g,
                      {
                        href: '/projects',
                        'aria-label': 'See more projects',
                        class: 'btn btn-primary text-white',
                        'data-goatcounter-click': 'more-projects',
                        'data-goatcounter-title': 'More Projects',
                        'data-goatcounter-referrer': 'referrer',
                        children: 'See more projects',
                        [t]: {
                          href: t,
                          'aria-label': t,
                          class: t,
                          'data-goatcounter-click': t,
                          'data-goatcounter-title': t,
                          'data-goatcounter-referrer': t,
                        },
                      },
                      3,
                      'eZ_3',
                    ),
                    1,
                    null,
                  ),
                ],
                1,
                null,
              ),
            },
            1,
            'eZ_4',
          ),
          r(
            m,
            {
              children: e(
                'section',
                null,
                { class: 'title-section text-center' },
                [
                  e('h2', null, null, 'History', 3, null),
                  e('h3', null, null, 'All my experiences', 3, null),
                ],
                3,
                null,
              ),
            },
            3,
            'eZ_5',
          ),
          r(
            m,
            {
              children: e(
                'section',
                null,
                { class: 'w-11/12 lg:w-5/6 sticky mx-auto' },
                r(mt, { items: D, [t]: { items: t } }, 3, 'eZ_6'),
                1,
                null,
              ),
            },
            1,
            'eZ_7',
          ),
          r(
            m,
            {
              children: e(
                'section',
                null,
                { class: 'title-section text-center' },
                e('h2', null, null, 'Latest articles', 3, null),
                3,
                null,
              ),
            },
            3,
            'eZ_8',
          ),
          r(
            m,
            {
              children: e(
                'section',
                null,
                { class: 'inner-section' },
                [
                  r(
                    J,
                    {
                      get articles() {
                        return n.value
                      },
                      referrer: 'index-article',
                      [t]: {
                        articles: p(l => l.value, [n], 'p0.value'),
                        referrer: t,
                      },
                    },
                    3,
                    'eZ_9',
                  ),
                  e(
                    'p',
                    null,
                    { class: 'flex justify-center pt-6' },
                    r(
                      g,
                      {
                        href: '/blog',
                        'aria-label': 'Read more articles',
                        class: 'btn btn-primary text-white',
                        'data-goatcounter-click': 'more-articles',
                        'data-goatcounter-title': 'More Articles',
                        'data-goatcounter-referrer': 'referrer',
                        children: 'Read more articles',
                        [t]: {
                          href: t,
                          'aria-label': t,
                          class: t,
                          'data-goatcounter-click': t,
                          'data-goatcounter-title': t,
                          'data-goatcounter-referrer': t,
                        },
                      },
                      3,
                      'eZ_10',
                    ),
                    1,
                    null,
                  ),
                ],
                1,
                null,
              ),
            },
            1,
            'eZ_11',
          ),
          r(
            m,
            {
              children: e(
                'section',
                null,
                { class: 'title-section text-center' },
                e('h2', null, null, 'Tecnology stack', 3, null),
                3,
                null,
              ),
            },
            3,
            'eZ_12',
          ),
          r(
            m,
            {
              children: e(
                'section',
                null,
                { class: 'inner-section' },
                r(
                  O,
                  {
                    title: 'Front end',
                    stacks: bt,
                    [t]: { title: t, stacks: t },
                  },
                  3,
                  'eZ_13',
                ),
                1,
                null,
              ),
            },
            1,
            'eZ_14',
          ),
          r(
            m,
            {
              children: e(
                'section',
                null,
                { class: 'inner-section' },
                r(
                  O,
                  {
                    title: 'Back end',
                    stacks: vt,
                    [t]: { title: t, stacks: t },
                  },
                  3,
                  'eZ_15',
                ),
                1,
                null,
              ),
            },
            1,
            'eZ_16',
          ),
          r(
            m,
            {
              children: e(
                'section',
                null,
                { class: 'inner-section' },
                r(
                  O,
                  { title: 'Tools', stacks: wt, [t]: { title: t, stacks: t } },
                  3,
                  'eZ_17',
                ),
                1,
                null,
              ),
            },
            1,
            'eZ_18',
          ),
          r(
            m,
            {
              children: e(
                'section',
                null,
                { class: 'title-section text-center' },
                e(
                  'h2',
                  null,
                  null,
                  'Open source | My first accepted PR | Qwik',
                  3,
                  null,
                ),
                3,
                null,
              ),
            },
            3,
            'eZ_19',
          ),
          r(
            m,
            {
              children: e(
                'section',
                null,
                { class: 'inner-section' },
                e(
                  'div',
                  null,
                  { class: 'flex items-center justify-center' },
                  r(
                    Mt,
                    {
                      alt: 'My first PR',
                      class:
                        'max-w-[18rem] xs:max-w-[8rem] sm:max-w-[12rem] md:max-w-xs rounded-lg shadow-2xl',
                      [t]: { alt: t, class: t },
                    },
                    3,
                    'eZ_20',
                  ),
                  1,
                  null,
                ),
                1,
                null,
              ),
            },
            1,
            'eZ_21',
          ),
          r(
            m,
            {
              children: e(
                'section',
                null,
                { id: 'links', class: 'title-section text-center' },
                [
                  e('h2', null, null, 'Links', 3, null),
                  e(
                    'h3',
                    null,
                    null,
                    'Stay updated or get in touch on my socials',
                    3,
                    null,
                  ),
                ],
                3,
                null,
              ),
            },
            3,
            'eZ_22',
          ),
          r(
            m,
            {
              children: e(
                'section',
                null,
                { class: 'link-section' },
                r(
                  ct,
                  {
                    links: ft,
                    referrer: 'index',
                    [t]: { links: t, referrer: t },
                  },
                  3,
                  'eZ_23',
                ),
                1,
                null,
              ),
            },
            1,
            'eZ_24',
          ),
        ],
      },
      1,
      'eZ_25',
    )
  },
  Ct = d(o(jt, 's_tstUEhxLUWc')),
  qt = {
    title: 'Pasquale De Lucia - Full-stack engineer',
    meta: [
      {
        name: 'description',
        content:
          'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
      },
    ],
  },
  Lt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ct, head: qt, useArticles: Y },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Pt = () =>
    r(
      c,
      {
        children: e(
          'section',
          null,
          { class: 'inner-section' },
          e(
            'div',
            null,
            { class: 'flex flex-col gap-12 items-center justify-center' },
            [
              e('h1', null, { class: 'mb-6' }, 'OPSS!', 3, null),
              e(
                'p',
                null,
                null,
                [
                  "Uh-oh! It looks like you've wandered into the cosmic void of cyberspace. Our binary aliens are throwing a rave just around the corner. Hurry back before they invite you to dance in zeros and ones! Alternatively, try our game at this",
                  ' ',
                  r(
                    g,
                    {
                      href: '../button-game',
                      children: 'link',
                      [t]: { href: t },
                    },
                    3,
                    'OH_0',
                  ),
                  '.',
                ],
                1,
                null,
              ),
              e(
                'img',
                null,
                {
                  decoding: 'async',
                  loading: 'lazy',
                  src: ' /aliens-alien.gif',
                  width: '1200',
                  height: '1200',
                },
                null,
                3,
                null,
              ),
            ],
            1,
            null,
          ),
          1,
          null,
        ),
      },
      1,
      'OH_1',
    ),
  Ft = d(o(Pt, 's_bavVtvgbxHE')),
  At = {
    title: 'Pasquale De Lucia - Full-stack engineer - 404',
    meta: [
      {
        name: 'description',
        content:
          'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
      },
    ],
  },
  It = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ft, head: At },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  )
function Ot(n) {
  const l = 'https://pasqualedelucia.com'
  return `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${n.map(
  a => `
    <url>
        <loc>${l}${a.loc.startsWith('/') ? '' : '/'}${a.loc}</loc>
        <priority>${a.priority}</priority>
    </url>`,
)}
</urlset>`.trim()
}
const Dt = n => {
    const l = oe.map(([s]) => s).filter(s => s !== '/'),
      a = Ot([
        { loc: '/', priority: 1 },
        ...l.map(s => ({ loc: s, priority: 0.9 })),
      ]),
      i = new Response(a, {
        status: 200,
        headers: { 'Content-Type': 'text/xml' },
      })
    n.send(i)
  },
  Tt = Object.freeze(
    Object.defineProperty({ __proto__: null, onGet: Dt }, Symbol.toStringTag, {
      value: 'Module',
    }),
  ),
  Ht = async n => await G({ devToApiKey: n.env.get('DEV_TO_API_KEY') }),
  K = F(o(Ht, 's_M0p6wqFFl3I')),
  Rt = () => {
    const n = K()
    return r(
      c,
      {
        children: [
          e(
            'section',
            null,
            { class: 'title-section text-center' },
            [
              e('h1', null, null, 'Blog', 3, null),
              e('h2', null, null, 'Find out what I write about', 3, null),
            ],
            3,
            null,
          ),
          e(
            'section',
            null,
            { class: 'inner-section' },
            r(
              J,
              {
                get articles() {
                  return n.value
                },
                referrer: 'page-articles',
                [t]: {
                  articles: p(l => l.value, [n], 'p0.value'),
                  referrer: t,
                },
              },
              3,
              'TQ_0',
            ),
            1,
            null,
          ),
        ],
      },
      1,
      'TQ_1',
    )
  },
  Bt = d(o(Rt, 's_Uzl3gaAclJA')),
  Et = {
    title: 'Pasquale De Lucia - Full-stack engineer',
    meta: [
      {
        name: 'description',
        content:
          'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
      },
    ],
  },
  Wt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Bt, head: Et, useArticles: K },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  )
function L(n) {
  let l = 1
  for (let a = 0; a < n; a++) l *= (100 - a) / 100
  return l
}
function X(n) {
  return Math.floor(Math.random() * n)
}
const Zt = () => {
    const [n, l, a, i] = A(),
      s = X(100)
    n.value === 100
      ? ((n.value = 0), (a.value = 100))
      : (s <= a.value
          ? (n.value++, a.value--, n.value > l.value && (l.value = n.value))
          : ((n.value = 0), (a.value = 100)),
        (i.value = L(a.value)))
  },
  $t = () => {
    const n = f(100)
    L(100)
    const l = f(L(n.value)),
      a = f(0),
      i = f(0),
      s = o(Zt, 's_SqNyGWM7k0k', [a, i, n, l])
    return r(
      c,
      {
        children: [
          e(
            'section',
            null,
            { class: 'title-section text-center' },
            [
              e('h1', null, { class: 'mb-4' }, 'Buttom game', 3, null),
              e(
                'h3',
                null,
                { class: 'mb-4' },
                "This game requires no skills but only LUCK. If you think you're lucky, try to win!",
                3,
                null,
              ),
              e(
                'p',
                null,
                { class: 'text-lg mb-4' },
                [
                  'There are 100 levels in this challenge. As you successfully conquer each level, the probability of passing the next one decreases by 1%.',
                  e(
                    'span',
                    null,
                    {
                      class: 'tooltip ml-2 top-[2px]',
                      'data-tip':
                        'Commencing with a full 100% chance of success for the initial level, each subsequent accomplishment introduces an added layer of difficulty. Navigate through the escalating challenges and witness the diminishing odds, putting your luck to the test with each passing level.',
                    },
                    e(
                      'svg',
                      null,
                      {
                        class: 'w-5 h-5',
                        viewBox: '0 0 20 20',
                        xmlns: 'http://www.w3.org/2000/svg',
                      },
                      e(
                        'path',
                        null,
                        {
                          class: 'fill-secondary',
                          'fill-rule': 'evenodd',
                          d: 'M0 10C0 4.478 4.478 0 10 0c5.523 0 10 4.478 10 10 0 5.523-4.477 10-10 10-5.522 0-10-4.477-10-10zm11.125 2.002H8.989v-.141c.01-1.966.492-2.254 1.374-2.782.093-.056.19-.114.293-.178.73-.459 1.292-1.038 1.292-1.883 0-.948-.743-1.564-1.666-1.564-.851 0-1.657.398-1.712 1.533H6.304C6.364 4.693 8.18 3.5 10.294 3.5c2.306 0 3.894 1.447 3.894 3.488 0 1.382-.695 2.288-1.805 2.952l-.238.144c-.79.475-1.009.607-1.02 1.777V12zm.17 3.012a1.344 1.344 0 01-1.327 1.328 1.32 1.32 0 01-1.328-1.328 1.318 1.318 0 011.328-1.316c.712 0 1.322.592 1.328 1.316z',
                        },
                        null,
                        3,
                        null,
                      ),
                      3,
                      null,
                    ),
                    3,
                    null,
                  ),
                ],
                3,
                null,
              ),
              e('p', null, null, null, 3, null),
            ],
            3,
            null,
          ),
          e(
            'section',
            null,
            { class: 'link-section' },
            e(
              'div',
              null,
              { class: 'grid grid-cols-1 gap-6 justify-items-center' },
              [
                e(
                  'div',
                  {
                    class: `text-center button w-36 h-36 md:w-48 md:h-48 rounded-full cursor-pointer select-none
    active:translate-y-4
    active:border-b-[0px]
    transition-all duration-150
    border-[5px] ${a.value === 100 ? 'border-green-400 bg-green-500 active:[box-shadow:0_0px_0_0_#298a09,0_0px_0_0_#1b70f841] [box-shadow:0_16px_0_0_#298a09,0_13px_0_0_#1b70f841]' : 'border-red-400 bg-red-500 active:[box-shadow:0_0px_0_0_#8a0909,0_0px_0_0_#1b70f841] [box-shadow:0_16px_0_0_#8a0909,0_13px_0_0_#1b70f841]'}`,
                  },
                  { onClick$: s },
                  e(
                    'span',
                    null,
                    {
                      class:
                        'flex flex-col justify-center items-center h-full text-white font-bold text-[5rem] opacity-50',
                    },
                    p(u => u.value, [a], 'p0.value'),
                    3,
                    null,
                  ),
                  3,
                  null,
                ),
                e(
                  'p',
                  null,
                  { class: 'text-xl mt-6' },
                  ['MAX ', p(u => u.value, [i], 'p0.value')],
                  3,
                  null,
                ),
                e(
                  'p',
                  null,
                  null,
                  p(
                    u => (u.value === 100 ? 'HAI VINTO' : ''),
                    [a],
                    'p0.value===100?"HAI VINTO":""',
                  ),
                  3,
                  null,
                ),
              ],
              1,
              null,
            ),
            1,
            null,
          ),
        ],
      },
      1,
      'CD_0',
    )
  },
  Ut = d(o($t, 's_lVhXlSc0AIU')),
  Vt = {
    title: 'Pasquale De Lucia - Full-stack engineer',
    meta: [
      {
        name: 'description',
        content:
          'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
      },
    ],
  },
  Jt = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        _auto_getRandomInt: X,
        _auto_probabilityOfSuccess: L,
        default: Ut,
        head: Vt,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  ee = pe({ scopeId: '' })
function Qt(n, l, a, i) {
  return q(ee.Provider, {
    value: { el: n, scopeId: l, attachedEl: void 0 },
    children: q(a, { ...i, children: q(te, null) }),
  })
}
class te extends fe {
  constructor() {
    super(...arguments), (this.slotC = be())
  }
  shouldComponentUpdate() {
    return !1
  }
  componentDidMount() {
    const l = this.slotC.current
    if (l) {
      const { attachedEl: a, el: i } = this.context
      if (i) {
        if (!a) l.appendChild(i)
        else if (a !== l) throw new Error('already attached')
      }
    }
  }
  render() {
    return q('q-slotc', {
      class: this.context.scopeId,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: '<!--SLOT-->' },
      ref: this.slotC,
    })
  }
}
te.contextType = ee
const Gt = n => {
    const l = {}
    return (
      Object.keys(n).forEach(a => {
        if (!a.startsWith('client:') && !a.startsWith('host:')) {
          const i = a.endsWith('$') ? a.slice(0, -1) : a
          l[i] = n[a]
        }
      }),
      l
    )
  },
  le = n => {
    const l = {}
    return (
      Object.keys(n).forEach(a => {
        a.startsWith('host:') && (l[a.slice(Kt.length)] = n[a])
      }),
      l
    )
  },
  Nt = () => {
    const [n] = A()
    return (n.value = !0)
  },
  Yt = (n, l = {}) => {
    const a = f(!1),
      i = o(Nt, 's_6LYztwGzxAA', [a]),
      s = !!(n['client:only'] || (l != null && l.clientOnly))
    return (
      (n['client:visible'] ||
        (l == null ? void 0 : l.eagerness) === 'visible') &&
        j('qvisible', i),
      (n['client:idle'] || (l == null ? void 0 : l.eagerness) === 'idle') &&
        E('qidle', i),
      (n['client:load'] ||
        s ||
        (l == null ? void 0 : l.eagerness) === 'load') &&
        E('qinit', i),
      (n['client:hover'] || (l == null ? void 0 : l.eagerness) === 'hover') &&
        j('mouseover', i),
      n['client:event'] && j(n['client:event'], i),
      l != null && l.event && j(l == null ? void 0 : l.event, i),
      [a, s, i]
    )
  },
  Kt = 'host:'
async function Xt(n, l, a, i, s, u, b) {
  {
    const z = await l.resolve(),
      v = Gt(i)
    Object.assign(b, v)
    const w = ve(Qt(void 0, a, z, v)),
      x = w.indexOf('<!--SLOT-->')
    if (x > 0) {
      const M = w.slice(0, x),
        se = w.slice(x + 11)
      return r(
        n,
        {
          ref: s,
          ...le(i),
          children: r(
            he,
            {
              children: async function* () {
                yield r(I, { data: M }, 3, '0a_3'),
                  yield e(
                    'q-slot',
                    { ref: u },
                    null,
                    r(S, null, 3, '0a_4'),
                    1,
                    null,
                  ),
                  yield r(I, { data: se }, 3, '0a_5')
              },
            },
            1,
            '0a_6',
          ),
        },
        1,
        '0a_7',
      )
    }
    return r(
      c,
      {
        children: [
          r(n, { ref: s, children: r(I, { data: w }, 3, '0a_8') }, 1, '0a_9'),
          e('q-slot', { ref: u }, null, r(S, null, 3, '0a_10'), 1, null),
        ],
      },
      1,
      '0a_11',
    )
  }
}
const el = 'q-slot{display:none} q-slotc,q-slotc>q-slot{display:contents}',
  tl = async ({ track: n }) => {
    const [l, a, i, s, u, b, z, v, w] = A()
    n(() => ({ ...u })), n(z)
  },
  ll = n => {
    const [l, a] = A()
    P()
    const i = _(o(el, 's_hkT84xKSMLE')),
      s = f(),
      u = f(),
      b = f(),
      [z, v] = Yt(n, l),
      w = {},
      x = (l == null ? void 0 : l.tagName) ?? 'qwik-react'
    if ((ue(o(tl, 's_EWIT9ENzUX0', [s, w, b, v, n, a, z, u, i])), !v)) {
      const M = Xt(x, a, i.scopeId, n, s, u, w)
      return r(B, { children: M }, 1, 2)
    }
    return r(
      B,
      {
        children: [
          r(
            x,
            {
              ...le(n),
              ref: M => {
                s.value = M
              },
              children: de,
              [t]: { ref: t },
            },
            1,
            '6S_0',
          ),
          e('q-slot', { ref: u }, null, r(S, null, 3, '6S_1'), 1, null),
        ],
      },
      1,
      '6S_2',
    )
  }
function nl(n, l) {
  return d(o(ll, 's_zH94hIe0Ick', [l, n]))
}
function rl(n) {
  return we(xe, { data: n.data })
}
const ne = nl(o(rl, 's_h5ZUTiJtg0M')),
  re = async (n, l) => {
    const a = `{
    page (filter: { slug: { eq: "${n}" } }) {
      title
      slug
      content {
        value
      }
    }
  }`
    return await (
      await fetch('https://graphql.datocms.com/', {
        headers: { Authorization: `Bearer ${l}` },
        method: 'POST',
        body: JSON.stringify({ query: a }),
      })
    ).json()
  },
  al = async n => {
    const l = n.env.get('DATO_CMS_TOKEN')
    return re('finance', l || '')
  },
  ae = F(o(al, 's_1R0RUHqtxFA')),
  il = () => {
    const n = ae()
    return r(
      c,
      {
        children: [
          e(
            'section',
            null,
            { class: 'title-section text-center' },
            [
              e('h1', null, null, 'Finance', 3, null),
              e('h2', null, null, 'Find out what I write about', 3, null),
            ],
            3,
            null,
          ),
          e(
            'section',
            null,
            { class: 'inner-section' },
            r(
              ne,
              {
                get data() {
                  return n.value.data.page.content
                },
                [t]: {
                  data: p(
                    l => l.value.data.page.content,
                    [n],
                    'p0.value.data.page.content',
                  ),
                },
              },
              3,
              'UA_0',
            ),
            1,
            null,
          ),
        ],
      },
      1,
      'UA_1',
    )
  },
  ol = d(o(il, 's_ZHlbw7cbduU')),
  sl = {
    title: 'Pasquale De Lucia - Full-stack engineer',
    meta: [
      {
        name: 'description',
        content:
          'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
      },
    ],
  },
  cl = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ol, head: sl, useArticle: ae },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  ul = () =>
    r(
      c,
      {
        children: [
          e(
            'section',
            null,
            { class: 'title-section text-center' },
            [
              e('h1', null, null, 'Projects', 3, null),
              e('h2', null, null, 'Check out my projects', 3, null),
            ],
            3,
            null,
          ),
          e(
            'section',
            null,
            { class: 'inner-section' },
            r(
              Q,
              {
                items: N,
                referrer: 'page-projects',
                [t]: { items: t, referrer: t },
              },
              3,
              'Mg_0',
            ),
            1,
            null,
          ),
        ],
      },
      1,
      'Mg_1',
    ),
  dl = d(o(ul, 's_yMerZA5h0Vw')),
  hl = {
    title: 'Pasquale De Lucia - Full-stack engineer',
    meta: [
      {
        name: 'description',
        content:
          'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
      },
    ],
  },
  gl = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: dl, head: hl },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  ml = async n => {
    const { slug: l } = n.params,
      a = n.env.get('DATO_CMS_TOKEN')
    return re(l, a || '')
  },
  ie = F(o(ml, 's_rVGPTjmPMv4')),
  pl = () => {
    const n = ie()
    return r(
      c,
      {
        children: [
          e(
            'section',
            null,
            { class: 'title-section text-center' },
            [
              e('h1', null, null, 'Finance', 3, null),
              e('h2', null, null, 'Find out what I write about', 3, null),
            ],
            3,
            null,
          ),
          e(
            'section',
            null,
            { class: 'inner-section' },
            r(
              ne,
              {
                get data() {
                  return n.value.data.page.content
                },
                [t]: {
                  data: p(
                    l => l.value.data.page.content,
                    [n],
                    'p0.value.data.page.content',
                  ),
                },
              },
              3,
              'kb_0',
            ),
            1,
            null,
          ),
        ],
      },
      1,
      'kb_1',
    )
  },
  fl = d(o(pl, 's_mjOPF0JN0c0')),
  bl = {
    title: 'Pasquale De Lucia - Full-stack engineer',
    meta: [
      {
        name: 'description',
        content:
          'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
      },
    ],
  },
  vl = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: fl, head: bl, useArticle: ie },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  wl = [],
  k = () => Ve,
  oe = [
    ['/', [k, () => Lt], '/', ['q-ea584253.js', 'q-3c0cf39a.js']],
    [
      '404.html',
      [k, () => It],
      '/404.html',
      ['q-ea584253.js', 'q-ccc550a1.js'],
    ],
    [
      'dynamic-sitemap.xml',
      [k, () => Tt],
      '/dynamic-sitemap.xml',
      ['q-ea584253.js', 'q-c31a0420.js'],
    ],
    ['blog/', [k, () => Wt], '/blog/', ['q-ea584253.js', 'q-245277c4.js']],
    [
      'button-game/',
      [k, () => Jt],
      '/button-game/',
      ['q-ea584253.js', 'q-22b880c9.js'],
    ],
    [
      'finance/',
      [k, () => cl],
      '/finance/',
      ['q-ea584253.js', 'q-9efd449a.js'],
    ],
    [
      'projects/',
      [k, () => gl],
      '/projects/',
      ['q-ea584253.js', 'q-cd115fc6.js'],
    ],
    [
      'finance/[slug]/',
      [k, () => vl],
      '/finance/[slug]/',
      ['q-ea584253.js', 'q-32661f06.js'],
    ],
  ],
  xl = [],
  kl = !0,
  yl = '/',
  _l = !0,
  Pl = {
    routes: oe,
    serverPlugins: wl,
    menus: xl,
    trailingSlash: kl,
    basePathname: yl,
    cacheModules: _l,
  }
export {
  yl as basePathname,
  _l as cacheModules,
  Pl as default,
  xl as menus,
  oe as routes,
  wl as serverPlugins,
  kl as trailingSlash,
}
