// OpenLayers 3. see http://ol3js.org/
(function() {
  function aa() {
    return function() {}
  }

  function k(a) {
    return function() {
      return this[a]
    }
  }

  function ba(a) {
    return function() {
      return a
    }
  }
  var l, ca = ca || {},
    t = this;

  function da() {}

  function ea(a) {
    a.Fa = function() {
      return a.Pd ? a.Pd : a.Pd = new a
    }
  }

  function fa(a) {
    var b = typeof a;
    if ("object" == b)
      if (a) {
        if (a instanceof Array) return "array";
        if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c) return "object";
        if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
        if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
      } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
  }

  function u(a) {
    return void 0 !== a
  }

  function ga(a) {
    return null === a
  }

  function ha(a) {
    return "array" == fa(a)
  }

  function ia(a) {
    var b = fa(a);
    return "array" == b || "object" == b && "number" == typeof a.length
  }

  function ka(a) {
    return "string" == typeof a
  }

  function la(a) {
    return "number" == typeof a
  }

  function ma(a) {
    return "function" == fa(a)
  }

  function oa(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
  }

  function v(a) {
    return a[pa] || (a[pa] = ++qa)
  }
  var pa = "closure_uid_" + (1E9 * Math.random() >>> 0),
    qa = 0;

  function ra(a, b, c) {
    return a.call.apply(a.bind, arguments)
  }

  function ua(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function() {
        var c = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c, d);
        return a.apply(b, c)
      }
    }
    return function() {
      return a.apply(b, arguments)
    }
  }

  function y(a, b, c) {
    y = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ra : ua;
    return y.apply(null, arguments)
  }

  function va(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
      var b = Array.prototype.slice.call(arguments);
      b.unshift.apply(b, c);
      return a.apply(this, b)
    }
  }
  var wa = Date.now || function() {
    return +new Date
  };

  function C(a, b) {
    var c = a.split("."),
      d = t;
    c[0] in d || !d.execScript || d.execScript("var " + c[0]);
    for (var e; c.length && (e = c.shift());) c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
  }

  function E(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.B = b.prototype;
    a.prototype = new c
  };

  function xa(a) {
    Error.captureStackTrace ? Error.captureStackTrace(this, xa) : this.stack = Error().stack || "";
    a && (this.message = String(a))
  }
  E(xa, Error);
  xa.prototype.name = "CustomError";

  function ya(a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
    return d + c.join("%s")
  }

  function za(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
  }

  function Aa(a) {
    if (!Ba.test(a)) return a; - 1 != a.indexOf("\x26") && (a = a.replace(Ca, "\x26amp;")); - 1 != a.indexOf("\x3c") && (a = a.replace(Da, "\x26lt;")); - 1 != a.indexOf("\x3e") && (a = a.replace(Ea, "\x26gt;")); - 1 != a.indexOf('"') && (a = a.replace(Fa, "\x26quot;"));
    return a
  }
  var Ca = /&/g,
    Da = /</g,
    Ea = />/g,
    Fa = /\"/g,
    Ba = /[&<>\"]/;

  function Ga(a) {
    a = u(void 0) ? a.toFixed(void 0) : String(a);
    var b = a.indexOf("."); - 1 == b && (b = a.length);
    b = Math.max(0, 2 - b);
    return Array(b + 1).join("0") + a
  }

  function Ha(a, b) {
    for (var c = 0, d = za(String(a)).split("."), e = za(String(b)).split("."), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
      var h = d[g] || "",
        m = e[g] || "",
        n = RegExp("(\\d*)(\\D*)", "g"),
        p = RegExp("(\\d*)(\\D*)", "g");
      do {
        var q = n.exec(h) || ["", "", ""],
          r = p.exec(m) || ["", "", ""];
        if (0 == q[0].length && 0 == r[0].length) break;
        c = ((0 == q[1].length ? 0 : parseInt(q[1], 10)) < (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? -1 : (0 == q[1].length ? 0 : parseInt(q[1], 10)) > (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? 1 : 0) || ((0 == q[2].length) < (0 == r[2].length) ?
          -1 : (0 == q[2].length) > (0 == r[2].length) ? 1 : 0) || (q[2] < r[2] ? -1 : q[2] > r[2] ? 1 : 0)
      } while (0 == c)
    }
    return c
  };
  var Ia = Array.prototype,
    Ja = Ia.indexOf ? function(a, b, c) {
      return Ia.indexOf.call(a, b, c)
    } : function(a, b, c) {
      c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
      if (ka(a)) return ka(b) && 1 == b.length ? a.indexOf(b, c) : -1;
      for (; c < a.length; c++)
        if (c in a && a[c] === b) return c;
      return -1
    },
    Ka = Ia.forEach ? function(a, b, c) {
      Ia.forEach.call(a, b, c)
    } : function(a, b, c) {
      for (var d = a.length, e = ka(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    },
    La = Ia.map ? function(a, b, c) {
      return Ia.map.call(a, b, c)
    } : function(a, b, c) {
      for (var d = a.length, e = Array(d),
        f = ka(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
      return e
    },
    Ma = Ia.some ? function(a, b, c) {
      return Ia.some.call(a, b, c)
    } : function(a, b, c) {
      for (var d = a.length, e = ka(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && b.call(c, e[f], f, a)) return !0;
      return !1
    };

  function Na(a, b) {
    var c = Oa(a, b, void 0);
    return 0 > c ? null : ka(a) ? a.charAt(c) : a[c]
  }

  function Oa(a, b, c) {
    for (var d = a.length, e = ka(a) ? a.split("") : a, f = 0; f < d; f++)
      if (f in e && b.call(c, e[f], f, a)) return f;
    return -1
  }

  function Pa(a, b) {
    var c = Ja(a, b),
      d;
    (d = 0 <= c) && Ia.splice.call(a, c, 1);
    return d
  }

  function Qa(a) {
    return Ia.concat.apply(Ia, arguments)
  }

  function Ra(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c
    }
    return []
  }

  function Sa(a, b) {
    for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c],
        e;
      if (ha(d) || (e = ia(d)) && Object.prototype.hasOwnProperty.call(d, "callee")) a.push.apply(a, d);
      else if (e)
        for (var f = a.length, g = d.length, h = 0; h < g; h++) a[f + h] = d[h];
      else a.push(d)
    }
  }

  function Ta(a, b, c, d) {
    Ia.splice.apply(a, Ua(arguments, 1))
  }

  function Ua(a, b, c) {
    return 2 >= arguments.length ? Ia.slice.call(a, b) : Ia.slice.call(a, b, c)
  }

  function Va(a, b) {
    Ia.sort.call(a, b || Wa)
  }

  function Xa(a, b) {
    if (!ia(a) || !ia(b) || a.length != b.length) return !1;
    for (var c = a.length, d = Ya, e = 0; e < c; e++)
      if (!d(a[e], b[e])) return !1;
    return !0
  }

  function Wa(a, b) {
    return a > b ? 1 : a < b ? -1 : 0
  }

  function Ya(a, b) {
    return a === b
  };

  function Za(a, b, c) {
    this.a = a;
    this.x = b;
    this.y = c
  }

  function $a(a, b, c, d) {
    return u(d) ? (d.a = a, d.x = b, d.y = c, d) : new Za(a, b, c)
  }

  function ab(a, b, c) {
    return a + "/" + b + "/" + c
  }
  Za.prototype.c = function(a) {
    return u(a) ? (a[0] = this.a, a[1] = this.x, a[2] = this.y, a) : [this.a, this.x, this.y]
  };

  function bb(a) {
    var b = Array(a.a),
      c = 1 << a.a - 1,
      d, e;
    for (d = 0; d < a.a; ++d) e = 48, a.x & c && (e += 1), a.y & c && (e += 2), b[d] = String.fromCharCode(e), c >>= 1;
    return b.join("")
  }
  Za.prototype.toString = function() {
    return ab(this.a, this.x, this.y)
  };

  function cb(a, b, c, d) {
    this.a = a;
    this.d = b;
    this.b = c;
    this.c = d
  }

  function db(a, b, c, d, e) {
    return u(e) ? (e.a = a, e.d = b, e.b = c, e.c = d, e) : new cb(a, b, c, d)
  }
  cb.prototype.contains = function(a) {
    return this.a <= a.x && a.x <= this.d && this.b <= a.y && a.y <= this.c
  };

  function eb(a) {
    this.c = a.html;
    this.a = u(a.tileRanges) ? a.tileRanges : null
  };
  var fb, gb, hb, ib, jb, kb, lb;

  function nb() {
    return t.navigator ? t.navigator.userAgent : null
  }

  function ob() {
    return t.navigator
  }
  ib = hb = gb = fb = !1;
  var pb;
  if (pb = nb()) {
    var qb = ob();
    fb = 0 == pb.lastIndexOf("Opera", 0);
    gb = !fb && (-1 != pb.indexOf("MSIE") || -1 != pb.indexOf("Trident"));
    hb = !fb && -1 != pb.indexOf("WebKit");
    ib = !fb && !hb && !gb && "Gecko" == qb.product
  }
  var rb = fb,
    F = gb,
    sb = ib,
    tb = hb,
    ub, vb = ob();
  ub = vb && vb.platform || "";
  jb = -1 != ub.indexOf("Mac");
  kb = -1 != ub.indexOf("Win");
  lb = -1 != ub.indexOf("Linux");
  var wb = !!ob() && -1 != (ob().appVersion || "").indexOf("X11");

  function xb() {
    var a = t.document;
    return a ? a.documentMode : void 0
  }
  var yb;
  a: {
    var zb = "",
      Bb;
    if (rb && t.opera) var Cb = t.opera.version,
      zb = "function" == typeof Cb ? Cb() : Cb;
    else if (sb ? Bb = /rv\:([^\);]+)(\)|;)/ : F ? Bb = /\b(?:MSIE|rv)\s+([^\);]+)(\)|;)/ : tb && (Bb = /WebKit\/(\S+)/), Bb) var Db = Bb.exec(nb()),
      zb = Db ? Db[1] : "";
    if (F) {
      var Eb = xb();
      if (Eb > parseFloat(zb)) {
        yb = String(Eb);
        break a
      }
    }
    yb = zb
  }
  var Fb = {};

  function Gb(a) {
    return Fb[a] || (Fb[a] = 0 <= Ha(yb, a))
  }
  var Hb = t.document,
    Ib = Hb && F ? xb() || ("CSS1Compat" == Hb.compatMode ? parseInt(yb, 10) : 5) : void 0;
  var Jb, Kb = !F || F && 9 <= Ib;
  !sb && !F || F && F && 9 <= Ib || sb && Gb("1.9.1");
  F && Gb("9");

  function Lb(a) {
    a = a.className;
    return ka(a) && a.match(/\S+/g) || []
  }

  function Mb(a, b) {
    for (var c = Lb(a), d = Ua(arguments, 1), e = c.length + d.length, f = c, g = 0; g < d.length; g++) 0 <= Ja(f, d[g]) || f.push(d[g]);
    a.className = c.join(" ");
    return c.length == e
  }

  function Nb(a, b, c) {
    for (var d = Lb(a), e = !1, f = 0; f < d.length; f++) d[f] == b && (Ta(d, f--, 1), e = !0);
    e && (d.push(c), a.className = d.join(" "))
  };

  function Ob(a, b, c) {
    return Math.min(Math.max(a, b), c)
  }

  function Pb(a, b) {
    var c = a % b;
    return 0 > c * b ? c + b : c
  }

  function Qb(a) {
    return a * Math.PI / 180
  };

  function Rb(a, b) {
    this.x = u(a) ? a : 0;
    this.y = u(b) ? b : 0
  }
  l = Rb.prototype;
  l.H = function() {
    return new Rb(this.x, this.y)
  };
  l.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
  };
  l.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
  };
  l.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
  };
  l.scale = function(a, b) {
    var c = la(b) ? b : a;
    this.x *= a;
    this.y *= c;
    return this
  };

  function Sb(a, b) {
    this.width = a;
    this.height = b
  }
  l = Sb.prototype;
  l.H = function() {
    return new Sb(this.width, this.height)
  };
  l.V = function() {
    return !(this.width * this.height)
  };
  l.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
  };
  l.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
  };
  l.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
  };
  l.scale = function(a, b) {
    var c = la(b) ? b : a;
    this.width *= a;
    this.height *= c;
    return this
  };

  function Tb(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a)
  }

  function Ub(a, b) {
    for (var c in a)
      if (b.call(void 0, a[c], c, a)) return !0;
    return !1
  }

  function Vb(a) {
    var b = 0,
      c;
    for (c in a) b++;
    return b
  }

  function Xb(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b
  }

  function Yb(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = d;
    return b
  }

  function Zb(a) {
    for (var b in a) return !1;
    return !0
  }

  function $b(a) {
    for (var b in a) delete a[b]
  }

  function ac(a, b) {
    b in a && delete a[b]
  }

  function G(a, b, c) {
    return b in a ? a[b] : c
  }

  function bc(a, b) {
    var c = [];
    return b in a ? a[b] : a[b] = c
  }

  function cc(a) {
    var b = {},
      c;
    for (c in a) b[c] = a[c];
    return b
  }
  var dc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

  function ec(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < dc.length; f++) c = dc[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  };

  function fc(a) {
    return a ? new gc(hc(a)) : Jb || (Jb = new gc)
  }

  function ic(a) {
    return ka(a) ? document.getElementById(a) : a
  }

  function jc(a, b) {
    Tb(b, function(b, d) {
      "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in kc ? a.setAttribute(kc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
  }
  var kc = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
  };

  function lc(a) {
    a = a.document.documentElement;
    return new Sb(a.clientWidth, a.clientHeight)
  }

  function mc(a, b, c) {
    var d = arguments,
      e = document,
      f = d[0],
      g = d[1];
    if (!Kb && g && (g.name || g.type)) {
      f = ["\x3c", f];
      g.name && f.push(' name\x3d"', Aa(g.name), '"');
      if (g.type) {
        f.push(' type\x3d"', Aa(g.type), '"');
        var h = {};
        ec(h, g);
        delete h.type;
        g = h
      }
      f.push("\x3e");
      f = f.join("")
    }
    f = e.createElement(f);
    g && (ka(g) ? f.className = g : ha(g) ? Mb.apply(null, [f].concat(g)) : jc(f, g));
    2 < d.length && nc(e, f, d, 2);
    return f
  }

  function nc(a, b, c, d) {
    function e(c) {
      c && b.appendChild(ka(c) ? a.createTextNode(c) : c)
    }
    for (; d < c.length; d++) {
      var f = c[d];
      !ia(f) || oa(f) && 0 < f.nodeType ? e(f) : Ka(oc(f) ? Ra(f) : f, e)
    }
  }

  function pc(a) {
    return document.createElement(a)
  }

  function qc(a, b) {
    nc(hc(a), a, arguments, 1)
  }

  function rc(a) {
    for (var b; b = a.firstChild;) a.removeChild(b)
  }

  function sc(a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
  }

  function tc(a, b, c) {
    a.insertBefore(b, a.childNodes[c] || null)
  }

  function uc(a) {
    a && a.parentNode && a.parentNode.removeChild(a)
  }

  function vc(a) {
    if (void 0 != a.firstElementChild) a = a.firstElementChild;
    else
      for (a = a.firstChild; a && 1 != a.nodeType;) a = a.nextSibling;
    return a
  }

  function wc(a, b) {
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a
  }

  function hc(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
  }

  function oc(a) {
    if (a && "number" == typeof a.length) {
      if (oa(a)) return "function" == typeof a.item || "string" == typeof a.item;
      if (ma(a)) return "function" == typeof a.item
    }
    return !1
  }

  function gc(a) {
    this.a = a || t.document || document
  }

  function xc(a) {
    var b = a.a;
    a = tb ? b.body : b.documentElement;
    b = b.parentWindow || b.defaultView;
    return F && Gb("10") && b.pageYOffset != a.scrollTop ? new Rb(a.scrollLeft, a.scrollTop) : new Rb(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
  }
  gc.prototype.appendChild = function(a, b) {
    a.appendChild(b)
  };
  gc.prototype.contains = wc;
  var yc = ["experimental-webgl", "webgl", "webkit-3d", "moz-webgl"];

  function zc(a, b) {
    var c, d, e = yc.length;
    for (d = 0; d < e; ++d) try {
      if (c = a.getContext(yc[d], b), null !== c) return c
    } catch (f) {}
    return null
  };
  var I = {},
    Ac = "https:" === t.location.protocol,
    Bc = F && !Gb("9.0") && "" !== yb;
  I.sd = t.devicePixelRatio || 1;
  I.td = "ArrayBuffer" in t;
  I.Xb = !1;
  I.ud = function() {
    if (!("HTMLCanvasElement" in t)) return !1;
    try {
      var a = pc("CANVAS").getContext("2d");
      if (null === a) return !1;
      u(a.setLineDash) && (I.Xb = !0);
      return !0
    } catch (b) {
      return !1
    }
  }();
  I.vd = "DeviceOrientationEvent" in t;
  I.ze = !0;
  I.wd = "geolocation" in t.navigator;
  I.Ae = "JSON" in t && "parse" in t.JSON;
  I.xc = "ontouchstart" in t;
  I.Ce = "PointerEvent" in t;
  I.Be = !!t.navigator.msPointerEnabled;
  I.xd = function() {
    if (!("WebGLRenderingContext" in t)) return !1;
    try {
      var a = pc("CANVAS");
      return !ga(zc(a, {
        Xe: !0
      }))
    } catch (b) {
      return !1
    }
  }();

  function Cc() {
    0 != Dc && (this.Mi = Error().stack, Ec[v(this)] = this)
  }
  var Dc = 0,
    Ec = {};
  Cc.prototype.X = !1;
  Cc.prototype.Eb = function() {
    if (!this.X && (this.X = !0, this.w(), 0 != Dc)) {
      var a = v(this);
      delete Ec[a]
    }
  };

  function Fc(a, b) {
    var c = va(Gc, b);
    a.N || (a.N = []);
    a.N.push(y(c, void 0))
  }
  Cc.prototype.w = function() {
    if (this.N)
      for (; this.N.length;) this.N.shift()()
  };

  function Gc(a) {
    a && "function" == typeof a.Eb && a.Eb()
  };

  function Hc(a, b) {
    this.type = a;
    this.c = this.target = b
  }
  l = Hc.prototype;
  l.Eb = aa();
  l.La = !1;
  l.Ff = !1;
  l.le = !0;
  l.ya = function() {
    this.La = !0
  };
  l.preventDefault = function() {
    this.Ff = !0;
    this.le = !1
  };

  function Ic(a) {
    a.ya()
  }

  function Jc(a) {
    a.preventDefault()
  };
  var Kc = !F || F && 9 <= Ib,
    Lc = !F || F && 9 <= Ib,
    Mc = F && !Gb("9");
  !tb || Gb("528");
  sb && Gb("1.9b") || F && Gb("8") || rb && Gb("9.5") || tb && Gb("528");
  sb && !Gb("8") || F && Gb("9");
  var Nc = F ? "focusout" : "DOMFocusOut";

  function Oc(a) {
    Oc[" "](a);
    return a
  }
  Oc[" "] = da;

  function Pc(a, b) {
    a && Qc(this, a, b)
  }
  E(Pc, Hc);
  var Rc = [1, 4, 2];
  l = Pc.prototype;
  l.target = null;
  l.relatedTarget = null;
  l.offsetX = 0;
  l.offsetY = 0;
  l.clientX = 0;
  l.clientY = 0;
  l.screenX = 0;
  l.screenY = 0;
  l.button = 0;
  l.wa = 0;
  l.Rc = 0;
  l.Ob = !1;
  l.Z = !1;
  l.xa = !1;
  l.Sc = !1;
  l.rb = !1;
  l.F = null;

  function Qc(a, b, c) {
    var d = a.type = b.type;
    Hc.call(a, d);
    a.target = b.target || b.srcElement;
    a.c = c;
    if (c = b.relatedTarget) {
      if (sb) {
        var e;
        a: {
          try {
            Oc(c.nodeName);
            e = !0;
            break a
          } catch (f) {}
          e = !1
        }
        e || (c = null)
      }
    } else "mouseover" == d ? c = b.fromElement : "mouseout" == d && (c = b.toElement);
    a.relatedTarget = c;
    a.offsetX = tb || void 0 !== b.offsetX ? b.offsetX : b.layerX;
    a.offsetY = tb || void 0 !== b.offsetY ? b.offsetY : b.layerY;
    a.clientX = void 0 !== b.clientX ? b.clientX : b.pageX;
    a.clientY = void 0 !== b.clientY ? b.clientY : b.pageY;
    a.screenX = b.screenX || 0;
    a.screenY =
      b.screenY || 0;
    a.button = b.button;
    a.wa = b.keyCode || 0;
    a.Rc = b.charCode || ("keypress" == d ? b.keyCode : 0);
    a.Ob = b.ctrlKey;
    a.Z = b.altKey;
    a.xa = b.shiftKey;
    a.Sc = b.metaKey;
    a.rb = jb ? b.metaKey : b.ctrlKey;
    a.state = b.state;
    a.F = b;
    b.defaultPrevented && a.preventDefault();
    delete a.La
  }

  function Sc(a) {
    return (Kc ? 0 == a.F.button : "click" == a.type ? !0 : !!(a.F.button & Rc[0])) && !(tb && jb && a.Ob)
  }
  l.ya = function() {
    Pc.B.ya.call(this);
    this.F.stopPropagation ? this.F.stopPropagation() : this.F.cancelBubble = !0
  };
  l.preventDefault = function() {
    Pc.B.preventDefault.call(this);
    var a = this.F;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, Mc) try {
      if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
  };
  l.af = k("F");
  var Tc = "closure_listenable_" + (1E6 * Math.random() | 0);

  function Uc(a) {
    return !(!a || !a[Tc])
  }
  var Vc = 0;

  function Wc(a, b, c, d, e, f) {
    this.ra = a;
    this.a = b;
    this.src = c;
    this.type = d;
    this.capture = !!e;
    this.Za = f;
    this.key = ++Vc;
    this.Ba = this.gb = !1
  }

  function Xc(a) {
    a.Ba = !0;
    a.ra = null;
    a.a = null;
    a.src = null;
    a.Za = null
  };
  var Yc = {},
    Zc = {},
    $c = {},
    ad = {};

  function K(a, b, c, d, e) {
    if (ha(b)) {
      for (var f = 0; f < b.length; f++) K(a, b[f], c, d, e);
      return null
    }
    c = bd(c);
    return Uc(a) ? a.$(b, c, d, e) : cd(a, b, c, !1, d, e)
  }

  function cd(a, b, c, d, e, f) {
    if (!b) throw Error("Invalid event type");
    e = !!e;
    var g = Zc;
    b in g || (g[b] = {
      D: 0
    });
    g = g[b];
    e in g || (g[e] = {
      D: 0
    }, g.D++);
    var g = g[e],
      h = v(a),
      m;
    if (g[h]) {
      m = g[h];
      for (var n = 0; n < m.length; n++)
        if (g = m[n], g.ra == c && g.Za == f) {
          if (g.Ba) break;
          d || (m[n].gb = !1);
          return m[n]
        }
    } else m = g[h] = [], g.D++;
    n = dd();
    g = new Wc(c, n, a, b, e, f);
    g.gb = d;
    n.src = a;
    n.ra = g;
    m.push(g);
    $c[h] || ($c[h] = []);
    $c[h].push(g);
    a.addEventListener ? a.addEventListener(b, n, e) : a.attachEvent(b in ad ? ad[b] : ad[b] = "on" + b, n);
    return Yc[g.key] = g
  }

  function dd() {
    var a = ed,
      b = Lc ? function(c) {
        return a.call(b.src, b.ra, c)
      } : function(c) {
        c = a.call(b.src, b.ra, c);
        if (!c) return c
      };
    return b
  }

  function fd(a, b, c, d, e) {
    if (ha(b)) {
      for (var f = 0; f < b.length; f++) fd(a, b[f], c, d, e);
      return null
    }
    c = bd(c);
    return Uc(a) ? a.S.add(b, c, !0, d, e) : cd(a, b, c, !0, d, e)
  }

  function gd(a, b, c, d, e) {
    if (ha(b))
      for (var f = 0; f < b.length; f++) gd(a, b[f], c, d, e);
    else if (c = bd(c), Uc(a)) a.ld(b, c, d, e);
    else if (d = !!d, a = hd(a, b, d))
      for (f = 0; f < a.length; f++)
        if (a[f].ra == c && a[f].capture == d && a[f].Za == e) {
          L(a[f]);
          break
        }
  }

  function L(a) {
    if (la(a) || !a || a.Ba) return !1;
    var b = a.src;
    if (Uc(b)) return id(b.S, a);
    var c = a.type,
      d = a.a,
      e = a.capture;
    b.removeEventListener ? b.removeEventListener(c, d, e) : b.detachEvent && b.detachEvent(c in ad ? ad[c] : ad[c] = "on" + c, d);
    b = v(b);
    $c[b] && (d = $c[b], Pa(d, a), 0 == d.length && delete $c[b]);
    Xc(a);
    if (d = Zc[c][e][b]) Pa(d, a), 0 == d.length && (delete Zc[c][e][b], Zc[c][e].D--), 0 == Zc[c][e].D && (delete Zc[c][e], Zc[c].D--), 0 == Zc[c].D && delete Zc[c];
    delete Yc[a.key];
    return !0
  }

  function hd(a, b, c) {
    var d = Zc;
    return b in d && (d = d[b], c in d && (d = d[c], a = v(a), d[a])) ? d[a] : null
  }

  function jd(a) {
    if (Uc(a)) return kd(a.S, void 0);
    a = v(a);
    var b = $c[a];
    if (b) {
      var c = u(void 0),
        d = u(void 0);
      return c && d ? (b = Zc[void 0], !!b && !!b[void 0] && a in b[void 0]) : c || d ? Ma(b, function(a) {
        return c && void 0 == a.type || d && void 0 == a.capture
      }) : !0
    }
    return !1
  }

  function ld(a, b, c) {
    var d = 1;
    b = v(b);
    if (a[b])
      for (a = Ra(a[b]), b = 0; b < a.length; b++) {
        var e = a[b];
        e && !e.Ba && (d &= !1 !== md(e, c))
      }
    return Boolean(d)
  }

  function md(a, b) {
    var c = a.ra,
      d = a.Za || a.src;
    a.gb && L(a);
    return c.call(d, b)
  }

  function ed(a, b) {
    if (a.Ba) return !0;
    var c = a.type,
      d = Zc;
    if (!(c in d)) return !0;
    var d = d[c],
      e, f;
    if (!Lc) {
      if (!(c = b)) a: {
        for (var c = ["window", "event"], g = t; e = c.shift();)
          if (null != g[e]) g = g[e];
          else {
            c = null;
            break a
          }
        c = g
      }
      e = c;
      c = !0 in d;
      g = !1 in d;
      if (c) {
        if (0 > e.keyCode || void 0 != e.returnValue) return !0;
        a: {
          var h = !1;
          if (0 == e.keyCode) try {
            e.keyCode = -1;
            break a
          } catch (m) {
            h = !0
          }
          if (h || void 0 == e.returnValue) e.returnValue = !0
        }
      }
      h = new Pc;
      Qc(h, e, this);
      e = !0;
      try {
        if (c) {
          for (var n = [], p = h.c; p; p = p.parentNode) n.push(p);
          f = d[!0];
          for (var q = n.length -
            1; !h.La && 0 <= q; q--) h.c = n[q], e &= ld(f, n[q], h);
          if (g)
            for (f = d[!1], q = 0; !h.La && q < n.length; q++) h.c = n[q], e &= ld(f, n[q], h)
        } else e = md(a, h)
      } finally {
        n && (n.length = 0)
      }
      return e
    }
    d = new Pc(b, this);
    return e = md(a, d)
  }
  var nd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

  function bd(a) {
    return ma(a) ? a : a[nd] || (a[nd] = function(b) {
      return a.handleEvent(b)
    })
  };

  function od(a) {
    return function() {
      return a
    }
  }
  var pd = od(!1),
    qd = od(!0);

  function rd(a) {
    return a
  }

  function sd(a) {
    return function() {
      throw a;
    }
  }

  function td(a) {
    var b;
    b = b || 0;
    return function() {
      return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
    }
  }

  function ud(a) {
    var b = arguments,
      c = b.length;
    return function() {
      for (var a = 0; a < c; a++)
        if (!b[a].apply(this, arguments)) return !1;
      return !0
    }
  };

  function vd(a) {
    this.src = a;
    this.a = {};
    this.c = 0
  }
  vd.prototype.add = function(a, b, c, d, e) {
    var f = this.a[a];
    f || (f = this.a[a] = [], this.c++);
    var g = wd(f, b, d, e); - 1 < g ? (a = f[g], c || (a.gb = !1)) : (a = new Wc(b, null, this.src, a, !!d, e), a.gb = c, f.push(a));
    return a
  };
  vd.prototype.remove = function(a, b, c, d) {
    if (!(a in this.a)) return !1;
    var e = this.a[a];
    b = wd(e, b, c, d);
    return -1 < b ? (Xc(e[b]), Ia.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.c--), !0) : !1
  };

  function id(a, b) {
    var c = b.type;
    if (!(c in a.a)) return !1;
    var d = Pa(a.a[c], b);
    d && (Xc(b), 0 == a.a[c].length && (delete a.a[c], a.c--));
    return d
  }

  function kd(a, b) {
    var c = u(b),
      d = u(void 0);
    return Ub(a.a, function(a) {
      for (var f = 0; f < a.length; ++f)
        if (!(c && a[f].type != b || d && void 0 != a[f].capture)) return !0;
      return !1
    })
  }

  function wd(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.Ba && f.ra == b && f.capture == !!c && f.Za == d) return e
    }
    return -1
  };

  function xd() {
    Cc.call(this);
    this.S = new vd(this);
    this.yc = this
  }
  E(xd, Cc);
  xd.prototype[Tc] = !0;
  l = xd.prototype;
  l.ad = null;
  l.addEventListener = function(a, b, c, d) {
    K(this, a, b, c, d)
  };
  l.removeEventListener = function(a, b, c, d) {
    gd(this, a, b, c, d)
  };

  function M(a, b) {
    var c, d = a.ad;
    if (d)
      for (c = []; d; d = d.ad) c.push(d);
    var d = a.yc,
      e = b,
      f = e.type || e;
    if (ka(e)) e = new Hc(e, d);
    else if (e instanceof Hc) e.target = e.target || d;
    else {
      var g = e,
        e = new Hc(f, d);
      ec(e, g)
    }
    var g = !0,
      h;
    if (c)
      for (var m = c.length - 1; !e.La && 0 <= m; m--) h = e.c = c[m], g = yd(h, f, !0, e) && g;
    e.La || (h = e.c = d, g = yd(h, f, !0, e) && g, e.La || (g = yd(h, f, !1, e) && g));
    if (c)
      for (m = 0; !e.La && m < c.length; m++) h = e.c = c[m], g = yd(h, f, !1, e) && g;
    return g
  }
  l.w = function() {
    xd.B.w.call(this);
    if (this.S) {
      var a = this.S,
        b = 0,
        c;
      for (c in a.a) {
        for (var d = a.a[c], e = 0; e < d.length; e++)++b, d[e].Ba = !0;
        delete a.a[c];
        a.c--
      }
    }
    this.ad = null
  };
  l.$ = function(a, b, c, d) {
    return this.S.add(a, b, !1, c, d)
  };
  l.ld = function(a, b, c, d) {
    return this.S.remove(a, b, c, d)
  };

  function yd(a, b, c, d) {
    b = a.S.a[b];
    if (!b) return !0;
    b = Ra(b);
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.Ba && g.capture == c) {
        var h = g.ra,
          m = g.Za || g.src;
        g.gb && id(a.S, g);
        e = !1 !== h.call(m, d) && e
      }
    }
    return e && !1 != d.le
  };

  function zd() {
    xd.call(this);
    this.c = 0
  }
  E(zd, xd);
  l = zd.prototype;
  l.s = function() {
    ++this.c;
    M(this, "change")
  };
  l.Ch = function(a, b, c) {
    return K(this, a, b, !1, c)
  };
  l.Ih = function(a, b, c) {
    return fd(this, a, b, !1, c)
  };
  l.ni = function(a, b, c) {
    gd(this, a, b, !1, c)
  };
  l.oi = function(a) {
    L(a)
  };

  function Ad(a, b) {
    Hc.call(this, a);
    this.key = b
  }
  E(Ad, Hc);

  function Bd(a, b) {
    this.target = a;
    this.key = b;
    this.c = this.a = rd
  }
  Bd.prototype.transform = function(a, b) {
    this.a = a;
    this.c = b;
    this.target.Vc(this.key)
  };

  function N(a) {
    zd.call(this);
    this.e = {};
    this.i = {};
    this.U = {};
    this.Y = {};
    u(a) && this.T(a)
  }
  E(N, zd);
  var Cd = {},
    Dd = {},
    Ed = {};

  function Fd(a) {
    return Cd.hasOwnProperty(a) ? Cd[a] : Cd[a] = "change:" + a.toLowerCase()
  }
  l = N.prototype;
  l.Te = function(a, b, c) {
    c = c || a;
    this.kd(a);
    var d = Fd(c);
    this.Y[a] = K(b, d, function() {
      Gd(this, a)
    }, void 0, this);
    this.U[a] = K(b, "beforepropertychange", Hd(a, c), void 0, this);
    b = new Bd(b, c);
    this.i[a] = b;
    Gd(this, a);
    return b
  };

  function Hd(a, b) {
    return function(c) {
      c.key === b && M(this, new Ad("beforepropertychange", a))
    }
  }
  l.get = function(a) {
    var b, c = this.i;
    if (c.hasOwnProperty(a)) {
      a = c[a];
      b = a.target;
      var c = a.key,
        d = Dd.hasOwnProperty(c) ? Dd[c] : Dd[c] = "get" + (c.substr(0, 1).toUpperCase() + c.substr(1)),
        d = G(b, d);
      b = u(d) ? d.call(b) : b.get(c);
      b = a.c(b)
    } else this.e.hasOwnProperty(a) && (b = this.e[a]);
    return b
  };
  l.pa = function() {
    var a = this.i,
      b;
    if (Zb(this.e)) {
      if (Zb(a)) return [];
      b = a
    } else if (Zb(a)) b = this.e;
    else {
      b = {};
      for (var c in this.e) b[c] = !0;
      for (c in a) b[c] = !0
    }
    return Yb(b)
  };
  l.jb = function() {
    var a = {},
      b;
    for (b in this.e) a[b] = this.e[b];
    for (b in this.i) a[b] = this.get(b);
    return a
  };
  l.Vc = function(a) {
    var b = this.i;
    b.hasOwnProperty(a) ? (a = b[a], a.target.Vc(a.key)) : Gd(this, a)
  };

  function Gd(a, b) {
    var c = Fd(b);
    M(a, c);
    M(a, new Ad("propertychange", b))
  }
  l.t = function(a, b) {
    M(this, new Ad("beforepropertychange", a));
    var c = this.i;
    if (c.hasOwnProperty(a)) {
      var d = c[a],
        c = d.target,
        e = d.key;
      b = d.a(b);
      d = Ed.hasOwnProperty(e) ? Ed[e] : Ed[e] = "set" + (e.substr(0, 1).toUpperCase() + e.substr(1));
      d = G(c, d);
      u(d) ? d.call(c, b) : c.t(e, b)
    } else this.e[a] = b, Gd(this, a)
  };
  l.T = function(a) {
    for (var b in a) this.t(b, a[b])
  };
  l.kd = function(a) {
    var b = this.Y,
      c = b[a];
    c && (delete b[a], L(c), b = this.get(a), delete this.i[a], this.e[a] = b);
    if (b = this.U[a]) L(b), delete this.U[a]
  };
  l.pi = function() {
    for (var a in this.Y) this.kd(a)
  };

  function Id(a, b, c) {
    Hc.call(this, a, c);
    this.element = b
  }
  E(Id, Hc);

  function Jd(a) {
    N.call(this);
    this.a = a || [];
    Kd(this)
  }
  E(Jd, N);
  l = Jd.prototype;
  l.clear = function() {
    for (; 0 < this.Ja();) this.Ud()
  };
  l.yg = function(a) {
    var b, c;
    b = 0;
    for (c = a.length; b < c; ++b) this.push(a[b]);
    return this
  };
  l.forEach = function(a, b) {
    Ka(this.a, a, b)
  };
  l.zg = k("a");
  l.Mb = function(a) {
    return this.a[a]
  };
  l.Ja = function() {
    return this.get("length")
  };
  l.jc = function(a, b) {
    Ta(this.a, a, 0, b);
    Kd(this);
    M(this, new Id("add", b, this))
  };
  l.Ud = function() {
    return this.fd(this.Ja() - 1)
  };
  l.push = function(a) {
    var b = this.a.length;
    this.jc(b, a);
    return b
  };
  l.remove = function(a) {
    var b = this.a,
      c, d;
    c = 0;
    for (d = b.length; c < d; ++c)
      if (b[c] === a) return this.fd(c)
  };
  l.fd = function(a) {
    var b = this.a[a];
    Ia.splice.call(this.a, a, 1);
    Kd(this);
    M(this, new Id("remove", b, this));
    return b
  };
  l.di = function(a, b) {
    var c = this.Ja();
    if (a < c) c = this.a[a], this.a[a] = b, M(this, new Id("remove", c, this)), M(this, new Id("add", b, this));
    else {
      for (; c < a; ++c) this.jc(c, void 0);
      this.jc(a, b)
    }
  };

  function Kd(a) {
    a.t("length", a.a.length)
  };

  function Ld(a) {
    N.call(this);
    a = u(a) ? a : {};
    this.a = null;
    K(this, Fd("tracking"), this.l, !1, this);
    this.b(u(a.tracking) ? a.tracking : !1)
  }
  E(Ld, N);
  Ld.prototype.w = function() {
    this.b(!1);
    Ld.B.w.call(this)
  };
  Ld.prototype.n = function(a) {
    a = a.F;
    if (null != a.alpha) {
      var b = Qb(a.alpha);
      this.t("alpha", b);
      "boolean" == typeof a.absolute && a.absolute ? this.t("heading", b) : null != a.webkitCompassHeading && (null != a.webkitCompassAccuracy && -1 != a.webkitCompassAccuracy) && this.t("heading", Qb(a.webkitCompassHeading))
    }
    null != a.beta && this.t("beta", Qb(a.beta));
    null != a.gamma && this.t("gamma", Qb(a.gamma));
    this.s()
  };
  Ld.prototype.f = function() {
    return this.get("alpha")
  };
  Ld.prototype.getAlpha = Ld.prototype.f;
  Ld.prototype.g = function() {
    return this.get("beta")
  };
  Ld.prototype.getBeta = Ld.prototype.g;
  Ld.prototype.j = function() {
    return this.get("gamma")
  };
  Ld.prototype.getGamma = Ld.prototype.j;
  Ld.prototype.k = function() {
    return this.get("heading")
  };
  Ld.prototype.getHeading = Ld.prototype.k;
  Ld.prototype.d = function() {
    return this.get("tracking")
  };
  Ld.prototype.getTracking = Ld.prototype.d;
  Ld.prototype.l = function() {
    if (I.vd) {
      var a = this.d();
      a && null === this.a ? this.a = K(t, "deviceorientation", this.n, !1, this) : a || null === this.a || (L(this.a), this.a = null)
    }
  };
  Ld.prototype.b = function(a) {
    this.t("tracking", a)
  };
  Ld.prototype.setTracking = Ld.prototype.b;

  function Md() {
    zd.call(this);
    this.extent = void 0;
    this.e = -1;
    this.f = {};
    this.j = this.i = 0
  }
  E(Md, zd);
  Md.prototype.q = function(a, b) {
    var c = u(b) ? b : [NaN, NaN];
    this.ca(a[0], a[1], c, Infinity);
    return c
  };
  Md.prototype.Ra = pd;
  var Nd = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  };

  function Od(a) {
    this.length = a.length || a;
    for (var b = 0; b < this.length; b++) this[b] = a[b] || 0
  }
  Od.prototype.a = 4;
  Od.prototype.c = function(a, b) {
    b = b || 0;
    for (var c = 0; c < a.length && b + c < this.length; c++) this[b + c] = a[c]
  };
  Od.prototype.toString = Array.prototype.join;
  "undefined" == typeof Float32Array && (Od.BYTES_PER_ELEMENT = 4, Od.prototype.BYTES_PER_ELEMENT = Od.prototype.a, Od.prototype.set = Od.prototype.c, Od.prototype.toString = Od.prototype.toString, C("Float32Array", Od));

  function Pd(a) {
    this.length = a.length || a;
    for (var b = 0; b < this.length; b++) this[b] = a[b] || 0
  }
  Pd.prototype.a = 8;
  Pd.prototype.c = function(a, b) {
    b = b || 0;
    for (var c = 0; c < a.length && b + c < this.length; c++) this[b + c] = a[c]
  };
  Pd.prototype.toString = Array.prototype.join;
  if ("undefined" == typeof Float64Array) {
    try {
      Pd.BYTES_PER_ELEMENT = 8
    } catch (Qd) {}
    Pd.prototype.BYTES_PER_ELEMENT = Pd.prototype.a;
    Pd.prototype.set = Pd.prototype.c;
    Pd.prototype.toString = Pd.prototype.toString;
    C("Float64Array", Pd)
  };

  function Rd(a, b, c, d, e) {
    a[0] = b;
    a[1] = c;
    a[2] = d;
    a[3] = e
  };

  function Sd() {
    var a = Array(16);
    Td(a, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    return a
  }

  function Ud() {
    var a = Array(16);
    Td(a, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return a
  }

  function Td(a, b, c, d, e, f, g, h, m, n, p, q, r, s, z, x, w) {
    a[0] = b;
    a[1] = c;
    a[2] = d;
    a[3] = e;
    a[4] = f;
    a[5] = g;
    a[6] = h;
    a[7] = m;
    a[8] = n;
    a[9] = p;
    a[10] = q;
    a[11] = r;
    a[12] = s;
    a[13] = z;
    a[14] = x;
    a[15] = w
  }

  function Vd(a, b) {
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
    a[3] = b[3];
    a[4] = b[4];
    a[5] = b[5];
    a[6] = b[6];
    a[7] = b[7];
    a[8] = b[8];
    a[9] = b[9];
    a[10] = b[10];
    a[11] = b[11];
    a[12] = b[12];
    a[13] = b[13];
    a[14] = b[14];
    a[15] = b[15]
  }

  function Wd(a) {
    a[0] = 1;
    a[1] = 0;
    a[2] = 0;
    a[3] = 0;
    a[4] = 0;
    a[5] = 1;
    a[6] = 0;
    a[7] = 0;
    a[8] = 0;
    a[9] = 0;
    a[10] = 1;
    a[11] = 0;
    a[12] = 0;
    a[13] = 0;
    a[14] = 0;
    a[15] = 1
  }

  function Xd(a, b, c) {
    var d = a[0],
      e = a[1],
      f = a[2],
      g = a[3],
      h = a[4],
      m = a[5],
      n = a[6],
      p = a[7],
      q = a[8],
      r = a[9],
      s = a[10],
      z = a[11],
      x = a[12],
      w = a[13],
      B = a[14];
    a = a[15];
    var A = b[0],
      D = b[1],
      H = b[2],
      P = b[3],
      J = b[4],
      U = b[5],
      Z = b[6],
      na = b[7],
      ta = b[8],
      R = b[9],
      sa = b[10],
      ja = b[11],
      Wb = b[12],
      mb = b[13],
      Ab = b[14];
    b = b[15];
    c[0] = d * A + h * D + q * H + x * P;
    c[1] = e * A + m * D + r * H + w * P;
    c[2] = f * A + n * D + s * H + B * P;
    c[3] = g * A + p * D + z * H + a * P;
    c[4] = d * J + h * U + q * Z + x * na;
    c[5] = e * J + m * U + r * Z + w * na;
    c[6] = f * J + n * U + s * Z + B * na;
    c[7] = g * J + p * U + z * Z + a * na;
    c[8] = d * ta + h * R + q * sa + x * ja;
    c[9] = e * ta + m * R + r * sa + w * ja;
    c[10] = f * ta +
      n * R + s * sa + B * ja;
    c[11] = g * ta + p * R + z * sa + a * ja;
    c[12] = d * Wb + h * mb + q * Ab + x * b;
    c[13] = e * Wb + m * mb + r * Ab + w * b;
    c[14] = f * Wb + n * mb + s * Ab + B * b;
    c[15] = g * Wb + p * mb + z * Ab + a * b
  }

  function Zd(a, b, c) {
    var d = a[1] * b + a[5] * c + 0 * a[9] + a[13],
      e = a[2] * b + a[6] * c + 0 * a[10] + a[14],
      f = a[3] * b + a[7] * c + 0 * a[11] + a[15];
    a[12] = a[0] * b + a[4] * c + 0 * a[8] + a[12];
    a[13] = d;
    a[14] = e;
    a[15] = f
  }

  function $d(a, b, c) {
    Td(a, a[0] * b, a[1] * b, a[2] * b, a[3] * b, a[4] * c, a[5] * c, a[6] * c, a[7] * c, 1 * a[8], 1 * a[9], 1 * a[10], 1 * a[11], a[12], a[13], a[14], a[15])
  }

  function ae(a, b) {
    var c = a[0],
      d = a[1],
      e = a[2],
      f = a[3],
      g = a[4],
      h = a[5],
      m = a[6],
      n = a[7],
      p = Math.cos(b),
      q = Math.sin(b);
    a[0] = c * p + g * q;
    a[1] = d * p + h * q;
    a[2] = e * p + m * q;
    a[3] = f * p + n * q;
    a[4] = c * -q + g * p;
    a[5] = d * -q + h * p;
    a[6] = e * -q + m * p;
    a[7] = f * -q + n * p
  }
  new Float64Array(3);
  new Float64Array(3);
  new Float64Array(4);
  new Float64Array(4);
  new Float64Array(4);
  new Float64Array(16);
  var be = /^#(?:[0-9a-f]{3}){1,2}$/i,
    ce = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i,
    de = /^(?:rgba)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|1|0\.\d{0,10})\)$/i;

  function ee(a) {
    if (!ka(a)) {
      var b = a[0];
      b != (b | 0) && (b = b + 0.5 | 0);
      var c = a[1];
      c != (c | 0) && (c = c + 0.5 | 0);
      var d = a[2];
      d != (d | 0) && (d = d + 0.5 | 0);
      a = "rgba(" + b + "," + c + "," + d + "," + a[3] + ")"
    }
    return a
  }
  var ge = function() {
    var a = {},
      b = 0;
    return function(c, d) {
      var e;
      if (a.hasOwnProperty(c)) e = a[c];
      else {
        if (1024 <= b) {
          e = 0;
          for (var f in a) 0 === (e++ & 3) && (delete a[f], --b)
        }
        e = fe(c);
        a[c] = e;
        ++b
      }
      u(d) && (d[0] = e[0], d[1] = e[1], d[2] = e[2], d[3] = e[3], e = d);
      return e
    }
  }();

  function fe(a) {
    var b = !1;
    Nd.hasOwnProperty(a) && (a = Nd[a], b = !0);
    var c, d;
    if (b || be.exec(a)) return d = 3 == a.length - 1 ? 1 : 2, b = parseInt(a.substr(1 + 0 * d, d), 16), c = parseInt(a.substr(1 + 1 * d, d), 16), a = parseInt(a.substr(1 + 2 * d, d), 16), 1 == d && (b = (b << 4) + b, c = (c << 4) + c, a = (a << 4) + a), b = [b, c, a, 1];
    if (d = de.exec(a)) return b = Number(d[1]), c = Number(d[2]), a = Number(d[3]), d = Number(d[4]), b = [b, c, a, d], he(b, b);
    if (d = ce.exec(a)) return b = Number(d[1]), c = Number(d[2]), a = Number(d[3]), b = [b, c, a, 1], he(b, b);
    throw Error(a + " is not a valid color");
  }

  function he(a, b) {
    var c = u(b) ? b : [];
    c[0] = Ob(a[0] + 0.5 | 0, 0, 255);
    c[1] = Ob(a[1] + 0.5 | 0, 0, 255);
    c[2] = Ob(a[2] + 0.5 | 0, 0, 255);
    c[3] = Ob(a[3], 0, 1);
    return c
  };
  var ie = ge("black"),
    je = [],
    ke = [0, 0, 0, 1];

  function le(a) {
    a = u(a) ? a : {};
    this.a = u(a.color) ? a.color : null
  }
  le.prototype.c = k("a");

  function me(a) {
    this.j = a.opacity;
    this.k = a.rotateWithView;
    this.e = a.rotation;
    this.f = a.scale;
    this.l = a.re
  }
  me.prototype.N = k("e");
  me.prototype.o = k("f");

  function ne(a) {
    a = u(a) ? a : {};
    this.a = u(a.color) ? a.color : null;
    this.b = a.lineCap;
    this.d = u(a.lineDash) ? a.lineDash : null;
    this.e = a.lineJoin;
    this.f = a.miterLimit;
    this.c = a.width
  }
  l = ne.prototype;
  l.nh = k("a");
  l.pf = k("b");
  l.oh = k("d");
  l.qf = k("e");
  l.uf = k("f");
  l.ph = k("c");

  function oe(a) {
    a = u(a) ? a : {};
    this.i = pc("CANVAS");
    this.c = null;
    this.b = u(a.fill) ? a.fill : null;
    this.d = a.radius;
    this.a = u(a.stroke) ? a.stroke : null;
    a = this.i;
    var b, c;
    null === this.a ? c = 0 : (b = ee(this.a.a), c = this.a.c, u(c) || (c = 1));
    var d = 2 * (this.d + c) + 1;
    a.height = d;
    a.width = d;
    var e = a.getContext("2d");
    e.arc(d / 2, d / 2, this.d, 0, 2 * Math.PI, !0);
    null !== this.b && (e.fillStyle = ee(this.b.a), e.fill());
    null !== this.a && (e.strokeStyle = b, e.lineWidth = c, e.stroke());
    null === this.b ? (a = this.c = pc("CANVAS"), a.height = d, a.width = d, e = a.getContext("2d"),
      e.arc(d / 2, d / 2, this.d, 0, 2 * Math.PI, !0), e.fillStyle = ie, e.fill(), null !== this.a && (e.strokeStyle = b, e.lineWidth = c, e.stroke())) : this.c = a;
    this.g = [d / 2, d / 2];
    this.n = [d, d];
    me.call(this, {
      opacity: 1,
      rotateWithView: !1,
      rotation: 0,
      scale: 1,
      re: void 0
    })
  }
  E(oe, me);
  l = oe.prototype;
  l.Lb = k("g");
  l.jh = k("b");
  l.ce = k("c");
  l.Rb = k("i");
  l.de = ba(2);
  l.kh = k("d");
  l.qb = k("n");
  l.lh = k("a");
  l.Qd = da;
  l.ee = da;
  l.ve = da;

  function pe(a) {
    a = u(a) ? a : {};
    this.d = u(a.fill) ? a.fill : null;
    this.e = u(a.image) ? a.image : null;
    this.b = u(a.stroke) ? a.stroke : null;
    this.c = u(a.text) ? a.text : null;
    this.a = a.zIndex
  }
  l = pe.prototype;
  l.qh = k("d");
  l.rh = k("e");
  l.sh = k("b");
  l.th = k("c");
  l.Df = k("a");

  function qe(a) {
    N.call(this);
    this.P = void 0;
    this.a = "geometry";
    this.g = null;
    this.f = void 0;
    this.d = null;
    K(this, Fd(this.a), this.ic, !1, this);
    null != a ? a instanceof Md ? this.cb(a) : this.T(a) : this.cb(null)
  }
  E(qe, N);
  qe.prototype.K = function() {
    return this.get(this.a)
  };
  qe.prototype.getGeometry = qe.prototype.K;
  l = qe.prototype;
  l.jf = k("P");
  l.hf = k("a");
  l.Fg = k("g");
  l.Gg = k("f");
  l.Lf = function() {
    this.s()
  };
  l.ic = function() {
    null !== this.d && (L(this.d), this.d = null);
    var a = this.K();
    null != a && (this.d = K(a, "change", this.Lf, !1, this))
  };
  l.cb = function(a) {
    this.t(this.a, a)
  };
  qe.prototype.setGeometry = qe.prototype.cb;
  qe.prototype.j = function(a) {
    this.g = a;
    ma(a) || (a = ha(a) ? a : [a], a = od(a));
    this.f = a;
    this.s()
  };
  qe.prototype.b = function(a) {
    this.P = a
  };
  qe.prototype.k = function(a) {
    gd(this, Fd(this.a), this.ic, !1, this);
    this.a = a;
    K(this, Fd(this.a), this.ic, !1, this);
    this.ic()
  };

  function re() {
    var a = new le({
        color: "rgba(255,255,255,0.4)"
      }),
      b = new ne({
        color: "#3399CC",
        width: 1.25
      }),
      c = [new pe({
        image: new oe({
          fill: a,
          stroke: b,
          radius: 5
        }),
        fill: a,
        stroke: b
      })];
    re = function() {
      return c
    };
    return c
  }

  function se(a, b) {
    var c = a.f;
    u(c) || (c = re);
    return c.call(a, b)
  }

  function te(a) {
    ma(a) || (a = ha(a) ? a : [a], a = od(a));
    return a
  };

  function ue(a, b, c, d, e, f) {
    Hc.call(this, a, b);
    this.vectorContext = c;
    this.frameState = d;
    this.context = e;
    this.glContext = f
  }
  E(ue, Hc);

  function ve(a) {
    a = u(a) ? a : {};
    this.i = this.d = this.e = this.c = this.b = this.a = null;
    this.f = u(a.style) ? te(a.style) : void 0;
    u(a.features) ? ha(a.features) ? this.Tb(new Jd(Ra(a.features))) : this.Tb(a.features) : this.Tb(new Jd);
    u(a.map) && this.setMap(a.map)
  }
  l = ve.prototype;
  l.Vd = function(a) {
    this.a.push(a)
  };
  l.Ag = k("a");
  l.Wd = function() {
    we(this)
  };
  l.Jf = function(a) {
    a = a.element;
    this.c[v(a).toString()] = K(a, "change", this.Wd, !1, this);
    we(this)
  };
  l.Kf = function(a) {
    a = v(a.element).toString();
    L(this.c[a]);
    delete this.c[a];
    we(this)
  };
  l.Dg = function(a) {
    if (null !== this.a) {
      var b = this.f;
      u(b) || (b = se);
      var c = a.frameState.view2DState.resolution,
        d = a.vectorContext,
        e, f, g;
      this.a.forEach(function(a) {
        g = b(a, c);
        if (null != g)
          for (f = g.length, e = 0; e < f; ++e) d.Jc(a, g[e])
      }, this)
    }
  };
  l.Wc = function(a) {
    this.a.remove(a)
  };

  function we(a) {
    null === a.e || a.e.J()
  }
  l.Tb = function(a) {
    null !== this.b && (Ka(this.b, L), this.b = null);
    null !== this.c && (Ka(Xb(this.c), L), this.c = null);
    this.a = a;
    if (null !== a) {
      this.b = [K(a, "add", this.Jf, !1, this), K(a, "remove", this.Kf, !1, this)];
      this.c = {};
      a = a.a;
      var b, c = a.length,
        d;
      for (b = 0; b < c; ++b) d = a[b], this.c[v(d).toString()] = K(d, "change", this.Wd, !1, this)
    }
    we(this)
  };
  l.setMap = function(a) {
    null !== this.d && (L(this.d), this.d = null);
    we(this);
    this.e = a;
    null !== a && (this.d = K(a, "postcompose", this.Dg, !1, this), a.J())
  };
  l.Eg = function(a) {
    this.i = a;
    this.f = te(a);
    we(this)
  };
  l.Bg = k("i");
  l.Cg = k("f");

  function xe(a, b) {
    var c = a[0],
      d = a[1],
      e = b[0],
      f = b[1],
      g = e[0],
      e = e[1],
      h = f[0],
      f = f[1],
      m = h - g,
      n = f - e,
      c = 0 === m && 0 === n ? 0 : (m * (c - g) + n * (d - e)) / (m * m + n * n || 0);
    0 >= c || (1 <= c ? (g = h, e = f) : (g += c * m, e += c * n));
    return [g, e]
  }

  function ye(a, b) {
    var c = Pb(a + 180, 360) - 180,
      d = Math.abs(Math.round(3600 * c));
    return Math.floor(d / 3600) + "\u00b0 " + Math.floor(d / 60 % 60) + "\u2032 " + Math.floor(d % 60) + "\u2033 " + b.charAt(0 > c ? 1 : 0)
  }

  function ze(a, b, c) {
    return u(a) ? b.replace("{x}", a[0].toFixed(c)).replace("{y}", a[1].toFixed(c)) : ""
  }

  function Ae(a, b) {
    for (var c = !0, d = a.length - 1; 0 <= d; --d)
      if (a[d] != b[d]) {
        c = !1;
        break
      }
    return c
  }

  function Be(a, b) {
    var c = Math.cos(b),
      d = Math.sin(b),
      e = a[1] * c + a[0] * d;
    a[0] = a[0] * c - a[1] * d;
    a[1] = e;
    return a
  }

  function Ce(a, b) {
    var c = a[0] - b[0],
      d = a[1] - b[1];
    return c * c + d * d
  }

  function De(a, b) {
    return ze(a, "{x}, {y}", b)
  };

  function Ee(a) {
    for (var b = Fe(), c = 0, d = a.length; c < d; ++c) {
      var e = b,
        f = a[c];
      f[0] < e[0] && (e[0] = f[0]);
      f[0] > e[2] && (e[2] = f[0]);
      f[1] < e[1] && (e[1] = f[1]);
      f[1] > e[3] && (e[3] = f[1])
    }
    return b
  }

  function Ge(a, b, c) {
    var d = Math.min.apply(null, a),
      e = Math.min.apply(null, b);
    a = Math.max.apply(null, a);
    b = Math.max.apply(null, b);
    return He(d, e, a, b, c)
  }

  function Ie(a, b, c) {
    return u(c) ? (c[0] = a[0] - b, c[1] = a[1] - b, c[2] = a[2] + b, c[3] = a[3] + b, c) : [a[0] - b, a[1] - b, a[2] + b, a[3] + b]
  }

  function Je(a, b) {
    return u(b) ? (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b) : a.slice()
  }

  function Ke(a, b, c) {
    b = b < a[0] ? a[0] - b : a[2] < b ? b - a[2] : 0;
    a = c < a[1] ? a[1] - c : a[3] < c ? c - a[3] : 0;
    return b * b + a * a
  }

  function Le(a, b) {
    return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3]
  }

  function Fe() {
    return [Infinity, Infinity, -Infinity, -Infinity]
  }

  function He(a, b, c, d, e) {
    return u(e) ? (e[0] = a, e[1] = b, e[2] = c, e[3] = d, e) : [a, b, c, d]
  }

  function Me(a) {
    return He(Infinity, Infinity, -Infinity, -Infinity, a)
  }

  function Ne(a, b) {
    return a[0] == b[0] && a[2] == b[2] && a[1] == b[1] && a[3] == b[3]
  }

  function Oe(a, b) {
    b[0] < a[0] && (a[0] = b[0]);
    b[2] > a[2] && (a[2] = b[2]);
    b[1] < a[1] && (a[1] = b[1]);
    b[3] > a[3] && (a[3] = b[3]);
    return a
  }

  function Pe(a, b, c, d, e) {
    for (; c < d; c += e) {
      var f = a,
        g = b[c],
        h = b[c + 1];
      f[0] = Math.min(f[0], g);
      f[1] = Math.min(f[1], h);
      f[2] = Math.max(f[2], g);
      f[3] = Math.max(f[3], h)
    }
    return a
  }

  function Qe(a) {
    return [a[0], a[1]]
  }

  function Re(a) {
    return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
  }

  function Se(a, b, c, d) {
    var e = b * d[0] / 2;
    d = b * d[1] / 2;
    b = Math.cos(c);
    c = Math.sin(c);
    e = [-e, -e, e, e];
    d = [-d, d, -d, d];
    var f, g, h;
    for (f = 0; 4 > f; ++f) g = e[f], h = d[f], e[f] = a[0] + g * b - h * c, d[f] = a[1] + g * c + h * b;
    return Ge(e, d, void 0)
  }

  function Te(a) {
    return a[3] - a[1]
  }

  function Ue(a) {
    return [a[0], a[3]]
  }

  function Ve(a) {
    return a[2] - a[0]
  }

  function We(a, b) {
    return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1]
  }

  function Xe(a) {
    return a[2] < a[0] || a[3] < a[1]
  }

  function Ye(a, b) {
    return u(b) ? (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b) : a
  }

  function Ze(a, b) {
    var c = (a[2] - a[0]) / 2 * (b - 1),
      d = (a[3] - a[1]) / 2 * (b - 1);
    a[0] -= c;
    a[2] += c;
    a[1] -= d;
    a[3] += d
  }

  function $e(a, b) {
    return We(a, b) && (a[0] == b[2] || a[2] == b[0] || a[1] == b[3] || a[3] == b[1])
  }

  function af(a, b, c) {
    a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
    b(a, a, 2);
    return Ge([a[0], a[2], a[4], a[6]], [a[1], a[3], a[5], a[7]], c)
  };

  function bf(a, b) {
    var c, d;
    c = 0;
    for (d = b.length; c < d; ++c) a.push(b[c])
  }

  function cf(a, b, c) {
    var d = a.length;
    if (a[0] <= b) return 0;
    if (!(b <= a[d - 1]))
      if (0 < c)
        for (c = 1; c < d; ++c) {
          if (a[c] < b) return c - 1
        } else if (0 > c)
          for (c = 1; c < d; ++c) {
            if (a[c] <= b) return c
          } else
            for (c = 1; c < d; ++c) {
              if (a[c] == b) return c;
              if (a[c] < b) return a[c - 1] - b < b - a[c] ? c - 1 : c
            }
        return d - 1
  };

  function df(a, b, c, d) {
    var e = c[0],
      f = c[1],
      g = c[4],
      h = c[5],
      m = c[12];
    c = c[13];
    var n = u(d) ? d : [],
      p = 0,
      q, r;
    q = 0;
    for (r = a.length; q < r; q += b) {
      var s = a[q],
        z = a[q + 1];
      n[p++] = e * s + g * z + m;
      n[p++] = f * s + h * z + c
    }
    u(d) && n.length != p && (n.length = p);
    return n
  };

  function ef() {
    Md.call(this);
    this.b = "XY";
    this.a = 2;
    this.h = null
  }
  E(ef, Md);

  function ff(a) {
    if ("XY" == a) return 2;
    if ("XYZ" == a || "XYM" == a) return 3;
    if ("XYZM" == a) return 4;
    throw Error("unsupported layout: " + a);
  }
  l = ef.prototype;
  l.Ra = pd;
  l.p = function(a) {
    if (this.e != this.c) {
      var b = this.h,
        c = this.h.length,
        d = this.a,
        e = Me(this.extent);
      this.extent = Pe(e, b, 0, c, d);
      this.e = this.c
    }
    return Ye(this.extent, a)
  };
  l.ef = function() {
    return this.h.slice(0, this.a)
  };
  l.nf = function() {
    return this.h.slice(this.h.length - this.a)
  };
  l.of = k("b");
  l.Wa = function(a) {
    this.j != this.c && ($b(this.f), this.i = 0, this.j = this.c);
    if (0 > a || 0 !== this.i && a <= this.i) return this;
    var b = a.toString();
    if (this.f.hasOwnProperty(b)) return this.f[b];
    var c = this.kb(a);
    if (c.h.length < this.h.length) return this.f[b] = c;
    this.i = a;
    return this
  };
  l.kb = function() {
    return this
  };

  function gf(a, b, c) {
    a.a = ff(b);
    a.b = b;
    a.h = c
  }

  function hf(a, b, c, d) {
    if (u(b)) c = ff(b);
    else {
      for (b = 0; b < d; ++b) {
        if (0 === c.length) {
          a.b = "XY";
          a.a = 2;
          return
        }
        c = c[0]
      }
      c = c.length;
      if (2 == c) b = "XY";
      else if (3 == c) b = "XYZ";
      else if (4 == c) b = "XYZM";
      else throw Error("unsupported stride: " + c);
    }
    a.b = b;
    a.a = c
  }
  l.transform = function(a) {
    null !== this.h && (a(this.h, this.h, this.a), this.s())
  };

  function jf(a, b, c) {
    var d = a.h;
    return null === d ? null : df(d, a.a, b, c)
  };

  function kf(a, b, c, d) {
    for (var e = 0, f = a[c - d], g = a[c - d + 1]; b < c; b += d) var h = a[b],
      m = a[b + 1],
      e = e + (g * h - f * m),
      f = h,
      g = m;
    return e / 2
  }

  function lf(a, b, c, d) {
    var e = 0,
      f, g;
    f = 0;
    for (g = c.length; f < g; ++f) {
      var h = c[f],
        e = e + kf(a, b, h, d);
      b = h
    }
    return e
  };

  function mf(a, b, c, d) {
    a = c - a;
    b = d - b;
    return a * a + b * b
  };

  function nf(a, b, c, d, e, f, g) {
    var h = a[b],
      m = a[b + 1],
      n = a[c] - h,
      p = a[c + 1] - m;
    if (0 !== n || 0 !== p)
      if (f = ((e - h) * n + (f - m) * p) / (n * n + p * p), 1 < f) b = c;
      else if (0 < f) {
      for (e = 0; e < d; ++e) g[e] = a[b + e] + f * (a[c + e] - a[b + e]);
      g.length = d;
      return
    }
    for (e = 0; e < d; ++e) g[e] = a[b + e];
    g.length = d
  }

  function of(a, b, c, d, e) {
    var f = a[b],
      g = a[b + 1];
    for (b += d; b < c; b += d) {
      var h = a[b],
        m = a[b + 1],
        f = mf(f, g, h, m);
      f > e && (e = f);
      f = h;
      g = m
    }
    return e
  }

  function pf(a, b, c, d, e) {
    var f, g;
    f = 0;
    for (g = c.length; f < g; ++f) {
      var h = c[f];
      e = of(a, b, h, d, e);
      b = h
    }
    return e
  }

  function qf(a, b, c, d, e, f, g, h, m, n, p) {
    if (b == c) return n;
    var q;
    if (0 === e) {
      q = mf(g, h, a[b], a[b + 1]);
      if (q < n) {
        for (p = 0; p < d; ++p) m[p] = a[b + p];
        m.length = d;
        return q
      }
      return n
    }
    for (var r = u(p) ? p : [NaN, NaN], s = b + d; s < c;)
      if (nf(a, s - d, s, d, g, h, r), q = mf(g, h, r[0], r[1]), q < n) {
        n = q;
        for (p = 0; p < d; ++p) m[p] = r[p];
        m.length = d;
        s += d
      } else s += d * Math.max((Math.sqrt(q) - Math.sqrt(n)) / e | 0, 1);
    if (f && (nf(a, c - d, b, d, g, h, r), q = mf(g, h, r[0], r[1]), q < n)) {
      n = q;
      for (p = 0; p < d; ++p) m[p] = r[p];
      m.length = d
    }
    return n
  }

  function rf(a, b, c, d, e, f, g, h, m, n, p) {
    p = u(p) ? p : [NaN, NaN];
    var q, r;
    q = 0;
    for (r = c.length; q < r; ++q) {
      var s = c[q];
      n = qf(a, b, s, d, e, f, g, h, m, n, p);
      b = s
    }
    return n
  };

  function sf(a, b) {
    var c = 0,
      d, e;
    d = 0;
    for (e = b.length; d < e; ++d) a[c++] = b[d];
    return c
  }

  function tf(a, b, c, d) {
    var e, f;
    e = 0;
    for (f = c.length; e < f; ++e) {
      var g = c[e],
        h;
      for (h = 0; h < d; ++h) a[b++] = g[h]
    }
    return b
  }

  function uf(a, b, c, d, e) {
    e = u(e) ? e : [];
    var f = 0,
      g, h;
    g = 0;
    for (h = c.length; g < h; ++g) b = tf(a, b, c[g], d), e[f++] = b;
    e.length = f;
    return e
  };

  function vf(a, b, c, d, e) {
    e = u(e) ? e : [];
    for (var f = 0; b < c; b += d) e[f++] = a.slice(b, b + d);
    e.length = f;
    return e
  }

  function wf(a, b, c, d, e) {
    e = u(e) ? e : [];
    var f = 0,
      g, h;
    g = 0;
    for (h = c.length; g < h; ++g) {
      var m = c[g];
      e[f++] = vf(a, b, m, d, e[f]);
      b = m
    }
    e.length = f;
    return e
  };

  function xf(a, b, c, d, e, f, g) {
    var h = (c - b) / d;
    if (3 > h) {
      for (; b < c; b += d) f[g++] = a[b], f[g++] = a[b + 1];
      return g
    }
    var m = Array(h);
    m[0] = 1;
    m[h - 1] = 1;
    c = [b, c - d];
    for (var n = 0, p; 0 < c.length;) {
      var q = c.pop(),
        r = c.pop(),
        s = 0,
        z = a[r],
        x = a[r + 1],
        w = a[q],
        B = a[q + 1];
      for (p = r + d; p < q; p += d) {
        var A;
        A = a[p];
        var D = a[p + 1],
          H = z,
          P = x,
          J = w - H,
          U = B - P;
        if (0 !== J || 0 !== U) {
          var Z = ((A - H) * J + (D - P) * U) / (J * J + U * U);
          1 < Z ? (H = w, P = B) : 0 < Z && (H += J * Z, P += U * Z)
        }
        A = mf(A, D, H, P);
        A > s && (n = p, s = A)
      }
      s > e && (m[(n - b) / d] = 1, r + d < n && c.push(r, n), n + d < q && c.push(n, q))
    }
    for (p = 0; p < h; ++p) m[p] && (f[g++] = a[b + p *
      d], f[g++] = a[b + p * d + 1]);
    return g
  }

  function yf(a, b, c, d, e, f, g, h) {
    var m, n;
    m = 0;
    for (n = c.length; m < n; ++m) {
      var p = c[m];
      a: {
        var q = a,
          r = p,
          s = d,
          z = e,
          x = f;
        if (b != r) {
          var w = z * Math.round(q[b] / z),
            B = z * Math.round(q[b + 1] / z);
          b += s;
          x[g++] = w;
          x[g++] = B;
          var A = void 0,
            D = void 0;
          do
            if (A = z * Math.round(q[b] / z), D = z * Math.round(q[b + 1] / z), b += s, b == r) {
              x[g++] = A;
              x[g++] = D;
              break a
            }
          while (A == w && D == B);
          for (; b < r;) {
            var H, P;
            H = z * Math.round(q[b] / z);
            P = z * Math.round(q[b + 1] / z);
            b += s;
            if (H != A || P != D) {
              var J = A - w,
                U = D - B,
                Z = H - w,
                na = P - B;
              J * na == U * Z && (0 > J && Z < J || J == Z || 0 < J && Z > J) && (0 > U && na < U || U == na || 0 < U && na > U) ||
                (x[g++] = A, x[g++] = D, w = A, B = D);
              A = H;
              D = P
            }
          }
          x[g++] = A;
          x[g++] = D
        }
      }
      h.push(g);
      b = p
    }
    return g
  };

  function zf(a, b) {
    ef.call(this);
    this.d = this.g = -1;
    this.I(a, b)
  }
  E(zf, ef);
  l = zf.prototype;
  l.H = function() {
    var a = new zf(null);
    Af(a, this.b, this.h.slice());
    return a
  };
  l.ca = function(a, b, c, d) {
    if (d < Ke(this.p(), a, b)) return d;
    this.d != this.c && (this.g = Math.sqrt(of(this.h, 0, this.h.length, this.a, 0)), this.d = this.c);
    return qf(this.h, 0, this.h.length, this.a, this.g, !0, a, b, c, d)
  };
  l.Og = function() {
    return kf(this.h, 0, this.h.length, this.a)
  };
  l.v = function() {
    return vf(this.h, 0, this.h.length, this.a)
  };
  l.kb = function(a) {
    var b = [];
    b.length = xf(this.h, 0, this.h.length, this.a, a, b, 0);
    a = new zf(null);
    Af(a, "XY", b);
    return a
  };
  l.A = ba("LinearRing");
  l.I = function(a, b) {
    null === a ? Af(this, "XY", null) : (hf(this, b, a, 1), null === this.h && (this.h = []), this.h.length = tf(this.h, 0, a, this.a), this.s())
  };

  function Af(a, b, c) {
    gf(a, b, c);
    a.s()
  };

  function Bf(a, b) {
    ef.call(this);
    this.I(a, b)
  }
  E(Bf, ef);
  l = Bf.prototype;
  l.H = function() {
    var a = new Bf(null);
    Cf(a, this.b, this.h.slice());
    return a
  };
  l.ca = function(a, b, c, d) {
    var e = this.h;
    a = mf(a, b, e[0], e[1]);
    if (a < d) {
      d = this.a;
      for (b = 0; b < d; ++b) c[b] = e[b];
      c.length = d;
      return a
    }
    return d
  };
  l.v = function() {
    return this.h.slice()
  };
  l.p = function(a) {
    if (this.e != this.c) {
      var b = this.h,
        c = b[0],
        b = b[1];
      this.extent = He(c, b, c, b, this.extent);
      this.e = this.c
    }
    return Ye(this.extent, a)
  };
  l.A = ba("Point");
  l.I = function(a, b) {
    null === a ? Cf(this, "XY", null) : (hf(this, b, a, 0), null === this.h && (this.h = []), this.h.length = sf(this.h, a), this.s())
  };

  function Cf(a, b, c) {
    gf(a, b, c);
    a.s()
  };

  function Df(a, b, c, d, e, f) {
    for (var g = !1, h = a[c - d], m = a[c - d + 1]; b < c; b += d) {
      var n = a[b],
        p = a[b + 1];
      m > f != p > f && e < (n - h) * (f - m) / (p - m) + h && (g = !g);
      h = n;
      m = p
    }
    return g
  }

  function Ef(a, b, c, d, e, f) {
    if (0 === c.length || !Df(a, b, c[0], d, e, f)) return !1;
    var g;
    b = 1;
    for (g = c.length; b < g; ++b)
      if (Df(a, c[b - 1], c[b], d, e, f)) return !1;
    return !0
  };

  function Ff(a, b, c, d, e, f, g) {
    var h, m, n, p, q, r = e[f + 1],
      s = [],
      z = c[0];
    n = a[z - d];
    q = a[z - d + 1];
    for (h = b; h < z; h += d) {
      p = a[h];
      m = a[h + 1];
      if (r <= q && m <= r || q <= r && r <= m) n = (r - q) / (m - q) * (p - n) + n, s.push(n);
      n = p;
      q = m
    }
    z = NaN;
    q = -Infinity;
    s.sort();
    n = s[0];
    h = 1;
    for (m = s.length; h < m; ++h) {
      p = s[h];
      var x = Math.abs(p - n);
      x > q && (n = (n + p) / 2, Ef(a, b, c, d, n, r) && (z = n, q = x));
      n = p
    }
    isNaN(z) && (z = e[f]);
    return u(g) ? (g.push(z, r), g) : [z, r]
  };

  function Gf(a, b, c, d) {
    for (var e = 0, f = a[c - d], g = a[c - d + 1]; b < c; b += d) var h = a[b],
      m = a[b + 1],
      e = e + (h - f) * (m + g),
      f = h,
      g = m;
    return 0 < e
  }

  function Hf(a, b, c) {
    var d = 0,
      e, f;
    e = 0;
    for (f = b.length; e < f; ++e) {
      var g = b[e],
        d = Gf(a, d, g, c);
      if (0 === e ? !d : d) return !1;
      d = g
    }
    return !0
  }

  function If(a, b, c, d) {
    var e, f;
    e = 0;
    for (f = c.length; e < f; ++e) {
      var g = c[e],
        h = Gf(a, b, g, d);
      if (0 === e ? !h : h)
        for (var h = a, m = g, n = d; b < m - n;) {
          var p;
          for (p = 0; p < n; ++p) {
            var q = h[b + p];
            h[b + p] = h[m - n + p];
            h[m - n + p] = q
          }
          b += n;
          m -= n
        }
      b = g
    }
    return b
  };

  function Jf(a, b) {
    ef.call(this);
    this.d = [];
    this.k = -1;
    this.l = null;
    this.r = this.n = this.o = -1;
    this.g = null;
    this.I(a, b)
  }
  E(Jf, ef);
  l = Jf.prototype;
  l.Qe = function(a) {
    null === this.h ? this.h = a.h.slice() : bf(this.h, a.h);
    this.d.push(this.h.length);
    this.s()
  };
  l.H = function() {
    var a = new Jf(null);
    Kf(a, this.b, this.h.slice(), this.d.slice());
    return a
  };
  l.ca = function(a, b, c, d) {
    if (d < Ke(this.p(), a, b)) return d;
    this.n != this.c && (this.o = Math.sqrt(pf(this.h, 0, this.d, this.a, 0)), this.n = this.c);
    return rf(this.h, 0, this.d, this.a, this.o, !0, a, b, c, d)
  };
  l.Ra = function(a, b) {
    return Ef(Lf(this), 0, this.d, this.a, a, b)
  };
  l.Rg = function() {
    return lf(Lf(this), 0, this.d, this.a)
  };
  l.v = function() {
    return wf(this.h, 0, this.d, this.a)
  };

  function Mf(a) {
    if (a.k != a.c) {
      var b = Re(a.p());
      a.l = Ff(Lf(a), 0, a.d, a.a, b, 0);
      a.k = a.c
    }
    return a.l
  }
  l.lf = function() {
    return new Bf(Mf(this))
  };
  l.sf = function(a) {
    if (0 > a || this.d.length <= a) return null;
    var b = new zf(null);
    Af(b, this.b, this.h.slice(0 === a ? 0 : this.d[a - 1], this.d[a]));
    return b
  };
  l.Id = function() {
    var a = this.b,
      b = this.h,
      c = this.d,
      d = [],
      e = 0,
      f, g;
    f = 0;
    for (g = c.length; f < g; ++f) {
      var h = c[f],
        m = new zf(null);
      Af(m, a, b.slice(e, h));
      d.push(m);
      e = h
    }
    return d
  };

  function Lf(a) {
    if (a.r != a.c) {
      var b = a.h;
      Hf(b, a.d, a.a) ? a.g = b : (a.g = b.slice(), a.g.length = If(a.g, 0, a.d, a.a));
      a.r = a.c
    }
    return a.g
  }
  l.kb = function(a) {
    var b = [],
      c = [];
    b.length = yf(this.h, 0, this.d, this.a, Math.sqrt(a), b, 0, c);
    a = new Jf(null);
    Kf(a, "XY", b, c);
    return a
  };
  l.A = ba("Polygon");
  l.I = function(a, b) {
    if (null === a) Kf(this, "XY", null, this.d);
    else {
      hf(this, b, a, 2);
      null === this.h && (this.h = []);
      var c = uf(this.h, 0, a, this.a, this.d);
      this.h.length = 0 === c.length ? 0 : c[c.length - 1];
      this.s()
    }
  };

  function Kf(a, b, c, d) {
    gf(a, b, c);
    a.d = d;
    a.s()
  };
  /*

 Latitude/longitude spherical geodesy formulae taken from
 http://www.movable-type.co.uk/scripts/latlong.html
 Licenced under CC-BY-3.0.
*/
  function Nf(a) {
    this.radius = a
  }

  function Of(a, b, c) {
    var d = Qb(b[1]),
      e = Qb(c[1]),
      f = (e - d) / 2;
    b = Qb(c[0] - b[0]) / 2;
    d = Math.sin(f) * Math.sin(f) + Math.sin(b) * Math.sin(b) * Math.cos(d) * Math.cos(e);
    return 2 * a.radius * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d))
  };
  var Pf = new Nf(6370997);
  var Qf = {},
    Rf = "object" == typeof Proj4js;
  Qf.degrees = 2 * Math.PI * Pf.radius / 360;
  Qf.ft = 0.3048;
  Qf.m = 1;

  function Sf(a) {
    this.a = a.code;
    this.la = a.units;
    this.k = u(a.extent) ? a.extent : null;
    this.c = u(a.axisOrientation) ? a.axisOrientation : "enu";
    this.j = u(a.global) ? a.global : !1;
    this.f = null
  }
  Sf.prototype.g = k("a");
  Sf.prototype.p = k("k");
  Sf.prototype.l = k("la");
  Sf.prototype.b = function() {
    return Qf[this.la]
  };

  function Tf(a) {
    return a.c
  }

  function Uf(a, b) {
    var c = {
      units: a.units,
      axisOrientation: a.axis
    };
    ec(c, b);
    Sf.call(this, c);
    this.i = a;
    this.e = null
  }
  E(Uf, Sf);
  Uf.prototype.b = function() {
    var a = this.i.to_meter;
    u(a) || (a = Qf[this.la]);
    return a
  };
  Uf.prototype.d = function(a, b) {
    if ("degrees" == this.la) return a;
    null === this.e && (this.e = Vf(this, Wf({
      code: "EPSG:4326",
      extent: null
    })));
    var c = [b[0] - a / 2, b[1], b[0] + a / 2, b[1], b[0], b[1] - a / 2, b[0], b[1] + a / 2],
      c = this.e(c, c, 2),
      d = Of(Pf, c.slice(0, 2), c.slice(2, 4)),
      c = Of(Pf, c.slice(4, 6), c.slice(6, 8)),
      d = (d + c) / 2;
    "ft" == this.la && (d /= 0.3048);
    return d
  };

  function Xf(a) {
    return a.i
  }
  var Yf = {},
    Zf = {},
    ag = {};

  function bg(a) {
    cg(a);
    Ka(a, function(b) {
      Ka(a, function(a) {
        b !== a && dg(b, a, eg)
      })
    })
  }

  function fg() {
    var a = gg,
      b = hg,
      c = ig;
    Ka(jg, function(d) {
      Ka(a, function(a) {
        dg(d, a, b);
        dg(a, d, c)
      })
    })
  }

  function kg(a) {
    Zf[a.a] = a;
    dg(a, a, eg)
  }

  function cg(a) {
    Ka(a, function(a) {
      kg(a)
    })
  }

  function lg(a) {
    return null != a ? ka(a) ? mg(a) : a : mg("EPSG:3857")
  }

  function dg(a, b, c) {
    a = a.a;
    b = b.a;
    a in ag || (ag[a] = {});
    ag[a][b] = c
  }

  function mg(a) {
    var b;
    a instanceof Sf ? b = a : ka(a) ? (b = Zf[a], Rf && !u(b) && (b = Wf({
      code: a,
      extent: null
    })), u(b) || (b = null)) : b = null;
    return b
  }

  function Wf(a) {
    var b = a.code,
      c = Yf[b];
    if (!u(c)) {
      var d = new Proj4js.Proj(b),
        e = d.srsCode,
        c = Yf[e];
      u(c) || (a = cc(a), a.code = e, c = new Uf(d, a), Yf[e] = c);
      Yf[b] = c
    }
    return c
  }

  function ng(a, b) {
    var c = mg(a),
      d = mg(b);
    return Vf(c, d)
  }

  function Vf(a, b) {
    var c = a.a,
      d = b.a,
      e;
    c in ag && d in ag[c] && (e = ag[c][d]);
    if (Rf && !u(e)) {
      var f = Xf(a instanceof Uf ? a : Wf({
          code: c,
          extent: null
        })),
        g = Xf(b instanceof Uf ? b : Wf({
          code: d,
          extent: null
        }));
      e = function(a, b, c) {
        var d = a.length;
        c = 1 < c ? c : 2;
        u(b) || (b = 2 < c ? a.slice() : Array(d));
        for (var e, r = 0; r < d; r += c) e = new Proj4js.Point(a[r], a[r + 1]), e = Proj4js.transform(f, g, e), b[r] = e.x, b[r + 1] = e.y;
        return b
      };
      dg(a, b, e)
    }
    u(e) || (e = og);
    return e
  }

  function og(a, b) {
    if (u(b) && a !== b) {
      for (var c = 0, d = a.length; c < d; ++c) b[c] = a[c];
      a = b
    }
    return a
  }

  function eg(a, b) {
    var c;
    if (u(b)) {
      c = 0;
      for (var d = a.length; c < d; ++c) b[c] = a[c];
      c = b
    } else c = a.slice();
    return c
  };
  var pg = new Nf(6378137);

  function O(a) {
    N.call(this);
    a = u(a) ? a : {};
    this.a = null;
    this.d = og;
    this.b = void 0;
    K(this, Fd("projection"), this.Hg, !1, this);
    K(this, Fd("tracking"), this.Ig, !1, this);
    u(a.projection) && this.l(mg(a.projection));
    u(a.trackingOptions) && this.n(a.trackingOptions);
    this.f(u(a.tracking) ? a.tracking : !1)
  }
  E(O, N);
  l = O.prototype;
  l.w = function() {
    this.f(!1);
    O.B.w.call(this)
  };
  l.Hg = function() {
    var a = this.j();
    null != a && (this.d = Vf(mg("EPSG:4326"), a), null === this.a || this.t("position", this.d(this.a)))
  };
  l.Ig = function() {
    if (I.wd) {
      var a = this.k();
      a && !u(this.b) ? this.b = t.navigator.geolocation.watchPosition(y(this.Qh, this), y(this.Rh, this), this.g()) : !a && u(this.b) && (t.navigator.geolocation.clearWatch(this.b), this.b = void 0)
    }
  };
  l.Qh = function(a) {
    var b = a.coords;
    this.t("accuracy", b.accuracy);
    this.t("altitude", null === b.altitude ? void 0 : b.altitude);
    this.t("altitudeAccuracy", null === b.altitudeAccuracy ? void 0 : b.altitudeAccuracy);
    this.t("heading", null === b.heading ? void 0 : Qb(b.heading));
    null === this.a ? this.a = [b.longitude, b.latitude] : (this.a[0] = b.longitude, this.a[1] = b.latitude);
    a = this.d(this.a);
    this.t("position", a);
    this.t("speed", null === b.speed ? void 0 : b.speed);
    a = this.a;
    var c = b.accuracy,
      d = u(void 0) ? void 0 : 32,
      b = [],
      e;
    for (e = 0; e < d; ++e) {
      var f =
        2 * Math.PI * e / d,
        g = Qb(a[1]),
        h = c / pg.radius,
        m = Math.asin(Math.sin(g) * Math.cos(h) + Math.cos(g) * Math.sin(h) * Math.cos(f));
      Sa(b, [180 * (Qb(a[0]) + Math.atan2(Math.sin(f) * Math.sin(h) * Math.cos(g), Math.cos(h) - Math.sin(g) * Math.sin(m))) / Math.PI, 180 * m / Math.PI])
    }
    b.push(b[0], b[1]);
    a = new Jf(null);
    Kf(a, "XY", b, [b.length]);
    a.transform(this.d);
    this.t("accuracyGeometry", a);
    this.s()
  };
  l.Rh = function(a) {
    a.type = "error";
    M(this, a)
  };
  l.$e = function() {
    return this.get("accuracy")
  };
  O.prototype.getAccuracy = O.prototype.$e;
  O.prototype.o = function() {
    return this.get("accuracyGeometry") || null
  };
  O.prototype.getAccuracyGeometry = O.prototype.o;
  O.prototype.r = function() {
    return this.get("altitude")
  };
  O.prototype.getAltitude = O.prototype.r;
  O.prototype.q = function() {
    return this.get("altitudeAccuracy")
  };
  O.prototype.getAltitudeAccuracy = O.prototype.q;
  O.prototype.G = function() {
    return this.get("heading")
  };
  O.prototype.getHeading = O.prototype.G;
  O.prototype.L = function() {
    return this.get("position")
  };
  O.prototype.getPosition = O.prototype.L;
  O.prototype.j = function() {
    return this.get("projection")
  };
  O.prototype.getProjection = O.prototype.j;
  O.prototype.u = function() {
    return this.get("speed")
  };
  O.prototype.getSpeed = O.prototype.u;
  O.prototype.k = function() {
    return this.get("tracking")
  };
  O.prototype.getTracking = O.prototype.k;
  O.prototype.g = function() {
    return this.get("trackingOptions")
  };
  O.prototype.getTrackingOptions = O.prototype.g;
  O.prototype.l = function(a) {
    this.t("projection", a)
  };
  O.prototype.setProjection = O.prototype.l;
  O.prototype.f = function(a) {
    this.t("tracking", a)
  };
  O.prototype.setTracking = O.prototype.f;
  O.prototype.n = function(a) {
    this.t("trackingOptions", a)
  };
  O.prototype.setTrackingOptions = O.prototype.n;

  function qg(a, b) {
    xd.call(this);
    this.a = a;
    this.state = b
  }
  E(qg, xd);
  qg.prototype.d = function() {
    return v(this).toString()
  };
  qg.prototype.j = k("a");

  function rg(a, b, c, d, e) {
    qg.call(this, a, b);
    this.g = c;
    this.c = new Image;
    null !== d && (this.c.crossOrigin = d);
    this.f = {};
    this.e = null;
    this.n = e
  }
  E(rg, qg);
  rg.prototype.b = function(a) {
    if (u(a)) {
      var b = v(a);
      if (b in this.f) return this.f[b];
      a = Zb(this.f) ? this.c : this.c.cloneNode(!1);
      return this.f[b] = a
    }
    return this.c
  };
  rg.prototype.d = k("g");
  rg.prototype.k = function() {
    this.state = 3;
    Ka(this.e, L);
    this.e = null;
    M(this, "change")
  };
  rg.prototype.l = function() {
    u(this.c.naturalWidth) || (this.c.naturalWidth = this.c.width, this.c.naturalHeight = this.c.height);
    this.state = this.c.naturalWidth && this.c.naturalHeight ? 2 : 4;
    Ka(this.e, L);
    this.e = null;
    M(this, "change")
  };

  function sg() {
    N.call(this);
    this.k = [0, 0]
  }
  E(sg, N);
  sg.prototype.M = ba(null);
  sg.prototype.Xc = ba(!1);

  function tg(a, b) {
    a.k[1] += b
  };

  function ug(a) {
    return 1 - Math.pow(1 - a, 3)
  };

  function vg(a) {
    return 3 * a * a - 2 * a * a * a
  }

  function wg(a) {
    return a
  }

  function xg(a) {
    return 0.5 > a ? vg(2 * a) : 1 - vg(2 * (a - 0.5))
  };

  function yg(a) {
    var b = a.source,
      c = u(a.start) ? a.start : wa(),
      d = b[0],
      e = b[1],
      f = u(a.duration) ? a.duration : 1E3,
      g = u(a.easing) ? a.easing : vg;
    return function(a, b) {
      if (b.time < c) return b.animate = !0, b.viewHints[0] += 1, !0;
      if (b.time < c + f) {
        var n = 1 - g((b.time - c) / f),
          p = d - b.view2DState.center[0],
          q = e - b.view2DState.center[1];
        b.animate = !0;
        b.view2DState.center[0] += n * p;
        b.view2DState.center[1] += n * q;
        b.viewHints[0] += 1;
        return !0
      }
      return !1
    }
  }

  function zg(a) {
    var b = a.rotation,
      c = u(a.start) ? a.start : wa(),
      d = u(a.duration) ? a.duration : 1E3,
      e = u(a.easing) ? a.easing : vg;
    return function(a, g) {
      if (g.time < c) return g.animate = !0, g.viewHints[0] += 1, !0;
      if (g.time < c + d) {
        var h = 1 - e((g.time - c) / d),
          m = b - g.view2DState.rotation;
        g.animate = !0;
        g.view2DState.rotation += h * m;
        g.viewHints[0] += 1;
        return !0
      }
      return !1
    }
  }

  function Ag(a) {
    var b = a.resolution,
      c = u(a.start) ? a.start : wa(),
      d = u(a.duration) ? a.duration : 1E3,
      e = u(a.easing) ? a.easing : vg;
    return function(a, g) {
      if (g.time < c) return g.animate = !0, g.viewHints[0] += 1, !0;
      if (g.time < c + d) {
        var h = 1 - e((g.time - c) / d),
          m = b - g.view2DState.resolution;
        g.animate = !0;
        g.view2DState.resolution += h * m;
        g.viewHints[0] += 1;
        return !0
      }
      return !1
    }
  };

  function Bg(a, b, c) {
    this.e = a;
    this.b = b;
    this.f = c;
    this.a = [];
    this.c = this.d = 0
  }
  Bg.prototype.update = function(a, b) {
    this.a.push(a, b, wa())
  };

  function Cg(a, b) {
    var c = a.e,
      d = a.c,
      e = a.b,
      f = Math.log(a.b / a.c) / a.e;
    return yg({
      source: b,
      duration: f,
      easing: function(a) {
        return d * (Math.exp(c * a * f) - 1) / (e - d)
      }
    })
  };

  function Dg(a) {
    if ("function" == typeof a.qa) return a.qa();
    if (ka(a)) return a.split("");
    if (ia(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
      return b
    }
    return Xb(a)
  }

  function Eg(a, b, c) {
    if ("function" == typeof a.forEach) a.forEach(b, c);
    else if (ia(a) || ka(a)) Ka(a, b, c);
    else {
      var d;
      if ("function" == typeof a.pa) d = a.pa();
      else if ("function" != typeof a.qa)
        if (ia(a) || ka(a)) {
          d = [];
          for (var e = a.length, f = 0; f < e; f++) d.push(f)
        } else d = Yb(a);
      else d = void 0;
      for (var e = Dg(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
    }
  };

  function Fg(a, b) {
    this.c = {};
    this.a = [];
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2) Gg(this, arguments[d], arguments[d + 1])
    } else if (a) {
      a instanceof Fg ? (c = a.pa(), d = a.qa()) : (c = Yb(a), d = Xb(a));
      for (var e = 0; e < c.length; e++) Gg(this, c[e], d[e])
    }
  }
  l = Fg.prototype;
  l.D = 0;
  l.pd = 0;
  l.oa = k("D");
  l.qa = function() {
    Hg(this);
    for (var a = [], b = 0; b < this.a.length; b++) a.push(this.c[this.a[b]]);
    return a
  };
  l.pa = function() {
    Hg(this);
    return this.a.concat()
  };
  l.V = function() {
    return 0 == this.D
  };
  l.clear = function() {
    this.c = {};
    this.pd = this.D = this.a.length = 0
  };
  l.remove = function(a) {
    return Ig(this.c, a) ? (delete this.c[a], this.D--, this.pd++, this.a.length > 2 * this.D && Hg(this), !0) : !1
  };

  function Hg(a) {
    if (a.D != a.a.length) {
      for (var b = 0, c = 0; b < a.a.length;) {
        var d = a.a[b];
        Ig(a.c, d) && (a.a[c++] = d);
        b++
      }
      a.a.length = c
    }
    if (a.D != a.a.length) {
      for (var e = {}, c = b = 0; b < a.a.length;) d = a.a[b], Ig(e, d) || (a.a[c++] = d, e[d] = 1), b++;
      a.a.length = c
    }
  }
  l.get = function(a, b) {
    return Ig(this.c, a) ? this.c[a] : b
  };

  function Gg(a, b, c) {
    Ig(a.c, b) || (a.D++, a.a.push(b), a.pd++);
    a.c[b] = c
  }
  l.H = function() {
    return new Fg(this)
  };

  function Ig(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  };
  var Jg = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?\x3d[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

  function Kg(a) {
    if (Lg) {
      Lg = !1;
      var b = t.location;
      if (b) {
        var c = b.href;
        if (c && (c = (c = Kg(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname) throw Lg = !0, Error();
      }
    }
    return a.match(Jg)
  }
  var Lg = tb;

  function Mg(a) {
    if (a[1]) {
      var b = a[0],
        c = b.indexOf("#");
      0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
      c = b.indexOf("?");
      0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = void 0)
    }
    return a.join("")
  }

  function Ng(a, b, c) {
    if (ha(b))
      for (var d = 0; d < b.length; d++) Ng(a, String(b[d]), c);
    else null != b && c.push("\x26", a, "" === b ? "" : "\x3d", encodeURIComponent(String(b)))
  }

  function Og(a, b) {
    for (var c in b) Ng(c, b[c], a);
    return a
  };

  function Pg(a, b) {
    var c;
    if (a instanceof Pg) this.Xa = u(b) ? b : a.Xa, Qg(this, a.Ma), c = a.fb, Rg(this), this.fb = c, c = a.va, Rg(this), this.va = c, Sg(this, a.sb), c = a.ta, Rg(this), this.ta = c, Tg(this, a.a.H()), c = a.Ta, Rg(this), this.Ta = c;
    else if (a && (c = Kg(String(a)))) {
      this.Xa = !!b;
      Qg(this, c[1] || "", !0);
      var d = c[2] || "";
      Rg(this);
      this.fb = d ? decodeURIComponent(d) : "";
      d = c[3] || "";
      Rg(this);
      this.va = d ? decodeURIComponent(d) : "";
      Sg(this, c[4]);
      d = c[5] || "";
      Rg(this);
      this.ta = d ? decodeURIComponent(d) : "";
      Tg(this, c[6] || "", !0);
      c = c[7] || "";
      Rg(this);
      this.Ta =
        c ? decodeURIComponent(c) : ""
    } else this.Xa = !!b, this.a = new Ug(null, 0, this.Xa)
  }
  l = Pg.prototype;
  l.Ma = "";
  l.fb = "";
  l.va = "";
  l.sb = null;
  l.ta = "";
  l.Ta = "";
  l.hg = !1;
  l.Xa = !1;
  l.toString = function() {
    var a = [],
      b = this.Ma;
    b && a.push(Vg(b, Wg), ":");
    if (b = this.va) {
      a.push("//");
      var c = this.fb;
      c && a.push(Vg(c, Wg), "@");
      a.push(encodeURIComponent(String(b)));
      b = this.sb;
      null != b && a.push(":", String(b))
    }
    if (b = this.ta) this.va && "/" != b.charAt(0) && a.push("/"), a.push(Vg(b, "/" == b.charAt(0) ? Xg : Yg));
    (b = this.a.toString()) && a.push("?", b);
    (b = this.Ta) && a.push("#", Vg(b, Zg));
    return a.join("")
  };
  l.H = function() {
    return new Pg(this)
  };

  function Qg(a, b, c) {
    Rg(a);
    a.Ma = c ? b ? decodeURIComponent(b) : "" : b;
    a.Ma && (a.Ma = a.Ma.replace(/:$/, ""))
  }

  function Sg(a, b) {
    Rg(a);
    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
      a.sb = b
    } else a.sb = null
  }

  function Tg(a, b, c) {
    Rg(a);
    b instanceof Ug ? (a.a = b, $g(a.a, a.Xa)) : (c || (b = Vg(b, ah)), a.a = new Ug(b, 0, a.Xa))
  }

  function bh(a, b, c) {
    Rg(a);
    ha(c) || (c = [String(c)]);
    ch(a.a, b, c)
  }

  function Rg(a) {
    if (a.hg) throw Error("Tried to modify a read-only Uri");
  }

  function dh(a) {
    return a instanceof Pg ? a.H() : new Pg(a, void 0)
  }

  function eh(a, b) {
    a instanceof Pg || (a = dh(a));
    b instanceof Pg || (b = dh(b));
    var c = a,
      d = b,
      e = c.H(),
      f = !!d.Ma;
    f ? Qg(e, d.Ma) : f = !!d.fb;
    if (f) {
      var g = d.fb;
      Rg(e);
      e.fb = g
    } else f = !!d.va;
    f ? (g = d.va, Rg(e), e.va = g) : f = null != d.sb;
    g = d.ta;
    if (f) Sg(e, d.sb);
    else if (f = !!d.ta)
      if ("/" != g.charAt(0) && (c.va && !c.ta ? g = "/" + g : (c = e.ta.lastIndexOf("/"), -1 != c && (g = e.ta.substr(0, c + 1) + g))), ".." == g || "." == g) g = "";
      else if (-1 != g.indexOf("./") || -1 != g.indexOf("/.")) {
      for (var c = 0 == g.lastIndexOf("/", 0), g = g.split("/"), h = [], m = 0; m < g.length;) {
        var n = g[m++];
        "." ==
          n ? c && m == g.length && h.push("") : ".." == n ? ((1 < h.length || 1 == h.length && "" != h[0]) && h.pop(), c && m == g.length && h.push("")) : (h.push(n), c = !0)
      }
      g = h.join("/")
    }
    f ? (c = g, Rg(e), e.ta = c) : f = "" !== d.a.toString();
    f ? Tg(e, d.a.toString() ? decodeURIComponent(d.a.toString()) : "") : f = !!d.Ta;
    f && (d = d.Ta, Rg(e), e.Ta = d);
    return e
  }

  function Vg(a, b) {
    return ka(a) ? encodeURI(a).replace(b, fh) : null
  }

  function fh(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
  }
  var Wg = /[#\/\?@]/g,
    Yg = /[\#\?:]/g,
    Xg = /[\#\?]/g,
    ah = /[\#\?@]/g,
    Zg = /#/g;

  function Ug(a, b, c) {
    this.a = a || null;
    this.c = !!c
  }

  function gh(a) {
    if (!a.Q && (a.Q = new Fg, a.D = 0, a.a))
      for (var b = a.a.split("\x26"), c = 0; c < b.length; c++) {
        var d = b[c].indexOf("\x3d"),
          e = null,
          f = null;
        0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
        e = decodeURIComponent(e.replace(/\+/g, " "));
        e = hh(a, e);
        a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
      }
  }
  l = Ug.prototype;
  l.Q = null;
  l.D = null;
  l.oa = function() {
    gh(this);
    return this.D
  };
  l.add = function(a, b) {
    gh(this);
    this.a = null;
    a = hh(this, a);
    var c = this.Q.get(a);
    c || Gg(this.Q, a, c = []);
    c.push(b);
    this.D++;
    return this
  };
  l.remove = function(a) {
    gh(this);
    a = hh(this, a);
    return Ig(this.Q.c, a) ? (this.a = null, this.D -= this.Q.get(a).length, this.Q.remove(a)) : !1
  };
  l.clear = function() {
    this.Q = this.a = null;
    this.D = 0
  };
  l.V = function() {
    gh(this);
    return 0 == this.D
  };
  l.pa = function() {
    gh(this);
    for (var a = this.Q.qa(), b = this.Q.pa(), c = [], d = 0; d < b.length; d++)
      for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c
  };
  l.qa = function(a) {
    gh(this);
    var b = [];
    if (a) {
      var c = a;
      gh(this);
      c = hh(this, c);
      Ig(this.Q.c, c) && (b = Qa(b, this.Q.get(hh(this, a))))
    } else
      for (a = this.Q.qa(), c = 0; c < a.length; c++) b = Qa(b, a[c]);
    return b
  };
  l.get = function(a, b) {
    var c = a ? this.qa(a) : [];
    return 0 < c.length ? String(c[0]) : b
  };

  function ch(a, b, c) {
    a.remove(b);
    0 < c.length && (a.a = null, Gg(a.Q, hh(a, b), Ra(c)), a.D += c.length)
  }
  l.toString = function() {
    if (this.a) return this.a;
    if (!this.Q) return "";
    for (var a = [], b = this.Q.pa(), c = 0; c < b.length; c++)
      for (var d = b[c], e = encodeURIComponent(String(d)), d = this.qa(d), f = 0; f < d.length; f++) {
        var g = e;
        "" !== d[f] && (g += "\x3d" + encodeURIComponent(String(d[f])));
        a.push(g)
      }
    return this.a = a.join("\x26")
  };
  l.H = function() {
    var a = new Ug;
    a.a = this.a;
    this.Q && (a.Q = this.Q.H(), a.D = this.D);
    return a
  };

  function hh(a, b) {
    var c = String(b);
    a.c && (c = c.toLowerCase());
    return c
  }

  function $g(a, b) {
    b && !a.c && (gh(a), a.a = null, Eg(a.Q, function(a, b) {
      var e = b.toLowerCase();
      b != e && (this.remove(b), ch(this, e, a))
    }, a));
    a.c = b
  };

  function ih(a, b, c) {
    Cc.call(this);
    this.d = a;
    this.b = c;
    this.a = b || window;
    this.c = y(this.Dd, this)
  }
  E(ih, Cc);
  l = ih.prototype;
  l.P = null;
  l.od = !1;
  l.start = function() {
    jh(this);
    this.od = !1;
    var a = kh(this),
      b = lh(this);
    a && !b && this.a.mozRequestAnimationFrame ? (this.P = K(this.a, "MozBeforePaint", this.c), this.a.mozRequestAnimationFrame(null), this.od = !0) : this.P = a && b ? a.call(this.a, this.c) : this.a.setTimeout(td(this.c), 20)
  };

  function jh(a) {
    if (null != a.P) {
      var b = kh(a),
        c = lh(a);
      b && !c && a.a.mozRequestAnimationFrame ? L(a.P) : b && c ? c.call(a.a, a.P) : a.a.clearTimeout(a.P)
    }
    a.P = null
  }
  l.Dd = function() {
    this.od && this.P && L(this.P);
    this.P = null;
    this.d.call(this.b, wa())
  };
  l.w = function() {
    jh(this);
    ih.B.w.call(this)
  };

  function kh(a) {
    a = a.a;
    return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || null
  }

  function lh(a) {
    a = a.a;
    return a.cancelRequestAnimationFrame || a.webkitCancelRequestAnimationFrame || a.mozCancelRequestAnimationFrame || a.oCancelRequestAnimationFrame || a.msCancelRequestAnimationFrame || null
  };
  var mh;

  function nh() {
    var a = t.MessageChannel;
    "undefined" === typeof a && ("undefined" !== typeof window && window.postMessage && window.addEventListener) && (a = function() {
      var a = document.createElement("iframe");
      a.style.display = "none";
      a.src = "";
      document.body.appendChild(a);
      var b = a.contentWindow,
        a = b.document;
      a.open();
      a.write("");
      a.close();
      var c = "callImmediate" + Math.random(),
        d = b.location.protocol + "//" + b.location.host,
        a = y(function(a) {
          if (a.origin == d || a.data == c) this.port1.onmessage()
        }, this);
      b.addEventListener("message", a, !1);
      this.port1 = {};
      this.port2 = {
        postMessage: function() {
          b.postMessage(c, d)
        }
      }
    });
    if ("undefined" !== typeof a) {
      var b = new a,
        c = {},
        d = c;
      b.port1.onmessage = function() {
        c = c.next;
        var a = c.zd;
        c.zd = null;
        a()
      };
      return function(a) {
        d.next = {
          zd: a
        };
        d = d.next;
        b.port2.postMessage(0)
      }
    }
    return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function(a) {
        var b = document.createElement("script");
        b.onreadystatechange = function() {
          b.onreadystatechange = null;
          b.parentNode.removeChild(b);
          b = null;
          a();
          a = null
        };
        document.documentElement.appendChild(b)
      } :
      function(a) {
        t.setTimeout(a, 0)
      }
  };

  function oh(a) {
    xd.call(this);
    this.Wb = a || window;
    this.hc = K(this.Wb, "resize", this.Yf, !1, this);
    this.Ya = lc(this.Wb || window)
  }
  E(oh, xd);
  l = oh.prototype;
  l.hc = null;
  l.Wb = null;
  l.Ya = null;
  l.w = function() {
    oh.B.w.call(this);
    this.hc && (L(this.hc), this.hc = null);
    this.Ya = this.Wb = null
  };
  l.Yf = function() {
    var a = lc(this.Wb || window);
    a == this.Ya || a && this.Ya && a.width == this.Ya.width && a.height == this.Ya.height || (this.Ya = a, M(this, "resize"))
  };

  function ph(a, b, c, d, e) {
    if (!(F || tb && Gb("525"))) return !0;
    if (jb && e) return qh(a);
    if (e && !d || !c && (17 == b || 18 == b || jb && 91 == b)) return !1;
    if (tb && d && c) switch (a) {
      case 220:
      case 219:
      case 221:
      case 192:
      case 186:
      case 189:
      case 187:
      case 188:
      case 190:
      case 191:
      case 192:
      case 222:
        return !1
    }
    if (F && d && b == a) return !1;
    switch (a) {
      case 13:
        return !(F && F && 9 <= Ib);
      case 27:
        return !tb
    }
    return qh(a)
  }

  function qh(a) {
    if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || tb && 0 == a) return !0;
    switch (a) {
      case 32:
      case 63:
      case 107:
      case 109:
      case 110:
      case 111:
      case 186:
      case 59:
      case 189:
      case 187:
      case 61:
      case 188:
      case 190:
      case 191:
      case 192:
      case 222:
      case 219:
      case 220:
      case 221:
        return !0;
      default:
        return !1
    }
  }

  function rh(a) {
    switch (a) {
      case 61:
        return 187;
      case 59:
        return 186;
      case 224:
        return 91;
      case 0:
        return 224;
      default:
        return a
    }
  };

  function sh(a, b) {
    xd.call(this);
    a && uh(this, a, b)
  }
  E(sh, xd);
  l = sh.prototype;
  l.Pb = null;
  l.lc = null;
  l.Tc = null;
  l.mc = null;
  l.W = -1;
  l.Ia = -1;
  l.Ec = !1;
  var vh = {
      3: 13,
      12: 144,
      63232: 38,
      63233: 40,
      63234: 37,
      63235: 39,
      63236: 112,
      63237: 113,
      63238: 114,
      63239: 115,
      63240: 116,
      63241: 117,
      63242: 118,
      63243: 119,
      63244: 120,
      63245: 121,
      63246: 122,
      63247: 123,
      63248: 44,
      63272: 46,
      63273: 36,
      63275: 35,
      63276: 33,
      63277: 34,
      63289: 144,
      63302: 45
    },
    wh = {
      Up: 38,
      Down: 40,
      Left: 37,
      Right: 39,
      Enter: 13,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      "U+007F": 46,
      Home: 36,
      End: 35,
      PageUp: 33,
      PageDown: 34,
      Insert: 45
    },
    xh = F || tb && Gb("525"),
    yh = jb && sb;
  sh.prototype.a = function(a) {
    tb && (17 == this.W && !a.Ob || 18 == this.W && !a.Z || jb && 91 == this.W && !a.Sc) && (this.Ia = this.W = -1); - 1 == this.W && (a.Ob && 17 != a.wa ? this.W = 17 : a.Z && 18 != a.wa ? this.W = 18 : a.Sc && 91 != a.wa && (this.W = 91));
    xh && !ph(a.wa, this.W, a.xa, a.Ob, a.Z) ? this.handleEvent(a) : (this.Ia = sb ? rh(a.wa) : a.wa, yh && (this.Ec = a.Z))
  };
  sh.prototype.c = function(a) {
    this.Ia = this.W = -1;
    this.Ec = a.Z
  };
  sh.prototype.handleEvent = function(a) {
    var b = a.F,
      c, d, e = b.altKey;
    F && "keypress" == a.type ? (c = this.Ia, d = 13 != c && 27 != c ? b.keyCode : 0) : tb && "keypress" == a.type ? (c = this.Ia, d = 0 <= b.charCode && 63232 > b.charCode && qh(c) ? b.charCode : 0) : rb ? (c = this.Ia, d = qh(c) ? b.keyCode : 0) : (c = b.keyCode || this.Ia, d = b.charCode || 0, yh && (e = this.Ec), jb && (63 == d && 224 == c) && (c = 191));
    var f = c,
      g = b.keyIdentifier;
    c ? 63232 <= c && c in vh ? f = vh[c] : 25 == c && a.xa && (f = 9) : g && g in wh && (f = wh[g]);
    a = f == this.W;
    this.W = f;
    b = new zh(f, d, a, b);
    b.Z = e;
    M(this, b)
  };

  function uh(a, b, c) {
    a.mc && Ah(a);
    a.Pb = b;
    a.lc = K(a.Pb, "keypress", a, c);
    a.Tc = K(a.Pb, "keydown", a.a, c, a);
    a.mc = K(a.Pb, "keyup", a.c, c, a)
  }

  function Ah(a) {
    a.lc && (L(a.lc), L(a.Tc), L(a.mc), a.lc = null, a.Tc = null, a.mc = null);
    a.Pb = null;
    a.W = -1;
    a.Ia = -1
  }
  sh.prototype.w = function() {
    sh.B.w.call(this);
    Ah(this)
  };

  function zh(a, b, c, d) {
    d && Qc(this, d, void 0);
    this.type = "key";
    this.wa = a;
    this.Rc = b;
    this.a = c
  }
  E(zh, Pc);

  function Bh(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
  }
  l = Bh.prototype;
  l.H = function() {
    return new Bh(this.top, this.right, this.bottom, this.left)
  };
  l.contains = function(a) {
    return this && a ? a instanceof Bh ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
  };
  l.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
  };
  l.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
  };
  l.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
  };
  l.scale = function(a, b) {
    var c = la(b) ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= c;
    this.bottom *= c;
    return this
  };

  function Ch(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
  }
  l = Ch.prototype;
  l.H = function() {
    return new Ch(this.left, this.top, this.width, this.height)
  };
  l.contains = function(a) {
    return a instanceof Ch ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
  };
  l.ceil = function() {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
  };
  l.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
  };
  l.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
  };
  l.scale = function(a, b) {
    var c = la(b) ? b : a;
    this.left *= a;
    this.width *= a;
    this.top *= c;
    this.height *= c;
    return this
  };

  function Dh(a, b) {
    var c = hc(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
  }

  function Eh(a, b) {
    return Dh(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
  }

  function Fh(a, b, c) {
    var d, e = sb && (jb || wb) && Gb("1.9");
    b instanceof Rb ? (d = b.x, b = b.y) : (d = b, b = c);
    a.style.left = Gh(d, e);
    a.style.top = Gh(b, e)
  }

  function Hh(a) {
    var b;
    try {
      b = a.getBoundingClientRect()
    } catch (c) {
      return {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }
    }
    F && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
  }

  function Ih(a) {
    if (F && !(F && 8 <= Ib)) return a.offsetParent;
    var b = hc(a),
      c = Eh(a, "position"),
      d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)
      if (c = Eh(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
    return null
  }

  function Jh(a) {
    var b, c = hc(a),
      d = Eh(a, "position"),
      e = sb && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
      f = new Rb(0, 0),
      g;
    b = c ? hc(c) : document;
    (g = !F) || (g = F && 9 <= Ib) || (fc(b), g = !0);
    g = g ? b.documentElement : b.body;
    if (a == g) return f;
    if (a.getBoundingClientRect) b = Hh(a), a = xc(fc(c)), f.x = b.left + a.x, f.y = b.top + a.y;
    else if (c.getBoxObjectFor && !e) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(g), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
    else {
      e = a;
      do {
        f.x += e.offsetLeft;
        f.y += e.offsetTop;
        e != a && (f.x += e.clientLeft || 0, f.y += e.clientTop || 0);
        if (tb && "fixed" == Eh(e, "position")) {
          f.x += c.body.scrollLeft;
          f.y += c.body.scrollTop;
          break
        }
        e = e.offsetParent
      } while (e && e != a);
      if (rb || tb && "absolute" == d) f.y -= c.body.offsetTop;
      for (e = a;
        (e = Ih(e)) && e != c.body && e != g;) f.x -= e.scrollLeft, rb && "TR" == e.tagName || (f.y -= e.scrollTop)
    }
    return f
  }

  function Kh(a, b) {
    var c = Lh(a),
      d = Lh(b);
    return new Rb(c.x - d.x, c.y - d.y)
  }

  function Lh(a) {
    if (1 == a.nodeType) {
      var b;
      if (a.getBoundingClientRect) b = Hh(a), b = new Rb(b.left, b.top);
      else {
        b = xc(fc(a));
        var c = Jh(a);
        b = new Rb(c.x - b.x, c.y - b.y)
      } if (sb && !Gb(12)) {
        var d;
        F ? d = "-ms-transform" : tb ? d = "-webkit-transform" : rb ? d = "-o-transform" : sb && (d = "-moz-transform");
        var e;
        d && (e = Eh(a, d));
        e || (e = Eh(a, "transform"));
        a = e ? (a = e.match(Mh)) ? new Rb(parseFloat(a[1]), parseFloat(a[2])) : new Rb(0, 0) : new Rb(0, 0);
        a = new Rb(b.x + a.x, b.y + a.y)
      } else a = b;
      return a
    }
    d = ma(a.af);
    e = a;
    a.targetTouches ? e = a.targetTouches[0] : d && a.F.targetTouches &&
      (e = a.F.targetTouches[0]);
    return new Rb(e.clientX, e.clientY)
  }

  function Gh(a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a
  }

  function Nh(a) {
    var b = Oh;
    if ("none" != Eh(a, "display")) return b(a);
    var c = a.style,
      d = c.display,
      e = c.visibility,
      f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a
  }

  function Oh(a) {
    var b = a.offsetWidth,
      c = a.offsetHeight,
      d = tb && !b && !c;
    return u(b) && !d || !a.getBoundingClientRect ? new Sb(b, c) : (a = Hh(a), new Sb(a.right - a.left, a.bottom - a.top))
  }

  function Ph(a, b) {
    var c = a.style;
    "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity\x3d" + 100 * b + ")")
  }

  function Qh(a, b) {
    a.style.display = b ? "" : "none"
  }

  function Rh(a) {
    return "rtl" == Eh(a, "direction")
  }

  function Sh(a) {
    var b = hc(a),
      c = F && a.currentStyle,
      d;
    if (d = c) fc(b), d = "auto" != c.width && "auto" != c.height && !c.boxSizing;
    if (d) return b = Th(a, c.width, "width", "pixelWidth"), a = Th(a, c.height, "height", "pixelHeight"), new Sb(b, a);
    c = new Sb(a.offsetWidth, a.offsetHeight);
    b = Uh(a, "padding");
    a = Vh(a);
    return new Sb(c.width - a.left - b.left - b.right - a.right, c.height - a.top - b.top - b.bottom - a.bottom)
  }

  function Th(a, b, c, d) {
    if (/^\d+px?$/.test(b)) return parseInt(b, 10);
    var e = a.style[c],
      f = a.runtimeStyle[c];
    a.runtimeStyle[c] = a.currentStyle[c];
    a.style[c] = b;
    b = a.style[d];
    a.style[c] = e;
    a.runtimeStyle[c] = f;
    return b
  }

  function Wh(a, b) {
    var c = a.currentStyle ? a.currentStyle[b] : null;
    return c ? Th(a, c, "left", "pixelLeft") : 0
  }

  function Uh(a, b) {
    if (F) {
      var c = Wh(a, b + "Left"),
        d = Wh(a, b + "Right"),
        e = Wh(a, b + "Top"),
        f = Wh(a, b + "Bottom");
      return new Bh(e, d, f, c)
    }
    c = Dh(a, b + "Left");
    d = Dh(a, b + "Right");
    e = Dh(a, b + "Top");
    f = Dh(a, b + "Bottom");
    return new Bh(parseFloat(e), parseFloat(d), parseFloat(f), parseFloat(c))
  }
  var Xh = {
    thin: 2,
    medium: 4,
    thick: 6
  };

  function Yh(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
    return c in Xh ? Xh[c] : Th(a, c, "left", "pixelLeft")
  }

  function Vh(a) {
    if (F) {
      var b = Yh(a, "borderLeft"),
        c = Yh(a, "borderRight"),
        d = Yh(a, "borderTop");
      a = Yh(a, "borderBottom");
      return new Bh(d, c, a, b)
    }
    b = Dh(a, "borderLeftWidth");
    c = Dh(a, "borderRightWidth");
    d = Dh(a, "borderTopWidth");
    a = Dh(a, "borderBottomWidth");
    return new Bh(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
  }
  var Mh = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;

  function Zh(a, b) {
    xd.call(this);
    this.a = a;
    var c = oa(this.a) && 1 == this.a.nodeType ? this.a : this.a ? this.a.body : null;
    this.e = !!c && Rh(c);
    this.c = K(this.a, sb ? "DOMMouseScroll" : "mousewheel", this, b)
  }
  E(Zh, xd);
  Zh.prototype.handleEvent = function(a) {
    var b = 0,
      c = 0,
      d = 0;
    a = a.F;
    if ("mousewheel" == a.type) {
      c = 1;
      if (F || tb && (kb || Gb("532.0"))) c = 40;
      d = $h(-a.wheelDelta, c);
      u(a.wheelDeltaX) ? (b = $h(-a.wheelDeltaX, c), c = $h(-a.wheelDeltaY, c)) : c = d
    } else d = a.detail, 100 < d ? d = 3 : -100 > d && (d = -3), u(a.axis) && a.axis === a.HORIZONTAL_AXIS ? b = d : c = d;
    la(this.b) && (b = Ob(b, -this.b, this.b));
    la(this.d) && (c = Ob(c, -this.d, this.d));
    this.e && (b = -b);
    b = new ai(d, a, b, c);
    M(this, b)
  };

  function $h(a, b) {
    return tb && (jb || lb) && 0 != a % b ? a : a / b
  }
  Zh.prototype.w = function() {
    Zh.B.w.call(this);
    L(this.c);
    this.c = null
  };

  function ai(a, b, c, d) {
    b && Qc(this, b, void 0);
    this.type = "mousewheel";
    this.detail = a;
    this.b = c;
    this.a = d
  }
  E(ai, Pc);

  function bi(a, b, c) {
    Hc.call(this, a);
    this.map = b;
    this.b = u(c) ? c : null
  }
  E(bi, Hc);

  function ci(a, b, c) {
    Hc.call(this, a);
    this.a = b;
    a = u(c) ? c : {};
    this.buttons = di(a);
    this.bd = ei(a, this.buttons);
    this.bubbles = G(a, "bubbles", !1);
    this.cancelable = G(a, "cancelable", !1);
    this.view = G(a, "view", null);
    this.detail = G(a, "detail", null);
    this.screenX = G(a, "screenX", 0);
    this.screenY = G(a, "screenY", 0);
    this.clientX = G(a, "clientX", 0);
    this.clientY = G(a, "clientY", 0);
    this.d = G(a, "ctrlKey", !1);
    this.b = G(a, "altKey", !1);
    this.i = G(a, "shiftKey", !1);
    this.f = G(a, "metaKey", !1);
    this.button = G(a, "button", 0);
    this.relatedTarget = G(a, "relatedTarget",
      null);
    this.pointerId = G(a, "pointerId", 0);
    this.width = G(a, "width", 0);
    this.height = G(a, "height", 0);
    this.g = G(a, "tiltX", 0);
    this.j = G(a, "tiltY", 0);
    this.pointerType = G(a, "pointerType", "");
    this.e = G(a, "hwTimestamp", 0);
    this.kc = G(a, "isPrimary", !1);
    b.preventDefault && (this.preventDefault = function() {
      b.preventDefault()
    })
  }
  E(ci, Hc);

  function di(a) {
    if (a.buttons || fi) a = a.buttons;
    else switch (a.which) {
      case 1:
        a = 1;
        break;
      case 2:
        a = 4;
        break;
      case 3:
        a = 2;
        break;
      default:
        a = 0
    }
    return a
  }

  function ei(a, b) {
    var c = 0;
    return c = a.bd ? a.bd : b ? 0.5 : 0
  }
  var fi = !1;
  try {
    fi = 1 === (new MouseEvent("click", {
      buttons: 1
    })).buttons
  } catch (gi) {};

  function hi(a, b) {
    this.a = a;
    this.e = b
  };

  function ii(a) {
    hi.call(this, a, {
      mousedown: this.kg,
      mousemove: this.lg,
      mouseup: this.og,
      mouseover: this.ng,
      mouseout: this.mg
    });
    this.c = a.c;
    this.b = []
  }
  E(ii, hi);

  function ji(a, b) {
    for (var c = a.b, d = b.clientX, e = b.clientY, f = 0, g = c.length, h; f < g && (h = c[f]); f++) {
      var m = Math.abs(e - h[1]);
      if (25 >= Math.abs(d - h[0]) && 25 >= m) return !0
    }
    return !1
  }

  function ki(a) {
    var b = li(a, a.F),
      c = b.preventDefault;
    b.preventDefault = function() {
      a.preventDefault();
      c()
    };
    b.pointerId = 1;
    b.kc = !0;
    b.pointerType = "mouse";
    return b
  }
  l = ii.prototype;
  l.kg = function(a) {
    if (!ji(this, a)) {
      (1).toString() in this.c && this.cancel(a);
      var b = ki(a);
      this.c[(1).toString()] = a;
      mi(this.a, ni, b, a)
    }
  };
  l.lg = function(a) {
    if (!ji(this, a)) {
      var b = ki(a);
      mi(this.a, oi, b, a)
    }
  };
  l.og = function(a) {
    if (!ji(this, a)) {
      var b = G(this.c, (1).toString());
      b && b.button === a.button && (b = ki(a), mi(this.a, pi, b, a), ac(this.c, (1).toString()))
    }
  };
  l.ng = function(a) {
    if (!ji(this, a)) {
      var b = ki(a);
      qi(this.a, b, a)
    }
  };
  l.mg = function(a) {
    if (!ji(this, a)) {
      var b = ki(a);
      ri(this.a, b, a)
    }
  };
  l.cancel = function(a) {
    var b = ki(a);
    this.a.cancel(b, a);
    ac(this.c, (1).toString())
  };

  function si(a) {
    hi.call(this, a, {
      MSPointerDown: this.tg,
      MSPointerMove: this.ug,
      MSPointerUp: this.xg,
      MSPointerOut: this.vg,
      MSPointerOver: this.wg,
      MSPointerCancel: this.sg,
      MSGotPointerCapture: this.qg,
      MSLostPointerCapture: this.rg
    });
    this.c = a.c;
    this.b = ["", "unavailable", "touch", "pen", "mouse"]
  }
  E(si, hi);

  function ti(a, b) {
    var c = b;
    la(b.F.pointerType) && (c = li(b, b.F), c.pointerType = a.b[b.F.pointerType]);
    return c
  }
  l = si.prototype;
  l.tg = function(a) {
    this.c[a.F.pointerId] = a;
    var b = ti(this, a);
    mi(this.a, ni, b, a)
  };
  l.ug = function(a) {
    var b = ti(this, a);
    mi(this.a, oi, b, a)
  };
  l.xg = function(a) {
    var b = ti(this, a);
    mi(this.a, pi, b, a);
    ac(this.c, a.F.pointerId)
  };
  l.vg = function(a) {
    var b = ti(this, a);
    ri(this.a, b, a)
  };
  l.wg = function(a) {
    var b = ti(this, a);
    qi(this.a, b, a)
  };
  l.sg = function(a) {
    var b = ti(this, a);
    this.a.cancel(b, a);
    ac(this.c, a.F.pointerId)
  };
  l.rg = function(a) {
    M(this.a, new ci("lostpointercapture", a, a.F))
  };
  l.qg = function(a) {
    M(this.a, new ci("gotpointercapture", a, a.F))
  };

  function ui(a) {
    hi.call(this, a, {
      pointerdown: this.Lh,
      pointermove: this.Mh,
      pointerup: this.Ph,
      pointerout: this.Nh,
      pointerover: this.Oh,
      pointercancel: this.Kh,
      gotpointercapture: this.Gf,
      lostpointercapture: this.ig
    })
  }
  E(ui, hi);
  l = ui.prototype;
  l.Lh = function(a) {
    vi(this.a, a)
  };
  l.Mh = function(a) {
    vi(this.a, a)
  };
  l.Ph = function(a) {
    vi(this.a, a)
  };
  l.Nh = function(a) {
    vi(this.a, a)
  };
  l.Oh = function(a) {
    vi(this.a, a)
  };
  l.Kh = function(a) {
    vi(this.a, a)
  };
  l.ig = function(a) {
    vi(this.a, a)
  };
  l.Gf = function(a) {
    vi(this.a, a)
  };

  function wi(a, b) {
    hi.call(this, a, {
      touchstart: this.mi,
      touchmove: this.li,
      touchend: this.ki,
      touchcancel: this.ji
    });
    this.c = a.c;
    this.i = b;
    this.b = void 0;
    this.f = 0;
    this.d = void 0
  }
  E(wi, hi);
  l = wi.prototype;
  l.ke = function() {
    this.f = 0;
    this.d = void 0
  };
  l.ii = function(a, b) {
    var c = li(a, b);
    c.pointerId = b.identifier + 2;
    c.bubbles = !0;
    c.cancelable = !0;
    c.detail = this.f;
    c.button = 0;
    c.buttons = 1;
    c.width = b.webkitRadiusX || b.radiusX || 0;
    c.height = b.webkitRadiusY || b.radiusY || 0;
    c.bd = b.webkitForce || b.force || 0.5;
    c.kc = this.b === b.identifier;
    c.pointerType = "touch";
    c.clientX = b.clientX;
    c.clientY = b.clientY;
    c.screenX = b.screenX;
    c.screenY = b.screenY;
    return c
  };

  function xi(a, b, c) {
    var d = Ra(b.F.changedTouches),
      d = La(d, va(a.ii, b), a);
    Ka(d, function(a) {
      a.preventDefault = function() {
        b.preventDefault()
      }
    }, a);
    Ka(d, va(c, b), a)
  }

  function yi(a, b) {
    var c = b.F.touches;
    if (Vb(a.c) >= c.length) {
      var d = [];
      Tb(a.c, function(a, b) {
        var g;
        if (!(g = 1 == b)) a: {
          g = c.length;
          for (var h, m = 0; m < g; m++)
            if (h = c[m], h.identifier === b - 2) {
              g = !0;
              break a
            }
          g = !1
        }
        g || d.push(a.ab)
      }, a);
      Ka(d, va(a.Hc, b), a)
    }
  }
  l.mi = function(a) {
    yi(this, a);
    var b = Vb(this.c),
      c;
    if (!(c = 0 === b)) {
      if (b = 1 === b) b = (1).toString() in this.c;
      c = b
    }
    c && (this.b = a.F.changedTouches[0].identifier, u(this.d) && t.clearTimeout(this.d));
    zi(this, a);
    this.f++;
    xi(this, a, this.Jh)
  };
  l.Jh = function(a, b) {
    this.c[b.pointerId] = {
      target: b.target,
      ab: b,
      ge: b.target
    };
    var c = this.a;
    b.bubbles = !0;
    mi(c, Ai, b, a);
    c = this.a;
    b.bubbles = !1;
    mi(c, Bi, b, a);
    mi(this.a, ni, b, a)
  };
  l.li = function(a) {
    a.preventDefault();
    xi(this, a, this.pg)
  };
  l.pg = function(a, b) {
    var c = G(this.c, b.pointerId);
    if (c) {
      var d = c.ab,
        e = c.ge;
      mi(this.a, oi, b, a);
      d && e !== b.target && (d.relatedTarget = b.target, b.relatedTarget = e, d.target = e, b.target ? (ri(this.a, d, a), qi(this.a, b, a)) : (b.target = e, b.relatedTarget = null, this.Hc(a, b)));
      c.ab = b;
      c.ge = b.target
    }
  };
  l.ki = function(a) {
    zi(this, a);
    xi(this, a, this.qi)
  };
  l.qi = function(a, b) {
    mi(this.a, pi, b, a);
    this.a.ab(b, a);
    var c = this.a;
    b.bubbles = !1;
    mi(c, Ci, b, a);
    ac(this.c, b.pointerId);
    b.kc && (this.b = void 0, this.d = t.setTimeout(this.ke, 200))
  };
  l.ji = function(a) {
    xi(this, a, this.Hc)
  };
  l.Hc = function(a, b) {
    this.a.cancel(b, a);
    this.a.ab(b, a);
    var c = this.a;
    b.bubbles = !1;
    mi(c, Ci, b, a);
    ac(this.c, b.pointerId);
    b.kc && (this.b = void 0, this.d = t.setTimeout(this.ke, 200))
  };

  function zi(a, b) {
    var c = a.i.b,
      d = b.F.changedTouches[0];
    if (a.b === d.identifier) {
      var e = [d.clientX, d.clientY];
      c.push(e);
      t.setTimeout(function() {
        Pa(c, e)
      }, 2500)
    }
  };

  function Di(a) {
    xd.call(this);
    this.d = a;
    this.c = {};
    this.b = {};
    this.a = [];
    I.Ce ? Ei(this, new ui(this)) : I.Be ? Ei(this, new si(this)) : (a = new ii(this), Ei(this, a), I.xc && Ei(this, new wi(this, a)));
    a = this.a.length;
    for (var b, c = 0; c < a; c++) b = this.a[c], Fi(this, Yb(b.e))
  }
  E(Di, xd);

  function Ei(a, b) {
    var c = Yb(b.e);
    c && (Ka(c, function(a) {
      var c = b.e[a];
      c && (this.b[a] = y(c, b))
    }, a), a.a.push(b))
  }
  Di.prototype.e = function(a) {
    var b = this.b[a.type];
    b && b(a)
  };

  function Fi(a, b) {
    Ka(b, function(a) {
      K(this.d, a, this.e, !1, this)
    }, a)
  }

  function Gi(a, b) {
    Ka(b, function(a) {
      gd(this.d, a, this.e, !1, this)
    }, a)
  }

  function li(a, b) {
    for (var c = {}, d, e = 0, f = Hi.length; e < f; e++) d = Hi[e][0], c[d] = a[d] || b[d] || Hi[e][1];
    return c
  }
  Di.prototype.ab = function(a, b) {
    a.bubbles = !0;
    mi(this, Ii, a, b)
  };
  Di.prototype.cancel = function(a, b) {
    mi(this, Ji, a, b)
  };

  function ri(a, b, c) {
    a.ab(b, c);
    b.target.contains(b.relatedTarget) || (b.bubbles = !1, mi(a, Ci, b, c))
  }

  function qi(a, b, c) {
    b.bubbles = !0;
    mi(a, Ai, b, c);
    b.target.contains(b.relatedTarget) || (b.bubbles = !1, mi(a, Bi, b, c))
  }

  function mi(a, b, c, d) {
    M(a, new ci(b, d, c))
  }

  function vi(a, b) {
    M(a, new ci(b.type, b, b.F))
  }
  Di.prototype.w = function() {
    for (var a = this.a.length, b, c = 0; c < a; c++) b = this.a[c], Gi(this, Yb(b.e));
    Di.B.w.call(this)
  };
  var oi = "pointermove",
    ni = "pointerdown",
    pi = "pointerup",
    Ai = "pointerover",
    Ii = "pointerout",
    Bi = "pointerenter",
    Ci = "pointerleave",
    Ji = "pointercancel",
    Hi = [
      ["bubbles", !1],
      ["cancelable", !1],
      ["view", null],
      ["detail", null],
      ["screenX", 0],
      ["screenY", 0],
      ["clientX", 0],
      ["clientY", 0],
      ["ctrlKey", !1],
      ["altKey", !1],
      ["shiftKey", !1],
      ["metaKey", !1],
      ["button", 0],
      ["relatedTarget", null],
      ["buttons", 0],
      ["pointerId", 0],
      ["width", 0],
      ["height", 0],
      ["pressure", 0],
      ["tiltX", 0],
      ["tiltY", 0],
      ["pointerType", ""],
      ["hwTimestamp", 0],
      ["isPrimary", !1],
      ["type", ""],
      ["target", null],
      ["currentTarget", null],
      ["which", 0]
    ];

  function Ki(a, b, c, d) {
    bi.call(this, a, b, d);
    this.a = c;
    this.originalEvent = c.F;
    this.coordinate = b.Hd(this.originalEvent);
    this.pixel = b.Mc(this.originalEvent)
  }
  E(Ki, bi);
  Ki.prototype.preventDefault = function() {
    Ki.B.preventDefault.call(this);
    this.a.preventDefault()
  };
  Ki.prototype.ya = function() {
    Ki.B.ya.call(this);
    this.a.ya()
  };

  function Li(a, b, c, d) {
    Ki.call(this, a, b, c.a, d);
    this.d = c
  }
  E(Li, Ki);

  function Mi(a) {
    xd.call(this);
    this.b = a;
    this.e = 0;
    this.g = !1;
    this.f = this.i = this.c = null;
    a = this.b.b;
    this.l = 0;
    this.k = {};
    this.d = new Di(a);
    this.a = null;
    this.i = K(this.d, ni, this.Uf, !1, this);
    this.j = K(this.d, oi, this.Vh, !1, this)
  }
  E(Mi, xd);

  function Ni(a, b) {
    if (0 !== a.e) {
      t.clearTimeout(a.e);
      a.e = 0;
      var c = new Li(Oi, a.b, b);
      M(a, c)
    } else a.e = t.setTimeout(y(function() {
      this.e = 0;
      var a = new Li(Pi, this.b, b);
      M(this, a)
    }, a), 250)
  }

  function Qi(a, b) {
    b.type == Ri || b.type == Si ? delete a.k[b.pointerId] : b.type == Ti && (a.k[b.pointerId] = !0);
    a.l = Vb(a.k)
  }
  l = Mi.prototype;
  l.Nd = function(a) {
    Qi(this, a);
    var b = new Li(Ri, this.b, a);
    M(this, b);
    0 === this.l && (Ka(this.c, L), this.c = null, Gc(this.a), this.a = null);
    !this.g && 0 === a.button && Ni(this, this.f)
  };
  l.Uf = function(a) {
    Qi(this, a);
    var b = new Li(Ti, this.b, a);
    M(this, b);
    this.f = a;
    this.g = !1;
    null === this.c && (this.a = new Di(document), this.c = [K(this.a, Ui, this.Jg, !1, this), K(this.a, Ri, this.Nd, !1, this), K(this.d, Si, this.Nd, !1, this)]);
    a.preventDefault()
  };
  l.Jg = function(a) {
    if (a.clientX != this.f.clientX || a.clientY != this.f.clientY) {
      this.g = !0;
      var b = new Li(Vi, this.b, a);
      M(this, b)
    }
    a.preventDefault()
  };
  l.Vh = function(a) {
    M(this, new Li(a.type, this.b, a))
  };
  l.w = function() {
    null !== this.j && (L(this.j), this.j = null);
    null !== this.i && (L(this.i), this.i = null);
    null !== this.c && (Ka(this.c, L), this.c = null);
    null !== this.a && (Gc(this.a), this.a = null);
    null !== this.d && (Gc(this.d), this.d = null);
    Mi.B.w.call(this)
  };
  var Pi = "singleclick",
    Oi = "dblclick",
    Vi = "pointerdrag",
    Ui = "pointermove",
    Ti = "pointerdown",
    Ri = "pointerup",
    Si = "pointercancel",
    Wi = {
      Li: Pi,
      Bi: Oi,
      Ei: Vi,
      Hi: Ui,
      Di: Ti,
      Ki: Ri,
      Ji: "pointerover",
      Ii: "pointerout",
      Fi: "pointerenter",
      Gi: "pointerleave",
      Ci: Si
    };

  function Xi(a, b) {
    this.f = a;
    this.e = b;
    this.a = [];
    this.c = [];
    this.b = {}
  }
  Xi.prototype.clear = function() {
    this.a.length = 0;
    this.c.length = 0;
    $b(this.b)
  };

  function Yi(a) {
    var b = a.a,
      c = a.c,
      d = b[0];
    1 == b.length ? (b.length = 0, c.length = 0) : (b[0] = b.pop(), c[0] = c.pop(), Zi(a, 0));
    b = a.e(d);
    delete a.b[b];
    return d
  }

  function $i(a, b) {
    var c = a.f(b);
    Infinity != c && (a.a.push(b), a.c.push(c), a.b[a.e(b)] = !0, aj(a, 0, a.a.length - 1))
  }
  Xi.prototype.oa = function() {
    return this.a.length
  };
  Xi.prototype.V = function() {
    return 0 === this.a.length
  };

  function Zi(a, b) {
    for (var c = a.a, d = a.c, e = c.length, f = c[b], g = d[b], h = b; b < e >> 1;) {
      var m = 2 * b + 1,
        n = 2 * b + 2,
        m = n < e && d[n] < d[m] ? n : m;
      c[b] = c[m];
      d[b] = d[m];
      b = m
    }
    c[b] = f;
    d[b] = g;
    aj(a, h, b)
  }

  function aj(a, b, c) {
    var d = a.a;
    a = a.c;
    for (var e = d[c], f = a[c]; c > b;) {
      var g = c - 1 >> 1;
      if (a[g] > f) d[c] = d[g], a[c] = a[g], c = g;
      else break
    }
    d[c] = e;
    a[c] = f
  }

  function bj(a) {
    var b = a.f,
      c = a.a,
      d = a.c,
      e = 0,
      f = c.length,
      g, h, m;
    for (h = 0; h < f; ++h) g = c[h], m = b(g), Infinity == m ? delete a.b[a.e(g)] : (d[e] = m, c[e++] = g);
    c.length = e;
    d.length = e;
    for (b = (a.a.length >> 1) - 1; 0 <= b; b--) Zi(a, b)
  };

  function cj(a, b) {
    Xi.call(this, function(b) {
      return a.apply(null, b)
    }, function(a) {
      return a[0].d()
    });
    this.g = b;
    this.d = 0
  }
  E(cj, Xi);
  cj.prototype.i = function() {
    --this.d;
    this.g()
  };

  function dj(a) {
    return function(b) {
      if (u(b)) return [Ob(b[0], a[0], a[2]), Ob(b[1], a[1], a[3])]
    }
  }

  function ej(a) {
    return a
  };

  function fj(a) {
    return function(b, c, d) {
      if (u(b)) return b = cf(a, b, d), b = Ob(b + c, 0, a.length - 1), a[b]
    }
  }

  function gj(a, b, c) {
    return function(d, e, f) {
      if (u(d)) return f = 0 < f ? 0 : 0 > f ? 1 : 0.5, d = Math.floor(Math.log(b / d) / Math.log(a) + f), e = Math.max(d + e, 0), u(c) && (e = Math.min(e, c)), b / Math.pow(a, e)
    }
  };

  function hj(a) {
    if (u(a)) return 0
  }

  function ij(a, b) {
    if (u(a)) return a + b
  }

  function jj(a) {
    var b = 2 * Math.PI / a;
    return function(a, d) {
      if (u(a)) return a = Math.floor((a + d) / b + 0.5) * b
    }
  }

  function kj() {
    var a = Qb(5);
    return function(b, c) {
      if (u(b)) return Math.abs(b + c) <= a ? 0 : b + c
    }
  };

  function lj(a, b, c) {
    this.center = a;
    this.resolution = b;
    this.rotation = c
  };

  function Q(a) {
    sg.call(this);
    a = a || {};
    var b = {};
    b.center = u(a.center) ? a.center : null;
    b.projection = lg(a.projection);
    var c, d, e;
    if (u(a.resolutions)) c = a.resolutions, d = c[0], e = c[c.length - 1], c = fj(c);
    else {
      d = a.maxResolution;
      u(d) || (d = a.projection, e = lg(d).p(), d = (null === e ? 360 * Qf.degrees / Qf[d.la] : Math.max(e[2] - e[0], e[3] - e[1])) / 256);
      c = a.maxZoom;
      u(c) || (c = 28);
      var f = a.zoomFactor;
      u(f) || (f = 2);
      e = d / Math.pow(f, c);
      c = gj(f, d, c)
    }
    this.j = d;
    this.n = e;
    (u(a.enableRotation) ? a.enableRotation : 1) ? (d = a.constrainRotation, d = u(d) && !0 !== d ? !1 ===
      d ? ij : la(d) ? jj(d) : ij : kj()) : d = hj;
    this.g = new lj(u(a.extent) ? dj(a.extent) : ej, c, d);
    u(a.resolution) ? b.resolution = a.resolution : u(a.zoom) && (b.resolution = this.constrainResolution(this.j, a.zoom));
    b.rotation = u(a.rotation) ? a.rotation : 0;
    this.T(b)
  }
  E(Q, sg);
  Q.prototype.constrainResolution = function(a, b, c) {
    return this.g.resolution(a, b || 0, c || 0)
  };
  Q.prototype.constrainRotation = function(a, b) {
    return this.g.rotation(a, b || 0)
  };
  Q.prototype.a = function() {
    return this.get("center")
  };
  Q.prototype.getCenter = Q.prototype.a;
  Q.prototype.r = function(a) {
    var b = this.a(),
      c = this.b();
    return [b[0] - c * a[0] / 2, b[1] - c * a[1] / 2, b[0] + c * a[0] / 2, b[1] + c * a[1] / 2]
  };
  Q.prototype.l = function() {
    return this.get("projection")
  };
  Q.prototype.getProjection = Q.prototype.l;
  Q.prototype.b = function() {
    return this.get("resolution")
  };
  Q.prototype.getResolution = Q.prototype.b;

  function mj(a, b) {
    return Math.max((a[2] - a[0]) / b[0], (a[3] - a[1]) / b[1])
  }

  function nj(a) {
    var b = a.j,
      c = Math.log(b / a.n) / Math.log(2);
    return function(a) {
      return b / Math.pow(2, a * c)
    }
  }
  Q.prototype.f = function() {
    return this.get("rotation")
  };
  Q.prototype.getRotation = Q.prototype.f;

  function oj(a) {
    var b = a.j,
      c = Math.log(b / a.n) / Math.log(2);
    return function(a) {
      return Math.log(b / a) / Math.log(2) / c
    }
  }
  l = Q.prototype;
  l.M = function() {
    return this
  };

  function pj(a) {
    var b = a.a(),
      c = a.l(),
      d = a.b();
    a = a.f();
    return {
      center: b.slice(),
      projection: u(c) ? c : null,
      resolution: d,
      rotation: u(a) ? a : 0
    }
  }
  l.Ef = function() {
    var a, b = this.b();
    if (u(b)) {
      var c, d = 0;
      do {
        c = this.constrainResolution(this.j, d);
        if (c == b) {
          a = d;
          break
        }++d
      } while (c > this.n)
    }
    return a
  };
  l.Gd = function(a, b) {
    if (!Xe(a)) {
      this.sa(Re(a));
      var c = mj(a, b),
        d = this.constrainResolution(c, 0, 0);
      d < c && (d = this.constrainResolution(d, -1, 0));
      this.d(d)
    }
  };
  l.Ye = function(a, b, c) {
    var d = u(c) ? c : {};
    c = u(d.padding) ? d.padding : [0, 0, 0, 0];
    var e = u(d.constrainResolution) ? d.constrainResolution : !0,
      f = u(d.nearest) ? d.nearest : !1,
      g = u(d.minResolution) ? d.minResolution : 0,
      h = a.h,
      m = this.f(),
      d = Math.cos(-m),
      m = Math.sin(-m),
      n = Infinity,
      p = Infinity,
      q = -Infinity,
      r = -Infinity;
    a = a.a;
    for (var s = 0, z = h.length; s < z; s += a) var x = h[s] * d - h[s + 1] * m,
      w = h[s] * m + h[s + 1] * d,
      n = Math.min(n, x),
      p = Math.min(p, w),
      q = Math.max(q, x),
      r = Math.max(r, w);
    b = mj([n, p, q, r], [b[0] - c[1] - c[3], b[1] - c[0] - c[2]]);
    b = isNaN(b) ? g : Math.max(b,
      g);
    e && (e = this.constrainResolution(b, 0, 0), !f && e < b && (e = this.constrainResolution(e, -1, 0)), b = e);
    this.d(b);
    m = -m;
    f = (n + q) / 2 + (c[1] - c[3]) / 2 * b;
    c = (p + r) / 2 + (c[0] - c[2]) / 2 * b;
    this.sa([f * d - c * m, c * d + f * m])
  };
  l.Ve = function(a, b, c) {
    var d = this.f(),
      e = Math.cos(-d),
      d = Math.sin(-d),
      f = a[0] * e - a[1] * d;
    a = a[1] * e + a[0] * d;
    var g = this.b(),
      f = f + (b[0] / 2 - c[0]) * g;
    a += (c[1] - b[1] / 2) * g;
    d = -d;
    this.sa([f * e - a * d, a * e + f * d])
  };
  l.Xc = function() {
    return null != this.a() && u(this.b())
  };
  l.sa = function(a) {
    this.t("center", a)
  };
  Q.prototype.setCenter = Q.prototype.sa;
  Q.prototype.q = function(a) {
    this.t("projection", a)
  };
  Q.prototype.setProjection = Q.prototype.q;
  Q.prototype.d = function(a) {
    this.t("resolution", a)
  };
  Q.prototype.setResolution = Q.prototype.d;
  Q.prototype.o = function(a) {
    this.t("rotation", a)
  };
  Q.prototype.setRotation = Q.prototype.o;
  Q.prototype.u = function(a) {
    a = this.constrainResolution(this.j, a, 0);
    this.d(a)
  };

  function qj(a) {
    N.call(this);
    this.element = u(a.element) ? a.element : null;
    this.o = u(a.target) ? ic(a.target) : null;
    this.a = null;
    this.g = []
  }
  E(qj, N);
  qj.prototype.w = function() {
    uc(this.element);
    qj.B.w.call(this)
  };
  qj.prototype.O = k("a");
  qj.prototype.f = da;
  qj.prototype.setMap = function(a) {
    null === this.a || uc(this.element);
    0 != this.g.length && (Ka(this.g, L), this.g.length = 0);
    this.a = a;
    null !== this.a && ((null === this.o ? a.u : this.o).appendChild(this.element), this.f !== da && this.g.push(K(a, "postrender", this.f, !1, this)), a.J())
  };

  function rj(a) {
    a = u(a) ? a : {};
    this.k = pc("UL");
    var b = mc("DIV", {
      "class": (u(a.className) ? a.className : "ol-attribution") + " ol-unselectable"
    }, this.k);
    qj.call(this, {
      element: b,
      target: a.target
    });
    this.j = !0;
    this.d = {};
    this.b = {}
  }
  E(rj, qj);
  rj.prototype.f = function(a) {
    a = a.b;
    if (null === a) this.j && (Qh(this.element, !1), this.j = !1);
    else {
      var b, c, d, e, f, g, h, m, n, p = a.layersArray,
        q = cc(a.attributions),
        r = {};
      b = 0;
      for (c = p.length; b < c; b++)
        if (d = p[b].a, n = v(d).toString(), m = d.d, null !== m)
          for (d = 0, e = m.length; d < e; d++)
            if (g = m[d], h = v(g).toString(), !(h in q)) {
              f = a.usedTiles[n];
              var s;
              if (s = u(f)) a: if (null === g.a) s = !0;
                else {
                  var z = s = void 0,
                    x = void 0,
                    w = void 0;
                  for (w in f)
                    if (w in g.a)
                      for (x = f[w], s = 0, z = g.a[w].length; s < z; ++s)
                        if (g.a[w][s].a <= x.d && g.a[w][s].d >= x.a && g.a[w][s].b <= x.c &&
                          g.a[w][s].c >= x.b) {
                          s = !0;
                          break a
                        }
                  s = !1
                }
              s ? (h in r && delete r[h], q[h] = g) : r[h] = g
            }
      b = [q, r];
      a = b[0];
      b = b[1];
      for (var B in this.d) B in a ? (this.b[B] || (Qh(this.d[B], !0), this.b[B] = !0), delete a[B]) : B in b ? (this.b[B] && (Qh(this.d[B], !1), delete this.b[B]), delete b[B]) : (uc(this.d[B]), delete this.d[B], delete this.b[B]);
      for (B in a) c = pc("LI"), c.innerHTML = a[B].c, this.k.appendChild(c), this.d[B] = c, this.b[B] = !0;
      for (B in b) c = pc("LI"), c.innerHTML = b[B].c, Qh(c, !1), this.k.appendChild(c), this.d[B] = c;
      B = !Zb(this.b);
      this.j != B && (Qh(this.element,
        B), this.j = B)
    }
  };

  function sj(a) {
    a = u(a) ? a : {};
    this.d = pc("UL");
    var b = mc("DIV", {
      "class": (u(a.className) ? a.className : "ol-logo") + " ol-unselectable"
    }, this.d);
    qj.call(this, {
      element: b,
      target: a.target
    });
    this.b = !0;
    this.j = {}
  }
  E(sj, qj);
  sj.prototype.f = function(a) {
    a = a.b;
    if (null === a) this.b && (Qh(this.element, !1), this.b = !1);
    else {
      var b;
      a = a.logos;
      var c = this.j;
      for (b in c) b in a || (uc(c[b]), delete c[b]);
      for (var d in a)
        if (!(d in c)) {
          b = new Image;
          b.src = d;
          var e = a[d];
          "" === e ? e = b : (e = mc("A", {
            href: e,
            target: "_blank"
          }), e.appendChild(b));
          b = mc("LI", void 0, e);
          this.d.appendChild(b);
          c[d] = b
        }
      d = !Zb(a);
      this.b != d && (Qh(this.element, d), this.b = d)
    }
  };

  function tj(a) {
    a = u(a) ? a : {};
    var b = u(a.className) ? a.className : "ol-zoom",
      c = u(a.delta) ? a.delta : 1,
      d = u(a.zoomInLabel) ? a.zoomInLabel : "+",
      e = u(a.zoomOutLabel) ? a.zoomOutLabel : "\u2212",
      f = u(a.zoomOutTipLabel) ? a.zoomOutTipLabel : "Zoom out",
      g = mc("SPAN", {
        role: "tooltip"
      }, u(a.zoomInTipLabel) ? a.zoomInTipLabel : "Zoom in"),
      d = mc("BUTTON", {
        "class": b + "-in ol-has-tooltip",
        name: "ZoomIn",
        type: "button"
      }, g, d);
    K(d, ["touchend", "click"], va(tj.prototype.d, c), !1, this);
    K(d, ["mouseout", Nc], function() {
      this.blur()
    }, !1);
    f = mc("SPAN", {
      role: "tooltip",
      type: "button"
    }, f);
    e = mc("BUTTON", {
      "class": b + "-out  ol-has-tooltip",
      name: "ZoomOut"
    }, f, e);
    K(e, ["touchend", "click"], va(tj.prototype.d, -c), !1, this);
    K(e, ["mouseout", Nc], function() {
      this.blur()
    }, !1);
    b = mc("DIV", b + " ol-unselectable", d, e);
    qj.call(this, {
      element: b,
      target: a.target
    });
    this.b = u(a.duration) ? a.duration : 250
  }
  E(tj, qj);
  tj.prototype.d = function(a, b) {
    b.preventDefault();
    var c = this.a,
      d = c.a().M(),
      e = d.b();
    u(e) && (0 < this.b && c.na(Ag({
      resolution: e,
      duration: this.b,
      easing: ug
    })), c = d.constrainResolution(e, a), d.d(c))
  };

  function uj(a) {
    a = u(a) ? a : {};
    var b = new Jd;
    (u(a.zoom) ? a.zoom : 1) && b.push(new tj(u(a.zoomOptions) ? a.zoomOptions : void 0));
    (u(a.attribution) ? a.attribution : 1) && b.push(new rj(u(a.attributionOptions) ? a.attributionOptions : void 0));
    (u(a.logo) ? a.logo : 1) && b.push(new sj(u(a.logoOptions) ? a.logoOptions : void 0));
    return b
  };

  function vj() {
    zd.call(this);
    this.g = null
  }
  E(vj, zd);
  vj.prototype.setMap = function(a) {
    this.g = a
  };

  function wj(a, b, c, d, e) {
    if (null != c) {
      var f = b.f(),
        g = b.a();
      u(f) && (u(g) && u(e) && 0 < e) && (a.na(zg({
        rotation: f,
        duration: e,
        easing: ug
      })), u(d) && a.na(yg({
        source: g,
        duration: e,
        easing: ug
      })));
      if (null != d) {
        var h;
        a = b.a();
        u(a) && (h = [a[0] - d[0], a[1] - d[1]], Be(h, c - b.f()), a = h, a[0] += d[0], a[1] += d[1]);
        b.sa(h)
      }
      b.o(c)
    }
  }

  function xj(a, b, c, d, e) {
    var f = b.b();
    c = b.constrainResolution(f, c, 0);
    yj(a, b, c, d, e)
  }

  function yj(a, b, c, d, e) {
    if (null != c) {
      var f = b.b(),
        g = b.a();
      u(f) && (u(g) && u(e) && 0 < e) && (a.na(Ag({
        resolution: f,
        duration: e,
        easing: ug
      })), u(d) && a.na(yg({
        source: g,
        duration: e,
        easing: ug
      })));
      if (null != d) {
        var h;
        a = b.a();
        e = b.b();
        u(a) && u(e) && (h = [d[0] - c * (d[0] - a[0]) / e, d[1] - c * (d[1] - a[1]) / e]);
        b.sa(h)
      }
      b.d(c)
    }
  };

  function zj(a) {
    a = u(a) ? a : {};
    this.a = u(a.delta) ? a.delta : 1;
    vj.call(this);
    this.b = u(a.duration) ? a.duration : 250
  }
  E(zj, vj);
  zj.prototype.ha = function(a) {
    var b = !1,
      c = a.a;
    if (a.type == Oi) {
      var b = a.map,
        d = a.coordinate,
        c = c.xa ? -this.a : this.a,
        e = b.a().M();
      xj(b, e, c, d, this.b);
      a.preventDefault();
      b = !0
    }
    return !b
  };

  function Aj(a) {
    a = a.a;
    return a.Z && !a.rb && a.xa
  }

  function Bj(a) {
    return a.type == Pi
  }

  function Cj(a) {
    a = a.a;
    return !a.Z && !a.rb && !a.xa
  }

  function Dj(a) {
    a = a.a;
    return !a.Z && !a.rb && a.xa
  }

  function Ej(a) {
    a = a.a.target.tagName;
    return "INPUT" !== a && "SELECT" !== a && "TEXTAREA" !== a
  }

  function Fj(a) {
    return 1 == a.d.pointerId
  };

  function Gj() {
    vj.call(this);
    this.i = !1;
    this.l = {};
    this.b = []
  }
  E(Gj, vj);

  function Hj(a) {
    for (var b = a.length, c = 0, d = 0, e = 0; e < b; e++) c += a[e].clientX, d += a[e].clientY;
    return [c / b, d / b]
  }
  l = Gj.prototype;
  l.Ha = da;
  l.Aa = pd;
  l.za = pd;
  l.ha = function(a) {
    if (!(a instanceof Li)) return !0;
    var b = !1,
      c = a.type;
    if (c === Ti || c === Vi || c === Ri) c = a.d, a.type == Ri ? delete this.l[c.pointerId] : a.type == Ti ? this.l[c.pointerId] = c : c.pointerId in this.l && (this.l[c.pointerId] = c), this.b = Xb(this.l);
    this.i && (a.type == Vi ? this.Ha(a) : a.type == Ri && (this.i = this.Aa(a)));
    a.type == Ti && (this.i = a = this.za(a), b = this.qe(a));
    return !b
  };
  l.qe = pd;

  function Ij(a) {
    Gj.call(this);
    this.a = (u(a) ? a : {}).kinetic;
    this.d = this.e = null;
    this.j = u(a.condition) ? a.condition : Cj;
    this.f = !1
  }
  E(Ij, Gj);
  Ij.prototype.Ha = function(a) {
    var b = Hj(this.b);
    if (null !== this.d) {
      this.a && this.a.update(b[0], b[1]);
      var c = this.d[0] - b[0],
        d = b[1] - this.d[1];
      a = a.map;
      var e = a.a().M(),
        f = pj(e),
        d = c = [c, d],
        g = f.resolution;
      d[0] *= g;
      d[1] *= g;
      Be(c, f.rotation);
      d = c;
      f = f.center;
      d[0] += f[0];
      d[1] += f[1];
      c = e.g.center(c);
      a.J();
      e.sa(c)
    }
    this.d = b
  };
  Ij.prototype.Aa = function(a) {
    a = a.map;
    var b = a.a().M();
    if (0 === this.b.length) {
      var c;
      if (c = !this.f)
        if (c = this.a) {
          c = this.a;
          var d = wa() - c.f,
            e = c.a.length - 3;
          if (c.a[e + 2] < d) c = !1;
          else {
            for (var f = e - 3; 0 <= f && c.a[f + 2] > d;) f -= 3;
            if (0 <= f) {
              var d = c.a[e + 2] - c.a[f + 2],
                g = c.a[e] - c.a[f],
                e = c.a[e + 1] - c.a[f + 1];
              c.d = Math.atan2(e, g);
              c.c = Math.sqrt(g * g + e * e) / d;
              c = c.c > c.b
            } else c = !1
          }
        }
      c && (c = (this.a.b - this.a.c) / this.a.e, e = this.a.d, f = b.a(), this.e = Cg(this.a, f), a.na(this.e), f = a.g(f), c = a.ea([f[0] - c * Math.cos(e), f[1] - c * Math.sin(e)]), c = b.g.center(c),
        b.sa(c));
      tg(b, -1);
      a.J();
      return !1
    }
    this.d = null;
    return !0
  };
  Ij.prototype.za = function(a) {
    if (0 < this.b.length && this.j(a)) {
      var b = a.map,
        c = b.a().M();
      this.d = null;
      this.i || tg(c, 1);
      b.J();
      null !== this.e && Pa(b.G, this.e) && (c.sa(a.b.view2DState.center), this.e = null);
      this.a && (a = this.a, a.a.length = 0, a.d = 0, a.c = 0);
      this.f = 1 < this.b.length;
      return !0
    }
    return !1
  };

  function Jj(a) {
    a = u(a) ? a : {};
    Gj.call(this);
    this.d = u(a.condition) ? a.condition : Aj;
    this.a = void 0
  }
  E(Jj, Gj);
  Jj.prototype.Ha = function(a) {
    if (Fj(a)) {
      var b = a.map,
        c = b.f();
      a = a.pixel;
      c = Math.atan2(c[1] / 2 - a[1], a[0] - c[0] / 2);
      if (u(this.a)) {
        a = c - this.a;
        var d = b.a().M(),
          e = pj(d);
        b.J();
        wj(b, d, e.rotation - a)
      }
      this.a = c
    }
  };
  Jj.prototype.Aa = function(a) {
    if (!Fj(a)) return !0;
    a = a.map;
    var b = a.a();
    tg(b, -1);
    var b = b.M(),
      c = pj(b).rotation,
      c = b.constrainRotation(c, 0);
    wj(a, b, c, void 0, 250);
    return !1
  };
  Jj.prototype.za = function(a) {
    return Fj(a) && Sc(a.a) && this.d(a) ? (a = a.map, tg(a.a(), 1), a.J(), this.a = void 0, !0) : !1
  };

  function Kj(a) {
    this.b = this.c = this.e = this.d = this.a = null;
    this.f = a
  }
  E(Kj, Cc);

  function Lj(a) {
    var b = a.e,
      c = a.c;
    a = La([b, [b[0], c[1]], c, [c[0], b[1]]], a.a.ea, a.a);
    a[4] = a[0].slice();
    return new Jf([a])
  }
  Kj.prototype.w = function() {
    this.setMap(null)
  };
  Kj.prototype.i = function(a) {
    var b = this.b,
      c = this.f;
    a.vectorContext.ac(Infinity, function(a) {
      a.ka(c.d, c.b);
      a.aa(c.c);
      a.hb(b, null)
    })
  };
  Kj.prototype.K = k("b");

  function Nj(a) {
    null === a.a || (null === a.e || null === a.c) || a.a.J()
  }
  Kj.prototype.setMap = function(a) {
    null !== this.d && (L(this.d), this.d = null, this.a.J(), this.a = null);
    this.a = a;
    null !== this.a && (this.d = K(a, "postcompose", this.i, !1, this), Nj(this))
  };

  function Oj(a, b) {
    Hc.call(this, a);
    this.coordinate = b
  }
  E(Oj, Hc);

  function Pj(a) {
    Gj.call(this);
    a = u(a) ? a : {};
    this.d = new Kj(u(a.style) ? a.style : null);
    this.a = null;
    this.e = u(a.condition) ? a.condition : qd
  }
  E(Pj, Gj);
  l = Pj.prototype;
  l.Ha = function(a) {
    if (Fj(a)) {
      var b = this.d;
      a = a.pixel;
      b.e = this.a;
      b.c = a;
      b.b = Lj(b);
      Nj(b)
    }
  };
  l.K = function() {
    return this.d.K()
  };
  l.fe = da;
  l.Aa = function(a) {
    if (!Fj(a)) return !0;
    this.d.setMap(null);
    var b = a.pixel[0] - this.a[0],
      c = a.pixel[1] - this.a[1];
    64 <= b * b + c * c && (this.fe(a), M(this, new Oj("boxend", a.coordinate)));
    return !1
  };
  l.za = function(a) {
    if (Fj(a) && Sc(a.a) && this.e(a)) {
      this.a = a.pixel;
      this.d.setMap(a.map);
      var b = this.d,
        c = this.a;
      b.e = this.a;
      b.c = c;
      b.b = Lj(b);
      Nj(b);
      M(this, new Oj("boxstart", a.coordinate));
      return !0
    }
    return !1
  };

  function Qj(a) {
    a = u(a) ? a : {};
    Pj.call(this, {
      condition: u(a.condition) ? a.condition : Dj,
      style: u(a.style) ? a.style : new pe({
        stroke: new ne({
          color: [0, 0, 255, 1]
        })
      })
    })
  }
  E(Qj, Pj);
  Qj.prototype.fe = function() {
    var a = this.g,
      b = a.a().M(),
      c = this.K().p(),
      d = Re(c),
      c = mj(c, a.f()),
      c = b.constrainResolution(c, 0, void 0);
    yj(a, b, c, d, 200)
  };

  function Rj(a) {
    vj.call(this);
    a = u(a) ? a : {};
    this.a = u(a.condition) ? a.condition : ud(Cj, Ej);
    this.b = u(a.pixelDelta) ? a.pixelDelta : 128
  }
  E(Rj, vj);
  Rj.prototype.ha = function(a) {
    var b = !1;
    if ("key" == a.type) {
      var c = a.a.wa;
      if (this.a(a) && (40 == c || 37 == c || 39 == c || 38 == c)) {
        var d = a.map,
          b = d.a(),
          e = pj(b),
          f = e.resolution * this.b,
          g = 0,
          h = 0;
        40 == c ? h = -f : 37 == c ? g = -f : 39 == c ? g = f : h = f;
        c = [g, h];
        Be(c, e.rotation);
        e = b.a();
        u(e) && (u(100) && d.na(yg({
          source: e,
          duration: 100,
          easing: wg
        })), d = b.g.center([e[0] + c[0], e[1] + c[1]]), b.sa(d));
        a.preventDefault();
        b = !0
      }
    }
    return !b
  };

  function Sj(a) {
    vj.call(this);
    a = u(a) ? a : {};
    this.b = u(a.condition) ? a.condition : Ej;
    this.a = u(a.delta) ? a.delta : 1;
    this.d = u(a.duration) ? a.duration : 100
  }
  E(Sj, vj);
  Sj.prototype.ha = function(a) {
    var b = !1;
    if ("key" == a.type) {
      var c = a.a.Rc;
      if (this.b(a) && (43 == c || 45 == c)) {
        b = a.map;
        c = 43 == c ? this.a : -this.a;
        b.J();
        var d = b.a().M();
        xj(b, d, c, void 0, this.d);
        a.preventDefault();
        b = !0
      }
    }
    return !b
  };

  function Tj(a) {
    a = u(a) ? a : {};
    vj.call(this);
    this.a = 0;
    this.i = u(a.duration) ? a.duration : 250;
    this.d = null;
    this.e = this.b = void 0
  }
  E(Tj, vj);
  Tj.prototype.ha = function(a) {
    var b = !1;
    if ("mousewheel" == a.type) {
      var b = a.map,
        c = a.a;
      this.d = a.coordinate;
      this.a += c.a;
      u(this.b) || (this.b = wa());
      c = Math.max(80 - (wa() - this.b), 0);
      t.clearTimeout(this.e);
      this.e = t.setTimeout(y(this.f, this, b), c);
      a.preventDefault();
      b = !0
    }
    return !b
  };
  Tj.prototype.f = function(a) {
    var b = Ob(this.a, -1, 1),
      c = a.a().M();
    a.J();
    xj(a, c, -b, this.d, this.i);
    this.a = 0;
    this.d = null;
    this.e = this.b = void 0
  };

  function Uj(a) {
    Gj.call(this);
    a = u(a) ? a : {};
    this.d = null;
    this.e = void 0;
    this.a = !1;
    this.f = 0;
    this.j = u(a.threshold) ? a.threshold : 0.3
  }
  E(Uj, Gj);
  Uj.prototype.Ha = function(a) {
    var b = 0,
      c = this.b[0],
      d = this.b[1],
      c = Math.atan2(d.clientY - c.clientY, d.clientX - c.clientX);
    u(this.e) && (b = c - this.e, this.f += b, !this.a && Math.abs(this.f) > this.j && (this.a = !0));
    this.e = c;
    a = a.map;
    c = Lh(a.b);
    d = Hj(this.b);
    d[0] -= c.x;
    d[1] -= c.y;
    this.d = a.ea(d);
    this.a && (c = a.a().M(), d = pj(c), a.J(), wj(a, c, d.rotation + b, this.d))
  };
  Uj.prototype.Aa = function(a) {
    if (2 > this.b.length) {
      a = a.map;
      var b = a.a();
      tg(b, -1);
      if (this.a) {
        var b = b.M(),
          c = pj(b).rotation,
          d = this.d,
          c = b.constrainRotation(c, 0);
        wj(a, b, c, d, 250)
      }
      return !1
    }
    return !0
  };
  Uj.prototype.za = function(a) {
    return 2 <= this.b.length ? (a = a.map, this.d = null, this.e = void 0, this.a = !1, this.f = 0, this.i || tg(a.a(), 1), a.J(), !0) : !1
  };

  function Vj(a) {
    a = u(a) ? a : {};
    Gj.call(this);
    this.d = null;
    this.f = u(a.duration) ? a.duration : 400;
    this.a = void 0;
    this.e = 1
  }
  E(Vj, Gj);
  Vj.prototype.Ha = function(a) {
    var b = 1,
      c = this.b[0],
      d = this.b[1],
      e = c.clientX - d.clientX,
      c = c.clientY - d.clientY,
      e = Math.sqrt(e * e + c * c);
    u(this.a) && (b = this.a / e);
    this.a = e;
    1 != b && (this.e = b);
    a = a.map;
    var e = a.a().M(),
      c = pj(e),
      d = Lh(a.b),
      f = Hj(this.b);
    f[0] -= d.x;
    f[1] -= d.y;
    this.d = a.ea(f);
    a.J();
    yj(a, e, c.resolution * b, this.d)
  };
  Vj.prototype.Aa = function(a) {
    if (2 > this.b.length) {
      a = a.map;
      var b = a.a();
      tg(b, -1);
      var b = b.M(),
        c = pj(b).resolution,
        d = this.d,
        e = this.f,
        c = b.constrainResolution(c, 0, this.e - 1);
      yj(a, b, c, d, e);
      return !1
    }
    return !0
  };
  Vj.prototype.za = function(a) {
    return 2 <= this.b.length ? (a = a.map, this.d = null, this.a = void 0, this.e = 1, this.i || tg(a.a(), 1), a.J(), !0) : !1
  };

  function Wj(a) {
    a = u(a) ? a : {};
    var b = new Jd,
      c = new Bg(-0.005, 0.05, 100);
    (u(a.altShiftDragRotate) ? a.altShiftDragRotate : 1) && b.push(new Jj);
    (u(a.doubleClickZoom) ? a.doubleClickZoom : 1) && b.push(new zj({
      delta: a.zoomDelta,
      duration: a.zoomDuration
    }));
    (u(a.dragPan) ? a.dragPan : 1) && b.push(new Ij({
      kinetic: c
    }));
    (u(a.pinchRotate) ? a.pinchRotate : 1) && b.push(new Uj);
    (u(a.pinchZoom) ? a.pinchZoom : 1) && b.push(new Vj({
      duration: a.zoomDuration
    }));
    if (u(a.keyboard) ? a.keyboard : 1) b.push(new Rj), b.push(new Sj({
      delta: a.zoomDelta,
      duration: a.zoomDuration
    }));
    (u(a.mouseWheelZoom) ? a.mouseWheelZoom : 1) && b.push(new Tj({
      duration: a.zoomDuration
    }));
    (u(a.shiftDragZoom) ? a.shiftDragZoom : 1) && b.push(new Qj);
    return b
  };

  function Xj(a) {
    zd.call(this);
    this.l = mg(a.projection);
    this.L = u(a.extent) ? a.extent : u(a.projection) ? this.l.p() : null;
    this.d = u(a.attributions) ? a.attributions : null;
    this.r = a.logo;
    this.f = u(a.state) ? a.state : 1
  }
  E(Xj, zd);
  Xj.prototype.k = da;
  Xj.prototype.p = k("L");
  Xj.prototype.Y = k("f");

  function Yj(a, b) {
    a.f = b;
    a.s()
  };

  function S(a) {
    N.call(this);
    a = cc(a);
    a.brightness = u(a.brightness) ? a.brightness : 0;
    a.contrast = u(a.contrast) ? a.contrast : 1;
    a.hue = u(a.hue) ? a.hue : 0;
    a.opacity = u(a.opacity) ? a.opacity : 1;
    a.saturation = u(a.saturation) ? a.saturation : 1;
    a.visible = u(a.visible) ? a.visible : !0;
    a.maxResolution = u(a.maxResolution) ? a.maxResolution : Infinity;
    a.minResolution = u(a.minResolution) ? a.minResolution : 0;
    this.T(a)
  }
  E(S, N);
  S.prototype.j = function() {
    return this.get("brightness")
  };
  S.prototype.getBrightness = S.prototype.j;
  S.prototype.k = function() {
    return this.get("contrast")
  };
  S.prototype.getContrast = S.prototype.k;
  S.prototype.n = function() {
    return this.get("hue")
  };
  S.prototype.getHue = S.prototype.n;

  function Zj(a) {
    var b = a.j(),
      c = a.k(),
      d = a.n(),
      e = a.u(),
      f = a.q(),
      g = a.Qc(),
      h = a.b(),
      m = a.o();
    a = a.r();
    return {
      brightness: u(b) ? Ob(b, -1, 1) : 0,
      contrast: u(c) ? Math.max(c, 0) : 1,
      hue: u(d) ? d : 0,
      opacity: u(e) ? Ob(e, 0, 1) : 1,
      saturation: u(f) ? Math.max(f, 0) : 1,
      jd: g,
      visible: u(h) ? !!h : !0,
      maxResolution: u(m) ? m : Infinity,
      minResolution: u(a) ? Math.max(a, 0) : 0
    }
  }
  S.prototype.o = function() {
    return this.get("maxResolution")
  };
  S.prototype.getMaxResolution = S.prototype.o;
  S.prototype.r = function() {
    return this.get("minResolution")
  };
  S.prototype.getMinResolution = S.prototype.r;
  S.prototype.u = function() {
    return this.get("opacity")
  };
  S.prototype.getOpacity = S.prototype.u;
  S.prototype.q = function() {
    return this.get("saturation")
  };
  S.prototype.getSaturation = S.prototype.q;
  S.prototype.b = function() {
    return this.get("visible")
  };
  S.prototype.getVisible = S.prototype.b;
  S.prototype.Na = function(a) {
    this.t("brightness", a)
  };
  S.prototype.setBrightness = S.prototype.Na;
  S.prototype.Oa = function(a) {
    this.t("contrast", a)
  };
  S.prototype.setContrast = S.prototype.Oa;
  S.prototype.Pa = function(a) {
    this.t("hue", a)
  };
  S.prototype.setHue = S.prototype.Pa;
  S.prototype.Qa = function(a) {
    this.t("maxResolution", a)
  };
  S.prototype.setMaxResolution = S.prototype.Qa;
  S.prototype.zc = function(a) {
    this.t("minResolution", a)
  };
  S.prototype.setMinResolution = S.prototype.zc;
  S.prototype.Ac = function(a) {
    this.t("opacity", a)
  };
  S.prototype.setOpacity = S.prototype.Ac;
  S.prototype.Bc = function(a) {
    this.t("saturation", a)
  };
  S.prototype.setSaturation = S.prototype.Bc;
  S.prototype.Cc = function(a) {
    this.t("visible", a)
  };
  S.prototype.setVisible = S.prototype.Cc;

  function ak(a) {
    var b = u(a) ? a : {};
    a = cc(b);
    delete a.layers;
    b = b.layers;
    S.call(this, a);
    this.a = null;
    K(this, Fd("layers"), this.Qf, !1, this);
    u(b) ? ha(b) && (b = new Jd(Ra(b))) : b = new Jd;
    this.d(b)
  }
  E(ak, S);
  l = ak.prototype;
  l.Md = function() {
    this.b() && this.s()
  };
  l.Qf = function() {
    null !== this.a && (Ka(Xb(this.a), L), this.a = null);
    var a = this.$a();
    if (null != a) {
      this.a = {
        add: K(a, "add", this.Pf, !1, this),
        remove: K(a, "remove", this.Rf, !1, this)
      };
      var a = a.a,
        b, c, d;
      b = 0;
      for (c = a.length; b < c; b++) d = a[b], this.a[v(d).toString()] = K(d, ["propertychange", "change"], this.Md, !1, this)
    }
    this.s()
  };
  l.Pf = function(a) {
    a = a.element;
    this.a[v(a).toString()] = K(a, ["propertychange", "change"], this.Md, !1, this);
    this.s()
  };
  l.Rf = function(a) {
    a = v(a.element).toString();
    L(this.a[a]);
    delete this.a[a];
    this.s()
  };
  l.$a = function() {
    return this.get("layers")
  };
  ak.prototype.getLayers = ak.prototype.$a;
  ak.prototype.d = function(a) {
    this.t("layers", a)
  };
  ak.prototype.setLayers = ak.prototype.d;
  ak.prototype.Oc = function(a) {
    var b = u(a) ? a : [];
    this.$a().forEach(function(a) {
      a.Oc(b)
    });
    return b
  };
  ak.prototype.Nc = function(a) {
    var b = u(a) ? a : {
        layers: [],
        layerStates: []
      },
      c = b.layers.length;
    this.$a().forEach(function(a) {
      a.Nc(b)
    });
    a = Zj(this);
    var d, e;
    for (d = b.layerStates.length; c < d; c++) e = b.layerStates[c], e.brightness = Ob(e.brightness + a.brightness, -1, 1), e.contrast *= a.contrast, e.hue += a.hue, e.opacity *= a.opacity, e.saturation *= a.saturation, e.visible = e.visible && a.visible, e.maxResolution = Math.min(e.maxResolution, a.maxResolution), e.minResolution = Math.max(e.minResolution, a.minResolution);
    return b
  };
  ak.prototype.Qc = ba(1);

  function bk(a) {
    Sf.call(this, {
      code: a,
      units: "m",
      extent: ck,
      global: !0
    })
  }
  E(bk, Sf);
  var dk = 6378137 * Math.PI,
    ck = [-dk, -dk, dk, dk],
    gg = La(["EPSG:3857", "EPSG:102100", "EPSG:102113", "EPSG:900913", "urn:ogc:def:crs:EPSG:6.18:3:3857"], function(a) {
      return new bk(a)
    });

  function hg(a, b, c) {
    var d = a.length;
    c = 1 < c ? c : 2;
    u(b) || (b = 2 < c ? a.slice() : Array(d));
    for (var e = 0; e < d; e += c) b[e] = 6378137 * Math.PI * a[e] / 180, b[e + 1] = 6378137 * Math.log(Math.tan(Math.PI * (a[e + 1] + 90) / 360));
    return b
  }

  function ig(a, b, c) {
    var d = a.length;
    c = 1 < c ? c : 2;
    u(b) || (b = 2 < c ? a.slice() : Array(d));
    for (var e = 0; e < d; e += c) b[e] = 180 * a[e] / (6378137 * Math.PI), b[e + 1] = 360 * Math.atan(Math.exp(a[e + 1] / 6378137)) / Math.PI - 90;
    return b
  }
  bk.prototype.d = function(a, b) {
    return a / ((Math.exp(b[1] / 6378137) + Math.exp(-(b[1] / 6378137))) / 2)
  };

  function ek(a, b) {
    Sf.call(this, {
      code: a,
      units: "degrees",
      extent: fk,
      axisOrientation: b,
      global: !0
    })
  }
  E(ek, Sf);
  var fk = [-180, -90, 180, 90],
    jg = [new ek("CRS:84"), new ek("EPSG:4326", "neu"), new ek("urn:ogc:def:crs:EPSG:6.6:4326", "neu"), new ek("urn:ogc:def:crs:OGC:1.3:CRS84"), new ek("urn:ogc:def:crs:OGC:2:84"), new ek("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"), new ek("urn:x-ogc:def:crs:EPSG:4326", "neu")];
  ek.prototype.d = function(a) {
    return a
  };

  function gk() {
    bg(gg);
    bg(jg);
    fg()
  };

  function hk(a) {
    var b = cc(a);
    delete b.source;
    S.call(this, b);
    this.a = a.source;
    K(this.a, "change", this.Ug, !1, this)
  }
  E(hk, S);
  l = hk.prototype;
  l.Oc = function(a) {
    a = u(a) ? a : [];
    a.push(this);
    return a
  };
  l.Nc = function(a) {
    a = u(a) ? a : {
      layers: [],
      layerStates: []
    };
    a.layers.push(this);
    a.layerStates.push(Zj(this));
    return a
  };
  l.Tg = k("a");
  l.Qc = function() {
    return this.a.f
  };
  l.Ug = function() {
    this.s()
  };

  function ik(a, b, c, d, e) {
    xd.call(this);
    this.i = e;
    this.j = a;
    this.b = c;
    this.d = b;
    this.state = d
  }
  E(ik, xd);
  ik.prototype.p = k("j");

  function jk(a, b, c, d, e, f) {
    ik.call(this, a, b, c, 0, d);
    this.g = e;
    this.a = new Image;
    null !== f && (this.a.crossOrigin = f);
    this.f = {};
    this.c = null;
    this.state = 0
  }
  E(jk, ik);
  jk.prototype.e = function(a) {
    if (u(a)) {
      var b = v(a);
      if (b in this.f) return this.f[b];
      a = Zb(this.f) ? this.a : this.a.cloneNode(!1);
      return this.f[b] = a
    }
    return this.a
  };
  jk.prototype.k = function() {
    this.state = 3;
    Ka(this.c, L);
    this.c = null;
    M(this, "change")
  };
  jk.prototype.l = function() {
    this.state = 2;
    Ka(this.c, L);
    this.c = null;
    M(this, "change")
  };

  function kk(a) {
    0 == a.state && (a.state = 1, a.c = [fd(a.a, "error", a.k, !1, a), fd(a.a, "load", a.l, !1, a)], a.a.src = a.g)
  };

  function lk(a) {
    this.minZoom = u(a.minZoom) ? a.minZoom : 0;
    this.a = a.resolutions;
    this.maxZoom = this.a.length - 1;
    this.d = u(a.origin) ? a.origin : null;
    this.f = null;
    u(a.origins) && (this.f = a.origins);
    this.b = null;
    u(a.tileSizes) && (this.b = a.tileSizes);
    this.e = u(a.tileSize) ? a.tileSize : null === this.b ? 256 : void 0
  }
  var mk = new Za(0, 0, 0);
  l = lk.prototype;
  l.ec = function(a, b, c, d, e) {
    e = nk(this, a, e);
    for (a = a.a - 1; a >= this.minZoom;) {
      if (b.call(c, a, ok(this, e, a, d))) return !0;
      --a
    }
    return !1
  };
  l.tf = k("minZoom");
  l.Sb = function(a) {
    return null === this.d ? this.f[a] : this.d
  };
  l.Va = k("a");
  l.gc = function(a, b, c) {
    return a.a < this.maxZoom ? (c = nk(this, a, c), ok(this, c, a.a + 1, b)) : null
  };

  function pk(a, b, c, d) {
    qk(a, b[0], b[1], c, !1, mk);
    var e = mk.x,
      f = mk.y;
    qk(a, b[2], b[3], c, !0, mk);
    return db(e, mk.x, f, mk.y, d)
  }

  function ok(a, b, c, d) {
    return pk(a, b, a.a[c], d)
  }

  function rk(a, b) {
    var c = a.Sb(b.a),
      d = a.a[b.a],
      e = a.fa(b.a);
    return [c[0] + (b.x + 0.5) * e * d, c[1] + (b.y + 0.5) * e * d]
  }

  function nk(a, b, c) {
    var d = a.Sb(b.a),
      e = a.a[b.a];
    a = a.fa(b.a);
    var f = d[0] + b.x * a * e;
    b = d[1] + b.y * a * e;
    return He(f, b, f + a * e, b + a * e, c)
  }

  function qk(a, b, c, d, e, f) {
    var g = cf(a.a, d, 0),
      h = d / a.a[g],
      m = a.Sb(g);
    a = a.fa(g);
    b = h * (b - m[0]) / (d * a);
    c = h * (c - m[1]) / (d * a);
    e ? (b = Math.ceil(b) - 1, c = Math.ceil(c) - 1) : (b = Math.floor(b), c = Math.floor(c));
    return $a(g, b, c, f)
  }
  l.fa = function(a) {
    return u(this.e) ? this.e : this.b[a]
  };

  function sk(a) {
    Xj.call(this, {
      attributions: a.attributions,
      extent: a.extent,
      logo: a.logo,
      projection: a.projection
    });
    this.G = u(a.opaque) ? a.opaque : !1;
    this.tileGrid = u(a.tileGrid) ? a.tileGrid : null
  }
  E(sk, Xj);
  l = sk.prototype;
  l.Zc = pd;
  l.Kc = function(a, b, c, d) {
    var e = !0,
      f, g, h, m;
    for (h = d.a; h <= d.d; ++h)
      for (m = d.b; m <= d.c; ++m) g = this.Ga(c, h, m), a[c] && a[c][g] || (f = b(c, h, m), null === f ? e = !1 : (a[c] || (a[c] = {}), a[c][g] = f));
    return e
  };
  l.fc = ba(0);
  l.Ga = ab;
  l.Va = function() {
    return this.tileGrid.Va()
  };
  l.Af = k("tileGrid");

  function tk(a, b) {
    var c;
    if (null === a.tileGrid) {
      if (c = b.f, null === c) {
        c = b.p();
        for (var d = null === c ? 360 * Qf.degrees / b.b() : Math.max(c[2] - c[0], c[3] - c[1]), e = u(void 0) ? void 0 : 256, f = Array((u(void 0) ? NaN : 42) + 1), d = d / e, g = 0, h = f.length; g < h; ++g) f[g] = d / Math.pow(2, g);
        c = new lk({
          origin: null === c ? [0, 0] : Qe(c),
          resolutions: f,
          tileSize: e
        });
        b.f = c
      }
    } else c = a.tileGrid;
    return c
  }
  l.Nb = function(a, b, c) {
    return tk(this, c).fa(a)
  };
  l.we = da;

  function uk(a, b) {
    Cc.call(this);
    this.d = a;
    this.a = b
  }
  E(uk, Cc);
  uk.prototype.f = da;
  uk.prototype.l = function(a) {
    2 === a.target.state && vk(this)
  };

  function vk(a) {
    var b = a.a;
    b.b() && 1 == b.Qc() && a.d.f.J()
  }

  function wk(a, b) {
    b.Zc() && a.postRenderFunctions.push(va(function(a, b, e) {
      b = v(a).toString();
      a.$d(e.usedTiles[b])
    }, b))
  }

  function xk(a, b) {
    if (null != b) {
      var c, d, e;
      d = 0;
      for (e = b.length; d < e; ++d) c = b[d], a[v(c).toString()] = c
    }
  }

  function yk(a, b) {
    var c = b.r;
    u(c) && (a.logos[c] = "")
  }

  function zk(a, b, c, d) {
    b = v(b).toString();
    c = c.toString();
    b in a ? c in a[b] ? (a = a[b][c], d.a < a.a && (a.a = d.a), d.d > a.d && (a.d = d.d), d.b < a.b && (a.b = d.b), d.c > a.c && (a.c = d.c)) : a[b][c] = d : (a[b] = {}, a[b][c] = d)
  }

  function Ak(a, b, c, d) {
    return function(e, f, g) {
      e = b.lb(e, f, g, c, d);
      return a(e) ? e : null
    }
  }

  function Bk(a, b, c) {
    return [b * (Math.round(a[0] / b) + c[0] % 2 / 2), b * (Math.round(a[1] / b) + c[1] % 2 / 2)]
  }

  function Ck(a, b, c, d, e, f, g, h, m, n) {
    var p = v(b).toString();
    p in a.wantedTiles || (a.wantedTiles[p] = {});
    var q = a.wantedTiles[p];
    a = a.tileQueue;
    var r = c.minZoom,
      s, z, x, w, B, A;
    u(h) || (h = 0);
    for (A = g; A >= r; --A)
      for (z = ok(c, f, A), x = c.a[A], w = z.a; w <= z.d; ++w)
        for (B = z.b; B <= z.c; ++B) g - A <= h ? (s = b.lb(A, w, B, d, e), 0 == s.state && (q[s.a.toString()] = !0, s.d() in a.b || $i(a, [s, p, rk(c, s.a), x])), u(m) && m.call(n, s)) : b.we(A, w, B)
  };

  function Dk(a) {
    a = u(a) ? a : {};
    this.b = u(a.anchor) ? a.anchor : [0.5, 0.5];
    this.c = u(a.anchorOrigin) ? a.anchorOrigin : "top-left";
    this.d = u(a.anchorXUnits) ? a.anchorXUnits : "fraction";
    this.i = u(a.anchorYUnits) ? a.anchorYUnits : "fraction";
    var b = a.src,
      c = u(a.crossOrigin) ? a.crossOrigin : null,
      d = Ek.Fa(),
      e = d.get(b, c);
    null === e && (e = new Fk(b, c), d.a[c + ":" + b] = e, ++d.c);
    this.a = e;
    this.g = u(a.size) ? a.size : null;
    me.call(this, {
      opacity: u(a.opacity) ? a.opacity : 1,
      rotation: u(a.rotation) ? a.rotation : 0,
      scale: u(a.scale) ? a.scale : 1,
      re: void 0,
      rotateWithView: u(a.rotateWithView) ?
        a.rotateWithView : !1
    })
  }
  E(Dk, me);
  l = Dk.prototype;
  l.Lb = function() {
    var a = this.b,
      b = this.qb();
    if ("fraction" == this.d || "fraction" == this.i) {
      if (null === b) return null;
      a = this.b.slice();
      "fraction" == this.d && (a[0] *= b[0]);
      "fraction" == this.i && (a[1] *= b[1])
    }
    if ("top-left" != this.c) {
      if (null === b) return null;
      a === this.b && (a = this.b.slice());
      if ("top-right" == this.c || "bottom-right" == this.c) a[0] = -a[0] + b[0];
      if ("bottom-left" == this.c || "bottom-right" == this.c) a[1] = -a[1] + b[1]
    }
    return a
  };
  l.Rb = function() {
    return this.a.a
  };
  l.de = function() {
    return this.a.c
  };
  l.ce = function() {
    var a = this.a;
    if (null === a.d)
      if (a.g) {
        var b = pc("CANVAS"),
          c = a.e[0],
          d = a.e[1];
        b.width = c;
        b.height = d;
        b.getContext("2d").fillRect(0, 0, c, d);
        a.d = b
      } else a.d = a.a;
    return a.d
  };
  l.mh = function() {
    return this.a.f
  };
  l.qb = function() {
    return null === this.g ? this.a.e : this.g
  };
  l.Qd = function(a, b) {
    return K(this.a, "change", a, !1, b)
  };
  l.ee = function() {
    var a = this.a;
    if (0 == a.c) {
      a.c = 1;
      a.b = [fd(a.a, "error", a.i, !1, a), fd(a.a, "load", a.j, !1, a)];
      try {
        a.a.src = a.f
      } catch (b) {
        a.i()
      }
    }
  };
  l.ve = function(a, b) {
    gd(this.a, "change", a, !1, b)
  };

  function Fk(a, b) {
    xd.call(this);
    this.d = null;
    this.a = new Image;
    null !== b && (this.a.crossOrigin = b);
    this.b = null;
    this.c = 0;
    this.e = null;
    this.f = a;
    this.g = !1
  }
  E(Fk, xd);
  Fk.prototype.i = function() {
    this.c = 3;
    Ka(this.b, L);
    this.b = null;
    M(this, "change")
  };
  Fk.prototype.j = function() {
    this.c = 2;
    this.e = [this.a.width, this.a.height];
    Ka(this.b, L);
    this.b = null;
    var a = pc("CANVAS");
    a.width = 1;
    a.height = 1;
    a = a.getContext("2d");
    a.drawImage(this.a, 0, 0);
    try {
      a.getImageData(0, 0, 1, 1)
    } catch (b) {
      this.g = !0
    }
    M(this, "change")
  };

  function Ek() {
    this.a = {};
    this.c = 0;
    this.b = 32
  }
  ea(Ek);
  Ek.prototype.clear = function() {
    this.a = {};
    this.c = 0
  };
  Ek.prototype.get = function(a, b) {
    var c = b + ":" + a;
    return c in this.a ? this.a[c] : null
  };

  function Gk(a, b, c, d, e, f, g, h) {
    Wd(a);
    0 === b && 0 === c || Zd(a, b, c);
    1 == d && 1 == e || $d(a, d, e);
    0 !== f && ae(a, f);
    0 === g && 0 === h || Zd(a, g, h);
    return a
  }

  function Hk(a, b) {
    return a[0] == b[0] && a[1] == b[1] && a[4] == b[4] && a[5] == b[5] && a[12] == b[12] && a[13] == b[13]
  }

  function Ik(a, b, c) {
    var d = a[1],
      e = a[5],
      f = a[13],
      g = b[0];
    b = b[1];
    c[0] = a[0] * g + a[4] * b + a[12];
    c[1] = d * g + e * b + f;
    return c
  };

  function Jk(a, b) {
    Cc.call(this);
    this.f = b;
    this.b = {}
  }
  E(Jk, Cc);

  function Kk(a) {
    var b = a.view2DState,
      c = a.coordinateToPixelMatrix;
    Gk(c, a.size[0] / 2, a.size[1] / 2, 1 / b.resolution, -1 / b.resolution, -b.rotation, -b.center[0], -b.center[1]);
    a = a.pixelToCoordinateMatrix;
    var b = c[0],
      d = c[1],
      e = c[2],
      f = c[3],
      g = c[4],
      h = c[5],
      m = c[6],
      n = c[7],
      p = c[8],
      q = c[9],
      r = c[10],
      s = c[11],
      z = c[12],
      x = c[13],
      w = c[14],
      c = c[15],
      B = b * h - d * g,
      A = b * m - e * g,
      D = b * n - f * g,
      H = d * m - e * h,
      P = d * n - f * h,
      J = e * n - f * m,
      U = p * x - q * z,
      Z = p * w - r * z,
      na = p * c - s * z,
      ta = q * w - r * x,
      R = q * c - s * x,
      sa = r * c - s * w,
      ja = B * sa - A * R + D * ta + H * na - P * Z + J * U;
    0 != ja && (ja = 1 / ja, a[0] = (h * sa - m * R + n * ta) *
      ja, a[1] = (-d * sa + e * R - f * ta) * ja, a[2] = (x * J - w * P + c * H) * ja, a[3] = (-q * J + r * P - s * H) * ja, a[4] = (-g * sa + m * na - n * Z) * ja, a[5] = (b * sa - e * na + f * Z) * ja, a[6] = (-z * J + w * D - c * A) * ja, a[7] = (p * J - r * D + s * A) * ja, a[8] = (g * R - h * na + n * U) * ja, a[9] = (-b * R + d * na - f * U) * ja, a[10] = (z * P - x * D + c * B) * ja, a[11] = (-p * P + q * D - s * B) * ja, a[12] = (-g * ta + h * Z - m * U) * ja, a[13] = (b * ta - d * Z + e * U) * ja, a[14] = (-z * H + x * A - w * B) * ja, a[15] = (p * H - q * A + r * B) * ja)
  }
  Jk.prototype.Zb = function(a) {
    return new uk(this, a)
  };
  Jk.prototype.w = function() {
    Tb(this.b, function(a) {
      Gc(a)
    });
    Jk.B.w.call(this)
  };

  function Lk(a, b) {
    var c = v(b).toString();
    if (c in a.b) return a.b[c];
    var d = a.Zb(b);
    return a.b[c] = d
  }
  Jk.prototype.sc = da;
  Jk.prototype.q = function(a, b) {
    for (var c in this.b)
      if (!(null !== b && c in b.layerStates)) {
        var d = this.b[c];
        delete this.b[c];
        Gc(d)
      }
  };

  function Mk(a) {
    a.postRenderFunctions.push(function() {
      var a = Ek.Fa();
      if (a.c > a.b) {
        var c = 0,
          d, e;
        for (d in a.a) e = a.a[d], 0 !== (c++ & 3) || jd(e) || (delete a.a[d], --a.c)
      }
    })
  }

  function Nk(a, b) {
    for (var c in a.b)
      if (!(c in b.layerStates)) {
        b.postRenderFunctions.push(y(a.q, a));
        break
      }
  };

  function Ok(a) {
    hk.call(this, a)
  }
  E(Ok, hk);

  function Pk(a) {
    hk.call(this, a)
  }
  E(Pk, hk);
  Pk.prototype.d = function() {
    return this.get("preload")
  };
  Pk.prototype.getPreload = Pk.prototype.d;
  Pk.prototype.g = function(a) {
    this.t("preload", a)
  };
  Pk.prototype.setPreload = Pk.prototype.g;
  Pk.prototype.f = function() {
    return this.get("useInterimTilesOnError")
  };
  Pk.prototype.getUseInterimTilesOnError = Pk.prototype.f;
  Pk.prototype.l = function(a) {
    this.t("useInterimTilesOnError", a)
  };
  Pk.prototype.setUseInterimTilesOnError = Pk.prototype.l;

  function Qk(a) {
    a = u(a) ? a : {};
    var b = cc(a);
    delete b.style;
    hk.call(this, b);
    this.G = null;
    this.f = void 0;
    u(a.style) && this.g(a.style)
  }
  E(Qk, hk);
  Qk.prototype.Ca = k("G");
  Qk.prototype.Da = k("f");
  Qk.prototype.g = function(a) {
    this.G = a;
    this.f = te(a);
    this.s()
  };

  function Rk(a, b, c, d, e) {
    this.N = {};
    this.b = a;
    this.u = b;
    this.i = c;
    this.f = d;
    this.yc = e;
    this.g = this.a = this.c = this.U = this.O = this.L = null;
    this.o = this.Y = this.q = this.X = 0;
    this.ma = !1;
    this.j = this.Ca = 0;
    this.Da = !1;
    this.Na = 0;
    this.d = "";
    this.l = this.r = this.Pa = this.Oa = 0;
    this.G = this.n = this.k = null;
    this.e = [];
    this.Qa = Sd()
  }

  function Sk(a, b) {
    if (null !== a.g) {
      var c = df(b, 2, a.f, a.e),
        d = a.b,
        e = a.Qa,
        f = d.globalAlpha;
      1 != a.o && (d.globalAlpha = f * a.o);
      var g = a.Ca;
      a.ma && (g += a.yc);
      var h, m;
      h = 0;
      for (m = c.length; h < m; h += 2) {
        var n = c[h] - a.X,
          p = c[h + 1] - a.q;
        a.Da && (n = n + 0.5 | 0, p = p + 0.5 | 0);
        if (0 !== g || 1 != a.j) {
          var q = n + a.X,
            r = p + a.q;
          Gk(e, q, r, a.j, a.j, g, -q, -r);
          d.setTransform(e[0], e[1], e[4], e[5], e[12], e[13])
        }
        d.drawImage(a.g, n, p, a.Na, a.Y)
      }
      0 === g && 1 == a.j || d.setTransform(1, 0, 0, 1, 0, 0);
      1 != a.o && (d.globalAlpha = f)
    }
  }

  function Tk(a, b, c, d) {
    var e = 0;
    if (null !== a.G && "" !== a.d) {
      null === a.k || Uk(a, a.k);
      null === a.n || Vk(a, a.n);
      var f = a.G,
        g = a.b,
        h = a.U;
      null === h ? (g.font = f.font, g.textAlign = f.textAlign, g.textBaseline = f.textBaseline, a.U = {
        font: f.font,
        textAlign: f.textAlign,
        textBaseline: f.textBaseline
      }) : (h.font != f.font && (h.font = g.font = f.font), h.textAlign != f.textAlign && (h.textAlign = g.textAlign = f.textAlign), h.textBaseline != f.textBaseline && (h.textBaseline = g.textBaseline = f.textBaseline));
      b = df(b, d, a.f, a.e);
      for (f = a.b; e < c; e += d) {
        g = b[e] + a.Oa;
        h = b[e + 1] + a.Pa;
        if (0 !== a.r || 1 != a.l) {
          var m = Gk(a.Qa, g, h, a.l, a.l, a.r, -g, -h);
          f.setTransform(m[0], m[1], m[4], m[5], m[12], m[13])
        }
        null === a.n || f.strokeText(a.d, g, h);
        null === a.k || f.fillText(a.d, g, h)
      }
      0 === a.r && 1 == a.l || f.setTransform(1, 0, 0, 1, 0, 0)
    }
  }

  function Wk(a, b, c, d, e) {
    a = a.b;
    a.moveTo(b[c], b[c + 1]);
    var f;
    for (f = c + 2; f < d; f += 2) a.lineTo(b[f], b[f + 1]);
    e && a.lineTo(b[c], b[c + 1]);
    return d
  }

  function Xk(a, b, c, d) {
    var e = a.b,
      f, g;
    f = 0;
    for (g = d.length; f < g; ++f) c = Wk(a, b, c, d[f], !0), e.closePath();
    return c
  }
  l = Rk.prototype;
  l.ac = function(a, b) {
    var c = a.toString(),
      d = this.N[c];
    u(d) ? d.push(b) : this.N[c] = [b]
  };
  l.Gb = function(a) {
    if (We(this.i, a.p())) {
      if (null !== this.c || null !== this.a) {
        null === this.c || Uk(this, this.c);
        null === this.a || Vk(this, this.a);
        var b = jf(a, this.f, this.e),
          c = b[2] - b[0],
          d = b[3] - b[1],
          c = Math.sqrt(c * c + d * d),
          d = this.b;
        d.beginPath();
        d.arc(b[0], b[1], c, 0, 2 * Math.PI);
        null === this.c || d.fill();
        null === this.a || d.stroke()
      }
      "" !== this.d && Tk(this, a.Yc(), 2, 2)
    }
  };
  l.Jc = function(a, b) {
    var c = a.K();
    if (null !== c && We(this.i, c.p())) {
      var d = b.a;
      u(d) || (d = 0);
      this.ac(d, function(a) {
        a.ka(b.d, b.b);
        a.vb(b.e);
        a.aa(b.c);
        Yk[c.A()].call(a, c, null)
      })
    }
  };
  l.Ed = function(a, b) {
    var c = a.a,
      d, e;
    d = 0;
    for (e = c.length; d < e; ++d) {
      var f = c[d];
      Yk[f.A()].call(this, f, b)
    }
  };
  l.Kb = function(a) {
    var b = a.h;
    a = a.a;
    null === this.g || Sk(this, b);
    "" !== this.d && Tk(this, b, b.length, a)
  };
  l.Jb = function(a) {
    var b = a.h;
    a = a.a;
    null === this.g || Sk(this, b);
    "" !== this.d && Tk(this, b, b.length, a)
  };
  l.Hb = function(a) {
    if (We(this.i, a.p())) {
      if (null !== this.a) {
        Vk(this, this.a);
        var b = jf(a, this.f, this.e),
          c = this.b;
        c.beginPath();
        Wk(this, b, 0, b.length, !1);
        c.stroke()
      }
      "" !== this.d && (a = Zk(a), Tk(this, a, 2, 2))
    }
  };
  l.Ib = function(a) {
    var b = a.p();
    if (We(this.i, b)) {
      if (null !== this.a) {
        Vk(this, this.a);
        var b = jf(a, this.f, this.e),
          c = this.b;
        c.beginPath();
        var d = a.d,
          e = 0,
          f, g;
        f = 0;
        for (g = d.length; f < g; ++f) e = Wk(this, b, e, d[f], !1);
        c.stroke()
      }
      "" !== this.d && (a = $k(a), Tk(this, a, a.length, 2))
    }
  };
  l.hb = function(a) {
    if (We(this.i, a.p())) {
      var b;
      if (null !== this.a || null !== this.c) {
        null === this.c || Uk(this, this.c);
        null === this.a || Vk(this, this.a);
        b = jf(a, this.f, this.e);
        var c = this.b;
        c.beginPath();
        Xk(this, b, 0, a.d);
        null === this.c || c.fill();
        null === this.a || c.stroke()
      }
      "" !== this.d && (a = Mf(a), Tk(this, a, 2, 2))
    }
  };
  l.bc = function(a) {
    if (We(this.i, a.p())) {
      var b;
      if (null !== this.a || null !== this.c) {
        null === this.c || Uk(this, this.c);
        null === this.a || Vk(this, this.a);
        b = jf(a, this.f, this.e);
        var c = this.b,
          d = a.d,
          e = 0,
          f, g;
        f = 0;
        for (g = d.length; f < g; ++f) {
          var h = d[f];
          c.beginPath();
          e = Xk(this, b, e, h);
          null === this.c || c.fill();
          null === this.a || c.stroke()
        }
      }
      "" !== this.d && (a = al(a), Tk(this, a, a.length, 2))
    }
  };

  function bl(a) {
    var b = La(Yb(a.N), Number);
    Va(b);
    var c, d, e, f, g;
    c = 0;
    for (d = b.length; c < d; ++c)
      for (e = a.N[b[c].toString()], f = 0, g = e.length; f < g; ++f) e[f](a)
  }

  function Uk(a, b) {
    var c = a.b,
      d = a.L;
    null === d ? (c.fillStyle = b.fillStyle, a.L = {
      fillStyle: b.fillStyle
    }) : d.fillStyle != b.fillStyle && (d.fillStyle = c.fillStyle = b.fillStyle)
  }

  function Vk(a, b) {
    var c = a.b,
      d = a.O;
    null === d ? (c.lineCap = b.lineCap, I.Xb && c.setLineDash(b.lineDash), c.lineJoin = b.lineJoin, c.lineWidth = b.lineWidth, c.miterLimit = b.miterLimit, c.strokeStyle = b.strokeStyle, a.O = {
      lineCap: b.lineCap,
      lineDash: b.lineDash,
      lineJoin: b.lineJoin,
      lineWidth: b.lineWidth,
      miterLimit: b.miterLimit,
      strokeStyle: b.strokeStyle
    }) : (d.lineCap != b.lineCap && (d.lineCap = c.lineCap = b.lineCap), I.Xb && !Xa(d.lineDash, b.lineDash) && c.setLineDash(d.lineDash = b.lineDash), d.lineJoin != b.lineJoin && (d.lineJoin = c.lineJoin =
      b.lineJoin), d.lineWidth != b.lineWidth && (d.lineWidth = c.lineWidth = b.lineWidth), d.miterLimit != b.miterLimit && (d.miterLimit = c.miterLimit = b.miterLimit), d.strokeStyle != b.strokeStyle && (d.strokeStyle = c.strokeStyle = b.strokeStyle))
  }
  l.ka = function(a, b) {
    if (null === a) this.c = null;
    else {
      var c = a.a;
      this.c = {
        fillStyle: ee(null === c ? ie : c)
      }
    } if (null === b) this.a = null;
    else {
      var c = b.a,
        d = b.b,
        e = b.d,
        f = b.e,
        g = b.c,
        h = b.f;
      this.a = {
        lineCap: u(d) ? d : "round",
        lineDash: null != e ? e : je,
        lineJoin: u(f) ? f : "round",
        lineWidth: this.u * (u(g) ? g : 1),
        miterLimit: u(h) ? h : 10,
        strokeStyle: ee(null === c ? ke : c)
      }
    }
  };
  l.vb = function(a) {
    if (null === a) this.g = null;
    else {
      var b = a.Lb(),
        c = a.Rb(1),
        d = a.j,
        e = a.k,
        f = a.e,
        g = a.f,
        h = a.qb();
      a = a.l;
      this.X = b[0];
      this.q = b[1];
      this.Y = h[1];
      this.g = c;
      this.o = u(d) ? d : 1;
      this.ma = u(e) ? e : !1;
      this.Ca = u(f) ? f : 0;
      this.j = u(g) ? g : 1;
      this.Da = u(a) ? a : !1;
      this.Na = h[0]
    }
  };
  l.aa = function(a) {
    if (null === a) this.d = "";
    else {
      var b = a.c;
      null === b ? this.k = null : (b = b.a, this.k = {
        fillStyle: ee(null === b ? ie : b)
      });
      var c = a.e;
      if (null === c) this.n = null;
      else {
        var b = c.a,
          d = c.b,
          e = c.d,
          f = c.e,
          g = c.c,
          c = c.f;
        this.n = {
          lineCap: u(d) ? d : "round",
          lineDash: null != e ? e : je,
          lineJoin: u(f) ? f : "round",
          lineWidth: this.u * (u(g) ? g : 1),
          miterLimit: u(c) ? c : 10,
          strokeStyle: ee(null === b ? ke : b)
        }
      }
      var b = a.a,
        d = a.j,
        e = a.k,
        f = a.b,
        g = a.d,
        c = a.f,
        h = a.i;
      a = a.g;
      this.G = {
        font: u(b) ? b : "10px sans-serif",
        textAlign: u(h) ? h : "center",
        textBaseline: u(a) ? a : "middle"
      };
      this.d = u(c) ? c : "";
      this.Oa = u(d) ? d : 0;
      this.Pa = u(e) ? e : 0;
      this.r = u(f) ? f : 0;
      this.l = this.u * (u(g) ? g : 1)
    }
  };
  var Yk = {
    Point: Rk.prototype.Kb,
    LineString: Rk.prototype.Hb,
    Polygon: Rk.prototype.hb,
    MultiPoint: Rk.prototype.Jb,
    MultiLineString: Rk.prototype.Ib,
    MultiPolygon: Rk.prototype.bc,
    GeometryCollection: Rk.prototype.Ed,
    Circle: Rk.prototype.Gb
  };

  function cl(a, b) {
    uk.call(this, a, b);
    this.u = Sd()
  }
  E(cl, uk);
  cl.prototype.k = function(a, b, c) {
    dl(this, "precompose", c, a, void 0);
    var d = this.n();
    if (null !== d) {
      var e = this.j();
      c.globalAlpha = b.opacity;
      if (0 === a.view2DState.rotation) {
        b = e[13];
        var f = d.width * e[0],
          g = d.height * e[5];
        c.drawImage(d, 0, 0, +d.width, +d.height, Math.round(e[12]), Math.round(b), Math.round(f), Math.round(g))
      } else c.setTransform(e[0], e[1], e[4], e[5], e[12], e[13]), c.drawImage(d, 0, 0), c.setTransform(1, 0, 0, 1, 0, 0)
    }
    dl(this, "postcompose", c, a, void 0)
  };

  function dl(a, b, c, d, e) {
    var f = a.a;
    kd(f.S, b) && (a = u(e) ? e : el(a, d), a = new Rk(c, d.pixelRatio, d.extent, a, d.view2DState.rotation), M(f, new ue(b, f, a, d, c, null)), bl(a))
  }

  function el(a, b) {
    var c = b.view2DState,
      d = b.pixelRatio;
    return Gk(a.u, d * b.size[0] / 2, d * b.size[1] / 2, d / c.resolution, -d / c.resolution, -c.rotation, -c.center[0], -c.center[1])
  };

  function fl(a) {
    Xj.call(this, {
      attributions: a.attributions,
      extent: a.extent,
      logo: a.logo,
      projection: a.projection,
      state: a.state
    });
    this.j = u(a.resolutions) ? a.resolutions : null
  }
  E(fl, Xj);
  fl.prototype.Va = k("j");

  function gl(a, b) {
    null === a.j || (b = a.j[cf(a.j, b, 0)]);
    return b
  };

  function hl(a, b) {
    cl.call(this, a, b);
    this.c = null;
    this.e = Sd()
  }
  E(hl, cl);
  hl.prototype.f = function(a, b, c, d) {
    var e = this.a;
    return e.a.k(b.extent, b.view2DState.resolution, b.view2DState.rotation, a, function(a) {
      return c.call(d, a, e)
    })
  };
  hl.prototype.n = function() {
    return null === this.c ? null : this.c.e()
  };
  hl.prototype.j = k("e");
  hl.prototype.b = function(a) {
    var b = a.pixelRatio,
      c = a.view2DState,
      d = c.center,
      e = c.resolution,
      f = c.rotation,
      g = this.a.a,
      h = a.viewHints;
    h[0] || h[1] || (c = g.pb(a.extent, e, b, c.projection), null !== c && (h = c.state, 0 == h ? (fd(c, "change", this.l, !1, this), kk(c)) : 2 == h && (this.c = c)));
    if (null !== this.c) {
      var c = this.c,
        h = c.p(),
        m = c.d,
        n = c.b,
        e = b * m / (e * n);
      Gk(this.e, b * a.size[0] / 2, b * a.size[1] / 2, e, e, f, n * (h[0] - d[0]) / m, n * (d[1] - h[3]) / m);
      xk(a.attributions, c.i);
      yk(a, g)
    }
  };

  function il(a, b) {
    cl.call(this, a, b);
    this.o = this.e = this.i = null;
    this.r = Sd();
    this.q = NaN;
    this.g = this.c = null
  }
  E(il, cl);
  il.prototype.n = k("i");
  il.prototype.j = k("r");
  il.prototype.b = function(a) {
    var b = a.pixelRatio,
      c = a.view2DState,
      d = c.projection,
      e = this.a,
      f = e.a,
      g = tk(f, d),
      h = f.fc(),
      m = cf(g.a, c.resolution, 0),
      n = f.Nb(m, a.pixelRatio, d),
      p = g.a[m],
      q = p / (n / g.fa(m)),
      r = c.center,
      s;
    p == c.resolution ? (r = Bk(r, p, a.size), s = Se(r, p, c.rotation, a.size)) : s = a.extent;
    var z = pk(g, s, p),
      x = n * (z.d - z.a + 1),
      w = n * (z.c - z.b + 1),
      B, A;
    null === this.i ? (B = pc("CANVAS"), B.width = x, B.height = w, A = B.getContext("2d"), this.i = B, this.e = [x, w], this.o = A) : (B = this.i, A = this.o, this.e[0] < x || this.e[1] < w ? (B.width = x, B.height = w, this.e =
      [x, w], this.c = null) : (x = this.e[0], w = this.e[1], m == this.q && this.c.a <= z.a && z.d <= this.c.d && this.c.b <= z.b && z.c <= this.c.c || (this.c = null)));
    var D, H;
    null === this.c ? (x /= n, w /= n, D = z.a - Math.floor((x - (z.d - z.a + 1)) / 2), H = z.b - Math.floor((w - (z.c - z.b + 1)) / 2), this.q = m, this.c = new cb(D, D + x - 1, H, H + w - 1), this.g = Array(x * w), w = this.c) : (w = this.c, x = w.d - w.a + 1);
    B = {};
    B[m] = {};
    var P = [],
      J = y(f.Kc, f, B, Ak(function(a) {
        return null !== a && 2 == a.state
      }, f, b, d)),
      U = e.f();
    u(U) || (U = !0);
    var Z = Fe(),
      na = new cb(0, 0, 0, 0),
      ta, R, sa;
    for (H = z.a; H <= z.d; ++H)
      for (sa =
        z.b; sa <= z.c; ++sa) R = f.lb(m, H, sa, b, d), D = R.state, 2 == D || 4 == D || 3 == D && !U ? B[m][R.a.toString()] = R : (ta = g.ec(R.a, J, null, na, Z), ta || (P.push(R), ta = g.gc(R.a, na, Z), null === ta || J(m + 1, ta)));
    J = 0;
    for (ta = P.length; J < ta; ++J) R = P[J], H = n * (R.a.x - w.a), sa = n * (w.c - R.a.y), A.clearRect(H, sa, n, n);
    P = La(Yb(B), Number);
    Va(P);
    var ja = f.G,
      Wb = Ue(nk(g, new Za(m, w.a, w.c), Z)),
      mb, Ab, th, $f, Yd, Mj, J = 0;
    for (ta = P.length; J < ta; ++J)
      if (mb = P[J], n = f.Nb(mb, b, d), $f = B[mb], mb == m)
        for (th in $f) R = $f[th], Ab = (R.a.y - w.b) * x + (R.a.x - w.a), this.g[Ab] != R && (H = n * (R.a.x - w.a),
          sa = n * (w.c - R.a.y), D = R.state, 4 != D && (3 != D || U) && ja || A.clearRect(H, sa, n, n), 2 == D && A.drawImage(R.b(), h, h, n, n, H, sa, n, n), this.g[Ab] = R);
      else
        for (th in mb = g.a[mb] / p, $f)
          for (R = $f[th], Ab = nk(g, R.a, Z), H = (Ab[0] - Wb[0]) / q, sa = (Wb[1] - Ab[3]) / q, Mj = mb * n, Yd = mb * n, D = R.state, 4 != D && ja || A.clearRect(H, sa, Mj, Yd), 2 == D && A.drawImage(R.b(), h, h, n, n, H, sa, Mj, Yd), R = ok(g, Ab, m, na), D = Math.max(R.a, w.a), sa = Math.min(R.d, w.d), H = Math.max(R.b, w.b), R = Math.min(R.c, w.c); D <= sa; ++D)
            for (Yd = H; Yd <= R; ++Yd) Ab = (Yd - w.b) * x + (D - w.a), this.g[Ab] = void 0;
    zk(a.usedTiles,
      f, m, z);
    Ck(a, f, g, b, d, s, m, e.d());
    wk(a, f);
    yk(a, f);
    Gk(this.r, b * a.size[0] / 2, b * a.size[1] / 2, b * q / c.resolution, b * q / c.resolution, c.rotation, (Wb[0] - r[0]) / q, (r[1] - Wb[1]) / q)
  };
  var jl = ["Polygon", "LineString", "Image", "Text"];

  function kl(a, b, c) {
    this.Y = a;
    this.u = b;
    this.e = 0;
    this.resolution = c;
    this.X = this.r = null;
    this.c = [];
    this.coordinates = [];
    this.O = Sd();
    this.a = [];
    this.L = [];
    this.d = Fe();
    this.U = Sd();
    this.G = {}
  }

  function ll(a, b, c, d, e, f) {
    var g = a.coordinates.length,
      h = a.Lc(),
      m = [b[c], b[c + 1]],
      n = [NaN, NaN],
      p = !0,
      q, r, s;
    for (q = c + e; q < d; q += e) {
      n[0] = b[q];
      n[1] = b[q + 1];
      s = h[1];
      var z = h[2],
        x = h[3],
        w = n[0],
        B = n[1],
        A = 0;
      w < h[0] ? A = A | 16 : w > z && (A = A | 4);
      B < s ? A |= 8 : B > x && (A |= 2);
      0 === A && (A = 1);
      s = A;
      s !== r ? (p && (a.coordinates[g++] = m[0], a.coordinates[g++] = m[1]), a.coordinates[g++] = n[0], a.coordinates[g++] = n[1], p = !1) : 1 === s ? (a.coordinates[g++] = n[0], a.coordinates[g++] = n[1], p = !1) : p = !0;
      m[0] = n[0];
      m[1] = n[1];
      r = s
    }
    q === c + e && (a.coordinates[g++] = m[0], a.coordinates[g++] =
      m[1]);
    f && (a.coordinates[g++] = b[c], a.coordinates[g++] = b[c + 1]);
    return g
  }

  function ml(a, b, c) {
    a.r = [0, b, 0];
    a.c.push(a.r);
    a.G[a.c.length - 1] = c.toString();
    a.X = [0, b, 0];
    a.a.push(a.X)
  }

  function nl(a, b, c, d, e, f, g, h) {
    var m;
    Hk(d, a.O) ? m = a.L : (m = df(a.coordinates, 2, d, a.L), Vd(a.O, d));
    d = 0;
    for (var n = g.length, p = 0, q, r = a.U; d < n;) {
      var s = g[d],
        z, x, w, B;
      switch (s[0]) {
        case 0:
          u(G(f, a.G[d])) ? d = s[2] : ++d;
          break;
        case 1:
          b.beginPath();
          ++d;
          break;
        case 2:
          q = m[p];
          var A = m[p + 1],
            D = m[p + 2] - q,
            s = m[p + 3] - A;
          b.arc(q, A, Math.sqrt(D * D + s * s), 0, 2 * Math.PI, !0);
          p += 4;
          ++d;
          break;
        case 3:
          b.closePath();
          ++d;
          break;
        case 4:
          p = s[1];
          q = s[2];
          z = s[3];
          w = s[4] * c;
          var H = s[5] * c,
            P = s[6] * c;
          x = s[7];
          var A = s[9],
            D = s[10],
            J = s[11],
            U = s[12] * c;
          for (s[8] && (A += e); p < q; p +=
            2) {
            s = m[p] - w;
            B = m[p + 1] - H;
            J && (s = s + 0.5 | 0, B = B + 0.5 | 0);
            if (1 != D || 0 !== A) {
              var Z = s + w,
                na = B + H;
              Gk(r, Z, na, D, D, A, -Z, -na);
              b.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
            }
            Z = b.globalAlpha;
            1 != x && (b.globalAlpha = Z * x);
            b.drawImage(z, s, B, U, P);
            1 != x && (b.globalAlpha = Z);
            1 == D && 0 === A || b.setTransform(1, 0, 0, 1, 0, 0)
          }++d;
          break;
        case 5:
          p = s[1];
          q = s[2];
          w = s[3];
          H = s[4];
          P = s[5];
          A = s[6];
          D = s[7] * c;
          z = s[8];
          for (x = s[9]; p < q; p += 2) {
            s = m[p] + H;
            B = m[p + 1] + P;
            if (1 != D || 0 !== A) Gk(r, s, B, D, D, A, -s, -B), b.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]);
            x && b.strokeText(w,
              s, B);
            z && b.fillText(w, s, B);
            1 == D && 0 === A || b.setTransform(1, 0, 0, 1, 0, 0)
          }++d;
          break;
        case 6:
          if (u(h) && (q = s[1], q = h(q, s[2]))) return q;
          ++d;
          break;
        case 7:
          b.fill();
          ++d;
          break;
        case 8:
          p = s[1];
          q = s[2];
          b.moveTo(m[p], m[p + 1]);
          for (p += 2; p < q; p += 2) b.lineTo(m[p], m[p + 1]);
          ++d;
          break;
        case 9:
          b.fillStyle = s[1];
          ++d;
          break;
        case 10:
          b.strokeStyle = s[1];
          b.lineWidth = s[2] * c;
          b.lineCap = s[3];
          b.lineJoin = s[4];
          b.miterLimit = s[5];
          I.Xb && b.setLineDash(s[6]);
          ++d;
          break;
        case 11:
          b.font = s[1];
          b.textAlign = s[2];
          b.textBaseline = s[3];
          ++d;
          break;
        case 12:
          b.stroke();
          ++d;
          break;
        default:
          ++d
      }
    }
  }

  function pl(a) {
    var b = a.a;
    b.reverse();
    var c, d = b.length,
      e, f, g = -1;
    for (c = 0; c < d; ++c)
      if (e = b[c], f = e[0], 6 == f) g = c;
      else if (0 == f) {
      e[2] = c;
      e = a.a;
      for (f = c; g < f;) {
        var h = e[g];
        e[g] = e[f];
        e[f] = h;
        ++g;
        --f
      }
      g = -1
    }
  }

  function ql(a, b, c) {
    a.r[2] = a.c.length;
    a.r = null;
    a.X[2] = a.a.length;
    a.X = null;
    b = [6, b, c];
    a.c.push(b);
    a.a.push(b)
  }
  kl.prototype.qc = da;
  kl.prototype.Lc = k("u");
  kl.prototype.p = k("d");

  function rl(a, b, c) {
    kl.call(this, a, b, c);
    this.g = this.q = null;
    this.o = this.N = this.n = this.l = this.k = this.j = this.i = this.f = this.b = void 0
  }
  E(rl, kl);
  rl.prototype.Kb = function(a, b) {
    if (null !== this.g) {
      Oe(this.d, a.p());
      ml(this, a, v(b));
      var c = a.h,
        d = this.coordinates.length,
        c = ll(this, c, 0, c.length, a.a, !1);
      this.c.push([4, d, c, this.g, this.b, this.f, this.i, this.j, this.k, this.l, this.n, this.N, this.o]);
      this.a.push([4, d, c, this.q, this.b, this.f, this.i, this.j, this.k, this.l, this.n, this.N, this.o]);
      ql(this, a, b)
    }
  };
  rl.prototype.Jb = function(a, b) {
    if (null !== this.g) {
      Oe(this.d, a.p());
      ml(this, a, v(b));
      var c = a.h,
        d = this.coordinates.length,
        c = ll(this, c, 0, c.length, a.a, !1);
      this.c.push([4, d, c, this.g, this.b, this.f, this.i, this.j, this.k, this.l, this.n, this.N, this.o]);
      this.a.push([4, d, c, this.q, this.b, this.f, this.i, this.j, this.k, this.l, this.n, this.N, this.o]);
      ql(this, a, b)
    }
  };
  rl.prototype.qc = function() {
    pl(this);
    this.f = this.b = void 0;
    this.g = this.q = null;
    this.o = this.N = this.l = this.k = this.j = this.n = this.i = void 0
  };
  rl.prototype.vb = function(a) {
    var b = a.Lb(),
      c = a.qb(),
      d = a.ce(1),
      e = a.Rb(1);
    this.b = b[0];
    this.f = b[1];
    this.q = d;
    this.g = e;
    this.i = c[1];
    this.j = a.j;
    this.k = a.k;
    this.l = a.e;
    this.n = a.f;
    this.N = a.l;
    this.o = c[0]
  };

  function sl(a, b, c) {
    kl.call(this, a, b, c);
    this.b = {
      Cb: void 0,
      xb: void 0,
      yb: null,
      zb: void 0,
      Ab: void 0,
      Bb: void 0,
      Uc: 0,
      strokeStyle: void 0,
      lineCap: void 0,
      lineDash: null,
      lineJoin: void 0,
      lineWidth: void 0,
      miterLimit: void 0
    }
  }
  E(sl, kl);

  function tl(a, b, c, d, e) {
    var f = a.coordinates.length;
    b = ll(a, b, c, d, e, !1);
    f = [8, f, b];
    a.c.push(f);
    a.a.push(f);
    return d
  }
  l = sl.prototype;
  l.Lc = function() {
    var a = this.u;
    this.e && (a = Ie(a, this.resolution * (this.e + 1) / 2));
    return a
  };

  function ul(a) {
    var b = a.b,
      c = b.strokeStyle,
      d = b.lineCap,
      e = b.lineDash,
      f = b.lineJoin,
      g = b.lineWidth,
      h = b.miterLimit;
    b.Cb == c && b.xb == d && Xa(b.yb, e) && b.zb == f && b.Ab == g && b.Bb == h || (b.Uc != a.coordinates.length && (a.c.push([12]), b.Uc = a.coordinates.length), a.c.push([10, c, g, d, f, h, e], [1]), b.Cb = c, b.xb = d, b.yb = e, b.zb = f, b.Ab = g, b.Bb = h)
  }
  l.Hb = function(a, b) {
    var c = this.b,
      d = c.lineWidth;
    u(c.strokeStyle) && u(d) && (Oe(this.d, a.p()), ul(this), ml(this, a, v(b)), this.a.push([10, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash], [1]), c = a.h, tl(this, c, 0, c.length, a.a), this.a.push([12]), ql(this, a, b))
  };
  l.Ib = function(a, b) {
    var c = this.b,
      d = c.lineWidth;
    if (u(c.strokeStyle) && u(d)) {
      Oe(this.d, a.p());
      ul(this);
      ml(this, a, v(b));
      this.a.push([10, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash], [1]);
      var c = a.d,
        d = a.h,
        e = a.a,
        f = 0,
        g, h;
      g = 0;
      for (h = c.length; g < h; ++g) f = tl(this, d, f, c[g], e);
      this.a.push([12]);
      ql(this, a, b)
    }
  };
  l.qc = function() {
    this.b.Uc != this.coordinates.length && this.c.push([12]);
    pl(this);
    this.b = null
  };
  l.ka = function(a, b) {
    var c = b.a;
    this.b.strokeStyle = ee(null === c ? ke : c);
    c = b.b;
    this.b.lineCap = u(c) ? c : "round";
    c = b.d;
    this.b.lineDash = null === c ? je : c;
    c = b.e;
    this.b.lineJoin = u(c) ? c : "round";
    c = b.c;
    this.b.lineWidth = u(c) ? c : 1;
    c = b.f;
    this.b.miterLimit = u(c) ? c : 10;
    this.e = Math.max(this.e, this.b.lineWidth)
  };

  function vl(a, b, c) {
    kl.call(this, a, b, c);
    this.b = {
      Cd: void 0,
      Cb: void 0,
      xb: void 0,
      yb: null,
      zb: void 0,
      Ab: void 0,
      Bb: void 0,
      fillStyle: void 0,
      strokeStyle: void 0,
      lineCap: void 0,
      lineDash: null,
      lineJoin: void 0,
      lineWidth: void 0,
      miterLimit: void 0
    }
  }
  E(vl, kl);

  function wl(a, b, c, d, e) {
    var f = a.b,
      g = [1];
    a.c.push(g);
    a.a.push(g);
    var h, g = 0;
    for (h = d.length; g < h; ++g) {
      var m = d[g],
        n = a.coordinates.length;
      c = ll(a, b, c, m, e, !0);
      c = [8, n, c];
      n = [3];
      a.c.push(c, n);
      a.a.push(c, n);
      c = m
    }
    b = [7];
    a.a.push(b);
    u(f.fillStyle) && a.c.push(b);
    u(f.strokeStyle) && (f = [12], a.c.push(f), a.a.push(f));
    return c
  }
  l = vl.prototype;
  l.Gb = function(a, b) {
    var c = this.b,
      d = c.strokeStyle;
    if (u(c.fillStyle) || u(d)) {
      Oe(this.d, a.p());
      xl(this);
      ml(this, a, v(b));
      this.a.push([9, ee(ie)]);
      u(c.strokeStyle) && this.a.push([10, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash]);
      d = a.h;
      ll(this, d, 0, d.length, a.a, !1);
      var d = [1],
        e = [2];
      this.c.push(d, e);
      this.a.push(d, e);
      ql(this, a, b);
      d = [7];
      this.a.push(d);
      u(c.fillStyle) && this.c.push(d);
      u(c.strokeStyle) && (c = [12], this.c.push(c), this.a.push(c))
    }
  };
  l.hb = function(a, b) {
    var c = this.b,
      d = c.strokeStyle;
    if (u(c.fillStyle) || u(d)) Oe(this.d, a.p()), xl(this), ml(this, a, v(b)), this.a.push([9, ee(ie)]), u(c.strokeStyle) && this.a.push([10, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash]), c = a.d, d = Lf(a), wl(this, d, 0, c, a.a), ql(this, a, b)
  };
  l.bc = function(a, b) {
    var c = this.b,
      d = c.strokeStyle;
    if (u(c.fillStyle) || u(d)) {
      Oe(this.d, a.p());
      xl(this);
      ml(this, a, v(b));
      this.a.push([9, ee(ie)]);
      u(c.strokeStyle) && this.a.push([10, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash]);
      var c = a.d,
        d = yl(a),
        e = a.a,
        f = 0,
        g, h;
      g = 0;
      for (h = c.length; g < h; ++g) f = wl(this, d, f, c[g], e);
      ql(this, a, b)
    }
  };
  l.qc = function() {
    pl(this);
    this.b = null;
    var a = this.Y;
    if (0 !== a) {
      var b = this.coordinates,
        c, d;
      c = 0;
      for (d = b.length; c < d; ++c) b[c] = a * Math.round(b[c] / a)
    }
  };
  l.Lc = function() {
    var a = this.u;
    this.e && (a = Ie(a, this.resolution * (this.e + 1) / 2));
    return a
  };
  l.ka = function(a, b) {
    var c = this.b;
    if (null === a) c.fillStyle = void 0;
    else {
      var d = a.a;
      c.fillStyle = ee(null === d ? ie : d)
    }
    null === b ? (c.strokeStyle = void 0, c.lineCap = void 0, c.lineDash = null, c.lineJoin = void 0, c.lineWidth = void 0, c.miterLimit = void 0) : (d = b.a, c.strokeStyle = ee(null === d ? ke : d), d = b.b, c.lineCap = u(d) ? d : "round", d = b.d, c.lineDash = null === d ? je : d.slice(), d = b.e, c.lineJoin = u(d) ? d : "round", d = b.c, c.lineWidth = u(d) ? d : 1, d = b.f, c.miterLimit = u(d) ? d : 10, this.e = Math.max(this.e, c.lineWidth))
  };

  function xl(a) {
    var b = a.b,
      c = b.fillStyle,
      d = b.strokeStyle,
      e = b.lineCap,
      f = b.lineDash,
      g = b.lineJoin,
      h = b.lineWidth,
      m = b.miterLimit;
    u(c) && b.Cd != c && (a.c.push([9, c]), b.Cd = b.fillStyle);
    !u(d) || b.Cb == d && b.xb == e && b.yb == f && b.zb == g && b.Ab == h && b.Bb == m || (a.c.push([10, d, h, e, g, m, f]), b.Cb = d, b.xb = e, b.yb = f, b.zb = g, b.Ab = h, b.Bb = m)
  }

  function zl(a, b, c) {
    kl.call(this, a, b, c);
    this.q = this.o = this.N = null;
    this.g = "";
    this.n = this.l = this.k = this.j = 0;
    this.i = this.f = this.b = null
  }
  E(zl, kl);
  zl.prototype.Ea = function(a, b, c, d, e, f) {
    if ("" !== this.g && null !== this.i && (null !== this.b || null !== this.f)) {
      Pe(this.d, a, b, c, d);
      if (null !== this.b) {
        var g = this.b,
          h = this.N;
        if (null === h || h.fillStyle != g.fillStyle) {
          var m = [9, g.fillStyle];
          this.c.push(m);
          this.a.push(m);
          null === h ? this.N = {
            fillStyle: g.fillStyle
          } : h.fillStyle = g.fillStyle
        }
      }
      null !== this.f && (g = this.f, h = this.o, null === h || h.lineCap != g.lineCap || h.lineDash != g.lineDash || h.lineJoin != g.lineJoin || h.lineWidth != g.lineWidth || h.miterLimit != g.miterLimit || h.strokeStyle != g.strokeStyle) &&
        (m = [10, g.strokeStyle, g.lineWidth, g.lineCap, g.lineJoin, g.miterLimit, g.lineDash], this.c.push(m), this.a.push(m), null === h ? this.o = {
        lineCap: g.lineCap,
        lineDash: g.lineDash,
        lineJoin: g.lineJoin,
        lineWidth: g.lineWidth,
        miterLimit: g.miterLimit,
        strokeStyle: g.strokeStyle
      } : (h.lineCap = g.lineCap, h.lineDash = g.lineDash, h.lineJoin = g.lineJoin, h.lineWidth = g.lineWidth, h.miterLimit = g.miterLimit, h.strokeStyle = g.strokeStyle));
      g = this.i;
      h = this.q;
      if (null === h || h.font != g.font || h.textAlign != g.textAlign || h.textBaseline != g.textBaseline) m =
        [11, g.font, g.textAlign, g.textBaseline], this.c.push(m), this.a.push(m), null === h ? this.q = {
          font: g.font,
          textAlign: g.textAlign,
          textBaseline: g.textBaseline
        } : (h.font = g.font, h.textAlign = g.textAlign, h.textBaseline = g.textBaseline);
      ml(this, e, v(f));
      g = this.coordinates.length;
      a = ll(this, a, b, c, d, !1);
      a = [5, g, a, this.g, this.j, this.k, this.l, this.n, null !== this.b, null !== this.f];
      this.c.push(a);
      this.a.push(a);
      ql(this, e, f)
    }
  };
  zl.prototype.aa = function(a) {
    if (null === a) this.g = "";
    else {
      var b = a.c;
      null === b ? this.b = null : (b = b.a, b = ee(null === b ? ie : b), null === this.b ? this.b = {
        fillStyle: b
      } : this.b.fillStyle = b);
      var c = a.e;
      if (null === c) this.f = null;
      else {
        var b = c.a,
          d = c.b,
          e = c.d,
          f = c.e,
          g = c.c,
          c = c.f,
          d = u(d) ? d : "round",
          e = null != e ? e.slice() : je,
          f = u(f) ? f : "round",
          g = u(g) ? g : 1,
          c = u(c) ? c : 10,
          b = ee(null === b ? ke : b);
        if (null === this.f) this.f = {
          lineCap: d,
          lineDash: e,
          lineJoin: f,
          lineWidth: g,
          miterLimit: c,
          strokeStyle: b
        };
        else {
          var h = this.f;
          h.lineCap = d;
          h.lineDash = e;
          h.lineJoin = f;
          h.lineWidth =
            g;
          h.miterLimit = c;
          h.strokeStyle = b
        }
      }
      var m = a.a,
        b = a.j,
        d = a.k,
        e = a.b,
        g = a.d,
        c = a.f,
        f = a.i,
        h = a.g;
      a = u(m) ? m : "10px sans-serif";
      f = u(f) ? f : "center";
      h = u(h) ? h : "middle";
      null === this.i ? this.i = {
        font: a,
        textAlign: f,
        textBaseline: h
      } : (m = this.i, m.font = a, m.textAlign = f, m.textBaseline = h);
      this.g = u(c) ? c : "";
      this.j = u(b) ? b : 0;
      this.k = u(d) ? d : 0;
      this.l = u(e) ? e : 0;
      this.n = u(g) ? g : 1
    }
  };

  function Al(a, b, c) {
    this.f = a;
    this.c = b;
    this.e = c;
    this.a = {};
    a = pc("CANVAS");
    a.width = 1;
    a.height = 1;
    this.b = a.getContext("2d");
    this.d = Sd()
  }

  function Bl(a, b, c, d, e, f, g) {
    var h = La(Yb(a.a), Number);
    Va(h);
    a: {
      var m = a.c,
        n = m[0],
        p = m[1],
        q = m[2],
        m = m[3],
        n = df([n, p, n, m, q, m, q, p], 2, e);
      b.save();
      b.beginPath();
      b.moveTo(n[0], n[1]);
      b.lineTo(n[2], n[3]);
      b.lineTo(n[4], n[5]);
      b.lineTo(n[6], n[7]);
      b.closePath();
      b.clip();
      for (var r, s, n = 0, p = h.length; n < p; ++n)
        for (r = a.a[h[n].toString()], q = 0, m = jl.length; q < m; ++q)
          if (s = r[jl[q]], u(s) && We(c, s.p()) && (s = nl(s, b, d, e, f, g, s.c, void 0))) break a;
      b.restore()
    }
  }

  function Cl(a, b, c, d, e, f, g, h) {
    var m, n, p, q, r;
    m = 0;
    for (n = b.length; m < n; ++m)
      for (q in p = a.a[b[m].toString()], p)
        if (r = p[q], We(d, r.p()) && (r = nl(r, c, 1, e, f, g, r.a, h))) return r
  }

  function Dl(a, b, c, d, e, f, g) {
    var h = a.d;
    Gk(h, 0.5, 0.5, 1 / c, -1 / c, -d, -e[0], -e[1]);
    c = La(Yb(a.a), Number);
    Va(c, function(a, b) {
      return b - a
    });
    var m = a.b;
    m.clearRect(0, 0, 1, 1);
    return Cl(a, c, m, b, h, d, f, function(a, b) {
      if (0 < m.getImageData(0, 0, 1, 1).data[3]) {
        var c = g(a, b);
        if (c) return c;
        m.clearRect(0, 0, 1, 1)
      }
    })
  }

  function El(a) {
    for (var b in a.a) {
      var c = a.a[b],
        d;
      for (d in c) c[d].qc()
    }
  }

  function Fl(a, b, c) {
    var d = u(b) ? b.toString() : "0";
    b = a.a[d];
    u(b) || (b = {}, a.a[d] = b);
    d = b[c];
    u(d) || (d = new Gl[c](a.f, a.c, a.e), b[c] = d);
    return d
  }
  Al.prototype.V = function() {
    return Zb(this.a)
  };
  var Gl = {
    Image: rl,
    LineString: sl,
    Polygon: vl,
    Text: zl
  };

  function Hl(a, b, c) {
    ef.call(this);
    this.ne(a, u(b) ? b : 0, c)
  }
  E(Hl, ef);
  l = Hl.prototype;
  l.H = function() {
    var a = new Hl(null),
      b = this.h.slice();
    gf(a, this.b, b);
    a.s();
    return a
  };
  l.ca = function(a, b, c, d) {
    var e = this.h;
    a -= e[0];
    var f = b - e[1];
    b = a * a + f * f;
    if (b < d) {
      if (0 === b)
        for (d = 0; d < this.a; ++d) c[d] = e[d];
      else
        for (d = this.Zd() / Math.sqrt(b), c[0] = e[0] + d * a, c[1] = e[1] + d * f, d = 2; d < this.a; ++d) c[d] = e[d];
      c.length = this.a;
      return b
    }
    return d
  };
  l.Ra = function(a, b) {
    var c = this.h,
      d = a - c[0],
      c = b - c[1];
    return d * d + c * c <= Il(this)
  };
  l.Yc = function() {
    return this.h.slice(0, this.a)
  };
  l.p = function(a) {
    if (this.e != this.c) {
      var b = this.h,
        c = b[this.a] - b[0];
      this.extent = He(b[0] - c, b[1] - c, b[0] + c, b[1] + c, this.extent);
      this.e = this.c
    }
    return Ye(this.extent, a)
  };
  l.Zd = function() {
    return Math.sqrt(Il(this))
  };

  function Il(a) {
    var b = a.h[a.a] - a.h[0];
    a = a.h[a.a + 1] - a.h[1];
    return b * b + a * a
  }
  l.Wa = function() {
    return this
  };
  l.A = ba("Circle");
  l.Lg = function(a) {
    var b = this.a,
      c = this.h[b] - this.h[0],
      d = a.slice();
    d[b] = d[0] + c;
    for (c = 1; c < b; ++c) d[b + c] = a[c];
    gf(this, this.b, d);
    this.s()
  };
  l.ne = function(a, b, c) {
    if (null === a) gf(this, "XY", null);
    else {
      hf(this, c, a, 0);
      null === this.h && (this.h = []);
      c = this.h;
      a = sf(c, a);
      c[a++] = c[0] + b;
      var d;
      b = 1;
      for (d = this.a; b < d; ++b) c[a++] = c[b];
      c.length = a
    }
    this.s()
  };
  l.fi = function(a) {
    this.h[this.a] = this.h[0] + a;
    this.s()
  };

  function Jl(a) {
    Md.call(this);
    this.a = u(a) ? a : null;
    Kl(this)
  }
  E(Jl, Md);

  function Ll(a) {
    var b = [],
      c, d;
    c = 0;
    for (d = a.length; c < d; ++c) b.push(a[c].H());
    return b
  }

  function Ml(a) {
    var b, c;
    if (null !== a.a)
      for (b = 0, c = a.a.length; b < c; ++b) gd(a.a[b], "change", a.s, !1, a)
  }

  function Kl(a) {
    var b, c;
    if (null !== a.a)
      for (b = 0, c = a.a.length; b < c; ++b) K(a.a[b], "change", a.s, !1, a)
  }
  l = Jl.prototype;
  l.H = function() {
    var a = new Jl(null);
    a.pe(this.a);
    return a
  };
  l.ca = function(a, b, c, d) {
    if (d < Ke(this.p(), a, b)) return d;
    var e = this.a,
      f, g;
    f = 0;
    for (g = e.length; f < g; ++f) d = e[f].ca(a, b, c, d);
    return d
  };
  l.Ra = function(a, b) {
    var c = this.a,
      d, e;
    d = 0;
    for (e = c.length; d < e; ++d)
      if (c[d].Ra(a, b)) return !0;
    return !1
  };
  l.p = function(a) {
    if (this.e != this.c) {
      var b = Me(this.extent),
        c = this.a,
        d, e;
      d = 0;
      for (e = c.length; d < e; ++d) Oe(b, c[d].p());
      this.extent = b;
      this.e = this.c
    }
    return Ye(this.extent, a)
  };
  l.gf = function() {
    return Ll(this.a)
  };
  l.Wa = function(a) {
    this.j != this.c && ($b(this.f), this.i = 0, this.j = this.c);
    if (0 > a || 0 !== this.i && a < this.i) return this;
    var b = a.toString();
    if (this.f.hasOwnProperty(b)) return this.f[b];
    var c = [],
      d = this.a,
      e = !1,
      f, g;
    f = 0;
    for (g = d.length; f < g; ++f) {
      var h = d[f],
        m = h.Wa(a);
      c.push(m);
      m !== h && (e = !0)
    }
    if (e) return a = new Jl(null), Ml(a), a.a = c, Kl(a), a.s(), this.f[b] = a;
    this.i = a;
    return this
  };
  l.A = ba("GeometryCollection");
  l.V = function() {
    return 0 == this.a.length
  };
  l.pe = function(a) {
    a = Ll(a);
    Ml(this);
    this.a = a;
    Kl(this);
    this.s()
  };
  l.transform = function(a) {
    var b = this.a,
      c, d;
    c = 0;
    for (d = b.length; c < d; ++c) b[c].transform(a);
    this.s()
  };
  l.w = function() {
    Ml(this);
    Jl.B.w.call(this)
  };

  function Nl(a, b, c, d, e) {
    var f = NaN,
      g = NaN,
      h = (c - b) / d;
    if (0 !== h)
      if (1 == h) f = a[b], g = a[b + 1];
      else if (2 == h) f = 0.5 * a[b] + 0.5 * a[b + d], g = 0.5 * a[b + 1] + 0.5 * a[b + d + 1];
    else {
      var g = a[b],
        h = a[b + 1],
        m = 0,
        f = [0],
        n;
      for (n = b + d; n < c; n += d) {
        var p = a[n],
          q = a[n + 1],
          m = m + Math.sqrt((p - g) * (p - g) + (q - h) * (q - h));
        f.push(m);
        g = p;
        h = q
      }
      c = 0.5 * m;
      for (var r, g = Wa, h = 0, m = f.length; h < m;) n = h + m >> 1, p = g(c, f[n]), 0 < p ? h = n + 1 : (m = n, r = !p);
      r = r ? h : ~h;
      0 > r ? (c = (c - f[-r - 2]) / (f[-r - 1] - f[-r - 2]), b += (-r - 2) * d, f = a[b] + c * (a[b + d] - a[b]), g = a[b + 1] + c * (a[b + d + 1] - a[b + 1])) : (f = a[b + r * d], g = a[b + r * d + 1])
    }
    return null !=
      e ? (e.push(f, g), e) : [f, g]
  }

  function Ol(a, b, c, d, e, f) {
    if (c == b) return null;
    if (e < a[b + d - 1]) return f ? (c = a.slice(b, b + d), c[d - 1] = e, c) : null;
    if (a[c - 1] < e) return f ? (c = a.slice(c - d, c), c[d - 1] = e, c) : null;
    if (e == a[b + d - 1]) return a.slice(b, b + d);
    b /= d;
    for (c /= d; b < c;) f = b + c >> 1, e < a[(f + 1) * d - 1] ? c = f : b = f + 1;
    c = a[b * d - 1];
    if (e == c) return a.slice((b - 1) * d, (b - 1) * d + d);
    f = (e - c) / (a[(b + 1) * d - 1] - c);
    c = [];
    var g;
    for (g = 0; g < d - 1; ++g) c.push(a[(b - 1) * d + g] + f * (a[b * d + g] - a[(b - 1) * d + g]));
    c.push(e);
    return c
  }

  function Pl(a, b, c, d, e, f) {
    var g = 0;
    if (f) return Ol(a, g, b[b.length - 1], c, d, e);
    if (d < a[c - 1]) return e ? (a = a.slice(0, c), a[c - 1] = d, a) : null;
    if (a[a.length - 1] < d) return e ? (a = a.slice(a.length - c), a[c - 1] = d, a) : null;
    e = 0;
    for (f = b.length; e < f; ++e) {
      var h = b[e];
      if (g != h) {
        if (d < a[g + c - 1]) break;
        else if (d <= a[h - 1]) return Ol(a, g, h, c, d, !1);
        g = h
      }
    }
    return null
  };

  function Ql(a, b) {
    ef.call(this);
    this.d = null;
    this.k = this.l = this.g = -1;
    this.I(a, b)
  }
  E(Ql, ef);
  l = Ql.prototype;
  l.Oe = function(a) {
    null === this.h ? this.h = a.slice() : bf(this.h, a);
    this.s()
  };
  l.H = function() {
    var a = new Ql(null);
    Rl(a, this.b, this.h.slice());
    return a
  };
  l.ca = function(a, b, c, d) {
    if (d < Ke(this.p(), a, b)) return d;
    this.k != this.c && (this.l = Math.sqrt(of(this.h, 0, this.h.length, this.a, 0)), this.k = this.c);
    return qf(this.h, 0, this.h.length, this.a, this.l, !1, a, b, c, d)
  };
  l.Mg = function(a, b) {
    return "XYM" != this.b && "XYZM" != this.b ? null : Ol(this.h, 0, this.h.length, this.a, a, u(b) ? b : !1)
  };
  l.v = function() {
    return vf(this.h, 0, this.h.length, this.a)
  };
  l.Ng = function() {
    var a = this.h,
      b = this.a,
      c = a[0],
      d = a[1],
      e = 0,
      f;
    for (f = 0 + b; f < this.h.length; f += b) var g = a[f],
      h = a[f + 1],
      e = e + Math.sqrt((g - c) * (g - c) + (h - d) * (h - d)),
      c = g,
      d = h;
    return e
  };

  function Zk(a) {
    a.g != a.c && (a.d = Nl(a.h, 0, a.h.length, a.a, a.d), a.g = a.c);
    return a.d
  }
  l.kb = function(a) {
    var b = [];
    b.length = xf(this.h, 0, this.h.length, this.a, a, b, 0);
    a = new Ql(null);
    Rl(a, "XY", b);
    return a
  };
  l.A = ba("LineString");
  l.I = function(a, b) {
    null === a ? Rl(this, "XY", null) : (hf(this, b, a, 1), null === this.h && (this.h = []), this.h.length = tf(this.h, 0, a, this.a), this.s())
  };

  function Rl(a, b, c) {
    gf(a, b, c);
    a.s()
  };

  function Sl(a, b) {
    ef.call(this);
    this.d = [];
    this.g = this.k = -1;
    this.I(a, b)
  }
  E(Sl, ef);
  l = Sl.prototype;
  l.Pe = function(a) {
    null === this.h ? this.h = a.h.slice() : bf(this.h, a.h.slice());
    this.d.push(this.h.length);
    this.s()
  };
  l.H = function() {
    var a = new Sl(null);
    Tl(a, this.b, this.h.slice(), this.d.slice());
    return a
  };
  l.ca = function(a, b, c, d) {
    if (d < Ke(this.p(), a, b)) return d;
    this.g != this.c && (this.k = Math.sqrt(pf(this.h, 0, this.d, this.a, 0)), this.g = this.c);
    return rf(this.h, 0, this.d, this.a, this.k, !1, a, b, c, d)
  };
  l.Pg = function(a, b, c) {
    return "XYM" != this.b && "XYZM" != this.b || 0 === this.h.length ? null : Pl(this.h, this.d, this.a, a, u(b) ? b : !1, u(c) ? c : !1)
  };
  l.v = function() {
    return wf(this.h, 0, this.d, this.a)
  };
  l.rf = function(a) {
    if (0 > a || this.d.length <= a) return null;
    var b = new Ql(null);
    Rl(b, this.b, this.h.slice(0 === a ? 0 : this.d[a - 1], this.d[a]));
    return b
  };
  l.Pc = function() {
    var a = this.h,
      b = this.d,
      c = this.b,
      d = [],
      e = 0,
      f, g;
    f = 0;
    for (g = b.length; f < g; ++f) {
      var h = b[f],
        m = new Ql(null);
      Rl(m, c, a.slice(e, h));
      d.push(m);
      e = h
    }
    return d
  };

  function $k(a) {
    var b = [],
      c = a.h,
      d = 0,
      e = a.d;
    a = a.a;
    var f, g;
    f = 0;
    for (g = e.length; f < g; ++f) {
      var h = e[f],
        d = Nl(c, d, h, a);
      bf(b, d);
      d = h
    }
    return b
  }
  l.kb = function(a) {
    var b = [],
      c = [],
      d = this.h,
      e = this.d,
      f = this.a,
      g = 0,
      h = 0,
      m, n;
    m = 0;
    for (n = e.length; m < n; ++m) {
      var p = e[m],
        h = xf(d, g, p, f, a, b, h);
      c.push(h);
      g = p
    }
    b.length = h;
    a = new Sl(null);
    Tl(a, "XY", b, c);
    return a
  };
  l.A = ba("MultiLineString");
  l.I = function(a, b) {
    if (null === a) Tl(this, "XY", null, this.d);
    else {
      hf(this, b, a, 2);
      null === this.h && (this.h = []);
      var c = uf(this.h, 0, a, this.a, this.d);
      this.h.length = 0 === c.length ? 0 : c[c.length - 1];
      this.s()
    }
  };

  function Tl(a, b, c, d) {
    gf(a, b, c);
    a.d = d;
    a.s()
  }

  function Ul(a, b) {
    var c = "XY",
      d = [],
      e = [],
      f, g;
    f = 0;
    for (g = b.length; f < g; ++f) {
      var h = b[f];
      0 === f && (c = h.b);
      bf(d, h.h);
      e.push(d.length)
    }
    Tl(a, c, d, e)
  };

  function Vl(a, b) {
    ef.call(this);
    this.I(a, b)
  }
  E(Vl, ef);
  l = Vl.prototype;
  l.Re = function(a) {
    null === this.h ? this.h = a.h.slice() : bf(this.h, a.h);
    this.s()
  };
  l.H = function() {
    var a = new Vl(null),
      b = this.h.slice();
    gf(a, this.b, b);
    a.s();
    return a
  };
  l.ca = function(a, b, c, d) {
    if (d < Ke(this.p(), a, b)) return d;
    var e = this.h,
      f = this.a,
      g, h, m;
    g = 0;
    for (h = e.length; g < h; g += f)
      if (m = mf(a, b, e[g], e[g + 1]), m < d) {
        d = m;
        for (m = 0; m < f; ++m) c[m] = e[g + m];
        c.length = f
      }
    return d
  };
  l.v = function() {
    return vf(this.h, 0, this.h.length, this.a)
  };
  l.wf = function(a) {
    var b = null === this.h ? 0 : this.h.length / this.a;
    if (0 > a || b <= a) return null;
    b = new Bf(null);
    Cf(b, this.b, this.h.slice(a * this.a, (a + 1) * this.a));
    return b
  };
  l.Jd = function() {
    var a = this.h,
      b = this.b,
      c = this.a,
      d = [],
      e, f;
    e = 0;
    for (f = a.length; e < f; e += c) {
      var g = new Bf(null);
      Cf(g, b, a.slice(e, e + c));
      d.push(g)
    }
    return d
  };
  l.A = ba("MultiPoint");
  l.I = function(a, b) {
    null === a ? gf(this, "XY", null) : (hf(this, b, a, 1), null === this.h && (this.h = []), this.h.length = tf(this.h, 0, a, this.a));
    this.s()
  };

  function Wl(a, b) {
    ef.call(this);
    this.d = [];
    this.k = -1;
    this.l = null;
    this.r = this.n = this.o = -1;
    this.g = null;
    this.I(a, b)
  }
  E(Wl, ef);
  l = Wl.prototype;
  l.Se = function(a) {
    if (null === this.h) this.h = a.h.slice(), a = a.d.slice(), this.d.push();
    else {
      var b = this.h.length;
      bf(this.h, a.h);
      a = a.d.slice();
      var c, d;
      c = 0;
      for (d = a.length; c < d; ++c) a[c] += b
    }
    this.d.push(a);
    this.s()
  };
  l.H = function() {
    var a = new Wl(null);
    Xl(a, this.b, this.h.slice(), this.d.slice());
    return a
  };
  l.ca = function(a, b, c, d) {
    if (d < Ke(this.p(), a, b)) return d;
    if (this.n != this.c) {
      var e = this.d,
        f = 0,
        g = 0,
        h, m;
      h = 0;
      for (m = e.length; h < m; ++h) var n = e[h],
        g = pf(this.h, f, n, this.a, g),
        f = n[n.length - 1];
      this.o = Math.sqrt(g);
      this.n = this.c
    }
    e = yl(this);
    f = this.d;
    g = this.a;
    h = this.o;
    m = 0;
    var n = u(void 0) ? void 0 : [NaN, NaN],
      p, q;
    p = 0;
    for (q = f.length; p < q; ++p) {
      var r = f[p];
      d = rf(e, m, r, g, h, !0, a, b, c, d, n);
      m = r[r.length - 1]
    }
    return d
  };
  l.Ra = function(a, b) {
    var c;
    a: {
      c = yl(this);
      var d = this.d,
        e = 0;
      if (0 !== d.length) {
        var f, g;
        f = 0;
        for (g = d.length; f < g; ++f) {
          var h = d[f];
          if (Ef(c, e, h, this.a, a, b)) {
            c = !0;
            break a
          }
          e = h[h.length - 1]
        }
      }
      c = !1
    }
    return c
  };
  l.Qg = function() {
    var a = yl(this),
      b = this.d,
      c = 0,
      d = 0,
      e, f;
    e = 0;
    for (f = b.length; e < f; ++e) var g = b[e],
      d = d + lf(a, c, g, this.a),
      c = g[g.length - 1];
    return d
  };
  l.v = function() {
    var a = this.h,
      b = this.d,
      c = this.a,
      d = 0,
      e = u(void 0) ? void 0 : [],
      f = 0,
      g, h;
    g = 0;
    for (h = b.length; g < h; ++g) {
      var m = b[g];
      e[f++] = wf(a, d, m, c, e[f]);
      d = m[m.length - 1]
    }
    e.length = f;
    return e
  };

  function al(a) {
    if (a.k != a.c) {
      var b = a.h,
        c = a.d,
        d = a.a,
        e = 0,
        f = [],
        g, h, m = Fe();
      g = 0;
      for (h = c.length; g < h; ++g) {
        var n = c[g],
          m = b,
          p = n[0],
          q = d,
          r = Me(void 0),
          m = Pe(r, m, e, p, q);
        f.push((m[0] + m[2]) / 2, (m[1] + m[3]) / 2);
        e = n[n.length - 1]
      }
      b = yl(a);
      c = a.d;
      d = a.a;
      g = 0;
      h = [];
      n = 0;
      for (m = c.length; n < m; ++n) e = c[n], h = Ff(b, g, e, d, f, 2 * n, h), g = e[e.length - 1];
      a.l = h;
      a.k = a.c
    }
    return a.l
  }
  l.mf = function() {
    var a = new Vl(null),
      b = al(this).slice();
    gf(a, "XY", b);
    a.s();
    return a
  };

  function yl(a) {
    if (a.r != a.c) {
      var b = a.h,
        c;
      a: {
        c = a.d;
        var d, e;
        d = 0;
        for (e = c.length; d < e; ++d)
          if (!Hf(b, c[d], a.a)) {
            c = !1;
            break a
          }
        c = !0
      }
      if (c) a.g = b;
      else {
        a.g = b.slice();
        c = b = a.g;
        d = a.d;
        e = a.a;
        var f = 0,
          g, h;
        g = 0;
        for (h = d.length; g < h; ++g) f = If(c, f, d[g], e);
        b.length = f
      }
      a.r = a.c
    }
    return a.g
  }
  l.kb = function(a) {
    var b = [],
      c = [],
      d = this.h,
      e = this.d,
      f = this.a;
    a = Math.sqrt(a);
    var g = 0,
      h = 0,
      m, n;
    m = 0;
    for (n = e.length; m < n; ++m) {
      var p = e[m],
        q = [],
        h = yf(d, g, p, f, a, b, h, q);
      c.push(q);
      g = p[p.length - 1]
    }
    b.length = h;
    d = new Wl(null);
    Xl(d, "XY", b, c);
    return d
  };
  l.xf = function(a) {
    if (0 > a || this.d.length <= a) return null;
    var b;
    0 === a ? b = 0 : (b = this.d[a - 1], b = b[b.length - 1]);
    a = this.d[a].slice();
    var c = a[a.length - 1];
    if (0 !== b) {
      var d, e;
      d = 0;
      for (e = a.length; d < e; ++d) a[d] -= b
    }
    d = new Jf(null);
    Kf(d, this.b, this.h.slice(b, c), a);
    return d
  };
  l.Kd = function() {
    var a = this.b,
      b = this.h,
      c = this.d,
      d = [],
      e = 0,
      f, g, h, m;
    f = 0;
    for (g = c.length; f < g; ++f) {
      var n = c[f].slice(),
        p = n[n.length - 1];
      if (0 !== e)
        for (h = 0, m = n.length; h < m; ++h) n[h] -= e;
      h = new Jf(null);
      Kf(h, a, b.slice(e, p), n);
      d.push(h);
      e = p
    }
    return d
  };
  l.A = ba("MultiPolygon");
  l.I = function(a, b) {
    if (null === a) Xl(this, "XY", null, this.d);
    else {
      hf(this, b, a, 3);
      null === this.h && (this.h = []);
      var c = this.h,
        d = this.a,
        e = this.d,
        f = 0,
        e = u(e) ? e : [],
        g = 0,
        h, m;
      h = 0;
      for (m = a.length; h < m; ++h) f = uf(c, f, a[h], d, e[g]), e[g++] = f, f = f[f.length - 1];
      e.length = g;
      c = e[e.length - 1];
      this.h.length = 0 === c.length ? 0 : c[c.length - 1];
      this.s()
    }
  };

  function Xl(a, b, c, d) {
    gf(a, b, c);
    a.d = d;
    a.s()
  }

  function Yl(a, b) {
    var c = "XY",
      d = [],
      e = [],
      f, g, h;
    f = 0;
    for (g = b.length; f < g; ++f) {
      var m = b[f];
      0 === f && (c = m.b);
      var n = d.length;
      h = m.d;
      var p, q;
      p = 0;
      for (q = h.length; p < q; ++p) h[p] += n;
      bf(d, m.h);
      e.push(h)
    }
    Xl(a, c, d, e)
  };

  function Zl(a, b, c, d, e, f, g) {
    var h = !1,
      m, n;
    m = c.e;
    null === m ? $l(a, b, c, d, e) : (n = m.de(), 2 == n || 3 == n ? (m.ve(f, g), 2 == n && $l(a, b, c, d, e)) : (0 == n && m.ee(), m.Qd(f, g), h = !0));
    return h
  }

  function $l(a, b, c, d, e) {
    b = b.K();
    null !== b && (d = b.Wa(d), (0, am[d.A()])(a, d, c, e))
  }
  var am = {
    Point: function(a, b, c, d) {
      var e = c.e;
      if (null !== e) {
        var f = Fl(a, c.a, "Image");
        f.vb(e);
        f.Kb(b, d)
      }
      e = c.c;
      null !== e && (a = Fl(a, c.a, "Text"), a.aa(e), a.Ea(b.v(), 0, 2, 2, b, d))
    },
    LineString: function(a, b, c, d) {
      var e = c.b;
      if (null !== e) {
        var f = Fl(a, c.a, "LineString");
        f.ka(null, e);
        f.Hb(b, d)
      }
      e = c.c;
      null !== e && (a = Fl(a, c.a, "Text"), a.aa(e), a.Ea(Zk(b), 0, 2, 2, b, d))
    },
    Polygon: function(a, b, c, d) {
      var e = c.d,
        f = c.b;
      if (null !== e || null !== f) {
        var g = Fl(a, c.a, "Polygon");
        g.ka(e, f);
        g.hb(b, d)
      }
      e = c.c;
      null !== e && (a = Fl(a, c.a, "Text"), a.aa(e), a.Ea(Mf(b),
        0, 2, 2, b, d))
    },
    MultiPoint: function(a, b, c, d) {
      var e = c.e;
      if (null !== e) {
        var f = Fl(a, c.a, "Image");
        f.vb(e);
        f.Jb(b, d)
      }
      e = c.c;
      null !== e && (a = Fl(a, c.a, "Text"), a.aa(e), c = b.h, a.Ea(c, 0, c.length, b.a, b, d))
    },
    MultiLineString: function(a, b, c, d) {
      var e = c.b;
      if (null !== e) {
        var f = Fl(a, c.a, "LineString");
        f.ka(null, e);
        f.Ib(b, d)
      }
      e = c.c;
      null !== e && (a = Fl(a, c.a, "Text"), a.aa(e), c = $k(b), a.Ea(c, 0, c.length, 2, b, d))
    },
    MultiPolygon: function(a, b, c, d) {
      var e = c.d,
        f = c.b;
      if (null !== f || null !== e) {
        var g = Fl(a, c.a, "Polygon");
        g.ka(e, f);
        g.bc(b, d)
      }
      e = c.c;
      null !==
        e && (a = Fl(a, c.a, "Text"), a.aa(e), c = al(b), a.Ea(c, 0, c.length, 2, b, d))
    },
    GeometryCollection: function(a, b, c, d) {
      b = b.a;
      var e, f;
      e = 0;
      for (f = b.length; e < f; ++e)(0, am[b[e].A()])(a, b[e], c, d)
    },
    Circle: function(a, b, c, d) {
      var e = c.d,
        f = c.b;
      if (null !== e || null !== f) {
        var g = Fl(a, c.a, "Polygon");
        g.ka(e, f);
        g.Gb(b, d)
      }
      e = c.c;
      null !== e && (a = Fl(a, c.a, "Text"), a.aa(e), a.Ea(b.Yc(), 0, 2, 2, b, d))
    }
  };

  function bm(a, b, c, d) {
    this.extent = a;
    this.height = b;
    this.a = c;
    this.value = d
  }

  function cm(a, b) {
    return a.extent[0] - b.extent[0]
  }

  function dm(a, b) {
    return a.extent[1] - b.extent[1]
  }

  function em(a, b, c, d) {
    a = a.a;
    for (d = Me(d); b < c; ++b) Oe(d, a[b].extent);
    return d
  }
  bm.prototype.remove = function(a, b, c) {
    var d = this.a,
      e = d.length,
      f, g;
    if (1 == this.height)
      for (g = 0; g < e; ++g) {
        if (f = d[g], f.value === b) return Ia.splice.call(d, g, 1), !0
      } else
        for (g = 0; g < e; ++g)
          if (f = d[g], Le(f.extent, a)) {
            c.push(f);
            if (f.remove(a, b, c)) return !0;
            c.pop()
          }
    return !1
  };

  function fm(a) {
    var b = Me(a.extent);
    a = a.a;
    var c, d;
    c = 0;
    for (d = a.length; c < d; ++c) Oe(b, a[c].extent)
  }

  function gm(a) {
    this.b = Math.max(4, u(a) ? a : 9);
    this.d = Math.max(2, Math.ceil(0.4 * this.b));
    this.a = new bm(Fe(), 1, [], null);
    this.c = {}
  }

  function hm(a, b, c) {
    var d = b.a;
    a = a.d;
    var e = d.length;
    Va(d, c);
    c = em(b, 0, a);
    var f = em(b, e - a, e),
      g = Ve(c) + Te(c) + (Ve(f) + Te(f));
    for (b = a; b < e - a; ++b) Oe(c, d[b].extent), g += Ve(c) + Te(c);
    for (b = e - a - 1; b >= a; --b) Oe(f, d[b].extent), g += Ve(f) + Te(f);
    return g
  }
  l = gm.prototype;
  l.clear = function() {
    var a = this.a;
    a.extent = Me(this.a.extent);
    a.height = 1;
    a.a.length = 0;
    a.value = null;
    $b(this.c)
  };
  l.forEach = function(a, b) {
    return im(this.a, a, b)
  };

  function im(a, b, c) {
    for (var d = [a], e, f, g; 0 < d.length;)
      if (a = d.pop(), e = a.a, 1 == a.height)
        for (a = 0, f = e.length; a < f; ++a) {
          if (g = b.call(c, e[a].value)) return g
        } else d.push.apply(d, e)
  }

  function jm(a, b, c) {
    km(a, b, c, void 0)
  }

  function km(a, b, c, d) {
    a = [a.a];
    for (var e; 0 < a.length;)
      if (e = a.pop(), We(b, e.extent))
        if (null === e.a) {
          if (e = c.call(d, e.value)) return e
        } else if (Le(b, e.extent)) {
      if (e = im(e, c, d)) return e
    } else a.push.apply(a, e.a)
  }

  function lm(a) {
    var b = [];
    a.forEach(function(a) {
      b.push(a)
    });
    return b
  }

  function mm(a, b) {
    var c = [];
    km(a, b, function(a) {
      c.push(a)
    }, void 0);
    return c
  }
  l.p = function(a) {
    return Ye(this.a.extent, a)
  };

  function nm(a, b, c) {
    var d = v(c).toString();
    om(a, b, c, a.a.height - 1);
    a.c[d] = Je(b)
  }

  function om(a, b, c, d) {
    for (var e = [a.a], f = a.a; null !== f.a && e.length - 1 != d;) {
      var g = Infinity,
        h = Infinity,
        f = f.a,
        m = null,
        n, p;
      n = 0;
      for (p = f.length; n < p; ++n) {
        var q = f[n],
          r = Ve(q.extent) * Te(q.extent),
          s = q.extent,
          z = b,
          x = Math.min(s[0], z[0]),
          w = Math.min(s[1], z[1]),
          B = Math.max(s[2], z[2]),
          s = Math.max(s[3], z[3]),
          x = (B - x) * (s - w) - r;
        x < h ? (h = x, g = Math.min(r, g), m = q) : x == h && r < g && (g = r, m = q)
      }
      f = m;
      e.push(f)
    }
    d = f;
    d.a.push(new bm(b, 0, null, c));
    Oe(d.extent, b);
    for (c = e.length - 1; 0 <= c; --c)
      if (e[c].a.length > a.b) {
        g = a;
        h = e;
        f = c;
        d = h[f];
        p = g;
        m = d;
        n = hm(p, m, cm);
        p = hm(p, m, dm);
        n < p && Va(m.a, cm);
        m = d;
        n = g.d;
        p = m.a.length;
        r = q = Infinity;
        x = Fe();
        w = Fe();
        B = 0;
        s = void 0;
        for (s = n; s <= p - n; ++s) {
          var x = em(m, 0, s, x),
            w = em(m, s, p, w),
            A = x,
            D = w,
            z = Math.max(A[0], D[0]),
            H = Math.max(A[1], D[1]),
            P = Math.min(A[2], D[2]),
            A = Math.min(A[3], D[3]),
            z = Math.max(0, P - z) * Math.max(0, A - H),
            H = Ve(x) * Te(x) + Ve(w) * Te(w);
          z < q ? (q = z, r = Math.min(H, r), B = s) : z == q && H < r && (r = H, B = s)
        }
        m = d.a.splice(B);
        m = new bm(Fe(), d.height, m, null);
        fm(d);
        fm(m);
        f ? h[f - 1].a.push(m) : (h = m, f = d.height + 1, m = Oe(d.extent.slice(), h.extent), g.a = new bm(m, f, [d, h], null))
      } else break;
    for (; 0 <= c; --c) Oe(e[c].extent, b)
  }
  l.V = function() {
    return 0 === this.a.a.length
  };
  l.remove = function(a) {
    var b = v(a).toString(),
      c = this.c[b];
    delete this.c[b];
    return pm(this, c, a)
  };

  function pm(a, b, c) {
    var d = a.a,
      e = [d];
    if (b = d.remove(b, c, e))
      for (c = e.length - 1; 0 <= c; --c) d = e[c], 0 === d.a.length ? 0 < c ? Pa(e[c - 1].a, d) : a.clear() : fm(d);
    return b
  }
  l.update = function(a, b) {
    var c = v(b).toString(),
      d = this.c[c];
    Ne(d, a) || (pm(this, d, b), om(this, a, b, this.a.height - 1), this.c[c] = Je(a, d))
  };

  function qm(a) {
    a = u(a) ? a : {};
    Xj.call(this, {
      attributions: a.attributions,
      extent: a.extent,
      logo: a.logo,
      projection: a.projection,
      state: a.state
    });
    this.a = new gm;
    this.b = {};
    this.e = {};
    u(a.features) && rm(this, a.features)
  }
  E(qm, Xj);
  l = qm.prototype;
  l.ae = function(a) {
    sm(this, a);
    this.s()
  };

  function sm(a, b) {
    var c = v(b).toString();
    a.e[c] = [K(b, "change", a.be, !1, a), K(b, "propertychange", a.be, !1, a)];
    c = b.K();
    null === c ? a.b[v(b).toString()] = b : (c = c.p(), nm(a.a, c, b));
    M(a, new tm("addfeature", b))
  }
  l.Ke = function(a) {
    rm(this, a);
    this.s()
  };

  function rm(a, b) {
    var c, d;
    c = 0;
    for (d = b.length; c < d; ++c) sm(a, b[c])
  }
  l.clear = function() {
    this.a.forEach(this.gd, this);
    this.a.clear();
    Tb(this.b, this.gd, this);
    $b(this.b);
    this.s()
  };
  l.Ze = function(a, b) {
    return this.a.forEach(a, b)
  };

  function um(a, b, c) {
    a.dc([b[0], b[1], b[0], b[1]], function(a) {
      if (a.K().Ra(b[0], b[1])) return c.call(void 0, a)
    })
  }
  l.dc = function(a, b, c) {
    return km(this.a, a, b, c)
  };
  l.hh = function() {
    var a = lm(this.a);
    Zb(this.b) || Sa(a, Xb(this.b));
    return a
  };
  l.df = function(a) {
    var b = [];
    um(this, a, function(a) {
      b.push(a)
    });
    return b
  };
  l.bf = function(a) {
    var b = a[0],
      c = a[1],
      d = null,
      e = [NaN, NaN],
      f = Infinity,
      g = [-Infinity, -Infinity, Infinity, Infinity];
    km(this.a, g, function(a) {
      var m = a.K(),
        n = f;
      f = m.ca(b, c, e, f);
      f < n && (d = a, a = Math.sqrt(f), g[0] = b - a, g[1] = c - a, g[2] = b + a, g[3] = c + a)
    }, void 0);
    return d
  };
  l.p = function() {
    return this.a.p()
  };
  l.be = function(a) {
    a = a.target;
    var b = v(a).toString(),
      c = a.K();
    null === c ? b in this.b || (this.a.remove(a), this.b[b] = a) : (c = c.p(), b in this.b ? (delete this.b[b], nm(this.a, c, a)) : this.a.update(c, a));
    this.s()
  };
  l.V = function() {
    return this.a.V() && Zb(this.b)
  };
  l.ih = function(a) {
    var b = v(a).toString();
    b in this.b ? delete this.b[b] : this.a.remove(a);
    this.gd(a);
    this.s()
  };
  l.gd = function(a) {
    var b = v(a).toString();
    Ka(this.e[b], L);
    delete this.e[b];
    M(this, new tm("removefeature", a))
  };

  function tm(a, b) {
    Hc.call(this, a);
    this.feature = b
  }
  E(tm, Hc);

  function vm(a, b) {
    cl.call(this, a, b);
    this.Db = !1;
    this.g = -1;
    this.i = NaN;
    this.o = Fe();
    this.c = null;
    this.e = pc("CANVAS").getContext("2d")
  }
  E(vm, cl);
  vm.prototype.k = function(a, b, c) {
    var d = el(this, a);
    dl(this, "precompose", c, a, d);
    var e = this.c;
    if (null !== e && !e.V()) {
      var f;
      kd(this.a.S, "render") ? (this.e.canvas.width = c.canvas.width, this.e.canvas.height = c.canvas.height, f = this.e) : f = c;
      f.globalAlpha = b.opacity;
      Bl(e, f, a.extent, a.pixelRatio, d, a.view2DState.rotation, a.skippedFeatureUids_);
      f != c && (dl(this, "render", f, a, d), c.drawImage(f.canvas, 0, 0))
    }
    dl(this, "postcompose", c, a, d)
  };
  vm.prototype.f = function(a, b, c, d) {
    if (null !== this.c) {
      var e = this.a;
      return Dl(this.c, b.extent, b.view2DState.resolution, b.view2DState.rotation, a, b.skippedFeatureUids_, function(a, b) {
        return c.call(d, b, e)
      })
    }
  };
  vm.prototype.Vg = function() {
    vk(this)
  };
  vm.prototype.b = function(a) {
    var b = this.a,
      c = b.a;
    xk(a.attributions, c.d);
    yk(a, c);
    if (this.Db || !a.viewHints[0] && !a.viewHints[1]) {
      var d = a.extent,
        e = a.view2DState.resolution,
        f = a.pixelRatio;
      a = b.c;
      if (this.Db || this.i != e || this.g != a || !Le(this.o, d)) {
        var g = this.o,
          h = Ve(d) / 4,
          m = Te(d) / 4;
        g[0] = d[0] - h;
        g[1] = d[1] - m;
        g[2] = d[2] + h;
        g[3] = d[3] + m;
        Gc(this.c);
        this.c = null;
        this.Db = !1;
        var n = b.f;
        u(n) || (n = se);
        var p = new Al(e / (2 * f), g, e);
        c.dc(g, function(a) {
          var b = n(a, e);
          if (null != b) {
            var c = e * e / (4 * f * f),
              d, g, h = !1;
            d = 0;
            for (g = b.length; d < g; ++d) h = Zl(p,
              a, b[d], c, a, this.Vg, this) || h;
            a = h
          } else a = !1;
          this.Db = this.Db || a
        }, this);
        El(p);
        this.i = e;
        this.g = a;
        this.c = p
      }
    }
  };

  function wm(a, b) {
    Jk.call(this, 0, b);
    this.a = pc("CANVAS");
    this.a.style.width = "100%";
    this.a.style.height = "100%";
    this.a.className = "ol-unselectable";
    tc(a, this.a, 0);
    this.c = !0;
    this.i = this.a.getContext("2d");
    this.g = Sd()
  }
  E(wm, Jk);
  wm.prototype.Zb = function(a) {
    return a instanceof Ok ? new hl(this, a) : a instanceof Pk ? new il(this, a) : a instanceof Qk ? new vm(this, a) : null
  };

  function xm(a, b, c) {
    var d = a.f,
      e = a.i;
    if (kd(d.S, b)) {
      var f = c.view2DState,
        g = c.pixelRatio;
      Gk(a.g, a.a.width / 2, a.a.height / 2, g / f.resolution, -g / f.resolution, -f.rotation, -f.center[0], -f.center[1]);
      a = new Rk(e, g, c.extent, a.g, f.rotation);
      M(d, new ue(b, d, a, c, e, null));
      bl(a)
    }
  }
  wm.prototype.sc = function(a) {
    if (null === a) this.c && (Qh(this.a, !1), this.c = !1);
    else {
      var b = this.i,
        c = a.size[0] * a.pixelRatio,
        d = a.size[1] * a.pixelRatio;
      this.a.width != c || this.a.height != d ? (this.a.width = c, this.a.height = d) : b.clearRect(0, 0, this.a.width, this.a.height);
      Kk(a);
      xm(this, "precompose", a);
      var c = a.layerStates,
        d = a.layersArray,
        e = a.view2DState.resolution,
        f, g, h, m;
      f = 0;
      for (g = d.length; f < g; ++f) h = d[f], m = Lk(this, h), h = c[v(h)], !h.visible || (1 != h.jd || e >= h.maxResolution || e < h.minResolution) || (m.b(a, h), m.k(a, h, b));
      xm(this,
        "postcompose", a);
      this.c || (Qh(this.a, !0), this.c = !0);
      Nk(this, a);
      Mk(a)
    }
  };
  var ym = function() {
      var a;
      return function() {
        if (!u(a))
          if (t.getComputedStyle) {
            var b = pc("P"),
              c, d = {
                webkitTransform: "-webkit-transform",
                OTransform: "-o-transform",
                msTransform: "-ms-transform",
                MozTransform: "-moz-transform",
                transform: "transform"
              };
            document.body.appendChild(b);
            for (var e in d) e in b.style && (b.style[e] = "translate(1px,1px)", c = t.getComputedStyle(b).getPropertyValue(d[e]));
            uc(b);
            a = c && "none" !== c
          } else a = !1;
        return a
      }
    }(),
    zm = function() {
      var a;
      return function() {
        if (!u(a))
          if (t.getComputedStyle) {
            var b = pc("P"),
              c, d = {
                webkitTransform: "-webkit-transform",
                OTransform: "-o-transform",
                msTransform: "-ms-transform",
                MozTransform: "-moz-transform",
                transform: "transform"
              };
            document.body.appendChild(b);
            for (var e in d) e in b.style && (b.style[e] = "translate3d(1px,1px,1px)", c = t.getComputedStyle(b).getPropertyValue(d[e]));
            uc(b);
            a = c && "none" !== c
          } else a = !1;
        return a
      }
    }();

  function Am(a, b) {
    var c = a.style;
    c.WebkitTransform = b;
    c.MozTransform = b;
    c.a = b;
    c.msTransform = b;
    c.transform = b;
    F && !Bc && (a.style.transformOrigin = "0 0")
  }

  function Bm(a, b) {
    var c;
    if (zm()) {
      if (u(6)) {
        var d = Array(16);
        for (c = 0; 16 > c; ++c) d[c] = b[c].toFixed(6);
        c = d.join(",")
      } else c = b.join(",");
      Am(a, "matrix3d(" + c + ")")
    } else if (ym()) {
      d = [b[0], b[1], b[4], b[5], b[12], b[13]];
      if (u(6)) {
        var e = Array(6);
        for (c = 0; 6 > c; ++c) e[c] = d[c].toFixed(6);
        c = e.join(",")
      } else c = d.join(",");
      Am(a, "matrix(" + c + ")")
    } else a.style.left = Math.round(b[12]) + "px", a.style.top = Math.round(b[13]) + "px"
  };

  function Cm(a, b, c) {
    uk.call(this, a, b);
    this.target = c
  }
  E(Cm, uk);

  function Dm(a, b) {
    var c = pc("DIV");
    c.style.position = "absolute";
    Cm.call(this, a, b, c);
    this.c = null;
    this.e = Ud()
  }
  E(Dm, Cm);
  Dm.prototype.f = function(a, b, c, d) {
    var e = this.a;
    return e.a.k(b.extent, b.view2DState.resolution, b.view2DState.rotation, a, function(a) {
      return c.call(d, a, e)
    })
  };
  Dm.prototype.b = function(a) {
    var b = a.view2DState,
      c = b.center,
      d = b.resolution,
      e = b.rotation,
      f = this.c,
      g = this.a.a,
      h = a.viewHints;
    h[0] || h[1] || (b = g.pb(a.extent, d, a.pixelRatio, b.projection), null !== b && (h = b.state, 0 == h ? (fd(b, "change", this.l, !1, this), kk(b)) : 2 == h && (f = b)));
    if (null !== f) {
      var h = f.p(),
        m = f.d,
        b = Sd();
      Gk(b, a.size[0] / 2, a.size[1] / 2, m / d, m / d, e, (h[0] - c[0]) / m, (c[1] - h[3]) / m);
      f != this.c && (c = f.e(this), c.style.maxWidth = "none", c.style.position = "absolute", rc(this.target), this.target.appendChild(c), this.c = f);
      Hk(b, this.e) ||
        (Bm(this.target, b), Vd(this.e, b));
      xk(a.attributions, f.i);
      yk(a, g)
    }
  };

  function Em(a, b) {
    var c = pc("DIV");
    c.style.position = "absolute";
    Cm.call(this, a, b, c);
    this.e = !0;
    this.g = 1;
    this.i = 0;
    this.c = {}
  }
  E(Em, Cm);
  Em.prototype.b = function(a, b) {
    if (b.visible) {
      var c = a.pixelRatio,
        d = a.view2DState,
        e = d.projection,
        f = this.a,
        g = f.a,
        h = tk(g, e),
        m = g.fc(),
        n = cf(h.a, d.resolution, 0),
        p = h.a[n],
        q = d.center,
        r;
      p == d.resolution ? (q = Bk(q, p, a.size), r = Se(q, p, d.rotation, a.size)) : r = a.extent;
      var p = pk(h, r, p),
        s = {};
      s[n] = {};
      var z = y(g.Kc, g, s, Ak(function(a) {
          return null !== a && 2 == a.state
        }, g, c, e)),
        x = f.f();
      u(x) || (x = !0);
      var w = Fe(),
        B = new cb(0, 0, 0, 0),
        A, D, H, P;
      for (H = p.a; H <= p.d; ++H)
        for (P = p.b; P <= p.c; ++P) A = g.lb(n, H, P, c, e), D = A.state, 2 == D ? s[n][A.a.toString()] = A :
          4 == D || 3 == D && !x || (D = h.ec(A.a, z, null, B, w), D || (A = h.gc(A.a, B, w), null === A || z(n + 1, A)));
      var J;
      if (this.i != g.c) {
        for (J in this.c) x = this.c[+J], uc(x.target);
        this.c = {};
        this.i = g.c
      }
      w = La(Yb(s), Number);
      Va(w);
      var z = {},
        U;
      H = 0;
      for (P = w.length; H < P; ++H) {
        J = w[H];
        J in this.c ? x = this.c[J] : (x = qk(h, q[0], q[1], h.a[J], !1, void 0), x = new Fm(h, x), z[J] = !0, this.c[J] = x);
        J = s[J];
        for (U in J) Gm(x, J[U], m);
        Hm(x)
      }
      m = La(Yb(this.c), Number);
      Va(m);
      H = Sd();
      U = 0;
      for (w = m.length; U < w; ++U)
        if (J = m[U], x = this.c[J], J in s)
          if (A = x.i, P = x.f, Gk(H, a.size[0] / 2, a.size[1] /
            2, A / d.resolution, A / d.resolution, d.rotation, (P[0] - q[0]) / A, (q[1] - P[1]) / A), Im(x, H), J in z) {
            for (J -= 1; 0 <= J; --J)
              if (J in this.c) {
                sc(x.target, this.c[J].target);
                break
              }
            0 > J && tc(this.target, x.target, 0)
          } else a.viewHints[0] || a.viewHints[1] || Jm(x, r, B);
      else uc(x.target), delete this.c[J];
      b.opacity != this.g && (Ph(this.target, b.opacity), this.g = b.opacity);
      b.visible && !this.e && (Qh(this.target, !0), this.e = !0);
      zk(a.usedTiles, g, n, p);
      Ck(a, g, h, c, e, r, n, f.d());
      wk(a, g);
      yk(a, g)
    } else this.e && (Qh(this.target, !1), this.e = !1)
  };

  function Fm(a, b) {
    this.target = pc("DIV");
    this.target.style.position = "absolute";
    this.target.style.width = "100%";
    this.target.style.height = "100%";
    this.e = a;
    this.b = b;
    this.f = Ue(nk(a, b));
    this.i = a.a[b.a];
    this.c = {};
    this.a = null;
    this.d = Ud()
  }

  function Gm(a, b, c) {
    var d = b.a,
      e = d.toString();
    if (!(e in a.c)) {
      var f = a.e.fa(d.a),
        g = b.b(a),
        h = g.style;
      h.maxWidth = "none";
      var m, n;
      0 < c ? (m = pc("DIV"), n = m.style, n.overflow = "hidden", n.width = f + "px", n.height = f + "px", h.position = "absolute", h.left = -c + "px", h.top = -c + "px", h.width = f + 2 * c + "px", h.height = f + 2 * c + "px", m.appendChild(g)) : (h.width = f + "px", h.height = f + "px", m = g, n = h);
      n.position = "absolute";
      n.left = (d.x - a.b.x) * f + "px";
      n.top = (a.b.y - d.y) * f + "px";
      null === a.a && (a.a = document.createDocumentFragment());
      a.a.appendChild(m);
      a.c[e] =
        b
    }
  }

  function Hm(a) {
    null !== a.a && (a.target.appendChild(a.a), a.a = null)
  }

  function Jm(a, b, c) {
    var d = ok(a.e, b, a.b.a, c);
    b = [];
    for (var e in a.c) c = a.c[e], d.contains(c.a) || b.push(c);
    var f, d = 0;
    for (f = b.length; d < f; ++d) c = b[d], e = c.a.toString(), uc(c.b(a)), delete a.c[e]
  }

  function Im(a, b) {
    Hk(b, a.d) || (Bm(a.target, b), Vd(a.d, b))
  };

  function Km(a, b) {
    Jk.call(this, 0, b);
    this.a = pc("DIV");
    this.a.className = "ol-unselectable";
    var c = this.a.style;
    c.position = "absolute";
    c.width = "100%";
    c.height = "100%";
    tc(a, this.a, 0);
    this.c = !0
  }
  E(Km, Jk);
  Km.prototype.Zb = function(a) {
    if (a instanceof Ok) a = new Dm(this, a);
    else if (a instanceof Pk) a = new Em(this, a);
    else return null;
    return a
  };
  Km.prototype.sc = function(a) {
    if (null === a) this.c && (Qh(this.a, !1), this.c = !1);
    else {
      var b;
      b = function(a, b) {
        tc(this.a, a, b)
      };
      var c = a.layerStates,
        d = a.layersArray,
        e, f, g, h;
      e = 0;
      for (f = d.length; e < f; ++e) g = d[e], h = Lk(this, g), b.call(this, h.target, e), g = a.layerStates[v(g)], 1 == g.jd && h.b(a, g);
      for (var m in this.b) m in c || (h = this.b[m], uc(h.target));
      this.c || (Qh(this.a, !0), this.c = !0);
      Kk(a);
      Nk(this, a);
      Mk(a)
    }
  };

  function Lm() {}
  l = Lm.prototype;
  l.ac = aa();
  l.Gb = aa();
  l.Jc = aa();
  l.Ed = aa();
  l.Kb = aa();
  l.Hb = aa();
  l.Ib = aa();
  l.Jb = aa();
  l.bc = aa();
  l.hb = aa();
  l.Ea = aa();
  l.ka = aa();
  l.vb = aa();
  l.aa = aa();

  function Mm() {
    this.i = Sd();
    this.c = void 0;
    this.a = Sd();
    this.d = void 0;
    this.b = Sd();
    this.f = void 0;
    this.e = Sd();
    this.j = void 0;
    this.g = Sd()
  }

  function Nm(a, b, c, d, e) {
    var f = !1;
    u(b) && b !== a.c && (f = a.a, Wd(f), f[12] = b, f[13] = b, f[14] = b, f[15] = 1, a.c = b, f = !0);
    if (u(c) && c !== a.d) {
      f = a.b;
      Wd(f);
      f[0] = c;
      f[5] = c;
      f[10] = c;
      f[15] = 1;
      var g = -0.5 * c + 0.5;
      f[12] = g;
      f[13] = g;
      f[14] = g;
      f[15] = 1;
      a.d = c;
      f = !0
    }
    u(d) && d !== a.f && (f = Math.cos(d), g = Math.sin(d), Td(a.e, 0.213 + 0.787 * f - 0.213 * g, 0.213 - 0.213 * f + 0.143 * g, 0.213 - 0.213 * f - 0.787 * g, 0, 0.715 - 0.715 * f - 0.715 * g, 0.715 + 0.285 * f + 0.14 * g, 0.715 - 0.715 * f + 0.715 * g, 0, 0.072 - 0.072 * f + 0.928 * g, 0.072 - 0.072 * f - 0.283 * g, 0.072 + 0.928 * f + 0.072 * g, 0, 0, 0, 0, 1), a.f = d, f = !0);
    u(e) &&
      e !== a.j && (Td(a.g, 0.213 + 0.787 * e, 0.213 - 0.213 * e, 0.213 - 0.213 * e, 0, 0.715 - 0.715 * e, 0.715 + 0.285 * e, 0.715 - 0.715 * e, 0, 0.072 - 0.072 * e, 0.072 - 0.072 * e, 0.072 + 0.928 * e, 0, 0, 0, 0, 1), a.j = e, f = !0);
    f && (f = a.i, Wd(f), u(c) && Xd(f, a.b, f), u(b) && Xd(f, a.a, f), u(e) && Xd(f, a.g, f), u(d) && Xd(f, a.e, f));
    return a.i
  };

  function Om(a) {
    this.a = a
  }

  function Pm(a) {
    this.a = a
  }
  E(Pm, Om);
  Pm.prototype.A = ba(35632);

  function Qm(a) {
    this.a = a
  }
  E(Qm, Om);
  Qm.prototype.A = ba(35633);

  function Rm() {
    this.a = "precision mediump float;varying vec2 a;uniform mat4 f;uniform float g;uniform sampler2D h;void main(void){vec4 texColor\x3dtexture2D(h,a);gl_FragColor.rgb\x3d(f*vec4(texColor.rgb,1.)).rgb;gl_FragColor.a\x3dtexColor.a*g;}"
  }
  E(Rm, Pm);
  ea(Rm);

  function Sm() {
    this.a = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position\x3de*vec4(b,0.,1.);a\x3d(d*vec4(c,0.,1.)).st;}"
  }
  E(Sm, Qm);
  ea(Sm);

  function Tm(a, b) {
    this.i = a.getUniformLocation(b, "f");
    this.d = a.getUniformLocation(b, "g");
    this.e = a.getUniformLocation(b, "e");
    this.f = a.getUniformLocation(b, "d");
    this.b = a.getUniformLocation(b, "h");
    this.a = a.getAttribLocation(b, "b");
    this.c = a.getAttribLocation(b, "c")
  };

  function Um() {
    this.a = "precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor\x3dtexture2D(g,a);gl_FragColor.rgb\x3dtexColor.rgb;gl_FragColor.a\x3dtexColor.a*f;}"
  }
  E(Um, Pm);
  ea(Um);

  function Vm() {
    this.a = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position\x3de*vec4(b,0.,1.);a\x3d(d*vec4(c,0.,1.)).st;}"
  }
  E(Vm, Qm);
  ea(Vm);

  function Wm(a, b) {
    this.d = a.getUniformLocation(b, "f");
    this.e = a.getUniformLocation(b, "e");
    this.f = a.getUniformLocation(b, "d");
    this.b = a.getUniformLocation(b, "g");
    this.a = a.getAttribLocation(b, "b");
    this.c = a.getAttribLocation(b, "c")
  };

  function Xm(a) {
    this.a = u(a) ? a : []
  }

  function Ym(a, b, c) {
    if (b != c) {
      var d = a.a,
        e = d.length,
        f;
      for (f = 0; f < e; f += 2)
        if (b <= d[f]) {
          d.splice(f, 0, b, c);
          Zm(a);
          return
        }
      d.push(b, c);
      Zm(a)
    }
  }
  Xm.prototype.clear = function() {
    this.a.length = 0
  };

  function Zm(a) {
    a = a.a;
    var b = a.length,
      c = 0,
      d;
    for (d = 0; d < b; d += 2) a[d] != a[d + 1] && (0 < c && a[c - 2] <= a[d] && a[d] <= a[c - 1] ? a[c - 1] = Math.max(a[c - 1], a[d + 1]) : (a[c++] = a[d], a[c++] = a[d + 1]));
    a.length = c
  }

  function $m(a, b) {
    var c = a.a,
      d = c.length,
      e;
    for (e = 0; e < d; e += 2) b.call(void 0, c[e], c[e + 1])
  }
  Xm.prototype.V = function() {
    return 0 === this.a.length
  };

  function an(a, b, c) {
    var d = a.a,
      e = d.length,
      f;
    for (f = 0; f < e; f += 2)
      if (!(c < d[f] || d[f + 1] < b)) {
        if (d[f] > c) break;
        if (b < d[f])
          if (c == d[f]) break;
          else if (c < d[f + 1]) {
          d[f] = Math.max(d[f], c);
          break
        } else d.splice(f, 2), f -= 2, e -= 2;
        else if (b == d[f])
          if (c < d[f + 1]) {
            d[f] = c;
            break
          } else if (c == d[f + 1]) {
          d.splice(f, 2);
          break
        } else d.splice(f, 2), f -= 2, e -= 2;
        else if (c < d[f + 1]) {
          d.splice(f, 2, d[f], b, c, d[f + 1]);
          break
        } else if (c == d[f + 1]) {
          d[f + 1] = b;
          break
        } else d[f + 1] = b
      }
    Zm(a)
  };

  function bn(a, b, c) {
    this.c = u(a) ? a : [];
    this.a = [];
    this.b = new Xm;
    a = u(b) ? b : this.c.length;
    a < this.c.length && Ym(this.b, a, this.c.length);
    this.e = this.f = null;
    this.d = u(c) ? c : 35044
  }
  bn.prototype.add = function(a) {
    var b = a.length,
      c;
    a: {
      c = this.b.a;
      var d = c.length,
        e = -1,
        f, g, h;
      for (g = 0; g < d; g += 2) {
        h = c[g + 1] - c[g];
        if (h == b) {
          c = c[g];
          break a
        }
        h > b && (-1 == e || h < f) && (e = c[g], f = h)
      }
      c = e
    }
    an(this.b, c, c + b);
    for (d = 0; d < b; ++d) this.c[c + d] = a[d];
    a = 0;
    for (d = this.a.length; a < d; ++a) Ym(this.a[a], c, c + b);
    return c
  };
  bn.prototype.oa = function() {
    var a = this.b.a,
      b = a.length,
      c = 0,
      d;
    for (d = 0; d < b; d += 2) c += a[d + 1] - a[d];
    return this.c.length - c
  };
  bn.prototype.remove = function(a, b) {
    var c, d;
    Ym(this.b, b, b + a);
    c = 0;
    for (d = this.a.length; c < d; ++c) an(this.a[c], b, b + a)
  };

  function cn(a, b) {
    uk.call(this, a, b);
    this.L = new bn([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]);
    this.i = this.ba = null;
    this.g = void 0;
    this.q = Sd();
    this.u = Ud();
    this.U = new Mm;
    this.k = this.j = null
  }
  E(cn, uk);

  function dn(a, b, c) {
    var d = a.d.d;
    if (u(a.g) && a.g == c) d.bindFramebuffer(36160, a.i);
    else {
      b.postRenderFunctions.push(va(function(a, b, c) {
        a.isContextLost() || (a.deleteFramebuffer(b), a.deleteTexture(c))
      }, d, a.i, a.ba));
      b = d.createTexture();
      d.bindTexture(3553, b);
      d.texImage2D(3553, 0, 6408, c, c, 0, 6408, 5121, null);
      d.texParameteri(3553, 10240, 9729);
      d.texParameteri(3553, 10241, 9729);
      var e = d.createFramebuffer();
      d.bindFramebuffer(36160, e);
      d.framebufferTexture2D(36160, 36064, 3553, b, 0);
      a.ba = b;
      a.i = e;
      a.g = c
    }
  }

  function en(a, b, c, d) {
    a = a.a;
    kd(a.S, b) && M(a, new ue(b, a, new Lm, d, null, c))
  }
  cn.prototype.n = function() {
    this.i = this.ba = null;
    this.g = void 0
  };

  function fn(a, b) {
    cn.call(this, a, b);
    this.c = null
  }
  E(fn, cn);

  function gn(a, b) {
    var c = b.e(),
      d = a.d.d,
      e = d.createTexture();
    d.bindTexture(3553, e);
    d.texImage2D(3553, 0, 6408, 6408, 5121, c);
    d.texParameteri(3553, 10242, 33071);
    d.texParameteri(3553, 10243, 33071);
    d.texParameteri(3553, 10241, 9729);
    d.texParameteri(3553, 10240, 9729);
    return e
  }
  fn.prototype.f = function(a, b, c, d) {
    var e = this.a;
    return e.a.k(b.extent, b.view2DState.resolution, b.view2DState.rotation, a, function(a) {
      return c.call(d, a, e)
    })
  };
  fn.prototype.b = function(a) {
    var b = this.d.d,
      c = a.view2DState,
      d = c.center,
      e = c.resolution,
      f = c.rotation,
      g = this.c,
      h = this.ba,
      m = this.a.a,
      n = a.viewHints;
    n[0] || n[1] || (c = m.pb(a.extent, e, a.pixelRatio, c.projection), null !== c && (n = c.state, 0 == n ? (fd(c, "change", this.l, !1, this), kk(c)) : 2 == n && (g = c, h = gn(this, c), null === this.ba || a.postRenderFunctions.push(va(function(a, b) {
      a.isContextLost() || a.deleteTexture(b)
    }, b, this.ba)))));
    null !== g && (b = this.d.e.f, hn(this, b.width, b.height, d, e, f, g.p()), d = this.q, Wd(d), $d(d, 1, -1), Zd(d, 0, -1), this.c =
      g, this.ba = h, xk(a.attributions, g.i), yk(a, m))
  };

  function hn(a, b, c, d, e, f, g) {
    b *= e;
    c *= e;
    a = a.u;
    Wd(a);
    $d(a, 2 / b, 2 / c);
    ae(a, -f);
    Zd(a, g[0] - d[0], g[1] - d[1]);
    $d(a, (g[2] - g[0]) / 2, (g[3] - g[1]) / 2);
    Zd(a, 1, 1)
  };

  function jn() {
    this.a = "precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor\x3dtexture2D(e,a);}"
  }
  E(jn, Pm);
  ea(jn);

  function kn() {
    this.a = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position\x3dvec4(b*d.xy+d.zw,0.,1.);a\x3dc;}"
  }
  E(kn, Qm);
  ea(kn);

  function ln(a, b) {
    this.b = a.getUniformLocation(b, "e");
    this.d = a.getUniformLocation(b, "d");
    this.a = a.getAttribLocation(b, "b");
    this.c = a.getAttribLocation(b, "c")
  };

  function mn(a, b) {
    cn.call(this, a, b);
    this.O = jn.Fa();
    this.Y = kn.Fa();
    this.c = null;
    this.G = new bn([0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0]);
    this.r = this.e = null;
    this.o = -1
  }
  E(mn, cn);
  mn.prototype.w = function() {
    var a = this.d.e,
      b = a.c,
      c = v(this.G),
      d = a.a[c];
    Pa(d.yd.a, d.$b);
    b.isContextLost() || b.deleteBuffer(d.buffer);
    delete a.a[c];
    mn.B.w.call(this)
  };
  mn.prototype.n = function() {
    mn.B.n.call(this);
    this.c = null
  };
  mn.prototype.b = function(a) {
    var b = this.d,
      c = b.e,
      d = b.d,
      e = a.view2DState,
      f = e.projection,
      g = this.a,
      h = g.a,
      m = tk(h, f),
      n = cf(m.a, e.resolution, 0),
      p = m.a[n],
      q = h.Nb(n, a.pixelRatio, f),
      r = q / m.fa(n),
      s = p / r,
      z = h.fc(),
      x = e.center,
      w;
    p == e.resolution ? (x = Bk(x, p, a.size), w = Se(x, p, e.rotation, a.size)) : w = a.extent;
    p = pk(m, w, p);
    if (null !== this.e && this.e.a == p.a && (this.e.b == p.b && this.e.d == p.d && this.e.c == p.c) && this.o == h.c) s = this.r;
    else {
      var B = [p.d - p.a + 1, p.c - p.b + 1],
        B = Math.max(B[0] * q, B[1] * q),
        A = Math.pow(2, Math.ceil(Math.log(B) / Math.LN2)),
        B =
        s * A,
        D = m.Sb(n),
        H = D[0] + p.a * q * s,
        s = D[1] + p.b * q * s,
        s = [H, s, H + B, s + B];
      dn(this, a, A);
      d.viewport(0, 0, A, A);
      d.clearColor(0, 0, 0, 0);
      d.clear(16384);
      d.disable(3042);
      A = nn(c, this.O, this.Y);
      c.$c(A);
      null === this.c && (this.c = new ln(d, A));
      on(c, this.G);
      d.enableVertexAttribArray(this.c.a);
      d.vertexAttribPointer(this.c.a, 2, 5126, !1, 16, 0);
      d.enableVertexAttribArray(this.c.c);
      d.vertexAttribPointer(this.c.c, 2, 5126, !1, 16, 8);
      d.uniform1i(this.c.b, 0);
      c = {};
      c[n] = {};
      var P = y(h.Kc, h, c, Ak(function(a) {
            return null !== a && 2 == a.state && pn(b.c, a.d())
          },
          h, r, f)),
        J = g.f();
      u(J) || (J = !0);
      var A = !0,
        H = Fe(),
        U = new cb(0, 0, 0, 0),
        Z, na, ta;
      for (na = p.a; na <= p.d; ++na)
        for (ta = p.b; ta <= p.c; ++ta) {
          D = h.lb(n, na, ta, r, f);
          Z = D.state;
          if (2 == Z) {
            if (pn(b.c, D.d())) {
              c[n][D.a.toString()] = D;
              continue
            }
          } else if (4 == Z || 3 == Z && !J) continue;
          A = !1;
          Z = m.ec(D.a, P, null, U, H);
          Z || (D = m.gc(D.a, U, H), null === D || P(n + 1, D))
        }
      P = La(Yb(c), Number);
      Va(P);
      var J = new Float32Array(4),
        R, sa, ja, Wb, U = 0;
      for (na = P.length; U < na; ++U)
        for (sa in ja = c[P[U]], ja) D = ja[sa], R = nk(m, D.a, H), ta = 2 * (R[2] - R[0]) / B, Z = 2 * (R[3] - R[1]) / B, Wb = 2 * (R[0] - s[0]) /
          B - 1, R = 2 * (R[1] - s[1]) / B - 1, Rd(J, ta, Z, Wb, R), d.uniform4fv(this.c.d, J), qn(b, D, q, z * r), d.drawArrays(5, 0, 4);
      A ? (this.e = p, this.r = s, this.o = h.c) : (this.r = this.e = null, this.o = -1, a.animate = !0)
    }
    zk(a.usedTiles, h, n, p);
    var mb = b.g;
    Ck(a, h, m, r, f, w, n, g.d(), function(a) {
      var c;
      (c = 2 != a.state) || (c = pn(b.c, a.d())) || (c = a.d() in mb.b);
      c || $i(mb, [a, rk(m, a.a), m.a[a.a.a], q, z * r])
    }, this);
    wk(a, h);
    yk(a, h);
    d = this.q;
    Wd(d);
    Zd(d, (x[0] - s[0]) / (s[2] - s[0]), (x[1] - s[1]) / (s[3] - s[1]));
    0 !== e.rotation && ae(d, e.rotation);
    $d(d, a.size[0] * e.resolution / (s[2] -
      s[0]), a.size[1] * e.resolution / (s[3] - s[1]));
    Zd(d, -0.5, -0.5)
  };

  function rn() {
    this.D = 0;
    this.b = {};
    this.c = this.a = null
  }
  l = rn.prototype;
  l.clear = function() {
    this.D = 0;
    this.b = {};
    this.c = this.a = null
  };

  function pn(a, b) {
    return a.b.hasOwnProperty(b)
  }
  l.forEach = function(a, b) {
    for (var c = this.a; null !== c;) a.call(b, c.wb, c.nc, this), c = c.ga
  };
  l.get = function(a) {
    a = this.b[a];
    if (a === this.c) return a.wb;
    a === this.a ? (this.a = this.a.ga, this.a.Ka = null) : (a.ga.Ka = a.Ka, a.Ka.ga = a.ga);
    a.ga = null;
    a.Ka = this.c;
    this.c = this.c.ga = a;
    return a.wb
  };
  l.oa = k("D");
  l.pa = function() {
    var a = Array(this.D),
      b = 0,
      c;
    for (c = this.c; null !== c; c = c.Ka) a[b++] = c.nc;
    return a
  };
  l.qa = function() {
    var a = Array(this.D),
      b = 0,
      c;
    for (c = this.c; null !== c; c = c.Ka) a[b++] = c.wb;
    return a
  };

  function sn(a) {
    var b = a.a;
    delete a.b[b.nc];
    null !== b.ga && (b.ga.Ka = null);
    a.a = b.ga;
    null === a.a && (a.c = null);
    --a.D
  }

  function tn(a, b, c) {
    c = {
      nc: b,
      ga: null,
      Ka: a.c,
      wb: c
    };
    null === a.c ? a.a = c : a.c.ga = c;
    a.c = c;
    a.b[b] = c;
    ++a.D
  };

  function un(a, b) {
    this.f = a;
    this.c = b;
    this.a = {};
    this.d = {};
    this.b = {};
    this.e = null;
    K(this.f, "webglcontextlost", this.Ah, !1, this);
    K(this.f, "webglcontextrestored", this.Bh, !1, this)
  }

  function on(a, b) {
    var c = a.c,
      d = b.c,
      e = v(b);
    if (e in a.a) e = a.a[e], c.bindBuffer(34962, e.buffer), $m(e.$b, function(a, b) {
      var e = d.slice(a, b);
      c.bufferSubData(34962, a, new Float32Array(e))
    }), e.$b.clear();
    else {
      var f = c.createBuffer();
      c.bindBuffer(34962, f);
      c.bufferData(34962, new Float32Array(d), b.d);
      var g = new Xm;
      b.a.push(g);
      a.a[e] = {
        yd: b,
        buffer: f,
        $b: g
      }
    }
  }
  l = un.prototype;
  l.w = function() {
    Tb(this.a, function(a) {
      Pa(a.yd.a, a.$b)
    });
    var a = this.c;
    a.isContextLost() || (Tb(this.a, function(b) {
      a.deleteBuffer(b.buffer)
    }), Tb(this.b, function(b) {
      a.deleteProgram(b)
    }), Tb(this.d, function(b) {
      a.deleteShader(b)
    }))
  };
  l.zh = k("c");

  function vn(a, b) {
    var c = v(b);
    if (c in a.d) return a.d[c];
    var d = a.c,
      e = d.createShader(b.A());
    d.shaderSource(e, b.a);
    d.compileShader(e);
    return a.d[c] = e
  }

  function nn(a, b, c) {
    var d = v(b) + "/" + v(c);
    if (d in a.b) return a.b[d];
    var e = a.c,
      f = e.createProgram();
    e.attachShader(f, vn(a, b));
    e.attachShader(f, vn(a, c));
    e.linkProgram(f);
    return a.b[d] = f
  }
  l.Ah = function() {
    $b(this.a);
    $b(this.d);
    $b(this.b);
    this.e = null
  };
  l.Bh = aa();
  l.$c = function(a) {
    if (a == this.e) return !1;
    this.c.useProgram(a);
    this.e = a;
    return !0
  };

  function wn(a, b) {
    Jk.call(this, 0, b);
    this.a = pc("CANVAS");
    this.a.style.width = "100%";
    this.a.style.height = "100%";
    this.a.className = "ol-unselectable";
    tc(a, this.a, 0);
    this.n = pc("CANVAS");
    this.l = 0;
    this.o = this.n.getContext("2d");
    this.j = !0;
    this.d = zc(this.a, {
      antialias: !0,
      depth: !1,
      Xe: !0,
      preserveDrawingBuffer: !1,
      stencil: !0
    });
    this.e = new un(this.a, this.d);
    K(this.a, "webglcontextlost", this.Wg, !1, this);
    K(this.a, "webglcontextrestored", this.Xg, !1, this);
    this.c = new rn;
    this.k = null;
    this.g = new Xi(y(function(a) {
      var b = a[1];
      a =
        a[2];
      var e = b[0] - this.k[0],
        b = b[1] - this.k[1];
      return 65536 * Math.log(a) + Math.sqrt(e * e + b * b) / a
    }, this), function(a) {
      return a[0].d()
    });
    this.r = y(function() {
      if (!this.g.V()) {
        bj(this.g);
        var a = Yi(this.g);
        qn(this, a[0], a[3], a[4])
      }
    }, this);
    this.i = 0;
    xn(this)
  }
  E(wn, Jk);

  function qn(a, b, c, d) {
    var e = a.d,
      f = b.d();
    if (pn(a.c, f)) a = a.c.get(f), e.bindTexture(3553, a.ba), 9729 != a.Rd && (e.texParameteri(3553, 10240, 9729), a.Rd = 9729), 9729 != a.Sd && (e.texParameteri(3553, 10240, 9729), a.Sd = 9729);
    else {
      var g = e.createTexture();
      e.bindTexture(3553, g);
      if (0 < d) {
        var h = a.n,
          m = a.o;
        a.l != c ? (h.width = c, h.height = c, a.l = c) : m.clearRect(0, 0, c, c);
        m.drawImage(b.b(), d, d, c, c, 0, 0, c, c);
        e.texImage2D(3553, 0, 6408, 6408, 5121, h)
      } else e.texImage2D(3553, 0, 6408, 6408, 5121, b.b());
      e.texParameteri(3553, 10240, 9729);
      e.texParameteri(3553,
        10241, 9729);
      e.texParameteri(3553, 10242, 33071);
      e.texParameteri(3553, 10243, 33071);
      tn(a.c, f, {
        ba: g,
        Rd: 9729,
        Sd: 9729
      })
    }
  }
  l = wn.prototype;
  l.Zb = function(a) {
    return a instanceof Ok ? new fn(this, a) : a instanceof Pk ? new mn(this, a) : null
  };

  function yn(a, b, c) {
    var d = a.f;
    kd(d.S, b) && M(d, new ue(b, d, new Lm, c, null, a.e))
  }
  l.w = function() {
    var a = this.d;
    a.isContextLost() || this.c.forEach(function(b) {
      null === b || a.deleteTexture(b.ba)
    });
    Gc(this.e);
    wn.B.w.call(this)
  };
  l.We = function(a, b) {
    for (var c = this.d, d; 1024 < this.c.oa() - this.i;) {
      d = this.c.a.wb;
      if (null === d)
        if (+this.c.a.nc == b.index) break;
        else --this.i;
      else c.deleteTexture(d.ba);
      sn(this.c)
    }
  };
  l.Wg = function(a) {
    a.preventDefault();
    this.c.clear();
    this.i = 0;
    Tb(this.b, function(a) {
      a.n()
    })
  };
  l.Xg = function() {
    xn(this);
    this.f.J()
  };

  function xn(a) {
    a = a.d;
    a.activeTexture(33984);
    a.blendFuncSeparate(770, 771, 1, 771);
    a.disable(2884);
    a.disable(2929);
    a.disable(3089);
    a.disable(2960)
  }
  l.sc = function(a) {
    var b = this.e,
      c = this.d;
    if (c.isContextLost()) return !1;
    if (null === a) return this.j && (Qh(this.a, !1), this.j = !1), !1;
    this.k = a.focus;
    tn(this.c, (-a.index).toString(), null);
    ++this.i;
    var d = [],
      e = a.layersArray,
      f = a.view2DState.resolution,
      g, h, m, n;
    g = 0;
    for (h = e.length; g < h; ++g) m = e[g], n = a.layerStates[v(m)], n.visible && (1 == n.jd && f < n.maxResolution && f >= n.minResolution) && d.push(m);
    g = 0;
    for (h = d.length; g < h; ++g) m = d[g], e = Lk(this, m), n = a.layerStates[v(m)], e.b(a, n);
    g = a.size[0] * a.pixelRatio;
    h = a.size[1] * a.pixelRatio;
    if (this.a.width != g || this.a.height != h) this.a.width = g, this.a.height = h;
    c.bindFramebuffer(36160, null);
    c.clearColor(0, 0, 0, 0);
    c.clear(16384);
    c.enable(3042);
    c.viewport(0, 0, this.a.width, this.a.height);
    yn(this, "precompose", a);
    g = 0;
    for (h = d.length; g < h; ++g) {
      m = d[g];
      n = a.layerStates[v(m)];
      c = e = Lk(this, m);
      m = a;
      e = b;
      en(c, "precompose", e, m);
      on(e, c.L);
      var f = e.c,
        p = n.brightness || 1 != n.contrast || n.hue || 1 != n.saturation,
        q = void 0,
        r = void 0;
      p ? (q = Rm.Fa(), r = Sm.Fa()) : (q = Um.Fa(), r = Vm.Fa());
      q = nn(e, q, r);
      r = void 0;
      p ? null === c.j ? (r = new Tm(f,
        q), c.j = r) : r = c.j : null === c.k ? (r = new Wm(f, q), c.k = r) : r = c.k;
      e.$c(q) && (f.enableVertexAttribArray(r.a), f.vertexAttribPointer(r.a, 2, 5126, !1, 16, 0), f.enableVertexAttribArray(r.c), f.vertexAttribPointer(r.c, 2, 5126, !1, 16, 8), f.uniform1i(r.b, 0));
      f.uniformMatrix4fv(r.f, !1, c.q);
      f.uniformMatrix4fv(r.e, !1, c.u);
      p && f.uniformMatrix4fv(r.i, !1, Nm(c.U, n.brightness, n.contrast, n.hue, n.saturation));
      f.uniform1f(r.d, n.opacity);
      f.bindTexture(3553, c.ba);
      f.drawArrays(5, 0, 4);
      en(c, "postcompose", e, m)
    }
    this.j || (Qh(this.a, !0), this.j = !0);
    Kk(a);
    1024 < this.c.oa() - this.i && a.postRenderFunctions.push(y(this.We, this));
    this.g.V() || (a.postRenderFunctions.push(this.r), a.animate = !0);
    yn(this, "postcompose", a);
    Nk(this, a);
    Mk(a)
  };
  var zn = ["webgl", "canvas", "dom"];

  function T(a) {
    N.call(this);
    var b = An(a);
    this.De = u(a.pixelRatio) ? a.pixelRatio : I.sd;
    this.Cc = b.ol3Logo;
    this.r = new ih(this.$h, void 0, this);
    Fc(this, this.r);
    this.zc = Sd();
    this.Fe = Sd();
    this.Bc = 0;
    this.n = this.O = this.d = null;
    this.b = mc("DIV", "ol-viewport");
    this.b.style.position = "relative";
    this.b.style.overflow = "hidden";
    this.b.style.width = "100%";
    this.b.style.height = "100%";
    this.b.style.msTouchAction = "none";
    I.xc && (this.b.className = "ol-touch");
    this.Oa = mc("DIV", "ol-overlaycontainer");
    this.b.appendChild(this.Oa);
    this.u =
      mc("DIV", "ol-overlaycontainer-stopevent");
    K(this.u, "click dblclick mousedown touchstart MSPointerDown pointerdown".split(" "), Ic);
    this.b.appendChild(this.u);
    a = new Mi(this);
    K(a, Xb(Wi), this.Yd, !1, this);
    Fc(this, a);
    this.Na = b.keyboardEventTarget;
    this.q = new sh;
    K(this.q, "key", this.Ld, !1, this);
    Fc(this, this.q);
    a = new Zh(this.b);
    K(a, "mousewheel", this.Ld, !1, this);
    Fc(this, a);
    this.k = b.controls;
    this.Ac = b.deviceOptions;
    this.j = b.interactions;
    this.l = b.overlays;
    this.Ca = new b.bi(this.b, this);
    Fc(this, this.Ca);
    this.Ie =
      new oh;
    K(this.Ie, "resize", this.L, !1, this);
    this.ma = null;
    this.G = [];
    this.Pa = [];
    this.Qa = new cj(y(this.Bf, this), y(this.cg, this));
    this.o = new Jd;
    K(this.o, ["add", "remove"], this.ag, !1, this);
    Fc(this, this.o);
    this.skippedFeatureUids_ = {};
    K(this, Fd("layergroup"), this.Mf, !1, this);
    K(this, Fd("view"), this.dg, !1, this);
    K(this, Fd("size"), this.$f, !1, this);
    K(this, Fd("target"), this.bg, !1, this);
    this.T(b.ri);
    this.k.forEach(function(a) {
      a.setMap(this)
    }, this);
    K(this.k, "add", function(a) {
      a.element.setMap(this)
    }, !1, this);
    K(this.k,
      "remove", function(a) {
        a.element.setMap(null)
      }, !1, this);
    this.j.forEach(function(a) {
      a.setMap(this)
    }, this);
    K(this.j, "add", function(a) {
      a.element.setMap(this)
    }, !1, this);
    K(this.j, "remove", function(a) {
      a.element.setMap(null)
    }, !1, this);
    this.l.forEach(function(a) {
      a.setMap(this)
    }, this);
    K(this.l, "add", function(a) {
      a.element.setMap(this)
    }, !1, this);
    K(this.l, "remove", function(a) {
      a.element.setMap(null)
    }, !1, this)
  }
  E(T, N);
  l = T.prototype;
  l.Je = function(a) {
    this.k.push(a)
  };
  l.Le = function(a) {
    this.j.push(a)
  };
  l.Me = function(a) {
    this.Ua().$a().push(a)
  };
  l.Ne = function(a) {
    this.l.push(a)
  };
  l.na = function(a) {
    this.J();
    Array.prototype.push.apply(this.G, arguments)
  };
  l.w = function() {
    uc(this.b);
    T.B.w.call(this)
  };
  l.Xd = function(a, b, c, d, e) {
    if (null !== this.d) {
      a = this.ea(a);
      a: {
        var f = this.Ca,
          g = this.d;
        c = u(c) ? c : null;
        d = u(d) ? d : qd;
        e = u(e) ? e : null;
        var h = f.f.Ua().Oc(),
          m;
        for (m = h.length - 1; 0 <= m; --m) {
          var n = h[m];
          if (n.b() && d.call(e, n) && (n = Lk(f, n).f(a, g, b, c))) {
            b = n;
            break a
          }
        }
        b = void 0
      }
      return b
    }
  };
  l.Hd = function(a) {
    return this.ea(this.Mc(a))
  };
  l.Mc = function(a) {
    if (u(a.changedTouches)) {
      a = a.changedTouches.item(0);
      var b = Lh(this.b);
      return [a.clientX - b.x, a.clientY - b.y]
    }
    a = Kh(a, this.b);
    return [a.x, a.y]
  };
  l.pc = function() {
    return this.get("target")
  };
  T.prototype.getTarget = T.prototype.pc;
  l = T.prototype;
  l.ea = function(a) {
    var b = this.d;
    if (null === b) return null;
    a = a.slice();
    return Ik(b.pixelToCoordinateMatrix, a, a)
  };
  l.cf = k("k");
  l.vf = k("l");
  l.kf = k("j");
  l.Ua = function() {
    return this.get("layergroup")
  };
  T.prototype.getLayerGroup = T.prototype.Ua;
  T.prototype.Ee = function() {
    var a = this.Ua();
    if (u(a)) return a.$a()
  };
  T.prototype.g = function(a) {
    var b = this.d;
    if (null === b) return null;
    a = a.slice(0, 2);
    return Ik(b.coordinateToPixelMatrix, a, a)
  };
  T.prototype.f = function() {
    return this.get("size")
  };
  T.prototype.getSize = T.prototype.f;
  T.prototype.a = function() {
    return this.get("view")
  };
  T.prototype.getView = T.prototype.a;
  l = T.prototype;
  l.Cf = k("b");
  l.Bf = function(a, b, c, d) {
    var e = this.d;
    if (!(null !== e && b in e.wantedTiles && e.wantedTiles[b][a.a.toString()])) return Infinity;
    a = c[0] - e.focus[0];
    c = c[1] - e.focus[1];
    return 65536 * Math.log(d) + Math.sqrt(a * a + c * c) / d
  };
  l.Ld = function(a, b) {
    var c = new Ki(b || a.type, this, a);
    this.Yd(c)
  };
  l.Yd = function(a) {
    if (null !== this.d) {
      this.ma = a.coordinate;
      a.b = this.d;
      var b = this.j.a,
        c;
      if (!1 !== M(this, a))
        for (c = b.length - 1; 0 <= c && b[c].ha(a); c--);
    }
  };
  l.Xf = function() {
    var a = this.d,
      b = this.Qa;
    if (!b.V()) {
      var c = 16,
        d = c,
        e = 0;
      if (null !== a) {
        var e = a.viewHints,
          f = this.Ac;
        e[0] && (c = !1 === f.loadTilesWhileAnimating ? 0 : 8, d = 2);
        e[1] && (c = !1 === f.loadTilesWhileInteracting ? 0 : 8, d = 2);
        e = Vb(a.wantedTiles)
      }
      c *= e;
      d *= e;
      if (b.d < c) {
        bj(b);
        c = Math.min(c - b.d, d, b.oa());
        for (d = 0; d < c; ++d) e = Yi(b)[0], fd(e, "change", b.i, !1, b), 0 == e.state && (e.state = 1, e.e = [fd(e.c, "error", e.k, !1, e), fd(e.c, "load", e.l, !1, e)], e.n(e, e.g));
        b.d += c
      }
    }
    b = this.Pa;
    c = 0;
    for (d = b.length; c < d; ++c) b[c](this, a);
    b.length = 0
  };
  l.$f = function() {
    this.J()
  };
  l.ag = function() {
    this.skippedFeatureUids_ = {};
    this.o.forEach(function(a) {
      this.skippedFeatureUids_[v(a).toString()] = !0
    }, this);
    this.J()
  };
  l.bg = function() {
    var a = this.pc(),
      a = u(a) ? ic(a) : null;
    Ah(this.q);
    null === a ? uc(this.b) : (a.appendChild(this.b), uh(this.q, null === this.Na ? a : this.Na));
    this.L()
  };
  l.cg = function() {
    this.J()
  };
  l.eg = function() {
    this.J()
  };
  l.dg = function() {
    null !== this.O && (L(this.O), this.O = null);
    var a = this.a();
    null != a && (this.O = K(a, "propertychange", this.eg, !1, this));
    this.J()
  };
  l.Nf = function() {
    this.J()
  };
  l.Of = function() {
    this.J()
  };
  l.Mf = function() {
    if (null !== this.n) {
      for (var a = this.n.length, b = 0; b < a; ++b) L(this.n[b]);
      this.n = null
    }
    a = this.Ua();
    null != a && (this.n = [K(a, "propertychange", this.Of, !1, this), K(a, "change", this.Nf, !1, this)]);
    this.J()
  };
  l.ai = function() {
    var a = this.r;
    jh(a);
    a.Dd()
  };
  l.J = function() {
    null != this.r.P || this.r.start()
  };
  l.Wh = function(a) {
    if (u(this.k.remove(a))) return a
  };
  l.Xh = function(a) {
    var b;
    u(this.j.remove(a)) && (b = a);
    return b
  };
  l.Yh = function(a) {
    return this.Ua().$a().remove(a)
  };
  l.Zh = function(a) {
    if (u(this.l.remove(a))) return a
  };
  l.$h = function(a) {
    var b, c, d, e = this.f();
    b = this.a();
    var f = u(b) ? this.a().M() : void 0,
      g = null;
    if (u(e) && 0 < e[0] && 0 < e[1] && u(f) && f.Xc()) {
      g = Ra(b.k);
      b = this.Ua().Nc();
      var h = b.layers;
      d = b.layerStates;
      var m = {},
        n;
      b = 0;
      for (c = h.length; b < c; ++b) n = h[b], m[v(n)] = d[b];
      d = pj(f);
      g = {
        animate: !1,
        attributions: {},
        coordinateToPixelMatrix: this.zc,
        extent: null,
        focus: null === this.ma ? d.center : this.ma,
        index: this.Bc++,
        layersArray: h,
        layerStates: m,
        logos: {},
        pixelRatio: this.De,
        pixelToCoordinateMatrix: this.Fe,
        postRenderFunctions: [],
        size: e,
        skippedFeatureUids_: this.skippedFeatureUids_,
        tileQueue: this.Qa,
        time: a,
        usedTiles: {},
        view2DState: d,
        viewHints: g,
        wantedTiles: {}
      };
      this.Cc && (g.logos["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABFCAYAAAD6pOBtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAABmISURBVHja7Jt5lF1Vne8/e+8z3KFu3ZpSlarKZIoQIBIihMHgA0RxALFV1F6oPAdanuDU4sBrnwO02tqoqCiCT0SBZuheNqII0kBQAyizYQgEEtKZKqnUPN35nP17f5x9k1tFDLwQfK7Vb6/1W2efc/bZZ/+++zftfX5HiQj/lYu3r5ufu3TFfncsAr4H2YzGMyyrVOW/TZfkqGJZ+koV5pZrdGpNKhMSZ0JVakqpkWzINqV4slzlD8WqrLaWCaVeOpMXf2Lt/gGwP8UKZFKKXFYtm5yWDz27ufaOHYN20eCYZbwgFMpQjRNSBoJQkQ51cy5DV1uzOmxui37jvHb16d42LUZz13hBrohibjoQQLysAFg343Na9CkjY/Yrq/9QPXb9phq7RiyVquD5iiBQeJ7C0wrPA1GKuCZM1SwjU7BxB2BichnFgnatXrlAn3L4AnMKMDJWkM9rxf/+qwTAWmjO6SMCX/3kvofLR937cIWRoRg/pWjKKppSbvoUKCWAgCgEMFohWgiVQqUArahYWLctZt3WmEd6Yt5ypN8+t1X9aHhSvqAU7wIeOFAA6JfaQWyhvVV/P4pk7b/cNHXUL2+ZZnIipq1N0ZRORCOOBBsLNrbEcVKXWFCxRceCjgVlBYmBWAgVtDUpWnKKjdstl99RYfOQpT2n5lvhfuDbfxUAxJZ5c9rMxokp+dgV10zIurVlybdosikhrllslDAqsd3NdL1eJ2KLsg6EOAFBrEAMCmhvVVRqcP09VcYKQi6tEOF84D4g9f8MAGs5vjWvN08VbN+Prx2Ph/prqq1DKWUtRAkzKrYQ2YRx646xgHVgWMFaQaJEAoxNjipOJEfZRL3amxWTk7D6iYiUD84grgKeAXr+4jZAhJNTKbVaacWN/z5eGe2vhu2dBhsJSkh0vK70JHovVoESRCsQUFoQUesR7sOwAcsuBZFW5EVYaK1aoZDjUSpjBXI5xeNbYlmxyMgrOrWeKArAAuBR4Ehgx18KgFcBq1taDLffMV3Z9EQ5aO1KmMcmjO9h39W0SupKoaxMilbfF/SVyrC5AVaUb1ApH+vpxDgaAm3UKWI4J7D2rVMDNbVuaxwv6daN0tsF/N6Na/rlBqBJhJubmzWbt1Sj++6Z9tLNSmEtYmF3VFk/1I2/VSgN1qqvl6ry+apVyfB1Ao6X9mifGyDlGtXBaeJiDbQCTRXhVnx9q25LEzSlL9oRB18aKwm+hprdPa6DgFuA1yIvLwA/UIoFYajlwQeKlMcjs3v2RRLGG0NrBUorSoV4e2VCXh+2ec/MnRfQPsfHDyGbMWjfUCpanlg9QGVgCmzU+D4fWATMUahtNgy+NXxQa3784Lmf7G7V1Ip2d9QJnKQ0FyvN514uAE4H3p/JaLZvr8r6p0s6lVPYyEKcACBSn31BG6gUhdJQ9Mf8gnDVq07JcPDSLF1zUzRlhJZ8RLnsEaZ9+jcXefhfxqmKkPK8EDgLeCdwDNCauBxBKhWK6wZGpnfkyqa3JUWxmuBsnD4o+azW3AD86eUA4OsAmazmoQcramqoplraDRJZxCbMKxFqNaFciJGJGJ03N5/09ta3n/yGLPMXeuzYYRgeEiYnLSLC+ITFC2FoWKgm03ieEi4RRfi8txuFjgwxtl0bMFownqBU4hW0kzgR+US+zftgOmuIIzlgAPwdsEwpqFaFrVuqChKfLiJUKpbKaA2qFj9v6OkNaFuR4TWva95+9KrsP01PRX8zOFCLfVML5/USGkNVa6rNeTuItk8Z4Xfd85vfv3Nb4S2lOFGB0HhoPVOjYoTQM7S0eygsvpcYWuXModbg+eqM/ucKn54Yr476vrvxN3+eMbWv5XDDavBh4KggUFQqItddPczQQEXZqsVORoR5zcLFKRYfnGHeK1Ikem6QOKYwHWFMsk4IA4vnC8Zz56HF8yI8XyPK49kny9xze4nf/XqKUrGAckAoB0Q5iujuzXDe15agNdRqFl03tErwPEVzi8dlX37u0089OnnJHrctL0kCXgMcBRCmNIODVXZuKkHZ0tUXctjr8yxdlqF3YYpUWlMqWiqViOHBGr4n+D4YncyOFUUcs9tWCAovMvixkMtVOflNije9vZkN63PcdHWJX1w1SrlaxLOawDMALFyaoWOux/DOCp5JnAV1NVBCOqvI5/1vA3cHeGsPhArMEKDpqajSvTD0jju+yTvsiCwtbT6lomVqMmJiLAl9lBGMhggQUVgPrAgBYAx4HgSBYLTsnt1iAbZvtgR+iQXzhAu/l+ZtZ83ne18Y5/7fDhLVagAcdnQOz/VR139FvS6EIWQyGuAibfYl/C8egBP3MB/T2RX4HzqvSzfnPSbGInbtqNZD091HsYrIQhSrPYPTCSieJwQ+pFKWTBaasjFhIGgtblmtGB6EibEiS5dqfvSrVn5ySYZLv7yZfJvP4SvzFKeqeCZheDcIStAatLIUChHAW8VwKPD0fgMg0KUVhwcGKlVLOYIw0MbGMLSr1hjt7hbD+mBmzsyePqNYEUVQLBkmJg2plCHXZGlpqdGSj/CMJRaFFc2ObZDNTvGxz6dJp+ez/klD38EVdvVHVEohvt8IAKTSmsJEjW2bq4BBBd7rXhIASuQQlE5NRB7NWcXCtgSWiULM2KQlrgm+rzBmDxZqb0A0EAo0shuUKFKMjHhMTBrGmw2dcyq0tVcARbWqKRY1m9aXePtZAWOjASqeRKssnjdTDUSgq8dw/91T9G+ukWpNIVYviyI6gcH9UwGturUWRkdrrFknlMuKZQs9Dpnn0TvHkG/3KJYjBgcr1MoWz9coPVMnlVJ76jSA4I6+ErSyiMDUVECh6DE17dPTUyJMWaoVTRxrxodrpMIKVdGIaHx/JgDGeZU1d0wDPkEmJI7p1NCx3wBoLV1Kw/IFip424c6Hqtx0xSAMFZm/PM3y5VmWHJLmoMPStHcZRscrDA1UMEpjzEwpqPtpeL5U1NukUhHWKsbGQkolj/nzCzTlalQrBmsVlYrGWoU2iUtNAqFkX2HJwR533TrNvXdUyfSmmdwFbz7Tm3Pq27z2/VYB3yOlFEyVLa1NinPPSLF9peYX15R58qEJtj0+BRp6+9IceUyOlcfnOHRFjh07CoyPVslmfbRWM1Rh7wDsIc8TwjCmVtP09+fo6ZmmKVejVk2CmjjWKCX4QYzWQhzD4j5N/7Yql367AE0+Yc5Q3AVLD/c6jlulu/YbAM+Tan1gkbXsGrJ0Lgj44qV9XHflML+6eozMHMOOrSX6N4xxy3Uer359x5avXrp0zWSh+L6nnhpVvg+h5+0WffWClKiK7yfSMDSUASnSlEuMbrmcAOoZiOIa8+YppiYNF3yqwPiwov0VPlEEtCvmdKkOJdK13ztCnpEBYwTPCL4HfgDTExG7dlZ523taOOjIjBR3RjR3hjR35/CafP54V//Cb3z+uQuWHdoVHH/cvF/nsiksNVDxbr2dSeLI7ibjWYxJJCEIYiYmQqYmA6xNJMAzgjYlOjtSVErpqc98ulDdugHalgTE2lAWQ67bMH+ByqbTNO0/AB476wM1BjwDvi9UyjGespz98Vb8Nk8mhmKU0aRzHtk5ee68edvfn/3uR6PuubnTjz5y/oqezo7H0ymDlQrGWMe4fT6ZRK93A2GEMIgJwphSyWNyIkUU1QjCCqHfzsF9vY8+8IfUURvuj9e1HBJgjYHAUKl6LFqsWThflI1EvQQA5CnPSNmYxlkSgkAYHa5xyCG+Ov/CORBrJsYt2jeYwJCdm//APbftbDr/I0/Q0qYf61vcfsTczrlnt7e2Vn3fonQZY+I9s2+Sfo2r+w1SYTyL71vCsAyUCLwmMmEPTVlzxejI8FGrHyhsoCe1S3sa4xv8QENkWHaYoqNVyuOTlF6KBAx6nqz1PHGD2iO6fqAY2FnjhNem1Pnf6ICqlolhQQUaE+jOdE/zebfeMMA5Z63D+DFzu8KrmrOt+bZ8xzXZVBOZtCKTrqB1zYGQMOw7pj0TO6rgmSK+F5AOuwmD3MbYjh7X2z1w7u2/K/DHP0Z0LPD7jW/QoUY8DXnDiuUWG8vwdEENvBQA8Dx1l+clfnYGAL5gjDDQX+XUt6S48IftNsgaO7HFIp4mzHifyy7MtN590wAf//B6ghDaWnU5juT9QeC9Mh02rWlKN7O0L2R+b0RLvkw2UyadKpNNl/CDIp5XxffSBF4Xvt/6rDLlM2t265KW5okHRkYDrr5ZQV6jUjprA00cGIarHouWCkceFjMypnZZy/4D4Ccz/3PfTxjeQ4lYBr7FaEv/tgonvdYzl1/bIn3HhtHUJigWVHuYNl/JHZTj3luG+cS5z1CuKlLpgPb2yrrb7po68b3/o/KDy67yeejRHJMTzQQmRzbdRODlJ+Z3zn1wcU/vmr75rd9uyduVNRlYGsvQjWFg6GzzuORqj+c2e7TNM0S+WWpDjUopKBmOPypmQbelUFLrlWLD/rtB3wI8phS3KiWnzY7odgc5CrZvqbF4sTY/uipnr7yyXPvXa2r+6Cb5aNMi/ev8obnbf3/LBKtP2cBbT28G7TO4ocbIg9Mf/+mw/4ifCy7u7PTndLT5BIGiEpGf1xPc6QXxFzrbp3nDqgrtrYpSOWTR3Iif/DLFL+8IaJpnwbAMzasAihXw2ixvOK7GdBGAtS+0Xb7vQMjfve36TaXktD0rO7cTszustSgFuwZi8nn0BRf46vWvU5WfXh2F993FtUypV6qFTbvCpiJKF/C9NAuPUNAcAN7Pwia5erRYPXLHuBwhopoxtD7+dLGI1fOY8LY/+rTie/9QpK834qbfBnzzygx+qxD6YC1vr0eZpUHDqW+qsPKwiC07NUpx70taDntmNwC/V4qrleL9e6I6SQIb6kvZxHKXy7Blc6QOX67Cy75vojVrpOPaG1nz0EMcWy7441aEgcEqZ54Bvd2G636heOIZI7WSeQTUI6SBMAE2lYaypykUYxb3WO58yOeC72RRITTnBBsDcJZSMFVQmLzlzDdWqFRBhD8pxWMvCQCzBwCU4uNa8zqlZF4CgjSEtc8PbwcHBc/DO+m1cMIJHPy7e+zmIFBfnJrkx7VIl4dH4Y0nW056TZUH12oee9owNKYZGlfsGDZkUsLOYU15VGhvFa67w+eiH2aoxYqODkucMP8h4GAUVAc1Z72nxDGvjNm4TaMUP38xm5373BP8xQOLZi2OOEYpeYAZdoDdm5J7S2KwkgRQHe1QKMLkJDVjuBm43lpu9z3K7W1CKki+K0wVFJPTijCAHUOKyYKip9Pype9nWPsnn45FcZ35EHjGGBYO79AsXhxzzVenQWBiWlWUYnFd/9+8fOv+SUA2G8/YHVFaHtRaTq1UzW1/juHnr6iTD5yDQ3WpwgfeBbxLa0qx5beDw+pOUGuAtZ7B+j7UYljYY0mH0N5smd9rWfuE1JkH+GetWTgyriAQvnROkXxW2LxTYzSXv9hvhfsE4IknczPOKxVN77zSb/oWl06cnvZWi7zkBIs0cKojgOEo5v4oZitQHquqy6cNG7vbkzVDQzlDaz45Na2QScWF55c45rCYTQnzo8BXD8iHkU2b0zPOo0ipbf0pZbRa09dXXDA+7v0GOOIAZqx0AG9xuQe/zWUY6e6w/PSWgN8/6hO2CsBKY/j5+CRE44pPnVPhHSdV2bxT1SXys8DIAQEgm4lnGgyFlEp6yUMPN/eHYbyzt7eyolAwn6rV1DeVwhwIBGLLbemQT87vtBurEXz3xpDLf5LGzwv5VjlKLPcNDwOx4rPnVjnzlIitAxqL4HncAFz1siVIiEAmYzNK8bdr7m1l3bomPM9+J5+PWj1PvirCxH7yPWmFK8KAg5fMt6dl07Lxl2t8zvpylst/liYzR2hplXeWyzw80k/Q3gYXnx/xzpNitgwoahFoxVoU70XVNycbaH+9wJ/LE1SKT9Vq6vByWX+ovb3GggUlFi4o09QUm1pNnVou67fFsTpOKQ4Cgr10MSbCeq14IJPmN23N9i7fEzs8rrn7YZ8b7wh46gkPfGiZY42NuWpyjP+OgZOPhr873dLTYdk5at0CKt5qPDlSqb2L/mkr9tML7EMSvuP78jPPiyvj494xQ0P5x7ZuydDTXY7bO6q3tLVFt2SzMdbSgmJhHKmcApNOScU3jARGbTGGaqUK/UOa3z8S8PhGw5ObDOuf8sBArstSrvLR8WG+YVI0HbkMTnu14vjDhVIVtuyCMEmX2Qi8GmHE2r9gmpwIHwBK6bRdm8nY1ZNT5qNDw7lnwtDS0V4jn49oykXjWst4Jh1jPGHHoCG28PQWxdC4olBSrN1oGNymoaggLZCJ+4CzSxX1ke5WWpcerli5FF51ULIj1T+chL2+D8Bq4A2AfbFu+UDnCZ4LPCDCT8PQrk+l7AZruX5o2F+zY2fwqDaMG61QJmbHeMymnYrtw8LghhgqQBpDC4vS7bI81yurmlLqza1NZtncVljYCYu7FXPbQFSSSKlUwrhj9ELgor+GRMmfAbcBvxbhaKX4ciplSaWoAv+pNc9VawznQs1h8y0LO1GFPt0ceMwLPbUgFTAnHSiyoaI5K+SzkEknkVe5JuwcZcZeIvCsC6Qe/2tKlR102RynA5cB853xW2otSz0D3a2gtcYzEHrJN0NxiZaxTfJ9RISJojBdwe0Q7WYaYBL4DPDjA5kqqzmw5RaXuvYW4M7GG7UYKjUolGF0WhiZFkanHcNloVIVIrsnw6zBfW0FznOpMj8+wOM98NnirtzqqB14I3ACsMJlc+3rS00MDAHbgCeAa4Hf8TIWj5e3jADXO8oABwO9jrJOAi1JKsE4sNPRJtj3bu6BKuq/+h8je7MBTcCnXH4ewGLgb4HD/y/7Pg64FPjgi2z/NpKsT144gN2rJGfcHkFqHxS6dobGBKJZdJkk5X53/kV3fkNDmy+IyLf28mwjnS97ynYRGRCRXSIyKCIjIrKqoe3XXLv73LkRkbtFZK2IrBORpxqOjzl6R8PzXxGRIREZF5HIUa2B6tdGXLsP1J+dbQPe4CwuwBfdseqOfwJybrX1TnftV8CaPzMrG91xm4sT9KwlyvqGtte6965yRvM/gNe+wKw3blf1uqX0k8DPnQtulKK6nTkPmOPaPs8ILgN+4+rfb3BjO93xvcAFQJs7Pxt4xInT5a7jLvfyErDEtesiSXk1DgTj+vwBcLFLYdnhDOVrnL9vBsac6/sQyR8igZuAS4CVwFTjarKBn8U8/z8CAWqOAIqzAXgjcHODTai7nlcC73b15e74a+B/AusaXvDhhvo294LngHudtT+2YUY6gE5X/5azN193g9zpYomPuX5anXSc7Zj+MElm+MpZDNZXnAWSfwiagLLr03P3i84dz5j4euV6h1rsZuj9wPsg2XOv75A5xm9z58+SRPRvdcj6jsk+4DoXwIy5tluApU6NzneS9qZZKjbGnp8fdMP1VwD/6ED7thsjMwwZbHdS1+PG7gN5J/olx7xxW3BF134GAJcBc11I+7+cvryjIcztdIO+reGlSxoYOMbt611Hkld4ozvvbmj/b8AZbhafAb7kmP6uU7lTnRRud6u8ixvGWB/DmGMCBz7AoU4VP+rAUY7ZbzlpW+f2CLNurJ7rZwmwYbblrlv8D4rIiSKyQkTe567VROQmEblGRJ501x50z73XWXkRkfeIyCEi8qyz+Kvd9e+KyAnOy1RFZL2IzGl496Ou3WnuvF5WiMhWVzci8iNXP3lWu/0pz/MCyxuOP3X1tcAngKNnqcS4u46L8O51M7nKSYIAJzkvcTXwSSeeXwO+6WbVbZZzFckfH/WPHWuBzc7Sz3GSNOVmONVgS3Czaxskoh5HFBtUOsOeZYa4Pqp7C4U/48Tw9obg5Bznlt7cYMh0Q+pZDrjB2Yxr3GKoPoirnSGrb1W1OOZj4G5g2PXVGCy9w1HBGcUFbpzPuWPetZs7y11f7/rqc0eZBUjk+ig5ozrDBhzndOw/3cAWON06xzG+CPiRMy71+P1YNyuHAP8+a0FzkZOQug2oOd1+j5MKgFOcxLx5lqGddK6s273r1Q26fl3DmMcanlsJnOnq/+DAa9yLLDvAvuDOPw/sagTgt+z7H7xDnVvaW8m4ZeqYk4JuF1NMzBpEV4P7+yLwCxcMdbv3L3FtjnEgvsqFrje4Z0I3USc4lbmr8TNmQ72+ETsN9DuX2O0m73mL7ToA/+qWq40/7FTdzHe7WXnavUg1PDvgROocd+0j7v6UI39Wf3XXNtUQCV7rGBpr8N8ADzpR7W2QrKpzqR93Qdm5JL/NPepAfbXjI3Z2qaWhr6qT4mfduGcshj7gHlzZQKuA77n7axz6RzfcX9Hgy3FuxjTUc46hRvIbpKZeSg742els3wGubBDZyQYpXeUkpc+dz3Fxx3I31mPdWHHG/FgHQA/wmIs0X9SOULAXEdvXyrIuHdNOD6caqNgQiu7tG2E9oDnR7Qf8vbt2kYsUW4F5LhKs24V73J5kvzO4HU6VPuyCp7rhTTv1O92pzoTrE15gRXeF85frX6AdIpJv8K9VEZkQkekGGmu4/8+zns023DvUPSsicmFDm5tn+fAfiohysYiIyFdFJBSRRbPa/WNDH8eIyE/c9UvkRXzdvcVJwSMvQgIqzqoHwD85nW7sv+Zm4BTgjlnP1vUzcLbmBCfijXuA73Yql3ce5jfO1Z3h7NSDrt2AkxppkAwabMGDwBVu5fj/d4T+zwBYt7040ZwyTQAAAABJRU5ErkJggg=="] =
        "http://www.huaruiview.com/")
    }
    a = this.G;
    b = e = 0;
    for (c = a.length; b < c; ++b) f = a[b], f(this, g) && (a[e++] = f);
    a.length = e;
    null !== g && (g.extent = Se(d.center, d.resolution, d.rotation, g.size));
    this.d = g;
    this.Ca.sc(g);
    null !== g && (g.animate && this.J(), Array.prototype.push.apply(this.Pa, g.postRenderFunctions), 0 !== this.G.length || (g.animate || g.viewHints[0] || g.viewHints[1]) || M(this, new bi("moveend", this)));
    M(this, new bi("postrender", this, g));
    c = b = this.Xf;
    this && (c = y(b, this));
    ma(t.setImmediate) ? t.setImmediate(c) : (mh || (mh = nh()), mh(c))
  };
  l.ei = function(a) {
    this.t("layergroup", a)
  };
  T.prototype.setLayerGroup = T.prototype.ei;
  T.prototype.Da = function(a) {
    this.t("size", a)
  };
  T.prototype.setSize = T.prototype.Da;
  T.prototype.Ge = function(a) {
    this.t("target", a)
  };
  T.prototype.setTarget = T.prototype.Ge;
  T.prototype.He = function(a) {
    this.t("view", a)
  };
  T.prototype.setView = T.prototype.He;
  T.prototype.L = function() {
    var a = this.pc(),
      a = u(a) ? ic(a) : null;
    null === a ? this.Da(void 0) : (a = Sh(a), this.Da([a.width, a.height]))
  };

  function An(a) {
    var b = null;
    u(a.keyboardEventTarget) && (b = ka(a.keyboardEventTarget) ? document.getElementById(a.keyboardEventTarget) : a.keyboardEventTarget);
    var c = {},
      d = u(a.ol3Logo) ? a.ol3Logo : !0,
      e = a.layers instanceof ak ? a.layers : new ak({
        layers: a.layers
      });
    c.layergroup = e;
    c.target = a.target;
    c.view = u(a.view) ? a.view : new Q;
    var e = Jk,
      f;
    u(a.renderer) ? ha(a.renderer) ? f = a.renderer : ka(a.renderer) && (f = [a.renderer]) : f = zn;
    var g, h;
    g = 0;
    for (h = f.length; g < h; ++g) {
      var m = f[g];
      if ("canvas" == m) {
        if (I.ud) {
          e = wm;
          break
        }
      } else if ("dom" ==
        m) {
        if (I.ze) {
          e = Km;
          break
        }
      } else if ("webgl" == m && I.xd) {
        e = wn;
        break
      }
    }
    f = u(a.controls) ? ha(a.controls) ? new Jd(Ra(a.controls)) : a.controls : uj();
    g = u(a.deviceOptions) ? a.deviceOptions : {};
    h = u(a.interactions) ? ha(a.interactions) ? new Jd(Ra(a.interactions)) : a.interactions : Wj();
    a = u(a.overlays) ? ha(a.overlays) ? new Jd(Ra(a.overlays)) : a.overlays : new Jd;
    return {
      controls: f,
      deviceOptions: g,
      interactions: h,
      keyboardEventTarget: b,
      ol3Logo: d,
      overlays: a,
      bi: e,
      ri: c
    }
  }
  gk();

  function Bn(a) {
    N.call(this);
    this.o = u(a.insertFirst) ? a.insertFirst : !0;
    this.u = u(a.stopEvent) ? a.stopEvent : !0;
    this.r = u(a.offsetX) ? a.offsetX : 0;
    this.q = u(a.offsetY) ? a.offsetY : 0;
    this.b = pc("DIV");
    this.b.style.position = "absolute";
    this.a = {
      Yb: "",
      oc: "",
      tc: "",
      vc: "",
      visible: !0
    };
    this.d = null;
    K(this, Fd("element"), this.If, !1, this);
    K(this, Fd("map"), this.Sf, !1, this);
    K(this, Fd("position"), this.Vf, !1, this);
    K(this, Fd("positioning"), this.Wf, !1, this);
    u(a.element) && this.oe(a.element);
    u(a.position) && this.l(a.position);
    u(a.positioning) &&
      this.n(a.positioning)
  }
  E(Bn, N);
  Bn.prototype.j = function() {
    return this.get("element")
  };
  Bn.prototype.getElement = Bn.prototype.j;
  Bn.prototype.f = function() {
    return this.get("map")
  };
  Bn.prototype.getMap = Bn.prototype.f;
  Bn.prototype.k = function() {
    return this.get("position")
  };
  Bn.prototype.getPosition = Bn.prototype.k;
  Bn.prototype.g = function() {
    return this.get("positioning")
  };
  Bn.prototype.getPositioning = Bn.prototype.g;
  l = Bn.prototype;
  l.If = function() {
    rc(this.b);
    var a = this.j();
    null != a && qc(this.b, a)
  };
  l.Sf = function() {
    null !== this.d && (uc(this.b), L(this.d), this.d = null);
    var a = this.f();
    null != a && (this.d = K(a, "postrender", this.Kg, !1, this), Cn(this), a = this.u ? a.u : a.Oa, this.o ? tc(a, this.b, 0) : qc(a, this.b))
  };
  l.Kg = function() {
    Cn(this)
  };
  l.Vf = function() {
    Cn(this)
  };
  l.Wf = function() {
    Cn(this)
  };
  l.oe = function(a) {
    this.t("element", a)
  };
  Bn.prototype.setElement = Bn.prototype.oe;
  Bn.prototype.setMap = function(a) {
    this.t("map", a)
  };
  Bn.prototype.setMap = Bn.prototype.setMap;
  Bn.prototype.l = function(a) {
    this.t("position", a)
  };
  Bn.prototype.setPosition = Bn.prototype.l;
  Bn.prototype.n = function(a) {
    this.t("positioning", a)
  };
  Bn.prototype.setPositioning = Bn.prototype.n;

  function Cn(a) {
    var b = a.f(),
      c = a.k();
    if (u(b) && null !== b.d && u(c)) {
      var c = b.g(c),
        d = b.f(),
        b = a.b.style,
        e = a.g();
      if ("bottom-right" == e || "center-right" == e || "top-right" == e) {
        "" !== a.a.oc && (a.a.oc = b.left = "");
        var f = Math.round(d[0] - c[0]) + "px";
        a.a.tc != f && (a.a.tc = b.right = f)
      } else {
        "" !== a.a.tc && (a.a.tc = b.right = "");
        f = -a.r;
        if ("bottom-center" == e || "center-center" == e || "top-center" == e) f += Nh(a.b).width / 2;
        f = Math.round(c[0] - f) + "px";
        a.a.oc != f && (a.a.oc = b.left = f)
      } if ("bottom-left" == e || "bottom-center" == e || "bottom-right" == e) "" !== a.a.vc &&
        (a.a.vc = b.top = ""), c = Math.round(d[1] - c[1]) + "px", a.a.Yb != c && (a.a.Yb = b.bottom = c);
      else {
        "" !== a.a.Yb && (a.a.Yb = b.bottom = "");
        d = -a.q;
        if ("center-left" == e || "center-center" == e || "center-right" == e) d += Nh(a.b).height / 2;
        c = Math.round(c[1] - d) + "px";
        a.a.vc != c && (a.a.vc = b.top = c)
      }
      a.a.visible || (Qh(a.b, !0), a.a.visible = !0)
    } else a.a.visible && (Qh(a.b, !1), a.a.visible = !1)
  };
  var Dn = tb ? "webkitfullscreenchange" : sb ? "mozfullscreenchange" : F ? "MSFullscreenChange" : "fullscreenchange";

  function En() {
    var a = fc().a,
      b = a.body;
    return !!(b.webkitRequestFullscreen || b.mozRequestFullScreen && a.mozFullScreenEnabled || b.msRequestFullscreen && a.msFullscreenEnabled || b.requestFullscreen && a.fullscreenEnabled)
  }

  function Fn(a) {
    a.webkitRequestFullscreen ? a.webkitRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.requestFullscreen && a.requestFullscreen()
  }

  function Gn() {
    var a = fc().a;
    return !!(a.webkitIsFullScreen || a.mozFullScreen || a.msFullscreenElement || a.fullscreenElement)
  };

  function Hn(a) {
    a = u(a) ? a : {};
    this.b = u(a.className) ? a.className : "ol-full-screen";
    var b = mc("SPAN", {
        role: "tooltip"
      }, u(a.tipLabel) ? a.tipLabel : "全屏"),
      c = mc("BUTTON", {
        "class": this.b + "-" + Gn() + " ol-has-tooltip"
      });
    c.appendChild(b);
    K(c, ["click", "touchend"], this.d, !1, this);
    K(c, ["mouseout", Nc], function() {
      this.blur()
    }, !1);
    K(t.document, Dn, this.j, !1, this);
    b = mc("DIV", {
      "class": this.b + " ol-unselectable " + (En() ? "" : "ol-unsupported")
    }, c);
    qj.call(this, {
      element: b,
      target: a.target
    });
    this.k = u(a.keys) ? a.keys : !1
  }
  E(Hn, qj);
  Hn.prototype.d = function(a) {
    En() && (a.preventDefault(), a = this.a, null !== a && (Gn() ? (a = fc().a, a.webkitCancelFullScreen ? a.webkitCancelFullScreen() : a.mozCancelFullScreen ? a.mozCancelFullScreen() : a.msExitFullscreen ? a.msExitFullscreen() : a.exitFullscreen && a.exitFullscreen()) : (a = a.pc(), a = ic(a), this.k ? a.mozRequestFullScreenWithKeys ? a.mozRequestFullScreenWithKeys() : a.webkitRequestFullscreen ? a.webkitRequestFullscreen() : Fn(a) : Fn(a))))
  };
  Hn.prototype.j = function() {
    var a = this.b + "-true",
      b = this.b + "-false",
      c = vc(this.element),
      d = this.a;
    Gn() ? Nb(c, b, a) : Nb(c, a, b);
    null === d || d.L()
  };

  function In(a) {
    a = u(a) ? a : {};
    var b = mc("DIV", {
      "class": u(a.className) ? a.className : "ol-mouse-position"
    });
    qj.call(this, {
      element: b,
      target: a.target
    });
    K(this, Fd("projection"), this.L, !1, this);
    u(a.coordinateFormat) && this.q(a.coordinateFormat);
    u(a.projection) && this.r(mg(a.projection));
    this.ma = u(a.undefinedHTML) ? a.undefinedHTML : "";
    this.k = b.innerHTML;
    this.j = this.d = this.b = null
  }
  E(In, qj);
  In.prototype.f = function(a) {
    a = a.b;
    null === a ? this.b = null : this.b != a.view2DState.projection && (this.b = a.view2DState.projection, this.d = null);
    Jn(this, this.j)
  };
  In.prototype.L = function() {
    this.d = null
  };
  In.prototype.l = function() {
    return this.get("coordinateFormat")
  };
  In.prototype.getCoordinateFormat = In.prototype.l;
  In.prototype.n = function() {
    return this.get("projection")
  };
  In.prototype.getProjection = In.prototype.n;
  In.prototype.u = function(a) {
    a = Kh(a, this.a.b);
    this.j = [a.x, a.y];
    Jn(this, this.j)
  };
  In.prototype.G = function() {
    Jn(this, null);
    this.j = null
  };
  In.prototype.setMap = function(a) {
    In.B.setMap.call(this, a);
    null !== a && (a = a.b, this.g.push(K(a, "mousemove", this.u, !1, this), K(a, "mouseout", this.G, !1, this)))
  };
  In.prototype.q = function(a) {
    this.t("coordinateFormat", a)
  };
  In.prototype.setCoordinateFormat = In.prototype.q;
  In.prototype.r = function(a) {
    this.t("projection", a)
  };
  In.prototype.setProjection = In.prototype.r;

  function Jn(a, b) {
    var c = a.ma;
    if (null !== b && null !== a.b) {
      if (null === a.d) {
        var d = a.n();
        a.d = u(d) ? Vf(a.b, d) : og
      }
      d = a.a.ea(b);
      null !== d && (a.d(d, d), c = a.l(), c = u(c) ? c(d) : d.toString())
    }
    u(a.k) && c == a.k || (a.element.innerHTML = c, a.k = c)
  };

  function Kn(a) {
    a = a || {};
    var b = u(a.className) ? a.className : "ol-scale-line";
    this.j = mc("DIV", {
      "class": b + "-inner"
    });
    this.l = mc("DIV", {
      "class": b + " ol-unselectable"
    }, this.j);
    this.n = null;
    this.k = u(a.minWidth) ? a.minWidth : 64;
    this.d = !1;
    this.u = void 0;
    this.r = "";
    this.b = null;
    qj.call(this, {
      element: this.l,
      target: a.target
    });
    K(this, Fd("units"), this.L, !1, this);
    this.G(a.units || "metric")
  }
  E(Kn, qj);
  var Ln = [1, 2, 5];
  Kn.prototype.q = function() {
    return this.get("units")
  };
  Kn.prototype.getUnits = Kn.prototype.q;
  Kn.prototype.f = function(a) {
    a = a.b;
    null === a ? this.n = null : this.n = a.view2DState;
    Mn(this)
  };
  Kn.prototype.L = function() {
    Mn(this)
  };
  Kn.prototype.G = function(a) {
    this.t("units", a)
  };
  Kn.prototype.setUnits = Kn.prototype.G;

  function Mn(a) {
    var b = a.n;
    if (null === b) a.d && (Qh(a.l, !1), a.d = !1);
    else {
      var c = b.center,
        d = b.projection,
        b = d.d(b.resolution, c),
        e = d.la,
        f = a.q();
      "degrees" != e || "metric" != f && "imperial" != f ? "ft" != e && "m" != e || "degrees" != f ? a.b = null : (null === a.b && (a.b = Vf(d, mg("EPSG:4326"))), c = Math.cos(Qb(a.b(c)[1])), d = Pf.radius, "ft" == e && (d /= 0.3048), b *= 180 / (Math.PI * c * d)) : (a.b = null, c = Math.cos(Qb(c[1])), b *= Math.PI * c * Pf.radius / 180);
      c = a.k * b;
      e = "";
      "degrees" == f ? c < 1 / 60 ? (e = "\u2033", b *= 3600) : 1 > c ? (e = "\u2032", b *= 60) : e = "\u00b0" : "imperial" == f ? 0.9144 >
        c ? (e = "in", b /= 0.0254) : 1609.344 > c ? (e = "ft", b /= 0.3048) : (e = "mi", b /= 1609.344) : "nautical" == f ? (b /= 1852, e = "nm") : "metric" == f ? 1 > c ? (e = "mm", b *= 1E3) : 1E3 > c ? e = "m" : (e = "km", b /= 1E3) : "us" == f && (0.9144 > c ? (e = "in", b *= 39.37) : 1609.344 > c ? (e = "ft", b /= 0.30480061) : (e = "mi", b /= 1609.3472));
      for (var f = 3 * Math.floor(Math.log(a.k * b) / Math.log(10)), g, h;;) {
        g = Ln[f % 3] * Math.pow(10, Math.floor(f / 3));
        h = Math.round(g / b);
        if (h >= a.k) break;
        ++f
      }
      g = g + e;
      a.r != g && (a.j.innerHTML = g, a.r = g);
      a.u != h && (a.j.style.width = h + "px", a.u = h);
      a.d || (Qh(a.l, !0), a.d = !0)
    }
  };

  function Nn(a) {
    Cc.call(this);
    this.c = a;
    this.a = {}
  }
  E(Nn, Cc);
  var On = [];
  Nn.prototype.$ = function(a, b, c, d, e) {
    ha(b) || (On[0] = b, b = On);
    for (var f = 0; f < b.length; f++) {
      var g = K(a, b[f], c || this, d || !1, e || this.c || this);
      this.a[g.key] = g
    }
    return this
  };
  Nn.prototype.ld = function(a, b, c, d, e) {
    if (ha(b))
      for (var f = 0; f < b.length; f++) this.ld(a, b[f], c, d, e);
    else {
      a: if (e = e || this.c || this, d = !!d, c = bd(c || this), Uc(a)) a = a.S.a[b], b = -1, a && (b = wd(a, c, d, e)), e = -1 < b ? a[b] : null;
      else {
        if (a = hd(a, b, d))
          for (b = 0; b < a.length; b++)
            if (!a[b].Ba && a[b].ra == c && a[b].capture == d && a[b].Za == e) {
              e = a[b];
              break a
            }
        e = null
      }
      e && (L(e), delete this.a[e.key])
    }
    return this
  };

  function Pn(a) {
    Tb(a.a, L);
    a.a = {}
  }
  Nn.prototype.w = function() {
    Nn.B.w.call(this);
    Pn(this)
  };
  Nn.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
  };

  function Qn(a, b, c) {
    xd.call(this);
    this.target = a;
    this.handle = b || a;
    this.c = c || new Ch(NaN, NaN, NaN, NaN);
    this.b = hc(a);
    this.a = new Nn(this);
    Fc(this, this.a);
    K(this.handle, ["touchstart", "mousedown"], this.se, !1, this)
  }
  E(Qn, xd);
  var Rn = F || sb && Gb("1.9.3");
  l = Qn.prototype;
  l.clientX = 0;
  l.clientY = 0;
  l.screenX = 0;
  l.screenY = 0;
  l.te = 0;
  l.ue = 0;
  l.mb = 0;
  l.nb = 0;
  l.Fd = !0;
  l.Sa = !1;
  l.Od = 0;
  l.jg = 0;
  l.fg = !1;
  l.md = !1;
  l.w = function() {
    Qn.B.w.call(this);
    gd(this.handle, ["touchstart", "mousedown"], this.se, !1, this);
    Pn(this.a);
    Rn && this.b.releaseCapture();
    this.handle = this.target = null
  };

  function Sn(a) {
    u(a.e) || (a.e = Rh(a.target));
    return a.e
  }
  l.se = function(a) {
    var b = "mousedown" == a.type;
    if (!this.Fd || this.Sa || b && !Sc(a)) M(this, "earlycancel");
    else {
      Tn(a);
      if (0 == this.Od)
        if (M(this, new Un("start", this, a.clientX, a.clientY, a))) this.Sa = !0, a.preventDefault();
        else return;
      else a.preventDefault();
      var b = this.b,
        c = b.documentElement,
        d = !Rn;
      this.a.$(b, ["touchmove", "mousemove"], this.Tf, d);
      this.a.$(b, ["touchend", "mouseup"], this.cc, d);
      Rn ? (c.setCapture(!1), this.a.$(c, "losecapture", this.cc)) : this.a.$(b ? b.parentWindow || b.defaultView : window, "blur", this.cc);
      F && this.fg &&
        this.a.$(b, "dragstart", Jc);
      this.f && this.a.$(this.f, "scroll", this.Hh, d);
      this.clientX = this.te = a.clientX;
      this.clientY = this.ue = a.clientY;
      this.screenX = a.screenX;
      this.screenY = a.screenY;
      this.md ? (a = this.target, b = a.offsetLeft, c = a.offsetParent, c || "fixed" != Eh(a, "position") || (c = hc(a).documentElement), c ? (sb ? (d = Vh(c), b += d.left) : F && 8 <= Ib && (d = Vh(c), b -= d.left), a = Rh(c) ? c.clientWidth - (b + a.offsetWidth) : b) : a = b) : a = this.target.offsetLeft;
      this.mb = a;
      this.nb = this.target.offsetTop;
      this.d = xc(fc(this.b));
      this.jg = wa()
    }
  };
  l.cc = function(a, b) {
    Pn(this.a);
    Rn && this.b.releaseCapture();
    if (this.Sa) {
      Tn(a);
      this.Sa = !1;
      var c = Vn(this, this.mb),
        d = Wn(this, this.nb);
      M(this, new Un("end", this, a.clientX, a.clientY, a, c, d, b || "touchcancel" == a.type))
    } else M(this, "earlycancel")
  };

  function Tn(a) {
    var b = a.type;
    "touchstart" == b || "touchmove" == b ? Qc(a, a.F.targetTouches[0], a.c) : "touchend" != b && "touchcancel" != b || Qc(a, a.F.changedTouches[0], a.c)
  }
  l.Tf = function(a) {
    if (this.Fd) {
      Tn(a);
      var b = (this.md && Sn(this) ? -1 : 1) * (a.clientX - this.clientX),
        c = a.clientY - this.clientY;
      this.clientX = a.clientX;
      this.clientY = a.clientY;
      this.screenX = a.screenX;
      this.screenY = a.screenY;
      if (!this.Sa) {
        var d = this.te - this.clientX,
          e = this.ue - this.clientY;
        if (d * d + e * e > this.Od)
          if (M(this, new Un("start", this, a.clientX, a.clientY, a))) this.Sa = !0;
          else {
            this.X || this.cc(a);
            return
          }
      }
      c = Xn(this, b, c);
      b = c.x;
      c = c.y;
      this.Sa && M(this, new Un("beforedrag", this, a.clientX, a.clientY, a, b, c)) && (Yn(this, a, b, c), a.preventDefault())
    }
  };

  function Xn(a, b, c) {
    var d = xc(fc(a.b));
    b += d.x - a.d.x;
    c += d.y - a.d.y;
    a.d = d;
    a.mb += b;
    a.nb += c;
    b = Vn(a, a.mb);
    a = Wn(a, a.nb);
    return new Rb(b, a)
  }
  l.Hh = function(a) {
    var b = Xn(this, 0, 0);
    a.clientX = this.clientX;
    a.clientY = this.clientY;
    Yn(this, a, b.x, b.y)
  };

  function Yn(a, b, c, d) {
    a.md && Sn(a) ? a.target.style.right = c + "px" : a.target.style.left = c + "px";
    a.target.style.top = d + "px";
    M(a, new Un("drag", a, b.clientX, b.clientY, b, c, d))
  }

  function Vn(a, b) {
    var c = a.c,
      d = isNaN(c.left) ? null : c.left,
      c = isNaN(c.width) ? 0 : c.width;
    return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b))
  }

  function Wn(a, b) {
    var c = a.c,
      d = isNaN(c.top) ? null : c.top,
      c = isNaN(c.height) ? 0 : c.height;
    return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b))
  }

  function Un(a, b, c, d, e, f, g, h) {
    Hc.call(this, a);
    this.clientX = c;
    this.clientY = d;
    this.d = e;
    this.left = u(f) ? f : b.mb;
    this.top = u(g) ? g : b.nb;
    this.b = b;
    this.a = !!h
  }
  E(Un, Hc);

  function Zn(a) {
    a = u(a) ? a : {};
    this.b = void 0;
    this.j = $n;
    this.k = !1;
    var b = u(a.className) ? a.className : "ol-zoomslider";
    a = mc("DIV", [b + "-thumb", "ol-unselectable"]);
    b = mc("DIV", [b, "ol-unselectable"], a);
    this.d = new Qn(a);
    Fc(this, this.d);
    K(this.d, ["drag", "end"], this.n, void 0, this);
    K(b, "click", this.l, !1, this);
    K(a, "click", Ic);
    qj.call(this, {
      element: b
    })
  }
  E(Zn, qj);
  var $n = 0;
  Zn.prototype.setMap = function(a) {
    Zn.B.setMap.call(this, a);
    null === a || a.J()
  };
  Zn.prototype.f = function(a) {
    if (null !== a.b) {
      if (!this.k) {
        var b = this.element,
          c = vc(b),
          b = Sh(b),
          d;
        d = Jh(c);
        var e = Nh(c);
        d = new Ch(d.x, d.y, e.width, e.height);
        var e = Uh(c, "margin"),
          f = Vh(c),
          c = b.width - e.left - e.right - f.left - f.right - d.width;
        d = b.height - e.top - e.bottom - f.top - f.bottom - d.height;
        b.width > b.height ? (this.j = 1, b = new Ch(0, 0, c, 0)) : (this.j = $n, b = new Ch(0, 0, 0, d));
        this.d.c = b || new Ch(NaN, NaN, NaN, NaN);
        this.k = !0
      }
      a = a.b.view2DState.resolution;
      a !== this.b && (this.b = a, a = -1 * (oj(this.a.a().M())(a) - 1), b = this.d, c = vc(this.element),
        1 == this.j ? Fh(c, b.c.left + b.c.width * a) : Fh(c, b.c.left, b.c.top + b.c.height * a))
    }
  };
  Zn.prototype.l = function(a) {
    var b = this.a,
      c = b.a().M();
    a = ao(this, bo(this, a.offsetX, a.offsetY));
    b.na(Ag({
      resolution: a,
      duration: 200,
      easing: ug
    }));
    a = c.constrainResolution(a);
    c.d(a)
  };

  function bo(a, b, c) {
    var d = a.d.c,
      e = 0;
    return e = 1 === a.j ? (b - d.left) / d.width : (c - d.top) / d.height
  }

  function ao(a, b) {
    b = -1 * (Ob(b, 0, 1) - 1);
    return nj(a.a.a().M())(b)
  }
  Zn.prototype.n = function(a) {
    var b = this.a,
      c = b.a().M();
    "drag" === a.type ? (a = ao(this, bo(this, a.left, a.top)), a !== this.b && (this.b = a, c.d(a))) : (b.na(Ag({
      resolution: this.b,
      duration: 200,
      easing: ug
    })), a = c.constrainResolution(this.b), c.d(a))
  };

  function co(a) {
    a = u(a) ? a : {};
    this.b = u(a.extent) ? a.extent : null;
    var b = u(a.className) ? a.className : "ol-zoom-extent",
      c = mc("SPAN", {
        role: "tooltip"
      }, u(a.tipLabel) ? a.tipLabel : "Fit to extent"),
      b = mc("DIV", {
        "class": b + " ol-unselectable"
      }),
      d = mc("BUTTON", {
        "class": "ol-has-tooltip"
      });
    d.appendChild(c);
    b.appendChild(d);
    K(d, ["touchend", "click"], this.d, !1, this);
    K(d, ["mouseout", Nc], function() {
      this.blur()
    }, !1);
    qj.call(this, {
      element: b,
      target: a.target
    })
  }
  E(co, qj);
  co.prototype.d = function(a) {
    a.preventDefault();
    a = this.a;
    var b = a.a().M(),
      c = null === this.b ? b.l().p() : this.b;
    b.Gd(c, a.f())
  };

  function eo(a) {
    N.call(this);
    this.a = a;
    K(this.a, ["change", "input"], this.k, !1, this);
    K(this, Fd("value"), this.l, !1, this);
    K(this, Fd("checked"), this.j, !1, this)
  }
  E(eo, N);
  eo.prototype.b = function() {
    return this.get("checked")
  };
  eo.prototype.getChecked = eo.prototype.b;
  eo.prototype.d = function() {
    return this.get("value")
  };
  eo.prototype.getValue = eo.prototype.d;
  eo.prototype.g = function(a) {
    this.t("value", a)
  };
  eo.prototype.setValue = eo.prototype.g;
  eo.prototype.f = function(a) {
    this.t("checked", a)
  };
  eo.prototype.setChecked = eo.prototype.f;
  eo.prototype.k = function() {
    var a = this.a;
    "checkbox" === a.type || "radio" === a.type ? this.f(a.checked) : this.g(a.value)
  };
  eo.prototype.j = function() {
    this.a.checked = this.b()
  };
  eo.prototype.l = function() {
    this.a.value = this.d()
  };

  function fo() {};
  var go;
  a: if (document.implementation && document.implementation.createDocument) go = document.implementation.createDocument("", "", null);
  else {
    if ("undefined" != typeof ActiveXObject) {
      var ho = new ActiveXObject("MSXML2.DOMDocument");
      if (ho) {
        ho.resolveExternals = !1;
        ho.validateOnParse = !1;
        try {
          ho.setProperty("ProhibitDTD", !0), ho.setProperty("MaxXMLSize", 2048), ho.setProperty("MaxElementDepth", 256)
        } catch (io) {}
      }
      if (ho) {
        go = ho;
        break a
      }
    }
    throw Error("Your browser does not support creating new documents");
  }
  var jo = go;

  function ko(a, b) {
    return jo.createElementNS(a, b)
  }

  function lo(a, b) {
    null === a && (a = "");
    return jo.createNode(1, b, a)
  }
  var mo = document.implementation && document.implementation.createDocument ? ko : lo;

  function no(a) {
    return oo(a, !1, []).join("")
  }

  function oo(a, b, c) {
    if (4 == a.nodeType || 3 == a.nodeType) b ? c.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : c.push(a.nodeValue);
    else
      for (a = a.firstChild; null !== a; a = a.nextSibling) oo(a, b, c);
    return c
  }

  function po(a) {
    return a.localName
  }

  function qo(a) {
    var b = a.localName;
    return u(b) ? b : a.baseName
  }
  var ro = F ? qo : po;

  function so(a) {
    return a instanceof Document
  }

  function to(a) {
    return oa(a) && 9 == a.nodeType
  }
  var uo = F ? to : so;

  function vo(a) {
    return a instanceof Node
  }

  function wo(a) {
    return oa(a) && u(a.nodeType)
  }
  var xo = F ? wo : vo;

  function yo(a, b, c) {
    return a.getAttributeNS(b, c) || ""
  }

  function zo(a, b, c) {
    var d = "";
    a = Ao(a, b, c);
    u(a) && (d = a.nodeValue);
    return d
  }
  var Bo = document.implementation && document.implementation.createDocument ? yo : zo;

  function Co(a, b, c) {
    return a.getAttributeNodeNS(b, c)
  }

  function Do(a, b, c) {
    var d = null;
    a = a.attributes;
    for (var e, f, g = 0, h = a.length; g < h; ++g)
      if (e = a[g], e.namespaceURI == b && (f = e.prefix ? e.prefix + ":" + c : c, f == e.nodeName)) {
        d = e;
        break
      }
    return d
  }
  var Ao = document.implementation && document.implementation.createDocument ? Co : Do;

  function Eo(a, b, c, d) {
    a.setAttributeNS(b, c, d)
  }

  function Fo(a, b, c, d) {
    null === b ? a.setAttribute(c, d) : (b = a.ownerDocument.createNode(2, c, b), b.nodeValue = d, a.setAttributeNode(b))
  }
  var Go = document.implementation && document.implementation.createDocument ? Eo : Fo;

  function Ho(a) {
    return (new DOMParser).parseFromString(a, "application/xml")
  }

  function Io(a, b) {
    return function(c, d) {
      var e = a.call(b, c, d);
      u(e) && Sa(d[d.length - 1], e)
    }
  }

  function Jo(a, b) {
    return function(c, d) {
      var e = a.call(b, c, d);
      u(e) && d[d.length - 1].push(e)
    }
  }

  function Ko(a) {
    return function(b, c) {
      var d = a.call(void 0, b, c);
      u(d) && (c[c.length - 1] = d)
    }
  }

  function Lo(a) {
    return function(b, c) {
      var d = a.call(void 0, b, c);
      u(d) && bc(c[c.length - 1], u(void 0) ? void 0 : b.localName).push(d)
    }
  }

  function V(a, b) {
    return function(c, d) {
      var e = a.call(void 0, c, d);
      u(e) && (d[d.length - 1][u(b) ? b : c.localName] = e)
    }
  }

  function W(a) {
    return function(b, c, d) {
      a.call(void 0, b, c, d);
      d[d.length - 1].node.appendChild(b)
    }
  }

  function Mo(a) {
    var b, c;
    return function(d, e, f) {
      if (!u(b)) {
        b = {};
        var g = {};
        g[d.localName] = a;
        b[d.namespaceURI] = g;
        c = No(d.localName)
      }
      Oo(b, c, e, f)
    }
  }

  function No(a, b) {
    return function(c, d, e) {
      c = d[d.length - 1].node;
      d = a;
      u(d) || (d = e);
      e = b;
      u(b) || (e = c.namespaceURI);
      return mo(e, d)
    }
  }
  var Po = No();

  function Qo(a, b) {
    for (var c = b.length, d = Array(c), e = 0; e < c; ++e) d[e] = a[b[e]];
    return d
  }

  function X(a, b, c) {
    c = u(c) ? c : {};
    var d, e;
    d = 0;
    for (e = a.length; d < e; ++d) c[a[d]] = b;
    return c
  }

  function Ro(a, b, c, d) {
    for (b = b.firstElementChild; null !== b; b = b.nextElementSibling) {
      var e = a[b.namespaceURI];
      u(e) && (e = e[b.localName], u(e) && e.call(d, b, c))
    }
  }

  function Y(a, b, c, d, e) {
    d.push(a);
    Ro(b, c, d, e);
    return d.pop()
  }

  function Oo(a, b, c, d, e, f) {
    for (var g = (u(e) ? e : c).length, h, m, n = 0; n < g; ++n) h = c[n], u(h) && (m = b.call(f, h, d, u(e) ? e[n] : void 0), u(m) && a[m.namespaceURI][m.localName].call(f, m, h, d))
  }

  function So(a, b, c, d, e, f) {
    e.push(a);
    Oo(b, c, d, e, f, void 0);
    e.pop()
  };

  function To() {}
  E(To, fo);
  l = To.prototype;
  l.A = ba("xml");
  l.tb = function(a) {
    return uo(a) ? Uo(this, a) : xo(a) ? this.je(a) : ka(a) ? (a = Ho(a), Uo(this, a)) : null
  };

  function Uo(a, b) {
    var c = Vo(a, b);
    return 0 < c.length ? c[0] : null
  }
  l.ua = function(a) {
    return uo(a) ? Vo(this, a) : xo(a) ? this.ub(a) : ka(a) ? (a = Ho(a), Vo(this, a)) : []
  };

  function Vo(a, b) {
    var c = [],
      d;
    for (d = b.firstChild; null !== d; d = d.nextSibling) 1 == d.nodeType && Sa(c, a.ub(d));
    return c
  }
  l.cd = function(a) {
    return uo(a) ? this.e(a) : xo(a) ? this.j(a) : ka(a) ? (a = Ho(a), this.e(a)) : null
  };
  l.ia = function(a) {
    return uo(a) ? this.rc(a) : xo(a) ? this.ed(a) : ka(a) ? (a = Ho(a), this.rc(a)) : null
  };
  l.qd = function(a) {
    return this.k(a)
  };
  l.wc = function(a) {
    return this.l(a)
  };
  l.rd = function(a) {
    return this.n(a)
  };

  function Wo(a) {
    a = no(a);
    return Xo(a)
  }

  function Xo(a) {
    if (a = /^\s*(true|1)|(false|0)\s*$/.exec(a)) return u(a[1]) || !1
  }

  function Yo(a) {
    a = no(a);
    if (a = /^\s*(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?))\s*$/.exec(a)) {
      var b = Date.UTC(parseInt(a[1], 10), parseInt(a[2], 10) - 1, parseInt(a[3], 10), parseInt(a[4], 10), parseInt(a[5], 10), parseInt(a[6], 10)) / 1E3;
      if ("Z" != a[7]) {
        var c = "-" == a[8] ? -1 : 1,
          b = b + 60 * c * parseInt(a[9], 10);
        u(a[10]) && (b += 3600 * c * parseInt(a[10], 10))
      }
      return b
    }
  }

  function Zo(a) {
    a = no(a);
    return $o(a)
  }

  function $o(a) {
    if (a = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(a)) return parseFloat(a[1])
  }

  function ap(a) {
    a = no(a);
    return bp(a)
  }

  function bp(a) {
    if (a = /^\s*(\d+)\s*$/.exec(a)) return parseInt(a[1], 10)
  }

  function $(a) {
    a = no(a);
    return za(a)
  }

  function cp(a, b) {
    a.appendChild(jo.createTextNode(b.toPrecision()))
  }

  function dp(a, b) {
    a.appendChild(jo.createTextNode(b.toString()))
  }

  function ep(a, b) {
    a.appendChild(jo.createTextNode(b))
  };

  function fp() {}
  E(fp, To);
  var gp = [null, "http://www.topografix.com/GPX/1/0", "http://www.topografix.com/GPX/1/1"];

  function hp(a, b, c) {
    a.push(parseFloat(b.getAttribute("lon")), parseFloat(b.getAttribute("lat")));
    "ele" in c ? (a.push(G(c, "ele")), ac(c, "ele")) : a.push(0);
    "time" in c ? (a.push(G(c, "time")), ac(c, "time")) : a.push(0);
    return a
  }

  function ip(a, b) {
    var c = b[b.length - 1],
      d = a.getAttribute("href");
    null !== d && (c.link = d);
    Ro(jp, a, b)
  }

  function kp(a, b) {
    var c = Y({
      flatCoordinates: []
    }, lp, a, b);
    if (u(c)) {
      var d = G(c, "flatCoordinates");
      ac(c, "flatCoordinates");
      var e = new Ql(null);
      Rl(e, "XYZM", d);
      d = new qe(e);
      d.T(c);
      return d
    }
  }

  function mp(a, b) {
    var c = Y({
      flatCoordinates: [],
      ends: []
    }, np, a, b);
    if (u(c)) {
      var d = G(c, "flatCoordinates");
      ac(c, "flatCoordinates");
      var e = G(c, "ends");
      ac(c, "ends");
      var f = new Sl(null);
      Tl(f, "XYZM", d, e);
      d = new qe(f);
      d.T(c);
      return d
    }
  }

  function op(a, b) {
    var c = Y({}, pp, a, b);
    if (u(c)) {
      var d = hp([], a, c),
        d = new Bf(d, "XYZM"),
        d = new qe(d);
      d.T(c);
      return d
    }
  }
  var qp = {
      rte: kp,
      trk: mp,
      wpt: op
    },
    rp = X(gp, {
      rte: Jo(kp),
      trk: Jo(mp),
      wpt: Jo(op)
    }, void 0),
    jp = X(gp, {
      text: V($, "linkText"),
      type: V($, "linkType")
    }, void 0),
    lp = X(gp, {
      name: V($),
      cmt: V($),
      desc: V($),
      src: V($),
      link: ip,
      number: V(ap),
      type: V($),
      rtept: function(a, b) {
        var c = Y({}, sp, a, b);
        u(c) && hp(G(b[b.length - 1], "flatCoordinates"), a, c)
      }
    }, void 0),
    sp = X(gp, {
      ele: V(Zo),
      time: V(Yo)
    }, void 0),
    np = X(gp, {
      name: V($),
      cmt: V($),
      desc: V($),
      src: V($),
      link: ip,
      number: V(ap),
      type: V($),
      trkseg: function(a, b) {
        var c = b[b.length - 1];
        Ro(tp, a, b);
        G(c, "ends").push(G(c,
          "flatCoordinates").length)
      }
    }, void 0),
    tp = X(gp, {
      trkpt: function(a, b) {
        var c = Y({}, up, a, b);
        u(c) && hp(G(b[b.length - 1], "flatCoordinates"), a, c)
      }
    }, void 0),
    up = X(gp, {
      ele: V(Zo),
      time: V(Yo)
    }, void 0),
    pp = X(gp, {
      ele: V(Zo),
      time: V(Yo),
      magvar: V(Zo),
      geoidheight: V(Zo),
      name: V($),
      cmt: V($),
      desc: V($),
      src: V($),
      link: ip,
      sym: V($),
      type: V($),
      fix: V($),
      sat: V(ap),
      hdop: V(Zo),
      vdop: V(Zo),
      pdop: V(Zo),
      ageofdgpsdata: V(Zo),
      dgpsid: V(ap)
    }, void 0);
  fp.prototype.je = function(a) {
    if (-1 == Ja(gp, a.namespaceURI)) return null;
    var b = qp[a.localName];
    if (!u(b)) return null;
    a = b(a, []);
    return u(a) ? a : null
  };
  fp.prototype.ub = function(a) {
    return -1 == Ja(gp, a.namespaceURI) ? [] : "gpx" == a.localName && (a = Y([], rp, a, []), u(a)) ? a : []
  };
  fp.prototype.rc = function() {
    return mg("EPSG:4326")
  };
  fp.prototype.ed = function() {
    return mg("EPSG:4326")
  };

  function vp(a, b, c) {
    a.setAttribute("href", b);
    b = G(c[c.length - 1], "properties");
    So({
      node: a
    }, wp, Po, [G(b, "linkText"), G(b, "linkType")], c, xp)
  }

  function yp(a, b, c) {
    var d = c[c.length - 1],
      e = d.node.namespaceURI,
      f = G(d, "properties");
    Go(a, null, "lat", b[1]);
    Go(a, null, "lon", b[0]);
    switch (G(d, "geometryLayout")) {
      case "XYZM":
        0 !== b[3] && (f.time = b[3]);
      case "XYZ":
        0 !== b[2] && (f.ele = b[2]);
        break;
      case "XYM":
        0 !== b[2] && (f.time = b[2])
    }
    b = zp[e];
    d = Qo(f, b);
    So({
      node: a,
      properties: f
    }, Ap, Po, d, c, b)
  }
  var xp = ["text", "type"],
    wp = X(gp, {
      text: W(ep),
      type: W(ep)
    }),
    Bp = X(gp, "name cmt desc src link number type rtept".split(" ")),
    Cp = X(gp, {
      name: W(ep),
      cmt: W(ep),
      desc: W(ep),
      src: W(ep),
      link: W(vp),
      number: W(dp),
      type: W(ep),
      rtept: Mo(W(yp))
    }),
    Dp = X(gp, "name cmt desc src link number type trkseg".split(" ")),
    Gp = X(gp, {
      name: W(ep),
      cmt: W(ep),
      desc: W(ep),
      src: W(ep),
      link: W(vp),
      number: W(dp),
      type: W(ep),
      trkseg: Mo(W(function(a, b, c) {
        So({
          node: a,
          geometryLayout: b.b,
          properties: {}
        }, Ep, Fp, b.v(), c)
      }))
    }),
    Fp = No("trkpt"),
    Ep = X(gp, {
      trkpt: W(yp)
    }),
    zp = X(gp, "ele time magvar geoidheight name cmt desc src link sym type fix sat hdop vdop pdop ageofdgpsdata dgpsid".split(" ")),
    Ap = X(gp, {
      ele: W(cp),
      time: W(function(a, b) {
        var c = new Date(1E3 * b),
          c = c.getUTCFullYear() + "-" + Ga(c.getUTCMonth() + 1) + "-" + Ga(c.getUTCDate()) + "T" + Ga(c.getUTCHours()) + ":" + Ga(c.getUTCMinutes()) + ":" + Ga(c.getUTCSeconds()) + "Z";
        a.appendChild(jo.createTextNode(c))
      }),
      magvar: W(cp),
      geoidheight: W(cp),
      name: W(ep),
      cmt: W(ep),
      desc: W(ep),
      src: W(ep),
      link: W(vp),
      sym: W(ep),
      type: W(ep),
      fix: W(ep),
      sat: W(dp),
      hdop: W(cp),
      vdop: W(cp),
      pdop: W(cp),
      ageofdgpsdata: W(cp),
      dgpsid: W(dp)
    });
  X(gp, {
    rte: W(function(a, b, c) {
      var d = b.jb();
      a = {
        node: a,
        properties: d
      };
      b = b.K();
      u(b) && (a.geometryLayout = b.b, b = b.v(), d.rtept = b);
      b = Bp[c[c.length - 1].node.namespaceURI];
      d = Qo(d, b);
      So(a, Cp, Po, d, c, b)
    }),
    trk: W(function(a, b, c) {
      var d = b.jb();
      a = {
        node: a,
        properties: d
      };
      b = b.K();
      u(b) && (b = b.Pc(), d.trkseg = b);
      b = Dp[c[c.length - 1].node.namespaceURI];
      d = Qo(d, b);
      So(a, Gp, Po, d, c, b)
    }),
    wpt: W(function(a, b, c) {
      var d = c[c.length - 1],
        e = b.jb();
      d.properties = e;
      b = b.K();
      u(b) && (d.geometryLayout = b.b, yp(a, b.v(), c))
    })
  });

  function Hp(a) {
    a = String(a);
    if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
      return eval("(" + a + ")")
    } catch (b) {}
    throw Error("Invalid JSON string: " + a);
  };

  function Ip() {}
  E(Ip, fo);

  function Jp(a) {
    return oa(a) ? a : ka(a) ? (a = I.Ae ? JSON.parse(a) : Hp(a), u(a) ? a : null) : null
  }
  l = Ip.prototype;
  l.A = ba("json");
  l.tb = function(a) {
    return Kp(Jp(a))
  };
  l.ua = function(a) {
    return this.a(Jp(a))
  };
  l.cd = function(a) {
    a = Jp(a);
    return Lp(a)
  };
  l.ia = function(a) {
    return this.d(Jp(a))
  };
  l.qd = function(a) {
    return Mp(a)
  };
  l.wc = function(a) {
    var b = [],
      c, d;
    c = 0;
    for (d = a.length; c < d; ++c) b.push(Mp(a[c]));
    return {
      type: "FeatureCollection",
      features: b
    }
  };
  l.rd = function(a) {
    return this.b(a)
  };

  function Np(a) {
    a = u(a) ? a : {};
    this.c = mg(a.defaultProjection ? a.defaultProjection : "EPSG:4326")
  }
  E(Np, Ip);

  function Lp(a) {
    return null === a ? null : (0, Op[a.type])(a)
  }

  function Pp(a) {
    return (0, Qp[a.A()])(a)
  }
  var Op = {
      Point: function(a) {
        return new Bf(a.coordinates)
      },
      LineString: function(a) {
        return new Ql(a.coordinates)
      },
      Polygon: function(a) {
        return new Jf(a.coordinates)
      },
      MultiPoint: function(a) {
        return new Vl(a.coordinates)
      },
      MultiLineString: function(a) {
        return new Sl(a.coordinates)
      },
      MultiPolygon: function(a) {
        return new Wl(a.coordinates)
      },
      GeometryCollection: function(a) {
        a = La(a.geometries, Lp);
        return new Jl(a)
      }
    },
    Qp = {
      Point: function(a) {
        return {
          type: "Point",
          coordinates: a.v()
        }
      },
      LineString: function(a) {
        return {
          type: "LineString",
          coordinates: a.v()
        }
      },
      Polygon: function(a) {
        return {
          type: "Polygon",
          coordinates: a.v()
        }
      },
      MultiPoint: function(a) {
        return {
          type: "MultiPoint",
          coordinates: a.v()
        }
      },
      MultiLineString: function(a) {
        return {
          type: "MultiLineString",
          coordinates: a.v()
        }
      },
      MultiPolygon: function(a) {
        return {
          type: "MultiPolygon",
          coordinates: a.v()
        }
      },
      GeometryCollection: function(a) {
        return {
          type: "GeometryCollection",
          geometries: La(a.a, Pp)
        }
      },
      Circle: function() {
        return {
          type: "GeometryCollection",
          geometries: []
        }
      }
    };

  function Kp(a) {
    var b = Lp(a.geometry),
      b = new qe(b);
    u(a.id) && b.b(a.id);
    u(a.properties) && b.T(a.properties);
    return b
  }
  Np.prototype.a = function(a) {
    if ("Feature" == a.type) return [Kp(a)];
    if ("FeatureCollection" == a.type) {
      var b = [];
      a = a.features;
      var c, d;
      c = 0;
      for (d = a.length; c < d; ++c) b.push(Kp(a[c]));
      return b
    }
    return []
  };
  Np.prototype.ia = function(a) {
    a = a.crs;
    return null != a ? "name" == a.type ? mg(a.properties.name) : "EPSG" == a.type ? mg("EPSG:" + a.properties.code) : null : this.c
  };

  function Mp(a) {
    var b = {
        type: "Feature"
      },
      c = a.P;
    null != c && (b.id = c);
    c = a.K();
    null != c && (c = Pp(c), b.geometry = c);
    a = a.jb();
    ac(a, "geometry");
    Zb(a) || (b.properties = a);
    return b
  }
  Np.prototype.b = Pp;

  function Rp(a) {
    a = Sp(a);
    return La(a, function(a) {
      return a.b.substring(a.c, a.a)
    })
  }

  function Tp(a, b, c, d) {
    this.b = a;
    this.c = b;
    this.a = c;
    this.d = d
  }

  function Sp(a) {
    for (var b = RegExp("\r\n|\r|\n", "g"), c = 0, d, e = []; d = b.exec(a);) c = new Tp(a, c, d.index, d.index + d[0].length), e.push(c), c = b.lastIndex;
    c < a.length && (c = new Tp(a, c, a.length, a.length), e.push(c));
    return e
  };

  function Up() {}
  E(Up, fo);
  l = Up.prototype;
  l.A = ba("text");
  l.tb = function(a) {
    return Vp(this, ka(a) ? a : "")
  };
  l.ua = function(a) {
    a = Vp(this, ka(a) ? a : "");
    return null === a ? [] : [a]
  };
  l.cd = function(a) {
    return this.c(ka(a) ? a : "")
  };
  l.ia = function() {
    return mg("EPSG:4326")
  };
  l.qd = function(a) {
    return this.b(a)
  };
  l.wc = function(a) {
    return this.d(a)
  };
  l.rd = function(a) {
    return this.e(a)
  };

  function Wp(a) {
    a = u(a) ? a : {};
    this.a = u(a.altitudeMode) ? a.altitudeMode : "none"
  }
  E(Wp, Up);
  var Xp = /^B(\d{2})(\d{2})(\d{2})(\d{2})(\d{5})([NS])(\d{3})(\d{5})([EW])([AV])(\d{5})(\d{5})/,
    Yp = /^H.([A-Z]{3}).*?:(.*)/,
    Zp = /^HFDTE(\d{2})(\d{2})(\d{2})/;

  function Vp(a, b) {
    var c = a.a,
      d = Rp(b),
      e = {},
      f = [],
      g = 2E3,
      h = 0,
      m = 1,
      n, p;
    n = 0;
    for (p = d.length; n < p; ++n) {
      var q = d[n],
        r;
      if ("B" == q.charAt(0)) {
        if (r = Xp.exec(q)) {
          var q = parseInt(r[1], 10),
            s = parseInt(r[2], 10),
            z = parseInt(r[3], 10),
            x = parseInt(r[4], 10) + parseInt(r[5], 10) / 6E4;
          "S" == r[6] && (x = -x);
          var w = parseInt(r[7], 10) + parseInt(r[8], 10) / 6E4;
          "W" == r[9] && (w = -w);
          f.push(w, x);
          "none" != c && f.push("gps" == c ? parseInt(r[11], 10) : "barometric" == c ? parseInt(r[12], 10) : 0);
          f.push(Date.UTC(g, h, m, q, s, z) / 1E3)
        }
      } else if ("H" == q.charAt(0))
        if (r = Zp.exec(q)) m =
          parseInt(r[1], 10), h = parseInt(r[2], 10) - 1, g = 2E3 + parseInt(r[3], 10);
        else if (r = Yp.exec(q)) e[r[1]] = za(r[2]), Zp.exec(q)
    }
    d = new Ql(null);
    Rl(d, "none" == c ? "XYM" : "XYZM", f);
    c = new qe(d);
    c.T(e);
    return c
  };

  function $p(a) {
    function b(a) {
      return ha(a) ? a : ka(a) ? (!(a in d) && "#" + a in d && (a = "#" + a), b(d[a])) : c
    }
    a = u(a) ? a : {};
    var c = u(a.defaultStyle) ? a.defaultStyle : aq,
      d = {};
    this.a = d;
    this.c = function() {
      var a = this.get("Style");
      if (u(a)) return a;
      a = this.get("styleUrl");
      return u(a) ? b(a) : c
    }
  }
  E($p, To);
  var bq = ["http://www.google.com/kml/ext/2.2"],
    cq = [null, "http://earth.google.com/kml/2.0", "http://earth.google.com/kml/2.1", "http://earth.google.com/kml/2.2", "http://www.opengis.net/kml/2.2"],
    dq = [255, 255, 255, 1],
    eq = new le({
      color: dq
    }),
    fq = [2, 20],
    gq = [32, 32],
    hq = new Dk({
      anchor: fq,
      anchorXUnits: "pixels",
      anchorYUnits: "pixels",
      crossOrigin: "anonymous",
      rotation: 0,
      scale: 1,
      size: gq,
      src: "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png"
    }),
    iq = new ne({
      color: dq,
      width: 1
    }),
    aq = [new pe({
      fill: eq,
      image: hq,
      text: null,
      stroke: iq,
      zIndex: 0
    })],
    jq = {
      fraction: "fraction",
      pixels: "pixels"
    };

  function kq(a) {
    a = no(a);
    if (a = /^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(a)) return a = a[1], [parseInt(a.substr(6, 2), 16), parseInt(a.substr(4, 2), 16), parseInt(a.substr(2, 2), 16), parseInt(a.substr(0, 2), 16) / 255]
  }

  function lq(a) {
    a = no(a);
    for (var b = [], c = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i, d; d = c.exec(a);) b.push(parseFloat(d[1]), parseFloat(d[2]), d[3] ? parseFloat(d[3]) : 0), a = a.substr(d[0].length);
    return "" !== a ? void 0 : b
  }

  function mq(a) {
    var b = no(a);
    return null != a.baseURI ? eh(a.baseURI, za(b)).toString() : za(b)
  }

  function nq(a, b) {
    return Y(null, oq, a, b)
  }

  function pq(a, b) {
    var c = Y({
      h: [],
      xe: []
    }, qq, a, b);
    if (u(c)) {
      var d = c.h,
        c = c.xe,
        e, f;
      e = 0;
      for (f = Math.min(d.length, c.length); e < f; ++e) d[4 * e + 3] = c[e];
      c = new Ql(null);
      Rl(c, "XYZM", d);
      return c
    }
  }

  function rq(a, b) {
    var c = Y(null, sq, a, b);
    if (u(c)) {
      var d = new Ql(null);
      Rl(d, "XYZ", c);
      return d
    }
  }

  function tq(a, b) {
    var c = Y(null, sq, a, b);
    if (u(c)) {
      var d = new Jf(null);
      Kf(d, "XYZ", c, [c.length]);
      return d
    }
  }

  function uq(a, b) {
    var c = Y([], vq, a, b);
    if (!u(c)) return null;
    if (0 === c.length) return new Jl(c);
    var d = !0,
      e = c[0].A(),
      f, g, h;
    g = 1;
    for (h = c.length; g < h; ++g)
      if (f = c[g], f.A() != e) {
        d = !1;
        break
      }
    if (d) {
      if ("Point" == e) {
        f = c[0];
        d = f.b;
        e = f.h;
        g = 1;
        for (h = c.length; g < h; ++g) f = c[g], bf(e, f.h);
        c = new Vl(null);
        gf(c, d, e);
        c.s();
        return c
      }
      return "LineString" == e ? (f = new Sl(null), Ul(f, c), f) : "Polygon" == e ? (f = new Wl(null), Yl(f, c), f) : "GeometryCollection" == e ? new Jl(c) : null
    }
    return new Jl(c)
  }

  function wq(a, b) {
    var c = Y(null, sq, a, b);
    if (null != c) {
      var d = new Bf(null);
      Cf(d, "XYZ", c);
      return d
    }
  }

  function xq(a, b) {
    var c = Y([null], yq, a, b);
    if (null != c && null !== c[0]) {
      var d = new Jf(null),
        e = c[0],
        f = [e.length],
        g, h;
      g = 1;
      for (h = c.length; g < h; ++g) bf(e, c[g]), f.push(e.length);
      Kf(d, "XYZ", e, f);
      return d
    }
  }

  function zq(a, b) {
    var c = Y({}, Aq, a, b);
    if (!u(c)) return null;
    var d = G(c, "fillStyle", eq),
      e = G(c, "fill");
    u(e) && !e && (d = null);
    var e = G(c, "imageStyle", hq),
      f = G(c, "strokeStyle", iq),
      c = G(c, "outline");
    u(c) && !c && (f = null);
    return [new pe({
      fill: d,
      image: e,
      stroke: f,
      text: null,
      zIndex: void 0
    })]
  }
  var Bq = X(cq, {
      value: Ko($)
    }, void 0),
    Dq = X(cq, {
      Data: function(a, b) {
        var c = a.getAttribute("name");
        if (null !== c) {
          var d = Y(void 0, Bq, a, b);
          u(d) && (b[b.length - 1][c] = d)
        }
      },
      SchemaData: function(a, b) {
        Ro(Cq, a, b)
      }
    }, void 0),
    oq = X(cq, {
      coordinates: Ko(lq)
    }, void 0),
    yq = X(cq, {
      innerBoundaryIs: function(a, b) {
        var c = Y(void 0, Eq, a, b);
        u(c) && b[b.length - 1].push(c)
      },
      outerBoundaryIs: function(a, b) {
        var c = Y(void 0, Fq, a, b);
        u(c) && (b[b.length - 1][0] = c)
      }
    }, void 0),
    Gq = X(bq, {
      coord: function(a, b) {
        var c = b[b.length - 1].h,
          d = no(a);
        (d = /^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(d)) ?
          c.push(parseFloat(d[1]), parseFloat(d[2]), parseFloat(d[3]), 0) : c.push(0, 0, 0, 0)
      }
    }, void 0),
    qq = X(cq, {
      when: function(a, b) {
        var c = b[b.length - 1].xe,
          d = no(a);
        if (d = /^\s*(\d{4})($|-(\d{2})($|-(\d{2})($|T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?)))))\s*$/.exec(d)) {
          var e = Date.UTC(parseInt(d[1], 10), u(d[3]) ? parseInt(d[3], 10) - 1 : 0, u(d[5]) ? parseInt(d[5], 10) : 1, u(d[7]) ? parseInt(d[7], 10) : 0, u(d[8]) ? parseInt(d[8], 10) : 0, u(d[9]) ? parseInt(d[9], 10) : 0);
          if (u(d[10]) && "Z" != d[10]) {
            var f = "-" == d[11] ? -1 : 1,
              e = e + 60 * f * parseInt(d[12],
                10);
            u(d[13]) && (e += 3600 * f * parseInt(d[13], 10))
          }
          c.push(e)
        } else c.push(0)
      }
    }, Gq),
    sq = X(cq, {
      coordinates: Ko(lq)
    }, void 0),
    Hq = X(cq, {
      href: V(mq)
    }, void 0),
    Iq = X(cq, {
      Icon: V(function(a, b) {
        var c = Y({}, Hq, a, b);
        return u(c) ? c : null
      }),
      heading: V(Zo),
      hotSpot: V(function(a) {
        var b = a.getAttribute("xunits"),
          c = a.getAttribute("yunits");
        return {
          x: parseFloat(a.getAttribute("x")),
          zi: jq[b],
          y: parseFloat(a.getAttribute("y")),
          Ai: jq[c]
        }
      }),
      scale: V(function(a) {
        a = Zo(a);
        if (u(a)) return Math.sqrt(a)
      })
    }, void 0),
    Eq = X(cq, {
      LinearRing: Ko(nq)
    }, void 0),
    Jq = X(cq, {
      color: V(kq),
      width: V(Zo)
    }, void 0),
    vq = X(cq, {
      LineString: Jo(rq),
      LinearRing: Jo(tq),
      MultiGeometry: Jo(uq),
      Point: Jo(wq),
      Polygon: Jo(xq)
    }, void 0),
    Kq = X(bq, {
      Track: Jo(pq)
    }, void 0),
    Fq = X(cq, {
      LinearRing: Ko(nq)
    }, void 0),
    Lq = X(cq, {
      Style: V(zq),
      key: V($),
      styleUrl: V(function(a) {
        var b = za(no(a));
        return null != a.baseURI ? eh(a.baseURI, b).toString() : b
      })
    }, void 0),
    Nq = {
      ExtendedData: function(a, b) {
        Ro(Dq, a, b)
      },
      MultiGeometry: V(uq, "geometry"),
      LineString: V(rq, "geometry"),
      LinearRing: V(tq, "geometry"),
      Point: V(wq, "geometry"),
      Polygon: V(xq,
        "geometry"),
      Style: V(zq),
      StyleMap: function(a, b) {
        var c = Y(void 0, Mq, a, b);
        if (u(c)) {
          var d = b[b.length - 1];
          ha(c) ? d.Style = c : ka(c) && (d.styleUrl = c)
        }
      },
      address: V($),
      description: V($),
      name: V($),
      open: V(Wo),
      phoneNumber: V($),
      styleUrl: V(mq),
      visibility: V(Wo)
    },
    Oq = X(bq, {
      MultiTrack: V(function(a, b) {
        var c = Y([], Kq, a, b);
        if (u(c)) {
          var d = new Sl(null);
          Ul(d, c);
          return d
        }
      }, "geometry"),
      Track: V(pq, "geometry")
    }, void 0),
    Pq = X(cq, Nq, Oq),
    Qq = X(cq, {
      color: V(kq),
      fill: V(Wo),
      outline: V(Wo)
    }, void 0),
    Cq = X(cq, {
      SimpleData: function(a, b) {
        var c = a.getAttribute("name");
        if (null !== c) {
          var d = $(a);
          b[b.length - 1][c] = d
        }
      }
    }, void 0),
    Aq = X(cq, {
      IconStyle: function(a, b) {
        var c = Y({}, Iq, a, b);
        if (u(c)) {
          var d = b[b.length - 1],
            e;
          e = G(G(c, "Icon", {}), "href");
          e = u(e) ? e : "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png";
          var f, g, h, m = G(c, "hotSpot");
          u(m) ? (f = [m.x, m.y], g = m.zi, h = m.Ai) : "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png" === e ? (f = fq, h = g = "pixels") : /^http:\/\/maps\.(?:google|gstatic)\.com\//.test(e) && (f = [0.5, 0], h = g = "fraction");
          var n, m = G(c, "heading");
          u(m) && (n = Qb(m));
          var c = G(c, "scale"),
            p;
          "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png" == e && (p = gq);
          f = new Dk({
            anchor: f,
            anchorOrigin: "bottom-left",
            anchorXUnits: g,
            anchorYUnits: h,
            crossOrigin: "anonymous",
            rotation: n,
            scale: c,
            size: p,
            src: e
          });
          d.imageStyle = f
        }
      },
      LineStyle: function(a, b) {
        var c = Y({}, Jq, a, b);
        u(c) && (b[b.length - 1].strokeStyle = new ne({
          color: G(c, "color", dq),
          width: G(c, "width", 1)
        }))
      },
      PolyStyle: function(a, b) {
        var c = Y({}, Qq, a, b);
        if (u(c)) {
          var d = b[b.length - 1];
          d.fillStyle = new le({
            color: G(c, "color", dq)
          });
          var e = G(c,
            "fill");
          u(e) && (d.fill = e);
          c = G(c, "outline");
          u(c) && (d.outline = c)
        }
      }
    }, void 0),
    Mq = X(cq, {
      Pair: function(a, b) {
        var c = Y({}, Lq, a, b);
        if (u(c)) {
          var d = G(c, "key");
          u(d) && "normal" == d && (d = G(c, "styleUrl"), u(d) && (b[b.length - 1] = d), c = G(c, "Style"), u(c) && (b[b.length - 1] = c))
        }
      }
    }, void 0);
  l = $p.prototype;
  l.ie = function(a, b) {
    ro(a);
    var c;
    c = {
      Folder: Io(this.ie, this),
      Placemark: Jo(this.dd, this),
      Style: y(this.Uh, this),
      StyleMap: y(this.Th, this)
    };
    c = X(cq, c, void 0);
    c = Y([], c, a, b, this);
    if (u(c)) return c
  };
  l.dd = function(a, b) {
    var c = Y({
      geometry: null
    }, Pq, a, b);
    if (u(c)) {
      var d = new qe,
        e = a.getAttribute("id");
      null === e || d.b(e);
      d.T(c);
      d.j(this.c);
      return d
    }
  };
  l.Uh = function(a, b) {
    var c = a.getAttribute("id");
    if (null !== c) {
      var d = zq(a, b);
      u(d) && (c = null != a.baseURI ? eh(a.baseURI, "#" + c).toString() : "#" + c, this.a[c] = d)
    }
  };
  l.Th = function(a, b) {
    var c = a.getAttribute("id");
    if (null !== c) {
      var d = Y(void 0, Mq, a, b);
      u(d) && (c = null != a.baseURI ? eh(a.baseURI, "#" + c).toString() : "#" + c, this.a[c] = d)
    }
  };
  l.je = function(a) {
    if (-1 == Ja(cq, a.namespaceURI)) return null;
    a = this.dd(a, []);
    return u(a) ? a : null
  };
  l.ub = function(a) {
    if (-1 == Ja(cq, a.namespaceURI)) return [];
    var b;
    b = ro(a);
    if ("Document" == b || "Folder" == b) return b = this.ie(a, []), u(b) ? b : [];
    if ("Placemark" == b) return b = this.dd(a, []), u(b) ? [b] : [];
    if ("kml" == b) {
      b = [];
      for (a = a.firstElementChild; null !== a; a = a.nextElementSibling) {
        var c = this.ub(a);
        u(c) && Sa(b, c)
      }
      return b
    }
    return []
  };
  l.Sh = function(a) {
    if (uo(a)) return Rq(this, a);
    if (xo(a)) return Sq(this, a);
    if (ka(a)) return a = Ho(a), Rq(this, a)
  };

  function Rq(a, b) {
    var c;
    for (c = b.firstChild; null !== c; c = c.nextSibling)
      if (1 == c.nodeType) {
        var d = Sq(a, c);
        if (u(d)) return d
      }
  }

  function Sq(a, b) {
    var c;
    for (c = b.firstElementChild; null !== c; c = c.nextElementSibling)
      if (-1 != Ja(cq, c.namespaceURI) && "name" == c.localName) return $(c);
    for (c = b.firstElementChild; null !== c; c = c.nextElementSibling) {
      var d = ro(c);
      if (-1 != Ja(cq, c.namespaceURI) && ("Document" == d || "Folder" == d || "Placemark" == d || "kml" == d) && (d = Sq(a, c), u(d))) return d
    }
  }
  l.rc = function() {
    return mg("EPSG:4326")
  };
  l.ed = function() {
    return mg("EPSG:4326")
  };

  function Tq(a) {
    this.c = mg((u(a) ? a : {}).defaultProjection || "EPSG:4326")
  }
  E(Tq, Ip);

  function Uq(a, b) {
    var c = [],
      d, e, f;
    e = 0;
    for (f = a.length; e < f; ++e) d = a[e], 0 < e && c.pop(), d = 0 <= d ? b[d] : b[~d].slice().reverse(), c.push.apply(c, d);
    e = 0;
    for (f = c.length; e < f; ++e) c[e] = c[e].slice();
    return c
  }

  function Vq(a, b, c, d) {
    a = a.geometries;
    var e = [],
      f, g;
    f = 0;
    for (g = a.length; f < g; ++f) e[f] = Wq(a[f], b, c, d);
    return e
  }

  function Wq(a, b, c, d) {
    var e = a.type,
      f = Xq[e];
    b = "Point" === e || "MultiPoint" === e ? f(a, c, d) : f(a, b);
    c = new qe;
    c.cb(b);
    u(a.id) && c.b(a.id);
    u(a.properties) && c.T(a.properties);
    return c
  }
  Tq.prototype.a = function(a) {
    if ("Topology" == a.type) {
      var b, c = null,
        d = null;
      u(a.transform) && (b = a.transform, c = b.scale, d = b.translate);
      var e = a.arcs;
      if (u(b)) {
        b = c;
        var f = d,
          g, h;
        g = 0;
        for (h = e.length; g < h; ++g)
          for (var m = e[g], n = b, p = f, q = 0, r = 0, s = void 0, z = void 0, x = void 0, z = 0, x = m.length; z < x; ++z) s = m[z], q += s[0], r += s[1], s[0] = q, s[1] = r, Yq(s, n, p)
      }
      b = [];
      a = Xb(a.objects);
      f = 0;
      for (g = a.length; f < g; ++f) "GeometryCollection" === a[f].type ? (h = a[f], b.push.apply(b, Vq(h, e, c, d))) : (h = a[f], b.push(Wq(h, e, c, d)));
      return b
    }
    return []
  };

  function Yq(a, b, c) {
    a[0] = a[0] * b[0] + c[0];
    a[1] = a[1] * b[1] + c[1]
  }
  Tq.prototype.ia = k("c");
  var Xq = {
    Point: function(a, b, c) {
      a = a.coordinates;
      null === b || null === c || Yq(a, b, c);
      return new Bf(a)
    },
    LineString: function(a, b) {
      var c = Uq(a.arcs, b);
      return new Ql(c)
    },
    Polygon: function(a, b) {
      var c = [],
        d, e;
      d = 0;
      for (e = a.arcs.length; d < e; ++d) c[d] = Uq(a.arcs[d], b);
      return new Jf(c)
    },
    MultiPoint: function(a, b, c) {
      a = a.coordinates;
      var d, e;
      if (null !== b && null !== c)
        for (d = 0, e = a.length; d < e; ++d) Yq(a[d], b, c);
      return new Vl(a)
    },
    MultiLineString: function(a, b) {
      var c = [],
        d, e;
      d = 0;
      for (e = a.arcs.length; d < e; ++d) c[d] = Uq(a.arcs[d], b);
      return new Sl(c)
    },
    MultiPolygon: function(a, b) {
      var c = [],
        d, e, f, g, h, m;
      h = 0;
      for (m = a.arcs.length; h < m; ++h) {
        d = a.arcs[h];
        e = [];
        f = 0;
        for (g = d.length; f < g; ++f) e[f] = Uq(d[f], b);
        c[h] = e
      }
      return new Wl(c)
    }
  };
  var Zq = {
    "http://www.opengis.net/gml": {
      featureMembers: Ko(function(a, b) {
        var c = ro(a),
          d = b[0],
          e = G(d, "featureType"),
          f;
        "FeatureCollection" == c ? f = Y(null, Zq, a, b) : "featureMembers" == c && (c = {}, f = {}, c[e] = Jo($q), f[G(d, "featureNS")] = c, f = Y([], f, a, b));
        u(f) || (f = []);
        return f
      })
    }
  };

  function ar(a, b) {
    var c = a.firstElementChild.getAttribute("srsName");
    b[0].srsName = c;
    c = Y(null, br, a, b);
    if (null != c) return c
  }

  function $q(a, b) {
    var c, d = a.getAttribute("fid") || Bo(a, "http://www.opengis.net/gml", "id"),
      e = {},
      f;
    for (c = a.firstElementChild; null !== c; c = c.nextElementSibling)
      if (0 === c.childNodes.length || 1 === c.childNodes.length && 3 === c.firstChild.nodeType) {
        var g = no(c);
        /^[\s\xa0]*$/.test(g) && (g = void 0);
        e[ro(c)] = g
      } else f = ro(c), e[f] = ar(c, b);
    c = new qe(e);
    u(f) && c.k(f);
    d && c.b(d);
    return c
  }

  function cr(a, b) {
    Ro(dr, a, b)
  }

  function er(a, b) {
    Ro(fr, a, b)
  }

  function gr(a, b) {
    Ro(hr, a, b)
  }

  function ir(a, b) {
    Ro(jr, a, b)
  }

  function kr(a, b) {
    Ro(lr, a, b)
  }

  function mr(a, b) {
    var c = nr(a, b);
    if (null != c) {
      var d = new Ql(null);
      Rl(d, "XYZ", c);
      return d
    }
  }

  function or(a, b) {
    var c = Y([null], pr, a, b);
    if (u(c) && null !== c[0]) {
      var d = new Jf(null),
        e = c[0],
        f = [e.length],
        g, h;
      g = 1;
      for (h = c.length; g < h; ++g) bf(e, c[g]), f.push(e.length);
      Kf(d, "XYZ", e, f);
      return d
    }
  }

  function qr(a, b) {
    var c = Y([null], rr, a, b);
    if (u(c) && null !== c[0]) {
      var d = new Jf(null),
        e = c[0],
        f = [e.length],
        g, h;
      g = 1;
      for (h = c.length; g < h; ++g) bf(e, c[g]), f.push(e.length);
      Kf(d, "XYZ", e, f);
      return d
    }
  }

  function sr(a, b) {
    var c = Y([null], tr, a, b);
    if (u(c)) {
      var d = new Ql(null);
      Rl(d, "XYZ", c);
      return d
    }
  }

  function nr(a, b) {
    return Y(null, ur, a, b)
  }

  function vr(a, b) {
    var c = no(a).replace(/^\s*|\s*$/g, ""),
      d = G(b[0], "srsName"),
      e = a.parentNode.getAttribute("srsDimension"),
      f = "enu";
    null === d || (f = Tf(mg(d)));
    c = c.split(/\s+/);
    d = 2;
    ga(a.getAttribute("srsDimension")) ? ga(a.getAttribute("dimension")) ? null === e || (d = bp(e)) : d = bp(a.getAttribute("dimension")) : d = bp(a.getAttribute("srsDimension"));
    for (var g, h, m = [], n = 0, p = c.length; n < p; n += d) e = parseFloat(c[n]), g = parseFloat(c[n + 1]), h = 3 === d ? parseFloat(c[n + 2]) : 0, "en" === f.substr(0, 2) ? m.push(e, g, h) : m.push(g, e, h);
    return m
  }
  var br = {
      "http://www.opengis.net/gml": {
        Point: Ko(function(a, b) {
          var c = nr(a, b);
          if (null != c) {
            var d = new Bf(null);
            Cf(d, "XYZ", c);
            return d
          }
        }),
        MultiPoint: Ko(function(a, b) {
          var c = Y([], wr, a, b);
          if (u(c)) return new Vl(c)
        }),
        LineString: Ko(mr),
        MultiLineString: Ko(function(a, b) {
          var c = Y([], xr, a, b);
          if (u(c)) {
            var d = new Sl(null);
            Ul(d, c);
            return d
          }
        }),
        LinearRing: Ko(function(a, b) {
          var c = nr(a, b);
          if (u(c)) {
            var d = new zf(null);
            Af(d, "XYZ", c);
            return d
          }
        }),
        Polygon: Ko(or),
        MultiPolygon: Ko(function(a, b) {
          var c = Y([], yr, a, b);
          if (u(c)) {
            var d = new Wl(null);
            Yl(d, c);
            return d
          }
        }),
        Surface: Ko(qr),
        MultiSurface: Ko(function(a, b) {
          var c = Y([], zr, a, b);
          if (u(c)) {
            var d = new Wl(null);
            Yl(d, c);
            return d
          }
        }),
        Curve: Ko(sr),
        MultiCurve: Ko(function(a, b) {
          var c = Y([], Ar, a, b);
          if (u(c)) {
            var d = new Sl(null);
            Ul(d, c);
            return d
          }
        }),
        Envelope: Ko(function(a, b) {
          var c = Y([null], Br, a, b);
          return He(c[1][0], c[1][1], c[2][0], c[2][1])
        })
      }
    },
    ur = {
      "http://www.opengis.net/gml": {
        pos: Ko(function(a, b) {
          for (var c = no(a), d = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*/, e = [], f; f = d.exec(c);) e.push(parseFloat(f[1])), c = c.substr(f[0].length);
          if ("" === c) {
            c = G(b[0], "srsName");
            d = "enu";
            null === c || (d = Tf(mg(c)));
            if ("neu" === d)
              for (c = 0, d = e.length; c < d; c += 3) f = e[c], e[c] = e[c + 1], e[c + 1] = f;
            c = e.length;
            2 == c && e.push(0);
            return 0 === c ? void 0 : e
          }
        }),
        posList: Ko(vr)
      }
    },
    pr = {
      "http://www.opengis.net/gml": {
        interior: function(a, b) {
          var c = Y(void 0, Cr, a, b);
          u(c) && b[b.length - 1].push(c)
        },
        exterior: function(a, b) {
          var c = Y(void 0, Cr, a, b);
          u(c) && (b[b.length - 1][0] = c)
        }
      }
    },
    wr = {
      "http://www.opengis.net/gml": {
        pointMember: Jo(cr),
        pointMembers: Jo(cr)
      }
    },
    xr = {
      "http://www.opengis.net/gml": {
        lineStringMember: Jo(er),
        lineStringMembers: Jo(er)
      }
    },
    Ar = {
      "http://www.opengis.net/gml": {
        curveMember: Jo(gr),
        curveMembers: Jo(gr)
      }
    },
    zr = {
      "http://www.opengis.net/gml": {
        surfaceMember: Jo(ir),
        surfaceMembers: Jo(ir)
      }
    },
    yr = {
      "http://www.opengis.net/gml": {
        polygonMember: Jo(kr),
        polygonMembers: Jo(kr)
      }
    },
    dr = {
      "http://www.opengis.net/gml": {
        Point: Jo(nr)
      }
    },
    fr = {
      "http://www.opengis.net/gml": {
        LineString: Jo(mr)
      }
    },
    hr = {
      "http://www.opengis.net/gml": {
        LineString: Jo(mr),
        Curve: Jo(sr)
      }
    },
    jr = {
      "http://www.opengis.net/gml": {
        Polygon: Jo(or),
        Surface: Jo(qr)
      }
    },
    lr = {
      "http://www.opengis.net/gml": {
        Polygon: Jo(or)
      }
    },
    rr = {
      "http://www.opengis.net/gml": {
        patches: Ko(function(a, b) {
          return Y([null], Dr, a, b)
        })
      }
    },
    tr = {
      "http://www.opengis.net/gml": {
        segments: Ko(function(a, b) {
          return Y([null], Er, a, b)
        })
      }
    },
    Br = {
      "http://www.opengis.net/gml": {
        lowerCorner: Jo(vr),
        upperCorner: Jo(vr)
      }
    },
    Dr = {
      "http://www.opengis.net/gml": {
        PolygonPatch: Ko(function(a, b) {
          return Y([null], pr, a, b)
        })
      }
    },
    Er = {
      "http://www.opengis.net/gml": {
        LineStringSegment: Ko(function(a, b) {
          return Y([null], ur, a, b)
        })
      }
    },
    Cr = {
      "http://www.opengis.net/gml": {
        LinearRing: Ko(function(a, b) {
          var c =
            Y(null, ur, a, b);
          if (null != c) return c
        })
      }
    };

  function Fr(a, b, c) {
    c = G(c[c.length - 1], "srsName");
    b = b.v();
    for (var d = b.length, e = Array(d), f, g = 0; g < d; ++g) {
      f = b[g];
      var h = e,
        m = g,
        n = "enu";
      null != c && (n = Tf(mg(c)));
      h[m] = "en" === n.substr(0, 2) ? f[0] + " " + f[1] : f[1] + " " + f[0]
    }
    ep(a, e.join(" "))
  }

  function Gr(a, b, c) {
    var d = G(c[c.length - 1], "srsName");
    null != d && a.setAttribute("srsName", d);
    d = mo(a.namespaceURI, "pos");
    a.appendChild(d);
    c = G(c[c.length - 1], "srsName");
    a = "enu";
    null != c && (a = Tf(mg(c)));
    b = b.v();
    ep(d, "en" === a.substr(0, 2) ? b[0] + " " + b[1] : b[1] + " " + b[0])
  }
  var Hr = {
    "http://www.opengis.net/gml": {
      lowerCorner: W(ep),
      upperCorner: W(ep)
    }
  };

  function Ir(a, b, c) {
    var d = G(c[c.length - 1], "srsName");
    null != d && a.setAttribute("srsName", d);
    d = mo(a.namespaceURI, "posList");
    a.appendChild(d);
    Fr(d, b, c)
  }

  function Jr(a, b) {
    var c = b[b.length - 1],
      d = c.node,
      e = G(c, "exteriorWritten");
    u(e) || (c.exteriorWritten = !0);
    return mo(d.namespaceURI, u(e) ? "interior" : "exterior")
  }

  function Kr(a, b, c) {
    var d = G(c[c.length - 1], "srsName");
    "PolygonPatch" !== a.nodeName && null != d && a.setAttribute("srsName", d);
    "Polygon" === a.nodeName || "PolygonPatch" === a.nodeName ? (b = b.Id(), So({
      node: a,
      srsName: d
    }, Lr, Jr, b, c)) : "Surface" === a.nodeName && (d = mo(a.namespaceURI, "patches"), a.appendChild(d), a = mo(d.namespaceURI, "PolygonPatch"), d.appendChild(a), Kr(a, b, c))
  }

  function Mr(a, b, c) {
    var d = G(c[c.length - 1], "srsName");
    "LineStringSegment" !== a.nodeName && null != d && a.setAttribute("srsName", d);
    "LineString" === a.nodeName || "LineStringSegment" === a.nodeName ? (d = mo(a.namespaceURI, "posList"), a.appendChild(d), Fr(d, b, c)) : "Curve" === a.nodeName && (d = mo(a.namespaceURI, "segments"), a.appendChild(d), a = mo(d.namespaceURI, "LineStringSegment"), d.appendChild(a), Mr(a, b, c))
  }

  function Nr(a, b, c) {
    var d = c[c.length - 1],
      e = G(d, "srsName"),
      d = G(d, "surface");
    null != e && a.setAttribute("srsName", e);
    b = b.Kd();
    So({
      node: a,
      srsName: e,
      surface: d
    }, Or, Pr, b, c)
  }

  function Qr(a, b, c) {
    var d = c[c.length - 1],
      e = G(d, "srsName"),
      d = G(d, "curve");
    null != e && a.setAttribute("srsName", e);
    b = b.Pc();
    So({
      node: a,
      srsName: e,
      curve: d
    }, Rr, Pr, b, c)
  }

  function Sr(a, b, c) {
    var d = mo(a.namespaceURI, "LinearRing");
    a.appendChild(d);
    Ir(d, b, c)
  }

  function Tr(a, b, c) {
    var d = Ur(b, c);
    u(d) && (a.appendChild(d), Kr(d, b, c))
  }

  function Vr(a, b, c) {
    var d = Ur(b, c);
    u(d) && (a.appendChild(d), Mr(d, b, c))
  }

  function Wr(a, b, c) {
    var d = cc(c[c.length - 1]);
    d.node = a;
    So(d, Xr, Ur, [b], c)
  }
  var Or = {
      "http://www.opengis.net/gml": {
        surfaceMember: W(Tr),
        polygonMember: W(Tr)
      }
    },
    Yr = {
      "http://www.opengis.net/gml": {
        pointMember: W(function(a, b, c) {
          var d = mo(a.namespaceURI, "Point");
          a.appendChild(d);
          Gr(d, b, c)
        })
      }
    },
    Rr = {
      "http://www.opengis.net/gml": {
        lineStringMember: W(Vr),
        curveMember: W(Vr)
      }
    },
    Lr = {
      "http://www.opengis.net/gml": {
        exterior: W(Sr),
        interior: W(Sr)
      }
    },
    Xr = {
      "http://www.opengis.net/gml": {
        Curve: W(Mr),
        MultiCurve: W(Qr),
        Point: W(Gr),
        MultiPoint: W(function(a, b, c) {
          var d = G(c[c.length - 1], "srsName");
          null != d && a.setAttribute("srsName",
            d);
          b = b.Jd();
          So({
            node: a,
            srsName: d
          }, Yr, No("pointMember"), b, c)
        }),
        LineString: W(Mr),
        MultiLineString: W(Qr),
        LinearRing: W(Ir),
        Polygon: W(Kr),
        MultiPolygon: W(Nr),
        Surface: W(Kr),
        MultiSurface: W(Nr),
        Envelope: W(function(a, b, c) {
          var d = G(c[c.length - 1], "srsName");
          u(d) && a.setAttribute("srsName", d);
          So({
            node: a
          }, Hr, Po, [b[0] + " " + b[1], b[2] + " " + b[3]], c, ["lowerCorner", "upperCorner"])
        })
      }
    },
    Zr = {
      MultiLineString: "lineStringMember",
      MultiCurve: "curveMember",
      MultiPolygon: "polygonMember",
      MultiSurface: "surfaceMember"
    };

  function Pr(a, b) {
    return mo("http://www.opengis.net/gml", Zr[b[b.length - 1].node.nodeName])
  }

  function Ur(a, b) {
    var c = b[b.length - 1],
      d = G(c, "multiSurface"),
      e = G(c, "surface"),
      f = G(c, "curve"),
      c = G(c, "multiCurve"),
      g;
    ha(a) ? g = "Envelope" : (g = a.A(), "MultiPolygon" === g && !0 === d ? g = "MultiSurface" : "Polygon" === g && !0 === e ? g = "Surface" : "LineString" === g && !0 === f ? g = "Curve" : "MultiLineString" === g && !0 === c && (g = "MultiCurve"));
    return mo("http://www.opengis.net/gml", g)
  };

  function $r(a) {
    a = u(a) ? a : {};
    this.b = a.featureType;
    this.a = a.featureNS;
    this.c = u(a.schemaLocation) ? a.schemaLocation : "http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd"
  }
  E($r, To);
  $r.prototype.ub = function(a) {
    a = Y(null, Zq, a, [{
      featureType: this.b,
      featureNS: this.a
    }]);
    u(a) || (a = []);
    return a
  };
  $r.prototype.f = function(a) {
    if (uo(a)) return as(a);
    if (xo(a)) return Y({}, bs, a, []);
    if (ka(a)) return a = Ho(a), as(a)
  };
  $r.prototype.d = function(a) {
    if (uo(a)) return cs(a);
    if (xo(a)) return ds(a);
    if (ka(a)) return a = Ho(a), cs(a)
  };

  function cs(a) {
    for (a = a.firstChild; null !== a; a = a.nextSibling)
      if (1 == a.nodeType) return ds(a)
  }
  var es = {
    "http://www.opengis.net/gml": {
      boundedBy: V(ar, "bounds")
    }
  };

  function ds(a) {
    var b = {},
      c = bp(a.getAttribute("numberOfFeatures"));
    b.numberOfFeatures = c;
    return Y(b, es, a, [])
  }
  var fs = {
      "http://www.opengis.net/wfs": {
        totalInserted: V(ap),
        totalUpdated: V(ap),
        totalDeleted: V(ap)
      }
    },
    gs = {
      "http://www.opengis.net/ogc": {
        FeatureId: Jo(function(a) {
          return a.getAttribute("fid")
        })
      }
    },
    hs = {
      "http://www.opengis.net/wfs": {
        Feature: function(a, b) {
          Ro(gs, a, b)
        }
      }
    },
    bs = {
      "http://www.opengis.net/wfs": {
        TransactionSummary: V(function(a, b) {
          return Y({}, fs, a, b)
        }, "transactionSummary"),
        InsertResults: V(function(a, b) {
          return Y([], hs, a, b)
        }, "insertIds")
      }
    };

  function as(a) {
    for (a = a.firstChild; null !== a; a = a.nextSibling)
      if (1 == a.nodeType) return Y({}, bs, a, [])
  }
  var is = {
    "http://www.opengis.net/wfs": {
      PropertyName: W(ep)
    }
  };

  function js(a, b) {
    var c = mo("http://www.opengis.net/ogc", "Filter"),
      d = mo("http://www.opengis.net/ogc", "FeatureId");
    c.appendChild(d);
    d.setAttribute("fid", b);
    a.appendChild(c)
  }
  var ks = {
      "http://www.opengis.net/wfs": {
        Insert: W(function(a, b, c) {
          var d = c[c.length - 1],
            d = mo(G(d, "featureNS"), G(d, "featureType"));
          a.appendChild(d);
          a = b.P;
          u(a) && d.setAttribute("fid", a);
          a = c[c.length - 1];
          var e = G(a, "featureNS"),
            f = b.a;
          u(a.bb) || (a.bb = {}, a.bb[e] = {});
          var g = b.jb();
          b = [];
          var h = [],
            m;
          for (m in g) {
            var n = g[m];
            null !== n && (b.push(m), h.push(n), m == f ? m in a.bb[e] || (a.bb[e][m] = W(Wr)) : m in a.bb[e] || (a.bb[e][m] = W(ep)))
          }
          m = cc(a);
          m.node = d;
          So(m, a.bb, No(void 0, e), h, c, b)
        }),
        Update: W(function(a, b, c) {
          var d = c[c.length - 1];
          a.setAttribute("typeName", G(d, "featurePrefix") + ":" + G(d, "featureType"));
          d = b.P;
          if (u(d)) {
            for (var e = b.pa(), f = [], g = 0, h = e.length; g < h; g++) {
              var m = b.get(e[g]);
              u(m) && f.push({
                name: e[g],
                value: m
              })
            }
            So({
              node: a
            }, ks, No("Property"), f, c);
            js(a, d)
          }
        }),
        Delete: W(function(a, b, c) {
          c = c[c.length - 1];
          a.setAttribute("typeName", G(c, "featurePrefix") + ":" + G(c, "featureType"));
          b = b.P;
          u(b) && js(a, b)
        }),
        Property: W(function(a, b, c) {
          var d = mo("http://www.opengis.net/wfs", "Name");
          a.appendChild(d);
          ep(d, b.name);
          null != b.value && (d = mo("http://www.opengis.net/wfs",
            "Value"), a.appendChild(d), b.value instanceof Md ? Wr(d, b.value, c) : ep(d, b.value))
        }),
        Native: W(function(a, b) {
          u(b.si) && a.setAttribute("vendorId", b.si);
          u(b.ci) && a.setAttribute("safeToIgnore", b.ci);
          u(b.value) && ep(a, b.value)
        })
      }
    },
    ls = {
      "http://www.opengis.net/wfs": {
        Query: W(function(a, b, c) {
          var d = c[c.length - 1],
            e = G(d, "featurePrefix"),
            f = G(d, "featureNS"),
            g = G(d, "propertyNames"),
            h = G(d, "srsName");
          a.setAttribute("typeName", (u(e) ? e + ":" : "") + b);
          u(h) && a.setAttribute("srsName", h);
          u(f) && a.setAttribute("xmlns:" + e, f);
          b = cc(d);
          b.node = a;
          So(b, is, No("PropertyName"), g, c);
          d = G(d, "bbox");
          u(d) && (g = mo("http://www.opengis.net/ogc", "Filter"), b = G(c[c.length - 1], "geometryName"), e = mo("http://www.opengis.net/ogc", "BBOX"), g.appendChild(e), f = mo("http://www.opengis.net/ogc", "PropertyName"), ep(f, b), e.appendChild(f), Wr(e, d, c), a.appendChild(g))
        })
      }
    };
  $r.prototype.i = function(a) {
    var b = mo("http://www.opengis.net/wfs", "GetFeature");
    b.setAttribute("service", "WFS");
    b.setAttribute("version", "1.1.0");
    u(a) && (u(a.handle) && b.setAttribute("handle", a.handle), u(a.outputFormat) && b.setAttribute("outputFormat", a.outputFormat), u(a.maxFeatures) && b.setAttribute("maxFeatures", a.maxFeatures), u(a.resultType) && b.setAttribute("resultType", a.resultType), u(a.gi) && b.setAttribute("startIndex", a.gi), u(a.count) && b.setAttribute("count", a.count));
    Go(b, "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:schemaLocation", this.c);
    var c = a.featureTypes;
    a = [{
      node: b,
      srsName: a.srsName,
      featureNS: u(a.featureNS) ? a.featureNS : this.a,
      featurePrefix: a.featurePrefix,
      geometryName: a.geometryName,
      bbox: a.bbox,
      he: u(a.he) ? a.he : []
    }];
    var d = cc(a[a.length - 1]);
    d.node = b;
    So(d, ls, No("Query"), c, a);
    return b
  };
  $r.prototype.g = function(a, b, c, d) {
    var e = [],
      f = mo("http://www.opengis.net/wfs", "Transaction");
    f.setAttribute("service", "WFS");
    f.setAttribute("version", "1.1.0");
    u(d) && u(d.handle) && f.setAttribute("handle", d.handle);
    Go(f, "http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.c);
    null != a && So({
      node: f,
      featureNS: d.featureNS,
      featureType: d.featureType
    }, ks, No("Insert"), a, e);
    null != b && So({
      node: f,
      featureNS: d.featureNS,
      featureType: d.featureType,
      featurePrefix: d.featurePrefix
    }, ks, No("Update"), b, e);
    null !=
      c && So({
        node: f,
        featureNS: d.featureNS,
        featureType: d.featureType,
        featurePrefix: d.featurePrefix
      }, ks, No("Delete"), c, e);
    u(d.nativeElements) && So({
      node: f,
      featureNS: d.featureNS,
      featureType: d.featureType,
      featurePrefix: d.featurePrefix
    }, ks, No("Native"), d.nativeElements, e);
    return f
  };

  function ms(a) {
    return a.getAttributeNS("http://www.w3.org/1999/xlink", "href")
  };

  function ns() {}
  ns.prototype.a = function(a) {
    return uo(a) ? os(this, a) : xo(a) ? ps(this, a) : ka(a) ? (a = Ho(a), os(this, a)) : null
  };

  function qs() {
    this.version = void 0
  }
  E(qs, ns);

  function os(a, b) {
    for (var c = b.firstChild; null !== c; c = c.nextSibling)
      if (1 == c.nodeType) return ps(a, c);
    return null
  }

  function ps(a, b) {
    a.version = za(b.getAttribute("version"));
    var c = Y({
      version: a.version
    }, rs, b, []);
    return u(c) ? c : null
  }

  function ss(a, b) {
    return Y({}, ts, a, b)
  }

  function us(a, b) {
    return Y({}, vs, a, b)
  }

  function ws(a, b) {
    var c = ss(a, b);
    if (u(c)) {
      var d = [bp(a.getAttribute("width")), bp(a.getAttribute("height"))];
      c.size = d;
      return c
    }
  }

  function xs(a, b) {
    return Y([], ys, a, b)
  }
  var zs = [null, "http://www.opengis.net/wms"],
    rs = X(zs, {
      Service: V(function(a, b) {
        return Y({}, As, a, b)
      }),
      Capability: V(function(a, b) {
        return Y({}, Bs, a, b)
      })
    }, void 0),
    Bs = X(zs, {
      Request: V(function(a, b) {
        return Y({}, Cs, a, b)
      }),
      Exception: V(function(a, b) {
        return Y([], Ds, a, b)
      }),
      Layer: V(function(a, b) {
        return Y({}, Es, a, b)
      })
    }, void 0),
    As = X(zs, {
      Name: V($),
      Title: V($),
      Abstract: V($),
      KeywordList: V(xs),
      OnlineResource: V(ms),
      ContactInformation: V(function(a, b) {
        return Y({}, Fs, a, b)
      }),
      Fees: V($),
      AccessConstraints: V($),
      LayerLimit: V(ap),
      MaxWidth: V(ap),
      MaxHeight: V(ap)
    }, void 0),
    Fs = X(zs, {
      ContactPersonPrimary: V(function(a, b) {
        return Y({}, Gs, a, b)
      }),
      ContactPosition: V($),
      ContactAddress: V(function(a, b) {
        return Y({}, Hs, a, b)
      }),
      ContactVoiceTelephone: V($),
      ContactFacsimileTelephone: V($),
      ContactElectronicMailAddress: V($)
    }, void 0),
    Gs = X(zs, {
      ContactPerson: V($),
      ContactOrganization: V($)
    }, void 0),
    Hs = X(zs, {
      AddressType: V($),
      Address: V($),
      City: V($),
      StateOrProvince: V($),
      PostCode: V($),
      Country: V($)
    }, void 0),
    Ds = X(zs, {
      Format: Jo($)
    }, void 0),
    Es = X(zs, {
        Name: V($),
        Title: V($),
        Abstract: V($),
        KeywordList: V(xs),
        CRS: Lo($),
        EX_GeographicBoundingBox: V(function(a, b) {
          var c = Y({}, Is, a, b);
          if (u(c)) {
            var d = G(c, "westBoundLongitude"),
              e = G(c, "southBoundLatitude"),
              f = G(c, "eastBoundLongitude"),
              c = G(c, "northBoundLatitude");
            return u(d) && u(e) && u(f) && u(c) ? [d, e, f, c] : void 0
          }
        }),
        BoundingBox: Lo(function(a) {
          var b = [$o(a.getAttribute("minx")), $o(a.getAttribute("miny")), $o(a.getAttribute("maxx")), $o(a.getAttribute("maxy"))],
            c = [$o(a.getAttribute("resx")), $o(a.getAttribute("resy"))];
          return {
            crs: a.getAttribute("CRS"),
            extent: b,
            res: c
          }
        }),
        Dimension: Lo(function(a) {
          return {
            name: a.getAttribute("name"),
            units: a.getAttribute("units"),
            unitSymbol: a.getAttribute("unitSymbol"),
            "default": a.getAttribute("default"),
            multipleValues: Xo(a.getAttribute("multipleValues")),
            nearestValue: Xo(a.getAttribute("nearestValue")),
            current: Xo(a.getAttribute("current")),
            values: $(a)
          }
        }),
        Attribution: V(function(a, b) {
          return Y({}, Js, a, b)
        }),
        AuthorityURL: Lo(function(a, b) {
          var c = ss(a, b);
          if (u(c)) {
            var d = a.getAttribute("name");
            c.name = d;
            return c
          }
        }),
        Identifier: Lo($),
        MetadataURL: Lo(function(a, b) {
          var c = ss(a, b);
          if (u(c)) {
            var d = a.getAttribute("type");
            c.type = d;
            return c
          }
        }),
        DataURL: Lo(ss),
        FeatureListURL: Lo(ss),
        Style: Lo(function(a, b) {
          return Y({}, Ks, a, b)
        }),
        MinScaleDenominator: V(Zo),
        MaxScaleDenominator: V(Zo),
        Layer: Lo(function(a, b) {
          var c = b[b.length - 1],
            d = Y({}, Es, a, b);
          if (u(d)) {
            var e = Xo(a.getAttribute("queryable"));
            u(e) || (e = G(c, "queryable"));
            d.queryable = u(e) ? e : !1;
            e = bp(a.getAttribute("cascaded"));
            u(e) || (e = G(c, "cascaded"));
            d.cascaded = e;
            e = Xo(a.getAttribute("opaque"));
            u(e) || (e =
              G(c, "opaque"));
            d.opaque = u(e) ? e : !1;
            e = Xo(a.getAttribute("noSubsets"));
            u(e) || (e = G(c, "noSubsets"));
            d.noSubsets = u(e) ? e : !1;
            e = $o(a.getAttribute("fixedWidth"));
            u(e) || (e = G(c, "fixedWidth"));
            d.fixedWidth = e;
            e = $o(a.getAttribute("fixedHeight"));
            u(e) || (e = G(c, "fixedHeight"));
            d.fixedHeight = e;
            Ka(["Style", "CRS", "AuthorityURL"], function(a) {
              u(G(c, a)) && bc(d, a)
            });
            Ka("EX_GeographicBoundingBox BoundingBox Dimension Attribution MinScaleDenominator MaxScaleDenominator".split(" "), function(a) {
              u(G(d, a)) || (d[a] = G(c, a))
            });
            return d
          }
        })
      },
      void 0),
    Js = X(zs, {
      Title: V($),
      OnlineResource: V(ms),
      LogoURL: V(ws)
    }, void 0),
    Is = X(zs, {
      westBoundLongitude: V(Zo),
      eastBoundLongitude: V(Zo),
      southBoundLatitude: V(Zo),
      northBoundLatitude: V(Zo)
    }, void 0),
    Cs = X(zs, {
      GetCapabilities: V(us),
      GetMap: V(us),
      GetFeatureInfo: V(us)
    }, void 0),
    vs = X(zs, {
      Format: Lo($),
      DCPType: Lo(function(a, b) {
        return Y({}, Ls, a, b)
      })
    }, void 0),
    Ls = X(zs, {
      HTTP: V(function(a, b) {
        return Y({}, Ms, a, b)
      })
    }, void 0),
    Ms = X(zs, {
      Get: V(ss),
      Post: V(ss)
    }, void 0),
    Ks = X(zs, {
      Name: V($),
      Title: V($),
      Abstract: V($),
      LegendURL: Lo(ws),
      StyleSheetURL: V(ss),
      StyleURL: V(ss)
    }, void 0),
    ts = X(zs, {
      Format: V($),
      OnlineResource: V(ms)
    }, void 0),
    ys = X(zs, {
      Keyword: Jo($)
    }, void 0);

  function Ns(a, b) {
    xd.call(this);
    this.a = new Nn(this);
    var c = a;
    b && (c = hc(a));
    this.a.$(c, "dragenter", this.Dh);
    c != a && this.a.$(c, "dragover", this.Eh);
    this.a.$(a, "dragover", this.Fh);
    this.a.$(a, "drop", this.Gh)
  }
  E(Ns, xd);
  l = Ns.prototype;
  l.Fb = !1;
  l.w = function() {
    Ns.B.w.call(this);
    this.a.Eb()
  };
  l.Dh = function(a) {
    var b = a.F.dataTransfer;
    (this.Fb = !(!b || !(b.types && (0 <= Ja(b.types, "Files") || 0 <= Ja(b.types, "public.file-url")) || b.files && 0 < b.files.length))) && a.preventDefault()
  };
  l.Eh = function(a) {
    this.Fb && (a.preventDefault(), a.F.dataTransfer.dropEffect = "none")
  };
  l.Fh = function(a) {
    this.Fb && (a.preventDefault(), a.ya(), a = a.F.dataTransfer, a.effectAllowed = "all", a.dropEffect = "copy")
  };
  l.Gh = function(a) {
    this.Fb && (a.preventDefault(), a.ya(), a = new Pc(a.F), a.type = "drop", M(this, a))
  };
  /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
  function Os(a, b) {
    this.b = [];
    this.f = a;
    this.e = b || null
  }
  l = Os.prototype;
  l.ib = !1;
  l.Qb = !1;
  l.Fc = !1;
  l.Ue = !1;
  l.hd = !1;
  l.Gc = 0;
  l.cancel = function(a) {
    if (this.ib) this.c instanceof Os && this.c.cancel();
    else {
      if (this.a) {
        var b = this.a;
        delete this.a;
        a ? b.cancel(a) : (b.Gc--, 0 >= b.Gc && b.cancel())
      }
      this.f ? this.f.call(this.e, this) : this.hd = !0;
      this.ib || (a = new Ps(this), Qs(this), Rs(this, !1, a))
    }
  };
  l.Bd = function(a, b) {
    this.Fc = !1;
    Rs(this, a, b)
  };

  function Rs(a, b, c) {
    a.ib = !0;
    a.c = c;
    a.Qb = !b;
    Ss(a)
  }

  function Qs(a) {
    if (a.ib) {
      if (!a.hd) throw new Ts(a);
      a.hd = !1
    }
  }

  function Us(a, b, c, d) {
    a.b.push([b, c, d]);
    a.ib && Ss(a)
  }

  function Vs(a) {
    return Ma(a.b, function(a) {
      return ma(a[1])
    })
  }

  function Ss(a) {
    a.d && (a.ib && Vs(a)) && (t.clearTimeout(a.d), delete a.d);
    a.a && (a.a.Gc--, delete a.a);
    for (var b = a.c, c = !1, d = !1; a.b.length && !a.Fc;) {
      var e = a.b.shift(),
        f = e[0],
        g = e[1],
        e = e[2];
      if (f = a.Qb ? g : f) try {
        var h = f.call(e || a.e, b);
        u(h) && (a.Qb = a.Qb && (h == b || h instanceof Error), a.c = b = h);
        b instanceof Os && (d = !0, a.Fc = !0)
      } catch (m) {
        b = m, a.Qb = !0, Vs(a) || (c = !0)
      }
    }
    a.c = b;
    d && (Us(b, y(a.Bd, a, !0), y(a.Bd, a, !1)), b.Ue = !0);
    c && (a.d = t.setTimeout(sd(b), 0))
  }

  function Ts(a) {
    xa.call(this);
    this.a = a
  }
  E(Ts, xa);
  Ts.prototype.message = "Deferred has already fired";
  Ts.prototype.name = "AlreadyCalledError";

  function Ps(a) {
    xa.call(this);
    this.a = a
  }
  E(Ps, xa);
  Ps.prototype.message = "Deferred was canceled";
  Ps.prototype.name = "CanceledError";

  function Ws(a, b) {
    xa.call(this, ya("Error %s: %s", b, Xs(a)));
    this.code = a
  }
  E(Ws, xa);

  function Xs(a) {
    switch (a) {
      case 1:
        return "File or directory not found";
      case 2:
        return "Insecure or disallowed operation";
      case 3:
        return "Operation aborted";
      case 4:
        return "File or directory not readable";
      case 5:
        return "Invalid encoding";
      case 6:
        return "Cannot modify file or directory";
      case 7:
        return "Invalid state";
      case 8:
        return "Invalid line-ending specifier";
      case 9:
        return "Invalid modification";
      case 10:
        return "Quota exceeded";
      case 11:
        return "Invalid filetype";
      case 12:
        return "File or directory already exists at specified path";
      default:
        return "Unrecognized error"
    }
  };

  function Ys(a, b) {
    Hc.call(this, a.type, b);
    this.a = a
  }
  E(Ys, Hc);

  function Zs() {
    xd.call(this);
    this.ja = new FileReader;
    this.ja.onloadstart = y(this.a, this);
    this.ja.onprogress = y(this.a, this);
    this.ja.onload = y(this.a, this);
    this.ja.onabort = y(this.a, this);
    this.ja.onerror = y(this.a, this);
    this.ja.onloadend = y(this.a, this)
  }
  E(Zs, xd);
  Zs.prototype.getError = function() {
    return this.ja.error && new Ws(this.ja.error.code, "reading file")
  };
  Zs.prototype.a = function(a) {
    M(this, new Ys(a, this))
  };
  Zs.prototype.w = function() {
    Zs.B.w.call(this);
    delete this.ja
  };

  function $s(a) {
    var b = new Os;
    a.addEventListener("loadend", va(function(a, b) {
      var e = b.ja.result,
        f = b.getError();
      null == e || f ? (Qs(a), Rs(a, !1, f)) : (Qs(a), Rs(a, !0, e));
      b.Eb()
    }, b, a));
    return b
  };

  function at(a) {
    a = u(a) ? a : {};
    vj.call(this);
    this.d = u(a.formatConstructors) ? a.formatConstructors : [];
    this.e = u(a.reprojectTo) ? mg(a.reprojectTo) : null;
    this.b = null;
    this.a = void 0
  }
  E(at, vj);
  l = at.prototype;
  l.w = function() {
    u(this.a) && L(this.a);
    at.B.w.call(this)
  };
  l.Hf = function(a) {
    a = a.F.dataTransfer.files;
    var b, c;
    b = 0;
    for (c = a.length; b < c; ++b) {
      var d = a[b],
        e = new Zs,
        f = $s(e);
      e.ja.readAsText(d, "");
      Us(f, this.Zf, null, this)
    }
  };
  l.Zf = function(a) {
    var b = this.g,
      c = this.e;
    null === c && (c = b.a().M().l());
    var b = this.d,
      d = [],
      e, f;
    e = 0;
    for (f = b.length; e < f; ++e) {
      var g = new b[e],
        h;
      try {
        h = g.ua(a)
      } catch (m) {
        h = null
      }
      if (null !== h) {
        var g = g.ia(a),
          g = ng(g, c),
          n, p;
        n = 0;
        for (p = h.length; n < p; ++n) {
          var q = h[n],
            r = q.K();
          null === r || r.transform(g);
          d.push(q)
        }
      }
    }
    M(this, new bt(ct, this, d, c))
  };
  l.ha = qd;
  l.setMap = function(a) {
    u(this.a) && (L(this.a), this.a = void 0);
    null !== this.b && (Gc(this.b), this.b = null);
    at.B.setMap.call(this, a);
    null !== a && (this.b = new Ns(a.b), this.a = K(this.b, "drop", this.Hf, !1, this))
  };
  var ct = "addfeatures";

  function bt(a, b, c, d) {
    Hc.call(this, a, b);
    this.features = c;
    this.projection = d
  }
  E(bt, Hc);

  function dt(a, b) {
    this.x = a;
    this.y = b
  }
  E(dt, Rb);
  dt.prototype.H = function() {
    return new dt(this.x, this.y)
  };
  dt.prototype.scale = Rb.prototype.scale;
  dt.prototype.add = function(a) {
    this.x += a.x;
    this.y += a.y;
    return this
  };

  function et(a) {
    a = u(a) ? a : {};
    Gj.call(this);
    this.f = u(a.condition) ? a.condition : Dj;
    this.a = this.d = void 0;
    this.e = 0
  }
  E(et, Gj);
  et.prototype.Ha = function(a) {
    if (Fj(a)) {
      var b = a.map,
        c = b.f();
      a = a.pixel;
      a = new dt(a[0] - c[0] / 2, c[1] / 2 - a[1]);
      c = Math.atan2(a.y, a.x);
      a = Math.sqrt(a.x * a.x + a.y * a.y);
      var d = b.a().M(),
        e = pj(d);
      b.J();
      u(this.d) && wj(b, d, e.rotation - (c - this.d));
      this.d = c;
      u(this.a) && yj(b, d, this.a * (e.resolution / a));
      u(this.a) && (this.e = this.a / a);
      this.a = a
    }
  };
  et.prototype.Aa = function(a) {
    if (!Fj(a)) return !0;
    a = a.map;
    var b = a.a();
    tg(b, -1);
    var b = b.M(),
      c = pj(b),
      d = this.e - 1,
      e = c.rotation,
      e = b.constrainRotation(e, 0);
    wj(a, b, e, void 0, void 0);
    c = c.resolution;
    c = b.constrainResolution(c, 0, d);
    yj(a, b, c, void 0, 400);
    this.e = 0;
    return !1
  };
  et.prototype.za = function(a) {
    return Fj(a) && this.f(a) ? (tg(a.map.a(), 1), this.a = this.d = void 0, !0) : !1
  };
  et.prototype.qe = function(a) {
    return a
  };

  function ft(a, b) {
    Hc.call(this, a);
    this.feature = b
  }
  E(ft, Hc);

  function gt(a) {
    Gj.call(this);
    this.r = null;
    this.u = u(a.source) ? a.source : null;
    this.q = u(a.features) ? a.features : null;
    this.L = u(a.snapTolerance) ? a.snapTolerance : 12;
    this.G = u(a.minPointsPerRing) ? a.minPointsPerRing : 3;
    var b = this.n = a.type,
      c;
    if ("Point" === b || "MultiPoint" === b) c = ht;
    else if ("LineString" === b || "MultiLineString" === b) c = it;
    else if ("Polygon" === b || "MultiPolygon" === b) c = jt;
    this.a = c;
    this.d = this.j = this.k = this.f = this.e = null;
    this.O = 4;
    this.o = new ve({
      style: u(a.style) ? a.style : kt()
    })
  }
  E(gt, Gj);

  function kt() {
    var a = {};
    a.Polygon = [new pe({
      fill: new le({
        color: [255, 255, 255, 0.5]
      })
    })];
    a.MultiPolygon = a.Polygon;
    a.LineString = [new pe({
      stroke: new ne({
        color: [255, 255, 255, 1],
        width: 5
      })
    }), new pe({
      stroke: new ne({
        color: [0, 153, 255, 1],
        width: 3
      })
    })];
    a.MultiLineString = a.LineString;
    a.Point = [new pe({
      image: new oe({
        radius: 7,
        fill: new le({
          color: [0, 153, 255, 1]
        }),
        stroke: new ne({
          color: [255, 255, 255, 0.75],
          width: 1.5
        })
      }),
      zIndex: 1E5
    })];
    a.MultiPoint = a.Point;
    return function(b) {
      return a[b.K().A()]
    }
  }
  gt.prototype.setMap = function(a) {
    null === a && lt(this);
    this.o.setMap(a);
    gt.B.setMap.call(this, a)
  };
  gt.prototype.ha = function(a) {
    var b;
    b = a.map;
    if (wc(document, b.b) && "none" != b.b.style.display) {
      var c = b.f();
      null == c || 0 >= c[0] || 0 >= c[1] ? b = !1 : (b = b.a(), b = u(b) && b.Xc() ? !0 : !1)
    } else b = !1; if (!b) return !0;
    b = !0;
    a.type === Ui ? b = mt(this, a) : a.type === Oi && (b = !1);
    return gt.B.ha.call(this, a) && b
  };
  gt.prototype.za = function(a) {
    this.r = a.pixel;
    return !0
  };
  gt.prototype.Aa = function(a) {
    var b = this.r,
      c = a.pixel,
      d = b[0] - c[0],
      b = b[1] - c[1],
      c = !0;
    if (d * d + b * b <= this.O) {
      mt(this, a);
      if (null === this.e) nt(this, a);
      else if (this.a === ht || ot(this, a)) {
        a = lt(this);
        var e, d = a.K();
        this.a === ht ? e = d.v() : this.a === it ? (e = d.v(), e.pop(), d.I(e)) : this.a === jt && (this.d[0].pop(), this.d[0].push(this.d[0][0]), d.I(this.d), e = d.v());
        "MultiPoint" === this.n ? a.cb(new Vl([e])) : "MultiLineString" === this.n ? a.cb(new Sl([e])) : "MultiPolygon" === this.n && a.cb(new Wl([e]));
        null === this.q || this.q.push(a);
        null === this.u ||
          this.u.ae(a);
        M(this, new ft("drawend", a))
      } else e = a.coordinate, a = this.f.K(), this.a === it ? (this.e = e.slice(), d = a.v(), d.push(e.slice()), a.I(d)) : this.a === jt && (this.d[0].push(e.slice()), a.I(this.d)), pt(this);
      c = !1
    }
    return c
  };

  function mt(a, b) {
    if (a.a === ht && null === a.e) nt(a, b);
    else if (null !== a.e) {
      var c = b.coordinate,
        d = a.f.K(),
        e, f;
      a.a === ht ? (f = d.v(), f[0] = c[0], f[1] = c[1], d.I(f)) : (a.a === it ? e = d.v() : a.a === jt && (e = a.d[0]), ot(a, b) && (c = a.e.slice()), a.k.K().I(c), f = e[e.length - 1], f[0] = c[0], f[1] = c[1], a.a === it ? d.I(e) : a.a === jt && (a.j.K().I(e), d.I(a.d)));
      pt(a)
    }
    return !0
  }

  function ot(a, b) {
    var c = !1;
    if (null !== a.f) {
      var d = a.f.K(),
        e = !1,
        f = [a.e];
      a.a === it ? e = 2 < d.v().length : a.a === jt && (e = d.v()[0].length > a.G, f = [a.d[0][0], a.d[0][a.d[0].length - 2]]);
      if (e)
        for (var d = b.map, e = 0, g = f.length; e < g; e++) {
          var h = f[e],
            m = d.g(h),
            n = b.pixel,
            c = n[0] - m[0],
            m = n[1] - m[1];
          if (c = Math.sqrt(c * c + m * m) <= a.L) {
            a.e = h;
            break
          }
        }
    }
    return c
  }

  function nt(a, b) {
    var c = b.coordinate;
    a.e = c;
    var d;
    a.a === ht ? d = new Bf(c.slice()) : (a.k = new qe(new Bf(c.slice())), a.a === it ? d = new Ql([c.slice(), c.slice()]) : a.a === jt && (a.j = new qe(new Ql([c.slice(), c.slice()])), a.d = [
      [c.slice(), c.slice()]
    ], d = new Jf(a.d)));
    a.f = new qe(d);
    pt(a);
    M(a, new ft("drawstart", a.f))
  }

  function lt(a) {
    a.e = null;
    var b = a.f;
    null !== b && (a.f = null, a.k = null, a.j = null, a.o.a.clear());
    return b
  }

  function pt(a) {
    var b = [a.f];
    null === a.j || b.push(a.j);
    null === a.k || b.push(a.k);
    a.o.Tb(new Jd(b))
  }
  var ht = "Point",
    it = "LineString",
    jt = "Polygon";

  function qt(a) {
    Gj.call(this);
    this.q = this.e = null;
    this.j = !1;
    this.r = [0, 0];
    this.a = null;
    this.f = u(a.pixelTolerance) ? a.pixelTolerance : 20;
    this.d = null;
    this.k = new ve({
      style: a.style
    });
    this.o = a.features;
    K(this.o, "add", this.Dc, !1, this);
    K(this.o, "remove", this.Sg, !1, this);
    this.n = {
      Point: this.xi,
      LineString: this.ye,
      LinearRing: this.ye,
      Polygon: this.yi,
      MultiPoint: this.vi,
      MultiLineString: this.ui,
      MultiPolygon: this.wi,
      GeometryCollection: this.ti
    }
  }
  E(qt, Gj);
  l = qt.prototype;
  l.setMap = function(a) {
    null === a ? this.a = null : null === this.a && (this.a = new gm);
    this.k.setMap(a);
    qt.B.setMap.call(this, a)
  };
  l.Dc = function(a) {
    a = a.element;
    var b = a.K();
    u(this.n[b.A()]) && this.n[b.A()].call(this, a, b);
    rt(this, this.r, this.g)
  };
  l.xi = function(a, b) {
    var c = b.v(),
      c = {
        feature: a,
        geometry: b,
        R: [c, c]
      };
    nm(this.a, b.p(), c)
  };
  l.vi = function(a, b) {
    var c = b.v(),
      d, e, f;
    e = 0;
    for (f = c.length; e < f; ++e) d = c[e], d = {
      feature: a,
      geometry: b,
      depth: [e],
      index: e,
      R: [d, d]
    }, nm(this.a, b.p(), d)
  };
  l.ye = function(a, b) {
    var c = b.v(),
      d, e, f, g;
    d = 0;
    for (e = c.length - 1; d < e; ++d) f = c.slice(d, d + 2), g = {
      feature: a,
      geometry: b,
      index: d,
      R: f
    }, nm(this.a, Ee(f), g)
  };
  l.ui = function(a, b) {
    var c = b.v(),
      d, e, f, g, h, m, n;
    g = 0;
    for (h = c.length; g < h; ++g)
      for (d = c[g], e = 0, f = d.length - 1; e < f; ++e) m = d.slice(e, e + 2), n = {
        feature: a,
        geometry: b,
        depth: [g],
        index: e,
        R: m
      }, nm(this.a, Ee(m), n)
  };
  l.yi = function(a, b) {
    var c = b.v(),
      d, e, f, g, h, m, n;
    g = 0;
    for (h = c.length; g < h; ++g)
      for (d = c[g], e = 0, f = d.length - 1; e < f; ++e) m = d.slice(e, e + 2), n = {
        feature: a,
        geometry: b,
        depth: [g],
        index: e,
        R: m
      }, nm(this.a, Ee(m), n)
  };
  l.wi = function(a, b) {
    var c = b.v(),
      d, e, f, g, h, m, n, p, q, r;
    m = 0;
    for (n = c.length; m < n; ++m)
      for (p = c[m], g = 0, h = p.length; g < h; ++g)
        for (d = p[g], e = 0, f = d.length - 1; e < f; ++e) q = d.slice(e, e + 2), r = {
          feature: a,
          geometry: b,
          depth: [g, m],
          index: e,
          R: q
        }, nm(this.a, Ee(q), r)
  };
  l.ti = function(a, b) {
    var c, d = b.a;
    for (c = 0; c < d.length; ++c) this.n[d[c].A()].call(this, a, d[c])
  };
  l.Sg = function(a) {
    var b = a.element;
    a = this.a;
    var c, d = [];
    jm(a, b.K().p(), function(a) {
      b === a.feature && d.push(a)
    });
    for (c = d.length - 1; 0 <= c; --c) a.remove(d[c]);
    null !== this.e && 0 === this.o.Ja() && (this.k.Wc(this.e), this.e = null)
  };

  function st(a, b) {
    var c = a.e;
    null === c ? (c = new qe(new Bf(b)), a.e = c, a.k.Vd(c)) : c.K().I(b)
  }
  l.za = function(a) {
    rt(this, a.pixel, a.map);
    this.d = [];
    var b = this.e;
    if (null !== b) {
      a = [];
      var b = b.K().v(),
        c = Ee([b]),
        d = [];
      km(this.a, c, function(a) {
        d.push(a)
      }, void 0);
      for (var c = {}, e = 0, f = d.length; e < f; ++e) {
        var g = d[e],
          h = g.R;
        v(g.feature) in c || (c[v(g.feature)] = !0);
        Ae(h[0], b) ? this.d.push([g, 0]) : Ae(h[1], b) ? this.d.push([g, 1]) : v(h) in this.q && a.push([g, b])
      }
      for (e = a.length - 1; 0 <= e; --e) this.gg.apply(this, a[e])
    }
    return this.j
  };
  l.Ha = function(a) {
    a = a.coordinate;
    for (var b = 0, c = this.d.length; b < c; ++b) {
      var d = this.d[b],
        e = d[0],
        f = e.depth,
        g = e.geometry,
        h = g.v(),
        m = e.R,
        d = d[1];
      switch (g.A()) {
        case "Point":
          h = a;
          m[0] = m[1] = a;
          break;
        case "MultiPoint":
          h[e.index] = a;
          m[0] = m[1] = a;
          break;
        case "LineString":
          h[e.index + d] = a;
          m[d] = a;
          break;
        case "MultiLineString":
          h[f[0]][e.index + d] = a;
          m[d] = a;
          break;
        case "Polygon":
          h[f[0]][e.index + d] = a;
          m[d] = a;
          break;
        case "MultiPolygon":
          h[f[1]][f[0]][e.index + d] = a, m[d] = a
      }
      g.I(h);
      st(this, a)
    }
  };
  l.Aa = function() {
    for (var a, b = this.d.length - 1; 0 <= b; --b) a = this.d[b][0], this.a.update(Ee(a.R), a);
    return !1
  };
  l.ha = function(a) {
    var b = a.map.a();
    Ra(b.k)[1] || a.type != Ui || (this.r = a.pixel, rt(this, a.pixel, a.map));
    return qt.B.ha.call(this, a) && !this.j
  };

  function rt(a, b, c) {
    function d(a, b) {
      return Ce(e, xe(e, a.R)) - Ce(e, xe(e, b.R))
    }
    var e = c.ea(b),
      f = c.ea([b[0] - a.f, b[1] + a.f]),
      g = c.ea([b[0] + a.f, b[1] - a.f]),
      f = Ee([f, g]);
    a.j = !1;
    f = mm(a.a, f);
    if (0 < f.length) {
      f.sort(d);
      var g = f[0].R,
        h = xe(e, g),
        m = c.g(h);
      if (Math.sqrt(Ce(b, m)) <= a.f) {
        b = c.g(g[0]);
        c = c.g(g[1]);
        b = Ce(m, b);
        c = Ce(m, c);
        10 >= Math.sqrt(Math.min(b, c)) && (h = b > c ? g[1] : g[0]);
        st(a, h);
        c = {};
        c[v(g)] = !0;
        b = 1;
        for (m = f.length; b < m; ++b)
          if (h = f[b].R, Ae(g[0], h[0]) && Ae(g[1], h[1]) || Ae(g[0], h[1]) && Ae(g[1], h[0])) c[v(h)] = !0;
          else break;
        a.q = c;
        a.j = !0;
        return
      }
    }
    null !== a.e && (a.k.Wc(a.e), a.e = null)
  }
  l.gg = function(a, b) {
    var c = a.R,
      d = a.feature,
      e = a.geometry,
      f = a.depth,
      g = a.index,
      h;
    switch (e.A()) {
      case "MultiLineString":
        h = e.v();
        h[f[0]].splice(g + 1, 0, b);
        break;
      case "Polygon":
        h = e.v();
        h[f[0]].splice(g + 1, 0, b);
        break;
      case "MultiPolygon":
        h = e.v();
        h[f[1]][f[0]].splice(g + 1, 0, b);
        break;
      case "LineString":
        h = e.v();
        h.splice(g + 1, 0, b);
        break;
      default:
        return
    }
    e.I(h);
    h = this.a;
    h.remove(a);
    var m = v(d),
      n = [];
    jm(this.a, e.p(), function(a) {
      v(a.feature) === m && n.push(a)
    });
    for (var p = 0, q = n.length; p < q; ++p) {
      var r = n[p];
      r.geometry === e && ((!u(f) ||
        Xa(r.depth, f)) && r.index > g) && ++r.index
    }
    p = {
      R: [c[0], b],
      feature: d,
      geometry: e,
      depth: f,
      index: g
    };
    nm(h, Ee(p.R), p);
    this.d.push([p, 1]);
    c = {
      R: [b, c[1]],
      feature: d,
      geometry: e,
      depth: f,
      index: g + 1
    };
    nm(h, Ee(c.R), c);
    this.d.push([c, 0])
  };

  function tt(a) {
    vj.call(this);
    this.e = u(a.condition) ? a.condition : Bj;
    this.b = u(a.addCondition) ? a.addCondition : pd;
    this.i = u(a.removeCondition) ? a.removeCondition : pd;
    this.j = u(a.toggleCondition) ? a.toggleCondition : Dj;
    var b;
    if (u(a.layerFilter)) b = a.layerFilter;
    else if (u(a.layer)) {
      var c = a.layer;
      b = function(a) {
        return a === c
      }
    } else if (u(a.layers)) {
      var d = a.layers;
      b = function(a) {
        return -1 != Ja(d, a)
      }
    } else b = qd;
    this.d = b;
    this.a = new ve({
      style: a.style
    })
  }
  E(tt, vj);
  tt.prototype.f = function() {
    return this.a.a
  };
  tt.prototype.ha = function(a) {
    if (!this.e(a)) return !0;
    var b = this.b(a),
      c = this.i(a),
      d = this.j(a);
    a = a.map.Xd(a.pixel, function(a) {
      this.Dc(a, b, c, d);
      return a
    }, this, this.d);
    u(a) || (b || c) || ut(this);
    return !1
  };
  tt.prototype.Dc = function(a, b, c, d) {
    var e = this.a.a,
      f = -1;
    if (u(a) && null !== a || b) {
      f = e.a.indexOf(a);
      if (-1 == f) {
        if (!b && !c && 0 < e.Ja())
          for (b = e.Ja() - 1; 0 <= b; b--) e.Mb(b) != a && vt(this, e.Mb(b))
      } else if (d || c) {
        vt(this, e.Mb(f));
        return
      }
      c || -1 != f || (e.push(a), this.g.o.push(a))
    } else ut(this)
  };

  function vt(a, b) {
    a.a.a.remove(b);
    a.g.o.remove(b)
  }

  function ut(a) {
    var b, c = a.a.a;
    for (b = c.Ja() - 1; 0 <= b; b--) vt(a, c.Mb(b))
  }
  tt.prototype.setMap = function(a) {
    tt.B.setMap.call(this, a);
    this.a.setMap(a)
  };

  function wt(a) {
    a = u(a) ? a : {};
    Qk.call(this, a);
    this.d = null;
    K(this, Fd("gradient"), this.O, !1, this);
    this.L(u(a.gradient) ? a.gradient : xt);
    var b = yt(u(a.radius) ? a.radius : 8, u(a.blur) ? a.blur : 15, u(a.shadow) ? a.shadow : 250),
      c = Array(256),
      d = u(a.weight) ? a.weight : "weight",
      e;
    e = ka(d) ? function(a) {
      return a.get(d)
    } : d;
    this.g(function(a) {
      a = e(a);
      a = Ob(u(a) ? a : 1, 0, 1);
      var d = 255 * a | 0,
        h = c[d];
      u(h) || (h = [new pe({
        image: new Dk({
          opacity: a,
          src: b
        })
      })], c[d] = h);
      return h
    });
    K(this, "render", this.ma, !1, this)
  }
  E(wt, Qk);
  var xt = ["#00f", "#0ff", "#0f0", "#ff0", "#f00"];

  function yt(a, b, c) {
    var d = pc("CANVAS"),
      e = d.getContext("2d"),
      f = a + b + 1;
    d.width = d.height = 2 * f;
    e.shadowOffsetX = e.shadowOffsetY = c;
    e.shadowBlur = b;
    e.shadowColor = "#000";
    e.beginPath();
    b = f - c;
    e.arc(b, b, a, 0, 2 * Math.PI, !0);
    e.fill();
    return d.toDataURL()
  }
  wt.prototype.l = function() {
    return this.get("gradient")
  };
  wt.prototype.getGradient = wt.prototype.l;
  wt.prototype.O = function() {
    var a = this.l(),
      b = pc("CANVAS"),
      c = b.getContext("2d");
    b.width = 1;
    b.height = 256;
    for (var b = c.createLinearGradient(0, 0, 1, 256), d = 1 / (a.length - 1), e = 0, f = a.length; e < f; ++e) b.addColorStop(e * d, a[e]);
    c.fillStyle = b;
    c.fillRect(0, 0, 1, 256);
    this.d = c.getImageData(0, 0, 1, 256).data
  };
  wt.prototype.ma = function(a) {
    a = a.context;
    var b = a.canvas,
      b = a.getImageData(0, 0, b.width, b.height),
      c = b.data,
      d, e, f;
    d = 0;
    for (e = c.length; d < e; d += 4)
      if (f = 4 * c[d + 3]) c[d] = this.d[f], c[d + 1] = this.d[f + 1], c[d + 2] = this.d[f + 2];
    a.putImageData(b, 0, 0)
  };
  wt.prototype.L = function(a) {
    this.t("gradient", a)
  };
  wt.prototype.setGradient = wt.prototype.L;

  function zt(a, b) {
    var c = b || {},
      d = c.document || document,
      e = pc("SCRIPT"),
      f = {
        me: e,
        eb: void 0
      },
      g = new Os(At, f),
      h = null,
      m = null != c.timeout ? c.timeout : 5E3;
    0 < m && (h = window.setTimeout(function() {
      Bt(e, !0);
      var b = new Ct(Dt, "Timeout reached for loading script " + a);
      Qs(g);
      Rs(g, !1, b)
    }, m), f.eb = h);
    e.onload = e.onreadystatechange = function() {
      e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Bt(e, c.Ad || !1, h), Qs(g), Rs(g, !0, null))
    };
    e.onerror = function() {
      Bt(e, !0, h);
      var b = new Ct(Et, "Error while loading script " + a);
      Qs(g);
      Rs(g, !1, b)
    };
    jc(e, {
      type: "text/javascript",
      charset: "UTF-8",
      src: a
    });
    Ft(d).appendChild(e);
    return g
  }

  function Ft(a) {
    var b = a.getElementsByTagName("HEAD");
    return b && 0 != b.length ? b[0] : a.documentElement
  }

  function At() {
    if (this && this.me) {
      var a = this.me;
      a && "SCRIPT" == a.tagName && Bt(a, !0, this.eb)
    }
  }

  function Bt(a, b, c) {
    null != c && t.clearTimeout(c);
    a.onload = da;
    a.onerror = da;
    a.onreadystatechange = da;
    b && window.setTimeout(function() {
      uc(a)
    }, 0)
  }
  var Et = 0,
    Dt = 1;

  function Ct(a, b) {
    var c = "Jsloader error (code #" + a + ")";
    b && (c += ": " + b);
    xa.call(this, c);
    this.code = a
  }
  E(Ct, xa);

  function Gt(a, b) {
    this.c = new Pg(a);
    this.a = b ? b : "callback";
    this.eb = 5E3
  }
  var Ht = 0;
  Gt.prototype.cancel = function(a) {
    a && (a.Ic && a.Ic.cancel(), a.P && It(a.P, !1))
  };

  function Jt(a) {
    return function() {
      It(a, !1)
    }
  }

  function Kt(a, b) {
    return function(c) {
      It(a, !0);
      b.apply(void 0, arguments)
    }
  }

  function It(a, b) {
    t._callbacks_[a] && (b ? delete t._callbacks_[a] : t._callbacks_[a] = da)
  };

  function Lt(a) {
    return function(b) {
      return null === b ? void 0 : a.replace("{z}", b.a.toString()).replace("{x}", b.x.toString()).replace("{y}", b.y.toString())
    }
  }

  function Mt(a) {
    return Nt(La(a, Lt))
  }

  function Nt(a) {
    return 1 === a.length ? a[0] : function(b, c, d) {
      return null === b ? void 0 : a[Pb((b.x << b.a) + b.y, a.length)].call(this, b, c, d)
    }
  }

  function Ot() {}

  function Pt(a, b) {
    var c = new Za(0, 0, 0);
    return function(d, e, f) {
      return null === d ? void 0 : b.call(this, a.call(this, d, f, c), e, f)
    }
  }

  function Qt(a) {
    var b = [],
      c = /\{(\d)-(\d)\}/.exec(a) || /\{([a-z])-([a-z])\}/.exec(a);
    if (c) {
      var d = c[2].charCodeAt(0),
        e;
      for (e = c[1].charCodeAt(0); e <= d; ++e) b.push(a.replace(c[0], String.fromCharCode(e)))
    } else b.push(a);
    return b
  };

  function Rt(a) {
    rn.call(this);
    this.d = u(a) ? a : 2048
  }
  E(Rt, rn);

  function St(a, b) {
    for (var c, d; a.oa() > a.d && !(c = a.a.wb, d = c.a.a.toString(), d in b && b[d].contains(c.a));) sn(a)
  };

  function Tt(a) {
    sk.call(this, {
      attributions: a.attributions,
      extent: a.extent,
      logo: a.logo,
      opaque: a.opaque,
      projection: a.projection,
      tileGrid: a.tileGrid
    });
    this.tileUrlFunction = u(a.tileUrlFunction) ? a.tileUrlFunction : Ot;
    this.crossOrigin = u(a.crossOrigin) ? a.crossOrigin : null;
    this.b = new Rt;
    this.tileLoadFunction = u(a.tileLoadFunction) ? a.tileLoadFunction : Ut;
    this.uc = u(a.uc) ? a.uc : rg
  }
  E(Tt, sk);

  function Ut(a, b) {
    a.b().src = b
  }
  l = Tt.prototype;
  l.Zc = function() {
    return this.b.oa() > this.b.d
  };
  l.$d = function(a) {
    St(this.b, a)
  };
  l.lb = function(a, b, c, d, e) {
    var f = this.Ga(a, b, c);
    if (pn(this.b, f)) return this.b.get(f);
    a = new Za(a, b, c);
    d = this.tileUrlFunction(a, d, e);
    d = new this.uc(a, u(d) ? 0 : 4, u(d) ? d : "", this.crossOrigin, this.tileLoadFunction);
    tn(this.b, f, d);
    return d
  };
  l.Ub = function(a) {
    this.b.clear();
    this.tileUrlFunction = a;
    this.s()
  };
  l.we = function(a, b, c) {
    a = this.Ga(a, b, c);
    pn(this.b, a) && this.b.get(a)
  };

  function Vt(a) {
    var b = Array(a.maxZoom + 1),
      c, d = 2 * dk / 256;
    for (c = 0; c <= a.maxZoom; ++c) b[c] = d / Math.pow(2, c);
    lk.call(this, {
      minZoom: a.minZoom,
      origin: [-dk, dk],
      resolutions: b,
      tileSize: 256
    })
  }
  E(Vt, lk);
  Vt.prototype.c = function(a) {
    a = u(a) ? a : {};
    var b = this.minZoom,
      c = this.maxZoom,
      d = u(a.wrapX) ? a.wrapX : !0,
      e = new Za(0, 0, 0),
      f = null;
    if (u(a.extent)) {
      var f = Array(c + 1),
        g;
      for (g = 0; g <= c; ++g) f[g] = g < b ? null : ok(this, a.extent, g)
    }
    return function(a, g, n) {
      g = a.a;
      if (g < b || c < g) return null;
      var p = Math.pow(2, g),
        q = a.x;
      if (d) q = Pb(q, p);
      else if (0 > q || p <= q) return null;
      a = a.y;
      return a < -p || -1 < a || null !== f && (e.a = g, e.x = q, e.y = a, !f[g].contains(e)) ? null : $a(g, q, -a - 1, n)
    }
  };
  Vt.prototype.gc = function(a, b) {
    return a.a < this.maxZoom ? db(2 * a.x, 2 * (a.x + 1), 2 * a.y, 2 * (a.y + 1), b) : null
  };
  Vt.prototype.ec = function(a, b, c, d) {
    d = db(0, a.x, 0, a.y, d);
    for (a = a.a - 1; a >= this.minZoom; --a)
      if (d.a = d.d >>= 1, d.b = d.c >>= 1, b.call(c, a, d)) return !0;
    return !1
  };

  function Wt(a) {
    Tt.call(this, {
      crossOrigin: "anonymous",
      opaque: !0,
      projection: mg("EPSG:3857"),
      state: 0,
      tileLoadFunction: a.tileLoadFunction
    });
    this.a = u(a.culture) ? a.culture : "en-us";
    var b = new Pg((Ac ? "https:" : "http:") + "//dev.virtualearth.net/REST/v1/Imagery/Metadata/" + a.imagerySet),
      b = new Gt(b, "jsonp"),
      c = {
        include: "ImageryProviders",
        key: a.key
      };
    a = y(this.e, this);
    var d = c || null,
      c = "_" + (Ht++).toString(36) + wa().toString(36);
    t._callbacks_ || (t._callbacks_ = {});
    var e = b.c.H();
    if (d)
      for (var f in d) d.hasOwnProperty && !d.hasOwnProperty(f) ||
        bh(e, f, d[f]);
    a && (t._callbacks_[c] = Kt(c, a), bh(e, b.a, "_callbacks_." + c));
    f = zt(e.toString(), {
      timeout: b.eb,
      Ad: !0
    });
    Us(f, null, Jt(c), void 0)
  }
  E(Wt, Tt);
  var Xt = new eb({
    html: '\x3ca class\x3d"ol-attribution-bing-tos" target\x3d"_blank" href\x3d"http://www.microsoft.com/maps/product/terms.html"\x3eTerms of Use\x3c/a\x3e'
  });
  Wt.prototype.e = function(a) {
    if (200 != a.statusCode || "OK" != a.statusDescription || "ValidCredentials" != a.authenticationResultCode || 1 != a.resourceSets.length || 1 != a.resourceSets[0].resources.length) Yj(this, 2);
    else {
      var b = a.brandLogoUri,
        c = a.resourceSets[0].resources[0],
        d = new Vt({
          minZoom: c.zoomMin,
          maxZoom: c.zoomMax,
          tileSize: c.imageWidth
        });
      this.tileGrid = d;
      var e = this.a;
      this.tileUrlFunction = Pt(d.c(), Nt(La(c.imageUrlSubdomains, function(a) {
        var b = c.imageUrl.replace("{subdomain}", a).replace("{culture}", e);
        return function(a) {
          return null ===
            a ? void 0 : b.replace("{quadkey}", bb(a))
        }
      })));
      if (c.imageryProviders) {
        var f = Vf(mg("EPSG:4326"), this.l);
        a = La(c.imageryProviders, function(a) {
          var b = a.attribution,
            c = {};
          Ka(a.coverageAreas, function(a) {
            var b = a.zoomMin,
              e = a.zoomMax;
            a = a.bbox;
            a = af([a[1], a[0], a[3], a[2]], f);
            var g, h;
            for (g = b; g <= e; ++g) h = g.toString(), b = ok(d, a, g), h in c ? c[h].push(b) : c[h] = [b]
          });
          return new eb({
            html: b,
            tileRanges: c
          })
        });
        a.push(Xt);
        this.d = a
      }
      this.r = b;
      Yj(this, 1)
    }
  };

  function Yt(a, b, c) {
    if (ma(a)) c && (a = y(a, c));
    else if (a && "function" == typeof a.handleEvent) a = y(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < b ? -1 : t.setTimeout(a, b || 0)
  };

  function Zt() {}
  Zt.prototype.a = null;

  function $t(a) {
    var b;
    (b = a.a) || (b = {}, au(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
    return b
  };
  var bu;

  function cu() {}
  E(cu, Zt);

  function du(a) {
    return (a = au(a)) ? new ActiveXObject(a) : new XMLHttpRequest
  }

  function au(a) {
    if (!a.c && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
      for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
        var d = b[c];
        try {
          return new ActiveXObject(d), a.c = d
        } catch (e) {}
      }
      throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return a.c
  }
  bu = new cu;

  function eu(a) {
    xd.call(this);
    this.u = new Fg;
    this.j = a || null;
    this.a = !1;
    this.g = this.C = null;
    this.G = this.n = "";
    this.b = 0;
    this.f = "";
    this.c = this.r = this.l = this.k = !1;
    this.i = 0;
    this.e = null;
    this.d = fu;
    this.o = this.L = !1
  }
  E(eu, xd);
  var fu = "",
    gu = /^https?$/i,
    hu = ["POST", "PUT"];

  function iu(a, b) {
    if (a.C) throw Error("[goog.net.XhrIo] Object is active with another request\x3d" + a.n + "; newUri\x3d" + b);
    a.n = b;
    a.f = "";
    a.b = 0;
    a.G = "GET";
    a.k = !1;
    a.a = !0;
    a.C = a.j ? du(a.j) : du(bu);
    a.g = a.j ? $t(a.j) : $t(bu);
    a.C.onreadystatechange = y(a.q, a);
    try {
      a.r = !0, a.C.open("GET", b, !0), a.r = !1
    } catch (c) {
      ju(a, c);
      return
    }
    var d = a.u.H(),
      e = Na(d.pa(), ku),
      f = t.FormData && !1;
    !(0 <= Ja(hu, "GET")) || (e || f) || Gg(d, "Content-Type", "application/x-www-form-urlencoded;charset\x3dutf-8");
    Eg(d, function(a, b) {
        this.C.setRequestHeader(b, a)
      },
      a);
    a.d && (a.C.responseType = a.d);
    "withCredentials" in a.C && (a.C.withCredentials = a.L);
    try {
      lu(a), 0 < a.i && (a.o = F && Gb(9) && la(a.C.timeout) && u(a.C.ontimeout), a.o ? (a.C.timeout = a.i, a.C.ontimeout = y(a.eb, a)) : a.e = Yt(a.eb, a.i, a)), a.l = !0, a.C.send(""), a.l = !1
    } catch (g) {
      ju(a, g)
    }
  }

  function ku(a) {
    return "content-type" == a.toLowerCase()
  }
  eu.prototype.eb = function() {
    "undefined" != typeof ca && this.C && (this.f = "Timed out after " + this.i + "ms, aborting", this.b = 8, M(this, "timeout"), this.C && this.a && (this.a = !1, this.c = !0, this.C.abort(), this.c = !1, this.b = 8, M(this, "complete"), M(this, "abort"), mu(this)))
  };

  function ju(a, b) {
    a.a = !1;
    a.C && (a.c = !0, a.C.abort(), a.c = !1);
    a.f = b;
    a.b = 5;
    nu(a);
    mu(a)
  }

  function nu(a) {
    a.k || (a.k = !0, M(a, "complete"), M(a, "error"))
  }
  eu.prototype.w = function() {
    this.C && (this.a && (this.a = !1, this.c = !0, this.C.abort(), this.c = !1), mu(this, !0));
    eu.B.w.call(this)
  };
  eu.prototype.q = function() {
    if (!this.X && this.a && "undefined" != typeof ca && (!this.g[1] || 4 != ou(this) || 2 != pu(this)))
      if (this.l && 4 == ou(this)) Yt(this.q, 0, this);
      else if (M(this, "readystatechange"), 4 == ou(this)) {
      this.a = !1;
      try {
        if (qu(this)) M(this, "complete"), M(this, "success");
        else {
          this.b = 6;
          var a;
          try {
            a = 2 < ou(this) ? this.C.statusText : ""
          } catch (b) {
            a = ""
          }
          this.f = a + " [" + pu(this) + "]";
          nu(this)
        }
      } finally {
        mu(this)
      }
    }
  };

  function mu(a, b) {
    if (a.C) {
      lu(a);
      var c = a.C,
        d = a.g[0] ? da : null;
      a.C = null;
      a.g = null;
      b || M(a, "ready");
      try {
        c.onreadystatechange = d
      } catch (e) {}
    }
  }

  function lu(a) {
    a.C && a.o && (a.C.ontimeout = null);
    la(a.e) && (t.clearTimeout(a.e), a.e = null)
  }

  function qu(a) {
    var b = pu(a),
      c;
    a: switch (b) {
      case 200:
      case 201:
      case 202:
      case 204:
      case 206:
      case 304:
      case 1223:
        c = !0;
        break a;
      default:
        c = !1
    }
    if (!c) {
      if (b = 0 === b) a = Kg(String(a.n))[1] || null, !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1)), b = !gu.test(a ? a.toLowerCase() : "");
      c = b
    }
    return c
  }

  function ou(a) {
    return a.C ? a.C.readyState : 0
  }

  function pu(a) {
    try {
      return 2 < ou(a) ? a.C.status : -1
    } catch (b) {
      return -1
    }
  }

  function ru(a) {
    try {
      return a.C ? a.C.responseText : ""
    } catch (b) {
      return ""
    }
  }

  function su(a) {
    try {
      if (!a.C) return null;
      if ("response" in a.C) return a.C.response;
      switch (a.d) {
        case fu:
        case "text":
          return a.C.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in a.C) return a.C.mozResponseArrayBuffer
      }
      return null
    } catch (b) {
      return null
    }
  };

  function tu(a) {
    var b = u(a) ? a : {};
    qm.call(this, {
      attributions: b.attributions,
      extent: b.extent,
      logo: b.logo,
      projection: b.projection
    });
    this.format = b.format;
    u(b.doc) && uu(this, b.doc);
    u(b.node) && uu(this, b.node);
    u(b.object) && uu(this, b.object);
    u(b.text) && uu(this, b.text);
    u(b.arrayBuffer) && uu(this, b.arrayBuffer);
    if (u(b.url) || u(b.urls)) {
      Yj(this, 0);
      a = "binary" == this.format.A() && I.td ? "arraybuffer" : "text";
      var c;
      u(b.url) && (c = new eu, c.d = a, K(c, "complete", y(this.i, this)), iu(c, b.url));
      if (u(b.urls)) {
        var b = b.urls,
          d, e;
        d = 0;
        for (e =
          b.length; d < e; ++d) c = new eu, c.d = a, K(c, "complete", y(this.i, this)), iu(c, b[d])
      }
    }
  }
  E(tu, qm);
  tu.prototype.i = function(a) {
    a = a.target;
    if (qu(a)) {
      var b = this.format.A(),
        c;
      if ("binary" == b && I.td) c = su(a);
      else if ("json" == b) c = ru(a);
      else if ("text" == b) c = ru(a);
      else if ("xml" == b) {
        if (!F) try {
          c = a.C ? a.C.responseXML : null
        } catch (d) {
          c = null
        }
        null != c || (c = Ho(ru(a)))
      }
      Gc(a);
      null != c ? uu(this, c) : Yj(this, 2)
    } else Yj(this, 2)
  };

  function uu(a, b) {
    var c = a.format,
      d = c.ua(b),
      c = c.ia(b),
      e = a.l;
    if (null !== e && c !== e && (c.la != e.la || Vf(c, e) !== eg)) {
      var c = ng(c, e),
        f, e = 0;
      for (f = d.length; e < f; ++e) {
        var g = d[e].K();
        null === g || g.transform(c)
      }
    }
    rm(a, d);
    Yj(a, 1)
  };

  function vu(a) {
    a = u(a) ? a : {};
    tu.call(this, {
      attributions: a.attributions,
      doc: a.doc,
      extent: a.extent,
      format: new fp,
      logo: a.logo,
      node: a.node,
      projection: a.projection,
      text: a.text,
      url: a.url,
      urls: a.urls
    })
  }
  E(vu, tu);

  function wu(a) {
    a = u(a) ? a : {};
    tu.call(this, {
      attributions: a.attributions,
      extent: a.extent,
      format: new Np({
        defaultProjection: a.defaultProjection
      }),
      logo: a.logo,
      object: a.object,
      projection: a.projection,
      text: a.text,
      url: a.url,
      urls: a.urls
    })
  }
  E(wu, tu);

  function xu(a) {
    a = u(a) ? a : {};
    tu.call(this, {
      format: new Wp({
        altitudeMode: a.altitudeMode
      }),
      projection: a.projection,
      text: a.text,
      url: a.url,
      urls: a.urls
    })
  }
  E(xu, tu);

  function yu(a, b, c, d, e) {
    ik.call(this, a, b, c, 2, d);
    this.a = e
  }
  E(yu, ik);
  yu.prototype.e = k("a");

  function zu(a) {
    fl.call(this, {
      attributions: a.attributions,
      extent: a.extent,
      logo: a.logo,
      projection: a.projection,
      resolutions: a.resolutions,
      state: a.state
    });
    this.u = a.canvasFunction;
    this.n = null;
    this.o = 0;
    this.G = u(a.ratio) ? a.ratio : 1.5
  }
  E(zu, fl);
  zu.prototype.pb = function(a, b, c, d) {
    b = gl(this, b);
    var e = this.n;
    if (null !== e && this.o == this.c && e.d == b && e.b == c && Le(e.p(), a)) return e;
    a = a.slice();
    Ze(a, this.G);
    d = this.u(a, b, c, [(a[2] - a[0]) / b * c, (a[3] - a[1]) / b * c], d);
    null === d || (e = new yu(a, b, c, this.d, d));
    this.n = e;
    this.o = this.c;
    return e
  };

  function Au(a) {
    var b = u(a.attributions) ? a.attributions : null,
      c = u(a.crossOrigin) ? a.crossOrigin : null,
      d = a.imageExtent,
      e = (d[3] - d[1]) / a.imageSize[1],
      f = a.url,
      g = mg(a.projection);
    fl.call(this, {
      attributions: b,
      extent: a.extent,
      logo: a.logo,
      projection: g,
      resolutions: [e]
    });
    this.a = new jk(d, e, 1, b, f, c)
  }
  E(Au, fl);
  Au.prototype.pb = function(a) {
    return We(a, this.a.p()) ? this.a : null
  };

  function Bu(a) {
    this.e = a.source;
    this.Yg = u(a.style) ? te(a.style) : se;
    this.O = Sd();
    this.a = pc("CANVAS");
    this.g = this.a.getContext("2d");
    this.b = [0, 0];
    this.i = null;
    zu.call(this, {
      attributions: a.attributions,
      canvasFunction: y(this.q, this),
      extent: a.extent,
      logo: a.logo,
      projection: a.projection,
      ratio: a.ratio,
      resolutions: a.resolutions,
      state: this.e.f
    });
    K(this.e, "change", this.U, void 0, this)
  }
  E(Bu, zu);
  Bu.prototype.q = function(a, b, c, d) {
    var e = new Al(b / (2 * c), a, b),
      f = !1;
    this.e.dc(a, function(a) {
      var d;
      if (!(d = f))
        if (d = this.Yg(a, b), null != d) {
          var m = b * b / (4 * c * c),
            n, p, q = !1;
          n = 0;
          for (p = d.length; n < p; ++n) q = Zl(e, a, d[n], m, a, this.Zg, this) || q;
          d = q
        } else d = !1;
      f = d
    }, this);
    El(e);
    if (f) return null;
    this.b[0] != d[0] || this.b[1] != d[1] ? (this.a.width = d[0], this.a.height = d[1], this.b[0] = d[0], this.b[1] = d[1]) : this.g.clearRect(0, 0, d[0], d[1]);
    d = Gk(this.O, d[0] / 2, d[1] / 2, c / b, -c / b, 0, -Re(a)[0], -Re(a)[1]);
    Bl(e, this.g, a, c, d, 0, {});
    this.i = e;
    return this.a
  };
  Bu.prototype.k = function(a, b, c, d, e) {
    return null === this.i ? void 0 : Dl(this.i, a, b, 0, d, {}, function(a, b) {
      return e(b)
    })
  };
  Bu.prototype.Zg = function() {
    this.s()
  };
  Bu.prototype.U = function() {
    Yj(this, this.e.f)
  };

  function Cu(a) {
    a = u(a) ? a : {};
    fl.call(this, {
      attributions: a.attributions,
      extent: a.extent,
      logo: a.logo,
      projection: a.projection,
      resolutions: a.resolutions
    });
    this.O = u(a.crossOrigin) ? a.crossOrigin : null;
    this.i = a.url;
    this.b = a.params;
    this.e = !0;
    Du(this);
    this.G = a.serverType;
    this.U = u(a.hidpi) ? a.hidpi : !0;
    this.a = null;
    this.g = [0, 0];
    this.n = null;
    this.q = NaN;
    this.u = 0;
    this.o = u(a.ratio) ? a.ratio : 1.5
  }
  E(Cu, fl);
  l = Cu.prototype;
  l.$g = function(a, b, c, d) {
    if (u(this.i) && null !== this.a && b == this.q && (c === this.n || (c.la != this.n.la ? 0 : Vf(c, this.n) === eg))) {
      var e = this.a.p(),
        f = this.a.b,
        g = {
          SERVICE: "WMS",
          VERSION: "1.3.0",
          REQUEST: "GetFeatureInfo",
          FORMAT: "image/png",
          TRANSPARENT: !0,
          QUERY_LAYERS: G(this.b, "LAYERS")
        };
      ec(g, this.b, d);
      b /= f;
      d = Math.floor((e[3] - a[1]) / b);
      g[this.e ? "I" : "X"] = Math.floor((a[0] - e[0]) / b);
      g[this.e ? "J" : "Y"] = d;
      return Eu(this, e, this.g, f, c, g)
    }
  };
  l.ah = k("b");
  l.pb = function(a, b, c, d) {
    if (!u(this.i)) return null;
    b = gl(this, b);
    1 == c || this.U && u(this.G) || (c = 1);
    var e = this.a;
    if (null !== e && this.u == this.c && e.d == b && e.b == c && Le(e.p(), a)) return e;
    e = {
      SERVICE: "WMS",
      VERSION: "1.3.0",
      REQUEST: "GetMap",
      FORMAT: "image/png",
      TRANSPARENT: !0
    };
    ec(e, this.b);
    a = a.slice();
    var f = (a[0] + a[2]) / 2,
      g = (a[1] + a[3]) / 2;
    if (1 != this.o) {
      var h = this.o * (a[2] - a[0]) / 2,
        m = this.o * (a[3] - a[1]) / 2;
      a[0] = f - h;
      a[1] = g - m;
      a[2] = f + h;
      a[3] = g + m
    }
    var h = b / c,
      m = Math.ceil((a[2] - a[0]) / h),
      n = Math.ceil((a[3] - a[1]) / h);
    a[0] = f - h * m / 2;
    a[2] = f +
      h * m / 2;
    a[1] = g - h * n / 2;
    a[3] = g + h * n / 2;
    this.g[0] = m;
    this.g[1] = n;
    e = Eu(this, a, this.g, c, d, e);
    this.a = new jk(a, b, c, this.d, e, this.O);
    this.n = d;
    this.q = b;
    this.u = this.c;
    return this.a
  };

  function Eu(a, b, c, d, e, f) {
    f[a.e ? "CRS" : "SRS"] = e.a;
    "STYLES" in a.b || (f.STYLES = new String(""));
    if (1 != d) switch (a.G) {
      case "geoserver":
        f.FORMAT_OPTIONS = "dpi:" + (90 * d + 0.5 | 0);
        break;
      case "mapserver":
        f.MAP_RESOLUTION = 90 * d;
        break;
      case "carmentaserver":
      case "qgis":
        f.DPI = 90 * d
    }
    f.WIDTH = c[0];
    f.HEIGHT = c[1];
    c = e.c;
    f.BBOX = (a.e && "ne" == c.substr(0, 2) ? [b[1], b[0], b[3], b[2]] : b).join(",");
    return Mg(Og([a.i], f))
  }
  l.bh = function(a) {
    a != this.i && (this.i = a, this.a = null, this.s())
  };
  l.dh = function(a) {
    ec(this.b, a);
    Du(this);
    this.a = null;
    this.s()
  };

  function Du(a) {
    a.e = 0 <= Ha(G(a.b, "VERSION", "1.3.0"), "1.3")
  };

  function Fu(a) {
    a = u(a) ? a : {};
    tu.call(this, {
      attributions: a.attributions,
      doc: a.doc,
      extent: a.extent,
      format: new $p({
        defaultStyle: a.defaultStyle
      }),
      logo: a.logo,
      node: a.node,
      projection: a.projection,
      text: a.text,
      url: a.url,
      urls: a.urls
    })
  }
  E(Fu, tu);

  function Gu(a, b, c) {
    return function(d, e, f) {
      return c(a, b, d, e, f)
    }
  }

  function Hu() {};

  function Iu(a) {
    fl.call(this, {
      extent: a.extent,
      projection: a.projection,
      resolutions: a.resolutions
    });
    this.o = u(a.crossOrigin) ? a.crossOrigin : null;
    this.a = u(a.displayDpi) ? a.displayDpi : 96;
    this.g = u(a.url) ? Gu(a.url, u(a.params) ? a.params : {}, y(this.i, this)) : Hu;
    this.q = u(a.hidpi) ? a.hidpi : !0;
    this.n = u(a.metersPerUnit) ? a.metersPerUnit : 1;
    this.e = u(a.ratio) ? a.ratio : 1;
    this.u = u(a.useOverlay) ? a.useOverlay : !1;
    this.b = null
  }
  E(Iu, fl);
  Iu.prototype.pb = function(a, b, c, d) {
    b = gl(this, b);
    c = this.q ? c : 1;
    var e = this.b;
    if (null !== e && e.d == b && e.b == c && Le(e.p(), a)) return e;
    1 != this.e && (a = a.slice(), Ze(a, this.e));
    d = this.g(a, [(a[2] - a[0]) / b * c, (a[3] - a[1]) / b * c], d);
    return this.b = e = u(d) ? new jk(a, b, c, this.d, d, this.o) : null
  };
  Iu.prototype.i = function(a, b, c, d) {
    var e;
    e = this.n;
    var f = Ve(c),
      g = Te(c),
      h = d[0],
      m = d[1],
      n = 0.0254 / this.a;
    e = m * f > h * g ? f * e / (h * n) : g * e / (m * n);
    c = Re(c);
    d = {
      OPERATION: this.u ? "GETDYNAMICMAPOVERLAYIMAGE" : "GETMAPIMAGE",
      VERSION: "2.0.0",
      LOCALE: "en",
      CLIENTAGENT: "ol.source.MapGuide source",
      CLIP: "1",
      SETDISPLAYDPI: this.a,
      SETDISPLAYWIDTH: Math.round(d[0]),
      SETDISPLAYHEIGHT: Math.round(d[1]),
      SETVIEWSCALE: e,
      SETVIEWCENTERX: c[0],
      SETVIEWCENTERY: c[1]
    };
    ec(d, b);
    return Mg(Og([a], d))
  };

  function Ju(a) {
    var b = u(a.projection) ? a.projection : "EPSG:3857",
      c = new Vt({
        maxZoom: u(a.maxZoom) ? a.maxZoom : 18
      });
    Tt.call(this, {
      attributions: a.attributions,
      crossOrigin: a.crossOrigin,
      extent: a.extent,
      logo: a.logo,
      projection: b,
      tileGrid: c,
      tileLoadFunction: a.tileLoadFunction,
      tileUrlFunction: Ot
    });
    this.e = c.c({
      extent: a.extent,
      wrapX: a.wrapX
    });
    u(a.tileUrlFunction) ? this.Ub(a.tileUrlFunction) : u(a.urls) ? this.Ub(Mt(a.urls)) : u(a.url) && this.a(a.url)
  }
  E(Ju, Tt);
  Ju.prototype.Ub = function(a) {
    Ju.B.Ub.call(this, Pt(this.e, a))
  };
  Ju.prototype.a = function(a) {
    this.Ub(Mt(Qt(a)))
  };

  function Ku(a) {
    a = u(a) ? a : {};
    var b = Ac ? "https:" : "http:";
    Ju.call(this, {
      attributions: u(a.attributions) ? a.attributions : Lu,
      crossOrigin: u(a.crossOrigin) ? a.crossOrigin : "anonymous",
      opaque: !0,
      maxZoom: a.maxZoom,
      tileLoadFunction: a.tileLoadFunction,
      url: u(a.url) ? a.url : b + "//{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    })
  }
  E(Ku, Ju);
  var Mu = new eb({
      html: 'Data \x26copy; \x3ca href\x3d"http://www.openstreetmap.org/"\x3eOpenStreetMap\x3c/a\x3e contributors, \x3ca href\x3d"http://www.openstreetmap.org/copyright"\x3eODbL\x3c/a\x3e'
    }),
    Nu = new eb({
      html: 'Tiles \x26copy; \x3ca href\x3d"http://www.openstreetmap.org/"\x3eOpenStreetMap\x3c/a\x3e contributors, \x3ca href\x3d"http://creativecommons.org/licenses/by-sa/2.0/"\x3eCC BY-SA\x3c/a\x3e'
    }),
    Lu = [Nu, Mu];

  function Ou(a) {
    a = u(a) ? a : {};
    var b = Pu[a.layer];
    Ju.call(this, {
      attributions: b.attributions,
      crossOrigin: "anonymous",
      logo: "//developer.mapquest.com/content/osm/mq_logo.png",
      maxZoom: b.maxZoom,
      opaque: !0,
      tileLoadFunction: a.tileLoadFunction,
      url: (Ac ? "https:" : "http:") + "//otile{1-4}-s.mqcdn.com/tiles/1.0.0/" + a.layer + "/{z}/{x}/{y}.jpg"
    })
  }
  E(Ou, Ju);
  var Qu = new eb({
      html: 'Tiles Courtesy of \x3ca href\x3d"http://www.mapquest.com/" target\x3d"_blank"\x3eMapQuest\x3c/a\x3e'
    }),
    Pu = {
      osm: {
        maxZoom: 28,
        attributions: [Qu, Mu]
      },
      sat: {
        maxZoom: 18,
        attributions: [Qu, new eb({
          html: "Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency"
        })]
      },
      hyb: {
        maxZoom: 18,
        attributions: [Qu, Mu]
      }
    };

  function Ru() {}
  E(Ru, To);

  function Su(a, b) {
    var c = a.getAttribute("k"),
      d = a.getAttribute("v");
    b[b.length - 1].Vb[c] = d
  }
  var Tu = [null],
    Uu = X(Tu, {
      nd: function(a, b) {
        b[b.length - 1].ob.push(a.getAttribute("ref"))
      },
      tag: Su
    }, void 0),
    Wu = X(Tu, {
      node: function(a, b) {
        var c = b[b.length - 1],
          d = a.getAttribute("id"),
          e = [parseFloat(a.getAttribute("lon")), parseFloat(a.getAttribute("lat"))];
        c.Td[d] = e;
        var f = Y({
          Vb: {}
        }, Vu, a, b);
        Zb(f.Vb) || (e = new Bf(e), e = new qe(e), e.b(d), e.T(f.Vb), c.features.push(e))
      },
      way: function(a, b) {
        for (var c = a.getAttribute("id"), d = Y({
          ob: [],
          Vb: {}
        }, Uu, a, b), e = b[b.length - 1], f = [], g = 0, h = d.ob.length; g < h; g++) Sa(f, G(e.Td, d.ob[g]));
        d.ob[0] ==
          d.ob[d.ob.length - 1] ? (g = new Jf(null), Kf(g, "XY", f, [f.length])) : (g = new Ql(null), Rl(g, "XY", f));
        f = new qe(g);
        f.b(c);
        f.T(d.Vb);
        e.features.push(f)
      }
    }, void 0),
    Vu = X(Tu, {
      tag: Su
    }, void 0);
  Ru.prototype.ub = function(a) {
    return "osm" == a.localName && (a = Y({
      Td: {},
      features: []
    }, Wu, a, []), u(a.features)) ? a.features : []
  };
  Ru.prototype.rc = function() {
    return mg("EPSG:4326")
  };
  Ru.prototype.ed = function() {
    return mg("EPSG:4326")
  };

  function Xu(a) {
    a = u(a) ? a : {};
    tu.call(this, {
      attributions: a.attributions,
      doc: a.doc,
      extent: a.extent,
      format: new Ru,
      logo: a.logo,
      node: a.node,
      projection: a.projection,
      reprojectTo: a.reprojectTo,
      text: a.text,
      url: a.url
    })
  }
  E(Xu, tu);
  var Yu = {
      terrain: {
        da: "jpg",
        opaque: !0
      },
      "terrain-background": {
        da: "jpg",
        opaque: !0
      },
      "terrain-labels": {
        da: "png",
        opaque: !1
      },
      "terrain-lines": {
        da: "png",
        opaque: !1
      },
      "toner-background": {
        da: "png",
        opaque: !0
      },
      toner: {
        da: "png",
        opaque: !0
      },
      "toner-hybrid": {
        da: "png",
        opaque: !1
      },
      "toner-labels": {
        da: "png",
        opaque: !1
      },
      "toner-lines": {
        da: "png",
        opaque: !1
      },
      "toner-lite": {
        da: "png",
        opaque: !0
      },
      watercolor: {
        da: "jpg",
        opaque: !0
      }
    },
    Zu = {
      terrain: {
        minZoom: 4,
        maxZoom: 18
      },
      toner: {
        minZoom: 0,
        maxZoom: 20
      },
      watercolor: {
        minZoom: 3,
        maxZoom: 16
      }
    };

  function $u(a) {
    var b = a.layer.indexOf("-"),
      b = -1 == b ? a.layer : a.layer.slice(0, b),
      c = Yu[a.layer],
      d = Ac ? "https:" : "http:";
    Ju.call(this, {
      attributions: av,
      crossOrigin: "anonymous",
      maxZoom: Zu[b].maxZoom,
      opaque: c.opaque,
      tileLoadFunction: a.tileLoadFunction,
      url: u(a.url) ? a.url : d + "//{a-d}.tile.stamen.com/" + a.layer + "/{z}/{x}/{y}." + c.da
    })
  }
  E($u, Ju);
  var av = [new eb({
    html: 'Map tiles by \x3ca href\x3d"http://stamen.com/"\x3eStamen Design\x3c/a\x3e, under \x3ca href\x3d"http://creativecommons.org/licenses/by/3.0/"\x3eCC BY 3.0\x3c/a\x3e.'
  }), Mu];

  function bv(a, b) {
    qg.call(this, a, 2);
    this.f = a;
    this.e = b.fa(a.a);
    this.c = {}
  }
  E(bv, qg);
  bv.prototype.b = function(a) {
    a = u(a) ? v(a) : -1;
    if (a in this.c) return this.c[a];
    var b = this.e,
      c = pc("CANVAS");
    c.width = b;
    c.height = b;
    var d = c.getContext("2d");
    d.strokeStyle = "black";
    d.strokeRect(0.5, 0.5, b + 0.5, b + 0.5);
    d.fillStyle = "black";
    d.textAlign = "center";
    d.textBaseline = "middle";
    d.font = "24px sans-serif";
    d.fillText(this.f.toString(), b / 2, b / 2);
    return this.c[a] = c
  };

  function cv(a) {
    sk.call(this, {
      extent: a.extent,
      opaque: !1,
      projection: a.projection,
      tileGrid: a.tileGrid
    });
    this.a = new Rt
  }
  E(cv, sk);
  cv.prototype.Zc = function() {
    return this.a.oa() > this.a.d
  };
  cv.prototype.$d = function(a) {
    St(this.a, a)
  };
  cv.prototype.lb = function(a, b, c) {
    var d = this.Ga(a, b, c);
    if (pn(this.a, d)) return this.a.get(d);
    a = new bv(new Za(a, b, c), this.tileGrid);
    tn(this.a, d, a);
    return a
  };
  var dv = [];
  C("grid", function(a) {
    dv.push(a)
  });

  function ev(a) {
    Tt.call(this, {
      crossOrigin: a.crossOrigin,
      projection: mg("EPSG:3857"),
      state: 0,
      tileLoadFunction: a.tileLoadFunction
    });
    this.Ic = zt(a.url, {
      Ad: !0
    });
    Us(this.Ic, this.a, null, this)
  }
  E(ev, Tt);
  ev.prototype.a = function() {
    var a = dv.pop(),
      b = mg("EPSG:4326"),
      c;
    if (u(a.bounds)) {
      var d = Vf(b, this.l);
      this.L = c = af(a.bounds, d)
    }
    var e = a.minzoom || 0,
      d = a.maxzoom || 22,
      f = new Vt({
        maxZoom: d,
        minZoom: e
      });
    this.tileGrid = f;
    this.tileUrlFunction = Pt(f.c({
      extent: c
    }), Mt(a.tiles));
    if (u(a.attribution)) {
      b = u(c) ? c : b.p();
      c = {};
      for (var g; e <= d; ++e) g = e.toString(), c[g] = [ok(f, b, e)];
      this.d = [new eb({
        html: a.attribution,
        tileRanges: c
      })]
    }
    Yj(this, 1)
  };

  function fv(a) {
    a = u(a) ? a : {};
    var b = u(a.params) ? a.params : {};
    Tt.call(this, {
      attributions: a.attributions,
      crossOrigin: a.crossOrigin,
      extent: a.extent,
      logo: a.logo,
      opaque: !G(b, "TRANSPARENT", !0),
      projection: a.projection,
      tileGrid: a.tileGrid,
      tileLoadFunction: a.tileLoadFunction,
      tileUrlFunction: y(this.hi, this)
    });
    var c = a.urls;
    !u(c) && u(a.url) && (c = Qt(a.url));
    this.u = c;
    this.i = u(a.gutter) ? a.gutter : 0;
    this.a = b;
    this.g = NaN;
    this.e = !0;
    this.j = a.serverType;
    this.o = u(a.hidpi) ? a.hidpi : !0;
    this.n = "";
    gv(this);
    this.q = Fe();
    hv(this)
  }
  E(fv, Tt);
  l = fv.prototype;
  l.eh = function(a, b, c, d) {
    var e = this.g;
    if (!isNaN(this.g)) {
      var f = this.tileGrid;
      null === f && (f = tk(this, c));
      b = qk(f, a[0], a[1], b, !1, void 0);
      if (!(f.Va().length <= b.a)) {
        var g = f.a[b.a],
          h = nk(f, b, this.q),
          f = f.fa(b.a),
          m = this.i;
        0 !== m && (f += 2 * m, h = Ie(h, g * m, h));
        1 != e && (f = f * e + 0.5 | 0);
        m = {
          SERVICE: "WMS",
          VERSION: "1.3.0",
          REQUEST: "GetFeatureInfo",
          FORMAT: "image/png",
          TRANSPARENT: !0,
          QUERY_LAYERS: G(this.a, "LAYERS")
        };
        ec(m, this.a, d);
        d = Math.floor((h[3] - a[1]) / (g / e));
        m[this.e ? "I" : "X"] = Math.floor((a[0] - h[0]) / (g / e));
        m[this.e ? "J" : "Y"] = d;
        return iv(this,
          b, f, h, e, c, m)
      }
    }
  };
  l.fc = k("i");
  l.Ga = function(a, b, c) {
    return this.n + fv.B.Ga.call(this, a, b, c)
  };
  l.fh = k("a");

  function iv(a, b, c, d, e, f, g) {
    var h = a.u;
    if (u(h) && 0 != h.length) {
      g.WIDTH = c;
      g.HEIGHT = c;
      g[a.e ? "CRS" : "SRS"] = f.a;
      "STYLES" in a.a || (g.STYLES = new String(""));
      if (1 != e) switch (a.j) {
        case "geoserver":
          g.FORMAT_OPTIONS = "dpi:" + (90 * e + 0.5 | 0);
          break;
        case "mapserver":
          g.MAP_RESOLUTION = 90 * e;
          break;
        case "carmentaserver":
        case "qgis":
          g.DPI = 90 * e
      }
      c = f.c;
      a.e && "ne" == c.substr(0, 2) && (c = d[0], d[0] = d[1], d[1] = c, c = d[2], d[2] = d[3], d[3] = c);
      g.BBOX = d.join(",");
      return Mg(Og([1 == h.length ? h[0] : h[Pb((b.x << b.a) + b.y, a.u.length)]], g))
    }
  }
  l.Nb = function(a, b, c) {
    a = fv.B.Nb.call(this, a, b, c);
    return 1 != b && this.o && u(this.j) ? a * b + 0.5 | 0 : a
  };

  function gv(a) {
    var b = 0,
      c = [],
      d;
    for (d in a.a) c[b++] = d + "-" + a.a[d];
    a.n = c.join("/")
  }
  l.hi = function(a, b, c) {
    var d = this.tileGrid;
    null === d && (d = tk(this, c));
    if (!(d.Va().length <= a.a)) {
      1 == b || this.o && u(this.j) || (b = 1);
      var e = d.a[a.a],
        f = nk(d, a, this.q),
        d = d.fa(a.a),
        g = this.i;
      0 !== g && (d += 2 * g, f = Ie(f, e * g, f));
      e = this.p();
      if (null === e || We(f, e) && !$e(f, e)) return 1 != b && (d = d * b + 0.5 | 0), e = {
        SERVICE: "WMS",
        VERSION: "1.3.0",
        REQUEST: "GetMap",
        FORMAT: "image/png",
        TRANSPARENT: !0
      }, ec(e, this.a), this.g = b, iv(this, a, d, f, b, c, e)
    }
  };
  l.gh = function(a) {
    ec(this.a, a);
    gv(this);
    hv(this);
    this.s()
  };

  function hv(a) {
    a.e = 0 <= Ha(G(a.a, "VERSION", "1.3.0"), "1.3")
  };

  function jv(a) {
    a = u(a) ? a : {};
    tu.call(this, {
      attributions: a.attributions,
      extent: a.extent,
      format: new Tq({
        defaultProjection: a.defaultProjection
      }),
      logo: a.logo,
      object: a.object,
      projection: a.projection,
      text: a.text,
      url: a.url
    })
  }
  E(jv, tu);

  function kv(a) {
    this.c = a.matrixIds;
    lk.call(this, {
      origin: a.origin,
      origins: a.origins,
      resolutions: a.resolutions,
      tileSize: a.tileSize,
      tileSizes: a.tileSizes
    })
  }
  E(kv, lk);
  kv.prototype.i = k("c");

  function lv(a) {
    var b = [],
      c = [],
      d = [],
      e = [],
      f = mg(a.supportedCRS).b();
    Va(a.matrixIds, function(a, b) {
      return b.scaleDenominator - a.scaleDenominator
    });
    Ka(a.matrixIds, function(a) {
      c.push(a.identifier);
      d.push(a.topLeftCorner);
      b.push(2.8E-4 * a.scaleDenominator / f);
      e.push(a.tileWidth)
    });
    return new kv({
      origins: d,
      resolutions: b,
      matrixIds: c,
      tileSizes: e
    })
  };
  var mv = "KVP";

  function nv(a) {
    function b(a) {
      a = e == mv ? Mg(Og([a], g)) : a.replace(/\{(\w+?)\}/g, function(a, b) {
        return b in g ? g[b] : a
      });
      return function(b) {
        if (null !== b) {
          var c = {
            TileMatrix: f.c[b.a],
            TileCol: b.x,
            TileRow: b.y
          };
          ec(c, this.a);
          b = a;
          return b = e == mv ? Mg(Og([b], c)) : b.replace(/\{(\w+?)\}/g, function(a, b) {
            return c[b]
          })
        }
      }
    }
    var c = u(a.version) ? a.version : "1.0.0",
      d = u(a.format) ? a.format : "image/jpeg";
    this.a = a.dimensions || {};
    this.e = "";
    ov(this);
    var e = u(a.requestEncoding) ? a.requestEncoding : mv,
      f = a.tileGrid,
      g = {
        Layer: a.layer,
        style: a.style,
        Style: a.style,
        TileMatrixSet: a.matrixSet
      };
    e == mv && ec(g, {
      Service: "WMTS",
      Request: "GetTile",
      Version: c,
      Format: d
    });
    c = Ot;
    d = a.urls;
    !u(d) && u(a.url) && (d = Qt(a.url));
    u(d) && (c = Nt(La(d, b)));
    var h = Fe(),
      m = new Za(0, 0, 0),
      c = Pt(function(b, c) {
        var d = this.tileGrid;
        if (d.Va().length <= b.a) return null;
        var e = b.x,
          f = -b.y - 1,
          g = nk(d, b),
          x = c.p(),
          w = u(a.extent) ? a.extent : x;
        null !== w && (c.j && w[0] === x[0] && w[2] === x[2]) && (g = Math.ceil((w[2] - w[0]) / (g[2] - g[0])), e = Pb(e, g), m.a = b.a, m.x = e, m.y = b.y, g = nk(d, m, h));
        return !We(g, w) || $e(g, w) ? null : new Za(b.a,
          e, f)
      }, c);
    Tt.call(this, {
      attributions: a.attributions,
      crossOrigin: a.crossOrigin,
      extent: a.extent,
      logo: a.logo,
      projection: a.projection,
      tileGrid: f,
      tileLoadFunction: a.tileLoadFunction,
      tileUrlFunction: c
    })
  }
  E(nv, Tt);
  nv.prototype.i = k("a");
  nv.prototype.Ga = function(a, b, c) {
    return this.e + nv.B.Ga.call(this, a, b, c)
  };

  function ov(a) {
    var b = 0,
      c = [],
      d;
    for (d in a.a) c[b++] = d + "-" + a.a[d];
    a.e = c.join("/")
  }
  nv.prototype.g = function(a) {
    ec(this.a, a);
    ov(this);
    this.s()
  };

  function pv(a) {
    var b = u(a) ? a : b;
    lk.call(this, {
      origin: [0, 0],
      resolutions: b.resolutions
    })
  }
  E(pv, lk);
  pv.prototype.c = function(a) {
    a = u(a) ? a : {};
    var b = this.minZoom,
      c = this.maxZoom,
      d = new Za(0, 0, 0),
      e = null;
    if (u(a.extent)) {
      var e = Array(c + 1),
        f;
      for (f = 0; f <= c; ++f) e[f] = f < b ? null : ok(this, a.extent, f)
    }
    return function(a, f, m) {
      f = a.a;
      if (f < b || c < f) return null;
      var n = Math.pow(2, f),
        p = a.x;
      if (0 > p || n <= p) return null;
      a = a.y;
      return a < -n || -1 < a || null !== e && (d.a = f, d.x = p, d.y = -a - 1, !e[f].contains(d)) ? null : $a(f, p, -a - 1, m)
    }
  };

  function qv(a) {
    a = u(a) ? a : {};
    var b = a.size,
      c = b[0],
      d = b[1],
      e = [],
      f = 256;
    switch (u(a.tierSizeCalculation) ? a.tierSizeCalculation : "default") {
      case "default":
        for (; c > f || d > f;) e.push([Math.ceil(c / f), Math.ceil(d / f)]), f += f;
        break;
      case "truncated":
        for (; c > f || d > f;) e.push([Math.ceil(c / f), Math.ceil(d / f)]), c >>= 1, d >>= 1
    }
    e.push([1, 1]);
    e.reverse();
    for (var f = [1], g = [0], d = 1, c = e.length; d < c; d++) f.push(1 << d), g.push(e[d - 1][0] * e[d - 1][1] + g[d - 1]);
    f.reverse();
    var f = new pv({
        resolutions: f
      }),
      h = a.url,
      b = Pt(f.c({
        extent: [0, 0, b[0], b[1]]
      }), function(a) {
        return null ===
          a ? void 0 : h + "TileGroup" + ((a.x + a.y * e[a.a][0] + g[a.a]) / 256 | 0) + "/" + a.a + "-" + a.x + "-" + a.y + ".jpg"
      });
    Tt.call(this, {
      attributions: a.attributions,
      crossOrigin: a.crossOrigin,
      logo: a.logo,
      uc: rv,
      tileGrid: f,
      tileUrlFunction: b
    })
  }
  E(qv, Tt);

  function rv(a, b, c, d, e) {
    rg.call(this, a, b, c, d, e);
    this.i = {}
  }
  E(rv, rg);
  rv.prototype.b = function(a) {
    var b = u(a) ? v(a).toString() : "";
    if (b in this.i) return this.i[b];
    a = rv.B.b.call(this, a);
    if (2 == this.state) {
      if (256 == a.width && 256 == a.height) return this.i[b] = a;
      var c = pc("CANVAS");
      c.width = 256;
      c.height = 256;
      c.getContext("2d").drawImage(a, 0, 0);
      return this.i[b] = c
    }
    return a
  };

  function sv(a) {
    a = u(a) ? a : {};
    this.a = a.font;
    this.b = a.rotation;
    this.d = a.scale;
    this.f = a.text;
    this.i = a.textAlign;
    this.g = a.textBaseline;
    this.c = u(a.fill) ? a.fill : null;
    this.e = u(a.stroke) ? a.stroke : null;
    this.j = u(a.offsetX) ? a.offsetX : 0;
    this.k = u(a.offsetY) ? a.offsetY : 0
  }
  l = sv.prototype;
  l.ff = k("a");
  l.uh = k("c");
  l.vh = k("b");
  l.wh = k("d");
  l.xh = k("e");
  l.yh = k("f");
  l.yf = k("i");
  l.zf = k("g");
  C("ol.Attribution", eb);
  C("ol.BrowserFeature", I);
  I.DEVICE_PIXEL_RATIO = I.sd;
  I.HAS_CANVAS = I.ud;
  I.HAS_DEVICE_ORIENTATION = I.vd;
  I.HAS_GEOLOCATION = I.wd;
  I.HAS_TOUCH = I.xc;
  I.HAS_WEBGL = I.xd;
  C("ol.Collection", Jd);
  Jd.prototype.clear = Jd.prototype.clear;
  Jd.prototype.extend = Jd.prototype.yg;
  Jd.prototype.forEach = Jd.prototype.forEach;
  Jd.prototype.getArray = Jd.prototype.zg;
  Jd.prototype.getAt = Jd.prototype.Mb;
  Jd.prototype.getLength = Jd.prototype.Ja;
  Jd.prototype.insertAt = Jd.prototype.jc;
  Jd.prototype.pop = Jd.prototype.Ud;
  Jd.prototype.push = Jd.prototype.push;
  Jd.prototype.remove = Jd.prototype.remove;
  Jd.prototype.removeAt = Jd.prototype.fd;
  Jd.prototype.setAt = Jd.prototype.di;
  C("ol.DeviceOrientation", Ld);
  C("ol.Feature", qe);
  qe.prototype.getGeometryName = qe.prototype.hf;
  qe.prototype.getId = qe.prototype.jf;
  qe.prototype.getStyle = qe.prototype.Fg;
  qe.prototype.getStyleFunction = qe.prototype.Gg;
  qe.prototype.setGeometryName = qe.prototype.k;
  qe.prototype.setId = qe.prototype.b;
  qe.prototype.setStyle = qe.prototype.j;
  C("ol.FeatureOverlay", ve);
  ve.prototype.addFeature = ve.prototype.Vd;
  ve.prototype.getFeatures = ve.prototype.Ag;
  ve.prototype.getStyle = ve.prototype.Bg;
  ve.prototype.getStyleFunction = ve.prototype.Cg;
  ve.prototype.removeFeature = ve.prototype.Wc;
  ve.prototype.setFeatures = ve.prototype.Tb;
  ve.prototype.setMap = ve.prototype.setMap;
  ve.prototype.setStyle = ve.prototype.Eg;
  C("ol.Geolocation", O);
  rg.prototype.getImage = rg.prototype.b;
  C("ol.Kinetic", Bg);
  C("ol.Map", T);
  T.prototype.addControl = T.prototype.Je;
  T.prototype.addInteraction = T.prototype.Le;
  T.prototype.addLayer = T.prototype.Me;
  T.prototype.addOverlay = T.prototype.Ne;
  T.prototype.beforeRender = T.prototype.na;
  T.prototype.forEachFeatureAtPixel = T.prototype.Xd;
  T.prototype.getControls = T.prototype.cf;
  T.prototype.getCoordinateFromPixel = T.prototype.ea;
  T.prototype.getEventCoordinate = T.prototype.Hd;
  T.prototype.getEventPixel = T.prototype.Mc;
  T.prototype.getInteractions = T.prototype.kf;
  T.prototype.getLayers = T.prototype.Ee;
  T.prototype.getOverlays = T.prototype.vf;
  T.prototype.getPixelFromCoordinate = T.prototype.g;
  T.prototype.getViewport = T.prototype.Cf;
  T.prototype.removeControl = T.prototype.Wh;
  T.prototype.removeInteraction = T.prototype.Xh;
  T.prototype.removeLayer = T.prototype.Yh;
  T.prototype.removeOverlay = T.prototype.Zh;
  T.prototype.render = T.prototype.J;
  T.prototype.renderSync = T.prototype.ai;
  T.prototype.updateSize = T.prototype.L;
  Ki.prototype.preventDefault = Ki.prototype.preventDefault;
  Ki.prototype.stopPropagation = Ki.prototype.ya;
  C("ol.Object", N);
  N.prototype.bindTo = N.prototype.Te;
  N.prototype.get = N.prototype.get;
  N.prototype.getProperties = N.prototype.jb;
  N.prototype.notify = N.prototype.Vc;
  N.prototype.set = N.prototype.t;
  N.prototype.setValues = N.prototype.T;
  N.prototype.unbind = N.prototype.kd;
  N.prototype.unbindAll = N.prototype.pi;
  C("ol.Observable", zd);
  zd.prototype.dispatchChangeEvent = zd.prototype.s;
  zd.prototype.on = zd.prototype.Ch;
  zd.prototype.once = zd.prototype.Ih;
  zd.prototype.un = zd.prototype.ni;
  zd.prototype.unByKey = zd.prototype.oi;
  C("ol.Overlay", Bn);
  qg.prototype.getTileCoord = qg.prototype.j;
  Za.prototype.getZXY = Za.prototype.c;
  C("ol.View2D", Q);
  Q.prototype.calculateExtent = Q.prototype.r;
  Q.prototype.centerOn = Q.prototype.Ve;
  Q.prototype.constrainResolution = Q.prototype.constrainResolution;
  Q.prototype.constrainRotation = Q.prototype.constrainRotation;
  Q.prototype.fitExtent = Q.prototype.Gd;
  Q.prototype.fitGeometry = Q.prototype.Ye;
  Q.prototype.getView2D = Q.prototype.M;
  Q.prototype.getZoom = Q.prototype.Ef;
  Q.prototype.setZoom = Q.prototype.u;
  C("ol.animation.bounce", function(a) {
    var b = a.resolution,
      c = u(a.start) ? a.start : wa(),
      d = u(a.duration) ? a.duration : 1E3,
      e = u(a.easing) ? a.easing : xg;
    return function(a, g) {
      if (g.time < c) return g.animate = !0, g.viewHints[0] += 1, !0;
      if (g.time < c + d) {
        var h = e((g.time - c) / d),
          m = b - g.view2DState.resolution;
        g.animate = !0;
        g.view2DState.resolution += h * m;
        g.viewHints[0] += 1;
        return !0
      }
      return !1
    }
  });
  C("ol.animation.pan", yg);
  C("ol.animation.rotate", zg);
  C("ol.animation.zoom", Ag);
  C("ol.color.asArray", function(a) {
    return ha(a) ? a : ge(a)
  });
  C("ol.color.asString", ee);
  C("ol.control.Attribution", rj);
  rj.prototype.setMap = rj.prototype.setMap;
  C("ol.control.Control", qj);
  qj.prototype.getMap = qj.prototype.O;
  qj.prototype.setMap = qj.prototype.setMap;
  C("ol.control.FullScreen", Hn);
  C("ol.control.Logo", sj);
  sj.prototype.setMap = sj.prototype.setMap;
  C("ol.control.MousePosition", In);
  In.prototype.setMap = In.prototype.setMap;
  C("ol.control.ScaleLine", Kn);
  Kn.prototype.setMap = Kn.prototype.setMap;
  C("ol.control.Zoom", tj);
  tj.prototype.setMap = tj.prototype.setMap;
  C("ol.control.ZoomSlider", Zn);
  C("ol.control.ZoomToExtent", co);
  C("ol.control.defaults", uj);
  C("ol.coordinate.createStringXY", function(a) {
    return function(b) {
      return De(b, a)
    }
  });
  C("ol.coordinate.format", ze);
  C("ol.coordinate.fromProjectedArray", function(a, b) {
    var c = b.charAt(0);
    return "n" === c || "s" === c ? [a[1], a[0]] : a
  });
  C("ol.coordinate.rotate", Be);
  C("ol.coordinate.toStringHDMS", function(a) {
    return u(a) ? ye(a[1], "NS") + " " + ye(a[0], "EW") : ""
  });
  C("ol.coordinate.toStringXY", De);
  C("ol.dom.Input", eo);
  C("ol.easing.bounce", function(a) {
    a < 1 / 2.75 ? a *= 7.5625 * a : a < 2 / 2.75 ? (a -= 1.5 / 2.75, a = 7.5625 * a * a + 0.75) : a < 2.5 / 2.75 ? (a -= 2.25 / 2.75, a = 7.5625 * a * a + 0.9375) : (a -= 2.625 / 2.75, a = 7.5625 * a * a + 0.984375);
    return a
  });
  C("ol.easing.easeIn", function(a) {
    return a * a * a
  });
  C("ol.easing.easeOut", ug);
  C("ol.easing.elastic", function(a) {
    return Math.pow(2, -10 * a) * Math.sin((a - 0.075) * 2 * Math.PI / 0.3) + 1
  });
  C("ol.easing.inAndOut", vg);
  C("ol.easing.linear", wg);
  C("ol.easing.upAndDown", xg);
  C("ol.events.condition.altKeyOnly", function(a) {
    a = a.a;
    return a.Z && !a.rb && !a.xa
  });
  C("ol.events.condition.altShiftKeysOnly", Aj);
  C("ol.events.condition.always", qd);
  C("ol.events.condition.never", pd);
  C("ol.events.condition.noModifierKeys", Cj);
  C("ol.events.condition.platformModifierKeyOnly", function(a) {
    a = a.a;
    return !a.Z && a.rb && !a.xa
  });
  C("ol.events.condition.shiftKeyOnly", Dj);
  C("ol.events.condition.targetNotEditable", Ej);
  C("ol.extent.boundingExtent", Ee);
  C("ol.extent.buffer", Ie);
  C("ol.extent.containsCoordinate", function(a, b) {
    return a[0] <= b[0] && b[0] <= a[2] && a[1] <= b[1] && b[1] <= a[3]
  });
  C("ol.extent.containsExtent", Le);
  C("ol.extent.createEmpty", Fe);
  C("ol.extent.equals", Ne);
  C("ol.extent.extend", Oe);
  C("ol.extent.getBottomLeft", Qe);
  C("ol.extent.getBottomRight", function(a) {
    return [a[2], a[1]]
  });
  C("ol.extent.getCenter", Re);
  C("ol.extent.getHeight", Te);
  C("ol.extent.getSize", function(a) {
    return [a[2] - a[0], a[3] - a[1]]
  });
  C("ol.extent.getTopLeft", Ue);
  C("ol.extent.getTopRight", function(a) {
    return [a[2], a[3]]
  });
  C("ol.extent.getWidth", Ve);
  C("ol.extent.intersects", We);
  C("ol.extent.isEmpty", Xe);
  C("ol.extent.transform", af);
  C("ol.format.GPX", fp);
  fp.prototype.readFeature = fp.prototype.tb;
  fp.prototype.readFeatures = fp.prototype.ua;
  fp.prototype.readProjection = fp.prototype.ia;
  fp.prototype.writeFeatures = fp.prototype.wc;
  C("ol.format.GeoJSON", Np);
  Np.prototype.readFeature = Np.prototype.tb;
  Np.prototype.readFeatures = Np.prototype.ua;
  Np.prototype.readGeometry = Np.prototype.cd;
  Np.prototype.readProjection = Np.prototype.ia;
  Np.prototype.writeFeature = Np.prototype.qd;
  Np.prototype.writeFeatures = Np.prototype.wc;
  Np.prototype.writeGeometry = Np.prototype.rd;
  C("ol.format.IGC", Wp);
  Wp.prototype.readFeature = Wp.prototype.tb;
  Wp.prototype.readFeatures = Wp.prototype.ua;
  Wp.prototype.readProjection = Wp.prototype.ia;
  C("ol.format.KML", $p);
  $p.prototype.readFeature = $p.prototype.tb;
  $p.prototype.readFeatures = $p.prototype.ua;
  $p.prototype.readName = $p.prototype.Sh;
  $p.prototype.readProjection = $p.prototype.ia;
  C("ol.format.TopoJSON", Tq);
  Tq.prototype.readFeatures = Tq.prototype.ua;
  Tq.prototype.readProjection = Tq.prototype.ia;
  C("ol.format.WFS", $r);
  $r.prototype.readFeatureCollectionMetadata = $r.prototype.d;
  $r.prototype.readFeatures = $r.prototype.ua;
  $r.prototype.readTransactionResponse = $r.prototype.f;
  $r.prototype.writeGetFeature = $r.prototype.i;
  $r.prototype.writeTransaction = $r.prototype.g;
  C("ol.format.WMSCapabilities", qs);
  qs.prototype.read = qs.prototype.a;
  C("ol.geom.Circle", Hl);
  Hl.prototype.clone = Hl.prototype.H;
  Hl.prototype.getCenter = Hl.prototype.Yc;
  Hl.prototype.getExtent = Hl.prototype.p;
  Hl.prototype.getRadius = Hl.prototype.Zd;
  Hl.prototype.getSimplifiedGeometry = Hl.prototype.Wa;
  Hl.prototype.getType = Hl.prototype.A;
  Hl.prototype.setCenter = Hl.prototype.Lg;
  Hl.prototype.setCenterAndRadius = Hl.prototype.ne;
  Hl.prototype.setRadius = Hl.prototype.fi;
  Hl.prototype.transform = Hl.prototype.transform;
  C("ol.geom.Geometry", Md);
  Md.prototype.getClosestPoint = Md.prototype.q;
  Md.prototype.getType = Md.prototype.A;
  C("ol.geom.GeometryCollection", Jl);
  Jl.prototype.clone = Jl.prototype.H;
  Jl.prototype.getExtent = Jl.prototype.p;
  Jl.prototype.getGeometries = Jl.prototype.gf;
  Jl.prototype.getSimplifiedGeometry = Jl.prototype.Wa;
  Jl.prototype.getType = Jl.prototype.A;
  Jl.prototype.setGeometries = Jl.prototype.pe;
  C("ol.geom.LineString", Ql);
  Ql.prototype.appendCoordinate = Ql.prototype.Oe;
  Ql.prototype.clone = Ql.prototype.H;
  Ql.prototype.getCoordinateAtM = Ql.prototype.Mg;
  Ql.prototype.getCoordinates = Ql.prototype.v;
  Ql.prototype.getLength = Ql.prototype.Ng;
  Ql.prototype.getType = Ql.prototype.A;
  Ql.prototype.setCoordinates = Ql.prototype.I;
  C("ol.geom.LinearRing", zf);
  zf.prototype.clone = zf.prototype.H;
  zf.prototype.getArea = zf.prototype.Og;
  zf.prototype.getCoordinates = zf.prototype.v;
  zf.prototype.getType = zf.prototype.A;
  zf.prototype.setCoordinates = zf.prototype.I;
  C("ol.geom.MultiLineString", Sl);
  Sl.prototype.appendLineString = Sl.prototype.Pe;
  Sl.prototype.clone = Sl.prototype.H;
  Sl.prototype.getCoordinateAtM = Sl.prototype.Pg;
  Sl.prototype.getCoordinates = Sl.prototype.v;
  Sl.prototype.getLineString = Sl.prototype.rf;
  Sl.prototype.getLineStrings = Sl.prototype.Pc;
  Sl.prototype.getType = Sl.prototype.A;
  Sl.prototype.setCoordinates = Sl.prototype.I;
  C("ol.geom.MultiPoint", Vl);
  Vl.prototype.appendPoint = Vl.prototype.Re;
  Vl.prototype.clone = Vl.prototype.H;
  Vl.prototype.getCoordinates = Vl.prototype.v;
  Vl.prototype.getPoint = Vl.prototype.wf;
  Vl.prototype.getPoints = Vl.prototype.Jd;
  Vl.prototype.getType = Vl.prototype.A;
  Vl.prototype.setCoordinates = Vl.prototype.I;
  C("ol.geom.MultiPolygon", Wl);
  Wl.prototype.appendPolygon = Wl.prototype.Se;
  Wl.prototype.clone = Wl.prototype.H;
  Wl.prototype.getArea = Wl.prototype.Qg;
  Wl.prototype.getCoordinates = Wl.prototype.v;
  Wl.prototype.getInteriorPoints = Wl.prototype.mf;
  Wl.prototype.getPolygon = Wl.prototype.xf;
  Wl.prototype.getPolygons = Wl.prototype.Kd;
  Wl.prototype.getType = Wl.prototype.A;
  Wl.prototype.setCoordinates = Wl.prototype.I;
  C("ol.geom.Point", Bf);
  Bf.prototype.clone = Bf.prototype.H;
  Bf.prototype.getCoordinates = Bf.prototype.v;
  Bf.prototype.getType = Bf.prototype.A;
  Bf.prototype.setCoordinates = Bf.prototype.I;
  C("ol.geom.Polygon", Jf);
  Jf.prototype.appendLinearRing = Jf.prototype.Qe;
  Jf.prototype.clone = Jf.prototype.H;
  Jf.prototype.getArea = Jf.prototype.Rg;
  Jf.prototype.getCoordinates = Jf.prototype.v;
  Jf.prototype.getInteriorPoint = Jf.prototype.lf;
  Jf.prototype.getLinearRing = Jf.prototype.sf;
  Jf.prototype.getLinearRings = Jf.prototype.Id;
  Jf.prototype.getType = Jf.prototype.A;
  Jf.prototype.setCoordinates = Jf.prototype.I;
  C("ol.geom.SimpleGeometry", ef);
  ef.prototype.getExtent = ef.prototype.p;
  ef.prototype.getFirstCoordinate = ef.prototype.ef;
  ef.prototype.getLastCoordinate = ef.prototype.nf;
  ef.prototype.getLayout = ef.prototype.of;
  ef.prototype.getSimplifiedGeometry = ef.prototype.Wa;
  ef.prototype.transform = ef.prototype.transform;
  C("ol.inherits", E);
  C("ol.interaction.DoubleClickZoom", zj);
  C("ol.interaction.DragAndDrop", at);
  C("ol.interaction.DragBox", Pj);
  Pj.prototype.getGeometry = Pj.prototype.K;
  C("ol.interaction.DragPan", Ij);
  C("ol.interaction.DragRotate", Jj);
  C("ol.interaction.DragRotateAndZoom", et);
  C("ol.interaction.DragZoom", Qj);
  C("ol.interaction.Draw", gt);
  C("ol.interaction.KeyboardPan", Rj);
  C("ol.interaction.KeyboardZoom", Sj);
  C("ol.interaction.Modify", qt);
  C("ol.interaction.MouseWheelZoom", Tj);
  C("ol.interaction.PinchRotate", Uj);
  C("ol.interaction.PinchZoom", Vj);
  C("ol.interaction.Select", tt);
  tt.prototype.getFeatures = tt.prototype.f;
  tt.prototype.setMap = tt.prototype.setMap;
  C("ol.interaction.defaults", Wj);
  C("ol.layer.Group", ak);
  C("ol.layer.Heatmap", wt);
  C("ol.layer.Image", Ok);
  C("ol.layer.Layer", hk);
  hk.prototype.getSource = hk.prototype.Tg;
  C("ol.layer.Tile", Pk);
  C("ol.layer.Vector", Qk);
  Qk.prototype.getStyle = Qk.prototype.Ca;
  Qk.prototype.getStyleFunction = Qk.prototype.Da;
  Qk.prototype.setStyle = Qk.prototype.g;
  C("ol.proj.METERS_PER_UNIT", Qf);
  C("ol.proj.Projection", Sf);
  Sf.prototype.getCode = Sf.prototype.g;
  Sf.prototype.getExtent = Sf.prototype.p;
  Sf.prototype.getUnits = Sf.prototype.l;
  C("ol.proj.addProjection", kg);
  C("ol.proj.common.add", gk);
  C("ol.proj.configureProj4jsProjection", function(a) {
    return Wf(a)
  });
  C("ol.proj.get", mg);
  C("ol.proj.getTransform", ng);
  C("ol.proj.getTransformFromProjections", Vf);
  C("ol.proj.transform", function(a, b, c) {
    return ng(b, c)(a)
  });
  C("ol.proj.transformWithProjections", function(a, b, c) {
    return Vf(b, c)(a)
  });
  Rk.prototype.drawAsync = Rk.prototype.ac;
  Rk.prototype.drawCircleGeometry = Rk.prototype.Gb;
  Rk.prototype.drawFeature = Rk.prototype.Jc;
  Rk.prototype.drawLineStringGeometry = Rk.prototype.Hb;
  Rk.prototype.drawMultiLineStringGeometry = Rk.prototype.Ib;
  Rk.prototype.drawMultiPointGeometry = Rk.prototype.Jb;
  Rk.prototype.drawPointGeometry = Rk.prototype.Kb;
  Rk.prototype.drawPolygonGeometry = Rk.prototype.hb;
  Rk.prototype.setFillStrokeStyle = Rk.prototype.ka;
  Rk.prototype.setImageStyle = Rk.prototype.vb;
  Rk.prototype.setTextStyle = Rk.prototype.aa;
  C("ol.source.BingMaps", Wt);
  Wt.TOS_ATTRIBUTION = Xt;
  C("ol.source.GPX", vu);
  C("ol.source.GeoJSON", wu);
  C("ol.source.IGC", xu);
  C("ol.source.ImageCanvas", zu);
  C("ol.source.ImageStatic", Au);
  C("ol.source.ImageVector", Bu);
  C("ol.source.ImageWMS", Cu);
  Cu.prototype.getGetFeatureInfoUrl = Cu.prototype.$g;
  Cu.prototype.getParams = Cu.prototype.ah;
  Cu.prototype.setUrl = Cu.prototype.bh;
  Cu.prototype.updateParams = Cu.prototype.dh;
  C("ol.source.KML", Fu);
  C("ol.source.MapGuide", Iu);
  C("ol.source.MapQuest", Ou);
  C("ol.source.OSM", Ku);
  Ku.DATA_ATTRIBUTION = Mu;
  Ku.TILE_ATTRIBUTION = Nu;
  C("ol.source.OSMXML", Xu);
  Xj.prototype.getExtent = Xj.prototype.p;
  Xj.prototype.getState = Xj.prototype.Y;
  C("ol.source.Stamen", $u);
  C("ol.source.Tile", sk);
  sk.prototype.getTileGrid = sk.prototype.Af;
  C("ol.source.TileDebug", cv);
  C("ol.source.TileJSON", ev);
  C("ol.source.TileWMS", fv);
  fv.prototype.getGetFeatureInfoUrl = fv.prototype.eh;
  fv.prototype.getParams = fv.prototype.fh;
  fv.prototype.updateParams = fv.prototype.gh;
  C("ol.source.TopoJSON", jv);
  C("ol.source.Vector", qm);
  qm.prototype.addFeature = qm.prototype.ae;
  qm.prototype.addFeatures = qm.prototype.Ke;
  qm.prototype.forEachFeature = qm.prototype.Ze;
  qm.prototype.forEachFeatureInExtent = qm.prototype.dc;
  qm.prototype.getClosestFeatureToCoordinate = qm.prototype.bf;
  qm.prototype.getExtent = qm.prototype.p;
  qm.prototype.getFeatures = qm.prototype.hh;
  qm.prototype.getFeaturesAtCoordinate = qm.prototype.df;
  qm.prototype.removeFeature = qm.prototype.ih;
  C("ol.source.VectorFile", tu);
  C("ol.source.WMTS", nv);
  C("ol.source.WMTS.optionsFromCapabilities", function(a, b) {
    var c = Na(a.contents.layers, function(a) {
        return a.identifier == b
      }),
      d = c.tileMatrixSetLinks[0].tileMatrixSet,
      e = c.formats[0],
      f = Oa(c.styles, function(a) {
        return a.isDefault
      });
    0 > f && (f = 0);
    var f = c.styles[f].identifier,
      g = {};
    Ka(c.dimensions, function(a) {
      var b = a.identifier,
        c = a["default"];
      u(c) || (c = a.values[0]);
      g[b] = c
    });
    var h = a.contents.tileMatrixSets[d],
      m = lv(h),
      h = mg(h.supportedCRS),
      n = a.operationsMetadata.GetTile.dcp.http.get,
      p, q;
    switch (Yb(n[0].constraints.GetEncoding.allowedValues)[0]) {
      case "REST":
      case "RESTful":
        q =
          "REST";
        p = c.resourceUrls.tile[e];
        break;
      case "KVP":
        q = mv, p = [], Ka(n, function(a) {
          a.constraints.GetEncoding.allowedValues.hasOwnProperty(mv) && p.push(a.url)
        })
    }
    return {
      urls: p,
      layer: b,
      matrixSet: d,
      format: e,
      projection: h,
      requestEncoding: q,
      tileGrid: m,
      style: f,
      dimensions: g
    }
  });
  nv.prototype.getDimensions = nv.prototype.i;
  nv.prototype.updateDimensions = nv.prototype.g;
  C("ol.source.XYZ", Ju);
  Ju.prototype.setUrl = Ju.prototype.a;
  C("ol.source.Zoomify", qv);
  C("ol.style.Circle", oe);
  oe.prototype.getAnchor = oe.prototype.Lb;
  oe.prototype.getFill = oe.prototype.jh;
  oe.prototype.getImage = oe.prototype.Rb;
  oe.prototype.getRadius = oe.prototype.kh;
  oe.prototype.getSize = oe.prototype.qb;
  oe.prototype.getStroke = oe.prototype.lh;
  C("ol.style.Fill", le);
  le.prototype.getColor = le.prototype.c;
  C("ol.style.Icon", Dk);
  Dk.prototype.getAnchor = Dk.prototype.Lb;
  Dk.prototype.getImage = Dk.prototype.Rb;
  Dk.prototype.getSize = Dk.prototype.qb;
  Dk.prototype.getSrc = Dk.prototype.mh;
  C("ol.style.Image", me);
  me.prototype.getRotation = me.prototype.N;
  me.prototype.getScale = me.prototype.o;
  C("ol.style.Stroke", ne);
  ne.prototype.getColor = ne.prototype.nh;
  ne.prototype.getLineCap = ne.prototype.pf;
  ne.prototype.getLineDash = ne.prototype.oh;
  ne.prototype.getLineJoin = ne.prototype.qf;
  ne.prototype.getMiterLimit = ne.prototype.uf;
  ne.prototype.getWidth = ne.prototype.ph;
  C("ol.style.Style", pe);
  pe.prototype.getFill = pe.prototype.qh;
  pe.prototype.getImage = pe.prototype.rh;
  pe.prototype.getStroke = pe.prototype.sh;
  pe.prototype.getText = pe.prototype.th;
  pe.prototype.getZIndex = pe.prototype.Df;
  C("ol.style.Text", sv);
  sv.prototype.getFill = sv.prototype.uh;
  sv.prototype.getFont = sv.prototype.ff;
  sv.prototype.getRotation = sv.prototype.vh;
  sv.prototype.getScale = sv.prototype.wh;
  sv.prototype.getStroke = sv.prototype.xh;
  sv.prototype.getText = sv.prototype.yh;
  sv.prototype.getTextAlign = sv.prototype.yf;
  sv.prototype.getTextBaseline = sv.prototype.zf;
  C("ol.tilegrid.TileGrid", lk);
  lk.prototype.getMinZoom = lk.prototype.tf;
  lk.prototype.getOrigin = lk.prototype.Sb;
  lk.prototype.getResolutions = lk.prototype.Va;
  lk.prototype.getTileSize = lk.prototype.fa;
  C("ol.tilegrid.WMTS", kv);
  kv.prototype.getMatrixIds = kv.prototype.i;
  C("ol.tilegrid.XYZ", Vt);
  C("ol.tilegrid.Zoomify", pv);
  C("ol.webgl.Context", un);
  un.prototype.getGL = un.prototype.zh;
  un.prototype.useProgram = un.prototype.$c;
})();
