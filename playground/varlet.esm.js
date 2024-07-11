import { reactive as Qe, onMounted as Yo, nextTick as Ke, onActivated as Eo, isRef as fh, watch as de, onBeforeUnmount as Hr, onDeactivated as pt, onUnmounted as jt, inject as hd, getCurrentInstance as jo, computed as B, ref as k, unref as gd, provide as bd, isVNode as ph, defineComponent as x, h as Yr, Comment as vh, Fragment as Ae, createApp as mh, onBeforeMount as hh, createVNode as G, Teleport as no, Transition as _e, withDirectives as Me, vShow as Xn, mergeProps as Ye, openBlock as h, createBlock as Pe, resolveDynamicComponent as vt, normalizeClass as p, normalizeStyle as K, createElementBlock as P, resolveComponent as ne, resolveDirective as je, createCommentVNode as X, createElementVNode as I, toDisplayString as re, withCtx as fe, renderSlot as L, renderList as Ze, onUpdated as Wt, createTextVNode as Be, pushScopeId as Wo, popScopeId as Ko, withModifiers as An, normalizeProps as wo, guardReactiveProps as Kt, vModelText as gh, createSlots as Et, withKeys as Rs, TransitionGroup as bh } from "vue";
const yd = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, Q8 = Qe(yd);
var Nn = Qe(yd), yh = Object.defineProperty, kh = Object.defineProperties, $h = Object.getOwnPropertyDescriptors, Fs = Object.getOwnPropertySymbols, wh = Object.prototype.hasOwnProperty, Ch = Object.prototype.propertyIsEnumerable, Us = (e, n, o) => n in e ? yh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Sh = (e, n) => {
  for (var o in n || (n = {}))
    wh.call(n, o) && Us(e, o, n[o]);
  if (Fs)
    for (var o of Fs(n))
      Ch.call(n, o) && Us(e, o, n[o]);
  return e;
}, Ph = (e, n) => kh(e, $h(n)), gn = (e) => typeof e == "string", rs = (e) => typeof e == "boolean", On = (e) => typeof e == "number", kd = (e) => On(e) || gn(e) && /^[-+]?\d+$/.test(e), tt = (e) => Object.prototype.toString.call(e) === "[object Object]", zh = (e) => typeof e == "object" && e !== null, oo = (e) => typeof e == "function", He = (e) => Array.isArray(e), Oh = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Qn = (e) => e == null || e === "" || He(e) && !e.length, $d = (e) => e === window, Th = () => to() && "ontouchstart" in window, to = () => typeof window < "u", kr = () => to() && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), { hasOwnProperty: Eh } = Object.prototype, $r = (e, n) => Eh.call(e, n), Hs = (e) => [...new Set(e)], Vo = (e) => He(e) ? e : [e], rt = (e, n) => {
  if (e.length) {
    const o = e.indexOf(n);
    if (o > -1)
      return e.splice(o, 1);
  }
}, Dh = (e) => e.filter((n) => n != null), Bh = (e, n, o = "start") => {
  let t = o === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && t >= 0 && t <= e.length - 1; ) {
    if (n(e[t], t, e))
      return [e[t], t];
    o === "start" ? t++ : t--;
  }
  return [null, -1];
}, Ih = (...e) => e.map((n) => {
  if (He(n)) {
    const [o, t, r = null] = n;
    return o ? t : r;
  }
  return n;
}), wd = () => typeof globalThis < "u" ? globalThis : to() ? window : typeof global < "u" ? global : self, Dt = (e) => {
  const n = wd();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e);
}, Ys = (e) => {
  const n = wd();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}, mr = () => new Promise((e) => {
  Dt(e);
}), $n = () => new Promise((e) => {
  Dt(() => {
    Dt(e);
  });
}), qo = (e) => window.getComputedStyle(e), an = (e) => {
  if ($d(e)) {
    const n = e.innerWidth, o = e.innerHeight, t = {
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      right: n,
      bottom: o,
      width: n,
      height: o
    };
    return Ph(Sh({}, t), {
      toJSON: () => t
    });
  }
  return e.getBoundingClientRect();
}, Mh = (e) => {
  const { top: n, bottom: o, left: t, right: r } = an(e), { width: a, height: i } = an(window), l = t <= a && r >= 0, s = n <= i && o >= 0;
  return l && s;
}, Nh = (e) => new Promise((n) => {
  const o = new FileReader();
  o.onload = () => {
    n(o.result);
  }, o.readAsDataURL(e);
}), Re = (e) => {
  e.cancelable !== !1 && e.preventDefault();
}, Ro = (e) => {
  const n = "scrollTop" in e ? e.scrollTop : e.scrollY;
  return Math.max(n, 0);
}, as = (e) => {
  const n = "scrollLeft" in e ? e.scrollLeft : e.scrollX;
  return Math.max(n, 0);
}, is = (e, n = 200) => {
  let o, t = 0;
  return function r(...a) {
    const i = Date.now(), l = i - t;
    t || (t = i), o && clearTimeout(o), l >= n ? (e.apply(this, a), t = i) : o = setTimeout(() => {
      r.apply(this, a);
    }, n - l);
  };
};
function S(e, ...n) {
  if (He(e))
    return e.map((o) => o(...n));
  if (e)
    return e(...n);
}
var F = (e) => e == null ? 0 : gn(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : rs(e) ? Number(e) : e, Mn = (e, n, o) => Math.min(o, Math.max(n, e)), Ah = (e, n) => Mn(e, 0, n.length - 1), Vh = (e) => ls(e).replace(e.charAt(0), e.charAt(0).toUpperCase()), ls = (e) => e.replace(/-(\w)/g, (n, o) => o.toUpperCase()), Cd = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase();
function Lh(e) {
  return (n) => {
    const o = `${e}-${n}`, t = (r) => r ? r[0] === "$" ? r.replace("$", e) : r.startsWith("--") ? `${o}${r}` : `${o}__${r}` : o;
    return {
      name: Vh(o),
      n: t,
      classes: Ih
    };
  };
}
var Rh = Object.defineProperty, wr = Object.getOwnPropertySymbols, Sd = Object.prototype.hasOwnProperty, Pd = Object.prototype.propertyIsEnumerable, js = (e, n, o) => n in e ? Rh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Fh = (e, n) => {
  for (var o in n || (n = {}))
    Sd.call(n, o) && js(e, o, n[o]);
  if (wr)
    for (var o of wr(n))
      Pd.call(n, o) && js(e, o, n[o]);
  return e;
}, Uh = (e, n) => {
  var o = {};
  for (var t in e)
    Sd.call(e, t) && n.indexOf(t) < 0 && (o[t] = e[t]);
  if (e != null && wr)
    for (var t of wr(e))
      n.indexOf(t) < 0 && Pd.call(e, t) && (o[t] = e[t]);
  return o;
};
function pn(e) {
  let n = !1;
  Yo(() => {
    e(), Ke(() => {
      n = !0;
    });
  }), Eo(() => {
    n && e();
  });
}
function We(e, n, o, t = {}) {
  if (!to())
    return;
  const { passive: r = !1, capture: a = !1 } = t;
  let i = !1, l = !1;
  const s = (v) => oo(v) ? v() : gd(v), u = (v) => {
    if (i || l)
      return;
    const y = s(v);
    y && (y.addEventListener(n, o, {
      passive: r,
      capture: a
    }), i = !0);
  }, c = (v) => {
    if (!i || l)
      return;
    const y = s(v);
    y && (y.removeEventListener(n, o, {
      capture: a
    }), i = !1);
  };
  let d;
  fh(e) && (d = de(
    () => e.value,
    (v, y) => {
      c(y), u(v);
    }
  ));
  const f = () => {
    d == null || d(), c(e), l = !0;
  };
  return pn(() => {
    u(e);
  }), Hr(() => {
    c(e);
  }), pt(() => {
    c(e);
  }), f;
}
function zd(e, n, o) {
  if (!to())
    return;
  We(document, n, (r) => {
    const a = oo(e) ? e() : gd(e);
    a && !a.contains(r.target) && o(r);
  });
}
function qt(e) {
  let n = !1;
  pt(() => {
    n = !0, e();
  }), jt(() => {
    n || e();
  });
}
function Od(e) {
  const n = jo();
  return e in n.provides;
}
function bn(e) {
  if (!Od(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const o = hd(e), { childInstances: t, collect: r, clear: a } = o, i = Uh(o, ["childInstances", "collect", "clear"]), l = jo();
  return {
    index: B(() => t.indexOf(l)),
    parentProvider: i,
    bindParent: (c) => {
      Yo(() => {
        Ke().then(() => {
          r(l, c);
        });
      }), Hr(() => {
        Ke().then(() => {
          a(l, c);
        });
      });
    }
  };
}
function Hh(e) {
  const n = [], o = (t) => {
    if (t != null && t.component) {
      o(t == null ? void 0 : t.component.subTree);
      return;
    }
    He(t == null ? void 0 : t.children) && t.children.forEach((r) => {
      ph(r) && (n.push(r), o(r));
    });
  };
  return o(e), n;
}
function yn(e) {
  const n = jo(), o = Qe([]), t = [], r = B(() => o.length), a = () => {
    const u = Hh(n.subTree);
    o.sort((c, d) => u.indexOf(c.vnode) - u.indexOf(d.vnode));
  }, i = (u, c) => {
    o.push(u), t.push(c), a();
  }, l = (u, c) => {
    rt(o, u), rt(t, c);
  };
  return {
    length: r,
    childProviders: t,
    bindChildren: (u) => {
      bd(e, Fh({
        childInstances: o,
        collect: i,
        clear: l
      }, u));
    }
  };
}
function ro(e) {
  We(() => window, "resize", e, { passive: !0 }), We(() => window, "orientationchange", e, { passive: !0 });
}
function Yh(e, n) {
  const o = k(!1);
  return de(
    e,
    (t) => {
      n === t && (o.value = !0);
    },
    { immediate: !0 }
  ), o;
}
function jh(e, n) {
  if (e > n)
    return "horizontal";
  if (n > e)
    return "vertical";
}
function mt() {
  const e = k(0), n = k(0), o = k(0), t = k(0), r = k(0), a = k(0), i = k(0), l = k(0), s = k(0), u = k(0), c = k(), d = k(!1), f = k(!1), v = k(0), y = k(0);
  let m = null;
  const b = () => {
    e.value = 0, n.value = 0, o.value = 0, t.value = 0, r.value = 0, a.value = 0, i.value = 0, l.value = 0, s.value = 0, u.value = 0, c.value = void 0, d.value = !1, f.value = !1, v.value = 0, y.value = 0;
  };
  return {
    startX: e,
    startY: n,
    deltaX: o,
    deltaY: t,
    offsetX: r,
    offsetY: a,
    prevX: i,
    prevY: l,
    moveX: s,
    moveY: u,
    direction: c,
    touching: d,
    dragging: f,
    startTime: v,
    distance: y,
    resetTouch: b,
    startTouch: (z) => {
      b();
      const { clientX: A, clientY: T } = z.touches[0];
      e.value = A, n.value = T, i.value = A, l.value = T, d.value = !0, v.value = performance.now(), f.value = !1, m && window.cancelAnimationFrame(m);
    },
    moveTouch: (z) => {
      const { clientX: A, clientY: T } = z.touches[0];
      f.value = !0, o.value = A - e.value, t.value = T - n.value, r.value = Math.abs(o.value), a.value = Math.abs(t.value), y.value = Math.sqrt(r.value ** 2 + a.value ** 2), s.value = A - i.value, u.value = T - l.value, c.value || (c.value = jh(r.value, a.value)), i.value = A, l.value = T;
    },
    endTouch: () => {
      d.value = !1, m = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    },
    isReachTop: (z) => Ro(z) === 0 && t.value > 0,
    isReachBottom: (z, A = 1) => {
      const { scrollHeight: T, clientHeight: E, scrollTop: D } = z, M = Math.abs(T - D - E);
      return t.value < 0 && M <= A;
    }
  };
}
function Td() {
  const e = jo(), n = Cd(e.type.name), o = k(void 0);
  return Yo(() => {
    o.value = `${n}-${e.uid}`;
  }), o;
}
function Wh(e = {}) {
  const { initialWidth: n = 0, initialHeight: o = 0 } = e, t = k(n), r = k(o), a = () => {
    to() && (t.value = window.innerWidth, r.value = window.innerHeight);
  };
  return pn(a), ro(a), {
    width: t,
    height: r
  };
}
function Zn(e, n, o = {}) {
  const { passive: t = !0, eventName: r, defaultValue: a, emit: i } = o, l = r ?? `onUpdate:${n.toString()}`, s = () => {
    var d;
    return (d = e[n]) != null ? d : a;
  };
  if (!t)
    return B({
      get() {
        return s();
      },
      set(d) {
        i ? i(l, d) : S(e[l], d);
      }
    });
  const u = k(s());
  let c = !0;
  return de(
    () => e[n],
    () => {
      c = !1, u.value = s(), Ke(() => {
        c = !0;
      });
    }
  ), de(
    () => u.value,
    (d) => {
      c && (i ? i(l, d) : S(e[l], d));
    }
  ), u;
}
var Kh = Object.defineProperty, qh = Object.defineProperties, Gh = Object.getOwnPropertyDescriptors, Ws = Object.getOwnPropertySymbols, Xh = Object.prototype.hasOwnProperty, Zh = Object.prototype.propertyIsEnumerable, Ks = (e, n, o) => n in e ? Kh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Ni = (e, n) => {
  for (var o in n || (n = {}))
    Xh.call(n, o) && Ks(e, o, n[o]);
  if (Ws)
    for (var o of Ws(n))
      Zh.call(n, o) && Ks(e, o, n[o]);
  return e;
}, Jh = (e, n) => qh(e, Gh(n)), qs = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
function Ie(e, n) {
  return He(n) ? n.reduce((o, t) => (o[t] = e[t], o), {}) : e[n];
}
function te(e, n) {
  const o = n ?? e;
  return o.install = function(t) {
    const { name: r } = e;
    r && t.component(r, e);
  }, o;
}
function ue(e, n) {
  e.setPropsDefaults = function(o) {
    Object.entries(o).forEach(([t, r]) => {
      const a = n[t];
      if (a != null) {
        if (tt(a)) {
          n[t] = Jh(Ni({}, a), {
            default: r
          });
          return;
        }
        n[t] = {
          type: a,
          default: r
        };
      }
    });
  };
}
function Qh(e) {
  const n = mh(e), o = document.createElement("div");
  return document.body.appendChild(o), {
    instance: n.mount(o),
    unmount() {
      n.unmount(), document.body.removeChild(o);
    }
  };
}
function ht(e, n = {}, o = {}) {
  const t = {
    setup() {
      return () => Yr(e, Ni(Ni({}, n), o));
    }
  }, { unmount: r } = Qh(t);
  return { unmountInstance: r };
}
function Ed(e) {
  const n = [];
  return e.forEach((o) => {
    if (o.type !== vh) {
      if (o.type === Ae && He(o.children)) {
        o.children.forEach((t) => {
          n.push(t);
        });
        return;
      }
      n.push(o);
    }
  }), n;
}
function Yn() {
  const e = k(""), n = (r, a, i) => qs(this, null, function* () {
    if (!He(r) || !r.length)
      return !0;
    const l = yield Promise.all(r.map((s) => s(a, i)));
    return o(), !l.some((s) => s !== !0 ? (e.value = String(s), !0) : !1);
  }), o = () => {
    e.value = "";
  };
  return {
    errorMessage: e,
    validate: n,
    resetValidation: o,
    validateWithTrigger: (r, a, i, l, s) => qs(this, null, function* () {
      r.includes(a) && (yield n(i, l, s)) && (e.value = "");
    })
  };
}
function _h(e) {
  We(() => window, "hashchange", e), We(() => window, "popstate", e);
}
function Go() {
  const e = k(!1);
  return Eo(() => {
    e.value = !1;
  }), pt(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
const ee = Lh("var");
function R(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function fn(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), `var-elevation--${e}`);
}
const jr = x({
  props: {
    is: {
      type: [String, Object]
    },
    tag: {
      type: String,
      default: "span"
    }
  },
  setup(e) {
    return () => gn(e.is) ? Yr(e.tag, e.is) : e.is;
  }
});
var xh = Object.defineProperty, eg = Object.defineProperties, ng = Object.getOwnPropertyDescriptors, Gs = Object.getOwnPropertySymbols, og = Object.prototype.hasOwnProperty, tg = Object.prototype.propertyIsEnumerable, Xs = (e, n, o) => n in e ? xh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Dd = (e, n) => {
  for (var o in n || (n = {}))
    og.call(n, o) && Xs(e, o, n[o]);
  if (Gs)
    for (var o of Gs(n))
      tg.call(n, o) && Xs(e, o, n[o]);
  return e;
}, rg = (e, n) => eg(e, ng(n));
const { n: Bd } = ee("ripple"), Zs = 250;
function ag(e) {
  const { zIndex: n, position: o } = qo(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", o === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Js(e) {
  return "touches" in e;
}
function ig(e, n) {
  const { top: o, left: t } = an(e), { clientWidth: r, clientHeight: a } = e, i = Math.sqrt(r ** 2 + a ** 2) / 2, l = i * 2, s = Js(n) ? n.touches[0].clientX - t : r / 2, u = Js(n) ? n.touches[0].clientY - o : a / 2, c = (r - i * 2) / 2, d = (a - i * 2) / 2, f = s - i, v = u - i;
  return { x: f, y: v, centerX: c, centerY: d, size: l };
}
function ss(e) {
  const n = this._ripple;
  if (n.removeRipple(), n.disabled || n.tasker || !Nn.enableRipple)
    return;
  const o = () => {
    n.tasker = null;
    const { x: t, y: r, centerX: a, centerY: i, size: l } = ig(this, e), s = document.createElement("div");
    s.classList.add(Bd()), s.style.opacity = "0", s.style.transform = `translate(${t}px, ${r}px) scale3d(.3, .3, .3)`, s.style.width = `${l}px`, s.style.height = `${l}px`, n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), ag(this), this.appendChild(s), window.setTimeout(() => {
      s.style.transform = `translate(${a}px, ${i}px) scale3d(1, 1, 1)`, s.style.opacity = ".25";
    }, 20);
  };
  n.tasker = window.setTimeout(o, 30);
}
function Cr() {
  const e = this._ripple, n = () => {
    const o = this.querySelectorAll(`.${Bd()}`);
    if (!o.length)
      return;
    const t = o[o.length - 1], r = Zs - performance.now() + Number(t.dataset.createdAt);
    window.setTimeout(() => {
      t.style.opacity = "0", window.setTimeout(() => {
        var a;
        return (a = t.parentNode) == null ? void 0 : a.removeChild(t);
      }, Zs);
    }, r);
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function Id() {
  if (!Th() || !Nn.enableRipple)
    return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
let Sr = !1;
function lg(e) {
  Sr || !(e.key === " " || e.key === "Enter") || (ss.call(this, e), Sr = !0);
}
function Qs() {
  Sr && (Cr.call(this), Sr = !1);
}
function sg(e, n) {
  var o;
  e._ripple = rg(Dd({
    tasker: null
  }, (o = n.value) != null ? o : {}), {
    removeRipple: Cr.bind(e)
  }), e.addEventListener("touchstart", ss, { passive: !0 }), e.addEventListener("touchmove", Id, { passive: !0 }), e.addEventListener("dragstart", Cr, { passive: !0 }), e.addEventListener("keydown", lg), e.addEventListener("keyup", Qs), e.addEventListener("blur", Qs), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("dragend", e._ripple.removeRipple, { passive: !0 });
}
function ug(e) {
  e.removeEventListener("touchstart", ss), e.removeEventListener("touchmove", Id), e.removeEventListener("dragstart", Cr), !(!e._ripple || !e._ripple.removeRipple) && (document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple), document.removeEventListener("dragend", e._ripple.removeRipple));
}
function cg(e, n) {
  var o, t, r, a, i, l;
  const s = {
    color: (o = n.value) == null ? void 0 : o.color,
    disabled: (t = n.value) == null ? void 0 : t.disabled
  };
  (s.color !== ((r = e._ripple) == null ? void 0 : r.color) || s.disabled !== ((a = e._ripple) == null ? void 0 : a.disabled)) && (e._ripple = Dd({
    tasker: s.disabled ? null : (i = e._ripple) == null ? void 0 : i.tasker,
    removeRipple: (l = e._ripple) == null ? void 0 : l.removeRipple
  }, s));
}
const Md = {
  mounted: sg,
  unmounted: ug,
  updated: cg,
  install(e) {
    e.directive("ripple", this);
  }
}, _8 = Md;
var tn = Md;
const gt = {
  show: Boolean,
  position: {
    type: String,
    default: "center"
  },
  transition: String,
  overlay: {
    type: Boolean,
    default: !0
  },
  overlayClass: String,
  overlayStyle: Object,
  lockScroll: {
    type: Boolean,
    default: !0
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: !0
  },
  closeOnKeyEscape: {
    type: Boolean,
    default: !0
  },
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  safeArea: Boolean,
  safeAreaTop: Boolean,
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  onOpen: R(),
  onOpened: R(),
  onClose: R(),
  onClosed: R(),
  onKeyEscape: R(),
  onClickOverlay: R(),
  "onUpdate:show": R(),
  // internal for Dialog
  onRouteChange: R()
};
function Nd() {
  Object.keys(Nn.locks).length <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function er(e) {
  Nn.locks[e] = 1, Nd();
}
function nr(e) {
  delete Nn.locks[e], Nd();
}
function Gt(e, n) {
  const { uid: o } = jo();
  n && de(n, (t) => {
    t === !1 ? nr(o) : t === !0 && e() === !0 && er(o);
  }), de(e, (t) => {
    n && n() === !1 || (t === !0 ? er(o) : nr(o));
  }), hh(() => {
    n && n() === !1 || e() === !0 && er(o);
  }), jt(() => {
    n && n() === !1 || e() === !0 && nr(o);
  }), Eo(() => {
    n && n() === !1 || e() === !0 && er(o);
  }), pt(() => {
    n && n() === !1 || e() === !0 && nr(o);
  });
}
function Xt(e, n) {
  const o = k(Nn.zIndex);
  return de(
    e,
    (t) => {
      t && (Nn.zIndex += n, o.value = Nn.zIndex);
    },
    { immediate: !0 }
  ), { zIndex: o };
}
const fo = [];
function us(e, n) {
  const { uid: o } = jo();
  de(e, (i) => {
    i && !a(o) ? r() : setTimeout(() => {
      rt(fo, a(o));
    });
  }), pn(() => {
    e() && r();
  }), qt(() => {
    rt(fo, a(o));
  });
  function t() {
    return fo.length === 0 ? !0 : (fo.sort((i, l) => i.zIndex.value - l.zIndex.value), fo[fo.length - 1].uid === o);
  }
  function r() {
    a(o) || fo.push({ uid: o, zIndex: n });
  }
  function a(i) {
    return fo.find((l) => l.uid === i);
  }
  return {
    onStackTop: t
  };
}
const Ad = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function Vd() {
  const { bindParent: e, parentProvider: n, index: o } = bn(Ad);
  return {
    index: o,
    popup: n,
    bindPopup: e
  };
}
function dg() {
  const { bindChildren: e, childProviders: n, length: o } = yn(Ad);
  return {
    length: o,
    popupItems: n,
    bindPopupItems: e
  };
}
var fg = Object.defineProperty, _s = Object.getOwnPropertySymbols, pg = Object.prototype.hasOwnProperty, vg = Object.prototype.propertyIsEnumerable, xs = (e, n, o) => n in e ? fg(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, mg = (e, n) => {
  for (var o in n || (n = {}))
    pg.call(n, o) && xs(e, o, n[o]);
  if (_s)
    for (var o of _s(n))
      vg.call(n, o) && xs(e, o, n[o]);
  return e;
};
const {
  name: hg,
  n: Rn,
  classes: Si
} = ee("popup");
var Wr = x({
  name: hg,
  inheritAttrs: !1,
  props: gt,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const t = Yh(() => e.show, !0), {
      zIndex: r
    } = Xt(() => e.show, 3), {
      onStackTop: a
    } = us(() => e.show, r), {
      disabled: i
    } = Go(), {
      bindPopupItems: l
    } = dg();
    Gt(() => e.show, () => e.lockScroll), de(() => e.show, (v) => {
      S(v ? e.onOpen : e.onClose);
    }), l({
      show: B(() => e.show)
    }), We(() => window, "keydown", f), _h(() => S(e.onRouteChange));
    function s() {
      const {
        closeOnClickOverlay: v,
        onClickOverlay: y
      } = e;
      S(y), v && S(e["onUpdate:show"], !1);
    }
    function u() {
      const {
        overlayClass: v = "",
        overlayStyle: y
      } = e;
      return G("div", {
        class: Si(Rn("overlay"), v),
        style: mg({
          zIndex: r.value - 1
        }, y),
        onClick: s
      }, null);
    }
    function c() {
      return Me(G("div", Ye({
        class: Si(Rn("content"), Rn(`--${e.position}`), [e.defaultStyle, Rn("--content-background-color")], [e.defaultStyle, Rn("$-elevation--3")], [e.safeArea, Rn("--safe-area")], [e.safeAreaTop, Rn("--safe-area-top")]),
        style: {
          zIndex: r.value
        },
        role: "dialog",
        "aria-modal": "true"
      }, o), [t.value && S(n.default)]), [[Xn, e.show]]);
    }
    function d() {
      return G(_e, {
        name: Rn("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [Me(G("div", {
          class: Si(Rn("$--box"), Rn(), [!e.overlay, Rn("--pointer-events-none")]),
          style: {
            zIndex: r.value - 2
          }
        }, [e.overlay && u(), G(_e, {
          name: e.transition || Rn(`$-pop-${e.position}`)
        }, {
          default: () => [c()]
        })]), [[Xn, e.show]])]
      });
    }
    function f(v) {
      !a() || v.key !== "Escape" || !e.show || (S(e.onKeyEscape), e.closeOnKeyEscape && (Re(v), S(e["onUpdate:show"], !1)));
    }
    return () => {
      const {
        teleport: v
      } = e;
      return v ? G(no, {
        to: v,
        disabled: i.value
      }, {
        default: () => [d()]
      }) : d();
    };
  }
});
te(Wr);
ue(Wr, gt);
const x8 = Wr;
var Po = Wr;
const on = {
  name: String,
  size: [Number, String],
  color: String,
  namespace: {
    type: String,
    default: "var-icon"
  },
  transition: {
    type: [Number, String],
    default: 0
  },
  animationClass: String,
  onClick: R()
};
function Vn(e, n) {
  throw Error(`Varlet [${e}]: ${n}`);
}
function gg(e, n) {
  console.warn(`Varlet [${e}]: ${n}`);
}
function bg(e) {
  const { left: n } = an(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function eu(e) {
  const { top: n } = an(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function Pi(e) {
  const { transform: n } = qo(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function zo(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const o = /(scroll|auto)/, { overflowY: t, overflow: r } = qo(n);
    if (o.test(t) || o.test(r))
      return n;
  }
  return window;
}
function yg(e) {
  const n = [];
  let o = e;
  for (; !$d(o); )
    o = zo(o), n.push(o);
  return n;
}
function Ld(e, n) {
  if (gn(e)) {
    const o = document.querySelector(e);
    return o || Vn(n, "target element cannot found"), o;
  }
  if (zh(e))
    return e;
  Vn(n, 'type of prop "target" should be a selector or an element object');
}
function kg() {
  const { width: e, height: n } = an(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
const $g = (e) => gn(e) && e.endsWith("rem"), wg = (e) => gn(e) && e.endsWith("px") || On(e), Cg = (e) => gn(e) && e.endsWith("vw"), Sg = (e) => gn(e) && e.endsWith("vh"), Pg = (e) => gn(e) && e.endsWith("vmin"), zg = (e) => gn(e) && e.endsWith("vmax"), en = (e) => {
  if (kd(e))
    return Number(e);
  if (wg(e))
    return +e.replace("px", "");
  if (!to())
    return 0;
  const { vw: n, vh: o, vMin: t, vMax: r } = kg();
  if (Cg(e))
    return +e.replace("vw", "") * n / 100;
  if (Sg(e))
    return +e.replace("vh", "") * o / 100;
  if (Pg(e))
    return +e.replace("vmin", "") * t / 100;
  if (zg(e))
    return +e.replace("vmax", "") * r / 100;
  if ($g(e)) {
    const a = +e.replace("rem", ""), i = qo(document.documentElement).fontSize;
    return a * parseFloat(i);
  }
  return gn(e) ? F(e) : 0;
}, Oe = (e) => {
  if (e != null)
    return kd(e) ? `${e}px` : String(e);
}, Cn = (e, n = 1) => {
  if (e == null)
    return;
  const o = Oe(e), t = o.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
  return `${parseFloat(o) * n}${t}`;
};
function Bt(e, { top: n = 0, left: o = 0, duration: t = 300, animation: r }) {
  const a = Date.now(), i = Ro(e), l = as(e);
  return new Promise((s) => {
    const u = () => {
      const c = (Date.now() - a) / t;
      if (c < 1) {
        const d = i + (n - i) * r(c), f = l + (o - l) * r(c);
        e.scrollTo(f, d), requestAnimationFrame(u);
      } else
        e.scrollTo(o, n), s();
    };
    requestAnimationFrame(u);
  });
}
function Rd(e) {
  return Object.entries(e ?? {}).reduce((n, [o, t]) => {
    const r = o.startsWith("--") ? o : `--${Cd(o)}`;
    return n[r] = t, n;
  }, {});
}
function Pr(e) {
  return e === "start" || e === "end" ? `flex-${e}` : e;
}
const nu = ["button", "input", "select", "textarea", "[tabindex]", "[href]"].map((e) => `${e}:not([disabled])`).join(", ");
function Fd(e, n, o) {
  var t;
  const r = n.querySelectorAll(nu);
  if (!r.length)
    return;
  const a = [e, ...Array.from(e.querySelectorAll(nu))].findIndex(
    (l) => l === document.activeElement
  ) !== -1, i = Array.from(r).findIndex((l) => l === document.activeElement);
  if (o === "ArrowDown") {
    if (a && i === -1 || i === r.length - 1) {
      r[0].focus();
      return;
    }
    if (i !== -1 && i < r.length - 1) {
      r[i + 1].focus();
      return;
    }
  }
  if (o === "ArrowUp") {
    if (a && i === -1 || i === 0) {
      (t = r[r.length - 1]) == null || t.focus();
      return;
    }
    i > 0 && r[i - 1].focus();
  }
}
var Og = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: Tg, n: Eg, classes: Dg } = ee("icon");
function Bg(e, n) {
  return h(), Pe(vt(e.isURL(e.name) ? "img" : "i"), {
    class: p(
      e.classes(
        e.n(),
        [e.namespace !== e.n(), e.namespace],
        `${e.namespace}--set`,
        [e.isURL(e.name), e.n("image"), `${e.namespace}-${e.nextName}`],
        [e.animateInProgress, e.animationClass == null ? e.n("--shrinking") : e.animationClass]
      )
    ),
    style: K({
      color: e.color,
      "transition-duration": `${e.toNumber(e.transition)}ms`,
      width: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
      height: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
      fontSize: e.toSizeUnit(e.size)
    }),
    src: e.isURL(e.name) ? e.nextName : null,
    onClick: e.onClick
  }, null, 8, ["class", "style", "src", "onClick"]);
}
const Ud = x({
  name: Tg,
  props: on,
  setup(e) {
    const n = k(""), o = k(!1);
    de(() => e.name, t, { immediate: !0 });
    function t(r, a) {
      return Og(this, null, function* () {
        const { transition: i } = e;
        if (a == null || F(i) === 0) {
          n.value = r;
          return;
        }
        o.value = !0, yield Ke(), setTimeout(() => {
          a != null && (n.value = r), o.value = !1;
        }, F(i));
      });
    }
    return {
      nextName: n,
      animateInProgress: o,
      n: Eg,
      classes: Dg,
      isURL: Oh,
      toNumber: F,
      toSizeUnit: Oe
    };
  }
});
Ud.render = Bg;
var Kr = Ud;
te(Kr);
ue(Kr, on);
const e5 = Kr;
var Je = Kr;
const Hd = {
  hovering: Boolean,
  focusing: Boolean
}, { name: Ig, n: Mg, classes: Ng } = ee("hover-overlay");
function Ag(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.hovering, e.n("--hovering")], [e.focusing && !e.inMobile(), e.n("--focusing")]))
    },
    null,
    2
    /* CLASS */
  );
}
const Yd = x({
  name: Ig,
  props: Hd,
  setup: () => ({
    n: Mg,
    classes: Ng,
    inMobile: kr
  })
});
Yd.render = Ag;
var qr = Yd;
te(qr);
ue(qr, Hd);
function Jn() {
  const e = k(!1);
  return {
    hovering: e,
    handleHovering: (o) => {
      e.value = o;
    }
  };
}
const n5 = qr;
var Ln = qr;
function jd(e) {
  return e ? !!(e === "desktop" && kr() || e === "mobile" && !kr()) : !1;
}
function Vg(e) {
  const n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((o, t) => {
    const [r, a] = t.split(":").map((i) => i.trim());
    return o[ls(r)] = a, o;
  }, {}) : {};
}
function Lg(e) {
  const { value: n } = e._hover, o = Vg(e);
  Object.keys(n).forEach((t) => {
    const r = ls(t);
    n[r] != null && o[r] && (e._hover.rawStyle[r] = o[r]);
  });
}
function cs(e, n) {
  Object.keys(n).forEach((o) => {
    const t = n[o];
    t != null && (e.style[o] = t);
  });
}
function Rg(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e._hover.value[n] != null && (e.style[n] = "");
  });
}
function Wd(e) {
  (e == null ? void 0 : e._hover) != null && (Rg(e), cs(e, e._hover.rawStyle));
}
function Kd() {
  const { value: e } = this._hover;
  if (this._hover.hovering = !0, oo(e)) {
    e(this._hover.hovering);
    return;
  }
  cs(this, e);
}
function qd() {
  if (this._hover.hovering = !1, oo(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  Wd(this);
}
function Gd(e, n) {
  var o, t;
  const { arg: r, value: a } = n;
  jd(r) || (e._hover = {
    value: a,
    hovering: (t = (o = e._hover) == null ? void 0 : o.hovering) != null ? t : !1,
    rawStyle: {}
  }, Lg(e), e.addEventListener("mouseenter", Kd), e.addEventListener("mouseleave", qd));
}
function Xd(e, n) {
  jd(n.arg) || (Wd(e), e.removeEventListener("mouseenter", Kd), e.removeEventListener("mouseleave", qd));
}
function Fg(e, n) {
  e._hover && Xd(e, n);
}
function Ug(e, n) {
  return !oo(n.value) && e._hover.hovering;
}
function Hg(e, n) {
  Gd(e, n), Ug(e, n) && cs(e, n.value);
}
const Zd = {
  mounted: Gd,
  unmounted: Xd,
  beforeUpdate: Fg,
  updated: Hg,
  install(e) {
    e.directive("hover", this);
  }
}, o5 = Zd;
var Tn = Zd;
const { name: Yg, n: jg, classes: Wg } = ee("action-sheet");
function Kg(e, n) {
  const o = ne("var-icon"), t = ne("var-hover-overlay"), r = je("ripple"), a = je("hover");
  return Me((h(), P(
    "div",
    {
      class: p(e.classes(e.n("action-item"), e.className, [e.disabled, e.n("--disabled")])),
      style: K({ color: e.color })
    },
    [
      e.icon ? (h(), Pe(o, {
        key: 0,
        "var-action-sheet-cover": "",
        class: p(e.n("action-icon")),
        namespace: e.namespace,
        name: e.icon,
        size: e.iconSize
      }, null, 8, ["class", "namespace", "name", "size"])) : X("v-if", !0),
      I(
        "div",
        {
          class: p(e.n("action-name"))
        },
        re(e.name),
        3
        /* TEXT, CLASS */
      ),
      G(t, {
        hovering: e.disabled ? !1 : e.hovering
      }, null, 8, ["hovering"])
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: e.disabled }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const Jd = x({
  name: Yg,
  components: {
    VarHoverOverlay: Ln,
    VarIcon: Je
  },
  directives: { Ripple: tn, Hover: Tn },
  props: {
    name: String,
    className: String,
    disabled: Boolean,
    color: String,
    namespace: String,
    iconSize: [String, Number],
    icon: String
  },
  setup() {
    const { hovering: e, handleHovering: n } = Jn();
    return {
      hovering: e,
      n: jg,
      classes: Wg,
      handleHovering: n
    };
  }
});
Jd.render = Kg;
var qg = Jd, Gg = Object.defineProperty, ou = Object.getOwnPropertySymbols, Xg = Object.prototype.hasOwnProperty, Zg = Object.prototype.propertyIsEnumerable, tu = (e, n, o) => n in e ? Gg(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Jg = (e, n) => {
  for (var o in n || (n = {}))
    Xg.call(n, o) && tu(e, o, n[o]);
  if (ou)
    for (var o of ou(n))
      Zg.call(n, o) && tu(e, o, n[o]);
  return e;
};
const Qd = Jg({
  show: Boolean,
  title: String,
  actions: {
    type: Array,
    default: () => []
  },
  closeOnClickAction: {
    type: Boolean,
    default: !0
  },
  onSelect: R(),
  "onUpdate:show": R()
}, Ie(gt, [
  "overlay",
  "overlayClass",
  "overlayStyle",
  "lockScroll",
  "closeOnClickOverlay",
  "closeOnKeyEscape",
  "safeArea",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  // internal for function call closes the dialog
  "onRouteChange",
  "onKeyEscape"
]));
var ds = {
  // Dialog
  dialogTitle: "提示",
  dialogConfirmButtonText: "确认",
  dialogCancelButtonText: "取消",
  // ActionSheet
  actionSheetTitle: "请选择",
  // List
  listLoadingText: "加载中",
  listFinishedText: "没有更多了",
  listErrorText: "加载失败",
  // Picker
  pickerTitle: "请选择",
  pickerConfirmButtonText: "确认",
  pickerCancelButtonText: "取消",
  // date-picker
  datePickerMonthDict: {
    "01": {
      name: "一月",
      abbr: "一月"
    },
    "02": {
      name: "二月",
      abbr: "二月"
    },
    "03": {
      name: "三月",
      abbr: "三月"
    },
    "04": {
      name: "四月",
      abbr: "四月"
    },
    "05": {
      name: "五月",
      abbr: "五月"
    },
    "06": {
      name: "六月",
      abbr: "六月"
    },
    "07": {
      name: "七月",
      abbr: "七月"
    },
    "08": {
      name: "八月",
      abbr: "八月"
    },
    "09": {
      name: "九月",
      abbr: "九月"
    },
    10: {
      name: "十月",
      abbr: "十月"
    },
    11: {
      name: "十一月",
      abbr: "十一月"
    },
    12: {
      name: "十二月",
      abbr: "十二月"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "星期日",
      abbr: "日"
    },
    1: {
      name: "星期一",
      abbr: "一"
    },
    2: {
      name: "星期二",
      abbr: "二"
    },
    3: {
      name: "星期三",
      abbr: "三"
    },
    4: {
      name: "星期四",
      abbr: "四"
    },
    5: {
      name: "星期五",
      abbr: "五"
    },
    6: {
      name: "星期六",
      abbr: "六"
    }
  },
  datePickerSelected: "个被选择",
  datePickerHint: "选择日期",
  // pagination
  paginationItem: "条",
  paginationPage: "页",
  paginationJump: "前往",
  // time-picker
  timePickerHint: "选择时间"
}, _d = {
  // Dialog
  dialogTitle: "Hint",
  dialogConfirmButtonText: "Confirm",
  dialogCancelButtonText: "Cancel",
  // ActionSheet
  actionSheetTitle: "Select One",
  // List
  listLoadingText: "Loading",
  listFinishedText: "No more",
  listErrorText: "Load fail",
  // Picker
  pickerTitle: "Pick it",
  pickerConfirmButtonText: "Confirm",
  pickerCancelButtonText: "Cancel",
  // date-picker
  datePickerMonthDict: {
    "01": {
      name: "January",
      abbr: "JAN"
    },
    "02": {
      name: "February",
      abbr: "FEB"
    },
    "03": {
      name: "March",
      abbr: "MAR"
    },
    "04": {
      name: "April",
      abbr: "APR"
    },
    "05": {
      name: "May",
      abbr: "MAY"
    },
    "06": {
      name: "June",
      abbr: "JUN"
    },
    "07": {
      name: "July",
      abbr: "JUL"
    },
    "08": {
      name: "August",
      abbr: "AUG"
    },
    "09": {
      name: "September",
      abbr: "SEP"
    },
    10: {
      name: "October",
      abbr: "OCT"
    },
    11: {
      name: "November",
      abbr: "NOV"
    },
    12: {
      name: "December",
      abbr: "DEC"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "Sunday",
      abbr: "S"
    },
    1: {
      name: "Monday",
      abbr: "M"
    },
    2: {
      name: "Tuesday",
      abbr: "T"
    },
    3: {
      name: "Wednesday",
      abbr: "W"
    },
    4: {
      name: "Thursday",
      abbr: "T"
    },
    5: {
      name: "Friday",
      abbr: "F"
    },
    6: {
      name: "Saturday",
      abbr: "S"
    }
  },
  datePickerSelected: " selected",
  datePickerHint: "SELECT DATE",
  // pagination
  paginationItem: "",
  paginationPage: "page",
  paginationJump: "Go to",
  // time-picker
  timePickerHint: "SELECT TIME"
}, fs = {
  // Dialog
  dialogTitle: "提示",
  dialogConfirmButtonText: "確認",
  dialogCancelButtonText: "取消",
  // ActionSheet
  actionSheetTitle: "請選擇",
  // List
  listLoadingText: "載入中",
  listFinishedText: "沒有更多了",
  listErrorText: "載入失敗",
  // Picker
  pickerTitle: "請選擇",
  pickerConfirmButtonText: "確認",
  pickerCancelButtonText: "取消",
  // date-picker
  datePickerMonthDict: {
    "01": {
      name: "一月",
      abbr: "一月"
    },
    "02": {
      name: "二月",
      abbr: "二月"
    },
    "03": {
      name: "三月",
      abbr: "三月"
    },
    "04": {
      name: "四月",
      abbr: "四月"
    },
    "05": {
      name: "五月",
      abbr: "五月"
    },
    "06": {
      name: "六月",
      abbr: "六月"
    },
    "07": {
      name: "七月",
      abbr: "七月"
    },
    "08": {
      name: "八月",
      abbr: "八月"
    },
    "09": {
      name: "九月",
      abbr: "九月"
    },
    10: {
      name: "十月",
      abbr: "十月"
    },
    11: {
      name: "十一月",
      abbr: "十一月"
    },
    12: {
      name: "十二月",
      abbr: "十二月"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "星期日",
      abbr: "日"
    },
    1: {
      name: "星期一",
      abbr: "一"
    },
    2: {
      name: "星期二",
      abbr: "二"
    },
    3: {
      name: "星期三",
      abbr: "三"
    },
    4: {
      name: "星期四",
      abbr: "四"
    },
    5: {
      name: "星期五",
      abbr: "五"
    },
    6: {
      name: "星期六",
      abbr: "六"
    }
  },
  datePickerSelected: "個被選擇",
  // pagination
  paginationItem: "條",
  paginationPage: "頁",
  paginationJump: "前往"
}, xd = fs, ef = {
  // Dialog
  dialogTitle: "اشاره",
  dialogConfirmButtonText: "تایید",
  dialogCancelButtonText: "لغو",
  // ActionSheet
  actionSheetTitle: "انتخاب یک مورد",
  // List
  listLoadingText: "در حال بارگزاری",
  listFinishedText: "مورد دیگری وجود ندارد",
  listErrorText: "بارگزاری ناموفق",
  // Picker
  pickerTitle: "انتخاب کنید",
  pickerConfirmButtonText: "تایید",
  pickerCancelButtonText: "لغو",
  // date-picker
  datePickerMonthDict: {
    "01": {
      name: "ژانویه",
      abbr: "JAN"
    },
    "02": {
      name: "فوریه",
      abbr: "FEB"
    },
    "03": {
      name: "مارس",
      abbr: "MAR"
    },
    "04": {
      name: "آوریل",
      abbr: "APR"
    },
    "05": {
      name: "مه",
      abbr: "MAY"
    },
    "06": {
      name: "ژوئن",
      abbr: "JUN"
    },
    "07": {
      name: "جولای",
      abbr: "JUL"
    },
    "08": {
      name: "آگوست",
      abbr: "AUG"
    },
    "09": {
      name: "سپتامبر",
      abbr: "SEP"
    },
    10: {
      name: "اوکتبر",
      abbr: "OCT"
    },
    11: {
      name: "نوامبر",
      abbr: "NOV"
    },
    12: {
      name: "دسامبر",
      abbr: "DEC"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "یکشنبه",
      abbr: "S"
    },
    1: {
      name: "دوشنبه",
      abbr: "M"
    },
    2: {
      name: "سه‌شنبه",
      abbr: "T"
    },
    3: {
      name: "چهارشنبه",
      abbr: "W"
    },
    4: {
      name: "پنجشنبه",
      abbr: "T"
    },
    5: {
      name: "جمعه",
      abbr: "F"
    },
    6: {
      name: "شنبه",
      abbr: "S"
    }
  },
  datePickerSelected: " انتخاب شده",
  datePickerHint: "انتخاب تاریخ",
  // pagination
  paginationItem: "",
  paginationPage: "صفحه",
  paginationJump: "برو به",
  // time-picker
  timePickerHint: "انتخاب زمان"
}, Qg = Object.defineProperty, ru = Object.getOwnPropertySymbols, _g = Object.prototype.hasOwnProperty, xg = Object.prototype.propertyIsEnumerable, au = (e, n, o) => n in e ? Qg(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, iu = (e, n) => {
  for (var o in n || (n = {}))
    _g.call(n, o) && au(e, o, n[o]);
  if (ru)
    for (var o of ru(n))
      xg.call(n, o) && au(e, o, n[o]);
  return e;
};
function ps() {
  const e = k({}), n = k({}), o = (i, l) => {
    l.lang = i, e.value[i] = l;
  }, t = (i) => {
    if (!e.value[i])
      return console.warn(`The ${i} does not exist. You can mount a language message using the add method`), {};
    n.value = e.value[i];
  };
  return {
    messages: e,
    currentMessage: n,
    add: o,
    use: t,
    merge: (i, l) => {
      if (!e.value[i]) {
        console.warn(`The ${i} does not exist. You can mount a language message using the add method`);
        return;
      }
      e.value[i] = iu(iu({}, e.value[i]), l), t(i);
    },
    t: (i) => {
      if ($r(n.value, i))
        return n.value[i];
    }
  };
}
const { messages: nf, currentMessage: of, add: vs, use: ms, merge: tf, t: rn } = ps();
vs("zh-CN", ds);
ms("zh-CN");
const t5 = {
  zhCN: ds,
  enUS: _d,
  zhTW: fs,
  zhHK: xd,
  faIR: ef,
  messages: nf,
  currentMessage: of,
  add: vs,
  use: ms,
  merge: tf,
  t: rn,
  useLocale: ps
};
var Ai = {
  zhCN: ds,
  enUS: _d,
  zhTW: fs,
  zhHK: xd,
  faIR: ef,
  messages: nf,
  currentMessage: of,
  add: vs,
  use: ms,
  merge: tf,
  t: rn,
  useLocale: ps
};
const Vi = Symbol("LOCALE_PROVIDER_KEY");
function eb(e) {
  bd(Vi, e);
}
function ao() {
  return Od(Vi) ? hd(Vi) : { t: null };
}
const { name: nb, n: ob, classes: tb } = ee("action-sheet");
function rb(e, n) {
  const o = ne("var-action-item"), t = ne("var-popup");
  return h(), Pe(t, {
    position: "bottom",
    class: p(e.n("popup-radius")),
    overlay: e.overlay,
    "overlay-class": e.overlayClass,
    "overlay-style": e.overlayStyle,
    "lock-scroll": e.lockScroll,
    "close-on-click-overlay": e.closeOnClickOverlay,
    "close-on-key-escape": e.closeOnKeyEscape,
    teleport: e.teleport,
    "safe-area": e.safeArea,
    show: e.show,
    "onUpdate:show": n[0] || (n[0] = (r) => e.show = r),
    onOpen: e.onOpen,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onOpened: e.onOpened,
    onRouteChange: e.onRouteChange,
    onKeyEscape: e.onKeyEscape
  }, {
    default: fe(() => [
      I(
        "div",
        Ye({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [
          L(e.$slots, "title", {}, () => {
            var r;
            return [
              I(
                "div",
                {
                  class: p(e.n("title"))
                },
                re((r = e.title) != null ? r : (e.pt ? e.pt : e.t)("actionSheetTitle")),
                3
                /* TEXT, CLASS */
              )
            ];
          }),
          L(e.$slots, "actions", {}, () => [
            (h(!0), P(
              Ae,
              null,
              Ze(e.actions, (r) => (h(), Pe(o, {
                key: r.name,
                name: r.name,
                namespace: r.namespace,
                icon: r.icon,
                "icon-size": r.iconSize,
                "class-name": r.className,
                color: r.color,
                onClick: (a) => e.handleSelect(r)
              }, null, 8, ["name", "namespace", "icon", "icon-size", "class-name", "color", "onClick"]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "close-on-key-escape", "teleport", "safe-area", "show", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange", "onKeyEscape"]);
}
const rf = x({
  name: nb,
  directives: { Ripple: tn },
  components: {
    VarPopup: Po,
    VarActionItem: qg
  },
  inheritAttrs: !1,
  props: Qd,
  setup(e) {
    const n = Zn(e, "show"), { t: o } = ao();
    function t(r) {
      if (r.disabled)
        return;
      const { closeOnClickAction: a, onSelect: i } = e;
      S(i, r), a && (n.value = !1);
    }
    return {
      show: n,
      pt: o,
      t: rn,
      n: ob,
      classes: tb,
      handleSelect: t
    };
  }
});
rf.render = rb;
var Zt = rf, ab = Object.defineProperty, lu = Object.getOwnPropertySymbols, ib = Object.prototype.hasOwnProperty, lb = Object.prototype.propertyIsEnumerable, su = (e, n, o) => n in e ? ab(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, uu = (e, n) => {
  for (var o in n || (n = {}))
    ib.call(n, o) && su(e, o, n[o]);
  if (lu)
    for (var o of lu(n))
      lb.call(n, o) && su(e, o, n[o]);
  return e;
};
let go, hs = {};
function sb(e = {}) {
  return uu(uu({}, hs), e);
}
function Do(e) {
  return to() ? new Promise((n) => {
    Do.close();
    const o = Qe(sb(e));
    o.teleport = "body", go = o;
    const { unmountInstance: t } = ht(Zt, o, {
      onSelect: (r) => {
        S(o.onSelect, r), n(r);
      },
      onClose: () => {
        S(o.onClose), n("close");
      },
      onClosed: () => {
        S(o.onClosed), t(), go === o && (go = null);
      },
      onRouteChange: () => {
        t(), go === o && (go = null);
      },
      "onUpdate:show": (r) => {
        o.show = r;
      }
    });
    o.show = !0;
  }) : Promise.resolve();
}
Do.setDefaultOptions = function(e) {
  hs = e;
};
Do.resetDefaultOptions = function() {
  hs = {};
};
Do.close = function() {
  if (go != null) {
    const e = go;
    go = null, Ke().then(() => {
      e.show = !1;
    });
  }
};
Do.Component = Zt;
te(Zt);
te(Zt, Do);
ue(Do, Qd);
const r5 = Zt;
var Li = Do;
const af = {
  color: String,
  textColor: String,
  title: String,
  titlePosition: {
    type: String,
    default: "left"
  },
  elevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  round: Boolean,
  image: String,
  imageLinearGradient: String,
  safeAreaTop: Boolean,
  border: Boolean,
  zIndex: {
    type: [Number, String],
    default: 1
  },
  fixed: Boolean,
  placeholder: Boolean
}, { name: ub, n: cb, classes: db } = ee("app-bar");
function fb(e, n) {
  return h(), P(
    Ae,
    null,
    [
      I(
        "div",
        Ye({
          class: e.classes(
            e.n(),
            e.n("$--box"),
            [e.safeAreaTop, e.n("--safe-area-top")],
            [e.round, e.n("--round")],
            [e.fixed, e.n("--fixed")],
            [e.border, e.n("--border")],
            e.formatElevation(e.elevation, 3)
          ),
          ref: "appBar",
          style: e.rootStyles
        }, e.$attrs),
        [
          I(
            "div",
            {
              class: p(e.n("toolbar"))
            },
            [
              I(
                "div",
                {
                  class: p(e.n("left"))
                },
                [
                  L(e.$slots, "left"),
                  e.titlePosition === "left" ? (h(), P(
                    "div",
                    {
                      key: 0,
                      class: p(e.n("title")),
                      style: K({ paddingLeft: e.paddingLeft })
                    },
                    [
                      L(e.$slots, "default", {}, () => [
                        Be(
                          re(e.title),
                          1
                          /* TEXT */
                        )
                      ])
                    ],
                    6
                    /* CLASS, STYLE */
                  )) : X("v-if", !0)
                ],
                2
                /* CLASS */
              ),
              e.titlePosition === "center" ? (h(), P(
                "div",
                {
                  key: 0,
                  class: p(e.n("title"))
                },
                [
                  L(e.$slots, "default", {}, () => [
                    Be(
                      re(e.title),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                2
                /* CLASS */
              )) : X("v-if", !0),
              I(
                "div",
                {
                  class: p(e.n("right"))
                },
                [
                  e.titlePosition === "right" ? (h(), P(
                    "div",
                    {
                      key: 0,
                      class: p(e.n("title")),
                      style: K({ paddingRight: e.paddingRight })
                    },
                    [
                      L(e.$slots, "default", {}, () => [
                        Be(
                          re(e.title),
                          1
                          /* TEXT */
                        )
                      ])
                    ],
                    6
                    /* CLASS, STYLE */
                  )) : X("v-if", !0),
                  L(e.$slots, "right")
                ],
                2
                /* CLASS */
              )
            ],
            2
            /* CLASS */
          ),
          L(e.$slots, "content")
        ],
        16
        /* FULL_PROPS */
      ),
      e.fixed && e.placeholder ? (h(), P(
        "div",
        {
          key: 0,
          class: p(e.n("placeholder")),
          style: K({ height: e.placeholderHeight })
        },
        null,
        6
        /* CLASS, STYLE */
      )) : X("v-if", !0)
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const lf = x({
  name: ub,
  props: af,
  setup(e, { slots: n }) {
    const o = k(null), t = k(), r = k(), a = k(), i = B(() => {
      const { image: u, color: c, textColor: d, imageLinearGradient: f, zIndex: v } = e;
      return u != null ? {
        "background-image": `${f ? `linear-gradient(${f}), ` : ""}url(${u})`,
        "background-position": "center center",
        "background-size": "cover",
        "z-index": v
      } : {
        background: c,
        color: d,
        "z-index": v
      };
    });
    ro(s), pn(() => {
      l(), s();
    }), Wt(l);
    function l() {
      t.value = n.left ? 0 : void 0, r.value = n.right ? 0 : void 0;
    }
    function s() {
      if (!e.fixed || !e.placeholder)
        return;
      const { height: u } = an(o.value);
      a.value = Oe(u);
    }
    return {
      rootStyles: i,
      paddingLeft: t,
      paddingRight: r,
      n: cb,
      classes: db,
      formatElevation: fn,
      appBar: o,
      placeholderHeight: a
    };
  }
});
lf.render = fb;
var Gr = lf;
te(Gr);
ue(Gr, af);
const a5 = Gr;
var Ri = Gr;
const cu = (e) => gn(e) ? e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp|ico)$/i.test(e) : !1, du = (e) => gn(e) ? e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e) : !1, pb = (e) => {
  const n = [];
  return {
    cache: n,
    has(o) {
      return this.cache.includes(o);
    },
    add(o) {
      this.has(o) || (this.cache.length === e && n.shift(), this.cache.push(o));
    },
    remove(o) {
      this.has(o) && rt(this.cache, o);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Fi = (e) => e, fu = (e) => e ** 3, sf = (e) => e < 0.5 ? fu(e * 2) / 2 : 1 - fu((1 - e) * 2) / 2, Fo = (e, n, o = "") => {
  if (e === void 0 && (e = ""), e.length >= n)
    return e;
  const t = n - e.length, r = Math.floor(t / o.length);
  return o.repeat(r) + o.slice(0, t % o.length) + e;
};
var vb = Object.defineProperty, pu = Object.getOwnPropertySymbols, mb = Object.prototype.hasOwnProperty, hb = Object.prototype.propertyIsEnumerable, vu = (e, n, o) => n in e ? vb(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, gb = (e, n) => {
  for (var o in n || (n = {}))
    mb.call(n, o) && vu(e, o, n[o]);
  if (pu)
    for (var o of pu(n))
      hb.call(n, o) && vu(e, o, n[o]);
  return e;
}, Xr = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const bb = "background-image", yb = "lazy-loading", kb = "lazy-error", mu = "lazy-attempt", $b = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Ui = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", at = [], zr = [], uf = pb(100), cn = {
  loading: Ui,
  error: Ui,
  attempt: 3,
  throttleWait: 300,
  events: $b
};
let gs = is(Jt, cn.throttleWait);
function Zr(e, n) {
  e._lazy.arg === bb ? e.style.backgroundImage = `url(${n})` : e.setAttribute("src", n);
}
function wb(e) {
  e._lazy.loading && Zr(e, e._lazy.loading), Jt();
}
function Cb(e) {
  e._lazy.error && Zr(e, e._lazy.error), e._lazy.state = "error", ys(e), Jt();
}
function cf(e, n) {
  Zr(e, n), e._lazy.state = "success", ys(e), Jt();
}
function Sb(e) {
  var n;
  zr.includes(e) || (zr.push(e), (n = cn.events) == null || n.forEach((o) => {
    e.addEventListener(o, gs, { passive: !0 });
  }));
}
function Pb() {
  zr.forEach((e) => {
    var n;
    (n = cn.events) == null || n.forEach((o) => {
      e.removeEventListener(o, gs);
    });
  }), zr.length = 0;
}
function zb(e, n) {
  var o, t;
  const r = {
    loading: (o = e.getAttribute(yb)) != null ? o : cn.loading,
    error: (t = e.getAttribute(kb)) != null ? t : cn.error,
    attempt: e.getAttribute(mu) ? Number(e.getAttribute(mu)) : cn.attempt
  };
  e._lazy = gb({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, r), Zr(e, Ui), S(cn.filter, e._lazy);
}
function Ob(e, n) {
  const o = new Image();
  o.src = n, e._lazy.preloadImage = o, o.addEventListener("load", () => {
    e._lazy.attemptLock = !1, uf.add(n), cf(e, n);
  }), o.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Cb(e) : df(e);
  });
}
function df(e) {
  if (e._lazy.attemptLock)
    return;
  e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
  const { src: n } = e._lazy;
  if (uf.has(n)) {
    cf(e, n), e._lazy.attemptLock = !1;
    return;
  }
  wb(e), Ob(e, n);
}
function bs(e) {
  return Xr(this, null, function* () {
    yield $n(), Mh(e) && df(e);
  });
}
function Jt() {
  at.forEach((e) => bs(e));
}
function Tb(e) {
  return Xr(this, null, function* () {
    !at.includes(e) && at.push(e), yg(e).forEach(Sb), yield bs(e);
  });
}
function ys(e) {
  rt(at, e), at.length === 0 && Pb();
}
function Eb(e, n) {
  const { src: o, arg: t } = e._lazy;
  return o !== n.value || t !== n.arg;
}
function ff(e, n) {
  return Xr(this, null, function* () {
    zb(e, n), yield Tb(e);
  });
}
function Db(e, n) {
  return Xr(this, null, function* () {
    if (!Eb(e, n)) {
      at.includes(e) && (yield bs(e));
      return;
    }
    yield ff(e, n);
  });
}
function Bb(e = {}) {
  const { events: n, loading: o, error: t, attempt: r, throttleWait: a, filter: i } = e;
  cn.events = n ?? cn.events, cn.loading = o ?? cn.loading, cn.error = t ?? cn.error, cn.attempt = r ?? cn.attempt, cn.throttleWait = a ?? cn.throttleWait, cn.filter = i;
}
const pf = {
  mounted: ff,
  unmounted: ys,
  updated: Db,
  install(e, n) {
    Bb(n), gs = is(Jt, cn.throttleWait), e.directive("lazy", this);
  }
}, i5 = pf;
var It = pf;
const vf = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    default: "normal"
  },
  alt: String,
  color: String,
  src: String,
  fit: {
    type: String,
    default: "cover"
  },
  bordered: Boolean,
  borderColor: String,
  loading: String,
  error: String,
  lazy: Boolean,
  hoverable: Boolean,
  onClick: R(),
  onLoad: R(),
  onError: R()
}, Ib = (e) => ["mini", "small", "normal", "large"].includes(e), { name: Mb, n: Nb, classes: Ab } = ee("avatar"), Vb = ["src", "alt", "lazy-loading", "lazy-error"], Lb = ["src", "alt"];
function Rb(e, n) {
  const o = je("lazy");
  return h(), P(
    "div",
    {
      ref: "avatarElement",
      class: p(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.isInternalSize(e.size), e.n(`--${e.size}`)],
          [e.round, e.n("--round")],
          [e.bordered, e.n("--bordered")],
          [e.hoverable, e.n("--hoverable")]
        )
      ),
      style: K({
        width: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        height: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        borderColor: e.borderColor,
        backgroundColor: e.color
      }),
      onClick: n[3] || (n[3] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      e.src ? (h(), P(
        Ae,
        { key: 0 },
        [
          e.lazy ? Me((h(), P("img", {
            key: 0,
            role: "img",
            class: p(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: K({ objectFit: e.fit }),
            "lazy-loading": e.loading,
            "lazy-error": e.error,
            onLoad: n[0] || (n[0] = (...t) => e.handleLoad && e.handleLoad(...t))
          }, null, 46, Vb)), [
            [o, e.src]
          ]) : (h(), P("img", {
            key: 1,
            role: "img",
            class: p(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: K({ objectFit: e.fit }),
            onLoad: n[1] || (n[1] = (...t) => e.handleLoad && e.handleLoad(...t)),
            onError: n[2] || (n[2] = (...t) => e.handleError && e.handleError(...t))
          }, null, 46, Lb))
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (h(), P(
        "div",
        {
          key: 1,
          ref: "textElement",
          class: p(e.n("text")),
          style: K({ transform: `scale(${e.scale})` })
        },
        [
          L(e.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      ))
    ],
    6
    /* CLASS, STYLE */
  );
}
const mf = x({
  name: Mb,
  directives: { Lazy: It },
  props: vf,
  setup(e) {
    const n = k(null), o = k(null), t = k(1);
    pn(r), Wt(r);
    function r() {
      if (!n.value || !o.value) {
        t.value = 1;
        return;
      }
      const s = n.value.offsetWidth, u = o.value.offsetWidth;
      s > u ? t.value = 1 : t.value = s / u;
    }
    function a(s) {
      const u = s.currentTarget, { lazy: c, onLoad: d, onError: f } = e;
      c ? (u._lazy.state === "success" && S(d, s), u._lazy.state === "error" && S(f, s)) : S(d, s);
    }
    function i(s) {
      S(e.onError, s);
    }
    function l(s) {
      S(e.onClick, s);
    }
    return {
      avatarElement: n,
      textElement: o,
      scale: t,
      n: Nb,
      classes: Ab,
      isInternalSize: Ib,
      toSizeUnit: Oe,
      handleLoad: a,
      handleError: i,
      handleClick: l
    };
  }
});
mf.render = Rb;
var Jr = mf;
te(Jr);
ue(Jr, vf);
const l5 = Jr;
var Hi = Jr;
const hf = {
  offset: [Number, String],
  vertical: Boolean
}, { name: Fb, n: Ub, classes: Hb } = ee("avatar-group");
function Yb(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: K(e.rootStyles)
    },
    [
      L(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const gf = x({
  name: Fb,
  props: hf,
  setup(e) {
    return {
      rootStyles: B(() => e.offset == null ? {} : {
        "--avatar-group-offset": Oe(e.offset)
      }),
      n: Ub,
      classes: Hb
    };
  }
});
gf.render = Yb;
var Qr = gf;
te(Qr);
ue(Qr, hf);
const s5 = Qr;
var Yi = Qr;
const lo = {
  type: {
    type: String,
    default: "circle"
  },
  radius: [String, Number],
  size: {
    type: String,
    default: "normal"
  },
  color: String,
  description: String,
  loading: Boolean
}, { name: jb, n: Wb, classes: Kb } = ee("loading"), qb = (e) => (Wo(""), e = e(), Ko(), e), Gb = /* @__PURE__ */ qb(() => /* @__PURE__ */ I(
  "svg",
  { viewBox: "25 25 50 50" },
  [
    /* @__PURE__ */ I("circle", {
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none"
    })
  ],
  -1
  /* HOISTED */
)), Xb = [
  Gb
];
function Zb(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      e.$slots.default ? (h(), P(
        "div",
        {
          key: 0,
          class: p(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
        },
        [
          L(e.$slots, "default"),
          e.loading ? (h(), P(
            "div",
            {
              key: 0,
              class: p(e.n("content-mask"))
            },
            null,
            2
            /* CLASS */
          )) : X("v-if", !0)
        ],
        2
        /* CLASS */
      )) : X("v-if", !0),
      e.isShow ? (h(), P(
        "div",
        {
          key: 1,
          class: p(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
        },
        [
          e.type === "circle" ? (h(), P(
            "div",
            {
              key: 0,
              class: p(e.n("circle"))
            },
            [
              I(
                "span",
                {
                  class: p(e.classes(e.n("circle-block"), e.n(`circle-block--${e.size}`))),
                  style: K({
                    width: e.multiplySizeUnit(e.radius, 2),
                    height: e.multiplySizeUnit(e.radius, 2),
                    color: e.color
                  })
                },
                [...Xb],
                6
                /* CLASS, STYLE */
              )
            ],
            2
            /* CLASS */
          )) : X("v-if", !0),
          (h(!0), P(
            Ae,
            null,
            Ze(e.loadingTypeDict, (o, t) => (h(), P(
              Ae,
              { key: t },
              [
                e.type === t ? (h(), P(
                  "div",
                  {
                    key: 0,
                    class: p(e.classes(e.n(t), e.n(`${t}--${e.size}`)))
                  },
                  [
                    (h(!0), P(
                      Ae,
                      null,
                      Ze(o, (r) => (h(), P(
                        "div",
                        {
                          key: r + t,
                          style: K({ backgroundColor: e.color }),
                          class: p(e.classes(e.n(`${t}-item`), e.n(`${t}-item--${e.size}`)))
                        },
                        null,
                        6
                        /* CLASS, STYLE */
                      ))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  2
                  /* CLASS */
                )) : X("v-if", !0)
              ],
              64
              /* STABLE_FRAGMENT */
            ))),
            128
            /* KEYED_FRAGMENT */
          )),
          e.$slots.description || e.description ? (h(), P(
            "div",
            {
              key: 1,
              class: p(e.classes(e.n("description"), e.n(`description--${e.size}`))),
              style: K({ color: e.color })
            },
            [
              L(e.$slots, "description", {}, () => [
                Be(
                  re(e.description),
                  1
                  /* TEXT */
                )
              ])
            ],
            6
            /* CLASS, STYLE */
          )) : X("v-if", !0)
        ],
        2
        /* CLASS */
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const bf = x({
  name: jb,
  props: lo,
  setup(e, { slots: n }) {
    const o = B(() => S(n.default) ? e.loading : !0);
    return {
      loadingTypeDict: {
        wave: 5,
        cube: 4,
        rect: 8,
        disappear: 3
      },
      isShow: o,
      n: Wb,
      classes: Kb,
      multiplySizeUnit: Cn
    };
  }
});
bf.render = Zb;
var _r = bf;
te(_r);
ue(_r, lo);
const u5 = _r;
var it = _r, Jb = Object.defineProperty, Qb = Object.defineProperties, _b = Object.getOwnPropertyDescriptors, hu = Object.getOwnPropertySymbols, xb = Object.prototype.hasOwnProperty, e0 = Object.prototype.propertyIsEnumerable, gu = (e, n, o) => n in e ? Jb(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, bu = (e, n) => {
  for (var o in n || (n = {}))
    xb.call(n, o) && gu(e, o, n[o]);
  if (hu)
    for (var o of hu(n))
      e0.call(n, o) && gu(e, o, n[o]);
  return e;
}, yu = (e, n) => Qb(e, _b(n));
const yf = {
  type: String,
  nativeType: {
    type: String,
    default: "button"
  },
  size: String,
  loading: Boolean,
  round: Boolean,
  block: Boolean,
  text: Boolean,
  outline: Boolean,
  disabled: Boolean,
  autoLoading: Boolean,
  iconContainer: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  color: String,
  textColor: String,
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  loadingRadius: [Number, String],
  loadingType: Ie(lo, "type"),
  loadingSize: yu(bu({}, Ie(lo, "size")), {
    default: void 0
  }),
  loadingColor: yu(bu({}, Ie(lo, "color")), {
    default: "currentColor"
  }),
  onClick: R(),
  onTouchstart: R()
}, kf = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function n0() {
  const { bindChildren: e, childProviders: n, length: o } = yn(kf);
  return {
    length: o,
    buttons: n,
    bindButtons: e
  };
}
function o0() {
  const { bindParent: e, parentProvider: n, index: o } = bn(kf);
  return {
    index: o,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
const { name: t0, n: r0, classes: a0 } = ee("button"), i0 = ["type", "disabled"];
function l0(e, n) {
  const o = ne("var-loading"), t = ne("var-hover-overlay"), r = je("ripple"), a = je("hover");
  return Me((h(), P("button", {
    class: p(
      e.classes(
        e.n(),
        e.n("$--box"),
        e.n(`--${e.states.size}`),
        [e.block, `${e.n("$--flex")} ${e.n("--block")}`, e.n("$--inline-flex")],
        [!e.states.text, e.states.elevation],
        [!e.states.iconContainer && !e.states.text, e.n(`--${e.states.type}`)],
        [e.states.text, `${e.n("--text")} ${e.n(`--text-${e.states.type}`)}`],
        [e.states.iconContainer, e.n(`--icon-container-${e.states.type}`)],
        [e.round, e.n("--round")],
        [e.states.outline, e.n("--outline")],
        [e.loading || e.pending, e.n("--loading")],
        [e.disabled, e.n("--disabled")],
        [e.states.text && e.disabled, e.n("--text-disabled")]
      )
    ),
    style: K({
      color: e.states.textColor,
      background: e.states.color
    }),
    type: e.nativeType,
    disabled: e.disabled,
    onClick: n[0] || (n[0] = (...i) => e.handleClick && e.handleClick(...i)),
    onTouchstart: n[1] || (n[1] = (...i) => e.handleTouchstart && e.handleTouchstart(...i)),
    onFocus: n[2] || (n[2] = (i) => e.isFocusing = !0),
    onBlur: n[3] || (n[3] = (i) => e.isFocusing = !1)
  }, [
    e.loading || e.pending ? (h(), Pe(o, {
      key: 0,
      class: p(e.n("loading")),
      "var-button-cover": "",
      color: e.loadingColor,
      type: e.loadingType,
      size: e.loadingSize || e.states.size,
      radius: e.loadingRadius
    }, null, 8, ["class", "color", "type", "size", "radius"])) : X("v-if", !0),
    I(
      "div",
      {
        class: p(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [
        L(e.$slots, "default")
      ],
      2
      /* CLASS */
    ),
    G(t, {
      hovering: e.disabled || e.loading || e.pending ? !1 : e.hovering,
      focusing: e.disabled || e.loading || e.pending ? !1 : e.isFocusing
    }, null, 8, ["hovering", "focusing"])
  ], 46, i0)), [
    [r, { disabled: e.disabled || !e.ripple || e.loading || e.pending }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const $f = x({
  name: t0,
  components: {
    VarLoading: it,
    VarHoverOverlay: Ln
  },
  directives: { Ripple: tn, Hover: Tn },
  props: yf,
  setup(e) {
    const n = k(!1), o = k(!1), { buttonGroup: t } = o0(), { hovering: r, handleHovering: a } = Jn(), i = B(() => {
      var c, d, f, v, y, m;
      if (!t)
        return {
          elevation: fn(e.elevation, 2),
          type: (c = e.type) != null ? c : "default",
          size: (d = e.size) != null ? d : "normal",
          color: e.color,
          text: e.text,
          textColor: e.textColor,
          outline: e.outline,
          iconContainer: e.iconContainer
        };
      const { type: b, size: C, color: w, textColor: g, mode: $ } = t;
      return {
        elevation: "",
        type: (f = e.type) != null ? f : b.value,
        size: (v = e.size) != null ? v : C.value,
        color: (y = e.color) != null ? y : w.value,
        textColor: (m = e.textColor) != null ? m : g.value,
        text: $.value === "text" || $.value === "outline",
        outline: $.value === "outline",
        iconContainer: $.value === "icon-container"
      };
    });
    function l(c) {
      e.autoLoading && (o.value = !0, Promise.all(Vo(c)).then(() => {
        o.value = !1;
      }).catch(() => {
        o.value = !1;
      }));
    }
    function s(c) {
      const { loading: d, disabled: f, onClick: v } = e;
      !v || d || f || o.value || l(S(v, c));
    }
    function u(c) {
      const { loading: d, disabled: f, onTouchstart: v } = e;
      !v || d || f || o.value || l(S(v, c));
    }
    return {
      pending: o,
      states: i,
      hovering: r,
      n: r0,
      classes: a0,
      handleHovering: a,
      handleClick: s,
      handleTouchstart: u,
      isFocusing: n
    };
  }
});
$f.render = l0;
var xr = $f;
te(xr);
ue(xr, yf);
const c5 = xr;
var Pn = xr;
const wf = {
  visibilityHeight: {
    type: [Number, String],
    default: 200
  },
  duration: {
    type: Number,
    default: 300
  },
  right: [Number, String],
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  bottom: [Number, String],
  target: [String, Object],
  onClick: R()
}, { name: s0, n: u0, classes: c0 } = ee("back-top");
function d0(e, n) {
  const o = ne("var-icon"), t = ne("var-button");
  return h(), Pe(no, {
    to: "body",
    disabled: e.disabled
  }, [
    I(
      "div",
      Ye({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = An((...r) => e.handleClick && e.handleClick(...r), ["stop"]))
      }),
      [
        L(e.$slots, "default", {}, () => [
          G(t, {
            elevation: e.elevation,
            type: "primary",
            "var-back-top-cover": ""
          }, {
            default: fe(() => [
              G(o, { name: "chevron-up" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["elevation"])
        ])
      ],
      16
      /* FULL_PROPS */
    )
  ], 8, ["disabled"]);
}
const Cf = x({
  name: s0,
  components: {
    VarButton: Pn,
    VarIcon: Je
  },
  inheritAttrs: !1,
  props: wf,
  setup(e) {
    const n = k(!1), o = k(null), t = k(!0);
    let r;
    const a = is(() => {
      i();
    }, 200);
    Yo(() => {
      s(), u(), i(), t.value = !1;
    }), Eo(u), qt(c);
    function i() {
      n.value = Ro(r) >= en(e.visibilityHeight);
    }
    function l(d) {
      S(e.onClick, d);
      const f = as(r);
      Bt(r, {
        left: f,
        duration: e.duration,
        animation: sf
      });
    }
    function s() {
      r = e.target ? Ld(e.target, "BackTop") : zo(o.value);
    }
    function u() {
      r.addEventListener("scroll", a);
    }
    function c() {
      r && r.removeEventListener("scroll", a);
    }
    return {
      disabled: t,
      show: n,
      backTopEl: o,
      toSizeUnit: Oe,
      n: u0,
      classes: c0,
      handleClick: l
    };
  }
});
Cf.render = d0;
var ea = Cf;
te(ea);
ue(ea, wf);
const d5 = ea;
var ji = ea;
const Sf = {
  type: {
    type: String,
    default: "default"
  },
  position: {
    type: String,
    default: "right-top"
  },
  hidden: Boolean,
  value: {
    type: [String, Number],
    default: 0
  },
  maxValue: [String, Number],
  dot: Boolean,
  icon: Ie(on, "name"),
  namespace: Ie(on, "namespace"),
  color: String,
  offsetX: {
    type: [String, Number],
    default: 0
  },
  offsetY: {
    type: [String, Number],
    default: 0
  }
};
var f0 = Object.defineProperty, ku = Object.getOwnPropertySymbols, p0 = Object.prototype.hasOwnProperty, v0 = Object.prototype.propertyIsEnumerable, $u = (e, n, o) => n in e ? f0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, m0 = (e, n) => {
  for (var o in n || (n = {}))
    p0.call(n, o) && $u(e, o, n[o]);
  if (ku)
    for (var o of ku(n))
      v0.call(n, o) && $u(e, o, n[o]);
  return e;
};
const { name: h0, n: g0, classes: b0 } = ee("badge"), y0 = { key: 0 };
function k0(e, n) {
  const o = ne("var-icon");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      L(e.$slots, "default"),
      G(_e, {
        name: e.n("$-badge-fade"),
        persisted: ""
      }, {
        default: fe(() => [
          Me(I(
            "span",
            Ye({
              class: e.classes(
                e.n("content"),
                e.n(`--${e.type}`),
                [e.$slots.default, e.n(`--${e.position}`), e.n("--offset")],
                [e.dot, e.n("--dot")],
                [e.icon, e.n("--icon")]
              ),
              style: m0({ background: e.color }, e.offsetStyle)
            }, e.$attrs),
            [
              e.icon ? (h(), Pe(o, {
                key: 0,
                class: p(e.n("icon")),
                "var-badge-cover": "",
                name: e.icon,
                namespace: e.namespace
              }, null, 8, ["class", "name", "namespace"])) : X("v-if", !0),
              L(e.$slots, "value", {}, () => [
                !e.icon && !e.dot ? (h(), P(
                  "span",
                  y0,
                  re(e.value),
                  1
                  /* TEXT */
                )) : X("v-if", !0)
              ])
            ],
            16
            /* FULL_PROPS */
          ), [
            [Xn, !e.hidden]
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["name"])
    ],
    2
    /* CLASS */
  );
}
const Pf = x({
  name: h0,
  components: { VarIcon: Je },
  inheritAttrs: !1,
  props: Sf,
  setup(e) {
    const n = B(() => {
      const { value: t, maxValue: r } = e;
      return t != null && r != null && F(t) > F(r) ? `${r}+` : t;
    }), o = B(() => ({
      "--badge-offset-y": Oe(e.offsetY),
      "--badge-offset-x": Oe(e.offsetX)
    }));
    return {
      value: n,
      offsetStyle: o,
      n: g0,
      classes: b0
    };
  }
});
Pf.render = k0;
var na = Pf;
te(na);
ue(na, Sf);
const f5 = na;
var Or = na;
const zf = {
  active: {
    type: [Number, String],
    default: 0
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  fixed: Boolean,
  border: Boolean,
  variant: Boolean,
  safeArea: Boolean,
  activeColor: String,
  inactiveColor: String,
  placeholder: Boolean,
  fabProps: Object,
  onChange: R(),
  onBeforeChange: R(),
  onFabClick: R(),
  "onUpdate:active": R()
}, Of = Symbol(
  "BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"
);
function $0() {
  const { childProviders: e, length: n, bindChildren: o } = yn(
    Of
  );
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: o
  };
}
var w0 = Object.defineProperty, wu = Object.getOwnPropertySymbols, C0 = Object.prototype.hasOwnProperty, S0 = Object.prototype.propertyIsEnumerable, Cu = (e, n, o) => n in e ? w0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Su = (e, n) => {
  for (var o in n || (n = {}))
    C0.call(n, o) && Cu(e, o, n[o]);
  if (wu)
    for (var o of wu(n))
      S0.call(n, o) && Cu(e, o, n[o]);
  return e;
};
const { name: P0, n: z0, classes: O0 } = ee("bottom-navigation"), { n: oa } = ee("bottom-navigation-item"), Pu = oa("--right-half-space"), zu = oa("--left-half-space"), Ou = oa("--right-space"), T0 = {
  type: "primary"
};
function E0(e, n) {
  const o = ne("var-button");
  return h(), P(
    Ae,
    null,
    [
      I(
        "div",
        Ye({
          class: e.classes(
            e.n(),
            e.n("$--box"),
            [e.fixed, e.n("--fixed")],
            [e.border, e.n("--border")],
            [e.safeArea, e.n("--safe-area")],
            [e.variant, e.n("--variant")]
          ),
          ref: "bottomNavigationDom",
          style: `z-index:${e.zIndex}`
        }, e.$attrs),
        [
          L(e.$slots, "default"),
          e.$slots.fab ? (h(), Pe(o, Ye({
            key: 0,
            class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
            "var-bottom-navigation__fab": "",
            onClick: e.handleFabClick
          }, e.fabProps), {
            default: fe(() => [
              L(e.$slots, "fab")
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["class", "onClick"])) : X("v-if", !0)
        ],
        16
        /* FULL_PROPS */
      ),
      e.fixed && e.placeholder ? (h(), P(
        "div",
        {
          key: 0,
          class: p(e.n("placeholder")),
          style: K({ height: e.placeholderHeight })
        },
        null,
        6
        /* CLASS, STYLE */
      )) : X("v-if", !0)
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const Tf = x({
  name: P0,
  components: { VarButton: Pn },
  props: zf,
  setup(e, { slots: n }) {
    const o = k(null), t = B(() => e.active), r = B(() => e.activeColor), a = B(() => e.inactiveColor), i = B(() => e.variant), l = k(), s = k({}), { length: u, bottomNavigationItems: c, bindBottomNavigationItem: d } = $0();
    d({
      active: t,
      activeColor: r,
      inactiveColor: a,
      variant: i,
      onToggle: C
    }), de(() => u.value, v), de(
      () => e.fabProps,
      (D) => {
        s.value = Su(Su({}, T0), D);
      },
      { immediate: !0, deep: !0 }
    ), ro(E), pn(() => {
      E(), n.fab && O(u.value);
    }), Wt(() => {
      $(), n.fab && O(u.value);
    });
    function v() {
      u.value === 0 || y() || m() || b();
    }
    function y() {
      return c.find(({ name: D }) => t.value === D.value);
    }
    function m() {
      return c.find(({ index: D }) => t.value === D.value);
    }
    function b() {
      On(t.value) && (t.value < 0 ? S(e["onUpdate:active"], 0) : t.value > u.value - 1 && S(e["onUpdate:active"], u.value - 1));
    }
    function C(D) {
      t.value !== D && (e.onBeforeChange ? w(D) : g(D));
    }
    function w(D) {
      const M = Vo(S(e.onBeforeChange, D));
      Promise.all(M).then((H) => {
        H.every(Boolean) && g(D);
      });
    }
    function g(D) {
      S(e["onUpdate:active"], D), S(e.onChange, D);
    }
    function $() {
      A().forEach((M) => {
        M.classList.remove(Pu, zu, Ou);
      });
    }
    function O(D) {
      const M = A(), H = M.length, Y = D % 2 === 0;
      M.forEach((N, q) => {
        z(Y, N, q, H);
      });
    }
    function z(D, M, H, Y) {
      const N = H === Y - 1;
      if (!D && N) {
        M.classList.add(Ou);
        return;
      }
      const q = H === Y / 2 - 1, j = H === Y / 2;
      q ? M.classList.add(Pu) : j && M.classList.add(zu);
    }
    function A() {
      return Array.from(o.value.querySelectorAll(`.${oa()}`));
    }
    function T() {
      S(e.onFabClick);
    }
    function E() {
      if (!e.fixed || !e.placeholder)
        return;
      const { height: D } = an(o.value);
      l.value = Oe(D);
    }
    return {
      length: u,
      bottomNavigationDom: o,
      fabProps: s,
      placeholderHeight: l,
      n: z0,
      classes: O0,
      handleFabClick: T
    };
  }
});
Tf.render = E0;
var ta = Tf;
te(ta);
ue(ta, zf);
const p5 = ta;
var Wi = ta;
const Ef = {
  name: String,
  label: String,
  icon: Ie(on, "name"),
  namespace: Ie(on, "namespace"),
  badge: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: R()
};
function D0() {
  const { parentProvider: e, index: n, bindParent: o } = bn(
    Of
  );
  return o || Vn("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: o
  };
}
const { name: B0, n: I0, classes: M0 } = ee("bottom-navigation-item"), N0 = {
  type: "danger",
  dot: !0
};
function A0(e, n) {
  const o = ne("var-icon"), t = ne("var-badge"), r = je("ripple");
  return Me((h(), P(
    "button",
    {
      class: p(e.classes(e.n(), e.n("$--box"), [e.variant, e.n("--variant-padding")], [e.isActive && !e.variant, e.n("--active")])),
      style: K({
        color: e.isActive ? e.activeColor : e.inactiveColor
      }),
      onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
    },
    [
      I(
        "div",
        {
          class: p(
            e.classes(
              e.n("icon-container"),
              [e.variant, e.n("--variant-icon-container")],
              [e.isActive && e.variant, e.n("--variant-active")]
            )
          )
        },
        [
          e.badge ? (h(), Pe(t, Ye({ key: 0 }, e.badgeProps, {
            class: e.n("badge"),
            "var-bottom-navigation-item-cover": ""
          }), {
            default: fe(() => [
              L(e.$slots, "icon", { active: e.isActive }, () => [
                e.icon ? (h(), Pe(o, {
                  key: 0,
                  name: e.icon,
                  namespace: e.namespace,
                  class: p(e.n("icon")),
                  "var-bottom-navigation-item-cover": ""
                }, null, 8, ["name", "namespace", "class"])) : X("v-if", !0)
              ])
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["class"])) : L(e.$slots, "icon", {
            key: 1,
            active: e.isActive
          }, () => [
            e.icon ? (h(), Pe(o, {
              key: 0,
              name: e.icon,
              namespace: e.namespace,
              class: p(e.n("icon")),
              "var-bottom-navigation-item-cover": ""
            }, null, 8, ["name", "namespace", "class"])) : X("v-if", !0)
          ])
        ],
        2
        /* CLASS */
      ),
      I(
        "span",
        {
          class: p(e.n("label"))
        },
        [
          L(e.$slots, "default", {}, () => [
            Be(
              re(e.label),
              1
              /* TEXT */
            )
          ])
        ],
        2
        /* CLASS */
      )
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r]
  ]);
}
const Df = x({
  name: B0,
  components: {
    VarBadge: Or,
    VarIcon: Je
  },
  directives: { Ripple: tn },
  props: Ef,
  setup(e) {
    const n = B(() => e.name), o = B(() => [n.value, r.value].includes(l.value)), t = B(() => e.badge === !0 ? N0 : e.badge), { index: r, bottomNavigation: a, bindBottomNavigation: i } = D0(), { active: l, activeColor: s, inactiveColor: u, variant: c } = a;
    i({
      name: n,
      index: r
    });
    function f() {
      var v;
      const y = (v = n.value) != null ? v : r.value;
      S(e.onClick, y), S(a.onToggle, y);
    }
    return {
      activeColor: s,
      inactiveColor: u,
      badgeProps: t,
      isActive: o,
      variant: c,
      n: I0,
      classes: M0,
      handleClick: f
    };
  }
});
Df.render = A0;
var ra = Df;
te(ra);
ue(ra, Ef);
const v5 = ra;
var Ki = ra;
const Bf = {
  separator: String,
  onClick: R()
}, If = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function V0() {
  const { childProviders: e, bindChildren: n, length: o } = yn(
    If
  );
  return {
    length: o,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function L0() {
  const { parentProvider: e, bindParent: n, index: o } = bn(
    If
  );
  return n || Vn("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: o,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
const { name: R0, n: F0, classes: U0 } = ee("breadcrumb");
function H0(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      I(
        "div",
        {
          class: p(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
          onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
        },
        [
          L(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      e.isLast ? X("v-if", !0) : L(e.$slots, "separator", { key: 0 }, () => {
        var o;
        return [
          I(
            "div",
            {
              class: p(e.n("separator")),
              "aria-hidden": "true"
            },
            re((o = e.separator) != null ? o : e.parentSeparator),
            3
            /* TEXT, CLASS */
          )
        ];
      })
    ],
    2
    /* CLASS */
  );
}
const Mf = x({
  name: R0,
  props: Bf,
  setup(e) {
    const { index: n, breadcrumb: o, bindBreadcrumb: t } = L0(), r = B(() => n.value === o.length.value - 1), a = B(() => o.separator.value);
    t(null);
    function i(l) {
      r.value || S(e.onClick, l);
    }
    return {
      n: F0,
      classes: U0,
      isLast: r,
      parentSeparator: a,
      handleClick: i
    };
  }
});
Mf.render = H0;
var aa = Mf;
te(aa);
ue(aa, Bf);
const m5 = aa;
var qi = aa;
const Nf = {
  separator: {
    type: String,
    default: "/"
  }
}, { name: Y0, n: j0 } = ee("breadcrumbs");
function W0(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.n()),
      role: "navigation",
      "aria-label": "Breadcrumbs"
    },
    [
      L(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Af = x({
  name: Y0,
  props: Nf,
  setup(e) {
    const n = B(() => e.separator), { bindBreadcrumbList: o, length: t } = V0();
    return o({
      length: t,
      separator: n
    }), { n: j0 };
  }
});
Af.render = W0;
var ia = Af;
te(ia);
ue(ia, Nf);
const h5 = ia;
var Gi = ia;
const Vf = {
  type: {
    type: String,
    default: "default"
  },
  size: {
    type: String,
    default: "normal"
  },
  color: String,
  textColor: String,
  mode: {
    type: String,
    default: "normal"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  vertical: Boolean
}, { name: K0, n: q0, classes: G0 } = ee("button-group");
function X0(e, n) {
  return h(), P(
    "div",
    {
      class: p(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.mode, `${e.n(`--mode-${e.mode}`)}`],
          [e.vertical, e.n("--vertical"), e.n("--horizontal")],
          [e.mode === "normal", e.formatElevation(e.elevation, 2)]
        )
      )
    },
    [
      L(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Lf = x({
  name: K0,
  props: Vf,
  setup(e) {
    const { bindButtons: n } = n0(), o = {
      elevation: B(() => e.elevation),
      type: B(() => e.type),
      size: B(() => e.size),
      color: B(() => e.color),
      textColor: B(() => e.textColor),
      mode: B(() => e.mode)
    };
    return n(o), {
      n: q0,
      classes: G0,
      formatElevation: fn
    };
  }
});
Lf.render = X0;
var la = Lf;
te(la);
ue(la, Vf);
const g5 = la;
var Xi = la;
const Rf = {
  src: String,
  fit: {
    type: String,
    default: "cover"
  },
  imageHeight: [String, Number],
  imageWidth: [String, Number],
  outline: Boolean,
  layout: {
    type: String,
    default: "column"
  },
  floating: Boolean,
  floatingDuration: {
    type: Number,
    default: 250
  },
  alt: String,
  title: String,
  subtitle: String,
  description: String,
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  ripple: Boolean,
  onClick: R(),
  "onUpdate:floating": R()
};
var Tu = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: Z0, n: J0, classes: Q0 } = ee("card"), _0 = 500, x0 = ["src", "alt"];
function ey(e, n) {
  const o = ne("var-icon"), t = ne("var-button"), r = je("ripple");
  return Me((h(), P(
    "div",
    {
      ref: "card",
      class: p(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], e.formatElevation(e.elevation, 1))),
      style: K({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
    },
    [
      I(
        "div",
        {
          ref: "cardFloater",
          class: p(e.n("floater")),
          style: K({
            width: e.floaterWidth,
            height: e.floaterHeight,
            top: e.floaterTop,
            left: e.floaterLeft,
            overflow: e.floaterOverflow,
            position: e.floaterPosition,
            zIndex: e.floated ? e.zIndex : void 0,
            background: e.outline && !e.floated ? "transparent" : void 0,
            transition: e.floated ? `background-color ${e.floatingDuration}ms, color ${e.floatingDuration}ms, width ${e.floatingDuration}ms, height ${e.floatingDuration}ms, top ${e.floatingDuration}ms, left ${e.floatingDuration}ms` : void 0
          })
        },
        [
          L(e.$slots, "image", {}, () => [
            e.src ? (h(), P("img", {
              key: 0,
              class: p(e.n("image")),
              style: K({
                objectFit: e.fit,
                height: e.toSizeUnit(e.imageHeight),
                width: e.toSizeUnit(e.imageWidth)
              }),
              src: e.src,
              alt: e.alt
            }, null, 14, x0)) : X("v-if", !0)
          ]),
          I(
            "div",
            {
              class: p(e.n("container"))
            },
            [
              L(e.$slots, "title", {
                slotClass: e.n("title")
              }, () => [
                e.title ? (h(), P(
                  "div",
                  {
                    key: 0,
                    class: p(e.n("title"))
                  },
                  re(e.title),
                  3
                  /* TEXT, CLASS */
                )) : X("v-if", !0)
              ]),
              L(e.$slots, "subtitle", {
                slotClass: e.n("subtitle")
              }, () => [
                e.subtitle ? (h(), P(
                  "div",
                  {
                    key: 0,
                    class: p(e.n("subtitle"))
                  },
                  re(e.subtitle),
                  3
                  /* TEXT, CLASS */
                )) : X("v-if", !0)
              ]),
              L(e.$slots, "description", {
                slotClass: e.n("description")
              }, () => [
                e.description ? (h(), P(
                  "div",
                  {
                    key: 0,
                    class: p(e.n("description"))
                  },
                  re(e.description),
                  3
                  /* TEXT, CLASS */
                )) : X("v-if", !0)
              ]),
              e.$slots.extra ? (h(), P(
                "div",
                {
                  key: 0,
                  class: p(e.n("footer"))
                },
                [
                  L(e.$slots, "extra")
                ],
                2
                /* CLASS */
              )) : X("v-if", !0),
              e.$slots["floating-content"] && !e.isRow ? (h(), P(
                "div",
                {
                  key: 1,
                  class: p(e.n("floating-content")),
                  style: K({
                    height: e.contentHeight,
                    opacity: e.opacity,
                    transition: `opacity ${e.floatingDuration * 2}ms`
                  })
                },
                [
                  L(e.$slots, "floating-content")
                ],
                6
                /* CLASS, STYLE */
              )) : X("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          e.showFloatingButtons ? (h(), P(
            "div",
            {
              key: 0,
              class: p(e.classes(e.n("floating-buttons"), e.n("$--box"))),
              style: K({
                zIndex: e.zIndex,
                opacity: e.opacity,
                transition: `opacity ${e.floatingDuration * 2}ms`
              })
            },
            [
              L(e.$slots, "close-button", {}, () => [
                G(t, {
                  "var-card-cover": "",
                  class: p(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
                  onClick: An(e.close, ["stop"])
                }, {
                  default: fe(() => [
                    G(o, {
                      "var-card-cover": "",
                      name: "window-close",
                      class: p(e.n("close-button-icon"))
                    }, null, 8, ["class"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "onClick"])
              ])
            ],
            6
            /* CLASS, STYLE */
          )) : X("v-if", !0)
        ],
        6
        /* CLASS, STYLE */
      ),
      I(
        "div",
        {
          class: p(e.n("holder")),
          style: K({
            width: e.holderWidth,
            height: e.holderHeight
          })
        },
        null,
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: !e.ripple || e.floater }]
  ]);
}
const Ff = x({
  name: Z0,
  directives: { Ripple: tn },
  components: {
    VarIcon: Je,
    VarButton: Pn
  },
  props: Rf,
  setup(e) {
    const n = k(null), o = k(null), t = k("auto"), r = k("auto"), a = k("100%"), i = k("100%"), l = k("auto"), s = k("auto"), u = k(void 0), c = k("hidden"), d = k("0px"), f = k("0"), v = B(() => e.layout === "row"), y = k(!1), m = k(!1), { zIndex: b } = Xt(() => e.floating, 1);
    let C = "auto", w = "auto", g = null;
    const $ = k(null);
    Gt(
      () => e.floating,
      () => !v.value
    ), de(
      () => e.floating,
      (E) => {
        v.value || Ke(() => {
          E ? O() : z();
        });
      },
      { immediate: !0 }
    );
    function O() {
      return Tu(this, null, function* () {
        clearTimeout($.value), clearTimeout(g), $.value = null, $.value = setTimeout(
          () => Tu(this, null, function* () {
            const { width: E, height: D, left: M, top: H } = an(n.value);
            t.value = Oe(E), r.value = Oe(D), a.value = t.value, i.value = r.value, l.value = Oe(H), s.value = Oe(M), u.value = "fixed", C = l.value, w = s.value, y.value = !0, yield $n(), l.value = "0", s.value = "0", a.value = "100vw", i.value = "100vh", d.value = "auto", f.value = "1", c.value = "auto", m.value = !0;
          }),
          e.ripple ? _0 : 0
        );
      });
    }
    function z() {
      clearTimeout(g), clearTimeout($.value), $.value = null, a.value = t.value, i.value = r.value, l.value = C, s.value = w, d.value = "0px", f.value = "0", y.value = !1, g = setTimeout(() => {
        t.value = "auto", r.value = "auto", a.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", C = "auto", w = "auto", c.value = "hidden", u.value = void 0, m.value = !1;
      }, e.floatingDuration);
    }
    function A() {
      S(e["onUpdate:floating"], !1);
    }
    function T(E) {
      S(e.onClick, E);
    }
    return {
      card: n,
      cardFloater: o,
      holderWidth: t,
      holderHeight: r,
      floater: $,
      floaterWidth: a,
      floaterHeight: i,
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: c,
      contentHeight: d,
      opacity: f,
      zIndex: b,
      isRow: v,
      showFloatingButtons: y,
      floated: m,
      n: J0,
      classes: Q0,
      toSizeUnit: Oe,
      close: A,
      formatElevation: fn,
      handleClick: T
    };
  }
});
Ff.render = ey;
var sa = Ff;
te(sa);
ue(sa, Rf);
const b5 = sa;
var Zi = sa;
const Uf = {
  title: String,
  icon: Ie(on, "name"),
  namespace: Ie(on, "namespace"),
  description: String,
  border: Boolean,
  borderOffset: [Number, String],
  iconClass: String,
  titleClass: String,
  descriptionClass: String,
  extraClass: String,
  ripple: Boolean,
  onClick: R()
}, { name: ny, n: oy, classes: ty } = ee("cell");
function ry(e, n) {
  const o = ne("var-icon"), t = je("ripple");
  return Me((h(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: K(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
    },
    [
      L(e.$slots, "icon", {}, () => [
        e.icon ? (h(), P(
          "div",
          {
            key: 0,
            class: p(e.classes(e.n("icon"), e.iconClass))
          },
          [
            G(o, {
              name: e.icon,
              namespace: e.namespace
            }, null, 8, ["name", "namespace"])
          ],
          2
          /* CLASS */
        )) : X("v-if", !0)
      ]),
      I(
        "div",
        {
          class: p(e.n("content"))
        },
        [
          L(e.$slots, "default", {}, () => [
            e.title ? (h(), P(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("title"), e.titleClass))
              },
              re(e.title),
              3
              /* TEXT, CLASS */
            )) : X("v-if", !0)
          ]),
          L(e.$slots, "description", {}, () => [
            e.description ? (h(), P(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("description"), e.descriptionClass))
              },
              re(e.description),
              3
              /* TEXT, CLASS */
            )) : X("v-if", !0)
          ])
        ],
        2
        /* CLASS */
      ),
      e.$slots.extra ? (h(), P(
        "div",
        {
          key: 0,
          class: p(e.classes(e.n("extra"), e.extraClass))
        },
        [
          L(e.$slots, "extra")
        ],
        2
        /* CLASS */
      )) : X("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [t, { disabled: !e.ripple }]
  ]);
}
const Hf = x({
  name: ny,
  components: { VarIcon: Je },
  directives: { Ripple: tn },
  props: Uf,
  setup(e) {
    const n = B(() => e.borderOffset == null ? {} : {
      "--cell-border-left": Oe(e.borderOffset),
      "--cell-border-right": Oe(e.borderOffset)
    });
    function o(t) {
      S(e.onClick, t);
    }
    return {
      borderOffsetStyles: n,
      n: oy,
      classes: ty,
      toSizeUnit: Oe,
      handleClick: o
    };
  }
});
Hf.render = ry;
var ua = Hf;
te(ua);
ue(ua, Uf);
const y5 = ua;
var Ji = ua;
const Yf = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, { name: ay, n: iy } = ee("form-details"), ly = { key: 0 }, sy = { key: 0 };
function uy(e, n) {
  return h(), Pe(_e, {
    name: e.n()
  }, {
    default: fe(() => [
      e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (h(), P(
        "div",
        {
          key: 0,
          class: p(e.n())
        },
        [
          I(
            "div",
            {
              class: p(e.n("error-message"))
            },
            [
              G(_e, {
                name: e.n("message")
              }, {
                default: fe(() => [
                  e.errorMessage ? (h(), P(
                    "div",
                    ly,
                    re(e.errorMessage),
                    1
                    /* TEXT */
                  )) : X("v-if", !0)
                ]),
                _: 1
                /* STABLE */
              }, 8, ["name"])
            ],
            2
            /* CLASS */
          ),
          I(
            "div",
            {
              class: p(e.n("extra-message"))
            },
            [
              G(_e, {
                name: e.n("message")
              }, {
                default: fe(() => [
                  L(e.$slots, "extra-message", {}, () => [
                    e.extraMessage ? (h(), P(
                      "div",
                      sy,
                      re(e.extraMessage),
                      1
                      /* TEXT */
                    )) : X("v-if", !0)
                  ])
                ]),
                _: 3
                /* FORWARDED */
              }, 8, ["name"])
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      )) : X("v-if", !0)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
const jf = x({
  name: ay,
  props: Yf,
  setup: () => ({ n: iy })
});
jf.render = uy;
var ca = jf;
te(ca);
ue(ca, Yf);
const k5 = ca;
var En = ca;
const Wf = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !0
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedColor: String,
  uncheckedColor: String,
  disabled: Boolean,
  readonly: Boolean,
  indeterminate: Boolean,
  iconSize: [String, Number],
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: Array,
  onClick: R(),
  onChange: R(),
  "onUpdate:modelValue": R(),
  "onUpdate:indeterminate": R()
}, Kf = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function cy() {
  const { bindChildren: e, childProviders: n, length: o } = yn(
    Kf
  );
  return {
    length: o,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function dy() {
  const { bindParent: e, parentProvider: n, index: o } = bn(
    Kf
  );
  return {
    index: o,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
var fy = Object.defineProperty, py = Object.defineProperties, vy = Object.getOwnPropertyDescriptors, Eu = Object.getOwnPropertySymbols, my = Object.prototype.hasOwnProperty, hy = Object.prototype.propertyIsEnumerable, Du = (e, n, o) => n in e ? fy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, gy = (e, n) => {
  for (var o in n || (n = {}))
    my.call(n, o) && Du(e, o, n[o]);
  if (Eu)
    for (var o of Eu(n))
      hy.call(n, o) && Du(e, o, n[o]);
  return e;
}, by = (e, n) => py(e, vy(n));
const qf = Symbol("FORM_BIND_FORM_ITEM_KEY");
function jn() {
  const { parentProvider: e, index: n, bindParent: o } = bn(qf), t = jo();
  return {
    index: n,
    form: e,
    bindForm: o ? (a) => {
      o(by(gy({}, a), { instance: t }));
    } : null
  };
}
function yy() {
  const { childProviders: e, length: n, bindChildren: o } = yn(qf);
  return {
    length: n,
    formItems: e,
    bindFormItems: o
  };
}
const { name: ky, n: $y, classes: wy } = ee("checkbox"), Cy = ["tabindex"];
function Sy(e, n) {
  const o = ne("var-icon"), t = ne("var-hover-overlay"), r = ne("var-form-details"), a = je("hover"), i = je("ripple");
  return h(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      I(
        "div",
        {
          class: p(e.n()),
          onClick: n[3] || (n[3] = (...l) => e.handleClick && e.handleClick(...l))
        },
        [
          Me((h(), P("div", {
            ref: "action",
            class: p(
              e.classes(
                e.n("action"),
                [e.checked || e.isIndeterminate, e.n("--checked"), e.n("--unchecked")],
                [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")],
                [e.formDisabled || e.disabled, e.n("--disabled")]
              )
            ),
            style: K({ color: e.checked || e.isIndeterminate ? e.checkedColor : e.uncheckedColor }),
            tabindex: e.disabled || e.formDisabled ? void 0 : "0",
            onFocus: n[0] || (n[0] = (l) => e.isFocusing = !0),
            onBlur: n[1] || (n[1] = (l) => e.isFocusing = !1)
          }, [
            e.isIndeterminate ? L(e.$slots, "indeterminate-icon", { key: 0 }, () => [
              G(o, {
                class: p(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                name: "minus-box",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : X("v-if", !0),
            e.checked && !e.isIndeterminate ? L(e.$slots, "checked-icon", { key: 1 }, () => [
              G(o, {
                class: p(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                name: "checkbox-marked",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : X("v-if", !0),
            !e.checked && !e.isIndeterminate ? L(e.$slots, "unchecked-icon", { key: 2 }, () => [
              G(o, {
                class: p(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                name: "checkbox-blank-outline",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : X("v-if", !0),
            G(t, {
              hovering: !e.disabled && !e.formDisabled && e.hovering,
              focusing: !e.disabled && !e.formDisabled && e.isFocusing
            }, null, 8, ["hovering", "focusing"])
          ], 46, Cy)), [
            [a, e.handleHovering, "desktop"],
            [i, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }]
          ]),
          e.$slots.default ? (h(), P(
            "div",
            {
              key: 0,
              class: p(
                e.classes(
                  e.n("text"),
                  [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")],
                  [e.formDisabled || e.disabled, e.n("--disabled")]
                )
              ),
              onClick: n[2] || (n[2] = (...l) => e.handleTextClick && e.handleTextClick(...l))
            },
            [
              L(e.$slots, "default", { checked: e.checked })
            ],
            2
            /* CLASS */
          )) : X("v-if", !0)
        ],
        2
        /* CLASS */
      ),
      G(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Gf = x({
  name: ky,
  directives: { Ripple: tn, Hover: Tn },
  components: {
    VarIcon: Je,
    VarFormDetails: En,
    VarHoverOverlay: Ln
  },
  props: Wf,
  setup(e) {
    const n = k(null), o = k(!1), t = Zn(e, "modelValue"), r = Zn(e, "indeterminate"), a = B(() => t.value === e.checkedValue), i = B(() => e.checkedValue), l = k(!1), { checkboxGroup: s, bindCheckboxGroup: u } = dy(), { hovering: c, handleHovering: d } = Jn(), { form: f, bindForm: v } = jn(), {
      errorMessage: y,
      validateWithTrigger: m,
      validate: b,
      // expose
      resetValidation: C
    } = Yn(), w = {
      checkedValue: i,
      checked: a,
      sync: A,
      validate: Y,
      resetValidation: C,
      reset: E,
      resetWithAnimation: T
    };
    S(u, w), S(v, w), We(() => window, "keydown", M), We(() => window, "keyup", H);
    function g(N) {
      Ke(() => {
        const { validateTrigger: q, rules: j, modelValue: ce } = e;
        m(q, N, j, ce);
      });
    }
    function $(N) {
      const { checkedValue: q, onChange: j } = e;
      t.value = N, r.value = !1, S(j, t.value), g("onChange"), N === q ? s == null || s.onChecked(q) : s == null || s.onUnchecked(q);
    }
    function O(N) {
      const { disabled: q, readonly: j, checkedValue: ce, uncheckedValue: _, onClick: pe } = e;
      if (f != null && f.disabled.value || q || (S(pe, N), f != null && f.readonly.value || j))
        return;
      l.value = !0;
      const ye = s ? s.checkedCount.value >= Number(s.max.value) : !1;
      !a.value && ye || $(a.value ? _ : ce);
    }
    function z() {
      n.value.focus();
    }
    function A(N) {
      const { checkedValue: q, uncheckedValue: j } = e;
      t.value = N.includes(q) ? q : j;
    }
    function T() {
      l.value = !1;
    }
    function E() {
      t.value = e.uncheckedValue, C();
    }
    function D(N) {
      const { checkedValue: q, uncheckedValue: j } = e;
      ![q, j].includes(N) && (N = a.value ? j : q), $(N);
    }
    function M(N) {
      if (!o.value)
        return;
      const { key: q } = N;
      (q === "Enter" || q === " ") && Re(N), q === "Enter" && n.value.click();
    }
    function H(N) {
      o.value && N.key === " " && (Re(N), n.value.click());
    }
    function Y() {
      return b(e.rules, e.modelValue);
    }
    return {
      action: n,
      isFocusing: o,
      isIndeterminate: r,
      withAnimation: l,
      checked: a,
      errorMessage: y,
      checkboxGroupErrorMessage: s == null ? void 0 : s.errorMessage,
      formDisabled: f == null ? void 0 : f.disabled,
      formReadonly: f == null ? void 0 : f.readonly,
      hovering: c,
      n: $y,
      classes: wy,
      handleHovering: d,
      handleClick: O,
      handleTextClick: z,
      toggle: D,
      reset: E,
      validate: Y,
      resetValidation: C
    };
  }
});
Gf.render = Sy;
var da = Gf;
te(da);
ue(da, Wf);
const $5 = da;
var lt = da;
const Xf = {
  modelValue: {
    type: Array,
    default: () => []
  },
  max: [String, Number],
  options: Array,
  labelKey: {
    type: String,
    default: "label"
  },
  valueKey: {
    type: String,
    default: "value"
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: Array,
  onChange: R(),
  "onUpdate:modelValue": R()
}, { name: Py, n: zy, classes: Oy } = ee("checkbox-group");
function Ty(e, n) {
  const o = ne("maybe-v-node"), t = ne("var-checkbox"), r = ne("var-form-details");
  return h(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      I(
        "div",
        {
          class: p(e.classes(e.n(), e.n(`--${e.direction}`)))
        },
        [
          e.checkboxGroupOptions.length ? (h(!0), P(
            Ae,
            { key: 0 },
            Ze(e.checkboxGroupOptions, (a) => (h(), Pe(t, {
              key: a[e.valueKey],
              "checked-value": a[e.valueKey],
              disabled: a.disabled
            }, {
              default: fe(({ checked: i }) => [
                G(o, {
                  is: e.isFunction(a[e.labelKey]) ? a[e.labelKey](a, i) : a[e.labelKey]
                }, null, 8, ["is"])
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["checked-value", "disabled"]))),
            128
            /* KEYED_FRAGMENT */
          )) : X("v-if", !0),
          L(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      G(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Zf = x({
  name: Py,
  components: { VarFormDetails: En, VarCheckbox: lt, MaybeVNode: jr },
  props: Xf,
  setup(e) {
    const n = B(() => e.max), o = B(() => e.modelValue.length), t = B(() => He(e.options) ? e.options : []), { length: r, checkboxes: a, bindCheckboxes: i } = cy(), { bindForm: l } = jn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: c,
      // expose
      resetValidation: d
    } = Yn(), f = B(() => s.value), v = {
      max: n,
      checkedCount: o,
      onChecked: b,
      onUnchecked: C,
      validate: A,
      resetValidation: d,
      reset: z,
      errorMessage: f
    };
    de(() => e.modelValue, w, { deep: !0 }), de(() => r.value, w), i(v), S(l, v);
    function y(T) {
      Ke(() => {
        const { validateTrigger: E, rules: D, modelValue: M } = e;
        u(E, T, D, M);
      });
    }
    function m(T) {
      S(e["onUpdate:modelValue"], T), S(e.onChange, T), y("onChange");
    }
    function b(T) {
      const { modelValue: E } = e;
      E.includes(T) || m([...E, T]);
    }
    function C(T) {
      const { modelValue: E } = e;
      E.includes(T) && m(E.filter((D) => D !== T));
    }
    function w() {
      a.forEach(({ sync: T }) => T(e.modelValue));
    }
    function g() {
      a.forEach((T) => T.resetWithAnimation());
    }
    function $() {
      const T = a.map(({ checkedValue: D }) => D.value), E = Hs(T);
      return g(), S(e["onUpdate:modelValue"], E), E;
    }
    function O() {
      const T = a.filter(({ checked: D }) => !D.value).map(({ checkedValue: D }) => D.value), E = Hs(T);
      return g(), S(e["onUpdate:modelValue"], E), E;
    }
    function z() {
      S(e["onUpdate:modelValue"], []), d();
    }
    function A() {
      return c(e.rules, e.modelValue);
    }
    return {
      errorMessage: s,
      checkboxGroupOptions: t,
      n: zy,
      classes: Oy,
      checkAll: $,
      inverseAll: O,
      reset: z,
      validate: A,
      resetValidation: d,
      isFunction: oo
    };
  }
});
Zf.render = Ty;
var fa = Zf;
te(fa);
ue(fa, Xf);
const w5 = fa;
var Qi = fa;
const Jf = {
  type: {
    type: String,
    default: "default"
  },
  size: {
    type: String,
    default: "normal"
  },
  color: String,
  textColor: String,
  iconName: Ie(on, "name"),
  namespace: Ie(on, "namespace"),
  plain: Boolean,
  round: {
    type: Boolean,
    default: !0
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !1
  },
  block: Boolean,
  closeable: Boolean,
  onClose: R()
}, { name: Ey, n: po, classes: Dy } = ee("chip");
function By(e, n) {
  const o = ne("var-icon");
  return h(), Pe(_e, {
    name: e.n("$-fade")
  }, {
    default: fe(() => [
      I(
        "span",
        Ye({
          class: e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 1), ...e.contentClass),
          style: e.chipStyle
        }, e.$attrs),
        [
          L(e.$slots, "left"),
          I(
            "span",
            {
              class: p(e.n(`text-${e.size}`))
            },
            [
              L(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          L(e.$slots, "right"),
          e.closeable ? (h(), P(
            "span",
            {
              key: 0,
              class: p(e.n("--close")),
              onClick: n[0] || (n[0] = (...t) => e.handleClose && e.handleClose(...t))
            },
            [
              G(o, {
                name: `${e.iconName ? e.iconName : "close-circle"}`,
                namespace: e.namespace
              }, null, 8, ["name", "namespace"])
            ],
            2
            /* CLASS */
          )) : X("v-if", !0)
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
const Qf = x({
  name: Ey,
  components: {
    VarIcon: Je
  },
  inheritAttrs: !1,
  props: Jf,
  setup(e) {
    const n = B(() => {
      const { plain: r, textColor: a, color: i } = e;
      return r ? {
        color: a || i,
        borderColor: i
      } : {
        color: a,
        background: i
      };
    }), o = B(() => {
      const { size: r, block: a, type: i, plain: l, round: s } = e, u = po(a ? "$--flex" : "$--inline-flex"), c = l ? `${po("plain")} ${po(`plain-${i}`)}` : po(`--${i}`), d = s ? po("--round") : null;
      return [po(`--${r}`), u, c, d];
    });
    function t(r) {
      S(e.onClose, r);
    }
    return {
      chipStyle: n,
      contentClass: o,
      n: po,
      classes: Dy,
      formatElevation: fn,
      handleClose: t
    };
  }
});
Qf.render = By;
var pa = Qf;
te(pa);
ue(pa, Jf);
const C5 = pa;
var Tr = pa;
const _f = {
  span: {
    type: [String, Number],
    default: 24
  },
  offset: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "row"
  },
  justify: String,
  align: String,
  xs: [Object, Number, String],
  sm: [Object, Number, String],
  md: [Object, Number, String],
  lg: [Object, Number, String],
  xl: [Object, Number, String],
  onClick: R()
}, xf = Symbol("ROW_BIND_COL_KEY");
function Iy() {
  const { bindChildren: e, childProviders: n, length: o } = yn(xf);
  return {
    length: o,
    cols: n,
    bindCols: e
  };
}
function My() {
  const { parentProvider: e, index: n, bindParent: o } = bn(xf);
  return {
    index: n,
    row: e,
    bindRow: o
  };
}
const { name: Ny, n: or, classes: Ay } = ee("col");
function Vy(e, n) {
  return h(), P(
    "div",
    {
      class: p(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.span >= 0, e.n(`--span-${e.span}`)],
          [e.offset, e.n(`--offset-${e.offset}`)],
          ...e.getSize("xs", e.xs),
          ...e.getSize("sm", e.sm),
          ...e.getSize("md", e.md),
          ...e.getSize("lg", e.lg),
          ...e.getSize("xl", e.xl)
        )
      ),
      style: K({
        flexDirection: e.direction,
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        paddingLeft: e.toSizeUnit(e.padding.left),
        paddingRight: e.toSizeUnit(e.padding.right),
        paddingTop: e.toSizeUnit(e.padding.top),
        paddingBottom: e.toSizeUnit(e.padding.bottom)
      }),
      onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
    },
    [
      L(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const ep = x({
  name: Ny,
  props: _f,
  setup(e) {
    const n = B(() => F(e.span)), o = B(() => F(e.offset)), t = k({ left: 0, right: 0, top: 0, bottom: 0 }), { row: r, bindRow: a } = My(), i = {
      setPadding(u) {
        t.value = u;
      }
    };
    de([() => e.span, () => e.offset], () => {
      r == null || r.computePadding();
    }), S(a, i);
    function l(u, c) {
      const d = [];
      if (c == null)
        return d;
      if (tt(c)) {
        const { offset: f, span: v } = c;
        Number(v) >= 0 && d.push(or(`--span-${u}-${v}`)), f && d.push(or(`--offset-${u}-${f}`));
      } else
        Number(c) >= 0 && d.push(or(`--span-${u}-${c}`));
      return d;
    }
    function s(u) {
      S(e.onClick, u);
    }
    return {
      span: n,
      offset: o,
      padding: t,
      n: or,
      classes: Ay,
      toNumber: F,
      toSizeUnit: Oe,
      getSize: l,
      handleClick: s,
      padStartFlex: Pr
    };
  }
});
ep.render = Vy;
var va = ep;
te(va);
ue(va, _f);
const S5 = va;
var _i = va;
const np = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function Ly() {
  const { childProviders: e, length: n, bindChildren: o } = yn(
    np
  );
  return {
    length: n,
    collapseItems: e,
    bindCollapseItems: o
  };
}
const op = {
  modelValue: [Array, String, Number],
  accordion: Boolean,
  offset: {
    type: Boolean,
    default: !0
  },
  divider: {
    type: Boolean,
    default: !0
  },
  elevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  onChange: R(),
  "onUpdate:modelValue": R()
}, { name: Ry, n: Fy } = ee("collapse");
function Uy(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      L(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const tp = x({
  name: Ry,
  props: op,
  setup(e) {
    const n = B(() => e.offset), o = B(() => e.divider), t = B(() => e.elevation), r = B(() => e.accordion), a = B(() => Vo(e.modelValue)), { length: i, collapseItems: l, bindCollapseItems: s } = Ly(), u = {
      offset: n,
      divider: o,
      elevation: t,
      accordion: r,
      updateItem: c
    };
    de(
      () => i.value,
      () => Ke().then(v)
    ), de(
      () => e.modelValue,
      () => Ke().then(v)
    ), s(u);
    function c(m, b) {
      if (e.accordion) {
        d(b ? m : void 0);
        return;
      }
      const C = b ? [...a.value, m] : a.value.filter((w) => w !== m);
      d(C);
    }
    function d(m) {
      S(e["onUpdate:modelValue"], m), S(e.onChange, m);
    }
    function f() {
      if (e.accordion) {
        const [C] = a.value;
        if (C == null)
          return;
        const w = l.find(({ name: g }) => C === g.value);
        return w ?? l.find(({ index: g, name: $ }) => $.value == null && C === g.value);
      }
      const m = l.filter(
        ({ name: C }) => C.value != null && a.value.includes(C.value)
      ), b = l.filter(
        ({ index: C, name: w }) => w.value == null && a.value.includes(C.value)
      );
      return [...m, ...b];
    }
    function v() {
      const m = Dh(Vo(f()));
      l.forEach((b) => {
        b.init(m.includes(b));
      });
    }
    return {
      divider: o,
      n: Fy,
      toggleAll: (m) => {
        if (e.accordion)
          return;
        const C = l.filter((w) => {
          var g;
          const $ = (g = w.name.value) != null ? g : w.index.value, O = a.value.includes($);
          return m.skipDisabled && w.disabled.value ? O : m.expand === "inverse" ? !O : m.expand;
        }).map((w) => {
          var g;
          return (g = w.name.value) != null ? g : w.index.value;
        });
        d(C);
      }
    };
  }
});
tp.render = Uy;
var ma = tp;
te(ma);
ue(ma, op);
const P5 = ma;
var xi = ma;
function Hy() {
  const { parentProvider: e, index: n, bindParent: o } = bn(
    np
  );
  return o || Vn("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: o
  };
}
const rp = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
};
var Bu = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
function ap(e) {
  const { contentEl: n, showContent: o, expand: t } = e;
  let r = !0;
  de(
    t,
    (u) => {
      Ke(() => {
        u ? a() : i();
      });
    },
    { immediate: !0 }
  );
  function a() {
    return Bu(this, null, function* () {
      if (!n.value || (n.value.style.height = "", o.value = !0, yield mr(), !n.value))
        return;
      const { offsetHeight: u } = n.value;
      n.value.style.height = "0px", yield mr(), n.value && (n.value.style.height = u + "px", r && (yield $n(), r && l()));
    });
  }
  const i = () => Bu(this, null, function* () {
    if (!n.value)
      return;
    const { offsetHeight: u } = n.value;
    n.value.style.height = u + "px", yield mr(), n.value.style.height = "0px";
  }), l = () => {
    t.value || (o.value = !1), n.value.style.height = "";
  };
  return {
    handleTransitionEnd: l,
    handleTransitionStart: () => {
      r = !1;
    }
  };
}
const { name: Yy, n: jy, classes: Wy } = ee("collapse-item"), Ky = ["aria-expanded", "aria-disabled", "role"];
function qy(e, n) {
  const o = ne("var-icon");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: K(`--collapse-divider-top: ${e.divider ? "var(--collapse-border-top)" : "none"}`)
    },
    [
      I(
        "div",
        {
          class: p(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2)))
        },
        null,
        2
        /* CLASS */
      ),
      I("div", {
        class: p(e.classes(e.n("header"), [!e.disabled, e.n("header--cursor-pointer")])),
        "aria-expanded": e.isShow,
        "aria-disabled": e.disabled,
        role: e.accordion ? "tab" : "button",
        onClick: n[0] || (n[0] = (...t) => e.toggle && e.toggle(...t))
      }, [
        e.$slots.title || e.title ? (h(), P(
          "div",
          {
            key: 0,
            class: p(e.n("header-title"))
          },
          [
            L(e.$slots, "title", {}, () => [
              Be(
                re(e.title),
                1
                /* TEXT */
              )
            ])
          ],
          2
          /* CLASS */
        )) : X("v-if", !0),
        I(
          "div",
          {
            class: p(e.n("header-icon"))
          },
          [
            L(e.$slots, "icon", {}, () => [
              G(o, {
                name: e.icon,
                transition: 250,
                class: p(
                  e.classes(
                    e.n("header-icon"),
                    [e.isShow && e.icon === "chevron-down", e.n("header-open")],
                    [e.disabled, e.n("header--disable")]
                  )
                )
              }, null, 8, ["name", "class"])
            ])
          ],
          2
          /* CLASS */
        )
      ], 10, Ky),
      Me(I(
        "div",
        {
          class: p(e.n("content")),
          ref: "contentEl",
          onTransitionend: n[1] || (n[1] = (...t) => e.handleTransitionEnd && e.handleTransitionEnd(...t)),
          onTransitionstart: n[2] || (n[2] = (...t) => e.handleTransitionStart && e.handleTransitionStart(...t))
        },
        [
          I(
            "div",
            {
              class: p(e.n("content-wrap"))
            },
            [
              L(e.$slots, "default")
            ],
            2
            /* CLASS */
          )
        ],
        34
        /* CLASS, NEED_HYDRATION */
      ), [
        [Xn, e.showContent]
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const ip = x({
  name: Yy,
  components: {
    VarIcon: Je
  },
  props: rp,
  setup(e) {
    const n = k(!1), o = k(!1), t = k(null), r = B(() => e.name), a = B(() => e.disabled), { index: i, collapse: l, bindCollapse: s } = Hy(), { offset: u, divider: c, elevation: d, accordion: f, updateItem: v } = l;
    s({
      index: i,
      name: r,
      disabled: a,
      init: C
    });
    const { handleTransitionEnd: m, handleTransitionStart: b } = ap({
      contentEl: t,
      showContent: o,
      expand: n
    });
    function C(g) {
      n.value = g;
    }
    function w() {
      var g;
      e.disabled || v((g = e.name) != null ? g : i.value, !n.value);
    }
    return {
      isShow: n,
      showContent: o,
      offset: u,
      divider: c,
      elevation: d,
      contentEl: t,
      accordion: f,
      n: jy,
      classes: Wy,
      toggle: w,
      formatElevation: fn,
      handleTransitionEnd: m,
      handleTransitionStart: b
    };
  }
});
ip.render = qy;
var ha = ip;
te(ha);
ue(ha, rp);
const z5 = ha;
var el = ha;
const lp = {
  expand: Boolean
}, { name: Gy, n: Xy } = ee("collapse-transition");
function Zy(e, n) {
  return Me((h(), P(
    "div",
    {
      class: p(e.n("content")),
      ref: "contentEl",
      onTransitionend: n[0] || (n[0] = (...o) => e.handleTransitionEnd && e.handleTransitionEnd(...o)),
      onTransitionstart: n[1] || (n[1] = (...o) => e.handleTransitionStart && e.handleTransitionStart(...o))
    },
    [
      L(e.$slots, "default")
    ],
    34
    /* CLASS, NEED_HYDRATION */
  )), [
    [Xn, e.showContent]
  ]);
}
const sp = x({
  name: Gy,
  props: lp,
  setup(e) {
    const n = k(!1), o = k(null), t = B(() => e.expand), { handleTransitionEnd: r, handleTransitionStart: a } = ap({
      contentEl: o,
      showContent: n,
      expand: t
    });
    return {
      showContent: n,
      contentEl: o,
      n: Xy,
      handleTransitionEnd: r,
      handleTransitionStart: a
    };
  }
});
sp.render = Zy;
var ga = sp;
te(ga);
ue(ga, lp);
const O5 = ga;
var nl = ga;
const up = {
  time: {
    type: [String, Number],
    default: 0
  },
  format: {
    type: String,
    default: "HH : mm : ss"
  },
  autoStart: {
    type: Boolean,
    default: !0
  },
  onEnd: R(),
  onChange: R()
}, { name: Jy, n: Qy } = ee("countdown"), ol = 1e3, tl = 60 * ol, rl = 60 * tl, Iu = 24 * rl;
function _y(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      L(e.$slots, "default", wo(Kt(e.timeData)), () => [
        Be(
          re(e.showTime),
          1
          /* TEXT */
        )
      ])
    ],
    2
    /* CLASS */
  );
}
const cp = x({
  name: Jy,
  props: up,
  setup(e) {
    const n = k(""), o = k({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    });
    let t = 0, r = !1, a = 0, i = 0, l;
    de(
      () => e.time,
      () => {
        v(), e.autoStart && d();
      }
    ), Yo(() => {
      c(), e.autoStart && d();
    }), Eo(() => {
      l != null && (r = l, r === !0 && d(!0));
    }), pt(() => {
      l = r, f();
    }), jt(f);
    function s(y, m) {
      const b = Object.values(m), C = ["DD", "HH", "mm", "ss"], w = [24, 60, 60, 1e3];
      if (C.forEach((g, $) => {
        y.includes(g) ? y = y.replace(g, Fo(`${b[$]}`, 2, "0")) : b[$ + 1] += b[$] * w[$];
      }), y.includes("S")) {
        const g = Fo(`${b[b.length - 1]}`, 3, "0");
        y.includes("SSS") ? y = y.replace("SSS", g) : y.includes("SS") ? y = y.replace("SS", g.slice(0, 2)) : y = y.replace("S", g.slice(0, 1));
      }
      return y;
    }
    function u(y) {
      const m = Math.floor(y / Iu), b = Math.floor(y % Iu / rl), C = Math.floor(y % rl / tl), w = Math.floor(y % tl / ol), g = Math.floor(y % ol), $ = {
        days: m,
        hours: b,
        minutes: C,
        seconds: w,
        milliseconds: g
      };
      o.value = $, S(e.onChange, o.value), n.value = s(e.format, $);
    }
    function c() {
      const { time: y, onEnd: m } = e, b = performance.now();
      if (t || (t = b + F(y)), i = t - b, i < 0 && (i = 0), u(i), i === 0) {
        S(m);
        return;
      }
      r && (a = Dt(c));
    }
    function d(y = !1) {
      r && !y || (r = !0, t = performance.now() + (i || F(e.time)), c());
    }
    function f() {
      r = !1, Ys(a);
    }
    function v() {
      t = 0, r = !1, Ys(a), c();
    }
    return {
      showTime: n,
      timeData: o,
      n: Qy,
      start: d,
      pause: f,
      reset: v
    };
  }
});
cp.render = _y;
var ba = cp;
te(ba);
ue(ba, up);
const T5 = ba;
var al = ba;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Qo = 9e15, Bo = 1e9, il = "0123456789abcdef", Er = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Dr = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ll = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed at run-time using the `Decimal.config` method.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used when rounding to `precision`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The modulo mode used when calculating the modulus: a mod n.
  // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
  // The remainder (r) is calculated as: r = a - n * q.
  //
  // UP         0 The remainder is positive if the dividend is negative, else is negative.
  // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
  // FLOOR      3 The remainder has the same sign as the divisor (Python %).
  // HALF_EVEN  6 The IEEE 754 remainder function.
  // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
  //
  // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
  // division (9) are commonly used for the modulus operation. The other rounding modes can also
  // be used, but they may not give useful results.
  modulo: 1,
  // 0 to 9
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -EXP_LIMIT
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to EXP_LIMIT
  // The minimum exponent value, beneath which underflow to zero occurs.
  // JavaScript numbers: -324  (5e-324)
  minE: -Qo,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Qo,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, dp, so, Ee = !0, ya = "[DecimalError] ", Oo = ya + "Invalid argument: ", fp = ya + "Precision limit exceeded", pp = ya + "crypto unavailable", vp = "[object Decimal]", wn = Math.floor, dn = Math.pow, xy = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, e1 = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, n1 = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, mp = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Gn = 1e7, ze = 7, o1 = 9007199254740991, t1 = Er.length - 1, sl = Dr.length - 1, Z = { toStringTag: vp };
Z.absoluteValue = Z.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), Se(e);
};
Z.ceil = function() {
  return Se(new this.constructor(this), this.e + 1, 2);
};
Z.clampedTo = Z.clamp = function(e, n) {
  var o, t = this, r = t.constructor;
  if (e = new r(e), n = new r(n), !e.s || !n.s)
    return new r(NaN);
  if (e.gt(n))
    throw Error(Oo + n);
  return o = t.cmp(e), o < 0 ? e : t.cmp(n) > 0 ? n : new r(t);
};
Z.comparedTo = Z.cmp = function(e) {
  var n, o, t, r, a = this, i = a.d, l = (e = new a.constructor(e)).d, s = a.s, u = e.s;
  if (!i || !l)
    return !s || !u ? NaN : s !== u ? s : i === l ? 0 : !i ^ s < 0 ? 1 : -1;
  if (!i[0] || !l[0])
    return i[0] ? s : l[0] ? -u : 0;
  if (s !== u)
    return s;
  if (a.e !== e.e)
    return a.e > e.e ^ s < 0 ? 1 : -1;
  for (t = i.length, r = l.length, n = 0, o = t < r ? t : r; n < o; ++n)
    if (i[n] !== l[n])
      return i[n] > l[n] ^ s < 0 ? 1 : -1;
  return t === r ? 0 : t > r ^ s < 0 ? 1 : -1;
};
Z.cosine = Z.cos = function() {
  var e, n, o = this, t = o.constructor;
  return o.d ? o.d[0] ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(o.e, o.sd()) + ze, t.rounding = 1, o = r1(t, kp(t, o)), t.precision = e, t.rounding = n, Se(so == 2 || so == 3 ? o.neg() : o, e, n, !0)) : new t(1) : new t(NaN);
};
Z.cubeRoot = Z.cbrt = function() {
  var e, n, o, t, r, a, i, l, s, u, c = this, d = c.constructor;
  if (!c.isFinite() || c.isZero())
    return new d(c);
  for (Ee = !1, a = c.s * dn(c.s * c, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (o = mn(c.d), e = c.e, (a = (e - o.length + 1) % 3) && (o += a == 1 || a == -2 ? "0" : "00"), a = dn(o, 1 / 3), e = wn((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? o = "5e" + e : (o = a.toExponential(), o = o.slice(0, o.indexOf("e") + 1) + e), t = new d(o), t.s = c.s) : t = new d(a.toString()), i = (e = d.precision) + 3; ; )
    if (l = t, s = l.times(l).times(l), u = s.plus(c), t = Ge(u.plus(c).times(l), u.plus(s), i + 2, 1), mn(l.d).slice(0, i) === (o = mn(t.d)).slice(0, i))
      if (o = o.slice(i - 3, i + 1), o == "9999" || !r && o == "4999") {
        if (!r && (Se(l, e + 1, 0), l.times(l).times(l).eq(c))) {
          t = l;
          break;
        }
        i += 4, r = 1;
      } else {
        (!+o || !+o.slice(1) && o.charAt(0) == "5") && (Se(t, e + 1, 1), n = !t.times(t).times(t).eq(c));
        break;
      }
  return Ee = !0, Se(t, e, d.rounding, n);
};
Z.decimalPlaces = Z.dp = function() {
  var e, n = this.d, o = NaN;
  if (n) {
    if (e = n.length - 1, o = (e - wn(this.e / ze)) * ze, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        o--;
    o < 0 && (o = 0);
  }
  return o;
};
Z.dividedBy = Z.div = function(e) {
  return Ge(this, new this.constructor(e));
};
Z.dividedToIntegerBy = Z.divToInt = function(e) {
  var n = this, o = n.constructor;
  return Se(Ge(n, new o(e), 0, 1, 1), o.precision, o.rounding);
};
Z.equals = Z.eq = function(e) {
  return this.cmp(e) === 0;
};
Z.floor = function() {
  return Se(new this.constructor(this), this.e + 1, 3);
};
Z.greaterThan = Z.gt = function(e) {
  return this.cmp(e) > 0;
};
Z.greaterThanOrEqualTo = Z.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
Z.hyperbolicCosine = Z.cosh = function() {
  var e, n, o, t, r, a = this, i = a.constructor, l = new i(1);
  if (!a.isFinite())
    return new i(a.s ? 1 / 0 : NaN);
  if (a.isZero())
    return l;
  o = i.precision, t = i.rounding, i.precision = o + Math.max(a.e, a.sd()) + 4, i.rounding = 1, r = a.d.length, r < 32 ? (e = Math.ceil(r / 3), n = (1 / $a(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), a = st(i, 1, a.times(n), new i(1), !0);
  for (var s, u = e, c = new i(8); u--; )
    s = a.times(a), a = l.minus(s.times(c.minus(s.times(c))));
  return Se(a, i.precision = o, i.rounding = t, !0);
};
Z.hyperbolicSine = Z.sinh = function() {
  var e, n, o, t, r = this, a = r.constructor;
  if (!r.isFinite() || r.isZero())
    return new a(r);
  if (n = a.precision, o = a.rounding, a.precision = n + Math.max(r.e, r.sd()) + 4, a.rounding = 1, t = r.d.length, t < 3)
    r = st(a, 2, r, r, !0);
  else {
    e = 1.4 * Math.sqrt(t), e = e > 16 ? 16 : e | 0, r = r.times(1 / $a(5, e)), r = st(a, 2, r, r, !0);
    for (var i, l = new a(5), s = new a(16), u = new a(20); e--; )
      i = r.times(r), r = r.times(l.plus(i.times(s.times(i).plus(u))));
  }
  return a.precision = n, a.rounding = o, Se(r, n, o, !0);
};
Z.hyperbolicTangent = Z.tanh = function() {
  var e, n, o = this, t = o.constructor;
  return o.isFinite() ? o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + 7, t.rounding = 1, Ge(o.sinh(), o.cosh(), t.precision = e, t.rounding = n)) : new t(o.s);
};
Z.inverseCosine = Z.acos = function() {
  var e, n = this, o = n.constructor, t = n.abs().cmp(1), r = o.precision, a = o.rounding;
  return t !== -1 ? t === 0 ? n.isNeg() ? qn(o, r, a) : new o(0) : new o(NaN) : n.isZero() ? qn(o, r + 4, a).times(0.5) : (o.precision = r + 6, o.rounding = 1, n = n.asin(), e = qn(o, r + 4, a).times(0.5), o.precision = r, o.rounding = a, e.minus(n));
};
Z.inverseHyperbolicCosine = Z.acosh = function() {
  var e, n, o = this, t = o.constructor;
  return o.lte(1) ? new t(o.eq(1) ? 0 : NaN) : o.isFinite() ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(Math.abs(o.e), o.sd()) + 4, t.rounding = 1, Ee = !1, o = o.times(o).minus(1).sqrt().plus(o), Ee = !0, t.precision = e, t.rounding = n, o.ln()) : new t(o);
};
Z.inverseHyperbolicSine = Z.asinh = function() {
  var e, n, o = this, t = o.constructor;
  return !o.isFinite() || o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + 2 * Math.max(Math.abs(o.e), o.sd()) + 6, t.rounding = 1, Ee = !1, o = o.times(o).plus(1).sqrt().plus(o), Ee = !0, t.precision = e, t.rounding = n, o.ln());
};
Z.inverseHyperbolicTangent = Z.atanh = function() {
  var e, n, o, t, r = this, a = r.constructor;
  return r.isFinite() ? r.e >= 0 ? new a(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN) : (e = a.precision, n = a.rounding, t = r.sd(), Math.max(t, e) < 2 * -r.e - 1 ? Se(new a(r), e, n, !0) : (a.precision = o = t - r.e, r = Ge(r.plus(1), new a(1).minus(r), o + e, 1), a.precision = e + 4, a.rounding = 1, r = r.ln(), a.precision = e, a.rounding = n, r.times(0.5))) : new a(NaN);
};
Z.inverseSine = Z.asin = function() {
  var e, n, o, t, r = this, a = r.constructor;
  return r.isZero() ? new a(r) : (n = r.abs().cmp(1), o = a.precision, t = a.rounding, n !== -1 ? n === 0 ? (e = qn(a, o + 4, t).times(0.5), e.s = r.s, e) : new a(NaN) : (a.precision = o + 6, a.rounding = 1, r = r.div(new a(1).minus(r.times(r)).sqrt().plus(1)).atan(), a.precision = o, a.rounding = t, r.times(2)));
};
Z.inverseTangent = Z.atan = function() {
  var e, n, o, t, r, a, i, l, s, u = this, c = u.constructor, d = c.precision, f = c.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new c(u);
    if (u.abs().eq(1) && d + 4 <= sl)
      return i = qn(c, d + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s)
      return new c(NaN);
    if (d + 4 <= sl)
      return i = qn(c, d + 4, f).times(0.5), i.s = u.s, i;
  }
  for (c.precision = l = d + 10, c.rounding = 1, o = Math.min(28, l / ze + 2 | 0), e = o; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (Ee = !1, n = Math.ceil(l / ze), t = 1, s = u.times(u), i = new c(u), r = u; e !== -1; )
    if (r = r.times(s), a = i.minus(r.div(t += 2)), r = r.times(s), i = a.plus(r.div(t += 2)), i.d[n] !== void 0)
      for (e = n; i.d[e] === a.d[e] && e--; )
        ;
  return o && (i = i.times(2 << o - 1)), Ee = !0, Se(i, c.precision = d, c.rounding = f, !0);
};
Z.isFinite = function() {
  return !!this.d;
};
Z.isInteger = Z.isInt = function() {
  return !!this.d && wn(this.e / ze) > this.d.length - 2;
};
Z.isNaN = function() {
  return !this.s;
};
Z.isNegative = Z.isNeg = function() {
  return this.s < 0;
};
Z.isPositive = Z.isPos = function() {
  return this.s > 0;
};
Z.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
Z.lessThan = Z.lt = function(e) {
  return this.cmp(e) < 0;
};
Z.lessThanOrEqualTo = Z.lte = function(e) {
  return this.cmp(e) < 1;
};
Z.logarithm = Z.log = function(e) {
  var n, o, t, r, a, i, l, s, u = this, c = u.constructor, d = c.precision, f = c.rounding, v = 5;
  if (e == null)
    e = new c(10), n = !0;
  else {
    if (e = new c(e), o = e.d, e.s < 0 || !o || !o[0] || e.eq(1))
      return new c(NaN);
    n = e.eq(10);
  }
  if (o = u.d, u.s < 0 || !o || !o[0] || u.eq(1))
    return new c(o && !o[0] ? -1 / 0 : u.s != 1 ? NaN : o ? 0 : 1 / 0);
  if (n)
    if (o.length > 1)
      a = !0;
    else {
      for (r = o[0]; r % 10 === 0; )
        r /= 10;
      a = r !== 1;
    }
  if (Ee = !1, l = d + v, i = ko(u, l), t = n ? Br(c, l + 10) : ko(e, l), s = Ge(i, t, l, 1), Mt(s.d, r = d, f))
    do
      if (l += 10, i = ko(u, l), t = n ? Br(c, l + 10) : ko(e, l), s = Ge(i, t, l, 1), !a) {
        +mn(s.d).slice(r + 1, r + 15) + 1 == 1e14 && (s = Se(s, d + 1, 0));
        break;
      }
    while (Mt(s.d, r += 10, f));
  return Ee = !0, Se(s, d, f);
};
Z.minus = Z.sub = function(e) {
  var n, o, t, r, a, i, l, s, u, c, d, f, v = this, y = v.constructor;
  if (e = new y(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new y(NaN) : v.d ? e.s = -e.s : e = new y(e.d || v.s !== e.s ? v : NaN), e;
  if (v.s != e.s)
    return e.s = -e.s, v.plus(e);
  if (u = v.d, f = e.d, l = y.precision, s = y.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new y(v);
    else
      return new y(s === 3 ? -0 : 0);
    return Ee ? Se(e, l, s) : e;
  }
  if (o = wn(e.e / ze), c = wn(v.e / ze), u = u.slice(), a = c - o, a) {
    for (d = a < 0, d ? (n = u, a = -a, i = f.length) : (n = f, o = c, i = u.length), t = Math.max(Math.ceil(l / ze), i) + 2, a > t && (a = t, n.length = 1), n.reverse(), t = a; t--; )
      n.push(0);
    n.reverse();
  } else {
    for (t = u.length, i = f.length, d = t < i, d && (i = t), t = 0; t < i; t++)
      if (u[t] != f[t]) {
        d = u[t] < f[t];
        break;
      }
    a = 0;
  }
  for (d && (n = u, u = f, f = n, e.s = -e.s), i = u.length, t = f.length - i; t > 0; --t)
    u[i++] = 0;
  for (t = f.length; t > a; ) {
    if (u[--t] < f[t]) {
      for (r = t; r && u[--r] === 0; )
        u[r] = Gn - 1;
      --u[r], u[t] += Gn;
    }
    u[t] -= f[t];
  }
  for (; u[--i] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --o;
  return u[0] ? (e.d = u, e.e = ka(u, o), Ee ? Se(e, l, s) : e) : new y(s === 3 ? -0 : 0);
};
Z.modulo = Z.mod = function(e) {
  var n, o = this, t = o.constructor;
  return e = new t(e), !o.d || !e.s || e.d && !e.d[0] ? new t(NaN) : !e.d || o.d && !o.d[0] ? Se(new t(o), t.precision, t.rounding) : (Ee = !1, t.modulo == 9 ? (n = Ge(o, e.abs(), 0, 3, 1), n.s *= e.s) : n = Ge(o, e, 0, t.modulo, 1), n = n.times(e), Ee = !0, o.minus(n));
};
Z.naturalExponential = Z.exp = function() {
  return ul(this);
};
Z.naturalLogarithm = Z.ln = function() {
  return ko(this);
};
Z.negated = Z.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, Se(e);
};
Z.plus = Z.add = function(e) {
  var n, o, t, r, a, i, l, s, u, c, d = this, f = d.constructor;
  if (e = new f(e), !d.d || !e.d)
    return !d.s || !e.s ? e = new f(NaN) : d.d || (e = new f(e.d || d.s === e.s ? d : NaN)), e;
  if (d.s != e.s)
    return e.s = -e.s, d.minus(e);
  if (u = d.d, c = e.d, l = f.precision, s = f.rounding, !u[0] || !c[0])
    return c[0] || (e = new f(d)), Ee ? Se(e, l, s) : e;
  if (a = wn(d.e / ze), t = wn(e.e / ze), u = u.slice(), r = a - t, r) {
    for (r < 0 ? (o = u, r = -r, i = c.length) : (o = c, t = a, i = u.length), a = Math.ceil(l / ze), i = a > i ? a + 1 : i + 1, r > i && (r = i, o.length = 1), o.reverse(); r--; )
      o.push(0);
    o.reverse();
  }
  for (i = u.length, r = c.length, i - r < 0 && (r = i, o = c, c = u, u = o), n = 0; r; )
    n = (u[--r] = u[r] + c[r] + n) / Gn | 0, u[r] %= Gn;
  for (n && (u.unshift(n), ++t), i = u.length; u[--i] == 0; )
    u.pop();
  return e.d = u, e.e = ka(u, t), Ee ? Se(e, l, s) : e;
};
Z.precision = Z.sd = function(e) {
  var n, o = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(Oo + e);
  return o.d ? (n = hp(o.d), e && o.e + 1 > n && (n = o.e + 1)) : n = NaN, n;
};
Z.round = function() {
  var e = this, n = e.constructor;
  return Se(new n(e), e.e + 1, n.rounding);
};
Z.sine = Z.sin = function() {
  var e, n, o = this, t = o.constructor;
  return o.isFinite() ? o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + Math.max(o.e, o.sd()) + ze, t.rounding = 1, o = i1(t, kp(t, o)), t.precision = e, t.rounding = n, Se(so > 2 ? o.neg() : o, e, n, !0)) : new t(NaN);
};
Z.squareRoot = Z.sqrt = function() {
  var e, n, o, t, r, a, i = this, l = i.d, s = i.e, u = i.s, c = i.constructor;
  if (u !== 1 || !l || !l[0])
    return new c(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (Ee = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = mn(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = wn((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), t = new c(n)) : t = new c(u.toString()), o = (s = c.precision) + 3; ; )
    if (a = t, t = a.plus(Ge(i, a, o + 2, 1)).times(0.5), mn(a.d).slice(0, o) === (n = mn(t.d)).slice(0, o))
      if (n = n.slice(o - 3, o + 1), n == "9999" || !r && n == "4999") {
        if (!r && (Se(a, s + 1, 0), a.times(a).eq(i))) {
          t = a;
          break;
        }
        o += 4, r = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (Se(t, s + 1, 1), e = !t.times(t).eq(i));
        break;
      }
  return Ee = !0, Se(t, s, c.rounding, e);
};
Z.tangent = Z.tan = function() {
  var e, n, o = this, t = o.constructor;
  return o.isFinite() ? o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + 10, t.rounding = 1, o = o.sin(), o.s = 1, o = Ge(o, new t(1).minus(o.times(o)).sqrt(), e + 10, 0), t.precision = e, t.rounding = n, Se(so == 2 || so == 4 ? o.neg() : o, e, n, !0)) : new t(NaN);
};
Z.times = Z.mul = function(e) {
  var n, o, t, r, a, i, l, s, u, c = this, d = c.constructor, f = c.d, v = (e = new d(e)).d;
  if (e.s *= c.s, !f || !f[0] || !v || !v[0])
    return new d(!e.s || f && !f[0] && !v || v && !v[0] && !f ? NaN : !f || !v ? e.s / 0 : e.s * 0);
  for (o = wn(c.e / ze) + wn(e.e / ze), s = f.length, u = v.length, s < u && (a = f, f = v, v = a, i = s, s = u, u = i), a = [], i = s + u, t = i; t--; )
    a.push(0);
  for (t = u; --t >= 0; ) {
    for (n = 0, r = s + t; r > t; )
      l = a[r] + v[t] * f[r - t - 1] + n, a[r--] = l % Gn | 0, n = l / Gn | 0;
    a[r] = (a[r] + n) % Gn | 0;
  }
  for (; !a[--i]; )
    a.pop();
  return n ? ++o : a.shift(), e.d = a, e.e = ka(a, o), Ee ? Se(e, d.precision, d.rounding) : e;
};
Z.toBinary = function(e, n) {
  return ks(this, 2, e, n);
};
Z.toDecimalPlaces = Z.toDP = function(e, n) {
  var o = this, t = o.constructor;
  return o = new t(o), e === void 0 ? o : (Dn(e, 0, Bo), n === void 0 ? n = t.rounding : Dn(n, 0, 8), Se(o, e + o.e + 1, n));
};
Z.toExponential = function(e, n) {
  var o, t = this, r = t.constructor;
  return e === void 0 ? o = _n(t, !0) : (Dn(e, 0, Bo), n === void 0 ? n = r.rounding : Dn(n, 0, 8), t = Se(new r(t), e + 1, n), o = _n(t, !0, e + 1)), t.isNeg() && !t.isZero() ? "-" + o : o;
};
Z.toFixed = function(e, n) {
  var o, t, r = this, a = r.constructor;
  return e === void 0 ? o = _n(r) : (Dn(e, 0, Bo), n === void 0 ? n = a.rounding : Dn(n, 0, 8), t = Se(new a(r), e + r.e + 1, n), o = _n(t, !1, e + t.e + 1)), r.isNeg() && !r.isZero() ? "-" + o : o;
};
Z.toFraction = function(e) {
  var n, o, t, r, a, i, l, s, u, c, d, f, v = this, y = v.d, m = v.constructor;
  if (!y)
    return new m(v);
  if (u = o = new m(1), t = s = new m(0), n = new m(t), a = n.e = hp(y) - v.e - 1, i = a % ze, n.d[0] = dn(10, i < 0 ? ze + i : i), e == null)
    e = a > 0 ? n : u;
  else {
    if (l = new m(e), !l.isInt() || l.lt(u))
      throw Error(Oo + l);
    e = l.gt(n) ? a > 0 ? n : u : l;
  }
  for (Ee = !1, l = new m(mn(y)), c = m.precision, m.precision = a = y.length * ze * 2; d = Ge(l, n, 0, 1, 1), r = o.plus(d.times(t)), r.cmp(e) != 1; )
    o = t, t = r, r = u, u = s.plus(d.times(r)), s = r, r = n, n = l.minus(d.times(r)), l = r;
  return r = Ge(e.minus(o), t, 0, 1, 1), s = s.plus(r.times(u)), o = o.plus(r.times(t)), s.s = u.s = v.s, f = Ge(u, t, a, 1).minus(v).abs().cmp(Ge(s, o, a, 1).minus(v).abs()) < 1 ? [u, t] : [s, o], m.precision = c, Ee = !0, f;
};
Z.toHexadecimal = Z.toHex = function(e, n) {
  return ks(this, 16, e, n);
};
Z.toNearest = function(e, n) {
  var o = this, t = o.constructor;
  if (o = new t(o), e == null) {
    if (!o.d)
      return o;
    e = new t(1), n = t.rounding;
  } else {
    if (e = new t(e), n === void 0 ? n = t.rounding : Dn(n, 0, 8), !o.d)
      return e.s ? o : e;
    if (!e.d)
      return e.s && (e.s = o.s), e;
  }
  return e.d[0] ? (Ee = !1, o = Ge(o, e, 0, n, 1).times(e), Ee = !0, Se(o)) : (e.s = o.s, o = e), o;
};
Z.toNumber = function() {
  return +this;
};
Z.toOctal = function(e, n) {
  return ks(this, 8, e, n);
};
Z.toPower = Z.pow = function(e) {
  var n, o, t, r, a, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(dn(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (t = s.precision, a = s.rounding, e.eq(1))
    return Se(l, t, a);
  if (n = wn(e.e / ze), n >= e.d.length - 1 && (o = u < 0 ? -u : u) <= o1)
    return r = gp(s, l, o, t), e.s < 0 ? new s(1).div(r) : Se(r, t, a);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return o = dn(+l, u), n = o == 0 || !isFinite(o) ? wn(u * (Math.log("0." + mn(l.d)) / Math.LN10 + l.e + 1)) : new s(o + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (Ee = !1, s.rounding = l.s = 1, o = Math.min(12, (n + "").length), r = ul(e.times(ko(l, t + o)), t), r.d && (r = Se(r, t + 5, 1), Mt(r.d, t, a) && (n = t + 10, r = Se(ul(e.times(ko(l, n + o)), n), n + 5, 1), +mn(r.d).slice(t + 1, t + 15) + 1 == 1e14 && (r = Se(r, t + 1, 0)))), r.s = i, Ee = !0, s.rounding = a, Se(r, t, a));
};
Z.toPrecision = function(e, n) {
  var o, t = this, r = t.constructor;
  return e === void 0 ? o = _n(t, t.e <= r.toExpNeg || t.e >= r.toExpPos) : (Dn(e, 1, Bo), n === void 0 ? n = r.rounding : Dn(n, 0, 8), t = Se(new r(t), e, n), o = _n(t, e <= t.e || t.e <= r.toExpNeg, e)), t.isNeg() && !t.isZero() ? "-" + o : o;
};
Z.toSignificantDigits = Z.toSD = function(e, n) {
  var o = this, t = o.constructor;
  return e === void 0 ? (e = t.precision, n = t.rounding) : (Dn(e, 1, Bo), n === void 0 ? n = t.rounding : Dn(n, 0, 8)), Se(new t(o), e, n);
};
Z.toString = function() {
  var e = this, n = e.constructor, o = _n(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + o : o;
};
Z.truncated = Z.trunc = function() {
  return Se(new this.constructor(this), this.e + 1, 1);
};
Z.valueOf = Z.toJSON = function() {
  var e = this, n = e.constructor, o = _n(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + o : o;
};
function mn(e) {
  var n, o, t, r = e.length - 1, a = "", i = e[0];
  if (r > 0) {
    for (a += i, n = 1; n < r; n++)
      t = e[n] + "", o = ze - t.length, o && (a += vo(o)), a += t;
    i = e[n], t = i + "", o = ze - t.length, o && (a += vo(o));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; )
    i /= 10;
  return a + i;
}
function Dn(e, n, o) {
  if (e !== ~~e || e < n || e > o)
    throw Error(Oo + e);
}
function Mt(e, n, o, t) {
  var r, a, i, l;
  for (a = e[0]; a >= 10; a /= 10)
    --n;
  return --n < 0 ? (n += ze, r = 0) : (r = Math.ceil((n + 1) / ze), n %= ze), a = dn(10, ze - n), l = e[r] % a | 0, t == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = o < 4 && l == 99999 || o > 3 && l == 49999 || l == 5e4 || l == 0) : i = (o < 4 && l + 1 == a || o > 3 && l + 1 == a / 2) && (e[r + 1] / a / 100 | 0) == dn(10, n - 2) - 1 || (l == a / 2 || l == 0) && (e[r + 1] / a / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (t || o < 4) && l == 9999 || !t && o > 3 && l == 4999) : i = ((t || o < 4) && l + 1 == a || !t && o > 3 && l + 1 == a / 2) && (e[r + 1] / a / 1e3 | 0) == dn(10, n - 3) - 1, i;
}
function hr(e, n, o) {
  for (var t, r = [0], a, i = 0, l = e.length; i < l; ) {
    for (a = r.length; a--; )
      r[a] *= n;
    for (r[0] += il.indexOf(e.charAt(i++)), t = 0; t < r.length; t++)
      r[t] > o - 1 && (r[t + 1] === void 0 && (r[t + 1] = 0), r[t + 1] += r[t] / o | 0, r[t] %= o);
  }
  return r.reverse();
}
function r1(e, n) {
  var o, t, r;
  if (n.isZero())
    return n;
  t = n.d.length, t < 32 ? (o = Math.ceil(t / 3), r = (1 / $a(4, o)).toString()) : (o = 16, r = "2.3283064365386962890625e-10"), e.precision += o, n = st(e, 1, n.times(r), new e(1));
  for (var a = o; a--; ) {
    var i = n.times(n);
    n = i.times(i).minus(i).times(8).plus(1);
  }
  return e.precision -= o, n;
}
var Ge = function() {
  function e(t, r, a) {
    var i, l = 0, s = t.length;
    for (t = t.slice(); s--; )
      i = t[s] * r + l, t[s] = i % a | 0, l = i / a | 0;
    return l && t.unshift(l), t;
  }
  function n(t, r, a, i) {
    var l, s;
    if (a != i)
      s = a > i ? 1 : -1;
    else
      for (l = s = 0; l < a; l++)
        if (t[l] != r[l]) {
          s = t[l] > r[l] ? 1 : -1;
          break;
        }
    return s;
  }
  function o(t, r, a, i) {
    for (var l = 0; a--; )
      t[a] -= l, l = t[a] < r[a] ? 1 : 0, t[a] = l * i + t[a] - r[a];
    for (; !t[0] && t.length > 1; )
      t.shift();
  }
  return function(t, r, a, i, l, s) {
    var u, c, d, f, v, y, m, b, C, w, g, $, O, z, A, T, E, D, M, H, Y = t.constructor, N = t.s == r.s ? 1 : -1, q = t.d, j = r.d;
    if (!q || !q[0] || !j || !j[0])
      return new Y(
        // Return NaN if either NaN, or both Infinity or 0.
        !t.s || !r.s || (q ? j && q[0] == j[0] : !j) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          q && q[0] == 0 || !j ? N * 0 : N / 0
        )
      );
    for (s ? (v = 1, c = t.e - r.e) : (s = Gn, v = ze, c = wn(t.e / v) - wn(r.e / v)), M = j.length, E = q.length, C = new Y(N), w = C.d = [], d = 0; j[d] == (q[d] || 0); d++)
      ;
    if (j[d] > (q[d] || 0) && c--, a == null ? (z = a = Y.precision, i = Y.rounding) : l ? z = a + (t.e - r.e) + 1 : z = a, z < 0)
      w.push(1), y = !0;
    else {
      if (z = z / v + 2 | 0, d = 0, M == 1) {
        for (f = 0, j = j[0], z++; (d < E || f) && z--; d++)
          A = f * s + (q[d] || 0), w[d] = A / j | 0, f = A % j | 0;
        y = f || d < E;
      } else {
        for (f = s / (j[0] + 1) | 0, f > 1 && (j = e(j, f, s), q = e(q, f, s), M = j.length, E = q.length), T = M, g = q.slice(0, M), $ = g.length; $ < M; )
          g[$++] = 0;
        H = j.slice(), H.unshift(0), D = j[0], j[1] >= s / 2 && ++D;
        do
          f = 0, u = n(j, g, M, $), u < 0 ? (O = g[0], M != $ && (O = O * s + (g[1] || 0)), f = O / D | 0, f > 1 ? (f >= s && (f = s - 1), m = e(j, f, s), b = m.length, $ = g.length, u = n(m, g, b, $), u == 1 && (f--, o(m, M < b ? H : j, b, s))) : (f == 0 && (u = f = 1), m = j.slice()), b = m.length, b < $ && m.unshift(0), o(g, m, $, s), u == -1 && ($ = g.length, u = n(j, g, M, $), u < 1 && (f++, o(g, M < $ ? H : j, $, s))), $ = g.length) : u === 0 && (f++, g = [0]), w[d++] = f, u && g[0] ? g[$++] = q[T] || 0 : (g = [q[T]], $ = 1);
        while ((T++ < E || g[0] !== void 0) && z--);
        y = g[0] !== void 0;
      }
      w[0] || w.shift();
    }
    if (v == 1)
      C.e = c, dp = y;
    else {
      for (d = 1, f = w[0]; f >= 10; f /= 10)
        d++;
      C.e = d + c * v - 1, Se(C, l ? a + C.e + 1 : a, i, y);
    }
    return C;
  };
}();
function Se(e, n, o, t) {
  var r, a, i, l, s, u, c, d, f, v = e.constructor;
  e:
    if (n != null) {
      if (d = e.d, !d)
        return e;
      for (r = 1, l = d[0]; l >= 10; l /= 10)
        r++;
      if (a = n - r, a < 0)
        a += ze, i = n, c = d[f = 0], s = c / dn(10, r - i - 1) % 10 | 0;
      else if (f = Math.ceil((a + 1) / ze), l = d.length, f >= l)
        if (t) {
          for (; l++ <= f; )
            d.push(0);
          c = s = 0, r = 1, a %= ze, i = a - ze + 1;
        } else
          break e;
      else {
        for (c = l = d[f], r = 1; l >= 10; l /= 10)
          r++;
        a %= ze, i = a - ze + r, s = i < 0 ? 0 : c / dn(10, r - i - 1) % 10 | 0;
      }
      if (t = t || n < 0 || d[f + 1] !== void 0 || (i < 0 ? c : c % dn(10, r - i - 1)), u = o < 4 ? (s || t) && (o == 0 || o == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (o == 4 || t || o == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (a > 0 ? i > 0 ? c / dn(10, r - i) : 0 : d[f - 1]) % 10 & 1 || o == (e.s < 0 ? 8 : 7)), n < 1 || !d[0])
        return d.length = 0, u ? (n -= e.e + 1, d[0] = dn(10, (ze - n % ze) % ze), e.e = -n || 0) : d[0] = e.e = 0, e;
      if (a == 0 ? (d.length = f, l = 1, f--) : (d.length = f + 1, l = dn(10, ze - a), d[f] = i > 0 ? (c / dn(10, r - i) % dn(10, i) | 0) * l : 0), u)
        for (; ; )
          if (f == 0) {
            for (a = 1, i = d[0]; i >= 10; i /= 10)
              a++;
            for (i = d[0] += l, l = 1; i >= 10; i /= 10)
              l++;
            a != l && (e.e++, d[0] == Gn && (d[0] = 1));
            break;
          } else {
            if (d[f] += l, d[f] != Gn)
              break;
            d[f--] = 0, l = 1;
          }
      for (a = d.length; d[--a] === 0; )
        d.pop();
    }
  return Ee && (e.e > v.maxE ? (e.d = null, e.e = NaN) : e.e < v.minE && (e.e = 0, e.d = [0])), e;
}
function _n(e, n, o) {
  if (!e.isFinite())
    return yp(e);
  var t, r = e.e, a = mn(e.d), i = a.length;
  return n ? (o && (t = o - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + vo(t) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : r < 0 ? (a = "0." + vo(-r - 1) + a, o && (t = o - i) > 0 && (a += vo(t))) : r >= i ? (a += vo(r + 1 - i), o && (t = o - r - 1) > 0 && (a = a + "." + vo(t))) : ((t = r + 1) < i && (a = a.slice(0, t) + "." + a.slice(t)), o && (t = o - i) > 0 && (r + 1 === i && (a += "."), a += vo(t))), a;
}
function ka(e, n) {
  var o = e[0];
  for (n *= ze; o >= 10; o /= 10)
    n++;
  return n;
}
function Br(e, n, o) {
  if (n > t1)
    throw Ee = !0, o && (e.precision = o), Error(fp);
  return Se(new e(Er), n, 1, !0);
}
function qn(e, n, o) {
  if (n > sl)
    throw Error(fp);
  return Se(new e(Dr), n, o, !0);
}
function hp(e) {
  var n = e.length - 1, o = n * ze + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      o--;
    for (n = e[0]; n >= 10; n /= 10)
      o++;
  }
  return o;
}
function vo(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function gp(e, n, o, t) {
  var r, a = new e(1), i = Math.ceil(t / ze + 4);
  for (Ee = !1; ; ) {
    if (o % 2 && (a = a.times(n), Nu(a.d, i) && (r = !0)), o = wn(o / 2), o === 0) {
      o = a.d.length - 1, r && a.d[o] === 0 && ++a.d[o];
      break;
    }
    n = n.times(n), Nu(n.d, i);
  }
  return Ee = !0, a;
}
function Mu(e) {
  return e.d[e.d.length - 1] & 1;
}
function bp(e, n, o) {
  for (var t, r = new e(n[0]), a = 0; ++a < n.length; )
    if (t = new e(n[a]), t.s)
      r[o](t) && (r = t);
    else {
      r = t;
      break;
    }
  return r;
}
function ul(e, n) {
  var o, t, r, a, i, l, s, u = 0, c = 0, d = 0, f = e.constructor, v = f.rounding, y = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (Ee = !1, s = y) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), d += 5;
  for (t = Math.log(dn(2, d)) / Math.LN10 * 2 + 5 | 0, s += t, o = a = i = new f(1), f.precision = s; ; ) {
    if (a = Se(a.times(e), s, 1), o = o.times(++c), l = i.plus(Ge(a, o, s, 1)), mn(l.d).slice(0, s) === mn(i.d).slice(0, s)) {
      for (r = d; r--; )
        i = Se(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && Mt(i.d, s - t, v, u))
          f.precision = s += 10, o = a = l = new f(1), c = 0, u++;
        else
          return Se(i, f.precision = y, v, Ee = !0);
      else
        return f.precision = y, i;
    }
    i = l;
  }
}
function ko(e, n) {
  var o, t, r, a, i, l, s, u, c, d, f, v = 1, y = 10, m = e, b = m.d, C = m.constructor, w = C.rounding, g = C.precision;
  if (m.s < 0 || !b || !b[0] || !m.e && b[0] == 1 && b.length == 1)
    return new C(b && !b[0] ? -1 / 0 : m.s != 1 ? NaN : b ? 0 : m);
  if (n == null ? (Ee = !1, c = g) : c = n, C.precision = c += y, o = mn(b), t = o.charAt(0), Math.abs(a = m.e) < 15e14) {
    for (; t < 7 && t != 1 || t == 1 && o.charAt(1) > 3; )
      m = m.times(e), o = mn(m.d), t = o.charAt(0), v++;
    a = m.e, t > 1 ? (m = new C("0." + o), a++) : m = new C(t + "." + o.slice(1));
  } else
    return u = Br(C, c + 2, g).times(a + ""), m = ko(new C(t + "." + o.slice(1)), c - y).plus(u), C.precision = g, n == null ? Se(m, g, w, Ee = !0) : m;
  for (d = m, s = i = m = Ge(m.minus(1), m.plus(1), c, 1), f = Se(m.times(m), c, 1), r = 3; ; ) {
    if (i = Se(i.times(f), c, 1), u = s.plus(Ge(i, new C(r), c, 1)), mn(u.d).slice(0, c) === mn(s.d).slice(0, c))
      if (s = s.times(2), a !== 0 && (s = s.plus(Br(C, c + 2, g).times(a + ""))), s = Ge(s, new C(v), c, 1), n == null)
        if (Mt(s.d, c - y, w, l))
          C.precision = c += y, u = i = m = Ge(d.minus(1), d.plus(1), c, 1), f = Se(m.times(m), c, 1), r = l = 1;
        else
          return Se(s, C.precision = g, w, Ee = !0);
      else
        return C.precision = g, s;
    s = u, r += 2;
  }
}
function yp(e) {
  return String(e.s * e.s / 0);
}
function cl(e, n) {
  var o, t, r;
  for ((o = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (t = n.search(/e/i)) > 0 ? (o < 0 && (o = t), o += +n.slice(t + 1), n = n.substring(0, t)) : o < 0 && (o = n.length), t = 0; n.charCodeAt(t) === 48; t++)
    ;
  for (r = n.length; n.charCodeAt(r - 1) === 48; --r)
    ;
  if (n = n.slice(t, r), n) {
    if (r -= t, e.e = o = o - t - 1, e.d = [], t = (o + 1) % ze, o < 0 && (t += ze), t < r) {
      for (t && e.d.push(+n.slice(0, t)), r -= ze; t < r; )
        e.d.push(+n.slice(t, t += ze));
      n = n.slice(t), t = ze - n.length;
    } else
      t -= r;
    for (; t--; )
      n += "0";
    e.d.push(+n), Ee && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function a1(e, n) {
  var o, t, r, a, i, l, s, u, c;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), mp.test(n))
      return cl(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (e1.test(n))
    o = 16, n = n.toLowerCase();
  else if (xy.test(n))
    o = 2;
  else if (n1.test(n))
    o = 8;
  else
    throw Error(Oo + n);
  for (a = n.search(/p/i), a > 0 ? (s = +n.slice(a + 1), n = n.substring(2, a)) : n = n.slice(2), a = n.indexOf("."), i = a >= 0, t = e.constructor, i && (n = n.replace(".", ""), l = n.length, a = l - a, r = gp(t, new t(o), a, a * 2)), u = hr(n, o, Gn), c = u.length - 1, a = c; u[a] === 0; --a)
    u.pop();
  return a < 0 ? new t(e.s * 0) : (e.e = ka(u, c), e.d = u, Ee = !1, i && (e = Ge(e, r, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? dn(2, s) : $o.pow(2, s))), Ee = !0, e);
}
function i1(e, n) {
  var o, t = n.d.length;
  if (t < 3)
    return n.isZero() ? n : st(e, 2, n, n);
  o = 1.4 * Math.sqrt(t), o = o > 16 ? 16 : o | 0, n = n.times(1 / $a(5, o)), n = st(e, 2, n, n);
  for (var r, a = new e(5), i = new e(16), l = new e(20); o--; )
    r = n.times(n), n = n.times(a.plus(r.times(i.times(r).minus(l))));
  return n;
}
function st(e, n, o, t, r) {
  var a, i, l, s, u = e.precision, c = Math.ceil(u / ze);
  for (Ee = !1, s = o.times(o), l = new e(t); ; ) {
    if (i = Ge(l.times(s), new e(n++ * n++), u, 1), l = r ? t.plus(i) : t.minus(i), t = Ge(i.times(s), new e(n++ * n++), u, 1), i = l.plus(t), i.d[c] !== void 0) {
      for (a = c; i.d[a] === l.d[a] && a--; )
        ;
      if (a == -1)
        break;
    }
    a = l, l = t, t = i, i = a;
  }
  return Ee = !0, i.d.length = c + 1, i;
}
function $a(e, n) {
  for (var o = e; --n; )
    o *= e;
  return o;
}
function kp(e, n) {
  var o, t = n.s < 0, r = qn(e, e.precision, 1), a = r.times(0.5);
  if (n = n.abs(), n.lte(a))
    return so = t ? 4 : 1, n;
  if (o = n.divToInt(r), o.isZero())
    so = t ? 3 : 2;
  else {
    if (n = n.minus(o.times(r)), n.lte(a))
      return so = Mu(o) ? t ? 2 : 3 : t ? 4 : 1, n;
    so = Mu(o) ? t ? 1 : 4 : t ? 3 : 2;
  }
  return n.minus(r).abs();
}
function ks(e, n, o, t) {
  var r, a, i, l, s, u, c, d, f, v = e.constructor, y = o !== void 0;
  if (y ? (Dn(o, 1, Bo), t === void 0 ? t = v.rounding : Dn(t, 0, 8)) : (o = v.precision, t = v.rounding), !e.isFinite())
    c = yp(e);
  else {
    for (c = _n(e), i = c.indexOf("."), y ? (r = 2, n == 16 ? o = o * 4 - 3 : n == 8 && (o = o * 3 - 2)) : r = n, i >= 0 && (c = c.replace(".", ""), f = new v(1), f.e = c.length - i, f.d = hr(_n(f), 10, r), f.e = f.d.length), d = hr(c, 10, r), a = s = d.length; d[--s] == 0; )
      d.pop();
    if (!d[0])
      c = y ? "0p+0" : "0";
    else {
      if (i < 0 ? a-- : (e = new v(e), e.d = d, e.e = a, e = Ge(e, f, o, t, 0, r), d = e.d, a = e.e, u = dp), i = d[o], l = r / 2, u = u || d[o + 1] !== void 0, u = t < 4 ? (i !== void 0 || u) && (t === 0 || t === (e.s < 0 ? 3 : 2)) : i > l || i === l && (t === 4 || u || t === 6 && d[o - 1] & 1 || t === (e.s < 0 ? 8 : 7)), d.length = o, u)
        for (; ++d[--o] > r - 1; )
          d[o] = 0, o || (++a, d.unshift(1));
      for (s = d.length; !d[s - 1]; --s)
        ;
      for (i = 0, c = ""; i < s; i++)
        c += il.charAt(d[i]);
      if (y) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++)
              c += "0";
            for (d = hr(c, r, n), s = d.length; !d[s - 1]; --s)
              ;
            for (i = 1, c = "1."; i < s; i++)
              c += il.charAt(d[i]);
          } else
            c = c.charAt(0) + "." + c.slice(1);
        c = c + (a < 0 ? "p" : "p+") + a;
      } else if (a < 0) {
        for (; ++a; )
          c = "0" + c;
        c = "0." + c;
      } else if (++a > s)
        for (a -= s; a--; )
          c += "0";
      else
        a < s && (c = c.slice(0, a) + "." + c.slice(a));
    }
    c = (n == 16 ? "0x" : n == 2 ? "0b" : n == 8 ? "0o" : "") + c;
  }
  return e.s < 0 ? "-" + c : c;
}
function Nu(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function l1(e) {
  return new this(e).abs();
}
function s1(e) {
  return new this(e).acos();
}
function u1(e) {
  return new this(e).acosh();
}
function c1(e, n) {
  return new this(e).plus(n);
}
function d1(e) {
  return new this(e).asin();
}
function f1(e) {
  return new this(e).asinh();
}
function p1(e) {
  return new this(e).atan();
}
function v1(e) {
  return new this(e).atanh();
}
function m1(e, n) {
  e = new this(e), n = new this(n);
  var o, t = this.precision, r = this.rounding, a = t + 4;
  return !e.s || !n.s ? o = new this(NaN) : !e.d && !n.d ? (o = qn(this, a, 1).times(n.s > 0 ? 0.25 : 0.75), o.s = e.s) : !n.d || e.isZero() ? (o = n.s < 0 ? qn(this, t, r) : new this(0), o.s = e.s) : !e.d || n.isZero() ? (o = qn(this, a, 1).times(0.5), o.s = e.s) : n.s < 0 ? (this.precision = a, this.rounding = 1, o = this.atan(Ge(e, n, a, 1)), n = qn(this, a, 1), this.precision = t, this.rounding = r, o = e.s < 0 ? o.minus(n) : o.plus(n)) : o = this.atan(Ge(e, n, a, 1)), o;
}
function h1(e) {
  return new this(e).cbrt();
}
function g1(e) {
  return Se(e = new this(e), e.e + 1, 2);
}
function b1(e, n, o) {
  return new this(e).clamp(n, o);
}
function y1(e) {
  if (!e || typeof e != "object")
    throw Error(ya + "Object expected");
  var n, o, t, r = e.defaults === !0, a = [
    "precision",
    1,
    Bo,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Qo,
    0,
    "toExpPos",
    0,
    Qo,
    "maxE",
    0,
    Qo,
    "minE",
    -Qo,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < a.length; n += 3)
    if (o = a[n], r && (this[o] = ll[o]), (t = e[o]) !== void 0)
      if (wn(t) === t && t >= a[n + 1] && t <= a[n + 2])
        this[o] = t;
      else
        throw Error(Oo + o + ": " + t);
  if (o = "crypto", r && (this[o] = ll[o]), (t = e[o]) !== void 0)
    if (t === !0 || t === !1 || t === 0 || t === 1)
      if (t)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[o] = !0;
        else
          throw Error(pp);
      else
        this[o] = !1;
    else
      throw Error(Oo + o + ": " + t);
  return this;
}
function k1(e) {
  return new this(e).cos();
}
function $1(e) {
  return new this(e).cosh();
}
function $p(e) {
  var n, o, t;
  function r(a) {
    var i, l, s, u = this;
    if (!(u instanceof r))
      return new r(a);
    if (u.constructor = r, Au(a)) {
      u.s = a.s, Ee ? !a.d || a.e > r.maxE ? (u.e = NaN, u.d = null) : a.e < r.minE ? (u.e = 0, u.d = [0]) : (u.e = a.e, u.d = a.d.slice()) : (u.e = a.e, u.d = a.d ? a.d.slice() : a.d);
      return;
    }
    if (s = typeof a, s === "number") {
      if (a === 0) {
        u.s = 1 / a < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (a < 0 ? (a = -a, u.s = -1) : u.s = 1, a === ~~a && a < 1e7) {
        for (i = 0, l = a; l >= 10; l /= 10)
          i++;
        Ee ? i > r.maxE ? (u.e = NaN, u.d = null) : i < r.minE ? (u.e = 0, u.d = [0]) : (u.e = i, u.d = [a]) : (u.e = i, u.d = [a]);
        return;
      } else if (a * 0 !== 0) {
        a || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return cl(u, a.toString());
    } else if (s !== "string")
      throw Error(Oo + a);
    return (l = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (l === 43 && (a = a.slice(1)), u.s = 1), mp.test(a) ? cl(u, a) : a1(u, a);
  }
  if (r.prototype = Z, r.ROUND_UP = 0, r.ROUND_DOWN = 1, r.ROUND_CEIL = 2, r.ROUND_FLOOR = 3, r.ROUND_HALF_UP = 4, r.ROUND_HALF_DOWN = 5, r.ROUND_HALF_EVEN = 6, r.ROUND_HALF_CEIL = 7, r.ROUND_HALF_FLOOR = 8, r.EUCLID = 9, r.config = r.set = y1, r.clone = $p, r.isDecimal = Au, r.abs = l1, r.acos = s1, r.acosh = u1, r.add = c1, r.asin = d1, r.asinh = f1, r.atan = p1, r.atanh = v1, r.atan2 = m1, r.cbrt = h1, r.ceil = g1, r.clamp = b1, r.cos = k1, r.cosh = $1, r.div = w1, r.exp = C1, r.floor = S1, r.hypot = P1, r.ln = z1, r.log = O1, r.log10 = E1, r.log2 = T1, r.max = D1, r.min = B1, r.mod = I1, r.mul = M1, r.pow = N1, r.random = A1, r.round = V1, r.sign = L1, r.sin = R1, r.sinh = F1, r.sqrt = U1, r.sub = H1, r.sum = Y1, r.tan = j1, r.tanh = W1, r.trunc = K1, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (t = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < t.length; )
      e.hasOwnProperty(o = t[n++]) || (e[o] = this[o]);
  return r.config(e), r;
}
function w1(e, n) {
  return new this(e).div(n);
}
function C1(e) {
  return new this(e).exp();
}
function S1(e) {
  return Se(e = new this(e), e.e + 1, 3);
}
function P1() {
  var e, n, o = new this(0);
  for (Ee = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      o.d && (o = o.plus(n.times(n)));
    else {
      if (n.s)
        return Ee = !0, new this(1 / 0);
      o = n;
    }
  return Ee = !0, o.sqrt();
}
function Au(e) {
  return e instanceof $o || e && e.toStringTag === vp || !1;
}
function z1(e) {
  return new this(e).ln();
}
function O1(e, n) {
  return new this(e).log(n);
}
function T1(e) {
  return new this(e).log(2);
}
function E1(e) {
  return new this(e).log(10);
}
function D1() {
  return bp(this, arguments, "lt");
}
function B1() {
  return bp(this, arguments, "gt");
}
function I1(e, n) {
  return new this(e).mod(n);
}
function M1(e, n) {
  return new this(e).mul(n);
}
function N1(e, n) {
  return new this(e).pow(n);
}
function A1(e) {
  var n, o, t, r, a = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : Dn(e, 1, Bo), t = Math.ceil(e / ze), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(t)); a < t; )
        r = n[a], r >= 429e7 ? n[a] = crypto.getRandomValues(new Uint32Array(1))[0] : l[a++] = r % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(t *= 4); a < t; )
        r = n[a] + (n[a + 1] << 8) + (n[a + 2] << 16) + ((n[a + 3] & 127) << 24), r >= 214e7 ? crypto.randomBytes(4).copy(n, a) : (l.push(r % 1e7), a += 4);
      a = t / 4;
    } else
      throw Error(pp);
  else
    for (; a < t; )
      l[a++] = Math.random() * 1e7 | 0;
  for (t = l[--a], e %= ze, t && e && (r = dn(10, ze - e), l[a] = (t / r | 0) * r); l[a] === 0; a--)
    l.pop();
  if (a < 0)
    o = 0, l = [0];
  else {
    for (o = -1; l[0] === 0; o -= ze)
      l.shift();
    for (t = 1, r = l[0]; r >= 10; r /= 10)
      t++;
    t < ze && (o -= ze - t);
  }
  return i.e = o, i.d = l, i;
}
function V1(e) {
  return Se(e = new this(e), e.e + 1, this.rounding);
}
function L1(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function R1(e) {
  return new this(e).sin();
}
function F1(e) {
  return new this(e).sinh();
}
function U1(e) {
  return new this(e).sqrt();
}
function H1(e, n) {
  return new this(e).sub(n);
}
function Y1() {
  var e = 0, n = arguments, o = new this(n[e]);
  for (Ee = !1; o.s && ++e < n.length; )
    o = o.plus(n[e]);
  return Ee = !0, Se(o, this.precision, this.rounding);
}
function j1(e) {
  return new this(e).tan();
}
function W1(e) {
  return new this(e).tanh();
}
function K1(e) {
  return Se(e = new this(e), e.e + 1, 1);
}
Z[Symbol.for("nodejs.util.inspect.custom")] = Z.toString;
Z[Symbol.toStringTag] = "Decimal";
var $o = Z.constructor = $p(ll);
Er = new $o(Er);
Dr = new $o(Dr);
const wp = {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  min: [String, Number],
  max: [String, Number],
  step: {
    type: [String, Number],
    default: 1
  },
  color: String,
  inputWidth: [String, Number],
  inputTextSize: [String, Number],
  buttonSize: [String, Number],
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  decimalLength: [String, Number],
  disabled: Boolean,
  readonly: Boolean,
  disableIncrement: Boolean,
  disableDecrement: Boolean,
  disableInput: Boolean,
  lazyChange: Boolean,
  incrementButton: {
    type: Boolean,
    default: !0
  },
  decrementButton: {
    type: Boolean,
    default: !0
  },
  press: {
    type: Boolean,
    default: !0
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onInputChange", "onLazyChange", "onIncrement", "onDecrement"]
  },
  rules: Array,
  onBeforeChange: R(),
  onChange: R(),
  onIncrement: R(),
  onDecrement: R(),
  "onUpdate:modelValue": R()
}, Vu = 100, Lu = 600, { name: q1, n: G1, classes: X1 } = ee("counter"), Z1 = ["inputmode", "readonly", "disabled"];
function J1(e, n) {
  const o = ne("var-icon"), t = ne("var-button"), r = ne("var-form-details");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      I(
        "div",
        Ye({
          class: e.classes(
            e.n("controller"),
            e.formatElevation(e.elevation, 2),
            [e.disabled || e.formDisabled, e.n("--disabled")],
            [e.errorMessage, e.n("--error")]
          ),
          style: { background: e.color }
        }, e.$attrs),
        [
          G(t, {
            class: p(
              e.classes(
                e.n("decrement-button"),
                [!e.decrementButton, e.n("--hidden")],
                [e.disabled || e.formDisabled, e.n("--not-allowed")]
              )
            ),
            style: K({
              width: e.toSizeUnit(e.buttonSize),
              height: e.toSizeUnit(e.buttonSize)
            }),
            round: "",
            "var-counter-cover": "",
            ripple: e.ripple && e.decrementButton && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly && !e.disableDecrement && !e.isMin,
            onClick: e.decrement,
            onTouchstart: e.pressDecrement,
            onTouchend: e.releaseDecrement,
            onTouchcancel: e.releaseDecrement
          }, {
            default: fe(() => [
              G(o, { name: "minus" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]),
          Me(I("input", {
            class: p(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
            style: K({
              width: e.toSizeUnit(e.inputWidth),
              fontSize: e.toSizeUnit(e.inputTextSize)
            }),
            inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
            readonly: e.readonly || e.formReadonly,
            disabled: e.disabled || e.formDisabled || e.disableInput,
            "onUpdate:modelValue": n[0] || (n[0] = (a) => e.inputValue = a),
            onChange: n[1] || (n[1] = (...a) => e.handleChange && e.handleChange(...a))
          }, null, 46, Z1), [
            [gh, e.inputValue]
          ]),
          G(t, {
            class: p(
              e.classes(
                e.n("increment-button"),
                [!e.incrementButton, e.n("--hidden")],
                [e.disabled || e.formDisabled, e.n("--not-allowed")]
              )
            ),
            style: K({
              width: e.toSizeUnit(e.buttonSize),
              height: e.toSizeUnit(e.buttonSize)
            }),
            round: "",
            "var-counter-cover": "",
            ripple: e.ripple && e.incrementButton && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly && !e.disableIncrement && !e.isMax,
            onClick: e.increment,
            onTouchstart: e.pressIncrement,
            onTouchend: e.releaseIncrement,
            onTouchcancel: e.releaseIncrement
          }, {
            default: fe(() => [
              G(o, { name: "plus" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"])
        ],
        16
        /* FULL_PROPS */
      ),
      G(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Cp = x({
  name: q1,
  components: {
    VarButton: Pn,
    VarIcon: Je,
    VarFormDetails: En
  },
  directives: { Ripple: tn },
  inheritAttrs: !1,
  props: wp,
  setup(e) {
    const n = k(""), { bindForm: o, form: t } = jn(), {
      errorMessage: r,
      validateWithTrigger: a,
      validate: i,
      // expose
      resetValidation: l
    } = Yn(), { readonly: s, disabled: u } = t ?? {}, c = B(() => {
      const { max: j, modelValue: ce } = e;
      return j != null && F(ce) >= F(j);
    }), d = B(() => {
      const { min: j, modelValue: ce } = e;
      return j != null && F(ce) <= F(j);
    });
    let f, v, y, m;
    S(o, {
      reset: g,
      validate: C,
      resetValidation: l
    }), de(
      () => e.modelValue,
      (j) => {
        N($(String(j))), S(e.onChange, F(j));
      }
    ), N($(String(e.modelValue)));
    function C() {
      return i(e.rules, e.modelValue);
    }
    function w(j) {
      Ke(() => {
        const { validateTrigger: ce, rules: _, modelValue: pe } = e;
        a(ce, j, _, pe);
      });
    }
    function g() {
      const { min: j } = e;
      S(e["onUpdate:modelValue"], j != null ? F(j) : 0), l();
    }
    function $(j) {
      const { decimalLength: ce, max: _, min: pe } = e;
      let ye = F(j);
      return _ != null && ye > F(_) && (ye = F(_)), pe != null && ye < F(pe) && (ye = F(pe)), j = String(ye), ce != null && (j = ye.toFixed(F(ce))), j;
    }
    function O(j) {
      const { lazyChange: ce, onBeforeChange: _ } = e, { value: pe } = j.target, ye = $(pe);
      ce ? S(_, F(ye), q) : N(ye), w("onInputChange");
    }
    function z() {
      const {
        disabled: j,
        readonly: ce,
        disableDecrement: _,
        decrementButton: pe,
        lazyChange: ye,
        step: ie,
        modelValue: U,
        onDecrement: J,
        onBeforeChange: ae
      } = e;
      if (u != null && u.value || s != null && s.value || j || ce || _ || !pe || d.value)
        return;
      const V = new $o(F(U)).minus(new $o(F(ie))).toString(), W = $(V), Q = F(W);
      S(J, Q), ye ? S(ae, Q, q) : (N(W), w("onDecrement"));
    }
    function A() {
      const {
        disabled: j,
        readonly: ce,
        disableIncrement: _,
        incrementButton: pe,
        lazyChange: ye,
        step: ie,
        modelValue: U,
        onIncrement: J,
        onBeforeChange: ae
      } = e;
      if (u != null && u.value || s != null && s.value || j || ce || _ || !pe || c.value)
        return;
      const V = new $o(F(U)).plus(new $o(F(ie))).toString(), W = $(V), Q = F(W);
      S(J, Q), ye ? S(ae, Q, q) : (N(W), w("onIncrement"));
    }
    function T() {
      const { press: j, lazyChange: ce } = e;
      !j || ce || (m = window.setTimeout(() => {
        Y();
      }, Lu));
    }
    function E() {
      const { press: j, lazyChange: ce } = e;
      !j || ce || (y = window.setTimeout(() => {
        H();
      }, Lu));
    }
    function D() {
      v && clearTimeout(v), m && clearTimeout(m);
    }
    function M() {
      f && clearTimeout(f), y && clearTimeout(y);
    }
    function H() {
      f = window.setTimeout(() => {
        A(), H();
      }, Vu);
    }
    function Y() {
      v = window.setTimeout(() => {
        z(), Y();
      }, Vu);
    }
    function N(j) {
      n.value = j;
      const ce = F(j);
      S(e["onUpdate:modelValue"], ce);
    }
    function q(j) {
      N($(String(j))), w("onLazyChange");
    }
    return {
      inputValue: n,
      errorMessage: r,
      formDisabled: u,
      formReadonly: s,
      isMax: c,
      isMin: d,
      n: G1,
      classes: X1,
      formatElevation: fn,
      validate: C,
      reset: g,
      resetValidation: l,
      handleChange: O,
      decrement: z,
      increment: A,
      pressDecrement: T,
      pressIncrement: E,
      releaseDecrement: D,
      releaseIncrement: M,
      toSizeUnit: Oe,
      toNumber: F
    };
  }
});
Cp.render = J1;
var wa = Cp;
te(wa);
ue(wa, wp);
const E5 = wa;
var dl = wa, Sp = 60, Pp = Sp * 60, zp = Pp * 24, Q1 = zp * 7, ut = 1e3, zi = Sp * ut, Ru = Pp * ut, _1 = zp * ut, x1 = Q1 * ut, $s = "millisecond", _o = "second", xo = "minute", et = "hour", mo = "day", gr = "week", Kn = "month", Op = "quarter", ho = "year", nt = "date", ek = "YYYY-MM-DDTHH:mm:ssZ", Fu = "Invalid Date", nk = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, ok = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const tk = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var fl = function(n, o, t) {
  var r = String(n);
  return !r || r.length >= o ? n : "" + Array(o + 1 - r.length).join(t) + n;
}, rk = function(n) {
  var o = -n.utcOffset(), t = Math.abs(o), r = Math.floor(t / 60), a = t % 60;
  return (o <= 0 ? "+" : "-") + fl(r, 2, "0") + ":" + fl(a, 2, "0");
}, ak = function e(n, o) {
  if (n.date() < o.date())
    return -e(o, n);
  var t = (o.year() - n.year()) * 12 + (o.month() - n.month()), r = n.clone().add(t, Kn), a = o - r < 0, i = n.clone().add(t + (a ? -1 : 1), Kn);
  return +(-(t + (o - r) / (a ? r - i : i - r)) || 0);
}, ik = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, lk = function(n) {
  var o = {
    M: Kn,
    y: ho,
    w: gr,
    d: mo,
    D: nt,
    h: et,
    m: xo,
    s: _o,
    ms: $s,
    Q: Op
  };
  return o[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, sk = function(n) {
  return n === void 0;
};
const uk = {
  s: fl,
  z: rk,
  m: ak,
  a: ik,
  p: lk,
  u: sk
};
var St = "en", Lo = {};
Lo[St] = tk;
var ws = function(n) {
  return n instanceof Ca;
}, Ir = function e(n, o, t) {
  var r;
  if (!n)
    return St;
  if (typeof n == "string") {
    var a = n.toLowerCase();
    Lo[a] && (r = a), o && (Lo[a] = o, r = a);
    var i = n.split("-");
    if (!r && i.length > 1)
      return e(i[0]);
  } else {
    var l = n.name;
    Lo[l] = n, r = l;
  }
  return !t && r && (St = r), r || !t && St;
}, se = function(n, o) {
  if (ws(n))
    return n.clone();
  var t = typeof o == "object" ? o : {};
  return t.date = n, t.args = arguments, new Ca(t);
}, ck = function(n, o) {
  return se(n, {
    locale: o.$L,
    utc: o.$u,
    x: o.$x,
    $offset: o.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, qe = uk;
qe.l = Ir;
qe.i = ws;
qe.w = ck;
var dk = function(n) {
  var o = n.date, t = n.utc;
  if (o === null)
    return /* @__PURE__ */ new Date(NaN);
  if (qe.u(o))
    return /* @__PURE__ */ new Date();
  if (o instanceof Date)
    return new Date(o);
  if (typeof o == "string" && !/Z$/i.test(o)) {
    var r = o.match(nk);
    if (r) {
      var a = r[2] - 1 || 0, i = (r[7] || "0").substring(0, 3);
      return t ? new Date(Date.UTC(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i)) : new Date(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i);
    }
  }
  return new Date(o);
}, Ca = /* @__PURE__ */ function() {
  function e(o) {
    this.$L = Ir(o.locale, null, !0), this.parse(o);
  }
  var n = e.prototype;
  return n.parse = function(t) {
    this.$d = dk(t), this.$x = t.x || {}, this.init();
  }, n.init = function() {
    var t = this.$d;
    this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
  }, n.$utils = function() {
    return qe;
  }, n.isValid = function() {
    return this.$d.toString() !== Fu;
  }, n.isSame = function(t, r) {
    var a = se(t);
    return this.startOf(r) <= a && a <= this.endOf(r);
  }, n.isAfter = function(t, r) {
    return se(t) < this.startOf(r);
  }, n.isBefore = function(t, r) {
    return this.endOf(r) < se(t);
  }, n.$g = function(t, r, a) {
    return qe.u(t) ? this[r] : this.set(a, t);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(t, r) {
    var a = this, i = qe.u(r) ? !0 : r, l = qe.p(t), s = function(C, w) {
      var g = qe.w(a.$u ? Date.UTC(a.$y, w, C) : new Date(a.$y, w, C), a);
      return i ? g : g.endOf(mo);
    }, u = function(C, w) {
      var g = [0, 0, 0, 0], $ = [23, 59, 59, 999];
      return qe.w(a.toDate()[C].apply(
        // eslint-disable-line prefer-spread
        a.toDate("s"),
        (i ? g : $).slice(w)
      ), a);
    }, c = this.$W, d = this.$M, f = this.$D, v = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case ho:
        return i ? s(1, 0) : s(31, 11);
      case Kn:
        return i ? s(1, d) : s(0, d + 1);
      case gr: {
        var y = this.$locale().weekStart || 0, m = (c < y ? c + 7 : c) - y;
        return s(i ? f - m : f + (6 - m), d);
      }
      case mo:
      case nt:
        return u(v + "Hours", 0);
      case et:
        return u(v + "Minutes", 1);
      case xo:
        return u(v + "Seconds", 2);
      case _o:
        return u(v + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(t) {
    return this.startOf(t, !1);
  }, n.$set = function(t, r) {
    var a, i = qe.p(t), l = "set" + (this.$u ? "UTC" : ""), s = (a = {}, a[mo] = l + "Date", a[nt] = l + "Date", a[Kn] = l + "Month", a[ho] = l + "FullYear", a[et] = l + "Hours", a[xo] = l + "Minutes", a[_o] = l + "Seconds", a[$s] = l + "Milliseconds", a)[i], u = i === mo ? this.$D + (r - this.$W) : r;
    if (i === Kn || i === ho) {
      var c = this.clone().set(nt, 1);
      c.$d[s](u), c.init(), this.$d = c.set(nt, Math.min(this.$D, c.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(t, r) {
    return this.clone().$set(t, r);
  }, n.get = function(t) {
    return this[qe.p(t)]();
  }, n.add = function(t, r) {
    var a = this, i;
    t = Number(t);
    var l = qe.p(r), s = function(f) {
      var v = se(a);
      return qe.w(v.date(v.date() + Math.round(f * t)), a);
    };
    if (l === Kn)
      return this.set(Kn, this.$M + t);
    if (l === ho)
      return this.set(ho, this.$y + t);
    if (l === mo)
      return s(1);
    if (l === gr)
      return s(7);
    var u = (i = {}, i[xo] = zi, i[et] = Ru, i[_o] = ut, i)[l] || 1, c = this.$d.getTime() + t * u;
    return qe.w(c, this);
  }, n.subtract = function(t, r) {
    return this.add(t * -1, r);
  }, n.format = function(t) {
    var r = this, a = this.$locale();
    if (!this.isValid())
      return a.invalidDate || Fu;
    var i = t || ek, l = qe.z(this), s = this.$H, u = this.$m, c = this.$M, d = a.weekdays, f = a.months, v = a.meridiem, y = function(g, $, O, z) {
      return g && (g[$] || g(r, i)) || O[$].slice(0, z);
    }, m = function(g) {
      return qe.s(s % 12 || 12, g, "0");
    }, b = v || function(w, g, $) {
      var O = w < 12 ? "AM" : "PM";
      return $ ? O.toLowerCase() : O;
    }, C = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: c + 1,
      MM: qe.s(c + 1, 2, "0"),
      MMM: y(a.monthsShort, c, f, 3),
      MMMM: y(f, c),
      D: this.$D,
      DD: qe.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: y(a.weekdaysMin, this.$W, d, 2),
      ddd: y(a.weekdaysShort, this.$W, d, 3),
      dddd: d[this.$W],
      H: String(s),
      HH: qe.s(s, 2, "0"),
      h: m(1),
      hh: m(2),
      a: b(s, u, !0),
      A: b(s, u, !1),
      m: String(u),
      mm: qe.s(u, 2, "0"),
      s: String(this.$s),
      ss: qe.s(this.$s, 2, "0"),
      SSS: qe.s(this.$ms, 3, "0"),
      Z: l
      // 'ZZ' logic below
    };
    return i.replace(ok, function(w, g) {
      return g || C[w] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(t, r, a) {
    var i, l = qe.p(r), s = se(t), u = (s.utcOffset() - this.utcOffset()) * zi, c = this - s, d = qe.m(this, s);
    return d = (i = {}, i[ho] = d / 12, i[Kn] = d, i[Op] = d / 3, i[gr] = (c - u) / x1, i[mo] = (c - u) / _1, i[et] = c / Ru, i[xo] = c / zi, i[_o] = c / ut, i)[l] || c, a ? d : qe.a(d);
  }, n.daysInMonth = function() {
    return this.endOf(Kn).$D;
  }, n.$locale = function() {
    return Lo[this.$L];
  }, n.locale = function(t, r) {
    if (!t)
      return this.$L;
    var a = this.clone(), i = Ir(t, r, !0);
    return i && (a.$L = i), a;
  }, n.clone = function() {
    return qe.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), Tp = Ca.prototype;
se.prototype = Tp;
[["$ms", $s], ["$s", _o], ["$m", xo], ["$H", et], ["$W", mo], ["$M", Kn], ["$y", ho], ["$D", nt]].forEach(function(e) {
  Tp[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
se.extend = function(e, n) {
  return e.$i || (e(n, Ca, se), e.$i = !0), se;
};
se.locale = Ir;
se.isDayjs = ws;
se.unix = function(e) {
  return se(e * 1e3);
};
se.en = Lo[St];
se.Ls = Lo;
se.p = {};
const Ep = function(e, n) {
  n.prototype.isSameOrBefore = function(o, t) {
    return this.isSame(o, t) || this.isBefore(o, t);
  };
}, Dp = function(e, n) {
  n.prototype.isSameOrAfter = function(o, t) {
    return this.isSame(o, t) || this.isAfter(o, t);
  };
}, br = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"], Ct = ["0", "1", "2", "3", "4", "5", "6"], Bp = {
  modelValue: [String, Array],
  type: {
    type: String,
    default: "date"
  },
  hint: String,
  allowedDates: Function,
  color: String,
  titleColor: String,
  elevation: {
    type: [Boolean, Number, String],
    default: !1
  },
  buttonElevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  firstDayOfWeek: {
    type: [String, Number],
    default: 0
  },
  min: String,
  max: String,
  showCurrent: {
    type: Boolean,
    default: !0
  },
  readonly: Boolean,
  multiple: Boolean,
  range: Boolean,
  touchable: {
    type: Boolean,
    default: !0
  },
  onPreview: R(),
  onChange: R(),
  "onUpdate:modelValue": R()
}, { n: fk } = ee("date-picker-header");
function pk(e, n) {
  const o = ne("var-icon"), t = ne("var-button");
  return h(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      G(t, {
        class: p(e.n("arrow")),
        "var-date-picker-header-cover": "",
        round: "",
        text: "",
        disabled: e.disabled.left,
        onClick: n[0] || (n[0] = (r) => e.checkDate("prev"))
      }, {
        default: fe(() => [
          G(o, { name: "chevron-left" })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["class", "disabled"]),
      I(
        "div",
        {
          class: p(e.n("value")),
          onClick: n[1] || (n[1] = (r) => e.$emit("check-panel"))
        },
        [
          G(_e, {
            name: `var-date-picker${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: fe(() => [
              (h(), P(
                "div",
                { key: e.showDate },
                re(e.showDate),
                1
                /* TEXT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])
        ],
        2
        /* CLASS */
      ),
      G(t, {
        class: p(e.n("arrow")),
        "var-date-picker-header-cover": "",
        round: "",
        text: "",
        disabled: e.disabled.right,
        onClick: n[2] || (n[2] = (r) => e.checkDate("next"))
      }, {
        default: fe(() => [
          G(o, { name: "chevron-right" })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["class", "disabled"])
    ],
    2
    /* CLASS */
  );
}
const Ip = x({
  name: "PanelHeader",
  components: {
    VarButton: Pn,
    VarIcon: Je
  },
  props: {
    date: {
      type: Object,
      required: !0
    },
    type: {
      type: String,
      default: "date"
    },
    disabled: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-panel", "check-date"],
  setup(e, { emit: n }) {
    const o = k(!1), t = k(0), { t: r } = ao(), a = B(() => {
      var l;
      const { date: s, type: u } = e, { previewMonth: c, previewYear: d } = s;
      if (u === "year")
        return d;
      if (u === "month")
        return F(d) + t.value;
      const f = (l = (r || rn)("datePickerMonthDict")) == null ? void 0 : l[c].name;
      return (r || rn)("lang") === "zh-CN" ? `${d} ${f}` : `${f} ${d}`;
    }), i = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (n("check-date", l), o.value = l === "prev", t.value += l === "prev" ? -1 : 1);
    };
    return de(
      () => e.date,
      () => {
        t.value = 0;
      }
    ), {
      n: fk,
      reverse: o,
      showDate: a,
      checkDate: i
    };
  }
});
Ip.render = pk;
var Cs = Ip, vk = Object.defineProperty, Uu = Object.getOwnPropertySymbols, mk = Object.prototype.hasOwnProperty, hk = Object.prototype.propertyIsEnumerable, Hu = (e, n, o) => n in e ? vk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, gk = (e, n) => {
  for (var o in n || (n = {}))
    mk.call(n, o) && Hu(e, o, n[o]);
  if (Uu)
    for (var o of Uu(n))
      hk.call(n, o) && Hu(e, o, n[o]);
  return e;
};
se.extend(Ep);
se.extend(Dp);
const { n: tr, classes: bk } = ee("month-picker"), { n: rr } = ee("date-picker");
function yk(e, n) {
  const o = ne("panel-header"), t = ne("var-button");
  return h(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      I(
        "div",
        {
          class: p(e.n("content"))
        },
        [
          G(o, {
            ref: "headerEl",
            type: "month",
            date: e.preview,
            disabled: e.panelBtnDisabled,
            onCheckPanel: e.clickYear,
            onCheckDate: e.checkDate
          }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]),
          G(_e, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: fe(() => [
              (h(), P("ul", { key: e.panelKey }, [
                (h(!0), P(
                  Ae,
                  null,
                  Ze(e.MONTH_LIST, (r) => (h(), P("li", { key: r }, [
                    G(t, Ye({
                      type: "primary",
                      "var-month-picker-cover": "",
                      ripple: !1,
                      elevation: e.componentProps.buttonElevation
                    }, gk({}, e.buttonProps(r)), {
                      onClick: (a) => e.chooseMonth(r, a)
                    }), {
                      default: fe(() => [
                        Be(
                          re(e.getMonthAbbr(r)),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1040, ["elevation", "onClick"])
                  ]))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const Mp = x({
  name: "MonthPickerPanel",
  components: {
    VarButton: Pn,
    PanelHeader: Cs
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    preview: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    clickYear: {
      type: Function,
      required: !0
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-preview", "choose-month"],
  setup(e, { emit: n }) {
    const [o, t] = e.current.split("-"), r = k(!1), a = k(0), i = k(null), l = Qe({
      left: !1,
      right: !1
    }), { t: s } = ao(), u = B(() => e.choose.chooseYear === e.preview.previewYear), c = B(() => e.preview.previewYear === o), d = (w) => {
      var g, $;
      return ($ = (g = (s || rn)("datePickerMonthDict")) == null ? void 0 : g[w].abbr) != null ? $ : "";
    }, f = (w) => {
      const {
        preview: { previewYear: g },
        componentProps: { min: $, max: O }
      } = e;
      let z = !0, A = !0;
      const T = `${g}-${w}`;
      return O && (z = se(T).isSameOrBefore(se(O), "month")), $ && (A = se(T).isSameOrAfter(se($), "month")), z && A;
    }, v = (w) => {
      const {
        choose: { chooseMonths: g, chooseDays: $, chooseRangeMonth: O },
        componentProps: { type: z, range: A }
      } = e;
      if (A) {
        if (!O.length)
          return !1;
        const T = se(w).isSameOrBefore(se(O[1]), "month"), E = se(w).isSameOrAfter(se(O[0]), "month");
        return T && E;
      }
      return z === "month" ? g.includes(w) : $.some((T) => T.includes(w));
    }, y = (w) => {
      const {
        choose: { chooseMonth: g },
        preview: { previewYear: $ },
        componentProps: { allowedDates: O, color: z, multiple: A, range: T }
      } = e, E = `${$}-${w}`, D = () => T || A ? v(E) : g === w && u.value, H = (() => f(w) ? O ? !O(E) : !1 : !0)(), Y = () => H ? !0 : T || A ? !v(E) : !u.value || g !== w, N = () => c.value && t === w && e.componentProps.showCurrent ? (T || A || u.value) && H ? !0 : T || A ? !v(E) : u.value ? g !== t : !0 : !1, q = () => H ? "" : N() ? z ?? "" : D() ? "" : `${rr()}-color-cover`, j = q().startsWith(rr());
      return {
        outline: N(),
        text: Y(),
        color: Y() ? "" : z,
        textColor: j ? "" : q(),
        [`${rr()}-color-cover`]: j,
        class: bk(tr("button"), [H, tr("button--disabled")]),
        disabled: H
      };
    }, m = (w, g) => {
      g.currentTarget.classList.contains(tr("button--disabled")) || n("choose-month", w);
    }, b = (w) => {
      r.value = w === "prev", a.value += w === "prev" ? -1 : 1, n("check-preview", "year", w);
    }, C = (w) => {
      i.value.checkDate(w);
    };
    return de(
      () => e.preview.previewYear,
      (w) => {
        const {
          componentProps: { min: g, max: $ }
        } = e;
        $ && (l.right = !se(`${F(w) + 1}`).isSameOrBefore(se($), "year")), g && (l.left = !se(`${F(w) - 1}`).isSameOrAfter(se(g), "year"));
      },
      { immediate: !0 }
    ), {
      n: tr,
      nDate: rr,
      t: rn,
      MONTH_LIST: br,
      headerEl: i,
      reverse: r,
      panelKey: a,
      panelBtnDisabled: l,
      forwardRef: C,
      buttonProps: y,
      getMonthAbbr: d,
      chooseMonth: m,
      checkDate: b
    };
  }
});
Mp.render = yk;
var kk = Mp;
const Pt = {
  offsetTop: {
    type: [String, Number],
    default: 0
  },
  zIndex: {
    type: [String, Number],
    default: 10
  },
  cssMode: Boolean,
  disabled: Boolean,
  onScroll: R()
};
var Yu = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: $k, n: wk, classes: Ck } = ee("sticky");
function Sk(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: K({
        zIndex: e.toNumber(e.zIndex),
        top: e.enableCSSMode ? `${e.offsetTop}px` : void 0,
        width: e.enableFixedMode ? e.fixedWidth : void 0,
        height: e.enableFixedMode ? e.fixedHeight : void 0
      })
    },
    [
      I(
        "div",
        {
          class: p(e.n("wrapper")),
          ref: "wrapperEl",
          style: K({
            zIndex: e.toNumber(e.zIndex),
            position: e.enableFixedMode ? "fixed" : void 0,
            width: e.enableFixedMode ? e.fixedWrapperWidth : void 0,
            height: e.enableFixedMode ? e.fixedWrapperHeight : void 0,
            left: e.enableFixedMode ? e.fixedLeft : void 0,
            top: e.enableFixedMode ? e.fixedTop : void 0
          })
        },
        [
          L(e.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  );
}
const Np = x({
  name: $k,
  props: Pt,
  setup(e) {
    const n = k(null), o = k(null), t = k(!1), r = k("0px"), a = k("0px"), i = k("auto"), l = k("auto"), s = k("auto"), u = k("auto"), c = B(() => !e.disabled && e.cssMode), d = B(() => !e.disabled && !e.cssMode && t.value), f = B(() => en(e.offsetTop));
    let v;
    de(() => e.disabled, w), pn(() => Yu(this, null, function* () {
      yield $n(), m(), b();
    })), qt(C), ro(w), We(() => window, "scroll", b);
    function y() {
      const { cssMode: g, disabled: $ } = e;
      if ($)
        return;
      let O = 0;
      if (v && v !== window) {
        const { top: M } = an(v);
        O = M;
      }
      const z = o.value, A = n.value, { top: T, left: E } = an(A), D = T - O;
      return D <= f.value ? (g || (i.value = `${A.offsetWidth}px`, l.value = `${A.offsetHeight}px`, r.value = `${O + f.value}px`, a.value = `${E}px`, s.value = `${z.offsetWidth}px`, u.value = `${z.offsetHeight}px`, t.value = !0), {
        offsetTop: f.value,
        isFixed: !0
      }) : (t.value = !1, {
        offsetTop: D,
        isFixed: !1
      });
    }
    function m() {
      v = zo(n.value), v !== window && v.addEventListener("scroll", b);
    }
    function b() {
      const g = y();
      g && S(e.onScroll, g.offsetTop, g.isFixed);
    }
    function C() {
      !v || v === window || v.removeEventListener("scroll", b);
    }
    function w() {
      return Yu(this, null, function* () {
        t.value = !1, yield mr(), y();
      });
    }
    return {
      stickyEl: n,
      wrapperEl: o,
      isFixed: t,
      offsetTop: f,
      fixedTop: r,
      fixedLeft: a,
      fixedWidth: i,
      fixedHeight: l,
      fixedWrapperWidth: s,
      fixedWrapperHeight: u,
      enableCSSMode: c,
      enableFixedMode: d,
      n: wk,
      classes: Ck,
      resize: w,
      toNumber: F
    };
  }
});
Np.render = Sk;
var Sa = Np;
te(Sa);
ue(Sa, Pt);
const D5 = Sa;
var ct = Sa, Pk = Object.defineProperty, ju = Object.getOwnPropertySymbols, zk = Object.prototype.hasOwnProperty, Ok = Object.prototype.propertyIsEnumerable, Wu = (e, n, o) => n in e ? Pk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Tk = (e, n) => {
  for (var o in n || (n = {}))
    zk.call(n, o) && Wu(e, o, n[o]);
  if (ju)
    for (var o of ju(n))
      Ok.call(n, o) && Wu(e, o, n[o]);
  return e;
};
const { n: ar, classes: Ku } = ee("year-picker"), { n: ir } = ee("date-picker");
function Ek(e, n) {
  const o = ne("panel-header"), t = ne("var-sticky"), r = ne("var-button");
  return h(), P("div", null, [
    G(t, { "css-mode": "" }, {
      default: fe(() => [
        G(o, {
          ref: "headerEl",
          type: "year",
          date: {
            previewYear: `${e.yearList[0]} ~ ${e.yearList[e.yearList.length - 1]}`
          },
          disabled: e.panelBtnDisabled,
          onCheckDate: e.checkDate
        }, null, 8, ["date", "disabled", "onCheckDate"])
      ]),
      _: 1
      /* STABLE */
    }),
    G(_e, {
      name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
    }, {
      default: fe(() => [
        (h(), P(
          "ul",
          {
            ref: "panel",
            class: p(e.n()),
            key: e.panelKey
          },
          [
            (h(!0), P(
              Ae,
              null,
              Ze(e.yearList, (a) => (h(), P("li", { key: a }, [
                G(r, Ye({
                  type: "primary",
                  "var-year-picker-cover": "",
                  ripple: !1,
                  elevation: e.componentProps.buttonElevation
                }, Tk({}, e.buttonProps(`${a}`)), {
                  onClick: (i) => e.chooseYear(a, i)
                }), {
                  default: fe(() => [
                    Be(
                      re(a),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1040, ["elevation", "onClick"])
              ]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        ))
      ]),
      _: 1
      /* STABLE */
    }, 8, ["name"])
  ]);
}
const Ap = x({
  name: "YearPickerPanel",
  components: {
    VarButton: Pn,
    VarSticky: ct,
    PanelHeader: Cs
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    preview: {
      type: String
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["choose-year"],
  setup(e, { emit: n }) {
    const [o] = e.current.split("-"), t = k(), r = k(null), a = k(!1), i = k(0), l = k(0), s = Qe({
      left: !1,
      right: !1
    }), u = B(() => {
      if (!e.preview)
        return [];
      const C = Math.floor(F(e.preview) / 100 + l.value) * 100;
      return Array.from(Array(100), (w, g) => Math.max(0, C) + g);
    }), c = (C) => {
      const {
        choose: { chooseMonths: w, chooseDays: g, chooseYears: $, chooseRangeYear: O },
        componentProps: { type: z, range: A }
      } = e;
      if (A) {
        if (!O.length)
          return !1;
        const T = se(C).isSameOrBefore(se(O[1]), "year"), E = se(C).isSameOrAfter(se(O[0]), "year");
        return T && E;
      }
      return z === "year" ? $.includes(C) : z === "month" ? w.some((T) => T.includes(C)) : g.some((T) => T.includes(C));
    }, d = (C) => {
      const {
        componentProps: { min: w, max: g }
      } = e, $ = g ? se(C).isSameOrBefore(se(g), "year") : !0, O = w ? se(C).isSameOrAfter(se(w), "year") : !0;
      return $ && O;
    }, f = (C) => {
      const {
        choose: { chooseYear: w },
        componentProps: { allowedDates: g, color: $, multiple: O, range: z }
      } = e, A = () => z || O ? c(C) : w === C, E = (() => d(C) ? g ? !g(C) : !1 : !0)(), D = () => E ? !0 : z || O ? !c(C) : w !== C, M = () => o === C && e.componentProps.showCurrent ? (z || O) && E ? !0 : z || O ? !c(C) : w !== o : !1, H = () => E ? "" : M() ? $ ?? "" : A() ? "" : `${ir()}-color-cover`, Y = H().startsWith(ir());
      return {
        outline: M(),
        text: D(),
        color: D() ? "" : $,
        textColor: Y ? "" : H(),
        [`${ir()}-color-cover`]: Y,
        class: Ku(ar("button"), [E, ar("button--disabled")]),
        disabled: E
      };
    }, v = (C, w) => {
      w.currentTarget.classList.contains(ar("button--disabled")) || n("choose-year", C);
    }, y = () => {
      var C;
      const w = (C = t.value.querySelector(".var-button--primary")) != null ? C : t.value.querySelector(".var-button--outline");
      w == null || w.scrollIntoView({
        block: "center"
      });
    }, m = (C) => {
      const w = C === "prev";
      a.value = w, i.value += w ? -1 : 1, l.value += w ? -1 : 1;
    }, b = (C) => {
      r.value.checkDate(C);
    };
    return pn(y), de(
      () => e.preview,
      () => {
        l.value = 0;
      }
    ), de(
      u,
      (C) => {
        const {
          componentProps: { min: w, max: g }
        } = e;
        g && (s.right = !se(`${F(C[C.length - 1])}`).isSameOrBefore(se(g), "year")), w && (s.left = !se(`${F(C[0])}`).isSameOrAfter(se(w), "year")), F(C[0] <= 0) && (s.left = !1);
      },
      {
        immediate: !0
      }
    ), {
      n: ar,
      classes: Ku,
      buttonProps: f,
      panel: t,
      headerEl: r,
      yearList: u,
      reverse: a,
      panelKey: i,
      panelBtnDisabled: s,
      nDate: ir,
      checkDate: m,
      chooseYear: v,
      forwardRef: b,
      toNumber: F
    };
  }
});
Ap.render = Ek;
var Dk = Ap, Bk = Object.defineProperty, qu = Object.getOwnPropertySymbols, Ik = Object.prototype.hasOwnProperty, Mk = Object.prototype.propertyIsEnumerable, Gu = (e, n, o) => n in e ? Bk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Nk = (e, n) => {
  for (var o in n || (n = {}))
    Ik.call(n, o) && Gu(e, o, n[o]);
  if (qu)
    for (var o of qu(n))
      Mk.call(n, o) && Gu(e, o, n[o]);
  return e;
};
se.extend(Ep);
se.extend(Dp);
const { n: Xo, classes: Ak } = ee("day-picker"), { n: lr } = ee("date-picker");
function Vk(e, n) {
  const o = ne("panel-header"), t = ne("var-button");
  return h(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      I(
        "div",
        {
          class: p(e.n("content"))
        },
        [
          G(o, {
            ref: "headerEl",
            type: "day",
            date: e.preview,
            disabled: e.panelBtnDisabled,
            onCheckPanel: e.clickMonth,
            onCheckDate: e.checkDate
          }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]),
          G(_e, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: fe(() => [
              (h(), P("div", { key: e.panelKey }, [
                I(
                  "ul",
                  {
                    class: p(e.n("head"))
                  },
                  [
                    (h(!0), P(
                      Ae,
                      null,
                      Ze(e.sortWeekList, (r) => (h(), P(
                        "li",
                        { key: r },
                        re(e.getDayAbbr(r)),
                        1
                        /* TEXT */
                      ))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  2
                  /* CLASS */
                ),
                I(
                  "ul",
                  {
                    class: p(e.n("body"))
                  },
                  [
                    (h(!0), P(
                      Ae,
                      null,
                      Ze(e.days, (r, a) => (h(), P("li", { key: a }, [
                        G(t, Ye({
                          type: "primary",
                          "var-day-picker-cover": "",
                          round: "",
                          ripple: !1,
                          elevation: e.componentProps.buttonElevation
                        }, Nk({}, e.buttonProps(r)), {
                          onClick: (i) => e.chooseDay(r, i)
                        }), {
                          default: fe(() => [
                            Be(
                              re(e.filterDay(r)),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1040, ["elevation", "onClick"])
                      ]))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  2
                  /* CLASS */
                )
              ]))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const Vp = x({
  name: "DayPickerPanel",
  components: {
    VarButton: Pn,
    PanelHeader: Cs
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    preview: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    clickMonth: {
      type: Function,
      required: !0
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-preview", "choose-day"],
  setup(e, { emit: n }) {
    const [o, t, r] = e.current.split("-"), a = k([]), i = k(!1), l = k(0), s = k(null), u = Qe({
      left: !1,
      right: !1
    }), { t: c } = ao(), d = B(
      () => e.preview.previewYear === o && e.preview.previewMonth === t
    ), f = B(
      () => e.choose.chooseYear === e.preview.previewYear && e.choose.chooseMonth === e.preview.previewMonth
    ), v = B(() => {
      const T = Ct.findIndex((E) => E === e.componentProps.firstDayOfWeek);
      return T === -1 || T === 0 ? Ct : [...Ct.slice(T), ...Ct.slice(0, T)];
    }), y = (T) => {
      var E, D;
      return (D = (E = (c || rn)("datePickerWeekDict")) == null ? void 0 : E[T].abbr) != null ? D : "";
    }, m = (T) => T > 0 ? T : "", b = () => {
      const {
        preview: { previewMonth: T, previewYear: E }
      } = e, D = se(`${E}-${T}`).daysInMonth(), M = se(`${E}-${T}-01`).day(), H = v.value.findIndex((Y) => Y === `${M}`);
      a.value = [...Array(H).fill(-1), ...Array.from(Array(D + 1).keys())].filter((Y) => Y);
    }, C = () => {
      const {
        preview: { previewYear: T, previewMonth: E },
        componentProps: { max: D, min: M }
      } = e;
      if (D) {
        const H = `${T}-${F(E) + 1}`;
        u.right = !se(H).isSameOrBefore(se(D), "month");
      }
      if (M) {
        const H = `${T}-${F(E) - 1}`;
        u.left = !se(H).isSameOrAfter(se(M), "month");
      }
    }, w = (T) => {
      const {
        preview: { previewYear: E, previewMonth: D },
        componentProps: { min: M, max: H }
      } = e;
      let Y = !0, N = !0;
      const q = `${E}-${D}-${T}`;
      return H && (Y = se(q).isSameOrBefore(se(H), "day")), M && (N = se(q).isSameOrAfter(se(M), "day")), Y && N;
    }, g = (T) => {
      const {
        choose: { chooseDays: E, chooseRangeDay: D },
        componentProps: { range: M }
      } = e;
      if (M) {
        if (!D.length)
          return !1;
        const H = se(T).isSameOrBefore(se(D[1]), "day"), Y = se(T).isSameOrAfter(se(D[0]), "day");
        return H && Y;
      }
      return E.includes(T);
    }, $ = (T) => {
      if (T < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Xo("button"),
          disabled: !0
        };
      const {
        choose: { chooseDay: E },
        preview: { previewYear: D, previewMonth: M },
        componentProps: { allowedDates: H, color: Y, multiple: N, range: q }
      } = e, j = `${D}-${M}-${T}`, ce = () => q || N ? g(j) : F(E) === T && f.value, pe = (() => w(T) ? H ? !H(j) : !1 : !0)(), ye = () => pe ? !0 : q || N ? !g(j) : !f.value || F(E) !== T, ie = () => d.value && F(r) === T && e.componentProps.showCurrent ? (q || N || f.value) && pe ? !0 : q || N ? !g(j) : f.value ? E !== r : !0 : !1, U = () => pe ? "" : ie() ? Y ?? "" : ce() ? "" : `${lr()}-color-cover`, J = U().startsWith(lr());
      return {
        text: ye(),
        outline: ie(),
        textColor: J ? "" : U(),
        [`${lr()}-color-cover`]: J,
        class: Ak(Xo("button"), Xo("button--usable"), [pe, Xo("button--disabled")]),
        disabled: pe
      };
    }, O = (T) => {
      i.value = T === "prev", l.value += T === "prev" ? -1 : 1, n("check-preview", "month", T);
    }, z = (T, E) => {
      E.currentTarget.classList.contains(Xo("button--disabled")) || n("choose-day", T);
    }, A = (T) => {
      s.value.checkDate(T);
    };
    return pn(() => {
      b(), C();
    }), de(
      () => e.preview,
      () => {
        b(), C();
      }
    ), {
      n: Xo,
      nDate: lr,
      days: a,
      reverse: i,
      headerEl: s,
      panelKey: l,
      sortWeekList: v,
      panelBtnDisabled: u,
      forwardRef: A,
      filterDay: m,
      getDayAbbr: y,
      checkDate: O,
      chooseDay: z,
      buttonProps: $
    };
  }
});
Vp.render = Vk;
var Lk = Vp, Rk = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: Fk, n: Uk, classes: Hk } = ee("date-picker");
function Yk(e, n) {
  var o;
  const t = ne("year-picker-panel"), r = ne("month-picker-panel"), a = ne("day-picker-panel");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [
      I(
        "div",
        {
          class: p(e.n("title")),
          style: K({ background: e.titleColor || e.color })
        },
        [
          I(
            "div",
            {
              class: p(e.n("title-select"))
            },
            [
              I(
                "div",
                {
                  class: p(e.n("title-hint"))
                },
                re((o = e.hint) != null ? o : (e.pt ? e.pt : e.t)("datePickerHint")),
                3
                /* TEXT, CLASS */
              ),
              e.type !== "year" ? (h(), P(
                "div",
                {
                  key: 0,
                  class: p(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
                  onClick: n[0] || (n[0] = (i) => e.clickEl("year"))
                },
                [
                  L(e.$slots, "year", { year: e.chooseYear }, () => [
                    Be(
                      re(e.chooseYear),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                2
                /* CLASS */
              )) : X("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          I(
            "div",
            {
              class: p(
                e.classes(
                  e.n("title-date"),
                  [!e.isYearPanel || e.type === "year", e.n("title-date--active")],
                  [e.range, e.n("title-date--range")]
                )
              ),
              onClick: n[1] || (n[1] = (i) => e.clickEl("date"))
            },
            [
              G(_e, {
                name: e.multiple ? "" : `${e.n()}${e.reverse ? "-reverse" : ""}-translatey`
              }, {
                default: fe(() => [
                  e.type === "year" ? (h(), P("div", {
                    key: `${e.chooseYear}`
                  }, [
                    e.range ? L(e.$slots, "range", {
                      key: 0,
                      choose: e.getChoose.chooseRangeYear
                    }, () => [
                      Be(
                        re(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? L(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseYears
                    }, () => [
                      Be(
                        re(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ]) : L(e.$slots, "year", {
                      key: 2,
                      year: e.chooseYear
                    }, () => [
                      Be(
                        re(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ])
                  ])) : e.type === "month" ? (h(), P("div", {
                    key: `${e.chooseYear}${e.chooseMonth}`
                  }, [
                    e.range ? L(e.$slots, "range", {
                      key: 0,
                      choose: e.getChoose.chooseRangeMonth
                    }, () => [
                      Be(
                        re(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? L(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseMonths
                    }, () => [
                      Be(
                        re(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ]) : L(e.$slots, "month", {
                      key: 2,
                      month: e.chooseMonth,
                      year: e.chooseYear
                    }, () => [
                      Be(
                        re(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ])
                  ])) : (h(), P("div", {
                    key: `${e.chooseYear}${e.chooseMonth}${e.chooseDay}`
                  }, [
                    e.range ? L(e.$slots, "range", {
                      key: 0,
                      choose: e.formatRange
                    }, () => [
                      Be(
                        re(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? L(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseDays
                    }, () => [
                      Be(
                        re(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ]) : L(e.$slots, "date", wo(Ye({ key: 2 }, e.slotProps)), () => [
                      Be(
                        re(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ])
                  ]))
                ]),
                _: 3
                /* FORWARDED */
              }, 8, ["name"])
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      I(
        "div",
        {
          class: p(e.n("body")),
          onTouchstart: n[2] || (n[2] = (...i) => e.handleTouchstart && e.handleTouchstart(...i)),
          onTouchmove: n[3] || (n[3] = (...i) => e.handleTouchmove && e.handleTouchmove(...i)),
          onTouchend: n[4] || (n[4] = (...i) => e.handleTouchend && e.handleTouchend(...i))
        },
        [
          G(_e, {
            name: `${e.n()}-panel-fade`
          }, {
            default: fe(() => [
              e.getPanelType === "year" ? (h(), Pe(t, {
                key: 0,
                ref: "yearPanelEl",
                choose: e.getChoose,
                current: e.currentDate,
                "component-props": e.componentProps,
                preview: e.previewYear,
                onChooseYear: e.getChooseYear
              }, null, 8, ["choose", "current", "component-props", "preview", "onChooseYear"])) : e.getPanelType === "month" ? (h(), Pe(r, {
                key: 1,
                ref: "monthPanelEl",
                current: e.currentDate,
                choose: e.getChoose,
                preview: e.getPreview,
                "click-year": () => e.clickEl("year"),
                "component-props": e.componentProps,
                onChooseMonth: e.getChooseMonth,
                onCheckPreview: e.checkPreview
              }, null, 8, ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"])) : e.getPanelType === "date" ? (h(), Pe(a, {
                key: 2,
                ref: "dayPanelEl",
                current: e.currentDate,
                choose: e.getChoose,
                preview: e.getPreview,
                "component-props": e.componentProps,
                "click-month": () => e.clickEl("month"),
                onChooseDay: e.getChooseDay,
                onCheckPreview: e.checkPreview
              }, null, 8, ["current", "choose", "preview", "component-props", "click-month", "onChooseDay", "onCheckPreview"])) : X("v-if", !0)
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])
        ],
        34
        /* CLASS, NEED_HYDRATION */
      ),
      e.$slots.actions ? (h(), P(
        "div",
        {
          key: 0,
          class: p(e.n("actions"))
        },
        [
          L(e.$slots, "actions")
        ],
        2
        /* CLASS */
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Lp = x({
  name: Fk,
  components: {
    MonthPickerPanel: kk,
    YearPickerPanel: Dk,
    DayPickerPanel: Lk
  },
  props: Bp,
  setup(e) {
    const { t: n } = ao(), o = se().format("YYYY-MM-D"), [t, r] = o.split("-"), a = br.find((oe) => oe === r), i = k(!1), l = k(!1), s = k(!0), u = k(), c = k(), d = k(), f = k(a), v = k(t), y = k(!1), m = k([]), b = k([]), C = k([]), w = k([]), g = k([]), $ = k([]), O = k(null), z = k(null), A = k(null), T = Qe({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range,
      buttonElevation: e.buttonElevation
    }), E = B(() => ({
      chooseMonth: u.value,
      chooseYear: c.value,
      chooseDay: d.value,
      chooseYears: m.value,
      chooseMonths: b.value,
      chooseDays: C.value,
      chooseRangeYear: w.value,
      chooseRangeMonth: g.value,
      chooseRangeDay: $.value
    })), D = B(() => ({
      previewMonth: f.value,
      previewYear: v.value
    })), M = B(() => {
      var oe;
      const { multiple: we, range: Te } = e;
      return Te ? w.value.length ? `${w.value[0]} ~ ${w.value[1]}` : "" : we ? `${m.value.length}${(n || rn)("datePickerSelected")}` : (oe = c.value) != null ? oe : "";
    }), H = B(() => {
      var oe, we;
      const { multiple: Te, range: Fe } = e;
      if (Fe)
        return g.value.length ? `${g.value[0]} ~ ${g.value[1]}` : "";
      let Le = "";
      return u.value && (Le = (we = (oe = (n || rn)("datePickerMonthDict")) == null ? void 0 : oe[u.value].name) != null ? we : ""), Te ? `${b.value.length}${(n || rn)("datePickerSelected")}` : Le;
    }), Y = B(() => {
      var oe, we, Te, Fe;
      const { multiple: Le, range: sn } = e;
      if (sn) {
        const kt = $.value.map((dh) => se(dh).format("YYYY-MM-DD"));
        return kt.length ? `${kt[0]} ~ ${kt[1]}` : "";
      }
      if (Le)
        return `${C.value.length}${(n || rn)("datePickerSelected")}`;
      if (!c.value || !u.value || !d.value)
        return "";
      const vn = se(`${c.value}-${u.value}-${d.value}`).day(), kn = Ct.find((kt) => kt === `${vn}`), Ao = (we = (oe = (n || rn)("datePickerWeekDict")) == null ? void 0 : oe[kn].name) != null ? we : "", uh = (Fe = (Te = (n || rn)("datePickerMonthDict")) == null ? void 0 : Te[u.value].name) != null ? Fe : "", ch = Fo(d.value, 2, "0");
      return (n || rn)("lang") === "zh-CN" ? `${u.value}-${ch} ${Ao.slice(0, 3)}` : `${Ao.slice(0, 3)}, ${uh.slice(0, 3)} ${d.value}`;
    }), N = B(() => e.type === "year" || i.value ? "year" : e.type === "month" || l.value ? "month" : e.type === "date" ? "date" : ""), q = B(() => !e.touchable || !N.value), j = B(() => {
      var oe, we;
      const Te = se(`${c.value}-${u.value}-${d.value}`).day(), Fe = d.value ? Fo(d.value, 2, "0") : "";
      return {
        week: `${Te}`,
        year: (oe = c.value) != null ? oe : "",
        month: (we = u.value) != null ? we : "",
        date: Fe
      };
    }), ce = B(
      () => E.value.chooseRangeDay.map((oe) => se(oe).format("YYYY-MM-DD"))
    ), _ = B(() => c.value === v.value), pe = B(() => u.value === f.value);
    let ye = 0, ie = 0, U = "", J;
    de(
      () => e.modelValue,
      (oe) => {
        if (!(!nn() || le(oe) || !oe))
          if (e.range) {
            if (!He(oe))
              return;
            s.value = oe.length !== 1, me(oe, e.type);
          } else if (e.multiple) {
            if (!He(oe))
              return;
            $e(oe, e.type);
          } else
            Ne(oe);
      },
      { immediate: !0 }
    ), de(N, xe);
    function ae(oe) {
      oe === "year" ? i.value = !0 : oe === "month" ? l.value = !0 : (i.value = !1, l.value = !1);
    }
    function V(oe) {
      if (q.value)
        return;
      const { clientX: we, clientY: Te } = oe.touches[0];
      ye = we, ie = Te;
    }
    function W(oe, we) {
      return oe >= we && oe > 20 ? "x" : "y";
    }
    function Q(oe) {
      if (q.value)
        return;
      const { clientX: we, clientY: Te } = oe.touches[0], Fe = we - ye, Le = Te - ie;
      J = W(Math.abs(Fe), Math.abs(Le)), U = Fe > 0 ? "prev" : "next";
    }
    function ke() {
      return Rk(this, null, function* () {
        if (q.value || J !== "x")
          return;
        const oe = N.value === "year" ? O : N.value === "month" ? z : A;
        yield $n(), oe.value.forwardRef(U), xe();
      });
    }
    function Ce(oe, we) {
      const Te = we === "year" ? w : we === "month" ? g : $;
      if (Te.value = s.value ? [oe, oe] : [Te.value[0], oe], s.value = !s.value, s.value) {
        const Le = se(Te.value[0]).isAfter(Te.value[1]) ? [Te.value[1], Te.value[0]] : [...Te.value];
        S(e["onUpdate:modelValue"], Le), S(e.onChange, Le);
      }
    }
    function De(oe, we) {
      const Te = we === "year" ? m : we === "month" ? b : C, Fe = we === "year" ? "YYYY" : we === "month" ? "YYYY-MM" : "YYYY-MM-DD", Le = Te.value.map((vn) => se(vn).format(Fe)), sn = Le.findIndex((vn) => vn === oe);
      sn === -1 ? Le.push(oe) : Le.splice(sn, 1), S(e["onUpdate:modelValue"], Le), S(e.onChange, Le);
    }
    function Xe(oe, we) {
      return !c.value || !u.value ? !1 : _.value ? oe === "year" ? we < F(c.value) : oe === "month" ? we < u.value : pe.value ? we < F(d.value) : u.value > f.value : c.value > v.value;
    }
    function ln(oe) {
      const { readonly: we, range: Te, multiple: Fe, onChange: Le, "onUpdate:modelValue": sn } = e;
      if (oe < 0 || we)
        return;
      y.value = Xe("day", oe);
      const vn = `${v.value}-${f.value}-${oe}`, kn = se(vn).format("YYYY-MM-DD");
      Te ? Ce(kn, "day") : Fe ? De(kn, "day") : (S(sn, kn), S(Le, kn));
    }
    function ve(oe) {
      const { type: we, readonly: Te, range: Fe, multiple: Le, onChange: sn, onPreview: vn, "onUpdate:modelValue": kn } = e;
      if (y.value = Xe("month", oe), we === "month" && !Te) {
        const Ao = `${v.value}-${oe}`;
        Fe ? Ce(Ao, "month") : Le ? De(Ao, "month") : (S(kn, Ao), S(sn, Ao));
      } else
        f.value = oe, S(
          vn,
          F(v.value),
          F(f.value),
          we === "date" ? F(d.value) : void 0
        );
      l.value = !1;
    }
    function Ue(oe) {
      const { type: we, readonly: Te, range: Fe, multiple: Le, onChange: sn, onPreview: vn, "onUpdate:modelValue": kn } = e;
      y.value = Xe("year", oe), we === "year" && !Te ? Fe ? Ce(`${oe}`, "year") : Le ? De(`${oe}`, "year") : (S(kn, `${oe}`), S(sn, `${oe}`)) : (v.value = `${oe}`, S(
        vn,
        F(v.value),
        F(f.value),
        we === "date" ? F(d.value) : void 0
      )), i.value = !1;
    }
    function Ve(oe, we) {
      const Te = we === "prev" ? -1 : 1;
      if (oe === "year")
        v.value = `${F(v.value) + Te}`;
      else {
        let Fe = F(f.value) + Te;
        Fe < 1 && (v.value = `${F(v.value) - 1}`, Fe = 12), Fe > 12 && (v.value = `${F(v.value) + 1}`, Fe = 1), f.value = br.find((Le) => F(Le) === Fe);
      }
      S(
        e.onPreview,
        F(v.value),
        F(f.value),
        e.type === "date" ? F(d.value) : void 0
      );
    }
    function nn() {
      return (e.multiple || e.range) && !He(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && He(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0;
    }
    function le(oe) {
      return He(oe) ? !1 : oe === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1;
    }
    function me(oe, we) {
      const Te = we === "year" ? w : we === "month" ? g : $, Fe = we === "year" ? "YYYY" : we === "month" ? "YYYY-MM" : "YYYY-MM-D", Le = oe.map((kn) => se(kn).format(Fe)).slice(0, 2);
      if (Te.value.some((kn) => le(kn)))
        return;
      Te.value = Le;
      const vn = se(Te.value[0]).isAfter(Te.value[1]);
      Te.value.length === 2 && vn && (Te.value = [Te.value[1], Te.value[0]]);
    }
    function $e(oe, we) {
      const Te = we === "year" ? m : we === "month" ? b : C, Fe = we === "year" ? "YYYY" : we === "month" ? "YYYY-MM" : "YYYY-MM-D", Le = Array.from(new Set(oe.map((sn) => se(sn).format(Fe))));
      Te.value = Le.filter((sn) => sn !== "Invalid Date");
    }
    function Ne(oe) {
      const we = se(oe).format("YYYY-MM-D");
      if (le(we))
        return;
      const [Te, Fe, Le] = we.split("-"), sn = br.find((vn) => vn === Fe);
      u.value = sn, c.value = Te, d.value = Le, f.value = sn, v.value = Te;
    }
    function xe() {
      ie = 0, ye = 0, U = "", J = void 0;
    }
    return {
      yearPanelEl: O,
      monthPanelEl: z,
      dayPanelEl: A,
      reverse: y,
      currentDate: o,
      chooseMonth: u,
      chooseYear: c,
      chooseDay: d,
      previewYear: v,
      isYearPanel: i,
      isMonthPanel: l,
      getMonthTitle: H,
      getDateTitle: Y,
      getYearTitle: M,
      getPanelType: N,
      getChoose: E,
      getPreview: D,
      componentProps: T,
      slotProps: j,
      formatRange: ce,
      pt: n,
      t: rn,
      n: Uk,
      classes: Hk,
      clickEl: ae,
      handleTouchstart: V,
      handleTouchmove: Q,
      handleTouchend: ke,
      getChooseDay: ln,
      getChooseMonth: ve,
      getChooseYear: Ue,
      checkPreview: Ve,
      formatElevation: fn
    };
  }
});
Lp.render = Yk;
var Pa = Lp;
te(Pa);
ue(Pa, Bp);
const B5 = Pa;
var pl = Pa, jk = Object.defineProperty, Xu = Object.getOwnPropertySymbols, Wk = Object.prototype.hasOwnProperty, Kk = Object.prototype.propertyIsEnumerable, Zu = (e, n, o) => n in e ? jk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, qk = (e, n) => {
  for (var o in n || (n = {}))
    Wk.call(n, o) && Zu(e, o, n[o]);
  if (Xu)
    for (var o of Xu(n))
      Kk.call(n, o) && Zu(e, o, n[o]);
  return e;
};
const Rp = qk({
  show: Boolean,
  width: [Number, String],
  title: String,
  message: String,
  messageAlign: {
    type: String,
    default: "left"
  },
  confirmButton: {
    type: Boolean,
    default: !0
  },
  cancelButton: {
    type: Boolean,
    default: !0
  },
  confirmButtonText: String,
  cancelButtonText: String,
  confirmButtonTextColor: String,
  cancelButtonTextColor: String,
  confirmButtonColor: String,
  cancelButtonColor: String,
  dialogClass: String,
  dialogStyle: Object,
  onBeforeClose: R(),
  onConfirm: R(),
  onCancel: R(),
  "onUpdate:show": R()
}, Ie(gt, [
  "overlay",
  "overlayClass",
  "overlayStyle",
  "lockScroll",
  "closeOnClickOverlay",
  "closeOnKeyEscape",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  "onKeyEscape",
  // internal for function call closes the dialog
  "onRouteChange"
]));
var Gk = Object.defineProperty, Ju = Object.getOwnPropertySymbols, Xk = Object.prototype.hasOwnProperty, Zk = Object.prototype.propertyIsEnumerable, Qu = (e, n, o) => n in e ? Gk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Jk = (e, n) => {
  for (var o in n || (n = {}))
    Xk.call(n, o) && Qu(e, o, n[o]);
  if (Ju)
    for (var o of Ju(n))
      Zk.call(n, o) && Qu(e, o, n[o]);
  return e;
};
const { name: Qk, n: _k, classes: xk } = ee("dialog");
function e$(e, n) {
  const o = ne("var-button"), t = ne("var-popup");
  return h(), Pe(t, {
    class: p(e.n("popup")),
    "var-dialog-cover": "",
    show: e.popupShow,
    overlay: e.overlay,
    "overlay-class": e.overlayClass,
    "overlay-style": e.overlayStyle,
    "lock-scroll": e.lockScroll,
    "close-on-click-overlay": e.popupCloseOnClickOverlay,
    "close-on-key-escape": !1,
    teleport: e.teleport,
    onOpen: e.onOpen,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onOpened: e.onOpened,
    onKeyEscape: e.handleKeyEscape,
    onRouteChange: e.onRouteChange,
    onClickOverlay: e.handleClickOverlay
  }, {
    default: fe(() => [
      I(
        "div",
        Ye({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: Jk({ width: e.toSizeUnit(e.width) }, e.dialogStyle)
        }, e.$attrs),
        [
          I(
            "div",
            {
              class: p(e.n("title"))
            },
            [
              L(e.$slots, "title", {}, () => {
                var r;
                return [
                  Be(
                    re((r = e.title) != null ? r : (e.pt ? e.pt : e.t)("dialogTitle")),
                    1
                    /* TEXT */
                  )
                ];
              })
            ],
            2
            /* CLASS */
          ),
          I(
            "div",
            {
              class: p(e.n("message")),
              style: K({ textAlign: e.messageAlign })
            },
            [
              L(e.$slots, "default", {}, () => [
                Be(
                  re(e.message),
                  1
                  /* TEXT */
                )
              ])
            ],
            6
            /* CLASS, STYLE */
          ),
          L(e.$slots, "actions", {
            slotClass: e.n("actions"),
            cancel: e.cancel,
            confirm: e.confirm
          }, () => [
            I(
              "div",
              {
                class: p(e.n("actions"))
              },
              [
                e.cancelButton ? (h(), Pe(o, {
                  key: 0,
                  class: p(e.classes(e.n("button"), e.n("cancel-button"))),
                  "var-dialog-cover": "",
                  text: "",
                  "text-color": e.cancelButtonTextColor,
                  color: e.cancelButtonColor,
                  onClick: e.cancel
                }, {
                  default: fe(() => {
                    var r;
                    return [
                      Be(
                        re((r = e.cancelButtonText) != null ? r : (e.pt ? e.pt : e.t)("dialogCancelButtonText")),
                        1
                        /* TEXT */
                      )
                    ];
                  }),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "text-color", "color", "onClick"])) : X("v-if", !0),
                e.confirmButton ? (h(), Pe(o, {
                  key: 1,
                  class: p(e.classes(e.n("button"), e.n("confirm-button"))),
                  "var-dialog-cover": "",
                  text: "",
                  "text-color": e.confirmButtonTextColor,
                  color: e.confirmButtonColor,
                  onClick: e.confirm
                }, {
                  default: fe(() => {
                    var r;
                    return [
                      Be(
                        re((r = e.confirmButtonText) != null ? r : (e.pt ? e.pt : e.t)("dialogConfirmButtonText")),
                        1
                        /* TEXT */
                      )
                    ];
                  }),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "text-color", "color", "onClick"])) : X("v-if", !0)
              ],
              2
              /* CLASS */
            )
          ])
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "show", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onKeyEscape", "onRouteChange", "onClickOverlay"]);
}
const Fp = x({
  name: Qk,
  components: {
    VarPopup: Po,
    VarButton: Pn
  },
  inheritAttrs: !1,
  props: Rp,
  setup(e) {
    const n = k(!1), o = k(!1), { t } = ao();
    de(
      () => e.show,
      (u) => {
        n.value = u;
      },
      { immediate: !0 }
    ), de(
      () => e.closeOnClickOverlay,
      (u) => {
        if (e.onBeforeClose != null) {
          o.value = !1;
          return;
        }
        o.value = u;
      },
      { immediate: !0 }
    );
    function r() {
      return S(e["onUpdate:show"], !1);
    }
    function a() {
      const { closeOnClickOverlay: u, onClickOverlay: c, onBeforeClose: d } = e;
      if (S(c), !!u) {
        if (d != null) {
          S(d, "close", r);
          return;
        }
        S(e["onUpdate:show"], !1);
      }
    }
    function i() {
      const { onBeforeClose: u, onConfirm: c } = e;
      if (S(c), u != null) {
        S(u, "confirm", r);
        return;
      }
      S(e["onUpdate:show"], !1);
    }
    function l() {
      const { onBeforeClose: u, onCancel: c } = e;
      if (S(c), u != null) {
        S(u, "cancel", r);
        return;
      }
      S(e["onUpdate:show"], !1);
    }
    function s() {
      S(e.onKeyEscape), e.closeOnKeyEscape && l();
    }
    return {
      popupShow: n,
      popupCloseOnClickOverlay: o,
      pt: t,
      t: rn,
      n: _k,
      classes: xk,
      handleClickOverlay: a,
      confirm: i,
      cancel: l,
      toSizeUnit: Oe,
      handleKeyEscape: s
    };
  }
});
Fp.render = e$;
var Qt = Fp, n$ = Object.defineProperty, o$ = Object.defineProperties, t$ = Object.getOwnPropertyDescriptors, _u = Object.getOwnPropertySymbols, r$ = Object.prototype.hasOwnProperty, a$ = Object.prototype.propertyIsEnumerable, xu = (e, n, o) => n in e ? n$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Oi = (e, n) => {
  for (var o in n || (n = {}))
    r$.call(n, o) && xu(e, o, n[o]);
  if (_u)
    for (var o of _u(n))
      a$.call(n, o) && xu(e, o, n[o]);
  return e;
}, i$ = (e, n) => o$(e, t$(n));
let bo, Mr = {};
function l$(e = {}) {
  return gn(e) ? i$(Oi({}, Mr), { message: e }) : Oi(Oi({}, Mr), e);
}
function Io(e) {
  return to() ? new Promise((n) => {
    Io.close();
    const o = l$(e), t = Qe(o);
    t.teleport = "body", bo = t;
    const { unmountInstance: r } = ht(Qt, t, {
      onConfirm: () => {
        S(t.onConfirm), n("confirm");
      },
      onCancel: () => {
        S(t.onCancel), n("cancel");
      },
      onClose: () => {
        S(t.onClose), n("close");
      },
      onClosed: () => {
        S(t.onClosed), r(), bo === t && (bo = null);
      },
      onRouteChange: () => {
        r(), bo === t && (bo = null);
      },
      "onUpdate:show": (a) => {
        t.show = a;
      }
    });
    t.show = !0;
  }) : Promise.resolve();
}
Io.setDefaultOptions = function(e) {
  Mr = e;
};
Io.resetDefaultOptions = function() {
  Mr = {};
};
Io.close = function() {
  if (bo != null) {
    const e = bo;
    bo = null, Ke().then(() => {
      e.show = !1;
    });
  }
};
Io.Component = Qt;
te(Qt);
te(Qt, Io);
ue(Io, Rp);
const I5 = Qt;
var vl = Io;
const Up = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: Boolean,
  description: String,
  margin: String,
  dashed: Boolean,
  hairline: Boolean
}, { name: s$, n: u$, classes: c$ } = ee("divider");
function d$(e, n) {
  return h(), P(
    "div",
    {
      class: p(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.vertical, e.n("--vertical")],
          [e.withText, e.n("--with-text")],
          [e.withPresetInset, e.n("--inset")],
          [e.dashed, e.n("--dashed")],
          [e.hairline, e.n("--hairline")]
        )
      ),
      style: K(e.style),
      role: "separator"
    },
    [
      e.vertical ? X("v-if", !0) : L(e.$slots, "default", { key: 0 }, () => [
        e.description ? (h(), P(
          "span",
          {
            key: 0,
            class: p(e.n("text"))
          },
          re(e.description),
          3
          /* TEXT, CLASS */
        )) : X("v-if", !0)
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const Hp = x({
  name: s$,
  props: Up,
  setup(e, { slots: n }) {
    const o = k(!1), t = B(() => {
      const { vertical: i, inset: l } = e;
      return !i && l === !0;
    }), r = B(() => {
      const { inset: i, vertical: l, margin: s } = e;
      if (rs(i) || l)
        return { margin: s };
      const u = F(i), c = Math.abs(u) + (i + "").replace(u + "", "");
      return {
        margin: s,
        width: `calc(100% - ${Oe(c)})`,
        left: u > 0 ? Oe(c) : Oe(0)
      };
    });
    pn(a), Wt(a);
    function a() {
      const { description: i, vertical: l } = e;
      o.value = (n.default || i != null) && !l;
    }
    return {
      n: u$,
      classes: c$,
      withText: o,
      style: r,
      withPresetInset: t
    };
  }
});
Hp.render = d$;
var za = Hp;
te(za);
ue(za, Up);
const M5 = za;
var ml = za;
const Yp = {
  direction: {
    type: String,
    default: "xy"
  },
  attraction: String,
  disabled: Boolean,
  boundary: {
    type: Object,
    default: () => ({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    })
  },
  zIndex: {
    type: [Number, String],
    default: 90
  },
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  onClick: R()
};
var f$ = Object.defineProperty, p$ = Object.defineProperties, v$ = Object.getOwnPropertyDescriptors, ec = Object.getOwnPropertySymbols, m$ = Object.prototype.hasOwnProperty, h$ = Object.prototype.propertyIsEnumerable, nc = (e, n, o) => n in e ? f$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, oc = (e, n) => {
  for (var o in n || (n = {}))
    m$.call(n, o) && nc(e, o, n[o]);
  if (ec)
    for (var o of ec(n))
      h$.call(n, o) && nc(e, o, n[o]);
  return e;
}, tc = (e, n) => p$(e, v$(n)), g$ = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: b$, n: y$, classes: k$ } = ee("drag");
function $$(e, n) {
  return h(), Pe(no, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    I(
      "div",
      Ye({
        ref: "drag",
        class: e.classes(e.n(), e.n("$--box"), [e.enableTransition, e.n("--transition")]),
        style: {
          "z-index": e.zIndex
        },
        onTouchstart: n[0] || (n[0] = (...o) => e.handleTouchstart && e.handleTouchstart(...o)),
        onTouchmove: n[1] || (n[1] = (...o) => e.handleTouchmove && e.handleTouchmove(...o)),
        onTouchend: n[2] || (n[2] = (...o) => e.handleTouchend && e.handleTouchend(...o)),
        onTouchcancel: n[3] || (n[3] = (...o) => e.handleTouchend && e.handleTouchend(...o)),
        onClick: n[4] || (n[4] = (...o) => e.handleClick && e.handleClick(...o))
      }, e.getAttrs()),
      [
        L(e.$slots, "default")
      ],
      16
      /* FULL_PROPS */
    )
  ], 8, ["to", "disabled"]);
}
const jp = x({
  name: b$,
  inheritAttrs: !1,
  props: Yp,
  setup(e, { attrs: n }) {
    const o = k(null), t = k(0), r = k(0), a = k(!1), i = k(!1), { touching: l, dragging: s, moveX: u, moveY: c, startTouch: d, moveTouch: f, endTouch: v, resetTouch: y } = mt(), { disabled: m } = Go(), b = Qe({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    de(() => e.boundary, D), ro(H), pn(() => {
      D(), H();
    });
    function C(N) {
      e.disabled || (d(N), O());
    }
    function w(N) {
      return g$(this, null, function* () {
        !l.value || e.disabled || (f(N), Re(N), i.value = !1, a.value = !0, e.direction.includes("x") && (t.value += u.value), e.direction.includes("y") && (r.value += c.value), E());
      });
    }
    function g() {
      e.disabled || (v(), i.value = !0, T());
    }
    function $(N) {
      s.value || S(e.onClick, N);
    }
    function O() {
      const { left: N, top: q } = z();
      t.value = N, r.value = q;
    }
    function z() {
      const N = an(o.value), q = an(window), j = N.top - q.top, ce = q.bottom - N.bottom, _ = N.left - q.left, pe = q.right - N.right, { width: ye, height: ie } = N, { width: U, height: J } = q;
      return {
        top: j,
        bottom: ce,
        left: _,
        right: pe,
        width: ye,
        height: ie,
        halfWidth: ye / 2,
        halfHeight: ie / 2,
        windowWidth: U,
        windowHeight: J
      };
    }
    function A() {
      const N = z(), q = b.left, j = N.windowWidth - b.right - N.width, ce = b.top, _ = N.windowHeight - b.bottom - N.height;
      return {
        minX: q,
        minY: ce,
        // fallback the drag element overflows boundary
        maxX: q < j ? j : q,
        maxY: ce < _ ? _ : ce
      };
    }
    function T() {
      if (e.attraction == null)
        return;
      const { halfWidth: N, halfHeight: q, top: j, bottom: ce, left: _, right: pe } = z(), { minX: ye, minY: ie, maxX: U, maxY: J } = A(), ae = _ + N - b.left, V = pe + N - b.right, W = j + q - b.top, Q = ce + q - b.bottom, ke = ae <= V, Ce = W <= Q;
      e.attraction.includes("x") && (t.value = ke ? ye : U), e.attraction.includes("y") && (r.value = Ce ? ie : J);
    }
    function E() {
      const { minX: N, minY: q, maxX: j, maxY: ce } = A();
      t.value = Mn(t.value, N, j), r.value = Mn(r.value, q, ce);
    }
    function D() {
      const { top: N = 0, bottom: q = 0, left: j = 0, right: ce = 0 } = e.boundary;
      b.top = en(N), b.bottom = en(q), b.left = en(j), b.right = en(ce);
    }
    function M() {
      var N;
      const q = (N = n.style) != null ? N : {};
      return tc(oc({}, n), {
        style: tc(oc({}, q), {
          // when the drag element is dragged for the first time, the inset should be cleared to avoid affecting translateX and translateY.
          top: a.value ? 0 : q.top,
          left: a.value ? 0 : q.left,
          right: a.value ? "auto" : q.right,
          bottom: a.value ? "auto" : q.bottom,
          transform: a.value ? `translate(${t.value}px, ${r.value}px)` : q.transform
        })
      });
    }
    function H() {
      a.value && (O(), E());
    }
    function Y() {
      y(), i.value = !1, a.value = !1, t.value = 0, r.value = 0;
    }
    return {
      drag: o,
      x: t,
      y: r,
      enableTransition: i,
      dragging: s,
      teleportDisabled: m,
      n: y$,
      classes: k$,
      getAttrs: M,
      handleTouchstart: C,
      handleTouchmove: w,
      handleTouchend: g,
      handleClick: $,
      resize: H,
      reset: Y
    };
  }
});
jp.render = $$;
var Oa = jp;
te(Oa);
ue(Oa, Yp);
const N5 = Oa;
var Nr = Oa, w$ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function yr(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return w$[n];
  });
}
var uo = "top", To = "bottom", Uo = "right", Co = "left", Ss = "auto", Ta = [uo, To, Uo, Co], Ea = "start", Nt = "end", C$ = "clippingParents", Wp = "viewport", $t = "popper", S$ = "reference", rc = /* @__PURE__ */ Ta.reduce(function(e, n) {
  return e.concat([n + "-" + Ea, n + "-" + Nt]);
}, []), Kp = /* @__PURE__ */ [].concat(Ta, [Ss]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Ea, n + "-" + Nt]);
}, []), P$ = "beforeRead", z$ = "read", O$ = "afterRead", T$ = "beforeMain", E$ = "main", D$ = "afterMain", B$ = "beforeWrite", I$ = "write", M$ = "afterWrite", N$ = [P$, z$, O$, T$, E$, D$, B$, I$, M$];
function So(e) {
  return e.split("-")[0];
}
var A$ = {
  start: "end",
  end: "start"
};
function ac(e) {
  return e.replace(/start|end/g, function(n) {
    return A$[n];
  });
}
function Wn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Ho(e) {
  var n = Wn(e).Element;
  return e instanceof n || e instanceof Element;
}
function Un(e) {
  var n = Wn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Ps(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Wn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function Mo(e) {
  return ((Ho(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var zt = Math.max, ic = Math.min, dt = Math.round;
function hl() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function qp() {
  return !/^((?!chrome|android).)*safari/i.test(hl());
}
function ft(e, n, o) {
  n === void 0 && (n = !1), o === void 0 && (o = !1);
  var t = e.getBoundingClientRect(), r = 1, a = 1;
  n && Un(e) && (r = e.offsetWidth > 0 && dt(t.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && dt(t.height) / e.offsetHeight || 1);
  var i = Ho(e) ? Wn(e) : window, l = i.visualViewport, s = !qp() && o, u = (t.left + (s && l ? l.offsetLeft : 0)) / r, c = (t.top + (s && l ? l.offsetTop : 0)) / a, d = t.width / r, f = t.height / a;
  return {
    width: d,
    height: f,
    top: c,
    right: u + d,
    bottom: c + f,
    left: u,
    x: u,
    y: c
  };
}
function zs(e) {
  var n = Wn(e), o = n.pageXOffset, t = n.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: t
  };
}
function Os(e) {
  return ft(Mo(e)).left + zs(e).scrollLeft;
}
function V$(e, n) {
  var o = Wn(e), t = Mo(e), r = o.visualViewport, a = t.clientWidth, i = t.clientHeight, l = 0, s = 0;
  if (r) {
    a = r.width, i = r.height;
    var u = qp();
    (u || !u && n === "fixed") && (l = r.offsetLeft, s = r.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: l + Os(e),
    y: s
  };
}
function co(e) {
  return Wn(e).getComputedStyle(e);
}
function L$(e) {
  var n, o = Mo(e), t = zs(e), r = (n = e.ownerDocument) == null ? void 0 : n.body, a = zt(o.scrollWidth, o.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = zt(o.scrollHeight, o.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -t.scrollLeft + Os(e), s = -t.scrollTop;
  return co(r || o).direction === "rtl" && (l += zt(o.clientWidth, r ? r.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: s
  };
}
function xn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Da(e) {
  return xn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ps(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Mo(e)
  );
}
function Ts(e) {
  var n = co(e), o = n.overflow, t = n.overflowX, r = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + r + t);
}
function Gp(e) {
  return ["html", "body", "#document"].indexOf(xn(e)) >= 0 ? e.ownerDocument.body : Un(e) && Ts(e) ? e : Gp(Da(e));
}
function Ot(e, n) {
  var o;
  n === void 0 && (n = []);
  var t = Gp(e), r = t === ((o = e.ownerDocument) == null ? void 0 : o.body), a = Wn(t), i = r ? [a].concat(a.visualViewport || [], Ts(t) ? t : []) : t, l = n.concat(i);
  return r ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Ot(Da(i)))
  );
}
function R$(e) {
  return ["table", "td", "th"].indexOf(xn(e)) >= 0;
}
function lc(e) {
  return !Un(e) || // https://github.com/popperjs/popper-core/issues/837
  co(e).position === "fixed" ? null : e.offsetParent;
}
function F$(e) {
  var n = /firefox/i.test(hl()), o = /Trident/i.test(hl());
  if (o && Un(e)) {
    var t = co(e);
    if (t.position === "fixed")
      return null;
  }
  var r = Da(e);
  for (Ps(r) && (r = r.host); Un(r) && ["html", "body"].indexOf(xn(r)) < 0; ) {
    var a = co(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || n && a.willChange === "filter" || n && a.filter && a.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function Es(e) {
  for (var n = Wn(e), o = lc(e); o && R$(o) && co(o).position === "static"; )
    o = lc(o);
  return o && (xn(o) === "html" || xn(o) === "body" && co(o).position === "static") ? n : o || F$(e) || n;
}
function U$(e, n) {
  var o = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (o && Ps(o)) {
    var t = n;
    do {
      if (t && e.isSameNode(t))
        return !0;
      t = t.parentNode || t.host;
    } while (t);
  }
  return !1;
}
function gl(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function H$(e, n) {
  var o = ft(e, !1, n === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function sc(e, n, o) {
  return n === Wp ? gl(V$(e, o)) : Ho(n) ? H$(n, o) : gl(L$(Mo(e)));
}
function Y$(e) {
  var n = Ot(Da(e)), o = ["absolute", "fixed"].indexOf(co(e).position) >= 0, t = o && Un(e) ? Es(e) : e;
  return Ho(t) ? n.filter(function(r) {
    return Ho(r) && U$(r, t) && xn(r) !== "body";
  }) : [];
}
function j$(e, n, o, t) {
  var r = n === "clippingParents" ? Y$(e) : [].concat(n), a = [].concat(r, [o]), i = a[0], l = a.reduce(function(s, u) {
    var c = sc(e, u, t);
    return s.top = zt(c.top, s.top), s.right = ic(c.right, s.right), s.bottom = ic(c.bottom, s.bottom), s.left = zt(c.left, s.left), s;
  }, sc(e, i, t));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function At(e) {
  return e.split("-")[1];
}
function W$(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Xp(e) {
  var n = e.reference, o = e.element, t = e.placement, r = t ? So(t) : null, a = t ? At(t) : null, i = n.x + n.width / 2 - o.width / 2, l = n.y + n.height / 2 - o.height / 2, s;
  switch (r) {
    case uo:
      s = {
        x: i,
        y: n.y - o.height
      };
      break;
    case To:
      s = {
        x: i,
        y: n.y + n.height
      };
      break;
    case Uo:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case Co:
      s = {
        x: n.x - o.width,
        y: l
      };
      break;
    default:
      s = {
        x: n.x,
        y: n.y
      };
  }
  var u = r ? W$(r) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case Ea:
        s[u] = s[u] - (n[c] / 2 - o[c] / 2);
        break;
      case Nt:
        s[u] = s[u] + (n[c] / 2 - o[c] / 2);
        break;
    }
  }
  return s;
}
function K$() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function q$(e) {
  return Object.assign({}, K$(), e);
}
function G$(e, n) {
  return n.reduce(function(o, t) {
    return o[t] = e, o;
  }, {});
}
function Zp(e, n) {
  n === void 0 && (n = {});
  var o = n, t = o.placement, r = t === void 0 ? e.placement : t, a = o.strategy, i = a === void 0 ? e.strategy : a, l = o.boundary, s = l === void 0 ? C$ : l, u = o.rootBoundary, c = u === void 0 ? Wp : u, d = o.elementContext, f = d === void 0 ? $t : d, v = o.altBoundary, y = v === void 0 ? !1 : v, m = o.padding, b = m === void 0 ? 0 : m, C = q$(typeof b != "number" ? b : G$(b, Ta)), w = f === $t ? S$ : $t, g = e.rects.popper, $ = e.elements[y ? w : f], O = j$(Ho($) ? $ : $.contextElement || Mo(e.elements.popper), s, c, i), z = ft(e.elements.reference), A = Xp({
    reference: z,
    element: g,
    strategy: "absolute",
    placement: r
  }), T = gl(Object.assign({}, g, A)), E = f === $t ? T : z, D = {
    top: O.top - E.top + C.top,
    bottom: E.bottom - O.bottom + C.bottom,
    left: O.left - E.left + C.left,
    right: E.right - O.right + C.right
  }, M = e.modifiersData.offset;
  if (f === $t && M) {
    var H = M[r];
    Object.keys(D).forEach(function(Y) {
      var N = [Uo, To].indexOf(Y) >= 0 ? 1 : -1, q = [uo, To].indexOf(Y) >= 0 ? "y" : "x";
      D[Y] += H[q] * N;
    });
  }
  return D;
}
function X$(e, n) {
  n === void 0 && (n = {});
  var o = n, t = o.placement, r = o.boundary, a = o.rootBoundary, i = o.padding, l = o.flipVariations, s = o.allowedAutoPlacements, u = s === void 0 ? Kp : s, c = At(t), d = c ? l ? rc : rc.filter(function(y) {
    return At(y) === c;
  }) : Ta, f = d.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  f.length === 0 && (f = d);
  var v = f.reduce(function(y, m) {
    return y[m] = Zp(e, {
      placement: m,
      boundary: r,
      rootBoundary: a,
      padding: i
    })[So(m)], y;
  }, {});
  return Object.keys(v).sort(function(y, m) {
    return v[y] - v[m];
  });
}
function Z$(e) {
  if (So(e) === Ss)
    return [];
  var n = yr(e);
  return [ac(e), n, ac(n)];
}
function J$(e) {
  var n = e.state, o = e.options, t = e.name;
  if (!n.modifiersData[t]._skip) {
    for (var r = o.mainAxis, a = r === void 0 ? !0 : r, i = o.altAxis, l = i === void 0 ? !0 : i, s = o.fallbackPlacements, u = o.padding, c = o.boundary, d = o.rootBoundary, f = o.altBoundary, v = o.flipVariations, y = v === void 0 ? !0 : v, m = o.allowedAutoPlacements, b = n.options.placement, C = So(b), w = C === b, g = s || (w || !y ? [yr(b)] : Z$(b)), $ = [b].concat(g).reduce(function(ae, V) {
      return ae.concat(So(V) === Ss ? X$(n, {
        placement: V,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: m
      }) : V);
    }, []), O = n.rects.reference, z = n.rects.popper, A = /* @__PURE__ */ new Map(), T = !0, E = $[0], D = 0; D < $.length; D++) {
      var M = $[D], H = So(M), Y = At(M) === Ea, N = [uo, To].indexOf(H) >= 0, q = N ? "width" : "height", j = Zp(n, {
        placement: M,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), ce = N ? Y ? Uo : Co : Y ? To : uo;
      O[q] > z[q] && (ce = yr(ce));
      var _ = yr(ce), pe = [];
      if (a && pe.push(j[H] <= 0), l && pe.push(j[ce] <= 0, j[_] <= 0), pe.every(function(ae) {
        return ae;
      })) {
        E = M, T = !1;
        break;
      }
      A.set(M, pe);
    }
    if (T)
      for (var ye = y ? 3 : 1, ie = function(V) {
        var W = $.find(function(Q) {
          var ke = A.get(Q);
          if (ke)
            return ke.slice(0, V).every(function(Ce) {
              return Ce;
            });
        });
        if (W)
          return E = W, "break";
      }, U = ye; U > 0; U--) {
        var J = ie(U);
        if (J === "break")
          break;
      }
    n.placement !== E && (n.modifiersData[t]._skip = !0, n.placement = E, n.reset = !0);
  }
}
const Q$ = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: J$,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function _$(e, n, o) {
  var t = So(e), r = [Co, uo].indexOf(t) >= 0 ? -1 : 1, a = typeof o == "function" ? o(Object.assign({}, n, {
    placement: e
  })) : o, i = a[0], l = a[1];
  return i = i || 0, l = (l || 0) * r, [Co, Uo].indexOf(t) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function x$(e) {
  var n = e.state, o = e.options, t = e.name, r = o.offset, a = r === void 0 ? [0, 0] : r, i = Kp.reduce(function(c, d) {
    return c[d] = _$(d, n.rects, a), c;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[t] = i;
}
const ew = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: x$
};
var nw = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ow(e) {
  var n = e.x, o = e.y, t = window, r = t.devicePixelRatio || 1;
  return {
    x: dt(n * r) / r || 0,
    y: dt(o * r) / r || 0
  };
}
function uc(e) {
  var n, o = e.popper, t = e.popperRect, r = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = i.x, v = f === void 0 ? 0 : f, y = i.y, m = y === void 0 ? 0 : y, b = typeof c == "function" ? c({
    x: v,
    y: m
  }) : {
    x: v,
    y: m
  };
  v = b.x, m = b.y;
  var C = i.hasOwnProperty("x"), w = i.hasOwnProperty("y"), g = Co, $ = uo, O = window;
  if (u) {
    var z = Es(o), A = "clientHeight", T = "clientWidth";
    if (z === Wn(o) && (z = Mo(o), co(z).position !== "static" && l === "absolute" && (A = "scrollHeight", T = "scrollWidth")), z = z, r === uo || (r === Co || r === Uo) && a === Nt) {
      $ = To;
      var E = d && z === O && O.visualViewport ? O.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        z[A]
      );
      m -= E - t.height, m *= s ? 1 : -1;
    }
    if (r === Co || (r === uo || r === To) && a === Nt) {
      g = Uo;
      var D = d && z === O && O.visualViewport ? O.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        z[T]
      );
      v -= D - t.width, v *= s ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: l
  }, u && nw), H = c === !0 ? ow({
    x: v,
    y: m
  }) : {
    x: v,
    y: m
  };
  if (v = H.x, m = H.y, s) {
    var Y;
    return Object.assign({}, M, (Y = {}, Y[$] = w ? "0" : "", Y[g] = C ? "0" : "", Y.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + m + "px)" : "translate3d(" + v + "px, " + m + "px, 0)", Y));
  }
  return Object.assign({}, M, (n = {}, n[$] = w ? m + "px" : "", n[g] = C ? v + "px" : "", n.transform = "", n));
}
function tw(e) {
  var n = e.state, o = e.options, t = o.gpuAcceleration, r = t === void 0 ? !0 : t, a = o.adaptive, i = a === void 0 ? !0 : a, l = o.roundOffsets, s = l === void 0 ? !0 : l, u = {
    placement: So(n.placement),
    variation: At(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: r,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, uc(Object.assign({}, u, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, uc(Object.assign({}, u, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Jp = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: tw,
  data: {}
};
function rw(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function aw(e) {
  return e === Wn(e) || !Un(e) ? zs(e) : rw(e);
}
function iw(e) {
  var n = e.getBoundingClientRect(), o = dt(n.width) / e.offsetWidth || 1, t = dt(n.height) / e.offsetHeight || 1;
  return o !== 1 || t !== 1;
}
function lw(e, n, o) {
  o === void 0 && (o = !1);
  var t = Un(n), r = Un(n) && iw(n), a = Mo(n), i = ft(e, r, o), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (t || !t && !o) && ((xn(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ts(a)) && (l = aw(n)), Un(n) ? (s = ft(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : a && (s.x = Os(a))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function sw(e) {
  var n = ft(e), o = e.offsetWidth, t = e.offsetHeight;
  return Math.abs(n.width - o) <= 1 && (o = n.width), Math.abs(n.height - t) <= 1 && (t = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: t
  };
}
function uw(e) {
  var n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), t = [];
  e.forEach(function(a) {
    n.set(a.name, a);
  });
  function r(a) {
    o.add(a.name);
    var i = [].concat(a.requires || [], a.requiresIfExists || []);
    i.forEach(function(l) {
      if (!o.has(l)) {
        var s = n.get(l);
        s && r(s);
      }
    }), t.push(a);
  }
  return e.forEach(function(a) {
    o.has(a.name) || r(a);
  }), t;
}
function cw(e) {
  var n = uw(e);
  return N$.reduce(function(o, t) {
    return o.concat(n.filter(function(r) {
      return r.phase === t;
    }));
  }, []);
}
function dw(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(o) {
      Promise.resolve().then(function() {
        n = void 0, o(e());
      });
    })), n;
  };
}
function fw(e) {
  var n = e.reduce(function(o, t) {
    var r = o[t.name];
    return o[t.name] = r ? Object.assign({}, r, t, {
      options: Object.assign({}, r.options, t.options),
      data: Object.assign({}, r.data, t.data)
    }) : t, o;
  }, {});
  return Object.keys(n).map(function(o) {
    return n[o];
  });
}
var cc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function dc() {
  for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
    n[o] = arguments[o];
  return !n.some(function(t) {
    return !(t && typeof t.getBoundingClientRect == "function");
  });
}
function pw(e) {
  e === void 0 && (e = {});
  var n = e, o = n.defaultModifiers, t = o === void 0 ? [] : o, r = n.defaultOptions, a = r === void 0 ? cc : r;
  return function(l, s, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, cc, a),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, v = {
      state: c,
      setOptions: function(C) {
        var w = typeof C == "function" ? C(c.options) : C;
        m(), c.options = Object.assign({}, a, c.options, w), c.scrollParents = {
          reference: Ho(l) ? Ot(l) : l.contextElement ? Ot(l.contextElement) : [],
          popper: Ot(s)
        };
        var g = cw(fw([].concat(t, c.options.modifiers)));
        return c.orderedModifiers = g.filter(function($) {
          return $.enabled;
        }), y(), v.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var C = c.elements, w = C.reference, g = C.popper;
          if (dc(w, g)) {
            c.rects = {
              reference: lw(w, Es(g), c.options.strategy === "fixed"),
              popper: sw(g)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(D) {
              return c.modifiersData[D.name] = Object.assign({}, D.data);
            });
            for (var $ = 0; $ < c.orderedModifiers.length; $++) {
              if (c.reset === !0) {
                c.reset = !1, $ = -1;
                continue;
              }
              var O = c.orderedModifiers[$], z = O.fn, A = O.options, T = A === void 0 ? {} : A, E = O.name;
              typeof z == "function" && (c = z({
                state: c,
                options: T,
                name: E,
                instance: v
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: dw(function() {
        return new Promise(function(b) {
          v.forceUpdate(), b(c);
        });
      }),
      destroy: function() {
        m(), f = !0;
      }
    };
    if (!dc(l, s))
      return v;
    v.setOptions(u).then(function(b) {
      !f && u.onFirstUpdate && u.onFirstUpdate(b);
    });
    function y() {
      c.orderedModifiers.forEach(function(b) {
        var C = b.name, w = b.options, g = w === void 0 ? {} : w, $ = b.effect;
        if (typeof $ == "function") {
          var O = $({
            state: c,
            name: C,
            instance: v,
            options: g
          }), z = function() {
          };
          d.push(O || z);
        }
      });
    }
    function m() {
      d.forEach(function(b) {
        return b();
      }), d = [];
    }
    return v;
  };
}
var sr = {
  passive: !0
};
function vw(e) {
  var n = e.state, o = e.instance, t = e.options, r = t.scroll, a = r === void 0 ? !0 : r, i = t.resize, l = i === void 0 ? !0 : i, s = Wn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", o.update, sr);
  }), l && s.addEventListener("resize", o.update, sr), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", o.update, sr);
    }), l && s.removeEventListener("resize", o.update, sr);
  };
}
const mw = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: vw,
  data: {}
};
function hw(e) {
  var n = e.state, o = e.name;
  n.modifiersData[o] = Xp({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const gw = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: hw,
  data: {}
};
function bw(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(o) {
    var t = n.styles[o] || {}, r = n.attributes[o] || {}, a = n.elements[o];
    !Un(a) || !xn(a) || (Object.assign(a.style, t), Object.keys(r).forEach(function(i) {
      var l = r[i];
      l === !1 ? a.removeAttribute(i) : a.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function yw(e) {
  var n = e.state, o = {
    popper: {
      position: n.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(n.elements.popper.style, o.popper), n.styles = o, n.elements.arrow && Object.assign(n.elements.arrow.style, o.arrow), function() {
    Object.keys(n.elements).forEach(function(t) {
      var r = n.elements[t], a = n.attributes[t] || {}, i = Object.keys(n.styles.hasOwnProperty(t) ? n.styles[t] : o[t]), l = i.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !Un(r) || !xn(r) || (Object.assign(r.style, l), Object.keys(a).forEach(function(s) {
        r.removeAttribute(s);
      }));
    });
  };
}
const kw = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: bw,
  effect: yw,
  requires: ["computeStyles"]
};
var $w = [mw, gw, Jp, kw], ww = /* @__PURE__ */ pw({
  defaultModifiers: $w
}), Cw = Object.defineProperty, Sw = Object.defineProperties, Pw = Object.getOwnPropertyDescriptors, fc = Object.getOwnPropertySymbols, zw = Object.prototype.hasOwnProperty, Ow = Object.prototype.propertyIsEnumerable, pc = (e, n, o) => n in e ? Cw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Ti = (e, n) => {
  for (var o in n || (n = {}))
    zw.call(n, o) && pc(e, o, n[o]);
  if (fc)
    for (var o of fc(n))
      Ow.call(n, o) && pc(e, o, n[o]);
  return e;
}, Ei = (e, n) => Sw(e, Pw(n)), vc = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
function Qp(e) {
  const n = k(null), o = k(null), t = k({ width: 0, height: 0 }), r = Zn(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(D, M) {
      S(M ? e.onOpen : e.onClose);
    }
  }), { zIndex: a } = Xt(() => r.value, 1);
  us(() => r.value, a);
  let i = null, l = !1, s = !1;
  const u = () => {
    if (!n.value)
      return;
    const { width: D, height: M } = qo(n.value);
    t.value = {
      width: en(D),
      height: en(M)
    };
  }, c = () => {
    switch (e.placement) {
      case "top":
      case "cover-bottom":
        return "bottom";
      case "top-start":
      case "right-end":
      case "cover-bottom-start":
        return "bottom left";
      case "top-end":
      case "left-end":
      case "cover-bottom-end":
        return "bottom right";
      case "bottom":
      case "cover-top":
        return "top";
      case "bottom-start":
      case "right-start":
      case "cover-top-start":
        return "top left";
      case "bottom-end":
      case "left-start":
      case "cover-top-end":
        return "top right";
      case "left":
      case "cover-right":
        return "right";
      case "right":
      case "cover-left":
        return "left";
    }
  }, d = () => {
    e.trigger === "hover" && (s = !0, T());
  }, f = () => vc(this, null, function* () {
    e.trigger === "hover" && (s = !1, yield $n(), !l && E());
  }), v = () => {
    e.trigger === "hover" && (l = !0);
  }, y = () => vc(this, null, function* () {
    e.trigger === "hover" && (l = !1, yield $n(), !s && E());
  }), m = () => {
    e.closeOnClickReference && r.value ? E() : T();
  }, b = () => {
    E();
  }, C = (D) => {
    e.trigger === "click" && (b(), S(e.onClickOutside, D));
  }, w = () => {
    A(), S(e.onClosed);
  }, g = () => {
    const { offsetX: D, offsetY: M, placement: H } = e;
    u();
    const Y = {
      x: en(D),
      y: en(M)
    };
    switch (H) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: Y.x,
          distance: Y.y - t.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: Y.x,
          distance: Y.y - t.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: Y.x,
          distance: Y.y - t.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: Y.x,
          distance: -Y.y - t.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: Y.x,
          distance: -Y.y - t.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: Y.x,
          distance: -Y.y - t.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: Y.y,
          distance: Y.x - t.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: Y.y,
          distance: -Y.x - t.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: H,
          skidding: Y.y,
          distance: -Y.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: H,
          skidding: Y.x,
          distance: -Y.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: H,
          skidding: Y.x,
          distance: Y.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: H,
          skidding: Y.y,
          distance: Y.x
        };
    }
  }, $ = () => {
    const { placement: D, skidding: M, distance: H } = g(), Y = [
      Ei(Ti({}, Q$), {
        enabled: r.value
      }),
      Ei(Ti({}, ew), {
        options: {
          offset: [M, H]
        }
      }),
      Ei(Ti({}, Jp), {
        options: {
          adaptive: !1,
          gpuAcceleration: !1
        },
        enabled: r.value
      }),
      {
        name: "applyTransformOrigin",
        enabled: r.value,
        phase: "beforeWrite",
        fn({ state: N }) {
          N.styles.popper.transformOrigin = c();
        }
      }
    ];
    return {
      placement: D,
      modifiers: Y,
      strategy: e.strategy
    };
  }, O = () => e.reference ? n.value.querySelector(e.reference) : n.value, z = (D) => {
    const { closeOnKeyEscape: M = !1 } = e;
    D.key === "Escape" && M && r.value && (Re(D), E());
  }, A = () => {
    i.setOptions($());
  }, T = () => {
    e.disabled || (r.value = !0, S(e["onUpdate:show"], !0));
  }, E = () => {
    r.value = !1, S(e["onUpdate:show"], !1);
  };
  return We(() => window, "keydown", z), zd(O, "click", C), ro(A), de(() => [e.offsetX, e.offsetY, e.placement, e.strategy], A), de(() => e.disabled, E), de(
    () => r.value,
    (D) => {
      D && A();
    }
  ), Yo(() => {
    var D;
    i = ww((D = O()) != null ? D : n.value, o.value, $());
  }), jt(() => {
    i.destroy();
  }), {
    show: r,
    popover: o,
    zIndex: a,
    host: n,
    hostSize: t,
    handleHostClick: m,
    handleHostMouseenter: d,
    handleHostMouseleave: f,
    handlePopoverClose: b,
    handlePopoverMouseenter: v,
    handlePopoverMouseleave: y,
    handleClosed: w,
    resize: A,
    open: T,
    close: E
  };
}
const _p = {
  type: {
    type: String,
    default: "default"
  },
  color: String,
  content: String,
  show: Boolean,
  disabled: Boolean,
  trigger: {
    type: String,
    default: "hover"
  },
  reference: String,
  placement: {
    type: String,
    default: "bottom"
  },
  strategy: {
    type: String,
    default: "absolute"
  },
  offsetX: {
    type: [Number, String],
    default: 0
  },
  offsetY: {
    type: [Number, String],
    default: 0
  },
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  sameWidth: Boolean,
  closeOnClickReference: Boolean,
  closeOnKeyEscape: {
    type: Boolean,
    default: !0
  },
  onOpen: R(),
  onOpened: R(),
  onClose: R(),
  onClosed: R(),
  onClickOutside: R(),
  "onUpdate:show": R()
}, { name: Tw, n: Ew, classes: Dw } = ee("tooltip");
function Bw(e, n) {
  return h(), P(
    "div",
    {
      ref: "host",
      class: p(e.classes(e.n(), e.n("$--box"))),
      onClick: n[3] || (n[3] = (...o) => e.handleHostClick && e.handleHostClick(...o)),
      onMouseenter: n[4] || (n[4] = (...o) => e.handleHostMouseenter && e.handleHostMouseenter(...o)),
      onMouseleave: n[5] || (n[5] = (...o) => e.handleHostMouseleave && e.handleHostMouseleave(...o))
    },
    [
      L(e.$slots, "default"),
      (h(), Pe(no, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        G(_e, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: fe(() => [
            Me(I(
              "div",
              {
                ref: "popover",
                class: p(e.classes(e.n("tooltip"), e.n("$--box"))),
                style: K({ zIndex: e.zIndex }),
                onClick: n[0] || (n[0] = An(() => {
                }, ["stop"])),
                onMouseenter: n[1] || (n[1] = (...o) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...o)),
                onMouseleave: n[2] || (n[2] = (...o) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...o))
              },
              [
                I(
                  "div",
                  {
                    style: K({ background: e.color, width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0 }),
                    class: p(e.classes(e.n("content-container"), e.n(`--${e.type}`))),
                    role: "tooltip"
                  },
                  [
                    L(e.$slots, "content", {}, () => [
                      Be(
                        re(e.content),
                        1
                        /* TEXT */
                      )
                    ])
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ],
              38
              /* CLASS, STYLE, NEED_HYDRATION */
            ), [
              [Xn, e.show]
            ])
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["name", "onAfterEnter", "onAfterLeave"])
      ], 8, ["to", "disabled"]))
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const xp = x({
  name: Tw,
  props: _p,
  setup(e) {
    const { disabled: n } = Go(), {
      popover: o,
      host: t,
      hostSize: r,
      show: a,
      zIndex: i,
      handleHostClick: l,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: c,
      handlePopoverMouseleave: d,
      handlePopoverClose: f,
      handleClosed: v,
      // expose
      open: y,
      // expose
      close: m,
      // expose
      resize: b
    } = Qp(e);
    return {
      popover: o,
      host: t,
      hostSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      toSizeUnit: Oe,
      n: Ew,
      classes: Dw,
      handleHostClick: l,
      handlePopoverClose: f,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: c,
      handlePopoverMouseleave: d,
      handleClosed: v,
      resize: b,
      open: y,
      close: m
    };
  }
});
xp.render = Bw;
var Ba = xp;
te(Ba);
ue(Ba, _p);
const A5 = Ba;
var Ar = Ba;
const ev = {
  expand: Boolean,
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  },
  "onUpdate:expand": R()
};
var Iw = Object.defineProperty, mc = Object.getOwnPropertySymbols, Mw = Object.prototype.hasOwnProperty, Nw = Object.prototype.propertyIsEnumerable, hc = (e, n, o) => n in e ? Iw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Aw = (e, n) => {
  for (var o in n || (n = {}))
    Mw.call(n, o) && hc(e, o, n[o]);
  if (mc)
    for (var o of mc(n))
      Nw.call(n, o) && hc(e, o, n[o]);
  return e;
};
const { name: Vw, n: Lw, classes: Rw } = ee("ellipsis"), Fw = { key: 0 };
function Uw(e, n) {
  const o = ne("var-tooltip");
  return h(), Pe(
    o,
    wo(Kt(e.tooltipProps)),
    {
      content: fe(() => [
        L(e.$slots, "tooltip-content", {}, () => {
          var t;
          return [
            (t = e.tooltipProps) != null && t.content ? (h(), P(
              "span",
              Fw,
              re(e.tooltipProps.content),
              1
              /* TEXT */
            )) : L(e.$slots, "default", { key: 1 })
          ];
        })
      ]),
      default: fe(() => [
        I(
          "span",
          {
            class: p(
              e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])
            ),
            style: K(e.rootStyles),
            onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
          },
          [
            L(e.$slots, "default")
          ],
          6
          /* CLASS, STYLE */
        )
      ]),
      _: 3
      /* FORWARDED */
    },
    16
    /* FULL_PROPS */
  );
}
const nv = x({
  name: Vw,
  components: { VarTooltip: Ar },
  props: ev,
  setup(e) {
    const n = Zn(e, "expand"), o = B(() => e.lineClamp ? { "-webkit-line-clamp": e.lineClamp } : {}), t = B(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : Aw({ sameWidth: !0 }, e.tooltip));
    function r() {
      e.expandTrigger && (n.value = !n.value);
    }
    return {
      tooltipProps: t,
      expanding: n,
      rootStyles: o,
      n: Lw,
      classes: Rw,
      handleClick: r
    };
  }
});
nv.render = Uw;
var Ia = nv;
te(Ia);
ue(Ia, ev);
const V5 = Ia;
var bl = Ia;
const ov = {
  active: Boolean,
  show: {
    type: Boolean,
    default: !0
  },
  drag: {
    type: [Object, Boolean],
    default: !1
  },
  type: {
    type: String,
    default: "primary"
  },
  position: {
    type: String,
    default: "right-bottom"
  },
  direction: {
    type: String,
    default: "top"
  },
  trigger: {
    type: String,
    default: "click"
  },
  disabled: Boolean,
  color: String,
  inactiveIcon: {
    type: String,
    default: "plus"
  },
  activeIcon: {
    type: String,
    default: "window-close"
  },
  inactiveIconSize: Ie(on, "size"),
  activeIconSize: Ie(on, "size"),
  inactiveIconNamespace: Ie(on, "namespace"),
  activeIconNamespace: Ie(on, "namespace"),
  fixed: {
    type: Boolean,
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 90
  },
  top: [Number, String],
  bottom: [Number, String],
  left: [Number, String],
  right: [Number, String],
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  safeArea: Boolean,
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  onClick: R(),
  onOpen: R(),
  onOpened: R(),
  onClose: R(),
  onClosed: R(),
  "onUpdate:active": R()
}, {
  name: Hw,
  classes: Di,
  n: Bn
} = ee("fab");
var Ma = x({
  name: Hw,
  inheritAttrs: !1,
  props: ov,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const t = Zn(e, "active"), r = k(null), a = k(null);
    de(() => e.trigger, () => {
      t.value = !1;
    }), de(() => e.disabled, () => {
      t.value = !1;
    }), de(() => [e.position, e.fixed, e.top, e.bottom, e.left, e.right], () => {
      var c;
      (c = a.value) == null || c.reset();
    }), zd(r, "click", s);
    function i(c, d, f) {
      if (c.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (f === 0) {
          S(e.onClick, t.value, c);
          return;
        }
        t.value = d, S(e.onClick, t.value, c), S(t.value ? e.onOpen : e.onClose);
      }
    }
    function l(c, d) {
      e.trigger !== "hover" || e.disabled || d === 0 || (t.value = c, S(t.value ? e.onOpen : e.onClose));
    }
    function s() {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, S(e.onClose));
    }
    function u() {
      return n.trigger ? e.show ? n.trigger({
        active: t.value
      }) : null : Me(G(Pn, {
        "var-fab-cover": !0,
        class: Bn("trigger"),
        type: e.type,
        color: e.color,
        disabled: e.disabled,
        elevation: e.elevation,
        iconContainer: !0
      }, {
        default: () => [G(Je, {
          "var-fab-cover": !0,
          class: Di([t.value, Bn("trigger-active-icon"), Bn("trigger-inactive-icon")]),
          name: t.value ? e.activeIcon : e.inactiveIcon,
          size: t.value ? e.activeIconSize : e.inactiveIconSize,
          namespace: t.value ? e.activeIconNamespace : e.inactiveIconNamespace,
          transition: 200,
          animationClass: Bn("--trigger-icon-animation")
        }, null)]
      }), [[Xn, e.show]]);
    }
    return () => {
      var c;
      const d = Ed((c = S(n.default)) != null ? c : []), f = rs(e.drag) ? {} : e.drag;
      return G(Nr, Ye({
        ref: a,
        class: Di(Bn(`--position-${e.position}`), [!e.fixed, Bn("--absolute")]),
        style: {
          top: Oe(e.top),
          bottom: Oe(e.bottom),
          left: Oe(e.left),
          right: Oe(e.right)
        },
        zIndex: e.zIndex,
        teleport: e.teleport,
        disabled: e.disabled || !e.drag || !e.fixed,
        direction: f.direction,
        attraction: f.attraction,
        boundary: f.boundary,
        onClick: (v) => i(v, !t.value, d.length)
      }, o), {
        default: () => [G("div", {
          class: Di(Bn(), Bn(`--direction-${e.direction}`), [e.safeArea, Bn("--safe-area")]),
          ref: r,
          onMouseleave: () => l(!1, d.length),
          onMouseenter: () => l(!0, d.length)
        }, [G(_e, {
          name: Bn("--active-transition")
        }, {
          default: () => [u()]
        }), G(_e, {
          name: Bn(`--actions-transition-${e.direction}`),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        }, {
          default: () => [Me(G("div", {
            class: Bn("actions"),
            onClick: (v) => v.stopPropagation()
          }, [d.map((v) => G("div", {
            class: Bn("action")
          }, [v]))]), [[Xn, e.show && t.value && d.length]])]
        })])]
      });
    };
  }
});
te(Ma);
ue(Ma, ov);
const L5 = Ma;
var yl = Ma;
const Na = {
  value: {
    type: null,
    required: !0
  },
  id: {
    type: String,
    default: ""
  },
  isFocusing: Boolean,
  size: {
    type: String,
    default: "normal"
  },
  variant: {
    type: String,
    default: "standard"
  },
  placeholder: String,
  line: {
    type: Boolean,
    default: !0
  },
  hint: {
    type: Boolean,
    default: !0
  },
  hintCenter: {
    type: Boolean,
    default: !0
  },
  textColor: String,
  focusColor: String,
  blurColor: String,
  errorMessage: String,
  formDisabled: Boolean,
  disabled: Boolean,
  clearable: Boolean,
  cursor: String,
  composing: Boolean,
  onClick: R(),
  onClear: R()
};
var Yw = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: jw, n: Bi, classes: Ww } = ee("field-decorator"), Kw = ["for"];
function qw(e, n) {
  const o = ne("var-icon");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      I(
        "div",
        {
          class: p(
            e.classes(
              e.n("controller"),
              [e.isFocusing, e.n("--focus")],
              [e.errorMessage, e.n("--error")],
              [e.formDisabled || e.disabled, e.n("--disabled")]
            )
          ),
          style: K({
            color: e.color,
            cursor: e.cursor,
            overflow: e.isFloating ? "visible" : "hidden",
            "--field-decorator-middle-offset-left": e.middleOffsetLeft,
            "--field-decorator-middle-offset-width": e.middleOffsetWidth,
            "--field-decorator-middle-offset-height": e.middleOffsetHeight
          })
        },
        [
          I(
            "div",
            {
              class: p(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              L(e.$slots, "prepend-icon")
            ],
            2
            /* CLASS */
          ),
          I(
            "div",
            {
              ref: "middleEl",
              class: p(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
            },
            [
              L(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          e.placeholder && e.hint ? (h(), P("label", {
            key: 0,
            class: p(
              e.classes(
                e.n("placeholder"),
                e.n("$--ellipsis"),
                [e.isFocusing, e.n("--focus")],
                [e.hintCenter, e.n("--hint-center")],
                [e.formDisabled || e.disabled, e.n("--disabled")],
                [e.errorMessage, e.n("--error")],
                [e.transitionDisabled, e.n("--transition-disabled")],
                e.computePlaceholderState()
              )
            ),
            style: K({
              color: e.color
            }),
            for: e.id
          }, [
            I(
              "span",
              null,
              re(e.placeholder),
              1
              /* TEXT */
            )
          ], 14, Kw)) : X("v-if", !0),
          I(
            "div",
            {
              class: p(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              e.clearable && !e.isEmpty(e.value) ? L(e.$slots, "clear-icon", {
                key: 0,
                clear: e.handleClear
              }, () => [
                G(o, {
                  class: p(e.n("clear-icon")),
                  "var-field-decorator-cover": "",
                  name: "close-circle",
                  onClick: e.handleClear
                }, null, 8, ["class", "onClick"])
              ]) : X("v-if", !0),
              L(e.$slots, "append-icon")
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      e.line ? (h(), P(
        Ae,
        { key: 0 },
        [
          e.variant === "outlined" ? (h(), P(
            "fieldset",
            {
              key: 0,
              class: p(
                e.classes(
                  e.n("line"),
                  [e.isFocusing, e.n("--line-focus")],
                  [e.errorMessage, e.n("--line-error")],
                  [e.formDisabled || e.disabled, e.n("--line-disabled")]
                )
              ),
              style: K({ borderColor: e.color })
            },
            [
              I(
                "legend",
                {
                  class: p(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
                  style: K({ width: e.legendWidth })
                },
                [
                  e.placeholder && e.hint ? (h(), Pe(no, {
                    key: 0,
                    to: "body"
                  }, [
                    I(
                      "span",
                      {
                        ref: "placeholderTextEl",
                        class: p(
                          e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")])
                        )
                      },
                      re(e.placeholder),
                      3
                      /* TEXT, CLASS */
                    )
                  ])) : X("v-if", !0)
                ],
                6
                /* CLASS, STYLE */
              )
            ],
            6
            /* CLASS, STYLE */
          )) : (h(), P(
            "div",
            {
              key: 1,
              class: p(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
              style: K({ background: e.errorMessage ? void 0 : e.blurColor })
            },
            [
              I(
                "div",
                {
                  class: p(
                    e.classes(
                      e.n("dot"),
                      [e.isFocusing, e.n("--line-focus")],
                      [e.formDisabled || e.disabled, e.n("--line-disabled")],
                      [e.errorMessage, e.n("--line-error")]
                    )
                  ),
                  style: K({ background: e.errorMessage ? void 0 : e.focusColor })
                },
                null,
                6
                /* CLASS, STYLE */
              )
            ],
            6
            /* CLASS, STYLE */
          ))
        ],
        64
        /* STABLE_FRAGMENT */
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const tv = x({
  name: jw,
  components: { VarIcon: Je },
  props: Na,
  setup(e) {
    const n = k(null), o = k(null), t = k(""), r = k("0px"), a = k("0px"), i = k("0px"), l = k(!0), s = B(() => e.hint && (!Qn(e.value) || e.isFocusing)), { popup: u, bindPopup: c } = Vd(), d = B(
      () => e.errorMessage ? void 0 : e.isFocusing ? e.focusColor : e.blurColor
    );
    ro(m), pn(() => {
      m(), Ke().then(() => {
        l.value = !1;
      });
    }), Wt(m), S(c, null), u && de(
      () => u.show.value,
      (b) => Yw(this, null, function* () {
        b && (yield $n(), m());
      })
    );
    function f() {
      const { hint: b, value: C, composing: w } = e;
      if (!b && (!Qn(C) || w))
        return Bi("--placeholder-hidden");
      if (s.value)
        return Bi("--placeholder-hint");
    }
    function v(b) {
      S(e.onClear, b);
    }
    function y(b) {
      S(e.onClick, b);
    }
    function m() {
      if (r.value = `${o.value.offsetLeft}px`, a.value = `${o.value.offsetWidth}px`, i.value = `${o.value.offsetHeight}px`, e.variant === "outlined" && n.value) {
        const b = qo(n.value), C = `var(--field-decorator-outlined-${e.size}-placeholder-space)`;
        t.value = `calc(${b.width} * 0.75 + ${C} * 2)`;
      }
    }
    return {
      placeholderTextEl: n,
      middleEl: o,
      middleOffsetLeft: r,
      middleOffsetWidth: a,
      middleOffsetHeight: i,
      color: d,
      legendWidth: t,
      isFloating: s,
      transitionDisabled: l,
      resize: m,
      computePlaceholderState: f,
      n: Bi,
      classes: Ww,
      isEmpty: Qn,
      handleClear: v,
      handleClick: y
    };
  }
});
tv.render = qw;
var Aa = tv;
te(Aa);
ue(Aa, Na);
const R5 = Aa;
var Vt = Aa;
const rv = {
  anchor: Number,
  anchors: Array,
  contentDraggable: {
    type: Boolean,
    default: !0
  },
  duration: {
    type: [Number, String],
    default: 300
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  safeArea: Boolean,
  "onUpdate:anchor": R(),
  onAnchorChange: R()
}, { name: Gw, n: Xw, classes: Zw } = ee("floating-panel"), gc = 100, bc = 0.2;
function Jw(e, n) {
  return h(), Pe(no, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    I(
      "div",
      {
        class: p(e.classes(e.n(), [e.safeArea, e.n("--safe-area")], e.formatElevation(e.elevation, 3))),
        style: K({
          height: `${e.toSizeUnit(e.maxAnchor)}`,
          transform: `translateY(calc(100% - ${e.toSizeUnit(e.visibleHeight)}))`,
          transition: e.touching ? "none" : `transform ${e.toNumber(
            e.duration
          )}ms var(--floating-panel-transition-timing-function), background-color 0.25s`
        }),
        onTouchstart: n[0] || (n[0] = (...o) => e.handleTouchstart && e.handleTouchstart(...o)),
        onTouchmove: n[1] || (n[1] = (...o) => e.handleTouchmove && e.handleTouchmove(...o)),
        onTouchend: n[2] || (n[2] = (...o) => e.handleTouchend && e.handleTouchend(...o)),
        onTouchcancel: n[3] || (n[3] = (...o) => e.handleTouchend && e.handleTouchend(...o))
      },
      [
        L(e.$slots, "header", {}, () => [
          I(
            "div",
            {
              class: p(e.n("header"))
            },
            [
              I(
                "div",
                {
                  class: p(e.n("header-toolbar"))
                },
                null,
                2
                /* CLASS */
              )
            ],
            2
            /* CLASS */
          )
        ]),
        I(
          "div",
          {
            class: p(e.n("content")),
            ref: "contentRef"
          },
          [
            L(e.$slots, "default")
          ],
          2
          /* CLASS */
        )
      ],
      38
      /* CLASS, STYLE, NEED_HYDRATION */
    )
  ], 8, ["to", "disabled"]);
}
const av = x({
  name: Gw,
  props: rv,
  setup(e) {
    const n = k(0), o = k(null), { height: t } = Wh(), r = B(() => t.value * 0.6), a = Zn(e, "anchor", { defaultValue: gc }), i = B(() => {
      const E = [gc, r.value], { anchors: D } = e;
      return Qn(D) ? E : D;
    }), l = B(() => Math.min(...i.value)), s = B(() => Math.max(...i.value)), { disabled: u } = Go(), { deltaY: c, touching: d, startTouch: f, moveTouch: v, endTouch: y, isReachTop: m, isReachBottom: b } = mt();
    let C;
    Gt(() => d.value), de(() => a.value, w, { immediate: !0 }), de(
      () => i.value,
      () => {
        w(a.value);
      },
      { immediate: !0 }
    );
    function w(E) {
      z(E ?? l.value);
    }
    function g(E) {
      f(E), C = n.value;
    }
    function $(E) {
      var D;
      v(E);
      const M = E.target, H = o.value === M || ((D = o.value) == null ? void 0 : D.contains(M));
      if (H && !e.contentDraggable)
        return;
      if (H && e.contentDraggable && n.value >= s.value && !m(o.value)) {
        b(o.value) && Re(E);
        return;
      }
      const Y = C - c.value;
      z(A(Y)), Re(E);
    }
    function O() {
      y();
      const E = a.value;
      z(n.value), a.value = n.value, a.value !== E && S(e.onAnchorChange, n.value);
    }
    function z(E) {
      n.value = d.value ? E : T(E);
    }
    function A(E) {
      if (E > s.value) {
        const D = E - s.value;
        return s.value + D * bc;
      }
      if (E < l.value) {
        const D = l.value - E;
        return l.value - D * bc;
      }
      return E;
    }
    function T(E) {
      if (i.value.includes(E))
        return E;
      let D = 1 / 0, M = 0;
      return i.value.forEach((H) => {
        const Y = Math.abs(H - E);
        Y < D && (D = Y, M = H);
      }), M;
    }
    return {
      contentRef: o,
      teleportDisabled: u,
      touching: d,
      minAnchor: l,
      maxAnchor: s,
      visibleHeight: n,
      n: Xw,
      classes: Zw,
      toSizeUnit: Oe,
      toNumber: F,
      formatElevation: fn,
      handleTouchstart: g,
      handleTouchmove: $,
      handleTouchend: O
    };
  }
});
av.render = Jw;
var Va = av;
te(Va);
ue(Va, rv);
const F5 = Va;
var kl = Va;
const iv = {
  disabled: Boolean,
  readonly: Boolean,
  scrollToError: String,
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  },
  onSubmit: R(),
  onReset: R()
};
var yc = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: Qw, n: _w } = ee("form");
function xw(e, n) {
  return h(), P(
    "form",
    {
      class: p(e.n()),
      onSubmit: n[0] || (n[0] = (...o) => e.handleSubmit && e.handleSubmit(...o)),
      onReset: n[1] || (n[1] = (...o) => e.handleReset && e.handleReset(...o))
    },
    [
      L(e.$slots, "default")
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const lv = x({
  name: Qw,
  props: iv,
  setup(e) {
    const n = B(() => e.disabled), o = B(() => e.readonly), { formItems: t, bindFormItems: r } = yy();
    r({
      disabled: n,
      readonly: o
    });
    function i(f) {
      setTimeout(() => {
        const v = zo(f), y = v === window ? 0 : eu(v), m = eu(f) - y - en(e.scrollToErrorOffsetY);
        Bt(v, {
          top: m,
          animation: Fi
        });
      }, 300);
    }
    function l(f) {
      return yc(this, null, function* () {
        Re(f);
        const v = yield u();
        S(e.onSubmit, v);
      });
    }
    function s(f) {
      Re(f), c(), S(e.onReset);
    }
    function u() {
      return yc(this, null, function* () {
        var f;
        const v = yield Promise.all(t.map(({ validate: y }) => y()));
        if (e.scrollToError) {
          const [, y] = Bh(v, (b) => b === !1, e.scrollToError), m = y > -1;
          if (m) {
            const b = (f = t[y].instance.proxy) == null ? void 0 : f.$el;
            i(b);
          }
          return !m;
        }
        return v.every((y) => y === !0);
      });
    }
    function c() {
      return t.forEach(({ reset: f }) => f());
    }
    function d() {
      return t.forEach(({ resetValidation: f }) => f());
    }
    return {
      n: _w,
      handleSubmit: l,
      handleReset: s,
      validate: u,
      reset: c,
      resetValidation: d
    };
  }
});
lv.render = xw;
var bt = lv;
bt.useValidation = Yn;
bt.useForm = jn;
te(bt);
ue(bt, iv);
const U5 = bt;
var $l = bt;
const sv = {
  src: String,
  fit: {
    type: String,
    default: "fill"
  },
  position: {
    type: String,
    default: "50% 50%"
  },
  alt: String,
  title: String,
  referrerpolicy: String,
  width: [String, Number],
  height: [String, Number],
  radius: {
    type: [String, Number],
    default: 0
  },
  loading: String,
  error: String,
  lazy: Boolean,
  ripple: Boolean,
  block: {
    type: Boolean,
    default: !0
  },
  onClick: R(),
  onLoad: R(),
  onError: R()
}, { name: eC, n: nC, classes: oC } = ee("image"), tC = ["alt", "title", "referrerpolicy", "lazy-loading", "lazy-error"], rC = ["alt", "title", "referrerpolicy", "src"];
function aC(e, n) {
  var o;
  const t = je("lazy"), r = je("ripple");
  return Me((h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: K({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        borderRadius: e.toSizeUnit(e.radius)
      })
    },
    [
      e.lazy && !e.showErrorSlot ? Me((h(), P("img", {
        key: 0,
        role: "img",
        class: p(e.n("image")),
        alt: e.alt,
        title: e.title,
        referrerpolicy: e.referrerpolicy,
        "lazy-loading": e.loading,
        "lazy-error": e.error,
        style: K({ objectFit: e.fit, objectPosition: e.position }),
        onLoad: n[0] || (n[0] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, tC)), [
        [t, (o = e.src) != null ? o : ""]
      ]) : X("v-if", !0),
      !e.lazy && !e.showErrorSlot ? (h(), P("img", {
        key: 1,
        role: "img",
        class: p(e.n("image")),
        alt: e.alt,
        title: e.title,
        referrerpolicy: e.referrerpolicy,
        style: K({ objectFit: e.fit, objectPosition: e.position }),
        src: e.src,
        onLoad: n[2] || (n[2] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onError: n[3] || (n[3] = (...a) => e.handleError && e.handleError(...a)),
        onClick: n[4] || (n[4] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, rC)) : X("v-if", !0),
      e.showErrorSlot ? L(e.$slots, "error", { key: 2 }) : X("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: !e.ripple }]
  ]);
}
const uv = x({
  name: eC,
  directives: {
    Lazy: It,
    Ripple: tn
  },
  props: sv,
  setup(e, { slots: n }) {
    const o = k(!1);
    de(
      () => e.src,
      () => {
        o.value = !1;
      }
    );
    function t(i) {
      o.value = !!n.error, S(e.onError, i);
    }
    function r(i) {
      const l = i.currentTarget;
      if (e.lazy) {
        if (l._lazy.state === "success") {
          S(e.onLoad, i);
          return;
        }
        l._lazy.state === "error" && t(i);
      } else
        S(e.onLoad, i);
    }
    function a(i) {
      S(e.onClick, i);
    }
    return {
      showErrorSlot: o,
      n: nC,
      classes: oC,
      toSizeUnit: Oe,
      handleLoad: r,
      handleError: t,
      handleClick: a
    };
  }
});
uv.render = aC;
var La = uv;
te(La);
ue(La, sv);
const H5 = La;
var wl = La;
const cv = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function iC() {
  const { childProviders: e, length: n, bindChildren: o } = yn(
    cv
  );
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: o
  };
}
const Ds = {
  loop: {
    type: Boolean,
    default: !0
  },
  autoplay: [String, Number],
  duration: {
    type: [String, Number],
    default: 300
  },
  initialIndex: {
    type: [String, Number],
    default: 0
  },
  navigation: {
    type: [Boolean, String],
    default: !1
  },
  indicator: {
    type: Boolean,
    default: !0
  },
  indicatorColor: String,
  vertical: Boolean,
  touchable: {
    type: Boolean,
    default: !0
  },
  onChange: R()
};
var Zo = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const lC = 250, sC = 20, { name: uC, n: kc, classes: cC } = ee("swipe"), dC = ["onClick"];
function fC(e, n) {
  const o = ne("var-icon"), t = ne("var-button"), r = je("hover");
  return Me((h(), P(
    "div",
    {
      class: p(e.n()),
      ref: "swipeEl"
    },
    [
      I(
        "div",
        {
          class: p(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
          style: K({
            width: e.vertical ? void 0 : e.toSizeUnit(e.trackSize),
            height: e.vertical ? e.toSizeUnit(e.trackSize) : void 0,
            transform: `translate${e.vertical ? "Y" : "X"}(${e.toSizeUnit(e.trackTranslate)})`,
            transitionDuration: e.lockDuration ? "0ms" : `${e.toNumber(e.duration)}ms`
          }),
          onTouchstart: n[0] || (n[0] = (...a) => e.handleTouchstart && e.handleTouchstart(...a)),
          onTouchmove: n[1] || (n[1] = (...a) => e.handleTouchmove && e.handleTouchmove(...a)),
          onTouchend: n[2] || (n[2] = (...a) => e.handleTouchend && e.handleTouchend(...a))
        },
        [
          L(e.$slots, "default")
        ],
        38
        /* CLASS, STYLE, NEED_HYDRATION */
      ),
      e.navigation ? L(e.$slots, "prev", wo(Ye({ key: 0 }, {
        index: e.index,
        length: e.length,
        prev: e.prev,
        next: e.next,
        to: e.to,
        hovering: e.hovering
      })), () => [
        G(_e, {
          name: e.getNavigationAnimation("prev")
        }, {
          default: fe(() => [
            e.navigation === !0 || e.hovering ? (h(), P(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("navigation"), e.n("navigation-prev"), [e.vertical, e.n("--navigation-vertical-prev")]))
              },
              [
                G(t, {
                  "var-swipe-cover": "",
                  disabled: !e.loop && e.index === 0,
                  class: p(e.n("navigation-prev-button")),
                  onClick: n[3] || (n[3] = (a) => e.prev())
                }, {
                  default: fe(() => [
                    G(o, {
                      "var-swipe-cover": "",
                      class: p(e.n("navigation-prev-button-icon")),
                      name: e.vertical ? "chevron-up" : "chevron-left"
                    }, null, 8, ["class", "name"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled", "class"])
              ],
              2
              /* CLASS */
            )) : X("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : X("v-if", !0),
      e.navigation ? L(e.$slots, "next", wo(Ye({ key: 1 }, {
        index: e.index,
        length: e.length,
        hovering: e.hovering,
        prev: e.prev,
        next: e.next,
        to: e.to
      })), () => [
        G(_e, {
          name: e.getNavigationAnimation("next")
        }, {
          default: fe(() => [
            e.navigation === !0 || e.hovering ? (h(), P(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("navigation"), e.n("navigation-next"), [e.vertical, e.n("--navigation-vertical-next")]))
              },
              [
                G(t, {
                  "var-swipe-cover": "",
                  class: p(e.n("navigation-next-button")),
                  disabled: !e.loop && e.index === e.length - 1,
                  onClick: n[4] || (n[4] = (a) => e.next())
                }, {
                  default: fe(() => [
                    G(o, {
                      "var-swipe-cover": "",
                      class: p(e.n("navigation-next-button-icon")),
                      name: e.vertical ? "chevron-down" : "chevron-right"
                    }, null, 8, ["class", "name"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "disabled"])
              ],
              2
              /* CLASS */
            )) : X("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : X("v-if", !0),
      L(e.$slots, "indicator", wo(Kt({
        index: e.index,
        length: e.length,
        hovering: e.hovering,
        prev: e.prev,
        next: e.next,
        to: e.to
      })), () => [
        e.indicator && e.length ? (h(), P(
          "div",
          {
            key: 0,
            class: p(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
          },
          [
            (h(!0), P(
              Ae,
              null,
              Ze(e.length, (a, i) => (h(), P("div", {
                class: p(
                  e.classes(e.n("indicator"), [e.index === i, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])
                ),
                style: K({ background: e.indicatorColor }),
                key: a,
                onClick: (l) => e.to(i)
              }, null, 14, dC))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        )) : X("v-if", !0)
      ])
    ],
    2
    /* CLASS */
  )), [
    [r, e.handleHovering]
  ]);
}
const dv = x({
  name: uC,
  directives: { Hover: Tn },
  components: { VarButton: Pn, VarIcon: Je },
  props: Ds,
  setup(e) {
    const n = k(null), o = k(0), t = B(() => e.vertical), r = k(0), a = k(0), i = k(!1), l = k(0), s = k(!1), { swipeItems: u, bindSwipeItems: c, length: d } = iC(), { popup: f, bindPopup: v } = Vd(), {
      deltaX: y,
      deltaY: m,
      moveX: b,
      moveY: C,
      offsetX: w,
      offsetY: g,
      touching: $,
      direction: O,
      startTime: z,
      startTouch: A,
      moveTouch: T,
      endTouch: E
    } = mt(), D = B(() => O.value === (e.vertical ? "vertical" : "horizontal"));
    let M = !1, H = -1;
    c({
      size: o,
      currentIndex: l,
      vertical: t
    }), We(() => window, "keydown", ke), S(v, null), de(
      () => d.value,
      () => Zo(this, null, function* () {
        yield $n(), ye(), Ce();
      })
    ), f && de(
      () => f.show.value,
      (ve) => Zo(this, null, function* () {
        ve ? (yield $n(), Ce()) : U();
      })
    ), Eo(Ce), qt(U), ro(Ce);
    function N(ve) {
      return u.find(({ index: Ue }) => Ue.value === ve);
    }
    function q() {
      e.loop && (a.value >= 0 && N(d.value - 1).setTranslate(-r.value), a.value <= -(r.value - o.value) && N(0).setTranslate(r.value), a.value > -(r.value - o.value) && a.value < 0 && (N(d.value - 1).setTranslate(0), N(0).setTranslate(0)));
    }
    function j(ve) {
      const Ue = On(ve) ? ve : Math.floor((a.value - o.value / 2) / -o.value), { loop: Ve } = e;
      return Ue <= -1 ? Ve ? -1 : 0 : Ue >= d.value ? Ve ? d.value : d.value - 1 : Ue;
    }
    function ce(ve) {
      const { loop: Ue } = e;
      return ve === -1 ? Ue ? d.value - 1 : 0 : ve === d.value ? Ue ? 0 : d.value - 1 : ve;
    }
    function _(ve) {
      return e.loop ? ve < 0 ? d.value + ve : ve >= d.value ? ve - d.value : ve : Mn(ve, 0, d.value - 1);
    }
    function pe() {
      return Zo(this, null, function* () {
        const ve = a.value >= o.value, Ue = a.value <= -r.value, Ve = 0, nn = -(r.value - o.value);
        i.value = !0, (ve || Ue) && (i.value = !0, a.value = Ue ? Ve : nn, N(0).setTranslate(0), N(d.value - 1).setTranslate(0)), yield $n(), i.value = !1;
      });
    }
    function ye() {
      M || (l.value = _(F(e.initialIndex)), M = !0);
    }
    function ie() {
      const { autoplay: ve } = e;
      !ve || d.value <= 1 || (U(), H = window.setTimeout(() => {
        De(), ie();
      }, F(ve)));
    }
    function U() {
      H && clearTimeout(H);
    }
    function J(ve) {
      return Zo(this, null, function* () {
        d.value <= 1 || !e.touchable || (A(ve), U(), yield pe(), i.value = !0);
      });
    }
    function ae(ve) {
      const { touchable: Ue, vertical: Ve } = e;
      !$.value || !Ue || (T(ve), D.value && (Re(ve), a.value += Ve ? C.value : b.value, q()));
    }
    function V() {
      if (!$.value || (E(), !D.value))
        return;
      const { vertical: ve, onChange: Ue } = e, Ve = ve ? m.value < 0 : y.value < 0, nn = ve ? g.value : w.value, me = performance.now() - z.value <= lC && nn >= sC ? j(Ve ? l.value + 1 : l.value - 1) : j();
      i.value = !1, a.value = me * -o.value;
      const $e = l.value;
      l.value = ce(me), ie(), $e !== l.value && S(Ue, l.value);
    }
    function W(ve) {
      e.navigation === "hover" && (s.value = ve);
    }
    function Q(ve) {
      return e.navigation !== "hover" ? "" : kc(`--navigation${e.vertical ? "-vertical" : ""}-${ve}-animation`);
    }
    function ke(ve) {
      if (!u.length || u.findIndex(({ isFocusing: nn }) => nn.value) === -1)
        return;
      const { key: Ve } = ve;
      Re(ve), Ve === "ArrowLeft" && Xe(), Ve === "ArrowRight" && De();
    }
    function Ce() {
      n.value && (i.value = !0, o.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, r.value = o.value * d.value, a.value = l.value * -o.value, u.forEach((ve) => {
        ve.setTranslate(0);
      }), ie(), setTimeout(() => {
        i.value = !1;
      }));
    }
    function De(ve) {
      return Zo(this, null, function* () {
        if (d.value <= 1)
          return;
        ye();
        const { loop: Ue, onChange: Ve } = e, nn = l.value;
        if (l.value = _(nn + 1), (ve == null ? void 0 : ve.event) !== !1 && S(Ve, l.value), yield pe(), nn === d.value - 1 && Ue) {
          N(0).setTranslate(r.value), a.value = d.value * -o.value;
          return;
        }
        nn !== d.value - 1 && (a.value = l.value * -o.value);
      });
    }
    function Xe(ve) {
      return Zo(this, null, function* () {
        if (d.value <= 1)
          return;
        ye();
        const { loop: Ue, onChange: Ve } = e, nn = l.value;
        if (l.value = _(nn - 1), (ve == null ? void 0 : ve.event) !== !1 && S(Ve, l.value), yield pe(), nn === 0 && Ue) {
          N(d.value - 1).setTranslate(-r.value), a.value = o.value;
          return;
        }
        nn !== 0 && (a.value = l.value * -o.value);
      });
    }
    function ln(ve, Ue) {
      if (d.value <= 1 || ve === l.value)
        return;
      ve = ve < 0 ? 0 : ve, ve = ve >= d.value ? d.value : ve;
      const Ve = ve > l.value ? De : Xe, nn = Math.abs(ve - l.value);
      Array.from({ length: nn }).forEach((le, me) => {
        Ve({ event: me === nn - 1 ? Ue == null ? void 0 : Ue.event : !1 });
      });
    }
    return {
      length: d,
      index: l,
      swipeEl: n,
      trackSize: r,
      trackTranslate: a,
      lockDuration: i,
      hovering: s,
      n: kc,
      toSizeUnit: Oe,
      classes: cC,
      handleTouchstart: J,
      handleTouchmove: ae,
      handleTouchend: V,
      next: De,
      prev: Xe,
      to: ln,
      resize: Ce,
      toNumber: F,
      handleHovering: W,
      getNavigationAnimation: Q
    };
  }
});
dv.render = fC;
var Ra = dv;
te(Ra);
ue(Ra, Ds);
const Y5 = Ra;
var Lt = Ra;
function pC() {
  const { bindParent: e, index: n, parentProvider: o } = bn(cv);
  return e || Vn("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: o,
    bindSwipe: e
  };
}
const { name: vC, n: mC } = ee("swipe-item"), hC = ["aria-hidden"];
function gC(e, n) {
  return h(), P("div", {
    class: p(e.n()),
    style: K({
      width: e.vertical ? void 0 : e.toSizeUnit(e.size),
      height: e.vertical ? e.toSizeUnit(e.size) : void 0,
      transform: `translate${e.vertical ? "Y" : "X"}(${e.toSizeUnit(e.translate)})`
    }),
    tabindex: "-1",
    "aria-hidden": e.currentIndex !== e.index,
    onFocus: n[0] || (n[0] = (o) => e.isFocusing = !0),
    onBlur: n[1] || (n[1] = (o) => e.isFocusing = !1)
  }, [
    L(e.$slots, "default")
  ], 46, hC);
}
const fv = x({
  name: vC,
  setup() {
    const e = k(0), n = k(!1), { swipe: o, bindSwipe: t, index: r } = pC(), { size: a, currentIndex: i, vertical: l } = o, s = {
      index: r,
      isFocusing: B(() => n.value),
      setTranslate: u
    };
    t(s);
    function u(c) {
      e.value = c;
    }
    return {
      isFocusing: n,
      size: a,
      index: r,
      currentIndex: i,
      vertical: l,
      translate: e,
      n: mC,
      toSizeUnit: Oe
    };
  }
});
fv.render = gC;
var Bs = fv;
te(Bs);
const j5 = Bs;
var Rt = Bs, bC = Object.defineProperty, $c = Object.getOwnPropertySymbols, yC = Object.prototype.hasOwnProperty, kC = Object.prototype.propertyIsEnumerable, wc = (e, n, o) => n in e ? bC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Cc = (e, n) => {
  for (var o in n || (n = {}))
    yC.call(n, o) && wc(e, o, n[o]);
  if ($c)
    for (var o of $c(n))
      kC.call(n, o) && wc(e, o, n[o]);
  return e;
};
const pv = Cc(Cc({
  show: Boolean,
  imagePreventDefault: Boolean,
  images: {
    type: Array,
    default: () => []
  },
  initialIndex: {
    type: [String, Number],
    default: 0
  },
  zoom: {
    type: [String, Number],
    default: 2
  },
  closeable: Boolean,
  "onUpdate:show": R(),
  onLongPress: R()
}, Ie(Ds, ["loop", "indicator", "onChange"])), Ie(gt, [
  "lockScroll",
  "teleport",
  "closeOnKeyEscape",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onKeyEscape",
  // internal for function call closes the dialog
  "onRouteChange"
])), { name: $C, n: Sc, classes: wC } = ee("image-preview"), Ii = 12, Pc = 200, CC = 350, zc = 200, SC = 500, ur = 1, PC = ["onTouchstart"], zC = ["src", "alt"];
function OC(e, n) {
  const o = ne("var-swipe-item"), t = ne("var-swipe"), r = ne("var-icon"), a = ne("var-popup");
  return h(), Pe(a, {
    "var-image-preview-cover": "",
    class: p(e.n("popup")),
    transition: e.n("$-fade"),
    overlay: !1,
    "close-on-click-overlay": !1,
    "close-on-key-escape": e.closeOnKeyEscape,
    "lock-scroll": e.lockScroll,
    teleport: e.teleport,
    show: e.show,
    "onUpdate:show": n[3] || (n[3] = (i) => e.show = i),
    onOpen: e.onOpen,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onOpened: e.onOpened,
    onKeyEscape: e.onKeyEscape,
    onRouteChange: e.onRouteChange
  }, {
    default: fe(() => [
      G(t, Ye({
        ref: "swipeRef",
        class: e.n("swipe"),
        "var-image-preview-cover": "",
        touchable: e.canSwipe,
        indicator: e.indicator && e.images.length > 1,
        "initial-index": e.toNumber(e.initialIndex),
        loop: e.loop,
        onChange: e.onChange
      }, e.$attrs), {
        default: fe(() => [
          (h(!0), P(
            Ae,
            null,
            Ze(e.images, (i, l) => (h(), Pe(o, {
              class: p(e.n("swipe-item")),
              "var-image-preview-cover": "",
              key: i
            }, {
              default: fe(() => [
                I("div", {
                  class: p(e.n("zoom-container")),
                  style: K({
                    transform: `scale(${e.scale}) translate(${e.translateX}px, ${e.translateY}px)`,
                    transitionTimingFunction: e.transitionTimingFunction,
                    transitionDuration: e.transitionDuration
                  }),
                  onTouchstart: (s) => e.handleTouchstart(s, l),
                  onTouchmove: n[0] || (n[0] = (...s) => e.handleTouchmove && e.handleTouchmove(...s)),
                  onTouchend: n[1] || (n[1] = (...s) => e.handleTouchend && e.handleTouchend(...s)),
                  onTouchcancel: n[2] || (n[2] = (...s) => e.handleTouchcancel && e.handleTouchcancel(...s))
                }, [
                  I("img", {
                    role: "img",
                    class: p(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
                    src: i,
                    alt: i
                  }, null, 10, zC)
                ], 46, PC)
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["class"]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        indicator: fe(({ index: i, length: l }) => [
          L(e.$slots, "indicator", {
            index: i,
            length: l
          }, () => [
            e.indicator && e.images.length > 1 ? (h(), P(
              "div",
              {
                key: 0,
                class: p(e.n("indicators"))
              },
              re(i + 1) + " / " + re(l),
              3
              /* TEXT, CLASS */
            )) : X("v-if", !0)
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]),
      L(e.$slots, "close-icon", {}, () => [
        e.closeable ? (h(), Pe(r, {
          key: 0,
          class: p(e.n("close-icon")),
          name: "close-circle",
          "var-image-preview-cover": "",
          onClick: e.close
        }, null, 8, ["class", "onClick"])) : X("v-if", !0)
      ]),
      e.$slots.extra ? (h(), P(
        "div",
        {
          key: 0,
          class: p(e.n("extra"))
        },
        [
          L(e.$slots, "extra")
        ],
        2
        /* CLASS */
      )) : X("v-if", !0)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "transition", "close-on-key-escape", "lock-scroll", "teleport", "show", "onOpen", "onClose", "onClosed", "onOpened", "onKeyEscape", "onRouteChange"]);
}
const vv = x({
  name: $C,
  components: {
    VarSwipe: Lt,
    VarSwipeItem: Rt,
    VarPopup: Po,
    VarIcon: Je
  },
  inheritAttrs: !1,
  props: pv,
  setup(e) {
    const n = Zn(e, "show"), o = k(1), t = k(0), r = k(0), a = k(), i = k(), l = k(!0), s = k(null), { moveX: u, moveY: c, distance: d, startTime: f, startTouch: v, moveTouch: y, endTouch: m } = mt(), b = B(() => {
      const { imagePreventDefault: U, show: J } = e;
      return J && U;
    });
    let C = null, w = null, g = !1;
    const $ = {
      start: null,
      prev: null
    };
    We(() => document, "contextmenu", ce);
    function O(U) {
      o.value = F(U), l.value = !1, $.prev = null, window.setTimeout(() => {
        a.value = "linear", i.value = "0s";
      }, zc);
    }
    function z() {
      o.value = 1, t.value = 0, r.value = 0, l.value = !0, $.prev = null, a.value = void 0, i.value = void 0;
    }
    function A(U) {
      return $.prev ? d.value <= Ii && performance.now() - f.value <= Pc && $.prev === U : !1;
    }
    function T(U) {
      return !U || !$.start || !$.prev ? !1 : d.value <= Ii && performance.now() - f.value < CC && (U === $.start || U.parentNode === $.start);
    }
    function E() {
      m(), window.clearTimeout(w), g = !1, $.start = null;
    }
    function D(U) {
      if (m(), window.clearTimeout(w), g) {
        g = !1;
        return;
      }
      const J = T(U.target);
      C = window.setTimeout(() => {
        J && j(), $.start = null;
      }, Pc);
    }
    function M(U, J) {
      window.clearTimeout(C), window.clearTimeout(w);
      const ae = U.currentTarget;
      if ($.start = ae, w = window.setTimeout(() => {
        g = !0, S(e.onLongPress, J);
      }, SC), A(ae)) {
        o.value > ur ? z() : O(e.zoom);
        return;
      }
      v(U), $.prev = ae;
    }
    function H(U) {
      const { offsetWidth: J, offsetHeight: ae } = U, { naturalWidth: V, naturalHeight: W } = U.querySelector(`.${Sc("image")}`);
      return {
        width: J,
        height: ae,
        imageRadio: W / V,
        rootRadio: ae / J,
        zoom: F(e.zoom)
      };
    }
    function Y(U) {
      const { zoom: J, imageRadio: ae, rootRadio: V, width: W, height: Q } = H(U);
      if (!ae)
        return 0;
      const ke = ae > V ? Q / ae : W;
      return Math.max(0, (J * ke - W) / 2) / J;
    }
    function N(U) {
      const { zoom: J, imageRadio: ae, rootRadio: V, width: W, height: Q } = H(U);
      if (!ae)
        return 0;
      const ke = ae > V ? Q : W * ae;
      return Math.max(0, (J * ke - Q) / 2) / J;
    }
    function q(U) {
      if (!$.prev)
        return;
      y(U);
      const J = U.currentTarget;
      if (d.value > Ii && window.clearTimeout(w), o.value > ur) {
        const ae = Y(J), V = N(J);
        t.value = Mn(t.value + u.value, -ae, ae), r.value = Mn(r.value + c.value, -V, V);
      }
      $.prev = J;
    }
    function j() {
      if (o.value > ur) {
        z(), setTimeout(() => S(e["onUpdate:show"], !1), zc);
        return;
      }
      S(e["onUpdate:show"], !1);
    }
    function ce(U) {
      b.value && Re(U);
    }
    function _(U) {
      var J;
      (J = s.value) == null || J.prev(U);
    }
    function pe(U) {
      var J;
      (J = s.value) == null || J.next(U);
    }
    function ye(U, J) {
      var ae;
      (ae = s.value) == null || ae.to(U, J);
    }
    function ie(U) {
      U <= ur ? z() : O(U);
    }
    return {
      swipeRef: s,
      isPreventDefault: b,
      show: n,
      scale: o,
      translateX: t,
      translateY: r,
      canSwipe: l,
      transitionTimingFunction: a,
      transitionDuration: i,
      n: Sc,
      classes: wC,
      toNumber: F,
      handleTouchstart: M,
      handleTouchmove: q,
      handleTouchend: D,
      handleTouchcancel: E,
      close: j,
      prev: _,
      next: pe,
      to: ye,
      zoom: ie
    };
  }
});
vv.render = OC;
var _t = vv, TC = Object.defineProperty, EC = Object.defineProperties, DC = Object.getOwnPropertyDescriptors, Oc = Object.getOwnPropertySymbols, BC = Object.prototype.hasOwnProperty, IC = Object.prototype.propertyIsEnumerable, Tc = (e, n, o) => n in e ? TC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, cr = (e, n) => {
  for (var o in n || (n = {}))
    BC.call(n, o) && Tc(e, o, n[o]);
  if (Oc)
    for (var o of Oc(n))
      IC.call(n, o) && Tc(e, o, n[o]);
  return e;
}, Ec = (e, n) => EC(e, DC(n));
let yo, Tt = {};
function MC(e = {}) {
  return gn(e) ? Ec(cr({}, Tt), { images: [e] }) : He(e) ? Ec(cr({}, Tt), { images: e }) : cr(cr({}, Tt), e);
}
function No(e) {
  if (!to())
    return;
  No.close();
  const n = MC(e), o = Qe(n);
  o.teleport = "body", yo = o;
  const { unmountInstance: t } = ht(_t, o, {
    onClose: () => S(o.onClose),
    onClosed: () => {
      S(o.onClosed), t(), yo === o && (yo = null);
    },
    onRouteChange: () => {
      t(), yo === o && (yo = null);
    },
    "onUpdate:show": (r) => {
      o.show = r;
    }
  });
  o.show = !0;
}
No.close = () => {
  if (yo != null) {
    const e = yo;
    yo = null, Ke().then(() => {
      e.show = !1;
    });
  }
};
No.setDefaultOptions = (e) => {
  Tt = e;
};
No.resetDefaultOptions = () => {
  Tt = {};
};
No.Component = _t;
te(_t);
te(_t, No);
ue(No, pv);
const W5 = _t;
var Ft = No;
const mv = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function NC() {
  const { bindChildren: e, length: n, childProviders: o } = yn(
    mv
  );
  return {
    length: n,
    indexAnchors: o,
    bindIndexAnchors: e
  };
}
function AC() {
  const { parentProvider: e, index: n, bindParent: o } = bn(
    mv
  );
  return o || Vn("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: o
  };
}
const hv = {
  index: [Number, String]
}, { name: VC, n: LC, classes: RC } = ee("index-anchor");
function FC(e, n) {
  return h(), Pe(vt(e.sticky ? e.n("$-sticky") : e.Transition), {
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode,
    ref: "anchorEl"
  }, {
    default: fe(() => [
      I(
        "div",
        Ye({
          class: e.n()
        }, e.$attrs),
        [
          L(e.$slots, "default", {}, () => [
            Be(
              re(e.name),
              1
              /* TEXT */
            )
          ])
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["offset-top", "z-index", "disabled", "css-mode"]);
}
const gv = x({
  name: VC,
  components: { VarSticky: ct },
  inheritAttrs: !1,
  props: hv,
  setup(e) {
    const n = k(!1), o = B(() => e.index), t = k(null), { index: r, indexBar: a, bindIndexBar: i } = AC(), { active: l, sticky: s, cssMode: u, stickyOffsetTop: c, zIndex: d } = a;
    i({
      index: r,
      name: o,
      setDisabled: y,
      getOffsetTop: v
    });
    function v() {
      return t.value ? t.value.$el ? t.value.$el.offsetTop : t.value.offsetTop : 0;
    }
    function y(m) {
      n.value = m;
    }
    return {
      n: LC,
      classes: RC,
      name: o,
      anchorEl: t,
      active: l,
      sticky: s,
      zIndex: d,
      disabled: n,
      cssMode: u,
      stickyOffsetTop: c,
      Transition: _e
    };
  }
});
gv.render = FC;
var Fa = gv;
te(Fa);
ue(Fa, hv);
const K5 = Fa;
var Cl = Fa;
const bv = {
  sticky: {
    type: Boolean,
    default: !0
  },
  stickyOffsetTop: {
    type: [String, Number],
    default: 0
  },
  stickyCssMode: Boolean,
  hideList: Boolean,
  zIndex: {
    type: [Number, String],
    default: 1
  },
  highlightColor: String,
  duration: {
    type: [Number, String],
    default: 0
  },
  onClick: R(),
  onChange: R()
};
var Dc = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: UC, n: HC, classes: YC } = ee("index-bar"), jC = ["onClick"];
function WC(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.n()),
      ref: "barEl"
    },
    [
      L(e.$slots, "default"),
      I(
        "ul",
        {
          class: p(e.n("anchor-list")),
          style: K({ zIndex: e.toNumber(e.zIndex) + 2, display: e.hideList ? "none" : "block" })
        },
        [
          (h(!0), P(
            Ae,
            null,
            Ze(e.anchorNameList, (o) => (h(), P("li", {
              key: o,
              class: p(e.classes(e.n("anchor-item"), [e.active === o, e.n("anchor-item--active")])),
              style: K({ color: e.active === o && e.highlightColor ? e.highlightColor : void 0 }),
              onClick: (t) => e.anchorClick({ anchorName: o, manualCall: !0 })
            }, [
              L(e.$slots, "anchor-name", { anchorName: o }, () => [
                Be(
                  re(o),
                  1
                  /* TEXT */
                )
              ])
            ], 14, jC))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    2
    /* CLASS */
  );
}
const yv = x({
  name: UC,
  props: bv,
  setup(e) {
    const n = k(""), o = k(null), t = k([]), r = k(), a = B(() => e.sticky), i = B(() => e.stickyCssMode), l = B(() => en(e.stickyOffsetTop)), s = B(() => e.zIndex), { length: u, indexAnchors: c, bindIndexAnchors: d } = NC();
    let f = null, v = !1;
    const y = {
      active: r,
      sticky: a,
      cssMode: i,
      stickyOffsetTop: l,
      zIndex: s
    };
    de(
      () => u.value,
      () => Dc(this, null, function* () {
        yield $n(), t.value = c.filter(({ name: z }) => z.value != null).map(({ name: z }) => z.value);
      })
    ), pn(g), Hr($), pt(() => {
      v = !0, $();
    }), Eo(() => {
      !v || r.value === void 0 || (w({
        anchorName: r.value,
        options: { event: !1 }
      }), v = !1);
    }), d(y);
    function m(z, A) {
      const T = tt(z) ? z.name.value : z;
      T === r.value || T === void 0 || (r.value = T, (A == null ? void 0 : A.event) !== !1 && S(e.onChange, T));
    }
    function b() {
      const { top: z } = an(f), { top: A } = an(o.value);
      return Ro(f) - z + A;
    }
    function C() {
      const z = Ro(f), A = f === window ? document.body.scrollHeight : f.scrollHeight, T = b();
      c.forEach((E, D) => {
        const M = E.getOffsetTop(), H = z - M + l.value - T, Y = D === c.length - 1 ? A : c[D + 1].getOffsetTop() - E.getOffsetTop();
        E.setDisabled(!0), H >= 0 && H < Y && n.value === "" && (E.setDisabled(!1), m(E));
      });
    }
    function w(z) {
      return Dc(this, arguments, function* ({ anchorName: A, manualCall: T = !1, options: E }) {
        if (T && S(e.onClick, A), A === r.value && !v)
          return;
        const D = c.find(({ name: q }) => A === q.value);
        if (!D)
          return;
        const M = b(), Y = D.getOffsetTop() - l.value + M, N = as(f);
        n.value = A, m(A, E), yield Bt(f, {
          left: N,
          top: Y,
          animation: sf,
          duration: F(e.duration)
        }), yield $n(), n.value = "";
      });
    }
    function g() {
      f = zo(o.value), f.addEventListener("scroll", C);
    }
    function $() {
      f && f.removeEventListener("scroll", C);
    }
    function O(z, A) {
      Dt(() => w({ anchorName: z, options: A }));
    }
    return {
      barEl: o,
      active: r,
      zIndex: s,
      anchorNameList: t,
      n: HC,
      classes: YC,
      toNumber: F,
      scrollTo: O,
      anchorClick: w
    };
  }
});
yv.render = WC;
var Ua = yv;
te(Ua);
ue(Ua, bv);
const q5 = Ua;
var Sl = Ua, KC = Object.defineProperty, Bc = Object.getOwnPropertySymbols, qC = Object.prototype.hasOwnProperty, GC = Object.prototype.propertyIsEnumerable, Ic = (e, n, o) => n in e ? KC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, XC = (e, n) => {
  for (var o in n || (n = {}))
    qC.call(n, o) && Ic(e, o, n[o]);
  if (Bc)
    for (var o of Bc(n))
      GC.call(n, o) && Ic(e, o, n[o]);
  return e;
};
const kv = XC({
  modelValue: String,
  modelModifiers: {
    type: Object,
    default: () => ({})
  },
  type: {
    type: String,
    default: "text"
  },
  textarea: Boolean,
  rows: {
    type: [String, Number],
    default: 8
  },
  maxlength: [String, Number],
  readonly: Boolean,
  resize: Boolean,
  autofocus: Boolean,
  validateTrigger: {
    type: Array,
    default: () => ["onInput", "onClear"]
  },
  rules: Array,
  enterkeyhint: String,
  onFocus: R(),
  onBlur: R(),
  onInput: R(),
  onChange: R(),
  onClear: R(),
  "onUpdate:modelValue": R()
}, Ie(Na, [
  "size",
  "variant",
  "placeholder",
  "line",
  "hint",
  "textColor",
  "focusColor",
  "blurColor",
  "disabled",
  "clearable",
  "onClick"
])), { name: ZC, n: JC, classes: QC } = ee("input"), _C = ["placeholder", "enterkeyhint"], xC = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], eS = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function nS(e, n) {
  const o = ne("var-field-decorator"), t = ne("var-form-details");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[13] || (n[13] = (...r) => e.handleMousedown && e.handleMousedown(...r))
    },
    [
      G(
        o,
        wo(Kt({
          value: e.modelValue,
          id: e.id,
          size: e.size,
          variant: e.variant,
          placeholder: e.placeholder,
          line: e.line,
          hint: e.hint,
          textColor: e.textColor,
          focusColor: e.focusColor,
          blurColor: e.blurColor,
          isFocusing: e.isFocusing,
          errorMessage: e.errorMessage,
          formDisabled: e.formDisabled,
          disabled: e.disabled,
          clearable: e.clearable,
          cursor: e.cursor,
          composing: e.isComposing,
          hintCenter: !e.textarea,
          onClick: e.handleClick,
          onClear: e.handleClear
        })),
        Et({
          "clear-icon": fe(({ clear: r }) => [
            L(e.$slots, "clear-icon", { clear: r })
          ]),
          "append-icon": fe(() => [
            L(e.$slots, "append-icon")
          ]),
          default: fe(() => [
            e.normalizedType === "password" ? (h(), P("input", {
              key: 0,
              tabindex: "-1",
              class: p(e.n("autocomplete")),
              placeholder: e.hint ? void 0 : e.placeholder,
              style: K({
                "--input-placeholder-color": e.placeholderColor
              }),
              enterkeyhint: e.enterkeyhint
            }, null, 14, _C)) : X("v-if", !0),
            e.textarea ? (h(), P("textarea", {
              key: 1,
              class: p(
                e.classes(
                  e.n("input"),
                  e.n("--textarea"),
                  [e.formDisabled || e.disabled, e.n("--disabled")],
                  [e.errorMessage, e.n("--error")],
                  [e.errorMessage, e.n("--caret-error")]
                )
              ),
              ref: "el",
              autocomplete: "new-password",
              id: e.id,
              disabled: e.formDisabled || e.disabled,
              readonly: e.formReadonly || e.readonly,
              type: e.normalizedType,
              value: e.modelValue,
              placeholder: e.hint ? void 0 : e.placeholder,
              maxlength: e.maxlength,
              rows: e.rows,
              enterkeyhint: e.enterkeyhint,
              inputmode: e.type === "number" ? "decimal" : void 0,
              style: K({
                color: e.errorMessage ? void 0 : e.textColor,
                caretColor: e.errorMessage ? void 0 : e.focusColor,
                resize: e.resize ? "vertical" : "none",
                "--input-placeholder-color": e.placeholderColor
              }),
              onFocus: n[0] || (n[0] = (...r) => e.handleFocus && e.handleFocus(...r)),
              onBlur: n[1] || (n[1] = (...r) => e.handleBlur && e.handleBlur(...r)),
              onInput: n[2] || (n[2] = (...r) => e.handleInput && e.handleInput(...r)),
              onChange: n[3] || (n[3] = (...r) => e.handleChange && e.handleChange(...r)),
              onCompositionstart: n[4] || (n[4] = (...r) => e.handleCompositionStart && e.handleCompositionStart(...r)),
              onCompositionend: n[5] || (n[5] = (...r) => e.handleCompositionEnd && e.handleCompositionEnd(...r))
            }, null, 46, xC)) : (h(), P("input", {
              key: 2,
              class: p(
                e.classes(
                  e.n("input"),
                  [e.formDisabled || e.disabled, e.n("--disabled")],
                  [e.errorMessage, e.n("--error")],
                  [e.errorMessage, e.n("--caret-error")]
                )
              ),
              ref: "el",
              autocomplete: "new-password",
              id: e.id,
              disabled: e.formDisabled || e.disabled,
              readonly: e.formReadonly || e.readonly,
              type: e.normalizedType,
              value: e.modelValue,
              placeholder: e.hint ? void 0 : e.placeholder,
              maxlength: e.maxlength,
              enterkeyhint: e.enterkeyhint,
              inputmode: e.type === "number" ? "decimal" : void 0,
              style: K({
                color: e.errorMessage ? void 0 : e.textColor,
                caretColor: e.errorMessage ? void 0 : e.focusColor,
                "--input-placeholder-color": e.placeholderColor
              }),
              onFocus: n[6] || (n[6] = (...r) => e.handleFocus && e.handleFocus(...r)),
              onBlur: n[7] || (n[7] = (...r) => e.handleBlur && e.handleBlur(...r)),
              onInput: n[8] || (n[8] = (...r) => e.handleInput && e.handleInput(...r)),
              onChange: n[9] || (n[9] = (...r) => e.handleChange && e.handleChange(...r)),
              onCompositionstart: n[10] || (n[10] = (...r) => e.handleCompositionStart && e.handleCompositionStart(...r)),
              onCompositionend: n[11] || (n[11] = (...r) => e.handleCompositionEnd && e.handleCompositionEnd(...r))
            }, null, 46, eS))
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots["prepend-icon"] ? {
            name: "prepend-icon",
            fn: fe(() => [
              L(e.$slots, "prepend-icon")
            ]),
            key: "0"
          } : void 0
        ]),
        1040
        /* FULL_PROPS, DYNAMIC_SLOTS */
      ),
      G(t, {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText,
        onMousedown: n[12] || (n[12] = An(() => {
        }, ["stop"]))
      }, Et({
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots["extra-message"] ? {
          name: "extra-message",
          fn: fe(() => [
            L(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"])
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const $v = x({
  name: ZC,
  components: {
    VarFormDetails: En,
    VarFieldDecorator: Vt
  },
  props: kv,
  setup(e) {
    const n = Td(), o = k(null), t = k(!1), r = k(!1), { bindForm: a, form: i } = jn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: c
    } = Yn(), d = B(() => e.disabled || e.readonly ? "" : "text"), f = B(() => e.type === "number" ? "text" : e.type), v = B(() => {
      const { maxlength: _, modelValue: pe } = e;
      return _ ? Qn(pe) ? `0 / ${_}` : `${String(pe).length}/${_}` : "";
    }), y = B(() => {
      const { hint: _, blurColor: pe, focusColor: ye } = e;
      if (!_)
        return l.value ? "var(--field-decorator-error-color)" : t.value ? ye || "var(--field-decorator-focus-color)" : pe || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    });
    S(a, {
      reset: N,
      validate: q,
      resetValidation: c
    }), pn(() => {
      e.autofocus && j();
    });
    function b(_) {
      Ke(() => {
        const { validateTrigger: pe, rules: ye, modelValue: ie } = e;
        s(pe, _, ye, ie);
      });
    }
    function C(_) {
      t.value = !0, S(e.onFocus, _), b("onFocus");
    }
    function w(_) {
      t.value = !1, S(e.onBlur, _), b("onBlur");
    }
    function g(_) {
      const pe = _.target;
      let { value: ye } = pe;
      e.type === "number" && (ye = D(ye));
      const ie = H(ye);
      return ie === e.modelValue && (pe.value = ie), ie;
    }
    function $() {
      r.value = !0;
    }
    function O(_) {
      r.value && (r.value = !1, _.target.dispatchEvent(new Event("input")));
    }
    function z(_) {
      if (r.value)
        return;
      const pe = g(_);
      S(e["onUpdate:modelValue"], pe), S(e.onInput, pe, _), b("onInput");
    }
    function A(_) {
      const pe = M(g(_));
      e.modelModifiers.trim && S(e["onUpdate:modelValue"], pe), S(e.onChange, pe, _), b("onChange");
    }
    function T() {
      const { disabled: _, readonly: pe, clearable: ye, onClear: ie } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || _ || pe || !ye || (S(e["onUpdate:modelValue"], ""), S(ie, ""), b("onClear"));
    }
    function E(_) {
      const { disabled: pe, onClick: ye } = e;
      i != null && i.disabled.value || pe || (S(ye, _), b("onClick"));
    }
    function D(_) {
      const pe = _.indexOf("-"), ye = _.indexOf(".");
      return pe > -1 && (_ = pe === 0 ? "-" + _.replace(/-/g, "") : _.replace(/-/g, "")), ye > -1 && (_ = _.slice(0, ye + 1) + _.slice(ye).replace(/\./g, "")), _.replace(/[^-0-9.]/g, "");
    }
    function M(_) {
      return e.modelModifiers.trim ? _.trim() : _;
    }
    function H(_) {
      return e.maxlength ? _.slice(0, F(e.maxlength)) : _;
    }
    function Y(_) {
      const { disabled: pe } = e;
      i != null && i.disabled.value || pe || _.target === o.value || (j(), Re(_));
    }
    function N() {
      S(e["onUpdate:modelValue"], ""), c();
    }
    function q() {
      return u(e.rules, e.modelValue);
    }
    function j() {
      var _;
      (_ = o.value) == null || _.focus();
    }
    function ce() {
      o.value.blur();
    }
    return {
      el: o,
      id: n,
      isFocusing: t,
      isComposing: r,
      errorMessage: l,
      placeholderColor: y,
      normalizedType: f,
      cursor: d,
      maxlengthText: v,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: JC,
      classes: QC,
      isEmpty: Qn,
      handleFocus: C,
      handleBlur: w,
      handleInput: z,
      handleChange: A,
      handleClear: T,
      handleClick: E,
      handleCompositionStart: $,
      handleCompositionEnd: O,
      handleMousedown: Y,
      validate: q,
      resetValidation: c,
      reset: N,
      focus: j,
      blur: ce
    };
  }
});
$v.render = nS;
var Ha = $v;
te(Ha);
ue(Ha, kv);
const G5 = Ha;
var Vr = Ha;
const wv = {
  type: {
    type: String,
    default: "default"
  },
  href: String,
  target: String,
  rel: String,
  to: [String, Object],
  replace: Boolean,
  underline: {
    type: String,
    default: "always"
  },
  disabled: Boolean,
  textSize: [String, Number],
  textColor: String,
  onClick: R()
}, { name: oS, n: tS, classes: rS } = ee("link");
function aS(e, n) {
  return h(), Pe(vt(e.tag), Ye(e.linkProps, {
    class: e.classes(
      e.n(),
      e.n("$--box"),
      e.n("$--inline-flex"),
      e.n(`--${e.type}`),
      [e.underline !== "none", e.n(`--underline-${e.underline}`)],
      [e.disabled, e.n("--disabled")],
      [e.isFocusing && !e.inMobile(), e.n("--focusing")]
    ),
    style: {
      color: e.textColor,
      fontSize: e.toSizeUnit(e.textSize)
    },
    onClick: e.handleClick,
    onFocus: n[0] || (n[0] = (o) => e.isFocusing = !0),
    onBlur: n[1] || (n[1] = (o) => e.isFocusing = !1)
  }), {
    default: fe(() => [
      L(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "style", "onClick"]);
}
const Cv = x({
  name: oS,
  props: wv,
  setup(e) {
    const n = k(!1), o = B(() => {
      const { disabled: a, href: i, to: l } = e;
      return a ? "span" : i ? "a" : l ? "router-link" : "a";
    }), t = B(() => {
      const { disabled: a, href: i, target: l, to: s, replace: u, rel: c } = e;
      return a ? {} : i ? { href: i, target: l, rel: c } : s ? { to: s, target: l, replace: u } : {};
    });
    function r(a) {
      e.disabled || S(e.onClick, a);
    }
    return {
      tag: o,
      linkProps: t,
      isFocusing: n,
      inMobile: kr,
      n: tS,
      classes: rS,
      handleClick: r,
      toSizeUnit: Oe
    };
  }
});
Cv.render = aS;
var Ya = Cv;
te(Ya);
ue(Ya, wv);
const X5 = Ya;
var Pl = Ya;
const Sv = {
  loading: Boolean,
  immediateCheck: {
    type: Boolean,
    default: !0
  },
  finished: Boolean,
  error: Boolean,
  offset: {
    type: [String, Number],
    default: 0
  },
  loadingText: String,
  finishedText: String,
  errorText: String,
  onLoad: R(),
  "onUpdate:loading": R(),
  "onUpdate:error": R()
}, Pv = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function iS() {
  const { bindChildren: e, childProviders: n, length: o } = yn(
    Pv
  );
  return {
    length: o,
    tabItemList: n,
    bindTabItem: e
  };
}
const zv = Symbol("TAB_ITEM_BIND_LIST_KEY");
function lS() {
  const { parentProvider: e, bindParent: n, index: o } = bn(
    Pv
  );
  return n || Vn("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: o,
    tabsItems: e,
    bindTabsItems: n
  };
}
function sS() {
  const { childProviders: e, bindChildren: n, length: o } = yn(zv);
  return {
    length: o,
    lists: e,
    bindLists: n
  };
}
function uS() {
  const { parentProvider: e, bindParent: n, index: o } = bn(zv);
  return {
    index: o,
    tabItem: e,
    bindTabItem: n
  };
}
var cS = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: dS, n: fS, classes: pS } = ee("list");
function vS(e, n) {
  const o = ne("var-loading"), t = je("ripple");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [
      L(e.$slots, "default"),
      e.loading ? L(e.$slots, "loading", { key: 0 }, () => {
        var r;
        return [
          I(
            "div",
            {
              class: p(e.n("loading"))
            },
            [
              I(
                "div",
                {
                  class: p(e.n("loading-text"))
                },
                re((r = e.loadingText) != null ? r : (e.pt ? e.pt : e.t)("listLoadingText")),
                3
                /* TEXT, CLASS */
              ),
              G(o, {
                size: "mini",
                radius: 10
              })
            ],
            2
            /* CLASS */
          )
        ];
      }) : X("v-if", !0),
      e.finished ? L(e.$slots, "finished", { key: 1 }, () => {
        var r;
        return [
          I(
            "div",
            {
              class: p(e.n("finished"))
            },
            re((r = e.finishedText) != null ? r : (e.pt ? e.pt : e.t)("listFinishedText")),
            3
            /* TEXT, CLASS */
          )
        ];
      }) : X("v-if", !0),
      e.error ? L(e.$slots, "error", { key: 2 }, () => {
        var r;
        return [
          Me((h(), P(
            "div",
            {
              class: p(e.n("error")),
              onClick: n[0] || (n[0] = (...a) => e.load && e.load(...a))
            },
            [
              Be(
                re((r = e.errorText) != null ? r : (e.pt ? e.pt : e.t)("listErrorText")),
                1
                /* TEXT */
              )
            ],
            2
            /* CLASS */
          )), [
            [t]
          ])
        ];
      }) : X("v-if", !0),
      I(
        "div",
        {
          class: p(e.n("detector")),
          ref: "detectorEl"
        },
        null,
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const Ov = x({
  name: dS,
  directives: { Ripple: tn },
  components: { VarLoading: it },
  props: Sv,
  setup(e) {
    const n = k(null), o = k(null), { tabItem: t, bindTabItem: r } = uS(), { t: a } = ao();
    let i;
    S(r, {}), t && de(() => t.current.value, c), de(() => [e.loading, e.error, e.finished], c), pn(() => {
      i = zo(n.value), i.addEventListener("scroll", c), e.immediateCheck && c();
    }), qt(u);
    function l() {
      S(e["onUpdate:error"], !1), S(e["onUpdate:loading"], !0), S(e.onLoad);
    }
    function s() {
      const { bottom: d } = an(i), { bottom: f } = an(o.value);
      return Math.floor(f) - en(e.offset) <= d;
    }
    function u() {
      i && i.removeEventListener("scroll", c);
    }
    function c() {
      return cS(this, null, function* () {
        yield Ke(), !(e.loading || e.finished || e.error || (t == null ? void 0 : t.current.value) === !1 || !s()) && l();
      });
    }
    return {
      listEl: n,
      detectorEl: o,
      pt: a,
      t: rn,
      isNumber: On,
      load: l,
      check: c,
      n: fS,
      classes: pS
    };
  }
});
Ov.render = vS;
var ja = Ov;
te(ja);
ue(ja, Sv);
const Z5 = ja;
var zl = ja;
const mS = {
  value: {
    type: Number,
    default: 0
  },
  opacity: {
    type: Number,
    default: 0
  },
  error: Boolean,
  color: String,
  errorColor: String,
  height: [Number, String],
  top: [Number, String]
}, {
  name: hS,
  classes: gS,
  n: Mc
} = ee("loading-bar");
var bS = x({
  name: hS,
  props: mS,
  setup(e) {
    return () => G("div", {
      class: gS(Mc(), [e.error, Mc("--error")]),
      style: {
        zIndex: Nn.zIndex + 10,
        width: `${e.value}%`,
        opacity: e.opacity,
        height: Oe(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: Oe(e.top)
      }
    }, null);
  }
});
let Tv, Ev, Wa, Dv, Nc, Bv = {};
const yS = {
  value: 0,
  opacity: 0,
  error: !1
}, hn = Qe(yS), kS = (e) => {
  Object.assign(hn, e), Bv = e;
}, $S = () => {
  Object.keys(Bv).forEach((e) => {
    hn[e] !== void 0 && (hn[e] = void 0);
  });
}, Iv = () => {
  Nc || (Nc = !0, ht(bS, hn));
}, Is = () => {
  Tv = window.setTimeout(() => {
    if (hn.value >= 95)
      return;
    let e = Math.random();
    hn.value < 70 && (e = Math.round(5 * Math.random())), hn.value += e, Is();
  }, 200);
}, Ms = () => {
  window.clearTimeout(Ev), window.clearTimeout(Tv), window.clearTimeout(Wa), window.clearTimeout(Dv);
}, wS = () => {
  Ms(), hn.error = !1, hn.value = 0, Iv(), Wa = window.setTimeout(() => {
    hn.opacity = 1;
  }, 200), Is();
}, Mv = () => {
  Ms(), hn.value = 100, Wa = window.setTimeout(() => {
    hn.opacity = 0, Ev = window.setTimeout(() => {
      hn.error = !1;
    }, 250);
  }, 300);
}, CS = () => {
  Ms(), hn.error = !0, hn.value === 100 && (hn.value = 0), Iv(), Wa = window.setTimeout(() => {
    hn.opacity = 1;
  }, 200), Is(), Dv = window.setTimeout(Mv, 300);
}, Nv = {
  start: wS,
  finish: Mv,
  error: CS,
  setDefaultOptions: kS,
  resetDefaultOptions: $S
}, J5 = Nv;
var Ol = Nv;
const Av = {
  tag: {
    type: String,
    default: "div"
  },
  locale: {
    type: String,
    default: "zh-CN"
  },
  messages: {
    type: Object
  }
};
var SS = Object.defineProperty, PS = Object.defineProperties, zS = Object.getOwnPropertyDescriptors, Ac = Object.getOwnPropertySymbols, OS = Object.prototype.hasOwnProperty, TS = Object.prototype.propertyIsEnumerable, Vc = (e, n, o) => n in e ? SS(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ES = (e, n) => {
  for (var o in n || (n = {}))
    OS.call(n, o) && Vc(e, o, n[o]);
  if (Ac)
    for (var o of Ac(n))
      TS.call(n, o) && Vc(e, o, n[o]);
  return e;
}, DS = (e, n) => PS(e, zS(n));
const { name: BS, n: IS } = ee("locale-provider"), MS = x({
  name: BS,
  props: Av,
  setup(e, { slots: n }) {
    const o = B(
      () => {
        var r;
        return Object.entries((r = e.messages) != null ? r : {}).reduce((a, [i, l]) => (a[i] = DS(ES({}, l), {
          lang: i
        }), a), {});
      }
    );
    eb({
      t
    });
    function t(r) {
      if ($r(o.value, e.locale) && $r(o.value[e.locale], r))
        return o.value[e.locale][r];
    }
    return () => Yr(
      e.tag,
      {
        class: IS()
      },
      S(n.default)
    );
  }
});
var Ka = MS;
te(Ka);
ue(Ka, Av);
const Q5 = Ka;
var Tl = Ka;
const Ns = {
  show: Boolean,
  disabled: Boolean,
  trigger: {
    type: String,
    default: "click"
  },
  reference: String,
  placement: {
    type: String,
    default: "cover-top-start"
  },
  strategy: {
    type: String,
    default: "absolute"
  },
  offsetX: {
    type: [Number, String],
    default: 0
  },
  offsetY: {
    type: [Number, String],
    default: 0
  },
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  sameWidth: Boolean,
  elevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  popoverClass: String,
  closeOnClickReference: Boolean,
  closeOnKeyEscape: {
    type: Boolean,
    default: !0
  },
  onOpen: R(),
  onOpened: R(),
  onClose: R(),
  onClosed: R(),
  onClickOutside: R(),
  "onUpdate:show": R()
}, { name: NS, n: AS, classes: VS } = ee("menu");
function LS(e, n) {
  return h(), P(
    "div",
    {
      ref: "host",
      class: p(e.classes(e.n(), e.n("$--box"))),
      onClick: n[3] || (n[3] = (...o) => e.handleHostClick && e.handleHostClick(...o)),
      onMouseenter: n[4] || (n[4] = (...o) => e.handleHostMouseenter && e.handleHostMouseenter(...o)),
      onMouseleave: n[5] || (n[5] = (...o) => e.handleHostMouseleave && e.handleHostMouseleave(...o))
    },
    [
      L(e.$slots, "default"),
      (h(), Pe(no, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        G(_e, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: fe(() => [
            Me(I(
              "div",
              {
                ref: "popover",
                style: K({
                  zIndex: e.zIndex,
                  width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
                }),
                class: p(
                  e.classes(
                    e.n("menu"),
                    e.n("$--box"),
                    e.popoverClass,
                    [e.defaultStyle, e.n("--menu-background-color")],
                    [e.defaultStyle, e.formatElevation(e.elevation, 3)]
                  )
                ),
                onClick: n[0] || (n[0] = An(() => {
                }, ["stop"])),
                onMouseenter: n[1] || (n[1] = (...o) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...o)),
                onMouseleave: n[2] || (n[2] = (...o) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...o))
              },
              [
                L(e.$slots, "menu")
              ],
              38
              /* CLASS, STYLE, NEED_HYDRATION */
            ), [
              [Xn, e.show]
            ])
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["name", "onAfterEnter", "onAfterLeave"])
      ], 8, ["to", "disabled"]))
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const Vv = x({
  name: NS,
  props: Ns,
  setup(e) {
    const { disabled: n } = Go(), {
      popover: o,
      host: t,
      hostSize: r,
      show: a,
      zIndex: i,
      handleHostClick: l,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: c,
      handlePopoverMouseleave: d,
      handlePopoverClose: f,
      handleClosed: v,
      // expose
      open: y,
      // expose
      close: m,
      // expose
      resize: b
    } = Qp(e);
    return {
      popover: o,
      host: t,
      hostSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      formatElevation: fn,
      toSizeUnit: Oe,
      n: AS,
      classes: VS,
      handleHostClick: l,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: c,
      handlePopoverMouseleave: d,
      handlePopoverClose: f,
      handleClosed: v,
      resize: b,
      open: y,
      close: m
    };
  }
});
Vv.render = LS;
var qa = Vv;
te(qa);
ue(qa, Ns);
const _5 = qa;
var Ut = qa;
const Lv = Symbol("MENU_SELECT_BIND_MENU_OPTION_KEY");
function RS() {
  const { length: e, childProviders: n, bindChildren: o } = yn(
    Lv
  );
  return {
    length: e,
    menuOptions: n,
    bindMenuOptions: o
  };
}
function FS() {
  const { index: e, parentProvider: n, bindParent: o } = bn(
    Lv
  );
  return o || Vn("MenuOption", "<var-menu-option/> must in <var-menu-select/>"), {
    index: e,
    menuSelect: n,
    bindMenuSelect: o
  };
}
const Rv = {
  label: {},
  value: {},
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  }
}, { name: US, n: HS, classes: YS } = ee("menu-option"), jS = ["tabindex"];
function WS(e, n) {
  const o = ne("var-checkbox"), t = ne("var-hover-overlay"), r = je("ripple"), a = je("hover");
  return Me((h(), P("div", {
    ref: "root",
    class: p(
      e.classes(e.n(), e.n("$--box"), e.n(`--${e.size}`), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")])
    ),
    tabindex: e.disabled ? void 0 : "-1",
    onClick: n[2] || (n[2] = (...i) => e.handleClick && e.handleClick(...i)),
    onFocus: n[3] || (n[3] = (i) => e.isFocusing = !0),
    onBlur: n[4] || (n[4] = (i) => e.isFocusing = !1)
  }, [
    I(
      "div",
      {
        class: p(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")]))
      },
      null,
      2
      /* CLASS */
    ),
    e.multiple ? (h(), Pe(o, {
      key: 0,
      ref: "checkbox",
      modelValue: e.optionSelected,
      "onUpdate:modelValue": n[0] || (n[0] = (i) => e.optionSelected = i),
      disabled: e.disabled,
      onClick: n[1] || (n[1] = An(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, ["modelValue", "disabled", "onChange"])) : X("v-if", !0),
    L(e.$slots, "default", {}, () => [
      I(
        "div",
        {
          class: p(e.classes(e.n("text"), e.n("$--ellipsis")))
        },
        re(e.label),
        3
        /* TEXT, CLASS */
      )
    ]),
    G(t, {
      hovering: e.hovering && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 42, jS)), [
    [r, { disabled: e.disabled || !e.ripple }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const Fv = x({
  name: US,
  directives: { Ripple: tn, Hover: Tn },
  components: {
    VarCheckbox: lt,
    VarHoverOverlay: Ln
  },
  props: Rv,
  setup(e) {
    const n = k(), o = k(!1), t = k(!1), r = B(() => t.value), a = B(() => e.label), i = B(() => e.value), { menuSelect: l, bindMenuSelect: s } = FS(), { size: u, multiple: c, onSelect: d, computeLabel: f } = l, { hovering: v, handleHovering: y } = Jn(), m = {
      label: a,
      value: i,
      selected: r,
      sync: $
    };
    de([() => e.label, () => e.value], f), s(m), We(() => window, "keydown", C), We(() => window, "keyup", w);
    function b() {
      e.disabled || g();
    }
    function C(O) {
      o.value && ((O.key === " " || O.key === "Enter") && Re(O), O.key === "Enter" && n.value.click());
    }
    function w(O) {
      o.value && O.key === " " && (Re(O), n.value.click());
    }
    function g() {
      c.value && (t.value = !t.value), d(m);
    }
    function $(O) {
      t.value = O;
    }
    return {
      root: n,
      optionSelected: t,
      size: u,
      multiple: c,
      hovering: v,
      isFocusing: o,
      n: HS,
      classes: YS,
      handleHovering: y,
      handleClick: b,
      handleSelect: g
    };
  }
});
Fv.render = WS;
var Ga = Fv;
te(Ga);
ue(Ga, Rv);
const x5 = Ga;
var Lr = Ga, KS = Object.defineProperty, Lc = Object.getOwnPropertySymbols, qS = Object.prototype.hasOwnProperty, GS = Object.prototype.propertyIsEnumerable, Rc = (e, n, o) => n in e ? KS(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, XS = (e, n) => {
  for (var o in n || (n = {}))
    qS.call(n, o) && Rc(e, o, n[o]);
  if (Lc)
    for (var o of Lc(n))
      GS.call(n, o) && Rc(e, o, n[o]);
  return e;
};
const Uv = XS({
  modelValue: {
    type: [String, Number, Boolean, Array],
    default: void 0
  },
  size: {
    type: String,
    default: "normal"
  },
  multiple: Boolean,
  scrollable: Boolean,
  closeOnSelect: {
    type: Boolean,
    default: !0
  },
  "onUpdate:modelValue": R()
}, Ie(Ns, [
  "show",
  "disabled",
  "trigger",
  "reference",
  "placement",
  "strategy",
  "offsetX",
  "offsetY",
  "teleport",
  "sameWidth",
  "elevation",
  "popoverClass",
  "closeOnClickReference",
  "onOpen",
  "onOpened",
  "onClose",
  "onClosed",
  "onClickOutside",
  "onUpdate:show"
]));
function Hv(e) {
  const {
    multiple: n,
    modelValue: o,
    optionProviders: t,
    optionProvidersLength: r
  } = e, a = k(""), i = k([]);
  de(o, d, { deep: !0 }), de(r, d);
  function l() {
    const f = n(), v = o();
    f && (i.value = v.map(s)), !f && !Qn(v) && (a.value = s(v)), !f && Qn(v) && (a.value = "");
  }
  function s(f) {
    var v;
    const y = t();
    let m = y.find(({ value: b }) => b.value === f);
    return m || (m = y.find(({ label: b }) => b.value === f)), (v = m == null ? void 0 : m.label.value) != null ? v : "";
  }
  function u({ value: f, label: v }) {
    var y;
    return (y = f.value) != null ? y : v.value;
  }
  function c(f) {
    const v = n(), y = t();
    return v ? y.filter(({ selected: m }) => m.value).map(u) : u(f);
  }
  function d() {
    const f = n(), v = o(), y = t();
    f ? y.forEach((m) => m.sync(v.includes(u(m)))) : y.forEach((m) => m.sync(v === u(m))), l();
  }
  return {
    label: a,
    labels: i,
    computeLabel: l,
    getSelectedValue: c
  };
}
const { name: ZS, n: JS, classes: QS } = ee("menu-select");
function _S(e, n) {
  const o = ne("var-menu");
  return h(), Pe(o, {
    ref: "menu",
    tabindex: "-1",
    class: p(e.n()),
    disabled: e.disabled,
    trigger: e.trigger,
    reference: e.reference,
    placement: e.placement,
    strategy: e.strategy,
    "offset-x": e.offsetX,
    "offset-y": e.offsetY,
    teleport: e.teleport,
    "same-width": e.sameWidth,
    elevation: e.elevation,
    "default-style": !1,
    "popover-class": e.popoverClass,
    "close-on-click-reference": e.closeOnClickReference,
    "close-on-key-escape": !1,
    show: e.show,
    "onUpdate:show": n[0] || (n[0] = (t) => e.show = t),
    onOpen: e.onOpen,
    onOpened: e.onOpened,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onClickOutside: e.onClickOutside
  }, {
    menu: fe(() => [
      I(
        "div",
        {
          ref: "menuOptionsRef",
          class: p(e.classes(e.n("menu"), e.formatElevation(e.elevation, 3), [e.scrollable, e.n("--scrollable")]))
        },
        [
          L(e.$slots, "options")
        ],
        2
        /* CLASS */
      )
    ]),
    default: fe(() => [
      L(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "disabled", "trigger", "reference", "placement", "strategy", "offset-x", "offset-y", "teleport", "same-width", "elevation", "popover-class", "close-on-click-reference", "show", "onOpen", "onOpened", "onClose", "onClosed", "onClickOutside"]);
}
const Yv = x({
  name: ZS,
  components: { VarMenu: Ut },
  props: Uv,
  setup(e) {
    const n = k(null), o = k(null), t = Zn(e, "show"), { menuOptions: r, length: a, bindMenuOptions: i } = RS(), { computeLabel: l, getSelectedValue: s } = Hv({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => r,
      optionProvidersLength: () => a.value
    }), u = {
      size: B(() => e.size),
      multiple: B(() => e.multiple),
      computeLabel: l,
      onSelect: c
    };
    i(u), We(() => window, "keydown", d);
    function c(m) {
      const { multiple: b, closeOnSelect: C } = e;
      S(e["onUpdate:modelValue"], s(m)), !b && C && (n.value.$el.focus(), v());
    }
    function d(m) {
      if (e.disabled || !t.value)
        return;
      const { key: b } = m;
      if (["Escape", "ArrowDown", "ArrowUp"].includes(b) && Re(m), b === "Escape") {
        n.value.$el.focus(), v();
        return;
      }
      (b === "ArrowDown" || b === "ArrowUp") && Fd(n.value.$el, o.value, b);
    }
    function f() {
      var m;
      (m = n.value) == null || m.open();
    }
    function v() {
      var m;
      (m = n.value) == null || m.close();
    }
    function y() {
      var m;
      (m = n.value) == null || m.resize();
    }
    return {
      show: t,
      menu: n,
      menuOptionsRef: o,
      n: JS,
      classes: QS,
      formatElevation: fn,
      open: f,
      close: v,
      resize: y
    };
  }
});
Yv.render = _S;
var Xa = Yv;
te(Xa);
ue(Xa, Uv);
const eT = Xa;
var Rr = Xa;
const jv = Symbol("SELECT_BIND_OPTION_KEY");
function xS() {
  const { length: e, childProviders: n, bindChildren: o } = yn(jv);
  return {
    length: e,
    options: n,
    bindOptions: o
  };
}
function e6() {
  const { index: e, parentProvider: n, bindParent: o } = bn(jv);
  return o || Vn("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: o
  };
}
const Wv = {
  label: {},
  value: {},
  disabled: Boolean,
  // internal
  option: Object
}, { name: n6, n: o6, classes: t6 } = ee("option"), r6 = ["tabindex"];
function a6(e, n) {
  const o = ne("var-checkbox"), t = ne("maybe-v-node"), r = ne("var-hover-overlay"), a = je("ripple"), i = je("hover");
  return Me((h(), P("div", {
    ref: "root",
    class: p(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")])),
    style: K({
      color: e.optionSelected ? e.focusColor : void 0
    }),
    tabindex: e.disabled ? void 0 : "-1",
    onFocus: n[2] || (n[2] = (l) => e.isFocusing = !0),
    onBlur: n[3] || (n[3] = (l) => e.isFocusing = !1),
    onClick: n[4] || (n[4] = (...l) => e.handleClick && e.handleClick(...l))
  }, [
    I(
      "div",
      {
        class: p(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
        style: K({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ),
    e.multiple ? (h(), Pe(o, {
      key: 0,
      ref: "checkbox",
      modelValue: e.optionSelected,
      "onUpdate:modelValue": n[0] || (n[0] = (l) => e.optionSelected = l),
      "checked-color": e.focusColor,
      disabled: e.disabled,
      onClick: n[1] || (n[1] = An(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, ["modelValue", "checked-color", "disabled", "onChange"])) : X("v-if", !0),
    L(e.$slots, "default", { selected: e.optionSelected }, () => [
      I(
        "div",
        {
          class: p(e.classes(e.n("text"), e.n("$--ellipsis")))
        },
        [
          G(t, { is: e.labelVNode }, null, 8, ["is"])
        ],
        2
        /* CLASS */
      )
    ]),
    G(r, {
      hovering: e.hovering && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 46, r6)), [
    [a, { disabled: e.disabled }],
    [i, e.handleHovering, "desktop"]
  ]);
}
const Kv = x({
  name: n6,
  directives: { Ripple: tn, Hover: Tn },
  components: {
    VarCheckbox: lt,
    VarHoverOverlay: Ln,
    MaybeVNode: jr
  },
  props: Wv,
  setup(e) {
    const n = k(), o = k(!1), t = k(!1), r = B(() => t.value), a = B(
      () => {
        var O;
        return oo(e.label) ? e.label(
          (O = e.option) != null ? O : {
            label: e.label,
            value: e.value,
            disabled: e.disabled
          },
          t.value
        ) : e.label;
      }
    ), i = B(() => e.value), { select: l, bindSelect: s } = e6(), { multiple: u, focusColor: c, onSelect: d, computeLabel: f } = l, { hovering: v, handleHovering: y } = Jn(), m = {
      label: a,
      value: i,
      selected: r,
      sync: $
    };
    de([() => e.label, () => e.value], f), s(m), We(() => window, "keydown", C), We(() => window, "keyup", w);
    function b() {
      e.disabled || g();
    }
    function C(O) {
      o.value && ((O.key === " " || O.key === "Enter") && Re(O), O.key === "Enter" && n.value.click());
    }
    function w(O) {
      o.value && O.key === " " && (Re(O), n.value.click());
    }
    function g() {
      u.value && (t.value = !t.value), d(m);
    }
    function $(O) {
      t.value = O;
    }
    return {
      root: n,
      optionSelected: t,
      multiple: u,
      focusColor: c,
      hovering: v,
      isFocusing: o,
      labelVNode: a,
      n: o6,
      classes: t6,
      handleHovering: y,
      handleClick: b,
      handleSelect: g
    };
  }
});
Kv.render = a6;
var Za = Kv;
te(Za);
ue(Za, Wv);
const nT = Za;
var Fr = Za;
const qv = {
  show: Boolean,
  lockScroll: {
    type: Boolean,
    default: !0
  },
  teleport: [String, Object, Boolean],
  closeOnKeyEscape: {
    type: Boolean,
    default: !0
  },
  onClick: R(),
  onKeyEscape: R(),
  "onUpdate:show": R()
}, {
  name: i6,
  n: Fc
} = ee("overlay");
var Ja = x({
  name: i6,
  inheritAttrs: !1,
  props: qv,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const {
      zIndex: t
    } = Xt(() => e.show, 1), {
      onStackTop: r
    } = us(() => e.show, t), {
      disabled: a
    } = Go();
    Gt(() => e.show, () => e.lockScroll), We(() => window, "keydown", i);
    function i(c) {
      !r() || c.key !== "Escape" || !e.show || (S(e.onKeyEscape), e.closeOnKeyEscape && (Re(c), S(e["onUpdate:show"], !1)));
    }
    function l() {
      S(e.onClick), S(e["onUpdate:show"], !1);
    }
    function s() {
      return G("div", Ye({
        class: Fc(),
        style: {
          zIndex: t.value
        }
      }, o, {
        onClick: l
      }), [S(n.default)]);
    }
    function u() {
      return G(_e, {
        name: Fc("--fade")
      }, {
        default: () => [e.show && s()]
      });
    }
    return () => {
      const {
        teleport: c
      } = e;
      return c ? G(no, {
        to: c,
        disabled: a.value
      }, {
        default: () => [u()]
      }) : u();
    };
  }
});
te(Ja);
ue(Ja, qv);
const oT = Ja;
var El = Ja;
const Gv = {
  current: [Number, String],
  size: {
    type: [Number, String],
    default: 10
  },
  total: {
    type: [Number, String],
    default: 0
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  maxPagerCount: {
    type: Number,
    default: 3
  },
  disabled: Boolean,
  simple: {
    type: Boolean,
    default: !0
  },
  showSizeChanger: {
    type: Boolean,
    default: !0
  },
  showQuickJumper: Boolean,
  sizeOption: {
    type: Array,
    default: () => [10, 20, 50, 100]
  },
  showTotal: Function,
  onChange: R(),
  "onUpdate:current": R(),
  "onUpdate:size": R()
}, { name: l6, n: s6, classes: u6 } = ee("pagination"), c6 = ["item-mode", "onClick"];
function d6(e, n) {
  const o = ne("var-icon"), t = ne("var-input"), r = ne("var-menu-option"), a = ne("var-menu-select"), i = je("ripple");
  return h(), P(
    "ul",
    {
      class: p(e.n())
    },
    [
      Me((h(), P(
        "li",
        {
          class: p(
            e.classes(
              e.n("item"),
              e.n("prev"),
              [e.current <= 1 || e.disabled, e.n("item--disabled")],
              [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)]
            )
          ),
          onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
        },
        [
          L(e.$slots, "prev", {}, () => [
            G(o, { name: "chevron-left" })
          ])
        ],
        2
        /* CLASS */
      )), [
        [i, { disabled: e.current <= 1 || e.disabled }]
      ]),
      e.simple ? (h(), P(
        "li",
        {
          key: 0,
          class: p(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
        },
        [
          G(t, {
            "var-pagination-cover": "",
            hint: !1,
            disabled: e.disabled,
            modelValue: e.simpleCurrentValue,
            "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleCurrentValue = l),
            onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleCurrentValue, l)),
            onKeydown: n[3] || (n[3] = Rs((l) => e.setPage("simple", e.simpleCurrentValue, l), ["enter"]))
          }, null, 8, ["disabled", "modelValue"]),
          I("span", null, [
            Be(
              " / " + re(e.pageCount) + " ",
              1
              /* TEXT */
            ),
            I(
              "div",
              {
                class: p(e.n("simple-line"))
              },
              null,
              2
              /* CLASS */
            )
          ])
        ],
        2
        /* CLASS */
      )) : (h(!0), P(
        Ae,
        { key: 1 },
        Ze(e.pageList, (l, s) => Me((h(), P("li", {
          key: s,
          "item-mode": e.getMode(l, s),
          class: p(
            e.classes(
              e.n("item"),
              e.formatElevation(e.elevation, 2),
              [l === e.current && !e.disabled, e.n("item--active")],
              [e.isHideEllipsis(l, s), e.n("item--hide")],
              [e.disabled, e.n("item--disabled")],
              [l === e.current && e.disabled, e.n("item--disabled--active")]
            )
          ),
          onClick: (u) => e.clickItem(l, s)
        }, [
          Be(
            re(l),
            1
            /* TEXT */
          )
        ], 10, c6)), [
          [i, { disabled: e.disabled }]
        ])),
        128
        /* KEYED_FRAGMENT */
      )),
      Me((h(), P(
        "li",
        {
          class: p(
            e.classes(
              e.n("item"),
              e.n("next"),
              [e.current >= e.pageCount || e.disabled, e.n("item--disabled")],
              [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)]
            )
          ),
          onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
        },
        [
          L(e.$slots, "next", {}, () => [
            G(o, { name: "chevron-right" })
          ])
        ],
        2
        /* CLASS */
      )), [
        [i, { disabled: e.current >= e.pageCount || e.disabled }]
      ]),
      e.showSizeChanger ? (h(), P(
        "li",
        {
          key: 2,
          class: p(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
        },
        [
          G(a, {
            placement: "cover-top",
            disabled: e.disabled,
            modelValue: e.size,
            "onUpdate:modelValue": n[5] || (n[5] = (l) => e.size = l)
          }, {
            options: fe(() => [
              (h(!0), P(
                Ae,
                null,
                Ze(e.sizeOption, (l, s) => (h(), Pe(r, {
                  key: s,
                  value: l,
                  onClick: e.clickSize
                }, {
                  default: fe(() => [
                    Be(
                      re(l) + re((e.pt ? e.pt : e.t)("paginationItem")) + " / " + re((e.pt ? e.pt : e.t)("paginationPage")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["value", "onClick"]))),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            default: fe(() => [
              I(
                "div",
                {
                  class: p(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")]))
                },
                [
                  I(
                    "span",
                    null,
                    re(e.size) + re((e.pt ? e.pt : e.t)("paginationItem")) + " / " + re((e.pt ? e.pt : e.t)("paginationPage")),
                    1
                    /* TEXT */
                  ),
                  G(o, {
                    class: p(e.n("size--open-icon")),
                    "var-pagination-cover": "",
                    name: "menu-down"
                  }, null, 8, ["class"])
                ],
                2
                /* CLASS */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled", "modelValue"])
        ],
        2
        /* CLASS */
      )) : X("v-if", !0),
      e.showQuickJumper && !e.simple ? (h(), P(
        "li",
        {
          key: 3,
          class: p(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
        },
        [
          Be(
            re((e.pt ? e.pt : e.t)("paginationJump")) + " ",
            1
            /* TEXT */
          ),
          G(t, {
            modelValue: e.quickJumperValue,
            "onUpdate:modelValue": n[6] || (n[6] = (l) => e.quickJumperValue = l),
            disabled: e.disabled,
            hint: !1,
            "var-pagination-cover": "",
            onBlur: n[7] || (n[7] = (l) => e.setPage("quick", e.quickJumperValue, l)),
            onKeydown: n[8] || (n[8] = Rs((l) => e.setPage("quick", e.quickJumperValue, l), ["enter"]))
          }, null, 8, ["modelValue", "disabled"])
        ],
        2
        /* CLASS */
      )) : X("v-if", !0),
      e.totalText ? (h(), P(
        "li",
        {
          key: 4,
          class: p(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
        },
        re(e.totalText),
        3
        /* TEXT, CLASS */
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Xv = x({
  name: l6,
  components: {
    VarMenuSelect: Rr,
    VarMenuOption: Lr,
    VarIcon: Je,
    VarInput: Vr
  },
  directives: { Ripple: tn },
  props: Gv,
  setup(e) {
    const n = k(""), o = k("1"), t = k(!1), r = k(!1), a = k(F(e.current) || 1), i = k(F(e.size) || 10), l = k([]), s = B(() => Math.ceil(e.maxPagerCount / 2)), u = B(() => Math.ceil(F(e.total) / F(i.value))), c = B(() => {
      const g = i.value * (a.value - 1) + 1, $ = Math.min(i.value * a.value, F(e.total));
      return [g, $];
    }), d = B(() => e.showTotal ? e.showTotal(F(e.total), c.value) : ""), { t: f } = ao();
    de([() => e.current, () => e.size], ([g, $]) => {
      a.value = F(g) || 1, i.value = F($ || 10);
    }), de(
      [a, i, u],
      ([g, $, O], [z, A]) => {
        let T = [];
        const { maxPagerCount: E, total: D, onChange: M } = e, H = Math.ceil(F(D) / F(A)), Y = O - (E - s.value) - 1;
        if (o.value = `${g}`, O - 2 > E) {
          if (z === void 0 || O !== H)
            for (let N = 2; N < E + 2; N++)
              T.push(N);
          if (g <= E && g < Y) {
            T = [];
            for (let N = 1; N < E + 1; N++)
              T.push(N + 1);
            t.value = !0, r.value = !1;
          }
          if (g > E && g < Y) {
            T = [];
            for (let N = 1; N < E + 1; N++)
              T.push(g + N - s.value);
            t.value = g === 2 && E === 1, r.value = !1;
          }
          if (g >= Y) {
            T = [];
            for (let N = 1; N < E + 1; N++)
              T.push(O - (E - N) - 1);
            t.value = !1, r.value = !0;
          }
          T = [1, "...", ...T, "...", O];
        } else
          for (let N = 1; N <= O; N++)
            T.push(N);
        l.value = T, z != null && O > 0 && S(M, g, $), S(e["onUpdate:current"], g), S(e["onUpdate:size"], $);
      },
      {
        immediate: !0
      }
    );
    function v(g, $) {
      return On(g) ? !1 : $ === 1 ? t.value : r.value;
    }
    function y(g, $) {
      return On(g) ? "basic" : $ === 1 ? "head" : "tail";
    }
    function m(g, $) {
      if (!(g === a.value || e.disabled)) {
        if (g === "...") {
          a.value = $ === 1 ? Math.max(a.value - e.maxPagerCount, 1) : Math.min(a.value + e.maxPagerCount, u.value);
          return;
        }
        if (g === "prev") {
          a.value = C(a.value - 1);
          return;
        }
        if (g === "next") {
          a.value = C(a.value + 1);
          return;
        }
        On(g) && (a.value = g);
      }
    }
    function b() {
      const g = C(a.value);
      o.value = String(g), a.value = g;
    }
    function C(g) {
      return g > u.value ? u.value : g < 1 ? 1 : g;
    }
    function w(g, $, O) {
      O.target.blur();
      const z = C(F($));
      o.value = String(z), a.value = z, g === "quick" && (n.value = "");
    }
    return {
      current: a,
      size: i,
      pageCount: u,
      pageList: l,
      quickJumperValue: n,
      simpleCurrentValue: o,
      totalText: d,
      pt: f,
      t: rn,
      n: s6,
      classes: u6,
      getMode: y,
      isHideEllipsis: v,
      clickItem: m,
      clickSize: b,
      setPage: w,
      toNumber: F,
      formatElevation: fn
    };
  }
});
Xv.render = d6;
var Qa = Xv;
te(Qa);
ue(Qa, Gv);
const tT = Qa;
var Dl = Qa;
const Zv = {
  elevation: {
    type: [Boolean, Number, String],
    default: !1
  },
  ripple: Boolean,
  radius: [Number, String],
  width: [Number, String],
  height: [Number, String],
  round: Boolean,
  inline: Boolean,
  onClick: R()
}, { name: f6, n: p6, classes: v6 } = ee("paper");
function m6(e, n) {
  const o = je("ripple");
  return Me((h(), P(
    "div",
    {
      class: p(
        e.classes(
          e.n(),
          e.n("$--box"),
          e.formatElevation(e.elevation, 2),
          [e.onClick, e.n("--cursor")],
          [e.round, e.n("--round")],
          [e.inline, e.n("$--inline-flex")]
        )
      ),
      style: K({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      }),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      L(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [o, { disabled: !e.ripple }]
  ]);
}
const Jv = x({
  name: f6,
  directives: { Ripple: tn },
  props: Zv,
  setup(e) {
    function n(o) {
      S(e.onClick, o);
    }
    return {
      n: p6,
      classes: v6,
      formatElevation: fn,
      toSizeUnit: Oe,
      handleClick: n
    };
  }
});
Jv.render = m6;
var _a = Jv;
te(_a);
ue(_a, Zv);
const rT = _a;
var Bl = _a, h6 = Object.defineProperty, Uc = Object.getOwnPropertySymbols, g6 = Object.prototype.hasOwnProperty, b6 = Object.prototype.propertyIsEnumerable, Hc = (e, n, o) => n in e ? h6(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, y6 = (e, n) => {
  for (var o in n || (n = {}))
    g6.call(n, o) && Hc(e, o, n[o]);
  if (Uc)
    for (var o of Uc(n))
      b6.call(n, o) && Hc(e, o, n[o]);
  return e;
};
const Qv = y6({
  modelValue: {
    type: Array,
    default: () => []
  },
  columns: {
    type: Array,
    default: () => []
  },
  title: String,
  textKey: {
    type: String,
    default: "text"
  },
  valueKey: {
    type: String,
    default: "value"
  },
  childrenKey: {
    type: String,
    default: "children"
  },
  toolbar: {
    type: Boolean,
    default: !0
  },
  cascade: Boolean,
  optionHeight: {
    type: [Number, String],
    default: 44
  },
  optionCount: {
    type: [Number, String],
    default: 6
  },
  confirmButtonText: String,
  cancelButtonText: String,
  confirmButtonTextColor: String,
  cancelButtonTextColor: String,
  // dynamic internal
  dynamic: Boolean,
  onChange: R(),
  onConfirm: R(),
  onCancel: R(),
  "onUpdate:modelValue": R()
}, Ie(gt, [
  "show",
  "onUpdate:show",
  "closeOnClickOverlay",
  "closeOnKeyEscape",
  "teleport",
  "safeArea",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  "onRouteChange",
  "onKeyEscape"
])), { name: k6, n: $6, classes: w6 } = ee("picker"), Yc = 300, C6 = 15, jc = 200, S6 = 1e3;
let Wc = 0;
const P6 = ["onTouchstartPassive", "onTouchmove", "onTouchend"], z6 = ["onTransitionend"], O6 = ["onClick"];
function T6(e, n) {
  const o = ne("var-button");
  return h(), Pe(
    vt(e.dynamic ? e.n("$-popup") : e.Transition),
    Ye(
      e.dynamic ? {
        onOpen: e.onOpen,
        onOpened: e.onOpened,
        onClose: e.onClose,
        onClosed: e.onClosed,
        onClickOverlay: e.onClickOverlay,
        onRouteChange: e.onRouteChange,
        onKeyEscape: e.onKeyEscape,
        closeOnClickOverlay: e.closeOnClickOverlay,
        closeOnKeyEscape: e.closeOnKeyEscape,
        teleport: e.teleport,
        show: e.show,
        safeArea: e.safeArea,
        "onUpdate:show": e.handlePopupUpdateShow,
        position: "bottom",
        class: e.n("popup")
      } : null,
      { "var-picker-cover": "" }
    ),
    {
      default: fe(() => [
        I(
          "div",
          Ye({
            class: e.n()
          }, e.$attrs),
          [
            e.toolbar ? (h(), P(
              "div",
              {
                key: 0,
                class: p(e.n("toolbar"))
              },
              [
                L(e.$slots, "cancel", {}, () => [
                  G(o, {
                    class: p(e.n("cancel-button")),
                    "var-picker-cover": "",
                    text: "",
                    "text-color": e.cancelButtonTextColor,
                    onClick: e.cancel
                  }, {
                    default: fe(() => {
                      var t;
                      return [
                        Be(
                          re((t = e.cancelButtonText) != null ? t : (e.pt ? e.pt : e.t)("pickerCancelButtonText")),
                          1
                          /* TEXT */
                        )
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  }, 8, ["class", "text-color", "onClick"])
                ]),
                L(e.$slots, "title", {}, () => {
                  var t;
                  return [
                    I(
                      "div",
                      {
                        class: p(e.n("title"))
                      },
                      re((t = e.title) != null ? t : (e.pt ? e.pt : e.t)("pickerTitle")),
                      3
                      /* TEXT, CLASS */
                    )
                  ];
                }),
                L(e.$slots, "confirm", {}, () => [
                  G(o, {
                    class: p(e.n("confirm-button")),
                    text: "",
                    "var-picker-cover": "",
                    "text-color": e.confirmButtonTextColor,
                    onClick: e.confirm
                  }, {
                    default: fe(() => {
                      var t;
                      return [
                        Be(
                          re((t = e.confirmButtonText) != null ? t : (e.pt ? e.pt : e.t)("pickerConfirmButtonText")),
                          1
                          /* TEXT */
                        )
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  }, 8, ["class", "text-color", "onClick"])
                ])
              ],
              2
              /* CLASS */
            )) : X("v-if", !0),
            I(
              "div",
              {
                class: p(e.n("columns")),
                style: K({ height: `${e.columnHeight}px` })
              },
              [
                (h(!0), P(
                  Ae,
                  null,
                  Ze(e.scrollColumns, (t) => (h(), P("div", {
                    class: p(e.n("column")),
                    key: t.id,
                    onTouchstartPassive: (r) => e.handleTouchstart(r, t),
                    onTouchmove: An((r) => e.handleTouchmove(r, t), ["prevent"]),
                    onTouchend: (r) => e.handleTouchend(t)
                  }, [
                    I("div", {
                      class: p(e.n("scroller")),
                      ref_for: !0,
                      ref: (r) => e.setScrollEl(r, t),
                      style: K({
                        transform: `translateY(${t.translate}px)`,
                        transitionDuration: `${t.duration}ms`,
                        transitionProperty: t.duration ? "transform" : "none"
                      }),
                      onTransitionend: (r) => e.handleTransitionend(t)
                    }, [
                      (h(!0), P(
                        Ae,
                        null,
                        Ze(t.column, (r, a) => (h(), P("div", {
                          key: e.getValue(r),
                          class: p(e.classes(e.n("option"), r.className)),
                          style: K({ height: `${e.optionHeight}px` }),
                          onClick: (i) => e.handleClick(t, a)
                        }, [
                          I(
                            "div",
                            {
                              class: p(e.classes(e.n("text"), r.textClassName))
                            },
                            re(r[e.getOptionKey("text")]),
                            3
                            /* TEXT, CLASS */
                          )
                        ], 14, O6))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ], 46, z6)
                  ], 42, P6))),
                  128
                  /* KEYED_FRAGMENT */
                )),
                I(
                  "div",
                  {
                    class: p(e.n("picked")),
                    style: K({
                      top: `${e.center}px`,
                      height: `${e.optionHeight}px`
                    })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ),
                I(
                  "div",
                  {
                    class: p(e.n("mask")),
                    style: K({ backgroundSize: `100% ${(e.columnHeight - e.optionHeight) / 2}px` })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                )
              ],
              6
              /* CLASS, STYLE */
            )
          ],
          16
          /* FULL_PROPS */
        )
      ]),
      _: 3
      /* FORWARDED */
    },
    16
    /* FULL_PROPS */
  );
}
const _v = x({
  name: k6,
  components: {
    VarButton: Pn,
    VarPopup: Po
  },
  inheritAttrs: !1,
  props: Qv,
  setup(e) {
    const n = Zn(e, "modelValue"), o = k([]), t = B(() => en(e.optionHeight)), r = B(() => en(e.optionCount)), a = B(() => r.value * t.value / 2 - t.value / 2), i = B(() => r.value * t.value), { prevY: l, moveY: s, dragging: u, startTouch: c, moveTouch: d, endTouch: f } = mt(), { t: v } = ao();
    let y = [];
    z(), de(() => e.columns, z, { deep: !0 }), de(() => n.value, z);
    function m(V) {
      return {
        text: e.textKey,
        value: e.valueKey,
        children: e.childrenKey
      }[V];
    }
    function b(V) {
      var W;
      return (W = V[m("value")]) != null ? W : V[m("text")];
    }
    function C(V) {
      y = [...V];
    }
    function w(V) {
      return V.map((W, Q) => {
        const ke = {
          id: Wc++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: a.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: W,
          scrollEl: null,
          scrolling: !1
        }, Ce = n.value[Q], De = ke.column.findIndex((Xe) => Ce === b(Xe));
        return ke.index = De === -1 ? 0 : De, Y(ke), ke;
      });
    }
    function g(V) {
      const W = [];
      return $(W, V), W;
    }
    function $(V, W, Q = !0) {
      var ke;
      if (W.length) {
        const Ce = {
          id: Wc++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: a.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: W,
          scrollEl: null,
          scrolling: !1
        };
        if (V.push(Ce), Q) {
          const De = n.value[V.length - 1], Xe = W.findIndex((ln) => De === b(ln));
          Ce.index = Xe === -1 ? 0 : Xe;
        }
        Y(Ce), $(
          V,
          (ke = Ce.column[Ce.index][m("children")]) != null ? ke : [],
          Q
        );
      }
    }
    function O(V) {
      var W;
      o.value.splice(o.value.indexOf(V) + 1), $(
        o.value,
        (W = V.column[V.index][m("children")]) != null ? W : [],
        !1
      );
    }
    function z() {
      o.value = e.cascade ? g(e.columns) : w(e.columns);
      const { indexes: V } = H();
      C(V);
    }
    function A(V, W) {
      W.scrollEl = V;
    }
    function T(V) {
      S(e["onUpdate:show"], V);
    }
    function E(V) {
      const W = a.value - V.column.length * t.value, Q = t.value + a.value;
      V.translate = Mn(V.translate, W, Q);
    }
    function D(V, W) {
      const Q = Math.round((a.value - W) / t.value);
      return Ah(Q, V.column);
    }
    function M(V) {
      return V.translate = a.value - V.index * t.value, V.translate;
    }
    function H() {
      const V = [], W = [], Q = [];
      return o.value.forEach(({ column: ke, index: Ce }) => {
        const De = ke[Ce];
        V.push(b(De)), W.push(Ce), Q.push(De);
      }), {
        values: V,
        indexes: W,
        options: Q
      };
    }
    function Y(V, W = 0) {
      M(V), V.duration = W;
    }
    function N(V, W, Q) {
      V.translate += Math.abs(W / Q) / 3e-3 * (W < 0 ? -1 : 1);
    }
    function q(V, W) {
      u.value || (V.index = W, Y(V, jc));
    }
    function j(V, W) {
      W.touching = !0, W.translate = Pi(W.scrollEl), c(V);
    }
    function ce(V, W) {
      if (!W.touching)
        return;
      d(V), W.scrolling = !1, W.duration = 0, W.prevY = l.value, W.translate += s.value, E(W);
      const Q = performance.now();
      Q - W.momentumTime > Yc && (W.momentumTime = Q, W.momentumPrevY = W.translate);
    }
    function _(V) {
      f(), V.touching = !1, V.prevY = 0;
      const W = V.translate - V.momentumPrevY, Q = performance.now() - V.momentumTime, ke = Math.abs(W) >= C6 && Q <= Yc, Ce = V.translate;
      ke && N(V, W, Q), V.index = D(V, V.translate), Y(V, ke ? S6 : jc), V.scrolling = V.translate !== Ce, V.scrolling || ie(V);
    }
    function pe(V) {
      V.scrolling = !1, ie(V);
    }
    function ye() {
      const { indexes: V } = H();
      return V.every((W, Q) => W === y[Q]);
    }
    function ie(V) {
      const { onChange: W, cascade: Q } = e;
      if (ye())
        return;
      Q && O(V);
      const ke = o.value.some((ve) => ve.scrolling), Ce = o.value.some((ve) => ve.touching);
      if (ke || Ce)
        return;
      const { values: De, indexes: Xe, options: ln } = H();
      C(Xe), S(W, De, Xe, ln), n.value = De;
    }
    function U() {
      if (e.cascade) {
        const V = o.value.find((W) => W.scrolling);
        V && (V.index = D(V, Pi(V.scrollEl)), V.scrolling = !1, Y(V), O(V));
      } else
        o.value.forEach((V) => {
          V.index = D(V, Pi(V.scrollEl)), Y(V);
        });
    }
    function J() {
      U();
      const { values: V, indexes: W, options: Q } = H();
      C(W), S(e.onConfirm, V, W, Q);
    }
    function ae() {
      U();
      const { values: V, indexes: W, options: Q } = H();
      C(W), S(e.onCancel, V, W, Q);
    }
    return {
      optionHeight: t,
      optionCount: r,
      scrollColumns: o,
      columnHeight: i,
      center: a,
      Transition: _e,
      pt: v,
      t: rn,
      n: $6,
      classes: w6,
      setScrollEl: A,
      getOptionKey: m,
      getValue: b,
      handlePopupUpdateShow: T,
      handleTouchstart: j,
      handleTouchmove: ce,
      handleTouchend: _,
      handleTransitionend: pe,
      confirm: J,
      cancel: ae,
      handleClick: q
    };
  }
});
_v.render = T6;
var xt = _v;
let ot;
function yt(e) {
  return new Promise((n) => {
    yt.close();
    const o = He(e) ? { columns: e } : e, t = Qe(o);
    t.dynamic = !0, t.teleport = "body", ot = t;
    function r() {
      ot === t && (ot = null);
    }
    const { unmountInstance: a } = ht(xt, t, {
      onConfirm: (i, l, s) => {
        S(t.onConfirm, i, l, s), n({
          state: "confirm",
          values: i,
          indexes: l,
          options: s
        }), t.show = !1, r();
      },
      onCancel: (i, l, s) => {
        S(t.onCancel, i, l, s), n({
          state: "cancel",
          values: i,
          indexes: l,
          options: s
        }), t.show = !1, r();
      },
      onClose: () => {
        S(t.onClose), n({
          state: "close"
        }), r();
      },
      onClosed: () => {
        S(t.onClosed), a(), r();
      },
      onRouteChange: () => {
        a(), r();
      },
      "onUpdate:show": (i) => {
        t.show = i;
      }
    });
    t.show = !0;
  });
}
yt.close = function() {
  if (ot == null)
    return;
  const e = ot;
  ot = null, Ke().then(() => {
    e.show = !1;
  });
};
yt.Component = xt;
te(xt);
te(xt, yt);
ue(yt, Qv);
const aT = xt;
var Il = yt;
const xv = {
  mode: {
    type: String,
    default: "linear"
  },
  lineWidth: {
    type: [Number, String],
    default: 4
  },
  color: [String, Object],
  trackColor: String,
  value: {
    type: [Number, String],
    default: 0
  },
  label: Boolean,
  labelClass: String,
  size: {
    type: [Number, String],
    default: 40
  },
  rotate: {
    type: Number,
    default: 0
  },
  track: {
    type: Boolean,
    default: !0
  },
  indeterminate: Boolean,
  type: {
    type: String,
    default: "primary"
  }
}, Jo = 100, dr = 0, io = 20, Kc = 2 * Math.PI * io, { name: E6, n: D6, classes: B6 } = ee("progress"), I6 = ["aria-valuenow"], M6 = ["viewBox"], N6 = { key: 0 }, A6 = ["id"], V6 = ["offset", "stop-color"], L6 = ["d", "stroke-width", "stroke-dasharray"], R6 = ["d", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function F6(e, n) {
  return h(), P("div", {
    class: p(e.n()),
    role: "progressbar",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": e.indeterminate ? void 0 : e.mode === "linear" ? e.linearProps.value : e.circleProps.value
  }, [
    e.mode === "linear" ? (h(), P(
      "div",
      {
        key: 0,
        class: p(e.n("linear"))
      },
      [
        I(
          "div",
          {
            class: p(e.classes(e.n("linear-block"), [e.track, e.n("linear-background")])),
            style: K({ height: e.toSizeUnit(e.lineWidth), background: e.trackColor })
          },
          [
            e.indeterminate ? (h(), P(
              "div",
              {
                key: 0,
                class: p(e.n("linear-indeterminate"))
              },
              [
                I(
                  "div",
                  {
                    class: p(e.classes(e.n(`linear--${e.type}`))),
                    style: K({ background: e.progressColor })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ),
                I(
                  "div",
                  {
                    class: p(e.classes(e.n(`linear--${e.type}`))),
                    style: K({ background: e.progressColor })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                )
              ],
              2
              /* CLASS */
            )) : (h(), P(
              "div",
              {
                key: 1,
                class: p(e.classes(e.n("linear-certain"), e.n(`linear--${e.type}`))),
                style: K({ background: e.progressColor, width: e.linearProps.width })
              },
              null,
              6
              /* CLASS, STYLE */
            ))
          ],
          6
          /* CLASS, STYLE */
        ),
        e.label ? (h(), P(
          "div",
          {
            key: 0,
            class: p(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
          },
          [
            L(e.$slots, "default", {}, () => [
              Be(
                re(e.linearProps.roundValue),
                1
                /* TEXT */
              )
            ])
          ],
          2
          /* CLASS */
        )) : X("v-if", !0)
      ],
      2
      /* CLASS */
    )) : X("v-if", !0),
    e.mode === "circle" ? (h(), P(
      "div",
      {
        key: 1,
        class: p(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
        style: K({ width: e.toSizeUnit(e.size), height: e.toSizeUnit(e.size) })
      },
      [
        (h(), P("svg", {
          class: p(e.n("circle-svg")),
          viewBox: e.circleProps.viewBox
        }, [
          e.isPlainObject(e.color) ? (h(), P("defs", N6, [
            I("linearGradient", {
              id: e.id,
              x1: "100%",
              y1: "0%",
              x2: "0%",
              y2: "0%"
            }, [
              (h(!0), P(
                Ae,
                null,
                Ze(e.linearGradientProgress, (o, t) => (h(), P("stop", {
                  key: t,
                  offset: o,
                  "stop-color": e.color[o]
                }, null, 8, V6))),
                128
                /* KEYED_FRAGMENT */
              ))
            ], 8, A6)
          ])) : X("v-if", !0),
          e.track ? (h(), P("path", {
            key: 1,
            class: p(e.n("circle-background")),
            d: e.circleProps.path,
            fill: "transparent",
            "stroke-width": e.circleProps.strokeWidth,
            "stroke-dasharray": e.CIRCUMFERENCE,
            style: K({
              stroke: e.trackColor
            })
          }, null, 14, L6)) : X("v-if", !0),
          I("path", {
            class: p(e.classes(e.n("circle-certain"), e.n(`circle--${e.type}`), [e.indeterminate, e.n("circle-overlay")])),
            d: e.circleProps.path,
            fill: "transparent",
            "stroke-width": e.circleProps.strokeWidth,
            "stroke-dasharray": e.CIRCUMFERENCE,
            "stroke-dashoffset": e.circleProps.strokeOffset,
            style: K({
              stroke: e.progressColor,
              transform: `rotateZ(${e.rotate}deg)`,
              transformOrigin: "50% 50%"
            })
          }, null, 14, R6)
        ], 10, M6)),
        e.label ? (h(), P(
          "div",
          {
            key: 0,
            class: p(e.classes(e.n("circle-label"), e.labelClass))
          },
          [
            L(e.$slots, "default", {}, () => [
              Be(
                re(e.circleProps.roundValue),
                1
                /* TEXT */
              )
            ])
          ],
          2
          /* CLASS */
        )) : X("v-if", !0)
      ],
      6
      /* CLASS, STYLE */
    )) : X("v-if", !0)
  ], 10, I6);
}
const em = x({
  name: E6,
  props: xv,
  setup(e) {
    const n = Td(), o = B(() => {
      const i = F(e.value), l = Mn(i, dr, Jo), s = Mn(Math.round(i), dr, Jo);
      return {
        width: `${l}%`,
        roundValue: `${s}%`,
        value: l
      };
    }), t = B(() => {
      const { size: i, lineWidth: l, value: s } = e, u = io / (1 - en(l) / en(i)) * 2, c = `0 0 ${u} ${u}`, d = Mn(Math.round(F(s)), dr, Jo), f = `${(Jo - d) / Jo * Kc}`, v = en(l) / en(i) * u, y = 0, m = -io, b = 0, C = -2 * io, w = `M ${u / 2} ${u / 2} m ${y} ${m} a ${io} ${io} 
        0 1 1 ${b} ${-C} a ${io} ${io} 0 1 1 ${-b} ${C}`;
      return {
        strokeWidth: v,
        viewBox: c,
        strokeOffset: f,
        roundValue: `${d}%`,
        path: w,
        value: Mn(F(s), dr, Jo)
      };
    }), r = B(() => tt(e.color) ? `url(#${n.value})` : e.color), a = B(
      () => Object.keys(e.color).sort((i, l) => parseFloat(i) - parseFloat(l))
    );
    return {
      id: n,
      linearProps: o,
      CIRCUMFERENCE: Kc,
      RADIUS: io,
      circleProps: t,
      progressColor: r,
      linearGradientProgress: a,
      n: D6,
      classes: B6,
      toSizeUnit: Oe,
      isPlainObject: tt
    };
  }
});
em.render = F6;
var xa = em;
te(xa);
ue(xa, xv);
const iT = xa;
var Ml = xa;
const nm = {
  modelValue: Boolean,
  disabled: Boolean,
  animationDuration: {
    type: [Number, String],
    default: 300
  },
  successDuration: {
    type: [Number, String],
    default: 2e3
  },
  bgColor: String,
  successBgColor: String,
  color: String,
  successColor: String,
  target: [String, Object],
  onRefresh: R(),
  "onUpdate:modelValue": R()
};
var qc = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: U6, n: Gc, classes: H6 } = ee("pull-refresh"), Xc = 150;
function Y6(e, n) {
  const o = ne("var-icon");
  return h(), P(
    "div",
    {
      ref: "freshNode",
      class: p(e.n()),
      onTouchstart: n[0] || (n[0] = (...t) => e.handleTouchstart && e.handleTouchstart(...t)),
      onTouchend: n[1] || (n[1] = (...t) => e.handleTouchend && e.handleTouchend(...t)),
      onTouchcancel: n[2] || (n[2] = (...t) => e.handleTouchend && e.handleTouchend(...t))
    },
    [
      I(
        "div",
        {
          ref: "controlNode",
          class: p(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
          style: K(e.controlStyle)
        },
        [
          G(o, {
            name: e.iconName,
            transition: e.ICON_TRANSITION,
            class: p(e.classes(e.n("icon"), [e.refreshStatus === "loading", e.n("animation")])),
            "var-pull-refresh-cover": ""
          }, null, 8, ["name", "transition", "class"])
        ],
        6
        /* CLASS, STYLE */
      ),
      L(e.$slots, "default")
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const om = x({
  name: U6,
  components: { VarIcon: Je },
  props: nm,
  setup(e) {
    const n = k(0), o = k(null), t = k(null), r = k(0), a = k("-125%"), i = k("arrow-down"), l = k("default"), s = k(!1), u = B(() => Math.abs(2 * n.value)), c = B(() => l.value === "success"), d = B(
      () => l.value !== "loading" && l.value !== "success" && !e.disabled
    ), f = B(() => ({
      transform: `translate3d(0px, ${gn(a.value) ? a.value : `${a.value}px`}, 0px) translate(-50%, 0)`,
      transition: s.value ? `transform ${e.animationDuration}ms` : void 0,
      background: c.value ? e.successBgColor : e.bgColor,
      color: c.value ? e.successColor : e.color
    })), { startTouch: v, moveTouch: y, endTouch: m, isReachTop: b } = mt();
    let C, w;
    de(
      () => e.modelValue,
      (D) => {
        D === !1 && (s.value = !0, l.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
          a.value = n.value, E();
        }, F(e.successDuration)));
      }
    ), pn(T), We(o, "touchmove", z);
    function g(D) {
      return qc(this, null, function* () {
        if (i.value !== D)
          return i.value = D, new Promise((M) => {
            window.setTimeout(M, Xc);
          });
      });
    }
    function $(D) {
      ("classList" in C ? C : document.body).classList[D](`${Gc()}--lock`);
    }
    function O(D) {
      if (v(D), n.value === 0) {
        const { width: M } = an(t.value);
        n.value = -(M + M * 0.25);
      }
      w = zo(D.target);
    }
    function z(D) {
      if (y(D), !d.value || !w || w !== C && Ro(w) > 0 || Ro(C) > 0)
        return;
      b(C) && Re(D), l.value !== "pulling" && (l.value = "pulling", r.value = D.touches[0].clientY), b(C) && On(a.value) && a.value > n.value && $("add");
      const H = (D.touches[0].clientY - r.value) / 2 + n.value;
      a.value = H >= u.value ? u.value : H, g(a.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function A() {
      return qc(this, null, function* () {
        m(), d.value && (s.value = !0, F(a.value) >= u.value * 0.2 ? (yield g("refresh"), l.value = "loading", a.value = u.value * 0.3, S(e["onUpdate:modelValue"], !0), Ke(() => {
          S(e.onRefresh);
        }), $("remove")) : (l.value = "loosing", i.value = "arrow-down", a.value = n.value, setTimeout(() => {
          s.value = !1, $("remove");
        }, F(e.animationDuration))), w = null);
      });
    }
    function T() {
      C = e.target ? Ld(e.target, "PullRefresh") : zo(o.value);
    }
    function E() {
      setTimeout(() => {
        l.value = "default", i.value = "arrow-down", s.value = !1;
      }, F(e.animationDuration));
    }
    return {
      ICON_TRANSITION: Xc,
      refreshStatus: l,
      freshNode: o,
      controlNode: t,
      iconName: i,
      controlStyle: f,
      isSuccess: c,
      n: Gc,
      classes: H6,
      handleTouchstart: O,
      handleTouchmove: z,
      handleTouchend: A
    };
  }
});
om.render = Y6;
var ei = om;
te(ei);
ue(ei, nm);
const lT = ei;
var Nl = ei;
const tm = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !0
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  disabled: Boolean,
  readonly: Boolean,
  checkedColor: String,
  uncheckedColor: String,
  iconSize: [String, Number],
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: Array,
  onClick: R(),
  onChange: R(),
  "onUpdate:modelValue": R()
}, rm = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function j6() {
  const { bindChildren: e, childProviders: n, length: o } = yn(
    rm
  );
  return {
    length: o,
    radios: n,
    bindRadios: e
  };
}
function W6() {
  const { bindParent: e, parentProvider: n, index: o } = bn(rm);
  return {
    index: o,
    radioGroup: n,
    bindRadioGroup: e
  };
}
const { name: K6, n: q6, classes: G6 } = ee("radio"), X6 = ["tabindex"];
function Z6(e, n) {
  const o = ne("var-icon"), t = ne("var-hover-overlay"), r = ne("var-form-details"), a = je("ripple"), i = je("hover");
  return h(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      I(
        "div",
        Ye({
          class: e.n(),
          onClick: n[3] || (n[3] = (...l) => e.handleClick && e.handleClick(...l))
        }, e.$attrs),
        [
          Me((h(), P("div", {
            ref: "action",
            class: p(
              e.classes(
                e.n("action"),
                [e.checked, e.n("--checked"), e.n("--unchecked")],
                [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")],
                [e.formDisabled || e.disabled, e.n("--disabled")]
              )
            ),
            tabindex: e.formDisabled || e.disabled ? void 0 : "0",
            style: K({ color: e.checked ? e.checkedColor : e.uncheckedColor }),
            onFocus: n[0] || (n[0] = (l) => e.isFocusing = !0),
            onBlur: n[1] || (n[1] = (l) => e.isFocusing = !1)
          }, [
            e.checked ? L(e.$slots, "checked-icon", { key: 0 }, () => [
              G(o, {
                class: p(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                "var-radio-cover": "",
                name: "radio-marked",
                size: e.iconSize
              }, null, 8, ["class", "size"])
            ]) : L(e.$slots, "unchecked-icon", { key: 1 }, () => [
              G(o, {
                class: p(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                "var-radio-cover": "",
                name: "radio-blank",
                size: e.iconSize
              }, null, 8, ["class", "size"])
            ]),
            G(t, {
              hovering: !e.disabled && !e.formDisabled && e.hovering,
              focusing: !e.disabled && !e.formDisabled && e.isFocusing
            }, null, 8, ["hovering", "focusing"])
          ], 46, X6)), [
            [a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }],
            [i, e.handleHovering, "desktop"]
          ]),
          e.$slots.default ? (h(), P(
            "div",
            {
              key: 0,
              class: p(
                e.classes(
                  e.n("text"),
                  [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")],
                  [e.formDisabled || e.disabled, e.n("--disabled")]
                )
              ),
              onClick: n[2] || (n[2] = (...l) => e.handleTextClick && e.handleTextClick(...l))
            },
            [
              L(e.$slots, "default", { checked: e.checked })
            ],
            2
            /* CLASS */
          )) : X("v-if", !0)
        ],
        16
        /* FULL_PROPS */
      ),
      G(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const am = x({
  name: K6,
  directives: { Ripple: tn, Hover: Tn },
  components: {
    VarIcon: Je,
    VarFormDetails: En,
    VarHoverOverlay: Ln
  },
  inheritAttrs: !1,
  props: tm,
  setup(e) {
    const n = k(), o = k(!1), t = Zn(e, "modelValue"), r = B(() => t.value === e.checkedValue), a = k(!1), { radioGroup: i, bindRadioGroup: l } = W6(), { hovering: s, handleHovering: u } = Jn(), { form: c, bindForm: d } = jn(), {
      errorMessage: f,
      validateWithTrigger: v,
      validate: y,
      // expose
      resetValidation: m
    } = Yn(), b = {
      sync: A,
      validate: E,
      resetValidation: m,
      reset: T,
      isFocusing: B(() => o.value),
      // keyboard arrow move
      move() {
        n.value.focus(), n.value.click();
      },
      moveable() {
        return !(c != null && c.disabled.value) && !e.disabled && !(c != null && c.readonly.value) && !e.readonly;
      }
    };
    S(l, b), S(d, b), We(() => window, "keydown", C), We(() => window, "keyup", w);
    function C(M) {
      if (!o.value)
        return;
      const { key: H } = M;
      (H === "Enter" || H === " ") && Re(M), H === "Enter" && n.value.click();
    }
    function w(M) {
      o.value && M.key === " " && (Re(M), n.value.click());
    }
    function g(M) {
      Ke(() => {
        const { validateTrigger: H, rules: Y, modelValue: N } = e;
        v(H, M, Y, N);
      });
    }
    function $(M) {
      const { checkedValue: H, onChange: Y } = e;
      i && t.value === H || (t.value = M, S(Y, t.value), i == null || i.onToggle(H), g("onChange"));
    }
    function O(M) {
      const { disabled: H, readonly: Y, uncheckedValue: N, checkedValue: q, onClick: j } = e;
      c != null && c.disabled.value || H || (S(j, M), !(c != null && c.readonly.value || Y) && (a.value = !0, $(r.value ? N : q)));
    }
    function z() {
      n.value.focus();
    }
    function A(M) {
      const { checkedValue: H, uncheckedValue: Y } = e;
      t.value = M === H ? H : Y;
    }
    function T() {
      t.value = e.uncheckedValue, m();
    }
    function E() {
      return y(e.rules, e.modelValue);
    }
    function D(M) {
      const { uncheckedValue: H, checkedValue: Y } = e;
      ![H, Y].includes(M) && (M = r.value ? H : Y), $(M);
    }
    return {
      action: n,
      isFocusing: o,
      withAnimation: a,
      checked: r,
      errorMessage: f,
      radioGroupErrorMessage: i == null ? void 0 : i.errorMessage,
      formDisabled: c == null ? void 0 : c.disabled,
      formReadonly: c == null ? void 0 : c.readonly,
      hovering: s,
      handleHovering: u,
      n: q6,
      classes: G6,
      handleClick: O,
      handleTextClick: z,
      toggle: D,
      reset: T,
      validate: E,
      resetValidation: m
    };
  }
});
am.render = Z6;
var ni = am;
te(ni);
ue(ni, tm);
const sT = ni;
var Ur = ni;
const im = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  options: Array,
  labelKey: {
    type: String,
    default: "label"
  },
  valueKey: {
    type: String,
    default: "value"
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: Array,
  onChange: R(),
  "onUpdate:modelValue": R()
}, { name: J6, n: Q6, classes: _6 } = ee("radio-group");
function x6(e, n) {
  const o = ne("maybe-v-node"), t = ne("var-radio"), r = ne("var-form-details");
  return h(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      I(
        "div",
        {
          class: p(e.classes(e.n(), e.n(`--${e.direction}`)))
        },
        [
          e.radioGroupOptions.length ? (h(!0), P(
            Ae,
            { key: 0 },
            Ze(e.radioGroupOptions, (a) => (h(), Pe(t, {
              key: a[e.valueKey],
              "checked-value": a[e.valueKey],
              disabled: a.disabled
            }, {
              default: fe(({ checked: i }) => [
                G(o, {
                  is: e.isFunction(a[e.labelKey]) ? a[e.labelKey](a, i) : a[e.labelKey]
                }, null, 8, ["is"])
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["checked-value", "disabled"]))),
            128
            /* KEYED_FRAGMENT */
          )) : X("v-if", !0),
          L(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      G(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const lm = x({
  name: J6,
  components: { VarFormDetails: En, VarRadio: Ur, MaybeVNode: jr },
  props: im,
  setup(e) {
    const { length: n, radios: o, bindRadios: t } = j6(), { bindForm: r } = jn(), {
      errorMessage: a,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = Yn(), u = B(() => He(e.options) ? e.options : []), c = B(() => a.value), d = {
      onToggle: b,
      validate: C,
      reset: w,
      resetValidation: s,
      errorMessage: c
    };
    de(() => e.modelValue, m), de(() => n.value, m), S(r, d), t(d), We(() => window, "keydown", f);
    function f(g) {
      const $ = o.findIndex(({ isFocusing: z }) => z.value);
      if (!($ === -1 || !o.some(({ moveable: z }, A) => A === $ ? !1 : z()))) {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(g.key) && Re(g), g.key === "ArrowUp" || g.key === "ArrowLeft") {
          v($, "prev");
          return;
        }
        (g.key === "ArrowDown" || g.key === "ArrowRight") && v($, "next");
      }
    }
    function v(g, $) {
      for (; ; ) {
        $ === "prev" ? g-- : g++, g < 0 && (g = o.length - 1), g > o.length - 1 && (g = 0);
        const O = o[g];
        if (O.moveable()) {
          O.move();
          break;
        }
      }
    }
    function y(g) {
      Ke(() => {
        const { validateTrigger: $, rules: O, modelValue: z } = e;
        i($, g, O, z);
      });
    }
    function m() {
      return o.forEach(({ sync: g }) => g(e.modelValue));
    }
    function b(g) {
      S(e["onUpdate:modelValue"], g), S(e.onChange, g), y("onChange");
    }
    function C() {
      return l(e.rules, e.modelValue);
    }
    function w() {
      S(e["onUpdate:modelValue"], void 0), s();
    }
    return {
      errorMessage: a,
      n: Q6,
      classes: _6,
      reset: w,
      validate: C,
      resetValidation: s,
      isFunction: oo,
      radioGroupOptions: u
    };
  }
});
lm.render = x6;
var oi = lm;
te(oi);
ue(oi, im);
const uT = oi;
var Al = oi;
const sm = {
  modelValue: {
    type: Number,
    default: 0
  },
  count: {
    type: [String, Number],
    default: 5
  },
  color: String,
  icon: {
    type: String,
    default: "star"
  },
  emptyIcon: {
    type: String,
    default: "star-outline"
  },
  halfIcon: {
    type: String,
    default: "star-half-full"
  },
  namespace: Ie(on, "namespace"),
  emptyIconNamespace: Ie(on, "namespace"),
  halfIconNamespace: Ie(on, "namespace"),
  emptyColor: String,
  size: [String, Number],
  gap: [String, Number],
  half: Boolean,
  disabled: Boolean,
  disabledColor: String,
  readonly: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  clearable: Boolean,
  rules: Array,
  onChange: R(),
  "onUpdate:modelValue": R()
}, { name: e4, n: wt } = ee("rate"), n4 = ["onClick"];
function o4(e, n) {
  const o = ne("var-icon"), t = ne("var-hover-overlay"), r = ne("var-form-details"), a = je("ripple"), i = je("hover");
  return h(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      I(
        "div",
        {
          class: p(e.n())
        },
        [
          (h(!0), P(
            Ae,
            null,
            Ze(e.toNumber(e.count), (l) => Me((h(), P("div", {
              key: l,
              style: K(e.getStyle(l)),
              class: p(e.getClass(l)),
              onClick: (s) => e.handleClick(l, s)
            }, [
              G(o, {
                class: p(e.n("content-icon")),
                "var-rate-cover": "",
                transition: 0,
                namespace: e.getCurrentState(l).namespace,
                name: e.getCurrentState(l).name,
                style: K({ fontSize: e.toSizeUnit(e.size) })
              }, null, 8, ["class", "namespace", "name", "style"]),
              G(t, {
                hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled
              }, null, 8, ["hovering"])
            ], 14, n4)), [
              [a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }],
              [i, e.createHoverHandler(l), "desktop"]
            ])),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      ),
      G(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const um = x({
  name: e4,
  components: {
    VarIcon: Je,
    VarFormDetails: En,
    VarHoverOverlay: Ln
  },
  directives: { Ripple: tn, Hover: Tn },
  props: sm,
  setup(e) {
    const n = k(-1), { form: o, bindForm: t } = jn(), { errorMessage: r, validateWithTrigger: a, validate: i, resetValidation: l } = Yn(), { hovering: s } = Jn();
    let u = F(e.modelValue);
    S(t, {
      reset: g,
      validate: m,
      resetValidation: l
    });
    function d($) {
      const { count: O, gap: z } = e;
      return {
        color: v($).color,
        marginRight: $ !== F(O) ? Oe(z) : 0
      };
    }
    function f($) {
      const { name: O, color: z } = v($);
      return {
        [wt("content")]: !0,
        [wt("--disabled")]: (o == null ? void 0 : o.disabled.value) || e.disabled,
        [wt("--error")]: r.value,
        [wt("--primary")]: O !== e.emptyIcon && !z
      };
    }
    function v($) {
      const {
        modelValue: O,
        disabled: z,
        disabledColor: A,
        color: T,
        half: E,
        emptyColor: D,
        icon: M,
        halfIcon: H,
        emptyIcon: Y,
        namespace: N,
        halfIconNamespace: q,
        emptyIconNamespace: j
      } = e;
      let ce = T;
      return (z || o != null && o.disabled.value) && (ce = A), $ <= O ? { color: ce, name: M, namespace: N } : E && $ <= O + 0.5 ? { color: ce, name: H, namespace: q } : {
        color: z || o != null && o.disabled.value ? A : D,
        name: Y,
        namespace: j
      };
    }
    function y($, O) {
      const { half: z, clearable: A } = e, { offsetWidth: T } = O.target;
      z && O.offsetX <= Math.floor(T / 2) && ($ -= 0.5), u === $ && A && ($ = 0), u !== $ && (S(e["onUpdate:modelValue"], $), S(e.onChange, $)), u = $;
    }
    function m() {
      return i(e.rules, e.modelValue);
    }
    function b() {
      return Ke(() => a(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function C($, O) {
      const { readonly: z, disabled: A } = e;
      z || A || o != null && o.disabled.value || o != null && o.readonly.value || (y($, O), b());
    }
    function w($) {
      return (O) => {
        n.value = $, s.value = O;
      };
    }
    function g() {
      S(e["onUpdate:modelValue"], 0), l();
    }
    return {
      errorMessage: r,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      hovering: s,
      currentHoveringValue: n,
      getStyle: d,
      getClass: f,
      getCurrentState: v,
      handleClick: C,
      createHoverHandler: w,
      reset: g,
      validate: m,
      resetValidation: l,
      toSizeUnit: Oe,
      toNumber: F,
      n: wt
    };
  }
});
um.render = o4;
var ti = um;
te(ti);
ue(ti, sm);
const cT = ti;
var Vl = ti;
const t4 = (e) => (Wo(""), e = e(), Ko(), e), r4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, a4 = /* @__PURE__ */ t4(() => /* @__PURE__ */ I(
  "path",
  { d: "M11,9H13V7H11M11,20H13V11H11V20Z" },
  null,
  -1
  /* HOISTED */
)), i4 = [
  a4
];
function l4(e, n) {
  return h(), P("svg", r4, [...i4]);
}
const cm = x({});
cm.render = l4;
var s4 = cm;
const u4 = (e) => (Wo(""), e = e(), Ko(), e), c4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, d4 = /* @__PURE__ */ u4(() => /* @__PURE__ */ I(
  "path",
  { d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" },
  null,
  -1
  /* HOISTED */
)), f4 = [
  d4
];
function p4(e, n) {
  return h(), P("svg", c4, [...f4]);
}
const dm = x({});
dm.render = p4;
var v4 = dm;
const m4 = (e) => (Wo(""), e = e(), Ko(), e), h4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, g4 = /* @__PURE__ */ m4(() => /* @__PURE__ */ I(
  "path",
  { d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11" },
  null,
  -1
  /* HOISTED */
)), b4 = [
  g4
];
function y4(e, n) {
  return h(), P("svg", h4, [...b4]);
}
const fm = x({});
fm.render = y4;
var k4 = fm;
const { n: $4, classes: w4 } = ee("result");
function C4(e, n) {
  return h(), P(
    Ae,
    null,
    [
      I(
        "span",
        {
          class: p(e.n("success-cover-left"))
        },
        null,
        2
        /* CLASS */
      ),
      I(
        "span",
        {
          class: p(e.classes(e.n("success-line"), e.n("success-line-tip"))),
          style: K({
            animationDuration: e.animation ? "760ms" : "0ms",
            borderRadius: `calc(${e.borderSize} * 0.625)`
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      I(
        "span",
        {
          class: p(e.classes(e.n("success-line"), e.n("success-line-long"))),
          style: K({
            animationDuration: e.animation ? "770ms" : "0ms",
            borderRadius: `calc(${e.borderSize} * 0.625)`
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      I(
        "span",
        {
          ref: "circle",
          class: p(e.n("success-circle")),
          style: K({ left: `-${e.borderSize}`, top: `-${e.borderSize}`, borderWidth: e.borderSize })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      I(
        "span",
        {
          class: p(e.n("success-line-fix"))
        },
        null,
        2
        /* CLASS */
      ),
      I(
        "span",
        {
          class: p(e.n("success-cover-right")),
          style: K({
            animationDuration: e.animation ? "4250ms" : "0ms"
          })
        },
        null,
        6
        /* CLASS, STYLE */
      )
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const pm = x({
  props: {
    animation: {
      type: Boolean
    },
    borderSize: {
      type: String
    }
  },
  setup() {
    return {
      n: $4,
      classes: w4
    };
  }
});
pm.render = C4;
var S4 = pm;
const P4 = (e) => (Wo(""), e = e(), Ko(), e), z4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, O4 = /* @__PURE__ */ P4(() => /* @__PURE__ */ I(
  "path",
  { d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" },
  null,
  -1
  /* HOISTED */
)), T4 = [
  O4
];
function E4(e, n) {
  return h(), P("svg", z4, [...T4]);
}
const vm = x({});
vm.render = E4;
var D4 = vm;
const B4 = (e) => (Wo(""), e = e(), Ko(), e), I4 = { viewBox: "-4 -4 32 32" }, M4 = /* @__PURE__ */ B4(() => /* @__PURE__ */ I(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), N4 = [
  M4
];
function A4(e, n) {
  return h(), P("svg", I4, [...N4]);
}
const mm = x({});
mm.render = A4;
var V4 = mm;
const hm = {
  imageSize: [String, Number],
  type: {
    type: String,
    default: "success"
  },
  title: String,
  description: String,
  animation: {
    type: Boolean,
    default: !0
  }
}, { name: L4, n: R4, classes: F4 } = ee("result");
function U4(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      L(e.$slots, "image", {}, () => [
        e.type ? (h(), P(
          "div",
          {
            key: 0,
            class: p(e.n("image-container"))
          },
          [
            I(
              "div",
              {
                class: p(e.classes(e.n("image"), e.n(e.type))),
                style: K({
                  width: e.circleSize,
                  height: e.circleSize,
                  borderWidth: e.borderSize
                })
              },
              [
                (h(), Pe(vt(e.type), {
                  "border-size": e.borderSize,
                  animation: e.animation
                }, null, 8, ["border-size", "animation"]))
              ],
              6
              /* CLASS, STYLE */
            )
          ],
          2
          /* CLASS */
        )) : X("v-if", !0)
      ]),
      L(e.$slots, "title", {}, () => [
        e.title ? (h(), P(
          "div",
          {
            key: 0,
            class: p(e.n("title"))
          },
          re(e.title),
          3
          /* TEXT, CLASS */
        )) : X("v-if", !0)
      ]),
      L(e.$slots, "description", {}, () => [
        e.description ? (h(), P(
          "div",
          {
            key: 0,
            class: p(e.n("description"))
          },
          re(e.description),
          3
          /* TEXT, CLASS */
        )) : X("v-if", !0)
      ]),
      e.$slots.footer ? (h(), P(
        "div",
        {
          key: 0,
          class: p(e.n("footer"))
        },
        [
          L(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const gm = x({
  name: L4,
  components: {
    Info: s4,
    Success: S4,
    Warning: k4,
    Error: v4,
    Question: D4,
    Empty: V4
  },
  props: hm,
  setup(e) {
    const n = B(
      () => `calc(${e.imageSize ? Oe(e.imageSize) : "var(--result-image-size)"} * 0.9)`
    ), o = B(
      () => `calc(${e.imageSize ? Oe(e.imageSize) : "var(--result-image-size)"} * 0.05)`
    );
    return {
      circleSize: n,
      borderSize: o,
      n: R4,
      classes: F4
    };
  }
});
gm.render = U4;
var ri = gm;
te(ri);
ue(ri, hm);
const dT = ri;
var Ll = ri;
const bm = {
  gutter: {
    type: [String, Number, Array],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start"
  },
  align: {
    type: String,
    default: "flex-start"
  },
  onClick: R()
}, { name: H4, n: Y4, classes: j4 } = ee("row");
function W4(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"))),
      style: K({
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        margin: `${-e.average[0]}px ${-e.average[1]}px`
      }),
      onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
    },
    [
      L(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const ym = x({
  name: H4,
  props: bm,
  setup(e) {
    const n = B(
      () => He(e.gutter) ? e.gutter.map((s) => en(s) / 2) : [0, en(e.gutter) / 2]
    ), { cols: o, bindCols: t, length: r } = Iy(), a = { computePadding: i };
    de(() => r.value, i), de(() => e.gutter, i), t(a);
    function i() {
      o.forEach((s) => {
        const [u, c] = n.value;
        s.setPadding({ left: c, right: c, top: u, bottom: u });
      });
    }
    function l(s) {
      S(e.onClick, s);
    }
    return {
      average: n,
      n: Y4,
      classes: j4,
      handleClick: l,
      padStartFlex: Pr
    };
  }
});
ym.render = W4;
var ai = ym;
te(ai);
ue(ai, bm);
const fT = ai;
var Rl = ai, K4 = Object.defineProperty, Zc = Object.getOwnPropertySymbols, q4 = Object.prototype.hasOwnProperty, G4 = Object.prototype.propertyIsEnumerable, Jc = (e, n, o) => n in e ? K4(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, X4 = (e, n) => {
  for (var o in n || (n = {}))
    q4.call(n, o) && Jc(e, o, n[o]);
  if (Zc)
    for (var o of Zc(n))
      G4.call(n, o) && Jc(e, o, n[o]);
  return e;
};
const km = X4({
  modelValue: {
    type: [String, Number, Boolean, Array],
    default: void 0
  },
  options: Array,
  labelKey: {
    type: String,
    default: "label"
  },
  valueKey: {
    type: String,
    default: "value"
  },
  multiple: Boolean,
  offsetY: {
    type: [String, Number],
    default: 0
  },
  chip: Boolean,
  readonly: Boolean,
  separator: {
    type: String,
    default: ","
  },
  textAlign: {
    type: String,
    default: "left"
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: Array,
  onFocus: R(),
  onBlur: R(),
  onClose: R(),
  onChange: R(),
  onClear: R(),
  "onUpdate:modelValue": R()
}, Ie(Na, [
  "size",
  "variant",
  "placeholder",
  "line",
  "hint",
  "textColor",
  "focusColor",
  "blurColor",
  "disabled",
  "clearable",
  "onClick"
])), { name: Z4, n: J4, classes: Q4 } = ee("select"), _4 = ["tabindex"];
function x4(e, n) {
  const o = ne("maybe-v-node"), t = ne("var-chip"), r = ne("var-icon"), a = ne("var-field-decorator"), i = ne("var-option"), l = ne("var-menu"), s = ne("var-form-details");
  return h(), P("div", {
    ref: "root",
    class: p(e.n()),
    tabindex: e.disabled || e.formDisabled ? void 0 : "0",
    onFocus: n[3] || (n[3] = (...u) => e.handleFocus && e.handleFocus(...u)),
    onBlur: n[4] || (n[4] = (...u) => e.handleRootBlur && e.handleRootBlur(...u))
  }, [
    G(l, {
      "var-select-cover": "",
      "same-width": "",
      "close-on-click-reference": "",
      "close-on-key-escape": !1,
      class: p(e.n("menu")),
      "popover-class": e.variant === "standard" && e.hint ? e.n("--standard-menu-margin") : void 0,
      "offset-y": e.offsetY,
      disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
      placement: e.placement,
      "default-style": !1,
      show: e.showMenu,
      "onUpdate:show": n[1] || (n[1] = (u) => e.showMenu = u),
      onClickOutside: e.handleClickOutside
    }, {
      menu: fe(() => [
        I(
          "div",
          {
            ref: "menuEl",
            class: p(e.classes(e.n("scroller"), e.n("$-elevation--3")))
          },
          [
            e.selectOptions.length ? (h(!0), P(
              Ae,
              { key: 0 },
              Ze(e.selectOptions, (u) => (h(), Pe(i, {
                key: u[e.valueKey],
                label: u[e.labelKey],
                value: u[e.valueKey],
                option: u,
                disabled: u.disabled
              }, null, 8, ["label", "value", "option", "disabled"]))),
              128
              /* KEYED_FRAGMENT */
            )) : X("v-if", !0),
            L(e.$slots, "default")
          ],
          2
          /* CLASS */
        )
      ]),
      default: fe(() => [
        G(
          a,
          wo(Kt({
            value: e.modelValue,
            size: e.size,
            variant: e.variant,
            placeholder: e.placeholder,
            line: e.line,
            hint: e.hint,
            textColor: e.textColor,
            focusColor: e.focusColor,
            blurColor: e.blurColor,
            isFocusing: e.isFocusing,
            errorMessage: e.errorMessage,
            formDisabled: e.formDisabled,
            disabled: e.disabled,
            clearable: e.clearable,
            cursor: e.cursor,
            onClick: e.handleClick,
            onClear: e.handleClear
          })),
          Et({
            "clear-icon": fe(({ clear: u }) => [
              L(e.$slots, "clear-icon", { clear: u })
            ]),
            "append-icon": fe(() => [
              L(e.$slots, "append-icon")
            ]),
            default: fe(() => [
              I(
                "div",
                {
                  class: p(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                  style: K({
                    textAlign: e.textAlign,
                    color: e.textColor
                  })
                },
                [
                  I(
                    "div",
                    {
                      class: p(e.n("label"))
                    },
                    [
                      e.isEmptyModelValue ? X("v-if", !0) : L(e.$slots, "selected", { key: 0 }, () => [
                        e.multiple ? (h(), P(
                          Ae,
                          { key: 0 },
                          [
                            e.chip ? (h(), P(
                              "div",
                              {
                                key: 0,
                                class: p(e.n("chips"))
                              },
                              [
                                (h(!0), P(
                                  Ae,
                                  null,
                                  Ze(e.labels, (u) => (h(), Pe(t, {
                                    class: p(e.n("chip")),
                                    "var-select-cover": "",
                                    closeable: "",
                                    size: "small",
                                    type: e.errorMessage ? "danger" : void 0,
                                    key: u,
                                    onClick: n[0] || (n[0] = An(() => {
                                    }, ["stop"])),
                                    onClose: () => e.handleClose(u)
                                  }, {
                                    default: fe(() => [
                                      G(o, { is: u }, null, 8, ["is"])
                                    ]),
                                    _: 2
                                    /* DYNAMIC */
                                  }, 1032, ["class", "type", "onClose"]))),
                                  128
                                  /* KEYED_FRAGMENT */
                                ))
                              ],
                              2
                              /* CLASS */
                            )) : (h(), P(
                              "div",
                              {
                                key: 1,
                                class: p(e.n("values"))
                              },
                              [
                                (h(!0), P(
                                  Ae,
                                  null,
                                  Ze(e.labels, (u, c) => (h(), P(
                                    Ae,
                                    { key: u },
                                    [
                                      G(o, { is: u }, null, 8, ["is"]),
                                      Be(
                                        re(c !== e.labels.length - 1 ? e.separator : ""),
                                        1
                                        /* TEXT */
                                      )
                                    ],
                                    64
                                    /* STABLE_FRAGMENT */
                                  ))),
                                  128
                                  /* KEYED_FRAGMENT */
                                ))
                              ],
                              2
                              /* CLASS */
                            ))
                          ],
                          64
                          /* STABLE_FRAGMENT */
                        )) : (h(), Pe(o, {
                          key: 1,
                          is: e.label
                        }, null, 8, ["is"]))
                      ])
                    ],
                    2
                    /* CLASS */
                  ),
                  e.enableCustomPlaceholder ? (h(), P(
                    "span",
                    {
                      key: 0,
                      class: p(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
                      style: K({
                        color: e.placeholderColor
                      })
                    },
                    re(e.placeholder),
                    7
                    /* TEXT, CLASS, STYLE */
                  )) : X("v-if", !0),
                  L(e.$slots, "arrow-icon", {
                    focus: e.isFocusing,
                    menuOpen: e.showMenu
                  }, () => [
                    G(r, {
                      class: p(e.classes(e.n("arrow"), [e.showMenu, e.n("--arrow-rotate")])),
                      "var-select-cover": "",
                      name: "menu-down",
                      transition: 300
                    }, null, 8, ["class"])
                  ])
                ],
                6
                /* CLASS, STYLE */
              )
            ]),
            _: 2
            /* DYNAMIC */
          }, [
            e.$slots["prepend-icon"] ? {
              name: "prepend-icon",
              fn: fe(() => [
                L(e.$slots, "prepend-icon")
              ]),
              key: "0"
            } : void 0
          ]),
          1040
          /* FULL_PROPS, DYNAMIC_SLOTS */
        )
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class", "popover-class", "offset-y", "disabled", "placement", "show", "onClickOutside"]),
    G(s, {
      "error-message": e.errorMessage,
      onClick: n[2] || (n[2] = An(() => {
      }, ["stop"]))
    }, null, 8, ["error-message"])
  ], 42, _4);
}
const $m = x({
  name: Z4,
  components: {
    VarIcon: Je,
    VarMenu: Ut,
    VarChip: Tr,
    VarOption: Fr,
    VarFieldDecorator: Vt,
    VarFormDetails: En,
    MaybeVNode: jr
  },
  props: km,
  setup(e) {
    const n = k(!1), o = k(!1), t = k(null), r = B(() => e.multiple), a = B(() => e.focusColor), i = B(() => Qn(e.modelValue)), l = B(() => e.disabled || e.readonly ? "" : "pointer"), s = B(() => He(e.options) ? e.options : []), u = k(0), { bindForm: c, form: d } = jn(), { length: f, options: v, bindOptions: y } = xS(), { label: m, labels: b, computeLabel: C, getSelectedValue: w } = Hv({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => v,
      optionProvidersLength: () => f.value
    }), {
      errorMessage: g,
      validateWithTrigger: $,
      validate: O,
      // expose
      resetValidation: z
    } = Yn(), A = k(null), T = B(() => e.variant === "outlined" ? "bottom" : "cover-top"), E = B(() => {
      const { hint: Q, blurColor: ke, focusColor: Ce } = e;
      if (!Q)
        return g.value ? "var(--field-decorator-error-color)" : n.value ? Ce || "var(--field-decorator-focus-color)" : ke || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    }), D = B(() => !e.hint && Qn(e.modelValue)), M = {
      multiple: r,
      focusColor: a,
      computeLabel: C,
      onSelect: pe,
      reset: W,
      validate: V,
      resetValidation: z
    };
    de(
      () => e.multiple,
      () => {
        const { multiple: Q, modelValue: ke } = e;
        Q && !He(ke) && Vn("Select", "The modelValue must be an array when multiple is true");
      }
    ), y(M), We(() => window, "keydown", H), We(() => window, "keyup", Y), S(c, M);
    function H(Q) {
      const { disabled: ke, readonly: Ce } = e;
      if (d != null && d.disabled.value || d != null && d.readonly.value || ke || Ce || !n.value)
        return;
      const { key: De } = Q;
      if (De === " " && !o.value) {
        Re(Q);
        return;
      }
      if (De === "Escape" && o.value) {
        t.value.focus(), Re(Q), o.value = !1;
        return;
      }
      if (De === "Tab" && o.value) {
        t.value.focus(), Re(Q), j();
        return;
      }
      if (De === "Enter" && !o.value) {
        Re(Q), o.value = !0;
        return;
      }
      (De === "ArrowDown" || De === "ArrowUp") && o.value && (Re(Q), Fd(t.value, A.value, De));
    }
    function Y(Q) {
      const { disabled: ke, readonly: Ce } = e;
      if (d != null && d.disabled.value || d != null && d.readonly.value || ke || Ce || o.value || !n.value)
        return;
      const { key: De } = Q;
      De === " " && !o.value && (Re(Q), o.value = !0);
    }
    function N(Q) {
      Ke(() => {
        const { validateTrigger: ke, rules: Ce, modelValue: De } = e;
        $(ke, Q, Ce, De);
      });
    }
    function q() {
      const { disabled: Q, readonly: ke, onFocus: Ce } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || Q || ke || (u.value = en(e.offsetY), J(), S(Ce), N("onFocus"));
    }
    function j() {
      const { disabled: Q, readonly: ke, onBlur: Ce } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || Q || ke || (ae(), S(Ce), N("onBlur"));
    }
    function ce() {
      o.value || j();
    }
    function _() {
      n.value && j();
    }
    function pe(Q) {
      const { disabled: ke, readonly: Ce, multiple: De, onChange: Xe } = e;
      if (d != null && d.disabled.value || d != null && d.readonly.value || ke || Ce)
        return;
      const ln = w(Q);
      S(e["onUpdate:modelValue"], ln), S(Xe, ln), N("onChange"), De || (t.value.focus(), $n().then(() => {
        o.value = !1;
      }));
    }
    function ye() {
      const { disabled: Q, readonly: ke, multiple: Ce, clearable: De, onClear: Xe } = e;
      if (d != null && d.disabled.value || d != null && d.readonly.value || Q || ke || !De)
        return;
      const ln = Ce ? [] : void 0;
      S(e["onUpdate:modelValue"], ln), S(Xe, ln), N("onClear");
    }
    function ie(Q) {
      const { disabled: ke, onClick: Ce } = e;
      d != null && d.disabled.value || ke || (S(Ce, Q), N("onClick"));
    }
    function U(Q) {
      const { disabled: ke, readonly: Ce, modelValue: De, onClose: Xe } = e;
      if (d != null && d.disabled.value || d != null && d.readonly.value || ke || Ce)
        return;
      const ln = v.find(({ label: Ue }) => Ue.value === Q), ve = De.filter(
        (Ue) => {
          var Ve;
          return Ue !== ((Ve = ln.value.value) != null ? Ve : ln.label.value);
        }
      );
      S(e["onUpdate:modelValue"], ve), S(Xe, ve), N("onClose");
    }
    function J() {
      u.value = en(e.offsetY), n.value = !0;
    }
    function ae() {
      n.value = !1, o.value = !1;
    }
    function V() {
      return O(e.rules, e.modelValue);
    }
    function W() {
      S(e["onUpdate:modelValue"], e.multiple ? [] : void 0), z();
    }
    return {
      root: t,
      offsetY: u,
      isFocusing: n,
      showMenu: o,
      errorMessage: g,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      label: m,
      labels: b,
      isEmptyModelValue: i,
      menuEl: A,
      placement: T,
      cursor: l,
      placeholderColor: E,
      enableCustomPlaceholder: D,
      selectOptions: s,
      isFunction: oo,
      n: J4,
      classes: Q4,
      handleFocus: q,
      handleBlur: j,
      handleClickOutside: _,
      handleClear: ye,
      handleClick: ie,
      handleClose: U,
      handleRootBlur: ce,
      reset: W,
      validate: V,
      resetValidation: z,
      focus: J,
      blur: ae
    };
  }
});
$m.render = x4;
var ii = $m;
te(ii);
ue(ii, km);
const pT = ii;
var Fl = ii;
const wm = {
  loading: {
    type: Boolean,
    default: !0
  },
  title: Boolean,
  card: Boolean,
  avatar: Boolean,
  fullscreen: Boolean,
  fullscreenZIndex: {
    type: [Number, String],
    default: 100
  },
  titleWidth: [Number, String],
  cardHeight: [Number, String],
  avatarSize: [Number, String],
  rows: {
    type: [Number, String],
    default: 3
  },
  rowsWidth: {
    type: Array,
    default: () => []
  }
}, { name: e2, n: n2, classes: o2 } = ee("skeleton");
function t2(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n("$--box"), e.n()))
    },
    [
      e.loading ? X("v-if", !0) : (h(), P(
        "div",
        {
          key: 0,
          class: p(e.n("data"))
        },
        [
          L(e.$slots, "default")
        ],
        2
        /* CLASS */
      )),
      e.loading && !e.fullscreen ? (h(), P(
        "div",
        {
          key: 1,
          class: p(e.n("content"))
        },
        [
          e.card ? (h(), P(
            "div",
            {
              key: 0,
              class: p(e.n("card")),
              style: K({ height: e.toSizeUnit(e.cardHeight) })
            },
            [
              I(
                "div",
                {
                  class: p(e.n("--animation"))
                },
                null,
                2
                /* CLASS */
              )
            ],
            6
            /* CLASS, STYLE */
          )) : X("v-if", !0),
          e.avatar || e.title || e.toNumber(e.rows) > 0 ? (h(), P(
            "div",
            {
              key: 1,
              class: p(e.n("article"))
            },
            [
              e.avatar ? (h(), P(
                "div",
                {
                  key: 0,
                  class: p(e.n("avatar")),
                  style: K({
                    width: e.toSizeUnit(e.avatarSize),
                    height: e.toSizeUnit(e.avatarSize)
                  })
                },
                [
                  I(
                    "div",
                    {
                      class: p(e.n("--animation"))
                    },
                    null,
                    2
                    /* CLASS */
                  )
                ],
                6
                /* CLASS, STYLE */
              )) : X("v-if", !0),
              e.title || e.toNumber(e.rows) > 0 ? (h(), P(
                "div",
                {
                  key: 1,
                  class: p(e.n("section"))
                },
                [
                  e.title ? (h(), P(
                    "div",
                    {
                      key: 0,
                      class: p(e.n("title")),
                      style: K({ width: e.toSizeUnit(e.titleWidth) })
                    },
                    [
                      I(
                        "div",
                        {
                          class: p(e.n("--animation"))
                        },
                        null,
                        2
                        /* CLASS */
                      )
                    ],
                    6
                    /* CLASS, STYLE */
                  )) : X("v-if", !0),
                  (h(!0), P(
                    Ae,
                    null,
                    Ze(e.toNumber(e.rows), (o, t) => (h(), P(
                      "div",
                      {
                        class: p(e.n("row")),
                        key: o,
                        style: K({ width: e.toSizeUnit(e.rowsWidth[t]) })
                      },
                      [
                        I(
                          "div",
                          {
                            class: p(e.n("--animation"))
                          },
                          null,
                          2
                          /* CLASS */
                        )
                      ],
                      6
                      /* CLASS, STYLE */
                    ))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ],
                2
                /* CLASS */
              )) : X("v-if", !0)
            ],
            2
            /* CLASS */
          )) : X("v-if", !0)
        ],
        2
        /* CLASS */
      )) : X("v-if", !0),
      e.loading && e.fullscreen ? (h(), P(
        "div",
        {
          key: 2,
          class: p(e.n("fullscreen")),
          style: K({ zIndex: e.toNumber(e.fullscreenZIndex) })
        },
        [
          I(
            "div",
            {
              class: p(e.n("--animation"))
            },
            null,
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Cm = x({
  name: e2,
  props: wm,
  setup: () => ({
    n: n2,
    classes: o2,
    toSizeUnit: Oe,
    toNumber: F
  })
});
Cm.render = t2;
var li = Cm;
te(li);
ue(li, wm);
const vT = li;
var Ul = li, un = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(un || {});
const Sm = {
  modelValue: {
    type: [Number, Array],
    default: 0
  },
  step: {
    type: [Number, String],
    default: 1
  },
  range: Boolean,
  labelVisible: {
    type: String,
    default: "normal"
  },
  activeColor: String,
  trackColor: String,
  thumbColor: String,
  labelColor: String,
  labelTextColor: String,
  trackHeight: [String, Number],
  max: {
    type: [String, Number],
    default: 100
  },
  min: {
    type: [String, Number],
    default: 0
  },
  thumbSize: [String, Number],
  disabled: Boolean,
  readonly: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  rules: Array,
  onChange: R(),
  onStart: R(),
  onEnd: R(),
  "onUpdate:modelValue": R()
}, { name: r2, n: Qc, classes: a2 } = ee("slider"), i2 = ["tabindex", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-disabled", "aria-valuetext", "onTouchstart", "onFocusin", "onFocusout"];
function l2(e, n) {
  const o = ne("var-hover-overlay"), t = ne("var-form-details"), r = je("hover");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(e.direction), e.n("$--box")))
    },
    [
      I(
        "div",
        {
          class: p(e.classes(e.n(`${e.direction}-block`), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(`${e.direction}--error`)])),
          ref: "sliderEl",
          onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
        },
        [
          I(
            "div",
            {
              class: p(e.n(`${e.direction}-track`))
            },
            [
              I(
                "div",
                {
                  class: p(e.n(`${e.direction}-track-background`)),
                  style: K({
                    background: e.trackColor,
                    height: e.isVertical ? "100%" : e.toSizeUnit(e.trackHeight),
                    width: e.isVertical ? e.toSizeUnit(e.trackHeight) : "100%"
                  })
                },
                null,
                6
                /* CLASS, STYLE */
              ),
              I(
                "div",
                {
                  class: p(e.n(`${e.direction}-track-fill`)),
                  style: K(e.getFillStyle)
                },
                null,
                6
                /* CLASS, STYLE */
              )
            ],
            2
            /* CLASS */
          ),
          (h(!0), P(
            Ae,
            null,
            Ze(e.thumbList, (a) => (h(), P("div", {
              class: p(e.n(`${e.direction}-thumb`)),
              key: a.enumValue,
              style: K(e.thumbStyle(a)),
              tabindex: e.isDisabled ? void 0 : "0",
              role: "slider",
              "aria-valuemin": e.min,
              "aria-valuemax": e.max,
              "aria-valuenow": a.value,
              "aria-disabled": e.isDisabled,
              "aria-valuetext": `${a.text}`,
              onTouchstart: An((i) => e.start(i, a.enumValue), ["stop"]),
              onFocusin: (i) => e.handleFocus(a),
              onFocusout: (i) => e.handleBlur(a)
            }, [
              L(e.$slots, "button", {
                currentValue: a.text
              }, () => [
                Me(I(
                  "div",
                  {
                    class: p(e.n(`${e.direction}-thumb-block`)),
                    style: K({
                      background: e.thumbColor
                    })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ), [
                  [r, (i) => e.hover(i, a), "desktop"]
                ]),
                I(
                  "div",
                  {
                    class: p(
                      e.classes(e.n(`${e.direction}-thumb-ripple`), [
                        e.thumbsProps[a.enumValue].active,
                        e.n(`${e.direction}-thumb-ripple--active`)
                      ])
                    ),
                    style: K({
                      background: e.thumbsProps[a.enumValue].active ? e.thumbColor : void 0
                    })
                  },
                  [
                    G(o, {
                      hovering: !e.isDisabled && a.hovering,
                      focusing: !e.isDisabled && a.focusing
                    }, null, 8, ["hovering", "focusing"])
                  ],
                  6
                  /* CLASS, STYLE */
                ),
                I(
                  "div",
                  {
                    class: p(
                      e.classes(e.n(`${e.direction}-thumb-label`), [e.showLabel(a.enumValue), e.n(`${e.direction}-thumb-label--active`)])
                    ),
                    style: K({
                      background: e.labelColor,
                      color: e.labelTextColor,
                      height: e.toSizeUnit(e.thumbSize),
                      width: e.toSizeUnit(e.thumbSize)
                    })
                  },
                  [
                    I(
                      "span",
                      null,
                      re(a.text),
                      1
                      /* TEXT */
                    )
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ])
            ], 46, i2))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      ),
      G(t, {
        "error-message": e.errorMessage,
        class: p(e.n("form")),
        "var-slider-cover": ""
      }, null, 8, ["error-message", "class"])
    ],
    2
    /* CLASS */
  );
}
const Pm = x({
  name: r2,
  components: {
    VarFormDetails: En,
    VarHoverOverlay: Ln
  },
  directives: { Hover: Tn },
  props: Sm,
  setup(e) {
    const n = k(0), o = k(null), t = k(!1), r = B(() => F(e.max) - F(e.min)), a = B(() => n.value / r.value * F(e.step)), i = B(() => e.disabled || (f == null ? void 0 : f.disabled.value)), l = B(() => e.readonly || (f == null ? void 0 : f.readonly.value)), s = B(() => e.direction === "vertical"), u = k(!1), c = k(!1), { bindForm: d, form: f } = jn(), { errorMessage: v, validateWithTrigger: y, validate: m, resetValidation: b } = Yn(), { hovering: C, handleHovering: w } = Jn(), { hovering: g, handleHovering: $ } = Jn(), O = B(() => {
      const { modelValue: le, range: me } = e;
      let $e = [];
      return me && He(le) ? $e = [
        {
          value: ce(le[0]),
          enumValue: un.First,
          text: _(le[0]),
          hovering: C.value,
          focusing: u.value,
          handleHovering: w,
          handleFocusing(Ne) {
            u.value = Ne;
          }
        },
        {
          value: ce(le[1]),
          enumValue: un.Second,
          text: _(le[1]),
          hovering: g.value,
          focusing: c.value,
          handleHovering: $,
          handleFocusing(Ne) {
            c.value = Ne;
          }
        }
      ] : On(le) && ($e = [
        {
          value: ce(le),
          enumValue: un.First,
          text: _(le),
          hovering: C.value,
          focusing: u.value,
          handleHovering: w,
          handleFocusing(Ne) {
            u.value = Ne;
          }
        }
      ]), $e;
    }), z = B(() => {
      const { activeColor: le, range: me, modelValue: $e } = e, Ne = me && He($e) ? ce(Math.min($e[0], $e[1])) : 0, xe = me && He($e) ? ce(Math.max($e[0], $e[1])) - Ne : ce($e);
      return s.value ? {
        left: "0px",
        height: `${xe}%`,
        bottom: `${Ne}%`,
        background: le
      } : {
        top: "0px",
        width: `${xe}%`,
        left: `${Ne}%`,
        background: le
      };
    }), A = Qe({
      [un.First]: H(),
      [un.Second]: H()
    });
    let T;
    S(d, {
      reset: ln,
      validate: M,
      resetValidation: b
    }), de([() => e.modelValue, () => e.step], ([le, me]) => {
      !Ce() || !De() || t.value || Xe(le, F(me));
    }), de(n, () => Xe()), pn(() => {
      !Ce() || !De() || D();
    }), Hr(ae), We(() => window, "keydown", Ue), ro(D);
    function D() {
      n.value = o.value[s.value ? "offsetHeight" : "offsetWidth"];
    }
    function M() {
      return m(e.rules, e.modelValue);
    }
    function H() {
      return {
        startPosition: 0,
        currentOffset: 0,
        active: !1,
        percentValue: 0
      };
    }
    function Y() {
      return Ke(() => y(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function N(le) {
      const me = le.currentTarget;
      return me ? s.value ? n.value - (le.clientY - an(me).top) : le.clientX - bg(me) : 0;
    }
    function q(le) {
      return {
        [s.value ? "bottom" : "left"]: `${le.value}%`,
        zIndex: A[le.enumValue].active ? 1 : void 0
      };
    }
    function j(le) {
      return e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : A[le].active;
    }
    function ce(le) {
      const { min: me, max: $e } = e;
      return le < F(me) ? 0 : le > F($e) ? 100 : (le - F(me)) / r.value * 100;
    }
    function _(le) {
      if (!On(le))
        return 0;
      const me = Mn(le, F(e.min), F(e.max));
      return parseInt(`${me}`, 10) === me ? me : F(me.toPrecision(5));
    }
    function pe(le, me) {
      i.value || me.handleHovering(le);
    }
    function ye(le) {
      S(e.onChange, le), S(e["onUpdate:modelValue"], le), Y();
    }
    function ie(le, me) {
      let $e = [];
      const { step: Ne, range: xe, modelValue: oe, min: we } = e, Te = F(Ne), Fe = Math.round(le / a.value), Le = Fe * Te + F(we), sn = A[me].percentValue * Te + F(we);
      if (A[me].percentValue = Fe, xe && He(oe) && ($e = me === un.First ? [Le, oe[1]] : [oe[0], Le]), sn !== Le) {
        const vn = xe ? $e.map((kn) => _(kn)) : _(Le);
        ye(vn);
      }
    }
    function U(le) {
      if (!e.range)
        return un.First;
      const me = A[un.First].percentValue * a.value, $e = A[un.Second].percentValue * a.value, Ne = Math.abs(le - me), xe = Math.abs(le - $e);
      return Ne <= xe ? un.First : un.Second;
    }
    function J() {
      document.addEventListener("touchmove", W, { passive: !1 }), document.addEventListener("touchend", Q), document.addEventListener("touchcancel", Q);
    }
    function ae() {
      document.removeEventListener("touchmove", W), document.removeEventListener("touchend", Q), document.removeEventListener("touchcancel", Q);
    }
    function V(le, me) {
      if (D(), i.value || (A[me].active = !0), T = me, J(), i.value || l.value)
        return;
      S(e.onStart), t.value = !0;
      const { clientX: $e, clientY: Ne } = le.touches[0];
      A[me].startPosition = s.value ? Ne : $e;
    }
    function W(le) {
      if (Re(le), i.value || l.value || !t.value)
        return;
      const { startPosition: me, currentOffset: $e } = A[T], { clientX: Ne, clientY: xe } = le.touches[0];
      let oe = (s.value ? me - xe : Ne - me) + $e;
      oe <= 0 ? oe = 0 : oe >= n.value && (oe = n.value), ie(oe, T);
    }
    function Q() {
      ae();
      const { range: le, modelValue: me, onEnd: $e, step: Ne, min: xe } = e;
      if (i.value || (A[T].active = !1), i.value || l.value)
        return;
      let oe = [];
      A[T].currentOffset = A[T].percentValue * a.value;
      const we = A[T].percentValue * F(Ne) + F(xe);
      le && He(me) && (oe = T === un.First ? [we, me[1]] : [me[0], we]), S($e, le ? oe : we), t.value = !1;
    }
    function ke(le) {
      if (i.value || l.value || le.target.closest(`.${Qc("thumb")}`))
        return;
      const me = N(le), $e = U(me);
      T = $e, ie(me, $e), Q();
    }
    function Ce() {
      return F(e.step) <= 0 ? (gg("[Varlet] Slider", '"step" should be > 0'), !1) : !0;
    }
    function De() {
      const { range: le, modelValue: me } = e;
      return le && !He(me) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !le && He(me) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : le && He(me) && me.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }
    function Xe(le = e.modelValue, me = F(e.step)) {
      const $e = (Ne) => {
        const { min: xe, max: oe } = e;
        return Ne < F(xe) ? 0 : Ne > F(oe) ? r.value / me : (Ne - F(xe)) / me;
      };
      e.range && He(le) ? (A[un.First].percentValue = $e(le[0]), A[un.First].currentOffset = A[un.First].percentValue * a.value, A[un.Second].percentValue = $e(le[1]), A[un.Second].currentOffset = A[un.Second].percentValue * a.value) : On(le) && (A[un.First].currentOffset = $e(le) * a.value);
    }
    function ln() {
      const le = e.range ? [0, 0] : 0;
      S(e["onUpdate:modelValue"], le), b();
    }
    function ve(le, me) {
      const $e = F(e.step);
      if (He(me)) {
        const Ne = me[0] + (u.value ? le * $e : 0), xe = me[1] + (c.value ? le * $e : 0);
        return [Ne, xe].map(_);
      }
      return _(me + le * $e);
    }
    function Ue(le) {
      const me = {
        ArrowRight: 1,
        ArrowUp: 1,
        ArrowLeft: -1,
        ArrowDown: -1
      }, { key: $e } = le;
      if (!$r(me, $e) || l.value || i.value || e.range && !u.value && !c.value || !e.range && !u.value)
        return;
      Re(le);
      const Ne = me[$e], xe = ve(Ne, e.modelValue);
      ye(xe);
    }
    function Ve(le) {
      i.value || le.handleFocusing(!0);
    }
    function nn(le) {
      le.handleFocusing(!1);
    }
    return {
      sliderEl: o,
      getFillStyle: z,
      isDisabled: i,
      isVertical: s,
      errorMessage: v,
      thumbsProps: A,
      thumbList: O,
      handleFocus: Ve,
      handleBlur: nn,
      n: Qc,
      classes: a2,
      thumbStyle: q,
      hover: pe,
      toSizeUnit: Oe,
      toNumber: F,
      showLabel: j,
      start: V,
      move: W,
      end: Q,
      handleClick: ke
    };
  }
});
Pm.render = l2;
var si = Pm;
te(si);
ue(si, Sm);
const mT = si;
var Hl = si, s2 = Object.defineProperty, u2 = Object.defineProperties, c2 = Object.getOwnPropertyDescriptors, _c = Object.getOwnPropertySymbols, d2 = Object.prototype.hasOwnProperty, f2 = Object.prototype.propertyIsEnumerable, xc = (e, n, o) => n in e ? s2(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, p2 = (e, n) => {
  for (var o in n || (n = {}))
    d2.call(n, o) && xc(e, o, n[o]);
  if (_c)
    for (var o of _c(n))
      f2.call(n, o) && xc(e, o, n[o]);
  return e;
}, v2 = (e, n) => u2(e, c2(n));
const As = {
  type: String,
  position: {
    type: String,
    default: "top"
  },
  content: [String, Function, Object],
  contentClass: String,
  duration: {
    type: Number,
    default: 3e3
  },
  elevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  vertical: Boolean,
  loadingType: Ie(lo, "type"),
  loadingSize: Ie(lo, "size"),
  loadingRadius: Ie(lo, "radius"),
  loadingColor: v2(p2({}, Ie(lo, "color")), {
    default: "currentColor"
  }),
  lockScroll: Boolean,
  show: Boolean,
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  forbidClick: Boolean,
  onOpen: R(),
  onOpened: R(),
  onClose: R(),
  onClosed: R(),
  "onUpdate:show": R(),
  _update: String
}, { n: m2, classes: h2 } = ee("snackbar"), g2 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function b2(e, n) {
  const o = ne("var-icon"), t = ne("var-loading");
  return Me((h(), P(
    "div",
    {
      class: p(e.n()),
      style: K({ pointerEvents: e.isForbidClick ? "auto" : "none", zIndex: e.zIndex })
    },
    [
      I(
        "div",
        {
          class: p(
            e.classes(
              e.n("wrapper"),
              e.n(`wrapper-${e.position}`),
              e.formatElevation(e.elevation, 4),
              [e.vertical, e.n("vertical")],
              [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n(`wrapper-${e.type}`)]
            )
          ),
          style: K({ zIndex: e.zIndex })
        },
        [
          I(
            "div",
            {
              class: p([e.n("content"), e.contentClass])
            },
            [
              L(e.$slots, "default", {}, () => [
                Be(
                  re(e.content),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          ),
          e.iconName || e.type === "loading" || e.$slots.icon ? (h(), P(
            "div",
            {
              key: 0,
              class: p(e.n("icon"))
            },
            [
              e.iconName ? (h(), Pe(o, {
                key: 0,
                name: e.iconName
              }, null, 8, ["name"])) : X("v-if", !0),
              e.type === "loading" ? (h(), Pe(t, {
                key: 1,
                type: e.loadingType,
                size: e.loadingSize,
                color: e.loadingColor,
                radius: e.loadingRadius
              }, null, 8, ["type", "size", "color", "radius"])) : X("v-if", !0),
              L(e.$slots, "icon")
            ],
            2
            /* CLASS */
          )) : X("v-if", !0),
          e.$slots.action ? (h(), P(
            "div",
            {
              key: 1,
              class: p(e.n("action"))
            },
            [
              L(e.$slots, "action")
            ],
            2
            /* CLASS */
          )) : X("v-if", !0)
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  )), [
    [Xn, e.show]
  ]);
}
const zm = x({
  name: "VarSnackbarCore",
  components: {
    VarLoading: it,
    VarIcon: Je
  },
  props: As,
  setup(e) {
    const n = k(null), { zIndex: o } = Xt(() => e.show, 1);
    Gt(
      () => e.show,
      () => e.lockScroll
    );
    const t = B(() => {
      const { type: i, forbidClick: l } = e;
      return i === "loading" || l;
    }), r = B(() => e.type ? g2[e.type] : "");
    function a() {
      n.value = setTimeout(() => {
        e.type !== "loading" && S(e["onUpdate:show"], !1);
      }, e.duration);
    }
    return de(
      () => e.show,
      (i) => {
        i ? (S(e.onOpen), a()) : (clearTimeout(n.value), S(e.onClose));
      }
    ), de(
      () => e._update,
      () => {
        clearTimeout(n.value), a();
      }
    ), pn(() => {
      e.show && (S(e.onOpen), a());
    }), {
      SNACKBAR_TYPE: Em,
      zIndex: o,
      iconName: r,
      isForbidClick: t,
      n: m2,
      classes: h2,
      formatElevation: fn
    };
  }
});
zm.render = b2;
var Om = zm;
const { name: y2, n: k2 } = ee("snackbar");
function $2(e, n) {
  const o = ne("var-snackbar-core");
  return h(), Pe(no, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [
    G(_e, {
      name: `${e.n()}-fade`,
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed
    }, {
      default: fe(() => [
        G(o, Ye(e.$props, {
          class: e.n("transition")
        }), Et({
          default: fe(() => [
            L(e.$slots, "default")
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots.icon ? {
            name: "icon",
            fn: fe(() => [
              L(e.$slots, "icon")
            ]),
            key: "0"
          } : void 0,
          e.$slots.action ? {
            name: "action",
            fn: fe(() => [
              L(e.$slots, "action")
            ]),
            key: "1"
          } : void 0
        ]), 1040, ["class"])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ], 8, ["to", "disabled"]);
}
const Tm = x({
  name: y2,
  components: { VarSnackbarCore: Om },
  props: As,
  setup() {
    const { disabled: e } = Go();
    return {
      disabled: e,
      n: k2
    };
  }
});
Tm.render = $2;
var ui = Tm, w2 = Object.defineProperty, ed = Object.getOwnPropertySymbols, C2 = Object.prototype.hasOwnProperty, S2 = Object.prototype.propertyIsEnumerable, nd = (e, n, o) => n in e ? w2(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Ht = (e, n) => {
  for (var o in n || (n = {}))
    C2.call(n, o) && nd(e, o, n[o]);
  if (ed)
    for (var o of ed(n))
      S2.call(n, o) && nd(e, o, n[o]);
  return e;
};
const Em = ["loading", "success", "warning", "info", "error"];
let od = 0, Yl = !1, Dm, Yt = !1;
const Bm = {
  type: void 0,
  content: "",
  icon: "",
  action: "",
  position: "top",
  duration: 3e3,
  elevation: !0,
  vertical: !1,
  contentClass: void 0,
  loadingType: "circle",
  loadingSize: "normal",
  lockScroll: !1,
  teleport: "body",
  forbidClick: !1,
  onOpen: () => {
  },
  onOpened: () => {
  },
  onClose: () => {
  },
  onClosed: () => {
  }
};
let Hn = Qe([]), Vs = Bm;
const P2 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Mi = (e) => () => oo(e) ? e() : e, z2 = {
  setup() {
    return () => {
      const e = Hn.map(({
        id: n,
        reactiveSnackOptions: o,
        _update: t
      }) => {
        const r = document.querySelector(".var-transition-group");
        o.forbidClick || o.type === "loading" ? r.classList.add("var-pointer-auto") : r.classList.remove("var-pointer-auto");
        const a = Ht({
          position: Yt ? "relative" : "absolute"
        }, I2(o.position)), {
          content: i,
          icon: l,
          action: s
        } = o, u = {
          default: Mi(i),
          icon: Mi(l),
          action: Mi(s)
        };
        return G(Om, Ye(o, {
          key: n,
          style: a,
          "data-id": n,
          _update: t,
          show: o.show,
          "onUpdate:show": (c) => o.show = c
        }), u);
      });
      return G(bh, Ye(P2, {
        style: {
          zIndex: Nn.zIndex
        },
        onAfterEnter: O2,
        onAfterLeave: T2
      }), {
        default: () => [e]
      });
    };
  }
}, eo = function(e) {
  const n = D2(e), o = Qe(Ht(Ht({}, Vs), n));
  o.show = !0, Yl || (Yl = !0, Dm = ht(z2).unmountInstance);
  const {
    length: t
  } = Hn, r = {
    id: od++,
    reactiveSnackOptions: o
  };
  if (t === 0 || Yt)
    E2(r);
  else {
    const a = `update-${od}`;
    B2(o, a);
  }
  return {
    clear() {
      !Yt && Hn.length ? Hn[0].reactiveSnackOptions.show = !1 : o.show = !1;
    }
  };
};
Em.forEach((e) => {
  eo[e] = (n) => (tt(n) ? n.type = e : n = {
    content: n,
    type: e
  }, eo(n));
});
eo.allowMultiple = function(e = !1) {
  e !== Yt && (Hn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Yt = e);
};
eo.clear = function() {
  Hn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
eo.setDefaultOptions = function(e) {
  Vs = e;
};
eo.resetDefaultOptions = function() {
  Vs = Bm;
};
function O2(e) {
  const n = e.getAttribute("data-id"), o = Hn.find((t) => t.id === F(n));
  o && S(o.reactiveSnackOptions.onOpened);
}
function T2(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  const n = e.getAttribute("data-id"), o = Hn.find((r) => r.id === F(n));
  o && (o.animationEnd = !0, S(o.reactiveSnackOptions.onClosed)), Hn.every((r) => r.animationEnd) && (S(Dm), Hn = Qe([]), Yl = !1);
}
function E2(e) {
  Hn.push(e);
}
function D2(e = {}) {
  return gn(e) ? {
    content: e
  } : e;
}
function B2(e, n) {
  const [o] = Hn;
  o.reactiveSnackOptions = Ht(Ht({}, o.reactiveSnackOptions), e), o._update = n;
}
function I2(e = "top") {
  return e === "bottom" ? {
    top: "85%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
eo.Component = ui;
te(ui);
te(ui, eo);
ue(eo, As);
const hT = ui;
var jl = eo;
const Im = {
  size: {
    type: [String, Number, Array],
    default: "normal"
  },
  wrap: {
    type: Boolean,
    default: !0
  },
  direction: {
    type: String,
    default: "row"
  },
  justify: {
    type: String,
    default: "flex-start"
  },
  align: String,
  inline: Boolean
};
function In(e) {
  return `calc(${e} / 2)`;
}
function M2(e, n, o) {
  const { direction: t, justify: r, index: a, lastIndex: i } = o;
  let l = "0";
  return t === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(r) ? a !== i ? l = `${In(e)} ${n} ${In(e)} 0` : l = `${In(e)} 0` : r === "space-around" ? l = `${In(e)} ${In(n)}` : r === "space-between" && (a === 0 ? l = `${In(e)} ${In(n)} ${In(e)} 0` : a === i ? l = `${In(e)} 0 ${In(e)} ${In(n)}` : l = `${In(e)} ${In(n)}`)), t === "column" && a !== i && (l = `0 0 ${e} 0`), l;
}
const N2 = (e) => ["mini", "small", "normal", "large"].includes(e), {
  name: A2,
  n: fr,
  classes: td
} = ee("space");
function V2(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : He(e) ? e.map(Oe) : [Oe(e), Oe(e)];
}
var ci = x({
  name: A2,
  props: Im,
  setup(e, {
    slots: n
  }) {
    return () => {
      var o;
      const {
        inline: t,
        justify: r,
        align: a,
        wrap: i,
        direction: l,
        size: s
      } = e;
      let u = (o = S(n.default)) != null ? o : [];
      const [c, d] = V2(s, N2(s));
      u = Ed(u);
      const f = u.length - 1, v = u.map((y, m) => {
        const b = M2(c, d, {
          direction: l,
          justify: r,
          index: m,
          lastIndex: f
        });
        return G("div", {
          class: td([l === "column", fr("--auto")]),
          style: {
            margin: b
          }
        }, [y]);
      });
      return G("div", {
        class: td(fr(), fr("$--box"), [t, fr("--inline")]),
        style: {
          flexDirection: l,
          justifyContent: Pr(r),
          alignItems: Pr(a),
          flexWrap: i ? "wrap" : "nowrap",
          margin: l === "row" ? `calc(-1 * ${c} / 2) 0` : void 0
        }
      }, [v]);
    };
  }
});
te(ci);
ue(ci, Im);
const gT = ci;
var Wl = ci;
const Mm = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: Ie(on, "name"),
  inactiveIcon: Ie(on, "name"),
  activeIconNamespace: Ie(on, "namespace"),
  currentIconNamespace: Ie(on, "namespace"),
  inactiveIconNamespace: Ie(on, "namespace")
}, Nm = Symbol("STEPS_BIND_STEP_KEY");
function L2() {
  const { bindChildren: e, childProviders: n } = yn(Nm);
  return {
    step: n,
    bindStep: e
  };
}
function R2() {
  const { parentProvider: e, index: n, bindParent: o } = bn(Nm);
  return o || Vn("Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: o
  };
}
const { name: F2, n: U2, classes: H2 } = ee("step"), Y2 = { key: 3 };
function j2(e, n) {
  const o = ne("var-icon");
  return h(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      I(
        "div",
        {
          class: p(e.n(e.direction))
        },
        [
          I(
            "div",
            {
              class: p(e.classes(e.n(`${e.direction}-tag`), [e.isActive || e.isCurrent, e.n(`${e.direction}-tag--active`)])),
              style: K({ backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor }),
              onClick: n[0] || (n[0] = (...t) => e.click && e.click(...t))
            },
            [
              e.isActive ? (h(), Pe(o, {
                key: 0,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.activeIcon,
                namespace: e.activeIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.isCurrent && e.currentIcon ? (h(), Pe(o, {
                key: 1,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.currentIcon,
                namespace: e.currentIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.inactiveIcon ? (h(), Pe(o, {
                key: 2,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.inactiveIcon,
                namespace: e.inactiveIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : (h(), P(
                "span",
                Y2,
                re(e.index + 1),
                1
                /* TEXT */
              ))
            ],
            6
            /* CLASS, STYLE */
          ),
          e.$slots.default ? (h(), P(
            "div",
            {
              key: 0,
              class: p(e.classes(e.n(`${e.direction}-content`), [e.isActive || e.isCurrent, e.n(`${e.direction}-content--active`)])),
              onClick: n[1] || (n[1] = (...t) => e.click && e.click(...t))
            },
            [
              L(e.$slots, "default")
            ],
            2
            /* CLASS */
          )) : X("v-if", !0),
          I(
            "div",
            {
              class: p(e.n(`${e.direction}-line`))
            },
            null,
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const Am = x({
  name: F2,
  components: { VarIcon: Je },
  props: Mm,
  setup() {
    const { index: e, steps: n, bindSteps: o } = R2(), { active: t, activeColor: r, inactiveColor: a, direction: i, clickStep: l } = n, s = B(() => t.value === e.value), u = B(() => e.value !== -1 && F(t.value) > e.value);
    o({ index: e });
    function d() {
      return l(e.value);
    }
    return {
      index: e,
      isActive: u,
      isCurrent: s,
      direction: i,
      activeColor: r,
      inactiveColor: a,
      n: U2,
      classes: H2,
      click: d
    };
  }
});
Am.render = j2;
var di = Am;
te(di);
ue(di, Mm);
const bT = di;
var Kl = di;
const Vm = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  activeColor: String,
  inactiveColor: String,
  onClickStep: R()
}, { name: W2, n: K2 } = ee("steps");
function q2(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.n()),
      style: K({ flexDirection: e.direction === "horizontal" ? "row" : "column" })
    },
    [
      L(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Lm = x({
  name: W2,
  props: Vm,
  setup(e) {
    const n = B(() => e.active), o = B(() => e.activeColor), t = B(() => e.inactiveColor), r = B(() => e.direction), { bindStep: a } = L2();
    a({
      active: n,
      direction: r,
      activeColor: o,
      inactiveColor: t,
      clickStep: l
    });
    function l(s) {
      S(e.onClickStep, s);
    }
    return { n: K2 };
  }
});
Lm.render = q2;
var fi = Lm;
te(fi);
ue(fi, Vm);
const yT = fi;
var ql = fi;
const Rm = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, { name: G2, n: X2 } = ee("style-provider"), Z2 = x({
  name: G2,
  props: Rm,
  setup(e, { slots: n }) {
    return () => Yr(
      e.tag,
      {
        class: X2(),
        style: Rd(e.styleVars)
      },
      S(n.default)
    );
  }
});
var pi = Z2;
const Fm = "varlet-style-vars";
function rd() {
  const e = document.head.querySelector(`#${Fm}`);
  e && document.head.removeChild(e);
}
function J2(e) {
  const n = document.createElement("style");
  n.id = Fm, n.innerHTML = e, document.head.appendChild(n);
}
function vi(e) {
  if (e == null) {
    rd();
    return;
  }
  const n = Rd(e ?? {}), o = Object.entries(n).reduce((t, [r, a]) => (t += `${r}:${a};`, t), `:root:root {
`);
  rd(), J2(`${o}
}`);
}
vi.Component = pi;
te(pi);
te(pi, vi);
ue(vi, Rm);
const kT = pi;
var Gl = vi;
const Um = {
  modelValue: {
    default: !1
  },
  activeValue: {
    default: !0
  },
  inactiveValue: {
    default: !1
  },
  lazyChange: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  loading: Boolean,
  color: String,
  loadingColor: String,
  closeColor: String,
  size: [String, Number],
  variant: Boolean,
  rules: Array,
  ripple: {
    type: Boolean,
    default: !0
  },
  buttonElevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onLazyChange"]
  },
  onClick: R(),
  onBeforeChange: R(),
  onChange: R(),
  "onUpdate:modelValue": R()
}, { name: Q2, n: _2, classes: x2 } = ee("switch"), eP = (e) => (Wo(""), e = e(), Ko(), e), nP = ["aria-checked"], oP = ["tabindex"], tP = /* @__PURE__ */ eP(() => /* @__PURE__ */ I(
  "svg",
  { viewBox: "25 25 50 50" },
  [
    /* @__PURE__ */ I("circle", {
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none"
    })
  ],
  -1
  /* HOISTED */
)), rP = [
  tP
];
function aP(e, n) {
  const o = ne("var-hover-overlay"), t = ne("var-form-details"), r = je("ripple"), a = je("hover");
  return Me((h(), P("div", {
    class: p(e.classes(e.n(), [e.variant, e.n("--variant")])),
    role: "switch",
    "aria-checked": e.modelValue
  }, [
    I(
      "div",
      {
        ref: "switchRef",
        class: p(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.isActive, e.n("block--active")])),
        style: K(e.styleComputed.switch),
        onClick: n[2] || (n[2] = (...i) => e.switchActive && e.switchActive(...i))
      },
      [
        I(
          "div",
          {
            style: K(e.styleComputed.track),
            class: p(e.classes(e.n("track"), [e.isActive, e.n("track--active")], [e.errorMessage && !e.variant, e.n("track--error")]))
          },
          null,
          6
          /* CLASS, STYLE */
        ),
        Me((h(), P("div", {
          class: p(e.classes(e.n("ripple"), [e.isActive, e.n("ripple--active")])),
          style: K(e.styleComputed.ripple),
          tabindex: e.disabled || e.formDisabled ? void 0 : "0",
          onFocus: n[0] || (n[0] = (i) => e.isFocusing = !0),
          onBlur: n[1] || (n[1] = (i) => e.isFocusing = !1)
        }, [
          I(
            "div",
            {
              style: K(e.styleComputed.handle),
              class: p(
                e.classes(
                  e.n("handle"),
                  e.formatElevation(e.buttonElevation, 2),
                  [e.isActive, e.n("handle--active")],
                  [e.errorMessage && !e.variant, e.n("handle--error")],
                  [e.hovering, e.n("handle--hover")]
                )
              )
            },
            [
              e.loading ? (h(), P(
                "span",
                {
                  key: 0,
                  class: p(e.n("loading")),
                  style: K({
                    width: e.radius,
                    height: e.radius
                  })
                },
                [...rP],
                6
                /* CLASS, STYLE */
              )) : X("v-if", !0)
            ],
            6
            /* CLASS, STYLE */
          ),
          G(o, {
            hovering: e.hovering && !e.disabled && !e.formDisabled,
            focusing: e.isFocusing && !e.disabled && !e.formDisabled
          }, null, 8, ["hovering", "focusing"])
        ], 46, oP)), [
          [r, {
            disabled: !e.ripple || e.disabled || e.loading || e.formDisabled || e.readonly || e.formReadonly
          }]
        ])
      ],
      6
      /* CLASS, STYLE */
    ),
    G(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
  ], 10, nP)), [
    [a, e.hover, "desktop"]
  ]);
}
const Hm = x({
  name: Q2,
  components: {
    VarFormDetails: En,
    VarHoverOverlay: Ln
  },
  directives: { Ripple: tn, Hover: Tn },
  props: Um,
  setup(e) {
    const n = k(null), o = k(!1), { bindForm: t, form: r } = jn(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = Yn(), { hovering: u, handleHovering: c } = Jn(), d = B(() => e.modelValue === e.activeValue), f = B(() => {
      const { size: z, color: A, closeColor: T, loadingColor: E, variant: D } = e;
      return {
        handle: {
          width: Cn(z),
          height: Cn(z),
          backgroundColor: d.value ? A : T,
          color: E
        },
        ripple: {
          left: d.value ? Cn(z, 0.5) : `-${Cn(z, D ? 1 / 3 : 0.5)}`,
          color: d.value ? A : T || "currentColor",
          width: Cn(z, 2),
          height: Cn(z, 2)
        },
        track: {
          width: Cn(z, D ? 13 / 6 : 1.9),
          height: Cn(z, D ? 4 / 3 : 0.72),
          borderRadius: Cn(z, 2 / 3),
          filter: d.value || a != null && a.value ? void 0 : `brightness(${D ? 1 : 0.6})`,
          backgroundColor: d.value ? A : T,
          borderWidth: D && !d.value ? Cn(z, 1 / 12) : void 0
        },
        switch: {
          width: Cn(z, D ? 13 / 6 : 2),
          height: Cn(z, D ? 4 / 3 : 1.2)
        }
      };
    }), v = B(() => Cn(e.size, 0.8));
    S(t, {
      reset: O,
      validate: C,
      resetValidation: s
    }), We(() => window, "keydown", m), We(() => window, "keyup", b);
    function m(z) {
      o.value && ((z.key === " " || z.key === "Enter") && Re(z), z.key === "Enter" && n.value.click());
    }
    function b(z) {
      !o.value || z.key !== " " || (Re(z), n.value.click());
    }
    function C() {
      return l(e.rules, e.modelValue);
    }
    function w(z) {
      Ke(() => {
        const { validateTrigger: A, rules: T, modelValue: E } = e;
        i(A, z, T, E);
      });
    }
    function g(z) {
      const {
        onClick: A,
        onChange: T,
        disabled: E,
        loading: D,
        readonly: M,
        activeValue: H,
        inactiveValue: Y,
        lazyChange: N,
        "onUpdate:modelValue": q,
        onBeforeChange: j
      } = e;
      if (E || r != null && r.disabled.value || (S(A, z), D || M || r != null && r.readonly.value))
        return;
      const ce = d.value ? Y : H;
      N ? S(j, ce, (_) => {
        S(q, _), w("onLazyChange");
      }) : (S(T, ce), S(q, ce), w("onChange"));
    }
    function $(z) {
      e.disabled || r != null && r.disabled.value || c(z);
    }
    function O() {
      S(e["onUpdate:modelValue"], e.inactiveValue), s();
    }
    return {
      isActive: d,
      switchRef: n,
      hovering: u,
      isFocusing: o,
      radius: v,
      styleComputed: f,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly,
      n: _2,
      classes: x2,
      formatElevation: fn,
      multiplySizeUnit: Cn,
      switchActive: g,
      hover: $
    };
  }
});
Hm.render = aP;
var mi = Hm;
te(mi);
ue(mi, Um);
const $T = mi;
var Xl = mi;
const Ym = {
  name: [String, Number],
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: R()
}, jm = Symbol("TABS_BIND_TAB_KEY");
function iP() {
  const { childProviders: e, bindChildren: n, length: o } = yn(jm);
  return {
    length: o,
    tabList: e,
    bindTabList: n
  };
}
function lP() {
  const { parentProvider: e, bindParent: n, index: o } = bn(jm);
  return n || Vn("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: o,
    tabs: e,
    bindTabs: n
  };
}
const { name: sP, n: pr, classes: uP } = ee("tab");
function cP(e, n) {
  const o = je("ripple");
  return Me((h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n(`--${e.itemDirection}`))),
      ref: "tabEl",
      style: K({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      L(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [o, { disabled: e.disabled || !e.ripple }]
  ]);
}
const Wm = x({
  name: sP,
  directives: { Ripple: tn },
  props: Ym,
  setup(e) {
    const n = k(null), o = B(() => n.value), t = B(() => e.name), r = B(() => e.disabled), { index: a, tabs: i, bindTabs: l } = lP(), { onTabClick: s, active: u, activeColor: c, inactiveColor: d, disabledColor: f, itemDirection: v, resize: y } = i, m = {
      name: t,
      index: a,
      disabled: r,
      element: o
    };
    l(m), de(() => [e.name, e.disabled], y);
    function b() {
      return e.name != null ? u.value === e.name : u.value === (a == null ? void 0 : a.value);
    }
    function C() {
      return e.disabled ? f.value : b() ? c.value : d.value;
    }
    function w() {
      return e.disabled ? pr("$-tab--disabled") : b() ? pr("$-tab--active") : pr("$-tab--inactive");
    }
    function g($) {
      const { disabled: O, name: z, onClick: A } = e;
      O || (S(A, z ?? a.value, $), s(m));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: c,
      inactiveColor: d,
      itemDirection: v,
      n: pr,
      classes: uP,
      computeColorStyle: C,
      computeColorClass: w,
      handleClick: g
    };
  }
});
Wm.render = cP;
var hi = Wm;
te(hi);
ue(hi, Ym);
const wT = hi;
var Zl = hi;
const Km = {
  name: [String, Number]
}, { name: dP, n: fP, classes: pP } = ee("tab-item");
function vP(e, n) {
  const o = ne("var-swipe-item");
  return h(), Pe(o, {
    class: p(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: fe(() => [
      L(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
const qm = x({
  name: dP,
  components: { VarSwipeItem: Rt },
  props: Km,
  setup(e) {
    const n = k(!1), o = B(() => e.name), { index: t, bindTabsItems: r } = lS(), { bindLists: a } = sS(), i = {
      index: t,
      name: o,
      current: B(() => n.value),
      setCurrent: l
    };
    r(i), a(i);
    function l(s) {
      n.value = s;
    }
    return {
      current: n,
      n: fP,
      classes: pP
    };
  }
});
qm.render = vP;
var gi = qm;
te(gi);
ue(gi, Km);
const CT = gi;
var Jl = gi;
const Gm = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  scrollerHeight: {
    type: [Number, String]
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, { name: mP, n: hP, classes: gP } = ee("table");
function bP(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box")))
    },
    [
      I(
        "div",
        {
          class: p(e.n("main")),
          style: K({ height: e.toSizeUnit(e.scrollerHeight) })
        },
        [
          I(
            "table",
            {
              class: p(e.n("table")),
              style: K({ width: e.toSizeUnit(e.fullWidth) })
            },
            [
              L(e.$slots, "default")
            ],
            6
            /* CLASS, STYLE */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      e.$slots.footer ? (h(), P(
        "div",
        {
          key: 0,
          class: p(e.n("footer"))
        },
        [
          L(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Xm = x({
  name: mP,
  props: Gm,
  setup: () => ({
    toSizeUnit: Oe,
    n: hP,
    classes: gP,
    formatElevation: fn
  })
});
Xm.render = bP;
var bi = Xm;
te(bi);
ue(bi, Gm);
const ST = bi;
var Ql = bi;
const Zm = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal"
  },
  itemDirection: {
    type: String,
    default: "horizontal"
  },
  fixedBottom: Boolean,
  activeColor: String,
  inactiveColor: String,
  disabledColor: String,
  color: String,
  indicatorColor: String,
  indicatorSize: [String, Number],
  elevation: {
    type: [Boolean, String, Number],
    default: !1
  },
  scrollable: {
    type: String,
    default: "auto"
  },
  indicatorPosition: {
    type: String,
    default: "normal"
  },
  safeArea: Boolean,
  sticky: Boolean,
  stickyCssMode: Ie(Pt, "cssMode"),
  stickyZIndex: Ie(Pt, "zIndex"),
  offsetTop: Ie(Pt, "offsetTop"),
  onClick: R(),
  onChange: R(),
  "onUpdate:active": R()
};
var ad = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: yP, n: kP, classes: $P } = ee("tabs");
function wP(e, n) {
  return h(), Pe(vt(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: fe(() => [
      I(
        "div",
        Ye({
          class: e.classes(
            e.n(),
            e.n("$--box"),
            e.n(`--item-${e.itemDirection}`),
            e.n(`--layout-${e.layoutDirection}-padding`),
            e.formatElevation(e.elevation, 4),
            [e.fixedBottom, e.n("--fixed-bottom")],
            [e.safeArea, e.n("--safe-area")]
          ),
          style: { background: e.color }
        }, e.$attrs),
        [
          I(
            "div",
            {
              ref: "scrollerEl",
              class: p(
                e.classes(
                  e.n("tab-wrap"),
                  [e.localScrollable, e.n(`--layout-${e.layoutDirection}-scrollable`)],
                  e.n(`--layout-${e.layoutDirection}`)
                )
              )
            },
            [
              L(e.$slots, "default"),
              I(
                "div",
                {
                  class: p(e.classes(e.n("indicator"), e.n(`--layout-${e.layoutDirection}${e.indicatorPosition}-indicator`))),
                  style: K({
                    width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                    height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                    transform: e.layoutDirection === "horizontal" ? `translateX(${e.indicatorX})` : `translateY(${e.indicatorY})`
                  })
                },
                [
                  I(
                    "div",
                    {
                      class: p(e.classes(e.n("indicator-inner"), e.n(`--layout-${e.layoutDirection}-indicator-inner`))),
                      style: K({ background: e.indicatorColor || e.activeColor })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  )
                ],
                6
                /* CLASS, STYLE */
              )
            ],
            2
            /* CLASS */
          )
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["css-mode", "offset-top", "z-index"]);
}
const Jm = x({
  name: yP,
  components: { VarSticky: ct },
  inheritAttrs: !1,
  props: Zm,
  setup(e) {
    const n = k("0px"), o = k("0px"), t = k("0px"), r = k("0px"), a = k(!1), i = k(null), l = B(() => e.active), s = B(() => e.activeColor), u = B(() => e.inactiveColor), c = B(() => e.disabledColor), d = B(() => e.itemDirection), f = k(null), v = B(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: y, bindTabList: m, length: b } = iP();
    m({
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: c,
      itemDirection: d,
      resize: E,
      onTabClick: w
    }), de(
      () => b.value,
      () => ad(this, null, function* () {
        yield $n(), E();
      })
    ), de(() => [e.active, e.scrollable], E), Eo(E), ro(E);
    function w(M) {
      var H;
      const Y = (H = M.name.value) != null ? H : M.index.value, { active: N, onChange: q, onClick: j } = e;
      S(e["onUpdate:active"], Y), S(j, Y), Y !== N && S(q, Y);
    }
    function g() {
      return y.find(({ name: M }) => e.active === M.value);
    }
    function $(M) {
      return y.find(({ index: H }) => (M ?? e.active) === H.value);
    }
    function O() {
      if (b.value === 0)
        return;
      const { active: M } = e;
      if (On(M)) {
        const H = Mn(M, 0, b.value - 1);
        return S(e["onUpdate:active"], H), $(H);
      }
    }
    function z() {
      a.value = e.scrollable === "always" || y.length >= 5;
    }
    function A({ element: M }) {
      const H = M.value;
      H && (e.layoutDirection === "horizontal" ? (n.value = `${H.offsetWidth}px`, t.value = `${H.offsetLeft}px`) : (o.value = `${H.offsetHeight}px`, r.value = `${H.offsetTop}px`));
    }
    function T({ element: M }) {
      if (!a.value)
        return;
      const H = i.value, Y = M.value;
      if (e.layoutDirection === "horizontal") {
        const N = Y.offsetLeft + Y.offsetWidth / 2 - H.offsetWidth / 2;
        Bt(H, {
          left: N,
          animation: Fi
        });
      } else {
        const N = Y.offsetTop + Y.offsetHeight / 2 - H.offsetHeight / 2;
        Bt(H, {
          top: N,
          animation: Fi
        });
      }
    }
    function E() {
      const M = g() || $() || O();
      !M || M.disabled.value || (z(), A(M), T(M));
    }
    function D() {
      return ad(this, null, function* () {
        e.sticky && f.value && (yield f.value.resize());
      });
    }
    return {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: o,
      indicatorX: t,
      indicatorY: r,
      indicatorPosition: v,
      localScrollable: a,
      scrollerEl: i,
      Transition: _e,
      toSizeUnit: Oe,
      n: kP,
      classes: $P,
      resize: E,
      resizeSticky: D,
      formatElevation: fn
    };
  }
});
Jm.render = wP;
var yi = Jm;
te(yi);
ue(yi, Zm);
const PT = yi;
var _l = yi;
const Qm = {
  active: {
    type: [String, Number],
    default: 0
  },
  canSwipe: {
    type: Boolean,
    default: !0
  },
  loop: Boolean,
  "onUpdate:active": R()
};
var CP = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: SP, n: PP } = ee("tabs-items");
function zP(e, n) {
  const o = ne("var-swipe");
  return h(), Pe(o, {
    class: p(e.n()),
    ref: "swipe",
    loop: e.loop,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: fe(() => [
      L(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "loop", "touchable", "onChange"]);
}
const _m = x({
  name: SP,
  components: { VarSwipe: Lt },
  props: Qm,
  setup(e) {
    const n = k(null), { tabItemList: o, bindTabItem: t, length: r } = iS();
    t({}), de(() => e.active, s), de(
      () => r.value,
      () => CP(this, null, function* () {
        yield $n(), s(e.active);
      })
    );
    function a(d) {
      return o.find(({ name: f }) => d === f.value);
    }
    function i(d) {
      return o.find(({ index: f }) => d === f.value);
    }
    function l(d) {
      return a(d) || i(d);
    }
    function s(d) {
      var f;
      const v = l(d);
      v && (o.forEach(({ setCurrent: y }) => y(!1)), v.setCurrent(!0), (f = n.value) == null || f.to(v.index.value));
    }
    function u(d) {
      var f;
      const v = o.find(({ index: m }) => m.value === d), y = (f = v.name.value) != null ? f : v.index.value;
      S(e["onUpdate:active"], y);
    }
    function c() {
      return n.value;
    }
    return {
      swipe: n,
      n: PP,
      handleSwipeChange: u,
      getSwipe: c
    };
  }
});
_m.render = zP;
var ki = _m;
te(ki);
ue(ki, Qm);
const zT = ki;
var xl = ki, OP = {
  "--action-sheet-background": "var(--color-surface-container-low)",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff",
  "--action-sheet-border-radius": "2px",
  "--action-sheet-border-top": "none",
  "--action-sheet-title-padding": "10px 16px",
  "--action-sheet-title-font-size": "14px",
  "--action-sheet-action-item-height": "48px",
  "--action-sheet-action-item-padding": "0 18px",
  "--action-sheet-action-item-disabled-color": "var(--color-text-disabled)",
  "--action-sheet-icon-margin": "0 20px 0 0",
  "--action-sheet-icon-size": "24px"
}, TP = {
  "--badge-default-color": "#555",
  "--badge-default-text-color": "#fff",
  "--badge-content-padding": "2px 6px",
  "--badge-content-border": "none",
  "--badge-content-border-radius": "100px",
  "--badge-content-font-size": "12px",
  "--badge-icon-size": "12px",
  "--badge-primary-color": "var(--color-primary)",
  "--badge-danger-color": "var(--color-danger)",
  "--badge-success-color": "var(--color-success)",
  "--badge-warning-color": "var(--color-warning)",
  "--badge-info-color": "var(--color-info)",
  "--badge-primary-text-color": "var(--color-on-primary)",
  "--badge-danger-text-color": "var(--color-on-danger)",
  "--badge-success-text-color": "var(--color-on-success)",
  "--badge-warning-text-color": "var(--color-on-warning)",
  "--badge-info-text-color": "var(--color-on-info)",
  "--badge-dot-width": "8px",
  "--badge-dot-height": "8px"
}, EP = {
  "--button-default-color": "#303030",
  "--button-default-text-color": "#fff",
  "--button-default-icon-container-color": "#303030",
  "--button-default-icon-color": "#fff",
  "--button-primary-text-color": "var(--color-on-primary)",
  "--button-danger-text-color": "var(--color-on-danger)",
  "--button-success-text-color": "var(--color-on-success)",
  "--button-warning-text-color": "var(--color-on-warning)",
  "--button-info-text-color": "var(--color-on-info)",
  "--button-primary-color": "var(--color-primary)",
  "--button-danger-color": "var(--color-danger)",
  "--button-success-color": "var(--color-success)",
  "--button-warning-color": "var(--color-warning)",
  "--button-info-color": "var(--color-info)",
  "--button-primary-icon-color": "var(--color-on-primary-container)",
  "--button-danger-icon-color": "var(--color-on-danger-container)",
  "--button-success-icon-color": "var(--color-on-success-container)",
  "--button-warning-icon-color": "var(--color-on-warning-container)",
  "--button-info-icon-color": "var(--color-on-info-container)",
  "--button-primary-icon-container-color": "var(--color-primary-container)",
  "--button-danger-icon-container-color": "var(--color-danger-container)",
  "--button-success-icon-container-color": "var(--color-success-container)",
  "--button-warning-icon-container-color": "var(--color-warning-container)",
  "--button-info-icon-container-color": "var(--color-info-container)",
  "--button-disabled-color": "var(--color-disabled)",
  "--button-disabled-text-color": "var(--color-text-disabled)",
  "--button-border-radius": "4px",
  "--button-mini-padding": "0 8px",
  "--button-small-padding": "0 12px",
  "--button-normal-padding": "0 16px",
  "--button-large-padding": "0 22px",
  "--button-round-padding": "6px",
  "--button-mini-height": "20px",
  "--button-small-height": "28px",
  "--button-normal-height": "36px",
  "--button-large-height": "44px",
  "--button-mini-font-size": "var(--font-size-xs)",
  "--button-small-font-size": "var(--font-size-sm)",
  "--button-normal-font-size": "var(--font-size-md)",
  "--button-large-font-size": "var(--font-size-lg)"
}, DP = {
  "--card-title-color": "#ffffff",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa",
  "--card-padding": "0 0 15px 0",
  "--card-background": "var(--color-surface-container-highest)",
  "--card-outline-color": "var(--color-outline)",
  "--card-border-radius": "4px",
  "--card-image-width": "100%",
  "--card-row-image-width": "140px",
  "--card-image-height": "200px",
  "--card-row-height": "140px",
  "--card-title-font-size": "20px",
  "--card-title-padding": "0 12px",
  "--card-title-margin": "15px 0 0 0",
  "--card-title-row-margin": "12px 0",
  "--card-subtitle-font-size": "14px",
  "--card-subtitle-padding": "0 12px",
  "--card-subtitle-margin": "10px 0 0 0",
  "--card-subtitle-row-margin": "-8px 0 0 0",
  "--card-description-font-size": "14px",
  "--card-description-margin": "20px 0 0 0",
  "--card-description-padding": "0 13px",
  "--card-footer-padding": "0 12px",
  "--card-footer-right": "13px",
  "--card-footer-bottom": "9px",
  "--card-footer-margin": "30px 0 0 0",
  "--card-line-height": "22px",
  "--card-row-line-height": "1.5",
  "--card-floating-buttons-bottom": "16px",
  "--card-floating-buttons-right": "16px",
  "--card-floating-buttons-color": "#fff",
  "--card-close-button-icon-size": "24px",
  "--card-close-button-size": "56px",
  "--card-close-button-primary-color": "#212121",
  "--card-close-button-text-color": "#fff",
  "--card-close-button-border-radius": "50%"
}, BP = {
  "--cell-description-color": "#aaa",
  "--cell-color": "var(--color-text)",
  "--cell-font-size": "var(--font-size-md)",
  "--cell-description-font-size": "var(--font-size-sm)",
  "--cell-description-margin-top": "4px",
  "--cell-padding": "10px 12px",
  "--cell-min-height": "40px",
  "--cell-border-color": "var(--color-outline)",
  "--cell-border-left": "12px",
  "--cell-border-right": "12px",
  "--cell-icon-right": "8px",
  "--cell-extra-left": "8px"
}, IP = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, MP = {
  "--chip-default-color": "#555",
  "--chip-default-text-color": "#fff",
  "--chip-primary-text-color": "var(--color-on-primary-container)",
  "--chip-danger-text-color": "var(--color-on-danger-container)",
  "--chip-success-text-color": "var(--color-on-success-container)",
  "--chip-warning-text-color": "var(--color-on-warning-container)",
  "--chip-info-text-color": "var(--color-on-info-container)",
  "--chip-primary-color": "var(--color-primary-container)",
  "--chip-danger-color": "var(--color-danger-container)",
  "--chip-success-color": "var(--color-success-container)",
  "--chip-warning-color": "var(--color-warning-container)",
  "--chip-info-color": "var(--color-info-container)",
  "--chip-primary-plain-color": "var(--color-primary)",
  "--chip-danger-plain-color": "var(--color-danger)",
  "--chip-success-plain-color": "var(--color-success)",
  "--chip-warning-plain-color": "var(--color-warning)",
  "--chip-info-plain-color": "var(--color-info)",
  "--chip-border-radius": "2px",
  "--chip-normal-height": "32px",
  "--chip-large-height": "40px",
  "--chip-small-height": "24px",
  "--chip-mini-height": "16px",
  "--chip-round-radius": "100px",
  "--chip-normal-padding": "0 10px",
  "--chip-large-padding": "0 17px",
  "--chip-small-padding": "0 6px",
  "--chip-mini-padding": "0 4px",
  "--chip-text-normal-margin": "0 5px",
  "--chip-text-large-margin": "0 5px",
  "--chip-text-small-margin": "0 3px",
  "--chip-text-mini-margin": "0 2px",
  "--chip-mini-font-size": "var(--font-size-xs)",
  "--chip-small-font-size": "var(--font-size-sm)",
  "--chip-normal-font-size": "var(--font-size-md)",
  "--chip-large-font-size": "var(--font-size-lg)"
}, NP = {
  "--collapse-text-color": "#fff",
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, AP = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa",
  "--year-picker-item-color": "#fff",
  "--date-picker-header-color": "#fff",
  "--date-picker-border-radius": "4px",
  "--date-picker-font-size": "var(--font-size-md)",
  "--date-picker-min-width": "290px",
  "--date-picker-title-hint-color": "#fff",
  "--date-picker-title-hint-font-size": "var(--font-size-md)",
  "--date-picker-title-height": "105px",
  "--date-picker-title-padding": "16px",
  "--date-picker-title-background": "var(--color-primary)",
  "--date-picker-title-color": "#fff",
  "--date-picker-title-year-font-size": "var(--font-size-md)",
  "--date-picker-title-year-font-weight": "500",
  "--date-picker-title-year-margin-bottom": "8px",
  "--date-picker-title-date-height": "48px",
  "--date-picker-title-date-font-size": "34px",
  "--date-picker-title-date-font-weight": "500",
  "--date-picker-title-date-range-font-size": "20px",
  "--date-picker-title-date-justify-content": "normal",
  "--date-picker-body-height": "280px",
  "--date-picker-body-padding": "0",
  "--date-picker-header-padding": "4px 16px",
  "--date-picker-actions-padding": "0 8px 12px 8px",
  "--date-picker-header-arrow-filter": "opacity(0.54)",
  "--month-picker-padding": "0 12px",
  "--month-picker-item-width": "33%",
  "--month-picker-item-height": "56px",
  "--month-picker-item-button-max-width": "140px",
  "--year-picker-padding": "0 12px",
  "--year-picker-item-width": "33%",
  "--year-picker-item-height": "56px",
  "--year-picker-item-button-max-width": "140px",
  "--day-picker-content-item-width": "14.28%",
  "--day-picker-content-item-font-size": "var(--font-size-sm)",
  "--day-picker-content-item-padding": "2px 0",
  "--day-picker-content-item-button-width": "32px",
  "--day-picker-content-item-button-height": "32px",
  "--day-picker-content-item-button-font-size": "var(--font-size-sm)",
  "--day-picker-head-item-padding": "8px 0",
  "--day-picker-head-item-font-weight": "600"
}, VP = {
  "--dialog-title-color": "#fff",
  "--dialog-message-color": "#bbb",
  "--dialog-width": "280px",
  "--dialog-border-radius": "3px",
  "--dialog-title-padding": "20px 20px 0",
  "--dialog-message-padding": "12px 20px",
  "--dialog-message-line-height": "24px",
  "--dialog-message-font-size": "var(--font-size-md)",
  "--dialog-title-font-size": "var(--font-size-lg)",
  "--dialog-actions-padding": "0 12px 12px",
  "--dialog-button-margin-left": "6px",
  "--dialog-confirm-button-color": "var(--color-primary)",
  "--dialog-cancel-button-color": "var(--color-primary)",
  "--dialog-background": "var(--color-surface-container-low)"
}, LP = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, RP = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)",
  "--field-decorator-error-color": "var(--color-danger)",
  "--field-decorator-focus-color": "var(--color-primary)",
  "--field-decorator-placeholder-size": "16px",
  "--field-decorator-icon-size": "20px",
  "--field-decorator-line-size": "1px",
  "--field-decorator-line-focus-size": "2px",
  "--field-decorator-line-border-radius": "4px",
  "--field-decorator-disabled-color": "var(--color-text-disabled)",
  "--field-decorator-standard-normal-margin-top": "22px",
  "--field-decorator-standard-normal-margin-bottom": "4px",
  "--field-decorator-standard-normal-icon-margin-top": "22px",
  "--field-decorator-standard-normal-icon-margin-bottom": "4px",
  "--field-decorator-standard-normal-non-hint-margin-top": "4px",
  "--field-decorator-standard-small-margin-top": "18px",
  "--field-decorator-standard-small-margin-bottom": "4px",
  "--field-decorator-standard-small-icon-margin-top": "18px",
  "--field-decorator-standard-small-icon-margin-bottom": "4px",
  "--field-decorator-standard-small-non-hint-margin-top": "2px",
  "--field-decorator-outlined-normal-margin-top": "16px",
  "--field-decorator-outlined-normal-margin-bottom": "16px",
  "--field-decorator-outlined-normal-padding-left": "16px",
  "--field-decorator-outlined-normal-padding-right": "16px",
  "--field-decorator-outlined-normal-placeholder-space": "4px",
  "--field-decorator-outlined-normal-icon-margin-top": "16px",
  "--field-decorator-outlined-normal-icon-margin-bottom": "16px",
  "--field-decorator-outlined-small-margin-top": "8px",
  "--field-decorator-outlined-small-margin-bottom": "8px",
  "--field-decorator-outlined-small-padding-left": "12px",
  "--field-decorator-outlined-small-padding-right": "12px",
  "--field-decorator-outlined-small-placeholder-space": "2px",
  "--field-decorator-outlined-small-icon-margin-top": "8px",
  "--field-decorator-outlined-small-icon-margin-bottom": "8px"
}, FP = {
  "--pagination-text-color": "#fff",
  "--pagination-hover-bg-color": "rgba(255, 255, 255, .15)",
  "--pagination-item-background": "#303030",
  "--pagination-font-size": "var(--font-size-md)",
  "--pagination-active-color": "var(--color-on-primary)",
  "--pagination-active-bg-color": "var(--color-primary)",
  "--pagination-total-margin": "0 12px",
  "--pagination-total-line-height": "24px",
  "--pagination-item-width": "32px",
  "--pagination-item-height": "32px",
  "--pagination-item-margin": "0 6px",
  "--pagination-item-border-radius": "4px",
  "--pagination-item-simple-border-radius": "50%",
  "--pagination-input-width": "32px",
  "--pagination-disabled-color": "var(--color-text-disabled)",
  "--pagination-bg-disabled-color": "var(--color-disabled)",
  "--pagination-size-line-height": "24px",
  "--pagination-size-padding": "0 6px"
}, UP = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-title-text-color": "#fff",
  "--picker-option-text-color": "#fff",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))",
  "--picker-toolbar-height": "44px",
  "--picker-confirm-button-text-color": "var(--color-primary)",
  "--picker-picked-border": "1px solid var(--color-outline)",
  "--picker-title-font-size": "var(--font-size-lg)",
  "--picker-option-font-size": "var(--font-size-lg)",
  "--picker-toolbar-padding": "0 4px"
}, HP = {
  "--popup-content-background-color": "var(--color-surface-container-low)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, YP = {
  "--pull-refresh-background": "#303030",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, jP = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, WP = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)",
  "--result-padding": "24px",
  "--result-border-radius": "3px",
  "--result-title-font-size": "32px",
  "--result-title-margin": "15px 0 0 0",
  "--result-image-size": "80px",
  "--result-title-font-weight": "500",
  "--result-description-margin": "10px 0 0 0",
  "--result-description-font-size": "14px",
  "--result-description-line-height": "1.6",
  "--result-info-color": "var(--color-info)",
  "--result-info-border-color": "rgba(0, 175, 239, 0.3)",
  "--result-success-color": "var(--color-success)",
  "--result-success-border-color": "rgba(0, 196, 143, 0.3)",
  "--result-error-color": "var(--color-danger)",
  "--result-error-border-color": "rgba(244, 67, 54, 0.3)",
  "--result-warning-color": "var(--color-warning)",
  "--result-warning-border-color": "rgba(255, 159, 0, 0.3)"
}, KP = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-content-padding": "16px",
  "--skeleton-card-height": "160px",
  "--skeleton-card-border-radius": "4px",
  "--skeleton-card-margin-bottom": "16px",
  "--skeleton-avatar-size": "34px",
  "--skeleton-avatar-border-radius": "50%",
  "--skeleton-avatar-margin-right": "16px",
  "--skeleton-title-width": "50%",
  "--skeleton-title-border-radius": "10px",
  "--skeleton-row-height": "12px",
  "--skeleton-row-border-radius": "10px",
  "--skeleton-row-margin-top": "10px"
}, qP = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff",
  "--step-tag-size": "20px",
  "--step-tag-background": "#9e9e9e",
  "--step-tag-font-size": "var(--font-size-md)",
  "--step-tag-color": "var(--color-on-primary)",
  "--step-tag-active-color": "var(--color-primary)",
  "--step-tag-margin": "4px 0",
  "--step-tag-icon-size": "var(--font-size-lg)",
  "--step-content-font-size": "var(--font-size-md)",
  "--step-line-gap": "8px",
  "--step-vertical-tag-margin": "0 4px",
  "--step-vertical-min-height": "50px"
}, GP = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272",
  "--switch-track-active-background": "var(--color-primary)",
  "--switch-track-error-background": "var(--color-danger)",
  "--switch-ripple-color": "var(--color-primary)",
  "--switch-handle-color": "var(--color-on-primary)",
  "--switch-handle-active-color": "var(--color-on-primary)",
  "--switch-handle-active-background": "var(--color-primary)",
  "--switch-handle-error-background": "var(--color-danger)",
  "--switch-disabled-opacity": "var(--opacity-disabled)",
  "--switch-variant-width": "52px",
  "--switch-variant-height": "32px",
  "--switch-variant-track-background": "var(--color-surface-container-highest)",
  "--switch-variant-handle-width": "24px",
  "--switch-variant-handle-height": "24px",
  "--switch-variant-track-border-color": "rgb(255, 255, 255, .7)",
  "--switch-variant-handle-background": "rgb(255, 255, 255, .7)",
  "--switch-variant-handle-color": "var(--color-primary)",
  "--switch-variant-handle-active-color": "var(--color-primary)",
  "--switch-variant-handle-active-background": "var(--color-on-primary)"
}, XP = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, ZP = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-thead-th-text-align": "left",
  "--table-tbody-td-text-color": "#fff",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-border-radius": "2px",
  "--table-thead-border-bottom": "thin solid var(--color-outline)",
  "--table-thead-th-font-size": "14px",
  "--table-thead-tr-border-bottom": "thin solid var(--color-outline)",
  "--table-tbody-tr-border-bottom": "thin solid var(--color-outline)",
  "--table-tbody-td-font-size": "16px",
  "--table-tbody-td-text-align": "left",
  "--table-row-height": "46px",
  "--table-row-padding": "0 16px",
  "--table-footer-border-top": "thin solid var(--color-outline)"
}, JP = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#fff",
  "--time-picker-clock-item-disable-background": "#aaaaaa",
  "--time-picker-clock-item-text-color": "#fff",
  "--time-picker-border-radius": "4px",
  "--time-picker-font-size": "var(--font-size-md)",
  "--time-picker-min-width": "290px",
  "--time-picker-title-height": "105px",
  "--time-picker-title-padding": "16px",
  "--time-picker-title-margin-bottom": "8px",
  "--time-picker-title-color": "#fff",
  "--time-picker-title-background": "var(--color-primary)",
  "--time-picker-title-hint-color": "#fff",
  "--time-picker-title-hint-font-size": "14px",
  "--time-picker-title-inactive-opacity": "0.6",
  "--time-picker-title-time-font-size": "50px",
  "--time-picker-title-time-margin": "0 5px",
  "--time-picker-title-time-border-radius": "0",
  "--time-picker-title-time-padding": "0",
  "--time-picker-title-time-background": "transparent",
  "--time-picker-title-time-active-background": "transparent",
  "--time-picker-title-ampm-button-active-background": "transparent",
  "--time-picker-title-ampm-margin-left": "10px",
  "--time-picker-title-ampm-border-radius": "0",
  "--time-picker-title-ampm-border": "none",
  "--time-picker-title-ampm-button-padding": "2px",
  "--time-picker-clock-left": "27px",
  "--time-picker-clock-right": "27px",
  "--time-picker-clock-top": "27px",
  "--time-picker-clock-bottom": "27px",
  "--time-picker-clock-container-width": "256px",
  "--time-picker-clock-container-height": "256px",
  "--time-picker-clock-hand-height": "calc(50% - 4px)",
  "--time-picker-clock-hand-width": "2px",
  "--time-picker-clock-hand-bottom": "50%",
  "--time-picker-clock-hand-left": "calc(50% - 1px)",
  "--time-picker-clock-hand-background": "var(--color-primary)",
  "--time-picker-clock-hand-border-color": "var(--color-primary)",
  "--time-picker-clock-hand-before-width": "10px",
  "--time-picker-clock-hand-before-height": "10px",
  "--time-picker-clock-hand-before-border-width": "2px",
  "--time-picker-clock-hand-after-width": "4px",
  "--time-picker-clock-hand-after-height": "4px",
  "--time-picker-clock-item-height": "32px",
  "--time-picker-clock-item-width": "32px",
  "--time-picker-clock-item-active-background": "var(--color-primary)",
  "--time-picker-clock-item-active-color": "var(--color-on-primary)",
  "--time-picker-inner-left": "36px",
  "--time-picker-inner-right": "36px",
  "--time-picker-inner-top": "36px",
  "--time-picker-inner-bottom": "36px",
  "--time-picker-body-height": "288px",
  "--time-picker-actions-padding": "0 8px 12px 8px",
  "--time-picker-title-time-container-justify-content": "flex-end"
}, QP = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030",
  "--uploader-action-icon-size": "24px",
  "--uploader-action-margin": "0 10px 10px 0",
  "--uploader-file-size": "80px",
  "--uploader-file-margin": "0 10px 10px 0",
  "--uploader-file-name-font-size": "12px",
  "--uploader-file-name-padding": "10px",
  "--uploader-file-text-align": "center",
  "--uploader-file-border-radius": "0",
  "--uploader-file-close-background": "rgba(0, 0, 0, 0.3)",
  "--uploader-file-close-size": "24px",
  "--uploader-file-close-icon-font-size": "14px",
  "--uploader-file-close-icon-color": "#fff",
  "--uploader-file-cover-fit": "cover",
  "--uploader-preview-video-width": "100vw",
  "--uploader-preview-video-height": "100vw",
  "--uploader-file-indicator-height": "4px",
  "--uploader-file-indicator-normal-color": "var(--color-disabled)",
  "--uploader-file-indicator-success-color": "var(--color-success)",
  "--uploader-file-indicator-error-color": "var(--color-danger)",
  "--uploader-file-progress-color": "var(--color-primary)",
  "--uploader-disabled-color": "var(--color-disabled)",
  "--uploader-disabled-text-color": "var(--color-text-disabled)",
  "--uploader-loading-background": "linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))"
}, _P = {
  "--tabs-background": "#1e1e1e",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, xP = {
  "--app-bar-color": "#272727",
  "--app-bar-title-padding": "0 12px",
  "--app-bar-title-font-size": "var(--font-size-lg)",
  "--app-bar-text-color": "#fff",
  "--app-bar-height": "54px",
  "--app-bar-left-gap": "6px",
  "--app-bar-right-gap": "6px",
  "--app-bar-border-radius": "4px",
  "--app-bar-font-size": "var(--font-size-lg)",
  "--app-bar-border-bottom": "thin solid var(--color-outline)"
}, ez = {
  "--bottom-navigation-item-inactive-color": "#BFBFBF",
  "--bottom-navigation-item-font-size": "var(--font-size-sm)",
  "--bottom-navigation-item-active-color": "var(--color-primary)",
  "--bottom-navigation-item-active-background-color": "var(--color-surface-container-high)",
  "--bottom-navigation-item-variant-active-background-color": "var(--color-primary-container)",
  "--bottom-navigation-item-variant-active-color": "var(--color-on-primary-container)",
  "--bottom-navigation-fab-border-radius": "50%",
  "--bottom-navigation-item-line-height": "1",
  "--bottom-navigation-item-icon-size": "22px",
  "--bottom-navigation-item-icon-margin-bottom": "5px",
  "--bottom-navigation-item-variant-icon-container-height": "30px",
  "--bottom-navigation-item-variant-icon-container-border-radius": "100px",
  "--bottom-navigation-item-variant-icon-container-max-width": "58px"
}, nz = {
  "--menu-background-color": "#272727",
  "--menu-border-radius": "2px"
}, oz = {
  "--breadcrumb-inactive-color": "#aaa",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, tz = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e",
  "--avatar-text-color": "#f5f5f5",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-hover-transform": "scale(1.1)"
}, rz = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, az = {
  "--progress-label-color": "#fff",
  "--progress-font-size": "var(--font-size-sm)",
  "--progress-track-color": "#d8d8d8",
  "--progress-background": "var(--color-primary)",
  "--progress-default-color": "#f5f5f5",
  "--progress-primary-color": "var(--color-primary)",
  "--progress-danger-color": "var(--color-danger)",
  "--progress-success-color": "var(--color-success)",
  "--progress-warning-color": "var(--color-warning)",
  "--progress-info-color": "var(--color-info)",
  "--progress-linear-border-radius": "0px"
}, iz = {
  "--option-text-color": "#fff",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, lz = {
  "--watermark-content-color": "#ffffff"
}, sz = {
  "--menu-select-menu-background-color": "#272727",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0",
  "--menu-select-menu-border-radius": "2px"
}, uz = {
  "--menu-option-text-color": "#fff",
  "--menu-option-normal-height": "38px",
  "--menu-option-small-height": "30px",
  "--menu-option-mini-height": "24px",
  "--menu-option-large-height": "46px",
  "--menu-option-padding": "0 12px",
  "--menu-option-normal-font-size": "var(--font-size-md)",
  "--menu-option-small-font-size": "var(--font-size-sm)",
  "--menu-option-mini-font-size": "var(--font-size-xs)",
  "--menu-option-large-font-size": "var(--font-size-lg)",
  "--menu-option-selected-background": "var(--color-primary)",
  "--menu-option-disabled-color": "var(--color-text-disabled)"
}, cz = {
  "--avatar-group-offset": "-10px"
}, dz = {
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px",
  "--back-top-button-border-radius": "50%"
}, fz = {
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-background-color": "var(--color-surface-container-high)",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, pz = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, vz = {
  "--counter-padding": "0 4px",
  "--counter-font-color": "#fff",
  "--counter-background": "var(--color-primary)",
  "--counter-input-width": "28px",
  "--counter-input-margin": "0 4px",
  "--counter-input-font-size": "14px",
  "--counter-button-size": "28px",
  "--counter-button-text-color": "#fff",
  "--counter-button-icon-size": "100%",
  "--counter-disabled-color": "var(--color-disabled)",
  "--counter-disabled-opacity": "var(--opacity-disabled)",
  "--counter-error-color": "var(--color-danger)"
}, mz = {
  "--fab-top": "70px",
  "--fab-bottom": "16px",
  "--fab-left": "16px",
  "--fab-right": "16px",
  "--fab-trigger-size": "56px",
  "--fab-trigger-border-radius": "50%",
  "--fab-trigger-inactive-icon-size": "26px",
  "--fab-trigger-active-icon-size": "22px",
  "--fab-actions-padding": "10px 0",
  "--fab-action-margin": "6px",
  "--fab-action-size": "40px",
  "--fab-action-border-radius": "50%",
  "--fab-transition-standard-easing": "cubic-bezier(0.4, 0, 0.2, 1)"
}, hz = {
  "--floating-panel-z-index": "999",
  "--floating-panel-border-top": "none",
  "--floating-panel-border-radius": "0",
  "--floating-panel-background": "var(--color-surface-container-high)",
  "--floating-panel-header-height": "30px",
  "--floating-panel-toolbar-width": "20px",
  "--floating-panel-toolbar-height": "3px",
  "--floating-panel-toolbar-border-radius": "10px",
  "--floating-panel-toolbar-background": "#ddd",
  "--floating-panel-transition-timing-function": "cubic-bezier(0.18, 0.89, 0.32, 1.28)"
}, gz = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, bz = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, yz = {
  "--icon-size": "20px"
}, kz = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, $z = {
  "--index-bar-list-right": "0",
  "--index-bar-list-top": "50%",
  "--index-bar-list-left": "auto",
  "--index-bar-list-bottom": "auto",
  "--index-bar-list-transform": "translate(0, -50%)",
  "--index-bar-list-item-font-size": "var(--font-size-xs)",
  "--index-bar-list-item-color": "var(--color-primary)",
  "--index-bar-list-item-active-color": "var(--color-danger)",
  "--index-bar-list-item-height": "14px",
  "--index-bar-list-item-padding": "0 10px"
}, wz = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, Cz = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, Sz = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, Pz = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, zz = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, Oz = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "4px"
}, Tz = {
  "--rate-color": "var(--color-text)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, Ez = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, Dz = {
  "--slider-error-color": "var(--color-danger)",
  "--slider-track-background": "#bdbdbd",
  "--slider-track-height": "2px",
  "--slider-track-border-radius": "0",
  "--slider-track-fill-border-radius": "0",
  "--slider-track-fill-background": "var(--color-primary)",
  "--slider-thumb-block-background": "var(--color-primary)",
  "--slider-thumb-ripple-background": "var(--color-primary)",
  "--slider-thumb-label-background": "var(--color-primary)",
  "--slider-thumb-label-font-size": "var(--font-size-sm)",
  "--slider-thumb-label-text-color": "var(--color-on-primary)",
  "--slider-thumb-size": "12px",
  "--slider-disabled-opacity": "var(--opacity-disabled)"
}, Bz = {
  "--snackbar-width": "256px",
  "--snackbar-color": "rgba(255, 255, 255, 0.87)",
  "--snackbar-border-radius": "4px",
  "--snackbar-background": "#333",
  "--snackbar-font-size": "var(--font-size-md)",
  "--snackbar-margin": "6px 24px",
  "--snackbar-border-color": "currentColor",
  "--snackbar-success-background": "var(--color-success)",
  "--snackbar-info-background": "var(--color-info)",
  "--snackbar-error-background": "var(--color-danger)",
  "--snackbar-warning-background": "var(--color-warning)",
  "--snackbar-content-padding": "14px 16px",
  "--snackbar-action-margin": "0 8px",
  "--snackbar-vertical-action-margin": "0 8px 8px 0",
  "--snackbar-icon-margin": "0 8px"
}, Iz = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, Mz = {
  "--swipe-indicator-color": "#fff",
  "--swipe-indicators-offset": "10px",
  "--swipe-indicator-offset": "4px",
  "--swipe-navigation-z-index": "9",
  "--swipe-navigation-button-width": "36px",
  "--swipe-navigation-button-height": "36px",
  "--swipe-navigation-button-border-radius": "50%",
  "--swipe-navigation-icon-size": "20px",
  "--swipe-navigation-prev-left": "8px",
  "--swipe-navigation-next-right": "8px",
  "--swipe-navigation-prev-top": "8px",
  "--swipe-navigation-next-bottom": "8px"
}, Nz = {
  "--tooltip-opacity": "0.9",
  "--tooltip-border-radius": "4px",
  "--tooltip-font-size": "14px",
  "--tooltip-padding": "8px 16px",
  "--tooltip-offset": "10px",
  "--tooltip-default-color": "#616161",
  "--tooltip-primary-color": "var(--color-primary)",
  "--tooltip-info-color": "var(--color-info)",
  "--tooltip-success-color": "var(--color-success)",
  "--tooltip-warning-color": "var(--color-warning)",
  "--tooltip-danger-color": "var(--color-danger)",
  "--tooltip-default-text-color": "#fff",
  "--tooltip-primary-text-color": "var(--color-on-primary)",
  "--tooltip-info-text-color": "var(--color-on-info)",
  "--tooltip-success-text-color": "var(--color-on-success)",
  "--tooltip-warning-text-color": "var(--color-on-warning)",
  "--tooltip-danger-text-color": "var(--color-on-danger)"
}, Az = {
  "--select-scroller-background": "#272727",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-scroller-border-radius": "2px",
  "--select-chip-margin": "5px 5px 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, Vz = Object.defineProperty, id = Object.getOwnPropertySymbols, Lz = Object.prototype.hasOwnProperty, Rz = Object.prototype.propertyIsEnumerable, ld = (e, n, o) => n in e ? Vz(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, he = (e, n) => {
  for (var o in n || (n = {}))
    Lz.call(n, o) && ld(e, o, n[o]);
  if (id)
    for (var o of id(n))
      Rz.call(n, o) && ld(e, o, n[o]);
  return e;
}, Fz = he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he(he({
  "--font-size-xs": "10px",
  "--font-size-sm": "12px",
  "--font-size-md": "14px",
  "--font-size-lg": "16px",
  "--icon-size-xs": "16px",
  "--icon-size-sm": "18px",
  "--icon-size-md": "20px",
  "--icon-size-lg": "22px",
  "--color-body": "#1e1e1e",
  "--color-text": "#fff",
  "--color-primary": "#4a7afe",
  "--color-info": "#10afef",
  "--color-success": "#10c48f",
  "--color-warning": "#ff8800",
  "--color-danger": "#ef5350",
  "--color-on-primary": "#fff",
  "--color-on-info": "#fff",
  "--color-on-success": "#fff",
  "--color-on-warning": "#fff",
  "--color-on-danger": "#fff",
  "--color-primary-container": "#4a7afe",
  "--color-info-container": "#10afef",
  "--color-success-container": "#10c48f",
  "--color-warning-container": "#ff8800",
  "--color-danger-container": "#ef5350",
  "--color-on-primary-container": "#fff",
  "--color-on-info-container": "#fff",
  "--color-on-success-container": "#fff",
  "--color-on-warning-container": "#fff",
  "--color-on-danger-container": "#fff",
  "--color-disabled": "#404040",
  "--color-text-disabled": "#757575",
  "--color-surface-container": "#1e1e1e",
  "--color-surface-container-low": "#1e1e1e",
  "--color-surface-container-high": "#272727",
  "--color-surface-container-highest": "#303030",
  "--color-inverse-surface": "#fff",
  "--color-outline": "rgba(255, 255, 255, 0.2)",
  "--color-on-surface-variant": "#fff",
  "--opacity-disabled": "0.6",
  "--opacity-hover": "0.15",
  "--opacity-focus": "0.2",
  "--cubic-bezier": "cubic-bezier(0.25, 0.8, 0.5, 1)",
  "--shadow-key-umbra-opacity": "rgba(0, 0, 0, 0.2)",
  "--shadow-key-penumbra-opacity": "rgba(0, 0, 0, 0.14)",
  "--shadow-key-ambient-opacity": "rgba(0, 0, 0, 0.12)"
}, EP), BP), DP), JP), AP), KP), _P), XP), HP), VP), OP), MP), TP), QP), NP), YP), GP), qP), FP), ZP), RP), jP), IP), LP), UP), xP), ez), nz), WP), oz), tz), rz), az), iz), lz), sz), uz), cz), dz), fz), pz), vz), mz), hz), gz), bz), yz), kz), $z), wz), Cz), Sz), Pz), zz), Oz), Tz), Ez), Dz), Bz), Iz), Mz), Nz), Az), Uz = {
  "--button-default-color": "var(--color-surface-container-low)",
  "--button-default-text-color": "var(--color-primary)",
  "--button-default-icon-color": "var(--color-on-info-container)",
  "--button-default-icon-container-color": "var(--color-surface-container-high)",
  "--button-border-radius": "100px",
  "--button-primary-text-color": "var(--color-on-primary)",
  "--button-danger-text-color": "var(--color-on-danger)",
  "--button-success-text-color": "var(--color-on-success)",
  "--button-warning-text-color": "var(--color-on-warning)",
  "--button-info-text-color": "var(--color-on-info)",
  "--button-primary-color": "var(--color-primary)",
  "--button-danger-color": "var(--color-danger)",
  "--button-success-color": "var(--color-success)",
  "--button-warning-color": "var(--color-warning)",
  "--button-info-color": "var(--color-info)",
  "--button-primary-icon-color": "var(--color-on-primary-container)",
  "--button-danger-icon-color": "var(--color-on-danger-container)",
  "--button-success-icon-color": "var(--color-on-success-container)",
  "--button-warning-icon-color": "var(--color-on-warning-container)",
  "--button-info-icon-color": "var(--color-on-info-container)",
  "--button-primary-icon-container-color": "var(--color-primary-container)",
  "--button-danger-icon-container-color": "var(--color-danger-container)",
  "--button-success-icon-container-color": "var(--color-success-container)",
  "--button-warning-icon-container-color": "var(--color-warning-container)",
  "--button-info-icon-container-color": "var(--color-info-container)",
  "--button-disabled-color": "var(--color-disabled)",
  "--button-disabled-text-color": "var(--color-text-disabled)",
  "--button-mini-padding": "0 8px",
  "--button-small-padding": "0 12px",
  "--button-normal-padding": "0 16px",
  "--button-large-padding": "0 22px",
  "--button-round-padding": "6px",
  "--button-mini-height": "20px",
  "--button-small-height": "28px",
  "--button-normal-height": "36px",
  "--button-large-height": "44px",
  "--button-mini-font-size": "var(--font-size-xs)",
  "--button-small-font-size": "var(--font-size-sm)",
  "--button-normal-font-size": "var(--font-size-md)",
  "--button-large-font-size": "var(--font-size-lg)"
}, Hz = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, Yz = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, jz = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, Wz = {
  "--menu-option-text-color": "#1D1B20",
  "--menu-option-normal-height": "38px",
  "--menu-option-small-height": "30px",
  "--menu-option-mini-height": "24px",
  "--menu-option-large-height": "46px",
  "--menu-option-padding": "0 12px",
  "--menu-option-normal-font-size": "var(--font-size-md)",
  "--menu-option-small-font-size": "var(--font-size-sm)",
  "--menu-option-mini-font-size": "var(--font-size-xs)",
  "--menu-option-large-font-size": "var(--font-size-lg)",
  "--menu-option-selected-background": "var(--color-primary)",
  "--menu-option-disabled-color": "var(--color-text-disabled)"
}, Kz = {
  "--fab-trigger-border-radius": "16px",
  "--fab-action-size": "40px",
  "--fab-action-border-radius": "12px",
  "--fab-top": "70px",
  "--fab-bottom": "16px",
  "--fab-left": "16px",
  "--fab-right": "16px",
  "--fab-trigger-size": "56px",
  "--fab-trigger-inactive-icon-size": "26px",
  "--fab-trigger-active-icon-size": "22px",
  "--fab-actions-padding": "10px 0",
  "--fab-action-margin": "6px",
  "--fab-transition-standard-easing": "cubic-bezier(0.4, 0, 0.2, 1)"
}, qz = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, Gz = {
  "--link-default-color": "#000",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, Xz = {
  "--cell-description-color": "var(--color-on-surface-variant)",
  "--cell-color": "var(--color-text)",
  "--cell-font-size": "var(--font-size-md)",
  "--cell-description-font-size": "var(--font-size-sm)",
  "--cell-description-margin-top": "4px",
  "--cell-padding": "10px 12px",
  "--cell-min-height": "40px",
  "--cell-border-color": "var(--color-outline)",
  "--cell-border-left": "12px",
  "--cell-border-right": "12px",
  "--cell-icon-right": "8px",
  "--cell-extra-left": "8px"
}, Zz = {
  "--paper-background": "var(--color-surface-container-low)",
  "--paper-border-radius": "12px"
}, Jz = {
  "--avatar-text-color": "#fff",
  "--avatar-background-color": "var(--color-primary)"
}, Qz = {
  "--field-decorator-text-color": "#1D1B20",
  "--field-decorator-blur-color": "#79747E",
  "--field-decorator-error-color": "var(--color-danger)",
  "--field-decorator-focus-color": "var(--color-primary)",
  "--field-decorator-placeholder-size": "16px",
  "--field-decorator-icon-size": "20px",
  "--field-decorator-line-size": "1px",
  "--field-decorator-line-focus-size": "2px",
  "--field-decorator-line-border-radius": "4px",
  "--field-decorator-disabled-color": "var(--color-text-disabled)",
  "--field-decorator-standard-normal-margin-top": "22px",
  "--field-decorator-standard-normal-margin-bottom": "4px",
  "--field-decorator-standard-normal-icon-margin-top": "22px",
  "--field-decorator-standard-normal-icon-margin-bottom": "4px",
  "--field-decorator-standard-normal-non-hint-margin-top": "4px",
  "--field-decorator-standard-small-margin-top": "18px",
  "--field-decorator-standard-small-margin-bottom": "4px",
  "--field-decorator-standard-small-icon-margin-top": "18px",
  "--field-decorator-standard-small-icon-margin-bottom": "4px",
  "--field-decorator-standard-small-non-hint-margin-top": "2px",
  "--field-decorator-outlined-normal-margin-top": "16px",
  "--field-decorator-outlined-normal-margin-bottom": "16px",
  "--field-decorator-outlined-normal-padding-left": "16px",
  "--field-decorator-outlined-normal-padding-right": "16px",
  "--field-decorator-outlined-normal-placeholder-space": "4px",
  "--field-decorator-outlined-normal-icon-margin-top": "16px",
  "--field-decorator-outlined-normal-icon-margin-bottom": "16px",
  "--field-decorator-outlined-small-margin-top": "8px",
  "--field-decorator-outlined-small-margin-bottom": "8px",
  "--field-decorator-outlined-small-padding-left": "12px",
  "--field-decorator-outlined-small-padding-right": "12px",
  "--field-decorator-outlined-small-placeholder-space": "2px",
  "--field-decorator-outlined-small-icon-margin-top": "8px",
  "--field-decorator-outlined-small-icon-margin-bottom": "8px"
}, _z = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, xz = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, eO = {
  "--card-border-radius": "12px",
  "--card-background": "var(--color-surface-container-low)",
  "--card-image-height": "188px",
  "--card-title-color": "#1D1B20",
  "--card-title-font-size": "16px",
  "--card-title-padding": "0 16px",
  "--card-title-margin": "16px 0 0 0",
  "--card-subtitle-color": "var(--color-on-surface-variant)",
  "--card-subtitle-padding": "0 16px",
  "--card-subtitle-margin": "4px 0 0 0",
  "--card-description-margin": "32px 0 0 0",
  "--card-description-padding": "0 16px",
  "--card-description-color": "var(--color-on-surface-variant)",
  "--card-padding": "0 0 16px 0",
  "--card-footer-margin": "32px 0 0 0",
  "--card-title-row-margin": "16px 0 0 0",
  "--card-subtitle-row-margin": "4px 0 0 0",
  "--card-footer-padding": "0 16px",
  "--card-close-button-size": "56px",
  "--card-close-button-primary-color": "var(--color-primary-container)",
  "--card-close-button-text-color": "var(--color-on-primary-container)",
  "--card-close-button-border-radius": "12px",
  "--card-outline-color": "var(--color-outline)",
  "--card-image-width": "100%",
  "--card-row-image-width": "140px",
  "--card-row-height": "140px",
  "--card-subtitle-font-size": "14px",
  "--card-description-font-size": "14px",
  "--card-footer-right": "13px",
  "--card-footer-bottom": "9px",
  "--card-line-height": "22px",
  "--card-row-line-height": "1.5",
  "--card-floating-buttons-bottom": "16px",
  "--card-floating-buttons-right": "16px",
  "--card-floating-buttons-color": "#fff",
  "--card-close-button-icon-size": "24px"
}, nO = {
  "--chip-round-radius": "8px",
  "--chip-default-color": "var(--color-surface-container-high)",
  "--chip-default-text-color": "#1D192B",
  "--chip-primary-text-color": "var(--color-on-primary-container)",
  "--chip-danger-text-color": "var(--color-on-danger-container)",
  "--chip-success-text-color": "var(--color-on-success-container)",
  "--chip-warning-text-color": "var(--color-on-warning-container)",
  "--chip-info-text-color": "var(--color-on-info-container)",
  "--chip-primary-color": "var(--color-primary-container)",
  "--chip-danger-color": "var(--color-danger-container)",
  "--chip-success-color": "var(--color-success-container)",
  "--chip-warning-color": "var(--color-warning-container)",
  "--chip-info-color": "var(--color-info-container)",
  "--chip-primary-plain-color": "var(--color-primary)",
  "--chip-danger-plain-color": "var(--color-danger)",
  "--chip-success-plain-color": "var(--color-success)",
  "--chip-warning-plain-color": "var(--color-warning)",
  "--chip-info-plain-color": "var(--color-info)",
  "--chip-border-radius": "2px",
  "--chip-normal-height": "32px",
  "--chip-large-height": "40px",
  "--chip-small-height": "24px",
  "--chip-mini-height": "16px",
  "--chip-normal-padding": "0 10px",
  "--chip-large-padding": "0 17px",
  "--chip-small-padding": "0 6px",
  "--chip-mini-padding": "0 4px",
  "--chip-text-normal-margin": "0 5px",
  "--chip-text-large-margin": "0 5px",
  "--chip-text-small-margin": "0 3px",
  "--chip-text-mini-margin": "0 2px",
  "--chip-mini-font-size": "var(--font-size-xs)",
  "--chip-small-font-size": "var(--font-size-sm)",
  "--chip-normal-font-size": "var(--font-size-md)",
  "--chip-large-font-size": "var(--font-size-lg)"
}, oO = {
  "--tooltip-default-color": "var(--color-inverse-surface)",
  "--tooltip-opacity": "1",
  "--tooltip-border-radius": "4px",
  "--tooltip-font-size": "14px",
  "--tooltip-padding": "8px 16px",
  "--tooltip-offset": "10px",
  "--tooltip-primary-color": "var(--color-primary)",
  "--tooltip-info-color": "var(--color-info)",
  "--tooltip-success-color": "var(--color-success)",
  "--tooltip-warning-color": "var(--color-warning)",
  "--tooltip-danger-color": "var(--color-danger)",
  "--tooltip-default-text-color": "#fff",
  "--tooltip-primary-text-color": "var(--color-on-primary)",
  "--tooltip-info-text-color": "var(--color-on-info)",
  "--tooltip-success-text-color": "var(--color-on-success)",
  "--tooltip-warning-text-color": "var(--color-on-warning)",
  "--tooltip-danger-text-color": "var(--color-on-danger)"
}, tO = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, rO = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, aO = {
  "--table-background": "var(--color-surface-container-low)",
  "--table-tbody-tr-hover-background": "var(--color-surface-container-low)",
  "--table-border-radius": "2px",
  "--table-thead-border-bottom": "thin solid var(--color-outline)",
  "--table-thead-th-text-color": "rgba(0, 0, 0, 0.6)",
  "--table-thead-th-text-align": "left",
  "--table-thead-th-font-size": "14px",
  "--table-thead-tr-border-bottom": "thin solid var(--color-outline)",
  "--table-tbody-tr-border-bottom": "thin solid var(--color-outline)",
  "--table-tbody-td-text-color": "#555",
  "--table-tbody-td-font-size": "16px",
  "--table-tbody-td-text-align": "left",
  "--table-row-height": "46px",
  "--table-row-padding": "0 16px",
  "--table-footer-border-top": "thin solid var(--color-outline)"
}, iO = {
  "--collapse-background": "var(--color-surface-container-low)",
  "--collapse-text-color": "#1D1B20",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, lO = {
  "--result-background": "var(--color-body)",
  "--result-border-radius": "12px",
  "--result-title-color": "#1D1B20",
  "--result-description-color": "var(--color-on-surface-variant)",
  "--result-info-border-color": "rgba(98, 91, 113, 0.3)",
  "--result-success-border-color": "rgba(83, 101, 37, 0.3)",
  "--result-error-border-color": "rgba(179, 38, 30, 0.3)",
  "--result-warning-border-color": "rgba(125, 82, 96, 0.3)",
  "--result-padding": "24px",
  "--result-title-font-size": "32px",
  "--result-title-margin": "15px 0 0 0",
  "--result-image-size": "80px",
  "--result-title-font-weight": "500",
  "--result-description-margin": "10px 0 0 0",
  "--result-description-font-size": "14px",
  "--result-description-line-height": "1.6",
  "--result-info-color": "var(--color-info)",
  "--result-success-color": "var(--color-success)",
  "--result-error-color": "var(--color-danger)",
  "--result-warning-color": "var(--color-warning)",
  "--result-question-color": "#607d8b",
  "--result-question-border-color": "rgba(96, 125, 139, 0.3)",
  "--result-empty-color": "#9e9e9e",
  "--result-empty-border-color": "rgba(158, 158, 158, 0.3)"
}, sO = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-fab-border-radius": "12px",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px"
}, uO = {
  "--bottom-navigation-item-active-background-color": "var(--color-info-container)",
  "--bottom-navigation-item-inactive-color": "var(--color-on-surface-variant)",
  "--bottom-navigation-item-variant-active-background-color": "var(--color-info-container)",
  "--bottom-navigation-item-variant-active-color": "var(--color-on-info-container)",
  "--bottom-navigation-fab-border-radius": "12px",
  "--bottom-navigation-item-font-size": "var(--font-size-sm)",
  "--bottom-navigation-item-active-color": "var(--color-primary)",
  "--bottom-navigation-item-line-height": "1",
  "--bottom-navigation-item-icon-size": "22px",
  "--bottom-navigation-item-icon-margin-bottom": "5px",
  "--bottom-navigation-item-variant-icon-container-height": "30px",
  "--bottom-navigation-item-variant-icon-container-border-radius": "100px",
  "--bottom-navigation-item-variant-icon-container-max-width": "58px"
}, cO = {
  "--snackbar-color": "#F5EFF7",
  "--snackbar-background": "var(--color-inverse-surface)",
  "--snackbar-width": "256px",
  "--snackbar-border-radius": "4px",
  "--snackbar-font-size": "var(--font-size-md)",
  "--snackbar-margin": "6px 24px",
  "--snackbar-border-color": "currentColor",
  "--snackbar-success-background": "var(--color-success)",
  "--snackbar-info-background": "var(--color-info)",
  "--snackbar-error-background": "var(--color-danger)",
  "--snackbar-warning-background": "var(--color-warning)",
  "--snackbar-content-padding": "14px 16px",
  "--snackbar-action-margin": "0 8px",
  "--snackbar-vertical-action-margin": "0 8px 8px 0",
  "--snackbar-icon-margin": "0 8px"
}, dO = {
  "--action-sheet-background": "var(--color-surface-container-high)",
  "--action-sheet-title-color": "var(--color-on-surface-variant)",
  "--action-sheet-action-item-color": "#1D1B20",
  "--action-sheet-border-radius": "0px"
}, fO = {
  "--dialog-width": "312px",
  "--dialog-background": "var(--color-surface-container-high)",
  "--dialog-title-color": "#1D1B20",
  "--dialog-message-color": "var(--color-on-surface-variant)",
  "--dialog-border-radius": "28px",
  "--dialog-title-padding": "24px 24px 0",
  "--dialog-message-padding": "16px 24px 24px",
  "--dialog-actions-padding": "0 24px 24px",
  "--dialog-title-font-size": "20px",
  "--dialog-button-margin-left": "8px",
  "--dialog-message-line-height": "24px",
  "--dialog-message-font-size": "var(--font-size-md)",
  "--dialog-confirm-button-color": "var(--color-primary)",
  "--dialog-cancel-button-color": "var(--color-primary)"
}, pO = {
  "--pull-refresh-background": "var(--color-body)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, vO = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, mO = {
  "--picker-background": "var(--color-body)",
  "--picker-cancel-button-text-color": "var(--color-primary)",
  "--picker-mask-background-image": "linear-gradient(180deg, rgba(254, 247, 255, 0.9), rgba(254, 247, 255, 0.4)), linear-gradient(0deg, rgba(254, 247, 255, 0.9), rgba(254, 247, 255, 0.4))",
  "--picker-toolbar-height": "44px",
  "--picker-confirm-button-text-color": "var(--color-primary)",
  "--picker-picked-border": "1px solid var(--color-outline)",
  "--picker-title-font-size": "var(--font-size-lg)",
  "--picker-title-text-color": "#555",
  "--picker-option-font-size": "var(--font-size-lg)",
  "--picker-option-text-color": "#555",
  "--picker-toolbar-padding": "0 4px"
}, hO = {
  "--floating-panel-background": "var(--color-surface-container-low)",
  "--floating-panel-toolbar-background": "#79747E",
  "--floating-panel-toolbar-width": "32px",
  "--floating-panel-toolbar-height": "4px",
  "--floating-panel-header-height": "36px",
  "--floating-panel-z-index": "999",
  "--floating-panel-border-top": "none",
  "--floating-panel-border-radius": "0",
  "--floating-panel-toolbar-border-radius": "10px",
  "--floating-panel-transition-timing-function": "cubic-bezier(0.18, 0.89, 0.32, 1.28)"
}, gO = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, bO = {
  "--select-scroller-background": "var(--color-surface-container)",
  "--select-scroller-border-radius": "4px",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-chip-margin": "5px 5px 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, yO = {
  "--option-text-color": "#1D1B20",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, kO = {
  "--slider-thumb-size": "16px",
  "--slider-track-height": "4px",
  "--slider-track-background": "var(--color-surface-container-highest)",
  "--slider-track-fill-border-radius": "4px",
  "--slider-track-border-radius": "4px",
  "--slider-error-color": "var(--color-danger)",
  "--slider-track-fill-background": "var(--color-primary)",
  "--slider-thumb-block-background": "var(--color-primary)",
  "--slider-thumb-ripple-background": "var(--color-primary)",
  "--slider-thumb-label-background": "var(--color-primary)",
  "--slider-thumb-label-font-size": "var(--font-size-sm)",
  "--slider-thumb-label-text-color": "var(--color-on-primary)",
  "--slider-disabled-opacity": "var(--opacity-disabled)"
}, $O = {
  "--uploader-file-border-radius": "8px",
  "--uploader-action-background": "var(--color-surface-container-low)",
  "--uploader-file-name-background": "var(--color-surface-container-low)",
  "--uploader-file-cover-background": "var(--color-surface-container-low)",
  "--uploader-action-icon-color": "var(--color-on-surface-variant)",
  "--uploader-file-name-color": "var(--color-on-surface-variant)",
  "--uploader-action-icon-size": "24px",
  "--uploader-action-margin": "0 10px 10px 0",
  "--uploader-file-size": "80px",
  "--uploader-file-margin": "0 10px 10px 0",
  "--uploader-file-name-font-size": "12px",
  "--uploader-file-name-padding": "10px",
  "--uploader-file-text-align": "center",
  "--uploader-file-close-background": "rgba(0, 0, 0, 0.3)",
  "--uploader-file-close-size": "24px",
  "--uploader-file-close-icon-font-size": "14px",
  "--uploader-file-close-icon-color": "#fff",
  "--uploader-file-cover-fit": "cover",
  "--uploader-preview-video-width": "100vw",
  "--uploader-preview-video-height": "100vw",
  "--uploader-file-indicator-height": "4px",
  "--uploader-file-indicator-normal-color": "var(--color-disabled)",
  "--uploader-file-indicator-success-color": "var(--color-success)",
  "--uploader-file-indicator-error-color": "var(--color-danger)",
  "--uploader-file-progress-color": "var(--color-primary)",
  "--uploader-disabled-color": "var(--color-disabled)",
  "--uploader-disabled-text-color": "var(--color-text-disabled)",
  "--uploader-loading-background": "linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))"
}, wO = {
  "--time-picker-title-color": "#1D1B20",
  "--time-picker-title-hint-color": "var(--color-on-surface-variant)",
  "--time-picker-clock-container-background": "var(--color-surface-container-highest)",
  "--time-picker-title-background": "var(--color-surface-container-high)",
  "--time-picker-body-background": "var(--color-surface-container-high)",
  "--time-picker-clock-item-text-color": "#1D1B20",
  "--time-picker-border-radius": "20px",
  "--time-picker-title-padding": "20px 20px 16px",
  "--time-picker-actions-padding": "20px",
  "--time-picker-title-margin-bottom": "20px",
  "--time-picker-title-time-font-size": "40px",
  "--time-picker-title-ampm-border-radius": "8px",
  "--time-picker-title-time-padding": "8px 12px",
  "--time-picker-title-time-border-radius": "8px",
  "--time-picker-title-ampm-border": "thin solid #79747e",
  "--time-picker-title-ampm-button-padding": "8px",
  "--time-picker-title-time-background": "var(--color-surface-container-highest)",
  "--time-picker-title-inactive-opacity": "1",
  "--time-picker-title-time-active-background": "var(--color-primary-container)",
  "--time-picker-title-ampm-button-active-background": "var(--color-warning-container)",
  "--time-picker-font-size": "var(--font-size-md)",
  "--time-picker-min-width": "290px",
  "--time-picker-title-height": "105px",
  "--time-picker-title-hint-font-size": "14px",
  "--time-picker-title-time-margin": "0 5px",
  "--time-picker-title-ampm-margin-left": "10px",
  "--time-picker-clock-left": "27px",
  "--time-picker-clock-right": "27px",
  "--time-picker-clock-top": "27px",
  "--time-picker-clock-bottom": "27px",
  "--time-picker-clock-container-width": "256px",
  "--time-picker-clock-container-height": "256px",
  "--time-picker-clock-hand-height": "calc(50% - 4px)",
  "--time-picker-clock-hand-width": "2px",
  "--time-picker-clock-hand-bottom": "50%",
  "--time-picker-clock-hand-left": "calc(50% - 1px)",
  "--time-picker-clock-hand-background": "var(--color-primary)",
  "--time-picker-clock-hand-border-color": "var(--color-primary)",
  "--time-picker-clock-hand-before-width": "10px",
  "--time-picker-clock-hand-before-height": "10px",
  "--time-picker-clock-hand-before-border-width": "2px",
  "--time-picker-clock-hand-after-width": "4px",
  "--time-picker-clock-hand-after-height": "4px",
  "--time-picker-clock-item-height": "32px",
  "--time-picker-clock-item-width": "32px",
  "--time-picker-clock-item-active-background": "var(--color-primary)",
  "--time-picker-clock-item-active-color": "var(--color-on-primary)",
  "--time-picker-clock-item-disable-color": "rgba(0, 0, 0, 0.26)",
  "--time-picker-clock-item-disable-background": "#bdbdbd",
  "--time-picker-inner-left": "36px",
  "--time-picker-inner-right": "36px",
  "--time-picker-inner-top": "36px",
  "--time-picker-inner-bottom": "36px",
  "--time-picker-body-height": "288px",
  "--time-picker-title-time-container-justify-content": "flex-end"
}, CO = {
  "--date-picker-title-background": "var(--color-surface-container-high)",
  "--date-picker-title-color": "#1D1B20",
  "--date-picker-title-hint-color": "var(--color-on-surface-variant)",
  "--date-picker-body-background-color": "var(--color-surface-container-high)",
  "--date-picker-main-color": "#1D1B20",
  "--date-picker-border-radius": "20px",
  "--date-picker-title-padding": "20px 20px 16px",
  "--date-picker-actions-padding": "20px",
  "--day-picker-head-item-color": "#1D1B20",
  "--date-picker-header-arrow-filter": "opacity(1)",
  "--date-picker-header-padding": "0 0 16px",
  "--date-picker-body-height": "300px",
  "--date-picker-body-padding": "0 14px 16px",
  "--date-picker-header-color": "var(--color-on-surface-variant)",
  "--date-picker-font-size": "var(--font-size-md)",
  "--date-picker-min-width": "290px",
  "--date-picker-title-hint-font-size": "var(--font-size-md)",
  "--date-picker-title-height": "105px",
  "--date-picker-title-year-font-size": "var(--font-size-md)",
  "--date-picker-title-year-font-weight": "500",
  "--date-picker-title-year-margin-bottom": "8px",
  "--date-picker-title-date-height": "48px",
  "--date-picker-title-date-font-size": "34px",
  "--date-picker-title-date-font-weight": "500",
  "--date-picker-title-date-range-font-size": "20px",
  "--date-picker-title-date-justify-content": "normal",
  "--month-picker-padding": "0 12px",
  "--month-picker-item-width": "33%",
  "--month-picker-item-height": "56px",
  "--month-picker-item-button-max-width": "140px",
  "--year-picker-padding": "0 12px",
  "--year-picker-item-width": "33%",
  "--year-picker-item-height": "56px",
  "--year-picker-item-button-max-width": "140px",
  "--day-picker-content-item-width": "14.28%",
  "--day-picker-content-item-font-size": "var(--font-size-sm)",
  "--day-picker-content-item-padding": "2px 0",
  "--day-picker-content-item-button-width": "32px",
  "--day-picker-content-item-button-height": "32px",
  "--day-picker-content-item-button-font-size": "var(--font-size-sm)",
  "--day-picker-head-item-padding": "8px 0",
  "--day-picker-head-item-font-weight": "600"
}, SO = {
  "--switch-track-background": "var(--color-surface-container-low)",
  "--switch-handle-background": "var(--color-surface-container-low)",
  "--switch-track-active-background": "var(--color-primary)",
  "--switch-track-error-background": "var(--color-danger)",
  "--switch-ripple-color": "var(--color-primary)",
  "--switch-handle-color": "var(--color-primary)",
  "--switch-handle-active-color": "var(--color-on-primary)",
  "--switch-handle-active-background": "var(--color-primary)",
  "--switch-handle-error-background": "var(--color-danger)",
  "--switch-disabled-opacity": "var(--opacity-disabled)",
  "--switch-variant-width": "52px",
  "--switch-variant-height": "32px",
  "--switch-variant-track-background": "var(--color-surface-container-highest)",
  "--switch-variant-handle-width": "24px",
  "--switch-variant-handle-height": "24px",
  "--switch-variant-track-border-color": "#79747E",
  "--switch-variant-handle-color": "var(--color-on-primary)",
  "--switch-variant-handle-active-color": "var(--color-primary)",
  "--switch-variant-handle-background": "#79747E",
  "--switch-variant-handle-active-background": "var(--color-on-primary)"
}, PO = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, zO = {
  "--avatar-group-offset": "-10px"
}, OO = {
  "--badge-content-padding": "2px 6px",
  "--badge-content-border": "none",
  "--badge-content-border-radius": "100px",
  "--badge-content-font-size": "12px",
  "--badge-icon-size": "12px",
  "--badge-default-color": "#e0e0e0",
  "--badge-primary-color": "var(--color-primary)",
  "--badge-danger-color": "var(--color-danger)",
  "--badge-success-color": "var(--color-success)",
  "--badge-warning-color": "var(--color-warning)",
  "--badge-info-color": "var(--color-info)",
  "--badge-default-text-color": "#1d1b20",
  "--badge-primary-text-color": "var(--color-on-primary)",
  "--badge-danger-text-color": "var(--color-on-danger)",
  "--badge-success-text-color": "var(--color-on-success)",
  "--badge-warning-text-color": "var(--color-on-warning)",
  "--badge-info-text-color": "var(--color-on-info)",
  "--badge-dot-width": "8px",
  "--badge-dot-height": "8px"
}, TO = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, EO = {
  "--counter-padding": "0 4px",
  "--counter-font-color": "#fff",
  "--counter-background": "var(--color-primary)",
  "--counter-input-width": "28px",
  "--counter-input-margin": "0 4px",
  "--counter-input-font-size": "14px",
  "--counter-button-size": "28px",
  "--counter-button-text-color": "#fff",
  "--counter-button-icon-size": "100%",
  "--counter-disabled-color": "var(--color-disabled)",
  "--counter-disabled-opacity": "var(--opacity-disabled)",
  "--counter-error-color": "var(--color-danger)"
}, DO = {
  "--divider-color": "var(--color-outline)",
  "--divider-text-color": "#888",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, BO = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, IO = {
  "--icon-size": "20px"
}, MO = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, NO = {
  "--index-bar-list-right": "0",
  "--index-bar-list-top": "50%",
  "--index-bar-list-left": "auto",
  "--index-bar-list-bottom": "auto",
  "--index-bar-list-transform": "translate(0, -50%)",
  "--index-bar-list-item-font-size": "var(--font-size-xs)",
  "--index-bar-list-item-color": "var(--color-primary)",
  "--index-bar-list-item-active-color": "var(--color-danger)",
  "--index-bar-list-item-height": "14px",
  "--index-bar-list-item-padding": "0 10px"
}, AO = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, VO = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, LO = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, RO = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, FO = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, UO = {
  "--pagination-text-color": "#555",
  "--pagination-font-size": "var(--font-size-md)",
  "--pagination-active-color": "var(--color-on-primary)",
  "--pagination-active-bg-color": "var(--color-primary)",
  "--pagination-hover-bg-color": "rgba(85, 85, 85, 0.15)",
  "--pagination-total-margin": "0 12px",
  "--pagination-total-line-height": "24px",
  "--pagination-item-width": "32px",
  "--pagination-item-height": "32px",
  "--pagination-item-margin": "0 6px",
  "--pagination-item-background": "#fff",
  "--pagination-item-border-radius": "4px",
  "--pagination-item-simple-border-radius": "50%",
  "--pagination-input-width": "32px",
  "--pagination-disabled-color": "var(--color-text-disabled)",
  "--pagination-bg-disabled-color": "var(--color-disabled)",
  "--pagination-size-line-height": "24px",
  "--pagination-size-padding": "0 6px"
}, HO = {
  "--progress-font-size": "var(--font-size-sm)",
  "--progress-track-color": "#d8d8d8",
  "--progress-label-color": "#555",
  "--progress-background": "var(--color-primary)",
  "--progress-default-color": "#f5f5f5",
  "--progress-primary-color": "var(--color-primary)",
  "--progress-danger-color": "var(--color-danger)",
  "--progress-success-color": "var(--color-success)",
  "--progress-warning-color": "var(--color-warning)",
  "--progress-info-color": "var(--color-info)",
  "--progress-linear-border-radius": "0px"
}, YO = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, jO = {
  "--skeleton-content-padding": "16px",
  "--skeleton-card-height": "160px",
  "--skeleton-card-border-radius": "4px",
  "--skeleton-card-margin-bottom": "16px",
  "--skeleton-card-background-color": "rgba(0, 0, 0, 0.12)",
  "--skeleton-animation-background": "linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))",
  "--skeleton-avatar-size": "34px",
  "--skeleton-avatar-border-radius": "50%",
  "--skeleton-avatar-margin-right": "16px",
  "--skeleton-avatar-background-color": "rgba(0, 0, 0, 0.12)",
  "--skeleton-title-width": "50%",
  "--skeleton-title-border-radius": "10px",
  "--skeleton-title-background-color": "rgba(0, 0, 0, 0.12)",
  "--skeleton-row-height": "12px",
  "--skeleton-row-border-radius": "10px",
  "--skeleton-row-margin-top": "10px"
}, WO = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, KO = {
  "--step-tag-size": "20px",
  "--step-tag-background": "#9e9e9e",
  "--step-tag-font-size": "var(--font-size-md)",
  "--step-tag-color": "var(--color-on-primary)",
  "--step-tag-active-color": "var(--color-primary)",
  "--step-tag-margin": "4px 0",
  "--step-tag-icon-size": "var(--font-size-lg)",
  "--step-content-font-size": "var(--font-size-md)",
  "--step-content-color": "rgba(0, 0, 0, 0.38)",
  "--step-content-active-color": "#000",
  "--step-line-background": "#000",
  "--step-line-gap": "8px",
  "--step-vertical-tag-margin": "0 4px",
  "--step-vertical-min-height": "50px"
}, qO = {
  "--swipe-indicator-color": "#fff",
  "--swipe-indicators-offset": "10px",
  "--swipe-indicator-offset": "4px",
  "--swipe-navigation-z-index": "9",
  "--swipe-navigation-button-width": "36px",
  "--swipe-navigation-button-height": "36px",
  "--swipe-navigation-button-border-radius": "50%",
  "--swipe-navigation-icon-size": "20px",
  "--swipe-navigation-prev-left": "8px",
  "--swipe-navigation-next-right": "8px",
  "--swipe-navigation-prev-top": "8px",
  "--swipe-navigation-next-bottom": "8px"
}, GO = {
  "--watermark-content-color": "#808080"
}, XO = {
  "--app-bar-color": "var(--color-primary)",
  "--app-bar-title-padding": "0 12px",
  "--app-bar-title-font-size": "var(--font-size-lg)",
  "--app-bar-text-color": "#fff",
  "--app-bar-height": "54px",
  "--app-bar-left-gap": "6px",
  "--app-bar-right-gap": "6px",
  "--app-bar-border-radius": "4px",
  "--app-bar-font-size": "var(--font-size-lg)",
  "--app-bar-border-bottom": "thin solid var(--color-outline)"
}, ZO = Object.defineProperty, sd = Object.getOwnPropertySymbols, JO = Object.prototype.hasOwnProperty, QO = Object.prototype.propertyIsEnumerable, ud = (e, n, o) => n in e ? ZO(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ge = (e, n) => {
  for (var o in n || (n = {}))
    JO.call(n, o) && ud(e, o, n[o]);
  if (sd)
    for (var o of sd(n))
      QO.call(n, o) && ud(e, o, n[o]);
  return e;
}, _O = ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge(ge({
  "--font-size-xs": "10px",
  "--font-size-sm": "12px",
  "--font-size-md": "14px",
  "--font-size-lg": "16px",
  "--icon-size-xs": "16px",
  "--icon-size-sm": "18px",
  "--icon-size-md": "20px",
  "--icon-size-lg": "22px",
  "--color-body": "#fef7ff",
  "--color-text": "#000",
  "--color-primary": "#6750A4",
  "--color-info": "#625B71",
  "--color-success": "#536525",
  "--color-warning": "#7D5260",
  "--color-danger": "#B3261E",
  "--color-on-primary": "#fff",
  "--color-on-info": "#fff",
  "--color-on-success": "#fff",
  "--color-on-warning": "#fff",
  "--color-on-danger": "#fff",
  "--color-primary-container": "#EADDFF",
  "--color-info-container": "#E8DEF8",
  "--color-success-container": "#D5EC9C",
  "--color-warning-container": "#FFD8E4",
  "--color-danger-container": "#F9DEDC",
  "--color-on-primary-container": "#21005D",
  "--color-on-info-container": "#1D192B",
  "--color-on-success-container": "#151F00",
  "--color-on-warning-container": "#31111D",
  "--color-on-danger-container": "#410E0B",
  "--color-disabled": "#e0e0e0",
  "--color-text-disabled": "#aaa",
  "--color-surface-container": "#F3EDF7",
  "--color-surface-container-low": "#F7F2FA",
  "--color-surface-container-high": "#ECE6F0",
  "--color-surface-container-highest": "#E6E0E9",
  "--color-inverse-surface": "#322F35",
  "--color-outline": "#CAC4D0",
  "--color-on-surface-variant": "#49454F",
  "--opacity-disabled": "0.6",
  "--opacity-hover": "0.12",
  "--opacity-focus": "0.2",
  "--cubic-bezier": "cubic-bezier(0.25, 0.8, 0.5, 1)",
  "--shadow-key-umbra-opacity": "rgba(0, 0, 0, 0.2)",
  "--shadow-key-penumbra-opacity": "rgba(0, 0, 0, 0.14)",
  "--shadow-key-ambient-opacity": "rgba(0, 0, 0, 0.12)"
}, Uz), Hz), Yz), jz), Wz), Kz), qz), Gz), Xz), Zz), Jz), Qz), _z), xz), eO), nO), oO), tO), rO), aO), iO), lO), sO), uO), cO), dO), fO), pO), vO), mO), hO), gO), bO), yO), kO), $O), wO), CO), SO), PO), zO), OO), TO), EO), DO), BO), IO), MO), NO), AO), VO), LO), RO), FO), UO), HO), YO), jO), WO), KO), qO), GO), XO), xO = {
  "--button-default-color": "#3B383E",
  "--button-default-text-color": "var(--color-primary)",
  "--button-default-icon-color": "var(--color-on-surface-variant)",
  "--button-default-icon-container-color": "var(--color-surface-container-highest)",
  "--button-border-radius": "100px",
  "--button-primary-text-color": "var(--color-on-primary)",
  "--button-danger-text-color": "var(--color-on-danger)",
  "--button-success-text-color": "var(--color-on-success)",
  "--button-warning-text-color": "var(--color-on-warning)",
  "--button-info-text-color": "var(--color-on-info)",
  "--button-primary-color": "var(--color-primary)",
  "--button-danger-color": "var(--color-danger)",
  "--button-success-color": "var(--color-success)",
  "--button-warning-color": "var(--color-warning)",
  "--button-info-color": "var(--color-info)",
  "--button-primary-icon-color": "var(--color-on-primary-container)",
  "--button-danger-icon-color": "var(--color-on-danger-container)",
  "--button-success-icon-color": "var(--color-on-success-container)",
  "--button-warning-icon-color": "var(--color-on-warning-container)",
  "--button-info-icon-color": "var(--color-on-info-container)",
  "--button-primary-icon-container-color": "var(--color-primary-container)",
  "--button-danger-icon-container-color": "var(--color-danger-container)",
  "--button-success-icon-container-color": "var(--color-success-container)",
  "--button-warning-icon-container-color": "var(--color-warning-container)",
  "--button-info-icon-container-color": "var(--color-info-container)",
  "--button-disabled-color": "var(--color-disabled)",
  "--button-disabled-text-color": "var(--color-text-disabled)",
  "--button-mini-padding": "0 8px",
  "--button-small-padding": "0 12px",
  "--button-normal-padding": "0 16px",
  "--button-large-padding": "0 22px",
  "--button-round-padding": "6px",
  "--button-mini-height": "20px",
  "--button-small-height": "28px",
  "--button-normal-height": "36px",
  "--button-large-height": "44px",
  "--button-mini-font-size": "var(--font-size-xs)",
  "--button-small-font-size": "var(--font-size-sm)",
  "--button-normal-font-size": "var(--font-size-md)",
  "--button-large-font-size": "var(--font-size-lg)"
}, e3 = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, n3 = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, o3 = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, t3 = {
  "--menu-option-text-color": "var(--color-inverse-surface)",
  "--menu-option-normal-height": "38px",
  "--menu-option-small-height": "30px",
  "--menu-option-mini-height": "24px",
  "--menu-option-large-height": "46px",
  "--menu-option-padding": "0 12px",
  "--menu-option-normal-font-size": "var(--font-size-md)",
  "--menu-option-small-font-size": "var(--font-size-sm)",
  "--menu-option-mini-font-size": "var(--font-size-xs)",
  "--menu-option-large-font-size": "var(--font-size-lg)",
  "--menu-option-selected-background": "var(--color-primary)",
  "--menu-option-disabled-color": "var(--color-text-disabled)"
}, r3 = {
  "--fab-trigger-border-radius": "16px",
  "--fab-action-size": "40px",
  "--fab-action-border-radius": "12px",
  "--fab-top": "70px",
  "--fab-bottom": "16px",
  "--fab-left": "16px",
  "--fab-right": "16px",
  "--fab-trigger-size": "56px",
  "--fab-trigger-inactive-icon-size": "26px",
  "--fab-trigger-active-icon-size": "22px",
  "--fab-actions-padding": "10px 0",
  "--fab-action-margin": "6px",
  "--fab-transition-standard-easing": "cubic-bezier(0.4, 0, 0.2, 1)"
}, a3 = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, i3 = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, l3 = {
  "--cell-description-color": "var(--color-on-surface-variant)",
  "--cell-color": "var(--color-text)",
  "--cell-font-size": "var(--font-size-md)",
  "--cell-description-font-size": "var(--font-size-sm)",
  "--cell-description-margin-top": "4px",
  "--cell-padding": "10px 12px",
  "--cell-min-height": "40px",
  "--cell-border-color": "var(--color-outline)",
  "--cell-border-left": "12px",
  "--cell-border-right": "12px",
  "--cell-icon-right": "8px",
  "--cell-extra-left": "8px"
}, s3 = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "12px"
}, u3 = {
  "--avatar-text-color": "#000",
  "--avatar-background-color": "var(--color-primary)",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-border": "2px solid #fff",
  "--avatar-hover-transform": "scale(1.1)"
}, c3 = {
  "--field-decorator-text-color": "var(--color-inverse-surface)",
  "--field-decorator-blur-color": "var(--color-on-surface-variant)",
  "--field-decorator-error-color": "var(--color-danger)",
  "--field-decorator-focus-color": "var(--color-primary)",
  "--field-decorator-placeholder-size": "16px",
  "--field-decorator-icon-size": "20px",
  "--field-decorator-line-size": "1px",
  "--field-decorator-line-focus-size": "2px",
  "--field-decorator-line-border-radius": "4px",
  "--field-decorator-disabled-color": "var(--color-text-disabled)",
  "--field-decorator-standard-normal-margin-top": "22px",
  "--field-decorator-standard-normal-margin-bottom": "4px",
  "--field-decorator-standard-normal-icon-margin-top": "22px",
  "--field-decorator-standard-normal-icon-margin-bottom": "4px",
  "--field-decorator-standard-normal-non-hint-margin-top": "4px",
  "--field-decorator-standard-small-margin-top": "18px",
  "--field-decorator-standard-small-margin-bottom": "4px",
  "--field-decorator-standard-small-icon-margin-top": "18px",
  "--field-decorator-standard-small-icon-margin-bottom": "4px",
  "--field-decorator-standard-small-non-hint-margin-top": "2px",
  "--field-decorator-outlined-normal-margin-top": "16px",
  "--field-decorator-outlined-normal-margin-bottom": "16px",
  "--field-decorator-outlined-normal-padding-left": "16px",
  "--field-decorator-outlined-normal-padding-right": "16px",
  "--field-decorator-outlined-normal-placeholder-space": "4px",
  "--field-decorator-outlined-normal-icon-margin-top": "16px",
  "--field-decorator-outlined-normal-icon-margin-bottom": "16px",
  "--field-decorator-outlined-small-margin-top": "8px",
  "--field-decorator-outlined-small-margin-bottom": "8px",
  "--field-decorator-outlined-small-padding-left": "12px",
  "--field-decorator-outlined-small-padding-right": "12px",
  "--field-decorator-outlined-small-placeholder-space": "2px",
  "--field-decorator-outlined-small-icon-margin-top": "8px",
  "--field-decorator-outlined-small-icon-margin-bottom": "8px"
}, d3 = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, f3 = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, p3 = {
  "--card-border-radius": "12px",
  "--card-background": "var(--color-surface-container-highest)",
  "--card-image-height": "188px",
  "--card-title-color": "var(--color-inverse-surface)",
  "--card-title-font-size": "16px",
  "--card-title-padding": "0 16px",
  "--card-title-margin": "16px 0 0 0",
  "--card-subtitle-color": "var(--color-on-surface-variant)",
  "--card-subtitle-padding": "0 16px",
  "--card-subtitle-margin": "4px 0 0 0",
  "--card-description-margin": "32px 0 0 0",
  "--card-description-padding": "0 16px",
  "--card-description-color": "var(--color-on-surface-variant)",
  "--card-padding": "0 0 16px 0",
  "--card-footer-margin": "32px 0 0 0",
  "--card-title-row-margin": "16px 0 0 0",
  "--card-subtitle-row-margin": "4px 0 0 0",
  "--card-footer-padding": "0 16px",
  "--card-close-button-size": "56px",
  "--card-close-button-primary-color": "var(--color-primary-container)",
  "--card-close-button-text-color": "var(--color-on-primary-container)",
  "--card-close-button-border-radius": "12px",
  "--card-outline-color": "var(--color-outline)",
  "--card-image-width": "100%",
  "--card-row-image-width": "140px",
  "--card-row-height": "140px",
  "--card-subtitle-font-size": "14px",
  "--card-description-font-size": "14px",
  "--card-footer-right": "13px",
  "--card-footer-bottom": "9px",
  "--card-line-height": "22px",
  "--card-row-line-height": "1.5",
  "--card-floating-buttons-bottom": "16px",
  "--card-floating-buttons-right": "16px",
  "--card-floating-buttons-color": "#fff",
  "--card-close-button-icon-size": "24px"
}, v3 = {
  "--chip-round-radius": "8px",
  "--chip-default-color": "var(--color-surface-container-highest)",
  "--chip-default-text-color": "var(--color-on-surface-variant)",
  "--chip-primary-text-color": "var(--color-on-primary-container)",
  "--chip-danger-text-color": "var(--color-on-danger-container)",
  "--chip-success-text-color": "var(--color-on-success-container)",
  "--chip-warning-text-color": "var(--color-on-warning-container)",
  "--chip-info-text-color": "var(--color-on-info-container)",
  "--chip-primary-color": "var(--color-primary-container)",
  "--chip-danger-color": "var(--color-danger-container)",
  "--chip-success-color": "var(--color-success-container)",
  "--chip-warning-color": "var(--color-warning-container)",
  "--chip-info-color": "var(--color-info-container)",
  "--chip-primary-plain-color": "var(--color-primary)",
  "--chip-danger-plain-color": "var(--color-danger)",
  "--chip-success-plain-color": "var(--color-success)",
  "--chip-warning-plain-color": "var(--color-warning)",
  "--chip-info-plain-color": "var(--color-info)",
  "--chip-border-radius": "2px",
  "--chip-normal-height": "32px",
  "--chip-large-height": "40px",
  "--chip-small-height": "24px",
  "--chip-mini-height": "16px",
  "--chip-normal-padding": "0 10px",
  "--chip-large-padding": "0 17px",
  "--chip-small-padding": "0 6px",
  "--chip-mini-padding": "0 4px",
  "--chip-text-normal-margin": "0 5px",
  "--chip-text-large-margin": "0 5px",
  "--chip-text-small-margin": "0 3px",
  "--chip-text-mini-margin": "0 2px",
  "--chip-mini-font-size": "var(--font-size-xs)",
  "--chip-small-font-size": "var(--font-size-sm)",
  "--chip-normal-font-size": "var(--font-size-md)",
  "--chip-large-font-size": "var(--font-size-lg)"
}, m3 = {
  "--badge-default-color": "#3B383E",
  "--badge-default-text-color": "#fff",
  "--badge-content-padding": "2px 6px",
  "--badge-content-border": "none",
  "--badge-content-border-radius": "100px",
  "--badge-content-font-size": "12px",
  "--badge-icon-size": "12px",
  "--badge-primary-color": "var(--color-primary)",
  "--badge-danger-color": "var(--color-danger)",
  "--badge-success-color": "var(--color-success)",
  "--badge-warning-color": "var(--color-warning)",
  "--badge-info-color": "var(--color-info)",
  "--badge-primary-text-color": "var(--color-on-primary)",
  "--badge-danger-text-color": "var(--color-on-danger)",
  "--badge-success-text-color": "var(--color-on-success)",
  "--badge-warning-text-color": "var(--color-on-warning)",
  "--badge-info-text-color": "var(--color-on-info)",
  "--badge-dot-width": "8px",
  "--badge-dot-height": "8px"
}, h3 = {
  "--tooltip-default-color": "var(--color-inverse-surface)",
  "--tooltip-opacity": "1",
  "--tooltip-default-text-color": "#322F35",
  "--tooltip-border-radius": "4px",
  "--tooltip-font-size": "14px",
  "--tooltip-padding": "8px 16px",
  "--tooltip-offset": "10px",
  "--tooltip-primary-color": "var(--color-primary)",
  "--tooltip-info-color": "var(--color-info)",
  "--tooltip-success-color": "var(--color-success)",
  "--tooltip-warning-color": "var(--color-warning)",
  "--tooltip-danger-color": "var(--color-danger)",
  "--tooltip-primary-text-color": "var(--color-on-primary)",
  "--tooltip-info-text-color": "var(--color-on-info)",
  "--tooltip-success-text-color": "var(--color-on-success)",
  "--tooltip-warning-text-color": "var(--color-on-warning)",
  "--tooltip-danger-text-color": "var(--color-on-danger)"
}, g3 = {
  "--progress-label-color": "#fff",
  "--progress-font-size": "var(--font-size-sm)",
  "--progress-track-color": "#d8d8d8",
  "--progress-background": "var(--color-primary)",
  "--progress-default-color": "#f5f5f5",
  "--progress-primary-color": "var(--color-primary)",
  "--progress-danger-color": "var(--color-danger)",
  "--progress-success-color": "var(--color-success)",
  "--progress-warning-color": "var(--color-warning)",
  "--progress-info-color": "var(--color-info)",
  "--progress-linear-border-radius": "0px"
}, b3 = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, y3 = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, k3 = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff",
  "--step-tag-size": "20px",
  "--step-tag-background": "#9e9e9e",
  "--step-tag-font-size": "var(--font-size-md)",
  "--step-tag-color": "var(--color-on-primary)",
  "--step-tag-active-color": "var(--color-primary)",
  "--step-tag-margin": "4px 0",
  "--step-tag-icon-size": "var(--font-size-lg)",
  "--step-content-font-size": "var(--font-size-md)",
  "--step-line-gap": "8px",
  "--step-vertical-tag-margin": "0 4px",
  "--step-vertical-min-height": "50px"
}, $3 = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, w3 = {
  "--table-background": "var(--color-surface-container-highest)",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-thead-th-text-align": "left",
  "--table-tbody-td-text-color": "#fff",
  "--table-tbody-tr-hover-background": "var(--color-surface-container-highest)",
  "--table-border-radius": "2px",
  "--table-thead-border-bottom": "thin solid var(--color-outline)",
  "--table-thead-th-font-size": "14px",
  "--table-thead-tr-border-bottom": "thin solid var(--color-outline)",
  "--table-tbody-tr-border-bottom": "thin solid var(--color-outline)",
  "--table-tbody-td-font-size": "16px",
  "--table-tbody-td-text-align": "left",
  "--table-row-height": "46px",
  "--table-row-padding": "0 16px",
  "--table-footer-border-top": "thin solid var(--color-outline)"
}, C3 = {
  "--pagination-text-color": "#fff",
  "--pagination-item-background": "var(--color-surface-container)",
  "--pagination-font-size": "var(--font-size-md)",
  "--pagination-active-color": "var(--color-on-primary)",
  "--pagination-active-bg-color": "var(--color-primary)",
  "--pagination-hover-bg-color": "rgba(85, 85, 85, 0.15)",
  "--pagination-total-margin": "0 12px",
  "--pagination-total-line-height": "24px",
  "--pagination-item-width": "32px",
  "--pagination-item-height": "32px",
  "--pagination-item-margin": "0 6px",
  "--pagination-item-border-radius": "4px",
  "--pagination-item-simple-border-radius": "50%",
  "--pagination-input-width": "32px",
  "--pagination-disabled-color": "var(--color-text-disabled)",
  "--pagination-bg-disabled-color": "var(--color-disabled)",
  "--pagination-size-line-height": "24px",
  "--pagination-size-padding": "0 6px"
}, S3 = {
  "--watermark-content-color": "#ffffff"
}, P3 = {
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-text-color": "var(--color-inverse-surface)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, z3 = {
  "--result-background": "var(--color-surface-container-highest)",
  "--result-border-radius": "12px",
  "--result-title-color": "var(--color-inverse-surface)",
  "--result-description-color": "var(--color-on-surface-variant)",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)",
  "--result-info-border-color": "rgba(204, 194, 220, 0.3)",
  "--result-success-border-color": "rgba(186, 207, 131, 0.3)",
  "--result-error-border-color": "rgba(242, 184, 181, 0.3)",
  "--result-warning-border-color": "rgba(239, 184, 200, 0.3)",
  "--result-padding": "24px",
  "--result-title-font-size": "32px",
  "--result-title-margin": "15px 0 0 0",
  "--result-image-size": "80px",
  "--result-title-font-weight": "500",
  "--result-description-margin": "10px 0 0 0",
  "--result-description-font-size": "14px",
  "--result-description-line-height": "1.6",
  "--result-info-color": "var(--color-info)",
  "--result-success-color": "var(--color-success)",
  "--result-error-color": "var(--color-danger)",
  "--result-warning-color": "var(--color-warning)"
}, O3 = {
  "--app-bar-color": "#211F26",
  "--app-bar-text-color": "var(--color-inverse-surface)",
  "--app-bar-title-padding": "0 12px",
  "--app-bar-title-font-size": "var(--font-size-lg)",
  "--app-bar-height": "54px",
  "--app-bar-left-gap": "6px",
  "--app-bar-right-gap": "6px",
  "--app-bar-border-radius": "4px",
  "--app-bar-font-size": "var(--font-size-lg)",
  "--app-bar-border-bottom": "thin solid var(--color-outline)"
}, T3 = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, E3 = {
  "--bottom-navigation-item-active-background-color": "#4A4458",
  "--bottom-navigation-item-inactive-color": "var(--color-on-surface-variant)",
  "--bottom-navigation-item-variant-active-background-color": "var(--color-info-container)",
  "--bottom-navigation-item-variant-active-color": "var(--color-on-info-container)",
  "--bottom-navigation-fab-border-radius": "12px",
  "--bottom-navigation-item-font-size": "var(--font-size-sm)",
  "--bottom-navigation-item-active-color": "var(--color-primary)",
  "--bottom-navigation-item-line-height": "1",
  "--bottom-navigation-item-icon-size": "22px",
  "--bottom-navigation-item-icon-margin-bottom": "5px",
  "--bottom-navigation-item-variant-icon-container-height": "30px",
  "--bottom-navigation-item-variant-icon-container-border-radius": "100px",
  "--bottom-navigation-item-variant-icon-container-max-width": "58px"
}, D3 = {
  "--snackbar-color": "#322F35",
  "--snackbar-background": "var(--color-inverse-surface)",
  "--snackbar-width": "256px",
  "--snackbar-border-radius": "4px",
  "--snackbar-font-size": "var(--font-size-md)",
  "--snackbar-margin": "6px 24px",
  "--snackbar-border-color": "currentColor",
  "--snackbar-success-background": "var(--color-success)",
  "--snackbar-info-background": "var(--color-info)",
  "--snackbar-error-background": "var(--color-danger)",
  "--snackbar-warning-background": "var(--color-warning)",
  "--snackbar-content-padding": "14px 16px",
  "--snackbar-action-margin": "0 8px",
  "--snackbar-vertical-action-margin": "0 8px 8px 0",
  "--snackbar-icon-margin": "0 8px"
}, B3 = {
  "--action-sheet-background": "var(--color-surface-container-high)",
  "--action-sheet-title-color": "var(--color-on-surface-variant)",
  "--action-sheet-action-item-color": "var(--color-inverse-surface)",
  "--action-sheet-border-radius": "0px",
  "--action-sheet-border-top": "none",
  "--action-sheet-title-padding": "10px 16px",
  "--action-sheet-title-font-size": "14px",
  "--action-sheet-action-item-height": "48px",
  "--action-sheet-action-item-padding": "0 18px",
  "--action-sheet-action-item-disabled-color": "var(--color-text-disabled)",
  "--action-sheet-icon-margin": "0 20px 0 0",
  "--action-sheet-icon-size": "24px"
}, I3 = {
  "--dialog-width": "312px",
  "--dialog-background": "var(--color-surface-container-high)",
  "--dialog-title-color": "var(--color-inverse-surface)",
  "--dialog-message-color": "var(--color-on-surface-variant)",
  "--dialog-border-radius": "28px",
  "--dialog-title-padding": "24px 24px 0",
  "--dialog-message-padding": "16px 24px 24px",
  "--dialog-actions-padding": "0 24px 24px",
  "--dialog-title-font-size": "20px",
  "--dialog-button-margin-left": "8px",
  "--dialog-message-line-height": "24px",
  "--dialog-message-font-size": "var(--font-size-md)",
  "--dialog-confirm-button-color": "var(--color-primary)",
  "--dialog-cancel-button-color": "var(--color-primary)"
}, M3 = {
  "--pull-refresh-background": "var(--color-surface-container-highest)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, N3 = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, A3 = {
  "--picker-background": "var(--color-body)",
  "--picker-cancel-button-text-color": "var(--color-primary)",
  "--picker-title-text-color": "#fff",
  "--picker-option-text-color": "#fff",
  "--picker-mask-background-image": "linear-gradient(180deg, rgba(20, 18, 24, 0.9), rgba(20, 18, 24, 0.4)), linear-gradient(0deg, rgba(20, 18, 24, 0.9), rgba(20, 18, 24, 0.4))",
  "--picker-toolbar-height": "44px",
  "--picker-confirm-button-text-color": "var(--color-primary)",
  "--picker-picked-border": "1px solid var(--color-outline)",
  "--picker-title-font-size": "var(--font-size-lg)",
  "--picker-option-font-size": "var(--font-size-lg)",
  "--picker-toolbar-padding": "0 4px"
}, V3 = {
  "--floating-panel-background": "var(--color-surface-container-low)",
  "--floating-panel-toolbar-background": "#938F99",
  "--floating-panel-toolbar-width": "32px",
  "--floating-panel-toolbar-height": "4px",
  "--floating-panel-header-height": "36px",
  "--floating-panel-z-index": "999",
  "--floating-panel-border-top": "none",
  "--floating-panel-border-radius": "0",
  "--floating-panel-toolbar-border-radius": "10px",
  "--floating-panel-transition-timing-function": "cubic-bezier(0.18, 0.89, 0.32, 1.28)"
}, L3 = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, R3 = {
  "--select-scroller-background": "var(--color-surface-container)",
  "--select-scroller-border-radius": "4px",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-chip-margin": "5px 5px 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, F3 = {
  "--option-text-color": "var(--color-inverse-surface)",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, U3 = {
  "--counter-font-color": "#3B383E",
  "--counter-button-text-color": "#3B383E",
  "--counter-padding": "0 4px",
  "--counter-background": "var(--color-primary)",
  "--counter-input-width": "28px",
  "--counter-input-margin": "0 4px",
  "--counter-input-font-size": "14px",
  "--counter-button-size": "28px",
  "--counter-button-icon-size": "100%",
  "--counter-disabled-color": "var(--color-disabled)",
  "--counter-disabled-opacity": "var(--opacity-disabled)",
  "--counter-error-color": "var(--color-danger)"
}, H3 = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272",
  "--switch-track-active-background": "var(--color-primary)",
  "--switch-track-error-background": "var(--color-danger)",
  "--switch-ripple-color": "var(--color-primary)",
  "--switch-handle-color": "var(--color-primary)",
  "--switch-handle-active-color": "var(--color-on-primary)",
  "--switch-handle-active-background": "var(--color-primary)",
  "--switch-handle-error-background": "var(--color-danger)",
  "--switch-disabled-opacity": "var(--opacity-disabled)",
  "--switch-variant-width": "52px",
  "--switch-variant-height": "32px",
  "--switch-variant-track-background": "var(--color-surface-container-highest)",
  "--switch-variant-handle-width": "24px",
  "--switch-variant-handle-height": "24px",
  "--switch-variant-track-border-color": "#938F99",
  "--switch-variant-handle-color": "var(--color-on-primary)",
  "--switch-variant-handle-active-color": "var(--color-primary)",
  "--switch-variant-handle-background": "#938F99",
  "--switch-variant-handle-active-background": "var(--color-on-primary)"
}, Y3 = {
  "--slider-thumb-size": "16px",
  "--slider-track-height": "4px",
  "--slider-track-background": "var(--color-surface-container-highest)",
  "--slider-track-fill-border-radius": "4px",
  "--slider-track-border-radius": "4px",
  "--slider-error-color": "var(--color-danger)",
  "--slider-track-fill-background": "var(--color-primary)",
  "--slider-thumb-block-background": "var(--color-primary)",
  "--slider-thumb-ripple-background": "var(--color-primary)",
  "--slider-thumb-label-background": "var(--color-primary)",
  "--slider-thumb-label-font-size": "var(--font-size-sm)",
  "--slider-thumb-label-text-color": "var(--color-on-primary)",
  "--slider-disabled-opacity": "var(--opacity-disabled)"
}, j3 = {
  "--uploader-file-border-radius": "8px",
  "--uploader-action-background": "var(--color-surface-container-highest)",
  "--uploader-file-name-background": "var(--color-surface-container-highest)",
  "--uploader-file-cover-background": "var(--color-surface-container-highest)",
  "--uploader-action-icon-color": "var(--color-on-surface-variant)",
  "--uploader-file-name-color": "var(--color-on-surface-variant)",
  "--uploader-action-icon-size": "24px",
  "--uploader-action-margin": "0 10px 10px 0",
  "--uploader-file-size": "80px",
  "--uploader-file-margin": "0 10px 10px 0",
  "--uploader-file-name-font-size": "12px",
  "--uploader-file-name-padding": "10px",
  "--uploader-file-text-align": "center",
  "--uploader-file-close-background": "rgba(0, 0, 0, 0.3)",
  "--uploader-file-close-size": "24px",
  "--uploader-file-close-icon-font-size": "14px",
  "--uploader-file-close-icon-color": "#fff",
  "--uploader-file-cover-fit": "cover",
  "--uploader-preview-video-width": "100vw",
  "--uploader-preview-video-height": "100vw",
  "--uploader-file-indicator-height": "4px",
  "--uploader-file-indicator-normal-color": "var(--color-disabled)",
  "--uploader-file-indicator-success-color": "var(--color-success)",
  "--uploader-file-indicator-error-color": "var(--color-danger)",
  "--uploader-file-progress-color": "var(--color-primary)",
  "--uploader-disabled-color": "var(--color-disabled)",
  "--uploader-disabled-text-color": "var(--color-text-disabled)",
  "--uploader-loading-background": "linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))"
}, W3 = {
  "--time-picker-title-color": "var(--color-inverse-surface)",
  "--time-picker-clock-container-background": "var(--color-surface-container-highest)",
  "--time-picker-title-hint-color": "var(--color-on-surface-variant)",
  "--time-picker-title-background": "var(--color-surface-container-high)",
  "--time-picker-body-background": "var(--color-surface-container-high)",
  "--time-picker-clock-item-disable-color": "#888",
  "--time-picker-clock-item-disable-background": "#ccc",
  "--time-picker-clock-item-text-color": "var(--color-inverse-surface)",
  "--time-picker-border-radius": "20px",
  "--time-picker-title-padding": "20px 20px 16px",
  "--time-picker-actions-padding": "20px",
  "--time-picker-title-margin-bottom": "20px",
  "--time-picker-title-time-font-size": "40px",
  "--time-picker-title-ampm-border-radius": "8px",
  "--time-picker-title-time-padding": "8px 12px",
  "--time-picker-title-time-border-radius": "8px",
  "--time-picker-title-ampm-border": "thin solid #938F99",
  "--time-picker-title-ampm-button-padding": "8px",
  "--time-picker-title-time-background": "var(--color-surface-container-highest)",
  "--time-picker-title-inactive-opacity": "1",
  "--time-picker-title-time-active-background": "var(--color-primary-container)",
  "--time-picker-title-ampm-button-active-background": "var(--color-warning-container)",
  "--time-picker-font-size": "var(--font-size-md)",
  "--time-picker-min-width": "290px",
  "--time-picker-title-height": "105px",
  "--time-picker-title-hint-font-size": "14px",
  "--time-picker-title-time-margin": "0 5px",
  "--time-picker-title-ampm-margin-left": "10px",
  "--time-picker-clock-left": "27px",
  "--time-picker-clock-right": "27px",
  "--time-picker-clock-top": "27px",
  "--time-picker-clock-bottom": "27px",
  "--time-picker-clock-container-width": "256px",
  "--time-picker-clock-container-height": "256px",
  "--time-picker-clock-hand-height": "calc(50% - 4px)",
  "--time-picker-clock-hand-width": "2px",
  "--time-picker-clock-hand-bottom": "50%",
  "--time-picker-clock-hand-left": "calc(50% - 1px)",
  "--time-picker-clock-hand-background": "var(--color-primary)",
  "--time-picker-clock-hand-border-color": "var(--color-primary)",
  "--time-picker-clock-hand-before-width": "10px",
  "--time-picker-clock-hand-before-height": "10px",
  "--time-picker-clock-hand-before-border-width": "2px",
  "--time-picker-clock-hand-after-width": "4px",
  "--time-picker-clock-hand-after-height": "4px",
  "--time-picker-clock-item-height": "32px",
  "--time-picker-clock-item-width": "32px",
  "--time-picker-clock-item-active-background": "var(--color-primary)",
  "--time-picker-clock-item-active-color": "var(--color-on-primary)",
  "--time-picker-inner-left": "36px",
  "--time-picker-inner-right": "36px",
  "--time-picker-inner-top": "36px",
  "--time-picker-inner-bottom": "36px",
  "--time-picker-body-height": "288px",
  "--time-picker-title-time-container-justify-content": "flex-end"
}, K3 = {
  "--date-picker-title-background": "var(--color-surface-container-high)",
  "--date-picker-title-color": "var(--color-inverse-surface)",
  "--date-picker-title-hint-color": "var(--color-on-surface-variant)",
  "--date-picker-body-background-color": "var(--color-surface-container-high)",
  "--date-picker-main-color": "var(--color-inverse-surface)",
  "--date-picker-border-radius": "20px",
  "--date-picker-title-padding": "20px 20px 16px",
  "--date-picker-actions-padding": "20px",
  "--day-picker-head-item-color": "var(--color-inverse-surface)",
  "--date-picker-header-arrow-filter": "opacity(1)",
  "--date-picker-header-padding": "0 0 16px",
  "--date-picker-body-height": "300px",
  "--date-picker-body-padding": "0 14px 16px",
  "--date-picker-header-color": "var(--color-on-surface-variant)",
  "--date-picker-font-size": "var(--font-size-md)",
  "--date-picker-min-width": "290px",
  "--date-picker-title-hint-font-size": "var(--font-size-md)",
  "--date-picker-title-height": "105px",
  "--date-picker-title-year-font-size": "var(--font-size-md)",
  "--date-picker-title-year-font-weight": "500",
  "--date-picker-title-year-margin-bottom": "8px",
  "--date-picker-title-date-height": "48px",
  "--date-picker-title-date-font-size": "34px",
  "--date-picker-title-date-font-weight": "500",
  "--date-picker-title-date-range-font-size": "20px",
  "--date-picker-title-date-justify-content": "normal",
  "--month-picker-padding": "0 12px",
  "--month-picker-item-width": "33%",
  "--month-picker-item-height": "56px",
  "--month-picker-item-button-max-width": "140px",
  "--year-picker-padding": "0 12px",
  "--year-picker-item-width": "33%",
  "--year-picker-item-height": "56px",
  "--year-picker-item-button-max-width": "140px",
  "--day-picker-content-item-width": "14.28%",
  "--day-picker-content-item-font-size": "var(--font-size-sm)",
  "--day-picker-content-item-padding": "2px 0",
  "--day-picker-content-item-button-width": "32px",
  "--day-picker-content-item-button-height": "32px",
  "--day-picker-content-item-button-font-size": "var(--font-size-sm)",
  "--day-picker-head-item-padding": "8px 0",
  "--day-picker-head-item-font-weight": "600"
}, q3 = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, G3 = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-content-padding": "16px",
  "--skeleton-card-height": "160px",
  "--skeleton-card-border-radius": "4px",
  "--skeleton-card-margin-bottom": "16px",
  "--skeleton-avatar-size": "34px",
  "--skeleton-avatar-border-radius": "50%",
  "--skeleton-avatar-margin-right": "16px",
  "--skeleton-title-width": "50%",
  "--skeleton-title-border-radius": "10px",
  "--skeleton-row-height": "12px",
  "--skeleton-row-border-radius": "10px",
  "--skeleton-row-margin-top": "10px"
}, X3 = {
  "--avatar-group-offset": "-10px"
}, Z3 = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, J3 = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, Q3 = {
  "--icon-size": "20px"
}, _3 = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, x3 = {
  "--index-bar-list-right": "0",
  "--index-bar-list-top": "50%",
  "--index-bar-list-left": "auto",
  "--index-bar-list-bottom": "auto",
  "--index-bar-list-transform": "translate(0, -50%)",
  "--index-bar-list-item-font-size": "var(--font-size-xs)",
  "--index-bar-list-item-color": "var(--color-primary)",
  "--index-bar-list-item-active-color": "var(--color-danger)",
  "--index-bar-list-item-height": "14px",
  "--index-bar-list-item-padding": "0 10px"
}, e8 = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, n8 = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, o8 = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, t8 = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, r8 = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, a8 = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, i8 = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, l8 = {
  "--swipe-indicator-color": "#fff",
  "--swipe-indicators-offset": "10px",
  "--swipe-indicator-offset": "4px",
  "--swipe-navigation-z-index": "9",
  "--swipe-navigation-button-width": "36px",
  "--swipe-navigation-button-height": "36px",
  "--swipe-navigation-button-border-radius": "50%",
  "--swipe-navigation-icon-size": "20px",
  "--swipe-navigation-prev-left": "8px",
  "--swipe-navigation-next-right": "8px",
  "--swipe-navigation-prev-top": "8px",
  "--swipe-navigation-next-bottom": "8px"
}, s8 = Object.defineProperty, cd = Object.getOwnPropertySymbols, u8 = Object.prototype.hasOwnProperty, c8 = Object.prototype.propertyIsEnumerable, dd = (e, n, o) => n in e ? s8(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, be = (e, n) => {
  for (var o in n || (n = {}))
    u8.call(n, o) && dd(e, o, n[o]);
  if (cd)
    for (var o of cd(n))
      c8.call(n, o) && dd(e, o, n[o]);
  return e;
}, d8 = be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be({
  "--font-size-xs": "10px",
  "--font-size-sm": "12px",
  "--font-size-md": "14px",
  "--font-size-lg": "16px",
  "--icon-size-xs": "16px",
  "--icon-size-sm": "18px",
  "--icon-size-md": "20px",
  "--icon-size-lg": "22px",
  "--color-body": "#141218",
  "--color-text": "#fff",
  "--color-primary": "#D0BCFF",
  "--color-info": "#CCC2DC",
  "--color-success": "#BACF83",
  "--color-warning": "#EFB8C8",
  "--color-danger": "#F2B8B5",
  "--color-on-primary": "#381E72",
  "--color-on-info": "#332D41",
  "--color-on-success": "#273500",
  "--color-on-warning": "#492532",
  "--color-on-danger": "#601410",
  "--color-primary-container": "#5B4494",
  "--color-info-container": "#575065",
  "--color-success-container": "#485A19",
  "--color-warning-container": "#6F4854",
  "--color-danger-container": "#9D3A37",
  "--color-on-primary-container": "#EADDFF",
  "--color-on-info-container": "#E8DEF8",
  "--color-on-success-container": "#D5EC9C",
  "--color-on-warning-container": "#FFD8E4",
  "--color-on-danger-container": "#F9DEDC",
  "--color-disabled": "#404040",
  "--color-text-disabled": "#757575",
  "--color-surface-container": "#211F26",
  "--color-surface-container-low": "#1D1B20",
  "--color-surface-container-high": "#2B2930",
  "--color-surface-container-highest": "#36343B",
  "--color-inverse-surface": "#e6e0e9",
  "--color-outline": "#49454F",
  "--color-on-surface-variant": "#CAC4D0",
  "--opacity-disabled": "0.6",
  "--opacity-hover": "0.12",
  "--opacity-focus": "0.2",
  "--cubic-bezier": "cubic-bezier(0.25, 0.8, 0.5, 1)",
  "--shadow-key-umbra-opacity": "rgba(0, 0, 0, 0.2)",
  "--shadow-key-penumbra-opacity": "rgba(0, 0, 0, 0.14)",
  "--shadow-key-ambient-opacity": "rgba(0, 0, 0, 0.12)"
}, xO), e3), n3), o3), t3), r3), a3), i3), l3), s3), u3), c3), d3), f3), p3), v3), m3), h3), g3), b3), y3), k3), $3), w3), C3), S3), P3), z3), O3), T3), E3), D3), B3), I3), M3), N3), A3), V3), L3), R3), F3), U3), H3), Y3), j3), W3), K3), q3), G3), X3), Z3), J3), Q3), _3), x3), e8), n8), o8), t8), r8), a8), i8), l8);
function f8(e, n = {}) {
  const { viewportWidth: o = 375, viewportUnit: t = "vmin", unitPrecision: r = 6 } = n;
  return Object.entries(e).reduce((a, [i, l]) => (a[i] = l.includes("px") ? l.replace(
    /(\d+(\.\d+)?)px/g,
    (s, u) => `${Number((u / o * 100).toFixed(r))}${t}`
  ) : l, a), {});
}
const p8 = { dark: Fz, md3Light: _O, md3Dark: d8, toViewport: f8 }, OT = null;
var es = p8;
const Fn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], Sn = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], fd = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"], xm = {
  modelValue: String,
  elevation: {
    type: [Boolean, Number, String],
    default: !1
  },
  hint: String,
  color: String,
  titleColor: String,
  format: {
    type: String,
    default: "ampm"
  },
  allowedTime: Object,
  min: String,
  max: String,
  useSeconds: Boolean,
  readonly: Boolean,
  "onUpdate:modelValue": R(),
  onChange: R()
}, eh = (e, n) => e === "24hr" || n === "am", Ls = (e, n, o) => {
  const t = Fn.findIndex((a) => F(a) === F(o)), r = eh(e, n) ? o : Sn[t];
  return {
    hourStr: r,
    hourNum: F(r)
  };
}, zn = (e) => {
  const [n, o, t] = e.split(":");
  return {
    hour: F(n),
    minute: F(o),
    second: F(t)
  };
}, nh = (e) => {
  var n, o;
  const { time: t, format: r, ampm: a, hour: i, max: l, min: s, disableHour: u } = e, { hourStr: c, hourNum: d } = Ls(r, a, i);
  let f = !1, v = !1;
  if (u.includes(c))
    return !0;
  if (l && !s) {
    const { hour: y, minute: m } = zn(l);
    f = y === d && t > m;
  }
  if (!l && s) {
    const { hour: y, minute: m } = zn(s);
    f = y === d && t < m;
  }
  if (l && s) {
    const { hour: y, minute: m } = zn(l), { hour: b, minute: C } = zn(s);
    f = b === d && t < C || y === d && t > m;
  }
  return (n = e.allowedTime) != null && n.minutes && (v = (o = e.allowedTime) == null ? void 0 : o.minutes(t)), f || v;
}, oh = (e) => {
  var n, o;
  const { time: t, format: r, ampm: a, hour: i, minute: l, max: s, min: u, disableHour: c } = e, { hourStr: d, hourNum: f } = Ls(r, a, i);
  let v = !1, y = !1;
  if (c.includes(d))
    return !0;
  if (s && !u) {
    const { hour: m, minute: b, second: C } = zn(s);
    v = m === f && b < l || b === l && t > C;
  }
  if (!s && u) {
    const { hour: m, minute: b, second: C } = zn(u);
    v = m === f && b > l || b === l && t > C;
  }
  if (s && u) {
    const { hour: m, minute: b, second: C } = zn(s), { hour: w, minute: g, second: $ } = zn(u);
    v = m === f && b < l || w === f && g > l || m === f && b === l && t > C || w === f && g === l && t < $;
  }
  return (n = e.allowedTime) != null && n.seconds && (y = (o = e.allowedTime) == null ? void 0 : o.seconds(t)), v || y;
}, { n: v8, classes: m8 } = ee("time-picker");
function h8(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.n("clock"))
    },
    [
      I(
        "div",
        {
          class: p(e.n("clock-hand")),
          style: K(e.handStyle)
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      (h(!0), P(
        Ae,
        null,
        Ze(e.timeScales, (o, t) => (h(), P(
          "div",
          {
            class: p(
              e.classes(
                e.n("clock-item"),
                [e.isActive(t, !1), e.n("clock-item--active")],
                [e.isDisable(o), e.n("clock-item--disable")]
              )
            ),
            key: o,
            style: K(e.getStyle(t, o, !1))
          },
          re(o),
          7
          /* TEXT, CLASS, STYLE */
        ))),
        128
        /* KEYED_FRAGMENT */
      )),
      e.format === "24hr" && e.type === "hour" ? (h(), P(
        "div",
        {
          key: 0,
          class: p(e.n("clock-inner")),
          ref: "inner"
        },
        [
          (h(!0), P(
            Ae,
            null,
            Ze(e.hours24, (o, t) => (h(), P(
              "div",
              {
                class: p(
                  e.classes(
                    e.n("clock-item"),
                    [e.isActive(t, !0), e.n("clock-item--active")],
                    [e.isDisable(o), e.n("clock-item--disable")]
                  )
                ),
                key: o,
                style: K(e.getStyle(t, o, !0))
              },
              re(o),
              7
              /* TEXT, CLASS, STYLE */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const th = x({
  name: "Clock",
  props: {
    isInner: {
      type: Boolean,
      required: !0
    },
    rad: {
      type: Number
    },
    format: {
      type: String,
      default: "ampm"
    },
    allowedTime: {
      type: Object
    },
    time: {
      type: Object,
      required: !0
    },
    useSeconds: {
      type: Boolean
    },
    preventNextUpdate: {
      type: Boolean
    },
    type: {
      type: String,
      default: "hour"
    },
    ampm: {
      type: String,
      default: "am"
    },
    color: {
      type: String
    },
    min: {
      type: String
    },
    max: {
      type: String
    }
  },
  emits: ["update", "change-prevent-update"],
  setup(e, { emit: n }) {
    const o = k(null), t = k([]), r = k([]), a = B(() => ({
      transform: `rotate(${F(e.rad)}deg)`,
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: u(),
      borderColor: u()
    })), i = B(() => {
      if (e.rad === void 0)
        return;
      const m = e.rad / 30;
      return m >= 0 ? m : m + 12;
    }), l = B(() => e.type === "hour" ? Fn : fd), s = (m, b) => {
      m = m ?? (e.type === "minute" ? e.time.minute : e.time.second);
      const C = e.type === "minute" ? nh : oh, w = {
        time: F(m),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: F(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return b && e.type === "minute" && Reflect.deleteProperty(w, "minute"), C(w);
    }, u = () => {
      if (i.value === void 0)
        return e.color;
      const m = e.isInner ? Sn[i.value] : l.value[i.value];
      return l.value === fd ? s() ? "var(--time-picker-clock-item-disable-background)" : e.color : d(m) ? "var(--time-picker-clock-item-disable-background)" : e.color;
    }, c = (m, b) => b ? i.value === m && e.isInner : i.value === m && (!e.isInner || e.type !== "hour"), d = (m) => {
      if (e.type === "hour") {
        if (eh(e.format, e.ampm))
          return t.value.includes(m);
        const b = Fn.findIndex((C) => C === m);
        return r.value.includes(b);
      }
      return s(m, !0);
    }, f = (m, b, C) => {
      const w = 2 * Math.PI / 12 * m - Math.PI / 2, g = 50 * (1 + Math.cos(w)), $ = 50 * (1 + Math.sin(w)), O = () => c(m, C) ? d(b) ? {
        backgroundColor: "var(--time-picker-clock-item-disable-background)",
        color: "var(--time-picker-clock-item-disable-color)"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, { backgroundColor: z, color: A } = O();
      return {
        left: `${g}%`,
        top: `${$}%`,
        backgroundColor: z,
        color: A
      };
    }, v = () => {
      const { width: m, height: b } = an(o.value);
      return {
        width: m,
        height: b
      };
    }, y = () => {
      if (i.value === void 0)
        return;
      const m = e.ampm === "am" ? Fn : Sn;
      return Fo(m[i.value], 2, "0");
    };
    return de([i, () => e.isInner], ([m, b], [C, w]) => {
      if (m === C && b === w || e.type !== "hour" || i.value === void 0)
        return;
      const $ = b ? Sn[i.value] : y(), O = e.useSeconds ? `:${e.time.second}` : "", z = `${$}:${e.time.minute}${O}`;
      e.preventNextUpdate || n("update", z), n("change-prevent-update");
    }), de(
      () => e.rad,
      (m, b) => {
        if (e.type === "hour" || m === void 0 || b === void 0)
          return;
        const C = m / 6 >= 0 ? m / 6 : m / 6 + 60, w = b / 6 >= 0 ? b / 6 : b / 6 + 60;
        if (C === w)
          return;
        let g;
        const { hourStr: $ } = Ls(e.format, e.ampm, e.time.hour);
        if (e.type === "minute") {
          const O = se().minute(C).format("mm"), z = e.useSeconds ? `:${e.time.second}` : "";
          g = `${$}:${O}${z}`;
        }
        if (e.type === "second") {
          const O = se().second(C).format("ss"), z = e.useSeconds ? `:${O}` : "";
          g = `${$}:${e.time.minute}${z}`;
        }
        n("update", g);
      }
    ), de(
      [() => e.max, () => e.min, () => e.allowedTime],
      ([m, b, C]) => {
        if (t.value = [], m && !b) {
          const { hour: w } = zn(m), g = Fn.filter((O) => F(O) > w), $ = Sn.filter((O) => F(O) > w);
          t.value = [...g, ...$];
        }
        if (!m && b) {
          const { hour: w } = zn(b), g = Fn.filter((O) => F(O) < w), $ = Sn.filter((O) => F(O) < w);
          t.value = [...g, ...$];
        }
        if (m && b) {
          const { hour: w } = zn(m), { hour: g } = zn(b), $ = Fn.filter((z) => F(z) < g || F(z) > w), O = Sn.filter((z) => F(z) < g || F(z) > w);
          t.value = [...$, ...O];
        }
        if (C != null && C.hours) {
          const { hours: w } = C, g = Fn.filter((O) => !w(F(O))), $ = Sn.filter((O) => !w(F(O)));
          t.value = [.../* @__PURE__ */ new Set([...t.value, ...g, ...$])];
        }
        r.value = t.value.map((w) => Sn.findIndex((g) => w === g)).filter((w) => w >= 0);
      },
      { immediate: !0, deep: !0 }
    ), {
      n: v8,
      classes: m8,
      hours24: Sn,
      timeScales: l,
      inner: o,
      handStyle: a,
      disableHour: t,
      isActive: c,
      isDisable: d,
      getSize: v,
      getStyle: f,
      activeItemIndex: i
    };
  }
});
th.render = h8;
var g8 = th;
const { name: b8, n: y8, classes: k8 } = ee("time-picker");
function $8(e, n) {
  var o;
  const t = ne("clock");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [
      I(
        "div",
        {
          class: p(e.n("title")),
          style: K({ background: e.titleColor || e.color })
        },
        [
          I(
            "div",
            {
              class: p(e.n("title-hint"))
            },
            re((o = e.hint) != null ? o : (e.pt ? e.pt : e.t)("timePickerHint")),
            3
            /* TEXT, CLASS */
          ),
          I(
            "div",
            {
              class: p(e.n("title-time-container"))
            },
            [
              I(
                "div",
                {
                  class: p(e.n("title-time"))
                },
                [
                  I(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
                      onClick: n[0] || (n[0] = (r) => e.checkPanel("hour"))
                    },
                    re(e.time.hour),
                    3
                    /* TEXT, CLASS */
                  ),
                  I(
                    "span",
                    {
                      class: p(e.n("title-splitter"))
                    },
                    ":",
                    2
                    /* CLASS */
                  ),
                  I(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
                      onClick: n[1] || (n[1] = (r) => e.checkPanel("minute"))
                    },
                    re(e.time.minute),
                    3
                    /* TEXT, CLASS */
                  ),
                  e.useSeconds ? (h(), P(
                    "span",
                    {
                      key: 0,
                      class: p(e.n("title-splitter"))
                    },
                    ":",
                    2
                    /* CLASS */
                  )) : X("v-if", !0),
                  e.useSeconds ? (h(), P(
                    "div",
                    {
                      key: 1,
                      class: p(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
                      onClick: n[2] || (n[2] = (r) => e.checkPanel("second"))
                    },
                    re(e.time.second),
                    3
                    /* TEXT, CLASS */
                  )) : X("v-if", !0)
                ],
                2
                /* CLASS */
              ),
              e.format === "ampm" ? (h(), P(
                "div",
                {
                  key: 0,
                  class: p(e.n("title-ampm"))
                },
                [
                  I(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
                      onClick: n[3] || (n[3] = (r) => e.checkAmpm("am"))
                    },
                    " AM ",
                    2
                    /* CLASS */
                  ),
                  I(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
                      onClick: n[4] || (n[4] = (r) => e.checkAmpm("pm"))
                    },
                    " PM ",
                    2
                    /* CLASS */
                  )
                ],
                2
                /* CLASS */
              )) : X("v-if", !0)
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      I(
        "div",
        {
          class: p(e.n("body"))
        },
        [
          I(
            "div",
            {
              class: p(e.n("clock-container")),
              onTouchstart: n[5] || (n[5] = (...r) => e.moveHand && e.moveHand(...r)),
              onTouchmove: n[6] || (n[6] = (...r) => e.moveHand && e.moveHand(...r)),
              onTouchend: n[7] || (n[7] = (...r) => e.end && e.end(...r)),
              ref: "container"
            },
            [
              G(_e, {
                name: `${e.n()}-panel-fade`
              }, {
                default: fe(() => [
                  (h(), Pe(t, {
                    key: e.type,
                    ref: "inner",
                    type: e.type,
                    ampm: e.ampm,
                    color: e.color,
                    "is-inner": e.isInner,
                    format: e.format,
                    "allowed-time": e.allowedTime,
                    rad: e.getRad,
                    time: e.time,
                    "prevent-next-update": e.isPreventNextUpdate,
                    "use-seconds": e.useSeconds,
                    max: e.max,
                    min: e.min,
                    onUpdate: e.update,
                    onChangePreventUpdate: e.changePreventUpdate
                  }, null, 8, ["type", "ampm", "color", "is-inner", "format", "allowed-time", "rad", "time", "prevent-next-update", "use-seconds", "max", "min", "onUpdate", "onChangePreventUpdate"]))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["name"])
            ],
            34
            /* CLASS, NEED_HYDRATION */
          )
        ],
        2
        /* CLASS */
      ),
      e.$slots.actions ? (h(), P(
        "div",
        {
          key: 0,
          class: p(e.n("actions"))
        },
        [
          L(e.$slots, "actions")
        ],
        2
        /* CLASS */
      )) : X("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const rh = x({
  name: b8,
  components: { Clock: g8 },
  props: xm,
  setup(e) {
    const n = k(null), o = k(null), t = k(null), r = k(!1), a = k(!1), i = k(!1), l = k(!1), s = k(!1), u = k(!1), c = k(!1), d = k(0), f = k(0), v = k(), y = k("hour"), m = k("am"), b = k({
      hour: "00",
      minute: "00",
      second: "00"
    }), C = Qe({
      x: 0,
      y: 0
    }), w = Qe({
      x: [],
      y: []
    }), g = B(() => y.value === "hour" ? v.value : y.value === "minute" ? d.value : f.value), { t: $ } = ao();
    de(
      () => e.modelValue,
      (ie) => {
        if (ie) {
          const { hour: U, minute: J, second: ae } = zn(ie), V = se().hour(U).format("hh"), W = se().hour(U).format("HH"), Q = se().minute(J).format("mm"), ke = se().second(ae).format("ss");
          v.value = (V === "12" ? 0 : F(V)) * 30, d.value = F(Q) * 6, f.value = F(ke) * 6, b.value = M(ie), e.format !== "24hr" && (m.value = Fo(`${U}`, 2, "0") === W && Sn.includes(W) ? "pm" : "am"), r.value = e.format === "24hr" && Sn.includes(W);
        }
      },
      { immediate: !0 }
    );
    function O(ie) {
      S(e["onUpdate:modelValue"], ie), S(e.onChange, ie);
    }
    function z(ie) {
      return ie * 57.29577951308232;
    }
    function A(ie) {
      l.value = !1, c.value = !1, y.value = ie;
    }
    function T(ie) {
      const { disableHour: U } = t.value, J = Fn.findIndex((W) => F(W) === F(b.value.hour)), ae = ie === "am" ? Fn : Sn;
      return [...ae.slice(J), ...ae.slice(0, J)].find((W, Q) => (a.value = Q !== 0, !U.includes(W)));
    }
    function E(ie) {
      if (e.readonly)
        return;
      m.value = ie;
      const U = T(ie);
      if (!U)
        return;
      const J = e.useSeconds ? `:${b.value.second}` : "", ae = `${Fo(U, 2, "0")}:${b.value.minute}${J}`;
      O(ae);
    }
    function D(ie, U) {
      const J = ie >= w.x[0] && ie <= w.x[1], ae = U >= w.y[0] && U <= w.y[1];
      return J && ae;
    }
    function M(ie) {
      const U = e.format === "24hr" ? "HH" : "hh", { hour: J, minute: ae, second: V } = zn(ie);
      return {
        hour: se().hour(J).format(U),
        minute: se().minute(ae).format("mm"),
        second: se().second(V).format("ss")
      };
    }
    function H(ie) {
      const U = ie / 30;
      return U >= 0 ? U : U + 12;
    }
    function Y() {
      const { width: ie, height: U } = t.value.getSize(), J = C.x - ie / 2 - 8, ae = C.x + ie / 2 + 8, V = C.y - U / 2 - 8, W = C.y + U / 2 + 8;
      return {
        rangeXMin: J,
        rangeXMax: ae,
        rangeYMin: V,
        rangeYMax: W
      };
    }
    function N(ie, U, J) {
      const { disableHour: ae } = t.value;
      i.value = D(ie, U);
      const V = Math.round(J / 30) * 30 + 90, W = H(V), Q = r.value ? Fn[W] : Sn[W];
      if (ae.includes(Q) || (r.value = e.format === "24hr" ? D(ie, U) : !1), r.value !== i.value)
        return;
      const ke = r.value || m.value === "pm" ? Sn[W] : Fn[W];
      u.value = ae.includes(ke), !u.value && (v.value = V, l.value = !0);
    }
    function q(ie) {
      const { disableHour: U } = t.value, J = Math.round(ie / 6) * 6 + 90, V = {
        time: J / 6 >= 0 ? J / 6 : J / 6 + 60,
        format: e.format,
        ampm: m.value,
        hour: b.value.hour,
        max: e.max,
        min: e.min,
        disableHour: U,
        allowedTime: e.allowedTime
      };
      c.value = nh(V), !c.value && (d.value = J, s.value = !0);
    }
    function j(ie) {
      const { disableHour: U } = t.value, J = Math.round(ie / 6) * 6 + 90, V = {
        time: J / 6 >= 0 ? J / 6 : J / 6 + 60,
        format: e.format,
        ampm: m.value,
        hour: b.value.hour,
        minute: F(b.value.minute),
        max: e.max,
        min: e.min,
        disableHour: U,
        allowedTime: e.allowedTime
      };
      oh(V) || (f.value = J);
    }
    function ce() {
      const { left: ie, top: U, width: J, height: ae } = an(n.value);
      if (C.x = ie + J / 2, C.y = U + ae / 2, y.value === "hour" && e.format === "24hr") {
        const { rangeXMin: V, rangeXMax: W, rangeYMin: Q, rangeYMax: ke } = Y();
        w.x = [V, W], w.y = [Q, ke];
      }
    }
    function _(ie) {
      if (Re(ie), e.readonly)
        return;
      ce();
      const { clientX: U, clientY: J } = ie.touches[0], ae = U - C.x, V = J - C.y, W = Math.round(z(Math.atan2(V, ae)));
      y.value === "hour" ? N(U, J, W) : y.value === "minute" ? q(W) : j(W);
    }
    function pe() {
      if (!e.readonly) {
        if (y.value === "hour" && l.value) {
          y.value = "minute";
          return;
        }
        y.value === "minute" && e.useSeconds && s.value && (y.value = "second");
      }
    }
    function ye() {
      a.value = !1;
    }
    return {
      getRad: g,
      time: b,
      container: n,
      inner: t,
      picker: o,
      isInner: r,
      type: y,
      ampm: m,
      isPreventNextUpdate: a,
      n: y8,
      classes: k8,
      t: rn,
      pt: $,
      moveHand: _,
      checkPanel: A,
      checkAmpm: E,
      end: pe,
      update: O,
      changePreventUpdate: ye,
      formatElevation: fn
    };
  }
});
rh.render = $8;
var $i = rh;
te($i);
ue($i, xm);
const TT = $i;
var ns = $i;
const ah = {
  modelValue: {
    type: Array,
    default: () => []
  },
  accept: {
    type: String,
    default: "image/*"
  },
  capture: {
    type: [String, Boolean],
    default: void 0
  },
  multiple: Boolean,
  readonly: Boolean,
  disabled: Boolean,
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  resolveType: {
    type: String,
    default: "default"
  },
  removable: {
    type: Boolean,
    default: !0
  },
  maxlength: [Number, String],
  maxsize: [Number, String],
  previewed: {
    type: Boolean,
    default: !0
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onRemove"]
  },
  rules: Array,
  hideList: Boolean,
  preventDefaultPreview: Boolean,
  onClickAction: R(),
  onBeforeFilter: R(),
  onBeforeRead: R(),
  onAfterRead: R(),
  onBeforeRemove: R(),
  onRemove: R(),
  onOversize: R(),
  onPreview: R(),
  "onUpdate:modelValue": R()
};
var vr = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: w8, n: C8, classes: S8 } = ee("uploader");
let P8 = 0;
const z8 = ["onClick"], O8 = ["onClick"], T8 = ["src", "alt"], E8 = ["tabindex"], D8 = ["multiple", "accept", "capture", "disabled"], B8 = ["src"];
function I8(e, n) {
  const o = ne("var-icon"), t = ne("var-hover-overlay"), r = ne("var-form-details"), a = ne("var-popup"), i = je("ripple"), l = je("hover");
  return h(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      I(
        "div",
        {
          class: p(e.n("file-list"))
        },
        [
          (h(!0), P(
            Ae,
            null,
            Ze(e.files, (s) => Me((h(), P("div", {
              class: p(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
              key: s.id,
              onClick: (u) => e.preview(s)
            }, [
              I(
                "div",
                {
                  class: p(e.n("file-name"))
                },
                re(s.name || s.url),
                3
                /* TEXT, CLASS */
              ),
              e.removable ? (h(), P("div", {
                key: 0,
                class: p(e.n("file-close")),
                onClick: An((u) => e.handleRemove(s), ["stop"])
              }, [
                G(o, {
                  class: p(e.n("file-close-icon")),
                  "var-uploader-cover": "",
                  name: "delete"
                }, null, 8, ["class"])
              ], 10, O8)) : X("v-if", !0),
              s.cover ? (h(), P("img", {
                key: 1,
                role: "img",
                class: p(e.n("file-cover")),
                style: K({ objectFit: s.fit }),
                src: s.cover,
                alt: s.name
              }, null, 14, T8)) : X("v-if", !0),
              I(
                "div",
                {
                  class: p(e.n("file-indicator"))
                },
                [
                  I(
                    "div",
                    {
                      class: p(
                        e.classes(e.n("progress"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")])
                      ),
                      style: K({ width: s.state === "success" || s.state === "error" ? "100%" : `${s.progress}%` })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  )
                ],
                2
                /* CLASS */
              )
            ], 10, z8)), [
              [i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple }]
            ])),
            128
            /* KEYED_FRAGMENT */
          )),
          !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Me((h(), P("div", {
            key: 0,
            ref: "actionRef",
            class: p(
              e.classes(
                e.n("--outline-none"),
                [!e.$slots.default, `${e.n("action")} ${e.formatElevation(e.elevation, 2)}`],
                [e.disabled || e.formDisabled, e.n("--disabled")]
              )
            ),
            tabindex: e.disabled || e.formDisabled ? void 0 : "0",
            onClick: n[2] || (n[2] = (...s) => e.handleActionClick && e.handleActionClick(...s)),
            onFocus: n[3] || (n[3] = (s) => e.isFocusing = !0),
            onBlur: n[4] || (n[4] = (s) => e.isFocusing = !1)
          }, [
            I("input", {
              ref: "input",
              type: "file",
              class: p(e.n("action-input")),
              multiple: e.multiple,
              accept: e.accept,
              capture: e.capture,
              disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
              onChange: n[0] || (n[0] = (...s) => e.handleChange && e.handleChange(...s)),
              onClick: n[1] || (n[1] = An(() => {
              }, ["stop"]))
            }, null, 42, D8),
            L(e.$slots, "default", {}, () => [
              G(o, {
                class: p(e.n("action-icon")),
                "var-uploader-cover": "",
                name: "plus"
              }, null, 8, ["class"]),
              G(t, {
                hovering: e.hovering && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly,
                focusing: e.isFocusing && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly
              }, null, 8, ["hovering", "focusing"])
            ])
          ], 42, E8)), [
            [i, {
              disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || !!e.$slots.default
            }],
            [l, e.handleHovering, "desktop"]
          ]) : X("v-if", !0)
        ],
        2
        /* CLASS */
      ),
      G(r, {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      }, Et({
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots["extra-message"] ? {
          name: "extra-message",
          fn: fe(() => [
            L(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"]),
      G(a, {
        class: p(e.n("preview")),
        "var-uploader-cover": "",
        position: "center",
        show: e.showPreview,
        "onUpdate:show": n[5] || (n[5] = (s) => e.showPreview = s),
        onClosed: n[6] || (n[6] = (s) => e.currentPreview = null)
      }, {
        default: fe(() => {
          var s, u;
          return [
            e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (h(), P("video", {
              key: 0,
              class: p(e.n("preview-video")),
              playsinline: "true",
              "webkit-playsinline": "true",
              "x5-playsinline": "true",
              "x5-video-player-type": "h5",
              "x5-video-player-fullscreen": "false",
              controls: "",
              src: (u = e.currentPreview) == null ? void 0 : u.url
            }, null, 10, B8)) : X("v-if", !0)
          ];
        }),
        _: 1
        /* STABLE */
      }, 8, ["class", "show"])
    ],
    2
    /* CLASS */
  );
}
const ih = x({
  name: w8,
  directives: { Ripple: tn, Hover: Tn },
  components: {
    VarIcon: Je,
    VarPopup: Po,
    VarFormDetails: En,
    VarHoverOverlay: Ln
  },
  props: ah,
  setup(e) {
    const n = k(!1), o = k(null), t = k(null), r = k(!1), a = k(null), i = B(() => {
      const {
        maxlength: U,
        modelValue: { length: J }
      } = e;
      return On(U) ? `${J} / ${U}` : "";
    }), { form: l, bindForm: s } = jn(), {
      errorMessage: u,
      validateWithTrigger: c,
      validate: d,
      // expose
      resetValidation: f
    } = Yn(), { hovering: v, handleHovering: y } = Jn(), m = B(() => {
      const { modelValue: U, hideList: J } = e;
      return J ? [] : U;
    });
    let b = !1;
    const C = {
      getSuccess: N,
      getError: q,
      getLoading: j
    };
    S(s, {
      validate: ye,
      resetValidation: f,
      reset: ie
    }), We(() => window, "keydown", g), We(() => window, "keyup", $), de(
      () => e.modelValue,
      () => {
        !b && pe("onChange"), b = !1;
      },
      { deep: !0 }
    );
    function g(U) {
      n.value && ((U.key === " " || U.key === "Enter") && U.preventDefault(), U.key === "Enter" && o.value.click());
    }
    function $(U) {
      !n.value || U.key !== " " || (U.preventDefault(), o.value.click());
    }
    function O(U) {
      const { disabled: J, previewed: ae, preventDefaultPreview: V, onPreview: W } = e;
      if (l != null && l.disabled.value || J || !ae || (S(W, Qe(U)), V))
        return;
      const { url: Q } = U;
      if (cu(Q)) {
        Ft(Q);
        return;
      }
      du(Q) && (a.value = U, r.value = !0);
    }
    function z(U) {
      return {
        id: P8++,
        url: "",
        cover: "",
        name: U.name,
        file: U,
        progress: 0
      };
    }
    function A(U) {
      const J = U.target, { files: ae } = J;
      return Array.from(ae);
    }
    function T(U) {
      return vr(this, null, function* () {
        const J = U.file;
        if (e.resolveType === "default" && J.type.startsWith("image") || e.resolveType === "data-url") {
          const V = yield Nh(J);
          U.cover = V, U.url = V;
        }
        return U;
      });
    }
    function E(U) {
      return U.map(T);
    }
    function D(U) {
      const { onBeforeRead: J } = e;
      return U.map(
        (ae) => new Promise((V) => {
          J || V({
            valid: !0,
            varFile: ae
          });
          const W = Vo(S(J, Qe(ae)));
          Promise.all(W).then((Q) => {
            V({
              valid: Q.every(Boolean),
              varFile: ae
            });
          });
        })
      );
    }
    function M(U) {
      return vr(this, null, function* () {
        const { maxsize: J, maxlength: ae, modelValue: V, onOversize: W, onAfterRead: Q, onBeforeFilter: ke, readonly: Ce, disabled: De } = e;
        if (l != null && l.disabled.value || l != null && l.readonly.value || De || Ce)
          return;
        const Xe = ($e) => $e.filter((Ne) => Ne.file.size > F(J) ? (S(W, Qe(Ne)), !1) : !0), ln = ($e) => {
          const Ne = Math.min($e.length, F(ae) - V.length);
          return $e.slice(0, Ne);
        }, ve = ($e) => vr(this, null, function* () {
          if (!ke)
            return $e;
          const Ne = Vo(ke);
          for (const xe of Ne)
            $e = yield xe($e);
          return $e;
        });
        let Ve = A(U).map(z);
        Ve = yield ve(Ve), Ve = J != null ? Xe(Ve) : Ve, Ve = ae != null ? ln(Ve) : Ve;
        const nn = yield Promise.all(E(Ve)), me = (yield Promise.all(D(nn))).filter(({ valid: $e }) => $e).map(({ varFile: $e }) => $e);
        S(e["onUpdate:modelValue"], [...V, ...me]), U.target.value = "", me.forEach(($e) => S(Q, Qe($e)));
      });
    }
    function H(U) {
      return vr(this, null, function* () {
        const { disabled: J, readonly: ae, modelValue: V, onBeforeRemove: W, onRemove: Q } = e;
        if (l != null && l.disabled.value || l != null && l.readonly.value || J || ae)
          return;
        if (W) {
          const Ce = Vo(S(W, Qe(U)));
          if ((yield Promise.all(Ce)).some((De) => !De))
            return;
        }
        const ke = V.filter((Ce) => Ce !== U);
        S(Q, Qe(U)), pe("onRemove"), S(e["onUpdate:modelValue"], ke);
      });
    }
    function Y(U) {
      if (!(l != null && l.disabled.value || e.disabled)) {
        if (e.onClickAction) {
          S(e.onClickAction, ce, U);
          return;
        }
        ce();
      }
    }
    function N() {
      return e.modelValue.filter((U) => U.state === "success");
    }
    function q() {
      return e.modelValue.filter((U) => U.state === "error");
    }
    function j() {
      return e.modelValue.filter((U) => U.state === "loading");
    }
    function ce() {
      t.value.click();
    }
    function _() {
      a.value = null, r.value = !1, Ft.close();
    }
    function pe(U) {
      Ke(() => {
        const { validateTrigger: J, rules: ae, modelValue: V } = e;
        c(J, U, ae, V, C);
      });
    }
    function ye() {
      return d(e.rules, e.modelValue, C);
    }
    function ie() {
      b = !0, S(e["onUpdate:modelValue"], []), f();
    }
    return {
      input: t,
      actionRef: o,
      files: m,
      showPreview: r,
      currentPreview: a,
      errorMessage: u,
      maxlengthText: i,
      hovering: v,
      isFocusing: n,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: C8,
      classes: S8,
      formatElevation: fn,
      toNumber: F,
      handleHovering: y,
      isHTMLSupportVideo: du,
      isHTMLSupportImage: cu,
      preview: O,
      handleChange: M,
      handleRemove: H,
      getSuccess: N,
      getError: q,
      getLoading: j,
      validate: ye,
      resetValidation: f,
      reset: ie,
      chooseFile: ce,
      closePreview: _,
      handleActionClick: Y,
      toSizeUnit: Oe
    };
  }
});
ih.render = I8;
var wi = ih;
te(wi);
ue(wi, ah);
const ET = wi;
var os = wi;
const lh = {
  width: {
    type: Number,
    default: 100
  },
  height: {
    type: Number,
    default: 100
  },
  content: String,
  image: String,
  rotate: {
    type: Number,
    default: -22
  },
  offsetX: {
    type: Number,
    default: 0
  },
  offsetY: {
    type: Number,
    default: 0
  },
  gapX: {
    type: Number,
    default: 0
  },
  gapY: {
    type: Number,
    default: 0
  },
  zIndex: {
    type: [Number, String],
    default: 10
  },
  opacity: {
    type: [Number, String],
    default: 0.5
  },
  fullscreen: Boolean,
  font: {
    type: Object,
    default: () => ({
      fontStyle: "normal",
      fontVariant: "normal",
      fontWeight: "normal",
      fontSize: 14
    })
  }
};
var M8 = Object.defineProperty, N8 = Object.defineProperties, A8 = Object.getOwnPropertyDescriptors, pd = Object.getOwnPropertySymbols, V8 = Object.prototype.hasOwnProperty, L8 = Object.prototype.propertyIsEnumerable, vd = (e, n, o) => n in e ? M8(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, R8 = (e, n) => {
  for (var o in n || (n = {}))
    V8.call(n, o) && vd(e, o, n[o]);
  if (pd)
    for (var o of pd(n))
      L8.call(n, o) && vd(e, o, n[o]);
  return e;
}, F8 = (e, n) => N8(e, A8(n)), md = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: U8, n: H8, classes: Y8 } = ee("watermark"), j8 = { ref: "svgRef" }, W8 = ["viewBox", "width", "height"], K8 = ["width", "height"], q8 = ["href", "xlink:href", "x", "y", "width", "height"];
function G8(e, n) {
  return h(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      L(e.$slots, "default"),
      (h(), Pe(no, {
        to: "body",
        disabled: !e.fullscreen
      }, [
        I(
          "div",
          {
            ref: "containerRef",
            class: p(e.classes(e.n("container"), [e.fullscreen, e.n("--fullscreen")])),
            style: K({
              backgroundImage: `url(${e.watermarkUrl})`,
              zIndex: e.zIndex
            })
          },
          [
            Me(I(
              "div",
              j8,
              [
                (h(), P("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  viewBox: `0 0 ${e.width + e.gapX} ${e.height + e.gapY}`,
                  width: `${e.width + e.gapX}`,
                  height: `${e.height + e.gapY}`,
                  style: K({
                    padding: `0 ${e.gapX}px ${e.gapY}px 0`,
                    opacity: e.opacity
                  })
                }, [
                  e.showContent() ? (h(), P("foreignObject", {
                    key: 0,
                    x: "0",
                    y: "0",
                    width: e.width,
                    height: e.height
                  }, [
                    I(
                      "div",
                      {
                        xmlns: "http://www.w3.org/1999/xhtml",
                        style: K({
                          transform: `translate(${e.offsetX}px, ${e.offsetY}px) rotate(${e.rotate}deg)`,
                          transformOrigin: "center"
                        })
                      },
                      [
                        L(e.$slots, "content", {}, () => [
                          I(
                            "span",
                            {
                              style: K(F8(R8({}, e.font), { fontSize: `${e.font.fontSize}px`, color: e.textColor }))
                            },
                            re(e.content),
                            5
                            /* TEXT, STYLE */
                          )
                        ])
                      ],
                      4
                      /* STYLE */
                    )
                  ], 8, K8)) : X("v-if", !0),
                  !e.$slots.content && e.image ? (h(), P("image", {
                    key: 1,
                    href: e.imageUrl,
                    "xlink:href": e.imageUrl,
                    x: e.offsetX,
                    y: e.offsetY,
                    width: e.width,
                    height: e.height,
                    style: K({
                      transform: `rotate(${e.rotate}deg)`,
                      transformOrigin: "center"
                    })
                  }, null, 12, q8)) : X("v-if", !0)
                ], 12, W8))
              ],
              512
              /* NEED_PATCH */
            ), [
              [Xn, !1]
            ])
          ],
          6
          /* CLASS, STYLE */
        )
      ], 8, ["disabled"]))
    ],
    2
    /* CLASS */
  );
}
const sh = x({
  name: U8,
  props: lh,
  setup(e, { slots: n }) {
    const o = k(""), t = k(""), r = k(""), a = k(null), i = k(null);
    de(
      () => [
        e.image,
        e.font,
        e.content,
        e.height,
        e.width,
        e.rotate,
        e.gapX,
        e.gapY,
        e.offsetX,
        e.offsetY,
        e.opacity
      ],
      d,
      {
        deep: !0
      }
    ), Yo(d), jt(c);
    function l() {
      return !!(n.content || e.content && !e.image);
    }
    function s() {
      return md(this, null, function* () {
        return new Promise((f) => {
          const v = document.createElement("canvas"), y = v.getContext("2d"), m = new Image();
          m.crossOrigin = "anonymous", m.referrerPolicy = "no-referrer", m.src = e.image, m.onload = () => {
            v.width = m.width, v.height = m.height, y.drawImage(m, 0, 0), f(v.toDataURL());
          };
        });
      });
    }
    function u(f) {
      const v = new Blob([f], {
        type: "image/svg+xml"
      });
      return URL.createObjectURL(v);
    }
    function c() {
      o.value && URL.revokeObjectURL(o.value);
    }
    function d() {
      return md(this, null, function* () {
        r.value = qo(i.value).color, e.image && (t.value = yield s()), yield Ke(), c(), o.value = u(a.value.innerHTML);
      });
    }
    return {
      svgRef: a,
      containerRef: i,
      watermarkUrl: o,
      imageUrl: t,
      textColor: r,
      n: H8,
      classes: Y8,
      showContent: l,
      resize: d
    };
  }
});
sh.render = G8;
var Ci = sh;
te(Ci);
ue(Ci, lh);
const DT = Ci;
var ts = Ci;
const X8 = "3.3.6";
function Z8(e) {
  Li.install && e.use(Li), Ri.install && e.use(Ri), Hi.install && e.use(Hi), Yi.install && e.use(Yi), ji.install && e.use(ji), Or.install && e.use(Or), Wi.install && e.use(Wi), Ki.install && e.use(Ki), qi.install && e.use(qi), Gi.install && e.use(Gi), Pn.install && e.use(Pn), Xi.install && e.use(Xi), Zi.install && e.use(Zi), Ji.install && e.use(Ji), lt.install && e.use(lt), Qi.install && e.use(Qi), Tr.install && e.use(Tr), _i.install && e.use(_i), xi.install && e.use(xi), el.install && e.use(el), nl.install && e.use(nl), Nn.install && e.use(Nn), al.install && e.use(al), dl.install && e.use(dl), pl.install && e.use(pl), vl.install && e.use(vl), ml.install && e.use(ml), Nr.install && e.use(Nr), bl.install && e.use(bl), yl.install && e.use(yl), Vt.install && e.use(Vt), kl.install && e.use(kl), $l.install && e.use($l), En.install && e.use(En), Tn.install && e.use(Tn), Ln.install && e.use(Ln), Je.install && e.use(Je), wl.install && e.use(wl), Ft.install && e.use(Ft), Cl.install && e.use(Cl), Sl.install && e.use(Sl), Vr.install && e.use(Vr), It.install && e.use(It), Pl.install && e.use(Pl), zl.install && e.use(zl), it.install && e.use(it), Ol.install && e.use(Ol), Ai.install && e.use(Ai), Tl.install && e.use(Tl), Ut.install && e.use(Ut), Lr.install && e.use(Lr), Rr.install && e.use(Rr), Fr.install && e.use(Fr), El.install && e.use(El), Dl.install && e.use(Dl), Bl.install && e.use(Bl), Il.install && e.use(Il), Po.install && e.use(Po), Ml.install && e.use(Ml), Nl.install && e.use(Nl), Ur.install && e.use(Ur), Al.install && e.use(Al), Vl.install && e.use(Vl), Ll.install && e.use(Ll), tn.install && e.use(tn), Rl.install && e.use(Rl), Fl.install && e.use(Fl), Ul.install && e.use(Ul), Hl.install && e.use(Hl), jl.install && e.use(jl), Wl.install && e.use(Wl), Kl.install && e.use(Kl), ql.install && e.use(ql), ct.install && e.use(ct), Gl.install && e.use(Gl), Lt.install && e.use(Lt), Rt.install && e.use(Rt), Xl.install && e.use(Xl), Zl.install && e.use(Zl), Jl.install && e.use(Jl), Ql.install && e.use(Ql), _l.install && e.use(_l), xl.install && e.use(xl), es.install && e.use(es), ns.install && e.use(ns), Ar.install && e.use(Ar), os.install && e.use(os), ts.install && e.use(ts);
}
const BT = {
  version: X8,
  install: Z8,
  ActionSheet: Li,
  AppBar: Ri,
  Avatar: Hi,
  AvatarGroup: Yi,
  BackTop: ji,
  Badge: Or,
  BottomNavigation: Wi,
  BottomNavigationItem: Ki,
  Breadcrumb: qi,
  Breadcrumbs: Gi,
  Button: Pn,
  ButtonGroup: Xi,
  Card: Zi,
  Cell: Ji,
  Checkbox: lt,
  CheckboxGroup: Qi,
  Chip: Tr,
  Col: _i,
  Collapse: xi,
  CollapseItem: el,
  CollapseTransition: nl,
  Context: Nn,
  Countdown: al,
  Counter: dl,
  DatePicker: pl,
  Dialog: vl,
  Divider: ml,
  Drag: Nr,
  Ellipsis: bl,
  Fab: yl,
  FieldDecorator: Vt,
  FloatingPanel: kl,
  Form: $l,
  FormDetails: En,
  Hover: Tn,
  HoverOverlay: Ln,
  Icon: Je,
  Image: wl,
  ImagePreview: Ft,
  IndexAnchor: Cl,
  IndexBar: Sl,
  Input: Vr,
  Lazy: It,
  Link: Pl,
  List: zl,
  Loading: it,
  LoadingBar: Ol,
  Locale: Ai,
  LocaleProvider: Tl,
  Menu: Ut,
  MenuOption: Lr,
  MenuSelect: Rr,
  Option: Fr,
  Overlay: El,
  Pagination: Dl,
  Paper: Bl,
  Picker: Il,
  Popup: Po,
  Progress: Ml,
  PullRefresh: Nl,
  Radio: Ur,
  RadioGroup: Al,
  Rate: Vl,
  Result: Ll,
  Ripple: tn,
  Row: Rl,
  Select: Fl,
  Skeleton: Ul,
  Slider: Hl,
  Snackbar: jl,
  Space: Wl,
  Step: Kl,
  Steps: ql,
  Sticky: ct,
  StyleProvider: Gl,
  Swipe: Lt,
  SwipeItem: Rt,
  Switch: Xl,
  Tab: Zl,
  TabItem: Jl,
  Table: Ql,
  Tabs: _l,
  TabsItems: xl,
  Themes: es,
  TimePicker: ns,
  Tooltip: Ar,
  Uploader: os,
  Watermark: ts
};
export {
  Li as ActionSheet,
  Ri as AppBar,
  Hi as Avatar,
  Yi as AvatarGroup,
  ji as BackTop,
  Or as Badge,
  Wi as BottomNavigation,
  Ki as BottomNavigationItem,
  qi as Breadcrumb,
  Gi as Breadcrumbs,
  Pn as Button,
  Xi as ButtonGroup,
  Zi as Card,
  Ji as Cell,
  lt as Checkbox,
  Qi as CheckboxGroup,
  Tr as Chip,
  _i as Col,
  xi as Collapse,
  el as CollapseItem,
  nl as CollapseTransition,
  Nn as Context,
  al as Countdown,
  dl as Counter,
  pl as DatePicker,
  vl as Dialog,
  ml as Divider,
  Nr as Drag,
  bl as Ellipsis,
  yl as Fab,
  Vt as FieldDecorator,
  kl as FloatingPanel,
  $l as Form,
  En as FormDetails,
  Tn as Hover,
  Ln as HoverOverlay,
  Je as Icon,
  wl as Image,
  Ft as ImagePreview,
  Cl as IndexAnchor,
  Sl as IndexBar,
  Vr as Input,
  It as Lazy,
  Pl as Link,
  zl as List,
  it as Loading,
  Ol as LoadingBar,
  Ai as Locale,
  Tl as LocaleProvider,
  Ut as Menu,
  Lr as MenuOption,
  Rr as MenuSelect,
  Fr as Option,
  El as Overlay,
  Ui as PIXEL,
  Dl as Pagination,
  Bl as Paper,
  Il as Picker,
  Po as Popup,
  Ml as Progress,
  Nl as PullRefresh,
  Ur as Radio,
  Al as RadioGroup,
  Vl as Rate,
  Ll as Result,
  tn as Ripple,
  Rl as Row,
  Em as SNACKBAR_TYPE,
  Fl as Select,
  Ul as Skeleton,
  Hl as Slider,
  jl as Snackbar,
  Wl as Space,
  Kl as Step,
  ql as Steps,
  ct as Sticky,
  Gl as StyleProvider,
  Lt as Swipe,
  Rt as SwipeItem,
  Xl as Switch,
  Zl as Tab,
  Jl as TabItem,
  Ql as Table,
  _l as Tabs,
  xl as TabsItems,
  es as Themes,
  ns as TimePicker,
  Ar as Tooltip,
  os as Uploader,
  ts as Watermark,
  r5 as _ActionSheetComponent,
  a5 as _AppBarComponent,
  l5 as _AvatarComponent,
  s5 as _AvatarGroupComponent,
  d5 as _BackTopComponent,
  f5 as _BadgeComponent,
  p5 as _BottomNavigationComponent,
  v5 as _BottomNavigationItemComponent,
  m5 as _BreadcrumbComponent,
  h5 as _BreadcrumbsComponent,
  c5 as _ButtonComponent,
  g5 as _ButtonGroupComponent,
  b5 as _CardComponent,
  y5 as _CellComponent,
  $5 as _CheckboxComponent,
  w5 as _CheckboxGroupComponent,
  C5 as _ChipComponent,
  S5 as _ColComponent,
  P5 as _CollapseComponent,
  z5 as _CollapseItemComponent,
  O5 as _CollapseTransitionComponent,
  Q8 as _ContextComponent,
  T5 as _CountdownComponent,
  E5 as _CounterComponent,
  B5 as _DatePickerComponent,
  I5 as _DialogComponent,
  M5 as _DividerComponent,
  N5 as _DragComponent,
  V5 as _EllipsisComponent,
  L5 as _FabComponent,
  R5 as _FieldDecoratorComponent,
  F5 as _FloatingPanelComponent,
  U5 as _FormComponent,
  k5 as _FormDetailsComponent,
  o5 as _HoverComponent,
  n5 as _HoverOverlayComponent,
  e5 as _IconComponent,
  H5 as _ImageComponent,
  W5 as _ImagePreviewComponent,
  K5 as _IndexAnchorComponent,
  q5 as _IndexBarComponent,
  G5 as _InputComponent,
  i5 as _LazyComponent,
  X5 as _LinkComponent,
  Z5 as _ListComponent,
  J5 as _LoadingBarComponent,
  u5 as _LoadingComponent,
  t5 as _LocaleComponent,
  Q5 as _LocaleProviderComponent,
  _5 as _MenuComponent,
  x5 as _MenuOptionComponent,
  eT as _MenuSelectComponent,
  nT as _OptionComponent,
  oT as _OverlayComponent,
  tT as _PaginationComponent,
  rT as _PaperComponent,
  aT as _PickerComponent,
  x8 as _PopupComponent,
  iT as _ProgressComponent,
  lT as _PullRefreshComponent,
  sT as _RadioComponent,
  uT as _RadioGroupComponent,
  cT as _RateComponent,
  dT as _ResultComponent,
  _8 as _RippleComponent,
  fT as _RowComponent,
  pT as _SelectComponent,
  vT as _SkeletonComponent,
  mT as _SliderComponent,
  hT as _SnackbarComponent,
  gT as _SpaceComponent,
  bT as _StepComponent,
  yT as _StepsComponent,
  D5 as _StickyComponent,
  kT as _StyleProviderComponent,
  Y5 as _SwipeComponent,
  j5 as _SwipeItemComponent,
  $T as _SwitchComponent,
  wT as _TabComponent,
  CT as _TabItemComponent,
  ST as _TableComponent,
  PT as _TabsComponent,
  zT as _TabsItemsComponent,
  OT as _ThemesComponent,
  TT as _TimePickerComponent,
  A5 as _TooltipComponent,
  ET as _UploaderComponent,
  DT as _WatermarkComponent,
  Qd as actionSheetProps,
  vs as add,
  af as appBarProps,
  hf as avatarGroupProps,
  vf as avatarProps,
  wf as backTopProps,
  Sf as badgeProps,
  Ef as bottomNavigationItemProps,
  zf as bottomNavigationProps,
  Bf as breadcrumbProps,
  Nf as breadcrumbsProps,
  Vf as buttonGroupProps,
  yf as buttonProps,
  Rf as cardProps,
  Uf as cellProps,
  Xf as checkboxGroupProps,
  Wf as checkboxProps,
  Jf as chipProps,
  _f as colProps,
  rp as collapseItemProps,
  op as collapseProps,
  lp as collapseTransitionProps,
  up as countdownProps,
  wp as counterProps,
  of as currentMessage,
  Bp as datePickerProps,
  BT as default,
  cn as defaultLazyOptions,
  Rp as dialogProps,
  Up as dividerProps,
  Yp as dragProps,
  ev as ellipsisProps,
  _d as enUS,
  ef as faIR,
  ov as fabProps,
  Na as fieldDecoratorProps,
  Yf as formDetailsProps,
  iv as formProps,
  Hd as hoverOverlayProps,
  on as iconProps,
  uf as imageCache,
  pv as imagePreviewProps,
  sv as imageProps,
  hv as indexAnchorProps,
  bv as indexBarProps,
  kv as inputProps,
  Z8 as install,
  wv as linkProps,
  Sv as listProps,
  mS as loadingBarProps,
  lo as loadingProps,
  Rv as menuOptionProps,
  Ns as menuProps,
  Uv as menuSelectProps,
  tf as merge,
  nf as messages,
  Wv as optionProps,
  qv as overlayProps,
  Gv as paginationProps,
  Zv as paperProps,
  Qv as pickerProps,
  gt as popupProps,
  xv as progressProps,
  nm as pullRefreshProps,
  im as radioGroupProps,
  tm as radioProps,
  sm as rateProps,
  hm as resultProps,
  bm as rowProps,
  km as selectProps,
  wm as skeletonProps,
  Sm as sliderProps,
  As as snackbarProps,
  Im as spaceProps,
  Mm as stepProps,
  Vm as stepsProps,
  Pt as stickyProps,
  Rm as styleProviderProps,
  Ds as swipeProps,
  Um as switchProps,
  rn as t,
  Km as tabItemProps,
  Ym as tabProps,
  Gm as tableProps,
  Qm as tabsItemsProps,
  Zm as tabsProps,
  xm as timePickerProps,
  _p as tooltipProps,
  ah as uploaderProps,
  ms as use,
  Jn as useHoverOverlay,
  ps as useLocale,
  X8 as version,
  lh as watermarkProps,
  ds as zhCN,
  xd as zhHK,
  fs as zhTW
};
