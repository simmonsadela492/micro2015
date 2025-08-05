(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        r(l);
    new MutationObserver(l => {
        for (const i of l)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(l) {
        const i = {};
        return l.integrity && (i.integrity = l.integrity),
        l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
        l.crossOrigin === "use-credentials" ? i.credentials = "include" : l.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(l) {
        if (l.ep)
            return;
        l.ep = !0;
        const i = n(l);
        fetch(l.href, i)
    }
}
)();
var Xu = {
    exports: {}
}
  , ll = {}
  , Gu = {
    exports: {}
}
  , L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zn = Symbol.for("react.element")
  , sc = Symbol.for("react.portal")
  , ac = Symbol.for("react.fragment")
  , cc = Symbol.for("react.strict_mode")
  , fc = Symbol.for("react.profiler")
  , dc = Symbol.for("react.provider")
  , pc = Symbol.for("react.context")
  , mc = Symbol.for("react.forward_ref")
  , hc = Symbol.for("react.suspense")
  , vc = Symbol.for("react.memo")
  , yc = Symbol.for("react.lazy")
  , Uo = Symbol.iterator;
function gc(e) {
    return e === null || typeof e != "object" ? null : (e = Uo && e[Uo] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Zu = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Ju = Object.assign
  , qu = {};
function un(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = qu,
    this.updater = n || Zu
}
un.prototype.isReactComponent = {};
un.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
un.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function bu() {}
bu.prototype = un.prototype;
function Hi(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = qu,
    this.updater = n || Zu
}
var Wi = Hi.prototype = new bu;
Wi.constructor = Hi;
Ju(Wi, un.prototype);
Wi.isPureReactComponent = !0;
var $o = Array.isArray
  , es = Object.prototype.hasOwnProperty
  , Bi = {
    current: null
}
  , ts = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function ns(e, t, n) {
    var r, l = {}, i = null, o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            es.call(t, r) && !ts.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1)
        l.children = n;
    else if (1 < u) {
        for (var s = Array(u), c = 0; c < u; c++)
            s[c] = arguments[c + 2];
        l.children = s
    }
    if (e && e.defaultProps)
        for (r in u = e.defaultProps,
        u)
            l[r] === void 0 && (l[r] = u[r]);
    return {
        $$typeof: Zn,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: Bi.current
    }
}
function xc(e, t) {
    return {
        $$typeof: Zn,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Qi(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Zn
}
function wc(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Ao = /\/+/g;
function Nl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? wc("" + e.key) : t.toString(36)
}
function Sr(e, t, n, r, l) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (i) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Zn:
            case sc:
                o = !0
            }
        }
    if (o)
        return o = e,
        l = l(o),
        e = r === "" ? "." + Nl(o, 0) : r,
        $o(l) ? (n = "",
        e != null && (n = e.replace(Ao, "$&/") + "/"),
        Sr(l, t, n, "", function(c) {
            return c
        })) : l != null && (Qi(l) && (l = xc(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Ao, "$&/") + "/") + e)),
        t.push(l)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    $o(e))
        for (var u = 0; u < e.length; u++) {
            i = e[u];
            var s = r + Nl(i, u);
            o += Sr(i, t, n, s, l)
        }
    else if (s = gc(e),
    typeof s == "function")
        for (e = s.call(e),
        u = 0; !(i = e.next()).done; )
            i = i.value,
            s = r + Nl(i, u++),
            o += Sr(i, t, n, s, l);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function rr(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , l = 0;
    return Sr(e, r, "", "", function(i) {
        return t.call(n, i, l++)
    }),
    r
}
function kc(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var ue = {
    current: null
}
  , Nr = {
    transition: null
}
  , Sc = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: Nr,
    ReactCurrentOwner: Bi
};
function rs() {
    throw Error("act(...) is not supported in production builds of React.")
}
L.Children = {
    map: rr,
    forEach: function(e, t, n) {
        rr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return rr(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return rr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Qi(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
L.Component = un;
L.Fragment = ac;
L.Profiler = fc;
L.PureComponent = Hi;
L.StrictMode = cc;
L.Suspense = hc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sc;
L.act = rs;
L.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Ju({}, e.props)
      , l = e.key
      , i = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        o = Bi.current),
        t.key !== void 0 && (l = "" + t.key),
        e.type && e.type.defaultProps)
            var u = e.type.defaultProps;
        for (s in t)
            es.call(t, s) && !ts.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1)
        r.children = n;
    else if (1 < s) {
        u = Array(s);
        for (var c = 0; c < s; c++)
            u[c] = arguments[c + 2];
        r.children = u
    }
    return {
        $$typeof: Zn,
        type: e.type,
        key: l,
        ref: i,
        props: r,
        _owner: o
    }
}
;
L.createContext = function(e) {
    return e = {
        $$typeof: pc,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: dc,
        _context: e
    },
    e.Consumer = e
}
;
L.createElement = ns;
L.createFactory = function(e) {
    var t = ns.bind(null, e);
    return t.type = e,
    t
}
;
L.createRef = function() {
    return {
        current: null
    }
}
;
L.forwardRef = function(e) {
    return {
        $$typeof: mc,
        render: e
    }
}
;
L.isValidElement = Qi;
L.lazy = function(e) {
    return {
        $$typeof: yc,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: kc
    }
}
;
L.memo = function(e, t) {
    return {
        $$typeof: vc,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
L.startTransition = function(e) {
    var t = Nr.transition;
    Nr.transition = {};
    try {
        e()
    } finally {
        Nr.transition = t
    }
}
;
L.unstable_act = rs;
L.useCallback = function(e, t) {
    return ue.current.useCallback(e, t)
}
;
L.useContext = function(e) {
    return ue.current.useContext(e)
}
;
L.useDebugValue = function() {}
;
L.useDeferredValue = function(e) {
    return ue.current.useDeferredValue(e)
}
;
L.useEffect = function(e, t) {
    return ue.current.useEffect(e, t)
}
;
L.useId = function() {
    return ue.current.useId()
}
;
L.useImperativeHandle = function(e, t, n) {
    return ue.current.useImperativeHandle(e, t, n)
}
;
L.useInsertionEffect = function(e, t) {
    return ue.current.useInsertionEffect(e, t)
}
;
L.useLayoutEffect = function(e, t) {
    return ue.current.useLayoutEffect(e, t)
}
;
L.useMemo = function(e, t) {
    return ue.current.useMemo(e, t)
}
;
L.useReducer = function(e, t, n) {
    return ue.current.useReducer(e, t, n)
}
;
L.useRef = function(e) {
    return ue.current.useRef(e)
}
;
L.useState = function(e) {
    return ue.current.useState(e)
}
;
L.useSyncExternalStore = function(e, t, n) {
    return ue.current.useSyncExternalStore(e, t, n)
}
;
L.useTransition = function() {
    return ue.current.useTransition()
}
;
L.version = "18.3.1";
Gu.exports = L;
var Kt = Gu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nc = Kt
  , Ec = Symbol.for("react.element")
  , Cc = Symbol.for("react.fragment")
  , _c = Object.prototype.hasOwnProperty
  , jc = Nc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Pc = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function ls(e, t, n) {
    var r, l = {}, i = null, o = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t)
        _c.call(t, r) && !Pc.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: Ec,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: jc.current
    }
}
ll.Fragment = Cc;
ll.jsx = ls;
ll.jsxs = ls;
Xu.exports = ll;
var p = Xu.exports
  , is = {
    exports: {}
}
  , ge = {}
  , os = {
    exports: {}
}
  , us = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(E, P) {
        var z = E.length;
        E.push(P);
        e: for (; 0 < z; ) {
            var B = z - 1 >>> 1
              , G = E[B];
            if (0 < l(G, P))
                E[B] = P,
                E[z] = G,
                z = B;
            else
                break e
        }
    }
    function n(E) {
        return E.length === 0 ? null : E[0]
    }
    function r(E) {
        if (E.length === 0)
            return null;
        var P = E[0]
          , z = E.pop();
        if (z !== P) {
            E[0] = z;
            e: for (var B = 0, G = E.length, tr = G >>> 1; B < tr; ) {
                var vt = 2 * (B + 1) - 1
                  , Sl = E[vt]
                  , yt = vt + 1
                  , nr = E[yt];
                if (0 > l(Sl, z))
                    yt < G && 0 > l(nr, Sl) ? (E[B] = nr,
                    E[yt] = z,
                    B = yt) : (E[B] = Sl,
                    E[vt] = z,
                    B = vt);
                else if (yt < G && 0 > l(nr, z))
                    E[B] = nr,
                    E[yt] = z,
                    B = yt;
                else
                    break e
            }
        }
        return P
    }
    function l(E, P) {
        var z = E.sortIndex - P.sortIndex;
        return z !== 0 ? z : E.id - P.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date
          , u = o.now();
        e.unstable_now = function() {
            return o.now() - u
        }
    }
    var s = []
      , c = []
      , v = 1
      , h = null
      , m = 3
      , x = !1
      , w = !1
      , k = !1
      , F = typeof setTimeout == "function" ? setTimeout : null
      , f = typeof clearTimeout == "function" ? clearTimeout : null
      , a = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function d(E) {
        for (var P = n(c); P !== null; ) {
            if (P.callback === null)
                r(c);
            else if (P.startTime <= E)
                r(c),
                P.sortIndex = P.expirationTime,
                t(s, P);
            else
                break;
            P = n(c)
        }
    }
    function y(E) {
        if (k = !1,
        d(E),
        !w)
            if (n(s) !== null)
                w = !0,
                wl(N);
            else {
                var P = n(c);
                P !== null && kl(y, P.startTime - E)
            }
    }
    function N(E, P) {
        w = !1,
        k && (k = !1,
        f(j),
        j = -1),
        x = !0;
        var z = m;
        try {
            for (d(P),
            h = n(s); h !== null && (!(h.expirationTime > P) || E && !_e()); ) {
                var B = h.callback;
                if (typeof B == "function") {
                    h.callback = null,
                    m = h.priorityLevel;
                    var G = B(h.expirationTime <= P);
                    P = e.unstable_now(),
                    typeof G == "function" ? h.callback = G : h === n(s) && r(s),
                    d(P)
                } else
                    r(s);
                h = n(s)
            }
            if (h !== null)
                var tr = !0;
            else {
                var vt = n(c);
                vt !== null && kl(y, vt.startTime - P),
                tr = !1
            }
            return tr
        } finally {
            h = null,
            m = z,
            x = !1
        }
    }
    var C = !1
      , _ = null
      , j = -1
      , W = 5
      , T = -1;
    function _e() {
        return !(e.unstable_now() - T < W)
    }
    function cn() {
        if (_ !== null) {
            var E = e.unstable_now();
            T = E;
            var P = !0;
            try {
                P = _(!0, E)
            } finally {
                P ? fn() : (C = !1,
                _ = null)
            }
        } else
            C = !1
    }
    var fn;
    if (typeof a == "function")
        fn = function() {
            a(cn)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var Fo = new MessageChannel
          , uc = Fo.port2;
        Fo.port1.onmessage = cn,
        fn = function() {
            uc.postMessage(null)
        }
    } else
        fn = function() {
            F(cn, 0)
        }
        ;
    function wl(E) {
        _ = E,
        C || (C = !0,
        fn())
    }
    function kl(E, P) {
        j = F(function() {
            E(e.unstable_now())
        }, P)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(E) {
        E.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        w || x || (w = !0,
        wl(N))
    }
    ,
    e.unstable_forceFrameRate = function(E) {
        0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < E ? Math.floor(1e3 / E) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return m
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(s)
    }
    ,
    e.unstable_next = function(E) {
        switch (m) {
        case 1:
        case 2:
        case 3:
            var P = 3;
            break;
        default:
            P = m
        }
        var z = m;
        m = P;
        try {
            return E()
        } finally {
            m = z
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(E, P) {
        switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            E = 3
        }
        var z = m;
        m = E;
        try {
            return P()
        } finally {
            m = z
        }
    }
    ,
    e.unstable_scheduleCallback = function(E, P, z) {
        var B = e.unstable_now();
        switch (typeof z == "object" && z !== null ? (z = z.delay,
        z = typeof z == "number" && 0 < z ? B + z : B) : z = B,
        E) {
        case 1:
            var G = -1;
            break;
        case 2:
            G = 250;
            break;
        case 5:
            G = 1073741823;
            break;
        case 4:
            G = 1e4;
            break;
        default:
            G = 5e3
        }
        return G = z + G,
        E = {
            id: v++,
            callback: P,
            priorityLevel: E,
            startTime: z,
            expirationTime: G,
            sortIndex: -1
        },
        z > B ? (E.sortIndex = z,
        t(c, E),
        n(s) === null && E === n(c) && (k ? (f(j),
        j = -1) : k = !0,
        kl(y, z - B))) : (E.sortIndex = G,
        t(s, E),
        w || x || (w = !0,
        wl(N))),
        E
    }
    ,
    e.unstable_shouldYield = _e,
    e.unstable_wrapCallback = function(E) {
        var P = m;
        return function() {
            var z = m;
            m = P;
            try {
                return E.apply(this, arguments)
            } finally {
                m = z
            }
        }
    }
}
)(us);
os.exports = us;
var zc = os.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lc = Kt
  , ye = zc;
function g(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var ss = new Set
  , Rn = {};
function Lt(e, t) {
    bt(e, t),
    bt(e + "Capture", t)
}
function bt(e, t) {
    for (Rn[e] = t,
    e = 0; e < t.length; e++)
        ss.add(t[e])
}
var Qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Zl = Object.prototype.hasOwnProperty
  , Tc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Vo = {}
  , Ho = {};
function Mc(e) {
    return Zl.call(Ho, e) ? !0 : Zl.call(Vo, e) ? !1 : Tc.test(e) ? Ho[e] = !0 : (Vo[e] = !0,
    !1)
}
function Rc(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Oc(e, t, n, r) {
    if (t === null || typeof t > "u" || Rc(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function se(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = l,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = o
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ee[e] = new se(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ee[t] = new se(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ee[e] = new se(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ee[e] = new se(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ee[e] = new se(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ee[e] = new se(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ee[e] = new se(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ee[e] = new se(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ee[e] = new se(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Ki = /[\-:]([a-z])/g;
function Yi(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Ki, Yi);
    ee[t] = new se(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Ki, Yi);
    ee[t] = new se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Ki, Yi);
    ee[t] = new se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ee[e] = new se(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ee.xlinkHref = new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ee[e] = new se(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Xi(e, t, n, r) {
    var l = ee.hasOwnProperty(t) ? ee[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Oc(t, n, l, r) && (n = null),
    r || l === null ? Mc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName,
    r = l.attributeNamespace,
    n === null ? e.removeAttribute(t) : (l = l.type,
    n = l === 3 || l === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Ge = Lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , lr = Symbol.for("react.element")
  , Ot = Symbol.for("react.portal")
  , Dt = Symbol.for("react.fragment")
  , Gi = Symbol.for("react.strict_mode")
  , Jl = Symbol.for("react.profiler")
  , as = Symbol.for("react.provider")
  , cs = Symbol.for("react.context")
  , Zi = Symbol.for("react.forward_ref")
  , ql = Symbol.for("react.suspense")
  , bl = Symbol.for("react.suspense_list")
  , Ji = Symbol.for("react.memo")
  , Je = Symbol.for("react.lazy")
  , fs = Symbol.for("react.offscreen")
  , Wo = Symbol.iterator;
function dn(e) {
    return e === null || typeof e != "object" ? null : (e = Wo && e[Wo] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var V = Object.assign, El;
function wn(e) {
    if (El === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            El = t && t[1] || ""
        }
    return `
` + El + e
}
var Cl = !1;
function _l(e, t) {
    if (!e || Cl)
        return "";
    Cl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var l = c.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l[o] !== i[u]; )
                u--;
            for (; 1 <= o && 0 <= u; o--,
            u--)
                if (l[o] !== i[u]) {
                    if (o !== 1 || u !== 1)
                        do
                            if (o--,
                            u--,
                            0 > u || l[o] !== i[u]) {
                                var s = `
` + l[o].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)),
                                s
                            }
                        while (1 <= o && 0 <= u);
                    break
                }
        }
    } finally {
        Cl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? wn(e) : ""
}
function Dc(e) {
    switch (e.tag) {
    case 5:
        return wn(e.type);
    case 16:
        return wn("Lazy");
    case 13:
        return wn("Suspense");
    case 19:
        return wn("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = _l(e.type, !1),
        e;
    case 11:
        return e = _l(e.type.render, !1),
        e;
    case 1:
        return e = _l(e.type, !0),
        e;
    default:
        return ""
    }
}
function ei(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Dt:
        return "Fragment";
    case Ot:
        return "Portal";
    case Jl:
        return "Profiler";
    case Gi:
        return "StrictMode";
    case ql:
        return "Suspense";
    case bl:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case cs:
            return (e.displayName || "Context") + ".Consumer";
        case as:
            return (e._context.displayName || "Context") + ".Provider";
        case Zi:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Ji:
            return t = e.displayName || null,
            t !== null ? t : ei(e.type) || "Memo";
        case Je:
            t = e._payload,
            e = e._init;
            try {
                return ei(e(t))
            } catch {}
        }
    return null
}
function Ic(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return ei(t);
    case 8:
        return t === Gi ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function ft(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function ds(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Fc(e) {
    var t = ds(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(o) {
                r = "" + o,
                i.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function ir(e) {
    e._valueTracker || (e._valueTracker = Fc(e))
}
function ps(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = ds(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Or(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function ti(e, t) {
    var n = t.checked;
    return V({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Bo(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = ft(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function ms(e, t) {
    t = t.checked,
    t != null && Xi(e, "checked", t, !1)
}
function ni(e, t) {
    ms(e, t);
    var n = ft(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ri(e, t.type, n) : t.hasOwnProperty("defaultValue") && ri(e, t.type, ft(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Qo(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function ri(e, t, n) {
    (t !== "number" || Or(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var kn = Array.isArray;
function Yt(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var l = 0; l < n.length; l++)
            t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++)
            l = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== l && (e[n].selected = l),
            l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + ft(n),
        t = null,
        l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0,
                r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}
function li(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(g(91));
    return V({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Ko(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(g(92));
            if (kn(n)) {
                if (1 < n.length)
                    throw Error(g(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: ft(n)
    }
}
function hs(e, t) {
    var n = ft(t.value)
      , r = ft(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Yo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function vs(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function ii(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? vs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var or, ys = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (or = or || document.createElement("div"),
        or.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = or.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function On(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var En = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Uc = ["Webkit", "ms", "Moz", "O"];
Object.keys(En).forEach(function(e) {
    Uc.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        En[t] = En[e]
    })
});
function gs(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || En.hasOwnProperty(e) && En[e] ? ("" + t).trim() : t + "px"
}
function xs(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , l = gs(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, l) : e[n] = l
        }
}
var $c = V({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function oi(e, t) {
    if (t) {
        if ($c[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(g(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(g(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(g(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(g(62))
    }
}
function ui(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var si = null;
function qi(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var ai = null
  , Xt = null
  , Gt = null;
function Xo(e) {
    if (e = bn(e)) {
        if (typeof ai != "function")
            throw Error(g(280));
        var t = e.stateNode;
        t && (t = al(t),
        ai(e.stateNode, e.type, t))
    }
}
function ws(e) {
    Xt ? Gt ? Gt.push(e) : Gt = [e] : Xt = e
}
function ks() {
    if (Xt) {
        var e = Xt
          , t = Gt;
        if (Gt = Xt = null,
        Xo(e),
        t)
            for (e = 0; e < t.length; e++)
                Xo(t[e])
    }
}
function Ss(e, t) {
    return e(t)
}
function Ns() {}
var jl = !1;
function Es(e, t, n) {
    if (jl)
        return e(t, n);
    jl = !0;
    try {
        return Ss(e, t, n)
    } finally {
        jl = !1,
        (Xt !== null || Gt !== null) && (Ns(),
        ks())
    }
}
function Dn(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = al(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(g(231, t, typeof n));
    return n
}
var ci = !1;
if (Qe)
    try {
        var pn = {};
        Object.defineProperty(pn, "passive", {
            get: function() {
                ci = !0
            }
        }),
        window.addEventListener("test", pn, pn),
        window.removeEventListener("test", pn, pn)
    } catch {
        ci = !1
    }
function Ac(e, t, n, r, l, i, o, u, s) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (v) {
        this.onError(v)
    }
}
var Cn = !1
  , Dr = null
  , Ir = !1
  , fi = null
  , Vc = {
    onError: function(e) {
        Cn = !0,
        Dr = e
    }
};
function Hc(e, t, n, r, l, i, o, u, s) {
    Cn = !1,
    Dr = null,
    Ac.apply(Vc, arguments)
}
function Wc(e, t, n, r, l, i, o, u, s) {
    if (Hc.apply(this, arguments),
    Cn) {
        if (Cn) {
            var c = Dr;
            Cn = !1,
            Dr = null
        } else
            throw Error(g(198));
        Ir || (Ir = !0,
        fi = c)
    }
}
function Tt(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Cs(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Go(e) {
    if (Tt(e) !== e)
        throw Error(g(188))
}
function Bc(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Tt(e),
        t === null)
            throw Error(g(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var l = n.return;
        if (l === null)
            break;
        var i = l.alternate;
        if (i === null) {
            if (r = l.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === i.child) {
            for (i = l.child; i; ) {
                if (i === n)
                    return Go(l),
                    e;
                if (i === r)
                    return Go(l),
                    t;
                i = i.sibling
            }
            throw Error(g(188))
        }
        if (n.return !== r.return)
            n = l,
            r = i;
        else {
            for (var o = !1, u = l.child; u; ) {
                if (u === n) {
                    o = !0,
                    n = l,
                    r = i;
                    break
                }
                if (u === r) {
                    o = !0,
                    r = l,
                    n = i;
                    break
                }
                u = u.sibling
            }
            if (!o) {
                for (u = i.child; u; ) {
                    if (u === n) {
                        o = !0,
                        n = i,
                        r = l;
                        break
                    }
                    if (u === r) {
                        o = !0,
                        r = i,
                        n = l;
                        break
                    }
                    u = u.sibling
                }
                if (!o)
                    throw Error(g(189))
            }
        }
        if (n.alternate !== r)
            throw Error(g(190))
    }
    if (n.tag !== 3)
        throw Error(g(188));
    return n.stateNode.current === n ? e : t
}
function _s(e) {
    return e = Bc(e),
    e !== null ? js(e) : null
}
function js(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = js(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Ps = ye.unstable_scheduleCallback
  , Zo = ye.unstable_cancelCallback
  , Qc = ye.unstable_shouldYield
  , Kc = ye.unstable_requestPaint
  , Q = ye.unstable_now
  , Yc = ye.unstable_getCurrentPriorityLevel
  , bi = ye.unstable_ImmediatePriority
  , zs = ye.unstable_UserBlockingPriority
  , Fr = ye.unstable_NormalPriority
  , Xc = ye.unstable_LowPriority
  , Ls = ye.unstable_IdlePriority
  , il = null
  , Fe = null;
function Gc(e) {
    if (Fe && typeof Fe.onCommitFiberRoot == "function")
        try {
            Fe.onCommitFiberRoot(il, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Te = Math.clz32 ? Math.clz32 : qc
  , Zc = Math.log
  , Jc = Math.LN2;
function qc(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Zc(e) / Jc | 0) | 0
}
var ur = 64
  , sr = 4194304;
function Sn(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Ur(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , l = e.suspendedLanes
      , i = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var u = o & ~l;
        u !== 0 ? r = Sn(u) : (i &= o,
        i !== 0 && (r = Sn(i)))
    } else
        o = n & ~l,
        o !== 0 ? r = Sn(o) : i !== 0 && (r = Sn(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r,
    i = t & -t,
    l >= i || l === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Te(t),
            l = 1 << n,
            r |= e[n],
            t &= ~l;
    return r
}
function bc(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function ef(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var o = 31 - Te(i)
          , u = 1 << o
          , s = l[o];
        s === -1 ? (!(u & n) || u & r) && (l[o] = bc(u, t)) : s <= t && (e.expiredLanes |= u),
        i &= ~u
    }
}
function di(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Ts() {
    var e = ur;
    return ur <<= 1,
    !(ur & 4194240) && (ur = 64),
    e
}
function Pl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Jn(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Te(t),
    e[t] = n
}
function tf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var l = 31 - Te(n)
          , i = 1 << l;
        t[l] = 0,
        r[l] = -1,
        e[l] = -1,
        n &= ~i
    }
}
function eo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Te(n)
          , l = 1 << r;
        l & t | e[r] & t && (e[r] |= t),
        n &= ~l
    }
}
var R = 0;
function Ms(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Rs, to, Os, Ds, Is, pi = !1, ar = [], rt = null, lt = null, it = null, In = new Map, Fn = new Map, be = [], nf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Jo(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        rt = null;
        break;
    case "dragenter":
    case "dragleave":
        lt = null;
        break;
    case "mouseover":
    case "mouseout":
        it = null;
        break;
    case "pointerover":
    case "pointerout":
        In.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Fn.delete(t.pointerId)
    }
}
function mn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l]
    },
    t !== null && (t = bn(t),
    t !== null && to(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    l !== null && t.indexOf(l) === -1 && t.push(l),
    e)
}
function rf(e, t, n, r, l) {
    switch (t) {
    case "focusin":
        return rt = mn(rt, e, t, n, r, l),
        !0;
    case "dragenter":
        return lt = mn(lt, e, t, n, r, l),
        !0;
    case "mouseover":
        return it = mn(it, e, t, n, r, l),
        !0;
    case "pointerover":
        var i = l.pointerId;
        return In.set(i, mn(In.get(i) || null, e, t, n, r, l)),
        !0;
    case "gotpointercapture":
        return i = l.pointerId,
        Fn.set(i, mn(Fn.get(i) || null, e, t, n, r, l)),
        !0
    }
    return !1
}
function Fs(e) {
    var t = wt(e.target);
    if (t !== null) {
        var n = Tt(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Cs(n),
                t !== null) {
                    e.blockedOn = t,
                    Is(e.priority, function() {
                        Os(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Er(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = mi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            si = r,
            n.target.dispatchEvent(r),
            si = null
        } else
            return t = bn(n),
            t !== null && to(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function qo(e, t, n) {
    Er(e) && n.delete(t)
}
function lf() {
    pi = !1,
    rt !== null && Er(rt) && (rt = null),
    lt !== null && Er(lt) && (lt = null),
    it !== null && Er(it) && (it = null),
    In.forEach(qo),
    Fn.forEach(qo)
}
function hn(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    pi || (pi = !0,
    ye.unstable_scheduleCallback(ye.unstable_NormalPriority, lf)))
}
function Un(e) {
    function t(l) {
        return hn(l, e)
    }
    if (0 < ar.length) {
        hn(ar[0], e);
        for (var n = 1; n < ar.length; n++) {
            var r = ar[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (rt !== null && hn(rt, e),
    lt !== null && hn(lt, e),
    it !== null && hn(it, e),
    In.forEach(t),
    Fn.forEach(t),
    n = 0; n < be.length; n++)
        r = be[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < be.length && (n = be[0],
    n.blockedOn === null); )
        Fs(n),
        n.blockedOn === null && be.shift()
}
var Zt = Ge.ReactCurrentBatchConfig
  , $r = !0;
function of(e, t, n, r) {
    var l = R
      , i = Zt.transition;
    Zt.transition = null;
    try {
        R = 1,
        no(e, t, n, r)
    } finally {
        R = l,
        Zt.transition = i
    }
}
function uf(e, t, n, r) {
    var l = R
      , i = Zt.transition;
    Zt.transition = null;
    try {
        R = 4,
        no(e, t, n, r)
    } finally {
        R = l,
        Zt.transition = i
    }
}
function no(e, t, n, r) {
    if ($r) {
        var l = mi(e, t, n, r);
        if (l === null)
            Ul(e, t, r, Ar, n),
            Jo(e, r);
        else if (rf(l, e, t, n, r))
            r.stopPropagation();
        else if (Jo(e, r),
        t & 4 && -1 < nf.indexOf(e)) {
            for (; l !== null; ) {
                var i = bn(l);
                if (i !== null && Rs(i),
                i = mi(e, t, n, r),
                i === null && Ul(e, t, r, Ar, n),
                i === l)
                    break;
                l = i
            }
            l !== null && r.stopPropagation()
        } else
            Ul(e, t, r, null, n)
    }
}
var Ar = null;
function mi(e, t, n, r) {
    if (Ar = null,
    e = qi(r),
    e = wt(e),
    e !== null)
        if (t = Tt(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Cs(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Ar = e,
    null
}
function Us(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Yc()) {
        case bi:
            return 1;
        case zs:
            return 4;
        case Fr:
        case Xc:
            return 16;
        case Ls:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var tt = null
  , ro = null
  , Cr = null;
function $s() {
    if (Cr)
        return Cr;
    var e, t = ro, n = t.length, r, l = "value"in tt ? tt.value : tt.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++)
        ;
    return Cr = l.slice(e, 1 < r ? 1 - r : void 0)
}
function _r(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function cr() {
    return !0
}
function bo() {
    return !1
}
function xe(e) {
    function t(n, r, l, i, o) {
        this._reactName = n,
        this._targetInst = l,
        this.type = r,
        this.nativeEvent = i,
        this.target = o,
        this.currentTarget = null;
        for (var u in e)
            e.hasOwnProperty(u) && (n = e[u],
            this[u] = n ? n(i) : i[u]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? cr : bo,
        this.isPropagationStopped = bo,
        this
    }
    return V(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = cr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = cr)
        },
        persist: function() {},
        isPersistent: cr
    }),
    t
}
var sn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, lo = xe(sn), qn = V({}, sn, {
    view: 0,
    detail: 0
}), sf = xe(qn), zl, Ll, vn, ol = V({}, qn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: io,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== vn && (vn && e.type === "mousemove" ? (zl = e.screenX - vn.screenX,
        Ll = e.screenY - vn.screenY) : Ll = zl = 0,
        vn = e),
        zl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Ll
    }
}), eu = xe(ol), af = V({}, ol, {
    dataTransfer: 0
}), cf = xe(af), ff = V({}, qn, {
    relatedTarget: 0
}), Tl = xe(ff), df = V({}, sn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), pf = xe(df), mf = V({}, sn, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), hf = xe(mf), vf = V({}, sn, {
    data: 0
}), tu = xe(vf), yf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, gf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, xf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function wf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = xf[e]) ? !!t[e] : !1
}
function io() {
    return wf
}
var kf = V({}, qn, {
    key: function(e) {
        if (e.key) {
            var t = yf[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = _r(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? gf[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: io,
    charCode: function(e) {
        return e.type === "keypress" ? _r(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? _r(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Sf = xe(kf)
  , Nf = V({}, ol, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , nu = xe(Nf)
  , Ef = V({}, qn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: io
})
  , Cf = xe(Ef)
  , _f = V({}, sn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , jf = xe(_f)
  , Pf = V({}, ol, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , zf = xe(Pf)
  , Lf = [9, 13, 27, 32]
  , oo = Qe && "CompositionEvent"in window
  , _n = null;
Qe && "documentMode"in document && (_n = document.documentMode);
var Tf = Qe && "TextEvent"in window && !_n
  , As = Qe && (!oo || _n && 8 < _n && 11 >= _n)
  , ru = " "
  , lu = !1;
function Vs(e, t) {
    switch (e) {
    case "keyup":
        return Lf.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Hs(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var It = !1;
function Mf(e, t) {
    switch (e) {
    case "compositionend":
        return Hs(t);
    case "keypress":
        return t.which !== 32 ? null : (lu = !0,
        ru);
    case "textInput":
        return e = t.data,
        e === ru && lu ? null : e;
    default:
        return null
    }
}
function Rf(e, t) {
    if (It)
        return e === "compositionend" || !oo && Vs(e, t) ? (e = $s(),
        Cr = ro = tt = null,
        It = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return As && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Of = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function iu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Of[e.type] : t === "textarea"
}
function Ws(e, t, n, r) {
    ws(r),
    t = Vr(t, "onChange"),
    0 < t.length && (n = new lo("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var jn = null
  , $n = null;
function Df(e) {
    ea(e, 0)
}
function ul(e) {
    var t = $t(e);
    if (ps(t))
        return e
}
function If(e, t) {
    if (e === "change")
        return t
}
var Bs = !1;
if (Qe) {
    var Ml;
    if (Qe) {
        var Rl = "oninput"in document;
        if (!Rl) {
            var ou = document.createElement("div");
            ou.setAttribute("oninput", "return;"),
            Rl = typeof ou.oninput == "function"
        }
        Ml = Rl
    } else
        Ml = !1;
    Bs = Ml && (!document.documentMode || 9 < document.documentMode)
}
function uu() {
    jn && (jn.detachEvent("onpropertychange", Qs),
    $n = jn = null)
}
function Qs(e) {
    if (e.propertyName === "value" && ul($n)) {
        var t = [];
        Ws(t, $n, e, qi(e)),
        Es(Df, t)
    }
}
function Ff(e, t, n) {
    e === "focusin" ? (uu(),
    jn = t,
    $n = n,
    jn.attachEvent("onpropertychange", Qs)) : e === "focusout" && uu()
}
function Uf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ul($n)
}
function $f(e, t) {
    if (e === "click")
        return ul(t)
}
function Af(e, t) {
    if (e === "input" || e === "change")
        return ul(t)
}
function Vf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Re = typeof Object.is == "function" ? Object.is : Vf;
function An(e, t) {
    if (Re(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!Zl.call(t, l) || !Re(e[l], t[l]))
            return !1
    }
    return !0
}
function su(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function au(e, t) {
    var n = su(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = su(n)
    }
}
function Ks(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ks(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Ys() {
    for (var e = window, t = Or(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Or(e.document)
    }
    return t
}
function uo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Hf(e) {
    var t = Ys()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ks(n.ownerDocument.documentElement, n)) {
        if (r !== null && uo(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length
                  , i = Math.min(r.start, l);
                r = r.end === void 0 ? i : Math.min(r.end, l),
                !e.extend && i > r && (l = r,
                r = i,
                i = l),
                l = au(n, i);
                var o = au(n, r);
                l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(l.node, l.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Wf = Qe && "documentMode"in document && 11 >= document.documentMode
  , Ft = null
  , hi = null
  , Pn = null
  , vi = !1;
function cu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    vi || Ft == null || Ft !== Or(r) || (r = Ft,
    "selectionStart"in r && uo(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Pn && An(Pn, r) || (Pn = r,
    r = Vr(hi, "onSelect"),
    0 < r.length && (t = new lo("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Ft)))
}
function fr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Ut = {
    animationend: fr("Animation", "AnimationEnd"),
    animationiteration: fr("Animation", "AnimationIteration"),
    animationstart: fr("Animation", "AnimationStart"),
    transitionend: fr("Transition", "TransitionEnd")
}
  , Ol = {}
  , Xs = {};
Qe && (Xs = document.createElement("div").style,
"AnimationEvent"in window || (delete Ut.animationend.animation,
delete Ut.animationiteration.animation,
delete Ut.animationstart.animation),
"TransitionEvent"in window || delete Ut.transitionend.transition);
function sl(e) {
    if (Ol[e])
        return Ol[e];
    if (!Ut[e])
        return e;
    var t = Ut[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Xs)
            return Ol[e] = t[n];
    return e
}
var Gs = sl("animationend")
  , Zs = sl("animationiteration")
  , Js = sl("animationstart")
  , qs = sl("transitionend")
  , bs = new Map
  , fu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function pt(e, t) {
    bs.set(e, t),
    Lt(t, [e])
}
for (var Dl = 0; Dl < fu.length; Dl++) {
    var Il = fu[Dl]
      , Bf = Il.toLowerCase()
      , Qf = Il[0].toUpperCase() + Il.slice(1);
    pt(Bf, "on" + Qf)
}
pt(Gs, "onAnimationEnd");
pt(Zs, "onAnimationIteration");
pt(Js, "onAnimationStart");
pt("dblclick", "onDoubleClick");
pt("focusin", "onFocus");
pt("focusout", "onBlur");
pt(qs, "onTransitionEnd");
bt("onMouseEnter", ["mouseout", "mouseover"]);
bt("onMouseLeave", ["mouseout", "mouseover"]);
bt("onPointerEnter", ["pointerout", "pointerover"]);
bt("onPointerLeave", ["pointerout", "pointerover"]);
Lt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Lt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Lt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Lt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Lt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Lt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Nn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Kf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));
function du(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Wc(r, t, void 0, e),
    e.currentTarget = null
}
function ea(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , l = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var u = r[o]
                      , s = u.instance
                      , c = u.currentTarget;
                    if (u = u.listener,
                    s !== i && l.isPropagationStopped())
                        break e;
                    du(l, u, c),
                    i = s
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (u = r[o],
                    s = u.instance,
                    c = u.currentTarget,
                    u = u.listener,
                    s !== i && l.isPropagationStopped())
                        break e;
                    du(l, u, c),
                    i = s
                }
        }
    }
    if (Ir)
        throw e = fi,
        Ir = !1,
        fi = null,
        e
}
function D(e, t) {
    var n = t[ki];
    n === void 0 && (n = t[ki] = new Set);
    var r = e + "__bubble";
    n.has(r) || (ta(t, e, 2, !1),
    n.add(r))
}
function Fl(e, t, n) {
    var r = 0;
    t && (r |= 4),
    ta(n, e, r, t)
}
var dr = "_reactListening" + Math.random().toString(36).slice(2);
function Vn(e) {
    if (!e[dr]) {
        e[dr] = !0,
        ss.forEach(function(n) {
            n !== "selectionchange" && (Kf.has(n) || Fl(n, !1, e),
            Fl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[dr] || (t[dr] = !0,
        Fl("selectionchange", !1, t))
    }
}
function ta(e, t, n, r) {
    switch (Us(t)) {
    case 1:
        var l = of;
        break;
    case 4:
        l = uf;
        break;
    default:
        l = no
    }
    n = l.bind(null, t, n, e),
    l = void 0,
    !ci || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0),
    r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}
function Ul(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var u = r.stateNode.containerInfo;
                if (u === l || u.nodeType === 8 && u.parentNode === l)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var s = o.tag;
                        if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo,
                        s === l || s.nodeType === 8 && s.parentNode === l))
                            return;
                        o = o.return
                    }
                for (; u !== null; ) {
                    if (o = wt(u),
                    o === null)
                        return;
                    if (s = o.tag,
                    s === 5 || s === 6) {
                        r = i = o;
                        continue e
                    }
                    u = u.parentNode
                }
            }
            r = r.return
        }
    Es(function() {
        var c = i
          , v = qi(n)
          , h = [];
        e: {
            var m = bs.get(e);
            if (m !== void 0) {
                var x = lo
                  , w = e;
                switch (e) {
                case "keypress":
                    if (_r(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    x = Sf;
                    break;
                case "focusin":
                    w = "focus",
                    x = Tl;
                    break;
                case "focusout":
                    w = "blur",
                    x = Tl;
                    break;
                case "beforeblur":
                case "afterblur":
                    x = Tl;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    x = eu;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    x = cf;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    x = Cf;
                    break;
                case Gs:
                case Zs:
                case Js:
                    x = pf;
                    break;
                case qs:
                    x = jf;
                    break;
                case "scroll":
                    x = sf;
                    break;
                case "wheel":
                    x = zf;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    x = hf;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    x = nu
                }
                var k = (t & 4) !== 0
                  , F = !k && e === "scroll"
                  , f = k ? m !== null ? m + "Capture" : null : m;
                k = [];
                for (var a = c, d; a !== null; ) {
                    d = a;
                    var y = d.stateNode;
                    if (d.tag === 5 && y !== null && (d = y,
                    f !== null && (y = Dn(a, f),
                    y != null && k.push(Hn(a, y, d)))),
                    F)
                        break;
                    a = a.return
                }
                0 < k.length && (m = new x(m,w,null,n,v),
                h.push({
                    event: m,
                    listeners: k
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover",
                x = e === "mouseout" || e === "pointerout",
                m && n !== si && (w = n.relatedTarget || n.fromElement) && (wt(w) || w[Ke]))
                    break e;
                if ((x || m) && (m = v.window === v ? v : (m = v.ownerDocument) ? m.defaultView || m.parentWindow : window,
                x ? (w = n.relatedTarget || n.toElement,
                x = c,
                w = w ? wt(w) : null,
                w !== null && (F = Tt(w),
                w !== F || w.tag !== 5 && w.tag !== 6) && (w = null)) : (x = null,
                w = c),
                x !== w)) {
                    if (k = eu,
                    y = "onMouseLeave",
                    f = "onMouseEnter",
                    a = "mouse",
                    (e === "pointerout" || e === "pointerover") && (k = nu,
                    y = "onPointerLeave",
                    f = "onPointerEnter",
                    a = "pointer"),
                    F = x == null ? m : $t(x),
                    d = w == null ? m : $t(w),
                    m = new k(y,a + "leave",x,n,v),
                    m.target = F,
                    m.relatedTarget = d,
                    y = null,
                    wt(v) === c && (k = new k(f,a + "enter",w,n,v),
                    k.target = d,
                    k.relatedTarget = F,
                    y = k),
                    F = y,
                    x && w)
                        t: {
                            for (k = x,
                            f = w,
                            a = 0,
                            d = k; d; d = Mt(d))
                                a++;
                            for (d = 0,
                            y = f; y; y = Mt(y))
                                d++;
                            for (; 0 < a - d; )
                                k = Mt(k),
                                a--;
                            for (; 0 < d - a; )
                                f = Mt(f),
                                d--;
                            for (; a--; ) {
                                if (k === f || f !== null && k === f.alternate)
                                    break t;
                                k = Mt(k),
                                f = Mt(f)
                            }
                            k = null
                        }
                    else
                        k = null;
                    x !== null && pu(h, m, x, k, !1),
                    w !== null && F !== null && pu(h, F, w, k, !0)
                }
            }
            e: {
                if (m = c ? $t(c) : window,
                x = m.nodeName && m.nodeName.toLowerCase(),
                x === "select" || x === "input" && m.type === "file")
                    var N = If;
                else if (iu(m))
                    if (Bs)
                        N = Af;
                    else {
                        N = Uf;
                        var C = Ff
                    }
                else
                    (x = m.nodeName) && x.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (N = $f);
                if (N && (N = N(e, c))) {
                    Ws(h, N, n, v);
                    break e
                }
                C && C(e, m, c),
                e === "focusout" && (C = m._wrapperState) && C.controlled && m.type === "number" && ri(m, "number", m.value)
            }
            switch (C = c ? $t(c) : window,
            e) {
            case "focusin":
                (iu(C) || C.contentEditable === "true") && (Ft = C,
                hi = c,
                Pn = null);
                break;
            case "focusout":
                Pn = hi = Ft = null;
                break;
            case "mousedown":
                vi = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                vi = !1,
                cu(h, n, v);
                break;
            case "selectionchange":
                if (Wf)
                    break;
            case "keydown":
            case "keyup":
                cu(h, n, v)
            }
            var _;
            if (oo)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var j = "onCompositionStart";
                        break e;
                    case "compositionend":
                        j = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        j = "onCompositionUpdate";
                        break e
                    }
                    j = void 0
                }
            else
                It ? Vs(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
            j && (As && n.locale !== "ko" && (It || j !== "onCompositionStart" ? j === "onCompositionEnd" && It && (_ = $s()) : (tt = v,
            ro = "value"in tt ? tt.value : tt.textContent,
            It = !0)),
            C = Vr(c, j),
            0 < C.length && (j = new tu(j,e,null,n,v),
            h.push({
                event: j,
                listeners: C
            }),
            _ ? j.data = _ : (_ = Hs(n),
            _ !== null && (j.data = _)))),
            (_ = Tf ? Mf(e, n) : Rf(e, n)) && (c = Vr(c, "onBeforeInput"),
            0 < c.length && (v = new tu("onBeforeInput","beforeinput",null,n,v),
            h.push({
                event: v,
                listeners: c
            }),
            v.data = _))
        }
        ea(h, t)
    })
}
function Hn(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Vr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var l = e
          , i = l.stateNode;
        l.tag === 5 && i !== null && (l = i,
        i = Dn(e, n),
        i != null && r.unshift(Hn(e, i, l)),
        i = Dn(e, t),
        i != null && r.push(Hn(e, i, l))),
        e = e.return
    }
    return r
}
function Mt(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function pu(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
        var u = n
          , s = u.alternate
          , c = u.stateNode;
        if (s !== null && s === r)
            break;
        u.tag === 5 && c !== null && (u = c,
        l ? (s = Dn(n, i),
        s != null && o.unshift(Hn(n, s, u))) : l || (s = Dn(n, i),
        s != null && o.push(Hn(n, s, u)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var Yf = /\r\n?/g
  , Xf = /\u0000|\uFFFD/g;
function mu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Yf, `
`).replace(Xf, "")
}
function pr(e, t, n) {
    if (t = mu(t),
    mu(e) !== t && n)
        throw Error(g(425))
}
function Hr() {}
var yi = null
  , gi = null;
function xi(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var wi = typeof setTimeout == "function" ? setTimeout : void 0
  , Gf = typeof clearTimeout == "function" ? clearTimeout : void 0
  , hu = typeof Promise == "function" ? Promise : void 0
  , Zf = typeof queueMicrotask == "function" ? queueMicrotask : typeof hu < "u" ? function(e) {
    return hu.resolve(null).then(e).catch(Jf)
}
: wi;
function Jf(e) {
    setTimeout(function() {
        throw e
    })
}
function $l(e, t) {
    var n = t
      , r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n),
        l && l.nodeType === 8)
            if (n = l.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(l),
                    Un(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Un(t)
}
function ot(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function vu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var an = Math.random().toString(36).slice(2)
  , Ie = "__reactFiber$" + an
  , Wn = "__reactProps$" + an
  , Ke = "__reactContainer$" + an
  , ki = "__reactEvents$" + an
  , qf = "__reactListeners$" + an
  , bf = "__reactHandles$" + an;
function wt(e) {
    var t = e[Ie];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Ke] || n[Ie]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = vu(e); e !== null; ) {
                    if (n = e[Ie])
                        return n;
                    e = vu(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function bn(e) {
    return e = e[Ie] || e[Ke],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function $t(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(g(33))
}
function al(e) {
    return e[Wn] || null
}
var Si = []
  , At = -1;
function mt(e) {
    return {
        current: e
    }
}
function I(e) {
    0 > At || (e.current = Si[At],
    Si[At] = null,
    At--)
}
function O(e, t) {
    At++,
    Si[At] = e.current,
    e.current = t
}
var dt = {}
  , le = mt(dt)
  , fe = mt(!1)
  , Ct = dt;
function en(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return dt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i;
    for (i in n)
        l[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = l),
    l
}
function de(e) {
    return e = e.childContextTypes,
    e != null
}
function Wr() {
    I(fe),
    I(le)
}
function yu(e, t, n) {
    if (le.current !== dt)
        throw Error(g(168));
    O(le, t),
    O(fe, n)
}
function na(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t))
            throw Error(g(108, Ic(e) || "Unknown", l));
    return V({}, n, r)
}
function Br(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || dt,
    Ct = le.current,
    O(le, e),
    O(fe, fe.current),
    !0
}
function gu(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(g(169));
    n ? (e = na(e, t, Ct),
    r.__reactInternalMemoizedMergedChildContext = e,
    I(fe),
    I(le),
    O(le, e)) : I(fe),
    O(fe, n)
}
var Ve = null
  , cl = !1
  , Al = !1;
function ra(e) {
    Ve === null ? Ve = [e] : Ve.push(e)
}
function ed(e) {
    cl = !0,
    ra(e)
}
function ht() {
    if (!Al && Ve !== null) {
        Al = !0;
        var e = 0
          , t = R;
        try {
            var n = Ve;
            for (R = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Ve = null,
            cl = !1
        } catch (l) {
            throw Ve !== null && (Ve = Ve.slice(e + 1)),
            Ps(bi, ht),
            l
        } finally {
            R = t,
            Al = !1
        }
    }
    return null
}
var Vt = []
  , Ht = 0
  , Qr = null
  , Kr = 0
  , we = []
  , ke = 0
  , _t = null
  , He = 1
  , We = "";
function gt(e, t) {
    Vt[Ht++] = Kr,
    Vt[Ht++] = Qr,
    Qr = e,
    Kr = t
}
function la(e, t, n) {
    we[ke++] = He,
    we[ke++] = We,
    we[ke++] = _t,
    _t = e;
    var r = He;
    e = We;
    var l = 32 - Te(r) - 1;
    r &= ~(1 << l),
    n += 1;
    var i = 32 - Te(t) + l;
    if (30 < i) {
        var o = l - l % 5;
        i = (r & (1 << o) - 1).toString(32),
        r >>= o,
        l -= o,
        He = 1 << 32 - Te(t) + l | n << l | r,
        We = i + e
    } else
        He = 1 << i | n << l | r,
        We = e
}
function so(e) {
    e.return !== null && (gt(e, 1),
    la(e, 1, 0))
}
function ao(e) {
    for (; e === Qr; )
        Qr = Vt[--Ht],
        Vt[Ht] = null,
        Kr = Vt[--Ht],
        Vt[Ht] = null;
    for (; e === _t; )
        _t = we[--ke],
        we[ke] = null,
        We = we[--ke],
        we[ke] = null,
        He = we[--ke],
        we[ke] = null
}
var ve = null
  , he = null
  , U = !1
  , Le = null;
function ia(e, t) {
    var n = Se(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function xu(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        ve = e,
        he = ot(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        ve = e,
        he = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = _t !== null ? {
            id: He,
            overflow: We
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Se(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        ve = e,
        he = null,
        !0) : !1;
    default:
        return !1
    }
}
function Ni(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Ei(e) {
    if (U) {
        var t = he;
        if (t) {
            var n = t;
            if (!xu(e, t)) {
                if (Ni(e))
                    throw Error(g(418));
                t = ot(n.nextSibling);
                var r = ve;
                t && xu(e, t) ? ia(r, n) : (e.flags = e.flags & -4097 | 2,
                U = !1,
                ve = e)
            }
        } else {
            if (Ni(e))
                throw Error(g(418));
            e.flags = e.flags & -4097 | 2,
            U = !1,
            ve = e
        }
    }
}
function wu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    ve = e
}
function mr(e) {
    if (e !== ve)
        return !1;
    if (!U)
        return wu(e),
        U = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !xi(e.type, e.memoizedProps)),
    t && (t = he)) {
        if (Ni(e))
            throw oa(),
            Error(g(418));
        for (; t; )
            ia(e, t),
            t = ot(t.nextSibling)
    }
    if (wu(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(g(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            he = ot(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            he = null
        }
    } else
        he = ve ? ot(e.stateNode.nextSibling) : null;
    return !0
}
function oa() {
    for (var e = he; e; )
        e = ot(e.nextSibling)
}
function tn() {
    he = ve = null,
    U = !1
}
function co(e) {
    Le === null ? Le = [e] : Le.push(e)
}
var td = Ge.ReactCurrentBatchConfig;
function yn(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(g(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(g(147, e));
            var l = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var u = l.refs;
                o === null ? delete u[i] : u[i] = o
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(g(284));
        if (!n._owner)
            throw Error(g(290, e))
    }
    return e
}
function hr(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(g(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function ku(e) {
    var t = e._init;
    return t(e._payload)
}
function ua(e) {
    function t(f, a) {
        if (e) {
            var d = f.deletions;
            d === null ? (f.deletions = [a],
            f.flags |= 16) : d.push(a)
        }
    }
    function n(f, a) {
        if (!e)
            return null;
        for (; a !== null; )
            t(f, a),
            a = a.sibling;
        return null
    }
    function r(f, a) {
        for (f = new Map; a !== null; )
            a.key !== null ? f.set(a.key, a) : f.set(a.index, a),
            a = a.sibling;
        return f
    }
    function l(f, a) {
        return f = ct(f, a),
        f.index = 0,
        f.sibling = null,
        f
    }
    function i(f, a, d) {
        return f.index = d,
        e ? (d = f.alternate,
        d !== null ? (d = d.index,
        d < a ? (f.flags |= 2,
        a) : d) : (f.flags |= 2,
        a)) : (f.flags |= 1048576,
        a)
    }
    function o(f) {
        return e && f.alternate === null && (f.flags |= 2),
        f
    }
    function u(f, a, d, y) {
        return a === null || a.tag !== 6 ? (a = Yl(d, f.mode, y),
        a.return = f,
        a) : (a = l(a, d),
        a.return = f,
        a)
    }
    function s(f, a, d, y) {
        var N = d.type;
        return N === Dt ? v(f, a, d.props.children, y, d.key) : a !== null && (a.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Je && ku(N) === a.type) ? (y = l(a, d.props),
        y.ref = yn(f, a, d),
        y.return = f,
        y) : (y = Rr(d.type, d.key, d.props, null, f.mode, y),
        y.ref = yn(f, a, d),
        y.return = f,
        y)
    }
    function c(f, a, d, y) {
        return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = Xl(d, f.mode, y),
        a.return = f,
        a) : (a = l(a, d.children || []),
        a.return = f,
        a)
    }
    function v(f, a, d, y, N) {
        return a === null || a.tag !== 7 ? (a = Et(d, f.mode, y, N),
        a.return = f,
        a) : (a = l(a, d),
        a.return = f,
        a)
    }
    function h(f, a, d) {
        if (typeof a == "string" && a !== "" || typeof a == "number")
            return a = Yl("" + a, f.mode, d),
            a.return = f,
            a;
        if (typeof a == "object" && a !== null) {
            switch (a.$$typeof) {
            case lr:
                return d = Rr(a.type, a.key, a.props, null, f.mode, d),
                d.ref = yn(f, null, a),
                d.return = f,
                d;
            case Ot:
                return a = Xl(a, f.mode, d),
                a.return = f,
                a;
            case Je:
                var y = a._init;
                return h(f, y(a._payload), d)
            }
            if (kn(a) || dn(a))
                return a = Et(a, f.mode, d, null),
                a.return = f,
                a;
            hr(f, a)
        }
        return null
    }
    function m(f, a, d, y) {
        var N = a !== null ? a.key : null;
        if (typeof d == "string" && d !== "" || typeof d == "number")
            return N !== null ? null : u(f, a, "" + d, y);
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
            case lr:
                return d.key === N ? s(f, a, d, y) : null;
            case Ot:
                return d.key === N ? c(f, a, d, y) : null;
            case Je:
                return N = d._init,
                m(f, a, N(d._payload), y)
            }
            if (kn(d) || dn(d))
                return N !== null ? null : v(f, a, d, y, null);
            hr(f, d)
        }
        return null
    }
    function x(f, a, d, y, N) {
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return f = f.get(d) || null,
            u(a, f, "" + y, N);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case lr:
                return f = f.get(y.key === null ? d : y.key) || null,
                s(a, f, y, N);
            case Ot:
                return f = f.get(y.key === null ? d : y.key) || null,
                c(a, f, y, N);
            case Je:
                var C = y._init;
                return x(f, a, d, C(y._payload), N)
            }
            if (kn(y) || dn(y))
                return f = f.get(d) || null,
                v(a, f, y, N, null);
            hr(a, y)
        }
        return null
    }
    function w(f, a, d, y) {
        for (var N = null, C = null, _ = a, j = a = 0, W = null; _ !== null && j < d.length; j++) {
            _.index > j ? (W = _,
            _ = null) : W = _.sibling;
            var T = m(f, _, d[j], y);
            if (T === null) {
                _ === null && (_ = W);
                break
            }
            e && _ && T.alternate === null && t(f, _),
            a = i(T, a, j),
            C === null ? N = T : C.sibling = T,
            C = T,
            _ = W
        }
        if (j === d.length)
            return n(f, _),
            U && gt(f, j),
            N;
        if (_ === null) {
            for (; j < d.length; j++)
                _ = h(f, d[j], y),
                _ !== null && (a = i(_, a, j),
                C === null ? N = _ : C.sibling = _,
                C = _);
            return U && gt(f, j),
            N
        }
        for (_ = r(f, _); j < d.length; j++)
            W = x(_, f, j, d[j], y),
            W !== null && (e && W.alternate !== null && _.delete(W.key === null ? j : W.key),
            a = i(W, a, j),
            C === null ? N = W : C.sibling = W,
            C = W);
        return e && _.forEach(function(_e) {
            return t(f, _e)
        }),
        U && gt(f, j),
        N
    }
    function k(f, a, d, y) {
        var N = dn(d);
        if (typeof N != "function")
            throw Error(g(150));
        if (d = N.call(d),
        d == null)
            throw Error(g(151));
        for (var C = N = null, _ = a, j = a = 0, W = null, T = d.next(); _ !== null && !T.done; j++,
        T = d.next()) {
            _.index > j ? (W = _,
            _ = null) : W = _.sibling;
            var _e = m(f, _, T.value, y);
            if (_e === null) {
                _ === null && (_ = W);
                break
            }
            e && _ && _e.alternate === null && t(f, _),
            a = i(_e, a, j),
            C === null ? N = _e : C.sibling = _e,
            C = _e,
            _ = W
        }
        if (T.done)
            return n(f, _),
            U && gt(f, j),
            N;
        if (_ === null) {
            for (; !T.done; j++,
            T = d.next())
                T = h(f, T.value, y),
                T !== null && (a = i(T, a, j),
                C === null ? N = T : C.sibling = T,
                C = T);
            return U && gt(f, j),
            N
        }
        for (_ = r(f, _); !T.done; j++,
        T = d.next())
            T = x(_, f, j, T.value, y),
            T !== null && (e && T.alternate !== null && _.delete(T.key === null ? j : T.key),
            a = i(T, a, j),
            C === null ? N = T : C.sibling = T,
            C = T);
        return e && _.forEach(function(cn) {
            return t(f, cn)
        }),
        U && gt(f, j),
        N
    }
    function F(f, a, d, y) {
        if (typeof d == "object" && d !== null && d.type === Dt && d.key === null && (d = d.props.children),
        typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
            case lr:
                e: {
                    for (var N = d.key, C = a; C !== null; ) {
                        if (C.key === N) {
                            if (N = d.type,
                            N === Dt) {
                                if (C.tag === 7) {
                                    n(f, C.sibling),
                                    a = l(C, d.props.children),
                                    a.return = f,
                                    f = a;
                                    break e
                                }
                            } else if (C.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Je && ku(N) === C.type) {
                                n(f, C.sibling),
                                a = l(C, d.props),
                                a.ref = yn(f, C, d),
                                a.return = f,
                                f = a;
                                break e
                            }
                            n(f, C);
                            break
                        } else
                            t(f, C);
                        C = C.sibling
                    }
                    d.type === Dt ? (a = Et(d.props.children, f.mode, y, d.key),
                    a.return = f,
                    f = a) : (y = Rr(d.type, d.key, d.props, null, f.mode, y),
                    y.ref = yn(f, a, d),
                    y.return = f,
                    f = y)
                }
                return o(f);
            case Ot:
                e: {
                    for (C = d.key; a !== null; ) {
                        if (a.key === C)
                            if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                                n(f, a.sibling),
                                a = l(a, d.children || []),
                                a.return = f,
                                f = a;
                                break e
                            } else {
                                n(f, a);
                                break
                            }
                        else
                            t(f, a);
                        a = a.sibling
                    }
                    a = Xl(d, f.mode, y),
                    a.return = f,
                    f = a
                }
                return o(f);
            case Je:
                return C = d._init,
                F(f, a, C(d._payload), y)
            }
            if (kn(d))
                return w(f, a, d, y);
            if (dn(d))
                return k(f, a, d, y);
            hr(f, d)
        }
        return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d,
        a !== null && a.tag === 6 ? (n(f, a.sibling),
        a = l(a, d),
        a.return = f,
        f = a) : (n(f, a),
        a = Yl(d, f.mode, y),
        a.return = f,
        f = a),
        o(f)) : n(f, a)
    }
    return F
}
var nn = ua(!0)
  , sa = ua(!1)
  , Yr = mt(null)
  , Xr = null
  , Wt = null
  , fo = null;
function po() {
    fo = Wt = Xr = null
}
function mo(e) {
    var t = Yr.current;
    I(Yr),
    e._currentValue = t
}
function Ci(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Jt(e, t) {
    Xr = e,
    fo = Wt = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (ce = !0),
    e.firstContext = null)
}
function Ee(e) {
    var t = e._currentValue;
    if (fo !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Wt === null) {
            if (Xr === null)
                throw Error(g(308));
            Wt = e,
            Xr.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Wt = Wt.next = e;
    return t
}
var kt = null;
function ho(e) {
    kt === null ? kt = [e] : kt.push(e)
}
function aa(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n,
    ho(t)) : (n.next = l.next,
    l.next = n),
    t.interleaved = n,
    Ye(e, r)
}
function Ye(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var qe = !1;
function vo(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function ca(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Be(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function ut(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    M & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next,
        l.next = t),
        r.pending = t,
        Ye(e, n)
    }
    return l = r.interleaved,
    l === null ? (t.next = t,
    ho(r)) : (t.next = l.next,
    l.next = t),
    r.interleaved = t,
    Ye(e, n)
}
function jr(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        eo(e, n)
    }
}
function Su(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var l = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? l = i = o : i = i.next = o,
                n = n.next
            } while (n !== null);
            i === null ? l = i = t : i = i.next = t
        } else
            l = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Gr(e, t, n, r) {
    var l = e.updateQueue;
    qe = !1;
    var i = l.firstBaseUpdate
      , o = l.lastBaseUpdate
      , u = l.shared.pending;
    if (u !== null) {
        l.shared.pending = null;
        var s = u
          , c = s.next;
        s.next = null,
        o === null ? i = c : o.next = c,
        o = s;
        var v = e.alternate;
        v !== null && (v = v.updateQueue,
        u = v.lastBaseUpdate,
        u !== o && (u === null ? v.firstBaseUpdate = c : u.next = c,
        v.lastBaseUpdate = s))
    }
    if (i !== null) {
        var h = l.baseState;
        o = 0,
        v = c = s = null,
        u = i;
        do {
            var m = u.lane
              , x = u.eventTime;
            if ((r & m) === m) {
                v !== null && (v = v.next = {
                    eventTime: x,
                    lane: 0,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                });
                e: {
                    var w = e
                      , k = u;
                    switch (m = t,
                    x = n,
                    k.tag) {
                    case 1:
                        if (w = k.payload,
                        typeof w == "function") {
                            h = w.call(x, h, m);
                            break e
                        }
                        h = w;
                        break e;
                    case 3:
                        w.flags = w.flags & -65537 | 128;
                    case 0:
                        if (w = k.payload,
                        m = typeof w == "function" ? w.call(x, h, m) : w,
                        m == null)
                            break e;
                        h = V({}, h, m);
                        break e;
                    case 2:
                        qe = !0
                    }
                }
                u.callback !== null && u.lane !== 0 && (e.flags |= 64,
                m = l.effects,
                m === null ? l.effects = [u] : m.push(u))
            } else
                x = {
                    eventTime: x,
                    lane: m,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                },
                v === null ? (c = v = x,
                s = h) : v = v.next = x,
                o |= m;
            if (u = u.next,
            u === null) {
                if (u = l.shared.pending,
                u === null)
                    break;
                m = u,
                u = m.next,
                m.next = null,
                l.lastBaseUpdate = m,
                l.shared.pending = null
            }
        } while (!0);
        if (v === null && (s = h),
        l.baseState = s,
        l.firstBaseUpdate = c,
        l.lastBaseUpdate = v,
        t = l.shared.interleaved,
        t !== null) {
            l = t;
            do
                o |= l.lane,
                l = l.next;
            while (l !== t)
        } else
            i === null && (l.shared.lanes = 0);
        Pt |= o,
        e.lanes = o,
        e.memoizedState = h
    }
}
function Nu(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , l = r.callback;
            if (l !== null) {
                if (r.callback = null,
                r = n,
                typeof l != "function")
                    throw Error(g(191, l));
                l.call(r)
            }
        }
}
var er = {}
  , Ue = mt(er)
  , Bn = mt(er)
  , Qn = mt(er);
function St(e) {
    if (e === er)
        throw Error(g(174));
    return e
}
function yo(e, t) {
    switch (O(Qn, t),
    O(Bn, e),
    O(Ue, er),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ii(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = ii(t, e)
    }
    I(Ue),
    O(Ue, t)
}
function rn() {
    I(Ue),
    I(Bn),
    I(Qn)
}
function fa(e) {
    St(Qn.current);
    var t = St(Ue.current)
      , n = ii(t, e.type);
    t !== n && (O(Bn, e),
    O(Ue, n))
}
function go(e) {
    Bn.current === e && (I(Ue),
    I(Bn))
}
var $ = mt(0);
function Zr(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Vl = [];
function xo() {
    for (var e = 0; e < Vl.length; e++)
        Vl[e]._workInProgressVersionPrimary = null;
    Vl.length = 0
}
var Pr = Ge.ReactCurrentDispatcher
  , Hl = Ge.ReactCurrentBatchConfig
  , jt = 0
  , A = null
  , Y = null
  , Z = null
  , Jr = !1
  , zn = !1
  , Kn = 0
  , nd = 0;
function te() {
    throw Error(g(321))
}
function wo(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Re(e[n], t[n]))
            return !1;
    return !0
}
function ko(e, t, n, r, l, i) {
    if (jt = i,
    A = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Pr.current = e === null || e.memoizedState === null ? od : ud,
    e = n(r, l),
    zn) {
        i = 0;
        do {
            if (zn = !1,
            Kn = 0,
            25 <= i)
                throw Error(g(301));
            i += 1,
            Z = Y = null,
            t.updateQueue = null,
            Pr.current = sd,
            e = n(r, l)
        } while (zn)
    }
    if (Pr.current = qr,
    t = Y !== null && Y.next !== null,
    jt = 0,
    Z = Y = A = null,
    Jr = !1,
    t)
        throw Error(g(300));
    return e
}
function So() {
    var e = Kn !== 0;
    return Kn = 0,
    e
}
function De() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Z === null ? A.memoizedState = Z = e : Z = Z.next = e,
    Z
}
function Ce() {
    if (Y === null) {
        var e = A.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Y.next;
    var t = Z === null ? A.memoizedState : Z.next;
    if (t !== null)
        Z = t,
        Y = e;
    else {
        if (e === null)
            throw Error(g(310));
        Y = e,
        e = {
            memoizedState: Y.memoizedState,
            baseState: Y.baseState,
            baseQueue: Y.baseQueue,
            queue: Y.queue,
            next: null
        },
        Z === null ? A.memoizedState = Z = e : Z = Z.next = e
    }
    return Z
}
function Yn(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Wl(e) {
    var t = Ce()
      , n = t.queue;
    if (n === null)
        throw Error(g(311));
    n.lastRenderedReducer = e;
    var r = Y
      , l = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (l !== null) {
            var o = l.next;
            l.next = i.next,
            i.next = o
        }
        r.baseQueue = l = i,
        n.pending = null
    }
    if (l !== null) {
        i = l.next,
        r = r.baseState;
        var u = o = null
          , s = null
          , c = i;
        do {
            var v = c.lane;
            if ((jt & v) === v)
                s !== null && (s = s.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var h = {
                    lane: v,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                s === null ? (u = s = h,
                o = r) : s = s.next = h,
                A.lanes |= v,
                Pt |= v
            }
            c = c.next
        } while (c !== null && c !== i);
        s === null ? o = r : s.next = u,
        Re(r, t.memoizedState) || (ce = !0),
        t.memoizedState = r,
        t.baseState = o,
        t.baseQueue = s,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        l = e;
        do
            i = l.lane,
            A.lanes |= i,
            Pt |= i,
            l = l.next;
        while (l !== e)
    } else
        l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Bl(e) {
    var t = Ce()
      , n = t.queue;
    if (n === null)
        throw Error(g(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , l = n.pending
      , i = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var o = l = l.next;
        do
            i = e(i, o.action),
            o = o.next;
        while (o !== l);
        Re(i, t.memoizedState) || (ce = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function da() {}
function pa(e, t) {
    var n = A
      , r = Ce()
      , l = t()
      , i = !Re(r.memoizedState, l);
    if (i && (r.memoizedState = l,
    ce = !0),
    r = r.queue,
    No(va.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || Z !== null && Z.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Xn(9, ha.bind(null, n, r, l, t), void 0, null),
        J === null)
            throw Error(g(349));
        jt & 30 || ma(n, t, l)
    }
    return l
}
function ma(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = A.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    A.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function ha(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    ya(t) && ga(e)
}
function va(e, t, n) {
    return n(function() {
        ya(t) && ga(e)
    })
}
function ya(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Re(e, n)
    } catch {
        return !0
    }
}
function ga(e) {
    var t = Ye(e, 1);
    t !== null && Me(t, e, 1, -1)
}
function Eu(e) {
    var t = De();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yn,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = id.bind(null, A, e),
    [t.memoizedState, e]
}
function Xn(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = A.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    A.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function xa() {
    return Ce().memoizedState
}
function zr(e, t, n, r) {
    var l = De();
    A.flags |= e,
    l.memoizedState = Xn(1 | t, n, void 0, r === void 0 ? null : r)
}
function fl(e, t, n, r) {
    var l = Ce();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Y !== null) {
        var o = Y.memoizedState;
        if (i = o.destroy,
        r !== null && wo(r, o.deps)) {
            l.memoizedState = Xn(t, n, i, r);
            return
        }
    }
    A.flags |= e,
    l.memoizedState = Xn(1 | t, n, i, r)
}
function Cu(e, t) {
    return zr(8390656, 8, e, t)
}
function No(e, t) {
    return fl(2048, 8, e, t)
}
function wa(e, t) {
    return fl(4, 2, e, t)
}
function ka(e, t) {
    return fl(4, 4, e, t)
}
function Sa(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Na(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    fl(4, 4, Sa.bind(null, t, e), n)
}
function Eo() {}
function Ea(e, t) {
    var n = Ce();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wo(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Ca(e, t) {
    var n = Ce();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wo(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function _a(e, t, n) {
    return jt & 21 ? (Re(n, t) || (n = Ts(),
    A.lanes |= n,
    Pt |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    ce = !0),
    e.memoizedState = n)
}
function rd(e, t) {
    var n = R;
    R = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Hl.transition;
    Hl.transition = {};
    try {
        e(!1),
        t()
    } finally {
        R = n,
        Hl.transition = r
    }
}
function ja() {
    return Ce().memoizedState
}
function ld(e, t, n) {
    var r = at(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Pa(e))
        za(t, n);
    else if (n = aa(e, t, n, r),
    n !== null) {
        var l = oe();
        Me(n, e, r, l),
        La(n, t, r)
    }
}
function id(e, t, n) {
    var r = at(e)
      , l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Pa(e))
        za(t, l);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var o = t.lastRenderedState
                  , u = i(o, n);
                if (l.hasEagerState = !0,
                l.eagerState = u,
                Re(u, o)) {
                    var s = t.interleaved;
                    s === null ? (l.next = l,
                    ho(t)) : (l.next = s.next,
                    s.next = l),
                    t.interleaved = l;
                    return
                }
            } catch {} finally {}
        n = aa(e, t, l, r),
        n !== null && (l = oe(),
        Me(n, e, r, l),
        La(n, t, r))
    }
}
function Pa(e) {
    var t = e.alternate;
    return e === A || t !== null && t === A
}
function za(e, t) {
    zn = Jr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function La(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        eo(e, n)
    }
}
var qr = {
    readContext: Ee,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useInsertionEffect: te,
    useLayoutEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useMutableSource: te,
    useSyncExternalStore: te,
    useId: te,
    unstable_isNewReconciler: !1
}
  , od = {
    readContext: Ee,
    useCallback: function(e, t) {
        return De().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Ee,
    useEffect: Cu,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        zr(4194308, 4, Sa.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return zr(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return zr(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = De();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = De();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = ld.bind(null, A, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = De();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Eu,
    useDebugValue: Eo,
    useDeferredValue: function(e) {
        return De().memoizedState = e
    },
    useTransition: function() {
        var e = Eu(!1)
          , t = e[0];
        return e = rd.bind(null, e[1]),
        De().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = A
          , l = De();
        if (U) {
            if (n === void 0)
                throw Error(g(407));
            n = n()
        } else {
            if (n = t(),
            J === null)
                throw Error(g(349));
            jt & 30 || ma(r, t, n)
        }
        l.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return l.queue = i,
        Cu(va.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        Xn(9, ha.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = De()
          , t = J.identifierPrefix;
        if (U) {
            var n = We
              , r = He;
            n = (r & ~(1 << 32 - Te(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Kn++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = nd++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , ud = {
    readContext: Ee,
    useCallback: Ea,
    useContext: Ee,
    useEffect: No,
    useImperativeHandle: Na,
    useInsertionEffect: wa,
    useLayoutEffect: ka,
    useMemo: Ca,
    useReducer: Wl,
    useRef: xa,
    useState: function() {
        return Wl(Yn)
    },
    useDebugValue: Eo,
    useDeferredValue: function(e) {
        var t = Ce();
        return _a(t, Y.memoizedState, e)
    },
    useTransition: function() {
        var e = Wl(Yn)[0]
          , t = Ce().memoizedState;
        return [e, t]
    },
    useMutableSource: da,
    useSyncExternalStore: pa,
    useId: ja,
    unstable_isNewReconciler: !1
}
  , sd = {
    readContext: Ee,
    useCallback: Ea,
    useContext: Ee,
    useEffect: No,
    useImperativeHandle: Na,
    useInsertionEffect: wa,
    useLayoutEffect: ka,
    useMemo: Ca,
    useReducer: Bl,
    useRef: xa,
    useState: function() {
        return Bl(Yn)
    },
    useDebugValue: Eo,
    useDeferredValue: function(e) {
        var t = Ce();
        return Y === null ? t.memoizedState = e : _a(t, Y.memoizedState, e)
    },
    useTransition: function() {
        var e = Bl(Yn)[0]
          , t = Ce().memoizedState;
        return [e, t]
    },
    useMutableSource: da,
    useSyncExternalStore: pa,
    useId: ja,
    unstable_isNewReconciler: !1
};
function Pe(e, t) {
    if (e && e.defaultProps) {
        t = V({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function _i(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : V({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var dl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Tt(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = oe()
          , l = at(e)
          , i = Be(r, l);
        i.payload = t,
        n != null && (i.callback = n),
        t = ut(e, i, l),
        t !== null && (Me(t, e, l, r),
        jr(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = oe()
          , l = at(e)
          , i = Be(r, l);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = ut(e, i, l),
        t !== null && (Me(t, e, l, r),
        jr(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = oe()
          , r = at(e)
          , l = Be(n, r);
        l.tag = 2,
        t != null && (l.callback = t),
        t = ut(e, l, r),
        t !== null && (Me(t, e, r, n),
        jr(t, e, r))
    }
};
function _u(e, t, n, r, l, i, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !An(n, r) || !An(l, i) : !0
}
function Ta(e, t, n) {
    var r = !1
      , l = dt
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = Ee(i) : (l = de(t) ? Ct : le.current,
    r = t.contextTypes,
    i = (r = r != null) ? en(e, l) : dt),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = dl,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = l,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function ju(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && dl.enqueueReplaceState(t, t.state, null)
}
function ji(e, t, n, r) {
    var l = e.stateNode;
    l.props = n,
    l.state = e.memoizedState,
    l.refs = {},
    vo(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = Ee(i) : (i = de(t) ? Ct : le.current,
    l.context = en(e, i)),
    l.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (_i(e, t, i, n),
    l.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state,
    typeof l.componentWillMount == "function" && l.componentWillMount(),
    typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
    t !== l.state && dl.enqueueReplaceState(l, l.state, null),
    Gr(e, n, l, r),
    l.state = e.memoizedState),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}
function ln(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Dc(r),
            r = r.return;
        while (r);
        var l = n
    } catch (i) {
        l = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}
function Ql(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Pi(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var ad = typeof WeakMap == "function" ? WeakMap : Map;
function Ma(e, t, n) {
    n = Be(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        el || (el = !0,
        Ui = r),
        Pi(e, t)
    }
    ,
    n
}
function Ra(e, t, n) {
    n = Be(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }
        ,
        n.callback = function() {
            Pi(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        Pi(e, t),
        typeof r != "function" && (st === null ? st = new Set([this]) : st.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function Pu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new ad;
        var l = new Set;
        r.set(t, l)
    } else
        l = r.get(t),
        l === void 0 && (l = new Set,
        r.set(t, l));
    l.has(n) || (l.add(n),
    e = Nd.bind(null, e, t, n),
    t.then(e, e))
}
function zu(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Lu(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = l,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Be(-1, 1),
    t.tag = 2,
    ut(n, t, 1))),
    n.lanes |= 1),
    e)
}
var cd = Ge.ReactCurrentOwner
  , ce = !1;
function ie(e, t, n, r) {
    t.child = e === null ? sa(t, null, n, r) : nn(t, e.child, n, r)
}
function Tu(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return Jt(t, l),
    r = ko(e, t, n, r, i, l),
    n = So(),
    e !== null && !ce ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    Xe(e, t, l)) : (U && n && so(t),
    t.flags |= 1,
    ie(e, t, r, l),
    t.child)
}
function Mu(e, t, n, r, l) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Mo(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        Oa(e, t, i, r, l)) : (e = Rr(n.type, null, r, t, t.mode, l),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & l)) {
        var o = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : An,
        n(o, r) && e.ref === t.ref)
            return Xe(e, t, l)
    }
    return t.flags |= 1,
    e = ct(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Oa(e, t, n, r, l) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (An(i, r) && e.ref === t.ref)
            if (ce = !1,
            t.pendingProps = r = i,
            (e.lanes & l) !== 0)
                e.flags & 131072 && (ce = !0);
            else
                return t.lanes = e.lanes,
                Xe(e, t, l)
    }
    return zi(e, t, n, r, l)
}
function Da(e, t, n) {
    var r = t.pendingProps
      , l = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            O(Qt, me),
            me |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                O(Qt, me),
                me |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            O(Qt, me),
            me |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        O(Qt, me),
        me |= r;
    return ie(e, t, l, n),
    t.child
}
function Ia(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function zi(e, t, n, r, l) {
    var i = de(n) ? Ct : le.current;
    return i = en(t, i),
    Jt(t, l),
    n = ko(e, t, n, r, i, l),
    r = So(),
    e !== null && !ce ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    Xe(e, t, l)) : (U && r && so(t),
    t.flags |= 1,
    ie(e, t, n, l),
    t.child)
}
function Ru(e, t, n, r, l) {
    if (de(n)) {
        var i = !0;
        Br(t)
    } else
        i = !1;
    if (Jt(t, l),
    t.stateNode === null)
        Lr(e, t),
        Ta(t, n, r),
        ji(t, n, r, l),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , u = t.memoizedProps;
        o.props = u;
        var s = o.context
          , c = n.contextType;
        typeof c == "object" && c !== null ? c = Ee(c) : (c = de(n) ? Ct : le.current,
        c = en(t, c));
        var v = n.getDerivedStateFromProps
          , h = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== c) && ju(t, o, r, c),
        qe = !1;
        var m = t.memoizedState;
        o.state = m,
        Gr(t, r, o, l),
        s = t.memoizedState,
        u !== r || m !== s || fe.current || qe ? (typeof v == "function" && (_i(t, n, v, r),
        s = t.memoizedState),
        (u = qe || _u(t, n, u, r, m, s, c)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = s),
        o.props = r,
        o.state = s,
        o.context = c,
        r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        o = t.stateNode,
        ca(e, t),
        u = t.memoizedProps,
        c = t.type === t.elementType ? u : Pe(t.type, u),
        o.props = c,
        h = t.pendingProps,
        m = o.context,
        s = n.contextType,
        typeof s == "object" && s !== null ? s = Ee(s) : (s = de(n) ? Ct : le.current,
        s = en(t, s));
        var x = n.getDerivedStateFromProps;
        (v = typeof x == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== h || m !== s) && ju(t, o, r, s),
        qe = !1,
        m = t.memoizedState,
        o.state = m,
        Gr(t, r, o, l);
        var w = t.memoizedState;
        u !== h || m !== w || fe.current || qe ? (typeof x == "function" && (_i(t, n, x, r),
        w = t.memoizedState),
        (c = qe || _u(t, n, c, r, m, w, s) || !1) ? (v || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, s),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, s)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = w),
        o.props = r,
        o.state = w,
        o.context = s,
        r = c) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Li(e, t, n, r, i, l)
}
function Li(e, t, n, r, l, i) {
    Ia(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return l && gu(t, n, !1),
        Xe(e, t, i);
    r = t.stateNode,
    cd.current = t;
    var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = nn(t, e.child, null, i),
    t.child = nn(t, null, u, i)) : ie(e, t, u, i),
    t.memoizedState = r.state,
    l && gu(t, n, !0),
    t.child
}
function Fa(e) {
    var t = e.stateNode;
    t.pendingContext ? yu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && yu(e, t.context, !1),
    yo(e, t.containerInfo)
}
function Ou(e, t, n, r, l) {
    return tn(),
    co(l),
    t.flags |= 256,
    ie(e, t, n, r),
    t.child
}
var Ti = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Mi(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Ua(e, t, n) {
    var r = t.pendingProps, l = $.current, i = !1, o = (t.flags & 128) !== 0, u;
    if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1),
    O($, l & 1),
    e === null)
        return Ei(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = o) : i = hl(o, r, 0, null),
        e = Et(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = Mi(n),
        t.memoizedState = Ti,
        e) : Co(t, o));
    if (l = e.memoizedState,
    l !== null && (u = l.dehydrated,
    u !== null))
        return fd(e, t, o, r, u, l, n);
    if (i) {
        i = r.fallback,
        o = t.mode,
        l = e.child,
        u = l.sibling;
        var s = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== l ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = s,
        t.deletions = null) : (r = ct(l, s),
        r.subtreeFlags = l.subtreeFlags & 14680064),
        u !== null ? i = ct(u, i) : (i = Et(i, o, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        o = e.child.memoizedState,
        o = o === null ? Mi(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        i.memoizedState = o,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = Ti,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = ct(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Co(e, t) {
    return t = hl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function vr(e, t, n, r) {
    return r !== null && co(r),
    nn(t, e.child, null, n),
    e = Co(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function fd(e, t, n, r, l, i, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Ql(Error(g(422))),
        vr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        l = t.mode,
        r = hl({
            mode: "visible",
            children: r.children
        }, l, 0, null),
        i = Et(i, l, o, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && nn(t, e.child, null, o),
        t.child.memoizedState = Mi(o),
        t.memoizedState = Ti,
        i);
    if (!(t.mode & 1))
        return vr(e, t, o, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset,
        r)
            var u = r.dgst;
        return r = u,
        i = Error(g(419)),
        r = Ql(i, r, void 0),
        vr(e, t, o, r)
    }
    if (u = (o & e.childLanes) !== 0,
    ce || u) {
        if (r = J,
        r !== null) {
            switch (o & -o) {
            case 4:
                l = 2;
                break;
            case 16:
                l = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                l = 32;
                break;
            case 536870912:
                l = 268435456;
                break;
            default:
                l = 0
            }
            l = l & (r.suspendedLanes | o) ? 0 : l,
            l !== 0 && l !== i.retryLane && (i.retryLane = l,
            Ye(e, l),
            Me(r, e, l, -1))
        }
        return To(),
        r = Ql(Error(g(421))),
        vr(e, t, o, r)
    }
    return l.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Ed.bind(null, e),
    l._reactRetry = t,
    null) : (e = i.treeContext,
    he = ot(l.nextSibling),
    ve = t,
    U = !0,
    Le = null,
    e !== null && (we[ke++] = He,
    we[ke++] = We,
    we[ke++] = _t,
    He = e.id,
    We = e.overflow,
    _t = t),
    t = Co(t, r.children),
    t.flags |= 4096,
    t)
}
function Du(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Ci(e.return, t, n)
}
function Kl(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = l)
}
function $a(e, t, n) {
    var r = t.pendingProps
      , l = r.revealOrder
      , i = r.tail;
    if (ie(e, t, r.children, n),
    r = $.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Du(e, n, t);
                else if (e.tag === 19)
                    Du(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (O($, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (l) {
        case "forwards":
            for (n = t.child,
            l = null; n !== null; )
                e = n.alternate,
                e !== null && Zr(e) === null && (l = n),
                n = n.sibling;
            n = l,
            n === null ? (l = t.child,
            t.child = null) : (l = n.sibling,
            n.sibling = null),
            Kl(t, !1, l, n, i);
            break;
        case "backwards":
            for (n = null,
            l = t.child,
            t.child = null; l !== null; ) {
                if (e = l.alternate,
                e !== null && Zr(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling,
                l.sibling = n,
                n = l,
                l = e
            }
            Kl(t, !0, n, null, i);
            break;
        case "together":
            Kl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Lr(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Xe(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Pt |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(g(153));
    if (t.child !== null) {
        for (e = t.child,
        n = ct(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = ct(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function dd(e, t, n) {
    switch (t.tag) {
    case 3:
        Fa(t),
        tn();
        break;
    case 5:
        fa(t);
        break;
    case 1:
        de(t.type) && Br(t);
        break;
    case 4:
        yo(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , l = t.memoizedProps.value;
        O(Yr, r._currentValue),
        r._currentValue = l;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (O($, $.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Ua(e, t, n) : (O($, $.current & 1),
            e = Xe(e, t, n),
            e !== null ? e.sibling : null);
        O($, $.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return $a(e, t, n);
            t.flags |= 128
        }
        if (l = t.memoizedState,
        l !== null && (l.rendering = null,
        l.tail = null,
        l.lastEffect = null),
        O($, $.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Da(e, t, n)
    }
    return Xe(e, t, n)
}
var Aa, Ri, Va, Ha;
Aa = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Ri = function() {}
;
Va = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode,
        St(Ue.current);
        var i = null;
        switch (n) {
        case "input":
            l = ti(e, l),
            r = ti(e, r),
            i = [];
            break;
        case "select":
            l = V({}, l, {
                value: void 0
            }),
            r = V({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            l = li(e, l),
            r = li(e, r),
            i = [];
            break;
        default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Hr)
        }
        oi(n, r);
        var o;
        n = null;
        for (c in l)
            if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
                if (c === "style") {
                    var u = l[c];
                    for (o in u)
                        u.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Rn.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
        for (c in r) {
            var s = r[c];
            if (u = l != null ? l[c] : void 0,
            r.hasOwnProperty(c) && s !== u && (s != null || u != null))
                if (c === "style")
                    if (u) {
                        for (o in u)
                            !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in s)
                            s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}),
                            n[o] = s[o])
                    } else
                        n || (i || (i = []),
                        i.push(c, n)),
                        n = s;
                else
                    c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                    u = u ? u.__html : void 0,
                    s != null && u !== s && (i = i || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Rn.hasOwnProperty(c) ? (s != null && c === "onScroll" && D("scroll", e),
                    i || u === s || (i = [])) : (i = i || []).push(c, s))
        }
        n && (i = i || []).push("style", n);
        var c = i;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
Ha = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function gn(e, t) {
    if (!U)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function ne(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags & 14680064,
            r |= l.flags & 14680064,
            l.return = e,
            l = l.sibling;
    else
        for (l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags,
            r |= l.flags,
            l.return = e,
            l = l.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function pd(e, t, n) {
    var r = t.pendingProps;
    switch (ao(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return ne(t),
        null;
    case 1:
        return de(t.type) && Wr(),
        ne(t),
        null;
    case 3:
        return r = t.stateNode,
        rn(),
        I(fe),
        I(le),
        xo(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (mr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Le !== null && (Vi(Le),
        Le = null))),
        Ri(e, t),
        ne(t),
        null;
    case 5:
        go(t);
        var l = St(Qn.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Va(e, t, n, r, l),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(g(166));
                return ne(t),
                null
            }
            if (e = St(Ue.current),
            mr(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[Ie] = t,
                r[Wn] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    D("cancel", r),
                    D("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    D("load", r);
                    break;
                case "video":
                case "audio":
                    for (l = 0; l < Nn.length; l++)
                        D(Nn[l], r);
                    break;
                case "source":
                    D("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    D("error", r),
                    D("load", r);
                    break;
                case "details":
                    D("toggle", r);
                    break;
                case "input":
                    Bo(r, i),
                    D("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    D("invalid", r);
                    break;
                case "textarea":
                    Ko(r, i),
                    D("invalid", r)
                }
                oi(n, i),
                l = null;
                for (var o in i)
                    if (i.hasOwnProperty(o)) {
                        var u = i[o];
                        o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && pr(r.textContent, u, e),
                        l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && pr(r.textContent, u, e),
                        l = ["children", "" + u]) : Rn.hasOwnProperty(o) && u != null && o === "onScroll" && D("scroll", r)
                    }
                switch (n) {
                case "input":
                    ir(r),
                    Qo(r, i, !0);
                    break;
                case "textarea":
                    ir(r),
                    Yo(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = Hr)
                }
                r = l,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = l.nodeType === 9 ? l : l.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = vs(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[Ie] = t,
                e[Wn] = r,
                Aa(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = ui(n, r),
                    n) {
                    case "dialog":
                        D("cancel", e),
                        D("close", e),
                        l = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        D("load", e),
                        l = r;
                        break;
                    case "video":
                    case "audio":
                        for (l = 0; l < Nn.length; l++)
                            D(Nn[l], e);
                        l = r;
                        break;
                    case "source":
                        D("error", e),
                        l = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        D("error", e),
                        D("load", e),
                        l = r;
                        break;
                    case "details":
                        D("toggle", e),
                        l = r;
                        break;
                    case "input":
                        Bo(e, r),
                        l = ti(e, r),
                        D("invalid", e);
                        break;
                    case "option":
                        l = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        l = V({}, r, {
                            value: void 0
                        }),
                        D("invalid", e);
                        break;
                    case "textarea":
                        Ko(e, r),
                        l = li(e, r),
                        D("invalid", e);
                        break;
                    default:
                        l = r
                    }
                    oi(n, l),
                    u = l;
                    for (i in u)
                        if (u.hasOwnProperty(i)) {
                            var s = u[i];
                            i === "style" ? xs(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                            s != null && ys(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && On(e, s) : typeof s == "number" && On(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Rn.hasOwnProperty(i) ? s != null && i === "onScroll" && D("scroll", e) : s != null && Xi(e, i, s, o))
                        }
                    switch (n) {
                    case "input":
                        ir(e),
                        Qo(e, r, !1);
                        break;
                    case "textarea":
                        ir(e),
                        Yo(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + ft(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? Yt(e, !!r.multiple, i, !1) : r.defaultValue != null && Yt(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof l.onClick == "function" && (e.onclick = Hr)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return ne(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Ha(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(g(166));
            if (n = St(Qn.current),
            St(Ue.current),
            mr(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Ie] = t,
                (i = r.nodeValue !== n) && (e = ve,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        pr(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && pr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Ie] = t,
                t.stateNode = r
        }
        return ne(t),
        null;
    case 13:
        if (I($),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (U && he !== null && t.mode & 1 && !(t.flags & 128))
                oa(),
                tn(),
                t.flags |= 98560,
                i = !1;
            else if (i = mr(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(g(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(g(317));
                    i[Ie] = t
                } else
                    tn(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                ne(t),
                i = !1
            } else
                Le !== null && (Vi(Le),
                Le = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || $.current & 1 ? X === 0 && (X = 3) : To())),
        t.updateQueue !== null && (t.flags |= 4),
        ne(t),
        null);
    case 4:
        return rn(),
        Ri(e, t),
        e === null && Vn(t.stateNode.containerInfo),
        ne(t),
        null;
    case 10:
        return mo(t.type._context),
        ne(t),
        null;
    case 17:
        return de(t.type) && Wr(),
        ne(t),
        null;
    case 19:
        if (I($),
        i = t.memoizedState,
        i === null)
            return ne(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = i.rendering,
        o === null)
            if (r)
                gn(i, !1);
            else {
                if (X !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = Zr(e),
                        o !== null) {
                            for (t.flags |= 128,
                            gn(i, !1),
                            r = o.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                o = i.alternate,
                                o === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = o.childLanes,
                                i.lanes = o.lanes,
                                i.child = o.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = o.memoizedProps,
                                i.memoizedState = o.memoizedState,
                                i.updateQueue = o.updateQueue,
                                i.type = o.type,
                                e = o.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return O($, $.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && Q() > on && (t.flags |= 128,
                r = !0,
                gn(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Zr(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    gn(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !o.alternate && !U)
                        return ne(t),
                        null
                } else
                    2 * Q() - i.renderingStartTime > on && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    gn(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = i.last,
            n !== null ? n.sibling = o : t.child = o,
            i.last = o)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = Q(),
        t.sibling = null,
        n = $.current,
        O($, r ? n & 1 | 2 : n & 1),
        t) : (ne(t),
        null);
    case 22:
    case 23:
        return Lo(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? me & 1073741824 && (ne(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : ne(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(g(156, t.tag))
}
function md(e, t) {
    switch (ao(t),
    t.tag) {
    case 1:
        return de(t.type) && Wr(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return rn(),
        I(fe),
        I(le),
        xo(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return go(t),
        null;
    case 13:
        if (I($),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(g(340));
            tn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return I($),
        null;
    case 4:
        return rn(),
        null;
    case 10:
        return mo(t.type._context),
        null;
    case 22:
    case 23:
        return Lo(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var yr = !1
  , re = !1
  , hd = typeof WeakSet == "function" ? WeakSet : Set
  , S = null;
function Bt(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                H(e, t, r)
            }
        else
            n.current = null
}
function Oi(e, t, n) {
    try {
        n()
    } catch (r) {
        H(e, t, r)
    }
}
var Iu = !1;
function vd(e, t) {
    if (yi = $r,
    e = Ys(),
    uo(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , u = -1
                      , s = -1
                      , c = 0
                      , v = 0
                      , h = e
                      , m = null;
                    t: for (; ; ) {
                        for (var x; h !== n || l !== 0 && h.nodeType !== 3 || (u = o + l),
                        h !== i || r !== 0 && h.nodeType !== 3 || (s = o + r),
                        h.nodeType === 3 && (o += h.nodeValue.length),
                        (x = h.firstChild) !== null; )
                            m = h,
                            h = x;
                        for (; ; ) {
                            if (h === e)
                                break t;
                            if (m === n && ++c === l && (u = o),
                            m === i && ++v === r && (s = o),
                            (x = h.nextSibling) !== null)
                                break;
                            h = m,
                            m = h.parentNode
                        }
                        h = x
                    }
                    n = u === -1 || s === -1 ? null : {
                        start: u,
                        end: s
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (gi = {
        focusedElem: e,
        selectionRange: n
    },
    $r = !1,
    S = t; S !== null; )
        if (t = S,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            S = e;
        else
            for (; S !== null; ) {
                t = S;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var k = w.memoizedProps
                                  , F = w.memoizedState
                                  , f = t.stateNode
                                  , a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Pe(t.type, k), F);
                                f.__reactInternalSnapshotBeforeUpdate = a
                            }
                            break;
                        case 3:
                            var d = t.stateNode.containerInfo;
                            d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(g(163))
                        }
                } catch (y) {
                    H(t, t.return, y)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    S = e;
                    break
                }
                S = t.return
            }
    return w = Iu,
    Iu = !1,
    w
}
function Ln(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var i = l.destroy;
                l.destroy = void 0,
                i !== void 0 && Oi(t, n, i)
            }
            l = l.next
        } while (l !== r)
    }
}
function pl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Di(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Wa(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Wa(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Ie],
    delete t[Wn],
    delete t[ki],
    delete t[qf],
    delete t[bf])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Ba(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Fu(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Ba(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Ii(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Hr));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Ii(e, t, n),
        e = e.sibling; e !== null; )
            Ii(e, t, n),
            e = e.sibling
}
function Fi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Fi(e, t, n),
        e = e.sibling; e !== null; )
            Fi(e, t, n),
            e = e.sibling
}
var q = null
  , ze = !1;
function Ze(e, t, n) {
    for (n = n.child; n !== null; )
        Qa(e, t, n),
        n = n.sibling
}
function Qa(e, t, n) {
    if (Fe && typeof Fe.onCommitFiberUnmount == "function")
        try {
            Fe.onCommitFiberUnmount(il, n)
        } catch {}
    switch (n.tag) {
    case 5:
        re || Bt(n, t);
    case 6:
        var r = q
          , l = ze;
        q = null,
        Ze(e, t, n),
        q = r,
        ze = l,
        q !== null && (ze ? (e = q,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : q.removeChild(n.stateNode));
        break;
    case 18:
        q !== null && (ze ? (e = q,
        n = n.stateNode,
        e.nodeType === 8 ? $l(e.parentNode, n) : e.nodeType === 1 && $l(e, n),
        Un(e)) : $l(q, n.stateNode));
        break;
    case 4:
        r = q,
        l = ze,
        q = n.stateNode.containerInfo,
        ze = !0,
        Ze(e, t, n),
        q = r,
        ze = l;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!re && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            l = r = r.next;
            do {
                var i = l
                  , o = i.destroy;
                i = i.tag,
                o !== void 0 && (i & 2 || i & 4) && Oi(n, t, o),
                l = l.next
            } while (l !== r)
        }
        Ze(e, t, n);
        break;
    case 1:
        if (!re && (Bt(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (u) {
                H(n, t, u)
            }
        Ze(e, t, n);
        break;
    case 21:
        Ze(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (re = (r = re) || n.memoizedState !== null,
        Ze(e, t, n),
        re = r) : Ze(e, t, n);
        break;
    default:
        Ze(e, t, n)
    }
}
function Uu(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new hd),
        t.forEach(function(r) {
            var l = Cd.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(l, l))
        })
    }
}
function je(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var i = e
                  , o = t
                  , u = o;
                e: for (; u !== null; ) {
                    switch (u.tag) {
                    case 5:
                        q = u.stateNode,
                        ze = !1;
                        break e;
                    case 3:
                        q = u.stateNode.containerInfo,
                        ze = !0;
                        break e;
                    case 4:
                        q = u.stateNode.containerInfo,
                        ze = !0;
                        break e
                    }
                    u = u.return
                }
                if (q === null)
                    throw Error(g(160));
                Qa(i, o, l),
                q = null,
                ze = !1;
                var s = l.alternate;
                s !== null && (s.return = null),
                l.return = null
            } catch (c) {
                H(l, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Ka(t, e),
            t = t.sibling
}
function Ka(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (je(t, e),
        Oe(e),
        r & 4) {
            try {
                Ln(3, e, e.return),
                pl(3, e)
            } catch (k) {
                H(e, e.return, k)
            }
            try {
                Ln(5, e, e.return)
            } catch (k) {
                H(e, e.return, k)
            }
        }
        break;
    case 1:
        je(t, e),
        Oe(e),
        r & 512 && n !== null && Bt(n, n.return);
        break;
    case 5:
        if (je(t, e),
        Oe(e),
        r & 512 && n !== null && Bt(n, n.return),
        e.flags & 32) {
            var l = e.stateNode;
            try {
                On(l, "")
            } catch (k) {
                H(e, e.return, k)
            }
        }
        if (r & 4 && (l = e.stateNode,
        l != null)) {
            var i = e.memoizedProps
              , o = n !== null ? n.memoizedProps : i
              , u = e.type
              , s = e.updateQueue;
            if (e.updateQueue = null,
            s !== null)
                try {
                    u === "input" && i.type === "radio" && i.name != null && ms(l, i),
                    ui(u, o);
                    var c = ui(u, i);
                    for (o = 0; o < s.length; o += 2) {
                        var v = s[o]
                          , h = s[o + 1];
                        v === "style" ? xs(l, h) : v === "dangerouslySetInnerHTML" ? ys(l, h) : v === "children" ? On(l, h) : Xi(l, v, h, c)
                    }
                    switch (u) {
                    case "input":
                        ni(l, i);
                        break;
                    case "textarea":
                        hs(l, i);
                        break;
                    case "select":
                        var m = l._wrapperState.wasMultiple;
                        l._wrapperState.wasMultiple = !!i.multiple;
                        var x = i.value;
                        x != null ? Yt(l, !!i.multiple, x, !1) : m !== !!i.multiple && (i.defaultValue != null ? Yt(l, !!i.multiple, i.defaultValue, !0) : Yt(l, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    l[Wn] = i
                } catch (k) {
                    H(e, e.return, k)
                }
        }
        break;
    case 6:
        if (je(t, e),
        Oe(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(g(162));
            l = e.stateNode,
            i = e.memoizedProps;
            try {
                l.nodeValue = i
            } catch (k) {
                H(e, e.return, k)
            }
        }
        break;
    case 3:
        if (je(t, e),
        Oe(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Un(t.containerInfo)
            } catch (k) {
                H(e, e.return, k)
            }
        break;
    case 4:
        je(t, e),
        Oe(e);
        break;
    case 13:
        je(t, e),
        Oe(e),
        l = e.child,
        l.flags & 8192 && (i = l.memoizedState !== null,
        l.stateNode.isHidden = i,
        !i || l.alternate !== null && l.alternate.memoizedState !== null || (Po = Q())),
        r & 4 && Uu(e);
        break;
    case 22:
        if (v = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (re = (c = re) || v,
        je(t, e),
        re = c) : je(t, e),
        Oe(e),
        r & 8192) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !v && e.mode & 1)
                for (S = e,
                v = e.child; v !== null; ) {
                    for (h = S = v; S !== null; ) {
                        switch (m = S,
                        x = m.child,
                        m.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Ln(4, m, m.return);
                            break;
                        case 1:
                            Bt(m, m.return);
                            var w = m.stateNode;
                            if (typeof w.componentWillUnmount == "function") {
                                r = m,
                                n = m.return;
                                try {
                                    t = r,
                                    w.props = t.memoizedProps,
                                    w.state = t.memoizedState,
                                    w.componentWillUnmount()
                                } catch (k) {
                                    H(r, n, k)
                                }
                            }
                            break;
                        case 5:
                            Bt(m, m.return);
                            break;
                        case 22:
                            if (m.memoizedState !== null) {
                                Au(h);
                                continue
                            }
                        }
                        x !== null ? (x.return = m,
                        S = x) : Au(h)
                    }
                    v = v.sibling
                }
            e: for (v = null,
            h = e; ; ) {
                if (h.tag === 5) {
                    if (v === null) {
                        v = h;
                        try {
                            l = h.stateNode,
                            c ? (i = l.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = h.stateNode,
                            s = h.memoizedProps.style,
                            o = s != null && s.hasOwnProperty("display") ? s.display : null,
                            u.style.display = gs("display", o))
                        } catch (k) {
                            H(e, e.return, k)
                        }
                    }
                } else if (h.tag === 6) {
                    if (v === null)
                        try {
                            h.stateNode.nodeValue = c ? "" : h.memoizedProps
                        } catch (k) {
                            H(e, e.return, k)
                        }
                } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                    h.child.return = h,
                    h = h.child;
                    continue
                }
                if (h === e)
                    break e;
                for (; h.sibling === null; ) {
                    if (h.return === null || h.return === e)
                        break e;
                    v === h && (v = null),
                    h = h.return
                }
                v === h && (v = null),
                h.sibling.return = h.return,
                h = h.sibling
            }
        }
        break;
    case 19:
        je(t, e),
        Oe(e),
        r & 4 && Uu(e);
        break;
    case 21:
        break;
    default:
        je(t, e),
        Oe(e)
    }
}
function Oe(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Ba(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(g(160))
            }
            switch (r.tag) {
            case 5:
                var l = r.stateNode;
                r.flags & 32 && (On(l, ""),
                r.flags &= -33);
                var i = Fu(e);
                Fi(e, i, l);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , u = Fu(e);
                Ii(e, u, o);
                break;
            default:
                throw Error(g(161))
            }
        } catch (s) {
            H(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function yd(e, t, n) {
    S = e,
    Ya(e)
}
function Ya(e, t, n) {
    for (var r = (e.mode & 1) !== 0; S !== null; ) {
        var l = S
          , i = l.child;
        if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || yr;
            if (!o) {
                var u = l.alternate
                  , s = u !== null && u.memoizedState !== null || re;
                u = yr;
                var c = re;
                if (yr = o,
                (re = s) && !c)
                    for (S = l; S !== null; )
                        o = S,
                        s = o.child,
                        o.tag === 22 && o.memoizedState !== null ? Vu(l) : s !== null ? (s.return = o,
                        S = s) : Vu(l);
                for (; i !== null; )
                    S = i,
                    Ya(i),
                    i = i.sibling;
                S = l,
                yr = u,
                re = c
            }
            $u(e)
        } else
            l.subtreeFlags & 8772 && i !== null ? (i.return = l,
            S = i) : $u(e)
    }
}
function $u(e) {
    for (; S !== null; ) {
        var t = S;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        re || pl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !re)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : Pe(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Nu(t, i, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Nu(t, o, n)
                        }
                        break;
                    case 5:
                        var u = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = u;
                            var s = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                s.autoFocus && n.focus();
                                break;
                            case "img":
                                s.src && (n.src = s.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var v = c.memoizedState;
                                if (v !== null) {
                                    var h = v.dehydrated;
                                    h !== null && Un(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(g(163))
                    }
                re || t.flags & 512 && Di(t)
            } catch (m) {
                H(t, t.return, m)
            }
        }
        if (t === e) {
            S = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            S = n;
            break
        }
        S = t.return
    }
}
function Au(e) {
    for (; S !== null; ) {
        var t = S;
        if (t === e) {
            S = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            S = n;
            break
        }
        S = t.return
    }
}
function Vu(e) {
    for (; S !== null; ) {
        var t = S;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    pl(4, t)
                } catch (s) {
                    H(t, n, s)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var l = t.return;
                    try {
                        r.componentDidMount()
                    } catch (s) {
                        H(t, l, s)
                    }
                }
                var i = t.return;
                try {
                    Di(t)
                } catch (s) {
                    H(t, i, s)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    Di(t)
                } catch (s) {
                    H(t, o, s)
                }
            }
        } catch (s) {
            H(t, t.return, s)
        }
        if (t === e) {
            S = null;
            break
        }
        var u = t.sibling;
        if (u !== null) {
            u.return = t.return,
            S = u;
            break
        }
        S = t.return
    }
}
var gd = Math.ceil
  , br = Ge.ReactCurrentDispatcher
  , _o = Ge.ReactCurrentOwner
  , Ne = Ge.ReactCurrentBatchConfig
  , M = 0
  , J = null
  , K = null
  , b = 0
  , me = 0
  , Qt = mt(0)
  , X = 0
  , Gn = null
  , Pt = 0
  , ml = 0
  , jo = 0
  , Tn = null
  , ae = null
  , Po = 0
  , on = 1 / 0
  , Ae = null
  , el = !1
  , Ui = null
  , st = null
  , gr = !1
  , nt = null
  , tl = 0
  , Mn = 0
  , $i = null
  , Tr = -1
  , Mr = 0;
function oe() {
    return M & 6 ? Q() : Tr !== -1 ? Tr : Tr = Q()
}
function at(e) {
    return e.mode & 1 ? M & 2 && b !== 0 ? b & -b : td.transition !== null ? (Mr === 0 && (Mr = Ts()),
    Mr) : (e = R,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Us(e.type)),
    e) : 1
}
function Me(e, t, n, r) {
    if (50 < Mn)
        throw Mn = 0,
        $i = null,
        Error(g(185));
    Jn(e, n, r),
    (!(M & 2) || e !== J) && (e === J && (!(M & 2) && (ml |= n),
    X === 4 && et(e, b)),
    pe(e, r),
    n === 1 && M === 0 && !(t.mode & 1) && (on = Q() + 500,
    cl && ht()))
}
function pe(e, t) {
    var n = e.callbackNode;
    ef(e, t);
    var r = Ur(e, e === J ? b : 0);
    if (r === 0)
        n !== null && Zo(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Zo(n),
        t === 1)
            e.tag === 0 ? ed(Hu.bind(null, e)) : ra(Hu.bind(null, e)),
            Zf(function() {
                !(M & 6) && ht()
            }),
            n = null;
        else {
            switch (Ms(r)) {
            case 1:
                n = bi;
                break;
            case 4:
                n = zs;
                break;
            case 16:
                n = Fr;
                break;
            case 536870912:
                n = Ls;
                break;
            default:
                n = Fr
            }
            n = tc(n, Xa.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Xa(e, t) {
    if (Tr = -1,
    Mr = 0,
    M & 6)
        throw Error(g(327));
    var n = e.callbackNode;
    if (qt() && e.callbackNode !== n)
        return null;
    var r = Ur(e, e === J ? b : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = nl(e, r);
    else {
        t = r;
        var l = M;
        M |= 2;
        var i = Za();
        (J !== e || b !== t) && (Ae = null,
        on = Q() + 500,
        Nt(e, t));
        do
            try {
                kd();
                break
            } catch (u) {
                Ga(e, u)
            }
        while (!0);
        po(),
        br.current = i,
        M = l,
        K !== null ? t = 0 : (J = null,
        b = 0,
        t = X)
    }
    if (t !== 0) {
        if (t === 2 && (l = di(e),
        l !== 0 && (r = l,
        t = Ai(e, l))),
        t === 1)
            throw n = Gn,
            Nt(e, 0),
            et(e, r),
            pe(e, Q()),
            n;
        if (t === 6)
            et(e, r);
        else {
            if (l = e.current.alternate,
            !(r & 30) && !xd(l) && (t = nl(e, r),
            t === 2 && (i = di(e),
            i !== 0 && (r = i,
            t = Ai(e, i))),
            t === 1))
                throw n = Gn,
                Nt(e, 0),
                et(e, r),
                pe(e, Q()),
                n;
            switch (e.finishedWork = l,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(g(345));
            case 2:
                xt(e, ae, Ae);
                break;
            case 3:
                if (et(e, r),
                (r & 130023424) === r && (t = Po + 500 - Q(),
                10 < t)) {
                    if (Ur(e, 0) !== 0)
                        break;
                    if (l = e.suspendedLanes,
                    (l & r) !== r) {
                        oe(),
                        e.pingedLanes |= e.suspendedLanes & l;
                        break
                    }
                    e.timeoutHandle = wi(xt.bind(null, e, ae, Ae), t);
                    break
                }
                xt(e, ae, Ae);
                break;
            case 4:
                if (et(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                l = -1; 0 < r; ) {
                    var o = 31 - Te(r);
                    i = 1 << o,
                    o = t[o],
                    o > l && (l = o),
                    r &= ~i
                }
                if (r = l,
                r = Q() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * gd(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = wi(xt.bind(null, e, ae, Ae), r);
                    break
                }
                xt(e, ae, Ae);
                break;
            case 5:
                xt(e, ae, Ae);
                break;
            default:
                throw Error(g(329))
            }
        }
    }
    return pe(e, Q()),
    e.callbackNode === n ? Xa.bind(null, e) : null
}
function Ai(e, t) {
    var n = Tn;
    return e.current.memoizedState.isDehydrated && (Nt(e, t).flags |= 256),
    e = nl(e, t),
    e !== 2 && (t = ae,
    ae = n,
    t !== null && Vi(t)),
    e
}
function Vi(e) {
    ae === null ? ae = e : ae.push.apply(ae, e)
}
function xd(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r]
                      , i = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Re(i(), l))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function et(e, t) {
    for (t &= ~jo,
    t &= ~ml,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Te(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Hu(e) {
    if (M & 6)
        throw Error(g(327));
    qt();
    var t = Ur(e, 0);
    if (!(t & 1))
        return pe(e, Q()),
        null;
    var n = nl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = di(e);
        r !== 0 && (t = r,
        n = Ai(e, r))
    }
    if (n === 1)
        throw n = Gn,
        Nt(e, 0),
        et(e, t),
        pe(e, Q()),
        n;
    if (n === 6)
        throw Error(g(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    xt(e, ae, Ae),
    pe(e, Q()),
    null
}
function zo(e, t) {
    var n = M;
    M |= 1;
    try {
        return e(t)
    } finally {
        M = n,
        M === 0 && (on = Q() + 500,
        cl && ht())
    }
}
function zt(e) {
    nt !== null && nt.tag === 0 && !(M & 6) && qt();
    var t = M;
    M |= 1;
    var n = Ne.transition
      , r = R;
    try {
        if (Ne.transition = null,
        R = 1,
        e)
            return e()
    } finally {
        R = r,
        Ne.transition = n,
        M = t,
        !(M & 6) && ht()
    }
}
function Lo() {
    me = Qt.current,
    I(Qt)
}
function Nt(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Gf(n)),
    K !== null)
        for (n = K.return; n !== null; ) {
            var r = n;
            switch (ao(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Wr();
                break;
            case 3:
                rn(),
                I(fe),
                I(le),
                xo();
                break;
            case 5:
                go(r);
                break;
            case 4:
                rn();
                break;
            case 13:
                I($);
                break;
            case 19:
                I($);
                break;
            case 10:
                mo(r.type._context);
                break;
            case 22:
            case 23:
                Lo()
            }
            n = n.return
        }
    if (J = e,
    K = e = ct(e.current, null),
    b = me = t,
    X = 0,
    Gn = null,
    jo = ml = Pt = 0,
    ae = Tn = null,
    kt !== null) {
        for (t = 0; t < kt.length; t++)
            if (n = kt[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var l = r.next
                  , i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = l,
                    r.next = o
                }
                n.pending = r
            }
        kt = null
    }
    return e
}
function Ga(e, t) {
    do {
        var n = K;
        try {
            if (po(),
            Pr.current = qr,
            Jr) {
                for (var r = A.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null),
                    r = r.next
                }
                Jr = !1
            }
            if (jt = 0,
            Z = Y = A = null,
            zn = !1,
            Kn = 0,
            _o.current = null,
            n === null || n.return === null) {
                X = 1,
                Gn = t,
                K = null;
                break
            }
            e: {
                var i = e
                  , o = n.return
                  , u = n
                  , s = t;
                if (t = b,
                u.flags |= 32768,
                s !== null && typeof s == "object" && typeof s.then == "function") {
                    var c = s
                      , v = u
                      , h = v.tag;
                    if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var m = v.alternate;
                        m ? (v.updateQueue = m.updateQueue,
                        v.memoizedState = m.memoizedState,
                        v.lanes = m.lanes) : (v.updateQueue = null,
                        v.memoizedState = null)
                    }
                    var x = zu(o);
                    if (x !== null) {
                        x.flags &= -257,
                        Lu(x, o, u, i, t),
                        x.mode & 1 && Pu(i, c, t),
                        t = x,
                        s = c;
                        var w = t.updateQueue;
                        if (w === null) {
                            var k = new Set;
                            k.add(s),
                            t.updateQueue = k
                        } else
                            w.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Pu(i, c, t),
                            To();
                            break e
                        }
                        s = Error(g(426))
                    }
                } else if (U && u.mode & 1) {
                    var F = zu(o);
                    if (F !== null) {
                        !(F.flags & 65536) && (F.flags |= 256),
                        Lu(F, o, u, i, t),
                        co(ln(s, u));
                        break e
                    }
                }
                i = s = ln(s, u),
                X !== 4 && (X = 2),
                Tn === null ? Tn = [i] : Tn.push(i),
                i = o;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var f = Ma(i, s, t);
                        Su(i, f);
                        break e;
                    case 1:
                        u = s;
                        var a = i.type
                          , d = i.stateNode;
                        if (!(i.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (st === null || !st.has(d)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var y = Ra(i, u, t);
                            Su(i, y);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            qa(n)
        } catch (N) {
            t = N,
            K === n && n !== null && (K = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Za() {
    var e = br.current;
    return br.current = qr,
    e === null ? qr : e
}
function To() {
    (X === 0 || X === 3 || X === 2) && (X = 4),
    J === null || !(Pt & 268435455) && !(ml & 268435455) || et(J, b)
}
function nl(e, t) {
    var n = M;
    M |= 2;
    var r = Za();
    (J !== e || b !== t) && (Ae = null,
    Nt(e, t));
    do
        try {
            wd();
            break
        } catch (l) {
            Ga(e, l)
        }
    while (!0);
    if (po(),
    M = n,
    br.current = r,
    K !== null)
        throw Error(g(261));
    return J = null,
    b = 0,
    X
}
function wd() {
    for (; K !== null; )
        Ja(K)
}
function kd() {
    for (; K !== null && !Qc(); )
        Ja(K)
}
function Ja(e) {
    var t = ec(e.alternate, e, me);
    e.memoizedProps = e.pendingProps,
    t === null ? qa(e) : K = t,
    _o.current = null
}
function qa(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = md(n, t),
            n !== null) {
                n.flags &= 32767,
                K = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                X = 6,
                K = null;
                return
            }
        } else if (n = pd(n, t, me),
        n !== null) {
            K = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            K = t;
            return
        }
        K = t = e
    } while (t !== null);
    X === 0 && (X = 5)
}
function xt(e, t, n) {
    var r = R
      , l = Ne.transition;
    try {
        Ne.transition = null,
        R = 1,
        Sd(e, t, n, r)
    } finally {
        Ne.transition = l,
        R = r
    }
    return null
}
function Sd(e, t, n, r) {
    do
        qt();
    while (nt !== null);
    if (M & 6)
        throw Error(g(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(g(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (tf(e, i),
    e === J && (K = J = null,
    b = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || gr || (gr = !0,
    tc(Fr, function() {
        return qt(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = Ne.transition,
        Ne.transition = null;
        var o = R;
        R = 1;
        var u = M;
        M |= 4,
        _o.current = null,
        vd(e, n),
        Ka(n, e),
        Hf(gi),
        $r = !!yi,
        gi = yi = null,
        e.current = n,
        yd(n),
        Kc(),
        M = u,
        R = o,
        Ne.transition = i
    } else
        e.current = n;
    if (gr && (gr = !1,
    nt = e,
    tl = l),
    i = e.pendingLanes,
    i === 0 && (st = null),
    Gc(n.stateNode),
    pe(e, Q()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            l = t[n],
            r(l.value, {
                componentStack: l.stack,
                digest: l.digest
            });
    if (el)
        throw el = !1,
        e = Ui,
        Ui = null,
        e;
    return tl & 1 && e.tag !== 0 && qt(),
    i = e.pendingLanes,
    i & 1 ? e === $i ? Mn++ : (Mn = 0,
    $i = e) : Mn = 0,
    ht(),
    null
}
function qt() {
    if (nt !== null) {
        var e = Ms(tl)
          , t = Ne.transition
          , n = R;
        try {
            if (Ne.transition = null,
            R = 16 > e ? 16 : e,
            nt === null)
                var r = !1;
            else {
                if (e = nt,
                nt = null,
                tl = 0,
                M & 6)
                    throw Error(g(331));
                var l = M;
                for (M |= 4,
                S = e.current; S !== null; ) {
                    var i = S
                      , o = i.child;
                    if (S.flags & 16) {
                        var u = i.deletions;
                        if (u !== null) {
                            for (var s = 0; s < u.length; s++) {
                                var c = u[s];
                                for (S = c; S !== null; ) {
                                    var v = S;
                                    switch (v.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ln(8, v, i)
                                    }
                                    var h = v.child;
                                    if (h !== null)
                                        h.return = v,
                                        S = h;
                                    else
                                        for (; S !== null; ) {
                                            v = S;
                                            var m = v.sibling
                                              , x = v.return;
                                            if (Wa(v),
                                            v === c) {
                                                S = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = x,
                                                S = m;
                                                break
                                            }
                                            S = x
                                        }
                                }
                            }
                            var w = i.alternate;
                            if (w !== null) {
                                var k = w.child;
                                if (k !== null) {
                                    w.child = null;
                                    do {
                                        var F = k.sibling;
                                        k.sibling = null,
                                        k = F
                                    } while (k !== null)
                                }
                            }
                            S = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null)
                        o.return = i,
                        S = o;
                    else
                        e: for (; S !== null; ) {
                            if (i = S,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ln(9, i, i.return)
                                }
                            var f = i.sibling;
                            if (f !== null) {
                                f.return = i.return,
                                S = f;
                                break e
                            }
                            S = i.return
                        }
                }
                var a = e.current;
                for (S = a; S !== null; ) {
                    o = S;
                    var d = o.child;
                    if (o.subtreeFlags & 2064 && d !== null)
                        d.return = o,
                        S = d;
                    else
                        e: for (o = a; S !== null; ) {
                            if (u = S,
                            u.flags & 2048)
                                try {
                                    switch (u.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        pl(9, u)
                                    }
                                } catch (N) {
                                    H(u, u.return, N)
                                }
                            if (u === o) {
                                S = null;
                                break e
                            }
                            var y = u.sibling;
                            if (y !== null) {
                                y.return = u.return,
                                S = y;
                                break e
                            }
                            S = u.return
                        }
                }
                if (M = l,
                ht(),
                Fe && typeof Fe.onPostCommitFiberRoot == "function")
                    try {
                        Fe.onPostCommitFiberRoot(il, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            R = n,
            Ne.transition = t
        }
    }
    return !1
}
function Wu(e, t, n) {
    t = ln(n, t),
    t = Ma(e, t, 1),
    e = ut(e, t, 1),
    t = oe(),
    e !== null && (Jn(e, 1, t),
    pe(e, t))
}
function H(e, t, n) {
    if (e.tag === 3)
        Wu(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Wu(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (st === null || !st.has(r))) {
                    e = ln(n, e),
                    e = Ra(t, e, 1),
                    t = ut(t, e, 1),
                    e = oe(),
                    t !== null && (Jn(t, 1, e),
                    pe(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Nd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = oe(),
    e.pingedLanes |= e.suspendedLanes & n,
    J === e && (b & n) === n && (X === 4 || X === 3 && (b & 130023424) === b && 500 > Q() - Po ? Nt(e, 0) : jo |= n),
    pe(e, t)
}
function ba(e, t) {
    t === 0 && (e.mode & 1 ? (t = sr,
    sr <<= 1,
    !(sr & 130023424) && (sr = 4194304)) : t = 1);
    var n = oe();
    e = Ye(e, t),
    e !== null && (Jn(e, t, n),
    pe(e, n))
}
function Ed(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    ba(e, n)
}
function Cd(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(g(314))
    }
    r !== null && r.delete(t),
    ba(e, n)
}
var ec;
ec = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || fe.current)
            ce = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return ce = !1,
                dd(e, t, n);
            ce = !!(e.flags & 131072)
        }
    else
        ce = !1,
        U && t.flags & 1048576 && la(t, Kr, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Lr(e, t),
        e = t.pendingProps;
        var l = en(t, le.current);
        Jt(t, n),
        l = ko(null, t, r, e, l, n);
        var i = So();
        return t.flags |= 1,
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        de(r) ? (i = !0,
        Br(t)) : i = !1,
        t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null,
        vo(t),
        l.updater = dl,
        t.stateNode = l,
        l._reactInternals = t,
        ji(t, r, e, n),
        t = Li(null, t, r, !0, i, n)) : (t.tag = 0,
        U && i && so(t),
        ie(null, t, l, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Lr(e, t),
            e = t.pendingProps,
            l = r._init,
            r = l(r._payload),
            t.type = r,
            l = t.tag = jd(r),
            e = Pe(r, e),
            l) {
            case 0:
                t = zi(null, t, r, e, n);
                break e;
            case 1:
                t = Ru(null, t, r, e, n);
                break e;
            case 11:
                t = Tu(null, t, r, e, n);
                break e;
            case 14:
                t = Mu(null, t, r, Pe(r.type, e), n);
                break e
            }
            throw Error(g(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Pe(r, l),
        zi(e, t, r, l, n);
    case 1:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Pe(r, l),
        Ru(e, t, r, l, n);
    case 3:
        e: {
            if (Fa(t),
            e === null)
                throw Error(g(387));
            r = t.pendingProps,
            i = t.memoizedState,
            l = i.element,
            ca(e, t),
            Gr(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    l = ln(Error(g(423)), t),
                    t = Ou(e, t, r, n, l);
                    break e
                } else if (r !== l) {
                    l = ln(Error(g(424)), t),
                    t = Ou(e, t, r, n, l);
                    break e
                } else
                    for (he = ot(t.stateNode.containerInfo.firstChild),
                    ve = t,
                    U = !0,
                    Le = null,
                    n = sa(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (tn(),
                r === l) {
                    t = Xe(e, t, n);
                    break e
                }
                ie(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return fa(t),
        e === null && Ei(t),
        r = t.type,
        l = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        o = l.children,
        xi(r, l) ? o = null : i !== null && xi(r, i) && (t.flags |= 32),
        Ia(e, t),
        ie(e, t, o, n),
        t.child;
    case 6:
        return e === null && Ei(t),
        null;
    case 13:
        return Ua(e, t, n);
    case 4:
        return yo(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = nn(t, null, r, n) : ie(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Pe(r, l),
        Tu(e, t, r, l, n);
    case 7:
        return ie(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return ie(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return ie(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            l = t.pendingProps,
            i = t.memoizedProps,
            o = l.value,
            O(Yr, r._currentValue),
            r._currentValue = o,
            i !== null)
                if (Re(i.value, o)) {
                    if (i.children === l.children && !fe.current) {
                        t = Xe(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var u = i.dependencies;
                        if (u !== null) {
                            o = i.child;
                            for (var s = u.firstContext; s !== null; ) {
                                if (s.context === r) {
                                    if (i.tag === 1) {
                                        s = Be(-1, n & -n),
                                        s.tag = 2;
                                        var c = i.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var v = c.pending;
                                            v === null ? s.next = s : (s.next = v.next,
                                            v.next = s),
                                            c.pending = s
                                        }
                                    }
                                    i.lanes |= n,
                                    s = i.alternate,
                                    s !== null && (s.lanes |= n),
                                    Ci(i.return, n, t),
                                    u.lanes |= n;
                                    break
                                }
                                s = s.next
                            }
                        } else if (i.tag === 10)
                            o = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (o = i.return,
                            o === null)
                                throw Error(g(341));
                            o.lanes |= n,
                            u = o.alternate,
                            u !== null && (u.lanes |= n),
                            Ci(o, n, t),
                            o = i.sibling
                        } else
                            o = i.child;
                        if (o !== null)
                            o.return = i;
                        else
                            for (o = i; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (i = o.sibling,
                                i !== null) {
                                    i.return = o.return,
                                    o = i;
                                    break
                                }
                                o = o.return
                            }
                        i = o
                    }
            ie(e, t, l.children, n),
            t = t.child
        }
        return t;
    case 9:
        return l = t.type,
        r = t.pendingProps.children,
        Jt(t, n),
        l = Ee(l),
        r = r(l),
        t.flags |= 1,
        ie(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        l = Pe(r, t.pendingProps),
        l = Pe(r.type, l),
        Mu(e, t, r, l, n);
    case 15:
        return Oa(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Pe(r, l),
        Lr(e, t),
        t.tag = 1,
        de(r) ? (e = !0,
        Br(t)) : e = !1,
        Jt(t, n),
        Ta(t, r, l),
        ji(t, r, l, n),
        Li(null, t, r, !0, e, n);
    case 19:
        return $a(e, t, n);
    case 22:
        return Da(e, t, n)
    }
    throw Error(g(156, t.tag))
}
;
function tc(e, t) {
    return Ps(e, t)
}
function _d(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Se(e, t, n, r) {
    return new _d(e,t,n,r)
}
function Mo(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function jd(e) {
    if (typeof e == "function")
        return Mo(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Zi)
            return 11;
        if (e === Ji)
            return 14
    }
    return 2
}
function ct(e, t) {
    var n = e.alternate;
    return n === null ? (n = Se(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Rr(e, t, n, r, l, i) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        Mo(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case Dt:
            return Et(n.children, l, i, t);
        case Gi:
            o = 8,
            l |= 8;
            break;
        case Jl:
            return e = Se(12, n, t, l | 2),
            e.elementType = Jl,
            e.lanes = i,
            e;
        case ql:
            return e = Se(13, n, t, l),
            e.elementType = ql,
            e.lanes = i,
            e;
        case bl:
            return e = Se(19, n, t, l),
            e.elementType = bl,
            e.lanes = i,
            e;
        case fs:
            return hl(n, l, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case as:
                    o = 10;
                    break e;
                case cs:
                    o = 9;
                    break e;
                case Zi:
                    o = 11;
                    break e;
                case Ji:
                    o = 14;
                    break e;
                case Je:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(g(130, e == null ? e : typeof e, ""))
        }
    return t = Se(o, n, t, l),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function Et(e, t, n, r) {
    return e = Se(7, e, r, t),
    e.lanes = n,
    e
}
function hl(e, t, n, r) {
    return e = Se(22, e, r, t),
    e.elementType = fs,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Yl(e, t, n) {
    return e = Se(6, e, null, t),
    e.lanes = n,
    e
}
function Xl(e, t, n) {
    return t = Se(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Pd(e, t, n, r, l) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Pl(0),
    this.expirationTimes = Pl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Pl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = l,
    this.mutableSourceEagerHydrationData = null
}
function Ro(e, t, n, r, l, i, o, u, s) {
    return e = new Pd(e,t,n,u,s),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = Se(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    vo(i),
    e
}
function zd(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Ot,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function nc(e) {
    if (!e)
        return dt;
    e = e._reactInternals;
    e: {
        if (Tt(e) !== e || e.tag !== 1)
            throw Error(g(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (de(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(g(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (de(n))
            return na(e, n, t)
    }
    return t
}
function rc(e, t, n, r, l, i, o, u, s) {
    return e = Ro(n, r, !0, e, l, i, o, u, s),
    e.context = nc(null),
    n = e.current,
    r = oe(),
    l = at(n),
    i = Be(r, l),
    i.callback = t ?? null,
    ut(n, i, l),
    e.current.lanes = l,
    Jn(e, l, r),
    pe(e, r),
    e
}
function vl(e, t, n, r) {
    var l = t.current
      , i = oe()
      , o = at(l);
    return n = nc(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Be(i, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = ut(l, t, o),
    e !== null && (Me(e, l, o, i),
    jr(e, l, o)),
    o
}
function rl(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Bu(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Oo(e, t) {
    Bu(e, t),
    (e = e.alternate) && Bu(e, t)
}
function Ld() {
    return null
}
var lc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Do(e) {
    this._internalRoot = e
}
yl.prototype.render = Do.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(g(409));
    vl(e, t, null, null)
}
;
yl.prototype.unmount = Do.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        zt(function() {
            vl(null, e, null, null)
        }),
        t[Ke] = null
    }
}
;
function yl(e) {
    this._internalRoot = e
}
yl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Ds();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < be.length && t !== 0 && t < be[n].priority; n++)
            ;
        be.splice(n, 0, e),
        n === 0 && Fs(e)
    }
}
;
function Io(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function gl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Qu() {}
function Td(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var c = rl(o);
                i.call(c)
            }
        }
        var o = rc(t, r, e, 0, null, !1, !1, "", Qu);
        return e._reactRootContainer = o,
        e[Ke] = o.current,
        Vn(e.nodeType === 8 ? e.parentNode : e),
        zt(),
        o
    }
    for (; l = e.lastChild; )
        e.removeChild(l);
    if (typeof r == "function") {
        var u = r;
        r = function() {
            var c = rl(s);
            u.call(c)
        }
    }
    var s = Ro(e, 0, !1, null, null, !1, !1, "", Qu);
    return e._reactRootContainer = s,
    e[Ke] = s.current,
    Vn(e.nodeType === 8 ? e.parentNode : e),
    zt(function() {
        vl(t, s, n, r)
    }),
    s
}
function xl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof l == "function") {
            var u = l;
            l = function() {
                var s = rl(o);
                u.call(s)
            }
        }
        vl(t, o, e, l)
    } else
        o = Td(n, t, e, l, r);
    return rl(o)
}
Rs = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Sn(t.pendingLanes);
            n !== 0 && (eo(t, n | 1),
            pe(t, Q()),
            !(M & 6) && (on = Q() + 500,
            ht()))
        }
        break;
    case 13:
        zt(function() {
            var r = Ye(e, 1);
            if (r !== null) {
                var l = oe();
                Me(r, e, 1, l)
            }
        }),
        Oo(e, 1)
    }
}
;
to = function(e) {
    if (e.tag === 13) {
        var t = Ye(e, 134217728);
        if (t !== null) {
            var n = oe();
            Me(t, e, 134217728, n)
        }
        Oo(e, 134217728)
    }
}
;
Os = function(e) {
    if (e.tag === 13) {
        var t = at(e)
          , n = Ye(e, t);
        if (n !== null) {
            var r = oe();
            Me(n, e, t, r)
        }
        Oo(e, t)
    }
}
;
Ds = function() {
    return R
}
;
Is = function(e, t) {
    var n = R;
    try {
        return R = e,
        t()
    } finally {
        R = n
    }
}
;
ai = function(e, t, n) {
    switch (t) {
    case "input":
        if (ni(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var l = al(r);
                    if (!l)
                        throw Error(g(90));
                    ps(r),
                    ni(r, l)
                }
            }
        }
        break;
    case "textarea":
        hs(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Yt(e, !!n.multiple, t, !1)
    }
}
;
Ss = zo;
Ns = zt;
var Md = {
    usingClientEntryPoint: !1,
    Events: [bn, $t, al, ws, ks, zo]
}
  , xn = {
    findFiberByHostInstance: wt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Rd = {
    bundleType: xn.bundleType,
    version: xn.version,
    rendererPackageName: xn.rendererPackageName,
    rendererConfig: xn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ge.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = _s(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: xn.findFiberByHostInstance || Ld,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xr.isDisabled && xr.supportsFiber)
        try {
            il = xr.inject(Rd),
            Fe = xr
        } catch {}
}
ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Md;
ge.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Io(t))
        throw Error(g(200));
    return zd(e, t, null, n)
}
;
ge.createRoot = function(e, t) {
    if (!Io(e))
        throw Error(g(299));
    var n = !1
      , r = ""
      , l = lc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    t = Ro(e, 1, !1, null, null, n, !1, r, l),
    e[Ke] = t.current,
    Vn(e.nodeType === 8 ? e.parentNode : e),
    new Do(t)
}
;
ge.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(g(188)) : (e = Object.keys(e).join(","),
        Error(g(268, e)));
    return e = _s(t),
    e = e === null ? null : e.stateNode,
    e
}
;
ge.flushSync = function(e) {
    return zt(e)
}
;
ge.hydrate = function(e, t, n) {
    if (!gl(t))
        throw Error(g(200));
    return xl(null, e, t, !0, n)
}
;
ge.hydrateRoot = function(e, t, n) {
    if (!Io(e))
        throw Error(g(405));
    var r = n != null && n.hydratedSources || null
      , l = !1
      , i = ""
      , o = lc;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = rc(t, null, e, 1, n ?? null, l, !1, i, o),
    e[Ke] = t.current,
    Vn(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            l = n._getVersion,
            l = l(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new yl(t)
}
;
ge.render = function(e, t, n) {
    if (!gl(t))
        throw Error(g(200));
    return xl(null, e, t, !1, n)
}
;
ge.unmountComponentAtNode = function(e) {
    if (!gl(e))
        throw Error(g(40));
    return e._reactRootContainer ? (zt(function() {
        xl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Ke] = null
        })
    }),
    !0) : !1
}
;
ge.unstable_batchedUpdates = zo;
ge.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!gl(n))
        throw Error(g(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(g(38));
    return xl(e, t, n, !1, r)
}
;
ge.version = "18.3.1-next-f1338f8080-20240426";
function ic() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ic)
        } catch (e) {
            console.error(e)
        }
}
ic(),
is.exports = ge;
var Od = is.exports, oc, Ku = Od;
oc = Ku.createRoot,
Ku.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Dd = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Id = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , $e = (e, t) => {
    const n = Kt.forwardRef( ({color: r="currentColor", size: l=24, strokeWidth: i=2, absoluteStrokeWidth: o, className: u="", children: s, ...c}, v) => Kt.createElement("svg", {
        ref: v,
        ...Dd,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${Id(e)}`, u].join(" "),
        ...c
    }, [...t.map( ([h,m]) => Kt.createElement(h, m)), ...Array.isArray(s) ? s : [s]]));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fd = $e("Award", [["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}], ["path", {
    d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",
    key: "em7aur"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rt = $e("CheckCircle", [["path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
    key: "g774vq"
}], ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wr = $e("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ud = $e("Cloud", [["path", {
    d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
    key: "p7xjir"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $d = $e("Gamepad2", [["line", {
    x1: "6",
    x2: "10",
    y1: "11",
    y2: "11",
    key: "1gktln"
}], ["line", {
    x1: "8",
    x2: "8",
    y1: "9",
    y2: "13",
    key: "qnk9ow"
}], ["line", {
    x1: "15",
    x2: "15.01",
    y1: "12",
    y2: "12",
    key: "krot7o"
}], ["line", {
    x1: "18",
    x2: "18.01",
    y1: "10",
    y2: "10",
    key: "1lcuu1"
}], ["path", {
    d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
    key: "mfqc10"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ad = $e("Headphones", [["path", {
    d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
    key: "1xhozi"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gl = $e("Monitor", [["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "3",
    rx: "2",
    key: "48i651"
}], ["line", {
    x1: "8",
    x2: "16",
    y1: "21",
    y2: "21",
    key: "1svkeh"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "17",
    y2: "21",
    key: "vw1qmm"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kr = $e("Phone", [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yu = $e("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vd = $e("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
function Hd() {
    const e = "+1 (866) 347-3069";
    return p.jsxs("div", {
        className: "min-h-screen bg-white",
        children: [p.jsx("header", {
            className: "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg sticky top-0 z-50",
            children: p.jsx("div", {
                className: "container mx-auto px-4 py-3",
                children: p.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [p.jsxs("div", {
                        className: "flex items-center space-x-3",
                        children: [p.jsx("div", {
                            className: "bg-white p-2 rounded-lg",
                            children: p.jsx(Gl, {
                                className: "h-6 w-6 text-blue-600"
                            })
                        }), p.jsx("h1", {
                            className: "text-xl font-semibold",
                            children: "Microsoft Customer Service"
                        })]
                    }), p.jsxs("div", {
                        className: "flex items-center space-x-2 bg-green-500 px-4 py-2 rounded-full hover:bg-green-600 transition-colors",
                        children: [p.jsx(kr, {
                            className: "h-4 w-4"
                        }), p.jsx("a", {
                            href: `tel:${e.replace(/\D/g, "")}`,
                            className: "font-medium text-sm",
                            children: e
                        })]
                    })]
                })
            })
        }), p.jsx("section", {
            className: "bg-gradient-to-b from-blue-50 to-white py-16",
            children: p.jsxs("div", {
                className: "container mx-auto px-4 text-center",
                children: [p.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold text-gray-800 mb-4",
                    children: "Get Expert Microsoft Support"
                }), p.jsx("p", {
                    className: "text-xl text-gray-600 mb-8 max-w-2xl mx-auto",
                    children: "Professional technical support for all your Microsoft products and services"
                }), p.jsxs("div", {
                    className: "bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto mb-8 border-l-4 border-green-500",
                    children: [p.jsxs("div", {
                        className: "flex items-center justify-center mb-4",
                        children: [p.jsx(kr, {
                            className: "h-8 w-8 text-green-500 mr-3"
                        }), p.jsx("span", {
                            className: "text-lg font-semibold text-gray-700",
                            children: "Call Now"
                        })]
                    }), p.jsx("a", {
                        href: `tel:${e.replace(/\D/g, "")}`,
                        className: "text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors block mb-4",
                        children: e
                    }), p.jsxs("div", {
                        className: "flex items-center justify-center text-green-600 mb-2",
                        children: [p.jsx(wr, {
                            className: "h-4 w-4 mr-2"
                        }), p.jsx("span", {
                            className: "text-sm font-medium",
                            children: "24/7 Available"
                        })]
                    }), p.jsx("button", {
                        className: "bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors w-full",
                        children: p.jsxs("a", {
                            href: `tel:${e.replace(/\D/g, "")}`,
                            className: "flex items-center justify-center",
                            children: [p.jsx(kr, {
                                className: "h-4 w-4 mr-2"
                            }), "Click to Call"]
                        })
                    })]
                }), p.jsxs("div", {
                    className: "grid md:grid-cols-3 gap-6 max-w-4xl mx-auto",
                    children: [p.jsxs("div", {
                        className: "bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500",
                        children: [p.jsx(Yu, {
                            className: "h-8 w-8 text-blue-500 mx-auto mb-3"
                        }), p.jsx("h3", {
                            className: "font-semibold text-gray-800 mb-2",
                            children: "Secure Support"
                        }), p.jsx("p", {
                            className: "text-gray-600 text-sm",
                            children: "Safe and reliable technical assistance"
                        })]
                    }), p.jsxs("div", {
                        className: "bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500",
                        children: [p.jsx(Ad, {
                            className: "h-8 w-8 text-green-500 mx-auto mb-3"
                        }), p.jsx("h3", {
                            className: "font-semibold text-gray-800 mb-2",
                            children: "Expert Help"
                        }), p.jsx("p", {
                            className: "text-gray-600 text-sm",
                            children: "Certified technical professionals"
                        })]
                    }), p.jsxs("div", {
                        className: "bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500",
                        children: [p.jsx(wr, {
                            className: "h-8 w-8 text-blue-500 mx-auto mb-3"
                        }), p.jsx("h3", {
                            className: "font-semibold text-gray-800 mb-2",
                            children: "24/7 Service"
                        }), p.jsx("p", {
                            className: "text-gray-600 text-sm",
                            children: "Round-the-clock availability"
                        })]
                    })]
                })]
            })
        }), p.jsx("section", {
            className: "py-16 bg-gray-50",
            children: p.jsxs("div", {
                className: "container mx-auto px-4",
                children: [p.jsx("h2", {
                    className: "text-3xl font-bold text-center text-gray-800 mb-12",
                    children: "Microsoft Products We Support"
                }), p.jsxs("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: [p.jsxs("div", {
                        className: "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center",
                        children: [p.jsx("div", {
                            className: "bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                            children: p.jsx(Gl, {
                                className: "h-8 w-8 text-blue-600"
                            })
                        }), p.jsx("h3", {
                            className: "font-semibold text-gray-800 mb-2",
                            children: "Windows"
                        }), p.jsx("p", {
                            className: "text-gray-600 text-sm",
                            children: "Windows 10, 11, and Server editions"
                        })]
                    }), p.jsxs("div", {
                        className: "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center",
                        children: [p.jsx("div", {
                            className: "bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                            children: p.jsx(Vd, {
                                className: "h-8 w-8 text-green-600"
                            })
                        }), p.jsx("h3", {
                            className: "font-semibold text-gray-800 mb-2",
                            children: "Office 365"
                        }), p.jsx("p", {
                            className: "text-gray-600 text-sm",
                            children: "Word, Excel, PowerPoint, Outlook"
                        })]
                    }), p.jsxs("div", {
                        className: "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center",
                        children: [p.jsx("div", {
                            className: "bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                            children: p.jsx(Ud, {
                                className: "h-8 w-8 text-blue-600"
                            })
                        }), p.jsx("h3", {
                            className: "font-semibold text-gray-800 mb-2",
                            children: "Azure"
                        }), p.jsx("p", {
                            className: "text-gray-600 text-sm",
                            children: "Cloud services and solutions"
                        })]
                    }), p.jsxs("div", {
                        className: "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center",
                        children: [p.jsx("div", {
                            className: "bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                            children: p.jsx($d, {
                                className: "h-8 w-8 text-green-600"
                            })
                        }), p.jsx("h3", {
                            className: "font-semibold text-gray-800 mb-2",
                            children: "Xbox"
                        }), p.jsx("p", {
                            className: "text-gray-600 text-sm",
                            children: "Gaming console and services"
                        })]
                    })]
                })]
            })
        }), p.jsx("section", {
            className: "py-16 bg-white",
            children: p.jsx("div", {
                className: "container mx-auto px-4",
                children: p.jsxs("div", {
                    className: "max-w-4xl mx-auto",
                    children: [p.jsx("h2", {
                        className: "text-3xl font-bold text-center text-gray-800 mb-12",
                        children: "How We Can Help You"
                    }), p.jsxs("div", {
                        className: "grid md:grid-cols-2 gap-8",
                        children: [p.jsxs("div", {
                            className: "space-y-6",
                            children: [p.jsxs("div", {
                                className: "flex items-start space-x-4",
                                children: [p.jsx(Rt, {
                                    className: "h-6 w-6 text-green-500 mt-1 flex-shrink-0"
                                }), p.jsxs("div", {
                                    children: [p.jsx("h3", {
                                        className: "font-semibold text-gray-800 mb-1",
                                        children: "Technical Troubleshooting"
                                    }), p.jsx("p", {
                                        className: "text-gray-600",
                                        children: "Resolve software issues, installation problems, and system errors"
                                    })]
                                })]
                            }), p.jsxs("div", {
                                className: "flex items-start space-x-4",
                                children: [p.jsx(Rt, {
                                    className: "h-6 w-6 text-green-500 mt-1 flex-shrink-0"
                                }), p.jsxs("div", {
                                    children: [p.jsx("h3", {
                                        className: "font-semibold text-gray-800 mb-1",
                                        children: "Account Support"
                                    }), p.jsx("p", {
                                        className: "text-gray-600",
                                        children: "Help with Microsoft account recovery, password resets, and security"
                                    })]
                                })]
                            }), p.jsxs("div", {
                                className: "flex items-start space-x-4",
                                children: [p.jsx(Rt, {
                                    className: "h-6 w-6 text-green-500 mt-1 flex-shrink-0"
                                }), p.jsxs("div", {
                                    children: [p.jsx("h3", {
                                        className: "font-semibold text-gray-800 mb-1",
                                        children: "Product Setup"
                                    }), p.jsx("p", {
                                        className: "text-gray-600",
                                        children: "Installation and configuration of Microsoft software and services"
                                    })]
                                })]
                            })]
                        }), p.jsxs("div", {
                            className: "space-y-6",
                            children: [p.jsxs("div", {
                                className: "flex items-start space-x-4",
                                children: [p.jsx(Rt, {
                                    className: "h-6 w-6 text-green-500 mt-1 flex-shrink-0"
                                }), p.jsxs("div", {
                                    children: [p.jsx("h3", {
                                        className: "font-semibold text-gray-800 mb-1",
                                        children: "Performance Optimization"
                                    }), p.jsx("p", {
                                        className: "text-gray-600",
                                        children: "Speed up your system and improve software performance"
                                    })]
                                })]
                            }), p.jsxs("div", {
                                className: "flex items-start space-x-4",
                                children: [p.jsx(Rt, {
                                    className: "h-6 w-6 text-green-500 mt-1 flex-shrink-0"
                                }), p.jsxs("div", {
                                    children: [p.jsx("h3", {
                                        className: "font-semibold text-gray-800 mb-1",
                                        children: "Security Solutions"
                                    }), p.jsx("p", {
                                        className: "text-gray-600",
                                        children: "Protect your devices from malware and security threats"
                                    })]
                                })]
                            }), p.jsxs("div", {
                                className: "flex items-start space-x-4",
                                children: [p.jsx(Rt, {
                                    className: "h-6 w-6 text-green-500 mt-1 flex-shrink-0"
                                }), p.jsxs("div", {
                                    children: [p.jsx("h3", {
                                        className: "font-semibold text-gray-800 mb-1",
                                        children: "Data Recovery"
                                    }), p.jsx("p", {
                                        className: "text-gray-600",
                                        children: "Recover lost files and restore important documents"
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            })
        }), p.jsx("section", {
            className: "py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white",
            children: p.jsxs("div", {
                className: "container mx-auto px-4 text-center",
                children: [p.jsx("h2", {
                    className: "text-3xl font-bold mb-4",
                    children: "Need Immediate Assistance?"
                }), p.jsx("p", {
                    className: "text-xl mb-8 opacity-90",
                    children: "Our certified technicians are standing by to help you"
                }), p.jsxs("div", {
                    className: "flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6",
                    children: [p.jsxs("a", {
                        href: `tel:${e.replace(/\D/g, "")}`,
                        className: "bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-colors flex items-center text-lg",
                        children: [p.jsx(kr, {
                            className: "h-5 w-5 mr-3"
                        }), "Call ", e]
                    }), p.jsxs("div", {
                        className: "flex items-center text-green-300",
                        children: [p.jsx(wr, {
                            className: "h-5 w-5 mr-2"
                        }), p.jsx("span", {
                            className: "font-medium",
                            children: "Available 24/7"
                        })]
                    })]
                })]
            })
        }), p.jsx("section", {
            className: "py-16 bg-gray-50",
            children: p.jsxs("div", {
                className: "container mx-auto px-4",
                children: [p.jsx("h2", {
                    className: "text-3xl font-bold text-center text-gray-800 mb-12",
                    children: "Why Choose Our Service?"
                }), p.jsxs("div", {
                    className: "grid md:grid-cols-3 gap-8 max-w-4xl mx-auto",
                    children: [p.jsxs("div", {
                        className: "text-center",
                        children: [p.jsx("div", {
                            className: "bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                            children: p.jsx(Fd, {
                                className: "h-8 w-8 text-blue-600"
                            })
                        }), p.jsx("h3", {
                            className: "font-semibold text-gray-800 mb-2",
                            children: "Certified Experts"
                        }), p.jsx("p", {
                            className: "text-gray-600",
                            children: "Our technicians are Microsoft certified professionals"
                        })]
                    }), p.jsxs("div", {
                        className: "text-center",
                        children: [p.jsx("div", {
                            className: "bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                            children: p.jsx(wr, {
                                className: "h-8 w-8 text-green-600"
                            })
                        }), p.jsx("h3", {
                            className: "font-semibold text-gray-800 mb-2",
                            children: "Quick Response"
                        }), p.jsx("p", {
                            className: "text-gray-600",
                            children: "Fast resolution times and immediate assistance"
                        })]
                    }), p.jsxs("div", {
                        className: "text-center",
                        children: [p.jsx("div", {
                            className: "bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                            children: p.jsx(Yu, {
                                className: "h-8 w-8 text-blue-600"
                            })
                        }), p.jsx("h3", {
                            className: "font-semibold text-gray-800 mb-2",
                            children: "Secure Service"
                        }), p.jsx("p", {
                            className: "text-gray-600",
                            children: "Safe and secure remote assistance when needed"
                        })]
                    })]
                })]
            })
        }), p.jsx("footer", {
            className: "bg-gray-800 text-white py-8",
            children: p.jsx("div", {
                className: "container mx-auto px-4",
                children: p.jsxs("div", {
                    className: "text-center",
                    children: [p.jsxs("div", {
                        className: "flex items-center justify-center mb-4",
                        children: [p.jsx(Gl, {
                            className: "h-6 w-6 mr-2"
                        }), p.jsx("span", {
                            className: "font-semibold",
                            children: "Microsoft Customer Service"
                        })]
                    }), p.jsxs("div", {
                        className: "mb-4",
                        children: [p.jsx("a", {
                            href: `tel:${e.replace(/\D/g, "")}`,
                            className: "text-green-400 hover:text-green-300 font-semibold text-lg",
                            children: e
                        }), p.jsx("p", {
                            className: "text-gray-400 text-sm mt-1",
                            children: "Available 24/7"
                        })]
                    }), p.jsx("div", {
                        className: "border-t border-gray-700 pt-4",
                        children: p.jsx("p", {
                            className: "text-gray-500 text-xs",
                            children: "Disclaimer: This is an independent technical support service. We are not affiliated with Microsoft Corporation. For official Microsoft support, please contact Microsoft directly through their official channels."
                        })
                    })]
                })
            })
        })]
    })
}
oc(document.getElementById("root")).render(p.jsx(Kt.StrictMode, {
    children: p.jsx(Hd, {})
}));
