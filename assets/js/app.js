! function(e) {
    window = "";
    stylesheet_directory_uri = './';
    function t(t) {
        for (var i, s, a = t[0], l = t[1], c = t[2], d = 0, h = []; d < a.length; d++) s = a[d], Object.prototype.hasOwnProperty.call(o, s) && o[s] && h.push(o[s][0]), o[s] = 0;
        for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i]);
        for (u && u(t); h.length;) h.shift()();
        return r.push.apply(r, c || []), n()
    }

    function n() {
        for (var e, t = 0; t < r.length; t++) {
            for (var n = r[t], i = !0, a = 1; a < n.length; a++) {
                var l = n[a];
                0 !== o[l] && (i = !1)
            }
            i && (r.splice(t--, 1), e = s(s.s = n[0]))
        }
        return e
    }
    var i = {},
        o = {
            1: 0
        },
        r = [];

    function s(t) {
        if (i[t]) return i[t].exports;
        var n = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }
    s.m = e, s.c = i, s.d = function(e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) s.d(n, i, function(t) {
                return e[t]
            }.bind(null, i));
        return n
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "";
    var a = window.webpackJsonp = window.webpackJsonp || [],
        l = a.push.bind(a);
    a.push = t, a = a.slice();
    for (var c = 0; c < a.length; c++) t(a[c]);
    var u = l;
    r.push([69, 0]), n()
}({
    1: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }));
        var i = n(0),
            o = n(2);

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var a = function() {
            function e(t) {
                var n = this;
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                r(this, e), this.el = t, this.videoCover = this.el.querySelector(".video-controls__cover-video"), this.controls = this.el.querySelector(".video-controls"), this.video = this.el.querySelector("video"), this.volumeTrigger = this.el.querySelector(".js-video-volume"), this.captionTrigger = this.el.querySelector(".js-video-captions"), this.fullscreenTrigger = this.el.querySelector(".js-video-fullscreen"), this.playTriggers = this.el.querySelectorAll(".js-video-play-pause"), this.progressIndicator = this.el.querySelector(".js-video-controls-progress"), this.progressInput = this.el.querySelector(".js-video-controls-progress-input"), this._resize = this.resize.bind(this), this._pause = this.pause.bind(this), this._toggleCaption = this.toggleCaption.bind(this), this._soundChange = this.soundChange.bind(this), this._handleMute = this.handleMute.bind(this), this._captionChange = this.captionChange.bind(this), this._enterFullscreen = this.enterFullscreen.bind(this), this._handleFullscreenChange = this.handleFullscreenChange.bind(this), this._playChange = this.playChange.bind(this), this._handlePlay = this.handlePlay.bind(this), this._handlePause = this.handlePause.bind(this), this._onStartVerifications = this.onStartVerifications.bind(this), this._onTimeUpdate = this.onTimeUpdate.bind(this), this._ended = this.ended.bind(this), this._onPlaying = this.onPlaying.bind(this), this._onMouseMove = this.onMouseMove.bind(this), this._onMouseEnter = this.onMouseEnter.bind(this), this._onMouseLeave = this.onMouseLeave.bind(this), this._changeProgress = this.changeProgress.bind(this), this.volumeTrigger.addEventListener("click", this._soundChange), this.video.addEventListener("volumechange", this._handleMute), this.captionTrigger.addEventListener("click", this._captionChange), this.fullscreenTrigger.addEventListener("click", this._enterFullscreen), this.video.addEventListener("play", this._handlePlay), this.video.addEventListener("pause", this._handlePause), this.video.addEventListener("canplay", this._onStartVerifications), this.video.addEventListener("loadeddata", this._onStartVerifications), this.video.addEventListener("timeupdate", this._onTimeUpdate), this.video.addEventListener("ended", this._ended), this.video.addEventListener("playing", this._onPlaying), this.controls.addEventListener("mousemove", this._onMouseMove), this.controls.addEventListener("touchstart", this._onMouseMove), this.controls.addEventListener("mouseenter", this._onMouseEnter), this.controls.addEventListener("mouseleave", this._onMouseLeave), this.progressInput.addEventListener("change", this._changeProgress);
                for (var i = 0; i < this.playTriggers.length; i++) this.playTriggers[i].addEventListener("click", this._playChange);
                window.Emitter.on("play-video", this._pause), window.Emitter.on("interrupt-videos", this._pause), window.Emitter.on("video-captions-change", this._toggleCaption), this.video.controls = !1, this.mouseOver = !1, this.appearTimeout = null, this.isPlaying = !1, this.isPaused = !1, this.captionsEnabled = !1, this.handleMuteIsTrusted = !0, this.previousCurrentTime = 0, this.captionChange(), window.Emitter.emit("video-captions-change"), this.onTimeUpdate(), document.fonts ? document.fonts.ready.then(this._resize) : setTimeout((function() {
                    n.resize()
                }), 300), window.addEventListener("resize", this._resize), ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "msfullscreenchange"].forEach((function(e) {
                    return document.addEventListener(e, n._handleFullscreenChange, !1)
                }));
                var o = {
                    root: null,
                    rootMargin: "0px",
                    threshold: [.5]
                };
                this.observer = new IntersectionObserver(this.onScreen.bind(this), o), this.observer.observe(this.el)
            }
            var t, n, a;
            return t = e, (n = [{
                key: "onScreen",
                value: function(e) {
                    var t = this;
                    e.forEach((function(e) {
                        !e.isIntersecting && t.isNotFullScreen() && (t.handleMuteIsTrusted = !1, t.pause(null, !0))
                    }))
                }
            }, {
                key: "onStartVerifications",
                value: function() {
                    this.hasCaptions(this.video) || this.captionTrigger.classList.add("u-hidden"), this.hasAudioTrack(this.video) ? this.volumeTrigger.classList.remove("u-hidden") : this.volumeTrigger.classList.add("u-hidden")
                }
            }, {
                key: "checkProgress",
                value: function() {
                    var e = this;
                    this.checkProgressInterval = setInterval((function() {
                        e.video.currentTime === e.previousCurrentTime ? e.controls.classList.add("is-loading") : e.controls.classList.remove("is-loading")
                    }), 1e3)
                }
            }, {
                key: "changeProgress",
                value: function(e) {
                    var t = Number(this.progressInput.value),
                        n = this.video.duration / 100 * t;
                    this.video.currentTime = n
                }
            }, {
                key: "onTimeUpdate",
                value: function() {
                    var e = this.video.currentTime / this.video.duration * 100,
                        t = "polygon(0 0, ".concat(e, "% 0, ").concat(e, "% 100%, 0% 100%)");
                    this.progressIndicator.style.webkitClipPath = t, this.progressIndicator.style.clipPath = t, window.Emitter.emit("video-progress", this.video.src, e), this.previousCurrentTime = this.video.currentTime
                }
            }, {
                key: "backToStart",
                value: function() {
                    this.video.currentTime = 0, this.isPaused = !1, this.isPlaying = !1, this.controls.classList.remove("is-playing"), this.controls.classList.remove("is-paused"), clearInterval(this.checkProgressInterval), this.controls.classList.remove("is-loading")
                }
            }, {
                key: "resetVideo",
                value: function() {
                    this.pause()
                }
            }, {
                key: "captionChange",
                value: function() {
                    window.captionsEnabled = !window.captionsEnabled, window.Emitter.emit("video-captions-change")
                }
            }, {
                key: "toggleCaption",
                value: function() {
                    window.captionsEnabled ? (this.captionTrigger.classList.add("is-active"), this.video.textTracks[0] && (this.video.textTracks[0].mode = "showing")) : (this.captionTrigger.classList.remove("is-active"), this.video.textTracks[0] && (this.video.textTracks[0].mode = "hidden"))
                }
            }, {
                key: "handleMute",
                value: function() {
                    this.handleMuteIsTrusted && (0 == this.video.volume || this.video.muted ? (window.hasVolume = !1, this.controls.classList.add("is-muted"), this.controls.classList.remove("is-unmuted")) : (window.hasVolume = !0, this.controls.classList.add("is-unmuted"), this.controls.classList.remove("is-muted")))
                }
            }, {
                key: "soundChange",
                value: function() {
                    window.hasVolume = !window.hasVolume, window.hasVolume ? this.enableSound() : this.disableSound()
                }
            }, {
                key: "disableSound",
                value: function() {
                    this.controls.classList.add("is-muted"), this.controls.classList.remove("is-unmuted"), this.video.volume = 0, this.video.muted = !0
                }
            }, {
                key: "enableSound",
                value: function() {
                    this.controls.classList.add("is-unmuted"), this.controls.classList.remove("is-muted"), this.video.volume = 1, this.video.muted = !1
                }
            }, {
                key: "enterFullscreen",
                value: function() {
                    this.videoOffset = this.video.getBoundingClientRect().top, this.video.requestFullscreen ? this.video.requestFullscreen() : this.video.webkitEnterFullscreen && this.video.webkitEnterFullscreen()
                }
            }, {
                key: "exitFullscreen",
                value: function() {
                    (document.webkitCurrentFullScreenElement || document.fullscreenElement) && (document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                }
            }, {
                key: "isNotFullScreen",
                value: function() {
                    return !document.webkitCurrentFullScreenElement && !document.mozFullScreenElement
                }
            }, {
                key: "handleFullscreenChange",
                value: function(e) {
                    var t = this;
                    this.isNotFullScreen() && e.target === this.video && setTimeout((function() {
                        window.scrollTo(0, Object(o.a)(t.video) - t.videoOffset)
                    }), 1e3)
                }
            }, {
                key: "playChange",
                value: function() {
                    this.isPlaying && !this.isPaused ? this.pause() : this.play(!1)
                }
            }, {
                key: "play",
                value: function() {
                    var e = this;
                    this.controls.classList.add("is-playing"), this.onStartVerifications(), this.checkProgress(), this.video.play().then((function() {
                        e.controls.classList.add("is-playing"), e.controls.classList.remove("is-loading"), e.controls.classList.remove("is-paused"), window.Emitter.emit("play-video", e.video.src), window.Emitter.emit("video-gallery-play", e.video.src), window.hasVolume ? e.enableSound() : e.disableSound(), e.handleMuteIsTrusted = !0
                    })).catch((function(t) {
                        console.error(t), e.pause(), e.controls.classList.remove("is-loading")
                    }))
                }
            }, {
                key: "pause",
                value: function(e, t) {
                    var n = this;
                    e && e === this.video.src || (clearInterval(this.checkProgressInterval), this.controls.classList.remove("is-loading"), 0 !== this.video.volume && !this.video.muted || t ? (this.handleMuteIsTrusted = !1, i.c.to(this.video, .5, {
                        volume: 0,
                        onComplete: function() {
                            n.video.pause()
                        }
                    })) : this.video.pause(), this.controls.classList.add("is-paused"))
                }
            }, {
                key: "handlePlay",
                value: function() {
                    this.isPlaying = !0, this.isPaused = !1, this.controls.classList.remove("is-paused")
                }
            }, {
                key: "handlePause",
                value: function() {
                    this.isPaused = !0, this.controls.classList.add("is-paused")
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this;
                    this.pause(), this.backToStart(), this.onTimeUpdate(), this.volumeTrigger.removeEventListener("click", this._soundChange), this.video.removeEventListener("volumechange", this._handleMute), this.captionTrigger.removeEventListener("click", this._captionChange), this.fullscreenTrigger.removeEventListener("click", this._enterFullscreen), this.video.removeEventListener("timeupdate", this._onTimeUpdate), this.video.removeEventListener("canplay", this._onStartVerifications), this.video.removeEventListener("loadeddata", this._onStartVerifications);
                    for (var t = 0; t < this.playTriggers.length; t++) this.playTriggers[t].removeEventListener("click", this._playChange);
                    ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "msfullscreenchange"].forEach((function(t) {
                        return document.removeEventListener(t, e._handleFullscreenChange, !1)
                    }))
                }
            }, {
                key: "ended",
                value: function() {
                    this.exitFullscreen(), this.backToStart(), this.resetVideo(), window.Emitter.emit("video-ended", this.video.src), this.controls.classList.remove("is-playing"), this.controls.classList.add("is-paused")
                }
            }, {
                key: "onPlaying",
                value: function() {
                    this.controls.classList.remove("is-loading")
                }
            }, {
                key: "onMouseMove",
                value: function() {
                    var e = this;
                    this.show(), this.appearTimeout && (clearTimeout(this.appearTimeout), this.appearTimeout = null), this.appearTimeout = setTimeout((function() {
                        !e.isPlaying || e.isPaused || e.mouseOver || e.hide()
                    }), 1200)
                }
            }, {
                key: "onMouseEnter",
                value: function() {
                    this.mouseOver = !0
                }
            }, {
                key: "onMouseLeave",
                value: function() {
                    this.mouseOver = !1
                }
            }, {
                key: "hide",
                value: function() {
                    this.el.classList.add("hide-controls")
                }
            }, {
                key: "show",
                value: function() {
                    this.el.classList.remove("hide-controls")
                }
            }, {
                key: "hasCaptions",
                value: function(e) {
                    return Boolean(e.textTracks.length)
                }
            }, {
                key: "hasAudioTrack",
                value: function(e) {
                    return e.mozHasAudio || Boolean(e.webkitAudioDecodedByteCount) || Boolean(e.audioTracks && e.audioTracks.length)
                }
            }, {
                key: "resize",
                value: function() {
                    window.innerWidth !== this.screenWidth && (this.screenWidth = window.innerWidth, this.setSize())
                }
            }, {
                key: "setSize",
                value: function() {
                    window.innerWidth < 1024 && this.video.dataset.mobileSrc && !this.video.src.includes(this.video.dataset.mobileSrc) ? (this.pause(), this.backToStart(), this.video.src = this.video.dataset.mobileSrc) : window.innerWidth >= 1024 && this.video.dataset.desktopSrc && !this.video.src.includes(this.video.dataset.desktopSrc) && (this.pause(), this.backToStart(), this.video.src = this.video.dataset.desktopSrc), this.videoCover && (window.innerWidth < 1024 && this.videoCover.dataset.mobileSrc && !this.videoCover.src.includes(this.videoCover.dataset.mobileSrc) ? this.videoCover.src = this.videoCover.dataset.mobileSrc : window.innerWidth >= 1024 && this.videoCover.dataset.desktopSrc && !this.videoCover.src.includes(this.videoCover.dataset.desktopSrc) && (this.videoCover.src = this.videoCover.dataset.desktopSrc))
                }
            }]) && s(t.prototype, n), a && s(t, a), e
        }()
    },
    2: function(e, t, n) {
        "use strict";
        t.a = function e(t) {
            return t ? e(t.offsetParent) + t.offsetTop : 0
        }
    },
    21: function(e, t, n) {
        var i, o, r;

        function s(e) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        /*!
         * ScrollTrigger 3.6.0
         * https://greensock.com
         *
         * @license Copyright 2020, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */
        ! function(n, a) {
            "object" == s(t) && void 0 !== e ? a(t) : (o = [t], void 0 === (r = "function" == typeof(i = a) ? i.apply(t, o) : i) || (e.exports = r))
        }(0, (function(e) {
            "use strict";

            function t(e) {
                return e
            }

            function n() {
                return "undefined" != typeof window
            }

            function i() {
                return I || n() && (I = window.gsap) && I.registerPlugin && I
            }

            function o(e) {
                return !!~H.indexOf(e)
            }

            function r(e, t) {
                return ~ue.indexOf(e) && ue[ue.indexOf(e) + 1][t]
            }

            function a(e, t) {
                var n = t.s,
                    i = t.sc,
                    s = de.indexOf(e),
                    a = i === Me.sc ? 1 : 2;
                return ~s || (s = de.push(e) - 1), de[s + a] || (de[s + a] = r(e, n) || (o(e) ? i : function(t) {
                    return arguments.length ? e[n] = t : e[n]
                }))
            }

            function l(e) {
                return r(e, "getBoundingClientRect") || (o(e) ? function() {
                    return it.width = B.innerWidth, it.height = B.innerHeight, it
                } : function() {
                    return Re(e)
                })
            }

            function c(e, t) {
                var n = t.s,
                    i = t.d2,
                    s = t.d,
                    a = t.a;
                return (n = "scroll" + i) && (a = r(e, n)) ? a() - l(e)()[s] : o(e) ? Math.max(N[n], z[n]) - (B["inner" + i] || N["client" + i] || z["client" + i]) : e[n] - e["offset" + i]
            }

            function u(e, t) {
                for (var n = 0; n < ne.length; n += 3) t && !~t.indexOf(ne[n + 1]) || e(ne[n], ne[n + 1], ne[n + 2])
            }

            function d(e) {
                return "string" == typeof e
            }

            function h(e) {
                return "function" == typeof e
            }

            function p(e) {
                return "number" == typeof e
            }

            function f(e) {
                return "object" == s(e)
            }

            function m(e) {
                return h(e) && e()
            }

            function g(e, t) {
                return function() {
                    var n = m(e),
                        i = m(t);
                    return function() {
                        m(n), m(i)
                    }
                }
            }

            function v(e) {
                return B.getComputedStyle(e)
            }

            function y(e, t) {
                for (var n in t) n in e || (e[n] = t[n]);
                return e
            }

            function b(e, t) {
                var n = t.d2;
                return e["offset" + n] || e["client" + n] || 0
            }

            function w(e) {
                var t, n = [],
                    i = e.labels,
                    o = e.duration();
                for (t in i) n.push(i[t] / o);
                return n
            }

            function S(e, t, n, i) {
                return n.split(",").forEach((function(n) {
                    return e(t, n, i)
                }))
            }

            function k(e, t, n) {
                return e.addEventListener(t, n, {
                    passive: !0
                })
            }

            function x(e, t, n) {
                return e.removeEventListener(t, n)
            }

            function T(e, t) {
                if (d(e)) {
                    var n = e.indexOf("="),
                        i = ~n ? (e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
                    i && (e.indexOf("%") > n && (i *= t / 100), e = e.substr(0, n - 1)), e = i + (e in Be ? Be[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
                }
                return e
            }

            function O(e, t, n, i, s, a, l) {
                var c = s.startColor,
                    u = s.endColor,
                    d = s.fontSize,
                    h = s.indent,
                    p = s.fontWeight,
                    f = D.createElement("div"),
                    m = o(n) || "fixed" === r(n, "pinType"),
                    g = -1 !== e.indexOf("scroller"),
                    v = m ? z : n,
                    y = -1 !== e.indexOf("start"),
                    b = y ? c : u,
                    w = "border-color:" + b + ";font-size:" + d + ";color:" + b + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
                return w += "position:" + (g && m ? "fixed;" : "absolute;"), !g && m || (w += (i === Me ? we : Se) + ":" + (a + parseFloat(h)) + "px;"), l && (w += "box-sizing:border-box;text-align:left;width:" + l.offsetWidth + "px;"), f._isStart = y, f.setAttribute("class", "gsap-marker-" + e), f.style.cssText = w, f.innerText = t || 0 === t ? e + "-" + t : e, v.children[0] ? v.insertBefore(f, v.children[0]) : v.appendChild(f), f._offset = f["offset" + i.op.d2], De(f, 0, i, y), f
            }

            function L() {
                return U = U || V(Qe)
            }

            function E() {
                U || (U = V(Qe), fe || Ue("scrollStart"), fe = he())
            }

            function _() {
                return !X && !re && W.restart(!0)
            }

            function C(e) {
                var t, n = I.ticker.frame,
                    i = [],
                    o = 0;
                if (le !== n || ce) {
                    for ($e(); o < Ve.length; o += 4)(t = B.matchMedia(Ve[o]).matches) !== Ve[o + 3] && ((Ve[o + 3] = t) ? i.push(o) : $e(1, Ve[o]) || h(Ve[o + 2]) && Ve[o + 2]());
                    for (Ye(), o = 0; o < i.length; o++) t = i[o], ae = Ve[t], Ve[t + 2] = Ve[t + 1](e);
                    ae = 0, F && Ke(0, 1), le = n, Ue("matchMedia")
                }
            }

            function P() {
                return x(rt, "scrollEnd", P) || Ke(!0)
            }

            function j(e, t, n, i) {
                if (e.parentNode !== t) {
                    for (var o, r = Ze.length, s = t.style, a = e.style; r--;) s[o = Ze[r]] = n[o];
                    s.position = "absolute" === n.position ? "absolute" : "relative", "inline" === n.display && (s.display = "inline-block"), a[Se] = a[we] = "auto", s.overflow = "visible", s.boxSizing = "border-box", s[ke] = b(e, Ae) + qe, s[xe] = b(e, Me) + qe, s[_e] = a[Ce] = a.top = a[be] = "0", nt(i), a[ke] = a.maxWidth = n[ke], a[xe] = a.maxHeight = n[xe], a[_e] = n[_e], e.parentNode.insertBefore(t, e), t.appendChild(e)
                }
            }

            function q(e) {
                for (var t = et.length, n = e.style, i = [], o = 0; o < t; o++) i.push(et[o], n[et[o]]);
                return i.t = e, i
            }

            function A(e, t, n, i, o, r, s, a, l, c, u, f) {
                if (h(e) && (e = e(a)), d(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? T("0" + e.substr(3), n) : 0)), p(e)) s && De(s, n, i, !0);
                else {
                    h(t) && (t = t(a));
                    var m, g, y, b = G(t)[0] || z,
                        w = Re(b) || {},
                        S = e.split(" ");
                    w && (w.left || w.top) || "none" !== v(b).display || (y = b.style.display, b.style.display = "block", w = Re(b), y ? b.style.display = y : b.style.removeProperty("display")), m = T(S[0], w[i.d]), g = T(S[1] || "0", n), e = w[i.p] - l[i.p] - c + m + o - g, s && De(s, g, i, n - g < 20 || s._isStart && 20 < g), n -= n - g
                }
                if (r) {
                    var k = e + n,
                        x = r._isStart;
                    f = "scroll" + i.d2, De(r, k, i, x && 20 < k || !x && (u ? Math.max(z[f], N[f]) : r.parentNode[f]) <= k + 1), u && (l = Re(s), u && (r.style[i.op.p] = l[i.op.p] - i.op.m - r._offset + qe))
                }
                return Math.round(e)
            }

            function M(e, t, n, i) {
                if (e.parentNode !== t) {
                    var o, r, s = e.style;
                    if (t === z) {
                        for (o in e._stOrig = s.cssText, r = v(e)) + o || ot.test(o) || !r[o] || "string" != typeof s[o] || "0" === o || (s[o] = r[o]);
                        s.top = n, s.left = i
                    } else s.cssText = e._stOrig;
                    I.core.getCache(e).uncache = 1, t.appendChild(e)
                }
            }

            function R(e, t) {
                var n, i, o = a(e, t),
                    r = "_scroll" + t.p2;
                return e[r] = o,
                    function t(s, a, l, c, u) {
                        var d = t.tween,
                            h = a.onComplete;
                        return d && d.kill(), n = Math.round(l), a[r] = s, (a.modifiers = {})[r] = function(e) {
                            return (e = Math.round(o())) !== n && e !== i && 2 < Math.abs(e - n) ? (d.kill(), t.tween = 0) : e = l + c * d.ratio + u * d.ratio * d.ratio, i = n, n = Math.round(e)
                        }, a.onComplete = function() {
                            t.tween = 0, h && h.call(d)
                        }, d = t.tween = I.to(e, a)
                    }
            }
            var I, F, B, D, N, z, H, W, V, U, G, Y, $, K, X, J, Q, Z, ee, te, ne, ie, oe, re, se, ae, le, ce = 1,
                ue = [],
                de = [],
                he = Date.now,
                pe = he(),
                fe = 0,
                me = 1,
                ge = Math.abs,
                ve = "scrollLeft",
                ye = "scrollTop",
                be = "left",
                we = "right",
                Se = "bottom",
                ke = "width",
                xe = "height",
                Te = "Right",
                Oe = "Left",
                Le = "Top",
                Ee = "Bottom",
                _e = "padding",
                Ce = "margin",
                Pe = "Width",
                je = "Height",
                qe = "px",
                Ae = {
                    s: ve,
                    p: be,
                    p2: Oe,
                    os: we,
                    os2: Te,
                    d: ke,
                    d2: Pe,
                    a: "x",
                    sc: function(e) {
                        return arguments.length ? B.scrollTo(e, Me.sc()) : B.pageXOffset || D[ve] || N[ve] || z[ve] || 0
                    }
                },
                Me = {
                    s: ye,
                    p: "top",
                    p2: Le,
                    os: Se,
                    os2: Ee,
                    d: xe,
                    d2: je,
                    a: "y",
                    op: Ae,
                    sc: function(e) {
                        return arguments.length ? B.scrollTo(Ae.sc(), e) : B.pageYOffset || D[ye] || N[ye] || z[ye] || 0
                    }
                },
                Re = function(e, t) {
                    var n = t && "matrix(1, 0, 0, 1, 0, 0)" !== v(e)[Q] && I.to(e, {
                            x: 0,
                            y: 0,
                            xPercent: 0,
                            yPercent: 0,
                            rotation: 0,
                            rotationX: 0,
                            rotationY: 0,
                            scale: 1,
                            skewX: 0,
                            skewY: 0
                        }).progress(1),
                        i = e.getBoundingClientRect();
                    return n && n.progress(0).kill(), i
                },
                Ie = {
                    startColor: "green",
                    endColor: "red",
                    indent: 0,
                    fontSize: "16px",
                    fontWeight: "normal"
                },
                Fe = {
                    toggleActions: "play",
                    anticipatePin: 0
                },
                Be = {
                    top: 0,
                    left: 0,
                    center: .5,
                    bottom: 1,
                    right: 1
                },
                De = function(e, t, n, i) {
                    var o = {
                            display: "block"
                        },
                        r = n[i ? "os2" : "p2"],
                        s = n[i ? "p2" : "os2"];
                    e._isFlipped = i, o[n.a + "Percent"] = i ? -100 : 0, o[n.a] = i ? "1px" : 0, o["border" + r + Pe] = 1, o["border" + s + Pe] = 0, o[n.p] = t + "px", I.set(e, o)
                },
                Ne = [],
                ze = {},
                He = {},
                We = [],
                Ve = [],
                Ue = function(e) {
                    return He[e] && He[e].map((function(e) {
                        return e()
                    })) || We
                },
                Ge = [],
                Ye = function(e) {
                    for (var t = 0; t < Ge.length; t += 4) e && Ge[t + 3] !== e || (Ge[t].style.cssText = Ge[t + 1], Ge[t + 2].uncache = 1)
                },
                $e = function(e, t) {
                    var n;
                    for (Z = 0; Z < Ne.length; Z++) n = Ne[Z], t && n.media !== t || (e ? n.kill(1) : (n.scroll.rec || (n.scroll.rec = n.scroll()), n.revert()));
                    Ye(t), t || Ue("revert")
                },
                Ke = function(e, t) {
                    if (!fe || e) {
                        var n = Ue("refreshInit");
                        for (ie && rt.sort(), t || $e(), Z = 0; Z < Ne.length; Z++) Ne[Z].refresh();
                        for (n.forEach((function(e) {
                                return e && e.render && e.render(-1)
                            })), Z = Ne.length; Z--;) Ne[Z].scroll.rec = 0;
                        W.pause(), Ue("refresh")
                    } else k(rt, "scrollEnd", P)
                },
                Xe = 0,
                Je = 1,
                Qe = function() {
                    var e = Ne.length,
                        t = he(),
                        n = 50 <= t - pe,
                        i = e && Ne[0].scroll();
                    if (Je = i < Xe ? -1 : 1, Xe = i, n && (fe && !J && 200 < t - fe && (fe = 0, Ue("scrollEnd")), $ = pe, pe = t), Je < 0) {
                        for (Z = e; Z--;) Ne[Z] && Ne[Z].update(0, n);
                        Je = 1
                    } else
                        for (Z = 0; Z < e; Z++) Ne[Z] && Ne[Z].update(0, n);
                    U = 0
                },
                Ze = [be, "top", Se, we, Ce + Ee, Ce + Te, Ce + Le, Ce + Oe, "display", "flexShrink", "float"],
                et = Ze.concat([ke, xe, "boxSizing", "max" + Pe, "max" + je, "position", Ce, _e, _e + Le, _e + Te, _e + Ee, _e + Oe]),
                tt = /([A-Z])/g,
                nt = function(e) {
                    if (e)
                        for (var t, n, i = e.t.style, o = e.length, r = 0; r < o; r += 2) n = e[r + 1], t = e[r], n ? i[t] = n : i[t] && i.removeProperty(t.replace(tt, "-$1").toLowerCase())
                },
                it = {
                    left: 0,
                    top: 0
                },
                ot = /(?:webkit|moz|length|cssText)/i;
            Ae.op = Me;
            var rt = (st.prototype.init = function(e, n) {
                if (this.progress = this.start = 0, this.vars && this.kill(1), me) {
                    var i, s, u, m, g, S, L, C, F, H, W, V, U, K, Q, ee, te, ne, re, le, de, pe, ve, ye, be, we, Se, je, Be, De, He, We, Ve, Ue, Ge, Ye, $e, Ke = (e = y(d(e) || p(e) || e.nodeType ? {
                            trigger: e
                        } : e, Fe)).horizontal ? Ae : Me,
                        Xe = e.onUpdate,
                        Qe = e.toggleClass,
                        Ze = e.id,
                        et = e.onToggle,
                        tt = e.onRefresh,
                        ot = e.scrub,
                        rt = e.trigger,
                        at = e.pin,
                        lt = e.pinSpacing,
                        ct = e.invalidateOnRefresh,
                        ut = e.anticipatePin,
                        dt = e.onScrubComplete,
                        ht = e.onSnapComplete,
                        pt = e.once,
                        ft = e.snap,
                        mt = e.pinReparent,
                        gt = !ot && 0 !== ot,
                        vt = G(e.scroller || B)[0],
                        yt = I.core.getCache(vt),
                        bt = o(vt),
                        wt = "pinType" in e ? "fixed" === e.pinType : bt || "fixed" === r(vt, "pinType"),
                        St = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                        kt = gt && e.toggleActions.split(" "),
                        xt = "markers" in e ? e.markers : Fe.markers,
                        Tt = bt ? 0 : parseFloat(v(vt)["border" + Ke.p2 + Pe]) || 0,
                        Ot = this,
                        Lt = e.onRefreshInit && function() {
                            return e.onRefreshInit(Ot)
                        },
                        Et = function(e, t, n) {
                            var i = n.d,
                                o = n.d2,
                                s = n.a;
                            return (s = r(e, "getBoundingClientRect")) ? function() {
                                return s()[i]
                            } : function() {
                                return (t ? B["inner" + o] : e["client" + o]) || 0
                            }
                        }(vt, bt, Ke),
                        _t = function(e, t) {
                            return !t || ~ue.indexOf(e) ? l(e) : function() {
                                return it
                            }
                        }(vt, bt);
                    Ot.media = ae, ut *= 45, Ne.push(Ot), Ot.scroller = vt, Ot.scroll = a(vt, Ke), g = Ot.scroll(), Ot.vars = e, n = n || e.animation, "refreshPriority" in e && (ie = 1), yt.tweenScroll = yt.tweenScroll || {
                        top: R(vt, Me),
                        left: R(vt, Ae)
                    }, Ot.tweenTo = i = yt.tweenScroll[Ke.p], n && (n.vars.lazy = !1, n._initted || !1 !== n.vars.immediateRender && !1 !== e.immediateRender && n.render(0, !0, !0), Ot.animation = n.pause(), n.scrollTrigger = Ot, (We = p(ot) && ot) && (He = I.to(n, {
                        ease: "power3",
                        duration: We,
                        onComplete: function() {
                            return dt && dt(Ot)
                        }
                    })), Be = 0, Ze = Ze || n.vars.id), ft && (f(ft) || (ft = {
                        snapTo: ft
                    }), I.set(bt ? [z, N] : vt, {
                        scrollBehavior: "auto"
                    }), u = h(ft.snapTo) ? ft.snapTo : "labels" === ft.snapTo ? function(e) {
                        return function(t) {
                            return I.utils.snap(w(e), t)
                        }
                    }(n) : "labelsDirectional" === ft.snapTo ? function(e) {
                        return function(t, n, i) {
                            var o, r = w(e);
                            if (r.sort((function(e, t) {
                                    return e - t
                                })), 0 <= i) {
                                for (o = 0; o < r.length; o++)
                                    if (r[o] >= t) return r[o];
                                return r.pop()
                            }
                            for (o = r.length; o--;)
                                if (r[o] <= t) return r[o];
                            return r[0]
                        }
                    }(n) : I.utils.snap(ft.snapTo), Ve = f(Ve = ft.duration || {
                        min: .1,
                        max: 2
                    }) ? Y(Ve.min, Ve.max) : Y(Ve, Ve), Ue = I.delayedCall(ft.delay || We / 2 || .1, (function() {
                        if (Math.abs(Ot.getVelocity()) < 10 && !J) {
                            var e = n && !gt ? n.totalProgress() : Ot.progress,
                                t = (e - De) / (he() - $) * 1e3 || 0,
                                o = ge(t / 2) * t / .185,
                                r = e + o,
                                s = Y(0, 1, u(r, Ot, t)),
                                a = Ot.scroll(),
                                l = Math.round(L + s * K),
                                c = i.tween;
                            if (a <= C && L <= a && l !== a) {
                                if (c && !c._initted && c.data <= Math.abs(l - a)) return;
                                i(l, {
                                    duration: Ve(ge(.185 * Math.max(ge(r - e), ge(s - e)) / t / .05 || 0)),
                                    ease: ft.ease || "power3",
                                    data: Math.abs(l - a),
                                    onComplete: function() {
                                        Be = De = n && !gt ? n.totalProgress() : Ot.progress, ht && ht(Ot)
                                    }
                                }, a, o * K, l - a - o * K)
                            }
                        } else Ot.isActive && Ue.restart(!0)
                    })).pause()), Ze && (ze[Ze] = Ot), rt = Ot.trigger = G(rt || at)[0], at = !0 === at ? rt : G(at)[0], d(Qe) && (Qe = {
                        targets: rt,
                        className: Qe
                    }), at && (!1 === lt || lt === Ce || (lt = !(!lt && "flex" === v(at.parentNode).display) && _e), Ot.pin = at, !1 !== e.force3D && I.set(at, {
                        force3D: !0
                    }), (s = I.core.getCache(at)).spacer ? Q = s.pinState : (s.spacer = ne = D.createElement("div"), ne.setAttribute("class", "pin-spacer" + (Ze ? " pin-spacer-" + Ze : "")), s.pinState = Q = q(at)), Ot.spacer = ne = s.spacer, je = v(at), ye = je[lt + Ke.os2], le = I.getProperty(at), de = I.quickSetter(at, Ke.a, qe), j(at, ne, je), te = q(at)), xt && (U = f(xt) ? y(xt, Ie) : Ie, W = O("scroller-start", Ze, vt, Ke, U, 0), V = O("scroller-end", Ze, vt, Ke, U, 0, W), re = W["offset" + Ke.op.d2], F = O("start", Ze, vt, Ke, U, re), H = O("end", Ze, vt, Ke, U, re), wt || (function(e) {
                        e.style.position = "absolute" === v(e).position ? "absolute" : "relative"
                    }(bt ? z : vt), I.set([W, V], {
                        force3D: !0
                    }), we = I.quickSetter(W, Ke.a, qe), Se = I.quickSetter(V, Ke.a, qe))), Ot.revert = function(e) {
                        var t = !1 !== e || !Ot.enabled,
                            i = X;
                        t !== m && (t && (Ye = Math.max(Ot.scroll(), Ot.scroll.rec || 0), Ge = Ot.progress, $e = n && n.progress()), F && [F, H, W, V].forEach((function(e) {
                            return e.style.display = t ? "none" : "block"
                        })), t && (X = 1), Ot.update(t), X = i, at && (t ? function(e, t, n) {
                            if (nt(n), e.parentNode === t) {
                                var i = t.parentNode;
                                i && (i.insertBefore(e, t), i.removeChild(t))
                            }
                        }(at, ne, Q) : mt && Ot.isActive || j(at, ne, v(at), be)), m = t)
                    }, Ot.refresh = function(t) {
                        if (!X && Ot.enabled)
                            if (at && t && fe) k(st, "scrollEnd", P);
                            else {
                                X = 1, He && He.pause(), ct && n && n.progress(0).invalidate(), m || Ot.revert();
                                for (var i, o, r, s, l, u, p, f, y, w = Et(), x = _t(), O = c(vt, Ke), E = 0, _ = 0, M = e.end, R = e.endTrigger || rt, B = e.start || (0 === e.start ? 0 : at || !rt ? "0 0" : "0 100%"), D = rt && Math.max(0, Ne.indexOf(Ot)) || 0, N = D; N--;) !(p = Ne[N].pin) || p !== rt && p !== at || Ne[N].revert();
                                for (L = A(B, rt, w, Ke, Ot.scroll(), F, W, Ot, x, Tt, wt, O) || (at ? -.001 : 0), h(M) && (M = M(Ot)), d(M) && !M.indexOf("+=") && (~M.indexOf(" ") ? M = (d(B) ? B.split(" ")[0] : "") + M : (E = T(M.substr(2), w), M = d(B) ? B : L + E, R = rt)), C = Math.max(L, A(M || (R ? "100% 0" : O), R, w, Ke, Ot.scroll() + E, H, V, Ot, x, Tt, wt, O)) || -.001, K = C - L || (L -= .01) && .001, E = 0, N = D; N--;)(p = (u = Ne[N]).pin) && u.start - u._pinPush < L && (i = u.end - u.start, p === rt && (E += i), p === at && (_ += i));
                                if (L += E, C += E, Ot._pinPush = _, F && E && ((i = {})[Ke.a] = "+=" + E, I.set([F, H], i)), at) i = v(at), s = Ke === Me, r = Ot.scroll(), pe = parseFloat(le(Ke.a)) + _, !O && 1 < C && ((bt ? z : vt).style["overflow-" + Ke.a] = "scroll"), j(at, ne, i), te = q(at), o = Re(at, !0), f = wt && a(vt, s ? Ae : Me)(), lt && ((be = [lt + Ke.os2, K + _ + qe]).t = ne, (N = lt === _e ? b(at, Ke) + K + _ : 0) && be.push(Ke.d, N + qe), nt(be), wt && Ot.scroll(Ye)), wt && ((l = {
                                    top: o.top + (s ? r - L : f) + qe,
                                    left: o.left + (s ? f : r - L) + qe,
                                    boxSizing: "border-box",
                                    position: "fixed"
                                })[ke] = l.maxWidth = Math.ceil(o.width) + qe, l[xe] = l.maxHeight = Math.ceil(o.height) + qe, l[Ce] = l[Ce + Le] = l[Ce + Te] = l[Ce + Ee] = l[Ce + Oe] = "0", l[_e] = i[_e], l[_e + Le] = i[_e + Le], l[_e + Te] = i[_e + Te], l[_e + Ee] = i[_e + Ee], l[_e + Oe] = i[_e + Oe], ee = function(e, t, n) {
                                    for (var i, o = [], r = e.length, s = n ? 8 : 0; s < r; s += 2) i = e[s], o.push(i, i in t ? t[i] : e[s + 1]);
                                    return o.t = e.t, o
                                }(Q, l, mt)), n ? (y = n._initted, oe(1), n.progress(1, !0), ve = le(Ke.a) - pe + K + _, K !== ve && ee.splice(ee.length - 2, 2), n.progress(0, !0), y || n.invalidate(), oe(0)) : ve = K;
                                else if (rt && Ot.scroll())
                                    for (o = rt.parentNode; o && o !== z;) o._pinOffset && (L -= o._pinOffset, C -= o._pinOffset), o = o.parentNode;
                                for (N = 0; N < D; N++) !(u = Ne[N].pin) || u !== rt && u !== at || Ne[N].revert(!1);
                                Ot.start = L, Ot.end = C, (g = S = Ot.scroll()) < Ye && Ot.scroll(Ye), Ot.revert(!1), X = 0, n && gt && n._initted && n.progress($e, !0).render(n.time(), !0, !0), Ge !== Ot.progress && (He && n.totalProgress(Ge, !0), Ot.progress = Ge, Ot.update()), at && lt && (ne._pinOffset = Math.round(Ot.progress * ve)), tt && tt(Ot)
                            }
                    }, Ot.getVelocity = function() {
                        return (Ot.scroll() - S) / (he() - $) * 1e3 || 0
                    }, Ot.update = function(e, t) {
                        var o, r, s, a, l, u = Ot.scroll(),
                            d = e ? 0 : (u - L) / K,
                            h = d < 0 ? 0 : 1 < d ? 1 : d || 0,
                            p = Ot.progress;
                        if (t && (S = g, g = u, ft && (De = Be, Be = n && !gt ? n.totalProgress() : h)), ut && !h && at && !X && !ce && fe && L < u + (u - S) / (he() - $) * ut && (h = 1e-4), h !== p && Ot.enabled) {
                            if (a = (l = (o = Ot.isActive = !!h && h < 1) != (!!p && p < 1)) || !!h != !!p, Ot.direction = p < h ? 1 : -1, Ot.progress = h, gt || (!He || X || ce ? n && n.totalProgress(h, !!X) : (He.vars.totalProgress = h, He.invalidate().restart())), at)
                                if (e && lt && (ne.style[lt + Ke.os2] = ye), wt) {
                                    if (a) {
                                        if (s = !e && p < h && u < C + 1 && u + 1 >= c(vt, Ke), mt)
                                            if (e || !o && !s) M(at, ne);
                                            else {
                                                var f = Re(at, !0),
                                                    m = u - L;
                                                M(at, z, f.top + (Ke === Me ? m : 0) + qe, f.left + (Ke === Me ? 0 : m) + qe)
                                            }
                                        nt(o || s ? ee : te), ve !== K && h < 1 && o || de(pe + (1 !== h || s ? 0 : ve))
                                    }
                                } else de(pe + ve * h);
                                !ft || i.tween || X || ce || Ue.restart(!0), Qe && (l || pt && h && (h < 1 || !se)) && G(Qe.targets).forEach((function(e) {
                                return e.classList[o || pt ? "add" : "remove"](Qe.className)
                            })), !Xe || gt || e || Xe(Ot), a && !X ? (r = h && !p ? 0 : 1 === h ? 1 : 1 === p ? 2 : 3, gt && (s = !l && "none" !== kt[r + 1] && kt[r + 1] || kt[r], n && ("complete" === s || "reset" === s || s in n) && ("complete" === s ? n.pause().totalProgress(1) : "reset" === s ? n.restart(!0).pause() : n[s]()), Xe && Xe(Ot)), !l && se || (et && l && et(Ot), St[r] && St[r](Ot), pt && (1 === h ? Ot.kill(!1, 1) : St[r] = 0), l || St[r = 1 === h ? 1 : 3] && St[r](Ot))) : gt && Xe && !X && Xe(Ot)
                        }
                        Se && (we(u + (W._isFlipped ? 1 : 0)), Se(u))
                    }, Ot.enable = function() {
                        Ot.enabled || (Ot.enabled = !0, k(vt, "resize", _), k(vt, "scroll", E), Lt && k(st, "refreshInit", Lt), n && n.add ? I.delayedCall(.01, (function() {
                            return L || C || Ot.refresh()
                        })) && (K = .01) && (L = C = 0) : Ot.refresh())
                    }, Ot.disable = function(e, t) {
                        if (Ot.enabled && (!1 !== e && Ot.revert(), Ot.enabled = Ot.isActive = !1, t || He && He.pause(), Ye = 0, s && (s.uncache = 1), Lt && x(st, "refreshInit", Lt), Ue && (Ue.pause(), i.tween && i.tween.kill() && (i.tween = 0)), !bt)) {
                            for (var n = Ne.length; n--;)
                                if (Ne[n].scroller === vt && Ne[n] !== Ot) return;
                            x(vt, "resize", _), x(vt, "scroll", E)
                        }
                    }, Ot.kill = function(e, t) {
                        Ot.disable(e, t), Ze && delete ze[Ze];
                        var i = Ne.indexOf(Ot);
                        Ne.splice(i, 1), i === Z && 0 < Je && Z--, n && (n.scrollTrigger = null, e && n.render(-1), t || n.kill()), F && [F, H, W, V].forEach((function(e) {
                            return e.parentNode.removeChild(e)
                        })), s && (s.uncache = 1)
                    }, Ot.enable()
                } else this.update = this.refresh = this.kill = t
            }, st.register = function(e) {
                if (!F && (I = e || i(), n() && window.document && (B = window, D = document, N = D.documentElement, z = D.body), I && (G = I.utils.toArray, Y = I.utils.clamp, oe = I.core.suppressOverwrites || t, I.core.globals("ScrollTrigger", st), z))) {
                    V = B.requestAnimationFrame || function(e) {
                        return setTimeout(e, 16)
                    }, k(B, "mousewheel", E), H = [B, D, N, z], k(D, "scroll", E);
                    var o, r = z.style,
                        s = r.borderTop;
                    r.borderTop = "1px solid #000", o = Re(z), Me.m = Math.round(o.top + Me.sc()) || 0, Ae.m = Math.round(o.left + Ae.sc()) || 0, s ? r.borderTop = s : r.removeProperty("border-top"), K = setInterval(L, 200), I.delayedCall(.5, (function() {
                        return ce = 0
                    })), k(D, "touchcancel", t), k(z, "touchstart", t), S(k, D, "pointerdown,touchstart,mousedown", (function() {
                        return J = 1
                    })), S(k, D, "pointerup,touchend,mouseup", (function() {
                        return J = 0
                    })), Q = I.utils.checkPrefix("transform"), et.push(Q), F = he(), W = I.delayedCall(.2, Ke).pause(), ne = [D, "visibilitychange", function() {
                        var e = B.innerWidth,
                            t = B.innerHeight;
                        D.hidden ? (ee = e, te = t) : ee === e && te === t || _()
                    }, D, "DOMContentLoaded", Ke, B, "load", function() {
                        return fe || Ke()
                    }, B, "resize", _], u(k)
                }
                return F
            }, st.defaults = function(e) {
                for (var t in e) Fe[t] = e[t]
            }, st.kill = function() {
                me = 0, Ne.slice(0).forEach((function(e) {
                    return e.kill(1)
                }))
            }, st.config = function(e) {
                "limitCallbacks" in e && (se = !!e.limitCallbacks);
                var t = e.syncInterval;
                t && clearInterval(K) || (K = t) && setInterval(L, t), "autoRefreshEvents" in e && (u(x) || u(k, e.autoRefreshEvents || "none"), re = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
            }, st.scrollerProxy = function(e, t) {
                var n = G(e)[0];
                o(n) ? ue.unshift(B, t, z, t, N, t) : ue.unshift(n, t)
            }, st.matchMedia = function(e) {
                var t, n, i, o, r;
                for (n in e) i = Ve.indexOf(n), o = e[n], "all" === (ae = n) ? o() : (t = B.matchMedia(n)) && (t.matches && (r = o()), ~i ? (Ve[i + 1] = g(Ve[i + 1], o), Ve[i + 2] = g(Ve[i + 2], r)) : (i = Ve.length, Ve.push(n, o, r), t.addListener ? t.addListener(C) : t.addEventListener("change", C)), Ve[i + 3] = t.matches), ae = 0;
                return Ve
            }, st.clearMatchMedia = function(e) {
                e || (Ve.length = 0), 0 <= (e = Ve.indexOf(e)) && Ve.splice(e, 4)
            }, st);

            function st(e, t) {
                F || st.register(I) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, t)
            }
            rt.version = "3.6.0", rt.saveStyles = function(e) {
                return e ? G(e).forEach((function(e) {
                    if (e && e.style) {
                        var t = Ge.indexOf(e);
                        0 <= t && Ge.splice(t, 4), Ge.push(e, e.style.cssText, I.core.getCache(e), ae)
                    }
                })) : Ge
            }, rt.revert = function(e, t) {
                return $e(!e, t)
            }, rt.create = function(e, t) {
                return new rt(e, t)
            }, rt.refresh = function(e) {
                return e ? _() : Ke(!0)
            }, rt.update = Qe, rt.maxScroll = function(e, t) {
                return c(e, t ? Ae : Me)
            }, rt.getScrollFunc = function(e, t) {
                return a(G(e)[0], t ? Ae : Me)
            }, rt.getById = function(e) {
                return ze[e]
            }, rt.getAll = function() {
                return Ne.slice(0)
            }, rt.isScrolling = function() {
                return !!fe
            }, rt.addEventListener = function(e, t) {
                var n = He[e] || (He[e] = []);
                ~n.indexOf(t) || n.push(t)
            }, rt.removeEventListener = function(e, t) {
                var n = He[e],
                    i = n && n.indexOf(t);
                0 <= i && n.splice(i, 1)
            }, rt.batch = function(e, t) {
                function n(e, t) {
                    var n = [],
                        i = [],
                        o = I.delayedCall(s, (function() {
                            t(n, i), n = [], i = []
                        })).pause();
                    return function(e) {
                        n.length || o.restart(!0), n.push(e.trigger), i.push(e), a <= n.length && o.progress(1)
                    }
                }
                var i, o = [],
                    r = {},
                    s = t.interval || .016,
                    a = t.batchMax || 1e9;
                for (i in t) r[i] = "on" === i.substr(0, 2) && h(t[i]) && "onRefreshInit" !== i ? n(0, t[i]) : t[i];
                return h(a) && (a = a(), k(rt, "refresh", (function() {
                    return a = t.batchMax()
                }))), G(e).forEach((function(e) {
                    var t = {};
                    for (i in r) t[i] = r[i];
                    t.trigger = e, o.push(rt.create(t))
                })), o
            }, rt.sort = function(e) {
                return Ne.sort(e || function(e, t) {
                    return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
                })
            }, i() && I.registerPlugin(rt), e.ScrollTrigger = rt, e.default = rt, "undefined" == typeof window || window !== e ? Object.defineProperty(e, "__esModule", {
                value: !0
            }) : delete e.default
        }))
    },
    6: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }));
        var i = n(1),
            o = n(5),
            r = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href;
                e = e.replace(/[\[\]]/g, "\\$&");
                var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
                    i = n.exec(t);
                return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
            };

        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var a = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.currentModal = null, this.FocusTrap = null, this.modalType = null, this.videos = [], this.VideoControls = null, this.lastVisibleDate = null, this._handleClick = this.handleClick.bind(this), this._onKeyDown = this.onKeyDown.bind(this), this._handleDateSelectorChange = this.handleDateSelectorChange.bind(this), this._onTimelineScroll = this.onTimelineScroll.bind(this), this.setTriggers()
            }
            var t, n, a;
            return t = e, (n = [{
                key: "openModalFromUrl",
                value: function() {
                    var e = this,
                        t = r("modal"),
                        n = r("date");
                    t && (document.querySelector('[data-modal-url="'.concat(t, '"]')).click(), setTimeout((function() {
                        void 0 !== n && e.scrollInsidePopup(n, !1)
                    }), 500))
                }
            }, {
                key: "handleClick",
                value: function(e) {
                    var t = this.currentModal.querySelector(".modal_content");
                    if (t) {
                        var n = t.getBoundingClientRect(),
                            i = !1;
                        e.clientX > n.left && e.clientX < n.right && e.clientY > n.top && e.clientY < n.bottom && (i = !0), i || this.close()
                    }
                }
            }, {
                key: "open",
                value: function(e) {
                    var t = this,
                        n = e.getAttribute("aria-controls"),
                        r = document.querySelector("#".concat(n));
                    if (!r.classList.contains("is-open") && r) {
                        this.currentModal = r, document.body.classList.add("no-scroll"), document.body.classList.add("modal-is-open"), this.lastVisibleDate = null;
                        var s = e.dataset.modalUrl;
                        if (s) {
                            var a = new URL(window.location.href);
                            a.searchParams.set("modal", s), window.history.replaceState(null, null, a)
                        }
                        if (this.currentModal.getAttribute("data-modal-type")) {
                            if (this.modalType = this.currentModal.getAttribute("data-modal-type"), document.body.classList.add("modal-is-".concat(this.modalType)), "video" === this.modalType && (this.VideoControls = new i.a(this.currentModal), this.videos.push(this.VideoControls), setTimeout((function() {
                                    t.VideoControls.play()
                                }), 300)), "info" === this.modalType) {
                                var l = this.currentModal.querySelector(".inline-video");
                                if (l) {
                                    var c = new i.a(l);
                                    this.videos.push(c)
                                }
                            }
                            if ("timeline" === this.modalType) {
                                this.currentModal.addEventListener("scroll", this._onTimelineScroll), this.onTimelineScroll();
                                for (var u = this.currentModal.querySelectorAll(".inline-video"), d = 0; d < u.length; d++) {
                                    var h = new i.a(u[d]);
                                    this.videos.push(h)
                                }
                            }
                            var p = this.currentModal.querySelector(".js-scroll-inside-modal");
                            p && p.addEventListener("change", this._handleDateSelectorChange)
                        }
                        this.currentModal.classList.add("is-open"), this.currentModal.removeAttribute("tabindex"), setTimeout((function() {
                            t.FocusTrap = Object(o.a)(t.currentModal, {
                                allowOutsideClick: !0
                            }), t.FocusTrap.activate()
                        }), 300), window.addEventListener("keydown", this._onKeyDown), this.currentModal.addEventListener("click", this._handleClick)
                    }
                }
            }, {
                key: "close",
                value: function() {
                    var e = this;
                    if (this.currentModal) {
                        window.removeEventListener("keydown", this._onKeyDown), this.currentModal.removeEventListener("click", this._handleClick), window.Emitter.emit("interrupt-videos"), this.FocusTrap.deactivate(), this.FocusTrap = null;
                        var t = new URL(window.location.href);
                        t.searchParams.delete("modal"), t.searchParams.delete("date"), window.history.replaceState(null, null, t), this.currentModal.classList.remove("is-open"), this.currentModal.setAttribute("tabindex", "-1"), setTimeout((function() {
                            e.currentModal.scrollTo(0, 0), "timeline" === e.modalType && (e.onTimelineScroll(), e.currentModal.removeEventListener("scroll", e._onTimelineScroll)), e.currentModal = null, e.modalType && (document.body.classList.remove("modal-is-".concat(e.modalType)), e.modalType = null)
                        }), 450);
                        for (var n = 0; n < this.videos.length; n++) this.videos[n].destroy();
                        document.body.classList.remove("no-scroll"), document.body.classList.remove("modal-is-open"), document.body.classList.remove("modal-is-video")
                    }
                }
            }, {
                key: "onKeyDown",
                value: function(e) {
                    27 === e.keyCode && this.close()
                }
            }, {
                key: "setTriggers",
                value: function() {
                    if (this.triggers)
                        for (var e = 0; e < this.triggers.length; e++) this.triggers[e].removeEventListener("click", this.open.bind(this, this.triggers[e]));
                    this.triggers = document.querySelectorAll(".js-modal-open");
                    for (var t = 0; t < this.triggers.length; t++) this.triggers[t].addEventListener("click", this.open.bind(this, this.triggers[t]));
                    if (!this.closeTriggers) {
                        this.closeTriggers = document.querySelectorAll(".js-close-modal");
                        for (var n = 0; n < this.closeTriggers.length; n++) this.closeTriggers[n].addEventListener("click", this.close.bind(this))
                    }
                }
            }, {
                key: "handleDateSelectorChange",
                value: function(e) {
                    var t = e.target.value;
                    this.scrollInsidePopup(t)
                }
            }, {
                key: "scrollInsidePopup",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = this.currentModal.querySelector('[id="'.concat(e, '"]'));
                    if (n) {
                        var i = n.offsetTop;
                        this.currentModal.scrollTo({
                            top: i,
                            behavior: t ? "smooth" : "auto"
                        })
                    }
                }
            }, {
                key: "onTimelineScroll",
                value: function() {
                    var e = this.currentModal.querySelector(".site-modal__inner-timeline-head"),
                        t = this.currentModal.querySelector(".site-modal__inner-text"),
                        n = this.currentModal.querySelectorAll(".timeline-module[id]"),
                        i = this.currentModal.querySelector(".timeline-year-select"),
                        o = this.currentModal.querySelector(".timeline-line-progress"),
                        r = this.currentModal.scrollTop;
                    r > 130 && (r = 130), e.style.transform = "translateY(-".concat(r, "px)");
                    for (var s = null, a = 0; a < n.length; a++) r > n[a].offsetTop - this.currentModal.scrollTop && (s = n[a]);
                    if (s) {
                        if (this.lastVisibleDate !== s) {
                            this.lastVisibleDate = s, i.value = s.id;
                            var l = new URL(window.location.href);
                            l.searchParams.set("date", s.id), window.history.replaceState(null, null, l)
                        }
                    } else i.value = i.options[0].value;
                    var c = this.currentModal.scrollTop / t.offsetHeight * 104,
                        u = "polygon(0 0, 100% 0, 100% ".concat(c += 3.5, "%, 0 ").concat(c, "%)");
                    o.style.webkitClipPath = u, o.style.clipPath = u
                }
            }]) && s(t.prototype, n), a && s(t, a), e
        }()
    },
    65: function(e, t, n) {
        "use strict";

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        n.r(t);
        var o = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.loaded = !1
            }
            var t, n, o;
            return t = e, (n = [{
                key: "load",
                value: function() {
                    if (this.loaded) this.sendEvent();
                    else {
                        var e = document.createElement("script");
                        e.src = "https://www.youtube.com/player_api";
                        var t = document.getElementsByTagName("script")[0];
                        t.parentNode.insertBefore(e, t), window.onYouTubePlayerAPIReady = function() {
                            this.loaded = !0, this.sendEvent()
                        }.bind(this)
                    }
                }
            }, {
                key: "sendEvent",
                value: function() {
                    window.Emitter.emit("youtube-api-loaded")
                }
            }]) && i(t.prototype, n), o && i(t, o), e
        }();
        t.default = new o
    },
    69: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n(8),
            o = n.n(i),
            r = function(e) {
                return "".concat(e.charAt(0).toLowerCase()).concat(e.replace(/[\W_]/g, "|").split("|").map((function(e) {
                    return "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))
                })).join("").slice(1))
            };

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function l(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e
        }
        var c = function() {
                function e(t) {
                    s(this, e), this.routes = t
                }
                return l(e, [{
                    key: "fire",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "init",
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            i = "" !== e && this.routes[e] && "function" == typeof this.routes[e][t];
                        i && this.routes[e][t](n)
                    }
                }, {
                    key: "loadEvents",
                    value: function() {
                        var e = this;
                        document.body.className.toLowerCase().replace(/-/g, "_").split(/\s+/).map(r).forEach((function(t) {
                            e.fire(t)
                        }))
                    }
                }]), e
            }(),
            u = n(17),
            d = n.n(u);

        function h(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function p(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? h(Object(n), !0).forEach((function(t) {
                    f(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function f(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function m(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function g(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function v(e, t, n) {
            return t && g(e.prototype, t), n && g(e, n), e
        }
        var y = function() {
            function e(t, n) {
                var i = this;
                m(this, e), this.inputSequence = t, this.path = this.inputSequence.path, this.element = document.querySelector(this.inputSequence.element), this.page = n, this.frameCount = this.inputSequence.count, this.currentFrame = function(e) {
                    return stylesheet_directory_uri + "/assets/sequences/" + i.path + "".concat(e.toString().padStart(5, "0"), ".jpg")
                }, this.sequence = [], this.loadedCount = 0, this.section = document.createElement("section"), this.section.classList.add("image-sequence"), this.inputSequence.id && (this.section.id = this.inputSequence.id), this.wrap = document.createElement("div"), this.wrap.classList.add("wrap"), this.section.appendChild(this.wrap), this.container = document.createElement("div"), this.container.classList.add("container"), this.wrap.appendChild(this.container), this.canvas = document.createElement("canvas"), window.innerWidth < 1024 ? (this.canvas.width = 512, this.canvas.height = 1024) : (this.canvas.width = 1600, this.canvas.height = 900), this.context = this.canvas.getContext("2d", {
                    alpha: !1
                }), this.context.imageSmoothingEnabled = !1, this.container.appendChild(this.canvas), this.section.style.height = "calc(var(--outer-height, 100vh) / 100 * ".concat(this.inputSequence.height, ")"), this.inputSequence.pxHeight && (this.section.style.height = "calc(var(--inner-height, 100vh) / 100 * ".concat(this.inputSequence.pxHeight, ")")), this.startOffset = this.inputSequence.startOffset ? this.inputSequence.startOffset : 0, this.endOffset = this.inputSequence.endOffset ? this.inputSequence.endOffset : 0, this.init(), this.inputSequence.progressMeters && (this.meterContainer = document.createElement("div"), this.meterContainer.classList.add("meter-container"), this.inputSequence.progressMeters.forEach((function(e) {
                    var t = document.createElement("div");
                    t.classList.add("meter"), t.id = e.meter.slice(1);
                    var n = document.createElement("div");
                    n.classList.add("meter-inner"), t.appendChild(n), i.meterContainer.appendChild(t)
                })), this.container.appendChild(this.meterContainer)), this.element.appendChild(this.section)
            }
            return v(e, [{
                key: "init",
                value: function() {
                    if (this.page.main.scrollTrigger.saveStyles(this.wrap), this.trigger = this.page.main.scrollTrigger.create(p({
                            data: this.page.slug,
                            trigger: this.inputSequence.trigger || this.section,
                            endTrigger: this.inputSequence.endTrigger || !1,
                            anticipatePin: 1,
                            start: this.inputSequence.start ? this.inputSequence.start : "top top",
                            end: this.inputSequence.end ? this.inputSequence.end : "bottom bottom",
                            markers: this.inputSequence.markers || !1
                        }, this.inputSequence.debug && {
                            onToggle: function(e) {
                                return console.log(e.isActive)
                            }
                        }, {}, this.inputSequence.debug && {
                            onUpdate: function(e) {
                                console.log(e.progress.toFixed(3), "direction:", e.direction, "velocity", e.getVelocity())
                            }
                        })), !1 !== this.inputSequence.pin) {
                        var e = document.getElementById("control-height-div").clientHeight * (this.inputSequence.height / 100 - 1);
                        this.inputSequence.pinEndOffset && (e += this.inputSequence.pinEndOffset), this.page.main.scrollTrigger.create(p({
                            data: this.page.slug,
                            trigger: this.inputSequence.trigger || this.section,
                            endTrigger: this.inputSequence.endTrigger || !1
                        }, this.inputSequence.pinReparent && {
                            pinReparent: !0
                        }, {
                            anticipatePin: 1,
                            pin: this.wrap,
                            start: this.inputSequence.pinStart || "top top",
                            end: this.inputSequence.pinEnd ? "+=".concat(e) : "bottom bottom",
                            markers: this.inputSequence.markers || !1
                        }))
                    }
                }
            }, {
                key: "load",
                value: function(e) {
                    for (var t = 1; t < this.frameCount; t++) this.loadSrc(this.currentFrame(t), 3, e)
                }
            }, {
                key: "loadSrc",
                value: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
                        i = arguments.length > 2 ? arguments[2] : void 0,
                        o = new Image;
                    o.onload = function() {
                        t.loadedCount++, t.loadedCount == t.frameCount - 1 && i()
                    }, o.onerror = function() {
                        n > 0 && t.loadSrc(e, n - 1, i)
                    }, o.src = e, this.sequence.push(o)
                }
            }]), e
        }();

        function b(e) {
            return k(e) || S(e) || w()
        }

        function w() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }

        function S(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }

        function k(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }

        function x(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function T(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function O(e, t, n) {
            return t && T(e.prototype, t), n && T(e, n), e
        }
        var L = {
                root: null,
                rootMargin: "0px",
                threshold: [.15]
            },
            E = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    x(this, e), this.options = Object.assign({}, L, t), this.onChange = this.onChange.bind(this), this.observer = new IntersectionObserver(this.onChange, this.options), this.run()
                }
                return O(e, [{
                    key: "run",
                    value: function() {
                        var e = this;
                        b(document.querySelectorAll(".js-in-view:not(.in-view)")).forEach((function(t) {
                            return e.observer.observe(t)
                        }))
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.destroy(), this.run()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.observer.disconnect()
                    }
                }, {
                    key: "observe",
                    value: function(e) {
                        var t = this;
                        e.forEach((function(e) {
                            return t.observer.observe(e)
                        }))
                    }
                }, {
                    key: "onChange",
                    value: function(e) {
                        e.forEach((function(e) {
                            (e.intersectionRatio > 0 || e.isIntersecting) && e.target.classList.add("in-view"), e.target.classList.contains("js-in-view-reset") && (e.intersectionRatio < 0 || !e.isIntersecting) && e.target.classList.remove("in-view")
                        }))
                    }
                }]), e
            }(),
            _ = E,
            C = n(2),
            P = n(9),
            j = n.n(P),
            q = arguments,
            A = void 0,
            M = function(e, t, n, i, o) {
                var r = i + (o - i) * (e - t) / (n - t);
                return r = Math.max(i, Math.min(r, o))
            },
            R = function(e, t, n) {
                var i;
                return function() {
                    var o = A,
                        r = q,
                        s = n && !i;
                    clearTimeout(i), i = setTimeout((function() {
                        i = null, n || e.apply(o, r)
                    }), t), s && e.apply(o, r)
                }
            };

        function I(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function F(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function B(e, t, n) {
            return t && F(e.prototype, t), n && F(e, n), e
        }
        var D = function() {
                function e(t, n) {
                    var i = this;
                    I(this, e), this.loader = n, this.element = n.element, this.trigger = n.trigger, this.section = n.section, this.canvas = n.canvas, this.container = n.container, this.context = n.context, this.startOffset = n.startOffset, this.endOffset = n.endOffset, this.page = n.page, this.sequence = [], this.isDrawing = !1;
                    var o = 1;
                    n.sequence.forEach((function(e) {
                        if (t.frameRepeats)
                            if (t.frameRepeats[o])
                                for (var n = parseInt(t.frameRepeats[o]); n--;) i.sequence.push(e);
                            else i.sequence.push(e);
                        else i.sequence.push(e);
                        o++
                    })), this.frameCount = this.sequence.length, this.frameIndex = 0, this.progression = [], t.progressMeters && t.progressMeters.forEach((function(e) {
                        var t = {};
                        t.name = e.name, t.value = t.lastValue = 0, t.meter = document.querySelector(e.meter), t.onStart = function() {
                            i.page.main.gsap.set(t.meter.children[0], {
                                top: "0",
                                data: i.page.slug
                            }), i.page.main.gsap.fromTo(t.meter, {
                                autoAlpha: 0
                            }, {
                                autoAlpha: 1,
                                duration: .2,
                                data: i.page.slug
                            }), i.page.main.gsap.fromTo("#".concat(t.name), {
                                autoAlpha: 0
                            }, {
                                autoAlpha: 1,
                                duration: .2,
                                ease: "power3.out",
                                data: i.page.slug
                            })
                        }, t.onFinish = function(e) {
                            e || i.page.main.gsap.to(t.meter.children[0], {
                                top: "104px",
                                duration: .4,
                                data: i.page.slug
                            }), i.page.main.gsap.fromTo(t.meter, {
                                autoAlpha: 1
                            }, {
                                autoAlpha: 0,
                                duration: .2,
                                delay: e ? 0 : .3,
                                data: i.page.slug
                            }), i.page.main.gsap.fromTo("#".concat(t.name), {
                                autoAlpha: 1
                            }, {
                                autoAlpha: 0,
                                duration: .2,
                                delay: e ? 0 : .3,
                                ease: "power3.out",
                                data: i.page.slug
                            })
                        }, t.update = function(n) {
                            t.value = Math.max(0, Math.min((n - e.start) / (e.end - e.start), 1)), t.meter.children[0].style.height = 100 * t.value + "%", t.lastValue <= 0 && t.value > 0 && t.onStart(), t.lastValue >= 1 && t.value < 1 && t.onStart(), t.lastValue < 1 && t.value >= 1 && t.onFinish(), t.lastValue > 0 && t.value <= 0 && t.onFinish(!0), e.cssClasses && i.toggleCssClasses(e, n), t.lastValue = t.value
                        }, i.page.main.gsap.set(t.meter, {
                            autoAlpha: 0
                        }), i.progression.push(t)
                    })), this.img = this.sequence[this.frameIndex], this.update(!0)
                }
                return B(e, [{
                    key: "initLoader",
                    value: function() {
                        this.loader.init(), this.trigger = this.loader.trigger
                    }
                }, {
                    key: "toggleCssClasses",
                    value: function(e, t) {
                        e.cssClasses.forEach((function(n) {
                            t >= n.start && t < n.end ? document.getElementById(e.name).classList.add(n.name) : document.getElementById(e.name).classList.remove(n.name)
                        }))
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        var t = this;
                        this.frameIndex = e ? 0 : Math.min(this.frameCount - 1, Math.ceil(M(this.trigger.progress, 0 + this.startOffset, 1 + this.endOffset, 0, 1) * this.frameCount)), (this.trigger.isActive || e) && (this.progression.forEach((function(n) {
                            n.update(e ? 0 : t.trigger.progress)
                        })), this.img = this.sequence[e ? 0 : this.frameIndex], this.context.drawImage(this.img, 0, 0))
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.img = this.sequence[this.frameIndex], this.context.drawImage(this.img, 0, 0), this.progression.length && this.progression.forEach((function(e) {
                            e.update(0)
                        }))
                    }
                }]), e
            }(),
            N = n(18),
            z = n(19),
            H = n(20),
            W = "precision highp float;\n#define GLSLIFY 1\nattribute vec2 position;\nuniform vec2 resolution;\nvarying vec2 uv;\nvoid main() {\n\tvec2 pos = position.xy;\n\tuv = pos;\n\tgl_Position = vec4(pos, 0.0, 1.0);\n}",
            V = "// this shader started from\n// https://www.shadertoy.com/view/lscGDr\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform float time;\nuniform float seed;\nuniform vec2 resolution;\nuniform vec3 u_color1;\nuniform vec3 u_color2;\nuniform vec3 u_color3;\n\n//\tSimplex 3D Noise \n//\tby Ian McEwan, Ashima Arts\n//\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\n\nfloat snoise(vec3 v){ \n\tconst vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n\tconst vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n\t// First corner\n\tvec3 i  = floor(v + dot(v, C.yyy) );\n\tvec3 x0 =   v - i + dot(i, C.xxx) ;\n\n\t// Other corners\n\tvec3 g = step(x0.yzx, x0.xyz);\n\tvec3 l = 1.0 - g;\n\tvec3 i1 = min( g.xyz, l.zxy );\n\tvec3 i2 = max( g.xyz, l.zxy );\n\n\t//  x0 = x0 - 0. + 0.0 * C \n\tvec3 x1 = x0 - i1 + 1.0 * C.xxx;\n\tvec3 x2 = x0 - i2 + 2.0 * C.xxx;\n\tvec3 x3 = x0 - 1. + 3.0 * C.xxx;\n\n\t// Permutations\n\ti = mod(i, 289.0 ); \n\tvec4 p = permute( permute( permute( \n\t         i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n\t       + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \n\t       + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n\t// Gradients\n\t// ( N*N points uniformly over a square, mapped onto an octahedron.)\n\tfloat n_ = 1.0/7.0; // N=7\n\tvec3  ns = n_ * D.wyz - D.xzx;\n\n\tvec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)\n\n\tvec4 x_ = floor(j * ns.z);\n\tvec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n\tvec4 x = x_ *ns.x + ns.yyyy;\n\tvec4 y = y_ *ns.x + ns.yyyy;\n\tvec4 h = 1.0 - abs(x) - abs(y);\n\n\tvec4 b0 = vec4( x.xy, y.xy );\n\tvec4 b1 = vec4( x.zw, y.zw );\n\n\tvec4 s0 = floor(b0)*2.0 + 1.0;\n\tvec4 s1 = floor(b1)*2.0 + 1.0;\n\tvec4 sh = -step(h, vec4(0.0));\n\n\tvec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n\tvec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n\tvec3 p0 = vec3(a0.xy,h.x);\n\tvec3 p1 = vec3(a0.zw,h.y);\n\tvec3 p2 = vec3(a1.xy,h.z);\n\tvec3 p3 = vec3(a1.zw,h.w);\n\n\t//Normalise gradients\n\tvec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n\tp0 *= norm.x;\n\tp1 *= norm.y;\n\tp2 *= norm.z;\n\tp3 *= norm.w;\n\n\t// Mix final noise value\n\tvec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n\tm = m * m;\n\treturn 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), \n\t                            dot(p2,x2), dot(p3,x3) ) );\n}\n\n#define SRGB_TO_LINEAR(c) pow((c), vec3(2.2))\n#define LINEAR_TO_SRGB(c) pow((c), vec3(1.0 / 2.2))\n#define SRGB(r, g, b) SRGB_TO_LINEAR(vec3(float(r), float(g), float(b)) / 255.0)\n\n// Gradient noise from Jorge Jimenez's presentation:\n// http://www.iryoku.com/next-generation-post-processing-in-call-of-duty-advanced-warfare\nfloat gradientNoise(in vec2 uv)\n{\n    const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);\n    return fract(magic.z * fract(dot(uv, magic.xy)));\n}\n\nmat2 rotate2d(float _angle){\n    return mat2(cos(_angle),-sin(_angle),\n                sin(_angle),cos(_angle));\n}\n\nvoid main()\n{\n\n\tvec3 COLOR0 = SRGB( u_color1.x, u_color1.y, u_color1.z );\n\tvec3 COLOR1 = SRGB( u_color2.x, u_color2.y, u_color2.z );\n\tvec3 COLOR2 = SRGB( u_color3.x, u_color3.y, u_color3.z );\n\n\tvec2 coord = gl_FragCoord.yx;\n\tvec2 ogCoord = coord;\n\tcoord -= .5 * coord;\n\tcoord = rotate2d( time * .03 ) * coord;\n\tcoord += .5 * coord;\n   \n    vec2 a = 0.1 * resolution.xy; // First gradient point.\n    vec2 b = 0.9 * resolution.xy; // second gradient point.\n    // vec2 c = resolution.xy; // third gradient point.\n    \n    // Calculate interpolation factor with vector projection.\n    vec2 ba = b - a;\n    float t = dot( coord - a, ba ) / dot( ba, ba );\n    // Saturate and apply smoothstep to the factor.\n    t = smoothstep( 0.0, 1.0, clamp( t, 0.0, 1.0 ) );\n\n    float cTime = fract( time * .05 );\n\n    // ease tranisiton time\n    float thirdTime = cTime;\n    cTime = fract( cTime * 3. );\n    cTime = (( sin( cTime * 3.14 ) + 1. ) - 1.) * .333;\n    cTime = clamp( cTime, 0., 1. );\n    cTime *= cTime;\n    cTime += thirdTime;\n    cTime = clamp( cTime, 0., 1. );\n\n    float cStop1 = min( 1., max( 0., cTime - 0.0 ) * 3. );\n    float cStop2 = min( 1., max( 0., cTime - 0.33 ) * 3. );\n    float cStop3 = min( 1., max( 0., cTime - 0.66 ) * 3. );\n\n    vec3 col1 = mix( COLOR0, COLOR1, cStop1 );\n    col1 = mix( col1, COLOR2, cStop2 );\n    col1 = mix( col1, COLOR0, cStop3 );\n    vec3 col2 = mix( COLOR1, COLOR2, cStop1 );\n    col2 = mix( col2, COLOR0, cStop2 );\n    col2 = mix( col2, COLOR1, cStop3 );\n\n    // Interpolate.\n    // vec3 color = mix( col1, col2, clamp( t - snoise( vec3( vec2( 153. + coord.y * .001, 516. + coord.x * .001 ), time * .1 ) ), 0., 1. ) );\n    vec3 color = mix( col1, col2, clamp( t - snoise( vec3( vec2( seed * 153. + coord.y * .00125, seed * 516. + coord.x * .00125 ), time * .125 + seed * 1241. ) ), 0., 1. ) );\n\n    // Convert color from linear to sRGB color space (=gamma encode).\n    color = LINEAR_TO_SRGB( color );\n\n    // Add gradient noise to reduce banding.\n    color += ( 1.0 / 255.0 ) * gradientNoise( coord ) - ( 0.5 / 255.0 );\n\n    gl_FragColor = vec4( color, 1.0 );\n}";

        function U(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function G(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function Y(e, t, n) {
            return t && G(e.prototype, t), n && G(e, n), e
        }
        var $ = function() {
            function e(t) {
                U(this, e), this.element = t.element, this.gl = N({
                    width: this.element.scrollWidth,
                    height: this.element.scrollHeight + 40 + .27 * window.innerHeight,
                    antialias: !1
                }), this.element.appendChild(this.gl.canvas);
                try {
                    this.shader = H(this.gl, {
                        vertex: W,
                        fragment: V,
                        uniforms: [{
                            type: "float",
                            name: "time"
                        }, {
                            type: "float",
                            name: "seed"
                        }, {
                            type: "vec2",
                            name: "resolution"
                        }, {
                            type: "vec3",
                            name: "u_color1"
                        }, {
                            type: "vec3",
                            name: "u_color2"
                        }, {
                            type: "vec3",
                            name: "u_color3"
                        }],
                        attributes: [{
                            type: "vec2",
                            name: "position"
                        }]
                    })
                } catch (e) {
                    return void console.error(e.message)
                }
                this.shader.attributes.position.location = 0, this.shader.bind(), this.shader.uniforms.resolution = [this.gl.canvas.width, this.gl.canvas.height], this.shader.uniforms.seed = Math.random(), this.shader.uniforms.u_color1 = t.color1 || [51, 255, 198], this.shader.uniforms.u_color2 = t.color2 || [84, 208, 234], this.shader.uniforms.u_color3 = t.color3 || [250, 161, 189], window.addEventListener("resize", this.resize.bind(this)), this.resize()
            }
            return Y(e, [{
                key: "resize",
                value: function() {
                    this.gl.width = this.gl.canvas.scrollWidth, this.gl.height = this.gl.canvas.scrollHeight, this.shader.uniforms.resolution = [this.gl.width, this.gl.height]
                }
            }, {
                key: "render",
                value: function(e) {
                    this.shader.bind();
                    var t = .001 * performance.now();
                    this.shader.uniforms.time = t, z(this.gl)
                }
            }]), e
        }();

        function K(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function X(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? K(Object(n), !0).forEach((function(t) {
                    J(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : K(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function J(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function Q(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function Z(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function ee(e, t, n) {
            return t && Z(e.prototype, t), n && Z(e, n), e
        }
        var te = function() {
            function e(t) {
                Q(this, e), this.page = t, this.init()
            }
            return ee(e, [{
                key: "init",
                value: function() {
                    if (this.page.config.timeline) {
                        var e = !0,
                            t = !1,
                            n = void 0;
                        try {
                            for (var i, o = this.page.config.timeline[Symbol.iterator](); !(e = (i = o.next()).done); e = !0) {
                                var r = i.value;
                                this.addToTimeline(r)
                            }
                        } catch (e) {
                            t = !0, n = e
                        } finally {
                            try {
                                e || null == o.return || o.return()
                            } finally {
                                if (t) throw n
                            }
                        }
                    }
                }
            }, {
                key: "addToTimeline",
                value: function(e) {
                    switch (e.type) {
                        case "trigger":
                            this.createTrigger(e.element, e.params);
                            break;
                        case "pin":
                            this.createPin(e.element, e.params);
                            break;
                        case "title":
                            this.createTitle(e.element, e.params);
                            break;
                        case "set":
                            this.set(e.element, e.params)
                    }
                }
            }, {
                key: "set",
                value: function(e, t) {
                    this.page.main.gsap.set(e, t)
                }
            }, {
                key: "checkIfMediaMatchedTriggerAlreadyExists",
                value: function(e) {
                    var t = this.page.main.scrollTrigger.getAll(),
                        n = !1,
                        i = !0,
                        o = !1,
                        r = void 0;
                    try {
                        for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done); i = !0) {
                            if (e === s.value.vars.id) {
                                n = !0;
                                break
                            }
                        }
                    } catch (e) {
                        o = !0, r = e
                    } finally {
                        try {
                            i || null == a.return || a.return()
                        } finally {
                            if (o) throw r
                        }
                    }
                    return n
                }
            }, {
                key: "createTrigger",
                value: function(e, t) {
                    var n = this;
                    this.page.main.scrollTrigger.saveStyles(e), this.page.main.scrollTrigger.matchMedia({
                        "(max-width: 1023px)": function() {
                            t.isMobileOnly && (n.checkIfMediaMatchedTriggerAlreadyExists(t.id) || n.setupTrigger(e, t))
                        },
                        "(min-width: 1024px)": function() {
                            t.isDesktopOnly && (n.checkIfMediaMatchedTriggerAlreadyExists(t.id) || n.setupTrigger(e, t))
                        },
                        all: function() {
                            t.isMobileOnly || t.isDesktopOnly || n.checkIfMediaMatchedTriggerAlreadyExists(t.id) || n.setupTrigger(e, t)
                        }
                    })
                }
            }, {
                key: "createPin",
                value: function(e, t) {
                    var n = this;
                    this.page.main.scrollTrigger.matchMedia({
                        "(max-width: 1023px)": function() {
                            t.isMobileOnly && n.pin(e, t)
                        },
                        "(min-width: 1024px)": function() {
                            t.isDesktopOnly && n.pin(e, t)
                        },
                        all: function() {
                            t.isMobileOnly || t.isDesktopOnly || n.pin(e, t)
                        }
                    })
                }
            }, {
                key: "createTitle",
                value: function(e, t) {
                    var n = this;
                    this.page.main.scrollTrigger.matchMedia({
                        "(max-width: 1023px)": function() {
                            t.isMobileOnly && n.title(e, t)
                        },
                        "(min-width: 1024px)": function() {
                            t.isDesktopOnly && n.title(e, t)
                        },
                        all: function() {
                            t.isMobileOnly || t.isDesktopOnly || n.title(e, t)
                        }
                    })
                }
            }, {
                key: "pin",
                value: function(e, t) {
                    this.page.main.scrollTrigger.saveStyles(e), this.page.main.scrollTrigger.create(X({
                        pin: e,
                        trigger: t.trigger || e,
                        endTrigger: t.endTrigger || !1,
                        start: t.start,
                        end: t.end
                    }, t.pinReparent && {
                        pinReparent: !0
                    }, {
                        markers: t.markers || !1
                    }, t.debug && {
                        onToggle: function(t) {
                            return console.log(e, t.isActive)
                        }
                    }, {}, t.debug && {
                        onUpdate: function(t) {
                            console.log(e, t.progress.toFixed(3), "direction:", t.direction, "velocity", t.getVelocity())
                        }
                    }, {
                        data: this.page.slug
                    }))
                }
            }, {
                key: "title",
                value: function(e, t) {
                    if (t.pinStart && this.pin(e, {
                            trigger: t.trigger || e,
                            start: t.pinStart,
                            end: t.pinEnd,
                            debug: t.debug,
                            markers: t.markers
                        }), t.fadeIn) {
                        var n = t.fadeIn.split(" ");
                        n = n[0] + " " + (parseInt(n[1]) - 1) + "%", this.createTrigger(e + " > *", {
                            trigger: t.trigger || e,
                            markers: t.markers,
                            debug: t.debug,
                            start: t.fadeIn,
                            end: n,
                            stagger: t.stagger || .05,
                            toggleActions: "play none none reverse",
                            from: {
                                autoAlpha: 0
                            },
                            to: {
                                duration: t.fadeTime || .5,
                                autoAlpha: 1
                            }
                        })
                    }
                    if (t.fadeOut) {
                        var i = t.fadeOut.split(" ");
                        i = i[0] + " " + (parseInt(i[1]) - 1) + "%", this.createTrigger(e + " > *", {
                            trigger: t.trigger || e,
                            markers: t.markers,
                            debug: t.debug,
                            start: t.fadeOut,
                            end: i,
                            stagger: t.stagger || .05,
                            toggleActions: "play none none reverse",
                            from: {
                                autoAlpha: 1
                            },
                            to: {
                                duration: t.fadeTime || .3,
                                autoAlpha: 0
                            },
                            immediateRender: !1
                        })
                    }
                    t.yScroll && this.createTrigger(e + " .seq-title-inner > *", {
                        trigger: t.trigger || e,
                        markers: t.markers,
                        debug: t.debug,
                        stagger: t.stagger || .05,
                        start: t.fadeIn,
                        end: t.fadeOut,
                        from: {
                            y: t.yScroll
                        },
                        to: {
                            y: 0,
                            clearProps: "all"
                        }
                    }), t.fadeIn && this.page.main.gsap.set(e + " > *", {
                        autoAlpha: 0
                    })
                }
            }, {
                key: "setupTrigger",
                value: function(e, t) {
                    t.pin && this.page.main.scrollTrigger.saveStyles("string" == typeof t.pin ? t.pin : e);
                    var n = t.customToggleClass || {};
                    this.page.main.gsap.fromTo(e, X({}, X({}, t.from)), X({
                        scrollTrigger: X({
                            id: t.id,
                            data: this.page.slug,
                            markers: t.markers || !1,
                            trigger: t.trigger || e,
                            endTrigger: t.endTrigger || !1,
                            scrub: t.scrub || !1,
                            start: t.start || "top bottom",
                            end: t.end || "bottom top",
                            pin: t.pin || !1,
                            once: t.once || !1,
                            snap: t.snap || !1,
                            toggleClass: t.toggleClass || !1,
                            toggleActions: t.toggleActions || "play none none reverse",
                            onEnter: function(e) {
                                n.targets && ne(n)
                            },
                            onEnterBack: function(e) {
                                n.targets && ne(n)
                            },
                            onLeave: function(e) {
                                n.targets && ne(n)
                            },
                            onLeaveBack: function(e) {
                                n.targets && ne(n)
                            }
                        }, t.debug && {
                            onToggle: function(t) {
                                return console.log(e, t.isActive)
                            }
                        }, {}, t.debug && {
                            onUpdate: function(t) {
                                console.log(e, t.progress.toFixed(3), "direction:", t.direction, "velocity", t.getVelocity())
                            }
                        }),
                        data: this.page.slug,
                        immediateRender: t.immediateRender,
                        stagger: t.stagger || !1,
                        ease: t.ease || "power4.out"
                    }, t.to))
                }
            }]), e
        }();

        function ne(e) {
            var t = e.targets.split(","),
                n = !0,
                i = !1,
                o = void 0;
            try {
                for (var r, s = t[Symbol.iterator](); !(n = (r = s.next()).done); n = !0) {
                    var a = r.value,
                        l = document.querySelectorAll(a),
                        c = !0,
                        u = !1,
                        d = void 0;
                    try {
                        for (var h, p = l[Symbol.iterator](); !(c = (h = p.next()).done); c = !0) {
                            var f = h.value,
                                m = e.className.split(","),
                                g = !0,
                                v = !1,
                                y = void 0;
                            try {
                                for (var b, w = m[Symbol.iterator](); !(g = (b = w.next()).done); g = !0) {
                                    var S = b.value;
                                    f.classList.toggle(S.trim())
                                }
                            } catch (e) {
                                v = !0, y = e
                            } finally {
                                try {
                                    g || null == w.return || w.return()
                                } finally {
                                    if (v) throw y
                                }
                            }
                        }
                    } catch (e) {
                        u = !0, d = e
                    } finally {
                        try {
                            c || null == p.return || p.return()
                        } finally {
                            if (u) throw d
                        }
                    }
                }
            } catch (e) {
                i = !0, o = e
            } finally {
                try {
                    n || null == s.return || s.return()
                } finally {
                    if (i) throw o
                }
            }
        }

        function ie(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function oe(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function re(e, t, n) {
            return t && oe(e.prototype, t), n && oe(e, n), e
        }
        var se = function() {
            function e(t, n, i) {
                var o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                if (ie(this, e), this.params = t, this.page = n, this.gsap = i.gsap, this.scrollTrigger = i.scrollTrigger, this.selector = this.params.element, this.el = document.querySelector(this.selector), this.textToSplit = this.el.querySelector("[data-text]"), this.textToSplit) {
                    this.text = this.textToSplit.dataset.text, this.text = this.text.trim(), this.text = this.text.replace(/<br\s*\/?>/gi, "<br/>"), this.text = this.text.split("/\n/").join(" <br/> ");
                    var r = this.splitTextIntoWords(this.text);
                    this.textToSplit.innerHTML = r, this.splitContentIntoLines(this.textToSplit), o ? this.initTimelines() : this.show(40)
                }
            }
            return re(e, [{
                key: "splitTextIntoWords",
                value: function(e) {
                    return e.split(/\s/).map((function(e, t) {
                        return '<span class="word word-'.concat(t, '">').concat(e, "</span>")
                    })).join(" ")
                }
            }, {
                key: "getLines",
                value: function(e) {
                    for (var t, n, i = [], o = e.getElementsByTagName("span"), r = 0; r < o.length; r++) {
                        var s = o[r];
                        s.offsetTop !== n && (n = s.offsetTop, t = [], i.push(t)), t.push(s)
                    }
                    return i
                }
            }, {
                key: "splitContentIntoLines",
                value: function(e) {
                    var t = this.getLines(e).map((function(e) {
                        return e.map((function(e) {
                            return e.outerHTML
                        })).join(" ")
                    }));
                    e.innerHTML = t.map((function(e, t) {
                        return '<span class="line-container"><span class="line line-'.concat(t, '">').concat(e, "</span></span>")
                    })).join("")
                }
            }, {
                key: "initTimelines",
                value: function() {
                    var e = this;
                    this.st = this.scrollTrigger.create({
                        trigger: this.params.trigger || this.params.element,
                        endTrigger: this.params.endTrigger || !1,
                        start: this.params.fadeIn,
                        end: this.params.fadeOut,
                        markers: this.params.markers || !1,
                        data: this.page,
                        toggleClass: "is-visible",
                        onEnter: function() {
                            e.show(40)
                        },
                        onEnterBack: function() {
                            e.show(-40)
                        },
                        onLeave: function() {
                            e.hide(-40)
                        },
                        onLeaveBack: function() {
                            e.hide(40)
                        }
                    }), this.params.pin && this.scrollTrigger.create({
                        trigger: this.params.trigger || this.params.element,
                        endTrigger: this.params.endTrigger || !1,
                        pin: this.params.pin || !1,
                        start: this.params.pinStart,
                        end: this.params.pinEnd,
                        markers: this.params.markers || !1,
                        data: this.page
                    }), document.querySelector(this.params.element).classList.remove("is-visible")
                }
            }, {
                key: "show",
                value: function(e) {
                    document.querySelector(this.params.element).classList.add("is-visible"), this.showAnimation = this.gsap.fromTo("".concat(this.params.element, " .animated-title-hat, ").concat(this.params.element, " .animated-title .line-container"), {
                        autoAlpha: 0,
                        y: e
                    }, {
                        autoAlpha: 1,
                        y: 0,
                        stagger: .1,
                        duration: .6,
                        ease: "power4.out",
                        clearProps: "all"
                    })
                }
            }, {
                key: "hide",
                value: function(e) {
                    this.showAnimation.kill(), this.gsap.to("".concat(this.params.element, " .animated-title-hat, ").concat(this.params.element, " .animated-title .line-container"), {
                        autoAlpha: 0,
                        y: e,
                        duration: .3
                    })
                }
            }]), e
        }();

        function ae(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function le(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function ce(e, t, n) {
            return t && le(e.prototype, t), n && le(e, n), e
        }
        var ue = function() {
            function e(t) {
                var n = this,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ae(this, e), this.page = t, this.params = i, this.container = document.createElement("div"), this.container.style.opacity = "1", this.container.classList.add("splash"), this.wrapper = document.createElement("div"), this.wrapper.classList.add("splash-wrapper"), this.inner = document.createElement("div"), this.inner.classList.add("splash-inner"), this.content = document.createElement("div"), this.content.classList.add("splash-content"), this.skip = document.createElement("button"), this.skip.type = "button", this.skip.classList.add("skip"), this.skip.innerText = "SKIP", this.container.appendChild(this.inner), this.container.appendChild(this.wrapper), this.container.appendChild(this.skip), this.inner.appendChild(this.content), this.disposing = !1, this.videoIsSkipped = !1, this.loaderHasDisappeared = !1, this.hasTransition = !1 !== this.params.hasTransition, this.isTransitionning = !1, this.transitionIsOver = !1, this.params.animatedTitle && this.setupAnimatedTitle(this.params.animatedTitle), this.skip.addEventListener("click", (function() {
                    n.videoIsSkipped = !0, n.smoothHide()
                })), document.addEventListener("keyup", (function(e) {
                    "Space" === e.code && (n.videoIsSkipped = !0, n.smoothHide())
                }), {
                    once: !0
                }), this._resize = this.resize.bind(this), window.addEventListener("resize", this._resize), this.resize(), this.callback = function() {}
            }
            return ce(e, [{
                key: "init",
                value: function() {
                    document.body.classList.add("has-splash"), document.body.classList.add("header-is-hidden"), this.page.container.prepend(this.container)
                }
            }, {
                key: "addVideo",
                value: function(e, t) {
                    var n = this;
                    this.video = document.createElement("video"), this.video.setAttribute("autoplay", !0), this.video.setAttribute("muted", !0), this.video.setAttribute("playsinline", !0), this.video.pause(), this.video.muted = !0, this.video.setAttribute("disableRemotePlayback", !0), this.video.playsinline = !0, this.videoReady = !1, this.mp4Source = document.createElement("source"), this.mp4Source.setAttribute("src",stylesheet_directory_uri + e), this.video.appendChild(this.mp4Source), this.content.append(this.video), this.hasTransition && this.video.addEventListener("timeupdate", (function() {
                        n.handleProgress()
                    })), this.video.addEventListener("canplaythrough", (function(e) {
                        n.videoDuration = n.video.duration, n.videoReady = !0, n.play()
                    })), this.video.addEventListener("ended", (function(e) {
                        n.videoIsOver = !0, n.hasTransition ? n.hide() : n.smoothHide()
                    }))
                }
            }, {
                key: "play",
                value: function() {
                    var e = this;
                    if (document.body.classList.contains("page-transition-in-progress")) setTimeout((function() {
                        e.play()
                    }), 500);
                    else if (this.videoReady && this.loaderHasDisappeared) {
                        var t = this.video.play();
                        void 0 !== t && t.then((function() {})).catch((function(e) {
                            console.log(e)
                        })), this.params.animatedTitle && (this.animatedTitle = new se(this.params.animatedTitle, this.page.slug, this.page.main, !1))
                    }
                }
            }, {
                key: "playFallback",
                value: function() {
                    var e = this;
                    !document.body.classList.contains("page-transition-in-progress") && this.loaderHasDisappeared ? (this.videoIsOver = !0, this.animate(.7)) : setTimeout((function() {
                        e.playFallback()
                    }), 500)
                }
            }, {
                key: "handleProgress",
                value: function() {
                    this.video.currentTime / (this.videoDuration - .7) >= 1 && !this.isTransitionning && (this.isTransitionning = !0, this.hasTransition && this.animate(.7))
                }
            }, {
                key: "animate",
                value: function(e) {
                    var t = this,
                        n = "",
                        i = "calc(100% - 0px)",
                        o = "80px";
                    window.innerWidth < 1024 ? (n = "calc(100% - 26px)", o = "40px") : window.innerWidth >= 1024 && window.innerWidth < 1680 ? n = "calc(100% - 80px)" : (n = "1600px", i = "".concat(window.innerWidth, "px")), this.shrinkAnimation = this.page.main.gsap.fromTo(".splash-content", {
                        width: i,
                        borderRadius: "0px",
                        y: "0px"
                    }, {
                        data: this.slug,
                        duration: e,
                        width: n,
                        borderRadius: o,
                        y: "80px",
                        ease: "power3.inOut",
                        onComplete: function() {
                            t.transitionIsOver = !0, t.hide()
                        }
                    }), setTimeout((function() {
                        document.body.classList.remove("header-is-hidden")
                    }), 200)
                }
            }, {
                key: "smoothHide",
                value: function() {
                    var e = this;
                    document.body.classList.remove("header-is-hidden"), this.shrinkAnimation && this.shrinkAnimation.kill(), this.params.animatedTitle && (this.animatedTitle.st && this.animatedTitle.st.kill(), this.animatedTitle.showAnimation && this.animatedTitle.showAnimation.kill()), this.page.main.gsap.to(this.container, {
                        autoAlpha: 0,
                        duration: .3,
                        onComplete: function() {
                            window.removeEventListener("resize", e._resize), e.container.parentNode.removeChild(e.container), document.body.classList.remove("has-splash"), e.callback()
                        }
                    })
                }
            }, {
                key: "hide",
                value: function() {
                    document.body.classList.remove("header-is-hidden"), this.videoIsOver && this.transitionIsOver && (window.removeEventListener("resize", this._resize), this.container.parentNode.removeChild(this.container), document.body.classList.remove("has-splash"), this.callback())
                }
            }, {
                key: "setupAnimatedTitle",
                value: function(e) {
                    var t = document.createElement("div");
                    t.id = e.id, t.classList.add("sequence-title", "interactive", "center", "animated-title-container", e.customClass);
                    var n = '\n    <div class="seq-title-inner">\n      <p class="'.concat(e.eyebrowSize, ' white animated-title-hat">').concat(e.hat, '</p>\n      <h1 class="animated-title" data-text="').concat(e.title, '">').concat(e.title, "</h1>\n    </div>");
                    t.innerHTML = n, this.wrapper.appendChild(t)
                }
            }, {
                key: "setupSkipButtonPosition",
                value: function() {
                    this.skip.style.top = "".concat(window.innerHeight, "px")
                }
            }, {
                key: "resize",
                value: function() {
                    this.setupSkipButtonPosition()
                }
            }]), e
        }();

        function de(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function he(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function pe(e, t, n) {
            return t && he(e.prototype, t), n && he(e, n), e
        }
        var fe = function() {
            function e(t, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (de(this, e), this.page = t, this.pin = n, this.appendAfter = i, this.screen = document.createElement("div"), this.screen.classList.add("screen"), this.container = document.createElement("div"), this.container.classList.add("container"), this.screen.appendChild(this.container), this.content = document.createElement("div"), this.content.classList.add("content"), this.container.appendChild(this.content), this.pin && this.initScrollTrigger(), this.appendAfter) {
                    var o = document.querySelector(this.appendAfter);
                    o.parentNode.insertBefore(this.screen, o.nextSibling)
                } else this.page.container.appendChild(this.screen);
                this.page.screens.push(this)
            }
            return pe(e, [{
                key: "initScrollTrigger",
                value: function() {
                    var e = parseInt(this.pin, 10),
                        t = document.getElementById("control-height-div");
                    this.screen.style.height = t.clientHeight / 100 * e + "px", this.page.main.scrollTrigger.saveStyles(this.container), this.trigger = this.page.main.scrollTrigger.create({
                        data: this.page.slug,
                        trigger: this.screen,
                        pin: this.container,
                        anticipatePin: 1,
                        start: "top top",
                        end: "bottom bottom"
                    })
                }
            }]), e
        }();

        function me(e) {
            return (me = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function ge(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function ve(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function ye(e, t, n) {
            return t && ve(e.prototype, t), n && ve(e, n), e
        }

        function be(e, t) {
            return !t || "object" !== me(t) && "function" != typeof t ? we(e) : t
        }

        function we(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Se(e) {
            return (Se = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function ke(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && xe(e, t)
        }

        function xe(e, t) {
            return (xe = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var Te = function(e) {
                function t(e, n) {
                    var i, o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    ge(this, t), (i = be(this, Se(t).call(this, n, e.pin, o))).screen.classList.add("full-video"), e.id && (i.screen.id = e.id), i.element = document.querySelector(e.element), i.element.insertBefore(i.screen, i.element.childNodes[0]), i.titles = i.element.querySelectorAll(".video-title"), i.video = i.element.querySelector("video"), i.video.muted = !0, i.video.playsInline = !0, i.content.appendChild(i.video), i.element.classList.contains("skip-control") || (i.control = document.createElement("div"), i.control.classList.add("control"), i.control.style.opacity = 1, i.content.appendChild(i.control)), i.isPlaying = !1;
                    var r = function() {
                        i.titles.forEach((function(e) {
                            i.page.main.gsap.to(e, {
                                autoAlpha: 1,
                                data: i.page.slug
                            })
                        })), i.pause()
                    };
                    return i.control && i.control.addEventListener("click", (function() {
                        i.isPlaying ? r() : (i.titles.forEach((function(e) {
                            i.page.main.gsap.to(e, {
                                autoAlpha: 0,
                                data: i.page.slug
                            })
                        })), i.play())
                    })), i.video.addEventListener("ended", (function() {
                        r()
                    })), i
                }
                return ke(t, e), ye(t, [{
                    key: "play",
                    value: function() {
                        var e = this.video.play();
                        void 0 !== e && e.then((function() {})).catch((function(e) {
                            console.log(e)
                        })), this.control && (this.hideControl = this.page.main.gsap.to(this.control.style, {
                            data: this.page.slug,
                            opacity: 0,
                            duration: .6
                        })), this.isPlaying = !0
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.video.pause(), this.control && (this.showControl = this.page.main.gsap.to(this.control.style, {
                            data: this.page.slug,
                            opacity: 1,
                            duration: .6
                        })), this.isPlaying = !1
                    }
                }]), t
            }(fe),
            Oe = n(1);

        function Le(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function Ee(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function _e(e, t, n) {
            return t && Ee(e.prototype, t), n && Ee(e, n), e
        }
        var Ce = function() {
                function e(t, n) {
                    var i = this;
                    if (Le(this, e), this.el = t.element, this.page = n, this.el) {
                        this.videoWrappers = this.el.querySelectorAll(".js-video-gallery-video"), this.videos = this.el.querySelectorAll("video:not(.video-controls__cover-video)"), this.activeSrc = this.videoWrappers[0].querySelector("video").src, this.currentIndex = 0, this._resize = this.resize.bind(this), this.lastPlayedIndex = 0, this.progressIndicators = this.el.querySelectorAll(".js-video-gallery-progress"), this.contentWrapper = this.el.querySelector(".video-gallery__slider-content"), this.videoContents = this.el.querySelectorAll(".js-video-gallery-content"), this.navContainer = this.el.querySelector(".video-gallery__slider-nav"), this.navItems = this.el.querySelectorAll(".video-gallery__slider-nav-item"), this.previousButton = this.el.querySelector(".js-video-gallery-previous"), this.nextButton = this.el.querySelector(".js-video-gallery-next"), this.dotsContainer = this.el.querySelector(".video-gallery__slider-dots"), this.navDots = this.el.querySelectorAll(".video-gallery__slider-dots-item"), this.previousButton.addEventListener("click", this.handlePreviousClick.bind(this), !1), this.nextButton.addEventListener("click", this.handleNextClick.bind(this), !1), this.Controls = [], this.navItems.length < 2 && (this.navContainer.classList.add("is-hidden"), this.dotsContainer.classList.add("is-hidden"));
                        for (var o = 0; o < this.videoWrappers.length; o++) {
                            var r = new Oe.a(this.videoWrappers[o]);
                            this.Controls.push(r), this.navItems[o].addEventListener("click", this.indexUpdate.bind(this, o))
                        }
                        window.Emitter.on("video-progress", this.onVideoProgress.bind(this)), window.Emitter.on("video-ended", this.onVideoEnded.bind(this)), this.displayIndex(0), this.updateDots(0), document.fonts ? document.fonts.ready.then(this._resize) : setTimeout((function() {
                            i.resize()
                        }), 300), window.addEventListener("resize", this._resize)
                    }
                }
                return _e(e, [{
                    key: "onVideoPlay",
                    value: function(e) {
                        if (this.isCurrentGallery)
                            for (var t = 0; t < this.videos.length; t++) this.activeSrc !== e && (this.activeSrc = e)
                    }
                }, {
                    key: "onVideoProgress",
                    value: function(e, t) {
                        for (var n = 0; n < this.videos.length; n++) this.videos[n].src === e && this.onTimeUpdate(n, t)
                    }
                }, {
                    key: "onVideoEnded",
                    value: function(e) {
                        for (var t = 0; t < this.videos.length; t++)
                            if (this.videos[t].src === e) {
                                var n = t + 1;
                                this.videos[n] || (n = 0), this.indexUpdate(n)
                            }
                    }
                }, {
                    key: "handlePreviousClick",
                    value: function() {
                        this.currentIndex--, this.currentIndex < 0 && (this.currentIndex = this.videos.length - 1), this.indexUpdate(this.currentIndex)
                    }
                }, {
                    key: "handleNextClick",
                    value: function() {
                        this.currentIndex++, this.currentIndex >= this.videos.length && (this.currentIndex = 0), this.indexUpdate(this.currentIndex)
                    }
                }, {
                    key: "updateDots",
                    value: function(e) {
                        for (var t = 0; t < this.navDots.length; t++) this.navDots[t].classList.remove("is-active"), this.navItems[t].classList.remove("is-active");
                        this.navDots[e].classList.add("is-active"), this.navItems[e].classList.add("is-active")
                    }
                }, {
                    key: "indexUpdate",
                    value: function(e) {
                        this.cancelPlayingVideos(), this.activeSrc = this.Controls[e].video.src, this.displayIndex(e), this.updateDots(e), this.currentIndex = e, this.Controls[e].backToStart()
                    }
                }, {
                    key: "displayIndex",
                    value: function(e) {
                        this.videoWrappers[e].classList.add("is-active"), this.videoContents[e].classList.add("is-active")
                    }
                }, {
                    key: "cancelPlayingVideos",
                    value: function() {
                        for (var e = 0; e < this.videoWrappers.length; e++) this.videos[e].pause(), this.videoWrappers[e].classList.remove("is-active"), this.videoContents[e].classList.remove("is-active"), this.resetTimer(e)
                    }
                }, {
                    key: "play",
                    value: function(e) {
                        this.Controls[e].play(), this.lastPlayedIndex = e
                    }
                }, {
                    key: "onTimeUpdate",
                    value: function(e, t) {
                        var n = "polygon(0 0, ".concat(t, "% 0, ").concat(t, "% 100%, 0% 100%)");
                        this.progressIndicators[e].style.webkitClipPath = n, this.progressIndicators[e].style.clipPath = n
                    }
                }, {
                    key: "resetTimer",
                    value: function(e) {
                        var t = this;
                        this.progressIndicators[e].classList.add("out"), setTimeout((function() {
                            t.progressIndicators[e].classList.remove("out");
                            var n = "polygon(0 0, 0% 0, 0% 100%, 0% 100%)";
                            t.progressIndicators[e].style.webkitClipPath = n, t.progressIndicators[e].style.clipPath = n, t.progressIndicators[e].classList.add("reset"), t.Controls[e].backToStart(), setTimeout((function() {
                                t.progressIndicators[e].classList.remove("reset")
                            }), 10)
                        }), 300)
                    }
                }, {
                    key: "resize",
                    value: function() {
                        window.innerWidth !== this.screenWidth && (this.screenWidth = window.innerWidth, this.setSize())
                    }
                }, {
                    key: "setSize",
                    value: function() {
                        for (var e = 0; e < this.videoContents.length; e++) {
                            var t = this.videoContents[e],
                                n = t.classList.contains("is-active");
                            t.removeAttribute("style"), t.classList.add("is-active"), n || t.classList.remove("is-active")
                        }
                    }
                }]), e
            }(),
            Pe = n(3);

        function je(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function qe(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function Ae(e, t, n) {
            return t && qe(e.prototype, t), n && qe(e, n), e
        }
        var Me = function() {
            function e(t, n) {
                je(this, e), this.el = t.element, this.container = this.el.querySelector(".vision-carousel__slider"), this.nav = this.el.querySelector(".vision-carousel__nav-dots"), this.items = this.el.querySelectorAll(".vision-carousel__slider-item"), this.prevButton = this.el.querySelector(".vision-carousel__nav-item--previous"), this.nextButton = this.el.querySelector(".vision-carousel__nav-item--next"), this.maxHeight = 0, this.setHeight(), this.init(), window.addEventListener("resize", this._onResize)
            }
            return Ae(e, [{
                key: "setHeight",
                value: function() {
                    this.maxHeight = 0, this.container.removeAttribute("style");
                    for (var e = 0; e < this.items.length; e++) this.items[e].offsetHeight > this.maxHeight && (this.maxHeight = this.items[e].offsetHeight);
                    this.container.style.height = "".concat(this.maxHeight, "px")
                }
            }, {
                key: "init",
                value: function() {
                    this.container = this.Slider = Object(Pe.a)({
                        items: 1,
                        nav: !0,
                        gutter: 0,
                        speed: 500,
                        slideBy: "page",
                        loop: !0,
                        autoplay: !0,
                        autoplayTimeout: 5e3,
                        prevButton: this.prevButton,
                        nextButton: this.nextButton,
                        container: this.container,
                        navContainer: this.nav,
                        mouseDrag: !0,
                        mode: "gallery"
                    })
                }
            }, {
                key: "onResize",
                value: function() {
                    window.innerWidth !== this.screenWidth && (this.screenWidth = window.innerWidth, this.setHeight())
                }
            }]), e
        }();

        function Re(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function Ie(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function Fe(e, t, n) {
            return t && Ie(e.prototype, t), n && Ie(e, n), e
        }
        var Be = function() {
            function e(t, n) {
                var i = this;
                Re(this, e), this.el = t.element, this.page = n, this.el && (this.container = this.el.querySelector(".js-team-slider-container"), this.items = this.container.querySelectorAll(".team-slider__item"), this.index = this.el.querySelector(".js-team-slider-index"), this.prevButton = this.el.querySelector(".js-team-slider-prev"), this.nextButton = this.el.querySelector(".js-team-slider-next"), this.enableNav = !0, this.Slider = Object(Pe.a)({
                    arrowKeys: !1,
                    mouseDrag: !1,
                    center: !0,
                    container: this.container,
                    controls: !1,
                    items: 1,
                    gutter: 0,
                    lazyload: !0,
                    loop: !0,
                    nav: !1,
                    responsive: {
                        320: {
                            fixedWidth: 316
                        },
                        1024: {
                            fixedWidth: 554
                        },
                        1480: {
                            fixedWidth: 700
                        }
                    },
                    onInit: function() {
                        i.clonedElements = i.container.querySelectorAll(".team-slider__item"), i.page.main.Modal.setTriggers()
                    },
                    slideBy: 1,
                    speed: 500
                }), this.onProgress(this.Slider.getInfo().displayIndex), this.prevButton.addEventListener("click", (function() {
                    i.enableNav && i.Slider.goTo("prev")
                })), this.nextButton.addEventListener("click", (function() {
                    i.enableNav && i.Slider.goTo("next")
                })), this.Slider.events.on("indexChanged", (function(e) {
                    i.onProgress(e.displayIndex)
                })), this.Slider.events.on("transitionStart", (function() {
                    i.enableNav = !1
                })), this.Slider.events.on("transitionEnd", (function(e) {
                    "border-top-color" === e.event.propertyName && e.event.target.classList.contains("is-current-slide") && (i.enableNav = !0)
                })))
            }
            return Fe(e, [{
                key: "onProgress",
                value: function(e) {
                    this.index.innerHTML = e, this.clonedElements.forEach((function(e) {
                        e.classList.remove("is-current-slide")
                    }));
                    var t = this.items[e - 1].dataset.position;
                    this.container.querySelectorAll('.team-slider__item[data-position="'.concat(t, '"]')).forEach((function(e) {
                        e.classList.add("is-current-slide")
                    }))
                }
            }]), e
        }();

        function De(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var Ne = function e(t, n) {
            var i = this;
            De(this, e), this.el = t.element, this.page = n, this.el && (this.containers = this.el.querySelectorAll(".js-leaders-slider-container"), this.sliders = [], this.containers.forEach((function(e) {
                var t = Object(Pe.a)({
                    arrowKeys: !1,
                    center: !0,
                    container: e,
                    controls: !1,
                    fixedWidth: 265,
                    items: 1,
                    gutter: 0,
                    lazyload: !0,
                    loop: !0,
                    nav: !1,
                    responsive: {
                        900: {
                            disable: !0
                        }
                    },
                    slideBy: 1,
                    speed: 500,
                    touch: !0
                });
                i.sliders.push(t)
            })))
        };

        function ze(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function He(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function We(e, t, n) {
            return t && He(e.prototype, t), n && He(e, n), e
        }
        var Ve = function() {
            function e(t, n) {
                ze(this, e), this.el = t.element, this.shareLink = this.el.querySelector(".js-page-nav-copy-url"), this.shareLink && (this.shareLinkInput = this.el.querySelector(".js-page-nav-copy-input"), this.shareLinkLabel = this.el.querySelector(".js-page-nav-copy-label"), this.linkLabelCopy = this.shareLinkLabel.innerHTML, this.copyTimeout = null, this.shareLink.addEventListener("click", this.copyPageUrl.bind(this)))
            }
            return We(e, [{
                key: "copyPageUrl",
                value: function() {
                    var e = this;
                    window.isMobile && navigator.canShare ? navigator.share({
                        title: document.title,
                        url: window.location.href
                    }) : (this.shareLinkInput.value = window.location.href, this.shareLinkInput.select(), document.execCommand("copy"), this.shareLinkLabel.innerHTML = "Link Copied", this.shareLink.classList.add("copied"), this.shareLinkInput.value = "", this.copyTimeout && clearTimeout(this.copyTimeout), this.copyTimeout = setTimeout((function() {
                        e.shareLinkLabel.innerHTML = e.linkLabelCopy, e.shareLink.classList.remove("copied")
                    }), 1e3))
                }
            }, {
                key: "getAnchor",
                value: function(e) {
                    return e.split("#").length > 1 ? e.split("#")[1] : null
                }
            }]), e
        }();

        function Ue(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function Ge(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function Ye(e, t, n) {
            return t && Ge(e.prototype, t), n && Ge(e, n), e
        }
        var $e = function() {
            function e(t) {
                Ue(this, e), this.el = t, this.text = this.el.dataset.text, this.text = this.text.trim(), this.text = this.text.replace(/<br\s*\/?>/gi, "<br/>"), this.text = this.text.split("/\n/").join(" <br/> ");
                var n = this.splitTextIntoWords(this.text);
                this.el.innerHTML = n, this.splitContentIntoLines(this.el)
            }
            return Ye(e, [{
                key: "splitTextIntoWords",
                value: function(e) {
                    return e.split(/\s/).map((function(e, t) {
                        return '<span class="word word-'.concat(t, '">').concat(e, "</span>")
                    })).join(" ")
                }
            }, {
                key: "getLines",
                value: function(e) {
                    for (var t, n, i = [], o = e.getElementsByTagName("span"), r = 0; r < o.length; r++) {
                        var s = o[r];
                        s.offsetTop !== n && (n = s.offsetTop, t = [], i.push(t)), t.push(s)
                    }
                    return i
                }
            }, {
                key: "splitContentIntoLines",
                value: function(e) {
                    var t = this.getLines(e).map((function(e) {
                        return e.map((function(e) {
                            return e.outerHTML
                        })).join(" ")
                    }));
                    e.innerHTML = t.map((function(e, t) {
                        return '<span class="line-container"><span class="line line-'.concat(t, '">').concat(e, "</span></span>")
                    })).join("")
                }
            }]), e
        }();

        function Ke(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function Xe(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function Je(e, t, n) {
            return t && Xe(e.prototype, t), n && Xe(e, n), e
        }
        var Qe = function() {
            function e(t) {
                var n = this;
                Ke(this, e), this.root = t, this._dots = this.root.querySelectorAll(".image-slider__dots li"), this._largeSlider = this.root.querySelector(".image-slider__large .image-slider__slides"), this._smallSlider = this.root.querySelector(".image-slider__small .image-slider__slides"), this._items = this._largeSlider.querySelectorAll("img"), this._prevButton = this.root.querySelector(".prev-button"), this._nextButton = this.root.querySelector(".next-button"), this.disabled = this._items.length <= 2, this.enableNav = !0, window.innerWidth <= 900 && (this.disabled = !1), this.largeSlider = Object(Pe.a)({
                    disabled: this.disabled,
                    nav: !1,
                    loop: !this.disabled,
                    items: 1,
                    speed: 800,
                    autoplay: !this.disabled,
                    controls: !1,
                    lazyload: !0,
                    container: this._largeSlider,
                    autoplayButtonOutput: !1
                }), this.smallSlider = Object(Pe.a)({
                    disabled: this.disabled,
                    nav: !1,
                    loop: !this.disabled,
                    items: 1,
                    speed: 800,
                    autoplay: !this.disabled,
                    controls: !1,
                    lazyload: !0,
                    container: this._smallSlider,
                    startIndex: 1,
                    autoplayButtonOutput: !1
                }), this.disabled ? this.root.classList.add("is-disabled") : (this.onProgress(this.smallSlider.getInfo().displayIndex), this._prevButton.addEventListener("click", (function() {
                    n.enableNav && (n.smallSlider.pause(), n.largeSlider.pause(), n.smallSlider.goTo("prev"), n.largeSlider.goTo("prev"))
                })), this._nextButton.addEventListener("click", (function() {
                    n.enableNav && (n.smallSlider.pause(), n.largeSlider.pause(), n.smallSlider.goTo("next"), n.largeSlider.goTo("next"))
                })), this.smallSlider.events.on("indexChanged", (function(e) {
                    n.onProgress(e.displayIndex)
                })), this.smallSlider.events.on("transitionStart", (function() {
                    n.enableNav = !1
                })), this.smallSlider.events.on("transitionEnd", (function() {
                    n.enableNav = !0, n.smallSlider.play(), n.largeSlider.play()
                })))
            }
            return Je(e, [{
                key: "onProgress",
                value: function(e) {
                    this._dots.forEach((function(e) {
                        e.classList.remove("tns-nav-active")
                    })), this._dots[e - 1] && this._dots[e - 1].classList.add("tns-nav-active")
                }
            }]), e
        }();

        function Ze(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var et = function e(t) {
                Ze(this, e), this.root = t, this.dots = this.root.querySelector(".content-slider__dots"), this.list = this.root.querySelector(".content-slider__slides"), this.tns = Object(Pe.a)({
                    mode: "gallery",
                    items: 1,
                    slideBy: "page",
                    lazyload: !0,
                    autoplay: !0,
                    controls: !1,
                    container: this.list,
                    navContainer: this.dots
                })
            },
            tt = et;

        function nt(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function it(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function ot(e, t, n) {
            return t && it(e.prototype, t), n && it(e, n), e
        }
        var rt = function() {
            function e(t) {
                nt(this, e), this.el = t, this.src = this.el.dataset.src, this.id = "".concat(this.src, "_").concat(Date.now()), this.el.querySelector(".youtube-player--container").id = this.id;
                this.posterImg = "https://i.ytimg.com/vi_webp/".concat(this.src, "/").concat("maxresdefault", ".webp"), this.poster = this.el.querySelector(".poster"), this.player, this._play = this.play.bind(this), this._pause = this.pause.bind(this), this._handleFullscreenChange = this.handleFullscreenChange.bind(this), this.bind(), n(65).default.load()
            }
            return ot(e, [{
                key: "bind",
                value: function() {
                    var e = this;
                    window.Emitter.once("youtube-api-loaded", this.buildPlayer.bind(this)), ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "msfullscreenchange"].forEach((function(t) {
                        return document.addEventListener(t, e._handleFullscreenChange, !1)
                    }))
                }
            }, {
                key: "buildPlayer",
                value: function() {
                    this.player = new window.YT.Player(this.id, {
                        height: "720",
                        playerVars: {
                            playsinline: 1,
                            rel: 0
                        },
                        videoId: this.src,
                        width: "1280"
                    }), this.buildCover(), this.player.addEventListener("onStateChange", function(e) {
                        switch (e.data) {
                            case 1:
                                window.Emitter.emit("play-video", this.id)
                        }
                    }.bind(this), !1), window.Emitter.on("play-video", this._pause);
                    this.observer = new IntersectionObserver(this.onScreen.bind(this), {
                        root: null,
                        rootMargin: "0px",
                        threshold: [.5]
                    }), this.observer.observe(this.el)
                }
            }, {
                key: "buildCover",
                value: function() {
                    this.poster.style.backgroundImage = "url('".concat(this.posterImg, "')"), this.poster.addEventListener("click", this._play, {
                        once: !0
                    })
                }
            }, {
                key: "play",
                value: function() {
                    this.el.classList.remove("not-started"), this.player.playVideo()
                }
            }, {
                key: "pause",
                value: function(e) {
                    e !== this.id && this.player.pauseVideo()
                }
            }, {
                key: "onScreen",
                value: function(e) {
                    var t = this;
                    e.forEach((function(e) {
                        !e.isIntersecting && t.isNotFullScreen() && t.player.pauseVideo && t.player.pauseVideo()
                    }))
                }
            }, {
                key: "handleFullscreenChange",
                value: function(e) {
                    this.isNotFullScreen() && e.target.id === this.id && window.scrollTo(0, this.el.offsetTop)
                }
            }, {
                key: "isNotFullScreen",
                value: function() {
                    return !document.webkitCurrentFullScreenElement && !document.mozFullScreenElement
                }
            }]), e
        }();

        function st(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var at = function e(t) {
            st(this, e), this.el = t, this.link = this.el.querySelector(".widget-quote__share"), this.link.href = "".concat(this.link.href, "&url=").concat(window.location.href)
        };

        function lt(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function ct(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function ut(e, t, n) {
            return t && ct(e.prototype, t), n && ct(e, n), e
        }
        var dt = function() {
            function e(t, n) {
                lt(this, e), this.main = t, this.slug = n, this.className = "." + this.slug, this.config = {}, this.currentLayout = [], this.page = this.main.pageWrap.querySelector('[data-template="'.concat(this.slug, '"]')), this.setConfigNext(), this.pageLoaded = function() {}
            }
            return ut(e, [{
                key: "init",
                value: function() {
                    var e = this,
                        t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    if (this.page = document.querySelector(this.className + ".page-content"), this.page) {
                        document.body.classList.add("no-scroll"), this.loading = document.querySelector(this.className + ".loading"), this.loadingBar = document.querySelector(this.className + ".loading .loading-bar"), this.container = document.querySelector(this.className + ".main"), this.footer = this.page.querySelector(".footer"), j.a.configure({
                            parent: this.className + ".loading .loading-bar"
                        }), j.a.start(), this.setConfigNext(), this.config.next.url && (this.config.next.loaded = !1, this.nextPageTab = this.footer.querySelector(".next-page-tab"), this.nextPageTabTitle = this.footer.querySelector(".next-page-title"), this.nextPageTabLoader = this.footer.querySelector(".next-page-loader"), this.nextPageTabTitle.innerText = this.config.next.title), this.footer && (this.gradientBg = new $({
                            element: this.footer
                        })), this.config.splash && Object.entries(this.config.splash).length > 0 && (this.splash = new ue(this, this.config.splash.params), this.splash.callback = this.splashCallback, this.config.splash.video && (window.innerWidth >= 1024 && this.config.splash.video.mobile ? this.splash.addVideo(this.config.splash.video.desktop, this.config.splash.fallback) : this.splash.addVideo(this.config.splash.video.mobile, this.config.splash.fallback)), !1 === this.config.splash.skip && (this.splash.skip.style.display = "none")), this.activateReady = !1, this.activateCalled = !1, this.transitionComplete = t, this.isLoaded = !1, this.sequenceLoaders = [], this.imageSequences = [];
                        var n = this.config.mobileLayout;
                        n || (n = []), this.currentLayout = window.innerWidth >= 1024 ? this.config.layout : n, this.layout = [], this.populateCommonLayout(), this.layoutCount = this.currentLayout.reduce((function(e, t) {
                            var n = t.type;
                            return e[n] = (e[n] || 0) + 1, e
                        }), {}), this.screens = [], this.buildLayout(this.currentLayout, (function() {
                            e.activateReady = !0, (t || e.activateCalled) && e.activate()
                        })), this.scrollToItems = this.page.querySelectorAll(".js-page-nav-scrollto");
                        for (var i = function(t) {
                                var n = e.scrollToItems[t].href,
                                    i = e.getAnchor(n);
                                i && e.scrollToItems[t].addEventListener("click", (function(t) {
                                    return e.scrollToEl(t, i)
                                }))
                            }, o = 0; o < this.scrollToItems.length; o++) i(o)
                    }
                }
            }, {
                key: "getAnchor",
                value: function(e) {
                    return e.split("#").length > 1 ? e.split("#")[1] : null
                }
            }, {
                key: "scrollToEl",
                value: function(e, t) {
                    e.preventDefault();
                    var n = document.querySelector("#".concat(t));
                    if (n) {
                        var i = Object(C.a)(n);
                        window.scrollTo({
                            top: i,
                            behavior: "smooth"
                        })
                    }
                }
            }, {
                key: "buildLayout",
                value: function(e, t) {
                    var n = this,
                        i = 0;
                    e.forEach((function(e) {
                        if ("sequence" === e.type) {
                            var o = new y(e, n);
                            o.load((function() {
                                var r = new D(e, o);
                                n.imageSequences.push(r), ++i >= n.layoutCount.sequence && t()
                            }))
                        } else "visionCarousel" === e.type ? new Me(e, n) : "fullVideo" === e.type ? new Te(e, n) : "videoGallery" === e.type ? new Ce(e, n) : "inlineVideo" === e.type ? new Oe.a(e.element) : "teamSlider" === e.type ? new Be(e, n) : "leadersSliders" === e.type ? new Ne(e, n) : "pageNav" === e.type ? new Ve(e, n) : "titleEffect" === e.type ? new $e(e.element) : "contentSlider" === e.type ? new tt(e.element) : "imageSlider" === e.type ? new Qe(e.element) : "youtubePlayer" === e.type ? new rt(e.element) : "twitterShareLink" === e.type && new at(e.element)
                    })), this.layoutCount.sequence || t()
                }
            }, {
                key: "populateCommonLayout",
                value: function() {
                    for (var e = [{
                            klass: "js-title-effect",
                            type: "titleEffect"
                        }, {
                            klass: "js-video-gallery",
                            type: "videoGallery"
                        }, {
                            klass: "js-page-nav",
                            type: "pageNav"
                        }, {
                            klass: "js-team-slider",
                            type: "teamSlider"
                        }, {
                            klass: "js-leaders-sliders",
                            type: "leadersSliders"
                        }, {
                            klass: "js-content-slider",
                            type: "contentSlider"
                        }, {
                            klass: "js-image-slider",
                            type: "imageSlider"
                        }, {
                            klass: "js-inline-video",
                            type: "inlineVideo"
                        }, {
                            klass: "js-vision-carousel",
                            type: "visionCarousel"
                        }, {
                            klass: "js-youtube-player",
                            type: "youtubePlayer"
                        }, {
                            klass: "js-twitter-share-link",
                            type: "twitterShareLink"
                        }], t = 0; t < e.length; t++)
                        for (var n = this.page.querySelectorAll(".".concat(e[t].klass)), i = 0; i < n.length; i++) {
                            var o = {
                                type: e[t].type,
                                element: n[i],
                                id: "".concat(e[t].type, "-").concat(t, "-").concat(i)
                            };
                            this.currentLayout.push(o)
                        }
                }
            }, {
                key: "activate",
                value: function() {
                    this.activateReady ? (document.body.classList.add("no-scroll"), this.timeline = new te(this), this.main.menu.className = "", this.main.menu.classList.add("menu-container"), this.splash && this.splash.init(), this.initExtraScrollTriggerEffects(), this.loaded()) : this.activateCalled = !0
                }
            }, {
                key: "loaded",
                value: function() {
                    var e = this;
                    this.isLoaded = !0, this.transitionComplete && this.afterTransition(), this.imageSequences.forEach((function(e) {
                        e.update(!0)
                    })), setTimeout((function() {
                        j.a.done()
                    }), 1500), this.main.gsap.to(this.loading, {
                        autoAlpha: 0,
                        onComplete: function() {
                            document.body.classList.remove("no-scroll", "has-loading"), e.scrollToAnchor(), e.InView = new _, e.splash ? (e.splash.loaderHasDisappeared = !0, e.splash.play()) : document.body.classList.remove("header-is-hidden")
                        }
                    }, 2), this.main.attach(this), this.render()
                }
            }, {
                key: "afterTransition",
                value: function() {
                    this.isLoaded && (this.pageLoaded(), this.transitionComplete = !0)
                }
            }, {
                key: "scrollToAnchor",
                value: function() {
                    var e = this.main.getAnchor(window.location.href),
                        t = this.page.querySelector(e);
                    t && window.scrollTo({
                        top: Object(C.a)(t),
                        behavior: "smooth"
                    })
                }
            }, {
                key: "scroll",
                value: function(e) {
                    var t = this.container.offsetTop + this.container.offsetParent.offsetTop,
                        n = window.scrollY + 1 - t,
                        i = this.container.clientHeight,
                        o = Math.min(1, Math.max(0, n / i));
                    o > 0 && o < 1 && this.config.next && o > this.config.next.loadAt && !this.config.next.loaded && (this.main.pageLoader.load(this.config.next.url, this, this.config.next.unload), this.config.next.loaded = !0)
                }
            }, {
                key: "render",
                value: function() {
                    this.container.offsetParent && (this.scroll(this.main.verticalView), this.gradientBg && this.gradientBg.render(), this.imageSequences.forEach((function(e) {
                        e.update()
                    })))
                }
            }, {
                key: "clearImageSequences",
                value: function() {
                    this.imageSequences.forEach((function(e) {
                        e.clear()
                    }))
                }
            }, {
                key: "resetImageSequences",
                value: function() {
                    this.imageSequences.forEach((function(e) {
                        e.update(!0)
                    }))
                }
            }, {
                key: "initExtraScrollTriggerEffects",
                value: function() {}
            }, {
                key: "destroy",
                value: function() {}
            }, {
                key: "setConfigNext",
                value: function() {
                    if (this.page) {
                        var e = .1;
                        this.page.offsetHeight > 2 * window.innerHeight && (e = .7);
                        var t = {
                            url: this.page.getAttribute("data-footer-url"),
                            title: this.page.getAttribute("data-footer-title"),
                            loadAt: e
                        };
                        this.config.next = t
                    }
                }
            }]), e
        }();

        function ht(e) {
            return (ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function pt(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function ft(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function mt(e, t, n) {
            return t && ft(e.prototype, t), n && ft(e, n), e
        }

        function gt(e, t) {
            return !t || "object" !== ht(t) && "function" != typeof t ? vt(e) : t
        }

        function vt(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function yt(e, t, n) {
            return (yt = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = bt(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n) : o.value
                }
            })(e, t, n || e)
        }

        function bt(e, t) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = wt(e)););
            return e
        }

        function wt(e) {
            return (wt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function St(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && kt(e, t)
        }

        function kt(e, t) {
            return (kt = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        d.a.polyfill();
        var xt = [{
                type: "carousel",
                element: ".vision-carousel__slider"
            }, {
                type: "sequence",
                element: "#sun-roof-sequence",
                path: "home-sun-roof-30FPS/image-",
                count: 81,
                height: 200,
                name: "sun-roof",
                id: "sun-roof",
                start: "top bottom",
                end: "bottom 80px",
                pinStart: "top 80px"
            }, {
                type: "sequence",
                element: "#windshield-sequence",
                path: "home-reveal-30FPS/image-",
                count: 51,
                height: 250,
                name: "windshield",
                id: "windshield",
                pinStart: "top 80px"
            }, {
                type: "fullVideo",
                element: "#home-bottom-video",
                pin: 250
            }],
            Tt = [{
                type: "sequence",
                id: "sun-roof",
                name: "sun-roof",
                element: "#sun-roof-sequence",
                path: "home-sun-roof-mobile-30FPS/image-",
                count: 70,
                height: 250,
                start: "top bottom",
                end: "bottom 80px",
                pinStart: "top 80px",
                pinEnd: !0,
                pinEndOffset: 80
            }, {
                type: "sequence",
                id: "windshield",
                name: "windshield",
                element: "#windshield-sequence",
                path: "home-reveal-mobile-30FPS/image-",
                count: 51,
                height: 250,
                pinStart: "top 80px",
                pinEnd: !0,
                pinEndOffset: 80
            }],
            Ot = [{
                type: "trigger",
                element: ".menu-container",
                params: {
                    trigger: ".home-intro",
                    start: "top top",
                    end: "bottom bottom",
                    toggleClass: {
                        targets: ".menu-container",
                        className: "header-always-visible"
                    },
                    id: "home-1"
                }
            }, {
                type: "trigger",
                element: ".menu-container",
                params: {
                    trigger: ".home-intro",
                    start: "bottom bottom",
                    endTrigger: ".footer",
                    end: "bottom top",
                    toggleClass: {
                        targets: ".menu-container",
                        className: "minified"
                    },
                    id: "home-2"
                }
            }, {
                type: "trigger",
                element: ".mask",
                params: {
                    trigger: ".home-intro",
                    start: "top top",
                    end: "bottom bottom",
                    pin: ".mask",
                    id: "home-3"
                }
            }, {
                type: "trigger",
                element: ".mask",
                params: {
                    trigger: "#windshield-wrap",
                    start: "bottom bottom",
                    end: "bottom center",
                    scrub: .1,
                    from: {
                        scaleX: 1,
                        scaleY: 1,
                        borderBottomLeftRadius: "0px",
                        borderBottomRightRadius: "0px"
                    },
                    to: {
                        scaleX: .9,
                        scaleY: .9,
                        borderBottomLeftRadius: "24px",
                        borderBottomRightRadius: "24px"
                    },
                    isMobileOnly: !0,
                    id: "home-4"
                }
            }, {
                type: "trigger",
                element: ".mask",
                params: {
                    trigger: "#windshield-wrap",
                    start: "bottom bottom",
                    end: "bottom center",
                    scrub: .1,
                    from: {
                        scaleX: 1,
                        scaleY: 1,
                        borderBottomLeftRadius: "0px",
                        borderBottomRightRadius: "0px"
                    },
                    to: {
                        scaleX: .9,
                        scaleY: .9,
                        borderBottomLeftRadius: "80px",
                        borderBottomRightRadius: "80px"
                    },
                    isDesktopOnly: !0,
                    id: "home-5"
                }
            }, {
                type: "trigger",
                element: ["#home-hero video", "#home-hero #glamour-cta"],
                params: {
                    trigger: "#home-glamour-1",
                    start: "top bottom",
                    end: "top center",
                    scrub: !0,
                    from: {
                        autoAlpha: 1,
                        y: 0
                    },
                    to: {
                        autoAlpha: 0,
                        y: "240px",
                        ease: "none"
                    },
                    id: "home-6"
                }
            }, {
                type: "trigger",
                element: "#home-glamour-1 .glamour-title",
                params: {
                    start: "bottom bottom",
                    end: "bottom 90%",
                    scrub: !0,
                    from: {
                        autoAlpha: 0
                    },
                    to: {
                        autoAlpha: 1
                    },
                    id: "home-7"
                }
            }, {
                type: "trigger",
                element: "#home-glamour-1 .glamour-picture",
                params: {
                    trigger: "#home-glamour-1",
                    start: "top bottom",
                    endTrigger: "#home-glamour-2",
                    end: "top 80px",
                    scrub: !0,
                    from: {
                        scale: 1
                    },
                    to: {
                        scale: 1.3,
                        ease: "none"
                    },
                    id: "home-8"
                }
            }, {
                type: "trigger",
                element: ["#home-glamour-1 .glamour-picture", "#home-glamour-1 .glamour-title"],
                params: {
                    trigger: "#home-glamour-2",
                    start: "top bottom",
                    end: "top center",
                    scrub: !0,
                    from: {
                        autoAlpha: 1,
                        y: 0
                    },
                    to: {
                        autoAlpha: 0,
                        y: "240px",
                        ease: "none"
                    },
                    id: "home-9"
                }
            }, {
                type: "set",
                element: "#home-glamour-1 .glamour-title",
                params: {
                    autoAlpha: 0
                }
            }, {
                type: "trigger",
                element: "#home-glamour-2 .glamour-title",
                params: {
                    start: "bottom bottom",
                    endTrigger: "#built-for-riders",
                    end: "top 60%",
                    toggleActions: "restart reverse restart reverse",
                    ease: "power3.easeInOut",
                    from: {
                        autoAlpha: 0
                    },
                    to: {
                        autoAlpha: 1,
                        duration: .3
                    },
                    id: "home-11"
                }
            }, {
                type: "trigger",
                element: "#home-glamour-2 .glamour-picture",
                params: {
                    start: "top bottom",
                    end: "top 80px",
                    scrub: !0,
                    from: {
                        scale: 1
                    },
                    to: {
                        scale: 1.2,
                        ease: "none"
                    },
                    id: "home-12"
                }
            }, {
                type: "trigger",
                element: "#built-for-riders .to-pin",
                params: {
                    trigger: "#built-for-riders",
                    start: "top 50%",
                    end: "bottom 40%",
                    toggleActions: "restart reverse restart reverse",
                    ease: "power3.easeInOut",
                    from: {
                        autoAlpha: 0
                    },
                    to: {
                        autoAlpha: 1,
                        duration: .3
                    },
                    id: "home-13"
                }
            }, {
                type: "trigger",
                element: "#this-is-zoox .to-pin",
                params: {
                    trigger: "#this-is-zoox",
                    start: "top 70%",
                    end: "bottom center",
                    toggleActions: "restart reverse restart reverse",
                    ease: "power3.easeInOut",
                    from: {
                        autoAlpha: 0
                    },
                    to: {
                        autoAlpha: 1,
                        duration: .3
                    },
                    id: "home-14"
                }
            }, {
                type: "trigger",
                element: "#bottom-video-title",
                params: {
                    trigger: "#home-bottom-video",
                    start: "top-=200px bottom",
                    end: "center center",
                    toggleClass: "has-overlay",
                    toggleActions: "restart reverse restart reverse",
                    from: {
                        autoAlpha: 0
                    },
                    to: {
                        autoAlpha: 1,
                        duration: .5
                    },
                    isDesktopOnly: !0,
                    id: "home-15"
                }
            }, {
                type: "trigger",
                element: "#bottom-video-title",
                params: {
                    start: "center center",
                    endTrigger: "#home-bottom-video",
                    end: "bottom bottom",
                    pin: !0,
                    anticipatePin: 1,
                    isDesktopOnly: !0,
                    id: "home-16"
                }
            }, {
                type: "trigger",
                element: "#home-bottom-video .container",
                params: {
                    trigger: "#home-bottom-video",
                    start: "bottom bottom",
                    end: "bottom 80%",
                    scrub: !0,
                    from: {
                        borderBottomLeftRadius: "0px",
                        borderBottomRightRadius: "0px"
                    },
                    to: {
                        borderBottomLeftRadius: "80px",
                        borderBottomRightRadius: "80px"
                    },
                    isDesktopOnly: !0,
                    id: "home-17"
                }
            }],
            Lt = function(e) {
                function t(e, n) {
                    var i;
                    return pt(this, t), (i = gt(this, wt(t).call(this, e, n))).config.layout = xt, i.config.mobileLayout = Tt, i.config.timeline = Ot, i
                }
                return St(t, e), mt(t, [{
                    key: "init",
                    value: function() {
                         stylesheet_directory_uri = './';
                        var e = this,
                            n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        this.page && (this.config.splash = {
                           
                            video: {
                                desktop: "assets/vd/energy-hypnotek-dim-compressed.mp4",
                                mobile: "assets/vd/energy-hypnotek-dim-compressed.mp4"
                            },
                            fallback: "assets/images/home-1-unveil-lights-up-mobile.jpg",
                            params: {
                                animatedTitle: {
                                    id: "the-beginning",
                                    element: "#the-beginning",
                                    customClass: "white",
                                    eyebrowSize: "large-eyebrow",
                                    hat: this.page.getAttribute("data-splash-headline"),
                                    title: this.page.getAttribute("data-splash-title")
                                },
                                hasTransition: !1
                            }
                        });
                        //stylesheet_directory_uri = './';
                        var i = document.querySelector("#home-hero video"),
                            o = document.querySelector("#home-bottom-video .bottom-video");
                        window.innerWidth >= 1024 && (i.innerHTML = "<source src='".concat(i.dataset.desktopSrc, "'>"), i.load(), o.innerHTML = "<source src='".concat(o.dataset.desktopSrc, "'>"), o.load()), this.pageLoaded = function() {
                            e.main.menu.classList.add("dark"), document.querySelector("#glamour-cta").addEventListener("click", (function() {
                                var e = document.getElementById("home-glamour-1"),
                                    t = Object(C.a)(e);
                                window.scrollBy({
                                    left: 0,
                                    top: t - 80,
                                    behavior: "smooth"
                                })
                            }))
                        }, this.main.gsap.set("#glamour-cta .zoox-button", {
                            autoAlpha: 0
                        }), this.splashCallback = function() {
                            var t = i.play();
                            void 0 !== t && t.then((function() {})).catch((function(e) {
                                console.log(e)
                            })), i.addEventListener("ended", (function() {
                                e.animateGlamourCta()
                            }), {
                                once: !0
                            })
                        }, yt(wt(t.prototype), "init", this).call(this, n)
                    }

                }, {
                    key: "animateGlamourCta",
                    value: function() {
                        this.main.gsap.fromTo("#glamour-cta .zoox-button", {
                            autoAlpha: 0,
                            scaleX: 0,
                            scaleY: 0,
                            y: 10
                        }, {
                            autoAlpha: 1,
                            scaleX: 1,
                            scaleY: 1,
                            y: 0,
                            duration: .5,
                            data: this.slug
                        }), this.main.gsap.fromTo("#glamour-cta .zoox-button svg", {
                            autoAlpha: 0,
                            y: -10
                        }, {
                            autoAlpha: 1,
                            y: 0,
                            duration: .25,
                            delay: .25,
                            data: this.slug
                        })
                    }
                }, {
                    key: "setupGlamourCtaPosition",
                    value: function() {
                        document.querySelector(".hero-intro").style.height = "".concat(window.innerHeight, "px")
                    }
                }]), t
            }(dt);

        function Et(e) {
            return (Et = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function _t(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function Ct(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function Pt(e, t, n) {
            return t && Ct(e.prototype, t), n && Ct(e, n), e
        }

        function jt(e, t) {
            return !t || "object" !== Et(t) && "function" != typeof t ? qt(e) : t
        }

        function qt(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function At(e, t, n) {
            return (At = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = Mt(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n) : o.value
                }
            })(e, t, n || e)
        }

        function Mt(e, t) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Rt(e)););
            return e
        }

        function Rt(e) {
            return (Rt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function It(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Ft(e, t)
        }

        function Ft(e, t) {
            return (Ft = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var Bt = {
                video: {
                    desktop: "/assets/videos/vehicle-drive-in-intro.mp4",
                    mobile: "/assets/videos/vehicle-drive-in-intro-mobile.mp4"
                },
                fallback: "/assets/images/vehicle-drive-in-end-mobile.jpg"
            },
            Dt = [{
                type: "sequence",
                id: "dayNightSequence",
                name: "dayNight",
                element: "#dayNight",
                path: "vehicle-day-night-30FPS/image-",
                count: 46,
                height: 250
            }],
            Nt = [{
                type: "sequence",
                id: "dayNightSequence",
                name: "dayNight",
                element: "#dayNight",
                path: "vehicle-day-night-mobile-30FPS/image-",
                pinEnd: !0,
                count: 46,
                height: 250
            }],
            zt = [{
                type: "trigger",
                element: ".menu-container",
                params: {
                    trigger: ".page-content",
                    start: "20px top",
                    endTrigger: ".footer",
                    end: "bottom top",
                    toggleClass: {
                        targets: ".menu-container",
                        className: "minified"
                    },
                    id: "vehicle-1"
                }
            }, {
                type: "trigger",
                element: ".menu-container",
                params: {
                    trigger: "#dayNight",
                    start: "top top",
                    endTrigger: "#three-images",
                    end: "top top",
                    toggleClass: {
                        targets: ".menu-container",
                        className: "dark"
                    },
                    id: "vehicle-2"
                }
            }, {
                type: "trigger",
                element: "#dayNight .container",
                params: {
                    trigger: "#dayNight",
                    start: "top bottom",
                    end: "top top",
                    scrub: .3,
                    from: {
                        width: "calc(100% - 72px)"
                    },
                    to: {
                        width: "calc(100% - 0px)",
                        ease: "power3.inOutQuad"
                    },
                    isMobileOnly: !0,
                    id: "vehicle-3"
                }
            }, {
                type: "trigger",
                element: "#dayNight .container",
                params: {
                    trigger: "#dayNight",
                    start: "top bottom",
                    end: "top top",
                    scrub: .3,
                    from: {
                        width: "50%"
                    },
                    to: {
                        width: "100%",
                        ease: "power3.inOutQuad"
                    },
                    isDesktopOnly: !0,
                    id: "vehicle-4"
                }
            }, {
                type: "trigger",
                element: "#dayNight .container",
                params: {
                    trigger: "#dayNight",
                    start: "bottom bottom",
                    end: "bottom top",
                    scrub: .3,
                    to: {
                        scale: .5,
                        ease: "power3.out"
                    },
                    isDesktopOnly: !0,
                    id: "vehicle-5"
                }
            }, {
                type: "trigger",
                element: "#dayNight canvas",
                params: {
                    trigger: "#dayNight",
                    start: "bottom bottom",
                    end: "bottom top",
                    scrub: .3,
                    to: {
                        scale: 2,
                        ease: "power3.out"
                    },
                    isDesktopOnly: !0,
                    id: "vehicle-6"
                }
            }, {
                type: "trigger",
                element: "#built-for .built-for__text",
                params: {
                    trigger: "#built-for",
                    once: !0,
                    start: "top 30%",
                    end: "top 29%",
                    toggleClass: {
                        targets: "#built-for .built-for__text",
                        className: "show"
                    },
                    id: "vehicle-7"
                }
            }],
            Ht = {
                element: "#not-the-driver",
                trigger: "#not-the-driver-container",
                fadeIn: "top 10px",
                fadeOut: "50px 10px"
            },
            Wt = function(e) {
                function t(e, n) {
                    var i;
                    return _t(this, t), (i = jt(this, Rt(t).call(this, e, n))).config.splash = Bt, i.config.layout = Dt, i.config.mobileLayout = Nt, i.config.timeline = zt, i.config.animatedTitle = Ht, i
                }
                return It(t, e), Pt(t, [{
                    key: "init",
                    value: function() {
                        var e, n = this,
                            i = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        this.pageLoaded = function() {
                            n.main.gsap.set("body", {
                                background: "#FBFBFB"
                            }), n.main.menu.classList.add("white"), e = document.querySelector("#drive-in video"), window.innerWidth >= 1024 && (e.innerHTML = "<source src='".concat(e.dataset.desktopSrc, "'>"), e.load())
                        }, this.splashCallback = function() {
                            var t = (e = document.querySelector("#drive-in video")).play();
                            void 0 !== t && t.then((function() {})).catch((function(e) {
                                console.log(e)
                            })), n.showAnimatedTitle()
                        }, At(Rt(t.prototype), "init", this).call(this, i)
                    }
                }, {
                    key: "initExtraScrollTriggerEffects",
                    value: function() {
                        var e = this;
                        this.setupAnimatedTitles(), this.main.scrollTrigger.matchMedia({
                            "(max-width: 1599px)": function() {
                                e.main.gsap.fromTo("#dayNight .container", {
                                    borderRadius: "40px"
                                }, {
                                    borderRadius: "0px",
                                    scrollTrigger: {
                                        trigger: "#dayNight",
                                        start: "top 20%",
                                        end: "top top",
                                        scrub: .3,
                                        ease: "power3.inOutQuad",
                                        data: e.slug
                                    }
                                })
                            },
                            "(min-width: 1024px) and (max-width: 1599px)": function() {
                                e.main.gsap.fromTo("#dayNight .container", {
                                    borderRadius: "0px"
                                }, {
                                    borderRadius: "80px",
                                    scrollTrigger: {
                                        trigger: "#dayNight",
                                        start: "bottom bottom",
                                        end: "bottom center",
                                        scrub: .3,
                                        ease: "power3.inOutQuad",
                                        data: e.slug
                                    },
                                    immediateRender: !1
                                })
                            },
                            "(min-width: 1600px)": function() {
                                e.main.gsap.fromTo("#dayNight .container", {
                                    borderRadius: "40px"
                                }, {
                                    borderRadius: "80px",
                                    scrollTrigger: {
                                        trigger: "#dayNight",
                                        start: "top 30%",
                                        end: "top top",
                                        scrub: .3,
                                        ease: "power3.inOutQuad",
                                        data: e.slug
                                    }
                                })
                            }
                        })
                    }
                }, {
                    key: "setupAnimatedTitles",
                    value: function() {
                        this.heroAnimatedTitle = new se(this.config.animatedTitle, this.slug, this.main)
                    }
                }, {
                    key: "showAnimatedTitle",
                    value: function() {
                        this.heroAnimatedTitle.show(40)
                    }
                }]), t
            }(dt);

        function Vt(e) {
            return (Vt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Ut(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function Gt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function Yt(e, t, n) {
            return t && Gt(e.prototype, t), n && Gt(e, n), e
        }

        function $t(e, t) {
            return !t || "object" !== Vt(t) && "function" != typeof t ? Kt(e) : t
        }

        function Kt(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Xt(e, t, n) {
            return (Xt = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = Jt(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n) : o.value
                }
            })(e, t, n || e)
        }

        function Jt(e, t) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Qt(e)););
            return e
        }

        function Qt(e) {
            return (Qt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Zt(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && en(e, t)
        }

        function en(e, t) {
            return (en = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var tn = {
                video: {
                    desktop: "/assets/videos/tech-pod-reveal.mp4",
                    mobile: "/assets/videos/tech-pod-reveal-mobile.mp4"
                },
                fallback: "/assets/sequences/tech-pod-reveal-mobile-30FPS/image-00001.jpg",
                skip: !1
            },
            nn = [{
                type: "sequence",
                id: "pod",
                name: "pod",
                element: "#pod-sequence",
                path: "tech-pod-reveal-30FPS/image-",
                count: 21,
                height: 110,
                pin: !1,
                start: "top top",
                end: "bottom center"
            }, {
                type: "sequence",
                id: "sensors",
                name: "sensors",
                element: "#sensors-sequence",
                path: "tech-360-view-30FPS/image-",
                count: 315,
                height: 1700,
                startOffset: .007,
                frameRepeats: {
                    1: 8
                },
                progressMeters: [{
                    name: "optimal-placement",
                    start: .085,
                    end: .32,
                    meter: "#optimal-placement-meter",
                    cssClasses: [{
                        name: "cameras",
                        start: .085,
                        end: .16
                    }, {
                        name: "lidars",
                        start: .162,
                        end: .238
                    }, {
                        name: "radars",
                        start: .244,
                        end: .32
                    }]
                }, {
                    name: "three-sixty-view",
                    start: .42,
                    end: .51,
                    meter: "#three-sixty-view-meter"
                }, {
                    name: "camera",
                    start: .585,
                    end: .67,
                    meter: "#camera-meter"
                }, {
                    name: "compute",
                    start: .735,
                    end: .925,
                    meter: "#compute-meter"
                }]
            }],
            on = [{
                type: "sequence",
                id: "pod",
                name: "pod",
                element: "#pod-sequence",
                path: "tech-pod-reveal-mobile-30FPS/image-",
                count: 16,
                height: 100,
                pxHeight: 100,
                pin: !1,
                start: "top 80px",
                end: "bottom center"
            }, {
                type: "sequence",
                id: "sensors",
                name: "sensors",
                element: "#sensors-sequence",
                path: "tech-360-view-mobile-30FPS/image-",
                end: "bottom center",
                pinEnd: !0,
                count: 315,
                height: 1700,
                startOffset: .007,
                frameRepeats: {
                    1: 8
                },
                progressMeters: [{
                    name: "optimal-placement",
                    start: .085,
                    end: .32,
                    meter: "#optimal-placement-meter",
                    cssClasses: [{
                        name: "cameras",
                        start: .085,
                        end: .16
                    }, {
                        name: "lidars",
                        start: .162,
                        end: .238
                    }, {
                        name: "radars",
                        start: .244,
                        end: .32
                    }]
                }, {
                    name: "three-sixty-view",
                    start: .42,
                    end: .51,
                    meter: "#three-sixty-view-meter"
                }, {
                    name: "camera",
                    start: .585,
                    end: .67,
                    meter: "#camera-meter"
                }, {
                    name: "compute",
                    start: .735,
                    end: .925,
                    meter: "#compute-meter"
                }]
            }],
            rn = [{
                type: "trigger",
                element: ".menu-container",
                params: {
                    trigger: ".page-content",
                    start: "20px top",
                    endTrigger: ".footer",
                    end: "bottom top",
                    toggleClass: {
                        targets: ".menu-container",
                        className: "minified"
                    },
                    id: "autonomy-1"
                }
            }, {
                type: "trigger",
                element: "#sensors.image-sequence .container",
                params: {
                    trigger: "#sensors",
                    start: "bottom bottom",
                    end: "bottom center",
                    scrub: !0,
                    from: {
                        width: "100%",
                        height: "calc(100% - 0px)",
                        borderBottomRightRadius: "0px",
                        borderBottomLeftRadius: "0px"
                    },
                    to: {
                        width: "90%",
                        height: "calc(100% - 32px)",
                        borderBottomRightRadius: "24px",
                        borderBottomLeftRadius: "24px"
                    },
                    isMobileOnly: !0,
                    id: "autonomy-2"
                }
            }, {
                type: "trigger",
                element: "#sensors.image-sequence .container",
                params: {
                    trigger: "#sensors",
                    start: "96% bottom",
                    end: "bottom center",
                    scrub: !0,
                    from: {
                        width: "calc(100% - 0px)",
                        height: "100%",
                        borderBottomRightRadius: "0px",
                        borderBottomLeftRadius: "0px"
                    },
                    to: {
                        width: "calc(100% - 160px)",
                        height: "80%",
                        borderBottomRightRadius: "80px",
                        borderBottomLeftRadius: "80px"
                    },
                    isDesktopOnly: !0,
                    id: "autonomy-3"
                }
            }, {
                type: "pin",
                element: "#completely-autonomous",
                params: {
                    trigger: "#pod-wrap",
                    start: "top 80px",
                    end: "bottom -100%"
                }
            }],
            sn = {
                element: "#the-future",
                trigger: "#the-future-container",
                fadeIn: "top 10px",
                fadeOut: "50px 40px"
            },
            an = function(e) {
                function t(e, n) {
                    var i;
                    return Ut(this, t), (i = $t(this, Qt(t).call(this, e, n))).config.splash = tn, i.config.layout = nn, i.config.mobileLayout = on, i.config.timeline = rn, i.config.animatedTitle = sn, i
                }
                return Zt(t, e), Yt(t, [{
                    key: "init",
                    value: function() {
                        var e = this,
                            n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        this.pageLoaded = function() {
                            e.gradientBg.shader.uniforms.u_color1 = [84, 129, 254], e.gradientBg.shader.uniforms.u_color2 = [129, 89, 241], e.gradientBg.shader.uniforms.u_color3 = [255, 133, 249], e.main.gsap.set("body", {
                                background: "#07111D"
                            }), e.main.menu.classList.add("autonomy")
                        }, this.splashCallback = function() {
                            e.showAnimatedTitle(), e.placeMeterTitles(), e.computeVideoContainerHeight()
                        }, Xt(Qt(t.prototype), "init", this).call(this, n), this._resize = this.resize.bind(this), window.addEventListener("resize", this._resize)
                    }
                }, {
                    key: "initExtraScrollTriggerEffects",
                    value: function() {
                        this.setupAnimatedTitles(), this.main.gsap.fromTo("#completely-autonomous .seq-title-inner > *", {
                            autoAlpha: 0,
                            y: 40
                        }, {
                            autoAlpha: 1,
                            y: 0,
                            duration: .3,
                            ease: "power4.easeOut",
                            stagger: .05,
                            scrollTrigger: {
                                trigger: "#pod-wrap",
                                start: "bottom 25%",
                                end: "bottom 5%",
                                scrub: .3,
                                toggleActions: "restart none reverse none",
                                data: this.slug
                            }
                        }), this.main.gsap.fromTo("#completely-autonomous .seq-title-inner > *", {
                            autoAlpha: 1,
                            y: 0
                        }, {
                            autoAlpha: 0,
                            y: -40,
                            duration: .3,
                            ease: "power4.easeOut",
                            stagger: .05,
                            scrollTrigger: {
                                trigger: "#pod-wrap",
                                start: "bottom -15%",
                                end: "bottom -35%",
                                scrub: .3,
                                toggleActions: "restart none reverse none",
                                data: this.slug
                            }
                        }), this.main.gsap.set("#completely-autonomous .seq-title-inner > *", {
                            autoAlpha: 0
                        }), this.placeMeterTitles(), this.computeVideoContainerHeight()
                    }
                }, {
                    key: "setupAnimatedTitles",
                    value: function() {
                        this.heroAnimatedTitle = new se(this.config.animatedTitle, this.slug, this.main)
                    }
                }, {
                    key: "showAnimatedTitle",
                    value: function() {
                        this.heroAnimatedTitle.show(40)
                    }
                }, {
                    key: "placeMeterTitles",
                    value: function() {
                        var e = document.querySelector("#sensors-wrap .sequencer-inner").getBoundingClientRect().left;
                        document.querySelectorAll(".meter-title").forEach((function(t) {
                            t.style.left = "".concat(e, "px")
                        }))
                    }
                }, {
                    key: "computeVideoContainerHeight",
                    value: function() {
                        var e = document.querySelector(".code-to-road .tech-info").offsetTop + window.innerHeight;
                        window.innerWidth < 1024 && (e += 186), document.documentElement.style.setProperty("--bgHeight", "".concat(e, "px"))
                    }
                }, {
                    key: "resize",
                    value: function() {
                        this.placeMeterTitles(), this.computeVideoContainerHeight()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        window.removeEventListener("resize", this._resize)
                    }
                }]), t
            }(dt);

        function ln(e) {
            return (ln = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function cn(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function un(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function dn(e, t, n) {
            return t && un(e.prototype, t), n && un(e, n), e
        }

        function hn(e, t) {
            return !t || "object" !== ln(t) && "function" != typeof t ? pn(e) : t
        }

        function pn(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function fn(e, t, n) {
            return (fn = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = mn(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n) : o.value
                }
            })(e, t, n || e)
        }

        function mn(e, t) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = gn(e)););
            return e
        }

        function gn(e) {
            return (gn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function vn(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && yn(e, t)
        }

        function yn(e, t) {
            return (yn = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var bn = {},
            wn = [],
            Sn = [{
                type: "trigger",
                element: ".menu-container",
                params: {
                    trigger: ".page-content",
                    start: "20px top",
                    endTrigger: ".footer",
                    end: "bottom top",
                    toggleClass: {
                        targets: ".menu-container",
                        className: "minified"
                    },
                    id: "contact-1"
                }
            }],
            kn = function(e) {
                function t(e, n) {
                    var i;
                    return cn(this, t), (i = hn(this, gn(t).call(this, e, n))).config.splash = bn, i.config.layout = wn, i.config.timeline = Sn, i
                }
                return vn(t, e), dn(t, [{
                    key: "init",
                    value: function() {
                        var e = this,
                            n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        this.pageLoaded = function() {
                            e.main.gsap.set("body", {
                                background: "#FFFFFF"
                            }), e.main.menu.classList.add("white")
                        }, fn(gn(t.prototype), "init", this).call(this, n)
                    }
                }]), t
            }(dt);

        function xn(e) {
            return (xn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Tn(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function On(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function Ln(e, t, n) {
            return t && On(e.prototype, t), n && On(e, n), e
        }

        function En(e, t) {
            return !t || "object" !== xn(t) && "function" != typeof t ? _n(e) : t
        }

        function _n(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Cn(e, t, n) {
            return (Cn = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = Pn(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n) : o.value
                }
            })(e, t, n || e)
        }

        function Pn(e, t) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = jn(e)););
            return e
        }

        function jn(e) {
            return (jn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function qn(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && An(e, t)
        }

        function An(e, t) {
            return (An = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var Mn = {},
            Rn = [],
            In = [{
                type: "trigger",
                element: ".menu-container",
                params: {
                    trigger: ".page-content",
                    start: "20px top",
                    endTrigger: ".footer",
                    end: "bottom top",
                    toggleClass: {
                        targets: ".menu-container",
                        className: "minified"
                    },
                    id: "about-1"
                }
            }, {
                type: "trigger",
                element: ".js-grid-main",
                params: {
                    trigger: ".crew-grid",
                    start: "top 90%",
                    end: "bottom 50%",
                    scrub: .5,
                    to: {
                        y: "0px",
                        scale: 1
                    },
                    isDesktopOnly: !0,
                    id: "about-2"
                }
            }, {
                type: "trigger",
                element: ".js-grid-top",
                params: {
                    trigger: ".crew-grid",
                    start: "top 70%",
                    end: "bottom 50%",
                    scrub: .5,
                    to: {
                        x: "0px",
                        y: "0px",
                        autoAlpha: 1
                    },
                    isDesktopOnly: !0,
                    id: "about-3"
                }
            }, {
                type: "trigger",
                element: ".js-grid-center",
                params: {
                    trigger: ".crew-grid",
                    start: "top 50%",
                    end: "bottom 50%",
                    scrub: .5,
                    to: {
                        y: "0px",
                        autoAlpha: 1
                    },
                    isDesktopOnly: !0,
                    id: "about-4"
                }
            }, {
                type: "trigger",
                element: ".js-grid-bottom",
                params: {
                    trigger: ".crew-grid",
                    start: "top 30%",
                    end: "bottom 50%",
                    scrub: .5,
                    to: {
                        x: "0px",
                        y: "0px",
                        autoAlpha: 1
                    },
                    isDesktopOnly: !0,
                    id: "about-5"
                }
            }],
            Fn = function(e) {
                function t(e, n) {
                    var i;
                    return Tn(this, t), (i = En(this, jn(t).call(this, e, n))).config.splash = Mn, i.config.layout = Rn, i.config.timeline = In, i
                }
                return qn(t, e), Ln(t, [{
                    key: "init",
                    value: function() {
                        var e = this,
                            n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        this.pageLoaded = function() {
                            e.main.gsap.set("body", {
                                background: "#FFFFFF"
                            }), e.main.menu.classList.add("white"), e.main.Modal.openModalFromUrl()
                        }, Cn(jn(t.prototype), "init", this).call(this, n)
                    }
                }]), t
            }(dt);

        function Bn(e) {
            return (Bn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Dn(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function Nn(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function zn(e, t, n) {
            return t && Nn(e.prototype, t), n && Nn(e, n), e
        }

        function Hn(e, t) {
            return !t || "object" !== Bn(t) && "function" != typeof t ? Wn(e) : t
        }

        function Wn(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Vn(e, t, n) {
            return (Vn = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = Un(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n) : o.value
                }
            })(e, t, n || e)
        }

        function Un(e, t) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Gn(e)););
            return e
        }

        function Gn(e) {
            return (Gn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Yn(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && $n(e, t)
        }

        function $n(e, t) {
            return ($n = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var Kn = {},
            Xn = [],
            Jn = [{
                type: "trigger",
                element: ".menu-container",
                params: {
                    trigger: ".page-content",
                    start: "20px top",
                    endTrigger: ".footer",
                    end: "bottom top",
                    toggleClass: {
                        targets: ".menu-container",
                        className: "minified"
                    },
                    id: "career-1"
                }
            }],
            Qn = function(e) {
                function t(e, n) {
                    var i;
                    return Dn(this, t), (i = Hn(this, Gn(t).call(this, e, n))).config.splash = Kn, i.config.layout = Xn, i.config.timeline = Jn, i
                }
                return Yn(t, e), zn(t, [{
                    key: "init",
                    value: function() {
                        var e = this,
                            n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        this.pageLoaded = function() {
                            e.main.gsap.set("body", {
                                background: "#FFFFFF"
                            }), e.main.menu.classList.add("white")
                        }, Vn(Gn(t.prototype), "init", this).call(this, n)
                    }
                }]), t
            }(dt);

        function Zn(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var ei = function e(t) {
                var n = this,
                    i = t.el;
                if (Zn(this, e), this.root = i, this.root) {
                    this.dropdowns = this.root.querySelectorAll(".dropdown"), this.current = null;
                    var o = !0,
                        r = !1,
                        s = void 0;
                    try {
                        for (var a, l = function() {
                                var e = a.value;
                                e.querySelector(".dropdown__shield").addEventListener("click", (function() {
                                    var t = e.getBoundingClientRect().top;
                                    if (n.current = n.root.querySelector(".dropdown.is-open"), n.current ? (n.current.classList.remove("is-open"), window.Emitter.emit("dropdown-closed")) : n.current = null, e !== n.current) {
                                        n.current = e, n.current.classList.toggle("is-open");
                                        var i = Object(C.a)(n.current);
                                        window.scrollTo({
                                            top: Math.round(i - t)
                                        }), window.innerWidth < 1024 && !(t >= -1 && t <= 1) && setTimeout((function() {
                                            window.scrollTo({
                                                top: i,
                                                behavior: "smooth"
                                            })
                                        }), 100)
                                    } else n.current = null
                                }))
                            }, c = this.dropdowns[Symbol.iterator](); !(o = (a = c.next()).done); o = !0) l()
                    } catch (e) {
                        r = !0, s = e
                    } finally {
                        try {
                            o || null == c.return || c.return()
                        } finally {
                            if (r) throw s
                        }
                    }
                }
            },
            ti = ei;

        function ni(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function ii(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function oi(e, t, n) {
            return t && ii(e.prototype, t), n && ii(e, n), e
        }
        var ri = function() {
                function e(t) {
                    var n = this,
                        i = t.el;
                    ni(this, e), this.root = i, this.filters = this.root.querySelectorAll(".js-filter-select"), this.filtersValues = this.root.querySelectorAll("js-filter-value"), this.currentSlugs = {}, this.filters.forEach((function(e) {
                        n.currentSlugs[e.name] = ""
                    })), this.expandButton = this.root.querySelector(".js-expand-dropdowns-button"), this.noResultsContainer = this.root.querySelector(".js-filter-no-results"), this.highestParents = this.root.querySelectorAll(".dropdown"), this.numberIndicators = this.root.querySelectorAll(".dropdown__metas > span");
                    for (var o = 0; o < this.numberIndicators.length; o++) this.numberIndicators[o].initialNumber = this.numberIndicators[o].innerHTML;
                    this._onFilter = this.onFilter.bind(this), this._toggleAllDropdowns = this.toggleAllDropdowns.bind(this), this._handleExternalButtonClick = this.handleExternalButtonClick.bind(this), this._updateToggleAllDropdownsButton = this.updateToggleAllDropdownsButton.bind(this), this.filters.forEach((function(e) {
                        e.addEventListener("change", n._onFilter)
                    })), this.expandButton && this.expandButton.addEventListener("click", this._toggleAllDropdowns), this.externalFiltersButtons = document.querySelectorAll("[data-filters].js-page-nav-scrollto"), this.externalFiltersButtons.forEach((function(e) {
                        e.addEventListener("click", n._handleExternalButtonClick)
                    })), window.Emitter.on("dropdown-closed", this._updateToggleAllDropdownsButton)
                }
                return oi(e, [{
                    key: "toggleAllDropdowns",
                    value: function() {
                        this.expandButton.classList.contains("is-open") ? this.closeAllDropdowns() : this.openAllDropdowns()
                    }
                }, {
                    key: "openAllDropdowns",
                    value: function() {
                        this.highestParents.forEach((function(e) {
                            e.classList.contains("u-hidden") || e.classList.add("is-open")
                        })), this.expandButton.classList.add("is-open")
                    }
                }, {
                    key: "closeAllDropdowns",
                    value: function() {
                        this.highestParents.forEach((function(e) {
                            e.classList.remove("is-open")
                        })), this.expandButton.classList.remove("is-open")
                    }
                }, {
                    key: "updateToggleAllDropdownsButton",
                    value: function() {
                        Array.from(this.highestParents).some((function(e) {
                            return e.classList.contains("is-open")
                        })) || this.closeAllDropdowns()
                    }
                }, {
                    key: "handleExternalButtonClick",
                    value: function(e) {
                        var t = this;
                        this.clearFilters();
                        var n = JSON.parse(e.target.dataset.filters),
                            i = !1;
                        Object.keys(n).forEach((function(e) {
                            if (t.currentSlugs.hasOwnProperty(e) && n[e]) {
                                var o = t.root.querySelector(".js-filter-select[name=".concat(e, "]"));
                                t.checkIfOptionExists(o, n[e]) && (i = !0, t.currentSlugs[e] = n[e], o && (o.value = n[e]))
                            }
                        })), this.filter(), i && this.openAllDropdowns()
                    }
                }, {
                    key: "checkIfOptionExists",
                    value: function(e, t) {
                        return !!Array.prototype.find.call(e.options, (function(e) {
                            return e.value === t
                        }))
                    }
                }, {
                    key: "clearFilters",
                    value: function() {
                        var e = this;
                        Object.keys(this.currentSlugs).forEach((function(t) {
                            e.currentSlugs[t] = "";
                            var n = e.root.querySelector("[name=".concat(t, "]"));
                            n && (n.value = "")
                        }))
                    }
                }, {
                    key: "onFilter",
                    value: function(e) {
                        this.currentSlugs[e.target.name] = e.target.value, this.root.querySelector('[data-name="'.concat(e.target.name, '"] span')).innerHTML = e.target.selectedOptions[0].text, this.filter()
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.highestParents.forEach((function(e) {
                            e.classList.remove("no-border")
                        })), this.noResultsContainer.classList.remove("is-visible");
                        for (var e = this.root.querySelectorAll(".u-hidden"), t = 0; t < e.length; t++) this.show(e[t]);
                        for (var n = 0; n < this.numberIndicators.length; n++) this.numberIndicators[n].innerHTML = this.numberIndicators[n].initialNumber
                    }
                }, {
                    key: "filter",
                    value: function() {
                        this.reset();
                        for (var e = !0, t = 0; t < this.highestParents.length; t++) {
                            var n = this.highestParents[t],
                                i = this.getChildren(n),
                                o = this.checkChildren(i, n),
                                r = n.querySelector(".dropdown__metas .number"),
                                s = n.querySelector(".dropdown__metas .multiple");
                            r.innerHTML = i.length, this.checkMultiple(i, s), o ? e = !1 : n.classList.remove("is-open");
                            for (var a = n.querySelectorAll(".jobs-list"), l = 0; l < a.length; l++) {
                                var c = a[l],
                                    u = this.getChildren(c);
                                this.checkChildren(u, c)
                            }
                            for (var d = n.querySelectorAll(".jobs-item"), h = 0; h < d.length; h++) this.hide(d[h]);
                            for (var p = 0; p < i.length; p++) this.show(i[p])
                        }
                        var f = this.root.querySelectorAll(".dropdown:not(.u-hidden)");
                        f.length && f[f.length - 1].classList.add("no-border"), this.closeAllDropdowns(), e && this.noResultsContainer.classList.add("is-visible")
                    }
                }, {
                    key: "checkMultiple",
                    value: function(e, t) {
                        0 == e.length || e.length > 1 ? t.innerHTML = "s" : t.innerHTML = ""
                    }
                }, {
                    key: "getChildren",
                    value: function(e) {
                        var t = this,
                            n = ".jobs-item";
                        return Object.keys(this.currentSlugs).forEach((function(e) {
                            t.currentSlugs[e] && "all" !== t.currentSlugs[e] && (n += "[data-".concat(e, '-slug="').concat(t.currentSlugs[e], '"]'))
                        })), e.querySelectorAll(n)
                    }
                }, {
                    key: "checkChildren",
                    value: function(e, t) {
                        var n = 0 !== e.length;
                        return n ? this.show(t) : this.hide(t), n
                    }
                }, {
                    key: "hide",
                    value: function(e) {
                        e.classList.add("u-hidden")
                    }
                }, {
                    key: "show",
                    value: function(e) {
                        e.classList.remove("u-hidden")
                    }
                }]), e
            }(),
            si = ri;

        function ai(e) {
            return (ai = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function li(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function ci(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function ui(e, t, n) {
            return t && ci(e.prototype, t), n && ci(e, n), e
        }

        function di(e, t) {
            return !t || "object" !== ai(t) && "function" != typeof t ? hi(e) : t
        }

        function hi(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function pi(e, t, n) {
            return (pi = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = fi(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n) : o.value
                }
            })(e, t, n || e)
        }

        function fi(e, t) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = mi(e)););
            return e
        }

        function mi(e) {
            return (mi = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function gi(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && vi(e, t)
        }

        function vi(e, t) {
            return (vi = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var yi = {},
            bi = [],
            wi = [{
                type: "trigger",
                element: ".menu-container",
                params: {
                    trigger: ".page-content",
                    start: "20px top",
                    endTrigger: ".footer",
                    end: "bottom top",
                    toggleClass: {
                        targets: ".menu-container",
                        className: "minified"
                    },
                    id: "careers-1"
                }
            }],
            Si = function(e) {
                function t(e, n) {
                    var i;
                    return li(this, t), (i = di(this, mi(t).call(this, e, n))).config.splash = yi, i.config.layout = bi, i.config.timeline = wi, i
                }
                return gi(t, e), ui(t, [{
                    key: "init",
                    value: function() {
                        var e = this,
                            n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        this.page = document.querySelector(".careerlist.page-content"), this.Dropdown = new ti({
                            el: this.page
                        });
                        var i = this.page.querySelector(".js-filter-v2");
                        this.CareersFilters = new si({
                            el: i
                        }), this.pageLoaded = function() {
                            e.main.gsap.set("body", {
                                background: "#FFFFFF"
                            }), e.main.menu.classList.add("white")
                        }, pi(mi(t.prototype), "init", this).call(this, n)
                    }
                }]), t
            }(dt);

        function ki(e) {
            return (ki = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function xi(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function Ti(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function Oi(e, t, n) {
            return t && Ti(e.prototype, t), n && Ti(e, n), e
        }

        function Li(e, t) {
            return !t || "object" !== ki(t) && "function" != typeof t ? Ei(e) : t
        }

        function Ei(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function _i(e, t, n) {
            return (_i = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = Ci(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n) : o.value
                }
            })(e, t, n || e)
        }

        function Ci(e, t) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Pi(e)););
            return e
        }

        function Pi(e) {
            return (Pi = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function ji(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && qi(e, t)
        }

        function qi(e, t) {
            return (qi = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var Ai = {},
            Mi = [],
            Ri = [{
                type: "trigger",
                element: ".menu-container",
                params: {
                    trigger: ".page-content",
                    start: "20px top",
                    endTrigger: ".footer",
                    end: "bottom top",
                    toggleClass: {
                        targets: ".menu-container",
                        className: "minified"
                    },
                    id: "content-1"
                }
            }],
            Ii = function(e) {
                function t(e, n) {
                    var i;
                    return xi(this, t), (i = Li(this, Pi(t).call(this, e, n))).config.splash = Ai, i.config.layout = Mi, i.config.timeline = Ri, i
                }
                return ji(t, e), Oi(t, [{
                    key: "init",
                    value: function() {
                        var e = this,
                            n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        this.pageLoaded = function() {
                            e.main.gsap.set("body", {
                                background: "#FFFFFF"
                            }), e.main.menu.classList.add("white")
                        }, _i(Pi(t.prototype), "init", this).call(this, n)
                    }
                }]), t
            }(dt);

        function Fi(e) {
            return (Fi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Bi(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function Di(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function Ni(e, t, n) {
            return t && Di(e.prototype, t), n && Di(e, n), e
        }

        function zi(e, t) {
            return !t || "object" !== Fi(t) && "function" != typeof t ? Hi(e) : t
        }

        function Hi(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Wi(e, t, n) {
            return (Wi = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = Vi(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n) : o.value
                }
            })(e, t, n || e)
        }

        function Vi(e, t) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Ui(e)););
            return e
        }

        function Ui(e) {
            return (Ui = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Gi(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Yi(e, t)
        }

        function Yi(e, t) {
            return (Yi = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var $i = {},
            Ki = [],
            Xi = [{
                type: "trigger",
                element: ".menu-container",
                params: {
                    trigger: ".page-content",
                    start: "20px top",
                    endTrigger: ".footer",
                    end: "bottom top",
                    toggleClass: {
                        targets: ".menu-container",
                        className: "minified"
                    },
                    id: "journal-1"
                }
            }],
            Ji = function(e) {
                function t(e, n) {
                    var i;
                    return Bi(this, t), (i = zi(this, Ui(t).call(this, e, n))).config.splash = $i, i.config.layout = Ki, i.config.timeline = Xi, i
                }
                return Gi(t, e), Ni(t, [{
                    key: "init",
                    value: function() {
                        var e = this,
                            n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        this.featuredArticles = this.main.pageWrap.querySelector(".journal__featured"), this.pageLoaded = function() {
                            e.featuredArticles ? (e.main.gsap.set("body", {
                                background: "#FBFBFB"
                            }), e.main.menu.classList.add("journal")) : (e.main.gsap.set("body", {
                                background: "#FFFFFF"
                            }), e.main.menu.classList.add("white"))
                        }, Wi(Ui(t.prototype), "init", this).call(this, n), this.articleContainer = this.main.pageWrap.querySelector(".js-articles-container"), this.loadMoreButton = this.main.pageWrap.querySelector(".js-articles-load-more"), this.loadMoreButton && (this._onLoadMore = this.onLoadMore.bind(this), this.loadMoreButton.addEventListener("click", this._onLoadMore))
                    }
                }, {
                    key: "onLoadMore",
                    value: function(e) {
                        var t = this;
                        e.preventDefault();
                        var n = this.loadMoreButton.href;
                        n && (this.articleContainer.classList.add("is-busy"), fetch(n).then((function(e) {
                            return e.text()
                        })).then((function(e) {
                            for (var n = (new DOMParser).parseFromString(e, "text/html"), i = n.querySelectorAll(".journal__card"), o = n.querySelector(".js-articles-load-more"), r = 0; r < i.length; r++) t.articleContainer.appendChild(i[r]);
                            o ? t.loadMoreButton.href = o.href : t.loadMoreButton.classList.add("u-hidden"), t.articleContainer.classList.remove("is-busy")
                        })).catch((function(e) {
                            this.articleContainer.classList.remove("is-busy"), console.log("Error during fetch " + e.message)
                        })))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.loadMoreButton && this.loadMoreButton.removeEventListener("click", this._onLoadMore)
                    }
                }]), t
            }(dt);

        function Qi(e) {
            return (Qi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Zi(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function eo(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function to(e, t, n) {
            return t && eo(e.prototype, t), n && eo(e, n), e
        }

        function no(e, t) {
            return !t || "object" !== Qi(t) && "function" != typeof t ? io(e) : t
        }

        function io(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function oo(e, t, n) {
            return (oo = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = ro(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n) : o.value
                }
            })(e, t, n || e)
        }

        function ro(e, t) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = so(e)););
            return e
        }

        function so(e) {
            return (so = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function ao(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && lo(e, t)
        }

        function lo(e, t) {
            return (lo = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var co = {},
            uo = [],
            ho = [{
                type: "trigger",
                element: ".menu-container",
                params: {
                    trigger: ".page-content",
                    start: "20px top",
                    endTrigger: ".footer",
                    end: "bottom top",
                    toggleClass: {
                        targets: ".menu-container",
                        className: "minified"
                    },
                    id: "press-1"
                }
            }],
            po = function(e) {
                function t(e, n) {
                    var i;
                    return Zi(this, t), (i = no(this, so(t).call(this, e, n))).config.splash = co, i.config.layout = uo, i.config.timeline = ho, i
                }
                return ao(t, e), to(t, [{
                    key: "init",
                    value: function() {
                        var e = this,
                            n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        this.page = document.querySelector(".press.page-content"), this.Dropdown = new ti({
                            el: this.page
                        }), this.pageLoaded = function() {
                            e.main.gsap.set("body", {
                                background: "#FFFFFF"
                            }), e.main.menu.classList.add("white")
                        }, oo(so(t.prototype), "init", this).call(this, n)
                    }
                }]), t
            }(dt);

        function fo(e) {
            return (fo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function mo(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function go(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function vo(e, t, n) {
            return t && go(e.prototype, t), n && go(e, n), e
        }

        function yo(e, t) {
            return !t || "object" !== fo(t) && "function" != typeof t ? bo(e) : t
        }

        function bo(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function wo(e, t, n) {
            return (wo = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = So(e, t);
                if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get ? o.get.call(n) : o.value
                }
            })(e, t, n || e)
        }

        function So(e, t) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = ko(e)););
            return e
        }

        function ko(e) {
            return (ko = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function xo(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && To(e, t)
        }

        function To(e, t) {
            return (To = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var Oo = {},
            Lo = [],
            Eo = [],
            _o = function(e) {
                function t(e, n) {
                    var i;
                    return mo(this, t), (i = yo(this, ko(t).call(this, e, n))).config.splash = Oo, i.config.layout = Lo, i.config.timeline = Eo, i
                }
                return xo(t, e), vo(t, [{
                    key: "init",
                    value: function() {
                        var e = this,
                            n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        this.pageLoaded = function() {
                            e.main.gsap.set("body", {
                                background: "#EAEDEF"
                            }), e.main.menu.classList.add("white")
                        }, wo(ko(t.prototype), "init", this).call(this, n)
                    }
                }]), t
            }(dt),
            Co = n(11);
        n(66), n(67);

        function Po(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function jo(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function qo(e, t, n) {
            return t && jo(e.prototype, t), n && jo(e, n), e
        }
        var Ao = function() {
                function e(t, n) {
                    Po(this, e), this.main = t, this.pageWrap = n, this.isScroll = !1, window.onpopstate = function() {
                        window.location.href !== document.location.href && (window.location.href = document.location.href)
                    }
                }
                return qo(e, [{
                    key: "load",
                    value: function(e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            i = new XMLHttpRequest;
                        i.open("GET", e, !0), i.onload = function() {
                            if (i.status >= 200 && i.status < 400) {
                                var o = i.responseText,
                                    r = t.parseHTMLPage(o),
                                    s = r.content.getAttribute("data-template");
                                document.body.classList.remove("no-scroll"), n ? t.appendContent(r, s, e, n) : t.replaceContent(r, s, e)
                            } else console.log("We reached our target server, but it returned an error")
                        }, i.onerror = function() {
                            console.log("There was a connection error of some sort")
                        }, i.send()
                    }
                }, {
                    key: "parseHTMLPage",
                    value: function(e) {
                        var t = document.implementation.createHTMLDocument();
                        return t.body.innerHTML = e, {
                            document: t,
                            content: t.querySelector(".page-content")
                        }
                    }
                }, {
                    key: "appendContent",
                    value: function(e, t, n, i) {
                        var o = this,
                            r = document.querySelector(".footer .next-page-tab .next-page-tab__button");
                        if (window.isMobile) r.addEventListener("click", (function() {
                            window.location = n
                        }));
                        else {
                            var s = e.content;
                            s.classList.add("next-page-loaded");
                            var a = document.querySelector(".footer .next-page-tab .next-page-tab__button .u-visually-hidden"),
                                l = "".concat(r.getAttribute("aria-label"), " ").concat(t);
                            r.setAttribute("aria-label", l), r.setAttribute("title", l), a.innerHTML = l, this.pageWrap.appendChild(s);
                            var c = ".page-content." + t,
                                u = document.querySelector(c),
                                d = i.page;
                            this.main.gsap.set(c + " > *", {
                                autoAlpha: 0
                            }), this.main.routes.routes[t.replace(".html", "")].init(!1), document.body.classList.remove("no-scroll");
                            var h = function() {
                                o.main.detach(i), d.parentNode.removeChild(d), u.classList.remove("next-page-loaded"), o.main.gsap.set(c, {
                                    clearProps: "all"
                                }), window.scrollTo(0, 0), document.body.classList.remove(i.slug), document.body.classList.add(t), o.main.Modal.setTriggers(), o.main.scrollTrigger.refresh(), o.main.menu.className = "", o.main.menu.classList.add("menu-container"), o.main.gsap.to(o.main.menu, {
                                    data: t,
                                    autoAlpha: 1,
                                    duration: .5
                                });
                                var r = o.main.routes.routes[t.replace(".html", "")];
                                r.afterTransition(), r.transitionComplete = !0, document.body.classList.remove("no-scroll", i.slug), document.body.classList.remove("page-transition-in-progress"), o.replaceMetas(e.document, n)
                            };
                            r.addEventListener("click", (function() {
                                r.classList.add("is-clicked"), document.body.classList.add("no-scroll"), document.body.classList.add("header-is-hidden"), document.body.classList.add("page-transition-in-progress");
                                var e = document.getElementById("control-height-div");
                                o.main.routes.routes[t.replace(".html", "")].activate(), o.main.gsap.to(c + " > *", {
                                    data: t,
                                    autoAlpha: 1,
                                    duration: .5
                                }), o.main.gsap.to(o.main.menu, {
                                    data: t,
                                    autoAlpha: 0,
                                    duration: .5
                                }), o.main.gsap.to(c, {
                                    data: t,
                                    width: "100%",
                                    height: "".concat(e.clientHeight, "px"),
                                    marginTop: "-".concat(e.clientHeight, "px"),
                                    marginLeft: 0,
                                    marginRight: 0,
                                    borderRadius: "0px",
                                    duration: .8,
                                    ease: "power3.inOut",
                                    delay: 0,
                                    onComplete: h
                                })
                            }))
                        }
                    }
                }, {
                    key: "replaceMetas",
                    value: function(e, t) {
                        var n = e.querySelector("title").innerHTML,
                            i = {
                                href: t,
                                anchor: this.getAnchor(t),
                                origin: this.getOrigin(t),
                                params: this.getParams(t),
                                pathname: this.getPathname(t)
                            };
                        window.history.pushState(i, n, t), document.title = e.querySelector("title").innerHTML
                    }
                }, {
                    key: "replaceContent",
                    value: function(e, t) {
                        var n = this;
                        for (this.main.scenes.forEach((function(e) {
                                n.main.detach(e)
                            })); this.pageWrap.firstChild;) this.pageWrap.removeChild(this.pageWrap.firstChild);
                        this.pageWrap.appendChild(e), window.scrollTo(0, 0), this.main.scrollTrigger.refresh(), this.main.routes.routes[t.replace(".html", "")].init(!0)
                    }
                }, {
                    key: "getOrigin",
                    value: function(e) {
                        var t = e.match(/(https?:\/\/[\w\-.]+)/);
                        return t ? t[1].replace(/https?:\/\//, "") : null
                    }
                }, {
                    key: "getPathname",
                    value: function(e) {
                        var t = e.match(/https?:\/\/.*?(\/[\w_\-./]+)/);
                        return t ? t[1] : "/"
                    }
                }, {
                    key: "getAnchor",
                    value: function(e) {
                        var t = e.match(/(#.*)$/);
                        return t ? t[1] : null
                    }
                }, {
                    key: "getParams",
                    value: function(e) {
                        var t = e.match(/\?([\w_\-.=&]+)/);
                        if (!t) return null;
                        for (var n = t[1].split("&"), i = {}, o = 0; o < n.length; o++) {
                            var r = n[o].split("="),
                                s = r[0],
                                a = r[1];
                            i[s] = a
                        }
                        return i
                    }
                }]), e
            }(),
            Mo = n(5);

        function Ro(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function Io(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function Fo(e, t, n) {
            return t && Io(e.prototype, t), n && Io(e, n), e
        }
        var Bo = function() {
                function e(t) {
                    var n = t.el;
                    Ro(this, e), this.el = n, this.previousScrollTop = 0, this._onScroll = this.onScroll.bind(this), this._openMenu = this.openMenu.bind(this), this._closeMenu = this.closeMenu.bind(this), this._onKeyDown = this.onKeyDown.bind(this), this.siteMenu = document.body.querySelector(".site-menu"), this.mainSiteMenu = this.siteMenu.querySelector(".container > .menu"), this.mainSiteMenuLinks = this.mainSiteMenu.querySelectorAll("a"), this.openMenuButton = this.el.querySelector(".menu-button"), this.closeMenuButton = this.siteMenu.querySelector(".site-menu__close"), this.openMenuButton.addEventListener("click", this._openMenu), this.closeMenuButton.addEventListener("click", this._closeMenu), window.addEventListener("scroll", this._onScroll), window.addEventListener("keydown", this._onKeyDown), this.headerHeight = 84, this.FocusTrap = Object(Mo.a)(this.siteMenu), this.setupHovers()
                }
                return Fo(e, [{
                    key: "setupHovers",
                    value: function() {
                        for (var e = 0; e < this.mainSiteMenuLinks.length; e++) this.mainSiteMenuLinks[e].setAttribute("data-text", this.mainSiteMenuLinks[e].innerHTML.trim())
                    }
                }, {
                    key: "openMenu",
                    value: function() {
                        var e = this;
                        document.body.classList.add("no-scroll"), document.body.classList.add("menu-is-open"), this.siteMenu.removeAttribute("tabindex"), window.Emitter.emit("interrupt-videos"), setTimeout((function() {
                            e.FocusTrap.activate()
                        }), 300)
                    }
                }, {
                    key: "closeMenu",
                    value: function() {
                        document.body.classList.remove("no-scroll"), document.body.classList.remove("menu-is-open"), this.siteMenu.setAttribute("tabindex", "-1"), this.FocusTrap && this.FocusTrap.deactivate()
                    }
                }, {
                    key: "onKeyDown",
                    value: function(e) {
                        27 === e.keyCode && this.closeMenu()
                    }
                }, {
                    key: "onScroll",
                    value: function() {
                        var e = document.documentElement.scrollTop || document.body.scrollTop;
                        e >= this.headerHeight && (e < this.previousScrollTop ? document.body.classList.contains("header-is-hidden") && document.body.classList.remove("header-is-hidden") : e > this.previousScrollTop && (document.body.classList.contains("header-is-hidden") || document.body.classList.add("header-is-hidden"))), this.previousScrollTop = e
                    }
                }]), e
            }(),
            Do = n(6);

        function No(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function zo(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function Ho(e, t, n) {
            return t && zo(e.prototype, t), n && zo(e, n), e
        }
        var Wo = function() {
                function e() {
                    No(this, e), this.root = document.querySelector(".js-landscape-modal"), this.dismissButton = this.root.querySelector(".js-landscape-close"), this._handleOrientationChange = this.handleOrientationChange.bind(this), this._dismissModal = this.dismissModal.bind(this), window.addEventListener("orientationchange", this._handleOrientationChange), this.dismissButton.addEventListener("click", this._dismissModal), this._handleOrientationChange()
                }
                return Ho(e, [{
                    key: "handleOrientationChange",
                    value: function() {
                        window.isMobile && (screen.orientation && ("landscape-primary" == screen.orientation.type || "landscape-secondary" == screen.orientation.type) || window.orientation && 90 === Math.abs(window.orientation) ? (this.root.classList.remove("is-hidden"), this.isNotFullScreen() && document.body.classList.add("landscape-modal-open")) : (this.root.classList.add("is-hidden"), document.body.classList.remove("landscape-modal-open")))
                    }
                }, {
                    key: "dismissModal",
                    value: function() {
                        window.removeEventListener("orientationchange", this._handleOrientationChange), this.dismissButton.removeEventListener("click", this._dismissModal), this.root.classList.add("is-hidden", "is-dismissed"), document.body.classList.remove("landscape-modal-open")
                    }
                }, {
                    key: "isNotFullScreen",
                    value: function() {
                        return !document.webkitCurrentFullScreenElement && !document.mozFullScreenElement
                    }
                }]), e
            }(),
            Vo = n(4),
            Uo = n(21),
            Go = n(22),
            Yo = n(10);

        function $o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function Ko(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function Xo(e, t, n) {
            return t && Ko(e.prototype, t), n && Ko(e, n), e
        }
        var Jo = function() {
            function e(t) {
                var n = this;
                $o(this, e), window.isMobile = Object(Co.a)(navigator.userAgent).any, window.isIos = Object(Co.a)(navigator.userAgent).apple.device, window.isMobile && document.documentElement.classList.add("is-mobile"), document.body.classList.add("has-loading"), this.scenes = [], this.routes = t, this.verticalView = {
                    min: 0,
                    max: 0
                }, this.lastTick = Date.now(), this.tick = Date.now(), this.totalTime = 0, this.Modal = new Do.a, this.LandscapeModal = new Wo, document.getElementById("current_year") && (document.getElementById("current_year").innerHTML = (new Date).getFullYear()), this.pageWrap = document.querySelector(".page-wrap"), this.menuWrap = document.querySelector(".menu-wrap"), this.menu = document.querySelector(".menu-container"), this.menu.computedStyle = getComputedStyle(this.menu), this.menu.ogStyles = {
                    backgroundColor: this.menu.computedStyle.backgroundColor,
                    color: this.menu.computedStyle.color,
                    width: this.menu.computedStyle.width,
                    borderRadius: this.menu.computedStyle.borderRadius,
                    marginTop: this.menu.computedStyle.marginTop
                }, this.screenWidth = null, this.pageLoader = new Ao(this, this.pageWrap), this._handleKeyDown = this.handleKeyDown.bind(this);
                var i = document.querySelector(".menu-wrap");
                this.Header = new Bo({
                    el: i
                }), this.gsap = Vo.a, this.scrollTrigger = Uo.ScrollTrigger, this.cssRule = Go.a, Vo.a.registerPlugin(this.scrollTrigger, this.cssRule), Vo.a.registerPlugin(Yo.a, Yo.b, Yo.c), window.addEventListener("keydown", this._handleKeyDown), this.scrollTrigger.config({
                    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
                });
                var o = R((function() {
                    if (window.innerWidth !== n.screenWidth) {
                        var e = document.getElementById("control-height-div");
                        document.documentElement.style.setProperty("--outer-height", "".concat(e.clientHeight, "px"));
                        var t = document.getElementById("control-ui-div");
                        document.documentElement.style.setProperty("--inner-height", "".concat(t.clientHeight, "px")), n.screenWidth = window.innerWidth, n.rebuildAllTriggers()
                    }
                }), 250);
                this.scrollTrigger.addEventListener("refreshInit", o), window.addEventListener("resize", o), document.addEventListener("scroll", (function(e) {
                    n.verticalView.min = window.scrollY, n.verticalView.max = window.scrollY + window.innerHeight
                })), window.onload = function(e) {
                    n.getAnchor(window.location.href) || setTimeout((function() {
                        window.scrollTo(0, 0), n.rebuildAllTriggers(), n.scenes.forEach((function(e) {
                            e.resetImageSequences()
                        }))
                    }), 20)
                }
            }
            return Xo(e, [{
                key: "getAnchor",
                value: function(e) {
                    var t = e.match(/(#.*)$/);
                    return t ? t[1] : null
                }
            }, {
                key: "attach",
                value: function(e) {
                    this.scenes.push(e)
                }
            }, {
                key: "detach",
                value: function(e) {
                    var t = this.gsap.globalTimeline.getChildren().filter((function(t) {
                            return t.data === e.slug
                        })),
                        n = this.scrollTrigger.getAll().filter((function(t) {
                            return t.vars.data === e.slug
                        })),
                        i = !0,
                        o = !1,
                        r = void 0;
                    try {
                        for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done); i = !0) {
                            s.value.kill()
                        }
                    } catch (e) {
                        o = !0, r = e
                    } finally {
                        try {
                            i || null == a.return || a.return()
                        } finally {
                            if (o) throw r
                        }
                    }
                    var l = !0,
                        c = !1,
                        u = void 0;
                    try {
                        for (var d, h = n[Symbol.iterator](); !(l = (d = h.next()).done); l = !0) {
                            d.value.kill()
                        }
                    } catch (e) {
                        c = !0, u = e
                    } finally {
                        try {
                            l || null == h.return || h.return()
                        } finally {
                            if (c) throw u
                        }
                    }
                    this.scenes.splice(this.scenes.indexOf(e), 1), e.destroy()
                }
            }, {
                key: "rebuildAllTriggers",
                value: function() {
                    var e = this;
                    this.scenes.forEach((function(t) {
                        var n = e.scrollTrigger.getAll().filter((function(e) {
                                return e.vars.data === t.slug
                            })),
                            i = !0,
                            o = !1,
                            r = void 0;
                        try {
                            for (var s, a = n[Symbol.iterator](); !(i = (s = a.next()).done); i = !0) {
                                var l = s.value;
                                l.pin && Vo.a.set(l.pin, {
                                    clearProps: "all"
                                }), l.kill()
                            }
                        } catch (e) {
                            o = !0, r = e
                        } finally {
                            try {
                                i || null == a.return || a.return()
                            } finally {
                                if (o) throw r
                            }
                        }
                        for (var c = 0; c < t.imageSequences.length; c++) t.imageSequences[c].initLoader();
                        for (var u = 0; u < t.screens.length; u++) t.screens[u].initScrollTrigger();
                        t.timeline.init(), t.initExtraScrollTriggerEffects(), t.clearImageSequences()
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    this.scenes.forEach((function(e) {
                        e.render()
                    })), this.tick = Date.now(), this.delta = this.tick - this.lastTick, this.delta = Math.max(1, Math.min(this.delta, 32)), this.totalTime += this.delta, this.lastTick = this.tick, requestAnimationFrame(this.render.bind(this))
                }
            }, {
                key: "handleKeyDown",
                value: function(e) {
                    9 === e.keyCode && document.body.classList.add("keyboard-user")
                }
            }]), e
        }();

        function Qo(e) {
            var t = e.match(/(#.*)$/);
            return t ? t[1] : null
        }
        var Zo = Qo(window.location.href);
        Zo || history.scrollRestoration && (history.scrollRestoration = "manual");
        var er = document.getElementById("control-height-div");
        document.documentElement.style.setProperty("--outer-height", "".concat(er.clientHeight, "px"));
        var tr = document.getElementById("control-ui-div");
        document.documentElement.style.setProperty("--inner-height", "".concat(tr.clientHeight, "px"));
        var nr = window.main = new Jo,
            ir = new Lt(nr, "home"),
            or = new Wt(nr, "vehicle"),
            rr = new an(nr, "autonomy"),
            sr = new kn(nr, "contact"),
            ar = new Fn(nr, "about"),
            lr = new Ii(nr, "contentpage"),
            cr = new Si(nr, "careerlist"),
            ur = new Qn(nr, "careeritem"),
            dr = new Ji(nr, "journal"),
            hr = new po(nr, "press"),
            pr = new _o(nr, "error404");
        window.backend && n(70), nr.routes = new c({
            home: ir,
            vehicle: or,
            autonomy: rr,
            contact: sr,
            about: ar,
            journal: dr,
            contentpage: lr,
            press: hr,
            careerlist: cr,
            careeritem: ur,
            error404: pr
        }), window.Emitter = new o.a, window.hasVolume = !0, nr.routes.loadEvents(), nr.render()
    },
    70: function(e, t, n) {
        "use strict";

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function a(e, t) {
            return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function l(e) {
            return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function c(e, t) {
            return (c = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        n.r(t);
        var u = function(e) {
                function t(e, n) {
                    var i;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), (i = a(this, l(t).call(this, Object.assign({
                        method: e.attr("method"),
                        endpoint: e.attr("action")
                    }, n)))).form = e, i.opts = Object.assign(i.opts, {
                        fieldsSelector: ".form-field",
                        fieldHintSelector: ".c-message--error",
                        inputsSelector: "input, select",
                        submitSelector: '[type="submit"]',
                        loadingClass: "is-loading",
                        fieldErrorClass: "error",
                        validationErrorsPath: ["data", "params"]
                    }, n || {}), i.inputs = i.form.find(i.opts.inputsSelector).filter(':not([disabled="disabled"])'), i.fields = i.inputs.parents(i.opts.fieldsSelector), i.submit = i.form.find(i.opts.submitSelector), i.bindEvents(), i
                }
                var n, i, o;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && c(e, t)
                }(t, e), n = t, (i = [{
                    key: "onRequestStart",
                    value: function() {
                        this.doCustomAndMaybeDefault("onRequestStart") && (this.form.find(".c-message").removeClass("is-show"), this.form.addClass(this.opts.loadingClass), this.submit.addClass(this.opts.loadingClass)), this.disableInputs()
                    }
                }, {
                    key: "onRequestStop",
                    value: function() {
                        this.doCustomAndMaybeDefault("onRequestStop") && (this.form.removeClass(this.opts.loadingClass), this.submit.removeClass(this.opts.loadingClass))
                    }
                }, {
                    key: "parseResponse",
                    value: function(e) {
                        if (!e) return e;
                        if ("object" !== r(e)) try {
                            e = JSON.parse(e)
                        } catch (t) {
                            return e
                        }
                        if (e.responseJSON && "object" === r(e.responseJSON)) return e.responseJSON;
                        if (!e.responseText) return e;
                        try {
                            return JSON.parse(e.responseText)
                        } catch (t) {
                            return e.responseText
                        }
                    }
                }, {
                    key: "addServerError",
                    value: function(e) {
                        var t = this.form.find(this.opts.fieldHintSelector);
                        t.length > 0 ? ((t = $(t[t.length - 1])).html("<p>" + e + "</p>"), t.addClass("is-show")) : console.log(e)
                    }
                }, {
                    key: "addValidationErrors",
                    value: function() {
                        if (this.opts.validationErrorsPath) {
                            var e = this.opts.validationErrorsPath,
                                t = {};
                            switch (r(e)) {
                                case "function":
                                    t = e.bind(this)() || {};
                                    break;
                                case "string":
                                    t = this.response[e] || {};
                                    break;
                                default:
                                    Array.isArray(e) && (t = this.response || {}, e.forEach((function(e) {
                                        return t = t[e] || {}
                                    })))
                            }
                            if (0 !== Object.keys(t).length)
                                for (var n in Array.isArray(t) && (t = t.reduce((function(e, t) {
                                        return Object.assign(e, (o = "", (i = t) in (n = {}) ? Object.defineProperty(n, i, {
                                            value: o,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : n[i] = o, n));
                                        var n, i, o
                                    }))), this.form.find(this.opts.fieldHintSelector).html(""), t) {
                                    for (var i = this.form.find('[name="' + n + '"]'), o = i.closest(this.opts.fieldsSelector), s = o.find("label"), a = i.parents(this.opts.fieldsSelector + ", fieldset, form"), l = void 0, c = 0; c < a.length; c++)
                                        if ((l = this.opts.fieldHintSelector && $(a[c]).find(this.opts.fieldHintSelector)).length > 0) {
                                            t.hasOwnProperty(n) && t[n] && (l.addClass("is-show"), s ? l.append($("<p>" + s.text() + " : " + t[n] + "</p>")) : 0 === c ? l.append($("<p>" + t[n] + "</p>")) : o.data("label") ? l.append($("<p>" + o.data("label") + " : " + t[n] + "</p>")) : l.append($("<p>" + t[n] + "</p>")));
                                            break
                                        }
                                    o.addClass(this.opts.fieldErrorClass)
                                }
                        }
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.doCustomAndMaybeDefault("onReset") && (this.removeAllErrors(), this.enableInputs(), this.inputs.blur(), this.fields.removeClass("is-active")), this.form[0].reset()
                    }
                }, {
                    key: "removeAllErrors",
                    value: function() {
                        this.fields.removeClass(this.opts.fieldErrorClass), this.form.find(this.opts.fieldHintSelector).removeClass("is-show")
                    }
                }, {
                    key: "disableInputs",
                    value: function() {
                        this.inputs.attr("disabled", "disabled"), this.submit.attr("disabled", "disabled")
                    }
                }, {
                    key: "enableInputs",
                    value: function() {
                        this.inputs.removeAttr("disabled"), this.submit.removeAttr("disabled")
                    }
                }, {
                    key: "onRequestSuccess",
                    value: function(e) {
                        this.response = this.parseResponse(e), this.onRequestStop(), this.removeAllErrors(), this.onSuccess(), this.reset()
                    }
                }, {
                    key: "onRequestFailure",
                    value: function(e) {
                        this.response = this.parseResponse(e), this.onRequestStop(), this.removeAllErrors(), this.response.data && 500 === this.response.data.status ? this.addServerError(this.response.message) : this.addValidationErrors(), this.enableInputs(), this.onFailure()
                    }
                }, {
                    key: "buildRequest",
                    value: function() {
                        return this.opts.appendFields && this.form.append(this.opts.appendFields), {
                            method: this.opts.method,
                            url: this.opts.endpoint,
                            data: new FormData(this.form.get(0)),
                            processData: !1,
                            contentType: !1
                        }
                    }
                }, {
                    key: "resetInputFieldErrorState",
                    value: function(e) {
                        this.resetFieldErrorState(e.parents(this.opts.fieldsSelector))
                    }
                }, {
                    key: "resetFieldErrorState",
                    value: function(e) {
                        e.removeClass(this.opts.fieldErrorClass)
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var e = this;
                        this.inputs.on("keyup", (function(t) {
                            e.resetInputFieldErrorState($(t.target))
                        })), this.inputs.on("change", (function(t) {
                            e.resetInputFieldErrorState($(t.target))
                        })), this.form.on("submit", (function(t) {
                            t.preventDefault(), e.execute.bind(e)()
                        }))
                    }
                }]) && s(n.prototype, i), o && s(n, o), t
            }(function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.response = null, this.opts = Object.assign({
                        successEvent: "ajax:success",
                        failureEvent: "ajax:failure"
                    }, t || {})
                }
                var t, n, r;
                return t = e, (n = [{
                    key: "optionDefined",
                    value: function(e, t) {
                        return !(!this.opts.hasOwnProperty(e) || t && i(this.opts[e]) !== t)
                    }
                }, {
                    key: "doCustomAndMaybeDefault",
                    value: function(e) {
                        var t = !0;
                        return this.optionDefined(e, "function") && (t = !1 !== this.opts[e].bind(this)()), t
                    }
                }, {
                    key: "onRequestStart",
                    value: function() {
                        this.doCustomAndMaybeDefault("onRequestStart")
                    }
                }, {
                    key: "onRequestStop",
                    value: function() {
                        this.doCustomAndMaybeDefault("onRequestStop")
                    }
                }, {
                    key: "onSuccess",
                    value: function() {
                        this.optionDefined("onSuccess", "function") && this.opts.onSuccess.bind(this)()
                    }
                }, {
                    key: "onFailure",
                    value: function() {
                        this.optionDefined("onFailure", "function") && this.opts.onFailure.bind(this)()
                    }
                }, {
                    key: "checkForTrueSuccess",
                    value: function(e) {
                        return !this.optionDefined("checkForTrueSuccess", "function") || this.opts.checkForTrueSuccess.bind(this)(e)
                    }
                }, {
                    key: "buildRequest",
                    value: function() {
                        return {
                            method: this.opts.method,
                            url: this.opts.endpoint,
                            data: {}
                        }
                    }
                }, {
                    key: "parseResponse",
                    value: function(e) {
                        return e
                    }
                }, {
                    key: "onRequestDone",
                    value: function(e) {
                        this.checkForTrueSuccess(e) ? this.onRequestSuccess(e) : this.onRequestFailure(e)
                    }
                }, {
                    key: "onRequestSuccess",
                    value: function(e) {
                        this.response = this.parseResponse(e), this.onRequestStop(), this.onSuccess()
                    }
                }, {
                    key: "onRequestFailure",
                    value: function(e) {
                        this.response = this.parseResponse(e), this.onRequestStop(), this.onFailure()
                    }
                }, {
                    key: "execute",
                    value: function(e) {
                        var t = this.buildRequest();
                        e && (t.data = e);
                        var n = this.opts.wpRestNonce;
                        if (n) {
                            var i = t.beforeSend;
                            t.beforeSend = i ? function(e) {
                                i(e), e.setRequestHeader("X-WP-Nonce", n)
                            } : function(e) {
                                e.setRequestHeader("X-WP-Nonce", n)
                            }
                        }
                        var o = $.ajax(t);
                        this.onRequestStart(), this.response = null, $.when(o).then(this.onRequestDone.bind(this), this.onRequestFailure.bind(this))
                    }
                }]) && o(t.prototype, n), r && o(t, r), e
            }()),
            d = window.forms.pressInquiry.nonceField,
            h = window.rest_api.nonce,
            p = $("form#press-inquiry");
        p.length && (window.pressInquiry = new u(p, {
            fieldsSelector: ".form__row-element",
            fieldHintSelector: ".form-message--error",
            appendFields: d,
            wpRestNonce: h,
            checkForTrueSuccess: function(e) {
                return e.success
            },
            onRequestStart: function() {
                this.form.find(".form-message--error").last().html(""), this.form.find(".form-message--success").last().html("")
            },
            onSuccess: function() {
                var e = this.response._message;
                e && this.form.find(".form-message--success").html("<p>" + e + "</p>"), this.form.trigger("form:success")
            },
            onFailure: function() {
                var e = this.response._message || this.response.message;
                if (e && (!this.response.data || !this.response.data.params)) {
                    if (this.response.data && this.response.data.input) {
                        var t = this.form.find('[name="' + this.response.data.input + '"]').closest(this.opts.fieldsSelector);
                        e = (t.find("label") ? t.find("label").text() : t.data("label") || this.response.data.input) + " : " + e
                    }
                    this.form.find(".form-message--error").last().html("<p>" + e + "</p>")
                }
            }
        }))
    }
});
