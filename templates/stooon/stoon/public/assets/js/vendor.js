/**
 * 1. jQuery v2.2.4 | (c) jQuery Foundation
 * 2. Bootstrap v4.0.0
 * 3. Magnific Popup - v1.1.0
 * 4. jQuery Nice Select - v1.0
 * 5. Owl Carousel v2.3.4
 * 6. Slick.js Version: 1.9.0
 * 7. slick-animation.js Version: 0.3.3 Beta
 * 8. jQuery UI / price range
 * 9. Nice Select js
 */

/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!(function (a, b) {
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error('jQuery requires a window with a document');
            return b(a);
          })
    : b(a);
})('undefined' != typeof window ? window : this, function (a, b) {
  var c = [],
    d = a.document,
    e = c.slice,
    f = c.concat,
    g = c.push,
    h = c.indexOf,
    i = {},
    j = i.toString,
    k = i.hasOwnProperty,
    l = {},
    m = '2.2.4',
    n = function (a, b) {
      return new n.fn.init(a, b);
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function (a, b) {
      return b.toUpperCase();
    };
  (n.fn = n.prototype =
    {
      jquery: m,
      constructor: n,
      selector: '',
      length: 0,
      toArray: function () {
        return e.call(this);
      },
      get: function (a) {
        return null != a
          ? 0 > a
            ? this[a + this.length]
            : this[a]
          : e.call(this);
      },
      pushStack: function (a) {
        var b = n.merge(this.constructor(), a);
        return (b.prevObject = this), (b.context = this.context), b;
      },
      each: function (a) {
        return n.each(this, a);
      },
      map: function (a) {
        return this.pushStack(
          n.map(this, function (b, c) {
            return a.call(b, c, b);
          }),
        );
      },
      slice: function () {
        return this.pushStack(e.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (a) {
        var b = this.length,
          c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: g,
      sort: c.sort,
      splice: c.splice,
    }),
    (n.extend = n.fn.extend =
      function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for (
          'boolean' == typeof g && ((j = g), (g = arguments[h] || {}), h++),
            'object' == typeof g || n.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          i > h;
          h++
        )
          if (null != (a = arguments[h]))
            for (b in a)
              (c = g[b]),
                (d = a[b]),
                g !== d &&
                  (j && d && (n.isPlainObject(d) || (e = n.isArray(d)))
                    ? (e
                        ? ((e = !1), (f = c && n.isArray(c) ? c : []))
                        : (f = c && n.isPlainObject(c) ? c : {}),
                      (g[b] = n.extend(j, f, d)))
                    : void 0 !== d && (g[b] = d));
        return g;
      }),
    n.extend({
      expando: 'jQuery' + (m + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return 'function' === n.type(a);
      },
      isArray: Array.isArray,
      isWindow: function (a) {
        return null != a && a === a.window;
      },
      isNumeric: function (a) {
        var b = a && a.toString();
        return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
      },
      isPlainObject: function (a) {
        var b;
        if ('object' !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
        if (
          a.constructor &&
          !k.call(a, 'constructor') &&
          !k.call(a.constructor.prototype || {}, 'isPrototypeOf')
        )
          return !1;
        for (b in a);
        return void 0 === b || k.call(a, b);
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      type: function (a) {
        return null == a
          ? a + ''
          : 'object' == typeof a || 'function' == typeof a
          ? i[j.call(a)] || 'object'
          : typeof a;
      },
      globalEval: function (a) {
        var b,
          c = eval;
        (a = n.trim(a)),
          a &&
            (1 === a.indexOf('use strict')
              ? ((b = d.createElement('script')),
                (b.text = a),
                d.head.appendChild(b).parentNode.removeChild(b))
              : c(a));
      },
      camelCase: function (a) {
        return a.replace(p, 'ms-').replace(q, r);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, b) {
        var c,
          d = 0;
        if (s(a)) {
          for (c = a.length; c > d; d++)
            if (b.call(a[d], d, a[d]) === !1) break;
        } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
        return a;
      },
      trim: function (a) {
        return null == a ? '' : (a + '').replace(o, '');
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (s(Object(a))
              ? n.merge(c, 'string' == typeof a ? [a] : a)
              : g.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        return null == b ? -1 : h.call(b, a, c);
      },
      merge: function (a, b) {
        for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          e,
          g = 0,
          h = [];
        if (s(a))
          for (d = a.length; d > g; g++)
            (e = b(a[g], g, c)), null != e && h.push(e);
        else for (g in a) (e = b(a[g], g, c)), null != e && h.push(e);
        return f.apply([], h);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, d, f;
        return (
          'string' == typeof b && ((c = a[b]), (b = a), (a = c)),
          n.isFunction(a)
            ? ((d = e.call(arguments, 2)),
              (f = function () {
                return a.apply(b || this, d.concat(e.call(arguments)));
              }),
              (f.guid = a.guid = a.guid || n.guid++),
              f)
            : void 0
        );
      },
      now: Date.now,
      support: l,
    }),
    'function' == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]),
    n.each(
      'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
        ' ',
      ),
      function (a, b) {
        i['[object ' + b + ']'] = b.toLowerCase();
      },
    );
  function s(a) {
    var b = !!a && 'length' in a && a.length,
      c = n.type(a);
    return 'function' === c || n.isWindow(a)
      ? !1
      : 'array' === c ||
          0 === b ||
          ('number' == typeof b && b > 0 && b - 1 in a);
  }
  var t = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = 'sizzle' + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = ga(),
      z = ga(),
      A = ga(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
        return -1;
      },
      K =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      L = '[\\x20\\t\\r\\n\\f]',
      M = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
      N =
        '\\[' +
        L +
        '*(' +
        M +
        ')(?:' +
        L +
        '*([*^$|!~]?=)' +
        L +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        M +
        '))|)' +
        L +
        '*\\]',
      O =
        ':(' +
        M +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        N +
        ')*)|.*)\\)|)',
      P = new RegExp(L + '+', 'g'),
      Q = new RegExp('^' + L + '+|((?:^|[^\\\\])(?:\\\\.)*)' + L + '+$', 'g'),
      R = new RegExp('^' + L + '*,' + L + '*'),
      S = new RegExp('^' + L + '*([>+~]|' + L + ')' + L + '*'),
      T = new RegExp('=' + L + '*([^\\]\'"]*?)' + L + '*\\]', 'g'),
      U = new RegExp(O),
      V = new RegExp('^' + M + '$'),
      W = {
        ID: new RegExp('^#(' + M + ')'),
        CLASS: new RegExp('^\\.(' + M + ')'),
        TAG: new RegExp('^(' + M + '|[*])'),
        ATTR: new RegExp('^' + N),
        PSEUDO: new RegExp('^' + O),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            L +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            L +
            '*(?:([+-]|)' +
            L +
            '*(\\d+)|))' +
            L +
            '*\\)|)',
          'i',
        ),
        bool: new RegExp('^(?:' + K + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            L +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            L +
            '*((?:-\\d)?\\d*)' +
            L +
            '*\\)|)(?=[^-]|$)',
          'i',
        ),
      },
      X = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      _ = /[+~]/,
      aa = /'|\\/g,
      ba = new RegExp('\\\\([\\da-f]{1,6}' + L + '?|(' + L + ')|.)', 'ig'),
      ca = function (a, b, c) {
        var d = '0x' + b - 65536;
        return d !== d || c
          ? b
          : 0 > d
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      da = function () {
        m();
      };
    try {
      H.apply((E = I.call(v.childNodes)), v.childNodes),
        E[v.childNodes.length].nodeType;
    } catch (ea) {
      H = {
        apply: E.length
          ? function (a, b) {
              G.apply(a, I.call(b));
            }
          : function (a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            },
      };
    }
    function fa(a, b, d, e) {
      var f,
        h,
        j,
        k,
        l,
        o,
        r,
        s,
        w = b && b.ownerDocument,
        x = b ? b.nodeType : 9;
      if (
        ((d = d || []),
        'string' != typeof a || !a || (1 !== x && 9 !== x && 11 !== x))
      )
        return d;
      if (
        !e &&
        ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)
      ) {
        if (11 !== x && (o = $.exec(a)))
          if ((f = o[1])) {
            if (9 === x) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d;
            } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f)
              return d.push(j), d;
          } else {
            if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if (
              (f = o[3]) &&
              c.getElementsByClassName &&
              b.getElementsByClassName
            )
              return H.apply(d, b.getElementsByClassName(f)), d;
          }
        if (c.qsa && !A[a + ' '] && (!q || !q.test(a))) {
          if (1 !== x) (w = b), (s = a);
          else if ('object' !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute('id'))
              ? (k = k.replace(aa, '\\$&'))
              : b.setAttribute('id', (k = u)),
              (r = g(a)),
              (h = r.length),
              (l = V.test(k) ? '#' + k : "[id='" + k + "']");
            while (h--) r[h] = l + ' ' + qa(r[h]);
            (s = r.join(',')), (w = (_.test(a) && oa(b.parentNode)) || b);
          }
          if (s)
            try {
              return H.apply(d, w.querySelectorAll(s)), d;
            } catch (y) {
            } finally {
              k === u && b.removeAttribute('id');
            }
        }
      }
      return i(a.replace(Q, '$1'), b, d, e);
    }
    function ga() {
      var a = [];
      function b(c, e) {
        return (
          a.push(c + ' ') > d.cacheLength && delete b[a.shift()],
          (b[c + ' '] = e)
        );
      }
      return b;
    }
    function ha(a) {
      return (a[u] = !0), a;
    }
    function ia(a) {
      var b = n.createElement('div');
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function ja(a, b) {
      var c = a.split('|'),
        e = c.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function ka(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return 'input' === c && b.type === a;
      };
    }
    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ('input' === c || 'button' === c) && b.type === a;
      };
    }
    function na(a) {
      return ha(function (b) {
        return (
          (b = +b),
          ha(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function oa(a) {
      return a && 'undefined' != typeof a.getElementsByTagName && a;
    }
    (c = fa.support = {}),
      (f = fa.isXML =
        function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return b ? 'HTML' !== b.nodeName : !1;
        }),
      (m = fa.setDocument =
        function (a) {
          var b,
            e,
            g = a ? a.ownerDocument || a : v;
          return g !== n && 9 === g.nodeType && g.documentElement
            ? ((n = g),
              (o = n.documentElement),
              (p = !f(n)),
              (e = n.defaultView) &&
                e.top !== e &&
                (e.addEventListener
                  ? e.addEventListener('unload', da, !1)
                  : e.attachEvent && e.attachEvent('onunload', da)),
              (c.attributes = ia(function (a) {
                return (a.className = 'i'), !a.getAttribute('className');
              })),
              (c.getElementsByTagName = ia(function (a) {
                return (
                  a.appendChild(n.createComment('')),
                  !a.getElementsByTagName('*').length
                );
              })),
              (c.getElementsByClassName = Z.test(n.getElementsByClassName)),
              (c.getById = ia(function (a) {
                return (
                  (o.appendChild(a).id = u),
                  !n.getElementsByName || !n.getElementsByName(u).length
                );
              })),
              c.getById
                ? ((d.find.ID = function (a, b) {
                    if ('undefined' != typeof b.getElementById && p) {
                      var c = b.getElementById(a);
                      return c ? [c] : [];
                    }
                  }),
                  (d.filter.ID = function (a) {
                    var b = a.replace(ba, ca);
                    return function (a) {
                      return a.getAttribute('id') === b;
                    };
                  }))
                : (delete d.find.ID,
                  (d.filter.ID = function (a) {
                    var b = a.replace(ba, ca);
                    return function (a) {
                      var c =
                        'undefined' != typeof a.getAttributeNode &&
                        a.getAttributeNode('id');
                      return c && c.value === b;
                    };
                  })),
              (d.find.TAG = c.getElementsByTagName
                ? function (a, b) {
                    return 'undefined' != typeof b.getElementsByTagName
                      ? b.getElementsByTagName(a)
                      : c.qsa
                      ? b.querySelectorAll(a)
                      : void 0;
                  }
                : function (a, b) {
                    var c,
                      d = [],
                      e = 0,
                      f = b.getElementsByTagName(a);
                    if ('*' === a) {
                      while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                      return d;
                    }
                    return f;
                  }),
              (d.find.CLASS =
                c.getElementsByClassName &&
                function (a, b) {
                  return 'undefined' != typeof b.getElementsByClassName && p
                    ? b.getElementsByClassName(a)
                    : void 0;
                }),
              (r = []),
              (q = []),
              (c.qsa = Z.test(n.querySelectorAll)) &&
                (ia(function (a) {
                  (o.appendChild(a).innerHTML =
                    "<a id='" +
                    u +
                    "'></a><select id='" +
                    u +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    a.querySelectorAll("[msallowcapture^='']").length &&
                      q.push('[*^$]=' + L + '*(?:\'\'|"")'),
                    a.querySelectorAll('[selected]').length ||
                      q.push('\\[' + L + '*(?:value|' + K + ')'),
                    a.querySelectorAll('[id~=' + u + '-]').length ||
                      q.push('~='),
                    a.querySelectorAll(':checked').length || q.push(':checked'),
                    a.querySelectorAll('a#' + u + '+*').length ||
                      q.push('.#.+[+~]');
                }),
                ia(function (a) {
                  var b = n.createElement('input');
                  b.setAttribute('type', 'hidden'),
                    a.appendChild(b).setAttribute('name', 'D'),
                    a.querySelectorAll('[name=d]').length &&
                      q.push('name' + L + '*[*^$|!~]?='),
                    a.querySelectorAll(':enabled').length ||
                      q.push(':enabled', ':disabled'),
                    a.querySelectorAll('*,:x'),
                    q.push(',.*:');
                })),
              (c.matchesSelector = Z.test(
                (s =
                  o.matches ||
                  o.webkitMatchesSelector ||
                  o.mozMatchesSelector ||
                  o.oMatchesSelector ||
                  o.msMatchesSelector),
              )) &&
                ia(function (a) {
                  (c.disconnectedMatch = s.call(a, 'div')),
                    s.call(a, "[s!='']:x"),
                    r.push('!=', O);
                }),
              (q = q.length && new RegExp(q.join('|'))),
              (r = r.length && new RegExp(r.join('|'))),
              (b = Z.test(o.compareDocumentPosition)),
              (t =
                b || Z.test(o.contains)
                  ? function (a, b) {
                      var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                      return (
                        a === d ||
                        !(
                          !d ||
                          1 !== d.nodeType ||
                          !(c.contains
                            ? c.contains(d)
                            : a.compareDocumentPosition &&
                              16 & a.compareDocumentPosition(d))
                        )
                      );
                    }
                  : function (a, b) {
                      if (b) while ((b = b.parentNode)) if (b === a) return !0;
                      return !1;
                    }),
              (B = b
                ? function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var d =
                      !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d
                      ? d
                      : ((d =
                          (a.ownerDocument || a) === (b.ownerDocument || b)
                            ? a.compareDocumentPosition(b)
                            : 1),
                        1 & d ||
                        (!c.sortDetached && b.compareDocumentPosition(a) === d)
                          ? a === n || (a.ownerDocument === v && t(v, a))
                            ? -1
                            : b === n || (b.ownerDocument === v && t(v, b))
                            ? 1
                            : k
                            ? J(k, a) - J(k, b)
                            : 0
                          : 4 & d
                          ? -1
                          : 1);
                  }
                : function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var c,
                      d = 0,
                      e = a.parentNode,
                      f = b.parentNode,
                      g = [a],
                      h = [b];
                    if (!e || !f)
                      return a === n
                        ? -1
                        : b === n
                        ? 1
                        : e
                        ? -1
                        : f
                        ? 1
                        : k
                        ? J(k, a) - J(k, b)
                        : 0;
                    if (e === f) return ka(a, b);
                    c = a;
                    while ((c = c.parentNode)) g.unshift(c);
                    c = b;
                    while ((c = c.parentNode)) h.unshift(c);
                    while (g[d] === h[d]) d++;
                    return d
                      ? ka(g[d], h[d])
                      : g[d] === v
                      ? -1
                      : h[d] === v
                      ? 1
                      : 0;
                  }),
              n)
            : n;
        }),
      (fa.matches = function (a, b) {
        return fa(a, null, null, b);
      }),
      (fa.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(T, "='$1']")),
          c.matchesSelector &&
            p &&
            !A[b + ' '] &&
            (!r || !r.test(b)) &&
            (!q || !q.test(b)))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return fa(b, n, null, [a]).length > 0;
      }),
      (fa.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (fa.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (fa.error = function (a) {
        throw new Error('Syntax error, unrecognized expression: ' + a);
      }),
      (fa.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = fa.getText =
        function (a) {
          var b,
            c = '',
            d = 0,
            f = a.nodeType;
          if (f) {
            if (1 === f || 9 === f || 11 === f) {
              if ('string' == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
            } else if (3 === f || 4 === f) return a.nodeValue;
          } else while ((b = a[d++])) c += e(b);
          return c;
        }),
      (d = fa.selectors =
        {
          cacheLength: 50,
          createPseudo: ha,
          match: W,
          attrHandle: {},
          find: {},
          relative: {
            '>': { dir: 'parentNode', first: !0 },
            ' ': { dir: 'parentNode' },
            '+': { dir: 'previousSibling', first: !0 },
            '~': { dir: 'previousSibling' },
          },
          preFilter: {
            ATTR: function (a) {
              return (
                (a[1] = a[1].replace(ba, ca)),
                (a[3] = (a[3] || a[4] || a[5] || '').replace(ba, ca)),
                '~=' === a[2] && (a[3] = ' ' + a[3] + ' '),
                a.slice(0, 4)
              );
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()),
                'nth' === a[1].slice(0, 3)
                  ? (a[3] || fa.error(a[0]),
                    (a[4] = +(a[4]
                      ? a[5] + (a[6] || 1)
                      : 2 * ('even' === a[3] || 'odd' === a[3]))),
                    (a[5] = +(a[7] + a[8] || 'odd' === a[3])))
                  : a[3] && fa.error(a[0]),
                a
              );
            },
            PSEUDO: function (a) {
              var b,
                c = !a[6] && a[2];
              return W.CHILD.test(a[0])
                ? null
                : (a[3]
                    ? (a[2] = a[4] || a[5] || '')
                    : c &&
                      U.test(c) &&
                      (b = g(c, !0)) &&
                      (b = c.indexOf(')', c.length - b) - c.length) &&
                      ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                  a.slice(0, 3));
            },
          },
          filter: {
            TAG: function (a) {
              var b = a.replace(ba, ca).toLowerCase();
              return '*' === a
                ? function () {
                    return !0;
                  }
                : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b;
                  };
            },
            CLASS: function (a) {
              var b = y[a + ' '];
              return (
                b ||
                ((b = new RegExp('(^|' + L + ')' + a + '(' + L + '|$)')) &&
                  y(a, function (a) {
                    return b.test(
                      ('string' == typeof a.className && a.className) ||
                        ('undefined' != typeof a.getAttribute &&
                          a.getAttribute('class')) ||
                        '',
                    );
                  }))
              );
            },
            ATTR: function (a, b, c) {
              return function (d) {
                var e = fa.attr(d, a);
                return null == e
                  ? '!=' === b
                  : b
                  ? ((e += ''),
                    '=' === b
                      ? e === c
                      : '!=' === b
                      ? e !== c
                      : '^=' === b
                      ? c && 0 === e.indexOf(c)
                      : '*=' === b
                      ? c && e.indexOf(c) > -1
                      : '$=' === b
                      ? c && e.slice(-c.length) === c
                      : '~=' === b
                      ? (' ' + e.replace(P, ' ') + ' ').indexOf(c) > -1
                      : '|=' === b
                      ? e === c || e.slice(0, c.length + 1) === c + '-'
                      : !1)
                  : !0;
              };
            },
            CHILD: function (a, b, c, d, e) {
              var f = 'nth' !== a.slice(0, 3),
                g = 'last' !== a.slice(-4),
                h = 'of-type' === b;
              return 1 === d && 0 === e
                ? function (a) {
                    return !!a.parentNode;
                  }
                : function (b, c, i) {
                    var j,
                      k,
                      l,
                      m,
                      n,
                      o,
                      p = f !== g ? 'nextSibling' : 'previousSibling',
                      q = b.parentNode,
                      r = h && b.nodeName.toLowerCase(),
                      s = !i && !h,
                      t = !1;
                    if (q) {
                      if (f) {
                        while (p) {
                          m = b;
                          while ((m = m[p]))
                            if (
                              h
                                ? m.nodeName.toLowerCase() === r
                                : 1 === m.nodeType
                            )
                              return !1;
                          o = p = 'only' === a && !o && 'nextSibling';
                        }
                        return !0;
                      }
                      if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                        (m = q),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n && j[2]),
                          (m = n && q.childNodes[n]);
                        while (
                          (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (1 === m.nodeType && ++t && m === b) {
                            k[a] = [w, n, t];
                            break;
                          }
                      } else if (
                        (s &&
                          ((m = b),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n)),
                        t === !1)
                      )
                        while (
                          (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (
                            (h
                              ? m.nodeName.toLowerCase() === r
                              : 1 === m.nodeType) &&
                            ++t &&
                            (s &&
                              ((l = m[u] || (m[u] = {})),
                              (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                              (k[a] = [w, t])),
                            m === b)
                          )
                            break;
                      return (t -= e), t === d || (t % d === 0 && t / d >= 0);
                    }
                  };
            },
            PSEUDO: function (a, b) {
              var c,
                e =
                  d.pseudos[a] ||
                  d.setFilters[a.toLowerCase()] ||
                  fa.error('unsupported pseudo: ' + a);
              return e[u]
                ? e(b)
                : e.length > 1
                ? ((c = [a, a, '', b]),
                  d.setFilters.hasOwnProperty(a.toLowerCase())
                    ? ha(function (a, c) {
                        var d,
                          f = e(a, b),
                          g = f.length;
                        while (g--) (d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
                      })
                    : function (a) {
                        return e(a, 0, c);
                      })
                : e;
            },
          },
          pseudos: {
            not: ha(function (a) {
              var b = [],
                c = [],
                d = h(a.replace(Q, '$1'));
              return d[u]
                ? ha(function (a, b, c, e) {
                    var f,
                      g = d(a, null, e, []),
                      h = a.length;
                    while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                  })
                : function (a, e, f) {
                    return (
                      (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop()
                    );
                  };
            }),
            has: ha(function (a) {
              return function (b) {
                return fa(a, b).length > 0;
              };
            }),
            contains: ha(function (a) {
              return (
                (a = a.replace(ba, ca)),
                function (b) {
                  return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                }
              );
            }),
            lang: ha(function (a) {
              return (
                V.test(a || '') || fa.error('unsupported lang: ' + a),
                (a = a.replace(ba, ca).toLowerCase()),
                function (b) {
                  var c;
                  do
                    if (
                      (c = p
                        ? b.lang
                        : b.getAttribute('xml:lang') || b.getAttribute('lang'))
                    )
                      return (
                        (c = c.toLowerCase()),
                        c === a || 0 === c.indexOf(a + '-')
                      );
                  while ((b = b.parentNode) && 1 === b.nodeType);
                  return !1;
                }
              );
            }),
            target: function (b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root: function (a) {
              return a === o;
            },
            focus: function (a) {
              return (
                a === n.activeElement &&
                (!n.hasFocus || n.hasFocus()) &&
                !!(a.type || a.href || ~a.tabIndex)
              );
            },
            enabled: function (a) {
              return a.disabled === !1;
            },
            disabled: function (a) {
              return a.disabled === !0;
            },
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return (
                ('input' === b && !!a.checked) ||
                ('option' === b && !!a.selected)
              );
            },
            selected: function (a) {
              return (
                a.parentNode && a.parentNode.selectedIndex, a.selected === !0
              );
            },
            empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6) return !1;
              return !0;
            },
            parent: function (a) {
              return !d.pseudos.empty(a);
            },
            header: function (a) {
              return Y.test(a.nodeName);
            },
            input: function (a) {
              return X.test(a.nodeName);
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return ('input' === b && 'button' === a.type) || 'button' === b;
            },
            text: function (a) {
              var b;
              return (
                'input' === a.nodeName.toLowerCase() &&
                'text' === a.type &&
                (null == (b = a.getAttribute('type')) ||
                  'text' === b.toLowerCase())
              );
            },
            first: na(function () {
              return [0];
            }),
            last: na(function (a, b) {
              return [b - 1];
            }),
            eq: na(function (a, b, c) {
              return [0 > c ? c + b : c];
            }),
            even: na(function (a, b) {
              for (var c = 0; b > c; c += 2) a.push(c);
              return a;
            }),
            odd: na(function (a, b) {
              for (var c = 1; b > c; c += 2) a.push(c);
              return a;
            }),
            lt: na(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
              return a;
            }),
            gt: na(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
              return a;
            }),
          },
        }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = la(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = ma(b);
    function pa() {}
    (pa.prototype = d.filters = d.pseudos),
      (d.setFilters = new pa()),
      (g = fa.tokenize =
        function (a, b) {
          var c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = z[a + ' '];
          if (k) return b ? 0 : k.slice(0);
          (h = a), (i = []), (j = d.preFilter);
          while (h) {
            (c && !(e = R.exec(h))) ||
              (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
              (c = !1),
              (e = S.exec(h)) &&
                ((c = e.shift()),
                f.push({ value: c, type: e[0].replace(Q, ' ') }),
                (h = h.slice(c.length)));
            for (g in d.filter)
              !(e = W[g].exec(h)) ||
                (j[g] && !(e = j[g](e))) ||
                ((c = e.shift()),
                f.push({ value: c, type: g, matches: e }),
                (h = h.slice(c.length)));
            if (!c) break;
          }
          return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
        });
    function qa(a) {
      for (var b = 0, c = a.length, d = ''; c > b; b++) d += a[b].value;
      return d;
    }
    function ra(a, b, c) {
      var d = b.dir,
        e = c && 'parentNode' === d,
        f = x++;
      return b.first
        ? function (b, c, f) {
            while ((b = b[d])) if (1 === b.nodeType || e) return a(b, c, f);
          }
        : function (b, c, g) {
            var h,
              i,
              j,
              k = [w, f];
            if (g) {
              while ((b = b[d]))
                if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || e) {
                  if (
                    ((j = b[u] || (b[u] = {})),
                    (i = j[b.uniqueID] || (j[b.uniqueID] = {})),
                    (h = i[d]) && h[0] === w && h[1] === f)
                  )
                    return (k[2] = h[2]);
                  if (((i[d] = k), (k[2] = a(b, c, g)))) return !0;
                }
          };
    }
    function sa(a) {
      return a.length > 1
        ? function (b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
      return c;
    }
    function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
        (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
      return g;
    }
    function va(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = va(d)),
        e && !e[u] && (e = va(e, f)),
        ha(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ta(b || '*', h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : ua(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = ua(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? J(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = ua(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
        })
      );
    }
    function wa(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[' '],
          i = g ? 1 : 0,
          k = ra(
            function (a) {
              return a === b;
            },
            h,
            !0,
          ),
          l = ra(
            function (a) {
              return J(b, a) > -1;
            },
            h,
            !0,
          ),
          m = [
            function (a, c, d) {
              var e =
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              return (b = null), e;
            },
          ];
        f > i;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [ra(sa(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
            return va(
              i > 1 && sa(m),
              i > 1 &&
                qa(
                  a
                    .slice(0, i - 1)
                    .concat({ value: ' ' === a[i - 2].type ? '*' : '' }),
                ).replace(Q, '$1'),
              c,
              e > i && wa(a.slice(i, e)),
              f > e && wa((a = a.slice(e))),
              f > e && qa(a),
            );
          }
          m.push(c);
        }
      return sa(m);
    }
    function xa(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            o,
            q,
            r = 0,
            s = '0',
            t = f && [],
            u = [],
            v = j,
            x = f || (e && d.find.TAG('*', k)),
            y = (w += null == v ? 1 : Math.random() || 0.1),
            z = x.length;
          for (
            k && (j = g === n || g || k);
            s !== z && null != (l = x[s]);
            s++
          ) {
            if (e && l) {
              (o = 0), g || l.ownerDocument === n || (m(l), (h = !p));
              while ((q = a[o++]))
                if (q(l, g || n, h)) {
                  i.push(l);
                  break;
                }
              k && (w = y);
            }
            c && ((l = !q && l) && r--, f && t.push(l));
          }
          if (((r += s), c && s !== r)) {
            o = 0;
            while ((q = b[o++])) q(t, u, g, h);
            if (f) {
              if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));
              u = ua(u);
            }
            H.apply(i, u),
              k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
          }
          return k && ((w = y), (j = v)), t;
        };
      return c ? ha(f) : f;
    }
    return (
      (h = fa.compile =
        function (a, b) {
          var c,
            d = [],
            e = [],
            f = A[a + ' '];
          if (!f) {
            b || (b = g(a)), (c = b.length);
            while (c--) (f = wa(b[c])), f[u] ? d.push(f) : e.push(f);
            (f = A(a, xa(e, d))), (f.selector = a);
          }
          return f;
        }),
      (i = fa.select =
        function (a, b, e, f) {
          var i,
            j,
            k,
            l,
            m,
            n = 'function' == typeof a && a,
            o = !f && g((a = n.selector || a));
          if (((e = e || []), 1 === o.length)) {
            if (
              ((j = o[0] = o[0].slice(0)),
              j.length > 2 &&
                'ID' === (k = j[0]).type &&
                c.getById &&
                9 === b.nodeType &&
                p &&
                d.relative[j[1].type])
            ) {
              if (
                ((b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0]),
                !b)
              )
                return e;
              n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
            }
            i = W.needsContext.test(a) ? 0 : j.length;
            while (i--) {
              if (((k = j[i]), d.relative[(l = k.type)])) break;
              if (
                (m = d.find[l]) &&
                (f = m(
                  k.matches[0].replace(ba, ca),
                  (_.test(j[0].type) && oa(b.parentNode)) || b,
                ))
              ) {
                if ((j.splice(i, 1), (a = f.length && qa(j)), !a))
                  return H.apply(e, f), e;
                break;
              }
            }
          }
          return (
            (n || h(a, o))(
              f,
              b,
              !p,
              e,
              !b || (_.test(a) && oa(b.parentNode)) || b,
            ),
            e
          );
        }),
      (c.sortStable = u.split('').sort(B).join('') === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ia(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement('div'));
      })),
      ia(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          '#' === a.firstChild.getAttribute('href')
        );
      }) ||
        ja('type|href|height|width', function (a, b, c) {
          return c
            ? void 0
            : a.getAttribute(b, 'type' === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        ia(function (a) {
          return (
            (a.innerHTML = '<input/>'),
            a.firstChild.setAttribute('value', ''),
            '' === a.firstChild.getAttribute('value')
          );
        })) ||
        ja('value', function (a, b, c) {
          return c || 'input' !== a.nodeName.toLowerCase()
            ? void 0
            : a.defaultValue;
        }),
      ia(function (a) {
        return null == a.getAttribute('disabled');
      }) ||
        ja(K, function (a, b, c) {
          var d;
          return c
            ? void 0
            : a[b] === !0
            ? b.toLowerCase()
            : (d = a.getAttributeNode(b)) && d.specified
            ? d.value
            : null;
        }),
      fa
    );
  })(a);
  (n.find = t),
    (n.expr = t.selectors),
    (n.expr[':'] = n.expr.pseudos),
    (n.uniqueSort = n.unique = t.uniqueSort),
    (n.text = t.getText),
    (n.isXMLDoc = t.isXML),
    (n.contains = t.contains);
  var u = function (a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    v = function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
    w = n.expr.match.needsContext,
    x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    y = /^.[^:#\[\.,]*$/;
  function z(a, b, c) {
    if (n.isFunction(b))
      return n.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return n.grep(a, function (a) {
        return (a === b) !== c;
      });
    if ('string' == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }
    return n.grep(a, function (a) {
      return h.call(b, a) > -1 !== c;
    });
  }
  (n.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ':not(' + a + ')'),
      1 === b.length && 1 === d.nodeType
        ? n.find.matchesSelector(d, a)
          ? [d]
          : []
        : n.find.matches(
            a,
            n.grep(b, function (a) {
              return 1 === a.nodeType;
            }),
          )
    );
  }),
    n.fn.extend({
      find: function (a) {
        var b,
          c = this.length,
          d = [],
          e = this;
        if ('string' != typeof a)
          return this.pushStack(
            n(a).filter(function () {
              for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
            }),
          );
        for (b = 0; c > b; b++) n.find(a, e[b], d);
        return (
          (d = this.pushStack(c > 1 ? n.unique(d) : d)),
          (d.selector = this.selector ? this.selector + ' ' + a : a),
          d
        );
      },
      filter: function (a) {
        return this.pushStack(z(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(z(this, a || [], !0));
      },
      is: function (a) {
        return !!z(this, 'string' == typeof a && w.test(a) ? n(a) : a || [], !1)
          .length;
      },
    });
  var A,
    B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    C = (n.fn.init = function (a, b, c) {
      var e, f;
      if (!a) return this;
      if (((c = c || A), 'string' == typeof a)) {
        if (
          ((e =
            '<' === a[0] && '>' === a[a.length - 1] && a.length >= 3
              ? [null, a, null]
              : B.exec(a)),
          !e || (!e[1] && b))
        )
          return !b || b.jquery
            ? (b || c).find(a)
            : this.constructor(b).find(a);
        if (e[1]) {
          if (
            ((b = b instanceof n ? b[0] : b),
            n.merge(
              this,
              n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0),
            ),
            x.test(e[1]) && n.isPlainObject(b))
          )
            for (e in b)
              n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this;
        }
        return (
          (f = d.getElementById(e[2])),
          f && f.parentNode && ((this.length = 1), (this[0] = f)),
          (this.context = d),
          (this.selector = a),
          this
        );
      }
      return a.nodeType
        ? ((this.context = this[0] = a), (this.length = 1), this)
        : n.isFunction(a)
        ? void 0 !== c.ready
          ? c.ready(a)
          : a(n)
        : (void 0 !== a.selector &&
            ((this.selector = a.selector), (this.context = a.context)),
          n.makeArray(a, this));
    });
  (C.prototype = n.fn), (A = n(d));
  var D = /^(?:parents|prev(?:Until|All))/,
    E = { children: !0, contents: !0, next: !0, prev: !0 };
  n.fn.extend({
    has: function (a) {
      var b = n(a, this),
        c = b.length;
      return this.filter(function () {
        for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
      });
    },
    closest: function (a, b) {
      for (
        var c,
          d = 0,
          e = this.length,
          f = [],
          g = w.test(a) || 'string' != typeof a ? n(a, b || this.context) : 0;
        e > d;
        d++
      )
        for (c = this[d]; c && c !== b; c = c.parentNode)
          if (
            c.nodeType < 11 &&
            (g
              ? g.index(c) > -1
              : 1 === c.nodeType && n.find.matchesSelector(c, a))
          ) {
            f.push(c);
            break;
          }
      return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    },
    index: function (a) {
      return a
        ? 'string' == typeof a
          ? h.call(n(a), this[0])
          : h.call(this, a.jquery ? a[0] : a)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    },
  });
  function F(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a;
  }
  n.each(
    {
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function (a) {
        return u(a, 'parentNode');
      },
      parentsUntil: function (a, b, c) {
        return u(a, 'parentNode', c);
      },
      next: function (a) {
        return F(a, 'nextSibling');
      },
      prev: function (a) {
        return F(a, 'previousSibling');
      },
      nextAll: function (a) {
        return u(a, 'nextSibling');
      },
      prevAll: function (a) {
        return u(a, 'previousSibling');
      },
      nextUntil: function (a, b, c) {
        return u(a, 'nextSibling', c);
      },
      prevUntil: function (a, b, c) {
        return u(a, 'previousSibling', c);
      },
      siblings: function (a) {
        return v((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return v(a.firstChild);
      },
      contents: function (a) {
        return a.contentDocument || n.merge([], a.childNodes);
      },
    },
    function (a, b) {
      n.fn[a] = function (c, d) {
        var e = n.map(this, b, c);
        return (
          'Until' !== a.slice(-5) && (d = c),
          d && 'string' == typeof d && (e = n.filter(d, e)),
          this.length > 1 &&
            (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()),
          this.pushStack(e)
        );
      };
    },
  );
  var G = /\S+/g;
  function H(a) {
    var b = {};
    return (
      n.each(a.match(G) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  (n.Callbacks = function (a) {
    a = 'string' == typeof a ? H(a) : n.extend({}, a);
    var b,
      c,
      d,
      e,
      f = [],
      g = [],
      h = -1,
      i = function () {
        for (e = a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length)
            f[h].apply(c[0], c[1]) === !1 &&
              a.stopOnFalse &&
              ((h = f.length), (c = !1));
        }
        a.memory || (c = !1), (b = !1), e && (f = c ? [] : '');
      },
      j = {
        add: function () {
          return (
            f &&
              (c && !b && ((h = f.length - 1), g.push(c)),
              (function d(b) {
                n.each(b, function (b, c) {
                  n.isFunction(c)
                    ? (a.unique && j.has(c)) || f.push(c)
                    : c && c.length && 'string' !== n.type(c) && d(c);
                });
              })(arguments),
              c && !b && i()),
            this
          );
        },
        remove: function () {
          return (
            n.each(arguments, function (a, b) {
              var c;
              while ((c = n.inArray(b, f, c)) > -1)
                f.splice(c, 1), h >= c && h--;
            }),
            this
          );
        },
        has: function (a) {
          return a ? n.inArray(a, f) > -1 : f.length > 0;
        },
        empty: function () {
          return f && (f = []), this;
        },
        disable: function () {
          return (e = g = []), (f = c = ''), this;
        },
        disabled: function () {
          return !f;
        },
        lock: function () {
          return (e = g = []), c || (f = c = ''), this;
        },
        locked: function () {
          return !!e;
        },
        fireWith: function (a, c) {
          return (
            e ||
              ((c = c || []),
              (c = [a, c.slice ? c.slice() : c]),
              g.push(c),
              b || i()),
            this
          );
        },
        fire: function () {
          return j.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        },
      };
    return j;
  }),
    n.extend({
      Deferred: function (a) {
        var b = [
            ['resolve', 'done', n.Callbacks('once memory'), 'resolved'],
            ['reject', 'fail', n.Callbacks('once memory'), 'rejected'],
            ['notify', 'progress', n.Callbacks('memory')],
          ],
          c = 'pending',
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return n
                .Deferred(function (c) {
                  n.each(b, function (b, f) {
                    var g = n.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                      var a = g && g.apply(this, arguments);
                      a && n.isFunction(a.promise)
                        ? a
                            .promise()
                            .progress(c.notify)
                            .done(c.resolve)
                            .fail(c.reject)
                        : c[f[0] + 'With'](
                            this === d ? c.promise() : this,
                            g ? [a] : arguments,
                          );
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? n.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          n.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock,
                ),
              (e[f[0]] = function () {
                return e[f[0] + 'With'](this === e ? d : this, arguments), this;
              }),
              (e[f[0] + 'With'] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b = 0,
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || (a && n.isFunction(a.promise)) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function (a, b, c) {
            return function (d) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? e.call(arguments) : d),
                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
            };
          },
          i,
          j,
          k;
        if (d > 1)
          for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++)
            c[b] && n.isFunction(c[b].promise)
              ? c[b]
                  .promise()
                  .progress(h(b, j, i))
                  .done(h(b, k, c))
                  .fail(g.reject)
              : --f;
        return f || g.resolveWith(k, c), g.promise();
      },
    });
  var I;
  (n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }),
    n.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? n.readyWait++ : n.ready(!0);
      },
      ready: function (a) {
        (a === !0 ? --n.readyWait : n.isReady) ||
          ((n.isReady = !0),
          (a !== !0 && --n.readyWait > 0) ||
            (I.resolveWith(d, [n]),
            n.fn.triggerHandler &&
              (n(d).triggerHandler('ready'), n(d).off('ready'))));
      },
    });
  function J() {
    d.removeEventListener('DOMContentLoaded', J),
      a.removeEventListener('load', J),
      n.ready();
  }
  (n.ready.promise = function (b) {
    return (
      I ||
        ((I = n.Deferred()),
        'complete' === d.readyState ||
        ('loading' !== d.readyState && !d.documentElement.doScroll)
          ? a.setTimeout(n.ready)
          : (d.addEventListener('DOMContentLoaded', J),
            a.addEventListener('load', J))),
      I.promise(b)
    );
  }),
    n.ready.promise();
  var K = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ('object' === n.type(c)) {
        e = !0;
        for (h in c) K(a, b, h, c[h], !0, f, g);
      } else if (
        void 0 !== d &&
        ((e = !0),
        n.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function (a, b, c) {
                return j.call(n(a), c);
              }))),
        b)
      )
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
    L = function (a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
  function M() {
    this.expando = n.expando + M.uid++;
  }
  (M.uid = 1),
    (M.prototype = {
      register: function (a, b) {
        var c = b || {};
        return (
          a.nodeType
            ? (a[this.expando] = c)
            : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0,
              }),
          a[this.expando]
        );
      },
      cache: function (a) {
        if (!L(a)) return {};
        var b = a[this.expando];
        return (
          b ||
            ((b = {}),
            L(a) &&
              (a.nodeType
                ? (a[this.expando] = b)
                : Object.defineProperty(a, this.expando, {
                    value: b,
                    configurable: !0,
                  }))),
          b
        );
      },
      set: function (a, b, c) {
        var d,
          e = this.cache(a);
        if ('string' == typeof b) e[b] = c;
        else for (d in b) e[d] = b[d];
        return e;
      },
      get: function (a, b) {
        return void 0 === b
          ? this.cache(a)
          : a[this.expando] && a[this.expando][b];
      },
      access: function (a, b, c) {
        var d;
        return void 0 === b || (b && 'string' == typeof b && void 0 === c)
          ? ((d = this.get(a, b)),
            void 0 !== d ? d : this.get(a, n.camelCase(b)))
          : (this.set(a, b, c), void 0 !== c ? c : b);
      },
      remove: function (a, b) {
        var c,
          d,
          e,
          f = a[this.expando];
        if (void 0 !== f) {
          if (void 0 === b) this.register(a);
          else {
            n.isArray(b)
              ? (d = b.concat(b.map(n.camelCase)))
              : ((e = n.camelCase(b)),
                b in f
                  ? (d = [b, e])
                  : ((d = e), (d = d in f ? [d] : d.match(G) || []))),
              (c = d.length);
            while (c--) delete f[d[c]];
          }
          (void 0 === b || n.isEmptyObject(f)) &&
            (a.nodeType ? (a[this.expando] = void 0) : delete a[this.expando]);
        }
      },
      hasData: function (a) {
        var b = a[this.expando];
        return void 0 !== b && !n.isEmptyObject(b);
      },
    });
  var N = new M(),
    O = new M(),
    P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Q = /[A-Z]/g;
  function R(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (
        ((d = 'data-' + b.replace(Q, '-$&').toLowerCase()),
        (c = a.getAttribute(d)),
        'string' == typeof c)
      ) {
        try {
          c =
            'true' === c
              ? !0
              : 'false' === c
              ? !1
              : 'null' === c
              ? null
              : +c + '' === c
              ? +c
              : P.test(c)
              ? n.parseJSON(c)
              : c;
        } catch (e) {}
        O.set(a, b, c);
      } else c = void 0;
    return c;
  }
  n.extend({
    hasData: function (a) {
      return O.hasData(a) || N.hasData(a);
    },
    data: function (a, b, c) {
      return O.access(a, b, c);
    },
    removeData: function (a, b) {
      O.remove(a, b);
    },
    _data: function (a, b, c) {
      return N.access(a, b, c);
    },
    _removeData: function (a, b) {
      N.remove(a, b);
    },
  }),
    n.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = O.get(f)), 1 === f.nodeType && !N.get(f, 'hasDataAttrs'))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf('data-') &&
                  ((d = n.camelCase(d.slice(5))), R(f, d, e[d])));
            N.set(f, 'hasDataAttrs', !0);
          }
          return e;
        }
        return 'object' == typeof a
          ? this.each(function () {
              O.set(this, a);
            })
          : K(
              this,
              function (b) {
                var c, d;
                if (f && void 0 === b) {
                  if (
                    ((c =
                      O.get(f, a) ||
                      O.get(f, a.replace(Q, '-$&').toLowerCase())),
                    void 0 !== c)
                  )
                    return c;
                  if (((d = n.camelCase(a)), (c = O.get(f, d)), void 0 !== c))
                    return c;
                  if (((c = R(f, d, void 0)), void 0 !== c)) return c;
                } else
                  (d = n.camelCase(a)),
                    this.each(function () {
                      var c = O.get(this, d);
                      O.set(this, d, b),
                        a.indexOf('-') > -1 &&
                          void 0 !== c &&
                          O.set(this, a, b);
                    });
              },
              null,
              b,
              arguments.length > 1,
              null,
              !0,
            );
      },
      removeData: function (a) {
        return this.each(function () {
          O.remove(this, a);
        });
      },
    }),
    n.extend({
      queue: function (a, b, c) {
        var d;
        return a
          ? ((b = (b || 'fx') + 'queue'),
            (d = N.get(a, b)),
            c &&
              (!d || n.isArray(c)
                ? (d = N.access(a, b, n.makeArray(c)))
                : d.push(c)),
            d || [])
          : void 0;
      },
      dequeue: function (a, b) {
        b = b || 'fx';
        var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function () {
            n.dequeue(a, b);
          };
        'inprogress' === e && ((e = c.shift()), d--),
          e &&
            ('fx' === b && c.unshift('inprogress'),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + 'queueHooks';
        return (
          N.get(a, c) ||
          N.access(a, c, {
            empty: n.Callbacks('once memory').add(function () {
              N.remove(a, [b + 'queue', c]);
            }),
          })
        );
      },
    }),
    n.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          'string' != typeof a && ((b = a), (a = 'fx'), c--),
          arguments.length < c
            ? n.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                  'fx' === a && 'inprogress' !== c[0] && n.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          n.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || 'fx', []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        'string' != typeof a && ((b = a), (a = void 0)), (a = a || 'fx');
        while (g--)
          (c = N.get(f[g], a + 'queueHooks')),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    });
  var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    T = new RegExp('^(?:([+-])=|)(' + S + ')([a-z%]*)$', 'i'),
    U = ['Top', 'Right', 'Bottom', 'Left'],
    V = function (a, b) {
      return (
        (a = b || a),
        'none' === n.css(a, 'display') || !n.contains(a.ownerDocument, a)
      );
    };
  function W(a, b, c, d) {
    var e,
      f = 1,
      g = 20,
      h = d
        ? function () {
            return d.cur();
          }
        : function () {
            return n.css(a, b, '');
          },
      i = h(),
      j = (c && c[3]) || (n.cssNumber[b] ? '' : 'px'),
      k = (n.cssNumber[b] || ('px' !== j && +i)) && T.exec(n.css(a, b));
    if (k && k[3] !== j) {
      (j = j || k[3]), (c = c || []), (k = +i || 1);
      do (f = f || '.5'), (k /= f), n.style(a, b, k + j);
      while (f !== (f = h() / i) && 1 !== f && --g);
    }
    return (
      c &&
        ((k = +k || +i || 0),
        (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
        d && ((d.unit = j), (d.start = k), (d.end = e))),
      e
    );
  }
  var X = /^(?:checkbox|radio)$/i,
    Y = /<([\w:-]+)/,
    Z = /^$|\/(?:java|ecma)script/i,
    $ = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      thead: [1, '<table>', '</table>'],
      col: [2, '<table><colgroup>', '</colgroup></table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: [0, '', ''],
    };
  ($.optgroup = $.option),
    ($.tbody = $.tfoot = $.colgroup = $.caption = $.thead),
    ($.th = $.td);
  function _(a, b) {
    var c =
      'undefined' != typeof a.getElementsByTagName
        ? a.getElementsByTagName(b || '*')
        : 'undefined' != typeof a.querySelectorAll
        ? a.querySelectorAll(b || '*')
        : [];
    return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], c) : c;
  }
  function aa(a, b) {
    for (var c = 0, d = a.length; d > c; c++)
      N.set(a[c], 'globalEval', !b || N.get(b[c], 'globalEval'));
  }
  var ba = /<|&#?\w+;/;
  function ca(a, b, c, d, e) {
    for (
      var f,
        g,
        h,
        i,
        j,
        k,
        l = b.createDocumentFragment(),
        m = [],
        o = 0,
        p = a.length;
      p > o;
      o++
    )
      if (((f = a[o]), f || 0 === f))
        if ('object' === n.type(f)) n.merge(m, f.nodeType ? [f] : f);
        else if (ba.test(f)) {
          (g = g || l.appendChild(b.createElement('div'))),
            (h = (Y.exec(f) || ['', ''])[1].toLowerCase()),
            (i = $[h] || $._default),
            (g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2]),
            (k = i[0]);
          while (k--) g = g.lastChild;
          n.merge(m, g.childNodes), (g = l.firstChild), (g.textContent = '');
        } else m.push(b.createTextNode(f));
    (l.textContent = ''), (o = 0);
    while ((f = m[o++]))
      if (d && n.inArray(f, d) > -1) e && e.push(f);
      else if (
        ((j = n.contains(f.ownerDocument, f)),
        (g = _(l.appendChild(f), 'script')),
        j && aa(g),
        c)
      ) {
        k = 0;
        while ((f = g[k++])) Z.test(f.type || '') && c.push(f);
      }
    return l;
  }
  !(function () {
    var a = d.createDocumentFragment(),
      b = a.appendChild(d.createElement('div')),
      c = d.createElement('input');
    c.setAttribute('type', 'radio'),
      c.setAttribute('checked', 'checked'),
      c.setAttribute('name', 't'),
      b.appendChild(c),
      (l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (b.innerHTML = '<textarea>x</textarea>'),
      (l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
  })();
  var da = /^key/,
    ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    fa = /^([^.]*)(?:\.(.+)|)/;
  function ga() {
    return !0;
  }
  function ha() {
    return !1;
  }
  function ia() {
    try {
      return d.activeElement;
    } catch (a) {}
  }
  function ja(a, b, c, d, e, f) {
    var g, h;
    if ('object' == typeof b) {
      'string' != typeof c && ((d = d || c), (c = void 0));
      for (h in b) ja(a, h, c, d, b[h], f);
      return a;
    }
    if (
      (null == d && null == e
        ? ((e = c), (d = c = void 0))
        : null == e &&
          ('string' == typeof c
            ? ((e = d), (d = void 0))
            : ((e = d), (d = c), (c = void 0))),
      e === !1)
    )
      e = ha;
    else if (!e) return a;
    return (
      1 === f &&
        ((g = e),
        (e = function (a) {
          return n().off(a), g.apply(this, arguments);
        }),
        (e.guid = g.guid || (g.guid = n.guid++))),
      a.each(function () {
        n.event.add(this, b, e, d, c);
      })
    );
  }
  (n.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = N.get(a);
      if (r) {
        c.handler && ((f = c), (c = f.handler), (e = f.selector)),
          c.guid || (c.guid = n.guid++),
          (i = r.events) || (i = r.events = {}),
          (g = r.handle) ||
            (g = r.handle =
              function (b) {
                return 'undefined' != typeof n && n.event.triggered !== b.type
                  ? n.event.dispatch.apply(a, arguments)
                  : void 0;
              }),
          (b = (b || '').match(G) || ['']),
          (j = b.length);
        while (j--)
          (h = fa.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || '').split('.').sort()),
            o &&
              ((l = n.event.special[o] || {}),
              (o = (e ? l.delegateType : l.bindType) || o),
              (l = n.event.special[o] || {}),
              (k = n.extend(
                {
                  type: o,
                  origType: q,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && n.expr.match.needsContext.test(e),
                  namespace: p.join('.'),
                },
                f,
              )),
              (m = i[o]) ||
                ((m = i[o] = []),
                (m.delegateCount = 0),
                (l.setup && l.setup.call(a, d, p, g) !== !1) ||
                  (a.addEventListener && a.addEventListener(o, g))),
              l.add &&
                (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
              (n.event.global[o] = !0));
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = N.hasData(a) && N.get(a);
      if (r && (i = r.events)) {
        (b = (b || '').match(G) || ['']), (j = b.length);
        while (j--)
          if (
            ((h = fa.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || '').split('.').sort()),
            o)
          ) {
            (l = n.event.special[o] || {}),
              (o = (d ? l.delegateType : l.bindType) || o),
              (m = i[o] || []),
              (h =
                h[2] &&
                new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)')),
              (g = f = m.length);
            while (f--)
              (k = m[f]),
                (!e && q !== k.origType) ||
                  (c && c.guid !== k.guid) ||
                  (h && !h.test(k.namespace)) ||
                  (d && d !== k.selector && ('**' !== d || !k.selector)) ||
                  (m.splice(f, 1),
                  k.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, k));
            g &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) ||
                n.removeEvent(a, o, r.handle),
              delete i[o]);
          } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(i) && N.remove(a, 'handle events');
      }
    },
    dispatch: function (a) {
      a = n.event.fix(a);
      var b,
        c,
        d,
        f,
        g,
        h = [],
        i = e.call(arguments),
        j = (N.get(this, 'events') || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (
        ((i[0] = a),
        (a.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, a) !== !1)
      ) {
        (h = n.event.handlers.call(this, a, j)), (b = 0);
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          (a.currentTarget = f.elem), (c = 0);
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
            (a.rnamespace && !a.rnamespace.test(g.namespace)) ||
              ((a.handleObj = g),
              (a.data = g.data),
              (d = (
                (n.event.special[g.origType] || {}).handle || g.handler
              ).apply(f.elem, i)),
              void 0 !== d &&
                (a.result = d) === !1 &&
                (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target;
      if (
        h &&
        i.nodeType &&
        ('click' !== a.type || isNaN(a.button) || a.button < 1)
      )
        for (; i !== this; i = i.parentNode || this)
          if (1 === i.nodeType && (i.disabled !== !0 || 'click' !== a.type)) {
            for (d = [], c = 0; h > c; c++)
              (f = b[c]),
                (e = f.selector + ' '),
                void 0 === d[e] &&
                  (d[e] = f.needsContext
                    ? n(e, this).index(i) > -1
                    : n.find(e, this, null, [i]).length),
                d[e] && d.push(f);
            d.length && g.push({ elem: i, handlers: d });
          }
      return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    },
    props:
      'altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
        ' ',
      ),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function (a, b) {
        return (
          null == a.which &&
            (a.which = null != b.charCode ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props:
        'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(
          ' ',
        ),
      filter: function (a, b) {
        var c,
          e,
          f,
          g = b.button;
        return (
          null == a.pageX &&
            null != b.clientX &&
            ((c = a.target.ownerDocument || d),
            (e = c.documentElement),
            (f = c.body),
            (a.pageX =
              b.clientX +
              ((e && e.scrollLeft) || (f && f.scrollLeft) || 0) -
              ((e && e.clientLeft) || (f && f.clientLeft) || 0)),
            (a.pageY =
              b.clientY +
              ((e && e.scrollTop) || (f && f.scrollTop) || 0) -
              ((e && e.clientTop) || (f && f.clientTop) || 0))),
          a.which ||
            void 0 === g ||
            (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
          a
        );
      },
    },
    fix: function (a) {
      if (a[n.expando]) return a;
      var b,
        c,
        e,
        f = a.type,
        g = a,
        h = this.fixHooks[f];
      h ||
        (this.fixHooks[f] = h =
          ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}),
        (e = h.props ? this.props.concat(h.props) : this.props),
        (a = new n.Event(g)),
        (b = e.length);
      while (b--) (c = e[b]), (a[c] = g[c]);
      return (
        a.target || (a.target = d),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        h.filter ? h.filter(a, g) : a
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== ia() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: 'focusin',
      },
      blur: {
        trigger: function () {
          return this === ia() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: 'focusout',
      },
      click: {
        trigger: function () {
          return 'checkbox' === this.type &&
            this.click &&
            n.nodeName(this, 'input')
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (a) {
          return n.nodeName(a.target, 'a');
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
  }),
    (n.removeEvent = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c);
    }),
    (n.Event = function (a, b) {
      return this instanceof n.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? ga
                  : ha))
            : (this.type = a),
          b && n.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || n.now()),
          void (this[n.expando] = !0))
        : new n.Event(a, b);
    }),
    (n.Event.prototype = {
      constructor: n.Event,
      isDefaultPrevented: ha,
      isPropagationStopped: ha,
      isImmediatePropagationStopped: ha,
      isSimulated: !1,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = ga),
          a && !this.isSimulated && a.preventDefault();
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = ga),
          a && !this.isSimulated && a.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = ga),
          a && !this.isSimulated && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    n.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout',
      },
      function (a, b) {
        n.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (e && (e === d || n.contains(d, e))) ||
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      },
    ),
    n.fn.extend({
      on: function (a, b, c, d) {
        return ja(this, a, b, c, d);
      },
      one: function (a, b, c, d) {
        return ja(this, a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            n(a.delegateTarget).off(
              d.namespace ? d.origType + '.' + d.namespace : d.origType,
              d.selector,
              d.handler,
            ),
            this
          );
        if ('object' == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b !== !1 && 'function' != typeof b) || ((c = b), (b = void 0)),
          c === !1 && (c = ha),
          this.each(function () {
            n.event.remove(this, a, c, b);
          })
        );
      },
    });
  var ka =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    la = /<script|<style|<link/i,
    ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
    na = /^true\/(.*)/,
    oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function pa(a, b) {
    return n.nodeName(a, 'table') &&
      n.nodeName(11 !== b.nodeType ? b : b.firstChild, 'tr')
      ? a.getElementsByTagName('tbody')[0] ||
          a.appendChild(a.ownerDocument.createElement('tbody'))
      : a;
  }
  function qa(a) {
    return (a.type = (null !== a.getAttribute('type')) + '/' + a.type), a;
  }
  function ra(a) {
    var b = na.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute('type'), a;
  }
  function sa(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (
        N.hasData(a) &&
        ((f = N.access(a)), (g = N.set(b, f)), (j = f.events))
      ) {
        delete g.handle, (g.events = {});
        for (e in j)
          for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
      }
      O.hasData(a) && ((h = O.access(a)), (i = n.extend({}, h)), O.set(b, i));
    }
  }
  function ta(a, b) {
    var c = b.nodeName.toLowerCase();
    'input' === c && X.test(a.type)
      ? (b.checked = a.checked)
      : ('input' !== c && 'textarea' !== c) ||
        (b.defaultValue = a.defaultValue);
  }
  function ua(a, b, c, d) {
    b = f.apply([], b);
    var e,
      g,
      h,
      i,
      j,
      k,
      m = 0,
      o = a.length,
      p = o - 1,
      q = b[0],
      r = n.isFunction(q);
    if (r || (o > 1 && 'string' == typeof q && !l.checkClone && ma.test(q)))
      return a.each(function (e) {
        var f = a.eq(e);
        r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d);
      });
    if (
      o &&
      ((e = ca(b, a[0].ownerDocument, !1, a, d)),
      (g = e.firstChild),
      1 === e.childNodes.length && (e = g),
      g || d)
    ) {
      for (h = n.map(_(e, 'script'), qa), i = h.length; o > m; m++)
        (j = e),
          m !== p &&
            ((j = n.clone(j, !0, !0)), i && n.merge(h, _(j, 'script'))),
          c.call(a[m], j, m);
      if (i)
        for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++)
          (j = h[m]),
            Z.test(j.type || '') &&
              !N.access(j, 'globalEval') &&
              n.contains(k, j) &&
              (j.src
                ? n._evalUrl && n._evalUrl(j.src)
                : n.globalEval(j.textContent.replace(oa, '')));
    }
    return a;
  }
  function va(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
      c || 1 !== d.nodeType || n.cleanData(_(d)),
        d.parentNode &&
          (c && n.contains(d.ownerDocument, d) && aa(_(d, 'script')),
          d.parentNode.removeChild(d));
    return a;
  }
  n.extend({
    htmlPrefilter: function (a) {
      return a.replace(ka, '<$1></$2>');
    },
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.cloneNode(!0),
        i = n.contains(a.ownerDocument, a);
      if (
        !(
          l.noCloneChecked ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          n.isXMLDoc(a)
        )
      )
        for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++)
          ta(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++)
            sa(f[d], g[d]);
        else sa(a, h);
      return (
        (g = _(h, 'script')), g.length > 0 && aa(g, !i && _(a, 'script')), h
      );
    },
    cleanData: function (a) {
      for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
        if (L(c)) {
          if ((b = c[N.expando])) {
            if (b.events)
              for (d in b.events)
                e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
            c[N.expando] = void 0;
          }
          c[O.expando] && (c[O.expando] = void 0);
        }
    },
  }),
    n.fn.extend({
      domManip: ua,
      detach: function (a) {
        return va(this, a, !0);
      },
      remove: function (a) {
        return va(this, a);
      },
      text: function (a) {
        return K(
          this,
          function (a) {
            return void 0 === a
              ? n.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = a);
                });
          },
          null,
          a,
          arguments.length,
        );
      },
      append: function () {
        return ua(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = pa(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return ua(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = pa(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return ua(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return ua(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++)
          1 === a.nodeType && (n.cleanData(_(a, !1)), (a.textContent = ''));
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null == a ? !1 : a),
          (b = null == b ? a : b),
          this.map(function () {
            return n.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return K(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
            if (
              'string' == typeof a &&
              !la.test(a) &&
              !$[(Y.exec(a) || ['', ''])[1].toLowerCase()]
            ) {
              a = n.htmlPrefilter(a);
              try {
                for (; d > c; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (n.cleanData(_(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length,
        );
      },
      replaceWith: function () {
        var a = [];
        return ua(
          this,
          arguments,
          function (b) {
            var c = this.parentNode;
            n.inArray(this, a) < 0 &&
              (n.cleanData(_(this)), c && c.replaceChild(b, this));
          },
          a,
        );
      },
    }),
    n.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (a, b) {
        n.fn[a] = function (a) {
          for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++)
            (c = h === f ? this : this.clone(!0)),
              n(e[h])[b](c),
              g.apply(d, c.get());
          return this.pushStack(d);
        };
      },
    );
  var wa,
    xa = { HTML: 'block', BODY: 'block' };
  function ya(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
      d = n.css(c[0], 'display');
    return c.detach(), d;
  }
  function za(a) {
    var b = d,
      c = xa[a];
    return (
      c ||
        ((c = ya(a, b)),
        ('none' !== c && c) ||
          ((wa = (
            wa || n("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(b.documentElement)),
          (b = wa[0].contentDocument),
          b.write(),
          b.close(),
          (c = ya(a, b)),
          wa.detach()),
        (xa[a] = c)),
      c
    );
  }
  var Aa = /^margin/,
    Ba = new RegExp('^(' + S + ')(?!px)[a-z%]+$', 'i'),
    Ca = function (b) {
      var c = b.ownerDocument.defaultView;
      return (c && c.opener) || (c = a), c.getComputedStyle(b);
    },
    Da = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    },
    Ea = d.documentElement;
  !(function () {
    var b,
      c,
      e,
      f,
      g = d.createElement('div'),
      h = d.createElement('div');
    if (h.style) {
      (h.style.backgroundClip = 'content-box'),
        (h.cloneNode(!0).style.backgroundClip = ''),
        (l.clearCloneStyle = 'content-box' === h.style.backgroundClip),
        (g.style.cssText =
          'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute'),
        g.appendChild(h);
      function i() {
        (h.style.cssText =
          '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%'),
          (h.innerHTML = ''),
          Ea.appendChild(g);
        var d = a.getComputedStyle(h);
        (b = '1%' !== d.top),
          (f = '2px' === d.marginLeft),
          (c = '4px' === d.width),
          (h.style.marginRight = '50%'),
          (e = '4px' === d.marginRight),
          Ea.removeChild(g);
      }
      n.extend(l, {
        pixelPosition: function () {
          return i(), b;
        },
        boxSizingReliable: function () {
          return null == c && i(), c;
        },
        pixelMarginRight: function () {
          return null == c && i(), e;
        },
        reliableMarginLeft: function () {
          return null == c && i(), f;
        },
        reliableMarginRight: function () {
          var b,
            c = h.appendChild(d.createElement('div'));
          return (
            (c.style.cssText = h.style.cssText =
              '-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0'),
            (c.style.marginRight = c.style.width = '0'),
            (h.style.width = '1px'),
            Ea.appendChild(g),
            (b = !parseFloat(a.getComputedStyle(c).marginRight)),
            Ea.removeChild(g),
            h.removeChild(c),
            b
          );
        },
      });
    }
  })();
  function Fa(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.style;
    return (
      (c = c || Ca(a)),
      (g = c ? c.getPropertyValue(b) || c[b] : void 0),
      ('' !== g && void 0 !== g) ||
        n.contains(a.ownerDocument, a) ||
        (g = n.style(a, b)),
      c &&
        !l.pixelMarginRight() &&
        Ba.test(g) &&
        Aa.test(b) &&
        ((d = h.width),
        (e = h.minWidth),
        (f = h.maxWidth),
        (h.minWidth = h.maxWidth = h.width = g),
        (g = c.width),
        (h.width = d),
        (h.minWidth = e),
        (h.maxWidth = f)),
      void 0 !== g ? g + '' : g
    );
  }
  function Ga(a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      },
    };
  }
  var Ha = /^(none|table(?!-c[ea]).+)/,
    Ia = { position: 'absolute', visibility: 'hidden', display: 'block' },
    Ja = { letterSpacing: '0', fontWeight: '400' },
    Ka = ['Webkit', 'O', 'Moz', 'ms'],
    La = d.createElement('div').style;
  function Ma(a) {
    if (a in La) return a;
    var b = a[0].toUpperCase() + a.slice(1),
      c = Ka.length;
    while (c--) if (((a = Ka[c] + b), a in La)) return a;
  }
  function Na(a, b, c) {
    var d = T.exec(b);
    return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || 'px') : b;
  }
  function Oa(a, b, c, d, e) {
    for (
      var f = c === (d ? 'border' : 'content') ? 4 : 'width' === b ? 1 : 0,
        g = 0;
      4 > f;
      f += 2
    )
      'margin' === c && (g += n.css(a, c + U[f], !0, e)),
        d
          ? ('content' === c && (g -= n.css(a, 'padding' + U[f], !0, e)),
            'margin' !== c && (g -= n.css(a, 'border' + U[f] + 'Width', !0, e)))
          : ((g += n.css(a, 'padding' + U[f], !0, e)),
            'padding' !== c &&
              (g += n.css(a, 'border' + U[f] + 'Width', !0, e)));
    return g;
  }
  function Pa(a, b, c) {
    var d = !0,
      e = 'width' === b ? a.offsetWidth : a.offsetHeight,
      f = Ca(a),
      g = 'border-box' === n.css(a, 'boxSizing', !1, f);
    if (0 >= e || null == e) {
      if (
        ((e = Fa(a, b, f)),
        (0 > e || null == e) && (e = a.style[b]),
        Ba.test(e))
      )
        return e;
      (d = g && (l.boxSizingReliable() || e === a.style[b])),
        (e = parseFloat(e) || 0);
    }
    return e + Oa(a, b, c || (g ? 'border' : 'content'), d, f) + 'px';
  }
  function Qa(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      (d = a[g]),
        d.style &&
          ((f[g] = N.get(d, 'olddisplay')),
          (c = d.style.display),
          b
            ? (f[g] || 'none' !== c || (d.style.display = ''),
              '' === d.style.display &&
                V(d) &&
                (f[g] = N.access(d, 'olddisplay', za(d.nodeName))))
            : ((e = V(d)),
              ('none' === c && e) ||
                N.set(d, 'olddisplay', e ? c : n.css(d, 'display'))));
    for (g = 0; h > g; g++)
      (d = a[g]),
        d.style &&
          ((b && 'none' !== d.style.display && '' !== d.style.display) ||
            (d.style.display = b ? f[g] || '' : 'none'));
    return a;
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Fa(a, 'opacity');
            return '' === c ? '1' : c;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: 'cssFloat' },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = n.camelCase(b),
          i = a.style;
        return (
          (b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h)),
          (g = n.cssHooks[b] || n.cssHooks[h]),
          void 0 === c
            ? g && 'get' in g && void 0 !== (e = g.get(a, !1, d))
              ? e
              : i[b]
            : ((f = typeof c),
              'string' === f &&
                (e = T.exec(c)) &&
                e[1] &&
                ((c = W(a, b, e)), (f = 'number')),
              null != c &&
                c === c &&
                ('number' === f &&
                  (c += (e && e[3]) || (n.cssNumber[h] ? '' : 'px')),
                l.clearCloneStyle ||
                  '' !== c ||
                  0 !== b.indexOf('background') ||
                  (i[b] = 'inherit'),
                (g && 'set' in g && void 0 === (c = g.set(a, c, d))) ||
                  (i[b] = c)),
              void 0)
        );
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = n.camelCase(b);
      return (
        (b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h)),
        (g = n.cssHooks[b] || n.cssHooks[h]),
        g && 'get' in g && (e = g.get(a, !0, c)),
        void 0 === e && (e = Fa(a, b, d)),
        'normal' === e && b in Ja && (e = Ja[b]),
        '' === c || c
          ? ((f = parseFloat(e)), c === !0 || isFinite(f) ? f || 0 : e)
          : e
      );
    },
  }),
    n.each(['height', 'width'], function (a, b) {
      n.cssHooks[b] = {
        get: function (a, c, d) {
          return c
            ? Ha.test(n.css(a, 'display')) && 0 === a.offsetWidth
              ? Da(a, Ia, function () {
                  return Pa(a, b, d);
                })
              : Pa(a, b, d)
            : void 0;
        },
        set: function (a, c, d) {
          var e,
            f = d && Ca(a),
            g =
              d &&
              Oa(a, b, d, 'border-box' === n.css(a, 'boxSizing', !1, f), f);
          return (
            g &&
              (e = T.exec(c)) &&
              'px' !== (e[3] || 'px') &&
              ((a.style[b] = c), (c = n.css(a, b))),
            Na(a, c, g)
          );
        },
      };
    }),
    (n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function (a, b) {
      return b
        ? (parseFloat(Fa(a, 'marginLeft')) ||
            a.getBoundingClientRect().left -
              Da(a, { marginLeft: 0 }, function () {
                return a.getBoundingClientRect().left;
              })) + 'px'
        : void 0;
    })),
    (n.cssHooks.marginRight = Ga(l.reliableMarginRight, function (a, b) {
      return b
        ? Da(a, { display: 'inline-block' }, Fa, [a, 'marginRight'])
        : void 0;
    })),
    n.each({ margin: '', padding: '', border: 'Width' }, function (a, b) {
      (n.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = 'string' == typeof c ? c.split(' ') : [c];
            4 > d;
            d++
          )
            e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        Aa.test(a) || (n.cssHooks[a + b].set = Na);
    }),
    n.fn.extend({
      css: function (a, b) {
        return K(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (n.isArray(b)) {
              for (d = Ca(a), e = b.length; e > g; g++)
                f[b[g]] = n.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
          },
          a,
          b,
          arguments.length > 1,
        );
      },
      show: function () {
        return Qa(this, !0);
      },
      hide: function () {
        return Qa(this);
      },
      toggle: function (a) {
        return 'boolean' == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              V(this) ? n(this).show() : n(this).hide();
            });
      },
    });
  function Ra(a, b, c, d, e) {
    return new Ra.prototype.init(a, b, c, d, e);
  }
  (n.Tween = Ra),
    (Ra.prototype = {
      constructor: Ra,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || n.easing._default),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (n.cssNumber[c] ? '' : 'px'));
      },
      cur: function () {
        var a = Ra.propHooks[this.prop];
        return a && a.get ? a.get(this) : Ra.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = Ra.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b =
                n.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration,
                ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : Ra.propHooks._default.set(this),
          this
        );
      },
    }),
    (Ra.prototype.init.prototype = Ra.prototype),
    (Ra.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return 1 !== a.elem.nodeType ||
            (null != a.elem[a.prop] && null == a.elem.style[a.prop])
            ? a.elem[a.prop]
            : ((b = n.css(a.elem, a.prop, '')), b && 'auto' !== b ? b : 0);
        },
        set: function (a) {
          n.fx.step[a.prop]
            ? n.fx.step[a.prop](a)
            : 1 !== a.elem.nodeType ||
              (null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop])
            ? (a.elem[a.prop] = a.now)
            : n.style(a.elem, a.prop, a.now + a.unit);
        },
      },
    }),
    (Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (n.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
      _default: 'swing',
    }),
    (n.fx = Ra.prototype.init),
    (n.fx.step = {});
  var Sa,
    Ta,
    Ua = /^(?:toggle|show|hide)$/,
    Va = /queueHooks$/;
  function Wa() {
    return (
      a.setTimeout(function () {
        Sa = void 0;
      }),
      (Sa = n.now())
    );
  }
  function Xa(a, b) {
    var c,
      d = 0,
      e = { height: a };
    for (b = b ? 1 : 0; 4 > d; d += 2 - b)
      (c = U[d]), (e['margin' + c] = e['padding' + c] = a);
    return b && (e.opacity = e.width = a), e;
  }
  function Ya(a, b, c) {
    for (
      var d,
        e = (_a.tweeners[b] || []).concat(_a.tweeners['*']),
        f = 0,
        g = e.length;
      g > f;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function Za(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = this,
      m = {},
      o = a.style,
      p = a.nodeType && V(a),
      q = N.get(a, 'fxshow');
    c.queue ||
      ((h = n._queueHooks(a, 'fx')),
      null == h.unqueued &&
        ((h.unqueued = 0),
        (i = h.empty.fire),
        (h.empty.fire = function () {
          h.unqueued || i();
        })),
      h.unqueued++,
      l.always(function () {
        l.always(function () {
          h.unqueued--, n.queue(a, 'fx').length || h.empty.fire();
        });
      })),
      1 === a.nodeType &&
        ('height' in b || 'width' in b) &&
        ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
        (j = n.css(a, 'display')),
        (k = 'none' === j ? N.get(a, 'olddisplay') || za(a.nodeName) : j),
        'inline' === k &&
          'none' === n.css(a, 'float') &&
          (o.display = 'inline-block')),
      c.overflow &&
        ((o.overflow = 'hidden'),
        l.always(function () {
          (o.overflow = c.overflow[0]),
            (o.overflowX = c.overflow[1]),
            (o.overflowY = c.overflow[2]);
        }));
    for (d in b)
      if (((e = b[d]), Ua.exec(e))) {
        if (
          (delete b[d], (f = f || 'toggle' === e), e === (p ? 'hide' : 'show'))
        ) {
          if ('show' !== e || !q || void 0 === q[d]) continue;
          p = !0;
        }
        m[d] = (q && q[d]) || n.style(a, d);
      } else j = void 0;
    if (n.isEmptyObject(m))
      'inline' === ('none' === j ? za(a.nodeName) : j) && (o.display = j);
    else {
      q ? 'hidden' in q && (p = q.hidden) : (q = N.access(a, 'fxshow', {})),
        f && (q.hidden = !p),
        p
          ? n(a).show()
          : l.done(function () {
              n(a).hide();
            }),
        l.done(function () {
          var b;
          N.remove(a, 'fxshow');
          for (b in m) n.style(a, b, m[b]);
        });
      for (d in m)
        (g = Ya(p ? q[d] : 0, d, l)),
          d in q ||
            ((q[d] = g.start),
            p &&
              ((g.end = g.start),
              (g.start = 'width' === d || 'height' === d ? 1 : 0)));
    }
  }
  function $a(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = n.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = n.cssHooks[d]),
        g && 'expand' in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function _a(a, b, c) {
    var d,
      e,
      f = 0,
      g = _a.prefilters.length,
      h = n.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = Sa || Wa(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          i > g;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: Sa || Wa(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = n.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing,
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return (
            b
              ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b]))
              : h.rejectWith(a, [j, b]),
            this
          );
        },
      }),
      k = j.props;
    for ($a(k, j.opts.specialEasing); g > f; f++)
      if ((d = _a.prefilters[f].call(j, a, k, j.opts)))
        return (
          n.isFunction(d.stop) &&
            (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)),
          d
        );
    return (
      n.map(k, Ya, j),
      n.isFunction(j.opts.start) && j.opts.start.call(a, j),
      n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  (n.Animation = n.extend(_a, {
    tweeners: {
      '*': [
        function (a, b) {
          var c = this.createTween(a, b);
          return W(c.elem, a, T.exec(b), c), c;
        },
      ],
    },
    tweener: function (a, b) {
      n.isFunction(a) ? ((b = a), (a = ['*'])) : (a = a.match(G));
      for (var c, d = 0, e = a.length; e > d; d++)
        (c = a[d]),
          (_a.tweeners[c] = _a.tweeners[c] || []),
          _a.tweeners[c].unshift(b);
    },
    prefilters: [Za],
    prefilter: function (a, b) {
      b ? _a.prefilters.unshift(a) : _a.prefilters.push(a);
    },
  })),
    (n.speed = function (a, b, c) {
      var d =
        a && 'object' == typeof a
          ? n.extend({}, a)
          : {
              complete: c || (!c && b) || (n.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !n.isFunction(b) && b),
            };
      return (
        (d.duration = n.fx.off
          ? 0
          : 'number' == typeof d.duration
          ? d.duration
          : d.duration in n.fx.speeds
          ? n.fx.speeds[d.duration]
          : n.fx.speeds._default),
        (null != d.queue && d.queue !== !0) || (d.queue = 'fx'),
        (d.old = d.complete),
        (d.complete = function () {
          n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue);
        }),
        d
      );
    }),
    n.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(V)
          .css('opacity', 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function () {
            var b = _a(this, n.extend({}, a), f);
            (e || N.get(this, 'finish')) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          'string' != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || 'fx', []),
          this.each(function () {
            var b = !0,
              e = null != a && a + 'queueHooks',
              f = n.timers,
              g = N.get(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (!b && c) || n.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || 'fx'),
          this.each(function () {
            var b,
              c = N.get(this),
              d = c[a + 'queue'],
              e = c[a + 'queueHooks'],
              f = n.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    n.each(['toggle', 'show', 'hide'], function (a, b) {
      var c = n.fn[b];
      n.fn[b] = function (a, d, e) {
        return null == a || 'boolean' == typeof a
          ? c.apply(this, arguments)
          : this.animate(Xa(b, !0), a, d, e);
      };
    }),
    n.each(
      {
        slideDown: Xa('show'),
        slideUp: Xa('hide'),
        slideToggle: Xa('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' },
      },
      function (a, b) {
        n.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      },
    ),
    (n.timers = []),
    (n.fx.tick = function () {
      var a,
        b = 0,
        c = n.timers;
      for (Sa = n.now(); b < c.length; b++)
        (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
      c.length || n.fx.stop(), (Sa = void 0);
    }),
    (n.fx.timer = function (a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }),
    (n.fx.interval = 13),
    (n.fx.start = function () {
      Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval));
    }),
    (n.fx.stop = function () {
      a.clearInterval(Ta), (Ta = null);
    }),
    (n.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (n.fn.delay = function (b, c) {
      return (
        (b = n.fx ? n.fx.speeds[b] || b : b),
        (c = c || 'fx'),
        this.queue(c, function (c, d) {
          var e = a.setTimeout(c, b);
          d.stop = function () {
            a.clearTimeout(e);
          };
        })
      );
    }),
    (function () {
      var a = d.createElement('input'),
        b = d.createElement('select'),
        c = b.appendChild(d.createElement('option'));
      (a.type = 'checkbox'),
        (l.checkOn = '' !== a.value),
        (l.optSelected = c.selected),
        (b.disabled = !0),
        (l.optDisabled = !c.disabled),
        (a = d.createElement('input')),
        (a.value = 't'),
        (a.type = 'radio'),
        (l.radioValue = 't' === a.value);
    })();
  var ab,
    bb = n.expr.attrHandle;
  n.fn.extend({
    attr: function (a, b) {
      return K(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    },
  }),
    n.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return 'undefined' == typeof a.getAttribute
            ? n.prop(a, b, c)
            : ((1 === f && n.isXMLDoc(a)) ||
                ((b = b.toLowerCase()),
                (e =
                  n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0))),
              void 0 !== c
                ? null === c
                  ? void n.removeAttr(a, b)
                  : e && 'set' in e && void 0 !== (d = e.set(a, c, b))
                  ? d
                  : (a.setAttribute(b, c + ''), c)
                : e && 'get' in e && null !== (d = e.get(a, b))
                ? d
                : ((d = n.find.attr(a, b)), null == d ? void 0 : d));
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!l.radioValue && 'radio' === b && n.nodeName(a, 'input')) {
              var c = a.value;
              return a.setAttribute('type', b), c && (a.value = c), b;
            }
          },
        },
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e = 0,
          f = b && b.match(G);
        if (f && 1 === a.nodeType)
          while ((c = f[e++]))
            (d = n.propFix[c] || c),
              n.expr.match.bool.test(c) && (a[d] = !1),
              a.removeAttribute(c);
      },
    }),
    (ab = {
      set: function (a, b, c) {
        return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
      },
    }),
    n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = bb[b] || n.find.attr;
      bb[b] = function (a, b, d) {
        var e, f;
        return (
          d ||
            ((f = bb[b]),
            (bb[b] = e),
            (e = null != c(a, b, d) ? b.toLowerCase() : null),
            (bb[b] = f)),
          e
        );
      };
    });
  var cb = /^(?:input|select|textarea|button)$/i,
    db = /^(?:a|area)$/i;
  n.fn.extend({
    prop: function (a, b) {
      return K(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    },
  }),
    n.extend({
      prop: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return (
            (1 === f && n.isXMLDoc(a)) ||
              ((b = n.propFix[b] || b), (e = n.propHooks[b])),
            void 0 !== c
              ? e && 'set' in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && 'get' in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var b = n.find.attr(a, 'tabindex');
            return b
              ? parseInt(b, 10)
              : cb.test(a.nodeName) || (db.test(a.nodeName) && a.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: 'htmlFor', class: 'className' },
    }),
    l.optSelected ||
      (n.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
        set: function (a) {
          var b = a.parentNode;
          b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        },
      }),
    n.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable',
      ],
      function () {
        n.propFix[this.toLowerCase()] = this;
      },
    );
  var eb = /[\t\r\n\f]/g;
  function fb(a) {
    return (a.getAttribute && a.getAttribute('class')) || '';
  }
  n.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).addClass(a.call(this, b, fb(this)));
        });
      if ('string' == typeof a && a) {
        b = a.match(G) || [];
        while ((c = this[i++]))
          if (
            ((e = fb(c)),
            (d = 1 === c.nodeType && (' ' + e + ' ').replace(eb, ' ')))
          ) {
            g = 0;
            while ((f = b[g++])) d.indexOf(' ' + f + ' ') < 0 && (d += f + ' ');
            (h = n.trim(d)), e !== h && c.setAttribute('class', h);
          }
      }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).removeClass(a.call(this, b, fb(this)));
        });
      if (!arguments.length) return this.attr('class', '');
      if ('string' == typeof a && a) {
        b = a.match(G) || [];
        while ((c = this[i++]))
          if (
            ((e = fb(c)),
            (d = 1 === c.nodeType && (' ' + e + ' ').replace(eb, ' ')))
          ) {
            g = 0;
            while ((f = b[g++]))
              while (d.indexOf(' ' + f + ' ') > -1)
                d = d.replace(' ' + f + ' ', ' ');
            (h = n.trim(d)), e !== h && c.setAttribute('class', h);
          }
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return 'boolean' == typeof b && 'string' === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : n.isFunction(a)
        ? this.each(function (c) {
            n(this).toggleClass(a.call(this, c, fb(this), b), b);
          })
        : this.each(function () {
            var b, d, e, f;
            if ('string' === c) {
              (d = 0), (e = n(this)), (f = a.match(G) || []);
              while ((b = f[d++]))
                e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
            } else (void 0 !== a && 'boolean' !== c) || ((b = fb(this)), b && N.set(this, '__className__', b), this.setAttribute && this.setAttribute('class', b || a === !1 ? '' : N.get(this, '__className__') || ''));
          });
    },
    hasClass: function (a) {
      var b,
        c,
        d = 0;
      b = ' ' + a + ' ';
      while ((c = this[d++]))
        if (
          1 === c.nodeType &&
          (' ' + fb(c) + ' ').replace(eb, ' ').indexOf(b) > -1
        )
          return !0;
      return !1;
    },
  });
  var gb = /\r/g,
    hb = /[\x20\t\r\n\f]+/g;
  n.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = n.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, n(this).val()) : a),
                null == e
                  ? (e = '')
                  : 'number' == typeof e
                  ? (e += '')
                  : n.isArray(e) &&
                    (e = n.map(e, function (a) {
                      return null == a ? '' : a + '';
                    })),
                (b =
                  n.valHooks[this.type] ||
                  n.valHooks[this.nodeName.toLowerCase()]),
                (b && 'set' in b && void 0 !== b.set(this, e, 'value')) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]),
            b && 'get' in b && void 0 !== (c = b.get(e, 'value'))
              ? c
              : ((c = e.value),
                'string' == typeof c ? c.replace(gb, '') : null == c ? '' : c)
          );
      }
    },
  }),
    n.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = n.find.attr(a, 'value');
            return null != b ? b : n.trim(n.text(a)).replace(hb, ' ');
          },
        },
        select: {
          get: function (a) {
            for (
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = 'select-one' === a.type || 0 > e,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = 0 > e ? h : f ? e : 0;
              h > i;
              i++
            )
              if (
                ((c = d[i]),
                (c.selected || i === e) &&
                  (l.optDisabled
                    ? !c.disabled
                    : null === c.getAttribute('disabled')) &&
                  (!c.parentNode.disabled ||
                    !n.nodeName(c.parentNode, 'optgroup')))
              ) {
                if (((b = n(c).val()), f)) return b;
                g.push(b);
              }
            return g;
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;
            while (g--)
              (d = e[g]),
                (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) &&
                  (c = !0);
            return c || (a.selectedIndex = -1), f;
          },
        },
      },
    }),
    n.each(['radio', 'checkbox'], function () {
      (n.valHooks[this] = {
        set: function (a, b) {
          return n.isArray(b)
            ? (a.checked = n.inArray(n(a).val(), b) > -1)
            : void 0;
        },
      }),
        l.checkOn ||
          (n.valHooks[this].get = function (a) {
            return null === a.getAttribute('value') ? 'on' : a.value;
          });
    });
  var ib = /^(?:focusinfocus|focusoutblur)$/;
  n.extend(n.event, {
    trigger: function (b, c, e, f) {
      var g,
        h,
        i,
        j,
        l,
        m,
        o,
        p = [e || d],
        q = k.call(b, 'type') ? b.type : b,
        r = k.call(b, 'namespace') ? b.namespace.split('.') : [];
      if (
        ((h = i = e = e || d),
        3 !== e.nodeType &&
          8 !== e.nodeType &&
          !ib.test(q + n.event.triggered) &&
          (q.indexOf('.') > -1 &&
            ((r = q.split('.')), (q = r.shift()), r.sort()),
          (l = q.indexOf(':') < 0 && 'on' + q),
          (b = b[n.expando] ? b : new n.Event(q, 'object' == typeof b && b)),
          (b.isTrigger = f ? 2 : 3),
          (b.namespace = r.join('.')),
          (b.rnamespace = b.namespace
            ? new RegExp('(^|\\.)' + r.join('\\.(?:.*\\.|)') + '(\\.|$)')
            : null),
          (b.result = void 0),
          b.target || (b.target = e),
          (c = null == c ? [b] : n.makeArray(c, [b])),
          (o = n.event.special[q] || {}),
          f || !o.trigger || o.trigger.apply(e, c) !== !1))
      ) {
        if (!f && !o.noBubble && !n.isWindow(e)) {
          for (
            j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode);
            h;
            h = h.parentNode
          )
            p.push(h), (i = h);
          i === (e.ownerDocument || d) &&
            p.push(i.defaultView || i.parentWindow || a);
        }
        g = 0;
        while ((h = p[g++]) && !b.isPropagationStopped())
          (b.type = g > 1 ? j : o.bindType || q),
            (m = (N.get(h, 'events') || {})[b.type] && N.get(h, 'handle')),
            m && m.apply(h, c),
            (m = l && h[l]),
            m &&
              m.apply &&
              L(h) &&
              ((b.result = m.apply(h, c)),
              b.result === !1 && b.preventDefault());
        return (
          (b.type = q),
          f ||
            b.isDefaultPrevented() ||
            (o._default && o._default.apply(p.pop(), c) !== !1) ||
            !L(e) ||
            (l &&
              n.isFunction(e[q]) &&
              !n.isWindow(e) &&
              ((i = e[l]),
              i && (e[l] = null),
              (n.event.triggered = q),
              e[q](),
              (n.event.triggered = void 0),
              i && (e[l] = i))),
          b.result
        );
      }
    },
    simulate: function (a, b, c) {
      var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });
      n.event.trigger(d, null, b);
    },
  }),
    n.fn.extend({
      trigger: function (a, b) {
        return this.each(function () {
          n.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        return c ? n.event.trigger(a, b, c, !0) : void 0;
      },
    }),
    n.each(
      'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
        ' ',
      ),
      function (a, b) {
        n.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      },
    ),
    n.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
    }),
    (l.focusin = 'onfocusin' in a),
    l.focusin ||
      n.each({ focus: 'focusin', blur: 'focusout' }, function (a, b) {
        var c = function (a) {
          n.event.simulate(b, a.target, n.event.fix(a));
        };
        n.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = N.access(d, b);
            e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = N.access(d, b) - 1;
            e
              ? N.access(d, b, e)
              : (d.removeEventListener(a, c, !0), N.remove(d, b));
          },
        };
      });
  var jb = a.location,
    kb = n.now(),
    lb = /\?/;
  (n.parseJSON = function (a) {
    return JSON.parse(a + '');
  }),
    (n.parseXML = function (b) {
      var c;
      if (!b || 'string' != typeof b) return null;
      try {
        c = new a.DOMParser().parseFromString(b, 'text/xml');
      } catch (d) {
        c = void 0;
      }
      return (
        (c && !c.getElementsByTagName('parsererror').length) ||
          n.error('Invalid XML: ' + b),
        c
      );
    });
  var mb = /#.*$/,
    nb = /([?&])_=[^&]*/,
    ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    qb = /^(?:GET|HEAD)$/,
    rb = /^\/\//,
    sb = {},
    tb = {},
    ub = '*/'.concat('*'),
    vb = d.createElement('a');
  vb.href = jb.href;
  function wb(a) {
    return function (b, c) {
      'string' != typeof b && ((c = b), (b = '*'));
      var d,
        e = 0,
        f = b.toLowerCase().match(G) || [];
      if (n.isFunction(c))
        while ((d = f[e++]))
          '+' === d[0]
            ? ((d = d.slice(1) || '*'), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function xb(a, b, c, d) {
    var e = {},
      f = a === tb;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        n.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return 'string' != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e['*'] && g('*'));
  }
  function yb(a, b) {
    var c,
      d,
      e = n.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && n.extend(!0, a, d), a;
  }
  function zb(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ('*' === i[0])
      i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader('Content-Type'));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + ' ' + i[0]]) {
          f = e;
          break;
        }
        g || (g = e);
      }
      f = f || g;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function Ab(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ('*' === f) f = i;
        else if ('*' !== i && i !== f) {
          if (((g = j[i + ' ' + f] || j['* ' + f]), !g))
            for (e in j)
              if (
                ((h = e.split(' ')),
                h[1] === f && (g = j[i + ' ' + h[0]] || j['* ' + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a['throws']) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: 'parsererror',
                  error: g ? l : 'No conversion from ' + i + ' to ' + f,
                };
              }
        }
    return { state: 'success', data: b };
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: jb.href,
      type: 'GET',
      isLocal: pb.test(jb.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': ub,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON',
      },
      converters: {
        '* text': String,
        'text html': !0,
        'text json': n.parseJSON,
        'text xml': n.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a);
    },
    ajaxPrefilter: wb(sb),
    ajaxTransport: wb(tb),
    ajax: function (b, c) {
      'object' == typeof b && ((c = b), (b = void 0)), (c = c || {});
      var e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m = n.ajaxSetup({}, c),
        o = m.context || m,
        p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
        q = n.Deferred(),
        r = n.Callbacks('once memory'),
        s = m.statusCode || {},
        t = {},
        u = {},
        v = 0,
        w = 'canceled',
        x = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === v) {
              if (!h) {
                h = {};
                while ((b = ob.exec(g))) h[b[1].toLowerCase()] = b[2];
              }
              b = h[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === v ? g : null;
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return v || ((a = u[c] = u[c] || a), (t[a] = b)), this;
          },
          overrideMimeType: function (a) {
            return v || (m.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > v) for (b in a) s[b] = [s[b], a[b]];
              else x.always(a[x.status]);
            return this;
          },
          abort: function (a) {
            var b = a || w;
            return e && e.abort(b), z(0, b), this;
          },
        };
      if (
        ((q.promise(x).complete = r.add),
        (x.success = x.done),
        (x.error = x.fail),
        (m.url = ((b || m.url || jb.href) + '')
          .replace(mb, '')
          .replace(rb, jb.protocol + '//')),
        (m.type = c.method || c.type || m.method || m.type),
        (m.dataTypes = n
          .trim(m.dataType || '*')
          .toLowerCase()
          .match(G) || ['']),
        null == m.crossDomain)
      ) {
        j = d.createElement('a');
        try {
          (j.href = m.url),
            (j.href = j.href),
            (m.crossDomain =
              vb.protocol + '//' + vb.host != j.protocol + '//' + j.host);
        } catch (y) {
          m.crossDomain = !0;
        }
      }
      if (
        (m.data &&
          m.processData &&
          'string' != typeof m.data &&
          (m.data = n.param(m.data, m.traditional)),
        xb(sb, m, c, x),
        2 === v)
      )
        return x;
      (k = n.event && m.global),
        k && 0 === n.active++ && n.event.trigger('ajaxStart'),
        (m.type = m.type.toUpperCase()),
        (m.hasContent = !qb.test(m.type)),
        (f = m.url),
        m.hasContent ||
          (m.data &&
            ((f = m.url += (lb.test(f) ? '&' : '?') + m.data), delete m.data),
          m.cache === !1 &&
            (m.url = nb.test(f)
              ? f.replace(nb, '$1_=' + kb++)
              : f + (lb.test(f) ? '&' : '?') + '_=' + kb++)),
        m.ifModified &&
          (n.lastModified[f] &&
            x.setRequestHeader('If-Modified-Since', n.lastModified[f]),
          n.etag[f] && x.setRequestHeader('If-None-Match', n.etag[f])),
        ((m.data && m.hasContent && m.contentType !== !1) || c.contentType) &&
          x.setRequestHeader('Content-Type', m.contentType),
        x.setRequestHeader(
          'Accept',
          m.dataTypes[0] && m.accepts[m.dataTypes[0]]
            ? m.accepts[m.dataTypes[0]] +
                ('*' !== m.dataTypes[0] ? ', ' + ub + '; q=0.01' : '')
            : m.accepts['*'],
        );
      for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
      if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v))
        return x.abort();
      w = 'abort';
      for (l in { success: 1, error: 1, complete: 1 }) x[l](m[l]);
      if ((e = xb(tb, m, c, x))) {
        if (((x.readyState = 1), k && p.trigger('ajaxSend', [x, m]), 2 === v))
          return x;
        m.async &&
          m.timeout > 0 &&
          (i = a.setTimeout(function () {
            x.abort('timeout');
          }, m.timeout));
        try {
          (v = 1), e.send(t, z);
        } catch (y) {
          if (!(2 > v)) throw y;
          z(-1, y);
        }
      } else z(-1, 'No Transport');
      function z(b, c, d, h) {
        var j,
          l,
          t,
          u,
          w,
          y = c;
        2 !== v &&
          ((v = 2),
          i && a.clearTimeout(i),
          (e = void 0),
          (g = h || ''),
          (x.readyState = b > 0 ? 4 : 0),
          (j = (b >= 200 && 300 > b) || 304 === b),
          d && (u = zb(m, x, d)),
          (u = Ab(m, u, x, j)),
          j
            ? (m.ifModified &&
                ((w = x.getResponseHeader('Last-Modified')),
                w && (n.lastModified[f] = w),
                (w = x.getResponseHeader('etag')),
                w && (n.etag[f] = w)),
              204 === b || 'HEAD' === m.type
                ? (y = 'nocontent')
                : 304 === b
                ? (y = 'notmodified')
                : ((y = u.state), (l = u.data), (t = u.error), (j = !t)))
            : ((t = y), (!b && y) || ((y = 'error'), 0 > b && (b = 0))),
          (x.status = b),
          (x.statusText = (c || y) + ''),
          j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]),
          x.statusCode(s),
          (s = void 0),
          k && p.trigger(j ? 'ajaxSuccess' : 'ajaxError', [x, m, j ? l : t]),
          r.fireWith(o, [x, y]),
          k &&
            (p.trigger('ajaxComplete', [x, m]),
            --n.active || n.event.trigger('ajaxStop')));
      }
      return x;
    },
    getJSON: function (a, b, c) {
      return n.get(a, b, c, 'json');
    },
    getScript: function (a, b) {
      return n.get(a, void 0, b, 'script');
    },
  }),
    n.each(['get', 'post'], function (a, b) {
      n[b] = function (a, c, d, e) {
        return (
          n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          n.ajax(
            n.extend(
              { url: a, type: b, dataType: e, data: c, success: d },
              n.isPlainObject(a) && a,
            ),
          )
        );
      };
    }),
    (n._evalUrl = function (a) {
      return n.ajax({
        url: a,
        type: 'GET',
        dataType: 'script',
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    n.fn.extend({
      wrapAll: function (a) {
        var b;
        return n.isFunction(a)
          ? this.each(function (b) {
              n(this).wrapAll(a.call(this, b));
            })
          : (this[0] &&
              ((b = n(a, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && b.insertBefore(this[0]),
              b
                .map(function () {
                  var a = this;
                  while (a.firstElementChild) a = a.firstElementChild;
                  return a;
                })
                .append(this)),
            this);
      },
      wrapInner: function (a) {
        return n.isFunction(a)
          ? this.each(function (b) {
              n(this).wrapInner(a.call(this, b));
            })
          : this.each(function () {
              var b = n(this),
                c = b.contents();
              c.length ? c.wrapAll(a) : b.append(a);
            });
      },
      wrap: function (a) {
        var b = n.isFunction(a);
        return this.each(function (c) {
          n(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            n.nodeName(this, 'body') || n(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (n.expr.filters.hidden = function (a) {
      return !n.expr.filters.visible(a);
    }),
    (n.expr.filters.visible = function (a) {
      return (
        a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
      );
    });
  var Bb = /%20/g,
    Cb = /\[\]$/,
    Db = /\r?\n/g,
    Eb = /^(?:submit|button|image|reset|file)$/i,
    Fb = /^(?:input|select|textarea|keygen)/i;
  function Gb(a, b, c, d) {
    var e;
    if (n.isArray(b))
      n.each(b, function (b, e) {
        c || Cb.test(a)
          ? d(a, e)
          : Gb(
              a + '[' + ('object' == typeof e && null != e ? b : '') + ']',
              e,
              c,
              d,
            );
      });
    else if (c || 'object' !== n.type(b)) d(a, b);
    else for (e in b) Gb(a + '[' + e + ']', b[e], c, d);
  }
  (n.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        (b = n.isFunction(b) ? b() : null == b ? '' : b),
          (d[d.length] = encodeURIComponent(a) + '=' + encodeURIComponent(b));
      };
    if (
      (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
      n.isArray(a) || (a.jquery && !n.isPlainObject(a)))
    )
      n.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) Gb(c, a[c], b, e);
    return d.join('&').replace(Bb, '+');
  }),
    n.fn.extend({
      serialize: function () {
        return n.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = n.prop(this, 'elements');
          return a ? n.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !n(this).is(':disabled') &&
              Fb.test(this.nodeName) &&
              !Eb.test(a) &&
              (this.checked || !X.test(a))
            );
          })
          .map(function (a, b) {
            var c = n(this).val();
            return null == c
              ? null
              : n.isArray(c)
              ? n.map(c, function (a) {
                  return { name: b.name, value: a.replace(Db, '\r\n') };
                })
              : { name: b.name, value: c.replace(Db, '\r\n') };
          })
          .get();
      },
    }),
    (n.ajaxSettings.xhr = function () {
      try {
        return new a.XMLHttpRequest();
      } catch (b) {}
    });
  var Hb = { 0: 200, 1223: 204 },
    Ib = n.ajaxSettings.xhr();
  (l.cors = !!Ib && 'withCredentials' in Ib),
    (l.ajax = Ib = !!Ib),
    n.ajaxTransport(function (b) {
      var c, d;
      return l.cors || (Ib && !b.crossDomain)
        ? {
            send: function (e, f) {
              var g,
                h = b.xhr();
              if (
                (h.open(b.type, b.url, b.async, b.username, b.password),
                b.xhrFields)
              )
                for (g in b.xhrFields) h[g] = b.xhrFields[g];
              b.mimeType &&
                h.overrideMimeType &&
                h.overrideMimeType(b.mimeType),
                b.crossDomain ||
                  e['X-Requested-With'] ||
                  (e['X-Requested-With'] = 'XMLHttpRequest');
              for (g in e) h.setRequestHeader(g, e[g]);
              (c = function (a) {
                return function () {
                  c &&
                    ((c =
                      d =
                      h.onload =
                      h.onerror =
                      h.onabort =
                      h.onreadystatechange =
                        null),
                    'abort' === a
                      ? h.abort()
                      : 'error' === a
                      ? 'number' != typeof h.status
                        ? f(0, 'error')
                        : f(h.status, h.statusText)
                      : f(
                          Hb[h.status] || h.status,
                          h.statusText,
                          'text' !== (h.responseType || 'text') ||
                            'string' != typeof h.responseText
                            ? { binary: h.response }
                            : { text: h.responseText },
                          h.getAllResponseHeaders(),
                        ));
                };
              }),
                (h.onload = c()),
                (d = h.onerror = c('error')),
                void 0 !== h.onabort
                  ? (h.onabort = d)
                  : (h.onreadystatechange = function () {
                      4 === h.readyState &&
                        a.setTimeout(function () {
                          c && d();
                        });
                    }),
                (c = c('abort'));
              try {
                h.send((b.hasContent && b.data) || null);
              } catch (i) {
                if (c) throw i;
              }
            },
            abort: function () {
              c && c();
            },
          }
        : void 0;
    }),
    n.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (a) {
          return n.globalEval(a), a;
        },
      },
    }),
    n.ajaxPrefilter('script', function (a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = 'GET');
    }),
    n.ajaxTransport('script', function (a) {
      if (a.crossDomain) {
        var b, c;
        return {
          send: function (e, f) {
            (b = n('<script>')
              .prop({ charset: a.scriptCharset, src: a.url })
              .on(
                'load error',
                (c = function (a) {
                  b.remove(),
                    (c = null),
                    a && f('error' === a.type ? 404 : 200, a.type);
                }),
              )),
              d.head.appendChild(b[0]);
          },
          abort: function () {
            c && c();
          },
        };
      }
    });
  var Jb = [],
    Kb = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var a = Jb.pop() || n.expando + '_' + kb++;
      return (this[a] = !0), a;
    },
  }),
    n.ajaxPrefilter('json jsonp', function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (Kb.test(b.url)
            ? 'url'
            : 'string' == typeof b.data &&
              0 ===
                (b.contentType || '').indexOf(
                  'application/x-www-form-urlencoded',
                ) &&
              Kb.test(b.data) &&
              'data');
      return h || 'jsonp' === b.dataTypes[0]
        ? ((e = b.jsonpCallback =
            n.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(Kb, '$1' + e))
            : b.jsonp !== !1 &&
              (b.url += (lb.test(b.url) ? '&' : '?') + b.jsonp + '=' + e),
          (b.converters['script json'] = function () {
            return g || n.error(e + ' was not called'), g[0];
          }),
          (b.dataTypes[0] = 'json'),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            void 0 === f ? n(a).removeProp(e) : (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), Jb.push(e)),
              g && n.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          'script')
        : void 0;
    }),
    (n.parseHTML = function (a, b, c) {
      if (!a || 'string' != typeof a) return null;
      'boolean' == typeof b && ((c = b), (b = !1)), (b = b || d);
      var e = x.exec(a),
        f = !c && [];
      return e
        ? [b.createElement(e[1])]
        : ((e = ca([a], b, f)),
          f && f.length && n(f).remove(),
          n.merge([], e.childNodes));
    });
  var Lb = n.fn.load;
  (n.fn.load = function (a, b, c) {
    if ('string' != typeof a && Lb) return Lb.apply(this, arguments);
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(' ');
    return (
      h > -1 && ((d = n.trim(a.slice(h))), (a = a.slice(0, h))),
      n.isFunction(b)
        ? ((c = b), (b = void 0))
        : b && 'object' == typeof b && (e = 'POST'),
      g.length > 0 &&
        n
          .ajax({ url: a, type: e || 'GET', dataType: 'html', data: b })
          .done(function (a) {
            (f = arguments),
              g.html(d ? n('<div>').append(n.parseHTML(a)).find(d) : a);
          })
          .always(
            c &&
              function (a, b) {
                g.each(function () {
                  c.apply(this, f || [a.responseText, b, a]);
                });
              },
          ),
      this
    );
  }),
    n.each(
      [
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend',
      ],
      function (a, b) {
        n.fn[b] = function (a) {
          return this.on(b, a);
        };
      },
    ),
    (n.expr.filters.animated = function (a) {
      return n.grep(n.timers, function (b) {
        return a === b.elem;
      }).length;
    });
  function Mb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }
  (n.offset = {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = n.css(a, 'position'),
        l = n(a),
        m = {};
      'static' === k && (a.style.position = 'relative'),
        (h = l.offset()),
        (f = n.css(a, 'top')),
        (i = n.css(a, 'left')),
        (j =
          ('absolute' === k || 'fixed' === k) && (f + i).indexOf('auto') > -1),
        j
          ? ((d = l.position()), (g = d.top), (e = d.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))),
        null != b.top && (m.top = b.top - h.top + g),
        null != b.left && (m.left = b.left - h.left + e),
        'using' in b ? b.using.call(a, m) : l.css(m);
    },
  }),
    n.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                n.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d = this[0],
          e = { top: 0, left: 0 },
          f = d && d.ownerDocument;
        if (f)
          return (
            (b = f.documentElement),
            n.contains(b, d)
              ? ((e = d.getBoundingClientRect()),
                (c = Mb(f)),
                {
                  top: e.top + c.pageYOffset - b.clientTop,
                  left: e.left + c.pageXOffset - b.clientLeft,
                })
              : e
          );
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };
          return (
            'fixed' === n.css(c, 'position')
              ? (b = c.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                n.nodeName(a[0], 'html') || (d = a.offset()),
                (d.top += n.css(a[0], 'borderTopWidth', !0)),
                (d.left += n.css(a[0], 'borderLeftWidth', !0))),
            {
              top: b.top - d.top - n.css(c, 'marginTop', !0),
              left: b.left - d.left - n.css(c, 'marginLeft', !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent;
          while (a && 'static' === n.css(a, 'position')) a = a.offsetParent;
          return a || Ea;
        });
      },
    }),
    n.each(
      { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
      function (a, b) {
        var c = 'pageYOffset' === b;
        n.fn[a] = function (d) {
          return K(
            this,
            function (a, d, e) {
              var f = Mb(a);
              return void 0 === e
                ? f
                  ? f[b]
                  : a[d]
                : void (f
                    ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset)
                    : (a[d] = e));
            },
            a,
            d,
            arguments.length,
          );
        };
      },
    ),
    n.each(['top', 'left'], function (a, b) {
      n.cssHooks[b] = Ga(l.pixelPosition, function (a, c) {
        return c
          ? ((c = Fa(a, b)), Ba.test(c) ? n(a).position()[b] + 'px' : c)
          : void 0;
      });
    }),
    n.each({ Height: 'height', Width: 'width' }, function (a, b) {
      n.each(
        { padding: 'inner' + a, content: b, '': 'outer' + a },
        function (c, d) {
          n.fn[d] = function (d, e) {
            var f = arguments.length && (c || 'boolean' != typeof d),
              g = c || (d === !0 || e === !0 ? 'margin' : 'border');
            return K(
              this,
              function (b, c, d) {
                var e;
                return n.isWindow(b)
                  ? b.document.documentElement['client' + a]
                  : 9 === b.nodeType
                  ? ((e = b.documentElement),
                    Math.max(
                      b.body['scroll' + a],
                      e['scroll' + a],
                      b.body['offset' + a],
                      e['offset' + a],
                      e['client' + a],
                    ))
                  : void 0 === d
                  ? n.css(b, c, g)
                  : n.style(b, c, d, g);
              },
              b,
              f ? d : void 0,
              f,
              null,
            );
          };
        },
      );
    }),
    n.fn.extend({
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, '**')
          : this.off(b, a || '**', c);
      },
      size: function () {
        return this.length;
      },
    }),
    (n.fn.andSelf = n.fn.addBack),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return n;
      });
  var Nb = a.jQuery,
    Ob = a.$;
  return (
    (n.noConflict = function (b) {
      return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n;
    }),
    b || (a.jQuery = a.$ = n),
    n
  );
});

/*!
 * Bootstrap v4.0.0 (https://getbootstrap.com)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports, require('jquery'), require('popper.js'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'jquery', 'popper.js'], e)
    : e((t.bootstrap = {}), t.jQuery, t.Popper);
})(this, function (t, e, n) {
  'use strict';
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }
  function r() {
    return (r =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }).apply(this, arguments);
  }
  (e = e && e.hasOwnProperty('default') ? e.default : e),
    (n = n && n.hasOwnProperty('default') ? n.default : n);
  var o,
    a,
    l,
    h,
    c,
    u,
    f,
    d,
    _,
    g,
    p,
    m,
    v,
    E,
    T,
    y,
    C,
    I,
    A,
    b,
    D,
    S,
    w,
    N,
    O,
    k,
    P = (function (t) {
      var e = !1;
      function n(e) {
        var n = this,
          s = !1;
        return (
          t(this).one(i.TRANSITION_END, function () {
            s = !0;
          }),
          setTimeout(function () {
            s || i.triggerTransitionEnd(n);
          }, e),
          this
        );
      }
      var i = {
        TRANSITION_END: 'bsTransitionEnd',
        getUID: function (t) {
          do {
            t += ~~(1e6 * Math.random());
          } while (document.getElementById(t));
          return t;
        },
        getSelectorFromElement: function (e) {
          var n,
            i = e.getAttribute('data-target');
          (i && '#' !== i) || (i = e.getAttribute('href') || ''),
            '#' === i.charAt(0) &&
              ((n = i),
              (i = n =
                'function' == typeof t.escapeSelector
                  ? t.escapeSelector(n).substr(1)
                  : n.replace(/(:|\.|\[|\]|,|=|@)/g, '\\$1')));
          try {
            return t(document).find(i).length > 0 ? i : null;
          } catch (t) {
            return null;
          }
        },
        reflow: function (t) {
          return t.offsetHeight;
        },
        triggerTransitionEnd: function (n) {
          t(n).trigger(e.end);
        },
        supportsTransitionEnd: function () {
          return Boolean(e);
        },
        isElement: function (t) {
          return (t[0] || t).nodeType;
        },
        typeCheckConfig: function (t, e, n) {
          for (var s in n)
            if (Object.prototype.hasOwnProperty.call(n, s)) {
              var r = n[s],
                o = e[s],
                a =
                  o && i.isElement(o)
                    ? 'element'
                    : ((l = o),
                      {}.toString
                        .call(l)
                        .match(/\s([a-zA-Z]+)/)[1]
                        .toLowerCase());
              if (!new RegExp(r).test(a))
                throw new Error(
                  t.toUpperCase() +
                    ': Option "' +
                    s +
                    '" provided type "' +
                    a +
                    '" but expected type "' +
                    r +
                    '".',
                );
            }
          var l;
        },
      };
      return (
        (e = ('undefined' == typeof window || !window.QUnit) && {
          end: 'transitionend',
        }),
        (t.fn.emulateTransitionEnd = n),
        i.supportsTransitionEnd() &&
          (t.event.special[i.TRANSITION_END] = {
            bindType: e.end,
            delegateType: e.end,
            handle: function (e) {
              if (t(e.target).is(this))
                return e.handleObj.handler.apply(this, arguments);
            },
          }),
        i
      );
    })(e),
    L =
      ((a = 'alert'),
      (h = '.' + (l = 'bs.alert')),
      (c = (o = e).fn[a]),
      (u = {
        CLOSE: 'close' + h,
        CLOSED: 'closed' + h,
        CLICK_DATA_API: 'click' + h + '.data-api',
      }),
      (f = 'alert'),
      (d = 'fade'),
      (_ = 'show'),
      (g = (function () {
        function t(t) {
          this._element = t;
        }
        var e = t.prototype;
        return (
          (e.close = function (t) {
            t = t || this._element;
            var e = this._getRootElement(t);
            this._triggerCloseEvent(e).isDefaultPrevented() ||
              this._removeElement(e);
          }),
          (e.dispose = function () {
            o.removeData(this._element, l), (this._element = null);
          }),
          (e._getRootElement = function (t) {
            var e = P.getSelectorFromElement(t),
              n = !1;
            return e && (n = o(e)[0]), n || (n = o(t).closest('.' + f)[0]), n;
          }),
          (e._triggerCloseEvent = function (t) {
            var e = o.Event(u.CLOSE);
            return o(t).trigger(e), e;
          }),
          (e._removeElement = function (t) {
            var e = this;
            o(t).removeClass(_),
              P.supportsTransitionEnd() && o(t).hasClass(d)
                ? o(t)
                    .one(P.TRANSITION_END, function (n) {
                      return e._destroyElement(t, n);
                    })
                    .emulateTransitionEnd(150)
                : this._destroyElement(t);
          }),
          (e._destroyElement = function (t) {
            o(t).detach().trigger(u.CLOSED).remove();
          }),
          (t._jQueryInterface = function (e) {
            return this.each(function () {
              var n = o(this),
                i = n.data(l);
              i || ((i = new t(this)), n.data(l, i)),
                'close' === e && i[e](this);
            });
          }),
          (t._handleDismiss = function (t) {
            return function (e) {
              e && e.preventDefault(), t.close(this);
            };
          }),
          s(t, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.0.0';
              },
            },
          ]),
          t
        );
      })()),
      o(document).on(
        u.CLICK_DATA_API,
        '[data-dismiss="alert"]',
        g._handleDismiss(new g()),
      ),
      (o.fn[a] = g._jQueryInterface),
      (o.fn[a].Constructor = g),
      (o.fn[a].noConflict = function () {
        return (o.fn[a] = c), g._jQueryInterface;
      }),
      g),
    R =
      ((m = 'button'),
      (E = '.' + (v = 'bs.button')),
      (T = '.data-api'),
      (y = (p = e).fn[m]),
      (C = 'active'),
      (I = 'btn'),
      (A = 'focus'),
      (b = '[data-toggle^="button"]'),
      (D = '[data-toggle="buttons"]'),
      (S = 'input'),
      (w = '.active'),
      (N = '.btn'),
      (O = {
        CLICK_DATA_API: 'click' + E + T,
        FOCUS_BLUR_DATA_API: 'focus' + E + T + ' blur' + E + T,
      }),
      (k = (function () {
        function t(t) {
          this._element = t;
        }
        var e = t.prototype;
        return (
          (e.toggle = function () {
            var t = !0,
              e = !0,
              n = p(this._element).closest(D)[0];
            if (n) {
              var i = p(this._element).find(S)[0];
              if (i) {
                if ('radio' === i.type)
                  if (i.checked && p(this._element).hasClass(C)) t = !1;
                  else {
                    var s = p(n).find(w)[0];
                    s && p(s).removeClass(C);
                  }
                if (t) {
                  if (
                    i.hasAttribute('disabled') ||
                    n.hasAttribute('disabled') ||
                    i.classList.contains('disabled') ||
                    n.classList.contains('disabled')
                  )
                    return;
                  (i.checked = !p(this._element).hasClass(C)),
                    p(i).trigger('change');
                }
                i.focus(), (e = !1);
              }
            }
            e &&
              this._element.setAttribute(
                'aria-pressed',
                !p(this._element).hasClass(C),
              ),
              t && p(this._element).toggleClass(C);
          }),
          (e.dispose = function () {
            p.removeData(this._element, v), (this._element = null);
          }),
          (t._jQueryInterface = function (e) {
            return this.each(function () {
              var n = p(this).data(v);
              n || ((n = new t(this)), p(this).data(v, n)),
                'toggle' === e && n[e]();
            });
          }),
          s(t, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.0.0';
              },
            },
          ]),
          t
        );
      })()),
      p(document)
        .on(O.CLICK_DATA_API, b, function (t) {
          t.preventDefault();
          var e = t.target;
          p(e).hasClass(I) || (e = p(e).closest(N)),
            k._jQueryInterface.call(p(e), 'toggle');
        })
        .on(O.FOCUS_BLUR_DATA_API, b, function (t) {
          var e = p(t.target).closest(N)[0];
          p(e).toggleClass(A, /^focus(in)?$/.test(t.type));
        }),
      (p.fn[m] = k._jQueryInterface),
      (p.fn[m].Constructor = k),
      (p.fn[m].noConflict = function () {
        return (p.fn[m] = y), k._jQueryInterface;
      }),
      k),
    j = (function (t) {
      var e = 'carousel',
        n = 'bs.carousel',
        i = '.' + n,
        o = t.fn[e],
        a = {
          interval: 5e3,
          keyboard: !0,
          slide: !1,
          pause: 'hover',
          wrap: !0,
        },
        l = {
          interval: '(number|boolean)',
          keyboard: 'boolean',
          slide: '(boolean|string)',
          pause: '(string|boolean)',
          wrap: 'boolean',
        },
        h = 'next',
        c = 'prev',
        u = 'left',
        f = 'right',
        d = {
          SLIDE: 'slide' + i,
          SLID: 'slid' + i,
          KEYDOWN: 'keydown' + i,
          MOUSEENTER: 'mouseenter' + i,
          MOUSELEAVE: 'mouseleave' + i,
          TOUCHEND: 'touchend' + i,
          LOAD_DATA_API: 'load' + i + '.data-api',
          CLICK_DATA_API: 'click' + i + '.data-api',
        },
        _ = 'carousel',
        g = 'active',
        p = 'slide',
        m = 'carousel-item-right',
        v = 'carousel-item-left',
        E = 'carousel-item-next',
        T = 'carousel-item-prev',
        y = {
          ACTIVE: '.active',
          ACTIVE_ITEM: '.active.carousel-item',
          ITEM: '.carousel-item',
          NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
          INDICATORS: '.carousel-indicators',
          DATA_SLIDE: '[data-slide], [data-slide-to]',
          DATA_RIDE: '[data-ride="carousel"]',
        },
        C = (function () {
          function o(e, n) {
            (this._items = null),
              (this._interval = null),
              (this._activeElement = null),
              (this._isPaused = !1),
              (this._isSliding = !1),
              (this.touchTimeout = null),
              (this._config = this._getConfig(n)),
              (this._element = t(e)[0]),
              (this._indicatorsElement = t(this._element).find(
                y.INDICATORS,
              )[0]),
              this._addEventListeners();
          }
          var C = o.prototype;
          return (
            (C.next = function () {
              this._isSliding || this._slide(h);
            }),
            (C.nextWhenVisible = function () {
              !document.hidden &&
                t(this._element).is(':visible') &&
                'hidden' !== t(this._element).css('visibility') &&
                this.next();
            }),
            (C.prev = function () {
              this._isSliding || this._slide(c);
            }),
            (C.pause = function (e) {
              e || (this._isPaused = !0),
                t(this._element).find(y.NEXT_PREV)[0] &&
                  P.supportsTransitionEnd() &&
                  (P.triggerTransitionEnd(this._element), this.cycle(!0)),
                clearInterval(this._interval),
                (this._interval = null);
            }),
            (C.cycle = function (t) {
              t || (this._isPaused = !1),
                this._interval &&
                  (clearInterval(this._interval), (this._interval = null)),
                this._config.interval &&
                  !this._isPaused &&
                  (this._interval = setInterval(
                    (document.visibilityState
                      ? this.nextWhenVisible
                      : this.next
                    ).bind(this),
                    this._config.interval,
                  ));
            }),
            (C.to = function (e) {
              var n = this;
              this._activeElement = t(this._element).find(y.ACTIVE_ITEM)[0];
              var i = this._getItemIndex(this._activeElement);
              if (!(e > this._items.length - 1 || e < 0))
                if (this._isSliding)
                  t(this._element).one(d.SLID, function () {
                    return n.to(e);
                  });
                else {
                  if (i === e) return this.pause(), void this.cycle();
                  var s = e > i ? h : c;
                  this._slide(s, this._items[e]);
                }
            }),
            (C.dispose = function () {
              t(this._element).off(i),
                t.removeData(this._element, n),
                (this._items = null),
                (this._config = null),
                (this._element = null),
                (this._interval = null),
                (this._isPaused = null),
                (this._isSliding = null),
                (this._activeElement = null),
                (this._indicatorsElement = null);
            }),
            (C._getConfig = function (t) {
              return (t = r({}, a, t)), P.typeCheckConfig(e, t, l), t;
            }),
            (C._addEventListeners = function () {
              var e = this;
              this._config.keyboard &&
                t(this._element).on(d.KEYDOWN, function (t) {
                  return e._keydown(t);
                }),
                'hover' === this._config.pause &&
                  (t(this._element)
                    .on(d.MOUSEENTER, function (t) {
                      return e.pause(t);
                    })
                    .on(d.MOUSELEAVE, function (t) {
                      return e.cycle(t);
                    }),
                  'ontouchstart' in document.documentElement &&
                    t(this._element).on(d.TOUCHEND, function () {
                      e.pause(),
                        e.touchTimeout && clearTimeout(e.touchTimeout),
                        (e.touchTimeout = setTimeout(function (t) {
                          return e.cycle(t);
                        }, 500 + e._config.interval));
                    }));
            }),
            (C._keydown = function (t) {
              if (!/input|textarea/i.test(t.target.tagName))
                switch (t.which) {
                  case 37:
                    t.preventDefault(), this.prev();
                    break;
                  case 39:
                    t.preventDefault(), this.next();
                }
            }),
            (C._getItemIndex = function (e) {
              return (
                (this._items = t.makeArray(t(e).parent().find(y.ITEM))),
                this._items.indexOf(e)
              );
            }),
            (C._getItemByDirection = function (t, e) {
              var n = t === h,
                i = t === c,
                s = this._getItemIndex(e),
                r = this._items.length - 1;
              if (((i && 0 === s) || (n && s === r)) && !this._config.wrap)
                return e;
              var o = (s + (t === c ? -1 : 1)) % this._items.length;
              return -1 === o
                ? this._items[this._items.length - 1]
                : this._items[o];
            }),
            (C._triggerSlideEvent = function (e, n) {
              var i = this._getItemIndex(e),
                s = this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]),
                r = t.Event(d.SLIDE, {
                  relatedTarget: e,
                  direction: n,
                  from: s,
                  to: i,
                });
              return t(this._element).trigger(r), r;
            }),
            (C._setActiveIndicatorElement = function (e) {
              if (this._indicatorsElement) {
                t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);
                var n = this._indicatorsElement.children[this._getItemIndex(e)];
                n && t(n).addClass(g);
              }
            }),
            (C._slide = function (e, n) {
              var i,
                s,
                r,
                o = this,
                a = t(this._element).find(y.ACTIVE_ITEM)[0],
                l = this._getItemIndex(a),
                c = n || (a && this._getItemByDirection(e, a)),
                _ = this._getItemIndex(c),
                C = Boolean(this._interval);
              if (
                (e === h
                  ? ((i = v), (s = E), (r = u))
                  : ((i = m), (s = T), (r = f)),
                c && t(c).hasClass(g))
              )
                this._isSliding = !1;
              else if (
                !this._triggerSlideEvent(c, r).isDefaultPrevented() &&
                a &&
                c
              ) {
                (this._isSliding = !0),
                  C && this.pause(),
                  this._setActiveIndicatorElement(c);
                var I = t.Event(d.SLID, {
                  relatedTarget: c,
                  direction: r,
                  from: l,
                  to: _,
                });
                P.supportsTransitionEnd() && t(this._element).hasClass(p)
                  ? (t(c).addClass(s),
                    P.reflow(c),
                    t(a).addClass(i),
                    t(c).addClass(i),
                    t(a)
                      .one(P.TRANSITION_END, function () {
                        t(c)
                          .removeClass(i + ' ' + s)
                          .addClass(g),
                          t(a).removeClass(g + ' ' + s + ' ' + i),
                          (o._isSliding = !1),
                          setTimeout(function () {
                            return t(o._element).trigger(I);
                          }, 0);
                      })
                      .emulateTransitionEnd(600))
                  : (t(a).removeClass(g),
                    t(c).addClass(g),
                    (this._isSliding = !1),
                    t(this._element).trigger(I)),
                  C && this.cycle();
              }
            }),
            (o._jQueryInterface = function (e) {
              return this.each(function () {
                var i = t(this).data(n),
                  s = r({}, a, t(this).data());
                'object' == typeof e && (s = r({}, s, e));
                var l = 'string' == typeof e ? e : s.slide;
                if (
                  (i || ((i = new o(this, s)), t(this).data(n, i)),
                  'number' == typeof e)
                )
                  i.to(e);
                else if ('string' == typeof l) {
                  if ('undefined' == typeof i[l])
                    throw new TypeError('No method named "' + l + '"');
                  i[l]();
                } else s.interval && (i.pause(), i.cycle());
              });
            }),
            (o._dataApiClickHandler = function (e) {
              var i = P.getSelectorFromElement(this);
              if (i) {
                var s = t(i)[0];
                if (s && t(s).hasClass(_)) {
                  var a = r({}, t(s).data(), t(this).data()),
                    l = this.getAttribute('data-slide-to');
                  l && (a.interval = !1),
                    o._jQueryInterface.call(t(s), a),
                    l && t(s).data(n).to(l),
                    e.preventDefault();
                }
              }
            }),
            s(o, null, [
              {
                key: 'VERSION',
                get: function () {
                  return '4.0.0';
                },
              },
              {
                key: 'Default',
                get: function () {
                  return a;
                },
              },
            ]),
            o
          );
        })();
      return (
        t(document).on(d.CLICK_DATA_API, y.DATA_SLIDE, C._dataApiClickHandler),
        t(window).on(d.LOAD_DATA_API, function () {
          t(y.DATA_RIDE).each(function () {
            var e = t(this);
            C._jQueryInterface.call(e, e.data());
          });
        }),
        (t.fn[e] = C._jQueryInterface),
        (t.fn[e].Constructor = C),
        (t.fn[e].noConflict = function () {
          return (t.fn[e] = o), C._jQueryInterface;
        }),
        C
      );
    })(e),
    H = (function (t) {
      var e = 'collapse',
        n = 'bs.collapse',
        i = '.' + n,
        o = t.fn[e],
        a = { toggle: !0, parent: '' },
        l = { toggle: 'boolean', parent: '(string|element)' },
        h = {
          SHOW: 'show' + i,
          SHOWN: 'shown' + i,
          HIDE: 'hide' + i,
          HIDDEN: 'hidden' + i,
          CLICK_DATA_API: 'click' + i + '.data-api',
        },
        c = 'show',
        u = 'collapse',
        f = 'collapsing',
        d = 'collapsed',
        _ = 'width',
        g = 'height',
        p = {
          ACTIVES: '.show, .collapsing',
          DATA_TOGGLE: '[data-toggle="collapse"]',
        },
        m = (function () {
          function i(e, n) {
            (this._isTransitioning = !1),
              (this._element = e),
              (this._config = this._getConfig(n)),
              (this._triggerArray = t.makeArray(
                t(
                  '[data-toggle="collapse"][href="#' +
                    e.id +
                    '"],[data-toggle="collapse"][data-target="#' +
                    e.id +
                    '"]',
                ),
              ));
            for (var i = t(p.DATA_TOGGLE), s = 0; s < i.length; s++) {
              var r = i[s],
                o = P.getSelectorFromElement(r);
              null !== o &&
                t(o).filter(e).length > 0 &&
                ((this._selector = o), this._triggerArray.push(r));
            }
            (this._parent = this._config.parent ? this._getParent() : null),
              this._config.parent ||
                this._addAriaAndCollapsedClass(
                  this._element,
                  this._triggerArray,
                ),
              this._config.toggle && this.toggle();
          }
          var o = i.prototype;
          return (
            (o.toggle = function () {
              t(this._element).hasClass(c) ? this.hide() : this.show();
            }),
            (o.show = function () {
              var e,
                s,
                r = this;
              if (
                !this._isTransitioning &&
                !t(this._element).hasClass(c) &&
                (this._parent &&
                  0 ===
                    (e = t.makeArray(
                      t(this._parent)
                        .find(p.ACTIVES)
                        .filter('[data-parent="' + this._config.parent + '"]'),
                    )).length &&
                  (e = null),
                !(
                  e &&
                  (s = t(e).not(this._selector).data(n)) &&
                  s._isTransitioning
                ))
              ) {
                var o = t.Event(h.SHOW);
                if ((t(this._element).trigger(o), !o.isDefaultPrevented())) {
                  e &&
                    (i._jQueryInterface.call(t(e).not(this._selector), 'hide'),
                    s || t(e).data(n, null));
                  var a = this._getDimension();
                  t(this._element).removeClass(u).addClass(f),
                    (this._element.style[a] = 0),
                    this._triggerArray.length > 0 &&
                      t(this._triggerArray)
                        .removeClass(d)
                        .attr('aria-expanded', !0),
                    this.setTransitioning(!0);
                  var l = function () {
                    t(r._element).removeClass(f).addClass(u).addClass(c),
                      (r._element.style[a] = ''),
                      r.setTransitioning(!1),
                      t(r._element).trigger(h.SHOWN);
                  };
                  if (P.supportsTransitionEnd()) {
                    var _ = 'scroll' + (a[0].toUpperCase() + a.slice(1));
                    t(this._element)
                      .one(P.TRANSITION_END, l)
                      .emulateTransitionEnd(600),
                      (this._element.style[a] = this._element[_] + 'px');
                  } else l();
                }
              }
            }),
            (o.hide = function () {
              var e = this;
              if (!this._isTransitioning && t(this._element).hasClass(c)) {
                var n = t.Event(h.HIDE);
                if ((t(this._element).trigger(n), !n.isDefaultPrevented())) {
                  var i = this._getDimension();
                  if (
                    ((this._element.style[i] =
                      this._element.getBoundingClientRect()[i] + 'px'),
                    P.reflow(this._element),
                    t(this._element).addClass(f).removeClass(u).removeClass(c),
                    this._triggerArray.length > 0)
                  )
                    for (var s = 0; s < this._triggerArray.length; s++) {
                      var r = this._triggerArray[s],
                        o = P.getSelectorFromElement(r);
                      if (null !== o)
                        t(o).hasClass(c) ||
                          t(r).addClass(d).attr('aria-expanded', !1);
                    }
                  this.setTransitioning(!0);
                  var a = function () {
                    e.setTransitioning(!1),
                      t(e._element)
                        .removeClass(f)
                        .addClass(u)
                        .trigger(h.HIDDEN);
                  };
                  (this._element.style[i] = ''),
                    P.supportsTransitionEnd()
                      ? t(this._element)
                          .one(P.TRANSITION_END, a)
                          .emulateTransitionEnd(600)
                      : a();
                }
              }
            }),
            (o.setTransitioning = function (t) {
              this._isTransitioning = t;
            }),
            (o.dispose = function () {
              t.removeData(this._element, n),
                (this._config = null),
                (this._parent = null),
                (this._element = null),
                (this._triggerArray = null),
                (this._isTransitioning = null);
            }),
            (o._getConfig = function (t) {
              return (
                ((t = r({}, a, t)).toggle = Boolean(t.toggle)),
                P.typeCheckConfig(e, t, l),
                t
              );
            }),
            (o._getDimension = function () {
              return t(this._element).hasClass(_) ? _ : g;
            }),
            (o._getParent = function () {
              var e = this,
                n = null;
              P.isElement(this._config.parent)
                ? ((n = this._config.parent),
                  'undefined' != typeof this._config.parent.jquery &&
                    (n = this._config.parent[0]))
                : (n = t(this._config.parent)[0]);
              var s =
                '[data-toggle="collapse"][data-parent="' +
                this._config.parent +
                '"]';
              return (
                t(n)
                  .find(s)
                  .each(function (t, n) {
                    e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [
                      n,
                    ]);
                  }),
                n
              );
            }),
            (o._addAriaAndCollapsedClass = function (e, n) {
              if (e) {
                var i = t(e).hasClass(c);
                n.length > 0 &&
                  t(n).toggleClass(d, !i).attr('aria-expanded', i);
              }
            }),
            (i._getTargetFromElement = function (e) {
              var n = P.getSelectorFromElement(e);
              return n ? t(n)[0] : null;
            }),
            (i._jQueryInterface = function (e) {
              return this.each(function () {
                var s = t(this),
                  o = s.data(n),
                  l = r({}, a, s.data(), 'object' == typeof e && e);
                if (
                  (!o && l.toggle && /show|hide/.test(e) && (l.toggle = !1),
                  o || ((o = new i(this, l)), s.data(n, o)),
                  'string' == typeof e)
                ) {
                  if ('undefined' == typeof o[e])
                    throw new TypeError('No method named "' + e + '"');
                  o[e]();
                }
              });
            }),
            s(i, null, [
              {
                key: 'VERSION',
                get: function () {
                  return '4.0.0';
                },
              },
              {
                key: 'Default',
                get: function () {
                  return a;
                },
              },
            ]),
            i
          );
        })();
      return (
        t(document).on(h.CLICK_DATA_API, p.DATA_TOGGLE, function (e) {
          'A' === e.currentTarget.tagName && e.preventDefault();
          var i = t(this),
            s = P.getSelectorFromElement(this);
          t(s).each(function () {
            var e = t(this),
              s = e.data(n) ? 'toggle' : i.data();
            m._jQueryInterface.call(e, s);
          });
        }),
        (t.fn[e] = m._jQueryInterface),
        (t.fn[e].Constructor = m),
        (t.fn[e].noConflict = function () {
          return (t.fn[e] = o), m._jQueryInterface;
        }),
        m
      );
    })(e),
    W = (function (t) {
      var e = 'dropdown',
        i = 'bs.dropdown',
        o = '.' + i,
        a = '.data-api',
        l = t.fn[e],
        h = new RegExp('38|40|27'),
        c = {
          HIDE: 'hide' + o,
          HIDDEN: 'hidden' + o,
          SHOW: 'show' + o,
          SHOWN: 'shown' + o,
          CLICK: 'click' + o,
          CLICK_DATA_API: 'click' + o + a,
          KEYDOWN_DATA_API: 'keydown' + o + a,
          KEYUP_DATA_API: 'keyup' + o + a,
        },
        u = 'disabled',
        f = 'show',
        d = 'dropup',
        _ = 'dropright',
        g = 'dropleft',
        p = 'dropdown-menu-right',
        m = 'dropdown-menu-left',
        v = 'position-static',
        E = '[data-toggle="dropdown"]',
        T = '.dropdown form',
        y = '.dropdown-menu',
        C = '.navbar-nav',
        I = '.dropdown-menu .dropdown-item:not(.disabled)',
        A = 'top-start',
        b = 'top-end',
        D = 'bottom-start',
        S = 'bottom-end',
        w = 'right-start',
        N = 'left-start',
        O = { offset: 0, flip: !0, boundary: 'scrollParent' },
        k = {
          offset: '(number|string|function)',
          flip: 'boolean',
          boundary: '(string|element)',
        },
        L = (function () {
          function a(t, e) {
            (this._element = t),
              (this._popper = null),
              (this._config = this._getConfig(e)),
              (this._menu = this._getMenuElement()),
              (this._inNavbar = this._detectNavbar()),
              this._addEventListeners();
          }
          var l = a.prototype;
          return (
            (l.toggle = function () {
              if (!this._element.disabled && !t(this._element).hasClass(u)) {
                var e = a._getParentFromElement(this._element),
                  i = t(this._menu).hasClass(f);
                if ((a._clearMenus(), !i)) {
                  var s = { relatedTarget: this._element },
                    r = t.Event(c.SHOW, s);
                  if ((t(e).trigger(r), !r.isDefaultPrevented())) {
                    if (!this._inNavbar) {
                      if ('undefined' == typeof n)
                        throw new TypeError(
                          'Bootstrap dropdown require Popper.js (https://popper.js.org)',
                        );
                      var o = this._element;
                      t(e).hasClass(d) &&
                        (t(this._menu).hasClass(m) ||
                          t(this._menu).hasClass(p)) &&
                        (o = e),
                        'scrollParent' !== this._config.boundary &&
                          t(e).addClass(v),
                        (this._popper = new n(
                          o,
                          this._menu,
                          this._getPopperConfig(),
                        ));
                    }
                    'ontouchstart' in document.documentElement &&
                      0 === t(e).closest(C).length &&
                      t('body').children().on('mouseover', null, t.noop),
                      this._element.focus(),
                      this._element.setAttribute('aria-expanded', !0),
                      t(this._menu).toggleClass(f),
                      t(e).toggleClass(f).trigger(t.Event(c.SHOWN, s));
                  }
                }
              }
            }),
            (l.dispose = function () {
              t.removeData(this._element, i),
                t(this._element).off(o),
                (this._element = null),
                (this._menu = null),
                null !== this._popper &&
                  (this._popper.destroy(), (this._popper = null));
            }),
            (l.update = function () {
              (this._inNavbar = this._detectNavbar()),
                null !== this._popper && this._popper.scheduleUpdate();
            }),
            (l._addEventListeners = function () {
              var e = this;
              t(this._element).on(c.CLICK, function (t) {
                t.preventDefault(), t.stopPropagation(), e.toggle();
              });
            }),
            (l._getConfig = function (n) {
              return (
                (n = r(
                  {},
                  this.constructor.Default,
                  t(this._element).data(),
                  n,
                )),
                P.typeCheckConfig(e, n, this.constructor.DefaultType),
                n
              );
            }),
            (l._getMenuElement = function () {
              if (!this._menu) {
                var e = a._getParentFromElement(this._element);
                this._menu = t(e).find(y)[0];
              }
              return this._menu;
            }),
            (l._getPlacement = function () {
              var e = t(this._element).parent(),
                n = D;
              return (
                e.hasClass(d)
                  ? ((n = A), t(this._menu).hasClass(p) && (n = b))
                  : e.hasClass(_)
                  ? (n = w)
                  : e.hasClass(g)
                  ? (n = N)
                  : t(this._menu).hasClass(p) && (n = S),
                n
              );
            }),
            (l._detectNavbar = function () {
              return t(this._element).closest('.navbar').length > 0;
            }),
            (l._getPopperConfig = function () {
              var t = this,
                e = {};
              return (
                'function' == typeof this._config.offset
                  ? (e.fn = function (e) {
                      return (
                        (e.offsets = r(
                          {},
                          e.offsets,
                          t._config.offset(e.offsets) || {},
                        )),
                        e
                      );
                    })
                  : (e.offset = this._config.offset),
                {
                  placement: this._getPlacement(),
                  modifiers: {
                    offset: e,
                    flip: { enabled: this._config.flip },
                    preventOverflow: {
                      boundariesElement: this._config.boundary,
                    },
                  },
                }
              );
            }),
            (a._jQueryInterface = function (e) {
              return this.each(function () {
                var n = t(this).data(i);
                if (
                  (n ||
                    ((n = new a(this, 'object' == typeof e ? e : null)),
                    t(this).data(i, n)),
                  'string' == typeof e)
                ) {
                  if ('undefined' == typeof n[e])
                    throw new TypeError('No method named "' + e + '"');
                  n[e]();
                }
              });
            }),
            (a._clearMenus = function (e) {
              if (
                !e ||
                (3 !== e.which && ('keyup' !== e.type || 9 === e.which))
              )
                for (var n = t.makeArray(t(E)), s = 0; s < n.length; s++) {
                  var r = a._getParentFromElement(n[s]),
                    o = t(n[s]).data(i),
                    l = { relatedTarget: n[s] };
                  if (o) {
                    var h = o._menu;
                    if (
                      t(r).hasClass(f) &&
                      !(
                        e &&
                        (('click' === e.type &&
                          /input|textarea/i.test(e.target.tagName)) ||
                          ('keyup' === e.type && 9 === e.which)) &&
                        t.contains(r, e.target)
                      )
                    ) {
                      var u = t.Event(c.HIDE, l);
                      t(r).trigger(u),
                        u.isDefaultPrevented() ||
                          ('ontouchstart' in document.documentElement &&
                            t('body').children().off('mouseover', null, t.noop),
                          n[s].setAttribute('aria-expanded', 'false'),
                          t(h).removeClass(f),
                          t(r).removeClass(f).trigger(t.Event(c.HIDDEN, l)));
                    }
                  }
                }
            }),
            (a._getParentFromElement = function (e) {
              var n,
                i = P.getSelectorFromElement(e);
              return i && (n = t(i)[0]), n || e.parentNode;
            }),
            (a._dataApiKeydownHandler = function (e) {
              if (
                (/input|textarea/i.test(e.target.tagName)
                  ? !(
                      32 === e.which ||
                      (27 !== e.which &&
                        ((40 !== e.which && 38 !== e.which) ||
                          t(e.target).closest(y).length))
                    )
                  : h.test(e.which)) &&
                (e.preventDefault(),
                e.stopPropagation(),
                !this.disabled && !t(this).hasClass(u))
              ) {
                var n = a._getParentFromElement(this),
                  i = t(n).hasClass(f);
                if (
                  (i || (27 === e.which && 32 === e.which)) &&
                  (!i || (27 !== e.which && 32 !== e.which))
                ) {
                  var s = t(n).find(I).get();
                  if (0 !== s.length) {
                    var r = s.indexOf(e.target);
                    38 === e.which && r > 0 && r--,
                      40 === e.which && r < s.length - 1 && r++,
                      r < 0 && (r = 0),
                      s[r].focus();
                  }
                } else {
                  if (27 === e.which) {
                    var o = t(n).find(E)[0];
                    t(o).trigger('focus');
                  }
                  t(this).trigger('click');
                }
              }
            }),
            s(a, null, [
              {
                key: 'VERSION',
                get: function () {
                  return '4.0.0';
                },
              },
              {
                key: 'Default',
                get: function () {
                  return O;
                },
              },
              {
                key: 'DefaultType',
                get: function () {
                  return k;
                },
              },
            ]),
            a
          );
        })();
      return (
        t(document)
          .on(c.KEYDOWN_DATA_API, E, L._dataApiKeydownHandler)
          .on(c.KEYDOWN_DATA_API, y, L._dataApiKeydownHandler)
          .on(c.CLICK_DATA_API + ' ' + c.KEYUP_DATA_API, L._clearMenus)
          .on(c.CLICK_DATA_API, E, function (e) {
            e.preventDefault(),
              e.stopPropagation(),
              L._jQueryInterface.call(t(this), 'toggle');
          })
          .on(c.CLICK_DATA_API, T, function (t) {
            t.stopPropagation();
          }),
        (t.fn[e] = L._jQueryInterface),
        (t.fn[e].Constructor = L),
        (t.fn[e].noConflict = function () {
          return (t.fn[e] = l), L._jQueryInterface;
        }),
        L
      );
    })(e),
    M = (function (t) {
      var e = 'modal',
        n = 'bs.modal',
        i = '.' + n,
        o = t.fn.modal,
        a = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        l = {
          backdrop: '(boolean|string)',
          keyboard: 'boolean',
          focus: 'boolean',
          show: 'boolean',
        },
        h = {
          HIDE: 'hide' + i,
          HIDDEN: 'hidden' + i,
          SHOW: 'show' + i,
          SHOWN: 'shown' + i,
          FOCUSIN: 'focusin' + i,
          RESIZE: 'resize' + i,
          CLICK_DISMISS: 'click.dismiss' + i,
          KEYDOWN_DISMISS: 'keydown.dismiss' + i,
          MOUSEUP_DISMISS: 'mouseup.dismiss' + i,
          MOUSEDOWN_DISMISS: 'mousedown.dismiss' + i,
          CLICK_DATA_API: 'click' + i + '.data-api',
        },
        c = 'modal-scrollbar-measure',
        u = 'modal-backdrop',
        f = 'modal-open',
        d = 'fade',
        _ = 'show',
        g = {
          DIALOG: '.modal-dialog',
          DATA_TOGGLE: '[data-toggle="modal"]',
          DATA_DISMISS: '[data-dismiss="modal"]',
          FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
          STICKY_CONTENT: '.sticky-top',
          NAVBAR_TOGGLER: '.navbar-toggler',
        },
        p = (function () {
          function o(e, n) {
            (this._config = this._getConfig(n)),
              (this._element = e),
              (this._dialog = t(e).find(g.DIALOG)[0]),
              (this._backdrop = null),
              (this._isShown = !1),
              (this._isBodyOverflowing = !1),
              (this._ignoreBackdropClick = !1),
              (this._originalBodyPadding = 0),
              (this._scrollbarWidth = 0);
          }
          var p = o.prototype;
          return (
            (p.toggle = function (t) {
              return this._isShown ? this.hide() : this.show(t);
            }),
            (p.show = function (e) {
              var n = this;
              if (!this._isTransitioning && !this._isShown) {
                P.supportsTransitionEnd() &&
                  t(this._element).hasClass(d) &&
                  (this._isTransitioning = !0);
                var i = t.Event(h.SHOW, { relatedTarget: e });
                t(this._element).trigger(i),
                  this._isShown ||
                    i.isDefaultPrevented() ||
                    ((this._isShown = !0),
                    this._checkScrollbar(),
                    this._setScrollbar(),
                    this._adjustDialog(),
                    t(document.body).addClass(f),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    t(this._element).on(
                      h.CLICK_DISMISS,
                      g.DATA_DISMISS,
                      function (t) {
                        return n.hide(t);
                      },
                    ),
                    t(this._dialog).on(h.MOUSEDOWN_DISMISS, function () {
                      t(n._element).one(h.MOUSEUP_DISMISS, function (e) {
                        t(e.target).is(n._element) &&
                          (n._ignoreBackdropClick = !0);
                      });
                    }),
                    this._showBackdrop(function () {
                      return n._showElement(e);
                    }));
              }
            }),
            (p.hide = function (e) {
              var n = this;
              if (
                (e && e.preventDefault(),
                !this._isTransitioning && this._isShown)
              ) {
                var i = t.Event(h.HIDE);
                if (
                  (t(this._element).trigger(i),
                  this._isShown && !i.isDefaultPrevented())
                ) {
                  this._isShown = !1;
                  var s =
                    P.supportsTransitionEnd() && t(this._element).hasClass(d);
                  s && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    t(document).off(h.FOCUSIN),
                    t(this._element).removeClass(_),
                    t(this._element).off(h.CLICK_DISMISS),
                    t(this._dialog).off(h.MOUSEDOWN_DISMISS),
                    s
                      ? t(this._element)
                          .one(P.TRANSITION_END, function (t) {
                            return n._hideModal(t);
                          })
                          .emulateTransitionEnd(300)
                      : this._hideModal();
                }
              }
            }),
            (p.dispose = function () {
              t.removeData(this._element, n),
                t(window, document, this._element, this._backdrop).off(i),
                (this._config = null),
                (this._element = null),
                (this._dialog = null),
                (this._backdrop = null),
                (this._isShown = null),
                (this._isBodyOverflowing = null),
                (this._ignoreBackdropClick = null),
                (this._scrollbarWidth = null);
            }),
            (p.handleUpdate = function () {
              this._adjustDialog();
            }),
            (p._getConfig = function (t) {
              return (t = r({}, a, t)), P.typeCheckConfig(e, t, l), t;
            }),
            (p._showElement = function (e) {
              var n = this,
                i = P.supportsTransitionEnd() && t(this._element).hasClass(d);
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                document.body.appendChild(this._element),
                (this._element.style.display = 'block'),
                this._element.removeAttribute('aria-hidden'),
                (this._element.scrollTop = 0),
                i && P.reflow(this._element),
                t(this._element).addClass(_),
                this._config.focus && this._enforceFocus();
              var s = t.Event(h.SHOWN, { relatedTarget: e }),
                r = function () {
                  n._config.focus && n._element.focus(),
                    (n._isTransitioning = !1),
                    t(n._element).trigger(s);
                };
              i
                ? t(this._dialog)
                    .one(P.TRANSITION_END, r)
                    .emulateTransitionEnd(300)
                : r();
            }),
            (p._enforceFocus = function () {
              var e = this;
              t(document)
                .off(h.FOCUSIN)
                .on(h.FOCUSIN, function (n) {
                  document !== n.target &&
                    e._element !== n.target &&
                    0 === t(e._element).has(n.target).length &&
                    e._element.focus();
                });
            }),
            (p._setEscapeEvent = function () {
              var e = this;
              this._isShown && this._config.keyboard
                ? t(this._element).on(h.KEYDOWN_DISMISS, function (t) {
                    27 === t.which && (t.preventDefault(), e.hide());
                  })
                : this._isShown || t(this._element).off(h.KEYDOWN_DISMISS);
            }),
            (p._setResizeEvent = function () {
              var e = this;
              this._isShown
                ? t(window).on(h.RESIZE, function (t) {
                    return e.handleUpdate(t);
                  })
                : t(window).off(h.RESIZE);
            }),
            (p._hideModal = function () {
              var e = this;
              (this._element.style.display = 'none'),
                this._element.setAttribute('aria-hidden', !0),
                (this._isTransitioning = !1),
                this._showBackdrop(function () {
                  t(document.body).removeClass(f),
                    e._resetAdjustments(),
                    e._resetScrollbar(),
                    t(e._element).trigger(h.HIDDEN);
                });
            }),
            (p._removeBackdrop = function () {
              this._backdrop &&
                (t(this._backdrop).remove(), (this._backdrop = null));
            }),
            (p._showBackdrop = function (e) {
              var n = this,
                i = t(this._element).hasClass(d) ? d : '';
              if (this._isShown && this._config.backdrop) {
                var s = P.supportsTransitionEnd() && i;
                if (
                  ((this._backdrop = document.createElement('div')),
                  (this._backdrop.className = u),
                  i && t(this._backdrop).addClass(i),
                  t(this._backdrop).appendTo(document.body),
                  t(this._element).on(h.CLICK_DISMISS, function (t) {
                    n._ignoreBackdropClick
                      ? (n._ignoreBackdropClick = !1)
                      : t.target === t.currentTarget &&
                        ('static' === n._config.backdrop
                          ? n._element.focus()
                          : n.hide());
                  }),
                  s && P.reflow(this._backdrop),
                  t(this._backdrop).addClass(_),
                  !e)
                )
                  return;
                if (!s) return void e();
                t(this._backdrop)
                  .one(P.TRANSITION_END, e)
                  .emulateTransitionEnd(150);
              } else if (!this._isShown && this._backdrop) {
                t(this._backdrop).removeClass(_);
                var r = function () {
                  n._removeBackdrop(), e && e();
                };
                P.supportsTransitionEnd() && t(this._element).hasClass(d)
                  ? t(this._backdrop)
                      .one(P.TRANSITION_END, r)
                      .emulateTransitionEnd(150)
                  : r();
              } else e && e();
            }),
            (p._adjustDialog = function () {
              var t =
                this._element.scrollHeight >
                document.documentElement.clientHeight;
              !this._isBodyOverflowing &&
                t &&
                (this._element.style.paddingLeft = this._scrollbarWidth + 'px'),
                this._isBodyOverflowing &&
                  !t &&
                  (this._element.style.paddingRight =
                    this._scrollbarWidth + 'px');
            }),
            (p._resetAdjustments = function () {
              (this._element.style.paddingLeft = ''),
                (this._element.style.paddingRight = '');
            }),
            (p._checkScrollbar = function () {
              var t = document.body.getBoundingClientRect();
              (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
                (this._scrollbarWidth = this._getScrollbarWidth());
            }),
            (p._setScrollbar = function () {
              var e = this;
              if (this._isBodyOverflowing) {
                t(g.FIXED_CONTENT).each(function (n, i) {
                  var s = t(i)[0].style.paddingRight,
                    r = t(i).css('padding-right');
                  t(i)
                    .data('padding-right', s)
                    .css(
                      'padding-right',
                      parseFloat(r) + e._scrollbarWidth + 'px',
                    );
                }),
                  t(g.STICKY_CONTENT).each(function (n, i) {
                    var s = t(i)[0].style.marginRight,
                      r = t(i).css('margin-right');
                    t(i)
                      .data('margin-right', s)
                      .css(
                        'margin-right',
                        parseFloat(r) - e._scrollbarWidth + 'px',
                      );
                  }),
                  t(g.NAVBAR_TOGGLER).each(function (n, i) {
                    var s = t(i)[0].style.marginRight,
                      r = t(i).css('margin-right');
                    t(i)
                      .data('margin-right', s)
                      .css(
                        'margin-right',
                        parseFloat(r) + e._scrollbarWidth + 'px',
                      );
                  });
                var n = document.body.style.paddingRight,
                  i = t('body').css('padding-right');
                t('body')
                  .data('padding-right', n)
                  .css(
                    'padding-right',
                    parseFloat(i) + this._scrollbarWidth + 'px',
                  );
              }
            }),
            (p._resetScrollbar = function () {
              t(g.FIXED_CONTENT).each(function (e, n) {
                var i = t(n).data('padding-right');
                'undefined' != typeof i &&
                  t(n).css('padding-right', i).removeData('padding-right');
              }),
                t(g.STICKY_CONTENT + ', ' + g.NAVBAR_TOGGLER).each(function (
                  e,
                  n,
                ) {
                  var i = t(n).data('margin-right');
                  'undefined' != typeof i &&
                    t(n).css('margin-right', i).removeData('margin-right');
                });
              var e = t('body').data('padding-right');
              'undefined' != typeof e &&
                t('body').css('padding-right', e).removeData('padding-right');
            }),
            (p._getScrollbarWidth = function () {
              var t = document.createElement('div');
              (t.className = c), document.body.appendChild(t);
              var e = t.getBoundingClientRect().width - t.clientWidth;
              return document.body.removeChild(t), e;
            }),
            (o._jQueryInterface = function (e, i) {
              return this.each(function () {
                var s = t(this).data(n),
                  a = r(
                    {},
                    o.Default,
                    t(this).data(),
                    'object' == typeof e && e,
                  );
                if (
                  (s || ((s = new o(this, a)), t(this).data(n, s)),
                  'string' == typeof e)
                ) {
                  if ('undefined' == typeof s[e])
                    throw new TypeError('No method named "' + e + '"');
                  s[e](i);
                } else a.show && s.show(i);
              });
            }),
            s(o, null, [
              {
                key: 'VERSION',
                get: function () {
                  return '4.0.0';
                },
              },
              {
                key: 'Default',
                get: function () {
                  return a;
                },
              },
            ]),
            o
          );
        })();
      return (
        t(document).on(h.CLICK_DATA_API, g.DATA_TOGGLE, function (e) {
          var i,
            s = this,
            o = P.getSelectorFromElement(this);
          o && (i = t(o)[0]);
          var a = t(i).data(n) ? 'toggle' : r({}, t(i).data(), t(this).data());
          ('A' !== this.tagName && 'AREA' !== this.tagName) ||
            e.preventDefault();
          var l = t(i).one(h.SHOW, function (e) {
            e.isDefaultPrevented() ||
              l.one(h.HIDDEN, function () {
                t(s).is(':visible') && s.focus();
              });
          });
          p._jQueryInterface.call(t(i), a, this);
        }),
        (t.fn.modal = p._jQueryInterface),
        (t.fn.modal.Constructor = p),
        (t.fn.modal.noConflict = function () {
          return (t.fn.modal = o), p._jQueryInterface;
        }),
        p
      );
    })(e),
    U = (function (t) {
      var e = 'tooltip',
        i = 'bs.tooltip',
        o = '.' + i,
        a = t.fn[e],
        l = new RegExp('(^|\\s)bs-tooltip\\S+', 'g'),
        h = {
          animation: 'boolean',
          template: 'string',
          title: '(string|element|function)',
          trigger: 'string',
          delay: '(number|object)',
          html: 'boolean',
          selector: '(string|boolean)',
          placement: '(string|function)',
          offset: '(number|string)',
          container: '(string|element|boolean)',
          fallbackPlacement: '(string|array)',
          boundary: '(string|element)',
        },
        c = {
          AUTO: 'auto',
          TOP: 'top',
          RIGHT: 'right',
          BOTTOM: 'bottom',
          LEFT: 'left',
        },
        u = {
          animation: !0,
          template:
            '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: 'hover focus',
          title: '',
          delay: 0,
          html: !1,
          selector: !1,
          placement: 'top',
          offset: 0,
          container: !1,
          fallbackPlacement: 'flip',
          boundary: 'scrollParent',
        },
        f = 'show',
        d = 'out',
        _ = {
          HIDE: 'hide' + o,
          HIDDEN: 'hidden' + o,
          SHOW: 'show' + o,
          SHOWN: 'shown' + o,
          INSERTED: 'inserted' + o,
          CLICK: 'click' + o,
          FOCUSIN: 'focusin' + o,
          FOCUSOUT: 'focusout' + o,
          MOUSEENTER: 'mouseenter' + o,
          MOUSELEAVE: 'mouseleave' + o,
        },
        g = 'fade',
        p = 'show',
        m = '.tooltip-inner',
        v = '.arrow',
        E = 'hover',
        T = 'focus',
        y = 'click',
        C = 'manual',
        I = (function () {
          function a(t, e) {
            if ('undefined' == typeof n)
              throw new TypeError(
                'Bootstrap tooltips require Popper.js (https://popper.js.org)',
              );
            (this._isEnabled = !0),
              (this._timeout = 0),
              (this._hoverState = ''),
              (this._activeTrigger = {}),
              (this._popper = null),
              (this.element = t),
              (this.config = this._getConfig(e)),
              (this.tip = null),
              this._setListeners();
          }
          var I = a.prototype;
          return (
            (I.enable = function () {
              this._isEnabled = !0;
            }),
            (I.disable = function () {
              this._isEnabled = !1;
            }),
            (I.toggleEnabled = function () {
              this._isEnabled = !this._isEnabled;
            }),
            (I.toggle = function (e) {
              if (this._isEnabled)
                if (e) {
                  var n = this.constructor.DATA_KEY,
                    i = t(e.currentTarget).data(n);
                  i ||
                    ((i = new this.constructor(
                      e.currentTarget,
                      this._getDelegateConfig(),
                    )),
                    t(e.currentTarget).data(n, i)),
                    (i._activeTrigger.click = !i._activeTrigger.click),
                    i._isWithActiveTrigger()
                      ? i._enter(null, i)
                      : i._leave(null, i);
                } else {
                  if (t(this.getTipElement()).hasClass(p))
                    return void this._leave(null, this);
                  this._enter(null, this);
                }
            }),
            (I.dispose = function () {
              clearTimeout(this._timeout),
                t.removeData(this.element, this.constructor.DATA_KEY),
                t(this.element).off(this.constructor.EVENT_KEY),
                t(this.element).closest('.modal').off('hide.bs.modal'),
                this.tip && t(this.tip).remove(),
                (this._isEnabled = null),
                (this._timeout = null),
                (this._hoverState = null),
                (this._activeTrigger = null),
                null !== this._popper && this._popper.destroy(),
                (this._popper = null),
                (this.element = null),
                (this.config = null),
                (this.tip = null);
            }),
            (I.show = function () {
              var e = this;
              if ('none' === t(this.element).css('display'))
                throw new Error('Please use show on visible elements');
              var i = t.Event(this.constructor.Event.SHOW);
              if (this.isWithContent() && this._isEnabled) {
                t(this.element).trigger(i);
                var s = t.contains(
                  this.element.ownerDocument.documentElement,
                  this.element,
                );
                if (i.isDefaultPrevented() || !s) return;
                var r = this.getTipElement(),
                  o = P.getUID(this.constructor.NAME);
                r.setAttribute('id', o),
                  this.element.setAttribute('aria-describedby', o),
                  this.setContent(),
                  this.config.animation && t(r).addClass(g);
                var l =
                    'function' == typeof this.config.placement
                      ? this.config.placement.call(this, r, this.element)
                      : this.config.placement,
                  h = this._getAttachment(l);
                this.addAttachmentClass(h);
                var c =
                  !1 === this.config.container
                    ? document.body
                    : t(this.config.container);
                t(r).data(this.constructor.DATA_KEY, this),
                  t.contains(
                    this.element.ownerDocument.documentElement,
                    this.tip,
                  ) || t(r).appendTo(c),
                  t(this.element).trigger(this.constructor.Event.INSERTED),
                  (this._popper = new n(this.element, r, {
                    placement: h,
                    modifiers: {
                      offset: { offset: this.config.offset },
                      flip: { behavior: this.config.fallbackPlacement },
                      arrow: { element: v },
                      preventOverflow: {
                        boundariesElement: this.config.boundary,
                      },
                    },
                    onCreate: function (t) {
                      t.originalPlacement !== t.placement &&
                        e._handlePopperPlacementChange(t);
                    },
                    onUpdate: function (t) {
                      e._handlePopperPlacementChange(t);
                    },
                  })),
                  t(r).addClass(p),
                  'ontouchstart' in document.documentElement &&
                    t('body').children().on('mouseover', null, t.noop);
                var u = function () {
                  e.config.animation && e._fixTransition();
                  var n = e._hoverState;
                  (e._hoverState = null),
                    t(e.element).trigger(e.constructor.Event.SHOWN),
                    n === d && e._leave(null, e);
                };
                P.supportsTransitionEnd() && t(this.tip).hasClass(g)
                  ? t(this.tip)
                      .one(P.TRANSITION_END, u)
                      .emulateTransitionEnd(a._TRANSITION_DURATION)
                  : u();
              }
            }),
            (I.hide = function (e) {
              var n = this,
                i = this.getTipElement(),
                s = t.Event(this.constructor.Event.HIDE),
                r = function () {
                  n._hoverState !== f &&
                    i.parentNode &&
                    i.parentNode.removeChild(i),
                    n._cleanTipClass(),
                    n.element.removeAttribute('aria-describedby'),
                    t(n.element).trigger(n.constructor.Event.HIDDEN),
                    null !== n._popper && n._popper.destroy(),
                    e && e();
                };
              t(this.element).trigger(s),
                s.isDefaultPrevented() ||
                  (t(i).removeClass(p),
                  'ontouchstart' in document.documentElement &&
                    t('body').children().off('mouseover', null, t.noop),
                  (this._activeTrigger[y] = !1),
                  (this._activeTrigger[T] = !1),
                  (this._activeTrigger[E] = !1),
                  P.supportsTransitionEnd() && t(this.tip).hasClass(g)
                    ? t(i).one(P.TRANSITION_END, r).emulateTransitionEnd(150)
                    : r(),
                  (this._hoverState = ''));
            }),
            (I.update = function () {
              null !== this._popper && this._popper.scheduleUpdate();
            }),
            (I.isWithContent = function () {
              return Boolean(this.getTitle());
            }),
            (I.addAttachmentClass = function (e) {
              t(this.getTipElement()).addClass('bs-tooltip-' + e);
            }),
            (I.getTipElement = function () {
              return (
                (this.tip = this.tip || t(this.config.template)[0]), this.tip
              );
            }),
            (I.setContent = function () {
              var e = t(this.getTipElement());
              this.setElementContent(e.find(m), this.getTitle()),
                e.removeClass(g + ' ' + p);
            }),
            (I.setElementContent = function (e, n) {
              var i = this.config.html;
              'object' == typeof n && (n.nodeType || n.jquery)
                ? i
                  ? t(n).parent().is(e) || e.empty().append(n)
                  : e.text(t(n).text())
                : e[i ? 'html' : 'text'](n);
            }),
            (I.getTitle = function () {
              var t = this.element.getAttribute('data-original-title');
              return (
                t ||
                  (t =
                    'function' == typeof this.config.title
                      ? this.config.title.call(this.element)
                      : this.config.title),
                t
              );
            }),
            (I._getAttachment = function (t) {
              return c[t.toUpperCase()];
            }),
            (I._setListeners = function () {
              var e = this;
              this.config.trigger.split(' ').forEach(function (n) {
                if ('click' === n)
                  t(e.element).on(
                    e.constructor.Event.CLICK,
                    e.config.selector,
                    function (t) {
                      return e.toggle(t);
                    },
                  );
                else if (n !== C) {
                  var i =
                      n === E
                        ? e.constructor.Event.MOUSEENTER
                        : e.constructor.Event.FOCUSIN,
                    s =
                      n === E
                        ? e.constructor.Event.MOUSELEAVE
                        : e.constructor.Event.FOCUSOUT;
                  t(e.element)
                    .on(i, e.config.selector, function (t) {
                      return e._enter(t);
                    })
                    .on(s, e.config.selector, function (t) {
                      return e._leave(t);
                    });
                }
                t(e.element)
                  .closest('.modal')
                  .on('hide.bs.modal', function () {
                    return e.hide();
                  });
              }),
                this.config.selector
                  ? (this.config = r({}, this.config, {
                      trigger: 'manual',
                      selector: '',
                    }))
                  : this._fixTitle();
            }),
            (I._fixTitle = function () {
              var t = typeof this.element.getAttribute('data-original-title');
              (this.element.getAttribute('title') || 'string' !== t) &&
                (this.element.setAttribute(
                  'data-original-title',
                  this.element.getAttribute('title') || '',
                ),
                this.element.setAttribute('title', ''));
            }),
            (I._enter = function (e, n) {
              var i = this.constructor.DATA_KEY;
              (n = n || t(e.currentTarget).data(i)) ||
                ((n = new this.constructor(
                  e.currentTarget,
                  this._getDelegateConfig(),
                )),
                t(e.currentTarget).data(i, n)),
                e && (n._activeTrigger['focusin' === e.type ? T : E] = !0),
                t(n.getTipElement()).hasClass(p) || n._hoverState === f
                  ? (n._hoverState = f)
                  : (clearTimeout(n._timeout),
                    (n._hoverState = f),
                    n.config.delay && n.config.delay.show
                      ? (n._timeout = setTimeout(function () {
                          n._hoverState === f && n.show();
                        }, n.config.delay.show))
                      : n.show());
            }),
            (I._leave = function (e, n) {
              var i = this.constructor.DATA_KEY;
              (n = n || t(e.currentTarget).data(i)) ||
                ((n = new this.constructor(
                  e.currentTarget,
                  this._getDelegateConfig(),
                )),
                t(e.currentTarget).data(i, n)),
                e && (n._activeTrigger['focusout' === e.type ? T : E] = !1),
                n._isWithActiveTrigger() ||
                  (clearTimeout(n._timeout),
                  (n._hoverState = d),
                  n.config.delay && n.config.delay.hide
                    ? (n._timeout = setTimeout(function () {
                        n._hoverState === d && n.hide();
                      }, n.config.delay.hide))
                    : n.hide());
            }),
            (I._isWithActiveTrigger = function () {
              for (var t in this._activeTrigger)
                if (this._activeTrigger[t]) return !0;
              return !1;
            }),
            (I._getConfig = function (n) {
              return (
                'number' ==
                  typeof (n = r(
                    {},
                    this.constructor.Default,
                    t(this.element).data(),
                    n,
                  )).delay && (n.delay = { show: n.delay, hide: n.delay }),
                'number' == typeof n.title && (n.title = n.title.toString()),
                'number' == typeof n.content &&
                  (n.content = n.content.toString()),
                P.typeCheckConfig(e, n, this.constructor.DefaultType),
                n
              );
            }),
            (I._getDelegateConfig = function () {
              var t = {};
              if (this.config)
                for (var e in this.config)
                  this.constructor.Default[e] !== this.config[e] &&
                    (t[e] = this.config[e]);
              return t;
            }),
            (I._cleanTipClass = function () {
              var e = t(this.getTipElement()),
                n = e.attr('class').match(l);
              null !== n && n.length > 0 && e.removeClass(n.join(''));
            }),
            (I._handlePopperPlacementChange = function (t) {
              this._cleanTipClass(),
                this.addAttachmentClass(this._getAttachment(t.placement));
            }),
            (I._fixTransition = function () {
              var e = this.getTipElement(),
                n = this.config.animation;
              null === e.getAttribute('x-placement') &&
                (t(e).removeClass(g),
                (this.config.animation = !1),
                this.hide(),
                this.show(),
                (this.config.animation = n));
            }),
            (a._jQueryInterface = function (e) {
              return this.each(function () {
                var n = t(this).data(i),
                  s = 'object' == typeof e && e;
                if (
                  (n || !/dispose|hide/.test(e)) &&
                  (n || ((n = new a(this, s)), t(this).data(i, n)),
                  'string' == typeof e)
                ) {
                  if ('undefined' == typeof n[e])
                    throw new TypeError('No method named "' + e + '"');
                  n[e]();
                }
              });
            }),
            s(a, null, [
              {
                key: 'VERSION',
                get: function () {
                  return '4.0.0';
                },
              },
              {
                key: 'Default',
                get: function () {
                  return u;
                },
              },
              {
                key: 'NAME',
                get: function () {
                  return e;
                },
              },
              {
                key: 'DATA_KEY',
                get: function () {
                  return i;
                },
              },
              {
                key: 'Event',
                get: function () {
                  return _;
                },
              },
              {
                key: 'EVENT_KEY',
                get: function () {
                  return o;
                },
              },
              {
                key: 'DefaultType',
                get: function () {
                  return h;
                },
              },
            ]),
            a
          );
        })();
      return (
        (t.fn[e] = I._jQueryInterface),
        (t.fn[e].Constructor = I),
        (t.fn[e].noConflict = function () {
          return (t.fn[e] = a), I._jQueryInterface;
        }),
        I
      );
    })(e),
    x = (function (t) {
      var e = 'popover',
        n = 'bs.popover',
        i = '.' + n,
        o = t.fn[e],
        a = new RegExp('(^|\\s)bs-popover\\S+', 'g'),
        l = r({}, U.Default, {
          placement: 'right',
          trigger: 'click',
          content: '',
          template:
            '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        }),
        h = r({}, U.DefaultType, { content: '(string|element|function)' }),
        c = 'fade',
        u = 'show',
        f = '.popover-header',
        d = '.popover-body',
        _ = {
          HIDE: 'hide' + i,
          HIDDEN: 'hidden' + i,
          SHOW: 'show' + i,
          SHOWN: 'shown' + i,
          INSERTED: 'inserted' + i,
          CLICK: 'click' + i,
          FOCUSIN: 'focusin' + i,
          FOCUSOUT: 'focusout' + i,
          MOUSEENTER: 'mouseenter' + i,
          MOUSELEAVE: 'mouseleave' + i,
        },
        g = (function (r) {
          var o, g;
          function p() {
            return r.apply(this, arguments) || this;
          }
          (g = r),
            ((o = p).prototype = Object.create(g.prototype)),
            (o.prototype.constructor = o),
            (o.__proto__ = g);
          var m = p.prototype;
          return (
            (m.isWithContent = function () {
              return this.getTitle() || this._getContent();
            }),
            (m.addAttachmentClass = function (e) {
              t(this.getTipElement()).addClass('bs-popover-' + e);
            }),
            (m.getTipElement = function () {
              return (
                (this.tip = this.tip || t(this.config.template)[0]), this.tip
              );
            }),
            (m.setContent = function () {
              var e = t(this.getTipElement());
              this.setElementContent(e.find(f), this.getTitle());
              var n = this._getContent();
              'function' == typeof n && (n = n.call(this.element)),
                this.setElementContent(e.find(d), n),
                e.removeClass(c + ' ' + u);
            }),
            (m._getContent = function () {
              return (
                this.element.getAttribute('data-content') || this.config.content
              );
            }),
            (m._cleanTipClass = function () {
              var e = t(this.getTipElement()),
                n = e.attr('class').match(a);
              null !== n && n.length > 0 && e.removeClass(n.join(''));
            }),
            (p._jQueryInterface = function (e) {
              return this.each(function () {
                var i = t(this).data(n),
                  s = 'object' == typeof e ? e : null;
                if (
                  (i || !/destroy|hide/.test(e)) &&
                  (i || ((i = new p(this, s)), t(this).data(n, i)),
                  'string' == typeof e)
                ) {
                  if ('undefined' == typeof i[e])
                    throw new TypeError('No method named "' + e + '"');
                  i[e]();
                }
              });
            }),
            s(p, null, [
              {
                key: 'VERSION',
                get: function () {
                  return '4.0.0';
                },
              },
              {
                key: 'Default',
                get: function () {
                  return l;
                },
              },
              {
                key: 'NAME',
                get: function () {
                  return e;
                },
              },
              {
                key: 'DATA_KEY',
                get: function () {
                  return n;
                },
              },
              {
                key: 'Event',
                get: function () {
                  return _;
                },
              },
              {
                key: 'EVENT_KEY',
                get: function () {
                  return i;
                },
              },
              {
                key: 'DefaultType',
                get: function () {
                  return h;
                },
              },
            ]),
            p
          );
        })(U);
      return (
        (t.fn[e] = g._jQueryInterface),
        (t.fn[e].Constructor = g),
        (t.fn[e].noConflict = function () {
          return (t.fn[e] = o), g._jQueryInterface;
        }),
        g
      );
    })(e),
    K = (function (t) {
      var e = 'scrollspy',
        n = 'bs.scrollspy',
        i = '.' + n,
        o = t.fn[e],
        a = { offset: 10, method: 'auto', target: '' },
        l = { offset: 'number', method: 'string', target: '(string|element)' },
        h = {
          ACTIVATE: 'activate' + i,
          SCROLL: 'scroll' + i,
          LOAD_DATA_API: 'load' + i + '.data-api',
        },
        c = 'dropdown-item',
        u = 'active',
        f = {
          DATA_SPY: '[data-spy="scroll"]',
          ACTIVE: '.active',
          NAV_LIST_GROUP: '.nav, .list-group',
          NAV_LINKS: '.nav-link',
          NAV_ITEMS: '.nav-item',
          LIST_ITEMS: '.list-group-item',
          DROPDOWN: '.dropdown',
          DROPDOWN_ITEMS: '.dropdown-item',
          DROPDOWN_TOGGLE: '.dropdown-toggle',
        },
        d = 'offset',
        _ = 'position',
        g = (function () {
          function o(e, n) {
            var i = this;
            (this._element = e),
              (this._scrollElement = 'BODY' === e.tagName ? window : e),
              (this._config = this._getConfig(n)),
              (this._selector =
                this._config.target +
                ' ' +
                f.NAV_LINKS +
                ',' +
                this._config.target +
                ' ' +
                f.LIST_ITEMS +
                ',' +
                this._config.target +
                ' ' +
                f.DROPDOWN_ITEMS),
              (this._offsets = []),
              (this._targets = []),
              (this._activeTarget = null),
              (this._scrollHeight = 0),
              t(this._scrollElement).on(h.SCROLL, function (t) {
                return i._process(t);
              }),
              this.refresh(),
              this._process();
          }
          var g = o.prototype;
          return (
            (g.refresh = function () {
              var e = this,
                n = this._scrollElement === this._scrollElement.window ? d : _,
                i = 'auto' === this._config.method ? n : this._config.method,
                s = i === _ ? this._getScrollTop() : 0;
              (this._offsets = []),
                (this._targets = []),
                (this._scrollHeight = this._getScrollHeight()),
                t
                  .makeArray(t(this._selector))
                  .map(function (e) {
                    var n,
                      r = P.getSelectorFromElement(e);
                    if ((r && (n = t(r)[0]), n)) {
                      var o = n.getBoundingClientRect();
                      if (o.width || o.height) return [t(n)[i]().top + s, r];
                    }
                    return null;
                  })
                  .filter(function (t) {
                    return t;
                  })
                  .sort(function (t, e) {
                    return t[0] - e[0];
                  })
                  .forEach(function (t) {
                    e._offsets.push(t[0]), e._targets.push(t[1]);
                  });
            }),
            (g.dispose = function () {
              t.removeData(this._element, n),
                t(this._scrollElement).off(i),
                (this._element = null),
                (this._scrollElement = null),
                (this._config = null),
                (this._selector = null),
                (this._offsets = null),
                (this._targets = null),
                (this._activeTarget = null),
                (this._scrollHeight = null);
            }),
            (g._getConfig = function (n) {
              if ('string' != typeof (n = r({}, a, n)).target) {
                var i = t(n.target).attr('id');
                i || ((i = P.getUID(e)), t(n.target).attr('id', i)),
                  (n.target = '#' + i);
              }
              return P.typeCheckConfig(e, n, l), n;
            }),
            (g._getScrollTop = function () {
              return this._scrollElement === window
                ? this._scrollElement.pageYOffset
                : this._scrollElement.scrollTop;
            }),
            (g._getScrollHeight = function () {
              return (
                this._scrollElement.scrollHeight ||
                Math.max(
                  document.body.scrollHeight,
                  document.documentElement.scrollHeight,
                )
              );
            }),
            (g._getOffsetHeight = function () {
              return this._scrollElement === window
                ? window.innerHeight
                : this._scrollElement.getBoundingClientRect().height;
            }),
            (g._process = function () {
              var t = this._getScrollTop() + this._config.offset,
                e = this._getScrollHeight(),
                n = this._config.offset + e - this._getOffsetHeight();
              if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i);
              } else {
                if (
                  this._activeTarget &&
                  t < this._offsets[0] &&
                  this._offsets[0] > 0
                )
                  return (this._activeTarget = null), void this._clear();
                for (var s = this._offsets.length; s--; ) {
                  this._activeTarget !== this._targets[s] &&
                    t >= this._offsets[s] &&
                    ('undefined' == typeof this._offsets[s + 1] ||
                      t < this._offsets[s + 1]) &&
                    this._activate(this._targets[s]);
                }
              }
            }),
            (g._activate = function (e) {
              (this._activeTarget = e), this._clear();
              var n = this._selector.split(',');
              n = n.map(function (t) {
                return (
                  t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                );
              });
              var i = t(n.join(','));
              i.hasClass(c)
                ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u),
                  i.addClass(u))
                : (i.addClass(u),
                  i
                    .parents(f.NAV_LIST_GROUP)
                    .prev(f.NAV_LINKS + ', ' + f.LIST_ITEMS)
                    .addClass(u),
                  i
                    .parents(f.NAV_LIST_GROUP)
                    .prev(f.NAV_ITEMS)
                    .children(f.NAV_LINKS)
                    .addClass(u)),
                t(this._scrollElement).trigger(h.ACTIVATE, {
                  relatedTarget: e,
                });
            }),
            (g._clear = function () {
              t(this._selector).filter(f.ACTIVE).removeClass(u);
            }),
            (o._jQueryInterface = function (e) {
              return this.each(function () {
                var i = t(this).data(n);
                if (
                  (i ||
                    ((i = new o(this, 'object' == typeof e && e)),
                    t(this).data(n, i)),
                  'string' == typeof e)
                ) {
                  if ('undefined' == typeof i[e])
                    throw new TypeError('No method named "' + e + '"');
                  i[e]();
                }
              });
            }),
            s(o, null, [
              {
                key: 'VERSION',
                get: function () {
                  return '4.0.0';
                },
              },
              {
                key: 'Default',
                get: function () {
                  return a;
                },
              },
            ]),
            o
          );
        })();
      return (
        t(window).on(h.LOAD_DATA_API, function () {
          for (var e = t.makeArray(t(f.DATA_SPY)), n = e.length; n--; ) {
            var i = t(e[n]);
            g._jQueryInterface.call(i, i.data());
          }
        }),
        (t.fn[e] = g._jQueryInterface),
        (t.fn[e].Constructor = g),
        (t.fn[e].noConflict = function () {
          return (t.fn[e] = o), g._jQueryInterface;
        }),
        g
      );
    })(e),
    V = (function (t) {
      var e = 'bs.tab',
        n = '.' + e,
        i = t.fn.tab,
        r = {
          HIDE: 'hide' + n,
          HIDDEN: 'hidden' + n,
          SHOW: 'show' + n,
          SHOWN: 'shown' + n,
          CLICK_DATA_API: 'click.bs.tab.data-api',
        },
        o = 'dropdown-menu',
        a = 'active',
        l = 'disabled',
        h = 'fade',
        c = 'show',
        u = '.dropdown',
        f = '.nav, .list-group',
        d = '.active',
        _ = '> li > .active',
        g = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        p = '.dropdown-toggle',
        m = '> .dropdown-menu .active',
        v = (function () {
          function n(t) {
            this._element = t;
          }
          var i = n.prototype;
          return (
            (i.show = function () {
              var e = this;
              if (
                !(
                  (this._element.parentNode &&
                    this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                    t(this._element).hasClass(a)) ||
                  t(this._element).hasClass(l)
                )
              ) {
                var n,
                  i,
                  s = t(this._element).closest(f)[0],
                  o = P.getSelectorFromElement(this._element);
                if (s) {
                  var h = 'UL' === s.nodeName ? _ : d;
                  i = (i = t.makeArray(t(s).find(h)))[i.length - 1];
                }
                var c = t.Event(r.HIDE, { relatedTarget: this._element }),
                  u = t.Event(r.SHOW, { relatedTarget: i });
                if (
                  (i && t(i).trigger(c),
                  t(this._element).trigger(u),
                  !u.isDefaultPrevented() && !c.isDefaultPrevented())
                ) {
                  o && (n = t(o)[0]), this._activate(this._element, s);
                  var g = function () {
                    var n = t.Event(r.HIDDEN, { relatedTarget: e._element }),
                      s = t.Event(r.SHOWN, { relatedTarget: i });
                    t(i).trigger(n), t(e._element).trigger(s);
                  };
                  n ? this._activate(n, n.parentNode, g) : g();
                }
              }
            }),
            (i.dispose = function () {
              t.removeData(this._element, e), (this._element = null);
            }),
            (i._activate = function (e, n, i) {
              var s = this,
                r = ('UL' === n.nodeName ? t(n).find(_) : t(n).children(d))[0],
                o = i && P.supportsTransitionEnd() && r && t(r).hasClass(h),
                a = function () {
                  return s._transitionComplete(e, r, i);
                };
              r && o
                ? t(r).one(P.TRANSITION_END, a).emulateTransitionEnd(150)
                : a();
            }),
            (i._transitionComplete = function (e, n, i) {
              if (n) {
                t(n).removeClass(c + ' ' + a);
                var s = t(n.parentNode).find(m)[0];
                s && t(s).removeClass(a),
                  'tab' === n.getAttribute('role') &&
                    n.setAttribute('aria-selected', !1);
              }
              if (
                (t(e).addClass(a),
                'tab' === e.getAttribute('role') &&
                  e.setAttribute('aria-selected', !0),
                P.reflow(e),
                t(e).addClass(c),
                e.parentNode && t(e.parentNode).hasClass(o))
              ) {
                var r = t(e).closest(u)[0];
                r && t(r).find(p).addClass(a),
                  e.setAttribute('aria-expanded', !0);
              }
              i && i();
            }),
            (n._jQueryInterface = function (i) {
              return this.each(function () {
                var s = t(this),
                  r = s.data(e);
                if (
                  (r || ((r = new n(this)), s.data(e, r)), 'string' == typeof i)
                ) {
                  if ('undefined' == typeof r[i])
                    throw new TypeError('No method named "' + i + '"');
                  r[i]();
                }
              });
            }),
            s(n, null, [
              {
                key: 'VERSION',
                get: function () {
                  return '4.0.0';
                },
              },
            ]),
            n
          );
        })();
      return (
        t(document).on(r.CLICK_DATA_API, g, function (e) {
          e.preventDefault(), v._jQueryInterface.call(t(this), 'show');
        }),
        (t.fn.tab = v._jQueryInterface),
        (t.fn.tab.Constructor = v),
        (t.fn.tab.noConflict = function () {
          return (t.fn.tab = i), v._jQueryInterface;
        }),
        v
      );
    })(e);
  !(function (t) {
    if ('undefined' == typeof t)
      throw new TypeError(
        "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.",
      );
    var e = t.fn.jquery.split(' ')[0].split('.');
    if (
      (e[0] < 2 && e[1] < 9) ||
      (1 === e[0] && 9 === e[1] && e[2] < 1) ||
      e[0] >= 4
    )
      throw new Error(
        "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0",
      );
  })(e),
    (t.Util = P),
    (t.Alert = L),
    (t.Button = R),
    (t.Carousel = j),
    (t.Collapse = H),
    (t.Dropdown = W),
    (t.Modal = M),
    (t.Popover = x),
    (t.Scrollspy = K),
    (t.Tab = V),
    (t.Tooltip = U),
    Object.defineProperty(t, '__esModule', { value: !0 });
});
//# sourceMappingURL=bootstrap.min.js.map

/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (a) {
  'function' == typeof define && define.amd
    ? define(['jquery'], a)
    : a(
        'object' == typeof exports
          ? require('jquery')
          : window.jQuery || window.Zepto,
      );
})(function (a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = 'Close',
    i = 'BeforeClose',
    j = 'AfterClose',
    k = 'BeforeAppend',
    l = 'MarkupParse',
    m = 'Open',
    n = 'Change',
    o = 'mfp',
    p = '.' + o,
    q = 'mfp-ready',
    r = 'mfp-removing',
    s = 'mfp-prevent-close',
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c);
    },
    x = function (b, c, d, e) {
      var f = document.createElement('div');
      return (
        (f.className = 'mfp-' + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      );
    },
    y = function (c, d) {
      b.ev.triggerHandler(o + c, d),
        b.st.callbacks &&
          ((c = c.charAt(0).toLowerCase() + c.slice(1)),
          b.st.callbacks[c] &&
            b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
    },
    z = function (c) {
      return (
        (c === g && b.currTemplate.closeBtn) ||
          ((b.currTemplate.closeBtn = a(
            b.st.closeMarkup.replace('%title%', b.st.tClose),
          )),
          (g = c)),
        b.currTemplate.closeBtn
      );
    },
    A = function () {
      a.magnificPopup.instance ||
        ((b = new t()), b.init(), (a.magnificPopup.instance = b));
    },
    B = function () {
      var a = document.createElement('p').style,
        b = ['ms', 'O', 'Moz', 'Webkit'];
      if (void 0 !== a.transition) return !0;
      for (; b.length; ) if (b.pop() + 'Transition' in a) return !0;
      return !1;
    };
  (t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion;
      (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
        (b.isAndroid = /android/gi.test(c)),
        (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
        (b.supportsTransition = B()),
        (b.probablyMobile =
          b.isAndroid ||
          b.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent,
          )),
        (d = a(document)),
        (b.popupsCache = {});
    },
    open: function (c) {
      var e;
      if (c.isObj === !1) {
        (b.items = c.items.toArray()), (b.index = 0);
        var g,
          h = c.items;
        for (e = 0; e < h.length; e++)
          if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
            b.index = e;
            break;
          }
      } else
        (b.items = a.isArray(c.items) ? c.items : [c.items]),
          (b.index = c.index || 0);
      if (b.isOpen) return void b.updateItemHTML();
      (b.types = []),
        (f = ''),
        c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
        c.key
          ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            (b.currTemplate = b.popupsCache[c.key]))
          : (b.currTemplate = {}),
        (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
        (b.fixedContentPos =
          'auto' === b.st.fixedContentPos
            ? !b.probablyMobile
            : b.st.fixedContentPos),
        b.st.modal &&
          ((b.st.closeOnContentClick = !1),
          (b.st.closeOnBgClick = !1),
          (b.st.showCloseBtn = !1),
          (b.st.enableEscapeKey = !1)),
        b.bgOverlay ||
          ((b.bgOverlay = x('bg').on('click' + p, function () {
            b.close();
          })),
          (b.wrap = x('wrap')
            .attr('tabindex', -1)
            .on('click' + p, function (a) {
              b._checkIfClose(a.target) && b.close();
            })),
          (b.container = x('container', b.wrap))),
        (b.contentContainer = x('content')),
        b.st.preloader &&
          (b.preloader = x('preloader', b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        (j = j.charAt(0).toUpperCase() + j.slice(1)), b['init' + j].call(b);
      }
      y('BeforeOpen'),
        b.st.showCloseBtn &&
          (b.st.closeBtnInside
            ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (f += ' mfp-close-btn-in'))
            : b.wrap.append(z())),
        b.st.alignTop && (f += ' mfp-align-top'),
        b.fixedContentPos
          ? b.wrap.css({
              overflow: b.st.overflowY,
              overflowX: 'hidden',
              overflowY: b.st.overflowY,
            })
          : b.wrap.css({ top: v.scrollTop(), position: 'absolute' }),
        (b.st.fixedBgPos === !1 ||
          ('auto' === b.st.fixedBgPos && !b.fixedContentPos)) &&
          b.bgOverlay.css({ height: d.height(), position: 'absolute' }),
        b.st.enableEscapeKey &&
          d.on('keyup' + p, function (a) {
            27 === a.keyCode && b.close();
          }),
        v.on('resize' + p, function () {
          b.updateSize();
        }),
        b.st.closeOnContentClick || (f += ' mfp-auto-cursor'),
        f && b.wrap.addClass(f);
      var k = (b.wH = v.height()),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o);
      }
      b.fixedContentPos &&
        (b.isIE7
          ? a('body, html').css('overflow', 'hidden')
          : (n.overflow = 'hidden'));
      var r = b.st.mainClass;
      return (
        b.isIE7 && (r += ' mfp-ie7'),
        r && b._addClassToMFP(r),
        b.updateItemHTML(),
        y('BuildControls'),
        a('html').css(n),
        b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
        (b._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          b.content
            ? (b._addClassToMFP(q), b._setFocus())
            : b.bgOverlay.addClass(q),
            d.on('focusin' + p, b._onFocusIn);
        }, 16),
        (b.isOpen = !0),
        b.updateSize(k),
        y(m),
        c
      );
    },
    close: function () {
      b.isOpen &&
        (y(i),
        (b.isOpen = !1),
        b.st.removalDelay && !b.isLowIE && b.supportsTransition
          ? (b._addClassToMFP(r),
            setTimeout(function () {
              b._close();
            }, b.st.removalDelay))
          : b._close());
    },
    _close: function () {
      y(h);
      var c = r + ' ' + q + ' ';
      if (
        (b.bgOverlay.detach(),
        b.wrap.detach(),
        b.container.empty(),
        b.st.mainClass && (c += b.st.mainClass + ' '),
        b._removeClassFromMFP(c),
        b.fixedContentPos)
      ) {
        var e = { marginRight: '' };
        b.isIE7 ? a('body, html').css('overflow', '') : (e.overflow = ''),
          a('html').css(e);
      }
      d.off('keyup' + p + ' focusin' + p),
        b.ev.off(p),
        b.wrap.attr('class', 'mfp-wrap').removeAttr('style'),
        b.bgOverlay.attr('class', 'mfp-bg'),
        b.container.attr('class', 'mfp-container'),
        !b.st.showCloseBtn ||
          (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
          (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
        b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
        (b.currItem = null),
        (b.content = null),
        (b.currTemplate = null),
        (b.prevHeight = 0),
        y(j);
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css('height', d), (b.wH = d);
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css('height', b.wH), y('Resize');
    },
    updateItemHTML: function () {
      var c = b.items[b.index];
      b.contentContainer.detach(),
        b.content && b.content.detach(),
        c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (
        (y('BeforeChange', [b.currItem ? b.currItem.type : '', d]),
        (b.currItem = c),
        !b.currTemplate[d])
      ) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y('FirstMarkupParse', f),
          f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
      }
      e && e !== c.type && b.container.removeClass('mfp-' + e + '-holder');
      var g = b['get' + d.charAt(0).toUpperCase() + d.slice(1)](
        c,
        b.currTemplate[d],
      );
      b.appendContent(g, d),
        (c.preloaded = !0),
        y(n, c),
        (e = c.type),
        b.container.prepend(b.contentContainer),
        y('AfterChange');
    },
    appendContent: function (a, c) {
      (b.content = a),
        a
          ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
            ? b.content.find('.mfp-close').length || b.content.append(z())
            : (b.content = a)
          : (b.content = ''),
        y(k),
        b.container.addClass('mfp-' + c + '-holder'),
        b.contentContainer.append(b.content);
    },
    parseEl: function (c) {
      var d,
        e = b.items[c];
      if (
        (e.tagName
          ? (e = { el: a(e) })
          : ((d = e.type), (e = { data: e, src: e.src })),
        e.el)
      ) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass('mfp-' + f[g])) {
            d = f[g];
            break;
          }
        (e.src = e.el.attr('data-mfp-src')),
          e.src || (e.src = e.el.attr('href'));
      }
      return (
        (e.type = d || b.st.type || 'inline'),
        (e.index = c),
        (e.parsed = !0),
        (b.items[c] = e),
        y('ElementParse', e),
        b.items[c]
      );
    },
    addGroup: function (a, c) {
      var d = function (d) {
        (d.mfpEl = this), b._openClick(d, a, c);
      };
      c || (c = {});
      var e = 'click.magnificPopup';
      (c.mainEl = a),
        c.items
          ? ((c.isObj = !0), a.off(e).on(e, d))
          : ((c.isObj = !1),
            c.delegate
              ? a.off(e).on(e, c.delegate, d)
              : ((c.items = a), a.off(e).on(e, d)));
    },
    _openClick: function (c, d, e) {
      var f =
        void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (
        f ||
        !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)
      ) {
        var g =
          void 0 !== e.disableOn
            ? e.disableOn
            : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0;
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
          (e.el = a(c.mfpEl)),
          e.delegate && (e.items = d.find(e.delegate)),
          b.open(e);
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass('mfp-s-' + c),
          d || 'loading' !== a || (d = b.st.tLoading);
        var e = { status: a, text: d };
        y('UpdateStatus', e),
          (a = e.status),
          (d = e.text),
          b.preloader.html(d),
          b.preloader.find('a').on('click', function (a) {
            a.stopImmediatePropagation();
          }),
          b.container.addClass('mfp-s-' + a),
          (c = a);
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (
          !b.content ||
          a(c).hasClass('mfp-close') ||
          (b.preloader && c === b.preloader[0])
        )
          return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function (a) {
      return (
        (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
      );
    },
    _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
        ? void 0
        : (b._setFocus(), !1);
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)),
        y(l, [b, c, d]),
        a.each(c, function (c, d) {
          if (void 0 === d || d === !1) return !0;
          if (((e = c.split('_')), e.length > 1)) {
            var f = b.find(p + '-' + e[0]);
            if (f.length > 0) {
              var g = e[1];
              'replaceWith' === g
                ? f[0] !== d[0] && f.replaceWith(d)
                : 'img' === g
                ? f.is('img')
                  ? f.attr('src', d)
                  : f.replaceWith(
                      a('<img>').attr('src', d).attr('class', f.attr('class')),
                    )
                : f.attr(e[1], d);
            }
          } else b.find(p + '-' + c).html(d);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement('div');
        (a.style.cssText =
          'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;'),
          document.body.appendChild(a),
          (b.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a);
      }
      return b.scrollbarSize;
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: t.prototype,
      modules: [],
      open: function (b, c) {
        return (
          A(),
          (b = b ? a.extend(!0, {}, b) : {}),
          (b.isObj = !0),
          (b.index = c || 0),
          this.instance.open(b)
        );
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close();
      },
      registerModule: function (b, c) {
        c.options && (a.magnificPopup.defaults[b] = c.options),
          a.extend(this.proto, c.proto),
          this.modules.push(b);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: '',
        preloader: !0,
        focus: '',
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: 'auto',
        fixedBgPos: 'auto',
        overflowY: 'auto',
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: 'Close (Esc)',
        tLoading: 'Loading...',
        autoFocusLast: !0,
      },
    }),
    (a.fn.magnificPopup = function (c) {
      A();
      var d = a(this);
      if ('string' == typeof c)
        if ('open' === c) {
          var e,
            f = u ? d.data('magnificPopup') : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
          f.items
            ? (e = f.items[g])
            : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
            b._openClick({ mfpEl: e }, d, f);
        } else
          b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
      else
        (c = a.extend(!0, {}, c)),
          u ? d.data('magnificPopup', c) : (d[0].magnificPopup = c),
          b.addGroup(d, c);
      return d;
    });
  var C,
    D,
    E,
    F = 'inline',
    G = function () {
      E && (D.after(E.addClass(C)).detach(), (E = null));
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: 'hide',
      markup: '',
      tNotFound: 'Content not found',
    },
    proto: {
      initInline: function () {
        b.types.push(F),
          w(h + '.' + F, function () {
            G();
          });
      },
      getInline: function (c, d) {
        if ((G(), c.src)) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g &&
              g.tagName &&
              (D || ((C = e.hiddenClass), (D = x(C)), (C = 'mfp-' + C)),
              (E = f.after(D).detach().removeClass(C))),
              b.updateStatus('ready');
          } else b.updateStatus('error', e.tNotFound), (f = a('<div>'));
          return (c.inlineElement = f), f;
        }
        return b.updateStatus('ready'), b._parseMarkup(d, {}, c), d;
      },
    },
  });
  var H,
    I = 'ajax',
    J = function () {
      H && a(document.body).removeClass(H);
    },
    K = function () {
      J(), b.req && b.req.abort();
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: 'mfp-ajax-cur',
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        b.types.push(I),
          (H = b.st.ajax.cursor),
          w(h + '.' + I, K),
          w('BeforeChange.' + I, K);
      },
      getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus('loading');
        var d = a.extend(
          {
            url: c.src,
            success: function (d, e, f) {
              var g = { data: d, xhr: f };
              y('ParseAjax', g),
                b.appendContent(a(g.data), I),
                (c.finished = !0),
                J(),
                b._setFocus(),
                setTimeout(function () {
                  b.wrap.addClass(q);
                }, 16),
                b.updateStatus('ready'),
                y('AjaxContentAdded');
            },
            error: function () {
              J(),
                (c.finished = c.loadError = !0),
                b.updateStatus(
                  'error',
                  b.st.ajax.tError.replace('%url%', c.src),
                );
            },
          },
          b.st.ajax.settings,
        );
        return (b.req = a.ajax(d)), '';
      },
    },
  });
  var L,
    M = function (c) {
      if (c.data && void 0 !== c.data.title) return c.data.title;
      var d = b.st.image.titleSrc;
      if (d) {
        if (a.isFunction(d)) return d.call(b, c);
        if (c.el) return c.el.attr(d) || '';
      }
      return '';
    };
  a.magnificPopup.registerModule('image', {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: 'mfp-zoom-out-cur',
      titleSrc: 'title',
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = '.image';
        b.types.push('image'),
          w(m + d, function () {
            'image' === b.currItem.type &&
              c.cursor &&
              a(document.body).addClass(c.cursor);
          }),
          w(h + d, function () {
            c.cursor && a(document.body).removeClass(c.cursor),
              v.off('resize' + p);
          }),
          w('Resize' + d, b.resizeImage),
          b.isLowIE && w('AfterChange', b.resizeImage);
      },
      resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE &&
            (c =
              parseInt(a.img.css('padding-top'), 10) +
              parseInt(a.img.css('padding-bottom'), 10)),
            a.img.css('max-height', b.wH - c);
        }
      },
      _onImageHasSize: function (a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y('ImageHasSize', a),
          a.imgHidden &&
            (b.content && b.content.removeClass('mfp-loading'),
            (a.imgHidden = !1)));
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            L && clearInterval(L),
              (L = setInterval(function () {
                return d.naturalWidth > 0
                  ? void b._onImageHasSize(a)
                  : (c > 200 && clearInterval(L),
                    c++,
                    void (3 === c
                      ? e(10)
                      : 40 === c
                      ? e(50)
                      : 100 === c && e(500)));
              }, f));
          };
        e(1);
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c &&
              (c.img[0].complete
                ? (c.img.off('.mfploader'),
                  c === b.currItem &&
                    (b._onImageHasSize(c), b.updateStatus('ready')),
                  (c.hasSize = !0),
                  (c.loaded = !0),
                  y('ImageLoadComplete'))
                : (e++, 200 > e ? setTimeout(f, 100) : g()));
          },
          g = function () {
            c &&
              (c.img.off('.mfploader'),
              c === b.currItem &&
                (b._onImageHasSize(c),
                b.updateStatus('error', h.tError.replace('%url%', c.src))),
              (c.hasSize = !0),
              (c.loaded = !0),
              (c.loadError = !0));
          },
          h = b.st.image,
          i = d.find('.mfp-img');
        if (i.length) {
          var j = document.createElement('img');
          (j.className = 'mfp-img'),
            c.el &&
              c.el.find('img').length &&
              (j.alt = c.el.find('img').attr('alt')),
            (c.img = a(j).on('load.mfploader', f).on('error.mfploader', g)),
            (j.src = c.src),
            i.is('img') && (c.img = c.img.clone()),
            (j = c.img[0]),
            j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
        }
        return (
          b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
          b.resizeImage(),
          c.hasSize
            ? (L && clearInterval(L),
              c.loadError
                ? (d.addClass('mfp-loading'),
                  b.updateStatus('error', h.tError.replace('%url%', c.src)))
                : (d.removeClass('mfp-loading'), b.updateStatus('ready')),
              d)
            : (b.updateStatus('loading'),
              (c.loading = !0),
              c.hasSize ||
                ((c.imgHidden = !0),
                d.addClass('mfp-loading'),
                b.findImageSize(c)),
              d)
        );
      },
    },
  });
  var N,
    O = function () {
      return (
        void 0 === N &&
          (N = void 0 !== document.createElement('p').style.MozTransform),
        N
      );
    };
  a.magnificPopup.registerModule('zoom', {
    options: {
      enabled: !1,
      easing: 'ease-in-out',
      duration: 300,
      opener: function (a) {
        return a.is('img') ? a : a.find('img');
      },
    },
    proto: {
      initZoom: function () {
        var a,
          c = b.st.zoom,
          d = '.zoom';
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function (a) {
              var b = a
                  .clone()
                  .removeAttr('style')
                  .removeAttr('class')
                  .addClass('mfp-animated-image'),
                d = 'all ' + c.duration / 1e3 + 's ' + c.easing,
                e = {
                  position: 'fixed',
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  '-webkit-backface-visibility': 'hidden',
                },
                f = 'transition';
              return (
                (e['-webkit-' + f] = e['-moz-' + f] = e['-o-' + f] = e[f] = d),
                b.css(e),
                b
              );
            },
            k = function () {
              b.content.css('visibility', 'visible');
            };
          w('BuildControls' + d, function () {
            if (b._allowZoom()) {
              if (
                (clearTimeout(e),
                b.content.css('visibility', 'hidden'),
                (a = b._getItemToZoom()),
                !a)
              )
                return void k();
              (f = j(a)),
                f.css(b._getOffset()),
                b.wrap.append(f),
                (e = setTimeout(function () {
                  f.css(b._getOffset(!0)),
                    (e = setTimeout(function () {
                      k(),
                        setTimeout(function () {
                          f.remove(), (a = f = null), y('ZoomAnimationEnded');
                        }, 16);
                    }, g));
                }, 16));
            }
          }),
            w(i + d, function () {
              if (b._allowZoom()) {
                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                  if (((a = b._getItemToZoom()), !a)) return;
                  f = j(a);
                }
                f.css(b._getOffset(!0)),
                  b.wrap.append(f),
                  b.content.css('visibility', 'hidden'),
                  setTimeout(function () {
                    f.css(b._getOffset());
                  }, 16);
              }
            }),
            w(h + d, function () {
              b._allowZoom() && (k(), f && f.remove(), (a = null));
            });
        }
      },
      _allowZoom: function () {
        return 'image' === b.currItem.type;
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css('padding-top'), 10),
          g = parseInt(d.css('padding-bottom'), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f,
        };
        return (
          O()
            ? (h['-moz-transform'] = h.transform =
                'translate(' + e.left + 'px,' + e.top + 'px)')
            : ((h.left = e.left), (h.top = e.top)),
          h
        );
      },
    },
  });
  var P = 'iframe',
    Q = '//about:blank',
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find('iframe');
        c.length &&
          (a || (c[0].src = Q),
          b.isIE8 && c.css('display', a ? 'block' : 'none'));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: 'iframe_src',
      patterns: {
        youtube: {
          index: 'youtube.com',
          id: 'v=',
          src: '//www.youtube.com/embed/%id%?autoplay=1',
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1',
        },
        gmaps: { index: '//maps.google.', src: '%id%&output=embed' },
      },
    },
    proto: {
      initIframe: function () {
        b.types.push(P),
          w('BeforeChange', function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0));
          }),
          w(h + '.' + P, function () {
            R();
          });
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1
            ? (this.id &&
                (e =
                  'string' == typeof this.id
                    ? e.substr(
                        e.lastIndexOf(this.id) + this.id.length,
                        e.length,
                      )
                    : this.id.call(this, e)),
              (e = this.src.replace('%id%', e)),
              !1)
            : void 0;
        });
        var g = {};
        return (
          f.srcAction && (g[f.srcAction] = e),
          b._parseMarkup(d, g, c),
          b.updateStatus('ready'),
          d
        );
      },
    },
  });
  var S = function (a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule('gallery', {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: 'Previous (Left arrow key)',
      tNext: 'Next (Right arrow key)',
      tCounter: '%curr% of %total%',
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = '.mfp-gallery';
        return (
          (b.direction = !0),
          c && c.enabled
            ? ((f += ' mfp-gallery'),
              w(m + e, function () {
                c.navigateByImgClick &&
                  b.wrap.on('click' + e, '.mfp-img', function () {
                    return b.items.length > 1 ? (b.next(), !1) : void 0;
                  }),
                  d.on('keydown' + e, function (a) {
                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                  });
              }),
              w('UpdateStatus' + e, function (a, c) {
                c.text &&
                  (c.text = T(c.text, b.currItem.index, b.items.length));
              }),
              w(l + e, function (a, d, e, f) {
                var g = b.items.length;
                e.counter = g > 1 ? T(c.tCounter, f.index, g) : '';
              }),
              w('BuildControls' + e, function () {
                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup,
                    e = (b.arrowLeft = a(
                      d
                        .replace(/%title%/gi, c.tPrev)
                        .replace(/%dir%/gi, 'left'),
                    ).addClass(s)),
                    f = (b.arrowRight = a(
                      d
                        .replace(/%title%/gi, c.tNext)
                        .replace(/%dir%/gi, 'right'),
                    ).addClass(s));
                  e.click(function () {
                    b.prev();
                  }),
                    f.click(function () {
                      b.next();
                    }),
                    b.container.append(e.add(f));
                }
              }),
              w(n + e, function () {
                b._preloadTimeout && clearTimeout(b._preloadTimeout),
                  (b._preloadTimeout = setTimeout(function () {
                    b.preloadNearbyImages(), (b._preloadTimeout = null);
                  }, 16));
              }),
              void w(h + e, function () {
                d.off(e),
                  b.wrap.off('click' + e),
                  (b.arrowRight = b.arrowLeft = null);
              }))
            : !1
        );
      },
      next: function () {
        (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
      },
      prev: function () {
        (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
      },
      goTo: function (a) {
        (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++)
          b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++)
          b._preloadItem(b.index - a);
      },
      _preloadItem: function (c) {
        if (((c = S(c)), !b.items[c].preloaded)) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)),
            y('LazyLoad', d),
            'image' === d.type &&
              (d.img = a('<img class="mfp-img" />')
                .on('load.mfploader', function () {
                  d.hasSize = !0;
                })
                .on('error.mfploader', function () {
                  (d.hasSize = !0), (d.loadError = !0), y('LazyLoadError', d);
                })
                .attr('src', d.src)),
            (d.preloaded = !0);
        }
      },
    },
  });
  var U = 'retina';
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return '@2x' + a;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          (c = isNaN(c) ? c() : c),
            c > 1 &&
              (w('ImageHasSize.' + U, function (a, b) {
                b.img.css({
                  'max-width': b.img[0].naturalWidth / c,
                  width: '100%',
                });
              }),
              w('ElementParse.' + U, function (b, d) {
                d.src = a.replaceSrc(d, c);
              }));
        }
      },
    },
  }),
    A();
});

/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!(function (e) {
  e.fn.niceSelect = function (t) {
    function s(t) {
      t.after(
        e('<div></div>')
          .addClass('nice-select')
          .addClass(t.attr('class') || '')
          .addClass(t.attr('disabled') ? 'disabled' : '')
          .attr('tabindex', t.attr('disabled') ? null : '0')
          .html('<span class="current"></span><ul class="list"></ul>'),
      );
      var s = t.next(),
        n = t.find('option'),
        i = t.find('option:selected');
      s.find('.current').html(i.data('display') || i.text()),
        n.each(function (t) {
          var n = e(this),
            i = n.data('display');
          s.find('ul').append(
            e('<li></li>')
              .attr('data-value', n.val())
              .attr('data-display', i || null)
              .addClass(
                'option' +
                  (n.is(':selected') ? ' selected' : '') +
                  (n.is(':disabled') ? ' disabled' : ''),
              )
              .html(n.text()),
          );
        });
    }
    if ('string' == typeof t)
      return (
        'update' == t
          ? this.each(function () {
              var t = e(this),
                n = e(this).next('.nice-select'),
                i = n.hasClass('open');
              n.length && (n.remove(), s(t), i && t.next().trigger('click'));
            })
          : 'destroy' == t
          ? (this.each(function () {
              var t = e(this),
                s = e(this).next('.nice-select');
              s.length && (s.remove(), t.css('display', ''));
            }),
            0 == e('.nice-select').length && e(document).off('.nice_select'))
          : console.log('Method "' + t + '" does not exist.'),
        this
      );
    this.hide(),
      this.each(function () {
        var t = e(this);
        t.next().hasClass('nice-select') || s(t);
      }),
      e(document).off('.nice_select'),
      e(document).on('click.nice_select', '.nice-select', function (t) {
        var s = e(this);
        e('.nice-select').not(s).removeClass('open'),
          s.toggleClass('open'),
          s.hasClass('open')
            ? (s.find('.option'),
              s.find('.focus').removeClass('focus'),
              s.find('.selected').addClass('focus'))
            : s.focus();
      }),
      e(document).on('click.nice_select', function (t) {
        0 === e(t.target).closest('.nice-select').length &&
          e('.nice-select').removeClass('open').find('.option');
      }),
      e(document).on(
        'click.nice_select',
        '.nice-select .option:not(.disabled)',
        function (t) {
          var s = e(this),
            n = s.closest('.nice-select');
          n.find('.selected').removeClass('selected'), s.addClass('selected');
          var i = s.data('display') || s.text();
          n.find('.current').text(i),
            n.prev('select').val(s.data('value')).trigger('change');
        },
      ),
      e(document).on('keydown.nice_select', '.nice-select', function (t) {
        var s = e(this),
          n = e(s.find('.focus') || s.find('.list .option.selected'));
        if (32 == t.keyCode || 13 == t.keyCode)
          return (
            s.hasClass('open') ? n.trigger('click') : s.trigger('click'), !1
          );
        if (40 == t.keyCode) {
          if (s.hasClass('open')) {
            var i = n.nextAll('.option:not(.disabled)').first();
            i.length > 0 &&
              (s.find('.focus').removeClass('focus'), i.addClass('focus'));
          } else s.trigger('click');
          return !1;
        }
        if (38 == t.keyCode) {
          if (s.hasClass('open')) {
            var l = n.prevAll('.option:not(.disabled)').first();
            l.length > 0 &&
              (s.find('.focus').removeClass('focus'), l.addClass('focus'));
          } else s.trigger('click');
          return !1;
        }
        if (27 == t.keyCode) s.hasClass('open') && s.trigger('click');
        else if (9 == t.keyCode && s.hasClass('open')) return !1;
      });
    var n = document.createElement('a').style;
    return (
      (n.cssText = 'pointer-events:auto'),
      'auto' !== n.pointerEvents && e('html').addClass('no-csspointerevents'),
      this
    );
  };
})(jQuery);

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!(function (a, b, c, d) {
  function e(b, c) {
    (this.settings = null),
      (this.options = a.extend({}, e.Defaults, c)),
      (this.$element = a(b)),
      (this._handlers = {}),
      (this._plugins = {}),
      (this._supress = {}),
      (this._current = null),
      (this._speed = null),
      (this._coordinates = []),
      (this._breakpoint = null),
      (this._width = null),
      (this._items = []),
      (this._clones = []),
      (this._mergers = []),
      (this._widths = []),
      (this._invalidated = {}),
      (this._pipe = []),
      (this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: { start: null, current: null },
        direction: null,
      }),
      (this._states = {
        current: {},
        tags: {
          initializing: ['busy'],
          animating: ['busy'],
          dragging: ['interacting'],
        },
      }),
      a.each(
        ['onResize', 'onThrottledResize'],
        a.proxy(function (b, c) {
          this._handlers[c] = a.proxy(this[c], this);
        }, this),
      ),
      a.each(
        e.Plugins,
        a.proxy(function (a, b) {
          this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
        }, this),
      ),
      a.each(
        e.Workers,
        a.proxy(function (b, c) {
          this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
        }, this),
      ),
      this.setup(),
      this.initialize();
  }
  (e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    checkVisibility: !0,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: 'swing',
    slideTransition: '',
    info: !1,
    nestedItemSelector: !1,
    itemElement: 'div',
    stageElement: 'div',
    refreshClass: 'owl-refresh',
    loadedClass: 'owl-loaded',
    loadingClass: 'owl-loading',
    rtlClass: 'owl-rtl',
    responsiveClass: 'owl-responsive',
    dragClass: 'owl-drag',
    itemClass: 'owl-item',
    stageClass: 'owl-stage',
    stageOuterClass: 'owl-stage-outer',
    grabClass: 'owl-grab',
  }),
    (e.Width = { Default: 'default', Inner: 'inner', Outer: 'outer' }),
    (e.Type = { Event: 'event', State: 'state' }),
    (e.Plugins = {}),
    (e.Workers = [
      {
        filter: ['width', 'settings'],
        run: function () {
          this._width = this.$element.width();
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          a.current = this._items && this._items[this.relative(this._current)];
        },
      },
      {
        filter: ['items', 'settings'],
        run: function () {
          this.$stage.children('.cloned').remove();
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          var b = this.settings.margin || '',
            c = !this.settings.autoWidth,
            d = this.settings.rtl,
            e = {
              width: 'auto',
              'margin-left': d ? b : '',
              'margin-right': d ? '' : b,
            };
          !c && this.$stage.children().css(e), (a.css = e);
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          var b =
              (this.width() / this.settings.items).toFixed(3) -
              this.settings.margin,
            c = null,
            d = this._items.length,
            e = !this.settings.autoWidth,
            f = [];
          for (a.items = { merge: !1, width: b }; d--; )
            (c = this._mergers[d]),
              (c =
                (this.settings.mergeFit && Math.min(c, this.settings.items)) ||
                c),
              (a.items.merge = c > 1 || a.items.merge),
              (f[d] = e ? b * c : this._items[d].width());
          this._widths = f;
        },
      },
      {
        filter: ['items', 'settings'],
        run: function () {
          var b = [],
            c = this._items,
            d = this.settings,
            e = Math.max(2 * d.items, 4),
            f = 2 * Math.ceil(c.length / 2),
            g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
            h = '',
            i = '';
          for (g /= 2; g > 0; )
            b.push(this.normalize(b.length / 2, !0)),
              (h += c[b[b.length - 1]][0].outerHTML),
              b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
              (i = c[b[b.length - 1]][0].outerHTML + i),
              (g -= 1);
          (this._clones = b),
            a(h).addClass('cloned').appendTo(this.$stage),
            a(i).addClass('cloned').prependTo(this.$stage);
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function () {
          for (
            var a = this.settings.rtl ? 1 : -1,
              b = this._clones.length + this._items.length,
              c = -1,
              d = 0,
              e = 0,
              f = [];
            ++c < b;

          )
            (d = f[c - 1] || 0),
              (e = this._widths[this.relative(c)] + this.settings.margin),
              f.push(d + e * a);
          this._coordinates = f;
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function () {
          var a = this.settings.stagePadding,
            b = this._coordinates,
            c = {
              width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
              'padding-left': a || '',
              'padding-right': a || '',
            };
          this.$stage.css(c);
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          var b = this._coordinates.length,
            c = !this.settings.autoWidth,
            d = this.$stage.children();
          if (c && a.items.merge)
            for (; b--; )
              (a.css.width = this._widths[this.relative(b)]),
                d.eq(b).css(a.css);
          else c && ((a.css.width = a.items.width), d.css(a.css));
        },
      },
      {
        filter: ['items'],
        run: function () {
          this._coordinates.length < 1 && this.$stage.removeAttr('style');
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          (a.current = a.current ? this.$stage.children().index(a.current) : 0),
            (a.current = Math.max(
              this.minimum(),
              Math.min(this.maximum(), a.current),
            )),
            this.reset(a.current);
        },
      },
      {
        filter: ['position'],
        run: function () {
          this.animate(this.coordinates(this._current));
        },
      },
      {
        filter: ['width', 'position', 'items', 'settings'],
        run: function () {
          var a,
            b,
            c,
            d,
            e = this.settings.rtl ? 1 : -1,
            f = 2 * this.settings.stagePadding,
            g = this.coordinates(this.current()) + f,
            h = g + this.width() * e,
            i = [];
          for (c = 0, d = this._coordinates.length; c < d; c++)
            (a = this._coordinates[c - 1] || 0),
              (b = Math.abs(this._coordinates[c]) + f * e),
              ((this.op(a, '<=', g) && this.op(a, '>', h)) ||
                (this.op(b, '<', g) && this.op(b, '>', h))) &&
                i.push(c);
          this.$stage.children('.active').removeClass('active'),
            this.$stage
              .children(':eq(' + i.join('), :eq(') + ')')
              .addClass('active'),
            this.$stage.children('.center').removeClass('center'),
            this.settings.center &&
              this.$stage.children().eq(this.current()).addClass('center');
        },
      },
    ]),
    (e.prototype.initializeStage = function () {
      (this.$stage = this.$element.find('.' + this.settings.stageClass)),
        this.$stage.length ||
          (this.$element.addClass(this.options.loadingClass),
          (this.$stage = a('<' + this.settings.stageElement + '>', {
            class: this.settings.stageClass,
          }).wrap(a('<div/>', { class: this.settings.stageOuterClass }))),
          this.$element.append(this.$stage.parent()));
    }),
    (e.prototype.initializeItems = function () {
      var b = this.$element.find('.owl-item');
      if (b.length)
        return (
          (this._items = b.get().map(function (b) {
            return a(b);
          })),
          (this._mergers = this._items.map(function () {
            return 1;
          })),
          void this.refresh()
        );
      this.replace(this.$element.children().not(this.$stage.parent())),
        this.isVisible() ? this.refresh() : this.invalidate('width'),
        this.$element
          .removeClass(this.options.loadingClass)
          .addClass(this.options.loadedClass);
    }),
    (e.prototype.initialize = function () {
      if (
        (this.enter('initializing'),
        this.trigger('initialize'),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is('pre-loading'))
      ) {
        var a, b, c;
        (a = this.$element.find('img')),
          (b = this.settings.nestedItemSelector
            ? '.' + this.settings.nestedItemSelector
            : d),
          (c = this.$element.children(b).width()),
          a.length && c <= 0 && this.preloadAutoWidthImages(a);
      }
      this.initializeStage(),
        this.initializeItems(),
        this.registerEventHandlers(),
        this.leave('initializing'),
        this.trigger('initialized');
    }),
    (e.prototype.isVisible = function () {
      return !this.settings.checkVisibility || this.$element.is(':visible');
    }),
    (e.prototype.setup = function () {
      var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null;
      c
        ? (a.each(c, function (a) {
            a <= b && a > d && (d = Number(a));
          }),
          (e = a.extend({}, this.options, c[d])),
          'function' == typeof e.stagePadding &&
            (e.stagePadding = e.stagePadding()),
          delete e.responsive,
          e.responsiveClass &&
            this.$element.attr(
              'class',
              this.$element
                .attr('class')
                .replace(
                  new RegExp(
                    '(' + this.options.responsiveClass + '-)\\S+\\s',
                    'g',
                  ),
                  '$1' + d,
                ),
            ))
        : (e = a.extend({}, this.options)),
        this.trigger('change', { property: { name: 'settings', value: e } }),
        (this._breakpoint = d),
        (this.settings = e),
        this.invalidate('settings'),
        this.trigger('changed', {
          property: { name: 'settings', value: this.settings },
        });
    }),
    (e.prototype.optionsLogic = function () {
      this.settings.autoWidth &&
        ((this.settings.stagePadding = !1), (this.settings.merge = !1));
    }),
    (e.prototype.prepare = function (b) {
      var c = this.trigger('prepare', { content: b });
      return (
        c.data ||
          (c.data = a('<' + this.settings.itemElement + '/>')
            .addClass(this.options.itemClass)
            .append(b)),
        this.trigger('prepared', { content: c.data }),
        c.data
      );
    }),
    (e.prototype.update = function () {
      for (
        var b = 0,
          c = this._pipe.length,
          d = a.proxy(function (a) {
            return this[a];
          }, this._invalidated),
          e = {};
        b < c;

      )
        (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) &&
          this._pipe[b].run(e),
          b++;
      (this._invalidated = {}), !this.is('valid') && this.enter('valid');
    }),
    (e.prototype.width = function (a) {
      switch ((a = a || e.Width.Default)) {
        case e.Width.Inner:
        case e.Width.Outer:
          return this._width;
        default:
          return (
            this._width - 2 * this.settings.stagePadding + this.settings.margin
          );
      }
    }),
    (e.prototype.refresh = function () {
      this.enter('refreshing'),
        this.trigger('refresh'),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave('refreshing'),
        this.trigger('refreshed');
    }),
    (e.prototype.onThrottledResize = function () {
      b.clearTimeout(this.resizeTimer),
        (this.resizeTimer = b.setTimeout(
          this._handlers.onResize,
          this.settings.responsiveRefreshRate,
        ));
    }),
    (e.prototype.onResize = function () {
      return (
        !!this._items.length &&
        this._width !== this.$element.width() &&
        !!this.isVisible() &&
        (this.enter('resizing'),
        this.trigger('resize').isDefaultPrevented()
          ? (this.leave('resizing'), !1)
          : (this.invalidate('width'),
            this.refresh(),
            this.leave('resizing'),
            void this.trigger('resized')))
      );
    }),
    (e.prototype.registerEventHandlers = function () {
      a.support.transition &&
        this.$stage.on(
          a.support.transition.end + '.owl.core',
          a.proxy(this.onTransitionEnd, this),
        ),
        !1 !== this.settings.responsive &&
          this.on(b, 'resize', this._handlers.onThrottledResize),
        this.settings.mouseDrag &&
          (this.$element.addClass(this.options.dragClass),
          this.$stage.on('mousedown.owl.core', a.proxy(this.onDragStart, this)),
          this.$stage.on(
            'dragstart.owl.core selectstart.owl.core',
            function () {
              return !1;
            },
          )),
        this.settings.touchDrag &&
          (this.$stage.on(
            'touchstart.owl.core',
            a.proxy(this.onDragStart, this),
          ),
          this.$stage.on(
            'touchcancel.owl.core',
            a.proxy(this.onDragEnd, this),
          ));
    }),
    (e.prototype.onDragStart = function (b) {
      var d = null;
      3 !== b.which &&
        (a.support.transform
          ? ((d = this.$stage
              .css('transform')
              .replace(/.*\(|\)| /g, '')
              .split(',')),
            (d = {
              x: d[16 === d.length ? 12 : 4],
              y: d[16 === d.length ? 13 : 5],
            }))
          : ((d = this.$stage.position()),
            (d = {
              x: this.settings.rtl
                ? d.left +
                  this.$stage.width() -
                  this.width() +
                  this.settings.margin
                : d.left,
              y: d.top,
            })),
        this.is('animating') &&
          (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
          this.invalidate('position')),
        this.$element.toggleClass(
          this.options.grabClass,
          'mousedown' === b.type,
        ),
        this.speed(0),
        (this._drag.time = new Date().getTime()),
        (this._drag.target = a(b.target)),
        (this._drag.stage.start = d),
        (this._drag.stage.current = d),
        (this._drag.pointer = this.pointer(b)),
        a(c).on(
          'mouseup.owl.core touchend.owl.core',
          a.proxy(this.onDragEnd, this),
        ),
        a(c).one(
          'mousemove.owl.core touchmove.owl.core',
          a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on(
              'mousemove.owl.core touchmove.owl.core',
              a.proxy(this.onDragMove, this),
            ),
              (Math.abs(d.x) < Math.abs(d.y) && this.is('valid')) ||
                (b.preventDefault(),
                this.enter('dragging'),
                this.trigger('drag'));
          }, this),
        ));
    }),
    (e.prototype.onDragMove = function (a) {
      var b = null,
        c = null,
        d = null,
        e = this.difference(this._drag.pointer, this.pointer(a)),
        f = this.difference(this._drag.stage.start, e);
      this.is('dragging') &&
        (a.preventDefault(),
        this.settings.loop
          ? ((b = this.coordinates(this.minimum())),
            (c = this.coordinates(this.maximum() + 1) - b),
            (f.x = ((((f.x - b) % c) + c) % c) + b))
          : ((b = this.settings.rtl
              ? this.coordinates(this.maximum())
              : this.coordinates(this.minimum())),
            (c = this.settings.rtl
              ? this.coordinates(this.minimum())
              : this.coordinates(this.maximum())),
            (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
            (f.x = Math.max(Math.min(f.x, b + d), c + d))),
        (this._drag.stage.current = f),
        this.animate(f.x));
    }),
    (e.prototype.onDragEnd = function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b)),
        e = this._drag.stage.current,
        f = (d.x > 0) ^ this.settings.rtl ? 'left' : 'right';
      a(c).off('.owl.core'),
        this.$element.removeClass(this.options.grabClass),
        ((0 !== d.x && this.is('dragging')) || !this.is('valid')) &&
          (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
          this.invalidate('position'),
          this.update(),
          (this._drag.direction = f),
          (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
            this._drag.target.one('click.owl.core', function () {
              return !1;
            })),
        this.is('dragging') &&
          (this.leave('dragging'), this.trigger('dragged'));
    }),
    (e.prototype.closest = function (b, c) {
      var e = -1,
        f = 30,
        g = this.width(),
        h = this.coordinates();
      return (
        this.settings.freeDrag ||
          a.each(
            h,
            a.proxy(function (a, i) {
              return (
                'left' === c && b > i - f && b < i + f
                  ? (e = a)
                  : 'right' === c && b > i - g - f && b < i - g + f
                  ? (e = a + 1)
                  : this.op(b, '<', i) &&
                    this.op(b, '>', h[a + 1] !== d ? h[a + 1] : i - g) &&
                    (e = 'left' === c ? a + 1 : a),
                -1 === e
              );
            }, this),
          ),
        this.settings.loop ||
          (this.op(b, '>', h[this.minimum()])
            ? (e = b = this.minimum())
            : this.op(b, '<', h[this.maximum()]) && (e = b = this.maximum())),
        e
      );
    }),
    (e.prototype.animate = function (b) {
      var c = this.speed() > 0;
      this.is('animating') && this.onTransitionEnd(),
        c && (this.enter('animating'), this.trigger('translate')),
        a.support.transform3d && a.support.transition
          ? this.$stage.css({
              transform: 'translate3d(' + b + 'px,0px,0px)',
              transition:
                this.speed() / 1e3 +
                's' +
                (this.settings.slideTransition
                  ? ' ' + this.settings.slideTransition
                  : ''),
            })
          : c
          ? this.$stage.animate(
              { left: b + 'px' },
              this.speed(),
              this.settings.fallbackEasing,
              a.proxy(this.onTransitionEnd, this),
            )
          : this.$stage.css({ left: b + 'px' });
    }),
    (e.prototype.is = function (a) {
      return this._states.current[a] && this._states.current[a] > 0;
    }),
    (e.prototype.current = function (a) {
      if (a === d) return this._current;
      if (0 === this._items.length) return d;
      if (((a = this.normalize(a)), this._current !== a)) {
        var b = this.trigger('change', {
          property: { name: 'position', value: a },
        });
        b.data !== d && (a = this.normalize(b.data)),
          (this._current = a),
          this.invalidate('position'),
          this.trigger('changed', {
            property: { name: 'position', value: this._current },
          });
      }
      return this._current;
    }),
    (e.prototype.invalidate = function (b) {
      return (
        'string' === a.type(b) &&
          ((this._invalidated[b] = !0),
          this.is('valid') && this.leave('valid')),
        a.map(this._invalidated, function (a, b) {
          return b;
        })
      );
    }),
    (e.prototype.reset = function (a) {
      (a = this.normalize(a)) !== d &&
        ((this._speed = 0),
        (this._current = a),
        this.suppress(['translate', 'translated']),
        this.animate(this.coordinates(a)),
        this.release(['translate', 'translated']));
    }),
    (e.prototype.normalize = function (a, b) {
      var c = this._items.length,
        e = b ? 0 : this._clones.length;
      return (
        !this.isNumeric(a) || c < 1
          ? (a = d)
          : (a < 0 || a >= c + e) &&
            (a = ((((a - e / 2) % c) + c) % c) + e / 2),
        a
      );
    }),
    (e.prototype.relative = function (a) {
      return (a -= this._clones.length / 2), this.normalize(a, !0);
    }),
    (e.prototype.maximum = function (a) {
      var b,
        c,
        d,
        e = this.settings,
        f = this._coordinates.length;
      if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
      else if (e.autoWidth || e.merge) {
        if ((b = this._items.length))
          for (
            c = this._items[--b].width(), d = this.$element.width();
            b-- && !((c += this._items[b].width() + this.settings.margin) > d);

          );
        f = b + 1;
      } else
        f = e.center ? this._items.length - 1 : this._items.length - e.items;
      return a && (f -= this._clones.length / 2), Math.max(f, 0);
    }),
    (e.prototype.minimum = function (a) {
      return a ? 0 : this._clones.length / 2;
    }),
    (e.prototype.items = function (a) {
      return a === d
        ? this._items.slice()
        : ((a = this.normalize(a, !0)), this._items[a]);
    }),
    (e.prototype.mergers = function (a) {
      return a === d
        ? this._mergers.slice()
        : ((a = this.normalize(a, !0)), this._mergers[a]);
    }),
    (e.prototype.clones = function (b) {
      var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function (a) {
          return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2;
        };
      return b === d
        ? a.map(this._clones, function (a, b) {
            return f(b);
          })
        : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null;
          });
    }),
    (e.prototype.speed = function (a) {
      return a !== d && (this._speed = a), this._speed;
    }),
    (e.prototype.coordinates = function (b) {
      var c,
        e = 1,
        f = b - 1;
      return b === d
        ? a.map(
            this._coordinates,
            a.proxy(function (a, b) {
              return this.coordinates(b);
            }, this),
          )
        : (this.settings.center
            ? (this.settings.rtl && ((e = -1), (f = b + 1)),
              (c = this._coordinates[b]),
              (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e))
            : (c = this._coordinates[f] || 0),
          (c = Math.ceil(c)));
    }),
    (e.prototype.duration = function (a, b, c) {
      return 0 === c
        ? 0
        : Math.min(Math.max(Math.abs(b - a), 1), 6) *
            Math.abs(c || this.settings.smartSpeed);
    }),
    (e.prototype.to = function (a, b) {
      var c = this.current(),
        d = null,
        e = a - this.relative(c),
        f = (e > 0) - (e < 0),
        g = this._items.length,
        h = this.minimum(),
        i = this.maximum();
      this.settings.loop
        ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g),
          (a = c + e),
          (d = ((((a - h) % g) + g) % g) + h) !== a &&
            d - e <= i &&
            d - e > 0 &&
            ((c = d - e), (a = d), this.reset(c)))
        : this.settings.rewind
        ? ((i += 1), (a = ((a % i) + i) % i))
        : (a = Math.max(h, Math.min(i, a))),
        this.speed(this.duration(c, a, b)),
        this.current(a),
        this.isVisible() && this.update();
    }),
    (e.prototype.next = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) + 1, a);
    }),
    (e.prototype.prev = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) - 1, a);
    }),
    (e.prototype.onTransitionEnd = function (a) {
      if (
        a !== d &&
        (a.stopPropagation(),
        (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))
      )
        return !1;
      this.leave('animating'), this.trigger('translated');
    }),
    (e.prototype.viewport = function () {
      var d;
      return (
        this.options.responsiveBaseElement !== b
          ? (d = a(this.options.responsiveBaseElement).width())
          : b.innerWidth
          ? (d = b.innerWidth)
          : c.documentElement && c.documentElement.clientWidth
          ? (d = c.documentElement.clientWidth)
          : console.warn('Can not detect viewport width.'),
        d
      );
    }),
    (e.prototype.replace = function (b) {
      this.$stage.empty(),
        (this._items = []),
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector &&
          (b = b.find('.' + this.settings.nestedItemSelector)),
        b
          .filter(function () {
            return 1 === this.nodeType;
          })
          .each(
            a.proxy(function (a, b) {
              (b = this.prepare(b)),
                this.$stage.append(b),
                this._items.push(b),
                this._mergers.push(
                  1 *
                    b
                      .find('[data-merge]')
                      .addBack('[data-merge]')
                      .attr('data-merge') || 1,
                );
            }, this),
          ),
        this.reset(
          this.isNumeric(this.settings.startPosition)
            ? this.settings.startPosition
            : 0,
        ),
        this.invalidate('items');
    }),
    (e.prototype.add = function (b, c) {
      var e = this.relative(this._current);
      (c = c === d ? this._items.length : this.normalize(c, !0)),
        (b = b instanceof jQuery ? b : a(b)),
        this.trigger('add', { content: b, position: c }),
        (b = this.prepare(b)),
        0 === this._items.length || c === this._items.length
          ? (0 === this._items.length && this.$stage.append(b),
            0 !== this._items.length && this._items[c - 1].after(b),
            this._items.push(b),
            this._mergers.push(
              1 *
                b
                  .find('[data-merge]')
                  .addBack('[data-merge]')
                  .attr('data-merge') || 1,
            ))
          : (this._items[c].before(b),
            this._items.splice(c, 0, b),
            this._mergers.splice(
              c,
              0,
              1 *
                b
                  .find('[data-merge]')
                  .addBack('[data-merge]')
                  .attr('data-merge') || 1,
            )),
        this._items[e] && this.reset(this._items[e].index()),
        this.invalidate('items'),
        this.trigger('added', { content: b, position: c });
    }),
    (e.prototype.remove = function (a) {
      (a = this.normalize(a, !0)) !== d &&
        (this.trigger('remove', { content: this._items[a], position: a }),
        this._items[a].remove(),
        this._items.splice(a, 1),
        this._mergers.splice(a, 1),
        this.invalidate('items'),
        this.trigger('removed', { content: null, position: a }));
    }),
    (e.prototype.preloadAutoWidthImages = function (b) {
      b.each(
        a.proxy(function (b, c) {
          this.enter('pre-loading'),
            (c = a(c)),
            a(new Image())
              .one(
                'load',
                a.proxy(function (a) {
                  c.attr('src', a.target.src),
                    c.css('opacity', 1),
                    this.leave('pre-loading'),
                    !this.is('pre-loading') &&
                      !this.is('initializing') &&
                      this.refresh();
                }, this),
              )
              .attr(
                'src',
                c.attr('src') ||
                  c.attr('data-src') ||
                  c.attr('data-src-retina'),
              );
        }, this),
      );
    }),
    (e.prototype.destroy = function () {
      this.$element.off('.owl.core'),
        this.$stage.off('.owl.core'),
        a(c).off('.owl.core'),
        !1 !== this.settings.responsive &&
          (b.clearTimeout(this.resizeTimer),
          this.off(b, 'resize', this._handlers.onThrottledResize));
      for (var d in this._plugins) this._plugins[d].destroy();
      this.$stage.children('.cloned').remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.remove(),
        this.$element
          .removeClass(this.options.refreshClass)
          .removeClass(this.options.loadingClass)
          .removeClass(this.options.loadedClass)
          .removeClass(this.options.rtlClass)
          .removeClass(this.options.dragClass)
          .removeClass(this.options.grabClass)
          .attr(
            'class',
            this.$element
              .attr('class')
              .replace(
                new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'),
                '',
              ),
          )
          .removeData('owl.carousel');
    }),
    (e.prototype.op = function (a, b, c) {
      var d = this.settings.rtl;
      switch (b) {
        case '<':
          return d ? a > c : a < c;
        case '>':
          return d ? a < c : a > c;
        case '>=':
          return d ? a <= c : a >= c;
        case '<=':
          return d ? a >= c : a <= c;
      }
    }),
    (e.prototype.on = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, d)
        : a.attachEvent && a.attachEvent('on' + b, c);
    }),
    (e.prototype.off = function (a, b, c, d) {
      a.removeEventListener
        ? a.removeEventListener(b, c, d)
        : a.detachEvent && a.detachEvent('on' + b, c);
    }),
    (e.prototype.trigger = function (b, c, d, f, g) {
      var h = { item: { count: this._items.length, index: this.current() } },
        i = a.camelCase(
          a
            .grep(['on', b, d], function (a) {
              return a;
            })
            .join('-')
            .toLowerCase(),
        ),
        j = a.Event(
          [b, 'owl', d || 'carousel'].join('.').toLowerCase(),
          a.extend({ relatedTarget: this }, h, c),
        );
      return (
        this._supress[b] ||
          (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j);
          }),
          this.register({ type: e.Type.Event, name: b }),
          this.$element.trigger(j),
          this.settings &&
            'function' == typeof this.settings[i] &&
            this.settings[i].call(this, j)),
        j
      );
    }),
    (e.prototype.enter = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b] === d && (this._states.current[b] = 0),
            this._states.current[b]++;
        }, this),
      );
    }),
    (e.prototype.leave = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b]--;
        }, this),
      );
    }),
    (e.prototype.register = function (b) {
      if (b.type === e.Type.Event) {
        if (
          (a.event.special[b.name] || (a.event.special[b.name] = {}),
          !a.event.special[b.name].owl)
        ) {
          var c = a.event.special[b.name]._default;
          (a.event.special[b.name]._default = function (a) {
            return !c ||
              !c.apply ||
              (a.namespace && -1 !== a.namespace.indexOf('owl'))
              ? a.namespace && a.namespace.indexOf('owl') > -1
              : c.apply(this, arguments);
          }),
            (a.event.special[b.name].owl = !0);
        }
      } else
        b.type === e.Type.State &&
          (this._states.tags[b.name]
            ? (this._states.tags[b.name] = this._states.tags[b.name].concat(
                b.tags,
              ))
            : (this._states.tags[b.name] = b.tags),
          (this._states.tags[b.name] = a.grep(
            this._states.tags[b.name],
            a.proxy(function (c, d) {
              return a.inArray(c, this._states.tags[b.name]) === d;
            }, this),
          )));
    }),
    (e.prototype.suppress = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          this._supress[b] = !0;
        }, this),
      );
    }),
    (e.prototype.release = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          delete this._supress[b];
        }, this),
      );
    }),
    (e.prototype.pointer = function (a) {
      var c = { x: null, y: null };
      return (
        (a = a.originalEvent || a || b.event),
        (a =
          a.touches && a.touches.length
            ? a.touches[0]
            : a.changedTouches && a.changedTouches.length
            ? a.changedTouches[0]
            : a),
        a.pageX
          ? ((c.x = a.pageX), (c.y = a.pageY))
          : ((c.x = a.clientX), (c.y = a.clientY)),
        c
      );
    }),
    (e.prototype.isNumeric = function (a) {
      return !isNaN(parseFloat(a));
    }),
    (e.prototype.difference = function (a, b) {
      return { x: a.x - b.x, y: a.y - b.y };
    }),
    (a.fn.owlCarousel = function (b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var d = a(this),
          f = d.data('owl.carousel');
        f ||
          ((f = new e(this, 'object' == typeof b && b)),
          d.data('owl.carousel', f),
          a.each(
            [
              'next',
              'prev',
              'to',
              'destroy',
              'refresh',
              'replace',
              'add',
              'remove',
            ],
            function (b, c) {
              f.register({ type: e.Type.Event, name: c }),
                f.$element.on(
                  c + '.owl.carousel.core',
                  a.proxy(function (a) {
                    a.namespace &&
                      a.relatedTarget !== this &&
                      (this.suppress([c]),
                      f[c].apply(this, [].slice.call(arguments, 1)),
                      this.release([c]));
                  }, f),
                );
            },
          )),
          'string' == typeof b && '_' !== b.charAt(0) && f[b].apply(f, c);
      });
    }),
    (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          'initialized.owl.carousel': a.proxy(function (a) {
            a.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (e.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.isVisible()),
          (this._interval = b.setInterval(
            a.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval,
          )));
      }),
      (e.prototype.refresh = function () {
        this._core.isVisible() !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass('owl-hidden', !this._visible),
          this._visible &&
            this._core.invalidate('width') &&
            this._core.refresh());
      }),
      (e.prototype.destroy = function () {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this))
          'function' != typeof this[c] && (this[c] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._loaded = []),
        (this._handlers = {
          'initialized.owl.carousel change.owl.carousel resized.owl.carousel':
            a.proxy(function (b) {
              if (
                b.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((b.property && 'position' == b.property.name) ||
                  'initialized' == b.type)
              ) {
                var c = this._core.settings,
                  e = (c.center && Math.ceil(c.items / 2)) || c.items,
                  f = (c.center && -1 * e) || 0,
                  g =
                    (b.property && b.property.value !== d
                      ? b.property.value
                      : this._core.current()) + f,
                  h = this._core.clones().length,
                  i = a.proxy(function (a, b) {
                    this.load(b);
                  }, this);
                for (
                  c.lazyLoadEager > 0 &&
                  ((e += c.lazyLoadEager),
                  c.loop && ((g -= c.lazyLoadEager), e++));
                  f++ < e;

                )
                  this.load(h / 2 + this._core.relative(g)),
                    h && a.each(this._core.clones(this._core.relative(g)), i),
                    g++;
              }
            }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
      (e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c),
          e = d && d.find('.owl-lazy');
        !e ||
          a.inArray(d.get(0), this._loaded) > -1 ||
          (e.each(
            a.proxy(function (c, d) {
              var e,
                f = a(d),
                g =
                  (b.devicePixelRatio > 1 && f.attr('data-src-retina')) ||
                  f.attr('data-src') ||
                  f.attr('data-srcset');
              this._core.trigger('load', { element: f, url: g }, 'lazy'),
                f.is('img')
                  ? f
                      .one(
                        'load.owl.lazy',
                        a.proxy(function () {
                          f.css('opacity', 1),
                            this._core.trigger(
                              'loaded',
                              { element: f, url: g },
                              'lazy',
                            );
                        }, this),
                      )
                      .attr('src', g)
                  : f.is('source')
                  ? f
                      .one(
                        'load.owl.lazy',
                        a.proxy(function () {
                          this._core.trigger(
                            'loaded',
                            { element: f, url: g },
                            'lazy',
                          );
                        }, this),
                      )
                      .attr('srcset', g)
                  : ((e = new Image()),
                    (e.onload = a.proxy(function () {
                      f.css({
                        'background-image': 'url("' + g + '")',
                        opacity: '1',
                      }),
                        this._core.trigger(
                          'loaded',
                          { element: f, url: g },
                          'lazy',
                        );
                    }, this)),
                    (e.src = g));
            }, this),
          ),
          this._loaded.push(d.get(0)));
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (c) {
      (this._core = c),
        (this._previousHeight = null),
        (this._handlers = {
          'initialized.owl.carousel refreshed.owl.carousel': a.proxy(function (
            a,
          ) {
            a.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          'changed.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              'position' === a.property.name &&
              this.update();
          }, this),
          'loaded.owl.lazy': a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              a.element.closest('.' + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        (this._intervalId = null);
      var d = this;
      a(b).on('load', function () {
        d._core.settings.autoHeight && d.update();
      }),
        a(b).resize(function () {
          d._core.settings.autoHeight &&
            (null != d._intervalId && clearTimeout(d._intervalId),
            (d._intervalId = setTimeout(function () {
              d.update();
            }, 250)));
        });
    };
    (e.Defaults = { autoHeight: !1, autoHeightClass: 'owl-height' }),
      (e.prototype.update = function () {
        var b = this._core._current,
          c = b + this._core.settings.items,
          d = this._core.settings.lazyLoad,
          e = this._core.$stage.children().toArray().slice(b, c),
          f = [],
          g = 0;
        a.each(e, function (b, c) {
          f.push(a(c).height());
        }),
          (g = Math.max.apply(null, f)),
          g <= 1 && d && this._previousHeight && (g = this._previousHeight),
          (this._previousHeight = g),
          this._core.$stage
            .parent()
            .height(g)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          'initialized.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.register({
                type: 'state',
                name: 'playing',
                tags: ['interacting'],
              });
          }, this),
          'resize.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              a.preventDefault();
          }, this),
          'refreshed.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.is('resizing') &&
              this._core.$stage.find('.cloned .owl-video-frame').remove();
          }, this),
          'changed.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              'position' === a.property.name &&
              this._playing &&
              this.stop();
          }, this),
          'prepared.owl.carousel': a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content).find('.owl-video');
              c.length &&
                (c.css('display', 'none'), this.fetch(c, a(b.content)));
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          'click.owl.video',
          '.owl-video-play-icon',
          a.proxy(function (a) {
            this.play(a);
          }, this),
        );
    };
    (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (e.prototype.fetch = function (a, b) {
        var c = (function () {
            return a.attr('data-vimeo-id')
              ? 'vimeo'
              : a.attr('data-vzaar-id')
              ? 'vzaar'
              : 'youtube';
          })(),
          d =
            a.attr('data-vimeo-id') ||
            a.attr('data-youtube-id') ||
            a.attr('data-vzaar-id'),
          e = a.attr('data-width') || this._core.settings.videoWidth,
          f = a.attr('data-height') || this._core.settings.videoHeight,
          g = a.attr('href');
        if (!g) throw new Error('Missing video URL.');
        if (
          ((d = g.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/,
          )),
          d[3].indexOf('youtu') > -1)
        )
          c = 'youtube';
        else if (d[3].indexOf('vimeo') > -1) c = 'vimeo';
        else {
          if (!(d[3].indexOf('vzaar') > -1))
            throw new Error('Video URL not supported.');
          c = 'vzaar';
        }
        (d = d[6]),
          (this._videos[g] = { type: c, id: d, width: e, height: f }),
          b.attr('data-video', g),
          this.thumbnail(a, this._videos[g]);
      }),
      (e.prototype.thumbnail = function (b, c) {
        var d,
          e,
          f,
          g =
            c.width && c.height
              ? 'width:' + c.width + 'px;height:' + c.height + 'px;'
              : '',
          h = b.find('img'),
          i = 'src',
          j = '',
          k = this._core.settings,
          l = function (c) {
            (e = '<div class="owl-video-play-icon"></div>'),
              (d = k.lazyLoad
                ? a('<div/>', { class: 'owl-video-tn ' + j, srcType: c })
                : a('<div/>', {
                    class: 'owl-video-tn',
                    style: 'opacity:1;background-image:url(' + c + ')',
                  })),
              b.after(d),
              b.after(e);
          };
        if (
          (b.wrap(a('<div/>', { class: 'owl-video-wrapper', style: g })),
          this._core.settings.lazyLoad && ((i = 'data-src'), (j = 'owl-lazy')),
          h.length)
        )
          return l(h.attr(i)), h.remove(), !1;
        'youtube' === c.type
          ? ((f = '//img.youtube.com/vi/' + c.id + '/hqdefault.jpg'), l(f))
          : 'vimeo' === c.type
          ? a.ajax({
              type: 'GET',
              url: '//vimeo.com/api/v2/video/' + c.id + '.json',
              jsonp: 'callback',
              dataType: 'jsonp',
              success: function (a) {
                (f = a[0].thumbnail_large), l(f);
              },
            })
          : 'vzaar' === c.type &&
            a.ajax({
              type: 'GET',
              url: '//vzaar.com/api/videos/' + c.id + '.json',
              jsonp: 'callback',
              dataType: 'jsonp',
              success: function (a) {
                (f = a.framegrab_url), l(f);
              },
            });
      }),
      (e.prototype.stop = function () {
        this._core.trigger('stop', null, 'video'),
          this._playing.find('.owl-video-frame').remove(),
          this._playing.removeClass('owl-video-playing'),
          (this._playing = null),
          this._core.leave('playing'),
          this._core.trigger('stopped', null, 'video');
      }),
      (e.prototype.play = function (b) {
        var c,
          d = a(b.target),
          e = d.closest('.' + this._core.settings.itemClass),
          f = this._videos[e.attr('data-video')],
          g = f.width || '100%',
          h = f.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter('playing'),
          this._core.trigger('play', null, 'video'),
          (e = this._core.items(this._core.relative(e.index()))),
          this._core.reset(e.index()),
          (c = a(
            '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>',
          )),
          c.attr('height', h),
          c.attr('width', g),
          'youtube' === f.type
            ? c.attr(
                'src',
                '//www.youtube.com/embed/' +
                  f.id +
                  '?autoplay=1&rel=0&v=' +
                  f.id,
              )
            : 'vimeo' === f.type
            ? c.attr('src', '//player.vimeo.com/video/' + f.id + '?autoplay=1')
            : 'vzaar' === f.type &&
              c.attr(
                'src',
                '//view.vzaar.com/' + f.id + '/player?autoplay=true',
              ),
          a(c)
            .wrap('<div class="owl-video-frame" />')
            .insertAfter(e.find('.owl-video')),
          (this._playing = e.addClass('owl-video-playing')));
      }),
      (e.prototype.isInFullScreen = function () {
        var b =
          c.fullscreenElement ||
          c.mozFullScreenElement ||
          c.webkitFullscreenElement;
        return b && a(b).parent().hasClass('owl-video-frame');
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this._core.$element.off('click.owl.video');
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Video = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this.core = b),
        (this.core.options = a.extend({}, e.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = d),
        (this.next = d),
        (this.handlers = {
          'change.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              'position' == a.property.name &&
              ((this.previous = this.core.current()),
              (this.next = a.property.value));
          }, this),
          'drag.owl.carousel dragged.owl.carousel translated.owl.carousel':
            a.proxy(function (a) {
              a.namespace && (this.swapping = 'translated' == a.type);
            }, this),
          'translate.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (e.Defaults = { animateOut: !1, animateIn: !1 }),
      (e.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          a.support.animation &&
          a.support.transition
        ) {
          this.core.speed(0);
          var b,
            c = a.proxy(this.clear, this),
            d = this.core.$stage.children().eq(this.previous),
            e = this.core.$stage.children().eq(this.next),
            f = this.core.settings.animateIn,
            g = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (g &&
              ((b =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              d
                .one(a.support.animation.end, c)
                .css({ left: b + 'px' })
                .addClass('animated owl-animated-out')
                .addClass(g)),
            f &&
              e
                .one(a.support.animation.end, c)
                .addClass('animated owl-animated-in')
                .addClass(f));
        }
      }),
      (e.prototype.clear = function (b) {
        a(b.target)
          .css({ left: '' })
          .removeClass('animated owl-animated-out owl-animated-in')
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._call = null),
        (this._time = 0),
        (this._timeout = 0),
        (this._paused = !0),
        (this._handlers = {
          'changed.owl.carousel': a.proxy(function (a) {
            a.namespace && 'settings' === a.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : a.namespace &&
                'position' === a.property.name &&
                this._paused &&
                (this._time = 0);
          }, this),
          'initialized.owl.carousel': a.proxy(function (a) {
            a.namespace && this._core.settings.autoplay && this.play();
          }, this),
          'play.owl.autoplay': a.proxy(function (a, b, c) {
            a.namespace && this.play(b, c);
          }, this),
          'stop.owl.autoplay': a.proxy(function (a) {
            a.namespace && this.stop();
          }, this),
          'mouseover.owl.autoplay': a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is('rotating') &&
              this.pause();
          }, this),
          'mouseleave.owl.autoplay': a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is('rotating') &&
              this.play();
          }, this),
          'touchstart.owl.core': a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is('rotating') &&
              this.pause();
          }, this),
          'touchend.owl.core': a.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = a.extend({}, e.Defaults, this._core.options));
    };
    (e.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (e.prototype._next = function (d) {
        (this._call = b.setTimeout(
          a.proxy(this._next, this, d),
          this._timeout * (Math.round(this.read() / this._timeout) + 1) -
            this.read(),
        )),
          this._core.is('interacting') ||
            c.hidden ||
            this._core.next(d || this._core.settings.autoplaySpeed);
      }),
      (e.prototype.read = function () {
        return new Date().getTime() - this._time;
      }),
      (e.prototype.play = function (c, d) {
        var e;
        this._core.is('rotating') || this._core.enter('rotating'),
          (c = c || this._core.settings.autoplayTimeout),
          (e = Math.min(this._time % (this._timeout || c), c)),
          this._paused
            ? ((this._time = this.read()), (this._paused = !1))
            : b.clearTimeout(this._call),
          (this._time += (this.read() % c) - e),
          (this._timeout = c),
          (this._call = b.setTimeout(a.proxy(this._next, this, d), c - e));
      }),
      (e.prototype.stop = function () {
        this._core.is('rotating') &&
          ((this._time = 0),
          (this._paused = !0),
          b.clearTimeout(this._call),
          this._core.leave('rotating'));
      }),
      (e.prototype.pause = function () {
        this._core.is('rotating') &&
          !this._paused &&
          ((this._time = this.read()),
          (this._paused = !0),
          b.clearTimeout(this._call));
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    'use strict';
    var e = function (b) {
      (this._core = b),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          'prepared.owl.carousel': a.proxy(function (b) {
            b.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  a(b.content)
                    .find('[data-dot]')
                    .addBack('[data-dot]')
                    .attr('data-dot') +
                  '</div>',
              );
          }, this),
          'added.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 0, this._templates.pop());
          }, this),
          'remove.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 1);
          }, this),
          'changed.owl.carousel': a.proxy(function (a) {
            a.namespace && 'position' == a.property.name && this.draw();
          }, this),
          'initialized.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              !this._initialized &&
              (this._core.trigger('initialize', null, 'navigation'),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger('initialized', null, 'navigation'));
          }, this),
          'refreshed.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._initialized &&
              (this._core.trigger('refresh', null, 'navigation'),
              this.update(),
              this.draw(),
              this._core.trigger('refreshed', null, 'navigation'));
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (e.Defaults = {
      nav: !1,
      navText: [
        '<span aria-label="Previous">&#x2039;</span>',
        '<span aria-label="Next">&#x203a;</span>',
      ],
      navSpeed: !1,
      navElement: 'button type="button" role="presentation"',
      navContainer: !1,
      navContainerClass: 'owl-nav',
      navClass: ['owl-prev', 'owl-next'],
      slideBy: 1,
      dotClass: 'owl-dot',
      dotsClass: 'owl-dots',
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (e.prototype.initialize = function () {
        var b,
          c = this._core.settings;
        (this._controls.$relative = (
          c.navContainer
            ? a(c.navContainer)
            : a('<div>').addClass(c.navContainerClass).appendTo(this.$element)
        ).addClass('disabled')),
          (this._controls.$previous = a('<' + c.navElement + '>')
            .addClass(c.navClass[0])
            .html(c.navText[0])
            .prependTo(this._controls.$relative)
            .on(
              'click',
              a.proxy(function (a) {
                this.prev(c.navSpeed);
              }, this),
            )),
          (this._controls.$next = a('<' + c.navElement + '>')
            .addClass(c.navClass[1])
            .html(c.navText[1])
            .appendTo(this._controls.$relative)
            .on(
              'click',
              a.proxy(function (a) {
                this.next(c.navSpeed);
              }, this),
            )),
          c.dotsData ||
            (this._templates = [
              a('<button role="button">')
                .addClass(c.dotClass)
                .append(a('<span>'))
                .prop('outerHTML'),
            ]),
          (this._controls.$absolute = (
            c.dotsContainer
              ? a(c.dotsContainer)
              : a('<div>').addClass(c.dotsClass).appendTo(this.$element)
          ).addClass('disabled')),
          this._controls.$absolute.on(
            'click',
            'button',
            a.proxy(function (b) {
              var d = a(b.target).parent().is(this._controls.$absolute)
                ? a(b.target).index()
                : a(b.target).parent().index();
              b.preventDefault(), this.to(d, c.dotsSpeed);
            }, this),
          );
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
      }),
      (e.prototype.destroy = function () {
        var a, b, c, d, e;
        e = this._core.settings;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls)
          '$relative' === b && e.navContainer
            ? this._controls[b].html('')
            : this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))
          'function' != typeof this[c] && (this[c] = null);
      }),
      (e.prototype.update = function () {
        var a,
          b,
          c,
          d = this._core.clones().length / 2,
          e = d + this._core.items().length,
          f = this._core.maximum(!0),
          g = this._core.settings,
          h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if (
          ('page' !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
          g.dots || 'page' == g.slideBy)
        )
          for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
              if (
                (this._pages.push({
                  start: Math.min(f, a - d),
                  end: a - d + h - 1,
                }),
                Math.min(f, a - d) === f)
              )
                break;
              (b = 0), ++c;
            }
            b += this._core.mergers(this._core.relative(a));
          }
      }),
      (e.prototype.draw = function () {
        var b,
          c = this._core.settings,
          d = this._core.items().length <= c.items,
          e = this._core.relative(this._core.current()),
          f = c.loop || c.rewind;
        this._controls.$relative.toggleClass('disabled', !c.nav || d),
          c.nav &&
            (this._controls.$previous.toggleClass(
              'disabled',
              !f && e <= this._core.minimum(!0),
            ),
            this._controls.$next.toggleClass(
              'disabled',
              !f && e >= this._core.maximum(!0),
            )),
          this._controls.$absolute.toggleClass('disabled', !c.dots || d),
          c.dots &&
            ((b =
              this._pages.length - this._controls.$absolute.children().length),
            c.dotsData && 0 !== b
              ? this._controls.$absolute.html(this._templates.join(''))
              : b > 0
              ? this._controls.$absolute.append(
                  new Array(b + 1).join(this._templates[0]),
                )
              : b < 0 && this._controls.$absolute.children().slice(b).remove(),
            this._controls.$absolute.find('.active').removeClass('active'),
            this._controls.$absolute
              .children()
              .eq(a.inArray(this.current(), this._pages))
              .addClass('active'));
      }),
      (e.prototype.onTrigger = function (b) {
        var c = this._core.settings;
        b.page = {
          index: a.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            c &&
            (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items),
        };
      }),
      (e.prototype.current = function () {
        var b = this._core.relative(this._core.current());
        return a
          .grep(
            this._pages,
            a.proxy(function (a, c) {
              return a.start <= b && a.end >= b;
            }, this),
          )
          .pop();
      }),
      (e.prototype.getPosition = function (b) {
        var c,
          d,
          e = this._core.settings;
        return (
          'page' == e.slideBy
            ? ((c = a.inArray(this.current(), this._pages)),
              (d = this._pages.length),
              b ? ++c : --c,
              (c = this._pages[((c % d) + d) % d].start))
            : ((c = this._core.relative(this._core.current())),
              (d = this._core.items().length),
              b ? (c += e.slideBy) : (c -= e.slideBy)),
          c
        );
      }),
      (e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
      }),
      (e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
      }),
      (e.prototype.to = function (b, c, d) {
        var e;
        !d && this._pages.length
          ? ((e = this._pages.length),
            a.proxy(this._overrides.to, this._core)(
              this._pages[((b % e) + e) % e].start,
              c,
            ))
          : a.proxy(this._overrides.to, this._core)(b, c);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    'use strict';
    var e = function (c) {
      (this._core = c),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          'initialized.owl.carousel': a.proxy(function (c) {
            c.namespace &&
              'URLHash' === this._core.settings.startPosition &&
              a(b).trigger('hashchange.owl.navigation');
          }, this),
          'prepared.owl.carousel': a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content)
                .find('[data-hash]')
                .addBack('[data-hash]')
                .attr('data-hash');
              if (!c) return;
              this._hashes[c] = b.content;
            }
          }, this),
          'changed.owl.carousel': a.proxy(function (c) {
            if (c.namespace && 'position' === c.property.name) {
              var d = this._core.items(
                  this._core.relative(this._core.current()),
                ),
                e = a
                  .map(this._hashes, function (a, b) {
                    return a === d ? b : null;
                  })
                  .join();
              if (!e || b.location.hash.slice(1) === e) return;
              b.location.hash = e;
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        a(b).on(
          'hashchange.owl.navigation',
          a.proxy(function (a) {
            var c = b.location.hash.substring(1),
              e = this._core.$stage.children(),
              f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d &&
              f !== this._core.current() &&
              this._core.to(this._core.relative(f), !1, !0);
          }, this),
        );
    };
    (e.Defaults = { URLhashListener: !1 }),
      (e.prototype.destroy = function () {
        var c, d;
        a(b).off('hashchange.owl.navigation');
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))
          'function' != typeof this[d] && (this[d] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    function e(b, c) {
      var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1);
      return (
        a.each((b + ' ' + h.join(f + ' ') + f).split(' '), function (a, b) {
          if (g[b] !== d) return (e = !c || b), !1;
        }),
        e
      );
    }
    function f(a) {
      return e(a, !0);
    }
    var g = a('<support>').get(0).style,
      h = 'Webkit Moz O ms'.split(' '),
      i = {
        transition: {
          end: {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd',
            transition: 'transitionend',
          },
        },
        animation: {
          end: {
            WebkitAnimation: 'webkitAnimationEnd',
            MozAnimation: 'animationend',
            OAnimation: 'oAnimationEnd',
            animation: 'animationend',
          },
        },
      },
      j = {
        csstransforms: function () {
          return !!e('transform');
        },
        csstransforms3d: function () {
          return !!e('perspective');
        },
        csstransitions: function () {
          return !!e('transition');
        },
        cssanimations: function () {
          return !!e('animation');
        },
      };
    j.csstransitions() &&
      ((a.support.transition = new String(f('transition'))),
      (a.support.transition.end = i.transition.end[a.support.transition])),
      j.cssanimations() &&
        ((a.support.animation = new String(f('animation'))),
        (a.support.animation.end = i.animation.end[a.support.animation])),
      j.csstransforms() &&
        ((a.support.transform = new String(f('transform'))),
        (a.support.transform3d = j.csstransforms3d()));
  })(window.Zepto || window.jQuery, window, document);

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.9.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
(function (i) {
  'use strict';
  'function' == typeof define && define.amd
    ? define(['jquery'], i)
    : 'undefined' != typeof exports
    ? (module.exports = i(require('jquery')))
    : i(jQuery);
})(function (i) {
  'use strict';
  var e = window.Slick || {};
  (e = (function () {
    function e(e, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(e),
        appendDots: i(e),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Pre</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Nxt</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: '50px',
        cssEase: 'ease',
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: 'slick-dots',
        draggable: !0,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: 'window',
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: '',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = 'hidden'),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(e)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = 'visibilitychange'),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(e).data('slick') || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        'undefined' != typeof document.mozHidden
          ? ((n.hidden = 'mozHidden'),
            (n.visibilityChange = 'mozvisibilitychange'))
          : 'undefined' != typeof document.webkitHidden &&
            ((n.hidden = 'webkitHidden'),
            (n.visibilityChange = 'webkitvisibilitychange')),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = t++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    }
    var t = 0;
    return e;
  })()),
    (e.prototype.activateADA = function () {
      var i = this;
      i.$slideTrack
        .find('.slick-active')
        .attr({ 'aria-hidden': 'false' })
        .find('a, input, button, select')
        .attr({ tabindex: '0' });
    }),
    (e.prototype.addSlide = e.prototype.slickAdd =
      function (e, t, o) {
        var s = this;
        if ('boolean' == typeof t) (o = t), (t = null);
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(),
          'number' == typeof t
            ? 0 === t && 0 === s.$slides.length
              ? i(e).appendTo(s.$slideTrack)
              : o
              ? i(e).insertBefore(s.$slides.eq(t))
              : i(e).insertAfter(s.$slides.eq(t))
            : o === !0
            ? i(e).prependTo(s.$slideTrack)
            : i(e).appendTo(s.$slideTrack),
          (s.$slides = s.$slideTrack.children(this.options.slide)),
          s.$slideTrack.children(this.options.slide).detach(),
          s.$slideTrack.append(s.$slides),
          s.$slides.each(function (e, t) {
            i(t).attr('data-slick-index', e);
          }),
          (s.$slidesCache = s.$slides),
          s.reinit();
      }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        i.options.adaptiveHeight === !0 &&
        i.options.vertical === !1
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        s.options.rtl === !0 && s.options.vertical === !1 && (e = -e),
        s.transformsEnabled === !1
          ? s.options.vertical === !1
            ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                t,
              )
            : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                t,
              )
          : s.cssTransitions === !1
          ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    s.options.vertical === !1
                      ? ((o[s.animType] = 'translate(' + i + 'px, 0px)'),
                        s.$slideTrack.css(o))
                      : ((o[s.animType] = 'translate(0px,' + i + 'px)'),
                        s.$slideTrack.css(o));
                },
                complete: function () {
                  t && t.call();
                },
              },
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            s.options.vertical === !1
              ? (o[s.animType] = 'translate3d(' + e + 'px, 0px, 0px)')
              : (o[s.animType] = 'translate3d(0px,' + e + 'px, 0px)'),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function () {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var e = this,
        t = e.options.asNavFor;
      return t && null !== t && (t = i(t).not(e.$slider)), t;
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this,
        o = t.getNavTarget();
      null !== o &&
        'object' == typeof o &&
        o.each(function () {
          var t = i(this).slick('getSlick');
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      e.options.fade === !1
        ? (t[e.transitionType] =
            e.transformType + ' ' + e.options.speed + 'ms ' + e.options.cssEase)
        : (t[e.transitionType] =
            'opacity ' + e.options.speed + 'ms ' + e.options.cssEase),
        e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed,
          ));
    }),
    (e.prototype.autoPlayClear = function () {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (i.options.infinite === !1 &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 === 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      e.options.arrows === !0 &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass('slick-arrow')),
        (e.$nextArrow = i(e.options.nextArrow).addClass('slick-arrow')),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow
              .removeClass('slick-hidden')
              .removeAttr('aria-hidden tabindex'),
            e.$nextArrow
              .removeClass('slick-hidden')
              .removeAttr('aria-hidden tabindex'),
            e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
            e.options.infinite !== !0 &&
              e.$prevArrow
                .addClass('slick-disabled')
                .attr('aria-disabled', 'true'))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass('slick-hidden')
              .attr({ 'aria-disabled': 'true', tabindex: '-1' }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
        for (
          o.$slider.addClass('slick-dotted'),
            t = i('<ul />').addClass(o.options.dotsClass),
            e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i('<li />').append(o.options.customPaging.call(this, o, e)));
        (o.$dots = t.appendTo(o.options.appendDots)),
          o.$dots.find('li').first().addClass('slick-active');
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider
        .children(e.options.slide + ':not(.slick-cloned)')
        .addClass('slick-slide')),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr('data-slick-index', e)
            .data('originalStyling', i(t).attr('style') || '');
        }),
        e.$slider.addClass('slick-slider'),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css('opacity', 0),
        (e.options.centerMode !== !0 && e.options.swipeToSlide !== !0) ||
          (e.options.slidesToScroll = 1),
        i('img[data-lazy]', e.$slider).not('[src]').addClass('slick-loading'),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          'number' == typeof e.currentSlide ? e.currentSlide : 0,
        ),
        e.options.draggable === !0 && e.$list.addClass('draggable');
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (
        ((o = document.createDocumentFragment()),
        (n = l.$slider.children()),
        l.options.rows > 0)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
          i < s;
          i++
        ) {
          var d = document.createElement('div');
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement('div');
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + '%',
              display: 'inline-block',
            });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ('window' === r.respondTo
          ? (n = a)
          : 'slider' === r.respondTo
          ? (n = d)
          : 'min' === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        s = null;
        for (o in r.breakpoints)
          r.breakpoints.hasOwnProperty(o) &&
            (r.originalSettings.mobileFirst === !1
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              'unslick' === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s],
                  )),
                  e === !0 && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              'unslick' === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s],
                  )),
                  e === !0 && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            e === !0 && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || l === !1 || r.$slider.trigger('breakpoint', [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);
      switch (
        (l.is('a') && e.preventDefault(),
        l.is('li') || (l = l.closest('li')),
        (n = r.slideCount % r.options.slidesToScroll !== 0),
        (o = n
          ? 0
          : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case 'previous':
          (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide - s, !1, t);
          break;
        case 'next':
          (s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide + s, !1, t);
          break;
        case 'index':
          var d =
            0 === e.data.index
              ? 0
              : e.data.index || l.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger('focus');
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e,
        t,
        o = this;
      if (((e = o.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
        i = e[e.length - 1];
      else
        for (var s in e) {
          if (i < e[s]) {
            i = t;
            break;
          }
          t = e[s];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i('li', e.$dots)
          .off('click.slick', e.changeSlide)
          .off('mouseenter.slick', i.proxy(e.interrupt, e, !0))
          .off('mouseleave.slick', i.proxy(e.interrupt, e, !1)),
        e.options.accessibility === !0 &&
          e.$dots.off('keydown.slick', e.keyHandler)),
        e.$slider.off('focus.slick blur.slick'),
        e.options.arrows === !0 &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off('click.slick', e.changeSlide),
          e.$nextArrow && e.$nextArrow.off('click.slick', e.changeSlide),
          e.options.accessibility === !0 &&
            (e.$prevArrow && e.$prevArrow.off('keydown.slick', e.keyHandler),
            e.$nextArrow && e.$nextArrow.off('keydown.slick', e.keyHandler))),
        e.$list.off('touchstart.slick mousedown.slick', e.swipeHandler),
        e.$list.off('touchmove.slick mousemove.slick', e.swipeHandler),
        e.$list.off('touchend.slick mouseup.slick', e.swipeHandler),
        e.$list.off('touchcancel.slick mouseleave.slick', e.swipeHandler),
        e.$list.off('click.slick', e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        e.options.accessibility === !0 &&
          e.$list.off('keydown.slick', e.keyHandler),
        e.options.focusOnSelect === !0 &&
          i(e.$slideTrack).children().off('click.slick', e.selectHandler),
        i(window).off(
          'orientationchange.slick.slick-' + e.instanceUid,
          e.orientationChange,
        ),
        i(window).off('resize.slick.slick-' + e.instanceUid, e.resize),
        i('[draggable!=true]', e.$slideTrack).off(
          'dragstart',
          e.preventDefault,
        ),
        i(window).off('load.slick.slick-' + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off('mouseenter.slick', i.proxy(e.interrupt, e, !0)),
        e.$list.off('mouseleave.slick', i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this;
      e.options.rows > 0 &&
        ((i = e.$slides.children().children()),
        i.removeAttr('style'),
        e.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      var e = this;
      e.shouldClick === !1 &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i('.slick-cloned', t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass('slick-disabled slick-arrow slick-hidden')
            .removeAttr('aria-hidden aria-disabled tabindex')
            .css('display', ''),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass('slick-disabled slick-arrow slick-hidden')
            .removeAttr('aria-hidden aria-disabled tabindex')
            .css('display', ''),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass(
              'slick-slide slick-active slick-center slick-visible slick-current',
            )
            .removeAttr('aria-hidden')
            .removeAttr('data-slick-index')
            .each(function () {
              i(this).attr('style', i(this).data('originalStyling'));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass('slick-slider'),
        t.$slider.removeClass('slick-initialized'),
        t.$slider.removeClass('slick-dotted'),
        (t.unslicked = !0),
        e || t.$slider.trigger('destroy', [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ''),
        e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      t.cssTransitions === !1
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      e.cssTransitions === !1
        ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing,
            )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter =
      function (i) {
        var e = this;
        null !== i &&
          ((e.$slidesCache = e.$slides),
          e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.filter(i).appendTo(e.$slideTrack),
          e.reinit());
      }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider
        .off('focus.slick blur.slick')
        .on('focus.slick', '*', function (t) {
          var o = i(this);
          setTimeout(function () {
            e.options.pauseOnFocus &&
              o.is(':focus') &&
              ((e.focussed = !0), e.autoPlay());
          }, 0);
        })
        .on('blur.slick', '*', function (t) {
          i(this);
          e.options.pauseOnFocus && ((e.focussed = !1), e.autoPlay());
        });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
      function () {
        var i = this;
        return i.currentSlide;
      }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (i.options.infinite === !0)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow);
      else if (i.options.centerMode === !0) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow);
      else
        o =
          1 +
          Math.ceil(
            (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll,
          );
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        n.options.infinite === !0
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              n.options.vertical === !0 &&
                n.options.centerMode === !0 &&
                (2 === n.options.slidesToShow
                  ? (s = -1.5)
                  : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll !== 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset =
                    (n.options.slidesToShow - (i - n.slideCount)) *
                    n.slideWidth *
                    -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset =
                    (n.slideCount % n.options.slidesToScroll) *
                    n.slideWidth *
                    -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow &&
          ((n.slideOffset = 0), (r = 0)),
        n.options.centerMode === !0 && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
          : n.options.centerMode === !0 && n.options.infinite === !0
          ? (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
              n.slideWidth)
          : n.options.centerMode === !0 &&
            ((n.slideOffset = 0),
            (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e =
          n.options.vertical === !1
            ? i * n.slideWidth * -1 + n.slideOffset
            : i * t * -1 + r),
        n.options.variableWidth === !0 &&
          ((o =
            n.slideCount <= n.options.slidesToShow || n.options.infinite === !1
              ? n.$slideTrack.children('.slick-slide').eq(i)
              : n.$slideTrack
                  .children('.slick-slide')
                  .eq(i + n.options.slidesToShow)),
          (e =
            n.options.rtl === !0
              ? o[0]
                ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1
                : 0
              : o[0]
              ? o[0].offsetLeft * -1
              : 0),
          n.options.centerMode === !0 &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
              n.options.infinite === !1
                ? n.$slideTrack.children('.slick-slide').eq(i)
                : n.$slideTrack
                    .children('.slick-slide')
                    .eq(i + n.options.slidesToShow + 1)),
            (e =
              n.options.rtl === !0
                ? o[0]
                  ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1
                  : 0
                : o[0]
                ? o[0].offsetLeft * -1
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption =
      function (i) {
        var e = this;
        return e.options[i];
      }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        e.options.infinite === !1
          ? (i = e.slideCount)
          : ((t = e.options.slidesToScroll * -1),
            (o = e.options.slidesToScroll * -1),
            (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o,
        s,
        n = this;
      return (
        (s = n.options.centerMode === !0 ? Math.floor(n.$list.width() / 2) : 0),
        (o = n.swipeLeft * -1 + s),
        n.options.swipeToSlide === !0
          ? (n.$slideTrack.find('.slick-slide').each(function (e, s) {
              var r, l, d;
              if (
                ((r = i(s).outerWidth()),
                (l = s.offsetLeft),
                n.options.centerMode !== !0 && (l += r / 2),
                (d = l + r),
                o < d)
              )
                return (t = s), !1;
            }),
            (e = Math.abs(i(t).attr('data-slick-index') - n.currentSlide) || 1))
          : n.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo =
      function (i, e) {
        var t = this;
        t.changeSlide({ data: { message: 'index', index: parseInt(i) } }, e);
      }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass('slick-initialized') ||
        (i(t.$slider).addClass('slick-initialized'),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger('init', [t]),
        t.options.accessibility === !0 && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount;
        });
      e.$slides
        .add(e.$slideTrack.find('.slick-cloned'))
        .attr({ 'aria-hidden': 'true', tabindex: '-1' })
        .find('a, input, button, select')
        .attr({ tabindex: '-1' }),
        null !== e.$dots &&
          (e.$slides
            .not(e.$slideTrack.find('.slick-cloned'))
            .each(function (t) {
              var s = o.indexOf(t);
              if (
                (i(this).attr({
                  role: 'tabpanel',
                  id: 'slick-slide' + e.instanceUid + t,
                  tabindex: -1,
                }),
                s !== -1)
              ) {
                var n = 'slick-slide-control' + e.instanceUid + s;
                i('#' + n).length && i(this).attr({ 'aria-describedby': n });
              }
            }),
          e.$dots
            .attr('role', 'tablist')
            .find('li')
            .each(function (s) {
              var n = o[s];
              i(this).attr({ role: 'presentation' }),
                i(this)
                  .find('button')
                  .first()
                  .attr({
                    role: 'tab',
                    id: 'slick-slide-control' + e.instanceUid + s,
                    'aria-controls': 'slick-slide' + e.instanceUid + n,
                    'aria-label': s + 1 + ' of ' + t,
                    'aria-selected': null,
                    tabindex: '-1',
                  });
            })
            .eq(e.currentSlide)
            .find('button')
            .attr({ 'aria-selected': 'true', tabindex: '0' })
            .end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
        e.options.focusOnChange
          ? e.$slides.eq(s).attr({ tabindex: '0' })
          : e.$slides.eq(s).removeAttr('tabindex');
      e.activateADA();
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      i.options.arrows === !0 &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow
          .off('click.slick')
          .on('click.slick', { message: 'previous' }, i.changeSlide),
        i.$nextArrow
          .off('click.slick')
          .on('click.slick', { message: 'next' }, i.changeSlide),
        i.options.accessibility === !0 &&
          (i.$prevArrow.on('keydown.slick', i.keyHandler),
          i.$nextArrow.on('keydown.slick', i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      e.options.dots === !0 &&
        e.slideCount > e.options.slidesToShow &&
        (i('li', e.$dots).on(
          'click.slick',
          { message: 'index' },
          e.changeSlide,
        ),
        e.options.accessibility === !0 &&
          e.$dots.on('keydown.slick', e.keyHandler)),
        e.options.dots === !0 &&
          e.options.pauseOnDotsHover === !0 &&
          e.slideCount > e.options.slidesToShow &&
          i('li', e.$dots)
            .on('mouseenter.slick', i.proxy(e.interrupt, e, !0))
            .on('mouseleave.slick', i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on('mouseenter.slick', i.proxy(e.interrupt, e, !0)),
        e.$list.on('mouseleave.slick', i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on(
          'touchstart.slick mousedown.slick',
          { action: 'start' },
          e.swipeHandler,
        ),
        e.$list.on(
          'touchmove.slick mousemove.slick',
          { action: 'move' },
          e.swipeHandler,
        ),
        e.$list.on(
          'touchend.slick mouseup.slick',
          { action: 'end' },
          e.swipeHandler,
        ),
        e.$list.on(
          'touchcancel.slick mouseleave.slick',
          { action: 'end' },
          e.swipeHandler,
        ),
        e.$list.on('click.slick', e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        e.options.accessibility === !0 &&
          e.$list.on('keydown.slick', e.keyHandler),
        e.options.focusOnSelect === !0 &&
          i(e.$slideTrack).children().on('click.slick', e.selectHandler),
        i(window).on(
          'orientationchange.slick.slick-' + e.instanceUid,
          i.proxy(e.orientationChange, e),
        ),
        i(window).on(
          'resize.slick.slick-' + e.instanceUid,
          i.proxy(e.resize, e),
        ),
        i('[draggable!=true]', e.$slideTrack).on('dragstart', e.preventDefault),
        i(window).on('load.slick.slick-' + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      i.options.arrows === !0 &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        i.options.dots === !0 &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match('TEXTAREA|INPUT|SELECT') ||
        (37 === i.keyCode && e.options.accessibility === !0
          ? e.changeSlide({
              data: { message: e.options.rtl === !0 ? 'next' : 'previous' },
            })
          : 39 === i.keyCode &&
            e.options.accessibility === !0 &&
            e.changeSlide({
              data: { message: e.options.rtl === !0 ? 'previous' : 'next' },
            }));
    }),
    (e.prototype.lazyLoad = function () {
      function e(e) {
        i('img[data-lazy]', e).each(function () {
          var e = i(this),
            t = i(this).attr('data-lazy'),
            o = i(this).attr('data-srcset'),
            s = i(this).attr('data-sizes') || r.$slider.attr('data-sizes'),
            n = document.createElement('img');
          (n.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr('srcset', o), s && e.attr('sizes', s)),
                e.attr('src', t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr('data-lazy data-srcset data-sizes').removeClass(
                    'slick-loading',
                  );
                }),
                r.$slider.trigger('lazyLoaded', [r, e, t]);
            });
          }),
            (n.onerror = function () {
              e
                .removeAttr('data-lazy')
                .removeClass('slick-loading')
                .addClass('slick-lazyload-error'),
                r.$slider.trigger('lazyLoadError', [r, e, t]);
            }),
            (n.src = t);
        });
      }
      var t,
        o,
        s,
        n,
        r = this;
      if (
        (r.options.centerMode === !0
          ? r.options.infinite === !0
            ? ((s = r.currentSlide + (r.options.slidesToShow / 2 + 1)),
              (n = s + r.options.slidesToShow + 2))
            : ((s = Math.max(
                0,
                r.currentSlide - (r.options.slidesToShow / 2 + 1),
              )),
              (n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide))
          : ((s = r.options.infinite
              ? r.options.slidesToShow + r.currentSlide
              : r.currentSlide),
            (n = Math.ceil(s + r.options.slidesToShow)),
            r.options.fade === !0 && (s > 0 && s--, n <= r.slideCount && n++)),
        (t = r.$slider.find('.slick-slide').slice(s, n)),
        'anticipated' === r.options.lazyLoad)
      )
        for (
          var l = s - 1, d = n, a = r.$slider.find('.slick-slide'), c = 0;
          c < r.options.slidesToScroll;
          c++
        )
          l < 0 && (l = r.slideCount - 1),
            (t = t.add(a.eq(l))),
            (t = t.add(a.eq(d))),
            l--,
            d++;
      e(t),
        r.slideCount <= r.options.slidesToShow
          ? ((o = r.$slider.find('.slick-slide')), e(o))
          : r.currentSlide >= r.slideCount - r.options.slidesToShow
          ? ((o = r.$slider
              .find('.slick-cloned')
              .slice(0, r.options.slidesToShow)),
            e(o))
          : 0 === r.currentSlide &&
            ((o = r.$slider
              .find('.slick-cloned')
              .slice(r.options.slidesToShow * -1)),
            e(o));
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass('slick-loading'),
        i.initUI(),
        'progressive' === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext =
      function () {
        var i = this;
        i.changeSlide({ data: { message: 'next' } });
      }),
    (e.prototype.orientationChange = function () {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause =
      function () {
        var i = this;
        i.autoPlayClear(), (i.paused = !0);
      }),
    (e.prototype.play = e.prototype.slickPlay =
      function () {
        var i = this;
        i.autoPlay(),
          (i.options.autoplay = !0),
          (i.paused = !1),
          (i.focussed = !1),
          (i.interrupted = !1);
      }),
    (e.prototype.postSlide = function (e) {
      var t = this;
      if (
        !t.unslicked &&
        (t.$slider.trigger('afterChange', [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        t.options.accessibility === !0 &&
          (t.initADA(), t.options.focusOnChange))
      ) {
        var o = i(t.$slides.get(t.currentSlide));
        o.attr('tabindex', 0).focus();
      }
    }),
    (e.prototype.prev = e.prototype.slickPrev =
      function () {
        var i = this;
        i.changeSlide({ data: { message: 'previous' } });
      }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i('img[data-lazy]', l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr('data-lazy')),
          (s = t.attr('data-srcset')),
          (n = t.attr('data-sizes') || l.$slider.attr('data-sizes')),
          (r = document.createElement('img')),
          (r.onload = function () {
            s && (t.attr('srcset', s), n && t.attr('sizes', n)),
              t
                .attr('src', o)
                .removeAttr('data-lazy data-srcset data-sizes')
                .removeClass('slick-loading'),
              l.options.adaptiveHeight === !0 && l.setPosition(),
              l.$slider.trigger('lazyLoaded', [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
              : (t
                  .removeAttr('data-lazy')
                  .removeClass('slick-loading')
                  .addClass('slick-lazyload-error'),
                l.$slider.trigger('lazyLoadError', [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger('allImagesLoaded', [l]);
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: 'index', index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ('array' === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || 'window';
        for (e in n)
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] &&
                s.breakpoints[o] === t &&
                s.breakpoints.splice(o, 1),
                o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass('slick-slide')),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        e.options.focusOnSelect === !0 &&
          i(e.$slideTrack).children().on('click.slick', e.selectHandler),
        e.setSlideClasses(
          'number' == typeof e.currentSlide ? e.currentSlide : 0,
        ),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger('reInit', [e]);
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = i(window).width()),
            e.checkResponsive(),
            e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove =
      function (i, e, t) {
        var o = this;
        return (
          'boolean' == typeof i
            ? ((e = i), (i = e === !0 ? 0 : o.slideCount - 1))
            : (i = e === !0 ? --i : i),
          !(o.slideCount < 1 || i < 0 || i > o.slideCount - 1) &&
            (o.unload(),
            t === !0
              ? o.$slideTrack.children().remove()
              : o.$slideTrack.children(this.options.slide).eq(i).remove(),
            (o.$slides = o.$slideTrack.children(this.options.slide)),
            o.$slideTrack.children(this.options.slide).detach(),
            o.$slideTrack.append(o.$slides),
            (o.$slidesCache = o.$slides),
            void o.reinit())
        );
      }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      o.options.rtl === !0 && (i = -i),
        (e = 'left' == o.positionProp ? Math.ceil(i) + 'px' : '0px'),
        (t = 'top' == o.positionProp ? Math.ceil(i) + 'px' : '0px'),
        (s[o.positionProp] = i),
        o.transformsEnabled === !1
          ? o.$slideTrack.css(s)
          : ((s = {}),
            o.cssTransitions === !1
              ? ((s[o.animType] = 'translate(' + e + ', ' + t + ')'),
                o.$slideTrack.css(s))
              : ((s[o.animType] = 'translate3d(' + e + ', ' + t + ', 0px)'),
                o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      i.options.vertical === !1
        ? i.options.centerMode === !0 &&
          i.$list.css({ padding: '0px ' + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow,
          ),
          i.options.centerMode === !0 &&
            i.$list.css({ padding: i.options.centerPadding + ' 0px' })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        i.options.vertical === !1 && i.options.variableWidth === !1
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children('.slick-slide').length,
              ),
            ))
          : i.options.variableWidth === !0
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(
                i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children('.slick-slide').length,
              ),
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      i.options.variableWidth === !1 &&
        i.$slideTrack.children('.slick-slide').width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          t.options.rtl === !0
            ? i(s).css({
                position: 'relative',
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
            : i(s).css({
                position: 'relative',
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              });
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        i.options.adaptiveHeight === !0 &&
        i.options.vertical === !1
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css('height', e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption =
      function () {
        var e,
          t,
          o,
          s,
          n,
          r = this,
          l = !1;
        if (
          ('object' === i.type(arguments[0])
            ? ((o = arguments[0]), (l = arguments[1]), (n = 'multiple'))
            : 'string' === i.type(arguments[0]) &&
              ((o = arguments[0]),
              (s = arguments[1]),
              (l = arguments[2]),
              'responsive' === arguments[0] && 'array' === i.type(arguments[1])
                ? (n = 'responsive')
                : 'undefined' != typeof arguments[1] && (n = 'single')),
          'single' === n)
        )
          r.options[o] = s;
        else if ('multiple' === n)
          i.each(o, function (i, e) {
            r.options[i] = e;
          });
        else if ('responsive' === n)
          for (t in s)
            if ('array' !== i.type(r.options.responsive))
              r.options.responsive = [s[t]];
            else {
              for (e = r.options.responsive.length - 1; e >= 0; )
                r.options.responsive[e].breakpoint === s[t].breakpoint &&
                  r.options.responsive.splice(e, 1),
                  e--;
              r.options.responsive.push(s[t]);
            }
        l && (r.unload(), r.reinit());
      }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        i.options.fade === !1
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger('setPosition', [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = i.options.vertical === !0 ? 'top' : 'left'),
        'top' === i.positionProp
          ? i.$slider.addClass('slick-vertical')
          : i.$slider.removeClass('slick-vertical'),
        (void 0 === e.WebkitTransition &&
          void 0 === e.MozTransition &&
          void 0 === e.msTransition) ||
          (i.options.useCSS === !0 && (i.cssTransitions = !0)),
        i.options.fade &&
          ('number' == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = 'OTransform'),
          (i.transformType = '-o-transform'),
          (i.transitionType = 'OTransition'),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = 'MozTransform'),
          (i.transformType = '-moz-transform'),
          (i.transitionType = 'MozTransition'),
          void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = 'webkitTransform'),
          (i.transformType = '-webkit-transform'),
          (i.transitionType = 'webkitTransition'),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = 'msTransform'),
          (i.transformType = '-ms-transform'),
          (i.transitionType = 'msTransition'),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          i.animType !== !1 &&
          ((i.animType = 'transform'),
          (i.transformType = 'transform'),
          (i.transitionType = 'transition')),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && i.animType !== !1);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find('.slick-slide')
          .removeClass('slick-active slick-center slick-current')
          .attr('aria-hidden', 'true')),
        n.$slides.eq(i).addClass('slick-current'),
        n.options.centerMode === !0)
      ) {
        var r = n.options.slidesToShow % 2 === 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          n.options.infinite === !0 &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false')
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false')),
            0 === i
              ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass('slick-center')
              : i === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass('slick-center')),
          n.$slides.eq(i).addClass('slick-center');
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass('slick-active')
              .attr('aria-hidden', 'false')
          : t.length <= n.options.slidesToShow
          ? t.addClass('slick-active').attr('aria-hidden', 'false')
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = n.options.infinite === !0 ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll &&
            n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false')
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false'));
      ('ondemand' !== n.options.lazyLoad &&
        'anticipated' !== n.options.lazyLoad) ||
        n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (s.options.fade === !0 && (s.options.centerMode = !1),
        s.options.infinite === !0 &&
          s.options.fade === !1 &&
          ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o =
            s.options.centerMode === !0
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr('id', '')
              .attr('data-slick-index', t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass('slick-cloned');
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr('id', '')
              .attr('data-slick-index', t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass('slick-cloned');
        s.$slideTrack
          .find('.slick-cloned')
          .find('[id]')
          .each(function () {
            i(this).attr('id', '');
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      var e = this;
      i || e.autoPlay(), (e.interrupted = i);
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is('.slick-slide')
          ? i(e.target)
          : i(e.target).parents('.slick-slide'),
        s = parseInt(o.attr('data-slick-index'));
      return (
        s || (s = 0),
        t.slideCount <= t.options.slidesToShow
          ? void t.slideHandler(s, !1, !0)
          : void t.slideHandler(s)
      );
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((e = e || !1),
        !(
          (a.animating === !0 && a.options.waitForAnimate === !0) ||
          (a.options.fade === !0 && a.currentSlide === i)
        ))
      )
        return (
          e === !1 && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          a.options.infinite === !1 &&
          a.options.centerMode === !1 &&
          (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)
            ? void (
                a.options.fade === !1 &&
                ((o = a.currentSlide),
                t !== !0 && a.slideCount > a.options.slidesToShow
                  ? a.animateSlide(r, function () {
                      a.postSlide(o);
                    })
                  : a.postSlide(o))
              )
            : a.options.infinite === !1 &&
              a.options.centerMode === !0 &&
              (i < 0 || i > a.slideCount - a.options.slidesToScroll)
            ? void (
                a.options.fade === !1 &&
                ((o = a.currentSlide),
                t !== !0 && a.slideCount > a.options.slidesToShow
                  ? a.animateSlide(r, function () {
                      a.postSlide(o);
                    })
                  : a.postSlide(o))
              )
            : (a.options.autoplay && clearInterval(a.autoPlayTimer),
              (s =
                o < 0
                  ? a.slideCount % a.options.slidesToScroll !== 0
                    ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                    : a.slideCount + o
                  : o >= a.slideCount
                  ? a.slideCount % a.options.slidesToScroll !== 0
                    ? 0
                    : o - a.slideCount
                  : o),
              (a.animating = !0),
              a.$slider.trigger('beforeChange', [a, a.currentSlide, s]),
              (n = a.currentSlide),
              (a.currentSlide = s),
              a.setSlideClasses(a.currentSlide),
              a.options.asNavFor &&
                ((l = a.getNavTarget()),
                (l = l.slick('getSlick')),
                l.slideCount <= l.options.slidesToShow &&
                  l.setSlideClasses(a.currentSlide)),
              a.updateDots(),
              a.updateArrows(),
              a.options.fade === !0
                ? (t !== !0
                    ? (a.fadeSlideOut(n),
                      a.fadeSlide(s, function () {
                        a.postSlide(s);
                      }))
                    : a.postSlide(s),
                  void a.animateHeight())
                : void (t !== !0 && a.slideCount > a.options.slidesToShow
                    ? a.animateSlide(d, function () {
                        a.postSlide(s);
                      })
                    : a.postSlide(s)))
        );
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      i.options.arrows === !0 &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        i.options.dots === !0 &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
        i.$slider.addClass('slick-loading');
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)),
        o < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? s.options.rtl === !1
            ? 'left'
            : 'right'
          : o <= 360 && o >= 315
          ? s.options.rtl === !1
            ? 'left'
            : 'right'
          : o >= 135 && o <= 225
          ? s.options.rtl === !1
            ? 'right'
            : 'left'
          : s.options.verticalSwiping === !0
          ? o >= 35 && o <= 135
            ? 'down'
            : 'up'
          : 'vertical'
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
        return (o.scrolling = !1), !1;
      if (
        ((o.interrupted = !1),
        (o.shouldClick = !(o.touchObject.swipeLength > 10)),
        void 0 === o.touchObject.curX)
      )
        return !1;
      if (
        (o.touchObject.edgeHit === !0 &&
          o.$slider.trigger('edge', [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case 'left':
          case 'down':
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case 'right':
          case 'up':
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        'vertical' != t &&
          (o.slideHandler(e),
          (o.touchObject = {}),
          o.$slider.trigger('swipe', [o, t]));
      } else
        o.touchObject.startX !== o.touchObject.curX &&
          (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          e.options.swipe === !1 ||
          ('ontouchend' in document && e.options.swipe === !1) ||
          (e.options.draggable === !1 && i.type.indexOf('mouse') !== -1)
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          e.options.verticalSwiping === !0 &&
            (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case 'start':
            e.swipeStart(i);
            break;
          case 'move':
            e.swipeMove(i);
            break;
          case 'end':
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2)),
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2)),
          )),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (l.options.verticalSwiping === !0 &&
                (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent &&
                l.touchObject.swipeLength > 4 &&
                ((l.swiping = !0), i.preventDefault()),
              (s =
                (l.options.rtl === !1 ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              l.options.verticalSwiping === !0 &&
                (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              l.options.infinite === !1 &&
                ((0 === l.currentSlide && 'right' === t) ||
                  (l.currentSlide >= l.getDotCount() && 'left' === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              l.options.vertical === !1
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              l.options.verticalSwiping === !0 && (l.swipeLeft = e + o * s),
              l.options.fade !== !0 &&
                l.options.touchMove !== !1 &&
                (l.animating === !0
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      return (
        (t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
        t.slideCount <= t.options.slidesToShow
          ? ((t.touchObject = {}), !1)
          : (void 0 !== i.originalEvent &&
              void 0 !== i.originalEvent.touches &&
              (e = i.originalEvent.touches[0]),
            (t.touchObject.startX = t.touchObject.curX =
              void 0 !== e ? e.pageX : i.clientX),
            (t.touchObject.startY = t.touchObject.curY =
              void 0 !== e ? e.pageY : i.clientY),
            void (t.dragging = !0))
      );
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
      function () {
        var i = this;
        null !== i.$slidesCache &&
          (i.unload(),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slidesCache.appendTo(i.$slideTrack),
          i.reinit());
      }),
    (e.prototype.unload = function () {
      var e = this;
      i('.slick-cloned', e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
        e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
        e.$slides
          .removeClass('slick-slide slick-active slick-visible slick-current')
          .attr('aria-hidden', 'true')
          .css('width', '');
    }),
    (e.prototype.unslick = function (i) {
      var e = this;
      e.$slider.trigger('unslick', [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i,
        e = this;
      (i = Math.floor(e.options.slidesToShow / 2)),
        e.options.arrows === !0 &&
          e.slideCount > e.options.slidesToShow &&
          !e.options.infinite &&
          (e.$prevArrow
            .removeClass('slick-disabled')
            .attr('aria-disabled', 'false'),
          e.$nextArrow
            .removeClass('slick-disabled')
            .attr('aria-disabled', 'false'),
          0 === e.currentSlide
            ? (e.$prevArrow
                .addClass('slick-disabled')
                .attr('aria-disabled', 'true'),
              e.$nextArrow
                .removeClass('slick-disabled')
                .attr('aria-disabled', 'false'))
            : e.currentSlide >= e.slideCount - e.options.slidesToShow &&
              e.options.centerMode === !1
            ? (e.$nextArrow
                .addClass('slick-disabled')
                .attr('aria-disabled', 'true'),
              e.$prevArrow
                .removeClass('slick-disabled')
                .attr('aria-disabled', 'false'))
            : e.currentSlide >= e.slideCount - 1 &&
              e.options.centerMode === !0 &&
              (e.$nextArrow
                .addClass('slick-disabled')
                .attr('aria-disabled', 'true'),
              e.$prevArrow
                .removeClass('slick-disabled')
                .attr('aria-disabled', 'false')));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find('li').removeClass('slick-active').end(),
        i.$dots
          .find('li')
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass('slick-active'));
    }),
    (e.prototype.visibility = function () {
      var i = this;
      i.options.autoplay &&
        (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++)
        if (
          ('object' == typeof s || 'undefined' == typeof s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          'undefined' != typeof t)
        )
          return t;
      return o;
    });
});

/*
 slick-animation.js

 Version: 0.3.3 Beta
 Author: Marvin Hübner
 Docs: https://github.com/marvinhuebner/slick-animation
 Repo: https://github.com/marvinhuebner/slick-animation
 */
!(function (a) {
  a.fn.slickAnimation = function () {
    function n(a, n, t, i, o) {
      (o = 'undefined' != typeof o ? o : !1),
        1 == n.opacity
          ? (a.addClass(t), a.addClass(i))
          : (a.removeClass(t), a.removeClass(i)),
        o && a.css(n);
    }
    function t(a, n) {
      return a ? 1e3 * a + 1e3 : n ? 1e3 * n : a || n ? 1e3 * a + 1e3 * n : 1e3;
    }
    function i(a, n, t) {
      var i = [
          'animation-' + n,
          '-webkit-animation-' + n,
          '-moz-animation-' + n,
          '-o-animation-' + n,
          '-ms-animation-' + n,
        ],
        o = {};
      i.forEach(function (a) {
        o[a] = t + 's';
      }),
        a.css(o);
    }
    var o = a(this),
      e = o.find('.slick-list .slick-track > div'),
      s = o.find('[data-slick-index="0"]'),
      r = 'animated',
      c = { opacity: '1' },
      d = { opacity: '0' };
    return (
      e.each(function () {
        var e = a(this);
        e.find('[data-animation-in]').each(function () {
          var u = a(this);
          u.css(d);
          var l = u.attr('data-animation-in'),
            f = u.attr('data-animation-out'),
            h = u.attr('data-delay-in'),
            m = u.attr('data-duration-in'),
            y = u.attr('data-delay-out'),
            C = u.attr('data-duration-out');
          f
            ? (s.length > 0 &&
                e.hasClass('slick-current') &&
                (n(u, c, l, r, !0),
                h && i(u, 'delay', h),
                m && i(u, 'duration', m),
                setTimeout(function () {
                  n(u, d, l, r),
                    n(u, c, f, r),
                    y && i(u, 'delay', y),
                    C && i(u, 'duration', C);
                }, t(h, m))),
              o.on('afterChange', function (a, o, s) {
                e.hasClass('slick-current') &&
                  (n(u, c, l, r, !0),
                  h && i(u, 'delay', h),
                  m && i(u, 'duration', m),
                  setTimeout(function () {
                    n(u, d, l, r),
                      n(u, c, f, r),
                      y && i(u, 'delay', y),
                      C && i(u, 'duration', C);
                  }, t(h, m)));
              }),
              o.on('beforeChange', function (a, t, i) {
                n(u, d, f, r, !0);
              }))
            : (s.length > 0 &&
                e.hasClass('slick-current') &&
                (n(u, c, l, r, !0),
                h && i(u, 'delay', h),
                m && i(u, 'duration', m)),
              o.on('afterChange', function (a, t, o) {
                e.hasClass('slick-current') &&
                  (n(u, c, l, r, !0),
                  h && i(u, 'delay', h),
                  m && i(u, 'duration', m));
              }),
              o.on('beforeChange', function (a, t, i) {
                n(u, d, l, r, !0);
              }));
        });
      }),
      this
    );
  };
})(jQuery);

/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!(function (a) {
  'use strict';
  'function' == typeof define && define.amd ? define(['jquery'], a) : a(jQuery);
})(function (a) {
  'use strict';
  function b(a) {
    if (a instanceof Date) return a;
    if (String(a).match(g))
      return (
        String(a).match(/^[0-9]*$/) && (a = Number(a)),
        String(a).match(/\-/) && (a = String(a).replace(/\-/g, '/')),
        new Date(a)
      );
    throw new Error("Couldn't cast `" + a + '` to a date object.');
  }
  function c(a) {
    var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    return new RegExp(b);
  }
  function d(a) {
    return function (b) {
      var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
      if (d)
        for (var f = 0, g = d.length; f < g; ++f) {
          var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
            j = c(h[0]),
            k = h[1] || '',
            l = h[3] || '',
            m = null;
          (h = h[2]),
            i.hasOwnProperty(h) && ((m = i[h]), (m = Number(a[m]))),
            null !== m &&
              ('!' === k && (m = e(l, m)),
              '' === k && m < 10 && (m = '0' + m.toString()),
              (b = b.replace(j, m.toString())));
        }
      return (b = b.replace(/%%/, '%'));
    };
  }
  function e(a, b) {
    var c = 's',
      d = '';
    return (
      a &&
        ((a = a.replace(/(:|;|\s)/gi, '').split(/\,/)),
        1 === a.length ? (c = a[0]) : ((d = a[0]), (c = a[1]))),
      Math.abs(b) > 1 ? c : d
    );
  }
  var f = [],
    g = [],
    h = { precision: 100, elapse: !1, defer: !1 };
  g.push(/^[0-9]*$/.source),
    g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    (g = new RegExp(g.join('|')));
  var i = {
      Y: 'years',
      m: 'months',
      n: 'daysToMonth',
      d: 'daysToWeek',
      w: 'weeks',
      W: 'weeksToMonth',
      H: 'hours',
      M: 'minutes',
      S: 'seconds',
      D: 'totalDays',
      I: 'totalHours',
      N: 'totalMinutes',
      T: 'totalSeconds',
    },
    j = function (b, c, d) {
      (this.el = b),
        (this.$el = a(b)),
        (this.interval = null),
        (this.offset = {}),
        (this.options = a.extend({}, h)),
        (this.firstTick = !0),
        (this.instanceNumber = f.length),
        f.push(this),
        this.$el.data('countdown-instance', this.instanceNumber),
        d &&
          ('function' == typeof d
            ? (this.$el.on('update.countdown', d),
              this.$el.on('stoped.countdown', d),
              this.$el.on('finish.countdown', d))
            : (this.options = a.extend({}, h, d))),
        this.setFinalDate(c),
        this.options.defer === !1 && this.start();
    };
  a.extend(j.prototype, {
    start: function () {
      null !== this.interval && clearInterval(this.interval);
      var a = this;
      this.update(),
        (this.interval = setInterval(function () {
          a.update.call(a);
        }, this.options.precision));
    },
    stop: function () {
      clearInterval(this.interval),
        (this.interval = null),
        this.dispatchEvent('stoped');
    },
    toggle: function () {
      this.interval ? this.stop() : this.start();
    },
    pause: function () {
      this.stop();
    },
    resume: function () {
      this.start();
    },
    remove: function () {
      this.stop.call(this),
        (f[this.instanceNumber] = null),
        delete this.$el.data().countdownInstance;
    },
    setFinalDate: function (a) {
      this.finalDate = b(a);
    },
    update: function () {
      if (0 === this.$el.closest('html').length) return void this.remove();
      var a,
        b = new Date();
      return (
        (a = this.finalDate.getTime() - b.getTime()),
        (a = Math.ceil(a / 1e3)),
        (a = !this.options.elapse && a < 0 ? 0 : Math.abs(a)),
        this.totalSecsLeft === a || this.firstTick
          ? void (this.firstTick = !1)
          : ((this.totalSecsLeft = a),
            (this.elapsed = b >= this.finalDate),
            (this.offset = {
              seconds: this.totalSecsLeft % 60,
              minutes: Math.floor(this.totalSecsLeft / 60) % 60,
              hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
              days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
              daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
              daysToMonth: Math.floor(
                (this.totalSecsLeft / 60 / 60 / 24) % 30.4368,
              ),
              weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
              weeksToMonth:
                Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
              months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
              years: Math.abs(this.finalDate.getFullYear() - b.getFullYear()),
              totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
              totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
              totalMinutes: Math.floor(this.totalSecsLeft / 60),
              totalSeconds: this.totalSecsLeft,
            }),
            void (this.options.elapse || 0 !== this.totalSecsLeft
              ? this.dispatchEvent('update')
              : (this.stop(), this.dispatchEvent('finish'))))
      );
    },
    dispatchEvent: function (b) {
      var c = a.Event(b + '.countdown');
      (c.finalDate = this.finalDate),
        (c.elapsed = this.elapsed),
        (c.offset = a.extend({}, this.offset)),
        (c.strftime = d(this.offset)),
        this.$el.trigger(c);
    },
  }),
    (a.fn.countdown = function () {
      var b = Array.prototype.slice.call(arguments, 0);
      return this.each(function () {
        var c = a(this).data('countdown-instance');
        if (void 0 !== c) {
          var d = f[c],
            e = b[0];
          j.prototype.hasOwnProperty(e)
            ? d[e].apply(d, b.slice(1))
            : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)
            ? (d.setFinalDate.call(d, e), d.start())
            : a.error(
                'Method %s does not exist on jQuery.countdown'.replace(
                  /\%s/gi,
                  e,
                ),
              );
        } else new j(this, b[0], b[1]);
      });
    });
});

/*-------------------------------------------------------------
jQuery UI / price range 
---------------------------------------------------------------*/

/*! jQuery UI - v1.11.4 - 2016-06-07
 * http://jqueryui.com
 * Includes: core.js, widget.js, mouse.js, slider.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (e) {
  'function' == typeof define && define.amd ? define(['jquery'], e) : e(jQuery);
})(function (e) {
  function t(t, s) {
    var n,
      a,
      o,
      r = t.nodeName.toLowerCase();
    return 'area' === r
      ? ((n = t.parentNode),
        (a = n.name),
        t.href && a && 'map' === n.nodeName.toLowerCase()
          ? ((o = e("img[usemap='#" + a + "']")[0]), !!o && i(o))
          : !1)
      : (/^(input|select|textarea|button|object)$/.test(r)
          ? !t.disabled
          : 'a' === r
          ? t.href || s
          : s) && i(t);
  }
  function i(t) {
    return (
      e.expr.filters.visible(t) &&
      !e(t)
        .parents()
        .addBack()
        .filter(function () {
          return 'hidden' === e.css(this, 'visibility');
        }).length
    );
  }
  (e.ui = e.ui || {}),
    e.extend(e.ui, {
      version: '1.11.4',
      keyCode: {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38,
      },
    }),
    e.fn.extend({
      scrollParent: function (t) {
        var i = this.css('position'),
          s = 'absolute' === i,
          n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
          a = this.parents()
            .filter(function () {
              var t = e(this);
              return s && 'static' === t.css('position')
                ? !1
                : n.test(
                    t.css('overflow') +
                      t.css('overflow-y') +
                      t.css('overflow-x'),
                  );
            })
            .eq(0);
        return 'fixed' !== i && a.length
          ? a
          : e(this[0].ownerDocument || document);
      },
      uniqueId: (function () {
        var e = 0;
        return function () {
          return this.each(function () {
            this.id || (this.id = 'ui-id-' + ++e);
          });
        };
      })(),
      removeUniqueId: function () {
        return this.each(function () {
          /^ui-id-\d+$/.test(this.id) && e(this).removeAttr('id');
        });
      },
    }),
    e.extend(e.expr[':'], {
      data: e.expr.createPseudo
        ? e.expr.createPseudo(function (t) {
            return function (i) {
              return !!e.data(i, t);
            };
          })
        : function (t, i, s) {
            return !!e.data(t, s[3]);
          },
      focusable: function (i) {
        return t(i, !isNaN(e.attr(i, 'tabindex')));
      },
      tabbable: function (i) {
        var s = e.attr(i, 'tabindex'),
          n = isNaN(s);
        return (n || s >= 0) && t(i, !n);
      },
    }),
    e('<a>').outerWidth(1).jquery ||
      e.each(['Width', 'Height'], function (t, i) {
        function s(t, i, s, a) {
          return (
            e.each(n, function () {
              (i -= parseFloat(e.css(t, 'padding' + this)) || 0),
                s &&
                  (i -= parseFloat(e.css(t, 'border' + this + 'Width')) || 0),
                a && (i -= parseFloat(e.css(t, 'margin' + this)) || 0);
            }),
            i
          );
        }
        var n = 'Width' === i ? ['Left', 'Right'] : ['Top', 'Bottom'],
          a = i.toLowerCase(),
          o = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight,
          };
        (e.fn['inner' + i] = function (t) {
          return void 0 === t
            ? o['inner' + i].call(this)
            : this.each(function () {
                e(this).css(a, s(this, t) + 'px');
              });
        }),
          (e.fn['outer' + i] = function (t, n) {
            return 'number' != typeof t
              ? o['outer' + i].call(this, t)
              : this.each(function () {
                  e(this).css(a, s(this, t, !0, n) + 'px');
                });
          });
      }),
    e.fn.addBack ||
      (e.fn.addBack = function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e),
        );
      }),
    e('<a>').data('a-b', 'a').removeData('a-b').data('a-b') &&
      (e.fn.removeData = (function (t) {
        return function (i) {
          return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this);
        };
      })(e.fn.removeData)),
    (e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
    e.fn.extend({
      focus: (function (t) {
        return function (i, s) {
          return 'number' == typeof i
            ? this.each(function () {
                var t = this;
                setTimeout(function () {
                  e(t).focus(), s && s.call(t);
                }, i);
              })
            : t.apply(this, arguments);
        };
      })(e.fn.focus),
      disableSelection: (function () {
        var e =
          'onselectstart' in document.createElement('div')
            ? 'selectstart'
            : 'mousedown';
        return function () {
          return this.bind(e + '.ui-disableSelection', function (e) {
            e.preventDefault();
          });
        };
      })(),
      enableSelection: function () {
        return this.unbind('.ui-disableSelection');
      },
      zIndex: function (t) {
        if (void 0 !== t) return this.css('zIndex', t);
        if (this.length)
          for (var i, s, n = e(this[0]); n.length && n[0] !== document; ) {
            if (
              ((i = n.css('position')),
              ('absolute' === i || 'relative' === i || 'fixed' === i) &&
                ((s = parseInt(n.css('zIndex'), 10)), !isNaN(s) && 0 !== s))
            )
              return s;
            n = n.parent();
          }
        return 0;
      },
    }),
    (e.ui.plugin = {
      add: function (t, i, s) {
        var n,
          a = e.ui[t].prototype;
        for (n in s)
          (a.plugins[n] = a.plugins[n] || []), a.plugins[n].push([i, s[n]]);
      },
      call: function (e, t, i, s) {
        var n,
          a = e.plugins[t];
        if (
          a &&
          (s ||
            (e.element[0].parentNode &&
              11 !== e.element[0].parentNode.nodeType))
        )
          for (n = 0; a.length > n; n++)
            e.options[a[n][0]] && a[n][1].apply(e.element, i);
      },
    });
  var s = 0,
    n = Array.prototype.slice;
  (e.cleanData = (function (t) {
    return function (i) {
      var s, n, a;
      for (a = 0; null != (n = i[a]); a++)
        try {
          (s = e._data(n, 'events')),
            s && s.remove && e(n).triggerHandler('remove');
        } catch (o) {}
      t(i);
    };
  })(e.cleanData)),
    (e.widget = function (t, i, s) {
      var n,
        a,
        o,
        r,
        h = {},
        l = t.split('.')[0];
      return (
        (t = t.split('.')[1]),
        (n = l + '-' + t),
        s || ((s = i), (i = e.Widget)),
        (e.expr[':'][n.toLowerCase()] = function (t) {
          return !!e.data(t, n);
        }),
        (e[l] = e[l] || {}),
        (a = e[l][t]),
        (o = e[l][t] =
          function (e, t) {
            return this._createWidget
              ? (arguments.length && this._createWidget(e, t), void 0)
              : new o(e, t);
          }),
        e.extend(o, a, {
          version: s.version,
          _proto: e.extend({}, s),
          _childConstructors: [],
        }),
        (r = new i()),
        (r.options = e.widget.extend({}, r.options)),
        e.each(s, function (t, s) {
          return e.isFunction(s)
            ? ((h[t] = (function () {
                var e = function () {
                    return i.prototype[t].apply(this, arguments);
                  },
                  n = function (e) {
                    return i.prototype[t].apply(this, e);
                  };
                return function () {
                  var t,
                    i = this._super,
                    a = this._superApply;
                  return (
                    (this._super = e),
                    (this._superApply = n),
                    (t = s.apply(this, arguments)),
                    (this._super = i),
                    (this._superApply = a),
                    t
                  );
                };
              })()),
              void 0)
            : ((h[t] = s), void 0);
        }),
        (o.prototype = e.widget.extend(
          r,
          { widgetEventPrefix: a ? r.widgetEventPrefix || t : t },
          h,
          { constructor: o, namespace: l, widgetName: t, widgetFullName: n },
        )),
        a
          ? (e.each(a._childConstructors, function (t, i) {
              var s = i.prototype;
              e.widget(s.namespace + '.' + s.widgetName, o, i._proto);
            }),
            delete a._childConstructors)
          : i._childConstructors.push(o),
        e.widget.bridge(t, o),
        o
      );
    }),
    (e.widget.extend = function (t) {
      for (var i, s, a = n.call(arguments, 1), o = 0, r = a.length; r > o; o++)
        for (i in a[o])
          (s = a[o][i]),
            a[o].hasOwnProperty(i) &&
              void 0 !== s &&
              (t[i] = e.isPlainObject(s)
                ? e.isPlainObject(t[i])
                  ? e.widget.extend({}, t[i], s)
                  : e.widget.extend({}, s)
                : s);
      return t;
    }),
    (e.widget.bridge = function (t, i) {
      var s = i.prototype.widgetFullName || t;
      e.fn[t] = function (a) {
        var o = 'string' == typeof a,
          r = n.call(arguments, 1),
          h = this;
        return (
          o
            ? this.each(function () {
                var i,
                  n = e.data(this, s);
                return 'instance' === a
                  ? ((h = n), !1)
                  : n
                  ? e.isFunction(n[a]) && '_' !== a.charAt(0)
                    ? ((i = n[a].apply(n, r)),
                      i !== n && void 0 !== i
                        ? ((h = i && i.jquery ? h.pushStack(i.get()) : i), !1)
                        : void 0)
                    : e.error(
                        "no such method '" +
                          a +
                          "' for " +
                          t +
                          ' widget instance',
                      )
                  : e.error(
                      'cannot call methods on ' +
                        t +
                        ' prior to initialization; ' +
                        "attempted to call method '" +
                        a +
                        "'",
                    );
              })
            : (r.length && (a = e.widget.extend.apply(null, [a].concat(r))),
              this.each(function () {
                var t = e.data(this, s);
                t
                  ? (t.option(a || {}), t._init && t._init())
                  : e.data(this, s, new i(a, this));
              })),
          h
        );
      };
    }),
    (e.Widget = function () {}),
    (e.Widget._childConstructors = []),
    (e.Widget.prototype = {
      widgetName: 'widget',
      widgetEventPrefix: '',
      defaultElement: '<div>',
      options: { disabled: !1, create: null },
      _createWidget: function (t, i) {
        (i = e(i || this.defaultElement || this)[0]),
          (this.element = e(i)),
          (this.uuid = s++),
          (this.eventNamespace = '.' + this.widgetName + this.uuid),
          (this.bindings = e()),
          (this.hoverable = e()),
          (this.focusable = e()),
          i !== this &&
            (e.data(i, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (e) {
                e.target === i && this.destroy();
              },
            }),
            (this.document = e(i.style ? i.ownerDocument : i.document || i)),
            (this.window = e(
              this.document[0].defaultView || this.document[0].parentWindow,
            ))),
          (this.options = e.widget.extend(
            {},
            this.options,
            this._getCreateOptions(),
            t,
          )),
          this._create(),
          this._trigger('create', null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: e.noop,
      _getCreateEventData: e.noop,
      _create: e.noop,
      _init: e.noop,
      destroy: function () {
        this._destroy(),
          this.element
            .unbind(this.eventNamespace)
            .removeData(this.widgetFullName)
            .removeData(e.camelCase(this.widgetFullName)),
          this.widget()
            .unbind(this.eventNamespace)
            .removeAttr('aria-disabled')
            .removeClass(
              this.widgetFullName + '-disabled ' + 'ui-state-disabled',
            ),
          this.bindings.unbind(this.eventNamespace),
          this.hoverable.removeClass('ui-state-hover'),
          this.focusable.removeClass('ui-state-focus');
      },
      _destroy: e.noop,
      widget: function () {
        return this.element;
      },
      option: function (t, i) {
        var s,
          n,
          a,
          o = t;
        if (0 === arguments.length) return e.widget.extend({}, this.options);
        if ('string' == typeof t)
          if (((o = {}), (s = t.split('.')), (t = s.shift()), s.length)) {
            for (
              n = o[t] = e.widget.extend({}, this.options[t]), a = 0;
              s.length - 1 > a;
              a++
            )
              (n[s[a]] = n[s[a]] || {}), (n = n[s[a]]);
            if (((t = s.pop()), 1 === arguments.length))
              return void 0 === n[t] ? null : n[t];
            n[t] = i;
          } else {
            if (1 === arguments.length)
              return void 0 === this.options[t] ? null : this.options[t];
            o[t] = i;
          }
        return this._setOptions(o), this;
      },
      _setOptions: function (e) {
        var t;
        for (t in e) this._setOption(t, e[t]);
        return this;
      },
      _setOption: function (e, t) {
        return (
          (this.options[e] = t),
          'disabled' === e &&
            (this.widget().toggleClass(this.widgetFullName + '-disabled', !!t),
            t &&
              (this.hoverable.removeClass('ui-state-hover'),
              this.focusable.removeClass('ui-state-focus'))),
          this
        );
      },
      enable: function () {
        return this._setOptions({ disabled: !1 });
      },
      disable: function () {
        return this._setOptions({ disabled: !0 });
      },
      _on: function (t, i, s) {
        var n,
          a = this;
        'boolean' != typeof t && ((s = i), (i = t), (t = !1)),
          s
            ? ((i = n = e(i)), (this.bindings = this.bindings.add(i)))
            : ((s = i), (i = this.element), (n = this.widget())),
          e.each(s, function (s, o) {
            function r() {
              return t ||
                (a.options.disabled !== !0 &&
                  !e(this).hasClass('ui-state-disabled'))
                ? ('string' == typeof o ? a[o] : o).apply(a, arguments)
                : void 0;
            }
            'string' != typeof o &&
              (r.guid = o.guid = o.guid || r.guid || e.guid++);
            var h = s.match(/^([\w:-]*)\s*(.*)$/),
              l = h[1] + a.eventNamespace,
              u = h[2];
            u ? n.delegate(u, l, r) : i.bind(l, r);
          });
      },
      _off: function (t, i) {
        (i =
          (i || '').split(' ').join(this.eventNamespace + ' ') +
          this.eventNamespace),
          t.unbind(i).undelegate(i),
          (this.bindings = e(this.bindings.not(t).get())),
          (this.focusable = e(this.focusable.not(t).get())),
          (this.hoverable = e(this.hoverable.not(t).get()));
      },
      _delay: function (e, t) {
        function i() {
          return ('string' == typeof e ? s[e] : e).apply(s, arguments);
        }
        var s = this;
        return setTimeout(i, t || 0);
      },
      _hoverable: function (t) {
        (this.hoverable = this.hoverable.add(t)),
          this._on(t, {
            mouseenter: function (t) {
              e(t.currentTarget).addClass('ui-state-hover');
            },
            mouseleave: function (t) {
              e(t.currentTarget).removeClass('ui-state-hover');
            },
          });
      },
      _focusable: function (t) {
        (this.focusable = this.focusable.add(t)),
          this._on(t, {
            focusin: function (t) {
              e(t.currentTarget).addClass('ui-state-focus');
            },
            focusout: function (t) {
              e(t.currentTarget).removeClass('ui-state-focus');
            },
          });
      },
      _trigger: function (t, i, s) {
        var n,
          a,
          o = this.options[t];
        if (
          ((s = s || {}),
          (i = e.Event(i)),
          (i.type = (
            t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t
          ).toLowerCase()),
          (i.target = this.element[0]),
          (a = i.originalEvent))
        )
          for (n in a) n in i || (i[n] = a[n]);
        return (
          this.element.trigger(i, s),
          !(
            (e.isFunction(o) &&
              o.apply(this.element[0], [i].concat(s)) === !1) ||
            i.isDefaultPrevented()
          )
        );
      },
    }),
    e.each({ show: 'fadeIn', hide: 'fadeOut' }, function (t, i) {
      e.Widget.prototype['_' + t] = function (s, n, a) {
        'string' == typeof n && (n = { effect: n });
        var o,
          r = n ? (n === !0 || 'number' == typeof n ? i : n.effect || i) : t;
        (n = n || {}),
          'number' == typeof n && (n = { duration: n }),
          (o = !e.isEmptyObject(n)),
          (n.complete = a),
          n.delay && s.delay(n.delay),
          o && e.effects && e.effects.effect[r]
            ? s[t](n)
            : r !== t && s[r]
            ? s[r](n.duration, n.easing, a)
            : s.queue(function (i) {
                e(this)[t](), a && a.call(s[0]), i();
              });
      };
    }),
    e.widget;
  var a = !1;
  e(document).mouseup(function () {
    a = !1;
  }),
    e.widget('ui.mouse', {
      version: '1.11.4',
      options: {
        cancel: 'input,textarea,button,select,option',
        distance: 1,
        delay: 0,
      },
      _mouseInit: function () {
        var t = this;
        this.element
          .bind('mousedown.' + this.widgetName, function (e) {
            return t._mouseDown(e);
          })
          .bind('click.' + this.widgetName, function (i) {
            return !0 === e.data(i.target, t.widgetName + '.preventClickEvent')
              ? (e.removeData(i.target, t.widgetName + '.preventClickEvent'),
                i.stopImmediatePropagation(),
                !1)
              : void 0;
          }),
          (this.started = !1);
      },
      _mouseDestroy: function () {
        this.element.unbind('.' + this.widgetName),
          this._mouseMoveDelegate &&
            this.document
              .unbind('mousemove.' + this.widgetName, this._mouseMoveDelegate)
              .unbind('mouseup.' + this.widgetName, this._mouseUpDelegate);
      },
      _mouseDown: function (t) {
        if (!a) {
          (this._mouseMoved = !1),
            this._mouseStarted && this._mouseUp(t),
            (this._mouseDownEvent = t);
          var i = this,
            s = 1 === t.which,
            n =
              'string' == typeof this.options.cancel && t.target.nodeName
                ? e(t.target).closest(this.options.cancel).length
                : !1;
          return s && !n && this._mouseCapture(t)
            ? ((this.mouseDelayMet = !this.options.delay),
              this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function () {
                  i.mouseDelayMet = !0;
                }, this.options.delay)),
              this._mouseDistanceMet(t) &&
              this._mouseDelayMet(t) &&
              ((this._mouseStarted = this._mouseStart(t) !== !1),
              !this._mouseStarted)
                ? (t.preventDefault(), !0)
                : (!0 ===
                    e.data(t.target, this.widgetName + '.preventClickEvent') &&
                    e.removeData(
                      t.target,
                      this.widgetName + '.preventClickEvent',
                    ),
                  (this._mouseMoveDelegate = function (e) {
                    return i._mouseMove(e);
                  }),
                  (this._mouseUpDelegate = function (e) {
                    return i._mouseUp(e);
                  }),
                  this.document
                    .bind(
                      'mousemove.' + this.widgetName,
                      this._mouseMoveDelegate,
                    )
                    .bind('mouseup.' + this.widgetName, this._mouseUpDelegate),
                  t.preventDefault(),
                  (a = !0),
                  !0))
            : !0;
        }
      },
      _mouseMove: function (t) {
        if (this._mouseMoved) {
          if (
            e.ui.ie &&
            (!document.documentMode || 9 > document.documentMode) &&
            !t.button
          )
            return this._mouseUp(t);
          if (!t.which) return this._mouseUp(t);
        }
        return (
          (t.which || t.button) && (this._mouseMoved = !0),
          this._mouseStarted
            ? (this._mouseDrag(t), t.preventDefault())
            : (this._mouseDistanceMet(t) &&
                this._mouseDelayMet(t) &&
                ((this._mouseStarted =
                  this._mouseStart(this._mouseDownEvent, t) !== !1),
                this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
              !this._mouseStarted)
        );
      },
      _mouseUp: function (t) {
        return (
          this.document
            .unbind('mousemove.' + this.widgetName, this._mouseMoveDelegate)
            .unbind('mouseup.' + this.widgetName, this._mouseUpDelegate),
          this._mouseStarted &&
            ((this._mouseStarted = !1),
            t.target === this._mouseDownEvent.target &&
              e.data(t.target, this.widgetName + '.preventClickEvent', !0),
            this._mouseStop(t)),
          (a = !1),
          !1
        );
      },
      _mouseDistanceMet: function (e) {
        return (
          Math.max(
            Math.abs(this._mouseDownEvent.pageX - e.pageX),
            Math.abs(this._mouseDownEvent.pageY - e.pageY),
          ) >= this.options.distance
        );
      },
      _mouseDelayMet: function () {
        return this.mouseDelayMet;
      },
      _mouseStart: function () {},
      _mouseDrag: function () {},
      _mouseStop: function () {},
      _mouseCapture: function () {
        return !0;
      },
    }),
    e.widget('ui.slider', e.ui.mouse, {
      version: '1.11.4',
      widgetEventPrefix: 'slide',
      options: {
        animate: !1,
        distance: 0,
        max: 100,
        min: 0,
        orientation: 'horizontal',
        range: !1,
        step: 1,
        value: 0,
        values: null,
        change: null,
        slide: null,
        start: null,
        stop: null,
      },
      numPages: 5,
      _create: function () {
        (this._keySliding = !1),
          (this._mouseSliding = !1),
          (this._animateOff = !0),
          (this._handleIndex = null),
          this._detectOrientation(),
          this._mouseInit(),
          this._calculateNewMax(),
          this.element.addClass(
            'ui-slider ui-slider-' +
              this.orientation +
              ' ui-widget' +
              ' ui-widget-content' +
              ' ui-corner-all',
          ),
          this._refresh(),
          this._setOption('disabled', this.options.disabled),
          (this._animateOff = !1);
      },
      _refresh: function () {
        this._createRange(),
          this._createHandles(),
          this._setupEvents(),
          this._refreshValue();
      },
      _createHandles: function () {
        var t,
          i,
          s = this.options,
          n = this.element
            .find('.ui-slider-handle')
            .addClass('ui-state-default ui-corner-all'),
          a =
            "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
          o = [];
        for (
          i = (s.values && s.values.length) || 1,
            n.length > i && (n.slice(i).remove(), (n = n.slice(0, i))),
            t = n.length;
          i > t;
          t++
        )
          o.push(a);
        (this.handles = n.add(e(o.join('')).appendTo(this.element))),
          (this.handle = this.handles.eq(0)),
          this.handles.each(function (t) {
            e(this).data('ui-slider-handle-index', t);
          });
      },
      _createRange: function () {
        var t = this.options,
          i = '';
        t.range
          ? (t.range === !0 &&
              (t.values
                ? t.values.length && 2 !== t.values.length
                  ? (t.values = [t.values[0], t.values[0]])
                  : e.isArray(t.values) && (t.values = t.values.slice(0))
                : (t.values = [this._valueMin(), this._valueMin()])),
            this.range && this.range.length
              ? this.range
                  .removeClass('ui-slider-range-min ui-slider-range-max')
                  .css({ left: '', bottom: '' })
              : ((this.range = e('<div></div>').appendTo(this.element)),
                (i = 'ui-slider-range ui-widget-header ui-corner-all')),
            this.range.addClass(
              i +
                ('min' === t.range || 'max' === t.range
                  ? ' ui-slider-range-' + t.range
                  : ''),
            ))
          : (this.range && this.range.remove(), (this.range = null));
      },
      _setupEvents: function () {
        this._off(this.handles),
          this._on(this.handles, this._handleEvents),
          this._hoverable(this.handles),
          this._focusable(this.handles);
      },
      _destroy: function () {
        this.handles.remove(),
          this.range && this.range.remove(),
          this.element.removeClass(
            'ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all',
          ),
          this._mouseDestroy();
      },
      _mouseCapture: function (t) {
        var i,
          s,
          n,
          a,
          o,
          r,
          h,
          l,
          u = this,
          c = this.options;
        return c.disabled
          ? !1
          : ((this.elementSize = {
              width: this.element.outerWidth(),
              height: this.element.outerHeight(),
            }),
            (this.elementOffset = this.element.offset()),
            (i = { x: t.pageX, y: t.pageY }),
            (s = this._normValueFromMouse(i)),
            (n = this._valueMax() - this._valueMin() + 1),
            this.handles.each(function (t) {
              var i = Math.abs(s - u.values(t));
              (n > i ||
                (n === i &&
                  (t === u._lastChangedValue || u.values(t) === c.min))) &&
                ((n = i), (a = e(this)), (o = t));
            }),
            (r = this._start(t, o)),
            r === !1
              ? !1
              : ((this._mouseSliding = !0),
                (this._handleIndex = o),
                a.addClass('ui-state-active').focus(),
                (h = a.offset()),
                (l = !e(t.target).parents().addBack().is('.ui-slider-handle')),
                (this._clickOffset = l
                  ? { left: 0, top: 0 }
                  : {
                      left: t.pageX - h.left - a.width() / 2,
                      top:
                        t.pageY -
                        h.top -
                        a.height() / 2 -
                        (parseInt(a.css('borderTopWidth'), 10) || 0) -
                        (parseInt(a.css('borderBottomWidth'), 10) || 0) +
                        (parseInt(a.css('marginTop'), 10) || 0),
                    }),
                this.handles.hasClass('ui-state-hover') || this._slide(t, o, s),
                (this._animateOff = !0),
                !0));
      },
      _mouseStart: function () {
        return !0;
      },
      _mouseDrag: function (e) {
        var t = { x: e.pageX, y: e.pageY },
          i = this._normValueFromMouse(t);
        return this._slide(e, this._handleIndex, i), !1;
      },
      _mouseStop: function (e) {
        return (
          this.handles.removeClass('ui-state-active'),
          (this._mouseSliding = !1),
          this._stop(e, this._handleIndex),
          this._change(e, this._handleIndex),
          (this._handleIndex = null),
          (this._clickOffset = null),
          (this._animateOff = !1),
          !1
        );
      },
      _detectOrientation: function () {
        this.orientation =
          'vertical' === this.options.orientation ? 'vertical' : 'horizontal';
      },
      _normValueFromMouse: function (e) {
        var t, i, s, n, a;
        return (
          'horizontal' === this.orientation
            ? ((t = this.elementSize.width),
              (i =
                e.x -
                this.elementOffset.left -
                (this._clickOffset ? this._clickOffset.left : 0)))
            : ((t = this.elementSize.height),
              (i =
                e.y -
                this.elementOffset.top -
                (this._clickOffset ? this._clickOffset.top : 0))),
          (s = i / t),
          s > 1 && (s = 1),
          0 > s && (s = 0),
          'vertical' === this.orientation && (s = 1 - s),
          (n = this._valueMax() - this._valueMin()),
          (a = this._valueMin() + s * n),
          this._trimAlignValue(a)
        );
      },
      _start: function (e, t) {
        var i = { handle: this.handles[t], value: this.value() };
        return (
          this.options.values &&
            this.options.values.length &&
            ((i.value = this.values(t)), (i.values = this.values())),
          this._trigger('start', e, i)
        );
      },
      _slide: function (e, t, i) {
        var s, n, a;
        this.options.values && this.options.values.length
          ? ((s = this.values(t ? 0 : 1)),
            2 === this.options.values.length &&
              this.options.range === !0 &&
              ((0 === t && i > s) || (1 === t && s > i)) &&
              (i = s),
            i !== this.values(t) &&
              ((n = this.values()),
              (n[t] = i),
              (a = this._trigger('slide', e, {
                handle: this.handles[t],
                value: i,
                values: n,
              })),
              (s = this.values(t ? 0 : 1)),
              a !== !1 && this.values(t, i)))
          : i !== this.value() &&
            ((a = this._trigger('slide', e, {
              handle: this.handles[t],
              value: i,
            })),
            a !== !1 && this.value(i));
      },
      _stop: function (e, t) {
        var i = { handle: this.handles[t], value: this.value() };
        this.options.values &&
          this.options.values.length &&
          ((i.value = this.values(t)), (i.values = this.values())),
          this._trigger('stop', e, i);
      },
      _change: function (e, t) {
        if (!this._keySliding && !this._mouseSliding) {
          var i = { handle: this.handles[t], value: this.value() };
          this.options.values &&
            this.options.values.length &&
            ((i.value = this.values(t)), (i.values = this.values())),
            (this._lastChangedValue = t),
            this._trigger('change', e, i);
        }
      },
      value: function (e) {
        return arguments.length
          ? ((this.options.value = this._trimAlignValue(e)),
            this._refreshValue(),
            this._change(null, 0),
            void 0)
          : this._value();
      },
      values: function (t, i) {
        var s, n, a;
        if (arguments.length > 1)
          return (
            (this.options.values[t] = this._trimAlignValue(i)),
            this._refreshValue(),
            this._change(null, t),
            void 0
          );
        if (!arguments.length) return this._values();
        if (!e.isArray(arguments[0]))
          return this.options.values && this.options.values.length
            ? this._values(t)
            : this.value();
        for (
          s = this.options.values, n = arguments[0], a = 0;
          s.length > a;
          a += 1
        )
          (s[a] = this._trimAlignValue(n[a])), this._change(null, a);
        this._refreshValue();
      },
      _setOption: function (t, i) {
        var s,
          n = 0;
        switch (
          ('range' === t &&
            this.options.range === !0 &&
            ('min' === i
              ? ((this.options.value = this._values(0)),
                (this.options.values = null))
              : 'max' === i &&
                ((this.options.value = this._values(
                  this.options.values.length - 1,
                )),
                (this.options.values = null))),
          e.isArray(this.options.values) && (n = this.options.values.length),
          'disabled' === t &&
            this.element.toggleClass('ui-state-disabled', !!i),
          this._super(t, i),
          t)
        ) {
          case 'orientation':
            this._detectOrientation(),
              this.element
                .removeClass('ui-slider-horizontal ui-slider-vertical')
                .addClass('ui-slider-' + this.orientation),
              this._refreshValue(),
              this.handles.css('horizontal' === i ? 'bottom' : 'left', '');
            break;
          case 'value':
            (this._animateOff = !0),
              this._refreshValue(),
              this._change(null, 0),
              (this._animateOff = !1);
            break;
          case 'values':
            for (
              this._animateOff = !0, this._refreshValue(), s = 0;
              n > s;
              s += 1
            )
              this._change(null, s);
            this._animateOff = !1;
            break;
          case 'step':
          case 'min':
          case 'max':
            (this._animateOff = !0),
              this._calculateNewMax(),
              this._refreshValue(),
              (this._animateOff = !1);
            break;
          case 'range':
            (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
        }
      },
      _value: function () {
        var e = this.options.value;
        return (e = this._trimAlignValue(e));
      },
      _values: function (e) {
        var t, i, s;
        if (arguments.length)
          return (t = this.options.values[e]), (t = this._trimAlignValue(t));
        if (this.options.values && this.options.values.length) {
          for (i = this.options.values.slice(), s = 0; i.length > s; s += 1)
            i[s] = this._trimAlignValue(i[s]);
          return i;
        }
        return [];
      },
      _trimAlignValue: function (e) {
        if (this._valueMin() >= e) return this._valueMin();
        if (e >= this._valueMax()) return this._valueMax();
        var t = this.options.step > 0 ? this.options.step : 1,
          i = (e - this._valueMin()) % t,
          s = e - i;
        return (
          2 * Math.abs(i) >= t && (s += i > 0 ? t : -t),
          parseFloat(s.toFixed(5))
        );
      },
      _calculateNewMax: function () {
        var e = this.options.max,
          t = this._valueMin(),
          i = this.options.step,
          s = Math.floor(+(e - t).toFixed(this._precision()) / i) * i;
        (e = s + t), (this.max = parseFloat(e.toFixed(this._precision())));
      },
      _precision: function () {
        var e = this._precisionOf(this.options.step);
        return (
          null !== this.options.min &&
            (e = Math.max(e, this._precisionOf(this.options.min))),
          e
        );
      },
      _precisionOf: function (e) {
        var t = '' + e,
          i = t.indexOf('.');
        return -1 === i ? 0 : t.length - i - 1;
      },
      _valueMin: function () {
        return this.options.min;
      },
      _valueMax: function () {
        return this.max;
      },
      _refreshValue: function () {
        var t,
          i,
          s,
          n,
          a,
          o = this.options.range,
          r = this.options,
          h = this,
          l = this._animateOff ? !1 : r.animate,
          u = {};
        this.options.values && this.options.values.length
          ? this.handles.each(function (s) {
              (i =
                100 *
                ((h.values(s) - h._valueMin()) /
                  (h._valueMax() - h._valueMin()))),
                (u['horizontal' === h.orientation ? 'left' : 'bottom'] =
                  i + '%'),
                e(this).stop(1, 1)[l ? 'animate' : 'css'](u, r.animate),
                h.options.range === !0 &&
                  ('horizontal' === h.orientation
                    ? (0 === s &&
                        h.range
                          .stop(1, 1)
                          [l ? 'animate' : 'css']({ left: i + '%' }, r.animate),
                      1 === s &&
                        h.range[l ? 'animate' : 'css'](
                          { width: i - t + '%' },
                          { queue: !1, duration: r.animate },
                        ))
                    : (0 === s &&
                        h.range
                          .stop(1, 1)
                          [l ? 'animate' : 'css'](
                            { bottom: i + '%' },
                            r.animate,
                          ),
                      1 === s &&
                        h.range[l ? 'animate' : 'css'](
                          { height: i - t + '%' },
                          { queue: !1, duration: r.animate },
                        ))),
                (t = i);
            })
          : ((s = this.value()),
            (n = this._valueMin()),
            (a = this._valueMax()),
            (i = a !== n ? 100 * ((s - n) / (a - n)) : 0),
            (u['horizontal' === this.orientation ? 'left' : 'bottom'] =
              i + '%'),
            this.handle.stop(1, 1)[l ? 'animate' : 'css'](u, r.animate),
            'min' === o &&
              'horizontal' === this.orientation &&
              this.range
                .stop(1, 1)
                [l ? 'animate' : 'css']({ width: i + '%' }, r.animate),
            'max' === o &&
              'horizontal' === this.orientation &&
              this.range[l ? 'animate' : 'css'](
                { width: 100 - i + '%' },
                { queue: !1, duration: r.animate },
              ),
            'min' === o &&
              'vertical' === this.orientation &&
              this.range
                .stop(1, 1)
                [l ? 'animate' : 'css']({ height: i + '%' }, r.animate),
            'max' === o &&
              'vertical' === this.orientation &&
              this.range[l ? 'animate' : 'css'](
                { height: 100 - i + '%' },
                { queue: !1, duration: r.animate },
              ));
      },
      _handleEvents: {
        keydown: function (t) {
          var i,
            s,
            n,
            a,
            o = e(t.target).data('ui-slider-handle-index');
          switch (t.keyCode) {
            case e.ui.keyCode.HOME:
            case e.ui.keyCode.END:
            case e.ui.keyCode.PAGE_UP:
            case e.ui.keyCode.PAGE_DOWN:
            case e.ui.keyCode.UP:
            case e.ui.keyCode.RIGHT:
            case e.ui.keyCode.DOWN:
            case e.ui.keyCode.LEFT:
              if (
                (t.preventDefault(),
                !this._keySliding &&
                  ((this._keySliding = !0),
                  e(t.target).addClass('ui-state-active'),
                  (i = this._start(t, o)),
                  i === !1))
              )
                return;
          }
          switch (
            ((a = this.options.step),
            (s = n =
              this.options.values && this.options.values.length
                ? this.values(o)
                : this.value()),
            t.keyCode)
          ) {
            case e.ui.keyCode.HOME:
              n = this._valueMin();
              break;
            case e.ui.keyCode.END:
              n = this._valueMax();
              break;
            case e.ui.keyCode.PAGE_UP:
              n = this._trimAlignValue(
                s + (this._valueMax() - this._valueMin()) / this.numPages,
              );
              break;
            case e.ui.keyCode.PAGE_DOWN:
              n = this._trimAlignValue(
                s - (this._valueMax() - this._valueMin()) / this.numPages,
              );
              break;
            case e.ui.keyCode.UP:
            case e.ui.keyCode.RIGHT:
              if (s === this._valueMax()) return;
              n = this._trimAlignValue(s + a);
              break;
            case e.ui.keyCode.DOWN:
            case e.ui.keyCode.LEFT:
              if (s === this._valueMin()) return;
              n = this._trimAlignValue(s - a);
          }
          this._slide(t, o, n);
        },
        keyup: function (t) {
          var i = e(t.target).data('ui-slider-handle-index');
          this._keySliding &&
            ((this._keySliding = !1),
            this._stop(t, i),
            this._change(t, i),
            e(t.target).removeClass('ui-state-active'));
        },
      },
    });
});

/* ------------------------------------------------------
Nice Select js
------------------------------------------------------ */
/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!(function (e) {
  e.fn.niceSelect = function (t) {
    function s(t) {
      t.after(
        e('<div></div>')
          .addClass('nice-select')
          .addClass(t.attr('class') || '')
          .addClass(t.attr('disabled') ? 'disabled' : '')
          .attr('tabindex', t.attr('disabled') ? null : '0')
          .html('<span class="current"></span><ul class="list"></ul>'),
      );
      var s = t.next(),
        n = t.find('option'),
        i = t.find('option:selected');
      s.find('.current').html(i.data('display') || i.text()),
        n.each(function (t) {
          var n = e(this),
            i = n.data('display');
          s.find('ul').append(
            e('<li></li>')
              .attr('data-value', n.val())
              .attr('data-display', i || null)
              .addClass(
                'option' +
                  (n.is(':selected') ? ' selected' : '') +
                  (n.is(':disabled') ? ' disabled' : ''),
              )
              .html(n.text()),
          );
        });
    }
    if ('string' == typeof t)
      return (
        'update' == t
          ? this.each(function () {
              var t = e(this),
                n = e(this).next('.nice-select'),
                i = n.hasClass('open');
              n.length && (n.remove(), s(t), i && t.next().trigger('click'));
            })
          : 'destroy' == t
          ? (this.each(function () {
              var t = e(this),
                s = e(this).next('.nice-select');
              s.length && (s.remove(), t.css('display', ''));
            }),
            0 == e('.nice-select').length && e(document).off('.nice_select'))
          : console.log('Method "' + t + '" does not exist.'),
        this
      );
    this.hide(),
      this.each(function () {
        var t = e(this);
        t.next().hasClass('nice-select') || s(t);
      }),
      e(document).off('.nice_select'),
      e(document).on('click.nice_select', '.nice-select', function (t) {
        var s = e(this);
        e('.nice-select').not(s).removeClass('open'),
          s.toggleClass('open'),
          s.hasClass('open')
            ? (s.find('.option'),
              s.find('.focus').removeClass('focus'),
              s.find('.selected').addClass('focus'))
            : s.focus();
      }),
      e(document).on('click.nice_select', function (t) {
        0 === e(t.target).closest('.nice-select').length &&
          e('.nice-select').removeClass('open').find('.option');
      }),
      e(document).on(
        'click.nice_select',
        '.nice-select .option:not(.disabled)',
        function (t) {
          var s = e(this),
            n = s.closest('.nice-select');
          n.find('.selected').removeClass('selected'), s.addClass('selected');
          var i = s.data('display') || s.text();
          n.find('.current').text(i),
            n.prev('select').val(s.data('value')).trigger('change');
        },
      ),
      e(document).on('keydown.nice_select', '.nice-select', function (t) {
        var s = e(this),
          n = e(s.find('.focus') || s.find('.list .option.selected'));
        if (32 == t.keyCode || 13 == t.keyCode)
          return (
            s.hasClass('open') ? n.trigger('click') : s.trigger('click'), !1
          );
        if (40 == t.keyCode) {
          if (s.hasClass('open')) {
            var i = n.nextAll('.option:not(.disabled)').first();
            i.length > 0 &&
              (s.find('.focus').removeClass('focus'), i.addClass('focus'));
          } else s.trigger('click');
          return !1;
        }
        if (38 == t.keyCode) {
          if (s.hasClass('open')) {
            var l = n.prevAll('.option:not(.disabled)').first();
            l.length > 0 &&
              (s.find('.focus').removeClass('focus'), l.addClass('focus'));
          } else s.trigger('click');
          return !1;
        }
        if (27 == t.keyCode) s.hasClass('open') && s.trigger('click');
        else if (9 == t.keyCode && s.hasClass('open')) return !1;
      });
    var n = document.createElement('a').style;
    return (
      (n.cssText = 'pointer-events:auto'),
      'auto' !== n.pointerEvents && e('html').addClass('no-csspointerevents'),
      this
    );
  };
})(jQuery);
