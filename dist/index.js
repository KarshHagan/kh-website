"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // bin/live-reload.js
  var init_live_reload = __esm({
    "bin/live-reload.js"() {
      "use strict";
      new EventSource(`http://localhost:${3e3}/esbuild`).addEventListener(
        "change",
        () => location.reload()
      );
    }
  });

  // node_modules/gsap/gsap-core.js
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var _config, _defaults, _suppressOverwrites, _reverting, _context, _bigNum, _tinyNum, _2PI, _HALF_PI, _gsID, _sqrt, _cos, _sin, _isString, _isFunction, _isNumber, _isUndefined, _isObject, _isNotFalse, _windowExists, _isFuncOrString, _isTypedArray, _isArray, _strictNumExp, _numExp, _numWithUnitExp, _complexStringNumExp, _relExp, _delimitedValueExp, _unitExp, _globalTimeline, _win, _coreInitted, _doc, _globals, _installScope, _coreReady, _install, _missingPlugin, _warn, _addGlobal, _emptyFunc, _startAtRevertConfig, _revertConfigNoKill, _revertConfig, _reservedProps, _lazyTweens, _lazyLookup, _lastRenderedFrame, _plugins, _effects, _nextGCFrame, _harnessPlugins, _callbackNames, _harness, _getCache, _getProperty, _forEachName, _round, _roundPrecise, _parseRelative, _arrayContainsAny, _lazyRender, _lazySafeRender, _numericIfPossible, _passThrough, _setDefaults, _setKeyframeDefaults, _merge, _mergeDeep, _copyExcluding, _inheritDefaults, _arraysMatch, _addLinkedListItem, _removeLinkedListItem, _removeFromParent, _uncache, _recacheAncestors, _rewindStartAt, _hasNoPausedAncestors, _elapsedCycleDuration, _animationCycle, _parentToChildTotalTime, _setEnd, _alignPlayhead, _postAddChecks, _addToTimeline, _scrollTrigger, _attemptInitTween, _parentPlayheadIsBeforeStart, _isFromOrFromStart, _renderZeroDurationTween, _findNextPauseTween, _setDuration, _onUpdateTotalDuration, _zeroPosition, _parsePosition, _createTweenType, _conditionalReturn, _clamp, getUnit, clamp, _slice, _isArrayLike, _flatten, toArray, selector, shuffle, distribute, _roundModifier, snap, random, pipe, unitize, normalize, _wrapArray, wrap, wrapYoyo, _replaceRandom, mapRange, interpolate, _getLabelInDirection, _callback, _interrupt, _quickTween, _createPlugin, _255, _colorLookup, _hue, splitColor, _colorOrderData, _formatColors, _colorExp, _hslExp, _colorStringFilter, _tickerActive, _ticker, _wake, _easeMap, _customEaseExp, _quotesExp, _parseObjectInString, _valueInParentheses, _configEaseFromString, _invertEase, _propagateYoyoEase, _parseEase, _insertEase, _easeInOutFromOut, _configElastic, _configBack, GSCache, Animation, Timeline, _addComplexStringPropTween, _addPropTween, _processVars, _checkPlugin, _overwritingTween, _forceAllPropTweens, _initTween, _updatePropTweens, _addAliasesToVars, _parseKeyframe, _parseFuncOrString, _staggerTweenProps, _staggerPropsToSkip, Tween, _setterPlain, _setterFunc, _setterFuncWithParam, _setterAttribute, _getSetter, _renderPlain, _renderBoolean, _renderComplexString, _renderPropTweens, _addPluginModifier, _killPropTweensOf, _setterWithModifier, _sortPropTweensByPriority, PropTween, _media, _listeners, _emptyArray, _lastMediaTime, _dispatch, _onMediaChange, Context, MatchMedia, _gsap, _getPluginPropTween, _addModifiers, _buildModifierPlugin, gsap, Power0, Power1, Power2, Power3, Power4, Linear, Quad, Cubic, Quart, Quint, Strong, Elastic, Back, SteppedEase, Bounce, Sine, Expo, Circ;
  var init_gsap_core = __esm({
    "node_modules/gsap/gsap-core.js"() {
      init_live_reload();
      _config = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
          lineHeight: ""
        }
      };
      _defaults = {
        duration: 0.5,
        overwrite: false,
        delay: 0
      };
      _bigNum = 1e8;
      _tinyNum = 1 / _bigNum;
      _2PI = Math.PI * 2;
      _HALF_PI = _2PI / 4;
      _gsID = 0;
      _sqrt = Math.sqrt;
      _cos = Math.cos;
      _sin = Math.sin;
      _isString = function _isString2(value) {
        return typeof value === "string";
      };
      _isFunction = function _isFunction2(value) {
        return typeof value === "function";
      };
      _isNumber = function _isNumber2(value) {
        return typeof value === "number";
      };
      _isUndefined = function _isUndefined2(value) {
        return typeof value === "undefined";
      };
      _isObject = function _isObject2(value) {
        return typeof value === "object";
      };
      _isNotFalse = function _isNotFalse2(value) {
        return value !== false;
      };
      _windowExists = function _windowExists2() {
        return typeof window !== "undefined";
      };
      _isFuncOrString = function _isFuncOrString2(value) {
        return _isFunction(value) || _isString(value);
      };
      _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
      };
      _isArray = Array.isArray;
      _strictNumExp = /(?:-?\.?\d|\.)+/gi;
      _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
      _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
      _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
      _relExp = /[+-]=-?[.\d]+/;
      _delimitedValueExp = /[^,'"\[\]\s]+/gi;
      _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
      _globals = {};
      _installScope = {};
      _install = function _install2(scope) {
        return (_installScope = _merge(scope, _globals)) && gsap;
      };
      _missingPlugin = function _missingPlugin2(property, value) {
        return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
      };
      _warn = function _warn2(message, suppress) {
        return !suppress && console.warn(message);
      };
      _addGlobal = function _addGlobal2(name, obj) {
        return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
      };
      _emptyFunc = function _emptyFunc2() {
        return 0;
      };
      _startAtRevertConfig = {
        suppressEvents: true,
        isStart: true,
        kill: false
      };
      _revertConfigNoKill = {
        suppressEvents: true,
        kill: false
      };
      _revertConfig = {
        suppressEvents: true
      };
      _reservedProps = {};
      _lazyTweens = [];
      _lazyLookup = {};
      _plugins = {};
      _effects = {};
      _nextGCFrame = 30;
      _harnessPlugins = [];
      _callbackNames = "";
      _harness = function _harness2(targets) {
        var target = targets[0], harnessPlugin, i;
        _isObject(target) || _isFunction(target) || (targets = [targets]);
        if (!(harnessPlugin = (target._gsap || {}).harness)) {
          i = _harnessPlugins.length;
          while (i-- && !_harnessPlugins[i].targetTest(target)) {
          }
          harnessPlugin = _harnessPlugins[i];
        }
        i = targets.length;
        while (i--) {
          targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
        }
        return targets;
      };
      _getCache = function _getCache2(target) {
        return target._gsap || _harness(toArray(target))[0]._gsap;
      };
      _getProperty = function _getProperty2(target, property, v) {
        return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
      };
      _forEachName = function _forEachName2(names, func) {
        return (names = names.split(",")).forEach(func) || names;
      };
      _round = function _round2(value) {
        return Math.round(value * 1e5) / 1e5 || 0;
      };
      _roundPrecise = function _roundPrecise2(value) {
        return Math.round(value * 1e7) / 1e7 || 0;
      };
      _parseRelative = function _parseRelative2(start, value) {
        var operator = value.charAt(0), end = parseFloat(value.substr(2));
        start = parseFloat(start);
        return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
      };
      _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
        var l = toFind.length, i = 0;
        for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) {
        }
        return i < l;
      };
      _lazyRender = function _lazyRender2() {
        var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
        _lazyLookup = {};
        _lazyTweens.length = 0;
        for (i = 0; i < l; i++) {
          tween = a[i];
          tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
        }
      };
      _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
        _lazyTweens.length && _lazyRender();
        animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
        _lazyTweens.length && _lazyRender();
      };
      _numericIfPossible = function _numericIfPossible2(value) {
        var n = parseFloat(value);
        return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
      };
      _passThrough = function _passThrough2(p) {
        return p;
      };
      _setDefaults = function _setDefaults2(obj, defaults2) {
        for (var p in defaults2) {
          p in obj || (obj[p] = defaults2[p]);
        }
        return obj;
      };
      _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
        return function(obj, defaults2) {
          for (var p in defaults2) {
            p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults2[p]);
          }
        };
      };
      _merge = function _merge2(base, toMerge) {
        for (var p in toMerge) {
          base[p] = toMerge[p];
        }
        return base;
      };
      _mergeDeep = function _mergeDeep2(base, toMerge) {
        for (var p in toMerge) {
          p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
        }
        return base;
      };
      _copyExcluding = function _copyExcluding2(obj, excluding) {
        var copy = {}, p;
        for (p in obj) {
          p in excluding || (copy[p] = obj[p]);
        }
        return copy;
      };
      _inheritDefaults = function _inheritDefaults2(vars) {
        var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
        if (_isNotFalse(vars.inherit)) {
          while (parent) {
            func(vars, parent.vars.defaults);
            parent = parent.parent || parent._dp;
          }
        }
        return vars;
      };
      _arraysMatch = function _arraysMatch2(a1, a2) {
        var i = a1.length, match = i === a2.length;
        while (match && i-- && a1[i] === a2[i]) {
        }
        return i < 0;
      };
      _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
        if (firstProp === void 0) {
          firstProp = "_first";
        }
        if (lastProp === void 0) {
          lastProp = "_last";
        }
        var prev = parent[lastProp], t2;
        if (sortBy) {
          t2 = child[sortBy];
          while (prev && prev[sortBy] > t2) {
            prev = prev._prev;
          }
        }
        if (prev) {
          child._next = prev._next;
          prev._next = child;
        } else {
          child._next = parent[firstProp];
          parent[firstProp] = child;
        }
        if (child._next) {
          child._next._prev = child;
        } else {
          parent[lastProp] = child;
        }
        child._prev = prev;
        child.parent = child._dp = parent;
        return child;
      };
      _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
        if (firstProp === void 0) {
          firstProp = "_first";
        }
        if (lastProp === void 0) {
          lastProp = "_last";
        }
        var prev = child._prev, next = child._next;
        if (prev) {
          prev._next = next;
        } else if (parent[firstProp] === child) {
          parent[firstProp] = next;
        }
        if (next) {
          next._prev = prev;
        } else if (parent[lastProp] === child) {
          parent[lastProp] = prev;
        }
        child._next = child._prev = child.parent = null;
      };
      _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
        child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
        child._act = 0;
      };
      _uncache = function _uncache2(animation, child) {
        if (animation && (!child || child._end > animation._dur || child._start < 0)) {
          var a = animation;
          while (a) {
            a._dirty = 1;
            a = a.parent;
          }
        }
        return animation;
      };
      _recacheAncestors = function _recacheAncestors2(animation) {
        var parent = animation.parent;
        while (parent && parent.parent) {
          parent._dirty = 1;
          parent.totalDuration();
          parent = parent.parent;
        }
        return animation;
      };
      _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
        return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
      };
      _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
        return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
      };
      _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
        return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
      };
      _animationCycle = function _animationCycle2(tTime, cycleDuration) {
        var whole = Math.floor(tTime /= cycleDuration);
        return tTime && whole === tTime ? whole - 1 : whole;
      };
      _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
        return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
      };
      _setEnd = function _setEnd2(animation) {
        return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
      };
      _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
        var parent = animation._dp;
        if (parent && parent.smoothChildTiming && animation._ts) {
          animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
          _setEnd(animation);
          parent._dirty || _uncache(parent, animation);
        }
        return animation;
      };
      _postAddChecks = function _postAddChecks2(timeline2, child) {
        var t2;
        if (child._time || child._initted && !child._dur) {
          t2 = _parentToChildTotalTime(timeline2.rawTime(), child);
          if (!child._dur || _clamp(0, child.totalDuration(), t2) - child._tTime > _tinyNum) {
            child.render(t2, true);
          }
        }
        if (_uncache(timeline2, child)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
          if (timeline2._dur < timeline2.duration()) {
            t2 = timeline2;
            while (t2._dp) {
              t2.rawTime() >= 0 && t2.totalTime(t2._tTime);
              t2 = t2._dp;
            }
          }
          timeline2._zTime = -_tinyNum;
        }
      };
      _addToTimeline = function _addToTimeline2(timeline2, child, position, skipChecks) {
        child.parent && _removeFromParent(child);
        child._start = _roundPrecise((_isNumber(position) ? position : position || timeline2 !== _globalTimeline ? _parsePosition(timeline2, position, child) : timeline2._time) + child._delay);
        child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
        _addLinkedListItem(timeline2, child, "_first", "_last", timeline2._sort ? "_start" : 0);
        _isFromOrFromStart(child) || (timeline2._recent = child);
        skipChecks || _postAddChecks(timeline2, child);
        timeline2._ts < 0 && _alignPlayhead(timeline2, timeline2._tTime);
        return timeline2;
      };
      _scrollTrigger = function _scrollTrigger2(animation, trigger) {
        return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
      };
      _attemptInitTween = function _attemptInitTween2(tween, time, force, suppressEvents, tTime) {
        _initTween(tween, time, tTime);
        if (!tween._initted) {
          return 1;
        }
        if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
          _lazyTweens.push(tween);
          tween._lazy = [tTime, suppressEvents];
          return 1;
        }
      };
      _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
        var parent = _ref.parent;
        return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
      };
      _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
        var data = _ref2.data;
        return data === "isFromStart" || data === "isStart";
      };
      _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
        var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
        if (repeatDelay && tween._repeat) {
          tTime = _clamp(0, tween._tDur, totalTime);
          iteration = _animationCycle(tTime, repeatDelay);
          tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
          if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
            prevRatio = 1 - ratio;
            tween.vars.repeatRefresh && tween._initted && tween.invalidate();
          }
        }
        if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
          if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
            return;
          }
          prevIteration = tween._zTime;
          tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
          suppressEvents || (suppressEvents = totalTime && !prevIteration);
          tween.ratio = ratio;
          tween._from && (ratio = 1 - ratio);
          tween._time = 0;
          tween._tTime = tTime;
          pt = tween._pt;
          while (pt) {
            pt.r(ratio, pt.d);
            pt = pt._next;
          }
          totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
          tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
          tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
          if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
            ratio && _removeFromParent(tween, 1);
            if (!suppressEvents && !_reverting) {
              _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
              tween._prom && tween._prom();
            }
          }
        } else if (!tween._zTime) {
          tween._zTime = totalTime;
        }
      };
      _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
        var child;
        if (time > prevTime) {
          child = animation._first;
          while (child && child._start <= time) {
            if (child.data === "isPause" && child._start > prevTime) {
              return child;
            }
            child = child._next;
          }
        } else {
          child = animation._last;
          while (child && child._start >= time) {
            if (child.data === "isPause" && child._start < prevTime) {
              return child;
            }
            child = child._prev;
          }
        }
      };
      _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
        var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
        totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
        animation._dur = dur;
        animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
        totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
        animation.parent && _setEnd(animation);
        skipUncache || _uncache(animation.parent, animation);
        return animation;
      };
      _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
        return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
      };
      _zeroPosition = {
        _start: 0,
        endTime: _emptyFunc,
        totalDuration: _emptyFunc
      };
      _parsePosition = function _parsePosition2(animation, position, percentAnimation) {
        var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i, offset, isPercent;
        if (_isString(position) && (isNaN(position) || position in labels)) {
          offset = position.charAt(0);
          isPercent = position.substr(-1) === "%";
          i = position.indexOf("=");
          if (offset === "<" || offset === ">") {
            i >= 0 && (position = position.replace(/=/, ""));
            return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
          }
          if (i < 0) {
            position in labels || (labels[position] = clippedDuration);
            return labels[position];
          }
          offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
          if (isPercent && percentAnimation) {
            offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
          }
          return i > 1 ? _parsePosition2(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
        }
        return position == null ? clippedDuration : +position;
      };
      _createTweenType = function _createTweenType2(type, params, timeline2) {
        var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
        isLegacy && (vars.duration = params[1]);
        vars.parent = timeline2;
        if (type) {
          irVars = vars;
          parent = timeline2;
          while (parent && !("immediateRender" in irVars)) {
            irVars = parent.vars.defaults || {};
            parent = _isNotFalse(parent.vars.inherit) && parent.parent;
          }
          vars.immediateRender = _isNotFalse(irVars.immediateRender);
          type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
        }
        return new Tween(params[0], vars, params[varsIndex + 1]);
      };
      _conditionalReturn = function _conditionalReturn2(value, func) {
        return value || value === 0 ? func(value) : func;
      };
      _clamp = function _clamp2(min, max, value) {
        return value < min ? min : value > max ? max : value;
      };
      getUnit = function getUnit2(value, v) {
        return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
      };
      clamp = function clamp2(min, max, value) {
        return _conditionalReturn(value, function(v) {
          return _clamp(min, max, v);
        });
      };
      _slice = [].slice;
      _isArrayLike = function _isArrayLike2(value, nonEmpty) {
        return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
      };
      _flatten = function _flatten2(ar, leaveStrings, accumulator) {
        if (accumulator === void 0) {
          accumulator = [];
        }
        return ar.forEach(function(value) {
          var _accumulator;
          return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
        }) || accumulator;
      };
      toArray = function toArray2(value, scope, leaveStrings) {
        return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
      };
      selector = function selector2(value) {
        value = toArray(value)[0] || _warn("Invalid scope") || {};
        return function(v) {
          var el = value.current || value.nativeElement || value;
          return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
        };
      };
      shuffle = function shuffle2(a) {
        return a.sort(function() {
          return 0.5 - Math.random();
        });
      };
      distribute = function distribute2(v) {
        if (_isFunction(v)) {
          return v;
        }
        var vars = _isObject(v) ? v : {
          each: v
        }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
        if (_isString(from)) {
          ratioX = ratioY = {
            center: 0.5,
            edges: 0.5,
            end: 1
          }[from] || 0;
        } else if (!isDecimal && ratios) {
          ratioX = from[0];
          ratioY = from[1];
        }
        return function(i, target, a) {
          var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
          if (!distances) {
            wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
            if (!wrapAt) {
              max = -_bigNum;
              while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {
              }
              wrapAt--;
            }
            distances = cache[l] = [];
            originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
            originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
            max = 0;
            min = _bigNum;
            for (j = 0; j < l; j++) {
              x = j % wrapAt - originX;
              y = originY - (j / wrapAt | 0);
              distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
              d > max && (max = d);
              d < min && (min = d);
            }
            from === "random" && shuffle(distances);
            distances.max = max - min;
            distances.min = min;
            distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
            distances.b = l < 0 ? base - l : base;
            distances.u = getUnit(vars.amount || vars.each) || 0;
            ease = ease && l < 0 ? _invertEase(ease) : ease;
          }
          l = (distances[i] - distances.min) / distances.max || 0;
          return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
        };
      };
      _roundModifier = function _roundModifier2(v) {
        var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
        return function(raw) {
          var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
          return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
        };
      };
      snap = function snap2(snapTo, value) {
        var isArray = _isArray(snapTo), radius, is2D;
        if (!isArray && _isObject(snapTo)) {
          radius = isArray = snapTo.radius || _bigNum;
          if (snapTo.values) {
            snapTo = toArray(snapTo.values);
            if (is2D = !_isNumber(snapTo[0])) {
              radius *= radius;
            }
          } else {
            snapTo = _roundModifier(snapTo.increment);
          }
        }
        return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
          is2D = snapTo(raw);
          return Math.abs(is2D - raw) <= radius ? is2D : raw;
        } : function(raw) {
          var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
          while (i--) {
            if (is2D) {
              dx = snapTo[i].x - x;
              dy = snapTo[i].y - y;
              dx = dx * dx + dy * dy;
            } else {
              dx = Math.abs(snapTo[i] - x);
            }
            if (dx < min) {
              min = dx;
              closest = i;
            }
          }
          closest = !radius || min <= radius ? snapTo[closest] : raw;
          return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
        });
      };
      random = function random2(min, max, roundingIncrement, returnFunction) {
        return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
          return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
        });
      };
      pipe = function pipe2() {
        for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
          functions[_key] = arguments[_key];
        }
        return function(value) {
          return functions.reduce(function(v, f) {
            return f(v);
          }, value);
        };
      };
      unitize = function unitize2(func, unit) {
        return function(value) {
          return func(parseFloat(value)) + (unit || getUnit(value));
        };
      };
      normalize = function normalize2(min, max, value) {
        return mapRange(min, max, 0, 1, value);
      };
      _wrapArray = function _wrapArray2(a, wrapper, value) {
        return _conditionalReturn(value, function(index) {
          return a[~~wrapper(index)];
        });
      };
      wrap = function wrap2(min, max, value) {
        var range = max - min;
        return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
          return (range + (value2 - min) % range) % range + min;
        });
      };
      wrapYoyo = function wrapYoyo2(min, max, value) {
        var range = max - min, total = range * 2;
        return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
          value2 = (total + (value2 - min) % total) % total || 0;
          return min + (value2 > range ? total - value2 : value2);
        });
      };
      _replaceRandom = function _replaceRandom2(value) {
        var prev = 0, s = "", i, nums, end, isArray;
        while (~(i = value.indexOf("random(", prev))) {
          end = value.indexOf(")", i);
          isArray = value.charAt(i + 7) === "[";
          nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
          s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
          prev = end + 1;
        }
        return s + value.substr(prev, value.length - prev);
      };
      mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
        var inRange = inMax - inMin, outRange = outMax - outMin;
        return _conditionalReturn(value, function(value2) {
          return outMin + ((value2 - inMin) / inRange * outRange || 0);
        });
      };
      interpolate = function interpolate2(start, end, progress, mutate) {
        var func = isNaN(start + end) ? 0 : function(p2) {
          return (1 - p2) * start + p2 * end;
        };
        if (!func) {
          var isString = _isString(start), master = {}, p, i, interpolators, l, il;
          progress === true && (mutate = 1) && (progress = null);
          if (isString) {
            start = {
              p: start
            };
            end = {
              p: end
            };
          } else if (_isArray(start) && !_isArray(end)) {
            interpolators = [];
            l = start.length;
            il = l - 2;
            for (i = 1; i < l; i++) {
              interpolators.push(interpolate2(start[i - 1], start[i]));
            }
            l--;
            func = function func2(p2) {
              p2 *= l;
              var i2 = Math.min(il, ~~p2);
              return interpolators[i2](p2 - i2);
            };
            progress = end;
          } else if (!mutate) {
            start = _merge(_isArray(start) ? [] : {}, start);
          }
          if (!interpolators) {
            for (p in end) {
              _addPropTween.call(master, start, p, "get", end[p]);
            }
            func = function func2(p2) {
              return _renderPropTweens(p2, master) || (isString ? start.p : start);
            };
          }
        }
        return _conditionalReturn(progress, func);
      };
      _getLabelInDirection = function _getLabelInDirection2(timeline2, fromTime, backward) {
        var labels = timeline2.labels, min = _bigNum, p, distance, label;
        for (p in labels) {
          distance = labels[p] - fromTime;
          if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
            label = p;
            min = distance;
          }
        }
        return label;
      };
      _callback = function _callback2(animation, type, executeLazyFirst) {
        var v = animation.vars, callback = v[type], prevContext = _context, context3 = animation._ctx, params, scope, result;
        if (!callback) {
          return;
        }
        params = v[type + "Params"];
        scope = v.callbackScope || animation;
        executeLazyFirst && _lazyTweens.length && _lazyRender();
        context3 && (_context = context3);
        result = params ? callback.apply(scope, params) : callback.call(scope);
        _context = prevContext;
        return result;
      };
      _interrupt = function _interrupt2(animation) {
        _removeFromParent(animation);
        animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
        animation.progress() < 1 && _callback(animation, "onInterrupt");
        return animation;
      };
      _createPlugin = function _createPlugin2(config3) {
        config3 = !config3.name && config3["default"] || config3;
        var name = config3.name, isFunc = _isFunction(config3), Plugin = name && !isFunc && config3.init ? function() {
          this._props = [];
        } : config3, instanceDefaults = {
          init: _emptyFunc,
          render: _renderPropTweens,
          add: _addPropTween,
          kill: _killPropTweensOf,
          modifier: _addPluginModifier,
          rawVars: 0
        }, statics = {
          targetTest: 0,
          get: 0,
          getSetter: _getSetter,
          aliases: {},
          register: 0
        };
        _wake();
        if (config3 !== Plugin) {
          if (_plugins[name]) {
            return;
          }
          _setDefaults(Plugin, _setDefaults(_copyExcluding(config3, instanceDefaults), statics));
          _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config3, statics)));
          _plugins[Plugin.prop = name] = Plugin;
          if (config3.targetTest) {
            _harnessPlugins.push(Plugin);
            _reservedProps[name] = 1;
          }
          name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
        }
        _addGlobal(name, Plugin);
        config3.register && config3.register(gsap, Plugin, PropTween);
      };
      _255 = 255;
      _colorLookup = {
        aqua: [0, _255, _255],
        lime: [0, _255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, _255],
        navy: [0, 0, 128],
        white: [_255, _255, _255],
        olive: [128, 128, 0],
        yellow: [_255, _255, 0],
        orange: [_255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [_255, 0, 0],
        pink: [_255, 192, 203],
        cyan: [0, _255, _255],
        transparent: [_255, _255, _255, 0]
      };
      _hue = function _hue2(h, m1, m2) {
        h += h < 0 ? 1 : h > 1 ? -1 : 0;
        return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
      };
      splitColor = function splitColor2(v, toHSL, forceAlpha) {
        var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
        if (!a) {
          if (v.substr(-1) === ",") {
            v = v.substr(0, v.length - 1);
          }
          if (_colorLookup[v]) {
            a = _colorLookup[v];
          } else if (v.charAt(0) === "#") {
            if (v.length < 6) {
              r = v.charAt(1);
              g = v.charAt(2);
              b = v.charAt(3);
              v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
            }
            if (v.length === 9) {
              a = parseInt(v.substr(1, 6), 16);
              return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
            }
            v = parseInt(v.substr(1), 16);
            a = [v >> 16, v >> 8 & _255, v & _255];
          } else if (v.substr(0, 3) === "hsl") {
            a = wasHSL = v.match(_strictNumExp);
            if (!toHSL) {
              h = +a[0] % 360 / 360;
              s = +a[1] / 100;
              l = +a[2] / 100;
              g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
              r = l * 2 - g;
              a.length > 3 && (a[3] *= 1);
              a[0] = _hue(h + 1 / 3, r, g);
              a[1] = _hue(h, r, g);
              a[2] = _hue(h - 1 / 3, r, g);
            } else if (~v.indexOf("=")) {
              a = v.match(_numExp);
              forceAlpha && a.length < 4 && (a[3] = 1);
              return a;
            }
          } else {
            a = v.match(_strictNumExp) || _colorLookup.transparent;
          }
          a = a.map(Number);
        }
        if (toHSL && !wasHSL) {
          r = a[0] / _255;
          g = a[1] / _255;
          b = a[2] / _255;
          max = Math.max(r, g, b);
          min = Math.min(r, g, b);
          l = (max + min) / 2;
          if (max === min) {
            h = s = 0;
          } else {
            d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
            h *= 60;
          }
          a[0] = ~~(h + 0.5);
          a[1] = ~~(s * 100 + 0.5);
          a[2] = ~~(l * 100 + 0.5);
        }
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      };
      _colorOrderData = function _colorOrderData2(v) {
        var values = [], c = [], i = -1;
        v.split(_colorExp).forEach(function(v2) {
          var a = v2.match(_numWithUnitExp) || [];
          values.push.apply(values, a);
          c.push(i += a.length + 1);
        });
        values.c = c;
        return values;
      };
      _formatColors = function _formatColors2(s, toHSL, orderMatchData) {
        var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
        if (!colors) {
          return s;
        }
        colors = colors.map(function(color) {
          return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
        });
        if (orderMatchData) {
          d = _colorOrderData(s);
          c = orderMatchData.c;
          if (c.join(result) !== d.c.join(result)) {
            shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
            l = shell.length - 1;
            for (; i < l; i++) {
              result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
            }
          }
        }
        if (!shell) {
          shell = s.split(_colorExp);
          l = shell.length - 1;
          for (; i < l; i++) {
            result += shell[i] + colors[i];
          }
        }
        return result + shell[l];
      };
      _colorExp = function() {
        var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
        for (p in _colorLookup) {
          s += "|" + p + "\\b";
        }
        return new RegExp(s + ")", "gi");
      }();
      _hslExp = /hsl[a]?\(/;
      _colorStringFilter = function _colorStringFilter2(a) {
        var combined = a.join(" "), toHSL;
        _colorExp.lastIndex = 0;
        if (_colorExp.test(combined)) {
          toHSL = _hslExp.test(combined);
          a[1] = _formatColors(a[1], toHSL);
          a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
          return true;
        }
      };
      _ticker = function() {
        var _getTime4 = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime4(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners3 = [], _id, _req, _raf, _self, _delta, _i2, _tick = function _tick2(v) {
          var elapsed = _getTime4() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
          elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
          _lastUpdate += elapsed;
          time = _lastUpdate - _startTime;
          overlap = time - _nextTime;
          if (overlap > 0 || manual) {
            frame = ++_self.frame;
            _delta = time - _self.time * 1e3;
            _self.time = time = time / 1e3;
            _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
            dispatch = 1;
          }
          manual || (_id = _req(_tick2));
          if (dispatch) {
            for (_i2 = 0; _i2 < _listeners3.length; _i2++) {
              _listeners3[_i2](time, _delta, frame, v);
            }
          }
        };
        _self = {
          time: 0,
          frame: 0,
          tick: function tick() {
            _tick(true);
          },
          deltaRatio: function deltaRatio(fps) {
            return _delta / (1e3 / (fps || 60));
          },
          wake: function wake() {
            if (_coreReady) {
              if (!_coreInitted && _windowExists()) {
                _win = _coreInitted = window;
                _doc = _win.document || {};
                _globals.gsap = gsap;
                (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
                _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
                _raf = _win.requestAnimationFrame;
              }
              _id && _self.sleep();
              _req = _raf || function(f) {
                return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
              };
              _tickerActive = 1;
              _tick(2);
            }
          },
          sleep: function sleep() {
            (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
            _tickerActive = 0;
            _req = _emptyFunc;
          },
          lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
            _lagThreshold = threshold || 1 / _tinyNum;
            _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
          },
          fps: function fps(_fps) {
            _gap = 1e3 / (_fps || 240);
            _nextTime = _self.time * 1e3 + _gap;
          },
          add: function add(callback, once, prioritize) {
            var func = once ? function(t2, d, f, v) {
              callback(t2, d, f, v);
              _self.remove(func);
            } : callback;
            _self.remove(callback);
            _listeners3[prioritize ? "unshift" : "push"](func);
            _wake();
            return func;
          },
          remove: function remove(callback, i) {
            ~(i = _listeners3.indexOf(callback)) && _listeners3.splice(i, 1) && _i2 >= i && _i2--;
          },
          _listeners: _listeners3
        };
        return _self;
      }();
      _wake = function _wake2() {
        return !_tickerActive && _ticker.wake();
      };
      _easeMap = {};
      _customEaseExp = /^[\d.\-M][\d.\-,\s]/;
      _quotesExp = /["']/g;
      _parseObjectInString = function _parseObjectInString2(value) {
        var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
        for (; i < l; i++) {
          val = split[i];
          index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
          parsedVal = val.substr(0, index);
          obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
          key = val.substr(index + 1).trim();
        }
        return obj;
      };
      _valueInParentheses = function _valueInParentheses2(value) {
        var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
        return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
      };
      _configEaseFromString = function _configEaseFromString2(name) {
        var split = (name + "").split("("), ease = _easeMap[split[0]];
        return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
      };
      _invertEase = function _invertEase2(ease) {
        return function(p) {
          return 1 - ease(1 - p);
        };
      };
      _propagateYoyoEase = function _propagateYoyoEase2(timeline2, isYoyo) {
        var child = timeline2._first, ease;
        while (child) {
          if (child instanceof Timeline) {
            _propagateYoyoEase2(child, isYoyo);
          } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
            if (child.timeline) {
              _propagateYoyoEase2(child.timeline, isYoyo);
            } else {
              ease = child._ease;
              child._ease = child._yEase;
              child._yEase = ease;
              child._yoyo = isYoyo;
            }
          }
          child = child._next;
        }
      };
      _parseEase = function _parseEase2(ease, defaultEase) {
        return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
      };
      _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
        if (easeOut === void 0) {
          easeOut = function easeOut2(p) {
            return 1 - easeIn(1 - p);
          };
        }
        if (easeInOut === void 0) {
          easeInOut = function easeInOut2(p) {
            return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
          };
        }
        var ease = {
          easeIn,
          easeOut,
          easeInOut
        }, lowercaseName;
        _forEachName(names, function(name) {
          _easeMap[name] = _globals[name] = ease;
          _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
          for (var p in ease) {
            _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
          }
        });
        return ease;
      };
      _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
        return function(p) {
          return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
        };
      };
      _configElastic = function _configElastic2(type, amplitude, period) {
        var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p) {
          return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
        }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
          return 1 - easeOut(1 - p);
        } : _easeInOutFromOut(easeOut);
        p2 = _2PI / p2;
        ease.config = function(amplitude2, period2) {
          return _configElastic2(type, amplitude2, period2);
        };
        return ease;
      };
      _configBack = function _configBack2(type, overshoot) {
        if (overshoot === void 0) {
          overshoot = 1.70158;
        }
        var easeOut = function easeOut2(p) {
          return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
        }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
          return 1 - easeOut(1 - p);
        } : _easeInOutFromOut(easeOut);
        ease.config = function(overshoot2) {
          return _configBack2(type, overshoot2);
        };
        return ease;
      };
      _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
        var power = i < 5 ? i + 1 : i;
        _insertEase(name + ",Power" + (power - 1), i ? function(p) {
          return Math.pow(p, power);
        } : function(p) {
          return p;
        }, function(p) {
          return 1 - Math.pow(1 - p, power);
        }, function(p) {
          return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
        });
      });
      _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
      _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
      (function(n, c) {
        var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p) {
          return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
        };
        _insertEase("Bounce", function(p) {
          return 1 - easeOut(1 - p);
        }, easeOut);
      })(7.5625, 2.75);
      _insertEase("Expo", function(p) {
        return p ? Math.pow(2, 10 * (p - 1)) : 0;
      });
      _insertEase("Circ", function(p) {
        return -(_sqrt(1 - p * p) - 1);
      });
      _insertEase("Sine", function(p) {
        return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
      });
      _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
      _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
        config: function config(steps, immediateStart) {
          if (steps === void 0) {
            steps = 1;
          }
          var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
          return function(p) {
            return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
          };
        }
      };
      _defaults.ease = _easeMap["quad.out"];
      _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
        return _callbackNames += name + "," + name + "Params,";
      });
      GSCache = function GSCache2(target, harness) {
        this.id = _gsID++;
        target._gsap = this;
        this.target = target;
        this.harness = harness;
        this.get = harness ? harness.get : _getProperty;
        this.set = harness ? harness.getSetter : _getSetter;
      };
      Animation = /* @__PURE__ */ function() {
        function Animation2(vars) {
          this.vars = vars;
          this._delay = +vars.delay || 0;
          if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
            this._rDelay = vars.repeatDelay || 0;
            this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
          }
          this._ts = 1;
          _setDuration(this, +vars.duration, 1, 1);
          this.data = vars.data;
          if (_context) {
            this._ctx = _context;
            _context.data.push(this);
          }
          _tickerActive || _ticker.wake();
        }
        var _proto = Animation2.prototype;
        _proto.delay = function delay(value) {
          if (value || value === 0) {
            this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
            this._delay = value;
            return this;
          }
          return this._delay;
        };
        _proto.duration = function duration(value) {
          return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
        };
        _proto.totalDuration = function totalDuration(value) {
          if (!arguments.length) {
            return this._tDur;
          }
          this._dirty = 0;
          return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
        };
        _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
          _wake();
          if (!arguments.length) {
            return this._tTime;
          }
          var parent = this._dp;
          if (parent && parent.smoothChildTiming && this._ts) {
            _alignPlayhead(this, _totalTime);
            !parent._dp || parent.parent || _postAddChecks(parent, this);
            while (parent && parent.parent) {
              if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
                parent.totalTime(parent._tTime, true);
              }
              parent = parent.parent;
            }
            if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
              _addToTimeline(this._dp, this, this._start - this._delay);
            }
          }
          if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
            this._ts || (this._pTime = _totalTime);
            _lazySafeRender(this, _totalTime, suppressEvents);
          }
          return this;
        };
        _proto.time = function time(value, suppressEvents) {
          return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
        };
        _proto.totalProgress = function totalProgress(value, suppressEvents) {
          return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
        };
        _proto.progress = function progress(value, suppressEvents) {
          return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
        };
        _proto.iteration = function iteration(value, suppressEvents) {
          var cycleDuration = this.duration() + this._rDelay;
          return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
        };
        _proto.timeScale = function timeScale(value) {
          if (!arguments.length) {
            return this._rts === -_tinyNum ? 0 : this._rts;
          }
          if (this._rts === value) {
            return this;
          }
          var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
          this._rts = +value || 0;
          this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
          this.totalTime(_clamp(-this._delay, this._tDur, tTime), true);
          _setEnd(this);
          return _recacheAncestors(this);
        };
        _proto.paused = function paused(value) {
          if (!arguments.length) {
            return this._ps;
          }
          if (this._ps !== value) {
            this._ps = value;
            if (value) {
              this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
              this._ts = this._act = 0;
            } else {
              _wake();
              this._ts = this._rts;
              this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
            }
          }
          return this;
        };
        _proto.startTime = function startTime(value) {
          if (arguments.length) {
            this._start = value;
            var parent = this.parent || this._dp;
            parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
            return this;
          }
          return this._start;
        };
        _proto.endTime = function endTime(includeRepeats) {
          return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
        };
        _proto.rawTime = function rawTime(wrapRepeats) {
          var parent = this.parent || this._dp;
          return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
        };
        _proto.revert = function revert(config3) {
          if (config3 === void 0) {
            config3 = _revertConfig;
          }
          var prevIsReverting = _reverting;
          _reverting = config3;
          if (this._initted || this._startAt) {
            this.timeline && this.timeline.revert(config3);
            this.totalTime(-0.01, config3.suppressEvents);
          }
          this.data !== "nested" && config3.kill !== false && this.kill();
          _reverting = prevIsReverting;
          return this;
        };
        _proto.globalTime = function globalTime(rawTime) {
          var animation = this, time = arguments.length ? rawTime : animation.rawTime();
          while (animation) {
            time = animation._start + time / (animation._ts || 1);
            animation = animation._dp;
          }
          return !this.parent && this.vars.immediateRender ? -1 : time;
        };
        _proto.repeat = function repeat(value) {
          if (arguments.length) {
            this._repeat = value === Infinity ? -2 : value;
            return _onUpdateTotalDuration(this);
          }
          return this._repeat === -2 ? Infinity : this._repeat;
        };
        _proto.repeatDelay = function repeatDelay(value) {
          if (arguments.length) {
            var time = this._time;
            this._rDelay = value;
            _onUpdateTotalDuration(this);
            return time ? this.time(time) : this;
          }
          return this._rDelay;
        };
        _proto.yoyo = function yoyo(value) {
          if (arguments.length) {
            this._yoyo = value;
            return this;
          }
          return this._yoyo;
        };
        _proto.seek = function seek(position, suppressEvents) {
          return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
        };
        _proto.restart = function restart(includeDelay, suppressEvents) {
          return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
        };
        _proto.play = function play(from, suppressEvents) {
          from != null && this.seek(from, suppressEvents);
          return this.reversed(false).paused(false);
        };
        _proto.reverse = function reverse(from, suppressEvents) {
          from != null && this.seek(from || this.totalDuration(), suppressEvents);
          return this.reversed(true).paused(false);
        };
        _proto.pause = function pause(atTime, suppressEvents) {
          atTime != null && this.seek(atTime, suppressEvents);
          return this.paused(true);
        };
        _proto.resume = function resume() {
          return this.paused(false);
        };
        _proto.reversed = function reversed(value) {
          if (arguments.length) {
            !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
            return this;
          }
          return this._rts < 0;
        };
        _proto.invalidate = function invalidate() {
          this._initted = this._act = 0;
          this._zTime = -_tinyNum;
          return this;
        };
        _proto.isActive = function isActive() {
          var parent = this.parent || this._dp, start = this._start, rawTime;
          return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
        };
        _proto.eventCallback = function eventCallback(type, callback, params) {
          var vars = this.vars;
          if (arguments.length > 1) {
            if (!callback) {
              delete vars[type];
            } else {
              vars[type] = callback;
              params && (vars[type + "Params"] = params);
              type === "onUpdate" && (this._onUpdate = callback);
            }
            return this;
          }
          return vars[type];
        };
        _proto.then = function then(onFulfilled) {
          var self = this;
          return new Promise(function(resolve) {
            var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
              var _then = self.then;
              self.then = null;
              _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
              resolve(f);
              self.then = _then;
            };
            if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
              _resolve();
            } else {
              self._prom = _resolve;
            }
          });
        };
        _proto.kill = function kill3() {
          _interrupt(this);
        };
        return Animation2;
      }();
      _setDefaults(Animation.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: false,
        parent: null,
        _initted: false,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -_tinyNum,
        _prom: 0,
        _ps: false,
        _rts: 1
      });
      Timeline = /* @__PURE__ */ function(_Animation) {
        _inheritsLoose(Timeline2, _Animation);
        function Timeline2(vars, position) {
          var _this;
          if (vars === void 0) {
            vars = {};
          }
          _this = _Animation.call(this, vars) || this;
          _this.labels = {};
          _this.smoothChildTiming = !!vars.smoothChildTiming;
          _this.autoRemoveChildren = !!vars.autoRemoveChildren;
          _this._sort = _isNotFalse(vars.sortChildren);
          _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
          vars.reversed && _this.reverse();
          vars.paused && _this.paused(true);
          vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
          return _this;
        }
        var _proto2 = Timeline2.prototype;
        _proto2.to = function to(targets, vars, position) {
          _createTweenType(0, arguments, this);
          return this;
        };
        _proto2.from = function from(targets, vars, position) {
          _createTweenType(1, arguments, this);
          return this;
        };
        _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
          _createTweenType(2, arguments, this);
          return this;
        };
        _proto2.set = function set(targets, vars, position) {
          vars.duration = 0;
          vars.parent = this;
          _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
          vars.immediateRender = !!vars.immediateRender;
          new Tween(targets, vars, _parsePosition(this, position), 1);
          return this;
        };
        _proto2.call = function call(callback, params, position) {
          return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
        };
        _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
          vars.duration = duration;
          vars.stagger = vars.stagger || stagger;
          vars.onComplete = onCompleteAll;
          vars.onCompleteParams = onCompleteAllParams;
          vars.parent = this;
          new Tween(targets, vars, _parsePosition(this, position));
          return this;
        };
        _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
          vars.runBackwards = 1;
          _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
          return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
        };
        _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
          toVars.startAt = fromVars;
          _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
          return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
        };
        _proto2.render = function render6(totalTime, suppressEvents, force) {
          var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
          this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
          if (tTime !== this._tTime || force || crossingStart) {
            if (prevTime !== this._time && dur) {
              tTime += this._time - prevTime;
              totalTime += this._time - prevTime;
            }
            time = tTime;
            prevStart = this._start;
            timeScale = this._ts;
            prevPaused = !timeScale;
            if (crossingStart) {
              dur || (prevTime = this._zTime);
              (totalTime || !suppressEvents) && (this._zTime = totalTime);
            }
            if (this._repeat) {
              yoyo = this._yoyo;
              cycleDuration = dur + this._rDelay;
              if (this._repeat < -1 && totalTime < 0) {
                return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
              }
              time = _roundPrecise(tTime % cycleDuration);
              if (tTime === tDur) {
                iteration = this._repeat;
                time = dur;
              } else {
                iteration = ~~(tTime / cycleDuration);
                if (iteration && iteration === tTime / cycleDuration) {
                  time = dur;
                  iteration--;
                }
                time > dur && (time = dur);
              }
              prevIteration = _animationCycle(this._tTime, cycleDuration);
              !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration);
              if (yoyo && iteration & 1) {
                time = dur - time;
                isYoyo = 1;
              }
              if (iteration !== prevIteration && !this._lock) {
                var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
                iteration < prevIteration && (rewinding = !rewinding);
                prevTime = rewinding ? 0 : dur;
                this._lock = 1;
                this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                this._tTime = tTime;
                !suppressEvents && this.parent && _callback(this, "onRepeat");
                this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
                if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
                  return this;
                }
                dur = this._dur;
                tDur = this._tDur;
                if (doesWrap) {
                  this._lock = 2;
                  prevTime = rewinding ? dur : -1e-4;
                  this.render(prevTime, true);
                  this.vars.repeatRefresh && !isYoyo && this.invalidate();
                }
                this._lock = 0;
                if (!this._ts && !prevPaused) {
                  return this;
                }
                _propagateYoyoEase(this, isYoyo);
              }
            }
            if (this._hasPause && !this._forcing && this._lock < 2) {
              pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
              if (pauseTween) {
                tTime -= time - (time = pauseTween._start);
              }
            }
            this._tTime = tTime;
            this._time = time;
            this._act = !timeScale;
            if (!this._initted) {
              this._onUpdate = this.vars.onUpdate;
              this._initted = 1;
              this._zTime = totalTime;
              prevTime = 0;
            }
            if (!prevTime && time && !suppressEvents) {
              _callback(this, "onStart");
              if (this._tTime !== tTime) {
                return this;
              }
            }
            if (time >= prevTime && totalTime >= 0) {
              child = this._first;
              while (child) {
                next = child._next;
                if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                  if (child.parent !== this) {
                    return this.render(totalTime, suppressEvents, force);
                  }
                  child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
                  if (time !== this._time || !this._ts && !prevPaused) {
                    pauseTween = 0;
                    next && (tTime += this._zTime = -_tinyNum);
                    break;
                  }
                }
                child = next;
              }
            } else {
              child = this._last;
              var adjustedTime = totalTime < 0 ? totalTime : time;
              while (child) {
                next = child._prev;
                if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                  if (child.parent !== this) {
                    return this.render(totalTime, suppressEvents, force);
                  }
                  child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt));
                  if (time !== this._time || !this._ts && !prevPaused) {
                    pauseTween = 0;
                    next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                    break;
                  }
                }
                child = next;
              }
            }
            if (pauseTween && !suppressEvents) {
              this.pause();
              pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
              if (this._ts) {
                this._start = prevStart;
                _setEnd(this);
                return this.render(totalTime, suppressEvents, force);
              }
            }
            this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
            if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
              if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
                if (!this._lock) {
                  (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                  if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                    _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                    this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                  }
                }
              }
            }
          }
          return this;
        };
        _proto2.add = function add(child, position) {
          var _this2 = this;
          _isNumber(position) || (position = _parsePosition(this, position, child));
          if (!(child instanceof Animation)) {
            if (_isArray(child)) {
              child.forEach(function(obj) {
                return _this2.add(obj, position);
              });
              return this;
            }
            if (_isString(child)) {
              return this.addLabel(child, position);
            }
            if (_isFunction(child)) {
              child = Tween.delayedCall(0, child);
            } else {
              return this;
            }
          }
          return this !== child ? _addToTimeline(this, child, position) : this;
        };
        _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
          if (nested === void 0) {
            nested = true;
          }
          if (tweens === void 0) {
            tweens = true;
          }
          if (timelines === void 0) {
            timelines = true;
          }
          if (ignoreBeforeTime === void 0) {
            ignoreBeforeTime = -_bigNum;
          }
          var a = [], child = this._first;
          while (child) {
            if (child._start >= ignoreBeforeTime) {
              if (child instanceof Tween) {
                tweens && a.push(child);
              } else {
                timelines && a.push(child);
                nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
              }
            }
            child = child._next;
          }
          return a;
        };
        _proto2.getById = function getById2(id) {
          var animations = this.getChildren(1, 1, 1), i = animations.length;
          while (i--) {
            if (animations[i].vars.id === id) {
              return animations[i];
            }
          }
        };
        _proto2.remove = function remove(child) {
          if (_isString(child)) {
            return this.removeLabel(child);
          }
          if (_isFunction(child)) {
            return this.killTweensOf(child);
          }
          _removeLinkedListItem(this, child);
          if (child === this._recent) {
            this._recent = this._last;
          }
          return _uncache(this);
        };
        _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
          if (!arguments.length) {
            return this._tTime;
          }
          this._forcing = 1;
          if (!this._dp && this._ts) {
            this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
          }
          _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
          this._forcing = 0;
          return this;
        };
        _proto2.addLabel = function addLabel(label, position) {
          this.labels[label] = _parsePosition(this, position);
          return this;
        };
        _proto2.removeLabel = function removeLabel(label) {
          delete this.labels[label];
          return this;
        };
        _proto2.addPause = function addPause(position, callback, params) {
          var t2 = Tween.delayedCall(0, callback || _emptyFunc, params);
          t2.data = "isPause";
          this._hasPause = 1;
          return _addToTimeline(this, t2, _parsePosition(this, position));
        };
        _proto2.removePause = function removePause(position) {
          var child = this._first;
          position = _parsePosition(this, position);
          while (child) {
            if (child._start === position && child.data === "isPause") {
              _removeFromParent(child);
            }
            child = child._next;
          }
        };
        _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
          var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
          while (i--) {
            _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
          }
          return this;
        };
        _proto2.getTweensOf = function getTweensOf2(targets, onlyActive) {
          var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
          while (child) {
            if (child instanceof Tween) {
              if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
                a.push(child);
              }
            } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
              a.push.apply(a, children);
            }
            child = child._next;
          }
          return a;
        };
        _proto2.tweenTo = function tweenTo(position, vars) {
          vars = vars || {};
          var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
            ease: vars.ease || "none",
            lazy: false,
            immediateRender: false,
            time: endTime,
            overwrite: "auto",
            duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
            onStart: function onStart() {
              tl.pause();
              if (!initted) {
                var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
                tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                initted = 1;
              }
              _onStart && _onStart.apply(tween, onStartParams || []);
            }
          }, vars));
          return immediateRender ? tween.render(0) : tween;
        };
        _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
          return this.tweenTo(toPosition, _setDefaults({
            startAt: {
              time: _parsePosition(this, fromPosition)
            }
          }, vars));
        };
        _proto2.recent = function recent() {
          return this._recent;
        };
        _proto2.nextLabel = function nextLabel(afterTime) {
          if (afterTime === void 0) {
            afterTime = this._time;
          }
          return _getLabelInDirection(this, _parsePosition(this, afterTime));
        };
        _proto2.previousLabel = function previousLabel(beforeTime) {
          if (beforeTime === void 0) {
            beforeTime = this._time;
          }
          return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
        };
        _proto2.currentLabel = function currentLabel(value) {
          return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
        };
        _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
          if (ignoreBeforeTime === void 0) {
            ignoreBeforeTime = 0;
          }
          var child = this._first, labels = this.labels, p;
          while (child) {
            if (child._start >= ignoreBeforeTime) {
              child._start += amount;
              child._end += amount;
            }
            child = child._next;
          }
          if (adjustLabels) {
            for (p in labels) {
              if (labels[p] >= ignoreBeforeTime) {
                labels[p] += amount;
              }
            }
          }
          return _uncache(this);
        };
        _proto2.invalidate = function invalidate(soft) {
          var child = this._first;
          this._lock = 0;
          while (child) {
            child.invalidate(soft);
            child = child._next;
          }
          return _Animation.prototype.invalidate.call(this, soft);
        };
        _proto2.clear = function clear(includeLabels) {
          if (includeLabels === void 0) {
            includeLabels = true;
          }
          var child = this._first, next;
          while (child) {
            next = child._next;
            this.remove(child);
            child = next;
          }
          this._dp && (this._time = this._tTime = this._pTime = 0);
          includeLabels && (this.labels = {});
          return _uncache(this);
        };
        _proto2.totalDuration = function totalDuration(value) {
          var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
          if (arguments.length) {
            return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
          }
          if (self._dirty) {
            parent = self.parent;
            while (child) {
              prev = child._prev;
              child._dirty && child.totalDuration();
              start = child._start;
              if (start > prevStart && self._sort && child._ts && !self._lock) {
                self._lock = 1;
                _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
              } else {
                prevStart = start;
              }
              if (start < 0 && child._ts) {
                max -= start;
                if (!parent && !self._dp || parent && parent.smoothChildTiming) {
                  self._start += start / self._ts;
                  self._time -= start;
                  self._tTime -= start;
                }
                self.shiftChildren(-start, false, -Infinity);
                prevStart = 0;
              }
              child._end > max && child._ts && (max = child._end);
              child = prev;
            }
            _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
            self._dirty = 0;
          }
          return self._tDur;
        };
        Timeline2.updateRoot = function updateRoot(time) {
          if (_globalTimeline._ts) {
            _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
            _lastRenderedFrame = _ticker.frame;
          }
          if (_ticker.frame >= _nextGCFrame) {
            _nextGCFrame += _config.autoSleep || 120;
            var child = _globalTimeline._first;
            if (!child || !child._ts) {
              if (_config.autoSleep && _ticker._listeners.length < 2) {
                while (child && !child._ts) {
                  child = child._next;
                }
                child || _ticker.sleep();
              }
            }
          }
        };
        return Timeline2;
      }(Animation);
      _setDefaults(Timeline.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
        var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
        pt.b = start;
        pt.e = end;
        start += "";
        end += "";
        if (hasRandom = ~end.indexOf("random(")) {
          end = _replaceRandom(end);
        }
        if (stringFilter) {
          a = [start, end];
          stringFilter(a, target, prop);
          start = a[0];
          end = a[1];
        }
        startNums = start.match(_complexStringNumExp) || [];
        while (result = _complexStringNumExp.exec(end)) {
          endNum = result[0];
          chunk = end.substring(index, result.index);
          if (color) {
            color = (color + 1) % 5;
          } else if (chunk.substr(-5) === "rgba(") {
            color = 1;
          }
          if (endNum !== startNums[matchIndex++]) {
            startNum = parseFloat(startNums[matchIndex - 1]) || 0;
            pt._pt = {
              _next: pt._pt,
              p: chunk || matchIndex === 1 ? chunk : ",",
              //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
              s: startNum,
              c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
              m: color && color < 4 ? Math.round : 0
            };
            index = _complexStringNumExp.lastIndex;
          }
        }
        pt.c = index < end.length ? end.substring(index, end.length) : "";
        pt.fp = funcParam;
        if (_relExp.test(end) || hasRandom) {
          pt.e = 0;
        }
        this._pt = pt;
        return pt;
      };
      _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
        _isFunction(end) && (end = end(index || 0, target, targets));
        var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
        if (_isString(end)) {
          if (~end.indexOf("random(")) {
            end = _replaceRandom(end);
          }
          if (end.charAt(1) === "=") {
            pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
            if (pt || pt === 0) {
              end = pt;
            }
          }
        }
        if (!optional || parsedStart !== end || _forceAllPropTweens) {
          if (!isNaN(parsedStart * end) && end !== "") {
            pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
            funcParam && (pt.fp = funcParam);
            modifier && pt.modifier(modifier, this, target);
            return this._pt = pt;
          }
          !currentValue && !(prop in target) && _missingPlugin(prop, end);
          return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
        }
      };
      _processVars = function _processVars2(vars, index, target, targets, tween) {
        _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
        if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
          return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
        }
        var copy = {}, p;
        for (p in vars) {
          copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
        }
        return copy;
      };
      _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
        var plugin, pt, ptLookup, i;
        if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
          if (tween !== _quickTween) {
            ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
            i = plugin._props.length;
            while (i--) {
              ptLookup[plugin._props[i]] = pt;
            }
          }
        }
        return plugin;
      };
      _initTween = function _initTween2(tween, time, tTime) {
        var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
        tl && (!keyframes || !ease) && (ease = "none");
        tween._ease = _parseEase(ease, _defaults.ease);
        tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
        if (yoyoEase && tween._yoyo && !tween._repeat) {
          yoyoEase = tween._yEase;
          tween._yEase = tween._ease;
          tween._ease = yoyoEase;
        }
        tween._from = !tl && !!vars.runBackwards;
        if (!tl || keyframes && !vars.stagger) {
          harness = targets[0] ? _getCache(targets[0]).harness : 0;
          harnessVars = harness && vars[harness.prop];
          cleanVars = _copyExcluding(vars, _reservedProps);
          if (prevStartAt) {
            prevStartAt._zTime < 0 && prevStartAt.progress(1);
            time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
            prevStartAt._lazy = 0;
          }
          if (startAt) {
            _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
              data: "isStart",
              overwrite: false,
              parent,
              immediateRender: true,
              lazy: _isNotFalse(lazy),
              startAt: null,
              delay: 0,
              onUpdate,
              onUpdateParams,
              callbackScope,
              stagger: 0
            }, startAt)));
            tween._startAt._dp = 0;
            time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
            if (immediateRender) {
              if (dur && time <= 0 && tTime <= 0) {
                time && (tween._zTime = time);
                return;
              }
            }
          } else if (runBackwards && dur) {
            if (!prevStartAt) {
              time && (immediateRender = false);
              p = _setDefaults({
                overwrite: false,
                data: "isFromStart",
                //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
                lazy: immediateRender && _isNotFalse(lazy),
                immediateRender,
                //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
                stagger: 0,
                parent
                //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})
              }, cleanVars);
              harnessVars && (p[harness.prop] = harnessVars);
              _removeFromParent(tween._startAt = Tween.set(targets, p));
              tween._startAt._dp = 0;
              time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
              tween._zTime = time;
              if (!immediateRender) {
                _initTween2(tween._startAt, _tinyNum, _tinyNum);
              } else if (!time) {
                return;
              }
            }
          }
          tween._pt = tween._ptCache = 0;
          lazy = dur && _isNotFalse(lazy) || lazy && !dur;
          for (i = 0; i < targets.length; i++) {
            target = targets[i];
            gsData = target._gsap || _harness(targets)[i]._gsap;
            tween._ptLookup[i] = ptLookup = {};
            _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
            index = fullTargets === targets ? i : fullTargets.indexOf(target);
            if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
              tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
              plugin._props.forEach(function(name) {
                ptLookup[name] = pt;
              });
              plugin.priority && (hasPriority = 1);
            }
            if (!harness || harnessVars) {
              for (p in cleanVars) {
                if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
                  plugin.priority && (hasPriority = 1);
                } else {
                  ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
                }
              }
            }
            tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
            if (autoOverwrite && tween._pt) {
              _overwritingTween = tween;
              _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
              overwritten = !tween.parent;
              _overwritingTween = 0;
            }
            tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
          }
          hasPriority && _sortPropTweensByPriority(tween);
          tween._onInit && tween._onInit(tween);
        }
        tween._onUpdate = onUpdate;
        tween._initted = (!tween._op || tween._pt) && !overwritten;
        keyframes && time <= 0 && tl.render(_bigNum, true, true);
      };
      _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time) {
        var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
        if (!ptCache) {
          ptCache = tween._ptCache[property] = [];
          lookup = tween._ptLookup;
          i = tween._targets.length;
          while (i--) {
            pt = lookup[i][property];
            if (pt && pt.d && pt.d._pt) {
              pt = pt.d._pt;
              while (pt && pt.p !== property && pt.fp !== property) {
                pt = pt._next;
              }
            }
            if (!pt) {
              _forceAllPropTweens = 1;
              tween.vars[property] = "+=0";
              _initTween(tween, time);
              _forceAllPropTweens = 0;
              return 1;
            }
            ptCache.push(pt);
          }
        }
        i = ptCache.length;
        while (i--) {
          rootPT = ptCache[i];
          pt = rootPT._pt || rootPT;
          pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
          pt.c = value - pt.s;
          rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
          rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
        }
      };
      _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
        var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
        if (!propertyAliases) {
          return vars;
        }
        copy = _merge({}, vars);
        for (p in propertyAliases) {
          if (p in copy) {
            aliases = propertyAliases[p].split(",");
            i = aliases.length;
            while (i--) {
              copy[aliases[i]] = copy[p];
            }
          }
        }
        return copy;
      };
      _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
        var ease = obj.ease || easeEach || "power1.inOut", p, a;
        if (_isArray(obj)) {
          a = allProps[prop] || (allProps[prop] = []);
          obj.forEach(function(value, i) {
            return a.push({
              t: i / (obj.length - 1) * 100,
              v: value,
              e: ease
            });
          });
        } else {
          for (p in obj) {
            a = allProps[p] || (allProps[p] = []);
            p === "ease" || a.push({
              t: parseFloat(prop),
              v: obj[p],
              e: ease
            });
          }
        }
      };
      _parseFuncOrString = function _parseFuncOrString2(value, tween, i, target, targets) {
        return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
      };
      _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert";
      _staggerPropsToSkip = {};
      _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
        return _staggerPropsToSkip[name] = 1;
      });
      Tween = /* @__PURE__ */ function(_Animation2) {
        _inheritsLoose(Tween2, _Animation2);
        function Tween2(targets, vars, position, skipInherit) {
          var _this3;
          if (typeof vars === "number") {
            position.duration = vars;
            vars = position;
            position = null;
          }
          _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
          var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults2 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
          _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
          _this3._ptLookup = [];
          _this3._overwrite = overwrite;
          if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
            vars = _this3.vars;
            tl = _this3.timeline = new Timeline({
              data: "nested",
              defaults: defaults2 || {},
              targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
            });
            tl.kill();
            tl.parent = tl._dp = _assertThisInitialized(_this3);
            tl._start = 0;
            if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
              l = parsedTargets.length;
              staggerFunc = stagger && distribute(stagger);
              if (_isObject(stagger)) {
                for (p in stagger) {
                  if (~_staggerTweenProps.indexOf(p)) {
                    staggerVarsToMerge || (staggerVarsToMerge = {});
                    staggerVarsToMerge[p] = stagger[p];
                  }
                }
              }
              for (i = 0; i < l; i++) {
                copy = _copyExcluding(vars, _staggerPropsToSkip);
                copy.stagger = 0;
                yoyoEase && (copy.yoyoEase = yoyoEase);
                staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                curTarget = parsedTargets[i];
                copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
                copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
                if (!stagger && l === 1 && copy.delay) {
                  _this3._delay = delay = copy.delay;
                  _this3._start += delay;
                  copy.delay = 0;
                }
                tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
                tl._ease = _easeMap.none;
              }
              tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
            } else if (keyframes) {
              _inheritDefaults(_setDefaults(tl.vars.defaults, {
                ease: "none"
              }));
              tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
              var time = 0, a, kf, v;
              if (_isArray(keyframes)) {
                keyframes.forEach(function(frame) {
                  return tl.to(parsedTargets, frame, ">");
                });
                tl.duration();
              } else {
                copy = {};
                for (p in keyframes) {
                  p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
                }
                for (p in copy) {
                  a = copy[p].sort(function(a2, b) {
                    return a2.t - b.t;
                  });
                  time = 0;
                  for (i = 0; i < a.length; i++) {
                    kf = a[i];
                    v = {
                      ease: kf.e,
                      duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                    };
                    v[p] = kf.v;
                    tl.to(parsedTargets, v, time);
                    time += v.duration;
                  }
                }
                tl.duration() < duration && tl.to({}, {
                  duration: duration - tl.duration()
                });
              }
            }
            duration || _this3.duration(duration = tl.duration());
          } else {
            _this3.timeline = 0;
          }
          if (overwrite === true && !_suppressOverwrites) {
            _overwritingTween = _assertThisInitialized(_this3);
            _globalTimeline.killTweensOf(parsedTargets);
            _overwritingTween = 0;
          }
          _addToTimeline(parent, _assertThisInitialized(_this3), position);
          vars.reversed && _this3.reverse();
          vars.paused && _this3.paused(true);
          if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
            _this3._tTime = -_tinyNum;
            _this3.render(Math.max(0, -delay) || 0);
          }
          scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
          return _this3;
        }
        var _proto3 = Tween2.prototype;
        _proto3.render = function render6(totalTime, suppressEvents, force) {
          var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline2, yoyoEase;
          if (!dur) {
            _renderZeroDurationTween(this, totalTime, suppressEvents, force);
          } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
            time = tTime;
            timeline2 = this.timeline;
            if (this._repeat) {
              cycleDuration = dur + this._rDelay;
              if (this._repeat < -1 && isNegative) {
                return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
              }
              time = _roundPrecise(tTime % cycleDuration);
              if (tTime === tDur) {
                iteration = this._repeat;
                time = dur;
              } else {
                iteration = ~~(tTime / cycleDuration);
                if (iteration && iteration === tTime / cycleDuration) {
                  time = dur;
                  iteration--;
                }
                time > dur && (time = dur);
              }
              isYoyo = this._yoyo && iteration & 1;
              if (isYoyo) {
                yoyoEase = this._yEase;
                time = dur - time;
              }
              prevIteration = _animationCycle(this._tTime, cycleDuration);
              if (time === prevTime && !force && this._initted) {
                this._tTime = tTime;
                return this;
              }
              if (iteration !== prevIteration) {
                timeline2 && this._yEase && _propagateYoyoEase(timeline2, isYoyo);
                if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
                  this._lock = force = 1;
                  this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
                }
              }
            }
            if (!this._initted) {
              if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
                this._tTime = 0;
                return this;
              }
              if (prevTime !== this._time) {
                return this;
              }
              if (dur !== this._dur) {
                return this.render(totalTime, suppressEvents, force);
              }
            }
            this._tTime = tTime;
            this._time = time;
            if (!this._act && this._ts) {
              this._act = 1;
              this._lazy = 0;
            }
            this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
            if (this._from) {
              this.ratio = ratio = 1 - ratio;
            }
            if (time && !prevTime && !suppressEvents) {
              _callback(this, "onStart");
              if (this._tTime !== tTime) {
                return this;
              }
            }
            pt = this._pt;
            while (pt) {
              pt.r(ratio, pt.d);
              pt = pt._next;
            }
            timeline2 && timeline2.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline2._dur * timeline2._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
            if (this._onUpdate && !suppressEvents) {
              isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
              _callback(this, "onUpdate");
            }
            this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
            if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
              isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
              (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
              if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
                _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
              }
            }
          }
          return this;
        };
        _proto3.targets = function targets() {
          return this._targets;
        };
        _proto3.invalidate = function invalidate(soft) {
          (!soft || !this.vars.runBackwards) && (this._startAt = 0);
          this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
          this._ptLookup = [];
          this.timeline && this.timeline.invalidate(soft);
          return _Animation2.prototype.invalidate.call(this, soft);
        };
        _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
          _tickerActive || _ticker.wake();
          this._ts || this.play();
          var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
          this._initted || _initTween(this, time);
          ratio = this._ease(time / this._dur);
          if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) {
            return this.resetTo(property, value, start, startIsRelative);
          }
          _alignPlayhead(this, 0);
          this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
          return this.render(0);
        };
        _proto3.kill = function kill3(targets, vars) {
          if (vars === void 0) {
            vars = "all";
          }
          if (!targets && (!vars || vars === "all")) {
            this._lazy = this._pt = 0;
            return this.parent ? _interrupt(this) : this;
          }
          if (this.timeline) {
            var tDur = this.timeline.totalDuration();
            this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
            this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
            return this;
          }
          var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
          if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
            vars === "all" && (this._pt = 0);
            return _interrupt(this);
          }
          overwrittenProps = this._op = this._op || [];
          if (vars !== "all") {
            if (_isString(vars)) {
              p = {};
              _forEachName(vars, function(name) {
                return p[name] = 1;
              });
              vars = p;
            }
            vars = _addAliasesToVars(parsedTargets, vars);
          }
          i = parsedTargets.length;
          while (i--) {
            if (~killingTargets.indexOf(parsedTargets[i])) {
              curLookup = propTweenLookup[i];
              if (vars === "all") {
                overwrittenProps[i] = vars;
                props = curLookup;
                curOverwriteProps = {};
              } else {
                curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
                props = vars;
              }
              for (p in props) {
                pt = curLookup && curLookup[p];
                if (pt) {
                  if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                    _removeLinkedListItem(this, pt, "_pt");
                  }
                  delete curLookup[p];
                }
                if (curOverwriteProps !== "all") {
                  curOverwriteProps[p] = 1;
                }
              }
            }
          }
          this._initted && !this._pt && firstPT && _interrupt(this);
          return this;
        };
        Tween2.to = function to(targets, vars) {
          return new Tween2(targets, vars, arguments[2]);
        };
        Tween2.from = function from(targets, vars) {
          return _createTweenType(1, arguments);
        };
        Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
          return new Tween2(callback, 0, {
            immediateRender: false,
            lazy: false,
            overwrite: false,
            delay,
            onComplete: callback,
            onReverseComplete: callback,
            onCompleteParams: params,
            onReverseCompleteParams: params,
            callbackScope: scope
          });
        };
        Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
          return _createTweenType(2, arguments);
        };
        Tween2.set = function set(targets, vars) {
          vars.duration = 0;
          vars.repeatDelay || (vars.repeat = 0);
          return new Tween2(targets, vars);
        };
        Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
          return _globalTimeline.killTweensOf(targets, props, onlyActive);
        };
        return Tween2;
      }(Animation);
      _setDefaults(Tween.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      });
      _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
        Tween[name] = function() {
          var tl = new Timeline(), params = _slice.call(arguments, 0);
          params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
          return tl[name].apply(tl, params);
        };
      });
      _setterPlain = function _setterPlain2(target, property, value) {
        return target[property] = value;
      };
      _setterFunc = function _setterFunc2(target, property, value) {
        return target[property](value);
      };
      _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
        return target[property](data.fp, value);
      };
      _setterAttribute = function _setterAttribute2(target, property, value) {
        return target.setAttribute(property, value);
      };
      _getSetter = function _getSetter2(target, property) {
        return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
      };
      _renderPlain = function _renderPlain2(ratio, data) {
        return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
      };
      _renderBoolean = function _renderBoolean2(ratio, data) {
        return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
      };
      _renderComplexString = function _renderComplexString2(ratio, data) {
        var pt = data._pt, s = "";
        if (!ratio && data.b) {
          s = data.b;
        } else if (ratio === 1 && data.e) {
          s = data.e;
        } else {
          while (pt) {
            s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
            pt = pt._next;
          }
          s += data.c;
        }
        data.set(data.t, data.p, s, data);
      };
      _renderPropTweens = function _renderPropTweens2(ratio, data) {
        var pt = data._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
      };
      _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
        var pt = this._pt, next;
        while (pt) {
          next = pt._next;
          pt.p === property && pt.modifier(modifier, tween, target);
          pt = next;
        }
      };
      _killPropTweensOf = function _killPropTweensOf2(property) {
        var pt = this._pt, hasNonDependentRemaining, next;
        while (pt) {
          next = pt._next;
          if (pt.p === property && !pt.op || pt.op === property) {
            _removeLinkedListItem(this, pt, "_pt");
          } else if (!pt.dep) {
            hasNonDependentRemaining = 1;
          }
          pt = next;
        }
        return !hasNonDependentRemaining;
      };
      _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
        data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
      };
      _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
        var pt = parent._pt, next, pt2, first, last;
        while (pt) {
          next = pt._next;
          pt2 = first;
          while (pt2 && pt2.pr > pt.pr) {
            pt2 = pt2._next;
          }
          if (pt._prev = pt2 ? pt2._prev : last) {
            pt._prev._next = pt;
          } else {
            first = pt;
          }
          if (pt._next = pt2) {
            pt2._prev = pt;
          } else {
            last = pt;
          }
          pt = next;
        }
        parent._pt = first;
      };
      PropTween = /* @__PURE__ */ function() {
        function PropTween3(next, target, prop, start, change, renderer, data, setter, priority) {
          this.t = target;
          this.s = start;
          this.c = change;
          this.p = prop;
          this.r = renderer || _renderPlain;
          this.d = data || this;
          this.set = setter || _setterPlain;
          this.pr = priority || 0;
          this._next = next;
          if (next) {
            next._prev = this;
          }
        }
        var _proto4 = PropTween3.prototype;
        _proto4.modifier = function modifier(func, tween, target) {
          this.mSet = this.mSet || this.set;
          this.set = _setterWithModifier;
          this.m = func;
          this.mt = target;
          this.tween = tween;
        };
        return PropTween3;
      }();
      _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
        return _reservedProps[name] = 1;
      });
      _globals.TweenMax = _globals.TweenLite = Tween;
      _globals.TimelineLite = _globals.TimelineMax = Timeline;
      _globalTimeline = new Timeline({
        sortChildren: false,
        defaults: _defaults,
        autoRemoveChildren: true,
        id: "root",
        smoothChildTiming: true
      });
      _config.stringFilter = _colorStringFilter;
      _media = [];
      _listeners = {};
      _emptyArray = [];
      _lastMediaTime = 0;
      _dispatch = function _dispatch2(type) {
        return (_listeners[type] || _emptyArray).map(function(f) {
          return f();
        });
      };
      _onMediaChange = function _onMediaChange2() {
        var time = Date.now(), matches = [];
        if (time - _lastMediaTime > 2) {
          _dispatch("matchMediaInit");
          _media.forEach(function(c) {
            var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
            for (p in queries) {
              match = _win.matchMedia(queries[p]).matches;
              match && (anyMatch = 1);
              if (match !== conditions[p]) {
                conditions[p] = match;
                toggled = 1;
              }
            }
            if (toggled) {
              c.revert();
              anyMatch && matches.push(c);
            }
          });
          _dispatch("matchMediaRevert");
          matches.forEach(function(c) {
            return c.onMatch(c);
          });
          _lastMediaTime = time;
          _dispatch("matchMedia");
        }
      };
      Context = /* @__PURE__ */ function() {
        function Context2(func, scope) {
          this.selector = scope && selector(scope);
          this.data = [];
          this._r = [];
          this.isReverted = false;
          func && this.add(func);
        }
        var _proto5 = Context2.prototype;
        _proto5.add = function add(name, func, scope) {
          if (_isFunction(name)) {
            scope = func;
            func = name;
            name = _isFunction;
          }
          var self = this, f = function f2() {
            var prev = _context, prevSelector = self.selector, result;
            prev && prev !== self && prev.data.push(self);
            scope && (self.selector = selector(scope));
            _context = self;
            result = func.apply(self, arguments);
            _isFunction(result) && self._r.push(result);
            _context = prev;
            self.selector = prevSelector;
            self.isReverted = false;
            return result;
          };
          self.last = f;
          return name === _isFunction ? f(self) : name ? self[name] = f : f;
        };
        _proto5.ignore = function ignore(func) {
          var prev = _context;
          _context = null;
          func(this);
          _context = prev;
        };
        _proto5.getTweens = function getTweens() {
          var a = [];
          this.data.forEach(function(e2) {
            return e2 instanceof Context2 ? a.push.apply(a, e2.getTweens()) : e2 instanceof Tween && !(e2.parent && e2.parent.data === "nested") && a.push(e2);
          });
          return a;
        };
        _proto5.clear = function clear() {
          this._r.length = this.data.length = 0;
        };
        _proto5.kill = function kill3(revert, matchMedia2) {
          var _this4 = this;
          if (revert) {
            var tweens = this.getTweens();
            this.data.forEach(function(t2) {
              if (t2.data === "isFlip") {
                t2.revert();
                t2.getChildren(true, true, false).forEach(function(tween) {
                  return tweens.splice(tweens.indexOf(tween), 1);
                });
              }
            });
            tweens.map(function(t2) {
              return {
                g: t2.globalTime(0),
                t: t2
              };
            }).sort(function(a, b) {
              return b.g - a.g || -1;
            }).forEach(function(o) {
              return o.t.revert(revert);
            });
            this.data.forEach(function(e2) {
              return !(e2 instanceof Animation) && e2.revert && e2.revert(revert);
            });
            this._r.forEach(function(f) {
              return f(revert, _this4);
            });
            this.isReverted = true;
          } else {
            this.data.forEach(function(e2) {
              return e2.kill && e2.kill();
            });
          }
          this.clear();
          if (matchMedia2) {
            var i = _media.indexOf(this);
            !!~i && _media.splice(i, 1);
          }
        };
        _proto5.revert = function revert(config3) {
          this.kill(config3 || {});
        };
        return Context2;
      }();
      MatchMedia = /* @__PURE__ */ function() {
        function MatchMedia2(scope) {
          this.contexts = [];
          this.scope = scope;
        }
        var _proto6 = MatchMedia2.prototype;
        _proto6.add = function add(conditions, func, scope) {
          _isObject(conditions) || (conditions = {
            matches: conditions
          });
          var context3 = new Context(0, scope || this.scope), cond = context3.conditions = {}, mq, p, active;
          this.contexts.push(context3);
          func = context3.add("onMatch", func);
          context3.queries = conditions;
          for (p in conditions) {
            if (p === "all") {
              active = 1;
            } else {
              mq = _win.matchMedia(conditions[p]);
              if (mq) {
                _media.indexOf(context3) < 0 && _media.push(context3);
                (cond[p] = mq.matches) && (active = 1);
                mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
              }
            }
          }
          active && func(context3);
          return this;
        };
        _proto6.revert = function revert(config3) {
          this.kill(config3 || {});
        };
        _proto6.kill = function kill3(revert) {
          this.contexts.forEach(function(c) {
            return c.kill(revert, true);
          });
        };
        return MatchMedia2;
      }();
      _gsap = {
        registerPlugin: function registerPlugin() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          args.forEach(function(config3) {
            return _createPlugin(config3);
          });
        },
        timeline: function timeline(vars) {
          return new Timeline(vars);
        },
        getTweensOf: function getTweensOf(targets, onlyActive) {
          return _globalTimeline.getTweensOf(targets, onlyActive);
        },
        getProperty: function getProperty(target, property, unit, uncache) {
          _isString(target) && (target = toArray(target)[0]);
          var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
          unit === "native" && (unit = "");
          return !target ? target : !property ? function(property2, unit2, uncache2) {
            return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
          } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
        },
        quickSetter: function quickSetter(target, property, unit) {
          target = toArray(target);
          if (target.length > 1) {
            var setters = target.map(function(t2) {
              return gsap.quickSetter(t2, property, unit);
            }), l = setters.length;
            return function(value) {
              var i = l;
              while (i--) {
                setters[i](value);
              }
            };
          }
          target = target[0] || {};
          var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
            var p2 = new Plugin();
            _quickTween._pt = 0;
            p2.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
            p2.render(1, p2);
            _quickTween._pt && _renderPropTweens(1, _quickTween);
          } : cache.set(target, p);
          return Plugin ? setter : function(value) {
            return setter(target, p, unit ? value + unit : value, cache, 1);
          };
        },
        quickTo: function quickTo(target, property, vars) {
          var _merge22;
          var tween = gsap.to(target, _merge((_merge22 = {}, _merge22[property] = "+=0.1", _merge22.paused = true, _merge22), vars || {})), func = function func2(value, start, startIsRelative) {
            return tween.resetTo(property, value, start, startIsRelative);
          };
          func.tween = tween;
          return func;
        },
        isTweening: function isTweening(targets) {
          return _globalTimeline.getTweensOf(targets, true).length > 0;
        },
        defaults: function defaults(value) {
          value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
          return _mergeDeep(_defaults, value || {});
        },
        config: function config2(value) {
          return _mergeDeep(_config, value || {});
        },
        registerEffect: function registerEffect(_ref3) {
          var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults2 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
          (plugins || "").split(",").forEach(function(pluginName) {
            return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
          });
          _effects[name] = function(targets, vars, tl) {
            return effect(toArray(targets), _setDefaults(vars || {}, defaults2), tl);
          };
          if (extendTimeline) {
            Timeline.prototype[name] = function(targets, vars, position) {
              return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
            };
          }
        },
        registerEase: function registerEase(name, ease) {
          _easeMap[name] = _parseEase(ease);
        },
        parseEase: function parseEase(ease, defaultEase) {
          return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
        },
        getById: function getById(id) {
          return _globalTimeline.getById(id);
        },
        exportRoot: function exportRoot(vars, includeDelayedCalls) {
          if (vars === void 0) {
            vars = {};
          }
          var tl = new Timeline(vars), child, next;
          tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
          _globalTimeline.remove(tl);
          tl._dp = 0;
          tl._time = tl._tTime = _globalTimeline._time;
          child = _globalTimeline._first;
          while (child) {
            next = child._next;
            if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
              _addToTimeline(tl, child, child._start - child._delay);
            }
            child = next;
          }
          _addToTimeline(_globalTimeline, tl, 0);
          return tl;
        },
        context: function context(func, scope) {
          return func ? new Context(func, scope) : _context;
        },
        matchMedia: function matchMedia(scope) {
          return new MatchMedia(scope);
        },
        matchMediaRefresh: function matchMediaRefresh() {
          return _media.forEach(function(c) {
            var cond = c.conditions, found, p;
            for (p in cond) {
              if (cond[p]) {
                cond[p] = false;
                found = 1;
              }
            }
            found && c.revert();
          }) || _onMediaChange();
        },
        addEventListener: function addEventListener(type, callback) {
          var a = _listeners[type] || (_listeners[type] = []);
          ~a.indexOf(callback) || a.push(callback);
        },
        removeEventListener: function removeEventListener(type, callback) {
          var a = _listeners[type], i = a && a.indexOf(callback);
          i >= 0 && a.splice(i, 1);
        },
        utils: {
          wrap,
          wrapYoyo,
          distribute,
          random,
          snap,
          normalize,
          getUnit,
          clamp,
          splitColor,
          toArray,
          selector,
          mapRange,
          pipe,
          unitize,
          interpolate,
          shuffle
        },
        install: _install,
        effects: _effects,
        ticker: _ticker,
        updateRoot: Timeline.updateRoot,
        plugins: _plugins,
        globalTimeline: _globalTimeline,
        core: {
          PropTween,
          globals: _addGlobal,
          Tween,
          Timeline,
          Animation,
          getCache: _getCache,
          _removeLinkedListItem,
          reverting: function reverting() {
            return _reverting;
          },
          context: function context2(toAdd) {
            if (toAdd && _context) {
              _context.data.push(toAdd);
              toAdd._ctx = _context;
            }
            return _context;
          },
          suppressOverwrites: function suppressOverwrites(value) {
            return _suppressOverwrites = value;
          }
        }
      };
      _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
        return _gsap[name] = Tween[name];
      });
      _ticker.add(Timeline.updateRoot);
      _quickTween = _gsap.to({}, {
        duration: 0
      });
      _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
        var pt = plugin._pt;
        while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
          pt = pt._next;
        }
        return pt;
      };
      _addModifiers = function _addModifiers2(tween, modifiers) {
        var targets = tween._targets, p, i, pt;
        for (p in modifiers) {
          i = targets.length;
          while (i--) {
            pt = tween._ptLookup[i][p];
            if (pt && (pt = pt.d)) {
              if (pt._pt) {
                pt = _getPluginPropTween(pt, p);
              }
              pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
            }
          }
        }
      };
      _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
        return {
          name,
          rawVars: 1,
          //don't pre-process function-based values or "random()" strings.
          init: function init7(target, vars, tween) {
            tween._onInit = function(tween2) {
              var temp, p;
              if (_isString(vars)) {
                temp = {};
                _forEachName(vars, function(name2) {
                  return temp[name2] = 1;
                });
                vars = temp;
              }
              if (modifier) {
                temp = {};
                for (p in vars) {
                  temp[p] = modifier(vars[p]);
                }
                vars = temp;
              }
              _addModifiers(tween2, vars);
            };
          }
        };
      };
      gsap = _gsap.registerPlugin({
        name: "attr",
        init: function init(target, vars, tween, index, targets) {
          var p, pt, v;
          this.tween = tween;
          for (p in vars) {
            v = target.getAttribute(p) || "";
            pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
            pt.op = p;
            pt.b = v;
            this._props.push(p);
          }
        },
        render: function render(ratio, data) {
          var pt = data._pt;
          while (pt) {
            _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
            pt = pt._next;
          }
        }
      }, {
        name: "endArray",
        init: function init2(target, value) {
          var i = value.length;
          while (i--) {
            this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
          }
        }
      }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
      Tween.version = Timeline.version = gsap.version = "3.11.3";
      _coreReady = 1;
      _windowExists() && _wake();
      Power0 = _easeMap.Power0;
      Power1 = _easeMap.Power1;
      Power2 = _easeMap.Power2;
      Power3 = _easeMap.Power3;
      Power4 = _easeMap.Power4;
      Linear = _easeMap.Linear;
      Quad = _easeMap.Quad;
      Cubic = _easeMap.Cubic;
      Quart = _easeMap.Quart;
      Quint = _easeMap.Quint;
      Strong = _easeMap.Strong;
      Elastic = _easeMap.Elastic;
      Back = _easeMap.Back;
      SteppedEase = _easeMap.SteppedEase;
      Bounce = _easeMap.Bounce;
      Sine = _easeMap.Sine;
      Expo = _easeMap.Expo;
      Circ = _easeMap.Circ;
    }
  });

  // node_modules/gsap/CSSPlugin.js
  var _win2, _doc2, _docElement, _pluginInitted, _tempDiv, _tempDivStyler, _recentSetterPlugin, _reverting2, _windowExists3, _transformProps, _RAD2DEG, _DEG2RAD, _atan2, _bigNum2, _capsExp, _horizontalExp, _complexExp, _propertyAliases, _renderCSSProp, _renderPropWithEnd, _renderCSSPropWithBeginning, _renderRoundedCSSProp, _renderNonTweeningValue, _renderNonTweeningValueOnlyAtEnd, _setterCSSStyle, _setterCSSProp, _setterTransform, _setterScale, _setterScaleWithRender, _setterTransformWithRender, _transformProp, _transformOriginProp, _saveStyle, _removeIndependentTransforms, _revertStyle, _getStyleSaver, _supports3D, _createElement, _getComputedProperty, _prefixes, _checkPropPrefix, _initCore, _getBBoxHack, _getAttributeFallbacks, _getBBox, _isSVG, _removeProperty, _addNonTweeningPT, _nonConvertibleUnits, _nonStandardLayouts, _convertToUnit, _get, _tweenComplexCSSString, _keywordToPercent, _convertKeywordsToPercentages, _renderClearProps, _specialProps, _identity2DMatrix, _rotationalProperties, _isNullTransform, _getComputedTransformMatrixAsArray, _getMatrix, _applySVGOrigin, _parseTransform, _firstTwoOnly, _addPxTranslate, _renderNon3DTransforms, _zeroDeg, _zeroPx, _endParenthesis, _renderCSSTransforms, _renderSVGTransforms, _addRotationalPropTween, _assign, _addRawTransformPTs, CSSPlugin;
  var init_CSSPlugin = __esm({
    "node_modules/gsap/CSSPlugin.js"() {
      init_live_reload();
      init_gsap_core();
      _windowExists3 = function _windowExists4() {
        return typeof window !== "undefined";
      };
      _transformProps = {};
      _RAD2DEG = 180 / Math.PI;
      _DEG2RAD = Math.PI / 180;
      _atan2 = Math.atan2;
      _bigNum2 = 1e8;
      _capsExp = /([A-Z])/g;
      _horizontalExp = /(left|right|width|margin|padding|x)/i;
      _complexExp = /[\s,\(]\S/;
      _propertyAliases = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
      };
      _renderCSSProp = function _renderCSSProp2(ratio, data) {
        return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
      };
      _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
        return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
      };
      _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
        return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
      };
      _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
        var value = data.s + data.c * ratio;
        data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
      };
      _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
        return data.set(data.t, data.p, ratio ? data.e : data.b, data);
      };
      _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
        return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
      };
      _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
        return target.style[property] = value;
      };
      _setterCSSProp = function _setterCSSProp2(target, property, value) {
        return target.style.setProperty(property, value);
      };
      _setterTransform = function _setterTransform2(target, property, value) {
        return target._gsap[property] = value;
      };
      _setterScale = function _setterScale2(target, property, value) {
        return target._gsap.scaleX = target._gsap.scaleY = value;
      };
      _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
        var cache = target._gsap;
        cache.scaleX = cache.scaleY = value;
        cache.renderTransform(ratio, cache);
      };
      _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
        var cache = target._gsap;
        cache[property] = value;
        cache.renderTransform(ratio, cache);
      };
      _transformProp = "transform";
      _transformOriginProp = _transformProp + "Origin";
      _saveStyle = function _saveStyle2(property, isNotCSS) {
        var _this = this;
        var target = this.target, style = target.style;
        if (property in _transformProps) {
          this.tfm = this.tfm || {};
          if (property !== "transform") {
            property = _propertyAliases[property] || property;
            ~property.indexOf(",") ? property.split(",").forEach(function(a) {
              return _this.tfm[a] = _get(target, a);
            }) : this.tfm[property] = target._gsap.x ? target._gsap[property] : _get(target, property);
          }
          if (this.props.indexOf(_transformProp) >= 0) {
            return;
          }
          if (target._gsap.svg) {
            this.svgo = target.getAttribute("data-svg-origin");
            this.props.push(_transformOriginProp, isNotCSS, "");
          }
          property = _transformProp;
        }
        (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
      };
      _removeIndependentTransforms = function _removeIndependentTransforms2(style) {
        if (style.translate) {
          style.removeProperty("translate");
          style.removeProperty("scale");
          style.removeProperty("rotate");
        }
      };
      _revertStyle = function _revertStyle2() {
        var props = this.props, target = this.target, style = target.style, cache = target._gsap, i, p;
        for (i = 0; i < props.length; i += 3) {
          props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].replace(_capsExp, "-$1").toLowerCase());
        }
        if (this.tfm) {
          for (p in this.tfm) {
            cache[p] = this.tfm[p];
          }
          if (cache.svg) {
            cache.renderTransform();
            target.setAttribute("data-svg-origin", this.svgo || "");
          }
          i = _reverting2();
          if (i && !i.isStart && !style[_transformProp]) {
            _removeIndependentTransforms(style);
            cache.uncache = 1;
          }
        }
      };
      _getStyleSaver = function _getStyleSaver2(target, properties) {
        var saver = {
          target,
          props: [],
          revert: _revertStyle,
          save: _saveStyle
        };
        properties && properties.split(",").forEach(function(p) {
          return saver.save(p);
        });
        return saver;
      };
      _createElement = function _createElement2(type, ns) {
        var e2 = _doc2.createElementNS ? _doc2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc2.createElement(type);
        return e2.style ? e2 : _doc2.createElement(type);
      };
      _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
        var cs = getComputedStyle(target);
        return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
      };
      _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
      _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
        var e2 = element || _tempDiv, s = e2.style, i = 5;
        if (property in s && !preferPrefix) {
          return property;
        }
        property = property.charAt(0).toUpperCase() + property.substr(1);
        while (i-- && !(_prefixes[i] + property in s)) {
        }
        return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
      };
      _initCore = function _initCore2() {
        if (_windowExists3() && window.document) {
          _win2 = window;
          _doc2 = _win2.document;
          _docElement = _doc2.documentElement;
          _tempDiv = _createElement("div") || {
            style: {}
          };
          _tempDivStyler = _createElement("div");
          _transformProp = _checkPropPrefix(_transformProp);
          _transformOriginProp = _transformProp + "Origin";
          _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
          _supports3D = !!_checkPropPrefix("perspective");
          _reverting2 = gsap.core.reverting;
          _pluginInitted = 1;
        }
      };
      _getBBoxHack = function _getBBoxHack2(swapIfPossible) {
        var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
        _docElement.appendChild(svg);
        svg.appendChild(this);
        this.style.display = "block";
        if (swapIfPossible) {
          try {
            bbox = this.getBBox();
            this._gsapBBox = this.getBBox;
            this.getBBox = _getBBoxHack2;
          } catch (e2) {
          }
        } else if (this._gsapBBox) {
          bbox = this._gsapBBox();
        }
        if (oldParent) {
          if (oldSibling) {
            oldParent.insertBefore(this, oldSibling);
          } else {
            oldParent.appendChild(this);
          }
        }
        _docElement.removeChild(svg);
        this.style.cssText = oldCSS;
        return bbox;
      };
      _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
        var i = attributesArray.length;
        while (i--) {
          if (target.hasAttribute(attributesArray[i])) {
            return target.getAttribute(attributesArray[i]);
          }
        }
      };
      _getBBox = function _getBBox2(target) {
        var bounds;
        try {
          bounds = target.getBBox();
        } catch (error) {
          bounds = _getBBoxHack.call(target, true);
        }
        bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
        return bounds && !bounds.width && !bounds.x && !bounds.y ? {
          x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
          y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
          width: 0,
          height: 0
        } : bounds;
      };
      _isSVG = function _isSVG2(e2) {
        return !!(e2.getCTM && (!e2.parentNode || e2.ownerSVGElement) && _getBBox(e2));
      };
      _removeProperty = function _removeProperty2(target, property) {
        if (property) {
          var style = target.style;
          if (property in _transformProps && property !== _transformOriginProp) {
            property = _transformProp;
          }
          if (style.removeProperty) {
            if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
              property = "-" + property;
            }
            style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
          } else {
            style.removeAttribute(property);
          }
        }
      };
      _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
        var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
        plugin._pt = pt;
        pt.b = beginning;
        pt.e = end;
        plugin._props.push(property);
        return pt;
      };
      _nonConvertibleUnits = {
        deg: 1,
        rad: 1,
        turn: 1
      };
      _nonStandardLayouts = {
        grid: 1,
        flex: 1
      };
      _convertToUnit = function _convertToUnit2(target, property, value, unit) {
        var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
        if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
          return curValue;
        }
        curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
        isSVG = target.getCTM && _isSVG(target);
        if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
          px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
          return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
        }
        style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
        parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
        if (isSVG) {
          parent = (target.ownerSVGElement || {}).parentNode;
        }
        if (!parent || parent === _doc2 || !parent.appendChild) {
          parent = _doc2.body;
        }
        cache = parent._gsap;
        if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
          return _round(curValue / cache.width * amount);
        } else {
          (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
          parent === target && (style.position = "static");
          parent.appendChild(_tempDiv);
          px = _tempDiv[measureProperty];
          parent.removeChild(_tempDiv);
          style.position = "absolute";
          if (horizontal && toPercent) {
            cache = _getCache(parent);
            cache.time = _ticker.time;
            cache.width = parent[measureProperty];
          }
        }
        return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
      };
      _get = function _get2(target, property, unit, uncache) {
        var value;
        _pluginInitted || _initCore();
        if (property in _propertyAliases && property !== "transform") {
          property = _propertyAliases[property];
          if (~property.indexOf(",")) {
            property = property.split(",")[0];
          }
        }
        if (_transformProps[property] && property !== "transform") {
          value = _parseTransform(target, uncache);
          value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
        } else {
          value = target.style[property];
          if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
            value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
          }
        }
        return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
      };
      _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
        if (!start || start === "none") {
          var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
          if (s && s !== start) {
            prop = p;
            start = s;
          } else if (prop === "borderColor") {
            start = _getComputedProperty(target, "borderTopColor");
          }
        }
        var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
        pt.b = start;
        pt.e = end;
        start += "";
        end += "";
        if (end === "auto") {
          target.style[prop] = end;
          end = _getComputedProperty(target, prop) || end;
          target.style[prop] = start;
        }
        a = [start, end];
        _colorStringFilter(a);
        start = a[0];
        end = a[1];
        startValues = start.match(_numWithUnitExp) || [];
        endValues = end.match(_numWithUnitExp) || [];
        if (endValues.length) {
          while (result = _numWithUnitExp.exec(end)) {
            endValue = result[0];
            chunk = end.substring(index, result.index);
            if (color) {
              color = (color + 1) % 5;
            } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
              color = 1;
            }
            if (endValue !== (startValue = startValues[matchIndex++] || "")) {
              startNum = parseFloat(startValue) || 0;
              startUnit = startValue.substr((startNum + "").length);
              endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
              endNum = parseFloat(endValue);
              endUnit = endValue.substr((endNum + "").length);
              index = _numWithUnitExp.lastIndex - endUnit.length;
              if (!endUnit) {
                endUnit = endUnit || _config.units[prop] || startUnit;
                if (index === end.length) {
                  end += endUnit;
                  pt.e += endUnit;
                }
              }
              if (startUnit !== endUnit) {
                startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
              }
              pt._pt = {
                _next: pt._pt,
                p: chunk || matchIndex === 1 ? chunk : ",",
                //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                s: startNum,
                c: endNum - startNum,
                m: color && color < 4 || prop === "zIndex" ? Math.round : 0
              };
            }
          }
          pt.c = index < end.length ? end.substring(index, end.length) : "";
        } else {
          pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
        }
        _relExp.test(end) && (pt.e = 0);
        this._pt = pt;
        return pt;
      };
      _keywordToPercent = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
      };
      _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
        var split = value.split(" "), x = split[0], y = split[1] || "50%";
        if (x === "top" || x === "bottom" || y === "left" || y === "right") {
          value = x;
          x = y;
          y = value;
        }
        split[0] = _keywordToPercent[x] || x;
        split[1] = _keywordToPercent[y] || y;
        return split.join(" ");
      };
      _renderClearProps = function _renderClearProps2(ratio, data) {
        if (data.tween && data.tween._time === data.tween._dur) {
          var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
          if (props === "all" || props === true) {
            style.cssText = "";
            clearTransforms = 1;
          } else {
            props = props.split(",");
            i = props.length;
            while (--i > -1) {
              prop = props[i];
              if (_transformProps[prop]) {
                clearTransforms = 1;
                prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
              }
              _removeProperty(target, prop);
            }
          }
          if (clearTransforms) {
            _removeProperty(target, _transformProp);
            if (cache) {
              cache.svg && target.removeAttribute("transform");
              _parseTransform(target, 1);
              cache.uncache = 1;
              _removeIndependentTransforms(style);
            }
          }
        }
      };
      _specialProps = {
        clearProps: function clearProps(plugin, target, property, endValue, tween) {
          if (tween.data !== "isFromStart") {
            var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
            pt.u = endValue;
            pt.pr = -10;
            pt.tween = tween;
            plugin._props.push(property);
            return 1;
          }
        }
        /* className feature (about 0.4kb gzipped).
        , className(plugin, target, property, endValue, tween) {
        	let _renderClassName = (ratio, data) => {
        			data.css.render(ratio, data.css);
        			if (!ratio || ratio === 1) {
        				let inline = data.rmv,
        					target = data.t,
        					p;
        				target.setAttribute("class", ratio ? data.e : data.b);
        				for (p in inline) {
        					_removeProperty(target, p);
        				}
        			}
        		},
        		_getAllStyles = (target) => {
        			let styles = {},
        				computed = getComputedStyle(target),
        				p;
        			for (p in computed) {
        				if (isNaN(p) && p !== "cssText" && p !== "length") {
        					styles[p] = computed[p];
        				}
        			}
        			_setDefaults(styles, _parseTransform(target, 1));
        			return styles;
        		},
        		startClassList = target.getAttribute("class"),
        		style = target.style,
        		cssText = style.cssText,
        		cache = target._gsap,
        		classPT = cache.classPT,
        		inlineToRemoveAtEnd = {},
        		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
        		changingVars = {},
        		startVars = _getAllStyles(target),
        		transformRelated = /(transform|perspective)/i,
        		endVars, p;
        	if (classPT) {
        		classPT.r(1, classPT.d);
        		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
        	}
        	target.setAttribute("class", data.e);
        	endVars = _getAllStyles(target, true);
        	target.setAttribute("class", startClassList);
        	for (p in endVars) {
        		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
        			changingVars[p] = endVars[p];
        			if (!style[p] && style[p] !== "0") {
        				inlineToRemoveAtEnd[p] = 1;
        			}
        		}
        	}
        	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
        	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
        		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
        	}
        	_parseTransform(target, true); //to clear the caching of transforms
        	data.css = new gsap.plugins.css();
        	data.css.init(target, changingVars, tween);
        	plugin._props.push(...data.css._props);
        	return 1;
        }
        */
      };
      _identity2DMatrix = [1, 0, 0, 1, 0, 0];
      _rotationalProperties = {};
      _isNullTransform = function _isNullTransform2(value) {
        return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
      };
      _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
        var matrixString = _getComputedProperty(target, _transformProp);
        return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
      };
      _getMatrix = function _getMatrix2(target, force2D) {
        var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
        if (cache.svg && target.getAttribute("transform")) {
          temp = target.transform.baseVal.consolidate().matrix;
          matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
          return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
        } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
          temp = style.display;
          style.display = "block";
          parent = target.parentNode;
          if (!parent || !target.offsetParent) {
            addedToDOM = 1;
            nextSibling = target.nextElementSibling;
            _docElement.appendChild(target);
          }
          matrix = _getComputedTransformMatrixAsArray(target);
          temp ? style.display = temp : _removeProperty(target, "display");
          if (addedToDOM) {
            nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
          }
        }
        return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
      };
      _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
        var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
        if (!originIsAbsolute) {
          bounds = _getBBox(target);
          xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
          yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
        } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
          x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
          y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
          xOrigin = x;
          yOrigin = y;
        }
        if (smooth || smooth !== false && cache.smooth) {
          tx = xOrigin - xOriginOld;
          ty = yOrigin - yOriginOld;
          cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
          cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
        } else {
          cache.xOffset = cache.yOffset = 0;
        }
        cache.xOrigin = xOrigin;
        cache.yOrigin = yOrigin;
        cache.smooth = !!smooth;
        cache.origin = origin;
        cache.originIsAbsolute = !!originIsAbsolute;
        target.style[_transformOriginProp] = "0px 0px";
        if (pluginToAddPropTweensTo) {
          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
        }
        target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
      };
      _parseTransform = function _parseTransform2(target, uncache) {
        var cache = target._gsap || new GSCache(target);
        if ("x" in cache && !uncache && !cache.uncache) {
          return cache;
        }
        var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
        x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
        scaleX = scaleY = 1;
        cache.svg = !!(target.getCTM && _isSVG(target));
        if (cs.translate) {
          if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
            style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
          }
          style.scale = style.rotate = style.translate = "none";
        }
        matrix = _getMatrix(target, cache.svg);
        if (cache.svg) {
          if (cache.uncache) {
            t2 = target.getBBox();
            origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
            t1 = "";
          } else {
            t1 = !uncache && target.getAttribute("data-svg-origin");
          }
          _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
        }
        xOrigin = cache.xOrigin || 0;
        yOrigin = cache.yOrigin || 0;
        if (matrix !== _identity2DMatrix) {
          a = matrix[0];
          b = matrix[1];
          c = matrix[2];
          d = matrix[3];
          x = a12 = matrix[4];
          y = a22 = matrix[5];
          if (matrix.length === 6) {
            scaleX = Math.sqrt(a * a + b * b);
            scaleY = Math.sqrt(d * d + c * c);
            rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
            skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
            skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
            if (cache.svg) {
              x -= xOrigin - (xOrigin * a + yOrigin * c);
              y -= yOrigin - (xOrigin * b + yOrigin * d);
            }
          } else {
            a32 = matrix[6];
            a42 = matrix[7];
            a13 = matrix[8];
            a23 = matrix[9];
            a33 = matrix[10];
            a43 = matrix[11];
            x = matrix[12];
            y = matrix[13];
            z = matrix[14];
            angle = _atan2(a32, a33);
            rotationX = angle * _RAD2DEG;
            if (angle) {
              cos = Math.cos(-angle);
              sin = Math.sin(-angle);
              t1 = a12 * cos + a13 * sin;
              t2 = a22 * cos + a23 * sin;
              t3 = a32 * cos + a33 * sin;
              a13 = a12 * -sin + a13 * cos;
              a23 = a22 * -sin + a23 * cos;
              a33 = a32 * -sin + a33 * cos;
              a43 = a42 * -sin + a43 * cos;
              a12 = t1;
              a22 = t2;
              a32 = t3;
            }
            angle = _atan2(-c, a33);
            rotationY = angle * _RAD2DEG;
            if (angle) {
              cos = Math.cos(-angle);
              sin = Math.sin(-angle);
              t1 = a * cos - a13 * sin;
              t2 = b * cos - a23 * sin;
              t3 = c * cos - a33 * sin;
              a43 = d * sin + a43 * cos;
              a = t1;
              b = t2;
              c = t3;
            }
            angle = _atan2(b, a);
            rotation = angle * _RAD2DEG;
            if (angle) {
              cos = Math.cos(angle);
              sin = Math.sin(angle);
              t1 = a * cos + b * sin;
              t2 = a12 * cos + a22 * sin;
              b = b * cos - a * sin;
              a22 = a22 * cos - a12 * sin;
              a = t1;
              a12 = t2;
            }
            if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
              rotationX = rotation = 0;
              rotationY = 180 - rotationY;
            }
            scaleX = _round(Math.sqrt(a * a + b * b + c * c));
            scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
            angle = _atan2(a12, a22);
            skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
            perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
          }
          if (cache.svg) {
            t1 = target.getAttribute("transform");
            cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
            t1 && target.setAttribute("transform", t1);
          }
        }
        if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
          if (invertedScaleX) {
            scaleX *= -1;
            skewX += rotation <= 0 ? 180 : -180;
            rotation += rotation <= 0 ? 180 : -180;
          } else {
            scaleY *= -1;
            skewX += skewX <= 0 ? 180 : -180;
          }
        }
        uncache = uncache || cache.uncache;
        cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
        cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
        cache.z = z + px;
        cache.scaleX = _round(scaleX);
        cache.scaleY = _round(scaleY);
        cache.rotation = _round(rotation) + deg;
        cache.rotationX = _round(rotationX) + deg;
        cache.rotationY = _round(rotationY) + deg;
        cache.skewX = skewX + deg;
        cache.skewY = skewY + deg;
        cache.transformPerspective = perspective + px;
        if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
          style[_transformOriginProp] = _firstTwoOnly(origin);
        }
        cache.xOffset = cache.yOffset = 0;
        cache.force3D = _config.force3D;
        cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
        cache.uncache = 0;
        return cache;
      };
      _firstTwoOnly = function _firstTwoOnly2(value) {
        return (value = value.split(" "))[0] + " " + value[1];
      };
      _addPxTranslate = function _addPxTranslate2(target, start, value) {
        var unit = getUnit(start);
        return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
      };
      _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
        cache.z = "0px";
        cache.rotationY = cache.rotationX = "0deg";
        cache.force3D = 0;
        _renderCSSTransforms(ratio, cache);
      };
      _zeroDeg = "0deg";
      _zeroPx = "0px";
      _endParenthesis = ") ";
      _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
        var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
        if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
          var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
          angle = parseFloat(rotationX) * _DEG2RAD;
          cos = Math.cos(angle);
          x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
          y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
          z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
        }
        if (transformPerspective !== _zeroPx) {
          transforms += "perspective(" + transformPerspective + _endParenthesis;
        }
        if (xPercent || yPercent) {
          transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
        }
        if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
          transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
        }
        if (rotation !== _zeroDeg) {
          transforms += "rotate(" + rotation + _endParenthesis;
        }
        if (rotationY !== _zeroDeg) {
          transforms += "rotateY(" + rotationY + _endParenthesis;
        }
        if (rotationX !== _zeroDeg) {
          transforms += "rotateX(" + rotationX + _endParenthesis;
        }
        if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
          transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
        }
        if (scaleX !== 1 || scaleY !== 1) {
          transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
        }
        target.style[_transformProp] = transforms || "translate(0, 0)";
      };
      _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
        var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
        rotation = parseFloat(rotation);
        skewX = parseFloat(skewX);
        skewY = parseFloat(skewY);
        if (skewY) {
          skewY = parseFloat(skewY);
          skewX += skewY;
          rotation += skewY;
        }
        if (rotation || skewX) {
          rotation *= _DEG2RAD;
          skewX *= _DEG2RAD;
          a11 = Math.cos(rotation) * scaleX;
          a21 = Math.sin(rotation) * scaleX;
          a12 = Math.sin(rotation - skewX) * -scaleY;
          a22 = Math.cos(rotation - skewX) * scaleY;
          if (skewX) {
            skewY *= _DEG2RAD;
            temp = Math.tan(skewX - skewY);
            temp = Math.sqrt(1 + temp * temp);
            a12 *= temp;
            a22 *= temp;
            if (skewY) {
              temp = Math.tan(skewY);
              temp = Math.sqrt(1 + temp * temp);
              a11 *= temp;
              a21 *= temp;
            }
          }
          a11 = _round(a11);
          a21 = _round(a21);
          a12 = _round(a12);
          a22 = _round(a22);
        } else {
          a11 = scaleX;
          a22 = scaleY;
          a21 = a12 = 0;
        }
        if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
          tx = _convertToUnit(target, "x", x, "px");
          ty = _convertToUnit(target, "y", y, "px");
        }
        if (xOrigin || yOrigin || xOffset || yOffset) {
          tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
          ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
        }
        if (xPercent || yPercent) {
          temp = target.getBBox();
          tx = _round(tx + xPercent / 100 * temp.width);
          ty = _round(ty + yPercent / 100 * temp.height);
        }
        temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
        target.setAttribute("transform", temp);
        forceCSS && (target.style[_transformProp] = temp);
      };
      _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
        var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
        if (isString) {
          direction = endValue.split("_")[1];
          if (direction === "short") {
            change %= cap;
            if (change !== change % (cap / 2)) {
              change += change < 0 ? cap : -cap;
            }
          }
          if (direction === "cw" && change < 0) {
            change = (change + cap * _bigNum2) % cap - ~~(change / cap) * cap;
          } else if (direction === "ccw" && change > 0) {
            change = (change - cap * _bigNum2) % cap - ~~(change / cap) * cap;
          }
        }
        plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
        pt.e = finalValue;
        pt.u = "deg";
        plugin._props.push(property);
        return pt;
      };
      _assign = function _assign2(target, source) {
        for (var p in source) {
          target[p] = source[p];
        }
        return target;
      };
      _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
        var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
        if (startCache.svg) {
          startValue = target.getAttribute("transform");
          target.setAttribute("transform", "");
          style[_transformProp] = transforms;
          endCache = _parseTransform(target, 1);
          _removeProperty(target, _transformProp);
          target.setAttribute("transform", startValue);
        } else {
          startValue = getComputedStyle(target)[_transformProp];
          style[_transformProp] = transforms;
          endCache = _parseTransform(target, 1);
          style[_transformProp] = startValue;
        }
        for (p in _transformProps) {
          startValue = startCache[p];
          endValue = endCache[p];
          if (startValue !== endValue && exclude.indexOf(p) < 0) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
            startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
            endNum = parseFloat(endValue);
            plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
            plugin._pt.u = endUnit || 0;
            plugin._props.push(p);
          }
        }
        _assign(endCache, startCache);
      };
      _forEachName("padding,margin,Width,Radius", function(name, index) {
        var t2 = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t2, r, b, l] : [t2 + l, t2 + r, b + r, b + l]).map(function(side) {
          return index < 2 ? name + side : "border" + side + name;
        });
        _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
          var a, vars;
          if (arguments.length < 4) {
            a = props.map(function(prop) {
              return _get(plugin, prop, property);
            });
            vars = a.join(" ");
            return vars.split(a[0]).length === 5 ? a[0] : vars;
          }
          a = (endValue + "").split(" ");
          vars = {};
          props.forEach(function(prop, i) {
            return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
          });
          plugin.init(target, vars, tween);
        };
      });
      CSSPlugin = {
        name: "css",
        register: _initCore,
        targetTest: function targetTest(target) {
          return target.style && target.nodeType;
        },
        init: function init3(target, vars, tween, index, targets) {
          var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
          _pluginInitted || _initCore();
          this.styles = this.styles || _getStyleSaver(target);
          inlineProps = this.styles.props;
          this.tween = tween;
          for (p in vars) {
            if (p === "autoRound") {
              continue;
            }
            endValue = vars[p];
            if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
              continue;
            }
            type = typeof endValue;
            specialProp = _specialProps[p];
            if (type === "function") {
              endValue = endValue.call(tween, index, target, targets);
              type = typeof endValue;
            }
            if (type === "string" && ~endValue.indexOf("random(")) {
              endValue = _replaceRandom(endValue);
            }
            if (specialProp) {
              specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
            } else if (p.substr(0, 2) === "--") {
              startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
              endValue += "";
              _colorExp.lastIndex = 0;
              if (!_colorExp.test(startValue)) {
                startUnit = getUnit(startValue);
                endUnit = getUnit(endValue);
              }
              endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
              this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
              props.push(p);
              inlineProps.push(p, 0, style[p]);
            } else if (type !== "undefined") {
              if (startAt && p in startAt) {
                startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
                _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
                getUnit(startValue + "") || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
                (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
              } else {
                startValue = _get(target, p);
              }
              startNum = parseFloat(startValue);
              relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
              relative && (endValue = endValue.substr(2));
              endNum = parseFloat(endValue);
              if (p in _propertyAliases) {
                if (p === "autoAlpha") {
                  if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                    startNum = 0;
                  }
                  inlineProps.push("visibility", 0, style.visibility);
                  _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                }
                if (p !== "scale" && p !== "transform") {
                  p = _propertyAliases[p];
                  ~p.indexOf(",") && (p = p.split(",")[0]);
                }
              }
              isTransformRelated = p in _transformProps;
              if (isTransformRelated) {
                this.styles.save(p);
                if (!transformPropTween) {
                  cache = target._gsap;
                  cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
                  smooth = vars.smoothOrigin !== false && cache.smooth;
                  transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
                  transformPropTween.dep = 1;
                }
                if (p === "scale") {
                  this._pt = new PropTween(this._pt, cache, "scaleY", startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum || 0, _renderCSSProp);
                  this._pt.u = 0;
                  props.push("scaleY", p);
                  p += "X";
                } else if (p === "transformOrigin") {
                  inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
                  endValue = _convertKeywordsToPercentages(endValue);
                  if (cache.svg) {
                    _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                  } else {
                    endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                    endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                    _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                  }
                  continue;
                } else if (p === "svgOrigin") {
                  _applySVGOrigin(target, endValue, 1, smooth, 0, this);
                  continue;
                } else if (p in _rotationalProperties) {
                  _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
                  continue;
                } else if (p === "smoothOrigin") {
                  _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                  continue;
                } else if (p === "force3D") {
                  cache[p] = endValue;
                  continue;
                } else if (p === "transform") {
                  _addRawTransformPTs(this, endValue, target);
                  continue;
                }
              } else if (!(p in style)) {
                p = _checkPropPrefix(p) || p;
              }
              if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
                startUnit = (startValue + "").substr((startNum + "").length);
                endNum || (endNum = 0);
                endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
                startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
                this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
                this._pt.u = endUnit || 0;
                if (startUnit !== endUnit && endUnit !== "%") {
                  this._pt.b = startValue;
                  this._pt.r = _renderCSSPropWithBeginning;
                }
              } else if (!(p in style)) {
                if (p in target) {
                  this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
                } else {
                  _missingPlugin(p, endValue);
                  continue;
                }
              } else {
                _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
              }
              isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
              props.push(p);
            }
          }
          hasPriority && _sortPropTweensByPriority(this);
        },
        render: function render2(ratio, data) {
          if (data.tween._time || !_reverting2()) {
            var pt = data._pt;
            while (pt) {
              pt.r(ratio, pt.d);
              pt = pt._next;
            }
          } else {
            data.styles.revert();
          }
        },
        get: _get,
        aliases: _propertyAliases,
        getSetter: function getSetter(target, property, plugin) {
          var p = _propertyAliases[property];
          p && p.indexOf(",") < 0 && (property = p);
          return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
        },
        core: {
          _removeProperty,
          _getMatrix
        }
      };
      gsap.utils.checkPrefix = _checkPropPrefix;
      gsap.core.getStyleSaver = _getStyleSaver;
      (function(positionAndScale, rotation, others, aliases) {
        var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
          _transformProps[name] = 1;
        });
        _forEachName(rotation, function(name) {
          _config.units[name] = "deg";
          _rotationalProperties[name] = 1;
        });
        _propertyAliases[all[13]] = positionAndScale + "," + rotation;
        _forEachName(aliases, function(name) {
          var split = name.split(":");
          _propertyAliases[split[1]] = all[split[0]];
        });
      })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
      _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
        _config.units[name] = "px";
      });
      gsap.registerPlugin(CSSPlugin);
    }
  });

  // node_modules/gsap/index.js
  var gsapWithCSS, TweenMaxWithCSS;
  var init_gsap = __esm({
    "node_modules/gsap/index.js"() {
      init_live_reload();
      init_gsap_core();
      init_CSSPlugin();
      gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
      TweenMaxWithCSS = gsapWithCSS.core.Tween;
    }
  });

  // src/motion/cursorMotion.ts
  var cursor, cursorRevealIn, cursorRevealOut, cursorIconRevealIn, cursorIconRevealOut, cursorIconReset, cursorArrowSliderChange, cursorArrowYMovement;
  var init_cursorMotion = __esm({
    "src/motion/cursorMotion.ts"() {
      "use strict";
      init_live_reload();
      init_gsap();
      cursor = document.querySelector(".cursor_component");
      cursorRevealIn = (scaleTo) => {
        cursor.classList.add("mbm-ex");
        const animation = gsapWithCSS.timeline();
        animation.to(cursor, {
          width: scaleTo + "rem",
          height: scaleTo + "rem",
          ease: "power4.out"
        });
      };
      cursorRevealOut = () => {
        cursor.classList.remove("mbm-ex");
        const animation = gsapWithCSS.timeline();
        animation.to(cursor, { width: "0.75rem", height: "0.75rem", ease: "power4.out" });
      };
      cursorIconRevealIn = (icon) => {
        cursor.classList.remove("mbm-ex");
        const animation = gsapWithCSS.timeline();
        animation.set(cursor, { padding: "1rem" });
        animation.set(icon, { opacity: 1, display: "block" });
        animation.to(cursor, { backgroundColor: "#4C9A8C" });
      };
      cursorIconRevealOut = (icon) => {
        const animation = gsapWithCSS.timeline();
        animation.set(cursor, { padding: "0rem" });
        animation.set(icon, { opacity: 0, display: "none" });
        animation.to(cursor, { backgroundColor: "#F09F43" });
      };
      cursorIconReset = () => {
        const animation = gsapWithCSS.timeline();
        animation.to(cursor, { duration: 0, rotate: "0deg" });
      };
      cursorArrowSliderChange = (xType) => {
        const animation = gsapWithCSS.timeline();
        if (xType === "rotate") {
          animation.to(cursor, { duration: 1, rotate: "-180deg", ease: "expo.out" });
        } else {
          animation.to(cursor, { duration: 1, rotate: "0deg", ease: "expo.out" });
        }
        return animation;
      };
      cursorArrowYMovement = (cursorState, yMovement) => {
        const cursorArrow = document.querySelector(".cursor_image.is-arrow");
        const animation = gsapWithCSS.timeline();
        if (cursorState === "rotate") {
          animation.to(cursorArrow, { rotate: -yMovement });
        } else {
          animation.to(cursorArrow, { rotate: yMovement });
        }
      };
    }
  });

  // src/utils/getDevice.ts
  var getDeviceType;
  var init_getDevice = __esm({
    "src/utils/getDevice.ts"() {
      "use strict";
      init_live_reload();
      getDeviceType = () => {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
          return "tablet";
        }
        if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
          ua
        )) {
          return "mobile";
        }
        return "desktop";
      };
    }
  });

  // src/motion/videoPlayerMotion.ts
  var togglePlayMotion, toggleMuteMotion;
  var init_videoPlayerMotion = __esm({
    "src/motion/videoPlayerMotion.ts"() {
      "use strict";
      init_live_reload();
      init_gsap();
      togglePlayMotion = (isPlaying) => {
        const playIcon = document.querySelector(".cursor_image.is-play");
        const pauseIcon = document.querySelector(".cursor_image.is-pause");
        if (isPlaying) {
          gsapWithCSS.set(pauseIcon, { display: "block", opacity: 1 });
          gsapWithCSS.set(playIcon, { display: "none", opacity: 0 });
        } else {
          gsapWithCSS.set(pauseIcon, { display: "none", opacity: 0 });
          gsapWithCSS.set(playIcon, { display: "block", opacity: 1 });
        }
      };
      toggleMuteMotion = (isMuted) => {
        const muteIcon = document.querySelector(".case-hero_mute-image.is-mute");
        const soundIcon = document.querySelector(".case-hero_mute-image.is-sound");
        if (isMuted) {
          gsapWithCSS.set(soundIcon, { display: "none ", opacity: 0 });
          gsapWithCSS.set(muteIcon, { display: "block ", opacity: 1 });
        } else {
          gsapWithCSS.set(soundIcon, { display: "block ", opacity: 1 });
          gsapWithCSS.set(muteIcon, { display: "none ", opacity: 0 });
        }
      };
    }
  });

  // src/components/videoPlayer.ts
  var videoPlayer, toggleFullScreen, togglePlay, toggleMute, getVideoState;
  var init_videoPlayer = __esm({
    "src/components/videoPlayer.ts"() {
      "use strict";
      init_live_reload();
      init_videoPlayerMotion();
      init_getDevice();
      videoPlayer = () => {
        const device12 = getDeviceType();
        const videoEmbed = document.querySelector("[data-video-player]");
        const videoElement = videoEmbed.querySelector("video");
        const muteButton = document.querySelector(".case-hero_mute-button.is-mute");
        const expandButton = document.querySelector(".case-hero_mute-button.is-expand");
        if (device12 !== "mobile") {
          videoElement.addEventListener("click", () => {
            togglePlay(videoElement);
          });
          muteButton.addEventListener("click", () => {
            toggleMute(videoElement);
          });
          expandButton.addEventListener("click", () => {
            toggleFullScreen(videoElement);
          });
        } else {
          videoElement.setAttribute("controls", "");
          videoElement.style.pointerEvents = "auto";
          const removeControls = document.querySelector("[data-player-controls]");
          removeControls.style.display = "none";
        }
      };
      toggleFullScreen = (videoElement) => {
        videoElement.requestFullscreen();
      };
      togglePlay = (videoElement) => {
        if (videoElement.paused || videoElement.ended) {
          videoElement.play();
          togglePlayMotion(true);
        } else {
          videoElement.pause();
          togglePlayMotion(false);
        }
      };
      toggleMute = (videoElement) => {
        if (videoElement.muted) {
          videoElement.muted = false;
          toggleMuteMotion(false);
        } else {
          videoElement.muted = true;
          toggleMuteMotion(true);
        }
      };
      getVideoState = () => {
        const videoEmbed = document.querySelector(".case-hero_video-embed");
        const videoElement = videoEmbed.querySelector("video");
        const isPaused = videoElement.paused;
        return isPaused;
      };
    }
  });

  // src/utils/generateHubspotJSON.ts
  var generateHubspotJSON;
  var init_generateHubspotJSON = __esm({
    "src/utils/generateHubspotJSON.ts"() {
      "use strict";
      init_live_reload();
      generateHubspotJSON = (formData, target) => {
        if (window.location.pathname.includes("/contact")) {
          const checkbox = target.querySelector("#newsletter_signup_checkbox");
          checkbox.classList.add("w-input");
        }
        const formInputs = [...target.querySelectorAll(".w-input")];
        const parsedFormData = [];
        for (let i = 0; i < formInputs.length; i++) {
          const tempInput = formInputs[i];
          if (tempInput.name === "newsletter_signup_checkbox") {
            const isChecked = tempInput.checked;
            let setValue = "";
            if (isChecked) {
              setValue = "true";
            } else {
              setValue = "false";
            }
            const tempData = {
              name: tempInput.name,
              value: setValue
            };
            parsedFormData.push(tempData);
          } else {
            const tempData = {
              name: tempInput.name,
              value: tempInput.value
            };
            parsedFormData.push(tempData);
          }
        }
        const goToWebinarWebinarKey = parsedFormData.find(
          (input) => input.name === "goToWebinarWebinarKey"
        )?.value;
        const sfdcCampaignId = parsedFormData.find((input) => input.name === "sfdcCampaignId")?.value;
        const hutk = document.cookie.replace(/(?:(?:^|.*;\s*)hubspotutk\s*\=\s*([^;]*).*$)|^.*$/, "$1") || void 0;
        const processingPrompt = $(target).find("[id*='gdpr-processing-prompt']");
        const communicationConsent = parsedFormData.filter((item) => item.name.includes("LEGAL_CONSENT")).map((item) => {
          const label = "";
          return {
            value: true,
            text: label,
            subscriptionTypeId: parseInt(item.name.split("LEGAL_CONSENT.subscription_type_")[1])
          };
        });
        const ignoredFields = [
          "cc-num",
          "cc-number",
          "gdpr",
          "LEGAL_CONSENT",
          "goToWebinarWebinarKey",
          "sfdcCampaignId"
        ];
        const data = {
          fields: parsedFormData,
          context: {
            pageUri: window.location.href,
            pageName: document.title,
            sfdcCampaignId,
            goToWebinarKey: goToWebinarWebinarKey,
            hutk
          },
          ...!processingPrompt ? {} : {
            legalConsentOptions: {
              consent: {
                ...!processingPrompt ? {} : {
                  consentToProcess: true,
                  text: processingPrompt.text()
                },
                ...!communicationConsent ? {} : {
                  communications: communicationConsent
                }
              }
            }
          }
        };
        const final_data = JSON.stringify(data);
        return final_data;
      };
    }
  });

  // src/utils/postContactForm.ts
  var postContactData;
  var init_postContactForm = __esm({
    "src/utils/postContactForm.ts"() {
      "use strict";
      init_live_reload();
      postContactData = (data, target) => {
        $.ajax({
          url: target.action,
          method: "POST",
          data,
          contentType: "application/json",
          success: function(response) {
            if (response) {
              if (response.inlineMessage) {
                const parent = $(target).parent();
                parent.children("form").css("display", "none");
                parent.children(".w-form-done").css("display", "block");
              } else if (response.redirectUri) {
                window.location.href = response.redirectUri;
              }
            } else {
            }
          },
          error: function(error) {
            console.log("ERROR", error.responseJSON);
            $(target).css("display", "none").siblings(".w-form-fail").css("display", "block");
          }
        });
      };
    }
  });

  // src/components/interactiveMap.ts
  var interactiveMap_exports = {};
  __export(interactiveMap_exports, {
    default: () => interactiveMap_default,
    interactiveMap: () => interactiveMap
  });
  var interactiveMap, interactiveMap_default;
  var init_interactiveMap = __esm({
    "src/components/interactiveMap.ts"() {
      "use strict";
      init_live_reload();
      init_gsap();
      interactiveMap = () => {
        class InteractiveMap {
          mapParent;
          images;
          content;
          mapElement;
          next;
          prev;
          currentIndex;
          constructor() {
            this.mapParent = document.querySelector(".inter-map_main");
            this.images = [...this.mapParent.querySelectorAll(".inter-map_img-item")].map(
              (item) => item
            );
            this.content = [...this.mapParent.querySelectorAll(".inter-map_content-item")].map(
              (item) => item
            );
            this.next = document.querySelector(".media-slider_button.is-next");
            this.prev = document.querySelector(".media-slider_button.is-prev");
            this.currentIndex = 0;
            this.mapElement = document.querySelector(".inter-map_svg");
            this.init();
            this.setListeners();
            this.initMap();
          }
          init() {
            this.images.forEach((image, index) => {
              gsapWithCSS.set(image, { autoAlpha: index === 0 ? 1 : 0 });
            });
            this.content.forEach((content, index) => {
              gsapWithCSS.set(content, { autoAlpha: index === 0 ? 1 : 0 });
            });
          }
          setListeners() {
            this.next.addEventListener("click", () => {
              this.switchSlide(this.currentIndex + 1);
            });
            this.prev.addEventListener("click", () => {
              this.switchSlide(this.currentIndex - 1);
            });
          }
          switchSlide(nextIndex) {
            const totalSlides = this.images.length;
            const tl = gsapWithCSS.timeline();
            if (nextIndex >= totalSlides) {
              nextIndex = 0;
            } else if (nextIndex < 0) {
              nextIndex = totalSlides - 1;
            }
            if (nextIndex !== this.currentIndex) {
              tl.to(this.images[this.currentIndex], { autoAlpha: 0, duration: 0.5 }).to(this.content[this.currentIndex], { autoAlpha: 0, duration: 0 }, "<").to(this.images[nextIndex], { autoAlpha: 1, duration: 0.5 }, "<").to(this.content[nextIndex], { autoAlpha: 1, duration: 0 }, "<");
              this.currentIndex = nextIndex;
            }
          }
          initMap() {
            console.log("map", this.mapElement);
          }
        }
        new InteractiveMap();
      };
      interactiveMap_default = interactiveMap;
    }
  });

  // src/components/cursor.ts
  var cursor_exports = {};
  __export(cursor_exports, {
    cursor: () => cursor2,
    default: () => cursor_default
  });
  var cursor2, cursor_default;
  var init_cursor = __esm({
    "src/components/cursor.ts"() {
      "use strict";
      init_live_reload();
      init_cursorMotion();
      init_getDevice();
      init_videoPlayer();
      init_gsap();
      cursor2 = () => {
        class Cursor {
          cursor;
          constructor() {
            this.cursor = document.querySelector(".cursor_component");
            this.initCursor();
            this.initHoverEvents();
          }
          initCursor() {
            const device12 = getDeviceType();
            if (device12 === "tablet" || device12 === "mobile") {
              gsapWithCSS.set(this.cursor, { display: "none" });
              return;
            }
            gsapWithCSS.set(this.cursor, { xPercent: -50, yPercent: -50 });
            gsapWithCSS.fromTo(this.cursor, { opacity: 0 }, { delay: 3, opacity: 1 });
            const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
            const mouse = { x: pos.x, y: pos.y };
            const speed = 0.2;
            const xSet = gsapWithCSS.quickSetter(this.cursor, "x", "px");
            const ySet = gsapWithCSS.quickSetter(this.cursor, "y", "px");
            window.addEventListener("mousemove", (e2) => {
              mouse.x = e2.x;
              mouse.y = e2.y;
            });
            gsapWithCSS.ticker.add(() => {
              const dt = 1 - Math.pow(1 - speed, gsapWithCSS.ticker.deltaRatio());
              pos.x += (mouse.x - pos.x) * dt;
              pos.y += (mouse.y - pos.y) * dt;
              xSet(pos.x);
              ySet(pos.y);
            });
          }
          initHoverEvents() {
            const cursorAreas = [...document.querySelectorAll("[data-hover-scale]")];
            for (let i = 0; i < cursorAreas.length; i++) {
              const area = cursorAreas[i];
              const scale = Number(area.dataset.hoverScale);
              const iconType = area.dataset.hoverIcon;
              area.addEventListener("mouseenter", () => {
                cursorRevealIn(scale);
                if (iconType !== void 0) {
                  const areaIcon = this.getAreaIcon(iconType);
                  cursorIconRevealIn(areaIcon);
                }
              });
              area.addEventListener("mouseleave", () => {
                cursorRevealOut();
                if (iconType !== void 0) {
                  const areaIcon = this.getAreaIcon(iconType);
                  cursorIconRevealOut(areaIcon);
                }
              });
            }
          }
          getAreaIcon(type) {
            const cursorImages = [...document.querySelectorAll(".cursor_image")];
            let returnIcon;
            if (type === "arrow") {
              returnIcon = cursorImages[0];
            }
            if (type === "media") {
              const isPaused = getVideoState();
              if (isPaused) {
                returnIcon = cursorImages[2];
              } else {
                returnIcon = cursorImages[1];
              }
            }
            if (type === "drag") {
              returnIcon = cursorImages[3];
            }
            if (type === "expand") {
              returnIcon = cursorImages[4];
            }
            return returnIcon;
          }
        }
        new Cursor();
      };
      cursor_default = cursor2;
    }
  });

  // src/components/logoHover.ts
  var logoHover_exports = {};
  __export(logoHover_exports, {
    clientsHover: () => clientsHover2,
    default: () => logoHover_default
  });
  var clientsHover2, logoHover_default;
  var init_logoHover = __esm({
    "src/components/logoHover.ts"() {
      "use strict";
      init_live_reload();
      init_gsap();
      clientsHover2 = () => {
        const clientSection = document.querySelector(".clients_wrapper");
        const clientLogos = [...document.querySelectorAll(".clients_logo")];
        const cursor3 = document.querySelector(".cursor_component");
        clientSection.addEventListener("mouseenter", () => {
          cursor3.classList.add("mbm-ex");
          gsapWithCSS.to(cursor3, {
            duration: 1,
            backgroundColor: "#13dabc",
            width: "10rem",
            height: "10rem",
            ease: "power4.out"
          });
        });
        clientSection.addEventListener("mouseleave", () => {
          cursor3.classList.remove("mbm-ex");
          gsapWithCSS.to(cursor3, {
            duration: 1,
            backgroundColor: "#F09F43",
            width: "0.75rem",
            height: "0.75rem",
            ease: "power4.out"
          });
        });
        for (const i in clientLogos) {
          const temp = clientLogos[i];
          temp.addEventListener("mouseenter", () => {
            gsapWithCSS.to(temp, { duration: 1, scale: 1.4, ease: "power4.out", inertia: { x: 50, y: -50 } });
          });
          temp.addEventListener("mouseleave", () => {
            gsapWithCSS.to(temp, { duration: 1, scale: 1, ease: "power4.out" });
            gsapWithCSS.to(temp, { x: 0, y: 0 });
          });
          temp.addEventListener("mousemove", (e2) => {
            const setX = e2.movementX * 1;
            const setY = e2.movementY * 1;
            gsapWithCSS.to(temp, { x: setX, y: setY });
          });
        }
      };
      logoHover_default = clientsHover2;
    }
  });

  // src/motion/footerMotion.ts
  var footerTextMovement;
  var init_footerMotion = __esm({
    "src/motion/footerMotion.ts"() {
      "use strict";
      init_live_reload();
      init_footer();
      init_gsap();
      footerTextMovement = () => {
        const footerComponent = document.querySelector(".footer_component");
        footerComponent && (() => {
          const footerTextWrap = footerComponent.querySelector(".footer-overflow-wrap");
          const textWidth = footerTextWrap.scrollWidth;
          const computedMovement = textWidth - textWidth / 3;
          const textSpeed = 45;
          const animation = gsapWithCSS.timeline({
            onComplete: () => {
              animation.restart();
            }
          });
          animation.to(footerTextWrap, {
            duration: textSpeed,
            x: -computedMovement,
            ease: "linear"
          });
        })();
      };
    }
  });

  // src/components/footer.ts
  var footer_exports = {};
  __export(footer_exports, {
    default: () => footer_default,
    footer: () => footer2
  });
  var footer2, footer_default;
  var init_footer = __esm({
    "src/components/footer.ts"() {
      "use strict";
      init_live_reload();
      init_footerMotion();
      init_generateHubspotJSON();
      init_postContactForm();
      footer2 = () => {
        class Footer {
          constructor() {
            this.initFooterSizeAdjustments();
            footerTextMovement();
            this.initFooterForm();
          }
          initFooterSizeAdjustments() {
            if (window.innerWidth >= 992) {
              this.updateFooter();
            }
            window.addEventListener("resize", () => {
              if (window.innerWidth >= 992) {
                this.updateFooter();
              } else {
                const footerSpacer = document.querySelector(".section_footer-spacer");
                if (footerSpacer)
                  footerSpacer.style.height = "0px";
              }
            });
          }
          updateFooter() {
            const footerSpacer = document.querySelector(".section_footer-spacer");
            const footer3 = document.querySelector(".footer_component");
            if (footer3)
              footerSpacer.style.minHeight = "auto";
            if (footer3) {
              const footerHeight = parseInt(getComputedStyle(footer3).height.split("px")[0]) - 64;
              footerSpacer.style.height = `${footerHeight}px`;
            }
          }
          initFooterForm() {
            const footerForm = document.querySelector(".footer_form");
            if (footerForm) {
              footerForm.addEventListener("submit", (e2) => {
                e2.preventDefault();
                const target = e2.target;
                const formData = new FormData(target);
                const formattedData = generateHubspotJSON(formData, target);
                postContactData(formattedData, target);
              });
            }
          }
        }
        new Footer();
      };
      footer_default = footer2;
    }
  });

  // src/index.ts
  init_live_reload();

  // src/components/nav.ts
  init_live_reload();
  init_cursorMotion();

  // src/motion/navMotion.ts
  init_live_reload();
  init_getDevice();
  init_gsap();

  // node_modules/gsap/SplitText.js
  init_live_reload();

  // node_modules/gsap/utils/strings.js
  init_live_reload();
  var emojiExp = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  function getText(e2) {
    var type = e2.nodeType, result = "";
    if (type === 1 || type === 9 || type === 11) {
      if (typeof e2.textContent === "string") {
        return e2.textContent;
      } else {
        for (e2 = e2.firstChild; e2; e2 = e2.nextSibling) {
          result += getText(e2);
        }
      }
    } else if (type === 3 || type === 4) {
      return e2.nodeValue;
    }
    return result;
  }

  // node_modules/gsap/SplitText.js
  var _doc3;
  var _win3;
  var _coreInitted2;
  var _stripExp = /(?:\r|\n|\t\t)/g;
  var _multipleSpacesExp = /(?:\s\s+)/g;
  var _initCore3 = function _initCore4() {
    _doc3 = document;
    _win3 = window;
    _coreInitted2 = 1;
  };
  var _bonusValidated = 1;
  var _getComputedStyle = function _getComputedStyle2(element) {
    return _win3.getComputedStyle(element);
  };
  var _isArray2 = Array.isArray;
  var _slice2 = [].slice;
  var _toArray = function _toArray2(value, leaveStrings) {
    var type;
    return _isArray2(value) ? value : (type = typeof value) === "string" && !leaveStrings && value ? _slice2.call(_doc3.querySelectorAll(value), 0) : value && type === "object" && "length" in value ? _slice2.call(value, 0) : value ? [value] : [];
  };
  var _isAbsolute = function _isAbsolute2(vars) {
    return vars.position === "absolute" || vars.absolute === true;
  };
  var _findSpecialChars = function _findSpecialChars2(text, chars) {
    var i = chars.length, s;
    while (--i > -1) {
      s = chars[i];
      if (text.substr(0, s.length) === s) {
        return s.length;
      }
    }
  };
  var _divStart = " style='position:relative;display:inline-block;'";
  var _cssClassFunc = function _cssClassFunc2(cssClass, tag) {
    if (cssClass === void 0) {
      cssClass = "";
    }
    var iterate = ~cssClass.indexOf("++"), num = 1;
    if (iterate) {
      cssClass = cssClass.split("++").join("");
    }
    return function() {
      return "<" + tag + _divStart + (cssClass ? " class='" + cssClass + (iterate ? num++ : "") + "'>" : ">");
    };
  };
  var _swapText = function _swapText2(element, oldText, newText) {
    var type = element.nodeType;
    if (type === 1 || type === 9 || type === 11) {
      for (element = element.firstChild; element; element = element.nextSibling) {
        _swapText2(element, oldText, newText);
      }
    } else if (type === 3 || type === 4) {
      element.nodeValue = element.nodeValue.split(oldText).join(newText);
    }
  };
  var _pushReversed = function _pushReversed2(a, merge) {
    var i = merge.length;
    while (--i > -1) {
      a.push(merge[i]);
    }
  };
  var _isBeforeWordDelimiter = function _isBeforeWordDelimiter2(e2, root, wordDelimiter) {
    var next;
    while (e2 && e2 !== root) {
      next = e2._next || e2.nextSibling;
      if (next) {
        return next.textContent.charAt(0) === wordDelimiter;
      }
      e2 = e2.parentNode || e2._parent;
    }
  };
  var _deWordify = function _deWordify2(e2) {
    var children = _toArray(e2.childNodes), l = children.length, i, child;
    for (i = 0; i < l; i++) {
      child = children[i];
      if (child._isSplit) {
        _deWordify2(child);
      } else {
        if (i && child.previousSibling && child.previousSibling.nodeType === 3) {
          child.previousSibling.nodeValue += child.nodeType === 3 ? child.nodeValue : child.firstChild.nodeValue;
          e2.removeChild(child);
        } else if (child.nodeType !== 3) {
          e2.insertBefore(child.firstChild, child);
          e2.removeChild(child);
        }
      }
    }
  };
  var _getStyleAsNumber = function _getStyleAsNumber2(name, computedStyle) {
    return parseFloat(computedStyle[name]) || 0;
  };
  var _setPositionsAfterSplit = function _setPositionsAfterSplit2(element, vars, allChars, allWords, allLines, origWidth, origHeight) {
    var cs = _getComputedStyle(element), paddingLeft = _getStyleAsNumber("paddingLeft", cs), lineOffsetY = -999, borderTopAndBottom = _getStyleAsNumber("borderBottomWidth", cs) + _getStyleAsNumber("borderTopWidth", cs), borderLeftAndRight = _getStyleAsNumber("borderLeftWidth", cs) + _getStyleAsNumber("borderRightWidth", cs), padTopAndBottom = _getStyleAsNumber("paddingTop", cs) + _getStyleAsNumber("paddingBottom", cs), padLeftAndRight = _getStyleAsNumber("paddingLeft", cs) + _getStyleAsNumber("paddingRight", cs), lineThreshold = _getStyleAsNumber("fontSize", cs) * (vars.lineThreshold || 0.2), textAlign = cs.textAlign, charArray = [], wordArray = [], lineArray = [], wordDelimiter = vars.wordDelimiter || " ", tag = vars.tag ? vars.tag : vars.span ? "span" : "div", types = vars.type || vars.split || "chars,words,lines", lines = allLines && ~types.indexOf("lines") ? [] : null, words = ~types.indexOf("words"), chars = ~types.indexOf("chars"), absolute = _isAbsolute(vars), linesClass = vars.linesClass, iterateLine = ~(linesClass || "").indexOf("++"), spaceNodesToRemove = [], isFlex = cs.display === "flex", prevInlineDisplay = element.style.display, i, j, l, node, nodes, isChild, curLine, addWordSpaces, style, lineNode, lineWidth, offset;
    iterateLine && (linesClass = linesClass.split("++").join(""));
    isFlex && (element.style.display = "block");
    j = element.getElementsByTagName("*");
    l = j.length;
    nodes = [];
    for (i = 0; i < l; i++) {
      nodes[i] = j[i];
    }
    if (lines || absolute) {
      for (i = 0; i < l; i++) {
        node = nodes[i];
        isChild = node.parentNode === element;
        if (isChild || absolute || chars && !words) {
          offset = node.offsetTop;
          if (lines && isChild && Math.abs(offset - lineOffsetY) > lineThreshold && (node.nodeName !== "BR" || i === 0)) {
            curLine = [];
            lines.push(curLine);
            lineOffsetY = offset;
          }
          if (absolute) {
            node._x = node.offsetLeft;
            node._y = offset;
            node._w = node.offsetWidth;
            node._h = node.offsetHeight;
          }
          if (lines) {
            if (node._isSplit && isChild || !chars && isChild || words && isChild || !words && node.parentNode.parentNode === element && !node.parentNode._isSplit) {
              curLine.push(node);
              node._x -= paddingLeft;
              if (_isBeforeWordDelimiter(node, element, wordDelimiter)) {
                node._wordEnd = true;
              }
            }
            if (node.nodeName === "BR" && (node.nextSibling && node.nextSibling.nodeName === "BR" || i === 0)) {
              lines.push([]);
            }
          }
        }
      }
    }
    for (i = 0; i < l; i++) {
      node = nodes[i];
      isChild = node.parentNode === element;
      if (node.nodeName === "BR") {
        if (lines || absolute) {
          node.parentNode && node.parentNode.removeChild(node);
          nodes.splice(i--, 1);
          l--;
        } else if (!words) {
          element.appendChild(node);
        }
        continue;
      }
      if (absolute) {
        style = node.style;
        if (!words && !isChild) {
          node._x += node.parentNode._x;
          node._y += node.parentNode._y;
        }
        style.left = node._x + "px";
        style.top = node._y + "px";
        style.position = "absolute";
        style.display = "block";
        style.width = node._w + 1 + "px";
        style.height = node._h + "px";
      }
      if (!words && chars) {
        if (node._isSplit) {
          node._next = j = node.nextSibling;
          node.parentNode.appendChild(node);
          while (j && j.nodeType === 3 && j.textContent === " ") {
            node._next = j.nextSibling;
            node.parentNode.appendChild(j);
            j = j.nextSibling;
          }
        } else if (node.parentNode._isSplit) {
          node._parent = node.parentNode;
          if (!node.previousSibling && node.firstChild) {
            node.firstChild._isFirst = true;
          }
          if (node.nextSibling && node.nextSibling.textContent === " " && !node.nextSibling.nextSibling) {
            spaceNodesToRemove.push(node.nextSibling);
          }
          node._next = node.nextSibling && node.nextSibling._isFirst ? null : node.nextSibling;
          node.parentNode.removeChild(node);
          nodes.splice(i--, 1);
          l--;
        } else if (!isChild) {
          offset = !node.nextSibling && _isBeforeWordDelimiter(node.parentNode, element, wordDelimiter);
          node.parentNode._parent && node.parentNode._parent.appendChild(node);
          offset && node.parentNode.appendChild(_doc3.createTextNode(" "));
          if (tag === "span") {
            node.style.display = "inline";
          }
          charArray.push(node);
        }
      } else if (node.parentNode._isSplit && !node._isSplit && node.innerHTML !== "") {
        wordArray.push(node);
      } else if (chars && !node._isSplit) {
        if (tag === "span") {
          node.style.display = "inline";
        }
        charArray.push(node);
      }
    }
    i = spaceNodesToRemove.length;
    while (--i > -1) {
      spaceNodesToRemove[i].parentNode.removeChild(spaceNodesToRemove[i]);
    }
    if (lines) {
      if (absolute) {
        lineNode = _doc3.createElement(tag);
        element.appendChild(lineNode);
        lineWidth = lineNode.offsetWidth + "px";
        offset = lineNode.offsetParent === element ? 0 : element.offsetLeft;
        element.removeChild(lineNode);
      }
      style = element.style.cssText;
      element.style.cssText = "display:none;";
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
      addWordSpaces = wordDelimiter === " " && (!absolute || !words && !chars);
      for (i = 0; i < lines.length; i++) {
        curLine = lines[i];
        lineNode = _doc3.createElement(tag);
        lineNode.style.cssText = "display:block;text-align:" + textAlign + ";position:" + (absolute ? "absolute;" : "relative;");
        if (linesClass) {
          lineNode.className = linesClass + (iterateLine ? i + 1 : "");
        }
        lineArray.push(lineNode);
        l = curLine.length;
        for (j = 0; j < l; j++) {
          if (curLine[j].nodeName !== "BR") {
            node = curLine[j];
            lineNode.appendChild(node);
            addWordSpaces && node._wordEnd && lineNode.appendChild(_doc3.createTextNode(" "));
            if (absolute) {
              if (j === 0) {
                lineNode.style.top = node._y + "px";
                lineNode.style.left = paddingLeft + offset + "px";
              }
              node.style.top = "0px";
              if (offset) {
                node.style.left = node._x - offset + "px";
              }
            }
          }
        }
        if (l === 0) {
          lineNode.innerHTML = "&nbsp;";
        } else if (!words && !chars) {
          _deWordify(lineNode);
          _swapText(lineNode, String.fromCharCode(160), " ");
        }
        if (absolute) {
          lineNode.style.width = lineWidth;
          lineNode.style.height = node._h + "px";
        }
        element.appendChild(lineNode);
      }
      element.style.cssText = style;
    }
    if (absolute) {
      if (origHeight > element.clientHeight) {
        element.style.height = origHeight - padTopAndBottom + "px";
        if (element.clientHeight < origHeight) {
          element.style.height = origHeight + borderTopAndBottom + "px";
        }
      }
      if (origWidth > element.clientWidth) {
        element.style.width = origWidth - padLeftAndRight + "px";
        if (element.clientWidth < origWidth) {
          element.style.width = origWidth + borderLeftAndRight + "px";
        }
      }
    }
    isFlex && (prevInlineDisplay ? element.style.display = prevInlineDisplay : element.style.removeProperty("display"));
    _pushReversed(allChars, charArray);
    words && _pushReversed(allWords, wordArray);
    _pushReversed(allLines, lineArray);
  };
  var _splitRawText = function _splitRawText2(element, vars, wordStart, charStart) {
    var tag = vars.tag ? vars.tag : vars.span ? "span" : "div", types = vars.type || vars.split || "chars,words,lines", chars = ~types.indexOf("chars"), absolute = _isAbsolute(vars), wordDelimiter = vars.wordDelimiter || " ", space = wordDelimiter !== " " ? "" : absolute ? "&#173; " : " ", wordEnd = "</" + tag + ">", wordIsOpen = 1, specialChars = vars.specialChars ? typeof vars.specialChars === "function" ? vars.specialChars : _findSpecialChars : null, text, splitText, i, j, l, character, hasTagStart, testResult, container = _doc3.createElement("div"), parent = element.parentNode;
    parent.insertBefore(container, element);
    container.textContent = element.nodeValue;
    parent.removeChild(element);
    element = container;
    text = getText(element);
    hasTagStart = text.indexOf("<") !== -1;
    if (vars.reduceWhiteSpace !== false) {
      text = text.replace(_multipleSpacesExp, " ").replace(_stripExp, "");
    }
    if (hasTagStart) {
      text = text.split("<").join("{{LT}}");
    }
    l = text.length;
    splitText = (text.charAt(0) === " " ? space : "") + wordStart();
    for (i = 0; i < l; i++) {
      character = text.charAt(i);
      if (specialChars && (testResult = specialChars(text.substr(i), vars.specialChars))) {
        character = text.substr(i, testResult || 1);
        splitText += chars && character !== " " ? charStart() + character + "</" + tag + ">" : character;
        i += testResult - 1;
      } else if (character === wordDelimiter && text.charAt(i - 1) !== wordDelimiter && i) {
        splitText += wordIsOpen ? wordEnd : "";
        wordIsOpen = 0;
        while (text.charAt(i + 1) === wordDelimiter) {
          splitText += space;
          i++;
        }
        if (i === l - 1) {
          splitText += space;
        } else if (text.charAt(i + 1) !== ")") {
          splitText += space + wordStart();
          wordIsOpen = 1;
        }
      } else if (character === "{" && text.substr(i, 6) === "{{LT}}") {
        splitText += chars ? charStart() + "{{LT}}</" + tag + ">" : "{{LT}}";
        i += 5;
      } else if (character.charCodeAt(0) >= 55296 && character.charCodeAt(0) <= 56319 || text.charCodeAt(i + 1) >= 65024 && text.charCodeAt(i + 1) <= 65039) {
        j = ((text.substr(i, 12).split(emojiExp) || [])[1] || "").length || 2;
        splitText += chars && character !== " " ? charStart() + text.substr(i, j) + "</" + tag + ">" : text.substr(i, j);
        i += j - 1;
      } else {
        splitText += chars && character !== " " ? charStart() + character + "</" + tag + ">" : character;
      }
    }
    element.outerHTML = splitText + (wordIsOpen ? wordEnd : "");
    hasTagStart && _swapText(parent, "{{LT}}", "<");
  };
  var _split = function _split2(element, vars, wordStart, charStart) {
    var children = _toArray(element.childNodes), l = children.length, absolute = _isAbsolute(vars), i, child;
    if (element.nodeType !== 3 || l > 1) {
      vars.absolute = false;
      for (i = 0; i < l; i++) {
        child = children[i];
        child._next = child._isFirst = child._parent = child._wordEnd = null;
        if (child.nodeType !== 3 || /\S+/.test(child.nodeValue)) {
          if (absolute && child.nodeType !== 3 && _getComputedStyle(child).display === "inline") {
            child.style.display = "inline-block";
            child.style.position = "relative";
          }
          child._isSplit = true;
          _split2(child, vars, wordStart, charStart);
        }
      }
      vars.absolute = absolute;
      element._isSplit = true;
      return;
    }
    _splitRawText(element, vars, wordStart, charStart);
  };
  var SplitText = /* @__PURE__ */ function() {
    function SplitText2(element, vars) {
      _coreInitted2 || _initCore3();
      this.elements = _toArray(element);
      this.chars = [];
      this.words = [];
      this.lines = [];
      this._originals = [];
      this.vars = vars || {};
      _bonusValidated && this.split(vars);
    }
    var _proto = SplitText2.prototype;
    _proto.split = function split(vars) {
      this.isSplit && this.revert();
      this.vars = vars = vars || this.vars;
      this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
      var i = this.elements.length, tag = vars.tag ? vars.tag : vars.span ? "span" : "div", wordStart = _cssClassFunc(vars.wordsClass, tag), charStart = _cssClassFunc(vars.charsClass, tag), origHeight, origWidth, e2;
      while (--i > -1) {
        e2 = this.elements[i];
        this._originals[i] = e2.innerHTML;
        origHeight = e2.clientHeight;
        origWidth = e2.clientWidth;
        _split(e2, vars, wordStart, charStart);
        _setPositionsAfterSplit(e2, vars, this.chars, this.words, this.lines, origWidth, origHeight);
      }
      this.chars.reverse();
      this.words.reverse();
      this.lines.reverse();
      this.isSplit = true;
      return this;
    };
    _proto.revert = function revert() {
      var originals = this._originals;
      if (!originals) {
        throw "revert() call wasn't scoped properly.";
      }
      this.elements.forEach(function(e2, i) {
        return e2.innerHTML = originals[i];
      });
      this.chars = [];
      this.words = [];
      this.lines = [];
      this.isSplit = false;
      return this;
    };
    SplitText2.create = function create(element, vars) {
      return new SplitText2(element, vars);
    };
    return SplitText2;
  }();
  SplitText.version = "3.11.3";

  // src/motion/navMotion.ts
  gsapWithCSS.registerPlugin(SplitText);
  var navMenu = document.querySelector("#navMenu");
  var navPageLinks = document.querySelectorAll(".nav_link");
  var menuSwatches = document.querySelectorAll(".nav_palette");
  var navOverview = document.querySelector("#navOverview");
  var navInfoLinks = document.querySelectorAll(".nav_info-link");
  var navSpan = document.querySelector(".nav_span");
  var navStamp = document.querySelector(".nav_footer-stamp");
  var navTexture = document.querySelector(".nav_texture-overlay");
  var navIconSpans = document.querySelectorAll(".nav-ui_icon-span");
  var navBG = document.querySelector(".nav-ui_bg-container");
  var lenisContainer = document.querySelector("html");
  var menuOpen = document.querySelector(".nav-ui_menu-text.is-menu");
  var menuClose = document.querySelector(".nav-ui_menu-text.is-close");
  var device = getDeviceType();
  var menuInit = (page) => {
    const hasFurtherIndex = page.substring(1);
    const navMenuText = [...document.querySelectorAll(".nav-ui_menu-text")];
    const navMenuIcon = [...document.querySelectorAll(".nav-ui_icon-span")];
    const navBrand = [...document.querySelectorAll(".nav-ui_brand-image")];
    let setTransition = "default";
    if (hasFurtherIndex === "") {
      setTransition = "bgContent";
      gsapWithCSS.set(navBrand[0], { opacity: 0 });
      gsapWithCSS.set(navBrand[1], { opacity: 1 });
      gsapWithCSS.set(navMenuIcon, { backgroundColor: "#EEEBE6" });
      gsapWithCSS.set(navMenuText, { color: "#EEEBE6" });
    }
    menuTransition(setTransition);
    navBrandHover();
  };
  var menuMotionOpen = () => {
    const animation = gsapWithCSS.timeline({ paused: true });
    animation.set(lenisContainer, { height: "100%" });
    animation.set("body", { overflow: "hidden" });
    animation.set(menuClose, { y: "105%" });
    animation.to(navMenu, { display: "flex" });
    animation.to(menuOpen, { duration: 1, y: "-105%", opacity: 0, ease: "power4.out" }, "<");
    animation.to(menuClose, { duration: 1, y: "0%", opacity: 1, ease: "power4.out" }, "<");
    animation.to(navIconSpans[0], { duration: 1.5, y: "3px", ease: "expo.out" }, "<");
    animation.to(navIconSpans[1], { duration: 1.5, y: "-3px", ease: "expo.out" }, "<");
    if (device === "mobile" || device === "tablet") {
      animation.to(navBG, { backgroundColor: "#212929" }, "<");
    } else {
      animation.to(navBG, { y: "-100%", ease: "power3.out" }, "<");
    }
    animation.from(navMenu, { duration: 0.6, width: "0%", ease: "power3.inOut" }, "<");
    animation.from(navSpan, { duration: 0.4, width: "0%", ease: "power3.inOut" }, "<0.4");
    animation.from(
      navStamp,
      {
        duration: 0.6,
        rotation: 0,
        opacity: 0,
        ease: "power3.out"
      },
      "<0.2"
    );
    animation.from(
      navOverview,
      {
        duration: 0.6,
        y: "2rem",
        opacity: 0,
        ease: "power3.out"
      },
      "<"
    );
    animation.from(navInfoLinks, { duration: 0.6, y: "2rem", opacity: 0, ease: "power3.out" }, "<");
    animation.from(
      navPageLinks,
      {
        stagger: { each: 0.1 },
        y: "100%",
        opacity: 0,
        rotation: 7,
        ease: "expo.out"
      },
      "<"
    );
    animation.from(navTexture, { duration: 1, opacity: 0, ease: "power1.inOut" }, "<");
    animation.from(
      menuSwatches,
      {
        opacity: 0,
        ease: "power1.out",
        duration: 1
      },
      "<"
    );
    return animation;
  };
  var menuMotionClose = () => {
    const animation = gsapWithCSS.timeline({ paused: true });
    animation.set(lenisContainer, { height: "auto" });
    animation.set("body", { overflow: "auto" });
    animation.to(menuSwatches, {
      opacity: 0,
      ease: "power1.out",
      duration: 1
    });
    animation.to(navTexture, { duration: 0.4, opacity: 0, ease: "power3.inOut" }, "<");
    animation.to(
      navInfoLinks,
      {
        duration: 0.6,
        y: "2rem",
        opacity: 0,
        ease: "power3.out"
      },
      "<"
    );
    animation.to(
      navOverview,
      {
        duration: 0.6,
        y: "2rem",
        opacity: 0,
        ease: "power3.out"
      },
      "<"
    );
    animation.to(
      navPageLinks,
      {
        duration: 1,
        y: "100%",
        opacity: 0,
        ease: "expo.out"
      },
      "<"
    );
    animation.to(
      navStamp,
      {
        duration: 0.6,
        rotation: 0,
        opacity: 0,
        ease: "power3.out"
      },
      "<"
    );
    animation.to(navSpan, { duration: 0.4, width: "0%", ease: "expo.inOut" }, "<");
    animation.to(menuOpen, { duration: 1, y: "0%", opacity: 1, ease: "power4.out" }, "<");
    animation.to(menuClose, { duration: 1, y: "100%", opacity: 0, ease: "power4.out" }, "<");
    animation.to("#menuCloseText", { opacity: 0 }, "<");
    animation.to(navIconSpans[0], { duration: 1.5, y: "0px", ease: "expo.out" }, "<");
    animation.to(navIconSpans[1], { duration: 1.5, y: "0px", ease: "expo.out" }, "<");
    animation.to(navMenu, { duration: 0.6, width: "0%", ease: "power3.inOut" }, "<0.4");
    if (device === "desktop") {
      animation.to(navBG, { y: "0%", ease: "power3.out" }, "<0.4");
    }
    animation.set(navMenu, { display: "none" });
    return animation;
  };
  var menuLinkHoverIn = (curLink) => {
    const animation = gsapWithCSS.timeline({});
    animation.to(curLink, { color: "rgba(248,244,238,1)", ease: "expo.out" });
  };
  var menuLinkHoverOut = (curLink) => {
    const animation = gsapWithCSS.timeline();
    animation.to(curLink, { color: "rgba(248,244,238,0)", ease: "expo.out" });
    curLink.classList.add("text-stroke-white");
  };
  var menuTransition = (type) => {
    const navBG2 = document.querySelector(".nav-ui_bg-container");
    const navBrand = [...document.querySelectorAll(".nav-ui_brand-image")];
    const navMenuText = [...document.querySelectorAll(".nav-ui_menu-text")];
    const navMenuIcon = [...document.querySelectorAll(".nav-ui_icon-span")];
    const triggerElement = document.querySelector(".nav_scroll-trigger");
    let setColor = "#eeebe6";
    const windowLocation = window.location.pathname;
    let setStart = "25% top";
    let setEnd = "25% top";
    if (windowLocation === "/") {
      setStart = "100% top";
      setEnd = "100% top";
    }
    if (windowLocation.includes("/contact")) {
      setColor = "#212929";
      setStart = "-1% top";
      setEnd = "-1% top";
    }
    const animation = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: setStart,
        end: setEnd,
        toggleActions: "play none none reverse"
        // markers: { startColor: 'olive', endColor: 'lightblue' },
      }
    });
    animation.set(navBG2, { backgroundColor: setColor });
    if (type === "default") {
      animation.to(navBG2, { opacity: 1, ease: "power4.out" });
    } else {
      animation.to(navBG2, { opacity: 1, ease: "power4.ouut" });
      animation.to(navBrand[1], { opacity: 0, ease: "power4.out" }, "<");
      animation.to(navBrand[0], { opacity: 1, ease: "power4.out" }, "<");
      animation.to(navMenuText, { color: "#EC2543" }, "<");
      animation.to(navMenuIcon, { backgroundColor: "#EC2543" }, "<");
    }
  };
  var navBrandHover = () => {
    const navBrandIcons = [...document.querySelectorAll(".nav-ui_brand-icon")];
    const kWrappers = [...document.querySelectorAll(".nav-ui_brand-wrap.is-karsh")];
    const hWrappers = [...document.querySelectorAll(".nav-ui_brand-wrap.is-hagan")];
    const animation = gsapWithCSS.timeline();
    sortIcons();
    function sortIcons() {
      const navBrandIcons2 = [...document.querySelectorAll(".nav-ui_brand-icon")];
      const holdKs = [];
      const holdHs = [];
      const holdSs = [];
      for (let i = 0; i < navBrandIcons2.length; i++) {
        const temp = navBrandIcons2[i];
        if (i <= 4) {
          holdKs.push(temp);
        } else if (i > 4 && i <= 6) {
          holdSs.push(temp);
        } else if (i > 6 && i <= 11) {
          holdHs.push(temp);
        }
      }
      const returnArray = [holdKs, holdSs, holdHs];
    }
  };

  // src/components/nav.ts
  init_getDevice();
  init_gsap();
  var menu = () => {
    const windowLocation = window.location.pathname;
    const navMenu2 = document.querySelector("#navMenu");
    const menuButton = document.querySelector("#navMenuButton");
    const menuCloseOffset = document.querySelector(".nav_x-offset");
    let menuOpenAnimation;
    let menuCloseAnimation;
    navMenu2 && (() => {
      menuOpenAnimation = menuMotionOpen();
      menuCloseAnimation = menuMotionClose();
      menuInit(windowLocation);
    })();
    let menuIsOpen = false;
    menuButton && (() => {
      menuButton.addEventListener("click", () => {
        menuIsOpen = !menuIsOpen;
        if (menuIsOpen === true) {
          menuOpenAnimation.play(0);
        } else {
          menuCloseAnimation.play(0);
          resetNav();
        }
      });
    })();
    menuCloseOffset && (() => {
      menuCloseOffset.addEventListener("click", () => {
        menuIsOpen = false;
        menuCloseAnimation.play(0);
        resetNav();
      });
    })();
    document.addEventListener("keydown", (e2) => {
      const keyPressed = e2.key;
      if (keyPressed === "Escape") {
        if (menuIsOpen === true) {
          menuIsOpen = false;
          menuCloseAnimation.play(0);
          resetNav();
        }
      }
    });
    function resetNav() {
      const device12 = getDeviceType();
      if (device12 === "tablet" || device12 === "mobile") {
        const navBG2 = document.querySelector(".nav-ui_bg-container");
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        let navTransitionTrigger;
        if (windowLocation === "/") {
          navTransitionTrigger = window.innerHeight;
        } else {
          navTransitionTrigger = window.innerHeight * 0.6;
        }
        if (scrollTop < navTransitionTrigger) {
          gsapWithCSS.to(navBG2, { delay: 1, backgroundColor: "transparent" });
        } else {
          gsapWithCSS.to(navBG2, { delay: 1, backgroundColor: "#eeebe6" });
        }
      }
    }
    const navLinks = [...document.querySelectorAll(".nav_link")];
    for (let i = 0; i < navLinks.length; i++) {
      const linkTemp = navLinks[i];
      linkTemp.addEventListener("mouseenter", (e2) => {
        const enterLink = e2.target;
        menuLinkHoverIn(enterLink);
      });
      linkTemp.addEventListener("mouseleave", (e2) => {
        const leftLink = e2.target;
        menuLinkHoverOut(leftLink);
      });
    }
    navMenu2 && (() => {
      navMenu2.addEventListener("mousemove", (e2) => {
        const mouseY = e2.movementY;
        cursorArrowYMovement("default", mouseY);
      });
    })();
  };

  // src/components/pageTransition.ts
  init_live_reload();
  init_gsap();
  var pageTransition = () => {
    const transitionElement = document.querySelector(".transition_component");
    const allLinks = [...document.querySelectorAll("a")];
    gsapWithCSS.to(transitionElement, {
      delay: 0.5,
      duration: 0.5,
      opacity: 0,
      display: "none",
      ease: "power3.out",
      onComplete: () => {
        gsapWithCSS.set("html", { height: "auto" });
        gsapWithCSS.set("body", { overflow: "auto" });
      }
    });
    for (const i in allLinks) {
      const temp = allLinks[i];
      temp.addEventListener("click", (e2) => {
        if (temp.hostname === window.location.host && temp.href.indexOf("#") === -1 && temp.target !== "_blank") {
          e2.preventDefault();
          const destination = temp.href;
          gsapWithCSS.to(transitionElement, {
            display: "block",
            duration: 0.5,
            opacity: 1,
            ease: "power3.out",
            onComplete: () => {
              window.location.href = destination;
            }
          });
        }
      });
    }
    window.onpageshow = function(event) {
      if (event.persisted) {
        window.location.reload();
      }
    };
  };

  // src/pages/about.ts
  init_live_reload();

  // src/components/draggableSlider.ts
  init_live_reload();
  init_getDevice();
  init_gsap();

  // node_modules/gsap/Draggable.js
  init_live_reload();

  // node_modules/gsap/utils/matrix.js
  init_live_reload();
  var _doc4;
  var _win4;
  var _docElement2;
  var _body;
  var _divContainer;
  var _svgContainer;
  var _identityMatrix;
  var _gEl;
  var _transformProp2 = "transform";
  var _transformOriginProp2 = _transformProp2 + "Origin";
  var _hasOffsetBug;
  var _setDoc = function _setDoc2(element) {
    var doc = element.ownerDocument || element;
    if (!(_transformProp2 in element.style) && "msTransform" in element.style) {
      _transformProp2 = "msTransform";
      _transformOriginProp2 = _transformProp2 + "Origin";
    }
    while (doc.parentNode && (doc = doc.parentNode)) {
    }
    _win4 = window;
    _identityMatrix = new Matrix2D();
    if (doc) {
      _doc4 = doc;
      _docElement2 = doc.documentElement;
      _body = doc.body;
      _gEl = _doc4.createElementNS("http://www.w3.org/2000/svg", "g");
      _gEl.style.transform = "none";
      var d1 = doc.createElement("div"), d2 = doc.createElement("div");
      _body.appendChild(d1);
      d1.appendChild(d2);
      d1.style.position = "static";
      d1.style[_transformProp2] = "translate3d(0,0,1px)";
      _hasOffsetBug = d2.offsetParent !== d1;
      _body.removeChild(d1);
    }
    return doc;
  };
  var _forceNonZeroScale = function _forceNonZeroScale2(e2) {
    var a, cache;
    while (e2 && e2 !== _body) {
      cache = e2._gsap;
      cache && cache.uncache && cache.get(e2, "x");
      if (cache && !cache.scaleX && !cache.scaleY && cache.renderTransform) {
        cache.scaleX = cache.scaleY = 1e-4;
        cache.renderTransform(1, cache);
        a ? a.push(cache) : a = [cache];
      }
      e2 = e2.parentNode;
    }
    return a;
  };
  var _svgTemps = [];
  var _divTemps = [];
  var _getDocScrollTop = function _getDocScrollTop2() {
    return _win4.pageYOffset || _doc4.scrollTop || _docElement2.scrollTop || _body.scrollTop || 0;
  };
  var _getDocScrollLeft = function _getDocScrollLeft2() {
    return _win4.pageXOffset || _doc4.scrollLeft || _docElement2.scrollLeft || _body.scrollLeft || 0;
  };
  var _svgOwner = function _svgOwner2(element) {
    return element.ownerSVGElement || ((element.tagName + "").toLowerCase() === "svg" ? element : null);
  };
  var _isFixed = function _isFixed2(element) {
    if (_win4.getComputedStyle(element).position === "fixed") {
      return true;
    }
    element = element.parentNode;
    if (element && element.nodeType === 1) {
      return _isFixed2(element);
    }
  };
  var _createSibling = function _createSibling2(element, i) {
    if (element.parentNode && (_doc4 || _setDoc(element))) {
      var svg = _svgOwner(element), ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", type = svg ? i ? "rect" : "g" : "div", x = i !== 2 ? 0 : 100, y = i === 3 ? 100 : 0, css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", e2 = _doc4.createElementNS ? _doc4.createElementNS(ns.replace(/^https/, "http"), type) : _doc4.createElement(type);
      if (i) {
        if (!svg) {
          if (!_divContainer) {
            _divContainer = _createSibling2(element);
            _divContainer.style.cssText = css;
          }
          e2.style.cssText = css + "width:0.1px;height:0.1px;top:" + y + "px;left:" + x + "px";
          _divContainer.appendChild(e2);
        } else {
          _svgContainer || (_svgContainer = _createSibling2(element));
          e2.setAttribute("width", 0.01);
          e2.setAttribute("height", 0.01);
          e2.setAttribute("transform", "translate(" + x + "," + y + ")");
          _svgContainer.appendChild(e2);
        }
      }
      return e2;
    }
    throw "Need document and parent.";
  };
  var _consolidate = function _consolidate2(m) {
    var c = new Matrix2D(), i = 0;
    for (; i < m.numberOfItems; i++) {
      c.multiply(m.getItem(i).matrix);
    }
    return c;
  };
  var _getCTM = function _getCTM2(svg) {
    var m = svg.getCTM(), transform;
    if (!m) {
      transform = svg.style[_transformProp2];
      svg.style[_transformProp2] = "none";
      svg.appendChild(_gEl);
      m = _gEl.getCTM();
      svg.removeChild(_gEl);
      transform ? svg.style[_transformProp2] = transform : svg.style.removeProperty(_transformProp2.replace(/([A-Z])/g, "-$1").toLowerCase());
    }
    return m || _identityMatrix.clone();
  };
  var _placeSiblings = function _placeSiblings2(element, adjustGOffset) {
    var svg = _svgOwner(element), isRootSVG = element === svg, siblings = svg ? _svgTemps : _divTemps, parent = element.parentNode, container, m, b, x, y, cs;
    if (element === _win4) {
      return element;
    }
    siblings.length || siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
    container = svg ? _svgContainer : _divContainer;
    if (svg) {
      if (isRootSVG) {
        b = _getCTM(element);
        x = -b.e / b.a;
        y = -b.f / b.d;
        m = _identityMatrix;
      } else if (element.getBBox) {
        b = element.getBBox();
        m = element.transform ? element.transform.baseVal : {};
        m = !m.numberOfItems ? _identityMatrix : m.numberOfItems > 1 ? _consolidate(m) : m.getItem(0).matrix;
        x = m.a * b.x + m.c * b.y;
        y = m.b * b.x + m.d * b.y;
      } else {
        m = new Matrix2D();
        x = y = 0;
      }
      if (adjustGOffset && element.tagName.toLowerCase() === "g") {
        x = y = 0;
      }
      (isRootSVG ? svg : parent).appendChild(container);
      container.setAttribute("transform", "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + (m.e + x) + "," + (m.f + y) + ")");
    } else {
      x = y = 0;
      if (_hasOffsetBug) {
        m = element.offsetParent;
        b = element;
        while (b && (b = b.parentNode) && b !== m && b.parentNode) {
          if ((_win4.getComputedStyle(b)[_transformProp2] + "").length > 4) {
            x = b.offsetLeft;
            y = b.offsetTop;
            b = 0;
          }
        }
      }
      cs = _win4.getComputedStyle(element);
      if (cs.position !== "absolute" && cs.position !== "fixed") {
        m = element.offsetParent;
        while (parent && parent !== m) {
          x += parent.scrollLeft || 0;
          y += parent.scrollTop || 0;
          parent = parent.parentNode;
        }
      }
      b = container.style;
      b.top = element.offsetTop - y + "px";
      b.left = element.offsetLeft - x + "px";
      b[_transformProp2] = cs[_transformProp2];
      b[_transformOriginProp2] = cs[_transformOriginProp2];
      b.position = cs.position === "fixed" ? "fixed" : "absolute";
      element.parentNode.appendChild(container);
    }
    return container;
  };
  var _setMatrix = function _setMatrix2(m, a, b, c, d, e2, f) {
    m.a = a;
    m.b = b;
    m.c = c;
    m.d = d;
    m.e = e2;
    m.f = f;
    return m;
  };
  var Matrix2D = /* @__PURE__ */ function() {
    function Matrix2D2(a, b, c, d, e2, f) {
      if (a === void 0) {
        a = 1;
      }
      if (b === void 0) {
        b = 0;
      }
      if (c === void 0) {
        c = 0;
      }
      if (d === void 0) {
        d = 1;
      }
      if (e2 === void 0) {
        e2 = 0;
      }
      if (f === void 0) {
        f = 0;
      }
      _setMatrix(this, a, b, c, d, e2, f);
    }
    var _proto = Matrix2D2.prototype;
    _proto.inverse = function inverse() {
      var a = this.a, b = this.b, c = this.c, d = this.d, e2 = this.e, f = this.f, determinant = a * d - b * c || 1e-10;
      return _setMatrix(this, d / determinant, -b / determinant, -c / determinant, a / determinant, (c * f - d * e2) / determinant, -(a * f - b * e2) / determinant);
    };
    _proto.multiply = function multiply(matrix) {
      var a = this.a, b = this.b, c = this.c, d = this.d, e2 = this.e, f = this.f, a2 = matrix.a, b2 = matrix.c, c2 = matrix.b, d2 = matrix.d, e22 = matrix.e, f2 = matrix.f;
      return _setMatrix(this, a2 * a + c2 * c, a2 * b + c2 * d, b2 * a + d2 * c, b2 * b + d2 * d, e2 + e22 * a + f2 * c, f + e22 * b + f2 * d);
    };
    _proto.clone = function clone() {
      return new Matrix2D2(this.a, this.b, this.c, this.d, this.e, this.f);
    };
    _proto.equals = function equals(matrix) {
      var a = this.a, b = this.b, c = this.c, d = this.d, e2 = this.e, f = this.f;
      return a === matrix.a && b === matrix.b && c === matrix.c && d === matrix.d && e2 === matrix.e && f === matrix.f;
    };
    _proto.apply = function apply(point, decoratee) {
      if (decoratee === void 0) {
        decoratee = {};
      }
      var x = point.x, y = point.y, a = this.a, b = this.b, c = this.c, d = this.d, e2 = this.e, f = this.f;
      decoratee.x = x * a + y * c + e2 || 0;
      decoratee.y = x * b + y * d + f || 0;
      return decoratee;
    };
    return Matrix2D2;
  }();
  function getGlobalMatrix(element, inverse, adjustGOffset, includeScrollInFixed) {
    if (!element || !element.parentNode || (_doc4 || _setDoc(element)).documentElement === element) {
      return new Matrix2D();
    }
    var zeroScales = _forceNonZeroScale(element), svg = _svgOwner(element), temps = svg ? _svgTemps : _divTemps, container = _placeSiblings(element, adjustGOffset), b1 = temps[0].getBoundingClientRect(), b2 = temps[1].getBoundingClientRect(), b3 = temps[2].getBoundingClientRect(), parent = container.parentNode, isFixed = !includeScrollInFixed && _isFixed(element), m = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + (isFixed ? 0 : _getDocScrollLeft()), b1.top + (isFixed ? 0 : _getDocScrollTop()));
    parent.removeChild(container);
    if (zeroScales) {
      b1 = zeroScales.length;
      while (b1--) {
        b2 = zeroScales[b1];
        b2.scaleX = b2.scaleY = 0;
        b2.renderTransform(1, b2);
      }
    }
    return inverse ? m.inverse() : m;
  }

  // node_modules/gsap/Draggable.js
  function _assertThisInitialized2(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _inheritsLoose2(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var gsap2;
  var _win5;
  var _doc5;
  var _docElement3;
  var _body2;
  var _tempDiv2;
  var _placeholderDiv;
  var _coreInitted3;
  var _checkPrefix;
  var _toArray3;
  var _supportsPassive;
  var _isTouchDevice;
  var _touchEventLookup;
  var _isMultiTouching;
  var _isAndroid;
  var InertiaPlugin;
  var _defaultCursor;
  var _supportsPointer;
  var _dragCount = 0;
  var _windowExists5 = function _windowExists6() {
    return typeof window !== "undefined";
  };
  var _getGSAP = function _getGSAP2() {
    return gsap2 || _windowExists5() && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
  };
  var _isFunction3 = function _isFunction4(value) {
    return typeof value === "function";
  };
  var _isObject3 = function _isObject4(value) {
    return typeof value === "object";
  };
  var _isUndefined3 = function _isUndefined4(value) {
    return typeof value === "undefined";
  };
  var _emptyFunc3 = function _emptyFunc4() {
    return false;
  };
  var _transformProp3 = "transform";
  var _transformOriginProp3 = "transformOrigin";
  var _round3 = function _round4(value) {
    return Math.round(value * 1e4) / 1e4;
  };
  var _isArray3 = Array.isArray;
  var _createElement3 = function _createElement4(type, ns) {
    var e2 = _doc5.createElementNS ? _doc5.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc5.createElement(type);
    return e2.style ? e2 : _doc5.createElement(type);
  };
  var _RAD2DEG2 = 180 / Math.PI;
  var _bigNum3 = 1e20;
  var _identityMatrix2 = new Matrix2D();
  var _getTime = Date.now || function() {
    return (/* @__PURE__ */ new Date()).getTime();
  };
  var _renderQueue = [];
  var _lookup = {};
  var _lookupCount = 0;
  var _clickableTagExp = /^(?:a|input|textarea|button|select)$/i;
  var _lastDragTime = 0;
  var _temp1 = {};
  var _windowProxy = {};
  var _copy = function _copy2(obj, factor) {
    var copy = {}, p;
    for (p in obj) {
      copy[p] = factor ? obj[p] * factor : obj[p];
    }
    return copy;
  };
  var _extend = function _extend2(obj, defaults2) {
    for (var p in defaults2) {
      if (!(p in obj)) {
        obj[p] = defaults2[p];
      }
    }
    return obj;
  };
  var _setTouchActionForAllDescendants = function _setTouchActionForAllDescendants2(elements, value) {
    var i = elements.length, children;
    while (i--) {
      value ? elements[i].style.touchAction = value : elements[i].style.removeProperty("touch-action");
      children = elements[i].children;
      children && children.length && _setTouchActionForAllDescendants2(children, value);
    }
  };
  var _renderQueueTick = function _renderQueueTick2() {
    return _renderQueue.forEach(function(func) {
      return func();
    });
  };
  var _addToRenderQueue = function _addToRenderQueue2(func) {
    _renderQueue.push(func);
    if (_renderQueue.length === 1) {
      gsap2.ticker.add(_renderQueueTick);
    }
  };
  var _renderQueueTimeout = function _renderQueueTimeout2() {
    return !_renderQueue.length && gsap2.ticker.remove(_renderQueueTick);
  };
  var _removeFromRenderQueue = function _removeFromRenderQueue2(func) {
    var i = _renderQueue.length;
    while (i--) {
      if (_renderQueue[i] === func) {
        _renderQueue.splice(i, 1);
      }
    }
    gsap2.to(_renderQueueTimeout, {
      overwrite: true,
      delay: 15,
      duration: 0,
      onComplete: _renderQueueTimeout,
      data: "_draggable"
    });
  };
  var _setDefaults3 = function _setDefaults4(obj, defaults2) {
    for (var p in defaults2) {
      if (!(p in obj)) {
        obj[p] = defaults2[p];
      }
    }
    return obj;
  };
  var _addListener = function _addListener2(element, type, func, capture) {
    if (element.addEventListener) {
      var touchType = _touchEventLookup[type];
      capture = capture || (_supportsPassive ? {
        passive: false
      } : null);
      element.addEventListener(touchType || type, func, capture);
      touchType && type !== touchType && element.addEventListener(type, func, capture);
    }
  };
  var _removeListener = function _removeListener2(element, type, func) {
    if (element.removeEventListener) {
      var touchType = _touchEventLookup[type];
      element.removeEventListener(touchType || type, func);
      touchType && type !== touchType && element.removeEventListener(type, func);
    }
  };
  var _preventDefault = function _preventDefault2(event) {
    event.preventDefault && event.preventDefault();
    event.preventManipulation && event.preventManipulation();
  };
  var _hasTouchID = function _hasTouchID2(list, ID) {
    var i = list.length;
    while (i--) {
      if (list[i].identifier === ID) {
        return true;
      }
    }
  };
  var _onMultiTouchDocumentEnd = function _onMultiTouchDocumentEnd2(event) {
    _isMultiTouching = event.touches && _dragCount < event.touches.length;
    _removeListener(event.target, "touchend", _onMultiTouchDocumentEnd2);
  };
  var _onMultiTouchDocument = function _onMultiTouchDocument2(event) {
    _isMultiTouching = event.touches && _dragCount < event.touches.length;
    _addListener(event.target, "touchend", _onMultiTouchDocumentEnd);
  };
  var _getDocScrollTop3 = function _getDocScrollTop4(doc) {
    return _win5.pageYOffset || doc.scrollTop || doc.documentElement.scrollTop || doc.body.scrollTop || 0;
  };
  var _getDocScrollLeft3 = function _getDocScrollLeft4(doc) {
    return _win5.pageXOffset || doc.scrollLeft || doc.documentElement.scrollLeft || doc.body.scrollLeft || 0;
  };
  var _addScrollListener = function _addScrollListener2(e2, callback) {
    _addListener(e2, "scroll", callback);
    if (!_isRoot(e2.parentNode)) {
      _addScrollListener2(e2.parentNode, callback);
    }
  };
  var _removeScrollListener = function _removeScrollListener2(e2, callback) {
    _removeListener(e2, "scroll", callback);
    if (!_isRoot(e2.parentNode)) {
      _removeScrollListener2(e2.parentNode, callback);
    }
  };
  var _isRoot = function _isRoot2(e2) {
    return !!(!e2 || e2 === _docElement3 || e2.nodeType === 9 || e2 === _doc5.body || e2 === _win5 || !e2.nodeType || !e2.parentNode);
  };
  var _getMaxScroll = function _getMaxScroll2(element, axis) {
    var dim = axis === "x" ? "Width" : "Height", scroll = "scroll" + dim, client = "client" + dim;
    return Math.max(0, _isRoot(element) ? Math.max(_docElement3[scroll], _body2[scroll]) - (_win5["inner" + dim] || _docElement3[client] || _body2[client]) : element[scroll] - element[client]);
  };
  var _recordMaxScrolls = function _recordMaxScrolls2(e2, skipCurrent) {
    var x = _getMaxScroll(e2, "x"), y = _getMaxScroll(e2, "y");
    if (_isRoot(e2)) {
      e2 = _windowProxy;
    } else {
      _recordMaxScrolls2(e2.parentNode, skipCurrent);
    }
    e2._gsMaxScrollX = x;
    e2._gsMaxScrollY = y;
    if (!skipCurrent) {
      e2._gsScrollX = e2.scrollLeft || 0;
      e2._gsScrollY = e2.scrollTop || 0;
    }
  };
  var _setStyle = function _setStyle2(element, property, value) {
    var style = element.style;
    if (!style) {
      return;
    }
    if (_isUndefined3(style[property])) {
      property = _checkPrefix(property, element) || property;
    }
    if (value == null) {
      style.removeProperty && style.removeProperty(property.replace(/([A-Z])/g, "-$1").toLowerCase());
    } else {
      style[property] = value;
    }
  };
  var _getComputedStyle3 = function _getComputedStyle4(element) {
    return _win5.getComputedStyle(element instanceof Element ? element : element.host || (element.parentNode || {}).host || element);
  };
  var _tempRect = {};
  var _parseRect = function _parseRect2(e2) {
    if (e2 === _win5) {
      _tempRect.left = _tempRect.top = 0;
      _tempRect.width = _tempRect.right = _docElement3.clientWidth || e2.innerWidth || _body2.clientWidth || 0;
      _tempRect.height = _tempRect.bottom = (e2.innerHeight || 0) - 20 < _docElement3.clientHeight ? _docElement3.clientHeight : e2.innerHeight || _body2.clientHeight || 0;
      return _tempRect;
    }
    var doc = e2.ownerDocument || _doc5, r = !_isUndefined3(e2.pageX) ? {
      left: e2.pageX - _getDocScrollLeft3(doc),
      top: e2.pageY - _getDocScrollTop3(doc),
      right: e2.pageX - _getDocScrollLeft3(doc) + 1,
      bottom: e2.pageY - _getDocScrollTop3(doc) + 1
    } : !e2.nodeType && !_isUndefined3(e2.left) && !_isUndefined3(e2.top) ? e2 : _toArray3(e2)[0].getBoundingClientRect();
    if (_isUndefined3(r.right) && !_isUndefined3(r.width)) {
      r.right = r.left + r.width;
      r.bottom = r.top + r.height;
    } else if (_isUndefined3(r.width)) {
      r = {
        width: r.right - r.left,
        height: r.bottom - r.top,
        right: r.right,
        left: r.left,
        bottom: r.bottom,
        top: r.top
      };
    }
    return r;
  };
  var _dispatchEvent = function _dispatchEvent2(target, type, callbackName) {
    var vars = target.vars, callback = vars[callbackName], listeners = target._listeners[type], result;
    if (_isFunction3(callback)) {
      result = callback.apply(vars.callbackScope || target, vars[callbackName + "Params"] || [target.pointerEvent]);
    }
    if (listeners && target.dispatchEvent(type) === false) {
      result = false;
    }
    return result;
  };
  var _getBounds = function _getBounds2(target, context3) {
    var e2 = _toArray3(target)[0], top, left, offset;
    if (!e2.nodeType && e2 !== _win5) {
      if (!_isUndefined3(target.left)) {
        offset = {
          x: 0,
          y: 0
        };
        return {
          left: target.left - offset.x,
          top: target.top - offset.y,
          width: target.width,
          height: target.height
        };
      }
      left = target.min || target.minX || target.minRotation || 0;
      top = target.min || target.minY || 0;
      return {
        left,
        top,
        width: (target.max || target.maxX || target.maxRotation || 0) - left,
        height: (target.max || target.maxY || 0) - top
      };
    }
    return _getElementBounds(e2, context3);
  };
  var _point1 = {};
  var _getElementBounds = function _getElementBounds2(element, context3) {
    context3 = _toArray3(context3)[0];
    var isSVG = element.getBBox && element.ownerSVGElement, doc = element.ownerDocument || _doc5, left, right, top, bottom, matrix, p1, p2, p3, p4, bbox, width, height, cs;
    if (element === _win5) {
      top = _getDocScrollTop3(doc);
      left = _getDocScrollLeft3(doc);
      right = left + (doc.documentElement.clientWidth || element.innerWidth || doc.body.clientWidth || 0);
      bottom = top + ((element.innerHeight || 0) - 20 < doc.documentElement.clientHeight ? doc.documentElement.clientHeight : element.innerHeight || doc.body.clientHeight || 0);
    } else if (context3 === _win5 || _isUndefined3(context3)) {
      return element.getBoundingClientRect();
    } else {
      left = top = 0;
      if (isSVG) {
        bbox = element.getBBox();
        width = bbox.width;
        height = bbox.height;
      } else {
        if (element.viewBox && (bbox = element.viewBox.baseVal)) {
          left = bbox.x || 0;
          top = bbox.y || 0;
          width = bbox.width;
          height = bbox.height;
        }
        if (!width) {
          cs = _getComputedStyle3(element);
          bbox = cs.boxSizing === "border-box";
          width = (parseFloat(cs.width) || element.clientWidth || 0) + (bbox ? 0 : parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth));
          height = (parseFloat(cs.height) || element.clientHeight || 0) + (bbox ? 0 : parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth));
        }
      }
      right = width;
      bottom = height;
    }
    if (element === context3) {
      return {
        left,
        top,
        width: right - left,
        height: bottom - top
      };
    }
    matrix = getGlobalMatrix(context3, true).multiply(getGlobalMatrix(element));
    p1 = matrix.apply({
      x: left,
      y: top
    });
    p2 = matrix.apply({
      x: right,
      y: top
    });
    p3 = matrix.apply({
      x: right,
      y: bottom
    });
    p4 = matrix.apply({
      x: left,
      y: bottom
    });
    left = Math.min(p1.x, p2.x, p3.x, p4.x);
    top = Math.min(p1.y, p2.y, p3.y, p4.y);
    return {
      left,
      top,
      width: Math.max(p1.x, p2.x, p3.x, p4.x) - left,
      height: Math.max(p1.y, p2.y, p3.y, p4.y) - top
    };
  };
  var _parseInertia = function _parseInertia2(draggable, snap3, max, min, factor, forceZeroVelocity) {
    var vars = {}, a, i, l;
    if (snap3) {
      if (factor !== 1 && snap3 instanceof Array) {
        vars.end = a = [];
        l = snap3.length;
        if (_isObject3(snap3[0])) {
          for (i = 0; i < l; i++) {
            a[i] = _copy(snap3[i], factor);
          }
        } else {
          for (i = 0; i < l; i++) {
            a[i] = snap3[i] * factor;
          }
        }
        max += 1.1;
        min -= 1.1;
      } else if (_isFunction3(snap3)) {
        vars.end = function(value) {
          var result = snap3.call(draggable, value), copy, p;
          if (factor !== 1) {
            if (_isObject3(result)) {
              copy = {};
              for (p in result) {
                copy[p] = result[p] * factor;
              }
              result = copy;
            } else {
              result *= factor;
            }
          }
          return result;
        };
      } else {
        vars.end = snap3;
      }
    }
    if (max || max === 0) {
      vars.max = max;
    }
    if (min || min === 0) {
      vars.min = min;
    }
    if (forceZeroVelocity) {
      vars.velocity = 0;
    }
    return vars;
  };
  var _isClickable = function _isClickable2(element) {
    var data;
    return !element || !element.getAttribute || element === _body2 ? false : (data = element.getAttribute("data-clickable")) === "true" || data !== "false" && (element.onclick || _clickableTagExp.test(element.nodeName + "") || element.getAttribute("contentEditable") === "true") ? true : _isClickable2(element.parentNode);
  };
  var _setSelectable = function _setSelectable2(elements, selectable) {
    var i = elements.length, e2;
    while (i--) {
      e2 = elements[i];
      e2.ondragstart = e2.onselectstart = selectable ? null : _emptyFunc3;
      gsap2.set(e2, {
        lazy: true,
        userSelect: selectable ? "text" : "none"
      });
    }
  };
  var _isFixed3 = function _isFixed4(element) {
    if (_getComputedStyle3(element).position === "fixed") {
      return true;
    }
    element = element.parentNode;
    if (element && element.nodeType === 1) {
      return _isFixed4(element);
    }
  };
  var _supports3D2;
  var _addPaddingBR;
  var ScrollProxy = function ScrollProxy2(element, vars) {
    element = gsap2.utils.toArray(element)[0];
    vars = vars || {};
    var content = document.createElement("div"), style = content.style, node = element.firstChild, offsetTop = 0, offsetLeft = 0, prevTop = element.scrollTop, prevLeft = element.scrollLeft, scrollWidth = element.scrollWidth, scrollHeight = element.scrollHeight, extraPadRight = 0, maxLeft = 0, maxTop = 0, elementWidth, elementHeight, contentHeight, nextNode, transformStart, transformEnd;
    if (_supports3D2 && vars.force3D !== false) {
      transformStart = "translate3d(";
      transformEnd = "px,0px)";
    } else if (_transformProp3) {
      transformStart = "translate(";
      transformEnd = "px)";
    }
    this.scrollTop = function(value, force) {
      if (!arguments.length) {
        return -this.top();
      }
      this.top(-value, force);
    };
    this.scrollLeft = function(value, force) {
      if (!arguments.length) {
        return -this.left();
      }
      this.left(-value, force);
    };
    this.left = function(value, force) {
      if (!arguments.length) {
        return -(element.scrollLeft + offsetLeft);
      }
      var dif = element.scrollLeft - prevLeft, oldOffset = offsetLeft;
      if ((dif > 2 || dif < -2) && !force) {
        prevLeft = element.scrollLeft;
        gsap2.killTweensOf(this, {
          left: 1,
          scrollLeft: 1
        });
        this.left(-prevLeft);
        if (vars.onKill) {
          vars.onKill();
        }
        return;
      }
      value = -value;
      if (value < 0) {
        offsetLeft = value - 0.5 | 0;
        value = 0;
      } else if (value > maxLeft) {
        offsetLeft = value - maxLeft | 0;
        value = maxLeft;
      } else {
        offsetLeft = 0;
      }
      if (offsetLeft || oldOffset) {
        if (!this._skip) {
          style[_transformProp3] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
        }
        if (offsetLeft + extraPadRight >= 0) {
          style.paddingRight = offsetLeft + extraPadRight + "px";
        }
      }
      element.scrollLeft = value | 0;
      prevLeft = element.scrollLeft;
    };
    this.top = function(value, force) {
      if (!arguments.length) {
        return -(element.scrollTop + offsetTop);
      }
      var dif = element.scrollTop - prevTop, oldOffset = offsetTop;
      if ((dif > 2 || dif < -2) && !force) {
        prevTop = element.scrollTop;
        gsap2.killTweensOf(this, {
          top: 1,
          scrollTop: 1
        });
        this.top(-prevTop);
        if (vars.onKill) {
          vars.onKill();
        }
        return;
      }
      value = -value;
      if (value < 0) {
        offsetTop = value - 0.5 | 0;
        value = 0;
      } else if (value > maxTop) {
        offsetTop = value - maxTop | 0;
        value = maxTop;
      } else {
        offsetTop = 0;
      }
      if (offsetTop || oldOffset) {
        if (!this._skip) {
          style[_transformProp3] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
        }
      }
      element.scrollTop = value | 0;
      prevTop = element.scrollTop;
    };
    this.maxScrollTop = function() {
      return maxTop;
    };
    this.maxScrollLeft = function() {
      return maxLeft;
    };
    this.disable = function() {
      node = content.firstChild;
      while (node) {
        nextNode = node.nextSibling;
        element.appendChild(node);
        node = nextNode;
      }
      if (element === content.parentNode) {
        element.removeChild(content);
      }
    };
    this.enable = function() {
      node = element.firstChild;
      if (node === content) {
        return;
      }
      while (node) {
        nextNode = node.nextSibling;
        content.appendChild(node);
        node = nextNode;
      }
      element.appendChild(content);
      this.calibrate();
    };
    this.calibrate = function(force) {
      var widthMatches = element.clientWidth === elementWidth, cs, x, y;
      prevTop = element.scrollTop;
      prevLeft = element.scrollLeft;
      if (widthMatches && element.clientHeight === elementHeight && content.offsetHeight === contentHeight && scrollWidth === element.scrollWidth && scrollHeight === element.scrollHeight && !force) {
        return;
      }
      if (offsetTop || offsetLeft) {
        x = this.left();
        y = this.top();
        this.left(-element.scrollLeft);
        this.top(-element.scrollTop);
      }
      cs = _getComputedStyle3(element);
      if (!widthMatches || force) {
        style.display = "block";
        style.width = "auto";
        style.paddingRight = "0px";
        extraPadRight = Math.max(0, element.scrollWidth - element.clientWidth);
        if (extraPadRight) {
          extraPadRight += parseFloat(cs.paddingLeft) + (_addPaddingBR ? parseFloat(cs.paddingRight) : 0);
        }
      }
      style.display = "inline-block";
      style.position = "relative";
      style.overflow = "visible";
      style.verticalAlign = "top";
      style.boxSizing = "content-box";
      style.width = "100%";
      style.paddingRight = extraPadRight + "px";
      if (_addPaddingBR) {
        style.paddingBottom = cs.paddingBottom;
      }
      elementWidth = element.clientWidth;
      elementHeight = element.clientHeight;
      scrollWidth = element.scrollWidth;
      scrollHeight = element.scrollHeight;
      maxLeft = element.scrollWidth - elementWidth;
      maxTop = element.scrollHeight - elementHeight;
      contentHeight = content.offsetHeight;
      style.display = "block";
      if (x || y) {
        this.left(x);
        this.top(y);
      }
    };
    this.content = content;
    this.element = element;
    this._skip = false;
    this.enable();
  };
  var _initCore5 = function _initCore6(required) {
    if (_windowExists5() && document.body) {
      var nav = window && window.navigator;
      _win5 = window;
      _doc5 = document;
      _docElement3 = _doc5.documentElement;
      _body2 = _doc5.body;
      _tempDiv2 = _createElement3("div");
      _supportsPointer = !!window.PointerEvent;
      _placeholderDiv = _createElement3("div");
      _placeholderDiv.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab";
      _defaultCursor = _placeholderDiv.style.cursor === "grab" ? "grab" : "move";
      _isAndroid = nav && nav.userAgent.toLowerCase().indexOf("android") !== -1;
      _isTouchDevice = "ontouchstart" in _docElement3 && "orientation" in _win5 || nav && (nav.MaxTouchPoints > 0 || nav.msMaxTouchPoints > 0);
      _addPaddingBR = function() {
        var div = _createElement3("div"), child = _createElement3("div"), childStyle = child.style, parent = _body2, val;
        childStyle.display = "inline-block";
        childStyle.position = "relative";
        div.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden";
        div.appendChild(child);
        parent.appendChild(div);
        val = child.offsetHeight + 18 > div.scrollHeight;
        parent.removeChild(div);
        return val;
      }();
      _touchEventLookup = function(types) {
        var standard = types.split(","), converted = ("onpointerdown" in _tempDiv2 ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in _tempDiv2 ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : types).split(","), obj = {}, i = 4;
        while (--i > -1) {
          obj[standard[i]] = converted[i];
          obj[converted[i]] = standard[i];
        }
        try {
          _docElement3.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: function get() {
              _supportsPassive = 1;
            }
          }));
        } catch (e2) {
        }
        return obj;
      }("touchstart,touchmove,touchend,touchcancel");
      _addListener(_doc5, "touchcancel", _emptyFunc3);
      _addListener(_win5, "touchmove", _emptyFunc3);
      _body2 && _body2.addEventListener("touchstart", _emptyFunc3);
      _addListener(_doc5, "contextmenu", function() {
        for (var p in _lookup) {
          if (_lookup[p].isPressed) {
            _lookup[p].endDrag();
          }
        }
      });
      gsap2 = _coreInitted3 = _getGSAP();
    }
    if (gsap2) {
      InertiaPlugin = gsap2.plugins.inertia;
      _checkPrefix = gsap2.utils.checkPrefix;
      _transformProp3 = _checkPrefix(_transformProp3);
      _transformOriginProp3 = _checkPrefix(_transformOriginProp3);
      _toArray3 = gsap2.utils.toArray;
      _supports3D2 = !!_checkPrefix("perspective");
    } else if (required) {
      console.warn("Please gsap.registerPlugin(Draggable)");
    }
  };
  var EventDispatcher = /* @__PURE__ */ function() {
    function EventDispatcher2(target) {
      this._listeners = {};
      this.target = target || this;
    }
    var _proto = EventDispatcher2.prototype;
    _proto.addEventListener = function addEventListener2(type, callback) {
      var list = this._listeners[type] || (this._listeners[type] = []);
      if (!~list.indexOf(callback)) {
        list.push(callback);
      }
    };
    _proto.removeEventListener = function removeEventListener2(type, callback) {
      var list = this._listeners[type], i = list && list.indexOf(callback);
      i >= 0 && list.splice(i, 1);
    };
    _proto.dispatchEvent = function dispatchEvent(type) {
      var _this = this;
      var result;
      (this._listeners[type] || []).forEach(function(callback) {
        return callback.call(_this, {
          type,
          target: _this.target
        }) === false && (result = false);
      });
      return result;
    };
    return EventDispatcher2;
  }();
  var Draggable = /* @__PURE__ */ function(_EventDispatcher) {
    _inheritsLoose2(Draggable2, _EventDispatcher);
    function Draggable2(target, vars) {
      var _this2;
      _this2 = _EventDispatcher.call(this) || this;
      _coreInitted3 || _initCore5(1);
      target = _toArray3(target)[0];
      if (!InertiaPlugin) {
        InertiaPlugin = gsap2.plugins.inertia;
      }
      _this2.vars = vars = _copy(vars || {});
      _this2.target = target;
      _this2.x = _this2.y = _this2.rotation = 0;
      _this2.dragResistance = parseFloat(vars.dragResistance) || 0;
      _this2.edgeResistance = isNaN(vars.edgeResistance) ? 1 : parseFloat(vars.edgeResistance) || 0;
      _this2.lockAxis = vars.lockAxis;
      _this2.autoScroll = vars.autoScroll || 0;
      _this2.lockedAxis = null;
      _this2.allowEventDefault = !!vars.allowEventDefault;
      gsap2.getProperty(target, "x");
      var type = (vars.type || "x,y").toLowerCase(), xyMode = ~type.indexOf("x") || ~type.indexOf("y"), rotationMode = type.indexOf("rotation") !== -1, xProp = rotationMode ? "rotation" : xyMode ? "x" : "left", yProp = xyMode ? "y" : "top", allowX = !!(~type.indexOf("x") || ~type.indexOf("left") || type === "scroll"), allowY = !!(~type.indexOf("y") || ~type.indexOf("top") || type === "scroll"), minimumMovement = vars.minimumMovement || 2, self = _assertThisInitialized2(_this2), triggers = _toArray3(vars.trigger || vars.handle || target), killProps = {}, dragEndTime = 0, checkAutoScrollBounds = false, autoScrollMarginTop = vars.autoScrollMarginTop || 40, autoScrollMarginRight = vars.autoScrollMarginRight || 40, autoScrollMarginBottom = vars.autoScrollMarginBottom || 40, autoScrollMarginLeft = vars.autoScrollMarginLeft || 40, isClickable = vars.clickableTest || _isClickable, clickTime = 0, gsCache = target._gsap || gsap2.core.getCache(target), isFixed = _isFixed3(target), getPropAsNum = function getPropAsNum2(property, unit) {
        return parseFloat(gsCache.get(target, property, unit));
      }, ownerDoc = target.ownerDocument || _doc5, enabled, scrollProxy, startPointerX, startPointerY, startElementX, startElementY, hasBounds, hasDragCallback, hasMoveCallback, maxX, minX, maxY, minY, touch, touchID, rotationOrigin, dirty, old, snapX, snapY, snapXY, isClicking, touchEventTarget, matrix, interrupted, allowNativeTouchScrolling, touchDragAxis, isDispatching, clickDispatch, trustedClickDispatch, isPreventingDefault, innerMatrix, dragged, onContextMenu = function onContextMenu2(e2) {
        _preventDefault(e2);
        e2.stopImmediatePropagation && e2.stopImmediatePropagation();
        return false;
      }, render6 = function render7(suppressEvents) {
        if (self.autoScroll && self.isDragging && (checkAutoScrollBounds || dirty)) {
          var e2 = target, autoScrollFactor = self.autoScroll * 15, parent, isRoot, rect, pointerX, pointerY, changeX, changeY, gap;
          checkAutoScrollBounds = false;
          _windowProxy.scrollTop = _win5.pageYOffset != null ? _win5.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
          _windowProxy.scrollLeft = _win5.pageXOffset != null ? _win5.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;
          pointerX = self.pointerX - _windowProxy.scrollLeft;
          pointerY = self.pointerY - _windowProxy.scrollTop;
          while (e2 && !isRoot) {
            isRoot = _isRoot(e2.parentNode);
            parent = isRoot ? _windowProxy : e2.parentNode;
            rect = isRoot ? {
              bottom: Math.max(_docElement3.clientHeight, _win5.innerHeight || 0),
              right: Math.max(_docElement3.clientWidth, _win5.innerWidth || 0),
              left: 0,
              top: 0
            } : parent.getBoundingClientRect();
            changeX = changeY = 0;
            if (allowY) {
              gap = parent._gsMaxScrollY - parent.scrollTop;
              if (gap < 0) {
                changeY = gap;
              } else if (pointerY > rect.bottom - autoScrollMarginBottom && gap) {
                checkAutoScrollBounds = true;
                changeY = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.bottom - pointerY) / autoScrollMarginBottom) | 0);
              } else if (pointerY < rect.top + autoScrollMarginTop && parent.scrollTop) {
                checkAutoScrollBounds = true;
                changeY = -Math.min(parent.scrollTop, autoScrollFactor * (1 - Math.max(0, pointerY - rect.top) / autoScrollMarginTop) | 0);
              }
              if (changeY) {
                parent.scrollTop += changeY;
              }
            }
            if (allowX) {
              gap = parent._gsMaxScrollX - parent.scrollLeft;
              if (gap < 0) {
                changeX = gap;
              } else if (pointerX > rect.right - autoScrollMarginRight && gap) {
                checkAutoScrollBounds = true;
                changeX = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.right - pointerX) / autoScrollMarginRight) | 0);
              } else if (pointerX < rect.left + autoScrollMarginLeft && parent.scrollLeft) {
                checkAutoScrollBounds = true;
                changeX = -Math.min(parent.scrollLeft, autoScrollFactor * (1 - Math.max(0, pointerX - rect.left) / autoScrollMarginLeft) | 0);
              }
              if (changeX) {
                parent.scrollLeft += changeX;
              }
            }
            if (isRoot && (changeX || changeY)) {
              _win5.scrollTo(parent.scrollLeft, parent.scrollTop);
              setPointerPosition(self.pointerX + changeX, self.pointerY + changeY);
            }
            e2 = parent;
          }
        }
        if (dirty) {
          var x = self.x, y = self.y;
          if (rotationMode) {
            self.deltaX = x - parseFloat(gsCache.rotation);
            self.rotation = x;
            gsCache.rotation = x + "deg";
            gsCache.renderTransform(1, gsCache);
          } else {
            if (scrollProxy) {
              if (allowY) {
                self.deltaY = y - scrollProxy.top();
                scrollProxy.top(y);
              }
              if (allowX) {
                self.deltaX = x - scrollProxy.left();
                scrollProxy.left(x);
              }
            } else if (xyMode) {
              if (allowY) {
                self.deltaY = y - parseFloat(gsCache.y);
                gsCache.y = y + "px";
              }
              if (allowX) {
                self.deltaX = x - parseFloat(gsCache.x);
                gsCache.x = x + "px";
              }
              gsCache.renderTransform(1, gsCache);
            } else {
              if (allowY) {
                self.deltaY = y - parseFloat(target.style.top || 0);
                target.style.top = y + "px";
              }
              if (allowX) {
                self.deltaX = x - parseFloat(target.style.left || 0);
                target.style.left = x + "px";
              }
            }
          }
          if (hasDragCallback && !suppressEvents && !isDispatching) {
            isDispatching = true;
            if (_dispatchEvent(self, "drag", "onDrag") === false) {
              if (allowX) {
                self.x -= self.deltaX;
              }
              if (allowY) {
                self.y -= self.deltaY;
              }
              render7(true);
            }
            isDispatching = false;
          }
        }
        dirty = false;
      }, syncXY = function syncXY2(skipOnUpdate, skipSnap) {
        var x = self.x, y = self.y, snappedValue, cs;
        if (!target._gsap) {
          gsCache = gsap2.core.getCache(target);
        }
        gsCache.uncache && gsap2.getProperty(target, "x");
        if (xyMode) {
          self.x = parseFloat(gsCache.x);
          self.y = parseFloat(gsCache.y);
        } else if (rotationMode) {
          self.x = self.rotation = parseFloat(gsCache.rotation);
        } else if (scrollProxy) {
          self.y = scrollProxy.top();
          self.x = scrollProxy.left();
        } else {
          self.y = parseFloat(target.style.top || (cs = _getComputedStyle3(target)) && cs.top) || 0;
          self.x = parseFloat(target.style.left || (cs || {}).left) || 0;
        }
        if ((snapX || snapY || snapXY) && !skipSnap && (self.isDragging || self.isThrowing)) {
          if (snapXY) {
            _temp1.x = self.x;
            _temp1.y = self.y;
            snappedValue = snapXY(_temp1);
            if (snappedValue.x !== self.x) {
              self.x = snappedValue.x;
              dirty = true;
            }
            if (snappedValue.y !== self.y) {
              self.y = snappedValue.y;
              dirty = true;
            }
          }
          if (snapX) {
            snappedValue = snapX(self.x);
            if (snappedValue !== self.x) {
              self.x = snappedValue;
              if (rotationMode) {
                self.rotation = snappedValue;
              }
              dirty = true;
            }
          }
          if (snapY) {
            snappedValue = snapY(self.y);
            if (snappedValue !== self.y) {
              self.y = snappedValue;
            }
            dirty = true;
          }
        }
        dirty && render6(true);
        if (!skipOnUpdate) {
          self.deltaX = self.x - x;
          self.deltaY = self.y - y;
          _dispatchEvent(self, "throwupdate", "onThrowUpdate");
        }
      }, buildSnapFunc = function buildSnapFunc2(snap3, min, max, factor) {
        if (min == null) {
          min = -_bigNum3;
        }
        if (max == null) {
          max = _bigNum3;
        }
        if (_isFunction3(snap3)) {
          return function(n) {
            var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance;
            return snap3.call(self, (n > max ? max + (n - max) * edgeTolerance : n < min ? min + (n - min) * edgeTolerance : n) * factor) * factor;
          };
        }
        if (_isArray3(snap3)) {
          return function(n) {
            var i = snap3.length, closest = 0, absDif = _bigNum3, val, dif;
            while (--i > -1) {
              val = snap3[i];
              dif = val - n;
              if (dif < 0) {
                dif = -dif;
              }
              if (dif < absDif && val >= min && val <= max) {
                closest = i;
                absDif = dif;
              }
            }
            return snap3[closest];
          };
        }
        return isNaN(snap3) ? function(n) {
          return n;
        } : function() {
          return snap3 * factor;
        };
      }, buildPointSnapFunc = function buildPointSnapFunc2(snap3, minX2, maxX2, minY2, maxY2, radius, factor) {
        radius = radius && radius < _bigNum3 ? radius * radius : _bigNum3;
        if (_isFunction3(snap3)) {
          return function(point) {
            var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance, x = point.x, y = point.y, result, dx, dy;
            point.x = x = x > maxX2 ? maxX2 + (x - maxX2) * edgeTolerance : x < minX2 ? minX2 + (x - minX2) * edgeTolerance : x;
            point.y = y = y > maxY2 ? maxY2 + (y - maxY2) * edgeTolerance : y < minY2 ? minY2 + (y - minY2) * edgeTolerance : y;
            result = snap3.call(self, point);
            if (result !== point) {
              point.x = result.x;
              point.y = result.y;
            }
            if (factor !== 1) {
              point.x *= factor;
              point.y *= factor;
            }
            if (radius < _bigNum3) {
              dx = point.x - x;
              dy = point.y - y;
              if (dx * dx + dy * dy > radius) {
                point.x = x;
                point.y = y;
              }
            }
            return point;
          };
        }
        if (_isArray3(snap3)) {
          return function(p) {
            var i = snap3.length, closest = 0, minDist = _bigNum3, x, y, point, dist;
            while (--i > -1) {
              point = snap3[i];
              x = point.x - p.x;
              y = point.y - p.y;
              dist = x * x + y * y;
              if (dist < minDist) {
                closest = i;
                minDist = dist;
              }
            }
            return minDist <= radius ? snap3[closest] : p;
          };
        }
        return function(n) {
          return n;
        };
      }, calculateBounds = function calculateBounds2() {
        var bounds, targetBounds, snap3, snapIsRaw;
        hasBounds = false;
        if (scrollProxy) {
          scrollProxy.calibrate();
          self.minX = minX = -scrollProxy.maxScrollLeft();
          self.minY = minY = -scrollProxy.maxScrollTop();
          self.maxX = maxX = self.maxY = maxY = 0;
          hasBounds = true;
        } else if (!!vars.bounds) {
          bounds = _getBounds(vars.bounds, target.parentNode);
          if (rotationMode) {
            self.minX = minX = bounds.left;
            self.maxX = maxX = bounds.left + bounds.width;
            self.minY = minY = self.maxY = maxY = 0;
          } else if (!_isUndefined3(vars.bounds.maxX) || !_isUndefined3(vars.bounds.maxY)) {
            bounds = vars.bounds;
            self.minX = minX = bounds.minX;
            self.minY = minY = bounds.minY;
            self.maxX = maxX = bounds.maxX;
            self.maxY = maxY = bounds.maxY;
          } else {
            targetBounds = _getBounds(target, target.parentNode);
            self.minX = minX = Math.round(getPropAsNum(xProp, "px") + bounds.left - targetBounds.left);
            self.minY = minY = Math.round(getPropAsNum(yProp, "px") + bounds.top - targetBounds.top);
            self.maxX = maxX = Math.round(minX + (bounds.width - targetBounds.width));
            self.maxY = maxY = Math.round(minY + (bounds.height - targetBounds.height));
          }
          if (minX > maxX) {
            self.minX = maxX;
            self.maxX = maxX = minX;
            minX = self.minX;
          }
          if (minY > maxY) {
            self.minY = maxY;
            self.maxY = maxY = minY;
            minY = self.minY;
          }
          if (rotationMode) {
            self.minRotation = minX;
            self.maxRotation = maxX;
          }
          hasBounds = true;
        }
        if (vars.liveSnap) {
          snap3 = vars.liveSnap === true ? vars.snap || {} : vars.liveSnap;
          snapIsRaw = _isArray3(snap3) || _isFunction3(snap3);
          if (rotationMode) {
            snapX = buildSnapFunc(snapIsRaw ? snap3 : snap3.rotation, minX, maxX, 1);
            snapY = null;
          } else {
            if (snap3.points) {
              snapXY = buildPointSnapFunc(snapIsRaw ? snap3 : snap3.points, minX, maxX, minY, maxY, snap3.radius, scrollProxy ? -1 : 1);
            } else {
              if (allowX) {
                snapX = buildSnapFunc(snapIsRaw ? snap3 : snap3.x || snap3.left || snap3.scrollLeft, minX, maxX, scrollProxy ? -1 : 1);
              }
              if (allowY) {
                snapY = buildSnapFunc(snapIsRaw ? snap3 : snap3.y || snap3.top || snap3.scrollTop, minY, maxY, scrollProxy ? -1 : 1);
              }
            }
          }
        }
      }, onThrowComplete = function onThrowComplete2() {
        self.isThrowing = false;
        _dispatchEvent(self, "throwcomplete", "onThrowComplete");
      }, onThrowInterrupt = function onThrowInterrupt2() {
        self.isThrowing = false;
      }, animate = function animate2(inertia, forceZeroVelocity) {
        var snap3, snapIsRaw, tween, overshootTolerance;
        if (inertia && InertiaPlugin) {
          if (inertia === true) {
            snap3 = vars.snap || vars.liveSnap || {};
            snapIsRaw = _isArray3(snap3) || _isFunction3(snap3);
            inertia = {
              resistance: (vars.throwResistance || vars.resistance || 1e3) / (rotationMode ? 10 : 1)
            };
            if (rotationMode) {
              inertia.rotation = _parseInertia(self, snapIsRaw ? snap3 : snap3.rotation, maxX, minX, 1, forceZeroVelocity);
            } else {
              if (allowX) {
                inertia[xProp] = _parseInertia(self, snapIsRaw ? snap3 : snap3.points || snap3.x || snap3.left, maxX, minX, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "x");
              }
              if (allowY) {
                inertia[yProp] = _parseInertia(self, snapIsRaw ? snap3 : snap3.points || snap3.y || snap3.top, maxY, minY, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "y");
              }
              if (snap3.points || _isArray3(snap3) && _isObject3(snap3[0])) {
                inertia.linkedProps = xProp + "," + yProp;
                inertia.radius = snap3.radius;
              }
            }
          }
          self.isThrowing = true;
          overshootTolerance = !isNaN(vars.overshootTolerance) ? vars.overshootTolerance : vars.edgeResistance === 1 ? 0 : 1 - self.edgeResistance + 0.2;
          if (!inertia.duration) {
            inertia.duration = {
              max: Math.max(vars.minDuration || 0, "maxDuration" in vars ? vars.maxDuration : 2),
              min: !isNaN(vars.minDuration) ? vars.minDuration : overshootTolerance === 0 || _isObject3(inertia) && inertia.resistance > 1e3 ? 0 : 0.5,
              overshoot: overshootTolerance
            };
          }
          self.tween = tween = gsap2.to(scrollProxy || target, {
            inertia,
            data: "_draggable",
            onComplete: onThrowComplete,
            onInterrupt: onThrowInterrupt,
            onUpdate: vars.fastMode ? _dispatchEvent : syncXY,
            onUpdateParams: vars.fastMode ? [self, "onthrowupdate", "onThrowUpdate"] : snap3 && snap3.radius ? [false, true] : []
          });
          if (!vars.fastMode) {
            if (scrollProxy) {
              scrollProxy._skip = true;
            }
            tween.render(1e9, true, true);
            syncXY(true, true);
            self.endX = self.x;
            self.endY = self.y;
            if (rotationMode) {
              self.endRotation = self.x;
            }
            tween.play(0);
            syncXY(true, true);
            if (scrollProxy) {
              scrollProxy._skip = false;
            }
          }
        } else if (hasBounds) {
          self.applyBounds();
        }
      }, updateMatrix = function updateMatrix2(shiftStart) {
        var start = matrix, p;
        matrix = getGlobalMatrix(target.parentNode, true);
        if (shiftStart && self.isPressed && !matrix.equals(start || new Matrix2D())) {
          p = start.inverse().apply({
            x: startPointerX,
            y: startPointerY
          });
          matrix.apply(p, p);
          startPointerX = p.x;
          startPointerY = p.y;
        }
        if (matrix.equals(_identityMatrix2)) {
          matrix = null;
        }
      }, recordStartPositions = function recordStartPositions2() {
        var edgeTolerance = 1 - self.edgeResistance, offsetX = isFixed ? _getDocScrollLeft3(ownerDoc) : 0, offsetY = isFixed ? _getDocScrollTop3(ownerDoc) : 0, parsedOrigin, x, y;
        if (xyMode) {
          gsCache.x = getPropAsNum(xProp, "px") + "px";
          gsCache.y = getPropAsNum(yProp, "px") + "px";
          gsCache.renderTransform();
        }
        updateMatrix(false);
        _point1.x = self.pointerX - offsetX;
        _point1.y = self.pointerY - offsetY;
        matrix && matrix.apply(_point1, _point1);
        startPointerX = _point1.x;
        startPointerY = _point1.y;
        if (dirty) {
          setPointerPosition(self.pointerX, self.pointerY);
          render6(true);
        }
        innerMatrix = getGlobalMatrix(target);
        if (scrollProxy) {
          calculateBounds();
          startElementY = scrollProxy.top();
          startElementX = scrollProxy.left();
        } else {
          if (isTweening2()) {
            syncXY(true, true);
            calculateBounds();
          } else {
            self.applyBounds();
          }
          if (rotationMode) {
            parsedOrigin = target.ownerSVGElement ? [gsCache.xOrigin - target.getBBox().x, gsCache.yOrigin - target.getBBox().y] : (_getComputedStyle3(target)[_transformOriginProp3] || "0 0").split(" ");
            rotationOrigin = self.rotationOrigin = getGlobalMatrix(target).apply({
              x: parseFloat(parsedOrigin[0]) || 0,
              y: parseFloat(parsedOrigin[1]) || 0
            });
            syncXY(true, true);
            x = self.pointerX - rotationOrigin.x - offsetX;
            y = rotationOrigin.y - self.pointerY + offsetY;
            startElementX = self.x;
            startElementY = self.y = Math.atan2(y, x) * _RAD2DEG2;
          } else {
            startElementY = getPropAsNum(yProp, "px");
            startElementX = getPropAsNum(xProp, "px");
          }
        }
        if (hasBounds && edgeTolerance) {
          if (startElementX > maxX) {
            startElementX = maxX + (startElementX - maxX) / edgeTolerance;
          } else if (startElementX < minX) {
            startElementX = minX - (minX - startElementX) / edgeTolerance;
          }
          if (!rotationMode) {
            if (startElementY > maxY) {
              startElementY = maxY + (startElementY - maxY) / edgeTolerance;
            } else if (startElementY < minY) {
              startElementY = minY - (minY - startElementY) / edgeTolerance;
            }
          }
        }
        self.startX = startElementX = _round3(startElementX);
        self.startY = startElementY = _round3(startElementY);
      }, isTweening2 = function isTweening3() {
        return self.tween && self.tween.isActive();
      }, removePlaceholder = function removePlaceholder2() {
        if (_placeholderDiv.parentNode && !isTweening2() && !self.isDragging) {
          _placeholderDiv.parentNode.removeChild(_placeholderDiv);
        }
      }, onPress = function onPress2(e2, force) {
        var i;
        if (!enabled || self.isPressed || !e2 || (e2.type === "mousedown" || e2.type === "pointerdown") && !force && _getTime() - clickTime < 30 && _touchEventLookup[self.pointerEvent.type]) {
          isPreventingDefault && e2 && enabled && _preventDefault(e2);
          return;
        }
        interrupted = isTweening2();
        dragged = false;
        self.pointerEvent = e2;
        if (_touchEventLookup[e2.type]) {
          touchEventTarget = ~e2.type.indexOf("touch") ? e2.currentTarget || e2.target : ownerDoc;
          _addListener(touchEventTarget, "touchend", onRelease);
          _addListener(touchEventTarget, "touchmove", onMove);
          _addListener(touchEventTarget, "touchcancel", onRelease);
          _addListener(ownerDoc, "touchstart", _onMultiTouchDocument);
        } else {
          touchEventTarget = null;
          _addListener(ownerDoc, "mousemove", onMove);
        }
        touchDragAxis = null;
        if (!_supportsPointer || !touchEventTarget) {
          _addListener(ownerDoc, "mouseup", onRelease);
          e2 && e2.target && _addListener(e2.target, "mouseup", onRelease);
        }
        isClicking = isClickable.call(self, e2.target) && vars.dragClickables === false && !force;
        if (isClicking) {
          _addListener(e2.target, "change", onRelease);
          _dispatchEvent(self, "pressInit", "onPressInit");
          _dispatchEvent(self, "press", "onPress");
          _setSelectable(triggers, true);
          isPreventingDefault = false;
          return;
        }
        allowNativeTouchScrolling = !touchEventTarget || allowX === allowY || self.vars.allowNativeTouchScrolling === false || self.vars.allowContextMenu && e2 && (e2.ctrlKey || e2.which > 2) ? false : allowX ? "y" : "x";
        isPreventingDefault = !allowNativeTouchScrolling && !self.allowEventDefault;
        if (isPreventingDefault) {
          _preventDefault(e2);
          _addListener(_win5, "touchforcechange", _preventDefault);
        }
        if (e2.changedTouches) {
          e2 = touch = e2.changedTouches[0];
          touchID = e2.identifier;
        } else if (e2.pointerId) {
          touchID = e2.pointerId;
        } else {
          touch = touchID = null;
        }
        _dragCount++;
        _addToRenderQueue(render6);
        startPointerY = self.pointerY = e2.pageY;
        startPointerX = self.pointerX = e2.pageX;
        _dispatchEvent(self, "pressInit", "onPressInit");
        if (allowNativeTouchScrolling || self.autoScroll) {
          _recordMaxScrolls(target.parentNode);
        }
        if (target.parentNode && self.autoScroll && !scrollProxy && !rotationMode && target.parentNode._gsMaxScrollX && !_placeholderDiv.parentNode && !target.getBBox) {
          _placeholderDiv.style.width = target.parentNode.scrollWidth + "px";
          target.parentNode.appendChild(_placeholderDiv);
        }
        recordStartPositions();
        self.tween && self.tween.kill();
        self.isThrowing = false;
        gsap2.killTweensOf(scrollProxy || target, killProps, true);
        scrollProxy && gsap2.killTweensOf(target, {
          scrollTo: 1
        }, true);
        self.tween = self.lockedAxis = null;
        if (vars.zIndexBoost || !rotationMode && !scrollProxy && vars.zIndexBoost !== false) {
          target.style.zIndex = Draggable2.zIndex++;
        }
        self.isPressed = true;
        hasDragCallback = !!(vars.onDrag || self._listeners.drag);
        hasMoveCallback = !!(vars.onMove || self._listeners.move);
        if (vars.cursor !== false || vars.activeCursor) {
          i = triggers.length;
          while (--i > -1) {
            gsap2.set(triggers[i], {
              cursor: vars.activeCursor || vars.cursor || (_defaultCursor === "grab" ? "grabbing" : _defaultCursor)
            });
          }
        }
        _dispatchEvent(self, "press", "onPress");
      }, onMove = function onMove2(e2) {
        var originalEvent = e2, touches, pointerX, pointerY, i, dx, dy;
        if (!enabled || _isMultiTouching || !self.isPressed || !e2) {
          isPreventingDefault && e2 && enabled && _preventDefault(e2);
          return;
        }
        self.pointerEvent = e2;
        touches = e2.changedTouches;
        if (touches) {
          e2 = touches[0];
          if (e2 !== touch && e2.identifier !== touchID) {
            i = touches.length;
            while (--i > -1 && (e2 = touches[i]).identifier !== touchID && e2.target !== target) {
            }
            if (i < 0) {
              return;
            }
          }
        } else if (e2.pointerId && touchID && e2.pointerId !== touchID) {
          return;
        }
        if (touchEventTarget && allowNativeTouchScrolling && !touchDragAxis) {
          _point1.x = e2.pageX - (isFixed ? _getDocScrollLeft3(ownerDoc) : 0);
          _point1.y = e2.pageY - (isFixed ? _getDocScrollTop3(ownerDoc) : 0);
          matrix && matrix.apply(_point1, _point1);
          pointerX = _point1.x;
          pointerY = _point1.y;
          dx = Math.abs(pointerX - startPointerX);
          dy = Math.abs(pointerY - startPointerY);
          if (dx !== dy && (dx > minimumMovement || dy > minimumMovement) || _isAndroid && allowNativeTouchScrolling === touchDragAxis) {
            touchDragAxis = dx > dy && allowX ? "x" : "y";
            if (allowNativeTouchScrolling && touchDragAxis !== allowNativeTouchScrolling) {
              _addListener(_win5, "touchforcechange", _preventDefault);
            }
            if (self.vars.lockAxisOnTouchScroll !== false && allowX && allowY) {
              self.lockedAxis = touchDragAxis === "x" ? "y" : "x";
              _isFunction3(self.vars.onLockAxis) && self.vars.onLockAxis.call(self, originalEvent);
            }
            if (_isAndroid && allowNativeTouchScrolling === touchDragAxis) {
              onRelease(originalEvent);
              return;
            }
          }
        }
        if (!self.allowEventDefault && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling !== touchDragAxis) && originalEvent.cancelable !== false) {
          _preventDefault(originalEvent);
          isPreventingDefault = true;
        } else if (isPreventingDefault) {
          isPreventingDefault = false;
        }
        if (self.autoScroll) {
          checkAutoScrollBounds = true;
        }
        setPointerPosition(e2.pageX, e2.pageY, hasMoveCallback);
      }, setPointerPosition = function setPointerPosition2(pointerX, pointerY, invokeOnMove) {
        var dragTolerance = 1 - self.dragResistance, edgeTolerance = 1 - self.edgeResistance, prevPointerX = self.pointerX, prevPointerY = self.pointerY, prevStartElementY = startElementY, prevX = self.x, prevY = self.y, prevEndX = self.endX, prevEndY = self.endY, prevEndRotation = self.endRotation, prevDirty = dirty, xChange, yChange, x, y, dif, temp;
        self.pointerX = pointerX;
        self.pointerY = pointerY;
        if (isFixed) {
          pointerX -= _getDocScrollLeft3(ownerDoc);
          pointerY -= _getDocScrollTop3(ownerDoc);
        }
        if (rotationMode) {
          y = Math.atan2(rotationOrigin.y - pointerY, pointerX - rotationOrigin.x) * _RAD2DEG2;
          dif = self.y - y;
          if (dif > 180) {
            startElementY -= 360;
            self.y = y;
          } else if (dif < -180) {
            startElementY += 360;
            self.y = y;
          }
          if (self.x !== startElementX || Math.abs(startElementY - y) > minimumMovement) {
            self.y = y;
            x = startElementX + (startElementY - y) * dragTolerance;
          } else {
            x = startElementX;
          }
        } else {
          if (matrix) {
            temp = pointerX * matrix.a + pointerY * matrix.c + matrix.e;
            pointerY = pointerX * matrix.b + pointerY * matrix.d + matrix.f;
            pointerX = temp;
          }
          yChange = pointerY - startPointerY;
          xChange = pointerX - startPointerX;
          if (yChange < minimumMovement && yChange > -minimumMovement) {
            yChange = 0;
          }
          if (xChange < minimumMovement && xChange > -minimumMovement) {
            xChange = 0;
          }
          if ((self.lockAxis || self.lockedAxis) && (xChange || yChange)) {
            temp = self.lockedAxis;
            if (!temp) {
              self.lockedAxis = temp = allowX && Math.abs(xChange) > Math.abs(yChange) ? "y" : allowY ? "x" : null;
              if (temp && _isFunction3(self.vars.onLockAxis)) {
                self.vars.onLockAxis.call(self, self.pointerEvent);
              }
            }
            if (temp === "y") {
              yChange = 0;
            } else if (temp === "x") {
              xChange = 0;
            }
          }
          x = _round3(startElementX + xChange * dragTolerance);
          y = _round3(startElementY + yChange * dragTolerance);
        }
        if ((snapX || snapY || snapXY) && (self.x !== x || self.y !== y && !rotationMode)) {
          if (snapXY) {
            _temp1.x = x;
            _temp1.y = y;
            temp = snapXY(_temp1);
            x = _round3(temp.x);
            y = _round3(temp.y);
          }
          if (snapX) {
            x = _round3(snapX(x));
          }
          if (snapY) {
            y = _round3(snapY(y));
          }
        }
        if (hasBounds) {
          if (x > maxX) {
            x = maxX + Math.round((x - maxX) * edgeTolerance);
          } else if (x < minX) {
            x = minX + Math.round((x - minX) * edgeTolerance);
          }
          if (!rotationMode) {
            if (y > maxY) {
              y = Math.round(maxY + (y - maxY) * edgeTolerance);
            } else if (y < minY) {
              y = Math.round(minY + (y - minY) * edgeTolerance);
            }
          }
        }
        if (self.x !== x || self.y !== y && !rotationMode) {
          if (rotationMode) {
            self.endRotation = self.x = self.endX = x;
            dirty = true;
          } else {
            if (allowY) {
              self.y = self.endY = y;
              dirty = true;
            }
            if (allowX) {
              self.x = self.endX = x;
              dirty = true;
            }
          }
          if (!invokeOnMove || _dispatchEvent(self, "move", "onMove") !== false) {
            if (!self.isDragging && self.isPressed) {
              self.isDragging = dragged = true;
              _dispatchEvent(self, "dragstart", "onDragStart");
            }
          } else {
            self.pointerX = prevPointerX;
            self.pointerY = prevPointerY;
            startElementY = prevStartElementY;
            self.x = prevX;
            self.y = prevY;
            self.endX = prevEndX;
            self.endY = prevEndY;
            self.endRotation = prevEndRotation;
            dirty = prevDirty;
          }
        }
      }, onRelease = function onRelease2(e2, force) {
        if (!enabled || !self.isPressed || e2 && touchID != null && !force && (e2.pointerId && e2.pointerId !== touchID && e2.target !== target || e2.changedTouches && !_hasTouchID(e2.changedTouches, touchID))) {
          isPreventingDefault && e2 && enabled && _preventDefault(e2);
          return;
        }
        self.isPressed = false;
        var originalEvent = e2, wasDragging = self.isDragging, isContextMenuRelease = self.vars.allowContextMenu && e2 && (e2.ctrlKey || e2.which > 2), placeholderDelayedCall = gsap2.delayedCall(1e-3, removePlaceholder), touches, i, syntheticEvent, eventTarget, syntheticClick;
        if (touchEventTarget) {
          _removeListener(touchEventTarget, "touchend", onRelease2);
          _removeListener(touchEventTarget, "touchmove", onMove);
          _removeListener(touchEventTarget, "touchcancel", onRelease2);
          _removeListener(ownerDoc, "touchstart", _onMultiTouchDocument);
        } else {
          _removeListener(ownerDoc, "mousemove", onMove);
        }
        _removeListener(_win5, "touchforcechange", _preventDefault);
        if (!_supportsPointer || !touchEventTarget) {
          _removeListener(ownerDoc, "mouseup", onRelease2);
          e2 && e2.target && _removeListener(e2.target, "mouseup", onRelease2);
        }
        dirty = false;
        if (wasDragging) {
          dragEndTime = _lastDragTime = _getTime();
          self.isDragging = false;
        }
        _removeFromRenderQueue(render6);
        if (isClicking && !isContextMenuRelease) {
          if (e2) {
            _removeListener(e2.target, "change", onRelease2);
            self.pointerEvent = originalEvent;
          }
          _setSelectable(triggers, false);
          _dispatchEvent(self, "release", "onRelease");
          _dispatchEvent(self, "click", "onClick");
          isClicking = false;
          return;
        }
        i = triggers.length;
        while (--i > -1) {
          _setStyle(triggers[i], "cursor", vars.cursor || (vars.cursor !== false ? _defaultCursor : null));
        }
        _dragCount--;
        if (e2) {
          touches = e2.changedTouches;
          if (touches) {
            e2 = touches[0];
            if (e2 !== touch && e2.identifier !== touchID) {
              i = touches.length;
              while (--i > -1 && (e2 = touches[i]).identifier !== touchID && e2.target !== target) {
              }
              if (i < 0 && !force) {
                return;
              }
            }
          }
          self.pointerEvent = originalEvent;
          self.pointerX = e2.pageX;
          self.pointerY = e2.pageY;
        }
        if (isContextMenuRelease && originalEvent) {
          _preventDefault(originalEvent);
          isPreventingDefault = true;
          _dispatchEvent(self, "release", "onRelease");
        } else if (originalEvent && !wasDragging) {
          isPreventingDefault = false;
          if (interrupted && (vars.snap || vars.bounds)) {
            animate(vars.inertia || vars.throwProps);
          }
          _dispatchEvent(self, "release", "onRelease");
          if ((!_isAndroid || originalEvent.type !== "touchmove") && originalEvent.type.indexOf("cancel") === -1) {
            _dispatchEvent(self, "click", "onClick");
            if (_getTime() - clickTime < 300) {
              _dispatchEvent(self, "doubleclick", "onDoubleClick");
            }
            eventTarget = originalEvent.target || target;
            clickTime = _getTime();
            syntheticClick = function syntheticClick2() {
              if (clickTime !== clickDispatch && self.enabled() && !self.isPressed && !originalEvent.defaultPrevented) {
                if (eventTarget.click) {
                  eventTarget.click();
                } else if (ownerDoc.createEvent) {
                  syntheticEvent = ownerDoc.createEvent("MouseEvents");
                  syntheticEvent.initMouseEvent("click", true, true, _win5, 1, self.pointerEvent.screenX, self.pointerEvent.screenY, self.pointerX, self.pointerY, false, false, false, false, 0, null);
                  eventTarget.dispatchEvent(syntheticEvent);
                }
              }
            };
            if (!_isAndroid && !originalEvent.defaultPrevented) {
              gsap2.delayedCall(0.05, syntheticClick);
            }
          }
        } else {
          animate(vars.inertia || vars.throwProps);
          if (!self.allowEventDefault && originalEvent && (vars.dragClickables !== false || !isClickable.call(self, originalEvent.target)) && wasDragging && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling === touchDragAxis) && originalEvent.cancelable !== false) {
            isPreventingDefault = true;
            _preventDefault(originalEvent);
          } else {
            isPreventingDefault = false;
          }
          _dispatchEvent(self, "release", "onRelease");
        }
        isTweening2() && placeholderDelayedCall.duration(self.tween.duration());
        wasDragging && _dispatchEvent(self, "dragend", "onDragEnd");
        return true;
      }, updateScroll = function updateScroll2(e2) {
        if (e2 && self.isDragging && !scrollProxy) {
          var parent = e2.target || target.parentNode, deltaX = parent.scrollLeft - parent._gsScrollX, deltaY = parent.scrollTop - parent._gsScrollY;
          if (deltaX || deltaY) {
            if (matrix) {
              startPointerX -= deltaX * matrix.a + deltaY * matrix.c;
              startPointerY -= deltaY * matrix.d + deltaX * matrix.b;
            } else {
              startPointerX -= deltaX;
              startPointerY -= deltaY;
            }
            parent._gsScrollX += deltaX;
            parent._gsScrollY += deltaY;
            setPointerPosition(self.pointerX, self.pointerY);
          }
        }
      }, onClick = function onClick2(e2) {
        var time = _getTime(), recentlyClicked = time - clickTime < 100, recentlyDragged = time - dragEndTime < 50, alreadyDispatched = recentlyClicked && clickDispatch === clickTime, defaultPrevented = self.pointerEvent && self.pointerEvent.defaultPrevented, alreadyDispatchedTrusted = recentlyClicked && trustedClickDispatch === clickTime, trusted = e2.isTrusted || e2.isTrusted == null && recentlyClicked && alreadyDispatched;
        if ((alreadyDispatched || recentlyDragged && self.vars.suppressClickOnDrag !== false) && e2.stopImmediatePropagation) {
          e2.stopImmediatePropagation();
        }
        if (recentlyClicked && !(self.pointerEvent && self.pointerEvent.defaultPrevented) && (!alreadyDispatched || trusted && !alreadyDispatchedTrusted)) {
          if (trusted && alreadyDispatched) {
            trustedClickDispatch = clickTime;
          }
          clickDispatch = clickTime;
          return;
        }
        if (self.isPressed || recentlyDragged || recentlyClicked) {
          if (!trusted || !e2.detail || !recentlyClicked || defaultPrevented) {
            _preventDefault(e2);
          }
        }
        if (!recentlyClicked && !recentlyDragged && !dragged) {
          e2 && e2.target && (self.pointerEvent = e2);
          _dispatchEvent(self, "click", "onClick");
        }
      }, localizePoint = function localizePoint2(p) {
        return matrix ? {
          x: p.x * matrix.a + p.y * matrix.c + matrix.e,
          y: p.x * matrix.b + p.y * matrix.d + matrix.f
        } : {
          x: p.x,
          y: p.y
        };
      };
      old = Draggable2.get(target);
      old && old.kill();
      _this2.startDrag = function(event, align) {
        var r1, r2, p1, p2;
        onPress(event || self.pointerEvent, true);
        if (align && !self.hitTest(event || self.pointerEvent)) {
          r1 = _parseRect(event || self.pointerEvent);
          r2 = _parseRect(target);
          p1 = localizePoint({
            x: r1.left + r1.width / 2,
            y: r1.top + r1.height / 2
          });
          p2 = localizePoint({
            x: r2.left + r2.width / 2,
            y: r2.top + r2.height / 2
          });
          startPointerX -= p1.x - p2.x;
          startPointerY -= p1.y - p2.y;
        }
        if (!self.isDragging) {
          self.isDragging = dragged = true;
          _dispatchEvent(self, "dragstart", "onDragStart");
        }
      };
      _this2.drag = onMove;
      _this2.endDrag = function(e2) {
        return onRelease(e2 || self.pointerEvent, true);
      };
      _this2.timeSinceDrag = function() {
        return self.isDragging ? 0 : (_getTime() - dragEndTime) / 1e3;
      };
      _this2.timeSinceClick = function() {
        return (_getTime() - clickTime) / 1e3;
      };
      _this2.hitTest = function(target2, threshold) {
        return Draggable2.hitTest(self.target, target2, threshold);
      };
      _this2.getDirection = function(from, diagonalThreshold) {
        var mode = from === "velocity" && InertiaPlugin ? from : _isObject3(from) && !rotationMode ? "element" : "start", xChange, yChange, ratio, direction, r1, r2;
        if (mode === "element") {
          r1 = _parseRect(self.target);
          r2 = _parseRect(from);
        }
        xChange = mode === "start" ? self.x - startElementX : mode === "velocity" ? InertiaPlugin.getVelocity(target, xProp) : r1.left + r1.width / 2 - (r2.left + r2.width / 2);
        if (rotationMode) {
          return xChange < 0 ? "counter-clockwise" : "clockwise";
        } else {
          diagonalThreshold = diagonalThreshold || 2;
          yChange = mode === "start" ? self.y - startElementY : mode === "velocity" ? InertiaPlugin.getVelocity(target, yProp) : r1.top + r1.height / 2 - (r2.top + r2.height / 2);
          ratio = Math.abs(xChange / yChange);
          direction = ratio < 1 / diagonalThreshold ? "" : xChange < 0 ? "left" : "right";
          if (ratio < diagonalThreshold) {
            if (direction !== "") {
              direction += "-";
            }
            direction += yChange < 0 ? "up" : "down";
          }
        }
        return direction;
      };
      _this2.applyBounds = function(newBounds, sticky) {
        var x, y, forceZeroVelocity, e2, parent, isRoot;
        if (newBounds && vars.bounds !== newBounds) {
          vars.bounds = newBounds;
          return self.update(true, sticky);
        }
        syncXY(true);
        calculateBounds();
        if (hasBounds && !isTweening2()) {
          x = self.x;
          y = self.y;
          if (x > maxX) {
            x = maxX;
          } else if (x < minX) {
            x = minX;
          }
          if (y > maxY) {
            y = maxY;
          } else if (y < minY) {
            y = minY;
          }
          if (self.x !== x || self.y !== y) {
            forceZeroVelocity = true;
            self.x = self.endX = x;
            if (rotationMode) {
              self.endRotation = x;
            } else {
              self.y = self.endY = y;
            }
            dirty = true;
            render6(true);
            if (self.autoScroll && !self.isDragging) {
              _recordMaxScrolls(target.parentNode);
              e2 = target;
              _windowProxy.scrollTop = _win5.pageYOffset != null ? _win5.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
              _windowProxy.scrollLeft = _win5.pageXOffset != null ? _win5.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;
              while (e2 && !isRoot) {
                isRoot = _isRoot(e2.parentNode);
                parent = isRoot ? _windowProxy : e2.parentNode;
                if (allowY && parent.scrollTop > parent._gsMaxScrollY) {
                  parent.scrollTop = parent._gsMaxScrollY;
                }
                if (allowX && parent.scrollLeft > parent._gsMaxScrollX) {
                  parent.scrollLeft = parent._gsMaxScrollX;
                }
                e2 = parent;
              }
            }
          }
          if (self.isThrowing && (forceZeroVelocity || self.endX > maxX || self.endX < minX || self.endY > maxY || self.endY < minY)) {
            animate(vars.inertia || vars.throwProps, forceZeroVelocity);
          }
        }
        return self;
      };
      _this2.update = function(applyBounds, sticky, ignoreExternalChanges) {
        if (sticky && self.isPressed) {
          var m = getGlobalMatrix(target), p = innerMatrix.apply({
            x: self.x - startElementX,
            y: self.y - startElementY
          }), m2 = getGlobalMatrix(target.parentNode, true);
          m2.apply({
            x: m.e - p.x,
            y: m.f - p.y
          }, p);
          self.x -= p.x - m2.e;
          self.y -= p.y - m2.f;
          render6(true);
          recordStartPositions();
        }
        var x = self.x, y = self.y;
        updateMatrix(!sticky);
        if (applyBounds) {
          self.applyBounds();
        } else {
          dirty && ignoreExternalChanges && render6(true);
          syncXY(true);
        }
        if (sticky) {
          setPointerPosition(self.pointerX, self.pointerY);
          dirty && render6(true);
        }
        if (self.isPressed && !sticky && (allowX && Math.abs(x - self.x) > 0.01 || allowY && Math.abs(y - self.y) > 0.01 && !rotationMode)) {
          recordStartPositions();
        }
        if (self.autoScroll) {
          _recordMaxScrolls(target.parentNode, self.isDragging);
          checkAutoScrollBounds = self.isDragging;
          render6(true);
          _removeScrollListener(target, updateScroll);
          _addScrollListener(target, updateScroll);
        }
        return self;
      };
      _this2.enable = function(type2) {
        var setVars = {
          lazy: true
        }, id, i, trigger;
        if (vars.cursor !== false) {
          setVars.cursor = vars.cursor || _defaultCursor;
        }
        if (gsap2.utils.checkPrefix("touchCallout")) {
          setVars.touchCallout = "none";
        }
        if (type2 !== "soft") {
          _setTouchActionForAllDescendants(triggers, allowX === allowY ? "none" : vars.allowNativeTouchScrolling && target.scrollHeight === target.clientHeight === (target.scrollWidth === target.clientHeight) || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x");
          i = triggers.length;
          while (--i > -1) {
            trigger = triggers[i];
            _supportsPointer || _addListener(trigger, "mousedown", onPress);
            _addListener(trigger, "touchstart", onPress);
            _addListener(trigger, "click", onClick, true);
            gsap2.set(trigger, setVars);
            if (trigger.getBBox && trigger.ownerSVGElement && allowX !== allowY) {
              gsap2.set(trigger.ownerSVGElement, {
                touchAction: vars.allowNativeTouchScrolling || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x"
              });
            }
            vars.allowContextMenu || _addListener(trigger, "contextmenu", onContextMenu);
          }
          _setSelectable(triggers, false);
        }
        _addScrollListener(target, updateScroll);
        enabled = true;
        if (InertiaPlugin && type2 !== "soft") {
          InertiaPlugin.track(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
        }
        target._gsDragID = id = "d" + _lookupCount++;
        _lookup[id] = self;
        if (scrollProxy) {
          scrollProxy.enable();
          scrollProxy.element._gsDragID = id;
        }
        (vars.bounds || rotationMode) && recordStartPositions();
        vars.bounds && self.applyBounds();
        return self;
      };
      _this2.disable = function(type2) {
        var dragging = self.isDragging, i = triggers.length, trigger;
        while (--i > -1) {
          _setStyle(triggers[i], "cursor", null);
        }
        if (type2 !== "soft") {
          _setTouchActionForAllDescendants(triggers, null);
          i = triggers.length;
          while (--i > -1) {
            trigger = triggers[i];
            _setStyle(trigger, "touchCallout", null);
            _removeListener(trigger, "mousedown", onPress);
            _removeListener(trigger, "touchstart", onPress);
            _removeListener(trigger, "click", onClick);
            _removeListener(trigger, "contextmenu", onContextMenu);
          }
          _setSelectable(triggers, true);
          if (touchEventTarget) {
            _removeListener(touchEventTarget, "touchcancel", onRelease);
            _removeListener(touchEventTarget, "touchend", onRelease);
            _removeListener(touchEventTarget, "touchmove", onMove);
          }
          _removeListener(ownerDoc, "mouseup", onRelease);
          _removeListener(ownerDoc, "mousemove", onMove);
        }
        _removeScrollListener(target, updateScroll);
        enabled = false;
        InertiaPlugin && type2 !== "soft" && InertiaPlugin.untrack(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
        scrollProxy && scrollProxy.disable();
        _removeFromRenderQueue(render6);
        self.isDragging = self.isPressed = isClicking = false;
        dragging && _dispatchEvent(self, "dragend", "onDragEnd");
        return self;
      };
      _this2.enabled = function(value, type2) {
        return arguments.length ? value ? self.enable(type2) : self.disable(type2) : enabled;
      };
      _this2.kill = function() {
        self.isThrowing = false;
        self.tween && self.tween.kill();
        self.disable();
        gsap2.set(triggers, {
          clearProps: "userSelect"
        });
        delete _lookup[target._gsDragID];
        return self;
      };
      if (~type.indexOf("scroll")) {
        scrollProxy = _this2.scrollProxy = new ScrollProxy(target, _extend({
          onKill: function onKill() {
            self.isPressed && onRelease(null);
          }
        }, vars));
        target.style.overflowY = allowY && !_isTouchDevice ? "auto" : "hidden";
        target.style.overflowX = allowX && !_isTouchDevice ? "auto" : "hidden";
        target = scrollProxy.content;
      }
      if (rotationMode) {
        killProps.rotation = 1;
      } else {
        if (allowX) {
          killProps[xProp] = 1;
        }
        if (allowY) {
          killProps[yProp] = 1;
        }
      }
      gsCache.force3D = "force3D" in vars ? vars.force3D : true;
      _this2.enable();
      return _this2;
    }
    Draggable2.register = function register4(core) {
      gsap2 = core;
      _initCore5();
    };
    Draggable2.create = function create(targets, vars) {
      _coreInitted3 || _initCore5(true);
      return _toArray3(targets).map(function(target) {
        return new Draggable2(target, vars);
      });
    };
    Draggable2.get = function get(target) {
      return _lookup[(_toArray3(target)[0] || {})._gsDragID];
    };
    Draggable2.timeSinceDrag = function timeSinceDrag() {
      return (_getTime() - _lastDragTime) / 1e3;
    };
    Draggable2.hitTest = function hitTest(obj1, obj2, threshold) {
      if (obj1 === obj2) {
        return false;
      }
      var r1 = _parseRect(obj1), r2 = _parseRect(obj2), top = r1.top, left = r1.left, right = r1.right, bottom = r1.bottom, width = r1.width, height = r1.height, isOutside = r2.left > right || r2.right < left || r2.top > bottom || r2.bottom < top, overlap, area, isRatio;
      if (isOutside || !threshold) {
        return !isOutside;
      }
      isRatio = (threshold + "").indexOf("%") !== -1;
      threshold = parseFloat(threshold) || 0;
      overlap = {
        left: Math.max(left, r2.left),
        top: Math.max(top, r2.top)
      };
      overlap.width = Math.min(right, r2.right) - overlap.left;
      overlap.height = Math.min(bottom, r2.bottom) - overlap.top;
      if (overlap.width < 0 || overlap.height < 0) {
        return false;
      }
      if (isRatio) {
        threshold *= 0.01;
        area = overlap.width * overlap.height;
        return area >= width * height * threshold || area >= r2.width * r2.height * threshold;
      }
      return overlap.width > threshold && overlap.height > threshold;
    };
    return Draggable2;
  }(EventDispatcher);
  _setDefaults3(Draggable.prototype, {
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    isDragging: false,
    isPressed: false
  });
  Draggable.zIndex = 1e3;
  Draggable.version = "3.11.3";
  _getGSAP() && gsap2.registerPlugin(Draggable);

  // node_modules/gsap/InertiaPlugin.js
  init_live_reload();

  // node_modules/gsap/utils/VelocityTracker.js
  init_live_reload();
  var gsap3;
  var _coreInitted4;
  var _toArray4;
  var _getUnit;
  var _first;
  var _ticker2;
  var _time1;
  var _time2;
  var _getCache3;
  var _getGSAP3 = function _getGSAP4() {
    return gsap3 || typeof window !== "undefined" && (gsap3 = window.gsap);
  };
  var _lookup2 = {};
  var _round5 = function _round6(value) {
    return Math.round(value * 1e4) / 1e4;
  };
  var _getID = function _getID2(target) {
    return _getCache3(target).id;
  };
  var _getByTarget = function _getByTarget2(target) {
    return _lookup2[_getID(typeof target === "string" ? _toArray4(target)[0] : target)];
  };
  var _onTick = function _onTick2(time) {
    var pt = _first, val;
    if (time - _time1 >= 0.05) {
      _time2 = _time1;
      _time1 = time;
      while (pt) {
        val = pt.g(pt.t, pt.p);
        if (val !== pt.v1 || time - pt.t1 > 0.2) {
          pt.v2 = pt.v1;
          pt.v1 = val;
          pt.t2 = pt.t1;
          pt.t1 = time;
        }
        pt = pt._next;
      }
    }
  };
  var _types = {
    deg: 360,
    rad: Math.PI * 2
  };
  var _initCore7 = function _initCore8() {
    gsap3 = _getGSAP3();
    if (gsap3) {
      _toArray4 = gsap3.utils.toArray;
      _getUnit = gsap3.utils.getUnit;
      _getCache3 = gsap3.core.getCache;
      _ticker2 = gsap3.ticker;
      _coreInitted4 = 1;
    }
  };
  var PropTracker = function PropTracker2(target, property, type, next) {
    this.t = target;
    this.p = property;
    this.g = target._gsap.get;
    this.rCap = _types[type || _getUnit(this.g(target, property))];
    this.v1 = this.v2 = 0;
    this.t1 = this.t2 = _ticker2.time;
    if (next) {
      this._next = next;
      next._prev = this;
    }
  };
  var VelocityTracker = /* @__PURE__ */ function() {
    function VelocityTracker2(target, property) {
      if (!_coreInitted4) {
        _initCore7();
      }
      this.target = _toArray4(target)[0];
      _lookup2[_getID(this.target)] = this;
      this._props = {};
      property && this.add(property);
    }
    VelocityTracker2.register = function register4(core) {
      gsap3 = core;
      _initCore7();
    };
    var _proto = VelocityTracker2.prototype;
    _proto.get = function get(property, skipRecentTick) {
      var pt = this._props[property] || console.warn("Not tracking " + property + " velocity."), val, dif, rotationCap;
      val = parseFloat(skipRecentTick ? pt.v1 : pt.g(pt.t, pt.p));
      dif = val - parseFloat(pt.v2);
      rotationCap = pt.rCap;
      if (rotationCap) {
        dif = dif % rotationCap;
        if (dif !== dif % (rotationCap / 2)) {
          dif = dif < 0 ? dif + rotationCap : dif - rotationCap;
        }
      }
      return _round5(dif / ((skipRecentTick ? pt.t1 : _ticker2.time) - pt.t2));
    };
    _proto.getAll = function getAll() {
      var result = {}, props = this._props, p;
      for (p in props) {
        result[p] = this.get(p);
      }
      return result;
    };
    _proto.isTracking = function isTracking(property) {
      return property in this._props;
    };
    _proto.add = function add(property, type) {
      if (!(property in this._props)) {
        if (!_first) {
          _ticker2.add(_onTick);
          _time1 = _time2 = _ticker2.time;
        }
        _first = this._props[property] = new PropTracker(this.target, property, type, _first);
      }
    };
    _proto.remove = function remove(property) {
      var pt = this._props[property], prev, next;
      if (pt) {
        prev = pt._prev;
        next = pt._next;
        if (prev) {
          prev._next = next;
        }
        if (next) {
          next._prev = prev;
        } else if (_first === pt) {
          _ticker2.remove(_onTick);
          _first = 0;
        }
        delete this._props[property];
      }
    };
    _proto.kill = function kill3(shallow) {
      for (var p in this._props) {
        this.remove(p);
      }
      if (!shallow) {
        delete _lookup2[_getID(this.target)];
      }
    };
    VelocityTracker2.track = function track(targets, properties, types) {
      if (!_coreInitted4) {
        _initCore7();
      }
      var result = [], targs = _toArray4(targets), a = properties.split(","), t2 = (types || "").split(","), i = targs.length, tracker, j;
      while (i--) {
        tracker = _getByTarget(targs[i]) || new VelocityTracker2(targs[i]);
        j = a.length;
        while (j--) {
          tracker.add(a[j], t2[j] || t2[0]);
        }
        result.push(tracker);
      }
      return result;
    };
    VelocityTracker2.untrack = function untrack(targets, properties) {
      var props = (properties || "").split(",");
      _toArray4(targets).forEach(function(target) {
        var tracker = _getByTarget(target);
        if (tracker) {
          if (!props.length) {
            tracker.kill(1);
          } else {
            props.forEach(function(p) {
              return tracker.remove(p);
            });
          }
        }
      });
    };
    VelocityTracker2.isTracking = function isTracking(target, property) {
      var tracker = _getByTarget(target);
      return tracker && tracker.isTracking(property);
    };
    VelocityTracker2.getVelocity = function getVelocity(target, property) {
      var tracker = _getByTarget(target);
      return !tracker || !tracker.isTracking(property) ? console.warn("Not tracking velocity of " + property) : tracker.get(property);
    };
    return VelocityTracker2;
  }();
  VelocityTracker.getByTarget = _getByTarget;
  _getGSAP3() && gsap3.registerPlugin(VelocityTracker);

  // node_modules/gsap/InertiaPlugin.js
  var gsap4;
  var _coreInitted5;
  var _parseEase3;
  var _toArray5;
  var _power3;
  var _config2;
  var _getUnit2;
  var PropTween2;
  var _getCache4;
  var _checkPointRatio;
  var _clamp3;
  var _processingVars;
  var _getStyleSaver3;
  var _reverting3;
  var _getTracker = VelocityTracker.getByTarget;
  var _getGSAP5 = function _getGSAP6() {
    return gsap4 || typeof window !== "undefined" && (gsap4 = window.gsap) && gsap4.registerPlugin && gsap4;
  };
  var _isString3 = function _isString4(value) {
    return typeof value === "string";
  };
  var _isNumber3 = function _isNumber4(value) {
    return typeof value === "number";
  };
  var _isObject5 = function _isObject6(value) {
    return typeof value === "object";
  };
  var _isFunction5 = function _isFunction6(value) {
    return typeof value === "function";
  };
  var _bonusValidated2 = 1;
  var _isArray4 = Array.isArray;
  var _emptyFunc5 = function _emptyFunc6(p) {
    return p;
  };
  var _bigNum4 = 1e10;
  var _tinyNum2 = 1 / _bigNum4;
  var _checkPoint = 0.05;
  var _round7 = function _round8(value) {
    return Math.round(value * 1e4) / 1e4;
  };
  var _extend3 = function _extend4(obj, defaults2, exclude) {
    for (var p in defaults2) {
      if (!(p in obj) && p !== exclude) {
        obj[p] = defaults2[p];
      }
    }
    return obj;
  };
  var _deepClone = function _deepClone2(obj) {
    var copy = {}, p, v;
    for (p in obj) {
      copy[p] = _isObject5(v = obj[p]) && !_isArray4(v) ? _deepClone2(v) : v;
    }
    return copy;
  };
  var _getClosest = function _getClosest2(n, values, max, min, radius) {
    var i = values.length, closest = 0, absDif = _bigNum4, val, dif, p, dist;
    if (_isObject5(n)) {
      while (i--) {
        val = values[i];
        dif = 0;
        for (p in n) {
          dist = val[p] - n[p];
          dif += dist * dist;
        }
        if (dif < absDif) {
          closest = i;
          absDif = dif;
        }
      }
      if ((radius || _bigNum4) < _bigNum4 && radius < Math.sqrt(absDif)) {
        return n;
      }
    } else {
      while (i--) {
        val = values[i];
        dif = val - n;
        if (dif < 0) {
          dif = -dif;
        }
        if (dif < absDif && val >= min && val <= max) {
          closest = i;
          absDif = dif;
        }
      }
    }
    return values[closest];
  };
  var _parseEnd = function _parseEnd2(curProp, end, max, min, name, radius, velocity) {
    if (curProp.end === "auto") {
      return curProp;
    }
    var endVar = curProp.end, adjustedEnd, p;
    max = isNaN(max) ? _bigNum4 : max;
    min = isNaN(min) ? -_bigNum4 : min;
    if (_isObject5(end)) {
      adjustedEnd = end.calculated ? end : (_isFunction5(endVar) ? endVar(end, velocity) : _getClosest(end, endVar, max, min, radius)) || end;
      if (!end.calculated) {
        for (p in adjustedEnd) {
          end[p] = adjustedEnd[p];
        }
        end.calculated = true;
      }
      adjustedEnd = adjustedEnd[name];
    } else {
      adjustedEnd = _isFunction5(endVar) ? endVar(end, velocity) : _isArray4(endVar) ? _getClosest(end, endVar, max, min, radius) : parseFloat(endVar);
    }
    if (adjustedEnd > max) {
      adjustedEnd = max;
    } else if (adjustedEnd < min) {
      adjustedEnd = min;
    }
    return {
      max: adjustedEnd,
      min: adjustedEnd,
      unitFactor: curProp.unitFactor
    };
  };
  var _getNumOrDefault = function _getNumOrDefault2(vars, property, defaultValue) {
    return isNaN(vars[property]) ? defaultValue : +vars[property];
  };
  var _calculateChange = function _calculateChange2(velocity, duration) {
    return duration * _checkPoint * velocity / _checkPointRatio;
  };
  var _calculateDuration = function _calculateDuration2(start, end, velocity) {
    return Math.abs((end - start) * _checkPointRatio / velocity / _checkPoint);
  };
  var _reservedProps2 = {
    resistance: 1,
    checkpoint: 1,
    preventOvershoot: 1,
    linkedProps: 1,
    radius: 1,
    duration: 1
  };
  var _processLinkedProps = function _processLinkedProps2(target, vars, getVal, resistance) {
    if (vars.linkedProps) {
      var linkedPropNames = vars.linkedProps.split(","), linkedProps = {}, i, p, curProp, curVelocity, tracker, curDuration;
      for (i = 0; i < linkedPropNames.length; i++) {
        p = linkedPropNames[i];
        curProp = vars[p];
        if (curProp) {
          if (_isNumber3(curProp.velocity)) {
            curVelocity = curProp.velocity;
          } else {
            tracker = tracker || _getTracker(target);
            curVelocity = tracker && tracker.isTracking(p) ? tracker.get(p) : 0;
          }
          curDuration = Math.abs(curVelocity / _getNumOrDefault(curProp, "resistance", resistance));
          linkedProps[p] = parseFloat(getVal(target, p)) + _calculateChange(curVelocity, curDuration);
        }
      }
      return linkedProps;
    }
  };
  var _calculateTweenDuration = function _calculateTweenDuration2(target, vars, maxDuration, minDuration, overshootTolerance, recordEnd) {
    if (maxDuration === void 0) {
      maxDuration = 10;
    }
    if (minDuration === void 0) {
      minDuration = 0.2;
    }
    if (overshootTolerance === void 0) {
      overshootTolerance = 1;
    }
    if (recordEnd === void 0) {
      recordEnd = 0;
    }
    _isString3(target) && (target = _toArray5(target)[0]);
    if (!target) {
      return 0;
    }
    var duration = 0, clippedDuration = _bigNum4, inertiaVars = vars.inertia || vars, getVal = _getCache4(target).get, resistance = _getNumOrDefault(inertiaVars, "resistance", _config2.resistance), p, curProp, curDuration, curVelocity, curVal, end, curClippedDuration, tracker, unitFactor, linkedProps;
    linkedProps = _processLinkedProps(target, inertiaVars, getVal, resistance);
    for (p in inertiaVars) {
      if (!_reservedProps2[p]) {
        curProp = inertiaVars[p];
        if (!_isObject5(curProp)) {
          tracker = tracker || _getTracker(target);
          if (tracker && tracker.isTracking(p)) {
            curProp = _isNumber3(curProp) ? {
              velocity: curProp
            } : {
              velocity: tracker.get(p)
            };
          } else {
            curVelocity = +curProp || 0;
            curDuration = Math.abs(curVelocity / resistance);
          }
        }
        if (_isObject5(curProp)) {
          if (_isNumber3(curProp.velocity)) {
            curVelocity = curProp.velocity;
          } else {
            tracker = tracker || _getTracker(target);
            curVelocity = tracker && tracker.isTracking(p) ? tracker.get(p) : 0;
          }
          curDuration = _clamp3(minDuration, maxDuration, Math.abs(curVelocity / _getNumOrDefault(curProp, "resistance", resistance)));
          curVal = parseFloat(getVal(target, p)) || 0;
          end = curVal + _calculateChange(curVelocity, curDuration);
          if ("end" in curProp) {
            curProp = _parseEnd(curProp, linkedProps && p in linkedProps ? linkedProps : end, curProp.max, curProp.min, p, inertiaVars.radius, curVelocity);
            if (recordEnd) {
              _processingVars === vars && (_processingVars = inertiaVars = _deepClone(vars));
              inertiaVars[p] = _extend3(curProp, inertiaVars[p], "end");
            }
          }
          if ("max" in curProp && end > +curProp.max + _tinyNum2) {
            unitFactor = curProp.unitFactor || _config2.unitFactors[p] || 1;
            curClippedDuration = curVal > curProp.max && curProp.min !== curProp.max || curVelocity * unitFactor > -15 && curVelocity * unitFactor < 45 ? minDuration + (maxDuration - minDuration) * 0.1 : _calculateDuration(curVal, curProp.max, curVelocity);
            if (curClippedDuration + overshootTolerance < clippedDuration) {
              clippedDuration = curClippedDuration + overshootTolerance;
            }
          } else if ("min" in curProp && end < +curProp.min - _tinyNum2) {
            unitFactor = curProp.unitFactor || _config2.unitFactors[p] || 1;
            curClippedDuration = curVal < curProp.min && curProp.min !== curProp.max || curVelocity * unitFactor > -45 && curVelocity * unitFactor < 15 ? minDuration + (maxDuration - minDuration) * 0.1 : _calculateDuration(curVal, curProp.min, curVelocity);
            if (curClippedDuration + overshootTolerance < clippedDuration) {
              clippedDuration = curClippedDuration + overshootTolerance;
            }
          }
          curClippedDuration > duration && (duration = curClippedDuration);
        }
        curDuration > duration && (duration = curDuration);
      }
    }
    duration > clippedDuration && (duration = clippedDuration);
    return duration > maxDuration ? maxDuration : duration < minDuration ? minDuration : duration;
  };
  var _initCore9 = function _initCore10() {
    gsap4 = _getGSAP5();
    if (gsap4) {
      _parseEase3 = gsap4.parseEase;
      _toArray5 = gsap4.utils.toArray;
      _getUnit2 = gsap4.utils.getUnit;
      _getCache4 = gsap4.core.getCache;
      _clamp3 = gsap4.utils.clamp;
      _getStyleSaver3 = gsap4.core.getStyleSaver;
      _reverting3 = gsap4.core.reverting || function() {
      };
      _power3 = _parseEase3("power3");
      _checkPointRatio = _power3(0.05);
      PropTween2 = gsap4.core.PropTween;
      gsap4.config({
        resistance: 100,
        unitFactors: {
          time: 1e3,
          totalTime: 1e3,
          progress: 1e3,
          totalProgress: 1e3
        }
      });
      _config2 = gsap4.config();
      gsap4.registerPlugin(VelocityTracker);
      _coreInitted5 = 1;
    }
  };
  var InertiaPlugin2 = {
    version: "3.11.3",
    name: "inertia",
    register: function register(core) {
      gsap4 = core;
      _initCore9();
    },
    init: function init4(target, vars, tween, index, targets) {
      _coreInitted5 || _initCore9();
      var tracker = _getTracker(target);
      if (vars === "auto") {
        if (!tracker) {
          console.warn("No inertia tracking on " + target + ". InertiaPlugin.track(target) first.");
          return;
        }
        vars = tracker.getAll();
      }
      this.styles = _getStyleSaver3 && typeof target.style === "object" && _getStyleSaver3(target);
      this.target = target;
      this.tween = tween;
      _processingVars = vars;
      var cache = target._gsap, getVal = cache.get, dur = vars.duration, durIsObj = _isObject5(dur), preventOvershoot = vars.preventOvershoot || durIsObj && dur.overshoot === 0, resistance = _getNumOrDefault(vars, "resistance", _config2.resistance), duration = _isNumber3(dur) ? dur : _calculateTweenDuration(target, vars, durIsObj && dur.max || 10, durIsObj && dur.min || 0.2, durIsObj && "overshoot" in dur ? +dur.overshoot : preventOvershoot ? 0 : 1, true), p, curProp, curVal, unit, velocity, change1, end, change2, linkedProps;
      vars = _processingVars;
      _processingVars = 0;
      linkedProps = _processLinkedProps(target, vars, getVal, resistance);
      for (p in vars) {
        if (!_reservedProps2[p]) {
          curProp = vars[p];
          _isFunction5(curProp) && (curProp = curProp(index, target, targets));
          if (_isNumber3(curProp)) {
            velocity = curProp;
          } else if (_isObject5(curProp) && !isNaN(curProp.velocity)) {
            velocity = +curProp.velocity;
          } else {
            if (tracker && tracker.isTracking(p)) {
              velocity = tracker.get(p);
            } else {
              console.warn("ERROR: No velocity was defined for " + target + " property: " + p);
            }
          }
          change1 = _calculateChange(velocity, duration);
          change2 = 0;
          curVal = getVal(target, p);
          unit = _getUnit2(curVal);
          curVal = parseFloat(curVal);
          if (_isObject5(curProp)) {
            end = curVal + change1;
            if ("end" in curProp) {
              curProp = _parseEnd(curProp, linkedProps && p in linkedProps ? linkedProps : end, curProp.max, curProp.min, p, vars.radius, velocity);
            }
            if ("max" in curProp && +curProp.max < end) {
              if (preventOvershoot || curProp.preventOvershoot) {
                change1 = curProp.max - curVal;
              } else {
                change2 = curProp.max - curVal - change1;
              }
            } else if ("min" in curProp && +curProp.min > end) {
              if (preventOvershoot || curProp.preventOvershoot) {
                change1 = curProp.min - curVal;
              } else {
                change2 = curProp.min - curVal - change1;
              }
            }
          }
          this._props.push(p);
          this.styles && this.styles.save(p);
          this._pt = new PropTween2(this._pt, target, p, curVal, 0, _emptyFunc5, 0, cache.set(target, p, this));
          this._pt.u = unit || 0;
          this._pt.c1 = change1;
          this._pt.c2 = change2;
        }
      }
      tween.duration(duration);
      return _bonusValidated2;
    },
    render: function render3(ratio, data) {
      var pt = data._pt;
      ratio = _power3(data.tween._time / data.tween._dur);
      if (ratio || !_reverting3()) {
        while (pt) {
          pt.set(pt.t, pt.p, _round7(pt.s + pt.c1 * ratio + pt.c2 * ratio * ratio) + pt.u, pt.d, ratio);
          pt = pt._next;
        }
      } else {
        data.styles.revert();
      }
    }
  };
  "track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(name) {
    return InertiaPlugin2[name] = VelocityTracker[name];
  });
  _getGSAP5() && gsap4.registerPlugin(InertiaPlugin2);

  // src/components/draggableSlider.ts
  gsapWithCSS.registerPlugin(InertiaPlugin2, Draggable);
  var draggableSlider = () => {
    const device12 = getDeviceType();
    const sliderParent = document.querySelector(".about-team_wrapper");
    const sliderContainer = sliderParent.querySelector(".about-team_list");
    const slides = [...document.querySelectorAll(".about-team_item")];
    const prevButton = document.querySelector("#prevButton");
    const nextButton = document.querySelector("#nextButton");
    const slideCount = slides.length;
    const slideDuration = 0.3;
    let slideWidth = 0;
    let slideHeight = 0;
    let wrapWidth = 0;
    const paddingBottom = 0;
    for (let i = 0; i < slideCount; i++) {
      const calcPercent = i * 100 + 10;
      gsapWithCSS.set(slides[i], {
        xPercent: calcPercent
      });
    }
    const animation = gsapWithCSS.to(slides, {
      duration: 1,
      xPercent: "+=" + slideCount * 100,
      ease: "none",
      paused: true,
      repeat: -1,
      modifiers: {
        xPercent: gsapWithCSS.utils.wrap(-100, (slideCount - 1) * 100)
      }
    });
    const proxy = document.createElement("div");
    gsapWithCSS.set(proxy, { x: 0 });
    let slideAnimation = gsapWithCSS.to({}, { duration: 0.1 });
    init7();
    Draggable.create(proxy, {
      trigger: sliderContainer,
      inertia: true,
      throwProps: true,
      onPress: updateDraggable,
      onDrag: updateProgress,
      onThrowUpdate: updateProgress,
      snap: {
        x: gsapWithCSS.utils.snap(slideWidth)
      }
    });
    window.addEventListener("resize", resize);
    prevButton.addEventListener("click", function() {
      animateSlides(1);
    });
    nextButton.addEventListener("click", function() {
      animateSlides(-1);
    });
    function init7() {
      const sliderGrid = document.querySelector(".about-team_grid");
      const norm = gsapWithCSS.getProperty(proxy, "x") / wrapWidth || 0;
      slideWidth = slides[0].offsetWidth;
      wrapWidth = slideWidth * slideCount;
      gsapWithCSS.set(proxy, {
        x: norm * wrapWidth
      });
      const slideHeight2 = calculateHeight();
      slideHeight2.then((result) => {
        gsapWithCSS.set(sliderGrid, { height: result });
      });
      animateSlides(0);
      slideAnimation.progress(1);
    }
    function resize() {
      const sliderGrid = document.querySelector(".about-team_grid");
      const norm = gsapWithCSS.getProperty(proxy, "x") / wrapWidth || 0;
      slideHeight = largestCard();
      slideWidth = slides[0].offsetWidth;
      gsapWithCSS.set(sliderGrid, { height: slideHeight });
      wrapWidth = slideWidth * slideCount;
      gsapWithCSS.set(proxy, {
        x: norm * wrapWidth
      });
      animateSlides(0);
      slideAnimation.progress(1);
    }
    function updateDraggable() {
      slideAnimation.kill();
      this.update();
    }
    function animateSlides(direction) {
      slideAnimation.kill();
      const x = snapX(gsapWithCSS.getProperty(proxy, "x") + direction * slideWidth);
      slideAnimation = gsapWithCSS.to(proxy, {
        duration: slideDuration,
        x,
        onUpdate: updateProgress
      });
    }
    function updateProgress() {
      animation.progress(gsapWithCSS.utils.wrap(0, 1, gsapWithCSS.getProperty(proxy, "x") / wrapWidth));
    }
    function snapX(x) {
      return Math.round(x / slideWidth) * slideWidth;
    }
    function largestCard() {
      const slides2 = [...document.querySelectorAll(".about-team_item")];
      const cardHeights = [];
      for (const i in slides2) {
        const temp = slides2[i].offsetHeight;
        cardHeights.push(temp);
      }
      const maxHeight = Math.max(...cardHeights);
      const totalHeight = maxHeight + paddingBottom;
      return totalHeight;
    }
    async function calculateHeight() {
      const slides2 = [...document.querySelectorAll(".about-team_item")];
      const slideImage = slides2[0].querySelector(".about-team_image");
      const overviewHeights = [];
      await waitForImageToLoad(slideImage);
      const imageHeight = slideImage.offsetHeight;
      for (const i in slides2) {
        const temp = slides2[i];
        const tempOverview = temp.querySelector(".about-team_info-wrap");
        overviewHeights.push(tempOverview.offsetHeight);
      }
      const maxOvHeight = Math.max(...overviewHeights);
      const totalHeight = imageHeight + maxOvHeight + paddingBottom;
      return totalHeight;
    }
    function waitForImageToLoad(imageElement) {
      return new Promise((resolve) => {
        imageElement.onload = resolve;
      });
    }
  };

  // src/motion/aboutMotion.ts
  init_live_reload();
  init_getDevice();
  init_gsap();

  // node_modules/gsap/ScrollTrigger.js
  init_live_reload();

  // node_modules/gsap/Observer.js
  init_live_reload();
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var gsap5;
  var _coreInitted6;
  var _clamp4;
  var _win6;
  var _doc6;
  var _docEl;
  var _body3;
  var _isTouch;
  var _pointerType;
  var ScrollTrigger;
  var _root;
  var _normalizer;
  var _eventTypes;
  var _getGSAP7 = function _getGSAP8() {
    return gsap5 || typeof window !== "undefined" && (gsap5 = window.gsap) && gsap5.registerPlugin && gsap5;
  };
  var _startup = 1;
  var _observers = [];
  var _scrollers = [];
  var _proxies = [];
  var _getTime2 = Date.now;
  var _bridge = function _bridge2(name, value) {
    return value;
  };
  var _integrate = function _integrate2() {
    var core = ScrollTrigger.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
    scrollers.push.apply(scrollers, _scrollers);
    proxies.push.apply(proxies, _proxies);
    _scrollers = scrollers;
    _proxies = proxies;
    _bridge = function _bridge3(name, value) {
      return data[name](value);
    };
  };
  var _getProxyProp = function _getProxyProp2(element, property) {
    return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
  };
  var _isViewport = function _isViewport2(el) {
    return !!~_root.indexOf(el);
  };
  var _addListener3 = function _addListener4(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
      passive: !nonPassive,
      capture: !!capture
    });
  };
  var _removeListener3 = function _removeListener4(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  };
  var _scrollLeft = "scrollLeft";
  var _scrollTop = "scrollTop";
  var _onScroll = function _onScroll2() {
    return _normalizer && _normalizer.isPressed || _scrollers.cache++;
  };
  var _scrollCacheFunc = function _scrollCacheFunc2(f, doNotCache) {
    var cachingFunc = function cachingFunc2(value) {
      if (value || value === 0) {
        _startup && (_win6.history.scrollRestoration = "manual");
        var isNormalizing = _normalizer && _normalizer.isPressed;
        value = cachingFunc2.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0);
        f(value);
        cachingFunc2.cacheID = _scrollers.cache;
        isNormalizing && _bridge("ss", value);
      } else if (doNotCache || _scrollers.cache !== cachingFunc2.cacheID || _bridge("ref")) {
        cachingFunc2.cacheID = _scrollers.cache;
        cachingFunc2.v = f();
      }
      return cachingFunc2.v + cachingFunc2.offset;
    };
    cachingFunc.offset = 0;
    return f && cachingFunc;
  };
  var _horizontal = {
    s: _scrollLeft,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: _scrollCacheFunc(function(value) {
      return arguments.length ? _win6.scrollTo(value, _vertical.sc()) : _win6.pageXOffset || _doc6[_scrollLeft] || _docEl[_scrollLeft] || _body3[_scrollLeft] || 0;
    })
  };
  var _vertical = {
    s: _scrollTop,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: _horizontal,
    sc: _scrollCacheFunc(function(value) {
      return arguments.length ? _win6.scrollTo(_horizontal.sc(), value) : _win6.pageYOffset || _doc6[_scrollTop] || _docEl[_scrollTop] || _body3[_scrollTop] || 0;
    })
  };
  var _getTarget = function _getTarget2(t2) {
    return gsap5.utils.toArray(t2)[0] || (typeof t2 === "string" && gsap5.config().nullTargetWarn !== false ? console.warn("Element not found:", t2) : null);
  };
  var _getScrollFunc = function _getScrollFunc2(element, _ref) {
    var s = _ref.s, sc = _ref.sc;
    _isViewport(element) && (element = _doc6.scrollingElement || _docEl);
    var i = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
    !~i && (i = _scrollers.push(element) - 1);
    _scrollers[i + offset] || element.addEventListener("scroll", _onScroll);
    var prev = _scrollers[i + offset], func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value) {
      return arguments.length ? element[s] = value : element[s];
    })));
    func.target = element;
    prev || (func.smooth = gsap5.getProperty(element, "scrollBehavior") === "smooth");
    return func;
  };
  var _getVelocityProp = function _getVelocityProp2(value, minTimeRefresh, useDelta) {
    var v1 = value, v2 = value, t1 = _getTime2(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update2(value2, force) {
      var t3 = _getTime2();
      if (force || t3 - t1 > min) {
        v2 = v1;
        v1 = value2;
        t2 = t1;
        t1 = t3;
      } else if (useDelta) {
        v1 += value2;
      } else {
        v1 = v2 + (value2 - v2) / (t3 - t2) * (t1 - t2);
      }
    }, reset = function reset2() {
      v2 = v1 = useDelta ? 0 : v1;
      t2 = t1 = 0;
    }, getVelocity = function getVelocity2(latestValue) {
      var tOld = t2, vOld = v2, t3 = _getTime2();
      (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
      return t1 === t2 || t3 - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t3 : t1) - tOld) * 1e3;
    };
    return {
      update,
      reset,
      getVelocity
    };
  };
  var _getEvent = function _getEvent2(e2, preventDefault) {
    preventDefault && !e2._gsapAllow && e2.preventDefault();
    return e2.changedTouches ? e2.changedTouches[0] : e2;
  };
  var _getAbsoluteMax = function _getAbsoluteMax2(a) {
    var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
    return Math.abs(max) >= Math.abs(min) ? max : min;
  };
  var _setScrollTrigger = function _setScrollTrigger2() {
    ScrollTrigger = gsap5.core.globals().ScrollTrigger;
    ScrollTrigger && ScrollTrigger.core && _integrate();
  };
  var _initCore11 = function _initCore12(core) {
    gsap5 = core || _getGSAP7();
    if (gsap5 && typeof document !== "undefined" && document.body) {
      _win6 = window;
      _doc6 = document;
      _docEl = _doc6.documentElement;
      _body3 = _doc6.body;
      _root = [_win6, _doc6, _docEl, _body3];
      _clamp4 = gsap5.utils.clamp;
      _pointerType = "onpointerenter" in _body3 ? "pointer" : "mouse";
      _isTouch = Observer.isTouch = _win6.matchMedia && _win6.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win6 || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
      _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
      setTimeout(function() {
        return _startup = 0;
      }, 500);
      _setScrollTrigger();
      _coreInitted6 = 1;
    }
    return _coreInitted6;
  };
  _horizontal.op = _vertical;
  _scrollers.cache = 0;
  var Observer = /* @__PURE__ */ function() {
    function Observer2(vars) {
      this.init(vars);
    }
    var _proto = Observer2.prototype;
    _proto.init = function init7(vars) {
      _coreInitted6 || _initCore11(gsap5) || console.warn("Please gsap.registerPlugin(Observer)");
      ScrollTrigger || _setScrollTrigger();
      var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
      this.target = target = _getTarget(target) || _docEl;
      this.vars = vars;
      ignore && (ignore = gsap5.utils.toArray(ignore));
      tolerance = tolerance || 1e-9;
      dragMinimum = dragMinimum || 0;
      wheelSpeed = wheelSpeed || 1;
      scrollSpeed = scrollSpeed || 1;
      type = type || "wheel,touch,pointer";
      debounce = debounce !== false;
      lineHeight || (lineHeight = parseFloat(_win6.getComputedStyle(_body3).lineHeight) || 22);
      var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self = this, prevDeltaX = 0, prevDeltaY = 0, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport(target), ownerDoc = target.ownerDocument || _doc6, deltaX = [0, 0, 0], deltaY = [0, 0, 0], onClickTime = 0, clickCapture = function clickCapture2() {
        return onClickTime = _getTime2();
      }, _ignoreCheck = function _ignoreCheck2(e2, isPointerOrTouch) {
        return (self.event = e2) && ignore && ~ignore.indexOf(e2.target) || isPointerOrTouch && limitToTouch && e2.pointerType !== "touch" || ignoreCheck && ignoreCheck(e2, isPointerOrTouch);
      }, onStopFunc = function onStopFunc2() {
        self._vx.reset();
        self._vy.reset();
        onStopDelayedCall.pause();
        onStop && onStop(self);
      }, update = function update2() {
        var dx = self.deltaX = _getAbsoluteMax(deltaX), dy = self.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
        onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY);
        if (changedX) {
          onRight && self.deltaX > 0 && onRight(self);
          onLeft && self.deltaX < 0 && onLeft(self);
          onChangeX && onChangeX(self);
          onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
          prevDeltaX = self.deltaX;
          deltaX[0] = deltaX[1] = deltaX[2] = 0;
        }
        if (changedY) {
          onDown && self.deltaY > 0 && onDown(self);
          onUp && self.deltaY < 0 && onUp(self);
          onChangeY && onChangeY(self);
          onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
          prevDeltaY = self.deltaY;
          deltaY[0] = deltaY[1] = deltaY[2] = 0;
        }
        if (moved || dragged) {
          onMove && onMove(self);
          if (dragged) {
            onDrag(self);
            dragged = false;
          }
          moved = false;
        }
        locked && !(locked = false) && onLockAxis && onLockAxis(self);
        if (wheeled) {
          onWheel(self);
          wheeled = false;
        }
        id = 0;
      }, onDelta = function onDelta2(x, y, index) {
        deltaX[index] += x;
        deltaY[index] += y;
        self._vx.update(x);
        self._vy.update(y);
        debounce ? id || (id = requestAnimationFrame(update)) : update();
      }, onTouchOrPointerDelta = function onTouchOrPointerDelta2(x, y) {
        if (lockAxis && !axis) {
          self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
          locked = true;
        }
        if (axis !== "y") {
          deltaX[2] += x;
          self._vx.update(x, true);
        }
        if (axis !== "x") {
          deltaY[2] += y;
          self._vy.update(y, true);
        }
        debounce ? id || (id = requestAnimationFrame(update)) : update();
      }, _onDrag = function _onDrag2(e2) {
        if (_ignoreCheck(e2, 1)) {
          return;
        }
        e2 = _getEvent(e2, preventDefault);
        var x = e2.clientX, y = e2.clientY, dx = x - self.x, dy = y - self.y, isDragging = self.isDragging;
        self.x = x;
        self.y = y;
        if (isDragging || Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum) {
          onDrag && (dragged = true);
          isDragging || (self.isDragging = true);
          onTouchOrPointerDelta(dx, dy);
          isDragging || onDragStart && onDragStart(self);
        }
      }, _onPress = self.onPress = function(e2) {
        if (_ignoreCheck(e2, 1)) {
          return;
        }
        self.axis = axis = null;
        onStopDelayedCall.pause();
        self.isPressed = true;
        e2 = _getEvent(e2);
        prevDeltaX = prevDeltaY = 0;
        self.startX = self.x = e2.clientX;
        self.startY = self.y = e2.clientY;
        self._vx.reset();
        self._vy.reset();
        _addListener3(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, preventDefault, true);
        self.deltaX = self.deltaY = 0;
        onPress && onPress(self);
      }, _onRelease = function _onRelease2(e2) {
        if (_ignoreCheck(e2, 1)) {
          return;
        }
        _removeListener3(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        var wasDragging = self.isDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3), eventData = _getEvent(e2);
        if (!wasDragging) {
          self._vx.reset();
          self._vy.reset();
          if (preventDefault && allowClicks) {
            gsap5.delayedCall(0.08, function() {
              if (_getTime2() - onClickTime > 300 && !e2.defaultPrevented) {
                if (e2.target.click) {
                  e2.target.click();
                } else if (ownerDoc.createEvent) {
                  var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                  syntheticEvent.initMouseEvent("click", true, true, _win6, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                  e2.target.dispatchEvent(syntheticEvent);
                }
              }
            });
          }
        }
        self.isDragging = self.isGesturing = self.isPressed = false;
        onStop && !isNormalizer && onStopDelayedCall.restart(true);
        onDragEnd && wasDragging && onDragEnd(self);
        onRelease && onRelease(self, wasDragging);
      }, _onGestureStart = function _onGestureStart2(e2) {
        return e2.touches && e2.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e2, self.isDragging);
      }, _onGestureEnd = function _onGestureEnd2() {
        return (self.isGesturing = false) || onGestureEnd(self);
      }, onScroll = function onScroll2(e2) {
        if (_ignoreCheck(e2)) {
          return;
        }
        var x = scrollFuncX(), y = scrollFuncY();
        onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
        scrollX = x;
        scrollY = y;
        onStop && onStopDelayedCall.restart(true);
      }, _onWheel = function _onWheel2(e2) {
        if (_ignoreCheck(e2)) {
          return;
        }
        e2 = _getEvent(e2, preventDefault);
        onWheel && (wheeled = true);
        var multiplier = (e2.deltaMode === 1 ? lineHeight : e2.deltaMode === 2 ? _win6.innerHeight : 1) * wheelSpeed;
        onDelta(e2.deltaX * multiplier, e2.deltaY * multiplier, 0);
        onStop && !isNormalizer && onStopDelayedCall.restart(true);
      }, _onMove = function _onMove2(e2) {
        if (_ignoreCheck(e2)) {
          return;
        }
        var x = e2.clientX, y = e2.clientY, dx = x - self.x, dy = y - self.y;
        self.x = x;
        self.y = y;
        moved = true;
        (dx || dy) && onTouchOrPointerDelta(dx, dy);
      }, _onHover = function _onHover2(e2) {
        self.event = e2;
        onHover(self);
      }, _onHoverEnd = function _onHoverEnd2(e2) {
        self.event = e2;
        onHoverEnd(self);
      }, _onClick = function _onClick2(e2) {
        return _ignoreCheck(e2) || _getEvent(e2, preventDefault) && onClick(self);
      };
      onStopDelayedCall = self._dc = gsap5.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
      self.deltaX = self.deltaY = 0;
      self._vx = _getVelocityProp(0, 50, true);
      self._vy = _getVelocityProp(0, 50, true);
      self.scrollX = scrollFuncX;
      self.scrollY = scrollFuncY;
      self.isDragging = self.isGesturing = self.isPressed = false;
      self.enable = function(e2) {
        if (!self.isEnabled) {
          _addListener3(isViewport ? ownerDoc : target, "scroll", _onScroll);
          type.indexOf("scroll") >= 0 && _addListener3(isViewport ? ownerDoc : target, "scroll", onScroll, preventDefault, capture);
          type.indexOf("wheel") >= 0 && _addListener3(target, "wheel", _onWheel, preventDefault, capture);
          if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
            _addListener3(target, _eventTypes[0], _onPress, preventDefault, capture);
            _addListener3(ownerDoc, _eventTypes[2], _onRelease);
            _addListener3(ownerDoc, _eventTypes[3], _onRelease);
            allowClicks && _addListener3(target, "click", clickCapture, false, true);
            onClick && _addListener3(target, "click", _onClick);
            onGestureStart && _addListener3(ownerDoc, "gesturestart", _onGestureStart);
            onGestureEnd && _addListener3(ownerDoc, "gestureend", _onGestureEnd);
            onHover && _addListener3(target, _pointerType + "enter", _onHover);
            onHoverEnd && _addListener3(target, _pointerType + "leave", _onHoverEnd);
            onMove && _addListener3(target, _pointerType + "move", _onMove);
          }
          self.isEnabled = true;
          e2 && e2.type && _onPress(e2);
          onEnable && onEnable(self);
        }
        return self;
      };
      self.disable = function() {
        if (self.isEnabled) {
          _observers.filter(function(o) {
            return o !== self && _isViewport(o.target);
          }).length || _removeListener3(isViewport ? ownerDoc : target, "scroll", _onScroll);
          if (self.isPressed) {
            self._vx.reset();
            self._vy.reset();
            _removeListener3(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
          }
          _removeListener3(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
          _removeListener3(target, "wheel", _onWheel, capture);
          _removeListener3(target, _eventTypes[0], _onPress, capture);
          _removeListener3(ownerDoc, _eventTypes[2], _onRelease);
          _removeListener3(ownerDoc, _eventTypes[3], _onRelease);
          _removeListener3(target, "click", clickCapture, true);
          _removeListener3(target, "click", _onClick);
          _removeListener3(ownerDoc, "gesturestart", _onGestureStart);
          _removeListener3(ownerDoc, "gestureend", _onGestureEnd);
          _removeListener3(target, _pointerType + "enter", _onHover);
          _removeListener3(target, _pointerType + "leave", _onHoverEnd);
          _removeListener3(target, _pointerType + "move", _onMove);
          self.isEnabled = self.isPressed = self.isDragging = false;
          onDisable && onDisable(self);
        }
      };
      self.kill = function() {
        self.disable();
        var i = _observers.indexOf(self);
        i >= 0 && _observers.splice(i, 1);
        _normalizer === self && (_normalizer = 0);
      };
      _observers.push(self);
      isNormalizer && _isViewport(target) && (_normalizer = self);
      self.enable(event);
    };
    _createClass(Observer2, [{
      key: "velocityX",
      get: function get() {
        return this._vx.getVelocity();
      }
    }, {
      key: "velocityY",
      get: function get() {
        return this._vy.getVelocity();
      }
    }]);
    return Observer2;
  }();
  Observer.version = "3.11.3";
  Observer.create = function(vars) {
    return new Observer(vars);
  };
  Observer.register = _initCore11;
  Observer.getAll = function() {
    return _observers.slice();
  };
  Observer.getById = function(id) {
    return _observers.filter(function(o) {
      return o.vars.id === id;
    })[0];
  };
  _getGSAP7() && gsap5.registerPlugin(Observer);

  // node_modules/gsap/ScrollTrigger.js
  var gsap6;
  var _coreInitted7;
  var _win7;
  var _doc7;
  var _docEl2;
  var _body4;
  var _root2;
  var _resizeDelay;
  var _toArray6;
  var _clamp5;
  var _time22;
  var _syncInterval;
  var _refreshing;
  var _pointerIsDown;
  var _transformProp4;
  var _i;
  var _prevWidth;
  var _prevHeight;
  var _autoRefresh;
  var _sort;
  var _suppressOverwrites2;
  var _ignoreResize;
  var _normalizer2;
  var _ignoreMobileResize;
  var _baseScreenHeight;
  var _baseScreenWidth;
  var _fixIOSBug;
  var _context2;
  var _scrollRestoration;
  var _limitCallbacks;
  var _startup2 = 1;
  var _getTime3 = Date.now;
  var _time12 = _getTime3();
  var _lastScrollTime = 0;
  var _enabled = 0;
  var _pointerDownHandler = function _pointerDownHandler2() {
    return _pointerIsDown = 1;
  };
  var _pointerUpHandler = function _pointerUpHandler2() {
    return _pointerIsDown = 0;
  };
  var _passThrough3 = function _passThrough4(v) {
    return v;
  };
  var _round9 = function _round10(value) {
    return Math.round(value * 1e5) / 1e5 || 0;
  };
  var _windowExists7 = function _windowExists8() {
    return typeof window !== "undefined";
  };
  var _getGSAP9 = function _getGSAP10() {
    return gsap6 || _windowExists7() && (gsap6 = window.gsap) && gsap6.registerPlugin && gsap6;
  };
  var _isViewport3 = function _isViewport4(e2) {
    return !!~_root2.indexOf(e2);
  };
  var _getBoundsFunc = function _getBoundsFunc2(element) {
    return _getProxyProp(element, "getBoundingClientRect") || (_isViewport3(element) ? function() {
      _winOffsets.width = _win7.innerWidth;
      _winOffsets.height = _win7.innerHeight;
      return _winOffsets;
    } : function() {
      return _getBounds3(element);
    });
  };
  var _getSizeFunc = function _getSizeFunc2(scroller, isViewport, _ref) {
    var d = _ref.d, d2 = _ref.d2, a = _ref.a;
    return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
      return a()[d];
    } : function() {
      return (isViewport ? _win7["inner" + d2] : scroller["client" + d2]) || 0;
    };
  };
  var _getOffsetsFunc = function _getOffsetsFunc2(element, isViewport) {
    return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
      return _winOffsets;
    };
  };
  var _maxScroll = function _maxScroll2(element, _ref2) {
    var s = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
    return (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport3(element) ? (_docEl2[s] || _body4[s]) - (_win7["inner" + d2] || _docEl2["client" + d2] || _body4["client" + d2]) : element[s] - element["offset" + d2];
  };
  var _iterateAutoRefresh = function _iterateAutoRefresh2(func, events) {
    for (var i = 0; i < _autoRefresh.length; i += 3) {
      (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
    }
  };
  var _isString5 = function _isString6(value) {
    return typeof value === "string";
  };
  var _isFunction7 = function _isFunction8(value) {
    return typeof value === "function";
  };
  var _isNumber5 = function _isNumber6(value) {
    return typeof value === "number";
  };
  var _isObject7 = function _isObject8(value) {
    return typeof value === "object";
  };
  var _endAnimation = function _endAnimation2(animation, reversed, pause) {
    return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
  };
  var _callback3 = function _callback4(self, func) {
    if (self.enabled) {
      var result = func(self);
      result && result.totalTime && (self.callbackAnimation = result);
    }
  };
  var _abs = Math.abs;
  var _left = "left";
  var _top = "top";
  var _right = "right";
  var _bottom = "bottom";
  var _width = "width";
  var _height = "height";
  var _Right = "Right";
  var _Left = "Left";
  var _Top = "Top";
  var _Bottom = "Bottom";
  var _padding = "padding";
  var _margin = "margin";
  var _Width = "Width";
  var _Height = "Height";
  var _px = "px";
  var _getComputedStyle5 = function _getComputedStyle6(element) {
    return _win7.getComputedStyle(element);
  };
  var _makePositionable = function _makePositionable2(element) {
    var position = _getComputedStyle5(element).position;
    element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
  };
  var _setDefaults5 = function _setDefaults6(obj, defaults2) {
    for (var p in defaults2) {
      p in obj || (obj[p] = defaults2[p]);
    }
    return obj;
  };
  var _getBounds3 = function _getBounds4(element, withoutTransforms) {
    var tween = withoutTransforms && _getComputedStyle5(element)[_transformProp4] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap6.to(element, {
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
    }).progress(1), bounds = element.getBoundingClientRect();
    tween && tween.progress(0).kill();
    return bounds;
  };
  var _getSize = function _getSize2(element, _ref3) {
    var d2 = _ref3.d2;
    return element["offset" + d2] || element["client" + d2] || 0;
  };
  var _getLabelRatioArray = function _getLabelRatioArray2(timeline2) {
    var a = [], labels = timeline2.labels, duration = timeline2.duration(), p;
    for (p in labels) {
      a.push(labels[p] / duration);
    }
    return a;
  };
  var _getClosestLabel = function _getClosestLabel2(animation) {
    return function(value) {
      return gsap6.utils.snap(_getLabelRatioArray(animation), value);
    };
  };
  var _snapDirectional = function _snapDirectional2(snapIncrementOrArray) {
    var snap3 = gsap6.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a2, b) {
      return a2 - b;
    });
    return a ? function(value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }
      var i;
      if (!direction) {
        return snap3(value);
      }
      if (direction > 0) {
        value -= threshold;
        for (i = 0; i < a.length; i++) {
          if (a[i] >= value) {
            return a[i];
          }
        }
        return a[i - 1];
      } else {
        i = a.length;
        value += threshold;
        while (i--) {
          if (a[i] <= value) {
            return a[i];
          }
        }
      }
      return a[0];
    } : function(value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }
      var snapped = snap3(value);
      return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap3(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
    };
  };
  var _getLabelAtDirection = function _getLabelAtDirection2(timeline2) {
    return function(value, st) {
      return _snapDirectional(_getLabelRatioArray(timeline2))(value, st.direction);
    };
  };
  var _multiListener = function _multiListener2(func, element, types, callback) {
    return types.split(",").forEach(function(type) {
      return func(element, type, callback);
    });
  };
  var _addListener5 = function _addListener6(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
      passive: !nonPassive,
      capture: !!capture
    });
  };
  var _removeListener5 = function _removeListener6(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  };
  var _wheelListener = function _wheelListener2(func, el, scrollFunc) {
    return scrollFunc && scrollFunc.wheelHandler && func(el, "wheel", scrollFunc);
  };
  var _markerDefaults = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  };
  var _defaults2 = {
    toggleActions: "play",
    anticipatePin: 0
  };
  var _keywords = {
    top: 0,
    left: 0,
    center: 0.5,
    bottom: 1,
    right: 1
  };
  var _offsetToPx = function _offsetToPx2(value, size) {
    if (_isString5(value)) {
      var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
      if (~eqIndex) {
        value.indexOf("%") > eqIndex && (relative *= size / 100);
        value = value.substr(0, eqIndex - 1);
      }
      value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
    }
    return value;
  };
  var _createMarker = function _createMarker2(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
    var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
    var e2 = _doc7.createElement("div"), useFixedPosition = _isViewport3(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body4 : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
    (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
    matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
    e2._isStart = isStart;
    e2.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
    e2.style.cssText = css;
    e2.innerText = name || name === 0 ? type + "-" + name : type;
    parent.children[0] ? parent.insertBefore(e2, parent.children[0]) : parent.appendChild(e2);
    e2._offset = e2["offset" + direction.op.d2];
    _positionMarker(e2, 0, direction, isStart);
    return e2;
  };
  var _positionMarker = function _positionMarker2(marker, start, direction, flipped) {
    var vars = {
      display: "block"
    }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
    marker._isFlipped = flipped;
    vars[direction.a + "Percent"] = flipped ? -100 : 0;
    vars[direction.a] = flipped ? "1px" : 0;
    vars["border" + side + _Width] = 1;
    vars["border" + oppositeSide + _Width] = 0;
    vars[direction.p] = start + "px";
    gsap6.set(marker, vars);
  };
  var _triggers = [];
  var _ids = {};
  var _rafID;
  var _sync = function _sync2() {
    return _getTime3() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
  };
  var _onScroll3 = function _onScroll4() {
    if (!_normalizer2 || !_normalizer2.isPressed || _normalizer2.startX > _body4.clientWidth) {
      _scrollers.cache++;
      if (_normalizer2) {
        _rafID || (_rafID = requestAnimationFrame(_updateAll));
      } else {
        _updateAll();
      }
      _lastScrollTime || _dispatch3("scrollStart");
      _lastScrollTime = _getTime3();
    }
  };
  var _setBaseDimensions = function _setBaseDimensions2() {
    _baseScreenWidth = _win7.innerWidth;
    _baseScreenHeight = _win7.innerHeight;
  };
  var _onResize = function _onResize2() {
    _scrollers.cache++;
    !_refreshing && !_ignoreResize && !_doc7.fullscreenElement && !_doc7.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win7.innerWidth || Math.abs(_win7.innerHeight - _baseScreenHeight) > _win7.innerHeight * 0.25) && _resizeDelay.restart(true);
  };
  var _listeners2 = {};
  var _emptyArray2 = [];
  var _softRefresh = function _softRefresh2() {
    return _removeListener5(ScrollTrigger2, "scrollEnd", _softRefresh2) || _refreshAll(true);
  };
  var _dispatch3 = function _dispatch4(type) {
    return _listeners2[type] && _listeners2[type].map(function(f) {
      return f();
    }) || _emptyArray2;
  };
  var _savedStyles = [];
  var _revertRecorded = function _revertRecorded2(media) {
    for (var i = 0; i < _savedStyles.length; i += 5) {
      if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
        _savedStyles[i].style.cssText = _savedStyles[i + 1];
        _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
        _savedStyles[i + 3].uncache = 1;
      }
    }
  };
  var _revertAll = function _revertAll2(kill3, media) {
    var trigger;
    for (_i = 0; _i < _triggers.length; _i++) {
      trigger = _triggers[_i];
      if (trigger && (!media || trigger._ctx === media)) {
        if (kill3) {
          trigger.kill(1);
        } else {
          trigger.revert(true, true);
        }
      }
    }
    media && _revertRecorded(media);
    media || _dispatch3("revert");
  };
  var _clearScrollMemory = function _clearScrollMemory2(scrollRestoration, force) {
    _scrollers.cache++;
    (force || !_refreshingAll) && _scrollers.forEach(function(obj) {
      return _isFunction7(obj) && obj.cacheID++ && (obj.rec = 0);
    });
    _isString5(scrollRestoration) && (_win7.history.scrollRestoration = _scrollRestoration = scrollRestoration);
  };
  var _refreshingAll;
  var _refreshID = 0;
  var _queueRefreshID;
  var _queueRefreshAll = function _queueRefreshAll2() {
    if (_queueRefreshID !== _refreshID) {
      var id = _queueRefreshID = _refreshID;
      requestAnimationFrame(function() {
        return id === _refreshID && _refreshAll(true);
      });
    }
  };
  var _refreshAll = function _refreshAll2(force, skipRevert) {
    if (_lastScrollTime && !force) {
      _addListener5(ScrollTrigger2, "scrollEnd", _softRefresh);
      return;
    }
    _refreshingAll = ScrollTrigger2.isRefreshing = true;
    _scrollers.forEach(function(obj) {
      return _isFunction7(obj) && obj.cacheID++ && (obj.rec = obj());
    });
    var refreshInits = _dispatch3("refreshInit");
    _sort && ScrollTrigger2.sort();
    skipRevert || _revertAll();
    _scrollers.forEach(function(obj) {
      if (_isFunction7(obj)) {
        obj.smooth && (obj.target.style.scrollBehavior = "auto");
        obj(0);
      }
    });
    _triggers.slice(0).forEach(function(t2) {
      return t2.refresh();
    });
    _triggers.forEach(function(t2, i) {
      if (t2._subPinOffset && t2.pin) {
        var prop = t2.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t2.pin[prop];
        t2.revert(true, 1);
        t2.adjustPinSpacing(t2.pin[prop] - original);
        t2.revert(false, 1);
      }
    });
    _triggers.forEach(function(t2) {
      return t2.vars.end === "max" && t2.setPositions(t2.start, Math.max(t2.start + 1, _maxScroll(t2.scroller, t2._dir)));
    });
    refreshInits.forEach(function(result) {
      return result && result.render && result.render(-1);
    });
    _scrollers.forEach(function(obj) {
      if (_isFunction7(obj)) {
        obj.smooth && requestAnimationFrame(function() {
          return obj.target.style.scrollBehavior = "smooth";
        });
        obj.rec && obj(obj.rec);
      }
    });
    _clearScrollMemory(_scrollRestoration, 1);
    _resizeDelay.pause();
    _refreshID++;
    _updateAll(2);
    _triggers.forEach(function(t2) {
      return _isFunction7(t2.vars.onRefresh) && t2.vars.onRefresh(t2);
    });
    _refreshingAll = ScrollTrigger2.isRefreshing = false;
    _dispatch3("refresh");
  };
  var _lastScroll = 0;
  var _direction = 1;
  var _primary;
  var _updateAll = function _updateAll2(force) {
    if (!_refreshingAll || force === 2) {
      ScrollTrigger2.isUpdating = true;
      _primary && _primary.update(0);
      var l = _triggers.length, time = _getTime3(), recordVelocity = time - _time12 >= 50, scroll = l && _triggers[0].scroll();
      _direction = _lastScroll > scroll ? -1 : 1;
      _lastScroll = scroll;
      if (recordVelocity) {
        if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
          _lastScrollTime = 0;
          _dispatch3("scrollEnd");
        }
        _time22 = _time12;
        _time12 = time;
      }
      if (_direction < 0) {
        _i = l;
        while (_i-- > 0) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
        _direction = 1;
      } else {
        for (_i = 0; _i < l; _i++) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
      }
      ScrollTrigger2.isUpdating = false;
    }
    _rafID = 0;
  };
  var _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"];
  var _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]);
  var _swapPinOut = function _swapPinOut2(pin, spacer, state) {
    _setState(state);
    var cache = pin._gsap;
    if (cache.spacerIsNative) {
      _setState(cache.spacerState);
    } else if (pin._gsap.swappedIn) {
      var parent = spacer.parentNode;
      if (parent) {
        parent.insertBefore(pin, spacer);
        parent.removeChild(spacer);
      }
    }
    pin._gsap.swappedIn = false;
  };
  var _swapPinIn = function _swapPinIn2(pin, spacer, cs, spacerState) {
    if (!pin._gsap.swappedIn) {
      var i = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
      while (i--) {
        p = _propNamesToCopy[i];
        spacerStyle[p] = cs[p];
      }
      spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
      cs.display === "inline" && (spacerStyle.display = "inline-block");
      pinStyle[_bottom] = pinStyle[_right] = "auto";
      spacerStyle.flexBasis = cs.flexBasis || "auto";
      spacerStyle.overflow = "visible";
      spacerStyle.boxSizing = "border-box";
      spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
      spacerStyle[_height] = _getSize(pin, _vertical) + _px;
      spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
      _setState(spacerState);
      pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
      pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
      pinStyle[_padding] = cs[_padding];
      if (pin.parentNode !== spacer) {
        pin.parentNode.insertBefore(spacer, pin);
        spacer.appendChild(pin);
      }
      pin._gsap.swappedIn = true;
    }
  };
  var _capsExp2 = /([A-Z])/g;
  var _setState = function _setState2(state) {
    if (state) {
      var style = state.t.style, l = state.length, i = 0, p, value;
      (state.t._gsap || gsap6.core.getCache(state.t)).uncache = 1;
      for (; i < l; i += 2) {
        value = state[i + 1];
        p = state[i];
        if (value) {
          style[p] = value;
        } else if (style[p]) {
          style.removeProperty(p.replace(_capsExp2, "-$1").toLowerCase());
        }
      }
    }
  };
  var _getState = function _getState2(element) {
    var l = _stateProps.length, style = element.style, state = [], i = 0;
    for (; i < l; i++) {
      state.push(_stateProps[i], style[_stateProps[i]]);
    }
    state.t = element;
    return state;
  };
  var _copyState = function _copyState2(state, override, omitOffsets) {
    var result = [], l = state.length, i = omitOffsets ? 8 : 0, p;
    for (; i < l; i += 2) {
      p = state[i];
      result.push(p, p in override ? override[p] : state[i + 1]);
    }
    result.t = state.t;
    return result;
  };
  var _winOffsets = {
    left: 0,
    top: 0
  };
  var _parsePosition3 = function _parsePosition4(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation) {
    _isFunction7(value) && (value = value(self));
    if (_isString5(value) && value.substr(0, 3) === "max") {
      value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
    }
    var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
    containerAnimation && containerAnimation.seek(0);
    if (!_isNumber5(value)) {
      _isFunction7(trigger) && (trigger = trigger(self));
      var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display;
      element = _getTarget(trigger) || _body4;
      bounds = _getBounds3(element) || {};
      if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle5(element).display === "none") {
        display = element.style.display;
        element.style.display = "block";
        bounds = _getBounds3(element);
        display ? element.style.display = display : element.style.removeProperty("display");
      }
      localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
      globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
      value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
      markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
      scrollerSize -= scrollerSize - globalOffset;
    } else if (markerScroller) {
      _positionMarker(markerScroller, scrollerSize, direction, true);
    }
    if (marker) {
      var position = value + scrollerSize, isStart = marker._isStart;
      p1 = "scroll" + direction.d2;
      _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body4[p1], _docEl2[p1]) : marker.parentNode[p1]) <= position + 1);
      if (useFixedPosition) {
        scrollerBounds = _getBounds3(markerScroller);
        useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
      }
    }
    if (containerAnimation && element) {
      p1 = _getBounds3(element);
      containerAnimation.seek(scrollerMax);
      p2 = _getBounds3(element);
      containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
      value = value / containerAnimation._caScrollDist * scrollerMax;
    }
    containerAnimation && containerAnimation.seek(time);
    return containerAnimation ? value : Math.round(value);
  };
  var _prefixExp = /(webkit|moz|length|cssText|inset)/i;
  var _reparent = function _reparent2(element, parent, top, left) {
    if (element.parentNode !== parent) {
      var style = element.style, p, cs;
      if (parent === _body4) {
        element._stOrig = style.cssText;
        cs = _getComputedStyle5(element);
        for (p in cs) {
          if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
            style[p] = cs[p];
          }
        }
        style.top = top;
        style.left = left;
      } else {
        style.cssText = element._stOrig;
      }
      gsap6.core.getCache(element).uncache = 1;
      parent.appendChild(element);
    }
  };
  var _getTweenCreator = function _getTweenCreator2(scroller, direction) {
    var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, lastScroll1, lastScroll2, getTween = function getTween2(scrollTo, vars, initialValue, change1, change2) {
      var tween = getTween2.tween, onComplete = vars.onComplete, modifiers = {};
      initialValue = initialValue || getScroll();
      change2 = change1 && change2 || 0;
      change1 = change1 || scrollTo - initialValue;
      tween && tween.kill();
      lastScroll1 = Math.round(initialValue);
      vars[prop] = scrollTo;
      vars.modifiers = modifiers;
      modifiers[prop] = function(value) {
        value = Math.round(getScroll());
        if (value !== lastScroll1 && value !== lastScroll2 && Math.abs(value - lastScroll1) > 3 && Math.abs(value - lastScroll2) > 3) {
          tween.kill();
          getTween2.tween = 0;
        } else {
          value = initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio;
        }
        lastScroll2 = lastScroll1;
        return lastScroll1 = Math.round(value);
      };
      vars.onComplete = function() {
        getTween2.tween = 0;
        onComplete && onComplete.call(tween);
      };
      tween = getTween2.tween = gsap6.to(scroller, vars);
      return tween;
    };
    scroller[prop] = getScroll;
    getScroll.wheelHandler = function() {
      return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
    };
    _addListener5(scroller, "wheel", getScroll.wheelHandler);
    return getTween;
  };
  var ScrollTrigger2 = /* @__PURE__ */ function() {
    function ScrollTrigger3(vars, animation) {
      _coreInitted7 || ScrollTrigger3.register(gsap6) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
      this.init(vars, animation);
    }
    var _proto = ScrollTrigger3.prototype;
    _proto.init = function init7(vars, animation) {
      this.progress = this.start = 0;
      this.vars && this.kill(true, true);
      if (!_enabled) {
        this.update = this.refresh = this.kill = _passThrough3;
        return;
      }
      vars = _setDefaults5(_isString5(vars) || _isNumber5(vars) || vars.nodeType ? {
        trigger: vars
      } : vars, _defaults2);
      var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap3 = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win7), scrollerCache = gsap6.core.getCache(scroller), isViewport = _isViewport3(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults2.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle5(scroller)["border" + direction.p2 + _Width]) || 0, self = this, onRefreshInit = vars.onRefreshInit && function() {
        return vars.onRefreshInit(self);
      }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, markerEndSetter, cs, snap1, snap22, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevProgress, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
      _context2(self);
      self._dir = direction;
      anticipatePin *= 45;
      self.scroller = scroller;
      self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
      scroll1 = scrollFunc();
      self.vars = vars;
      animation = animation || vars.animation;
      if ("refreshPriority" in vars) {
        _sort = 1;
        vars.refreshPriority === -9999 && (_primary = self);
      }
      scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
        top: _getTweenCreator(scroller, _vertical),
        left: _getTweenCreator(scroller, _horizontal)
      };
      self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
      self.scrubDuration = function(value) {
        scrubSmooth = _isNumber5(value) && value;
        if (!scrubSmooth) {
          scrubTween && scrubTween.progress(1).kill();
          scrubTween = 0;
        } else {
          scrubTween ? scrubTween.duration(value) : scrubTween = gsap6.to(animation, {
            ease: "expo",
            totalProgress: "+=0.001",
            duration: scrubSmooth,
            paused: true,
            onComplete: function onComplete() {
              return onScrubComplete && onScrubComplete(self);
            }
          });
        }
      };
      if (animation) {
        animation.vars.lazy = false;
        animation._initted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
        self.animation = animation.pause();
        animation.scrollTrigger = self;
        self.scrubDuration(scrub);
        snap1 = 0;
        id || (id = animation.vars.id);
      }
      _triggers.push(self);
      if (snap3) {
        if (!_isObject7(snap3) || snap3.push) {
          snap3 = {
            snapTo: snap3
          };
        }
        "scrollBehavior" in _body4.style && gsap6.set(isViewport ? [_body4, _docEl2] : scroller, {
          scrollBehavior: "auto"
        });
        _scrollers.forEach(function(o) {
          return _isFunction7(o) && o.target === (isViewport ? _doc7.scrollingElement || _docEl2 : scroller) && (o.smooth = false);
        });
        snapFunc = _isFunction7(snap3.snapTo) ? snap3.snapTo : snap3.snapTo === "labels" ? _getClosestLabel(animation) : snap3.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap3.directional !== false ? function(value, st) {
          return _snapDirectional(snap3.snapTo)(value, _getTime3() - lastRefresh < 500 ? 0 : st.direction);
        } : gsap6.utils.snap(snap3.snapTo);
        snapDurClamp = snap3.duration || {
          min: 0.1,
          max: 2
        };
        snapDurClamp = _isObject7(snapDurClamp) ? _clamp5(snapDurClamp.min, snapDurClamp.max) : _clamp5(snapDurClamp, snapDurClamp);
        snapDelayedCall = gsap6.delayedCall(snap3.delay || scrubSmooth / 2 || 0.1, function() {
          var scroll = scrollFunc(), refreshedRecently = _getTime3() - lastRefresh < 500, tween = tweenTo.tween;
          if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
            var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap22) / (_getTime3() - _time22) * 1e3 || 0, change1 = gsap6.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap3.inertia === false ? 0 : change1), endValue = _clamp5(0, 1, snapFunc(naturalEnd, self)), endScroll = Math.round(start + endValue * change), _snap = snap3, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
            if (scroll <= end && scroll >= start && endScroll !== scroll) {
              if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
                return;
              }
              if (snap3.inertia === false) {
                change1 = endValue - progress;
              }
              tweenTo(endScroll, {
                duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                ease: snap3.ease || "power3",
                data: _abs(endScroll - scroll),
                // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
                onInterrupt: function onInterrupt() {
                  return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
                },
                onComplete: function onComplete() {
                  self.update();
                  lastSnap = scrollFunc();
                  snap1 = snap22 = animation && !isToggle ? animation.totalProgress() : self.progress;
                  onSnapComplete && onSnapComplete(self);
                  _onComplete && _onComplete(self);
                }
              }, scroll, change1 * change, endScroll - scroll - change1 * change);
              onStart && onStart(self, tweenTo.tween);
            }
          } else if (self.isActive && lastSnap !== scroll) {
            snapDelayedCall.restart(true);
          }
        }).pause();
      }
      id && (_ids[id] = self);
      trigger = self.trigger = _getTarget(trigger || pin);
      customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
      customRevertReturn && (customRevertReturn = customRevertReturn(self));
      pin = pin === true ? trigger : _getTarget(pin);
      _isString5(toggleClass) && (toggleClass = {
        targets: trigger,
        className: toggleClass
      });
      if (pin) {
        pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle5(pin.parentNode).display === "flex" ? false : _padding);
        self.pin = pin;
        pinCache = gsap6.core.getCache(pin);
        if (!pinCache.spacer) {
          if (pinSpacer) {
            pinSpacer = _getTarget(pinSpacer);
            pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
            pinCache.spacerIsNative = !!pinSpacer;
            pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
          }
          pinCache.spacer = spacer = pinSpacer || _doc7.createElement("div");
          spacer.classList.add("pin-spacer");
          id && spacer.classList.add("pin-spacer-" + id);
          pinCache.pinState = pinOriginalState = _getState(pin);
        } else {
          pinOriginalState = pinCache.pinState;
        }
        vars.force3D !== false && gsap6.set(pin, {
          force3D: true
        });
        self.spacer = spacer = pinCache.spacer;
        cs = _getComputedStyle5(pin);
        spacingStart = cs[pinSpacing + direction.os2];
        pinGetter = gsap6.getProperty(pin);
        pinSetter = gsap6.quickSetter(pin, direction.a, _px);
        _swapPinIn(pin, spacer, cs);
        pinState = _getState(pin);
      }
      if (markers) {
        markerVars = _isObject7(markers) ? _setDefaults5(markers, _markerDefaults) : _markerDefaults;
        markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
        markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
        offset = markerStartTrigger["offset" + direction.op.d2];
        var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
        markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
        markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
        containerAnimation && (caMarkerSetter = gsap6.quickSetter([markerStart, markerEnd], direction.a, _px));
        if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
          _makePositionable(isViewport ? _body4 : scroller);
          gsap6.set([markerStartTrigger, markerEndTrigger], {
            force3D: true
          });
          markerStartSetter = gsap6.quickSetter(markerStartTrigger, direction.a, _px);
          markerEndSetter = gsap6.quickSetter(markerEndTrigger, direction.a, _px);
        }
      }
      if (containerAnimation) {
        var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
        containerAnimation.eventCallback("onUpdate", function() {
          self.update(0, 0, 1);
          oldOnUpdate && oldOnUpdate.apply(oldParams || []);
        });
      }
      self.previous = function() {
        return _triggers[_triggers.indexOf(self) - 1];
      };
      self.next = function() {
        return _triggers[_triggers.indexOf(self) + 1];
      };
      self.revert = function(revert, temp) {
        if (!temp) {
          return self.kill(true);
        }
        var r = revert !== false || !self.enabled, prevRefreshing = _refreshing;
        if (r !== self.isReverted) {
          if (r) {
            prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0);
            prevProgress = self.progress;
            prevAnimProgress = animation && animation.progress();
          }
          markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
            return m.style.display = r ? "none" : "block";
          });
          if (r) {
            _refreshing = 1;
            self.update(r);
          }
          if (pin) {
            if (r) {
              _swapPinOut(pin, spacer, pinOriginalState);
            } else {
              (!pinReparent || !self.isActive) && _swapPinIn(pin, spacer, _getComputedStyle5(pin), spacerState);
            }
          }
          r || self.update(r);
          _refreshing = prevRefreshing;
          self.isReverted = r;
        }
      };
      self.refresh = function(soft, force) {
        if ((_refreshing || !self.enabled) && !force) {
          return;
        }
        if (pin && soft && _lastScrollTime) {
          _addListener5(ScrollTrigger3, "scrollEnd", _softRefresh);
          return;
        }
        !_refreshingAll && onRefreshInit && onRefreshInit(self);
        _refreshing = 1;
        lastRefresh = _getTime3();
        if (tweenTo.tween) {
          tweenTo.tween.kill();
          tweenTo.tween = 0;
        }
        scrubTween && scrubTween.pause();
        invalidateOnRefresh && animation && animation.revert({
          kill: false
        }).invalidate();
        self.isReverted || self.revert(true, true);
        self._subPinOffset = false;
        var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), offset2 = 0, otherPinOffset = 0, parsedEnd = vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0, i = triggerIndex, cs2, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins;
        while (i--) {
          curTrigger = _triggers[i];
          curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = 1);
          curPin = curTrigger.pin;
          if (curPin && (curPin === trigger || curPin === pin) && !curTrigger.isReverted) {
            revertedPins || (revertedPins = []);
            revertedPins.unshift(curTrigger);
            curTrigger.revert(true, true);
          }
          if (curTrigger !== _triggers[i]) {
            triggerIndex--;
            i--;
          }
        }
        _isFunction7(parsedStart) && (parsedStart = parsedStart(self));
        start = _parsePosition3(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation) || (pin ? -1e-3 : 0);
        _isFunction7(parsedEnd) && (parsedEnd = parsedEnd(self));
        if (_isString5(parsedEnd) && !parsedEnd.indexOf("+=")) {
          if (~parsedEnd.indexOf(" ")) {
            parsedEnd = (_isString5(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
          } else {
            offset2 = _offsetToPx(parsedEnd.substr(2), size);
            parsedEnd = _isString5(parsedStart) ? parsedStart : start + offset2;
            parsedEndTrigger = trigger;
          }
        }
        end = Math.max(start, _parsePosition3(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset2, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation)) || -1e-3;
        change = end - start || (start -= 0.01) && 1e-3;
        offset2 = 0;
        i = triggerIndex;
        while (i--) {
          curTrigger = _triggers[i];
          curPin = curTrigger.pin;
          if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
            cs2 = curTrigger.end - curTrigger.start;
            if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && !_isNumber5(parsedStart)) {
              offset2 += cs2 * (1 - curTrigger.progress);
            }
            curPin === pin && (otherPinOffset += cs2);
          }
        }
        start += offset2;
        end += offset2;
        self._pinPush = otherPinOffset;
        if (markerStart && offset2) {
          cs2 = {};
          cs2[direction.a] = "+=" + offset2;
          pinnedContainer && (cs2[direction.p] = "-=" + scrollFunc());
          gsap6.set([markerStart, markerEnd], cs2);
        }
        if (pin) {
          cs2 = _getComputedStyle5(pin);
          isVertical = direction === _vertical;
          scroll = scrollFunc();
          pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
          !max && end > 1 && ((isViewport ? _body4 : scroller).style["overflow-" + direction.a] = "scroll");
          _swapPinIn(pin, spacer, cs2);
          pinState = _getState(pin);
          bounds = _getBounds3(pin, true);
          oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
          if (pinSpacing) {
            spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
            spacerState.t = spacer;
            i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
            i && spacerState.push(direction.d, i + _px);
            _setState(spacerState);
            if (pinnedContainer) {
              _triggers.forEach(function(t2) {
                if (t2.pin === pinnedContainer && t2.vars.pinSpacing !== false) {
                  t2._subPinOffset = true;
                }
              });
            }
            useFixedPosition && scrollFunc(prevScroll);
          }
          if (useFixedPosition) {
            override = {
              top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
              left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
              boxSizing: "border-box",
              position: "fixed"
            };
            override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
            override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
            override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
            override[_padding] = cs2[_padding];
            override[_padding + _Top] = cs2[_padding + _Top];
            override[_padding + _Right] = cs2[_padding + _Right];
            override[_padding + _Bottom] = cs2[_padding + _Bottom];
            override[_padding + _Left] = cs2[_padding + _Left];
            pinActiveState = _copyState(pinOriginalState, override, pinReparent);
            _refreshingAll && scrollFunc(0);
          }
          if (animation) {
            initted = animation._initted;
            _suppressOverwrites2(1);
            animation.render(animation.duration(), true, true);
            pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
            change !== pinChange && useFixedPosition && pinActiveState.splice(pinActiveState.length - 2, 2);
            animation.render(0, true, true);
            initted || animation.invalidate(true);
            animation.parent || animation.totalTime(animation.totalTime());
            _suppressOverwrites2(0);
          } else {
            pinChange = change;
          }
        } else if (trigger && scrollFunc() && !containerAnimation) {
          bounds = trigger.parentNode;
          while (bounds && bounds !== _body4) {
            if (bounds._pinOffset) {
              start -= bounds._pinOffset;
              end -= bounds._pinOffset;
            }
            bounds = bounds.parentNode;
          }
        }
        revertedPins && revertedPins.forEach(function(t2) {
          return t2.revert(false, true);
        });
        self.start = start;
        self.end = end;
        scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();
        if (!containerAnimation && !_refreshingAll) {
          scroll1 < prevScroll && scrollFunc(prevScroll);
          self.scroll.rec = 0;
        }
        self.revert(false, true);
        if (snapDelayedCall) {
          lastSnap = -1;
          self.isActive && scrollFunc(start + change * prevProgress);
          snapDelayedCall.restart(true);
        }
        _refreshing = 0;
        animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress, true).render(animation.time(), true, true);
        if (prevProgress !== self.progress || containerAnimation) {
          animation && !isToggle && animation.totalProgress(prevProgress, true);
          self.progress = (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
        }
        pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
        onRefresh && !_refreshingAll && onRefresh(self);
      };
      self.getVelocity = function() {
        return (scrollFunc() - scroll2) / (_getTime3() - _time22) * 1e3 || 0;
      };
      self.endAnimation = function() {
        _endAnimation(self.callbackAnimation);
        if (animation) {
          scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
        }
      };
      self.labelToScroll = function(label) {
        return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
      };
      self.getTrailing = function(name) {
        var i = _triggers.indexOf(self), a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
        return (_isString5(name) ? a.filter(function(t2) {
          return t2.vars.preventOverlaps === name;
        }) : a).filter(function(t2) {
          return self.direction > 0 ? t2.end <= start : t2.start >= end;
        });
      };
      self.update = function(reset, recordVelocity, forceFake) {
        if (containerAnimation && !forceFake && !reset) {
          return;
        }
        var scroll = _refreshingAll ? prevScroll : self.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress2 = self.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
        if (recordVelocity) {
          scroll2 = scroll1;
          scroll1 = containerAnimation ? scrollFunc() : scroll;
          if (snap3) {
            snap22 = snap1;
            snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
          }
        }
        anticipatePin && !clipped && pin && !_refreshing && !_startup2 && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime3() - _time22) * anticipatePin && (clipped = 1e-4);
        if (clipped !== prevProgress2 && self.enabled) {
          isActive = self.isActive = !!clipped && clipped < 1;
          wasActive = !!prevProgress2 && prevProgress2 < 1;
          toggled = isActive !== wasActive;
          stateChanged = toggled || !!clipped !== !!prevProgress2;
          self.direction = clipped > prevProgress2 ? 1 : -1;
          self.progress = clipped;
          if (stateChanged && !_refreshing) {
            toggleState = clipped && !prevProgress2 ? 0 : clipped === 1 ? 1 : prevProgress2 === 1 ? 2 : 3;
            if (isToggle) {
              action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
              isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
            }
          }
          preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction7(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function(t2) {
            return t2.endAnimation();
          }));
          if (!isToggle) {
            if (scrubTween && !_refreshing && !_startup2) {
              (containerAnimation || _primary && _primary !== self) && scrubTween.render(scrubTween._dp._time - scrubTween._start);
              if (scrubTween.resetTo) {
                scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
              } else {
                scrubTween.vars.totalProgress = clipped;
                scrubTween.invalidate().restart();
              }
            } else if (animation) {
              animation.totalProgress(clipped, !!_refreshing);
            }
          }
          if (pin) {
            reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
            if (!useFixedPosition) {
              pinSetter(_round9(pinStart + pinChange * clipped));
            } else if (stateChanged) {
              isAtMax = !reset && clipped > prevProgress2 && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
              if (pinReparent) {
                if (!reset && (isActive || isAtMax)) {
                  var bounds = _getBounds3(pin, true), _offset = scroll - start;
                  _reparent(pin, _body4, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                } else {
                  _reparent(pin, spacer);
                }
              }
              _setState(isActive || isAtMax ? pinActiveState : pinState);
              pinChange !== change && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
            }
          }
          snap3 && !tweenTo.tween && !_refreshing && !_startup2 && snapDelayedCall.restart(true);
          toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray6(toggleClass.targets).forEach(function(el) {
            return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
          });
          onUpdate && !isToggle && !reset && onUpdate(self);
          if (stateChanged && !_refreshing) {
            if (isToggle) {
              if (isTakingAction) {
                if (action === "complete") {
                  animation.pause().totalProgress(1);
                } else if (action === "reset") {
                  animation.restart(true).pause();
                } else if (action === "restart") {
                  animation.restart(true);
                } else {
                  animation[action]();
                }
              }
              onUpdate && onUpdate(self);
            }
            if (toggled || !_limitCallbacks) {
              onToggle && toggled && _callback3(self, onToggle);
              callbacks[toggleState] && _callback3(self, callbacks[toggleState]);
              once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0);
              if (!toggled) {
                toggleState = clipped === 1 ? 1 : 3;
                callbacks[toggleState] && _callback3(self, callbacks[toggleState]);
              }
            }
            if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber5(fastScrollEnd) ? fastScrollEnd : 2500)) {
              _endAnimation(self.callbackAnimation);
              scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
            }
          } else if (isToggle && onUpdate && !_refreshing) {
            onUpdate(self);
          }
        }
        if (markerEndSetter) {
          var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
          markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
          markerEndSetter(n);
        }
        caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
      };
      self.enable = function(reset, refresh) {
        if (!self.enabled) {
          self.enabled = true;
          _addListener5(scroller, "resize", _onResize);
          _addListener5(isViewport ? _doc7 : scroller, "scroll", _onScroll3);
          onRefreshInit && _addListener5(ScrollTrigger3, "refreshInit", onRefreshInit);
          if (reset !== false) {
            self.progress = prevProgress = 0;
            scroll1 = scroll2 = lastSnap = scrollFunc();
          }
          refresh !== false && self.refresh();
        }
      };
      self.getTween = function(snap4) {
        return snap4 && tweenTo ? tweenTo.tween : scrubTween;
      };
      self.setPositions = function(newStart, newEnd) {
        if (pin) {
          pinStart += newStart - start;
          pinChange += newEnd - newStart - change;
          pinSpacing === _padding && self.adjustPinSpacing(newEnd - newStart - change);
        }
        self.start = start = newStart;
        self.end = end = newEnd;
        change = newEnd - newStart;
        self.update();
      };
      self.adjustPinSpacing = function(amount) {
        if (spacerState) {
          var i = spacerState.indexOf(direction.d) + 1;
          spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
          spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
          _setState(spacerState);
        }
      };
      self.disable = function(reset, allowAnimation) {
        if (self.enabled) {
          reset !== false && self.revert(true, true);
          self.enabled = self.isActive = false;
          allowAnimation || scrubTween && scrubTween.pause();
          prevScroll = 0;
          pinCache && (pinCache.uncache = 1);
          onRefreshInit && _removeListener5(ScrollTrigger3, "refreshInit", onRefreshInit);
          if (snapDelayedCall) {
            snapDelayedCall.pause();
            tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
          }
          if (!isViewport) {
            var i = _triggers.length;
            while (i--) {
              if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
                return;
              }
            }
            _removeListener5(scroller, "resize", _onResize);
            _removeListener5(scroller, "scroll", _onScroll3);
          }
        }
      };
      self.kill = function(revert, allowAnimation) {
        self.disable(revert, allowAnimation);
        scrubTween && !allowAnimation && scrubTween.kill();
        id && delete _ids[id];
        var i = _triggers.indexOf(self);
        i >= 0 && _triggers.splice(i, 1);
        i === _i && _direction > 0 && _i--;
        i = 0;
        _triggers.forEach(function(t2) {
          return t2.scroller === self.scroller && (i = 1);
        });
        i || _refreshingAll || (self.scroll.rec = 0);
        if (animation) {
          animation.scrollTrigger = null;
          revert && animation.revert({
            kill: false
          });
          allowAnimation || animation.kill();
        }
        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
          return m.parentNode && m.parentNode.removeChild(m);
        });
        _primary === self && (_primary = 0);
        if (pin) {
          pinCache && (pinCache.uncache = 1);
          i = 0;
          _triggers.forEach(function(t2) {
            return t2.pin === pin && i++;
          });
          i || (pinCache.spacer = 0);
        }
        vars.onKill && vars.onKill(self);
      };
      self.enable(false, false);
      customRevertReturn && customRevertReturn(self);
      !animation || !animation.add || change ? self.refresh() : gsap6.delayedCall(0.01, function() {
        return start || end || self.refresh();
      }) && (change = 0.01) && (start = end = 0);
      pin && _queueRefreshAll();
    };
    ScrollTrigger3.register = function register4(core) {
      if (!_coreInitted7) {
        gsap6 = core || _getGSAP9();
        _windowExists7() && window.document && ScrollTrigger3.enable();
        _coreInitted7 = _enabled;
      }
      return _coreInitted7;
    };
    ScrollTrigger3.defaults = function defaults2(config3) {
      if (config3) {
        for (var p in config3) {
          _defaults2[p] = config3[p];
        }
      }
      return _defaults2;
    };
    ScrollTrigger3.disable = function disable(reset, kill3) {
      _enabled = 0;
      _triggers.forEach(function(trigger) {
        return trigger[kill3 ? "kill" : "disable"](reset);
      });
      _removeListener5(_win7, "wheel", _onScroll3);
      _removeListener5(_doc7, "scroll", _onScroll3);
      clearInterval(_syncInterval);
      _removeListener5(_doc7, "touchcancel", _passThrough3);
      _removeListener5(_body4, "touchstart", _passThrough3);
      _multiListener(_removeListener5, _doc7, "pointerdown,touchstart,mousedown", _pointerDownHandler);
      _multiListener(_removeListener5, _doc7, "pointerup,touchend,mouseup", _pointerUpHandler);
      _resizeDelay.kill();
      _iterateAutoRefresh(_removeListener5);
      for (var i = 0; i < _scrollers.length; i += 3) {
        _wheelListener(_removeListener5, _scrollers[i], _scrollers[i + 1]);
        _wheelListener(_removeListener5, _scrollers[i], _scrollers[i + 2]);
      }
    };
    ScrollTrigger3.enable = function enable() {
      _win7 = window;
      _doc7 = document;
      _docEl2 = _doc7.documentElement;
      _body4 = _doc7.body;
      if (gsap6) {
        _toArray6 = gsap6.utils.toArray;
        _clamp5 = gsap6.utils.clamp;
        _context2 = gsap6.core.context || _passThrough3;
        _suppressOverwrites2 = gsap6.core.suppressOverwrites || _passThrough3;
        _scrollRestoration = _win7.history.scrollRestoration || "auto";
        gsap6.core.globals("ScrollTrigger", ScrollTrigger3);
        if (_body4) {
          _enabled = 1;
          Observer.register(gsap6);
          ScrollTrigger3.isTouch = Observer.isTouch;
          _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
          _addListener5(_win7, "wheel", _onScroll3);
          _root2 = [_win7, _doc7, _docEl2, _body4];
          if (gsap6.matchMedia) {
            ScrollTrigger3.matchMedia = function(vars) {
              var mm = gsap6.matchMedia(), p;
              for (p in vars) {
                mm.add(p, vars[p]);
              }
              return mm;
            };
            gsap6.addEventListener("matchMediaInit", function() {
              return _revertAll();
            });
            gsap6.addEventListener("matchMediaRevert", function() {
              return _revertRecorded();
            });
            gsap6.addEventListener("matchMedia", function() {
              _refreshAll(0, 1);
              _dispatch3("matchMedia");
            });
            gsap6.matchMedia("(orientation: portrait)", function() {
              _setBaseDimensions();
              return _setBaseDimensions;
            });
          } else {
            console.warn("Requires GSAP 3.11.0 or later");
          }
          _setBaseDimensions();
          _addListener5(_doc7, "scroll", _onScroll3);
          var bodyStyle = _body4.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap6.core.Animation.prototype, bounds, i;
          AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
            value: function value() {
              return this.time(-0.01, true);
            }
          });
          bodyStyle.borderTopStyle = "solid";
          bounds = _getBounds3(_body4);
          _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
          _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
          border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
          _syncInterval = setInterval(_sync, 250);
          gsap6.delayedCall(0.5, function() {
            return _startup2 = 0;
          });
          _addListener5(_doc7, "touchcancel", _passThrough3);
          _addListener5(_body4, "touchstart", _passThrough3);
          _multiListener(_addListener5, _doc7, "pointerdown,touchstart,mousedown", _pointerDownHandler);
          _multiListener(_addListener5, _doc7, "pointerup,touchend,mouseup", _pointerUpHandler);
          _transformProp4 = gsap6.utils.checkPrefix("transform");
          _stateProps.push(_transformProp4);
          _coreInitted7 = _getTime3();
          _resizeDelay = gsap6.delayedCall(0.2, _refreshAll).pause();
          _autoRefresh = [_doc7, "visibilitychange", function() {
            var w = _win7.innerWidth, h = _win7.innerHeight;
            if (_doc7.hidden) {
              _prevWidth = w;
              _prevHeight = h;
            } else if (_prevWidth !== w || _prevHeight !== h) {
              _onResize();
            }
          }, _doc7, "DOMContentLoaded", _refreshAll, _win7, "load", _refreshAll, _win7, "resize", _onResize];
          _iterateAutoRefresh(_addListener5);
          _triggers.forEach(function(trigger) {
            return trigger.enable(0, 1);
          });
          for (i = 0; i < _scrollers.length; i += 3) {
            _wheelListener(_removeListener5, _scrollers[i], _scrollers[i + 1]);
            _wheelListener(_removeListener5, _scrollers[i], _scrollers[i + 2]);
          }
        }
      }
    };
    ScrollTrigger3.config = function config3(vars) {
      "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
      var ms = vars.syncInterval;
      ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
      "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger3.isTouch === 1 && vars.ignoreMobileResize);
      if ("autoRefreshEvents" in vars) {
        _iterateAutoRefresh(_removeListener5) || _iterateAutoRefresh(_addListener5, vars.autoRefreshEvents || "none");
        _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
      }
    };
    ScrollTrigger3.scrollerProxy = function scrollerProxy(target, vars) {
      var t2 = _getTarget(target), i = _scrollers.indexOf(t2), isViewport = _isViewport3(t2);
      if (~i) {
        _scrollers.splice(i, isViewport ? 6 : 2);
      }
      if (vars) {
        isViewport ? _proxies.unshift(_win7, vars, _body4, vars, _docEl2, vars) : _proxies.unshift(t2, vars);
      }
    };
    ScrollTrigger3.clearMatchMedia = function clearMatchMedia(query) {
      _triggers.forEach(function(t2) {
        return t2._ctx && t2._ctx.query === query && t2._ctx.kill(true, true);
      });
    };
    ScrollTrigger3.isInViewport = function isInViewport(element, ratio, horizontal) {
      var bounds = (_isString5(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
      return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win7.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win7.innerHeight;
    };
    ScrollTrigger3.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
      _isString5(element) && (element = _getTarget(element));
      var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
      return horizontal ? (bounds.left + offset) / _win7.innerWidth : (bounds.top + offset) / _win7.innerHeight;
    };
    ScrollTrigger3.killAll = function killAll(allowListeners) {
      _triggers.forEach(function(t2) {
        return t2.vars.id !== "ScrollSmoother" && t2.kill();
      });
      if (allowListeners !== true) {
        var listeners = _listeners2.killAll || [];
        _listeners2 = {};
        listeners.forEach(function(f) {
          return f();
        });
      }
    };
    return ScrollTrigger3;
  }();
  ScrollTrigger2.version = "3.11.3";
  ScrollTrigger2.saveStyles = function(targets) {
    return targets ? _toArray6(targets).forEach(function(target) {
      if (target && target.style) {
        var i = _savedStyles.indexOf(target);
        i >= 0 && _savedStyles.splice(i, 5);
        _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap6.core.getCache(target), _context2());
      }
    }) : _savedStyles;
  };
  ScrollTrigger2.revert = function(soft, media) {
    return _revertAll(!soft, media);
  };
  ScrollTrigger2.create = function(vars, animation) {
    return new ScrollTrigger2(vars, animation);
  };
  ScrollTrigger2.refresh = function(safe) {
    return safe ? _onResize() : (_coreInitted7 || ScrollTrigger2.register()) && _refreshAll(true);
  };
  ScrollTrigger2.update = _updateAll;
  ScrollTrigger2.clearScrollMemory = _clearScrollMemory;
  ScrollTrigger2.maxScroll = function(element, horizontal) {
    return _maxScroll(element, horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger2.getScrollFunc = function(element, horizontal) {
    return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger2.getById = function(id) {
    return _ids[id];
  };
  ScrollTrigger2.getAll = function() {
    return _triggers.filter(function(t2) {
      return t2.vars.id !== "ScrollSmoother";
    });
  };
  ScrollTrigger2.isScrolling = function() {
    return !!_lastScrollTime;
  };
  ScrollTrigger2.snapDirectional = _snapDirectional;
  ScrollTrigger2.addEventListener = function(type, callback) {
    var a = _listeners2[type] || (_listeners2[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  };
  ScrollTrigger2.removeEventListener = function(type, callback) {
    var a = _listeners2[type], i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  };
  ScrollTrigger2.batch = function(targets, vars) {
    var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback2(type, callback) {
      var elements = [], triggers = [], delay = gsap6.delayedCall(interval, function() {
        callback(elements, triggers);
        elements = [];
        triggers = [];
      }).pause();
      return function(self) {
        elements.length || delay.restart(true);
        elements.push(self.trigger);
        triggers.push(self);
        batchMax <= elements.length && delay.progress(1);
      };
    }, p;
    for (p in vars) {
      varsCopy[p] = p.substr(0, 2) === "on" && _isFunction7(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
    }
    if (_isFunction7(batchMax)) {
      batchMax = batchMax();
      _addListener5(ScrollTrigger2, "refresh", function() {
        return batchMax = vars.batchMax();
      });
    }
    _toArray6(targets).forEach(function(target) {
      var config3 = {};
      for (p in varsCopy) {
        config3[p] = varsCopy[p];
      }
      config3.trigger = target;
      result.push(ScrollTrigger2.create(config3));
    });
    return result;
  };
  var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier2(scrollFunc, current, end, max) {
    current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
    return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
  };
  var _allowNativePanning = function _allowNativePanning2(target, direction) {
    if (direction === true) {
      target.style.removeProperty("touch-action");
    } else {
      target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
    }
    target === _docEl2 && _allowNativePanning2(_body4, direction);
  };
  var _overflow = {
    auto: 1,
    scroll: 1
  };
  var _nestedScroll = function _nestedScroll2(_ref5) {
    var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
    var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || gsap6.core.getCache(node), time = _getTime3(), cs;
    if (!cache._isScrollT || time - cache._isScrollT > 2e3) {
      while (node && node.scrollHeight <= node.clientHeight) {
        node = node.parentNode;
      }
      cache._isScroll = node && !_isViewport3(node) && node !== target && (_overflow[(cs = _getComputedStyle5(node)).overflowY] || _overflow[cs.overflowX]);
      cache._isScrollT = time;
    }
    if (cache._isScroll || axis === "x") {
      event.stopPropagation();
      event._gsapAllow = true;
    }
  };
  var _inputObserver = function _inputObserver2(target, type, inputs, nested) {
    return Observer.create({
      target,
      capture: true,
      debounce: false,
      lockAxis: true,
      type,
      onWheel: nested = nested && _nestedScroll,
      onPress: nested,
      onDrag: nested,
      onScroll: nested,
      onEnable: function onEnable() {
        return inputs && _addListener5(_doc7, Observer.eventTypes[0], _captureInputs, false, true);
      },
      onDisable: function onDisable() {
        return _removeListener5(_doc7, Observer.eventTypes[0], _captureInputs, true);
      }
    });
  };
  var _inputExp = /(input|label|select|textarea)/i;
  var _inputIsFocused;
  var _captureInputs = function _captureInputs2(e2) {
    var isInput = _inputExp.test(e2.target.tagName);
    if (isInput || _inputIsFocused) {
      e2._gsapAllow = true;
      _inputIsFocused = isInput;
    }
  };
  var _getScrollNormalizer = function _getScrollNormalizer2(vars) {
    _isObject7(vars) || (vars = {});
    vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
    vars.type || (vars.type = "wheel,touch");
    vars.debounce = !!vars.debounce;
    vars.id = vars.id || "normalizer";
    var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, self, maxY, target = _getTarget(vars.target) || _docEl2, smoother = gsap6.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = _getScrollFunc(target, _vertical), scrollFuncX = _getScrollFunc(target, _horizontal), scale = 1, initialScale = (Observer.isTouch && _win7.visualViewport ? _win7.visualViewport.scale * _win7.visualViewport.width : _win7.outerWidth) / _win7.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction7(momentum) ? function() {
      return momentum(self);
    } : function() {
      return momentum || 2.8;
    }, lastRefreshID, skipTouchMove, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove2() {
      return skipTouchMove = false;
    }, scrollClampX = _passThrough3, scrollClampY = _passThrough3, updateClamps = function updateClamps2() {
      maxY = _maxScroll(target, _vertical);
      scrollClampY = _clamp5(_fixIOSBug ? 1 : 0, maxY);
      normalizeScrollX && (scrollClampX = _clamp5(0, _maxScroll(target, _horizontal)));
      lastRefreshID = _refreshID;
    }, removeContentOffset = function removeContentOffset2() {
      content._gsap.y = _round9(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
      content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
      scrollFuncY.offset = scrollFuncY.cacheID = 0;
    }, ignoreDrag = function ignoreDrag2() {
      if (skipTouchMove) {
        requestAnimationFrame(resumeTouchMove);
        var offset = _round9(self.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
        if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
          scrollFuncY.offset = scroll - scrollFuncY.v;
          var y = _round9((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
          content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
          content._gsap.y = y + "px";
          scrollFuncY.cacheID = _scrollers.cache;
          _updateAll();
        }
        return true;
      }
      scrollFuncY.offset && removeContentOffset();
      skipTouchMove = true;
    }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function onResize2() {
      updateClamps();
      if (tween.isActive() && tween.vars.scrollY > maxY) {
        scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
      }
    };
    content && gsap6.set(content, {
      y: "+=0"
    });
    vars.ignoreCheck = function(e2) {
      return _fixIOSBug && e2.type === "touchmove" && ignoreDrag(e2) || scale > 1.05 && e2.type !== "touchstart" || self.isGesturing || e2.touches && e2.touches.length > 1;
    };
    vars.onPress = function() {
      var prevScale = scale;
      scale = _round9((_win7.visualViewport && _win7.visualViewport.scale || 1) / initialScale);
      tween.pause();
      prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
      startScrollX = scrollFuncX();
      startScrollY = scrollFuncY();
      updateClamps();
      lastRefreshID = _refreshID;
    };
    vars.onRelease = vars.onGestureStart = function(self2, wasDragging) {
      scrollFuncY.offset && removeContentOffset();
      if (!wasDragging) {
        onStopDelayedCall.restart(true);
      } else {
        _scrollers.cache++;
        var dur = resolveMomentumDuration(), currentScroll, endScroll;
        if (normalizeScrollX) {
          currentScroll = scrollFuncX();
          endScroll = currentScroll + dur * 0.05 * -self2.velocityX / 0.227;
          dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
          tween.vars.scrollX = scrollClampX(endScroll);
        }
        currentScroll = scrollFuncY();
        endScroll = currentScroll + dur * 0.05 * -self2.velocityY / 0.227;
        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
        tween.vars.scrollY = scrollClampY(endScroll);
        tween.invalidate().duration(dur).play(0.01);
        if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
          gsap6.to({}, {
            onUpdate: onResize,
            duration: dur
          });
        }
      }
    };
    vars.onWheel = function() {
      tween._ts && tween.pause();
      if (_getTime3() - wheelRefresh > 1e3) {
        lastRefreshID = 0;
        wheelRefresh = _getTime3();
      }
    };
    vars.onChange = function(self2, dx, dy, xArray, yArray) {
      _refreshID !== lastRefreshID && updateClamps();
      dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self2.startX - self2.x) : scrollFuncX() + dx - xArray[1]));
      if (dy) {
        scrollFuncY.offset && removeContentOffset();
        var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self2.startY - self2.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
        isTouch && y !== yClamped && (startScrollY += yClamped - y);
        scrollFuncY(yClamped);
      }
      (dy || dx) && _updateAll();
    };
    vars.onEnable = function() {
      _allowNativePanning(target, normalizeScrollX ? false : "x");
      ScrollTrigger2.addEventListener("refresh", onResize);
      _addListener5(_win7, "resize", onResize);
      if (scrollFuncY.smooth) {
        scrollFuncY.target.style.scrollBehavior = "auto";
        scrollFuncY.smooth = scrollFuncX.smooth = false;
      }
      inputObserver.enable();
    };
    vars.onDisable = function() {
      _allowNativePanning(target, true);
      _removeListener5(_win7, "resize", onResize);
      ScrollTrigger2.removeEventListener("refresh", onResize);
      inputObserver.kill();
    };
    vars.lockAxis = vars.lockAxis !== false;
    self = new Observer(vars);
    self.iOS = _fixIOSBug;
    _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
    _fixIOSBug && gsap6.ticker.add(_passThrough3);
    onStopDelayedCall = self._dc;
    tween = gsap6.to(self, {
      ease: "power4",
      paused: true,
      scrollX: normalizeScrollX ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      onComplete: onStopDelayedCall.vars.onComplete
    });
    return self;
  };
  ScrollTrigger2.sort = function(func) {
    return _triggers.sort(func || function(a, b) {
      return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
    });
  };
  ScrollTrigger2.observe = function(vars) {
    return new Observer(vars);
  };
  ScrollTrigger2.normalizeScroll = function(vars) {
    if (typeof vars === "undefined") {
      return _normalizer2;
    }
    if (vars === true && _normalizer2) {
      return _normalizer2.enable();
    }
    if (vars === false) {
      return _normalizer2 && _normalizer2.kill();
    }
    var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
    _normalizer2 && _normalizer2.target === normalizer.target && _normalizer2.kill();
    _isViewport3(normalizer.target) && (_normalizer2 = normalizer);
    return normalizer;
  };
  ScrollTrigger2.core = {
    // smaller file size way to leverage in ScrollSmoother and Observer
    _getVelocityProp,
    _inputObserver,
    _scrollers,
    _proxies,
    bridge: {
      // when normalizeScroll sets the scroll position (ss = setScroll)
      ss: function ss() {
        _lastScrollTime || _dispatch3("scrollStart");
        _lastScrollTime = _getTime3();
      },
      // a way to get the _refreshing value in Observer
      ref: function ref() {
        return _refreshing;
      }
    }
  };
  _getGSAP9() && gsap6.registerPlugin(ScrollTrigger2);

  // src/motion/aboutMotion.ts
  gsapWithCSS.registerPlugin(SplitText, ScrollTrigger2);
  var scrollTriggerStart = "top 70%";
  var scrollTriggerEnd = "top 70%";
  var device2 = getDeviceType();
  if (device2 === "tablet" || device2 === "mobile") {
    scrollTriggerStart = "top 80%";
    scrollTriggerEnd = "top 80%";
  }
  var abPageReveal = () => {
    const heroSection = document.querySelector(".section_sticky-header");
    const aboutSecton = document.querySelector(".section_about-hero");
    const heroTitle = heroSection.querySelector("h1");
    const headerSplit = new SplitText(heroTitle, { type: "lines", linesClass: "lineChild" });
    const textSplitParent = new SplitText(heroTitle, {
      type: "lines",
      linesClass: "split-text_parent"
    });
    const heroStamp = heroSection.querySelector(".about-header_stamp");
    const aboutOverline = aboutSecton.querySelector(".fixed-header_overline");
    const aboutTitle = aboutSecton.querySelector("p.text-size-large");
    const aboutOverview = aboutSecton.querySelector("p.text-size-medium");
    const aboutImage = aboutSecton.querySelector(".about-hero_image");
    const animation = gsapWithCSS.timeline({
      onComplete: () => {
        textSplitParent.revert();
        headerSplit.revert();
      }
    });
    animation.from(headerSplit.lines, {
      delay: 1,
      duration: 1,
      y: "4rem",
      opacity: 0,
      stagger: 0.1,
      ease: "power4.inOut"
    });
    animation.from(aboutOverline, { duration: 1, width: "0%", ease: "expo.inOut" }, "<");
    animation.from(
      [aboutTitle, aboutOverview],
      {
        duration: 1.5,
        opacity: 0,
        y: "2rem",
        ease: "power4.inOut"
      },
      "<0.5"
    );
    animation.from(
      heroStamp,
      {
        duration: 1.5,
        scale: 1.2,
        rotate: "0deg",
        opacity: 0,
        ease: "power4.inOut"
      },
      "<"
    );
    animation.from(
      aboutImage,
      {
        duration: 1,
        opacity: 0,
        y: "2rem",
        ease: "power4.out"
      },
      "<0.2"
    );
  };
  var abClientsReveal = () => {
    const clientSection = document.querySelector(".section_about-clients");
    const clientLabel = clientSection.querySelector(".module_label");
    const clientLogos = [...clientSection.querySelectorAll(".about-clients_image")];
    let sortSize = 4;
    const decice = getDeviceType();
    if (decice === "mobile") {
      sortSize = 2;
    }
    const sortLogo = [];
    for (let i = 0; i < clientLogos.length; i += sortSize) {
      const logoRow = clientLogos.slice(i, i + sortSize);
      sortLogo.push(logoRow);
    }
    const animation = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: clientSection,
        start: scrollTriggerStart,
        end: scrollTriggerEnd
        // markers: true,
        // toggleActions: 'play none none reverse',
      }
    });
    animation.from(clientLabel, { duration: 2, opacity: 0, ease: "power4.out" });
    for (const i in sortLogo) {
      animation.from(
        sortLogo[i],
        { duration: 1, y: "2rem", opacity: 0, stagger: 0.1, ease: "power4.out" },
        "<"
      );
    }
  };
  var abTeamReveal = () => {
    const teamSection = document.querySelector(".section_about-team");
    const sectionLabel = teamSection.querySelector(".module_label");
    const teamCards = [...teamSection.querySelectorAll(".about-team_item")];
    const controls = teamSection.querySelector(".about-team_slider-controls");
    const seeMore = teamSection.querySelector(".show-more_component");
    const lastCard = teamCards[teamCards.length - 1];
    teamCards.pop();
    const animation = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: teamSection,
        start: scrollTriggerStart,
        end: scrollTriggerEnd
        // markers: true,
        // toggleActions: 'play none none reverse',
      }
    });
    animation.from(sectionLabel, { duration: 2, opacity: 0, ease: "power4.out" });
    animation.from(controls, { duration: 2, opacity: 0, ease: "power4.out" }, "<0.2");
    animation.from(lastCard, { duration: 1, x: "2rem", opacity: 0, ease: "power4.out" }, "<0.2");
    animation.from(
      teamCards,
      { duration: 1, x: "2rem", opacity: 0, stagger: 0.1, ease: "power4.out" },
      "<0.1"
    );
  };
  var abAwardsReveal = () => {
    const awardsSection = document.querySelector(".section_about-awards");
    const bgText = awardsSection.querySelector(".about-awards_header-title.has-fill");
    const maskedText = awardsSection.querySelector(".about-awards_header-title.has-stroke");
    const overviewText = awardsSection.querySelector("p");
    const overviewSpan = awardsSection.querySelector(".about-awards_span");
    const awardItems = [...awardsSection.querySelectorAll(".about-awards_item")];
    const animation = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: awardsSection,
        start: scrollTriggerStart,
        end: scrollTriggerEnd
        // markers: true,
        // toggleActions: 'play none none reverse',
      }
    });
    animation.from(bgText, { duration: 1.5, y: "2rem", opacity: 0, ease: "power4.out" });
    animation.from(maskedText, { duration: 1.5, y: "2rem", opacity: 0, ease: "power4.out" }, "<");
    animation.from(overviewText, { duration: 1, y: "2rem", opacity: 0, ease: "power4.out" }, "<");
    animation.from(overviewSpan, { duration: 1, width: 0, ease: "power4.out" }, "<");
    animation.from(
      awardItems,
      { duration: 1, y: "2rem", opacity: 0, stagger: 0.1, ease: "power4.out" },
      "<0.6"
    );
  };

  // src/utils/horizontalScrollText.ts
  init_live_reload();
  init_gsap();
  gsapWithCSS.registerPlugin(ScrollTrigger2, InertiaPlugin2);
  var horizontalScrollText = () => {
    const scrollSections = [...document.querySelectorAll("[data-scroll-text-wrap]")];
    const scroll = scrollSections[0].scrollWidth;
    const windowWidth = window.innerWidth;
    const calcWidth = scroll - windowWidth;
    for (const i in scrollSections) {
      const tempSection = scrollSections[i];
      const textElement = [...tempSection.querySelectorAll("[data-scroll-text]")];
      const animation = gsapWithCSS.timeline({
        scrollTrigger: {
          trigger: tempSection,
          start: "top 90%",
          end: "80% 90%",
          // markers: true,
          scrub: true
        }
      });
      animation.to(textElement, { x: -calcWidth });
    }
  };

  // src/utils/loadContent.ts
  init_live_reload();
  init_gsap();
  var loadContent = () => {
    const loadParent = document.querySelector("[data-load-content]");
    const loadItems = [...loadParent.children];
    const loadButton = document.querySelector("[data-load-button]");
    const pageWrapper = document.querySelector(".main-wrapper");
    const loadStep = Number(loadParent.dataset.loadContent);
    const itemTotal = loadItems.length;
    let curVisible = loadStep;
    init7();
    loadButton.addEventListener("click", () => {
      renderUpdate();
    });
    function init7() {
      for (let i = 0; i < loadItems.length; i++) {
        const tempItem = loadItems[i];
        if (i > curVisible - 1) {
          gsapWithCSS.set(tempItem, { display: "none" });
        }
      }
    }
    function renderUpdate() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      curVisible = curVisible + loadStep;
      if (curVisible > itemTotal) {
        curVisible = itemTotal;
        updateUIComplete();
      }
      const renderElements = [];
      for (let i = 0; i < curVisible; i++) {
        const tempItem = loadItems[i];
        if (tempItem.style.display === "none") {
          renderElements.push(tempItem);
        }
      }
      revealLoad(renderElements, scrollTop);
    }
    function revealLoad(newElements, scrollPos) {
      const firstChildren = newElements.map((element) => element.firstElementChild);
      const animation = gsapWithCSS.timeline();
      animation.set(firstChildren, { display: "grid" });
      animation.set(newElements, { display: "block", opacity: 0, y: "2rem" });
      animation.to(newElements, {
        duration: 1,
        y: "0rem",
        opacity: 1,
        stagger: 0.1,
        ease: "power4.out"
      });
      animation.set(window, { scrollTo: scrollPos }, "<");
    }
    function updateUIComplete() {
      gsapWithCSS.set(loadButton, { display: "none" });
    }
  };

  // src/pages/about.ts
  var about = () => {
    abPageReveal();
    abClientsReveal();
    draggableSlider();
    abTeamReveal();
    horizontalScrollText();
    loadContent();
    abAwardsReveal();
  };

  // src/pages/careers.ts
  init_live_reload();

  // src/components/careersFeed.ts
  init_live_reload();

  // node_modules/@finsweet/ts-utils/dist/helpers/index.js
  init_live_reload();

  // node_modules/@finsweet/ts-utils/dist/helpers/cloneNode.js
  init_live_reload();
  var cloneNode = (node, deep = true) => node.cloneNode(deep);

  // src/components/careersFeed.ts
  var careersFeed = () => {
    setTimeout(() => {
      const bambooContainer = document.querySelector("#BambooHR");
      bambooContainer && (() => {
        const jobsList = [...document.querySelectorAll(".BambooHR-ATS-Jobs-Item")];
        jobsList.forEach((item) => {
          createJob(item);
        });
      })();
    }, 1500);
    function createJob(data) {
      const jobList = document.querySelector(".careers-list_list");
      const jobTemplate = document.querySelector(".careers-list_item");
      const newJob = cloneNode(jobTemplate);
      newJob.classList.remove("is-template", "hide");
      const titleData = data.querySelector("a");
      const locationData = data.querySelector("span");
      const setLink = newJob.querySelector("a");
      const setTitle = newJob.querySelector("h3");
      const setLocation = newJob.querySelector(".careers-list_location");
      const formatLocation = locationData.innerText.split("\n")[2];
      setLink.href = titleData.href;
      setTitle.innerText = titleData.innerText;
      setLocation.innerText = formatLocation;
      jobList.appendChild(newJob);
    }
  };

  // src/components/stickyHeader.ts
  init_live_reload();
  init_gsap();
  gsapWithCSS.registerPlugin(ScrollTrigger2);
  var stickyHeader = () => {
    const scrollSection2 = document.querySelector(".section_sticky-header");
    const scrollTimeline = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: scrollSection2,
        start: "200% top",
        end: "200% top",
        toggleActions: "play none none reverse"
        // markers: true,
      }
    });
    scrollTimeline.to(scrollSection2, { duration: 0, opacity: 0 });
  };

  // src/motion/careersMotion.ts
  init_live_reload();
  init_getDevice();
  init_gsap();
  gsapWithCSS.registerPlugin(SplitText);
  var scrollTriggerStart2 = "top 70%";
  var scrollTriggerEnd2 = "top 70%";
  var device3 = getDeviceType();
  if (device3 === "tablet" || device3 === "mobile") {
    scrollTriggerStart2 = "top 80%";
    scrollTriggerEnd2 = "top 80%";
  }
  var careersPageReveal = () => {
    const fixedHeaderSection = document.querySelector(".section_sticky-header");
    const heroSection = document.querySelector(".section_careers-hero");
    const heroTitle = fixedHeaderSection.querySelector("h1");
    const headerSplit = new SplitText(heroTitle, { type: "lines", linesClass: "lineChild" });
    const textSplitParent = new SplitText(heroTitle, {
      type: "lines",
      linesClass: "split-text_parent"
    });
    const headerOverview = fixedHeaderSection.querySelector("p");
    const overline = heroSection.querySelector(".fixed-header_overline");
    const heroComponent = heroSection.querySelector(".careers-hero_wrap");
    const animation = gsapWithCSS.timeline({
      onComplete: () => {
        textSplitParent.revert();
        headerSplit.revert();
      }
    });
    animation.from(headerSplit.lines, {
      delay: 1,
      duration: 1,
      y: "4rem",
      opacity: 0,
      stagger: 0.1,
      ease: "power4.inOut"
    });
    animation.from(overline, { duration: 1, width: "0%", ease: "expo.inOut" }, "<");
    animation.from(headerOverview, { duration: 1, y: "1rem", opacity: 0, ease: "power4.inOut" }, "<");
    animation.from(heroComponent, { duration: 1, y: "2rem", opacity: 0, ease: "expo.out" }, "<0.6");
  };
  var careersOverviewReveal = () => {
    const overviewSection = document.querySelector(".careers-hero_overview-wrap");
    const overviewTitle = document.querySelector("h2");
    const headerSplit = new SplitText(overviewTitle, { type: "lines", linesClass: "lineChild" });
    const textSplitParent = new SplitText(overviewTitle, {
      type: "lines",
      linesClass: "split-text_parent"
    });
    const overviewRichText = overviewSection.querySelector("p");
    const animation = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: overviewSection,
        start: scrollTriggerStart2,
        end: scrollTriggerEnd2
        // markers: true,
        // toggleActions: 'play none none reverse',
      },
      onComplete: () => {
        textSplitParent.revert();
        headerSplit.revert();
      }
    });
    animation.from(headerSplit.lines, {
      duration: 1,
      y: "4rem",
      opacity: 0,
      stagger: 0.1,
      ease: "power4.inOut"
    });
    animation.from(
      overviewRichText,
      { duration: 1, y: "2rem", opacity: 0, ease: "power4.inOut" },
      "<"
    );
  };

  // src/pages/careers.ts
  var careers = () => {
    careersPageReveal();
    careersOverviewReveal();
    horizontalScrollText();
    careersFeed();
  };

  // src/pages/caseOverview.ts
  init_live_reload();

  // src/motion/caseOverviewMotion.ts
  init_live_reload();
  init_getDevice();
  init_gsap();
  gsapWithCSS.registerPlugin(SplitText);
  var scrollTriggerStart3 = "top 70%";
  var scrollTriggerEnd3 = "top 70%";
  var device4 = getDeviceType();
  if (device4 === "tablet" || device4 === "mobile") {
    scrollTriggerStart3 = "top 80%";
    scrollTriggerEnd3 = "top 80%";
  }
  var csoPageReveal = () => {
    const fixedHeaderSection = document.querySelector(".section_sticky-header");
    const workSection = document.querySelector(".section_work");
    const heroTitle = fixedHeaderSection.querySelector("h1");
    const headerSplit = new SplitText(heroTitle, { type: "lines", linesClass: "lineChild" });
    const textSplitParent = new SplitText(heroTitle, {
      type: "lines",
      linesClass: "split-text_parent"
    });
    const headerOverview = fixedHeaderSection.querySelector("p");
    const overline = workSection.querySelector(".fixed-header_overline");
    const filterButton = [...document.querySelectorAll(".work-filter_item")];
    const workGrid = [...document.querySelectorAll(".work-grid_item")];
    const animation = gsapWithCSS.timeline({
      onComplete: () => {
        textSplitParent.revert();
        headerSplit.revert();
      }
    });
    animation.from(headerSplit.lines, {
      delay: 1,
      duration: 1,
      y: "4rem",
      opacity: 0,
      stagger: 0.1,
      ease: "power4.inOut"
    });
    animation.from(overline, { duration: 1, width: "0%", ease: "expo.inOut" }, "<");
    animation.from(headerOverview, { duration: 1, opacity: 0, y: "1rem", ease: "power4.inOut" }, "<");
    animation.from(
      filterButton,
      {
        duration: 1,
        y: "2rem",
        opacity: 0,
        stagger: 0.1,
        ease: "power4.out"
      },
      "<0.2"
    );
    animation.from(
      workGrid,
      {
        duration: 1,
        y: "2rem",
        opacity: 0,
        stagger: { each: 0.1 },
        ease: "power4.out"
      },
      "<0.2"
    );
  };
  var caseHover = () => {
    const caseItems = [...document.querySelectorAll(".work-grid_item")];
    for (const i in caseItems) {
      const temp = caseItems[i];
      const tempImage = temp.querySelector("img");
      temp.addEventListener("mouseenter", (e2) => {
        const target = e2.target;
        const targetImage = target.querySelector("img");
        const animation = gsapWithCSS.timeline();
        animation.to(targetImage, { scale: 1.1, ease: "power3.out" });
      });
      temp.addEventListener("mouseleave", (e2) => {
        const target = e2.target;
        const targetImage = target.querySelector("img");
        const animation = gsapWithCSS.timeline();
        animation.to(targetImage, { duration: 0.6, scale: 1, ease: "power3.out" });
      });
    }
  };

  // src/pages/caseOverview.ts
  init_cursorMotion();

  // src/utils/caseGridMovement.ts
  init_live_reload();
  init_getDevice();
  init_gsap();
  var scrollSection = document.querySelector(".section_work");
  var curAnimation = gsapWithCSS.timeline({
    scrollTrigger: {
      trigger: scrollSection,
      start: "top 40%",
      end: "bottom bottom",
      scrub: true,
      toggleActions: "play none none reverse"
      // markers: {
      //   startColor: 'yellow',
      //   endColor: 'orange',
      // },
    }
  });
  var caseScrollEffect = () => {
    setScrollSpeed();
    createScrollerAnimation(curAnimation);
  };
  var createTimeline = () => {
    const scrollSection2 = document.querySelector(".section_work");
    const newAnimation = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: scrollSection2,
        start: "top 40%",
        end: "bottom bottom",
        scrub: true,
        toggleActions: "play none none reverse"
        // markers: {
        //   startColor: '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0'),
        //   endColor: '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0'),
        // },
      }
    });
    return newAnimation;
  };
  var createScrollerAnimation = (animation) => {
    if (scrollSection) {
      const scrollElements = [...scrollSection.querySelectorAll("[data-scroll-speed]")];
      for (const j in scrollElements) {
        const tempElement = scrollElements[j];
        const elementSpeed = Number(tempElement.dataset.scrollSpeed);
        const setSpeed = elementSpeed;
        animation.to(tempElement, { yPercent: setSpeed * 5, ease: "none" }, "<");
      }
    }
  };
  var setScrollSpeed = () => {
    const workItems = [...document.querySelectorAll(".work-grid_item")];
    const renderQueue = [];
    const hideQueue = [];
    const device12 = getDeviceType();
    const windowWidth = window.innerWidth;
    for (const i in workItems) {
      const temp = workItems[i];
      const tempDisplay = getComputedStyle(temp).display;
      if (tempDisplay !== "none") {
        renderQueue.push(temp);
      } else {
        hideQueue.push(temp);
      }
    }
    if (device12 === "desktop" && windowWidth > 767) {
      const sortedQueue = sortRenderQueue(renderQueue);
      const leftItems = sortedQueue[0];
      const rightItems = sortedQueue[1];
      for (const i in leftItems) {
        const temp = leftItems[i];
        temp.dataset.scrollSpeed = "3";
      }
      for (const i in rightItems) {
        const temp = rightItems[i];
        temp.dataset.scrollSpeed = "-3";
      }
      for (const i in hideQueue) {
        const temp = hideQueue[i];
        temp.dataset.scrollSpeed = "0";
      }
    } else {
      for (const i in renderQueue) {
        const temp = renderQueue[i];
        temp.dataset.scrollSpeed = "8";
      }
    }
  };
  var sortRenderQueue = (renderQueue) => {
    const leftItems = [];
    const rightItems = [];
    for (let i = 0; i < renderQueue.length; i += 2) {
      leftItems.push(renderQueue[i]);
    }
    for (let i = 1; i < renderQueue.length; i += 2) {
      rightItems.push(renderQueue[i]);
    }
    return [leftItems, rightItems];
  };
  var updateScrollEffect = () => {
    curAnimation.kill();
    setTimeout(() => {
      setScrollSpeed();
      const updatedAnimation = createTimeline();
      curAnimation = updatedAnimation;
      createScrollerAnimation(curAnimation);
    }, 500);
  };

  // src/utils/filterContent.ts
  init_live_reload();

  // src/motion/filterReveal.ts
  init_live_reload();
  init_gsap();
  var filterReveal = (elements) => {
    const windowWidth = window.innerWidth;
    const animation = gsapWithCSS.timeline();
    if (windowWidth > 767) {
      animation.set(elements, { y: "16px", display: "block", opacity: 0 });
      animation.to(elements, {
        duration: 1,
        y: "0px",
        opacity: 1,
        stagger: 0.1,
        ease: "expo.inOut"
      });
    } else {
      animation.set(elements, { y: "16px", display: "block", opacity: 0 });
      animation.to(elements, {
        duration: 1,
        y: "0px",
        opacity: 1,
        ease: "expo.inOut"
      });
    }
  };

  // src/utils/filterContent.ts
  var filterContent = () => {
    let activeFilters = [];
    let renderQueue = [];
    const masterList = [...document.querySelectorAll("[data-filter-item]")];
    const filterCheckboxes = [...document.querySelectorAll("[data-filter-checkbox]")];
    const searchInput = document.querySelector("[data-search-input]");
    const initialFilter = filterCheckboxes[0].parentElement;
    for (const i in filterCheckboxes) {
      const tempCheckbox = filterCheckboxes[i];
      tempCheckbox.addEventListener("click", (e2) => {
        const clickedCheckbox = e2.target;
        const clickedParent = clickedCheckbox.parentElement;
        const clickedSpan = clickedParent.querySelector("span");
        let filterText = clickedSpan.innerHTML;
        filterText = filterText.split(" ")[0];
        console.log("filter text", filterText);
        renderQueue = masterList;
        if (clickedCheckbox.checked === true) {
          clickedSpan.style.color = "#EEEBE6";
          if (filterText !== "All") {
            activeFilters.push(filterText);
            const tempList = filterList(renderQueue, activeFilters);
            renderQueue = tempList;
            hideAll();
            filterReveal(renderQueue);
            updateInitialCheckbox(initialFilter, "hide");
            updateScrollEffect();
          }
          if (filterText === "All") {
            activeFilters = [];
            renderQueue = masterList;
            hideAll();
            filterReveal(renderQueue);
            allReset();
            updateScrollEffect();
          }
        } else {
          clickedSpan.style.color = "#EC2543";
          if (filterText !== "All") {
            const updatedFilters = activeFilters.filter((item) => item !== filterText);
            activeFilters = updatedFilters;
            if (activeFilters.length < 1) {
              hideAll();
              filterReveal(renderQueue);
              updateInitialCheckbox(initialFilter, "show");
              updateScrollEffect();
            } else {
              const tempList = filterList(renderQueue, activeFilters);
              renderQueue = tempList;
              hideAll();
              filterReveal(renderQueue);
              updateScrollEffect();
            }
          }
        }
      });
    }
  };
  var filterList = (items, filters) => {
    const filteredList = items.filter((item) => {
      const itemTemp = item;
      const itemTypes = [...itemTemp.querySelectorAll("[data-filter-item-type]")];
      for (const i in itemTypes) {
        const ele = itemTypes[i];
        const serviceType = ele.innerHTML.split(" ")[0];
        if (filters.includes(serviceType)) {
          return serviceType;
        }
      }
    });
    return filteredList;
  };
  var hideAll = () => {
    const masterList = [...document.querySelectorAll("[data-filter-item]")];
    for (const item of masterList) {
      const temp = item;
      temp.style.display = "none";
    }
  };
  var updateInitialCheckbox = (initialFilter, setState) => {
    const checkboxContainer = initialFilter.children[0];
    const checkboxInput = initialFilter.children[1];
    const checkboxText = initialFilter.children[2];
    if (setState === "hide") {
      checkboxInput.checked = false;
      checkboxContainer.classList.remove("w--redirected-checked");
      checkboxText.style.color = "#EC2543";
    } else if (setState === "show") {
      checkboxInput.checked = true;
      checkboxContainer.classList.add("w--redirected-checked");
      checkboxText.style.color = "#EEEBE6";
    }
  };
  function allReset() {
    const filterCheckboxes = [...document.querySelectorAll("[data-filter-checkbox]")];
    for (let i = 0; i < filterCheckboxes.length; i++) {
      const temp = filterCheckboxes[i];
      const tempParent = temp.parentElement;
      const tempContainer = tempParent.children[0];
      const tempText = tempParent.querySelector("span");
      if (i !== 0) {
        temp.checked = false;
        tempContainer.classList.remove("w--redirected-checked");
        tempText.style.color = "#EC2543";
      }
    }
  }

  // src/utils/scrollToDeepLink.ts
  init_live_reload();
  init_gsap();

  // node_modules/gsap/ScrollToPlugin.js
  init_live_reload();
  var gsap7;
  var _coreInitted8;
  var _window;
  var _docEl3;
  var _body5;
  var _toArray7;
  var _config3;
  var _windowExists9 = function _windowExists10() {
    return typeof window !== "undefined";
  };
  var _getGSAP11 = function _getGSAP12() {
    return gsap7 || _windowExists9() && (gsap7 = window.gsap) && gsap7.registerPlugin && gsap7;
  };
  var _isString7 = function _isString8(value) {
    return typeof value === "string";
  };
  var _isFunction9 = function _isFunction10(value) {
    return typeof value === "function";
  };
  var _max = function _max2(element, axis) {
    var dim = axis === "x" ? "Width" : "Height", scroll = "scroll" + dim, client = "client" + dim;
    return element === _window || element === _docEl3 || element === _body5 ? Math.max(_docEl3[scroll], _body5[scroll]) - (_window["inner" + dim] || _docEl3[client] || _body5[client]) : element[scroll] - element["offset" + dim];
  };
  var _buildGetter = function _buildGetter2(e2, axis) {
    var p = "scroll" + (axis === "x" ? "Left" : "Top");
    if (e2 === _window) {
      if (e2.pageXOffset != null) {
        p = "page" + axis.toUpperCase() + "Offset";
      } else {
        e2 = _docEl3[p] != null ? _docEl3 : _body5;
      }
    }
    return function() {
      return e2[p];
    };
  };
  var _clean = function _clean2(value, index, target, targets) {
    _isFunction9(value) && (value = value(index, target, targets));
    if (typeof value !== "object") {
      return _isString7(value) && value !== "max" && value.charAt(1) !== "=" ? {
        x: value,
        y: value
      } : {
        y: value
      };
    } else if (value.nodeType) {
      return {
        y: value,
        x: value
      };
    } else {
      var result = {}, p;
      for (p in value) {
        result[p] = p !== "onAutoKill" && _isFunction9(value[p]) ? value[p](index, target, targets) : value[p];
      }
      return result;
    }
  };
  var _getOffset = function _getOffset2(element, container) {
    element = _toArray7(element)[0];
    if (!element || !element.getBoundingClientRect) {
      return console.warn("scrollTo target doesn't exist. Using 0") || {
        x: 0,
        y: 0
      };
    }
    var rect = element.getBoundingClientRect(), isRoot = !container || container === _window || container === _body5, cRect = isRoot ? {
      top: _docEl3.clientTop - (_window.pageYOffset || _docEl3.scrollTop || _body5.scrollTop || 0),
      left: _docEl3.clientLeft - (_window.pageXOffset || _docEl3.scrollLeft || _body5.scrollLeft || 0)
    } : container.getBoundingClientRect(), offsets = {
      x: rect.left - cRect.left,
      y: rect.top - cRect.top
    };
    if (!isRoot && container) {
      offsets.x += _buildGetter(container, "x")();
      offsets.y += _buildGetter(container, "y")();
    }
    return offsets;
  };
  var _parseVal = function _parseVal2(value, target, axis, currentVal, offset) {
    return !isNaN(value) && typeof value !== "object" ? parseFloat(value) - offset : _isString7(value) && value.charAt(1) === "=" ? parseFloat(value.substr(2)) * (value.charAt(0) === "-" ? -1 : 1) + currentVal - offset : value === "max" ? _max(target, axis) - offset : Math.min(_max(target, axis), _getOffset(value, target)[axis] - offset);
  };
  var _initCore13 = function _initCore14() {
    gsap7 = _getGSAP11();
    if (_windowExists9() && gsap7 && document.body) {
      _window = window;
      _body5 = document.body;
      _docEl3 = document.documentElement;
      _toArray7 = gsap7.utils.toArray;
      gsap7.config({
        autoKillThreshold: 7
      });
      _config3 = gsap7.config();
      _coreInitted8 = 1;
    }
  };
  var ScrollToPlugin = {
    version: "3.11.3",
    name: "scrollTo",
    rawVars: 1,
    register: function register2(core) {
      gsap7 = core;
      _initCore13();
    },
    init: function init5(target, value, tween, index, targets) {
      _coreInitted8 || _initCore13();
      var data = this, snapType = gsap7.getProperty(target, "scrollSnapType");
      data.isWin = target === _window;
      data.target = target;
      data.tween = tween;
      value = _clean(value, index, target, targets);
      data.vars = value;
      data.autoKill = !!value.autoKill;
      data.getX = _buildGetter(target, "x");
      data.getY = _buildGetter(target, "y");
      data.x = data.xPrev = data.getX();
      data.y = data.yPrev = data.getY();
      gsap7.getProperty(target, "scrollBehavior") === "smooth" && gsap7.set(target, {
        scrollBehavior: "auto"
      });
      if (snapType && snapType !== "none") {
        data.snap = 1;
        data.snapInline = target.style.scrollSnapType;
        target.style.scrollSnapType = "none";
      }
      if (value.x != null) {
        data.add(data, "x", data.x, _parseVal(value.x, target, "x", data.x, value.offsetX || 0), index, targets);
        data._props.push("scrollTo_x");
      } else {
        data.skipX = 1;
      }
      if (value.y != null) {
        data.add(data, "y", data.y, _parseVal(value.y, target, "y", data.y, value.offsetY || 0), index, targets);
        data._props.push("scrollTo_y");
      } else {
        data.skipY = 1;
      }
    },
    render: function render4(ratio, data) {
      var pt = data._pt, target = data.target, tween = data.tween, autoKill = data.autoKill, xPrev = data.xPrev, yPrev = data.yPrev, isWin = data.isWin, snap3 = data.snap, snapInline = data.snapInline, x, y, yDif, xDif, threshold;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      x = isWin || !data.skipX ? data.getX() : xPrev;
      y = isWin || !data.skipY ? data.getY() : yPrev;
      yDif = y - yPrev;
      xDif = x - xPrev;
      threshold = _config3.autoKillThreshold;
      if (data.x < 0) {
        data.x = 0;
      }
      if (data.y < 0) {
        data.y = 0;
      }
      if (autoKill) {
        if (!data.skipX && (xDif > threshold || xDif < -threshold) && x < _max(target, "x")) {
          data.skipX = 1;
        }
        if (!data.skipY && (yDif > threshold || yDif < -threshold) && y < _max(target, "y")) {
          data.skipY = 1;
        }
        if (data.skipX && data.skipY) {
          tween.kill();
          data.vars.onAutoKill && data.vars.onAutoKill.apply(tween, data.vars.onAutoKillParams || []);
        }
      }
      if (isWin) {
        _window.scrollTo(!data.skipX ? data.x : x, !data.skipY ? data.y : y);
      } else {
        data.skipY || (target.scrollTop = data.y);
        data.skipX || (target.scrollLeft = data.x);
      }
      if (snap3 && (ratio === 1 || ratio === 0)) {
        y = target.scrollTop;
        x = target.scrollLeft;
        snapInline ? target.style.scrollSnapType = snapInline : target.style.removeProperty("scroll-snap-type");
        target.scrollTop = y + 1;
        target.scrollLeft = x + 1;
        target.scrollTop = y;
        target.scrollLeft = x;
      }
      data.xPrev = data.x;
      data.yPrev = data.y;
    },
    kill: function kill(property) {
      var both = property === "scrollTo";
      if (both || property === "scrollTo_x") {
        this.skipX = 1;
      }
      if (both || property === "scrollTo_y") {
        this.skipY = 1;
      }
    }
  };
  ScrollToPlugin.max = _max;
  ScrollToPlugin.getOffset = _getOffset;
  ScrollToPlugin.buildGetter = _buildGetter;
  _getGSAP11() && gsap7.registerPlugin(ScrollToPlugin);

  // src/utils/scrollToDeepLink.ts
  gsapWithCSS.registerPlugin(ScrollToPlugin);
  var setDeepLinks = () => {
    const deepLinks = [...document.querySelectorAll("[data-deep-link]")];
    if (deepLinks.length !== 0) {
      for (const i in deepLinks) {
        const tempLink = deepLinks[i];
        const linkType = tempLink.dataset.deepLink;
        let setText = "";
        let linkTag = "";
        if (linkType === "home-services") {
          const tempTitle = tempLink.querySelector("h3")?.innerHTML;
          const tempButton = tempLink.querySelector("a");
          if (tempButton)
            tempButton.addEventListener("click", () => {
              linkTag = tempTitle.split(" ")[0];
              localStorage.setItem("filterTag", linkTag);
            });
        } else if (linkType === "footer-work") {
          const tempTitle = tempLink.children[0];
          setText = tempTitle.innerHTML;
          linkTag = setText.split(" ")[0];
          tempLink.addEventListener("click", () => {
            localStorage.setItem("filterTag", linkTag);
          });
        } else if (linkType === "services-work") {
          const tempParent = tempLink.parentNode?.parentNode;
          const tempTitle = tempParent.querySelector("h2");
          setText = tempTitle.innerHTML;
          linkTag = setText.split(" ")[0];
          tempLink.addEventListener("click", () => {
            localStorage.setItem("filterTag", linkTag);
          });
        }
      }
    }
  };
  var scrollToDeepLinks = () => {
    if (localStorage.length > 0) {
      const scrollSection2 = localStorage.getItem("filterTag");
      if (scrollSection2 !== "")
        setTimeout(() => {
          gsapWithCSS.to(window, {
            duration: 2,
            scrollTo: { y: "#" + scrollSection2, offsetY: 100 },
            ease: "power4.out",
            onComplete: () => {
              localStorage.clear();
            }
          });
        }, 1e3);
    }
  };
  var filterDeepLinks = () => {
    const hasTag = localStorage.getItem("filterTag");
    if (hasTag !== null) {
      const filterTag = localStorage.getItem("filterTag");
      const masterList = [...document.querySelectorAll("[data-filter-item]")];
      const filterCheckboxes = [...document.querySelectorAll("[data-filter-checkbox]")];
      const initialFilter = filterCheckboxes[0].parentElement;
      for (const i in filterCheckboxes) {
        const tmepFilter = filterCheckboxes[i];
        const tempParent = tmepFilter.parentElement;
        const checkboxContainer = tempParent.children[0];
        const checkboxInput = tempParent.children[1];
        const checkboxText = tempParent.querySelector("span");
        let filterText = checkboxText.innerHTML;
        filterText = filterText.split(" ")[0];
        if (filterText === filterTag) {
          checkboxInput.checked = true;
          checkboxContainer.classList.add("w--redirected-checked");
          checkboxText.style.color = "#EEEBE6";
        }
      }
      const activeFilters = [];
      activeFilters.push(filterTag);
      const filteredList = filterList(masterList, activeFilters);
      hideAll();
      setTimeout(() => {
        filterReveal(filteredList);
      }, 1500);
      updateInitialCheckbox(initialFilter, "hide");
      localStorage.clear();
    }
  };

  // src/pages/caseOverview.ts
  var caseOverview = () => {
    filterDeepLinks();
    csoPageReveal();
    filterContent();
    caseHover();
    caseScrollEffect();
    const workGrid = document.querySelector(".work-grid_wrapper");
    workGrid.addEventListener("mousemove", (e2) => {
      const mouseYMovement = e2.movementY;
      const setCursor = "default";
      cursorArrowYMovement(setCursor, mouseYMovement);
    });
  };

  // src/pages/caseTemplate.ts
  init_live_reload();

  // src/components/mediaSlider.ts
  init_live_reload();

  // src/motion/mediaSliderMotion.ts
  init_live_reload();
  init_gsap();
  var sliderImages = [...document.querySelectorAll("[data-slider-image]")];
  var initSliderImages = () => {
    const useImages = sliderImages;
    for (let i = 0; i < useImages.length; i++) {
      const temp = useImages[i];
      if (i > 0) {
        gsapWithCSS.set(temp, { x: "-100%" });
      }
    }
  };
  var showNextImage = (curIndex, prevIndex) => {
    const curImage = sliderImages[curIndex];
    const prevImage = sliderImages[prevIndex];
    const imageAnimation = gsapWithCSS.timeline();
    imageAnimation.set(curImage, { zIndex: 2, x: "-100%" });
    imageAnimation.set(prevImage, { zIndex: 1 });
    imageAnimation.to(curImage, { duration: 0.8, x: "0%", ease: "power4.inOut" });
    imageAnimation.set(prevImage, { x: "-100%" });
  };
  var showPrevImage = (curIndex, prevIndex) => {
    const curImage = sliderImages[curIndex];
    const prevImage = sliderImages[prevIndex];
    const imageAnimation = gsapWithCSS.timeline();
    imageAnimation.set(curImage, { zIndex: 2, x: "100%" });
    imageAnimation.set(prevImage, { zIndex: 1 });
    imageAnimation.to(curImage, { duration: 0.8, x: "0%", ease: "power4.inOut" });
    imageAnimation.set(prevImage, { x: "100%" });
  };

  // src/components/mediaSlider.ts
  var mediaSlider = () => {
    let curIndex = 0;
    let prevIndex = 0;
    const countIndex = [...document.querySelectorAll("[data-slider-image]")].length;
    initSliderImages();
    const sliderControls = [...document.querySelectorAll(".media-slider_button")];
    const prevControl = sliderControls[0];
    const nextControl = sliderControls[1];
    if (countIndex === 1) {
      prevControl.style.display = "none";
      nextControl.style.display = "none";
    }
    nextControl.addEventListener("click", () => {
      console.log("next");
      curIndex += 1;
      prevIndex = curIndex - 1;
      if (curIndex > countIndex - 1) {
        curIndex = 0;
      }
      showNextImage(curIndex, prevIndex);
    });
    prevControl.addEventListener("click", () => {
      console.log("prev");
      curIndex -= 1;
      prevIndex = curIndex + 1;
      if (curIndex < 0) {
        curIndex = countIndex - 1;
      }
      showPrevImage(curIndex, prevIndex);
    });
  };

  // src/pages/caseTemplate.ts
  init_videoPlayer();

  // src/motion/caseTemplateMotion.ts
  init_live_reload();
  init_getDevice();
  init_gsap();
  gsapWithCSS.registerPlugin(SplitText);
  var scrollTriggerStart4 = "top 75%";
  var scrollTriggerEnd4 = "top 75%";
  var setDelay = 0;
  var device5 = getDeviceType();
  if (device5 === "tablet" || device5 === "mobile") {
    scrollTriggerStart4 = "top 90%";
    scrollTriggerEnd4 = "top 90%";
    setDelay = 1.5;
  }
  var csPageReveal = () => {
    const fixedHeaderSection = document.querySelector(".section_sticky-header");
    const featuredSection = document.querySelector(".section_case-hero");
    const headerTitle = fixedHeaderSection.querySelector("h1");
    const headerSplit = new SplitText(headerTitle, { type: "lines", linesClass: "lineChild" });
    const textSplitParent = new SplitText(headerTitle, {
      type: "lines",
      linesClass: "split-text_parent"
    });
    const headerOverview = fixedHeaderSection.querySelector("p");
    const headerTexture = document.querySelector(".case-hero_texture");
    const overline = featuredSection.querySelector(".fixed-header_overline");
    const featuredContent = featuredSection.querySelector(".case-hero_featured-wrap");
    const animation = gsapWithCSS.timeline({
      onComplete: () => {
        textSplitParent.revert();
        headerSplit.revert();
      }
    });
    animation.from(headerSplit.lines, {
      delay: 1,
      duration: 1,
      y: "4rem",
      opacity: 0,
      stagger: 0.1,
      ease: "power4.inOut"
    });
    animation.from(overline, { duration: 1, width: "0%", ease: "expo.inOut" }, "<");
    animation.from(headerOverview, { duration: 1, opacity: 0, y: "1rem", ease: "power4.inOut" }, "<");
    animation.from(
      featuredContent,
      { duration: 1, opacity: 0, y: "2rem", ease: "power4.out" },
      "<0.6"
    );
    animation.from(headerTexture, { opacity: 0, ease: "power4.out" });
  };
  var csOverviewReveal = () => {
    const overviewSection = document.querySelector(".section_case-overview");
    const overviewTitle = document.querySelector("h2");
    const headerSplit = new SplitText(overviewTitle, { type: "lines", linesClass: "lineChild" });
    const textSplitParent = new SplitText(overviewTitle, {
      type: "lines",
      linesClass: "split-text_parent"
    });
    const overviewRichText = overviewSection.querySelector(".rich-text");
    const animation = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: overviewSection,
        start: scrollTriggerStart4,
        end: scrollTriggerEnd4
        // markers: true,
        // toggleActions: 'play none none reverse',
      },
      delay: setDelay,
      onComplete: () => {
        textSplitParent.revert();
        headerSplit.revert();
      }
    });
    animation.from(headerSplit.lines, {
      duration: 1,
      y: "2rem",
      opacity: 0,
      stagger: 0.1,
      ease: "power4.inOut"
    });
    animation.from(
      overviewRichText,
      { duration: 1, y: "2rem", opacity: 0, ease: "power4.inOut" },
      "<"
    );
  };
  var csMediaSliderReveal = () => {
    const sliderSection = document.querySelector(".section_media-large-overlay");
    const revealContainer = sliderSection.querySelector(".media-slider_reveal-wrap");
    const mediaControls = [...sliderSection.querySelectorAll(".media-slider_button")];
    gsapWithCSS.set(revealContainer, { y: 0 });
    const animation = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: sliderSection,
        start: scrollTriggerStart4,
        end: scrollTriggerEnd4
        // markers: true,
        // toggleActions: 'play none none reverse',
      }
    });
    animation.to(revealContainer, { duration: 1, y: "-100%", ease: "power4.inOut" });
    animation.from(mediaControls, { duration: 1, y: "2rem", opacity: 0, ease: "power4.inOut" }, "<");
  };
  var csStatsReveal = () => {
    const statsSection = document.querySelector(".section_case-stats");
    const statsComponent = statsSection.querySelector(".case-overview_component");
    const animation = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: statsSection,
        start: scrollTriggerStart4,
        end: scrollTriggerEnd4
        // markers: true,
        // toggleActions: 'play none none reverse',
      }
    });
    animation.from(statsComponent, { duration: 1, y: "2rem", opacity: 0, ease: "power4.inOut" });
  };

  // src/pages/caseTemplate.ts
  init_cursorMotion();
  var caseTemplate = () => {
    csPageReveal();
    videoPlayer();
    csOverviewReveal();
    csMediaSliderReveal();
    mediaSlider();
    csStatsReveal();
    horizontalScrollText();
    const cursorArea = document.querySelector(".case-next_image-wrap");
    cursorArea.addEventListener("mousemove", (e2) => {
      const mouseY = e2.movementY;
      cursorArrowYMovement("default", mouseY);
    });
  };

  // src/pages/contact.ts
  init_live_reload();

  // src/components/contactFrom.ts
  init_live_reload();
  init_generateHubspotJSON();
  init_postContactForm();
  var postContactFrom = () => {
    const formElement = document.querySelector("#contact-form");
    formElement.addEventListener("submit", (e2) => {
      e2.preventDefault();
      const target = e2.target;
      const formData = new FormData(target);
      const formattedData = generateHubspotJSON(formData, target);
      postContactData(formattedData, target);
    });
  };

  // src/components/contactMain.ts
  init_live_reload();

  // src/motion/contactMotion.ts
  init_live_reload();
  init_gsap();
  var initContact = () => {
    const sublinks = [...document.querySelectorAll(".contact_sub-link")];
    gsapWithCSS.set(sublinks, { y: "1rem", opacity: 0 });
  };
  var linkHoverIn = (curNote, curLink) => {
    const animation = gsapWithCSS.timeline();
    animation.to(curLink.children[0], { color: "#D5CFC6", ease: "expo.out" });
    animation.to(curNote, { color: "#EC2543", ease: "expo.inout" }, "<");
  };
  var linkHoverOut = (curNote, curLink) => {
    const animation = gsapWithCSS.timeline();
    animation.to(curLink.children[0], { color: "rgba(248,244,238,0)", ease: "expo.out" });
    animation.to(curNote, { color: "rgb(238, 235, 230, .2)", ease: "expo.out" }, "<");
    curLink.classList.add("text-stroke-white");
  };
  var sublinksHoverIn = (sublinks) => {
    const animation = gsapWithCSS.timeline();
    animation.to(sublinks, { opacity: 1, y: "0rem", stagger: { each: 0.1 }, ease: "expo.out" });
  };
  var sublinksHoverOut = (sublinks) => {
    const animation = gsapWithCSS.timeline();
    animation.to(sublinks, { opacity: 0, y: "1rem", stagger: { each: 0.1 }, ease: "expo.out" });
  };
  var openContactForm = () => {
    const formParent = document.querySelector(".section_contact-form");
    const formComponent = formParent.querySelector(".contact-form_component");
    const animation = gsapWithCSS.timeline();
    animation.set(formParent, { duration: 0, opacity: 0, display: "block" });
    animation.set(formComponent, { duration: 0, opacity: 0 });
    animation.to(formParent, { opacity: 1, ease: "power4.out" });
    animation.to(formComponent, { opacity: 1, ease: "power4.out" });
  };
  var closeContactForm = () => {
    const formParent = document.querySelector(".section_contact-form");
    const formComponent = formParent.querySelector(".contact-form_component");
    const animation = gsapWithCSS.timeline();
    animation.to(formParent, { opacity: 0, ease: "power4.out" });
    animation.to(formComponent, { opacity: 0, ease: "power4.out" }, "<");
    animation.set(formParent, { duration: 0, display: "none" });
  };

  // src/components/contactMain.ts
  init_cursorMotion();
  init_getDevice();
  var contactHover = () => {
    const device12 = getDeviceType();
    if (device12 === "desktop") {
      initContact();
      const contactLinksWraps = [...document.querySelectorAll(".contact_block")];
      for (const i in contactLinksWraps) {
        const tempWrap = contactLinksWraps[i];
        tempWrap.addEventListener("mouseenter", (e2) => {
          const target = e2.target;
          const targetNote = target.querySelector(".contact_note-text");
          const targetLink = target.querySelector(".contact_link");
          const targetLinkParent = target.querySelector(".contact_info-wrap");
          linkHoverIn(targetNote, targetLink);
          if (targetLinkParent.children.length > 1) {
            const sublinks = [...target.querySelectorAll(".contact_sub-link")];
            sublinksHoverIn(sublinks);
          }
        });
        tempWrap.addEventListener("mouseleave", (e2) => {
          const target = e2.target;
          const targetNote = target.querySelector(".contact_note-text");
          const targetLink = target.querySelector(".contact_link");
          const targetLinkParent = target.querySelector(".contact_info-wrap");
          linkHoverOut(targetNote, targetLink);
          if (targetLinkParent.children.length > 1) {
            const sublinks = [...target.querySelectorAll(".contact_sub-link")];
            sublinksHoverOut(sublinks);
          }
        });
      }
      const formMainWrapper = document.querySelector(".contact_main");
      formMainWrapper.addEventListener("mousemove", (e2) => {
        const mouseYMovement = e2.movementY;
        cursorArrowYMovement("default", mouseYMovement);
      });
    }
  };
  var contactForm = () => {
    const formParent = document.querySelector(".section_contact-form");
    const openFormButton = document.querySelector("#openForm");
    const closeFormButton = formParent.querySelector(".contact-from_close-wrap");
    const closeFormWrap = formParent.querySelector(".contact-form_close-wrap");
    openFormButton.addEventListener("click", () => {
      openContactForm();
    });
    closeFormButton.addEventListener("click", () => {
      closeContactForm();
    });
    closeFormWrap.addEventListener("click", () => {
      closeContactForm();
    });
  };

  // src/pages/contact.ts
  var contact = () => {
    contactHover();
    contactForm();
    postContactFrom();
  };

  // src/pages/home.ts
  init_live_reload();

  // src/components/accordianList.ts
  init_live_reload();

  // src/components/morphSVG.ts
  init_live_reload();
  var initSVGMorph = () => {
    const svgEmbed = document.querySelector("[data-morph-embed]");
    const svgWrapper = document.querySelector("[data-morph-svg]");
    const svgData = svgWrapper.src;
    function requestSVG(method, url) {
      return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState === 4) {
            if (this.status >= 200 && this.status < 300) {
              resolve(this.responseText);
            } else {
              reject(new Error(`Request failed with status: ${this.status}`));
            }
          }
        };
        xhttp.open(method, url, true);
        xhttp.send();
      });
    }
    async function fetchData() {
      try {
        const data = await requestSVG("GET", svgData);
        svgEmbed.innerHTML = data;
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error("An unexpected error occurred");
        }
      }
    }
    fetchData();
  };
  var getSVGPathData = () => {
    const svgEmbed = document.querySelector("[data-morph-embed]");
    const kGraphics = [...svgEmbed.querySelectorAll(".k-graphic")];
    const hGraphics = [...svgEmbed.querySelectorAll(".h-graphic")];
    const hideSection = svgEmbed.querySelector("#hide01");
    const kPathPoints = [...kGraphics].slice(0).map((e2) => {
      return e2.getAttribute("d");
    });
    const hPathPoints = [...hGraphics].slice(0).map((e2) => {
      return e2.getAttribute("d");
    });
    const kBase = kGraphics[0];
    const hBase = hGraphics[0];
    const returnData = [kBase, kPathPoints, hBase, hPathPoints, hideSection];
    return returnData;
  };

  // src/components/accordianList.ts
  init_getDevice();
  init_gsap();

  // node_modules/gsap/MorphSVGPlugin.js
  init_live_reload();

  // node_modules/gsap/utils/paths.js
  init_live_reload();
  var _svgPathExp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig;
  var _numbersExp = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig;
  var _scientific = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig;
  var _selectorExp = /(^[#\.][a-z]|[a-y][a-z])/i;
  var _DEG2RAD2 = Math.PI / 180;
  var _RAD2DEG3 = 180 / Math.PI;
  var _sin2 = Math.sin;
  var _cos2 = Math.cos;
  var _abs2 = Math.abs;
  var _sqrt2 = Math.sqrt;
  var _isString9 = function _isString10(value) {
    return typeof value === "string";
  };
  var _isNumber7 = function _isNumber8(value) {
    return typeof value === "number";
  };
  var _roundingNum = 1e5;
  var _round11 = function _round12(value) {
    return Math.round(value * _roundingNum) / _roundingNum || 0;
  };
  function getRawPath(value) {
    value = _isString9(value) && _selectorExp.test(value) ? document.querySelector(value) || value : value;
    var e2 = value.getAttribute ? value : 0, rawPath;
    if (e2 && (value = value.getAttribute("d"))) {
      if (!e2._gsPath) {
        e2._gsPath = {};
      }
      rawPath = e2._gsPath[value];
      return rawPath && !rawPath._dirty ? rawPath : e2._gsPath[value] = stringToRawPath(value);
    }
    return !value ? console.warn("Expecting a <path> element or an SVG path data string") : _isString9(value) ? stringToRawPath(value) : _isNumber7(value[0]) ? [value] : value;
  }
  function reverseSegment(segment) {
    var i = 0, y;
    segment.reverse();
    for (; i < segment.length; i += 2) {
      y = segment[i];
      segment[i] = segment[i + 1];
      segment[i + 1] = y;
    }
    segment.reversed = !segment.reversed;
  }
  var _createPath = function _createPath2(e2, ignore) {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path"), attr = [].slice.call(e2.attributes), i = attr.length, name;
    ignore = "," + ignore + ",";
    while (--i > -1) {
      name = attr[i].nodeName.toLowerCase();
      if (ignore.indexOf("," + name + ",") < 0) {
        path.setAttributeNS(null, name, attr[i].nodeValue);
      }
    }
    return path;
  };
  var _typeAttrs = {
    rect: "rx,ry,x,y,width,height",
    circle: "r,cx,cy",
    ellipse: "rx,ry,cx,cy",
    line: "x1,x2,y1,y2"
  };
  var _attrToObj = function _attrToObj2(e2, attrs) {
    var props = attrs ? attrs.split(",") : [], obj = {}, i = props.length;
    while (--i > -1) {
      obj[props[i]] = +e2.getAttribute(props[i]) || 0;
    }
    return obj;
  };
  function convertToPath(element, swap) {
    var type = element.tagName.toLowerCase(), circ = 0.552284749831, data, x, y, r, ry, path, rcirc, rycirc, points, w, h, x2, x3, x4, x5, x6, y2, y3, y4, y5, y6, attr;
    if (type === "path" || !element.getBBox) {
      return element;
    }
    path = _createPath(element, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points");
    attr = _attrToObj(element, _typeAttrs[type]);
    if (type === "rect") {
      r = attr.rx;
      ry = attr.ry || r;
      x = attr.x;
      y = attr.y;
      w = attr.width - r * 2;
      h = attr.height - ry * 2;
      if (r || ry) {
        x2 = x + r * (1 - circ);
        x3 = x + r;
        x4 = x3 + w;
        x5 = x4 + r * circ;
        x6 = x4 + r;
        y2 = y + ry * (1 - circ);
        y3 = y + ry;
        y4 = y3 + h;
        y5 = y4 + ry * circ;
        y6 = y4 + ry;
        data = "M" + x6 + "," + y3 + " V" + y4 + " C" + [x6, y5, x5, y6, x4, y6, x4 - (x4 - x3) / 3, y6, x3 + (x4 - x3) / 3, y6, x3, y6, x2, y6, x, y5, x, y4, x, y4 - (y4 - y3) / 3, x, y3 + (y4 - y3) / 3, x, y3, x, y2, x2, y, x3, y, x3 + (x4 - x3) / 3, y, x4 - (x4 - x3) / 3, y, x4, y, x5, y, x6, y2, x6, y3].join(",") + "z";
      } else {
        data = "M" + (x + w) + "," + y + " v" + h + " h" + -w + " v" + -h + " h" + w + "z";
      }
    } else if (type === "circle" || type === "ellipse") {
      if (type === "circle") {
        r = ry = attr.r;
        rycirc = r * circ;
      } else {
        r = attr.rx;
        ry = attr.ry;
        rycirc = ry * circ;
      }
      x = attr.cx;
      y = attr.cy;
      rcirc = r * circ;
      data = "M" + (x + r) + "," + y + " C" + [x + r, y + rycirc, x + rcirc, y + ry, x, y + ry, x - rcirc, y + ry, x - r, y + rycirc, x - r, y, x - r, y - rycirc, x - rcirc, y - ry, x, y - ry, x + rcirc, y - ry, x + r, y - rycirc, x + r, y].join(",") + "z";
    } else if (type === "line") {
      data = "M" + attr.x1 + "," + attr.y1 + " L" + attr.x2 + "," + attr.y2;
    } else if (type === "polyline" || type === "polygon") {
      points = (element.getAttribute("points") + "").match(_numbersExp) || [];
      x = points.shift();
      y = points.shift();
      data = "M" + x + "," + y + " L" + points.join(",");
      if (type === "polygon") {
        data += "," + x + "," + y + "z";
      }
    }
    path.setAttribute("d", rawPathToString(path._gsRawPath = stringToRawPath(data)));
    if (swap && element.parentNode) {
      element.parentNode.insertBefore(path, element);
      element.parentNode.removeChild(element);
    }
    return path;
  }
  function arcToSegment(lastX, lastY, rx, ry, angle, largeArcFlag, sweepFlag, x, y) {
    if (lastX === x && lastY === y) {
      return;
    }
    rx = _abs2(rx);
    ry = _abs2(ry);
    var angleRad = angle % 360 * _DEG2RAD2, cosAngle = _cos2(angleRad), sinAngle = _sin2(angleRad), PI = Math.PI, TWOPI = PI * 2, dx2 = (lastX - x) / 2, dy2 = (lastY - y) / 2, x1 = cosAngle * dx2 + sinAngle * dy2, y1 = -sinAngle * dx2 + cosAngle * dy2, x1_sq = x1 * x1, y1_sq = y1 * y1, radiiCheck = x1_sq / (rx * rx) + y1_sq / (ry * ry);
    if (radiiCheck > 1) {
      rx = _sqrt2(radiiCheck) * rx;
      ry = _sqrt2(radiiCheck) * ry;
    }
    var rx_sq = rx * rx, ry_sq = ry * ry, sq = (rx_sq * ry_sq - rx_sq * y1_sq - ry_sq * x1_sq) / (rx_sq * y1_sq + ry_sq * x1_sq);
    if (sq < 0) {
      sq = 0;
    }
    var coef = (largeArcFlag === sweepFlag ? -1 : 1) * _sqrt2(sq), cx1 = coef * (rx * y1 / ry), cy1 = coef * -(ry * x1 / rx), sx2 = (lastX + x) / 2, sy2 = (lastY + y) / 2, cx = sx2 + (cosAngle * cx1 - sinAngle * cy1), cy = sy2 + (sinAngle * cx1 + cosAngle * cy1), ux = (x1 - cx1) / rx, uy = (y1 - cy1) / ry, vx = (-x1 - cx1) / rx, vy = (-y1 - cy1) / ry, temp = ux * ux + uy * uy, angleStart = (uy < 0 ? -1 : 1) * Math.acos(ux / _sqrt2(temp)), angleExtent = (ux * vy - uy * vx < 0 ? -1 : 1) * Math.acos((ux * vx + uy * vy) / _sqrt2(temp * (vx * vx + vy * vy)));
    isNaN(angleExtent) && (angleExtent = PI);
    if (!sweepFlag && angleExtent > 0) {
      angleExtent -= TWOPI;
    } else if (sweepFlag && angleExtent < 0) {
      angleExtent += TWOPI;
    }
    angleStart %= TWOPI;
    angleExtent %= TWOPI;
    var segments = Math.ceil(_abs2(angleExtent) / (TWOPI / 4)), rawPath = [], angleIncrement = angleExtent / segments, controlLength = 4 / 3 * _sin2(angleIncrement / 2) / (1 + _cos2(angleIncrement / 2)), ma = cosAngle * rx, mb = sinAngle * rx, mc = sinAngle * -ry, md = cosAngle * ry, i;
    for (i = 0; i < segments; i++) {
      angle = angleStart + i * angleIncrement;
      x1 = _cos2(angle);
      y1 = _sin2(angle);
      ux = _cos2(angle += angleIncrement);
      uy = _sin2(angle);
      rawPath.push(x1 - controlLength * y1, y1 + controlLength * x1, ux + controlLength * uy, uy - controlLength * ux, ux, uy);
    }
    for (i = 0; i < rawPath.length; i += 2) {
      x1 = rawPath[i];
      y1 = rawPath[i + 1];
      rawPath[i] = x1 * ma + y1 * mc + cx;
      rawPath[i + 1] = x1 * mb + y1 * md + cy;
    }
    rawPath[i - 2] = x;
    rawPath[i - 1] = y;
    return rawPath;
  }
  function stringToRawPath(d) {
    var a = (d + "").replace(_scientific, function(m) {
      var n = +m;
      return n < 1e-4 && n > -1e-4 ? 0 : n;
    }).match(_svgPathExp) || [], path = [], relativeX = 0, relativeY = 0, twoThirds = 2 / 3, elements = a.length, points = 0, errorMessage = "ERROR: malformed path: " + d, i, j, x, y, command, isRelative, segment, startX, startY, difX, difY, beziers, prevCommand, flag1, flag2, line = function line2(sx, sy, ex, ey) {
      difX = (ex - sx) / 3;
      difY = (ey - sy) / 3;
      segment.push(sx + difX, sy + difY, ex - difX, ey - difY, ex, ey);
    };
    if (!d || !isNaN(a[0]) || isNaN(a[1])) {
      console.log(errorMessage);
      return path;
    }
    for (i = 0; i < elements; i++) {
      prevCommand = command;
      if (isNaN(a[i])) {
        command = a[i].toUpperCase();
        isRelative = command !== a[i];
      } else {
        i--;
      }
      x = +a[i + 1];
      y = +a[i + 2];
      if (isRelative) {
        x += relativeX;
        y += relativeY;
      }
      if (!i) {
        startX = x;
        startY = y;
      }
      if (command === "M") {
        if (segment) {
          if (segment.length < 8) {
            path.length -= 1;
          } else {
            points += segment.length;
          }
        }
        relativeX = startX = x;
        relativeY = startY = y;
        segment = [x, y];
        path.push(segment);
        i += 2;
        command = "L";
      } else if (command === "C") {
        if (!segment) {
          segment = [0, 0];
        }
        if (!isRelative) {
          relativeX = relativeY = 0;
        }
        segment.push(x, y, relativeX + a[i + 3] * 1, relativeY + a[i + 4] * 1, relativeX += a[i + 5] * 1, relativeY += a[i + 6] * 1);
        i += 6;
      } else if (command === "S") {
        difX = relativeX;
        difY = relativeY;
        if (prevCommand === "C" || prevCommand === "S") {
          difX += relativeX - segment[segment.length - 4];
          difY += relativeY - segment[segment.length - 3];
        }
        if (!isRelative) {
          relativeX = relativeY = 0;
        }
        segment.push(difX, difY, x, y, relativeX += a[i + 3] * 1, relativeY += a[i + 4] * 1);
        i += 4;
      } else if (command === "Q") {
        difX = relativeX + (x - relativeX) * twoThirds;
        difY = relativeY + (y - relativeY) * twoThirds;
        if (!isRelative) {
          relativeX = relativeY = 0;
        }
        relativeX += a[i + 3] * 1;
        relativeY += a[i + 4] * 1;
        segment.push(difX, difY, relativeX + (x - relativeX) * twoThirds, relativeY + (y - relativeY) * twoThirds, relativeX, relativeY);
        i += 4;
      } else if (command === "T") {
        difX = relativeX - segment[segment.length - 4];
        difY = relativeY - segment[segment.length - 3];
        segment.push(relativeX + difX, relativeY + difY, x + (relativeX + difX * 1.5 - x) * twoThirds, y + (relativeY + difY * 1.5 - y) * twoThirds, relativeX = x, relativeY = y);
        i += 2;
      } else if (command === "H") {
        line(relativeX, relativeY, relativeX = x, relativeY);
        i += 1;
      } else if (command === "V") {
        line(relativeX, relativeY, relativeX, relativeY = x + (isRelative ? relativeY - relativeX : 0));
        i += 1;
      } else if (command === "L" || command === "Z") {
        if (command === "Z") {
          x = startX;
          y = startY;
          segment.closed = true;
        }
        if (command === "L" || _abs2(relativeX - x) > 0.5 || _abs2(relativeY - y) > 0.5) {
          line(relativeX, relativeY, x, y);
          if (command === "L") {
            i += 2;
          }
        }
        relativeX = x;
        relativeY = y;
      } else if (command === "A") {
        flag1 = a[i + 4];
        flag2 = a[i + 5];
        difX = a[i + 6];
        difY = a[i + 7];
        j = 7;
        if (flag1.length > 1) {
          if (flag1.length < 3) {
            difY = difX;
            difX = flag2;
            j--;
          } else {
            difY = flag2;
            difX = flag1.substr(2);
            j -= 2;
          }
          flag2 = flag1.charAt(1);
          flag1 = flag1.charAt(0);
        }
        beziers = arcToSegment(relativeX, relativeY, +a[i + 1], +a[i + 2], +a[i + 3], +flag1, +flag2, (isRelative ? relativeX : 0) + difX * 1, (isRelative ? relativeY : 0) + difY * 1);
        i += j;
        if (beziers) {
          for (j = 0; j < beziers.length; j++) {
            segment.push(beziers[j]);
          }
        }
        relativeX = segment[segment.length - 2];
        relativeY = segment[segment.length - 1];
      } else {
        console.log(errorMessage);
      }
    }
    i = segment.length;
    if (i < 6) {
      path.pop();
      i = 0;
    } else if (segment[0] === segment[i - 2] && segment[1] === segment[i - 1]) {
      segment.closed = true;
    }
    path.totalPoints = points + i;
    return path;
  }
  function rawPathToString(rawPath) {
    if (_isNumber7(rawPath[0])) {
      rawPath = [rawPath];
    }
    var result = "", l = rawPath.length, sl, s, i, segment;
    for (s = 0; s < l; s++) {
      segment = rawPath[s];
      result += "M" + _round11(segment[0]) + "," + _round11(segment[1]) + " C";
      sl = segment.length;
      for (i = 2; i < sl; i++) {
        result += _round11(segment[i++]) + "," + _round11(segment[i++]) + " " + _round11(segment[i++]) + "," + _round11(segment[i++]) + " " + _round11(segment[i++]) + "," + _round11(segment[i]) + " ";
      }
      if (segment.closed) {
        result += "z";
      }
    }
    return result;
  }

  // node_modules/gsap/MorphSVGPlugin.js
  var gsap8;
  var _toArray8;
  var _lastLinkedAnchor;
  var _doc8;
  var _coreInitted9;
  var PluginClass;
  var _getGSAP13 = function _getGSAP14() {
    return gsap8 || typeof window !== "undefined" && (gsap8 = window.gsap) && gsap8.registerPlugin && gsap8;
  };
  var _isFunction11 = function _isFunction12(value) {
    return typeof value === "function";
  };
  var _atan22 = Math.atan2;
  var _cos3 = Math.cos;
  var _sin3 = Math.sin;
  var _sqrt3 = Math.sqrt;
  var _PI = Math.PI;
  var _2PI2 = _PI * 2;
  var _angleMin = _PI * 0.3;
  var _angleMax = _PI * 0.7;
  var _bigNum5 = 1e20;
  var _numExp2 = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi;
  var _selectorExp2 = /(^[#\.][a-z]|[a-y][a-z])/i;
  var _commands = /[achlmqstvz]/i;
  var _log = function _log2(message) {
    return console && console.warn(message);
  };
  var _bonusValidated3 = 1;
  var _getAverageXY = function _getAverageXY2(segment) {
    var l = segment.length, x = 0, y = 0, i;
    for (i = 0; i < l; i++) {
      x += segment[i++];
      y += segment[i];
    }
    return [x / (l / 2), y / (l / 2)];
  };
  var _getSize3 = function _getSize4(segment) {
    var l = segment.length, xMax = segment[0], xMin = xMax, yMax = segment[1], yMin = yMax, x, y, i;
    for (i = 6; i < l; i += 6) {
      x = segment[i];
      y = segment[i + 1];
      if (x > xMax) {
        xMax = x;
      } else if (x < xMin) {
        xMin = x;
      }
      if (y > yMax) {
        yMax = y;
      } else if (y < yMin) {
        yMin = y;
      }
    }
    segment.centerX = (xMax + xMin) / 2;
    segment.centerY = (yMax + yMin) / 2;
    return segment.size = (xMax - xMin) * (yMax - yMin);
  };
  var _getTotalSize = function _getTotalSize2(rawPath, samplesPerBezier) {
    if (samplesPerBezier === void 0) {
      samplesPerBezier = 3;
    }
    var j = rawPath.length, xMax = rawPath[0][0], xMin = xMax, yMax = rawPath[0][1], yMin = yMax, inc = 1 / samplesPerBezier, l, x, y, i, segment, k, t2, inv, x1, y1, x2, x3, x4, y2, y3, y4;
    while (--j > -1) {
      segment = rawPath[j];
      l = segment.length;
      for (i = 6; i < l; i += 6) {
        x1 = segment[i];
        y1 = segment[i + 1];
        x2 = segment[i + 2] - x1;
        y2 = segment[i + 3] - y1;
        x3 = segment[i + 4] - x1;
        y3 = segment[i + 5] - y1;
        x4 = segment[i + 6] - x1;
        y4 = segment[i + 7] - y1;
        k = samplesPerBezier;
        while (--k > -1) {
          t2 = inc * k;
          inv = 1 - t2;
          x = (t2 * t2 * x4 + 3 * inv * (t2 * x3 + inv * x2)) * t2 + x1;
          y = (t2 * t2 * y4 + 3 * inv * (t2 * y3 + inv * y2)) * t2 + y1;
          if (x > xMax) {
            xMax = x;
          } else if (x < xMin) {
            xMin = x;
          }
          if (y > yMax) {
            yMax = y;
          } else if (y < yMin) {
            yMin = y;
          }
        }
      }
    }
    rawPath.centerX = (xMax + xMin) / 2;
    rawPath.centerY = (yMax + yMin) / 2;
    rawPath.left = xMin;
    rawPath.width = xMax - xMin;
    rawPath.top = yMin;
    rawPath.height = yMax - yMin;
    return rawPath.size = (xMax - xMin) * (yMax - yMin);
  };
  var _sortByComplexity = function _sortByComplexity2(a, b) {
    return b.length - a.length;
  };
  var _sortBySize = function _sortBySize2(a, b) {
    var sizeA = a.size || _getSize3(a), sizeB = b.size || _getSize3(b);
    return Math.abs(sizeB - sizeA) < (sizeA + sizeB) / 20 ? b.centerX - a.centerX || b.centerY - a.centerY : sizeB - sizeA;
  };
  var _offsetSegment = function _offsetSegment2(segment, shapeIndex) {
    var a = segment.slice(0), l = segment.length, wrap3 = l - 2, i, index;
    shapeIndex = shapeIndex | 0;
    for (i = 0; i < l; i++) {
      index = (i + shapeIndex) % wrap3;
      segment[i++] = a[index];
      segment[i] = a[index + 1];
    }
  };
  var _getTotalMovement = function _getTotalMovement2(sb, eb, shapeIndex, offsetX, offsetY) {
    var l = sb.length, d = 0, wrap3 = l - 2, index, i, x, y;
    shapeIndex *= 6;
    for (i = 0; i < l; i += 6) {
      index = (i + shapeIndex) % wrap3;
      y = sb[index] - (eb[i] - offsetX);
      x = sb[index + 1] - (eb[i + 1] - offsetY);
      d += _sqrt3(x * x + y * y);
    }
    return d;
  };
  var _getClosestShapeIndex = function _getClosestShapeIndex2(sb, eb, checkReverse) {
    var l = sb.length, sCenter = _getAverageXY(sb), eCenter = _getAverageXY(eb), offsetX = eCenter[0] - sCenter[0], offsetY = eCenter[1] - sCenter[1], min = _getTotalMovement(sb, eb, 0, offsetX, offsetY), minIndex = 0, copy, d, i;
    for (i = 6; i < l; i += 6) {
      d = _getTotalMovement(sb, eb, i / 6, offsetX, offsetY);
      if (d < min) {
        min = d;
        minIndex = i;
      }
    }
    if (checkReverse) {
      copy = sb.slice(0);
      reverseSegment(copy);
      for (i = 6; i < l; i += 6) {
        d = _getTotalMovement(copy, eb, i / 6, offsetX, offsetY);
        if (d < min) {
          min = d;
          minIndex = -i;
        }
      }
    }
    return minIndex / 6;
  };
  var _getClosestAnchor = function _getClosestAnchor2(rawPath, x, y) {
    var j = rawPath.length, closestDistance = _bigNum5, closestX = 0, closestY = 0, segment, dx, dy, d, i, l;
    while (--j > -1) {
      segment = rawPath[j];
      l = segment.length;
      for (i = 0; i < l; i += 6) {
        dx = segment[i] - x;
        dy = segment[i + 1] - y;
        d = _sqrt3(dx * dx + dy * dy);
        if (d < closestDistance) {
          closestDistance = d;
          closestX = segment[i];
          closestY = segment[i + 1];
        }
      }
    }
    return [closestX, closestY];
  };
  var _getClosestSegment = function _getClosestSegment2(bezier, pool, startIndex, sortRatio, offsetX, offsetY) {
    var l = pool.length, index = 0, minSize = Math.min(bezier.size || _getSize3(bezier), pool[startIndex].size || _getSize3(pool[startIndex])) * sortRatio, min = _bigNum5, cx = bezier.centerX + offsetX, cy = bezier.centerY + offsetY, size, i, dx, dy, d;
    for (i = startIndex; i < l; i++) {
      size = pool[i].size || _getSize3(pool[i]);
      if (size < minSize) {
        break;
      }
      dx = pool[i].centerX - cx;
      dy = pool[i].centerY - cy;
      d = _sqrt3(dx * dx + dy * dy);
      if (d < min) {
        index = i;
        min = d;
      }
    }
    d = pool[index];
    pool.splice(index, 1);
    return d;
  };
  var _subdivideSegmentQty = function _subdivideSegmentQty2(segment, quantity) {
    var tally = 0, max = 0.999999, l = segment.length, newPointsPerSegment = quantity / ((l - 2) / 6), ax, ay, cp1x, cp1y, cp2x, cp2y, bx, by, x1, y1, x2, y2, i, t2;
    for (i = 2; i < l; i += 6) {
      tally += newPointsPerSegment;
      while (tally > max) {
        ax = segment[i - 2];
        ay = segment[i - 1];
        cp1x = segment[i];
        cp1y = segment[i + 1];
        cp2x = segment[i + 2];
        cp2y = segment[i + 3];
        bx = segment[i + 4];
        by = segment[i + 5];
        t2 = 1 / ((Math.floor(tally) || 1) + 1);
        x1 = ax + (cp1x - ax) * t2;
        x2 = cp1x + (cp2x - cp1x) * t2;
        x1 += (x2 - x1) * t2;
        x2 += (cp2x + (bx - cp2x) * t2 - x2) * t2;
        y1 = ay + (cp1y - ay) * t2;
        y2 = cp1y + (cp2y - cp1y) * t2;
        y1 += (y2 - y1) * t2;
        y2 += (cp2y + (by - cp2y) * t2 - y2) * t2;
        segment.splice(
          i,
          4,
          ax + (cp1x - ax) * t2,
          //first control point
          ay + (cp1y - ay) * t2,
          x1,
          //second control point
          y1,
          x1 + (x2 - x1) * t2,
          //new fabricated anchor on line
          y1 + (y2 - y1) * t2,
          x2,
          //third control point
          y2,
          cp2x + (bx - cp2x) * t2,
          //fourth control point
          cp2y + (by - cp2y) * t2
        );
        i += 6;
        l += 6;
        tally--;
      }
    }
    return segment;
  };
  var _equalizeSegmentQuantity = function _equalizeSegmentQuantity2(start, end, shapeIndex, map, fillSafe) {
    var dif = end.length - start.length, longer = dif > 0 ? end : start, shorter = dif > 0 ? start : end, added = 0, sortMethod = map === "complexity" ? _sortByComplexity : _sortBySize, sortRatio = map === "position" ? 0 : typeof map === "number" ? map : 0.8, i = shorter.length, shapeIndices = typeof shapeIndex === "object" && shapeIndex.push ? shapeIndex.slice(0) : [shapeIndex], reverse = shapeIndices[0] === "reverse" || shapeIndices[0] < 0, log = shapeIndex === "log", eb, sb, b, x, y, offsetX, offsetY;
    if (!shorter[0]) {
      return;
    }
    if (longer.length > 1) {
      start.sort(sortMethod);
      end.sort(sortMethod);
      offsetX = longer.size || _getTotalSize(longer);
      offsetX = shorter.size || _getTotalSize(shorter);
      offsetX = longer.centerX - shorter.centerX;
      offsetY = longer.centerY - shorter.centerY;
      if (sortMethod === _sortBySize) {
        for (i = 0; i < shorter.length; i++) {
          longer.splice(i, 0, _getClosestSegment(shorter[i], longer, i, sortRatio, offsetX, offsetY));
        }
      }
    }
    if (dif) {
      if (dif < 0) {
        dif = -dif;
      }
      if (longer[0].length > shorter[0].length) {
        _subdivideSegmentQty(shorter[0], (longer[0].length - shorter[0].length) / 6 | 0);
      }
      i = shorter.length;
      while (added < dif) {
        x = longer[i].size || _getSize3(longer[i]);
        b = _getClosestAnchor(shorter, longer[i].centerX, longer[i].centerY);
        x = b[0];
        y = b[1];
        shorter[i++] = [x, y, x, y, x, y, x, y];
        shorter.totalPoints += 8;
        added++;
      }
    }
    for (i = 0; i < start.length; i++) {
      eb = end[i];
      sb = start[i];
      dif = eb.length - sb.length;
      if (dif < 0) {
        _subdivideSegmentQty(eb, -dif / 6 | 0);
      } else if (dif > 0) {
        _subdivideSegmentQty(sb, dif / 6 | 0);
      }
      if (reverse && fillSafe !== false && !sb.reversed) {
        reverseSegment(sb);
      }
      shapeIndex = shapeIndices[i] || shapeIndices[i] === 0 ? shapeIndices[i] : "auto";
      if (shapeIndex) {
        if (sb.closed || Math.abs(sb[0] - sb[sb.length - 2]) < 0.5 && Math.abs(sb[1] - sb[sb.length - 1]) < 0.5) {
          if (shapeIndex === "auto" || shapeIndex === "log") {
            shapeIndices[i] = shapeIndex = _getClosestShapeIndex(sb, eb, !i || fillSafe === false);
            if (shapeIndex < 0) {
              reverse = true;
              reverseSegment(sb);
              shapeIndex = -shapeIndex;
            }
            _offsetSegment(sb, shapeIndex * 6);
          } else if (shapeIndex !== "reverse") {
            if (i && shapeIndex < 0) {
              reverseSegment(sb);
            }
            _offsetSegment(sb, (shapeIndex < 0 ? -shapeIndex : shapeIndex) * 6);
          }
        } else if (!reverse && (shapeIndex === "auto" && Math.abs(eb[0] - sb[0]) + Math.abs(eb[1] - sb[1]) + Math.abs(eb[eb.length - 2] - sb[sb.length - 2]) + Math.abs(eb[eb.length - 1] - sb[sb.length - 1]) > Math.abs(eb[0] - sb[sb.length - 2]) + Math.abs(eb[1] - sb[sb.length - 1]) + Math.abs(eb[eb.length - 2] - sb[0]) + Math.abs(eb[eb.length - 1] - sb[1]) || shapeIndex % 2)) {
          reverseSegment(sb);
          shapeIndices[i] = -1;
          reverse = true;
        } else if (shapeIndex === "auto") {
          shapeIndices[i] = 0;
        } else if (shapeIndex === "reverse") {
          shapeIndices[i] = -1;
        }
        if (sb.closed !== eb.closed) {
          sb.closed = eb.closed = false;
        }
      }
    }
    log && _log("shapeIndex:[" + shapeIndices.join(",") + "]");
    start.shapeIndex = shapeIndices;
    return shapeIndices;
  };
  var _pathFilter = function _pathFilter2(a, shapeIndex, map, precompile, fillSafe) {
    var start = stringToRawPath(a[0]), end = stringToRawPath(a[1]);
    if (!_equalizeSegmentQuantity(start, end, shapeIndex || shapeIndex === 0 ? shapeIndex : "auto", map, fillSafe)) {
      return;
    }
    a[0] = rawPathToString(start);
    a[1] = rawPathToString(end);
    if (precompile === "log" || precompile === true) {
      _log('precompile:["' + a[0] + '","' + a[1] + '"]');
    }
  };
  var _offsetPoints = function _offsetPoints2(text, offset) {
    if (!offset) {
      return text;
    }
    var a = text.match(_numExp2) || [], l = a.length, s = "", inc, i, j;
    if (offset === "reverse") {
      i = l - 1;
      inc = -2;
    } else {
      i = ((parseInt(offset, 10) || 0) * 2 + 1 + l * 100) % l;
      inc = 2;
    }
    for (j = 0; j < l; j += 2) {
      s += a[i - 1] + "," + a[i] + " ";
      i = (i + inc) % l;
    }
    return s;
  };
  var _equalizePointQuantity = function _equalizePointQuantity2(a, quantity) {
    var tally = 0, x = parseFloat(a[0]), y = parseFloat(a[1]), s = x + "," + y + " ", max = 0.999999, newPointsPerSegment, i, l, j, factor, nextX, nextY;
    l = a.length;
    newPointsPerSegment = quantity * 0.5 / (l * 0.5 - 1);
    for (i = 0; i < l - 2; i += 2) {
      tally += newPointsPerSegment;
      nextX = parseFloat(a[i + 2]);
      nextY = parseFloat(a[i + 3]);
      if (tally > max) {
        factor = 1 / (Math.floor(tally) + 1);
        j = 1;
        while (tally > max) {
          s += (x + (nextX - x) * factor * j).toFixed(2) + "," + (y + (nextY - y) * factor * j).toFixed(2) + " ";
          tally--;
          j++;
        }
      }
      s += nextX + "," + nextY + " ";
      x = nextX;
      y = nextY;
    }
    return s;
  };
  var _pointsFilter = function _pointsFilter2(a) {
    var startNums = a[0].match(_numExp2) || [], endNums = a[1].match(_numExp2) || [], dif = endNums.length - startNums.length;
    if (dif > 0) {
      a[0] = _equalizePointQuantity(startNums, dif);
    } else {
      a[1] = _equalizePointQuantity(endNums, -dif);
    }
  };
  var _buildPointsFilter = function _buildPointsFilter2(shapeIndex) {
    return !isNaN(shapeIndex) ? function(a) {
      _pointsFilter(a);
      a[1] = _offsetPoints(a[1], parseInt(shapeIndex, 10));
    } : _pointsFilter;
  };
  var _parseShape = function _parseShape2(shape, forcePath, target) {
    var isString = typeof shape === "string", e2, type;
    if (!isString || _selectorExp2.test(shape) || (shape.match(_numExp2) || []).length < 3) {
      e2 = _toArray8(shape)[0];
      if (e2) {
        type = (e2.nodeName + "").toUpperCase();
        if (forcePath && type !== "PATH") {
          e2 = convertToPath(e2, false);
          type = "PATH";
        }
        shape = e2.getAttribute(type === "PATH" ? "d" : "points") || "";
        if (e2 === target) {
          shape = e2.getAttributeNS(null, "data-original") || shape;
        }
      } else {
        _log("WARNING: invalid morph to: " + shape);
        shape = false;
      }
    }
    return shape;
  };
  var _populateSmoothData = function _populateSmoothData2(rawPath, tolerance) {
    var j = rawPath.length, limit = 0.2 * (tolerance || 1), smooth, segment, x, y, x2, y2, i, l, a, a2, isSmooth, smoothData;
    while (--j > -1) {
      segment = rawPath[j];
      isSmooth = segment.isSmooth = segment.isSmooth || [0, 0, 0, 0];
      smoothData = segment.smoothData = segment.smoothData || [0, 0, 0, 0];
      isSmooth.length = 4;
      l = segment.length - 2;
      for (i = 6; i < l; i += 6) {
        x = segment[i] - segment[i - 2];
        y = segment[i + 1] - segment[i - 1];
        x2 = segment[i + 2] - segment[i];
        y2 = segment[i + 3] - segment[i + 1];
        a = _atan22(y, x);
        a2 = _atan22(y2, x2);
        smooth = Math.abs(a - a2) < limit;
        if (smooth) {
          smoothData[i - 2] = a;
          smoothData[i + 2] = a2;
          smoothData[i - 1] = _sqrt3(x * x + y * y);
          smoothData[i + 3] = _sqrt3(x2 * x2 + y2 * y2);
        }
        isSmooth.push(smooth, smooth, 0, 0, smooth, smooth);
      }
      if (segment[l] === segment[0] && segment[l + 1] === segment[1]) {
        x = segment[0] - segment[l - 2];
        y = segment[1] - segment[l - 1];
        x2 = segment[2] - segment[0];
        y2 = segment[3] - segment[1];
        a = _atan22(y, x);
        a2 = _atan22(y2, x2);
        if (Math.abs(a - a2) < limit) {
          smoothData[l - 2] = a;
          smoothData[2] = a2;
          smoothData[l - 1] = _sqrt3(x * x + y * y);
          smoothData[3] = _sqrt3(x2 * x2 + y2 * y2);
          isSmooth[l - 2] = isSmooth[l - 1] = true;
        }
      }
    }
    return rawPath;
  };
  var _parseOriginFactors = function _parseOriginFactors2(v) {
    var a = v.trim().split(" "), x = ~v.indexOf("left") ? 0 : ~v.indexOf("right") ? 100 : isNaN(parseFloat(a[0])) ? 50 : parseFloat(a[0]), y = ~v.indexOf("top") ? 0 : ~v.indexOf("bottom") ? 100 : isNaN(parseFloat(a[1])) ? 50 : parseFloat(a[1]);
    return {
      x: x / 100,
      y: y / 100
    };
  };
  var _shortAngle = function _shortAngle2(dif) {
    return dif !== dif % _PI ? dif + (dif < 0 ? _2PI2 : -_2PI2) : dif;
  };
  var _morphMessage = "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.";
  var _tweenRotation = function _tweenRotation2(start, end, i, linkedPT) {
    var so = this._origin, eo = this._eOrigin, dx = start[i] - so.x, dy = start[i + 1] - so.y, d = _sqrt3(dx * dx + dy * dy), sa = _atan22(dy, dx), angleDif, _short;
    dx = end[i] - eo.x;
    dy = end[i + 1] - eo.y;
    angleDif = _atan22(dy, dx) - sa;
    _short = _shortAngle(angleDif);
    if (!linkedPT && _lastLinkedAnchor && Math.abs(_short + _lastLinkedAnchor.ca) < _angleMin) {
      linkedPT = _lastLinkedAnchor;
    }
    return this._anchorPT = _lastLinkedAnchor = {
      _next: this._anchorPT,
      t: start,
      sa,
      //starting angle
      ca: linkedPT && _short * linkedPT.ca < 0 && Math.abs(_short) > _angleMax ? angleDif : _short,
      //change in angle
      sl: d,
      //starting length
      cl: _sqrt3(dx * dx + dy * dy) - d,
      //change in length
      i
    };
  };
  var _initCore15 = function _initCore16(required) {
    gsap8 = _getGSAP13();
    PluginClass = PluginClass || gsap8 && gsap8.plugins.morphSVG;
    if (gsap8 && PluginClass) {
      _toArray8 = gsap8.utils.toArray;
      _doc8 = document;
      PluginClass.prototype._tweenRotation = _tweenRotation;
      _coreInitted9 = 1;
    } else if (required) {
      _log("Please gsap.registerPlugin(MorphSVGPlugin)");
    }
  };
  var MorphSVGPlugin = {
    version: "3.11.3",
    name: "morphSVG",
    rawVars: 1,
    // otherwise "render" would be interpreted as a function-based value.
    register: function register3(core, Plugin) {
      gsap8 = core;
      PluginClass = Plugin;
      _initCore15();
    },
    init: function init6(target, value, tween, index, targets) {
      _coreInitted9 || _initCore15(1);
      if (!value) {
        _log("invalid shape");
        return false;
      }
      _isFunction11(value) && (value = value.call(tween, index, target, targets));
      var type, p, pt, shape, isPoly, shapeIndex, map, startSmooth, endSmooth, start, end, i, j, l, startSeg, endSeg, precompiled, sData, eData, originFactors, useRotation, offset;
      if (typeof value === "string" || value.getBBox || value[0]) {
        value = {
          shape: value
        };
      } else if (typeof value === "object") {
        type = {};
        for (p in value) {
          type[p] = _isFunction11(value[p]) && p !== "render" ? value[p].call(tween, index, target, targets) : value[p];
        }
        value = type;
      }
      var cs = target.nodeType ? window.getComputedStyle(target) : {}, fill = cs.fill + "", fillSafe = !(fill === "none" || (fill.match(_numExp2) || [])[3] === "0" || cs.fillRule === "evenodd"), origins = (value.origin || "50 50").split(",");
      type = (target.nodeName + "").toUpperCase();
      isPoly = type === "POLYLINE" || type === "POLYGON";
      if (type !== "PATH" && !isPoly && !value.prop) {
        _log("Cannot morph a <" + type + "> element. " + _morphMessage);
        return false;
      }
      p = type === "PATH" ? "d" : "points";
      if (!value.prop && !_isFunction11(target.setAttribute)) {
        return false;
      }
      shape = _parseShape(value.shape || value.d || value.points || "", p === "d", target);
      if (isPoly && _commands.test(shape)) {
        _log("A <" + type + "> cannot accept path data. " + _morphMessage);
        return false;
      }
      shapeIndex = value.shapeIndex || value.shapeIndex === 0 ? value.shapeIndex : "auto";
      map = value.map || MorphSVGPlugin.defaultMap;
      this._prop = value.prop;
      this._render = value.render || MorphSVGPlugin.defaultRender;
      this._apply = "updateTarget" in value ? value.updateTarget : MorphSVGPlugin.defaultUpdateTarget;
      this._rnd = Math.pow(10, isNaN(value.precision) ? 2 : +value.precision);
      this._tween = tween;
      if (shape) {
        this._target = target;
        precompiled = typeof value.precompile === "object";
        start = this._prop ? target[this._prop] : target.getAttribute(p);
        if (!this._prop && !target.getAttributeNS(null, "data-original")) {
          target.setAttributeNS(null, "data-original", start);
        }
        if (p === "d" || this._prop) {
          start = stringToRawPath(precompiled ? value.precompile[0] : start);
          end = stringToRawPath(precompiled ? value.precompile[1] : shape);
          if (!precompiled && !_equalizeSegmentQuantity(start, end, shapeIndex, map, fillSafe)) {
            return false;
          }
          if (value.precompile === "log" || value.precompile === true) {
            _log('precompile:["' + rawPathToString(start) + '","' + rawPathToString(end) + '"]');
          }
          useRotation = (value.type || MorphSVGPlugin.defaultType) !== "linear";
          if (useRotation) {
            start = _populateSmoothData(start, value.smoothTolerance);
            end = _populateSmoothData(end, value.smoothTolerance);
            if (!start.size) {
              _getTotalSize(start);
            }
            if (!end.size) {
              _getTotalSize(end);
            }
            originFactors = _parseOriginFactors(origins[0]);
            this._origin = start.origin = {
              x: start.left + originFactors.x * start.width,
              y: start.top + originFactors.y * start.height
            };
            if (origins[1]) {
              originFactors = _parseOriginFactors(origins[1]);
            }
            this._eOrigin = {
              x: end.left + originFactors.x * end.width,
              y: end.top + originFactors.y * end.height
            };
          }
          this._rawPath = target._gsRawPath = start;
          j = start.length;
          while (--j > -1) {
            startSeg = start[j];
            endSeg = end[j];
            startSmooth = startSeg.isSmooth || [];
            endSmooth = endSeg.isSmooth || [];
            l = startSeg.length;
            _lastLinkedAnchor = 0;
            for (i = 0; i < l; i += 2) {
              if (endSeg[i] !== startSeg[i] || endSeg[i + 1] !== startSeg[i + 1]) {
                if (useRotation) {
                  if (startSmooth[i] && endSmooth[i]) {
                    sData = startSeg.smoothData;
                    eData = endSeg.smoothData;
                    offset = i + (i === l - 4 ? 7 - l : 5);
                    this._controlPT = {
                      _next: this._controlPT,
                      i,
                      j,
                      l1s: sData[i + 1],
                      l1c: eData[i + 1] - sData[i + 1],
                      l2s: sData[offset],
                      l2c: eData[offset] - sData[offset]
                    };
                    pt = this._tweenRotation(startSeg, endSeg, i + 2);
                    this._tweenRotation(startSeg, endSeg, i, pt);
                    this._tweenRotation(startSeg, endSeg, offset - 1, pt);
                    i += 4;
                  } else {
                    this._tweenRotation(startSeg, endSeg, i);
                  }
                } else {
                  pt = this.add(startSeg, i, startSeg[i], endSeg[i], 0, 0, 0, 0, 0, 1);
                  pt = this.add(startSeg, i + 1, startSeg[i + 1], endSeg[i + 1], 0, 0, 0, 0, 0, 1) || pt;
                }
              }
            }
          }
        } else {
          pt = this.add(target, "setAttribute", target.getAttribute(p) + "", shape + "", index, targets, 0, _buildPointsFilter(shapeIndex), p);
        }
        if (useRotation) {
          this.add(this._origin, "x", this._origin.x, this._eOrigin.x, 0, 0, 0, 0, 0, 1);
          pt = this.add(this._origin, "y", this._origin.y, this._eOrigin.y, 0, 0, 0, 0, 0, 1);
        }
        if (pt) {
          this._props.push("morphSVG");
          pt.end = shape;
          pt.endProp = p;
        }
      }
      return _bonusValidated3;
    },
    render: function render5(ratio, data) {
      var rawPath = data._rawPath, controlPT = data._controlPT, anchorPT = data._anchorPT, rnd = data._rnd, target = data._target, pt = data._pt, s, space, easeInOut, segment, l, angle, i, j, x, y, sin, cos, offset;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      if (ratio === 1 && data._apply) {
        pt = data._pt;
        while (pt) {
          if (pt.end) {
            if (data._prop) {
              target[data._prop] = pt.end;
            } else {
              target.setAttribute(pt.endProp, pt.end);
            }
          }
          pt = pt._next;
        }
      } else if (rawPath) {
        while (anchorPT) {
          angle = anchorPT.sa + ratio * anchorPT.ca;
          l = anchorPT.sl + ratio * anchorPT.cl;
          anchorPT.t[anchorPT.i] = data._origin.x + _cos3(angle) * l;
          anchorPT.t[anchorPT.i + 1] = data._origin.y + _sin3(angle) * l;
          anchorPT = anchorPT._next;
        }
        easeInOut = ratio < 0.5 ? 2 * ratio * ratio : (4 - 2 * ratio) * ratio - 1;
        while (controlPT) {
          i = controlPT.i;
          segment = rawPath[controlPT.j];
          offset = i + (i === segment.length - 4 ? 7 - segment.length : 5);
          angle = _atan22(segment[offset] - segment[i + 1], segment[offset - 1] - segment[i]);
          sin = _sin3(angle);
          cos = _cos3(angle);
          x = segment[i + 2];
          y = segment[i + 3];
          l = controlPT.l1s + easeInOut * controlPT.l1c;
          segment[i] = x - cos * l;
          segment[i + 1] = y - sin * l;
          l = controlPT.l2s + easeInOut * controlPT.l2c;
          segment[offset - 1] = x + cos * l;
          segment[offset] = y + sin * l;
          controlPT = controlPT._next;
        }
        target._gsRawPath = rawPath;
        if (data._apply) {
          s = "";
          space = " ";
          for (j = 0; j < rawPath.length; j++) {
            segment = rawPath[j];
            l = segment.length;
            s += "M" + (segment[0] * rnd | 0) / rnd + space + (segment[1] * rnd | 0) / rnd + " C";
            for (i = 2; i < l; i++) {
              s += (segment[i] * rnd | 0) / rnd + space;
            }
          }
          if (data._prop) {
            target[data._prop] = s;
          } else {
            target.setAttribute("d", s);
          }
        }
      }
      data._render && rawPath && data._render.call(data._tween, rawPath, target);
    },
    kill: function kill2(property) {
      this._pt = this._rawPath = 0;
    },
    getRawPath,
    stringToRawPath,
    rawPathToString,
    normalizeStrings: function normalizeStrings(shape1, shape2, _ref) {
      var shapeIndex = _ref.shapeIndex, map = _ref.map;
      var result = [shape1, shape2];
      _pathFilter(result, shapeIndex, map);
      return result;
    },
    pathFilter: _pathFilter,
    pointsFilter: _pointsFilter,
    getTotalSize: _getTotalSize,
    equalizeSegmentQuantity: _equalizeSegmentQuantity,
    convertToPath: function convertToPath2(targets, swap) {
      return _toArray8(targets).map(function(target) {
        return convertToPath(target, swap !== false);
      });
    },
    defaultType: "linear",
    defaultUpdateTarget: true,
    defaultMap: "size"
  };
  _getGSAP13() && gsap8.registerPlugin(MorphSVGPlugin);

  // src/components/accordianList.ts
  gsapWithCSS.registerPlugin(MorphSVGPlugin);
  var services = [...document.querySelectorAll(".home-services_item")];
  var servicesImages = [...document.querySelectorAll(".home-services_image")];
  var docStyle = getComputedStyle(document.documentElement);
  var initAccordian = () => {
    const morphSVGData = document.querySelector(".home-services_svg-data");
    gsapWithCSS.set(morphSVGData, { display: "none" });
    for (let i = 0; i < services.length; i++) {
      const temp = services[i];
      const hidenContent = temp.children[1];
      const hideButtons = temp.children[2];
      gsapWithCSS.set(hidenContent, { height: "0", display: "none" });
      gsapWithCSS.set(hideButtons, { display: "none", opacity: 0 });
    }
    for (let i = 0; i < servicesImages.length; i++) {
      const temp = servicesImages[i];
      if (i > 0) {
        gsapWithCSS.set(temp, { opacity: 0, display: "none" });
      }
    }
  };
  var accordianList = () => {
    initAccordian();
    accordianImageHover();
    const services3 = [...document.querySelectorAll(".home-services_item")];
    for (let i = 0; i < services3.length; i++) {
      let isOpen = false;
      const temp = services3[i];
      temp.dataset.test = String(i);
      temp.addEventListener("click", (e2) => {
        const target = e2.target;
        if (target.matches(".button") === false) {
          if (isOpen === false) {
            accordianOpen(target);
          } else if (isOpen === true) {
            accordianClose(target);
          }
          isOpen = !isOpen;
        }
      });
      setTimeout(() => {
        const svgData = getSVGPathData();
        const kBase = svgData[0];
        const kPoints = svgData[1];
        const hBase = svgData[2];
        const hPoints = svgData[3];
        const hideElement = svgData[4];
        temp.addEventListener("mouseenter", (e2) => {
          const ele = e2.target;
          const eleId = Number(ele.dataset.test);
          const toKPoints = kPoints[eleId];
          const toHPoints = hPoints[eleId];
          console.log("mouse enter");
          gsapWithCSS.to(kBase, { morphSVG: { shape: toKPoints }, ease: "Power4.out" });
          gsapWithCSS.to(hBase, { morphSVG: { shape: toHPoints }, ease: "Power4.out" });
          if (eleId === 0) {
            gsapWithCSS.to(hideElement, { opacity: 1, ease: "power4.out" });
          }
        });
        temp.addEventListener("mouseleave", (e2) => {
          const ele = e2.target;
          const eleId = Number(ele.dataset.test);
          if (eleId === 0) {
            gsapWithCSS.to(hideElement, { opacity: 0, ease: "power4.out" });
          }
        });
      }, 500);
    }
  };
  var accordianOpen = (element) => {
    const hiddenContent = element.children[1];
    const buttonWrap = element.children[2];
    const sectionCarrot = element.querySelector(".home-services_carrot-icon");
    const animation = gsapWithCSS.timeline();
    animation.set([hiddenContent, buttonWrap], { display: "flex", opacity: 0 });
    animation.to([hiddenContent, buttonWrap], {
      duration: 1,
      height: "auto",
      opacity: 1,
      ease: "power4.out"
    });
    animation.to(
      sectionCarrot,
      {
        duration: 1,
        rotate: 60,
        backgroundColor: docStyle.getPropertyValue("--brand-green"),
        ease: "power4.out"
      },
      "<"
    );
  };
  var accordianClose = (element) => {
    const hiddenContent = element.children[1];
    const buttonWrap = element.children[2];
    const sectionCarrot = element.querySelector(".home-services_carrot-icon");
    const animation = gsapWithCSS.timeline();
    animation.to([hiddenContent, buttonWrap], {
      duration: 1,
      height: "0",
      opacity: 0,
      ease: "power4.out"
    });
    animation.to(
      sectionCarrot,
      {
        duration: 1,
        rotate: 0,
        backgroundColor: docStyle.getPropertyValue("--brand-red"),
        ease: "power4.out"
      },
      "<"
    );
    animation.set([hiddenContent, buttonWrap], { display: "none" });
  };
  var accordianImageHover = () => {
    const device12 = getDeviceType();
    if (device12 === "desktop") {
      const scale = 0.08;
      const servicesContainer = document.querySelector(".section_home-services");
      const serviceImageMask = document.querySelector(".home-services_sticky-wrap");
      servicesContainer.addEventListener("mousemove", (e2) => {
        gsapWithCSS.to(serviceImageMask, { x: e2.clientX * 0.02, y: e2.clientY * scale, ease: "power4.out" });
      });
    }
  };

  // src/components/featuredWork.ts
  init_live_reload();
  init_cursorMotion();

  // src/motion/featuredWorkMotion.ts
  init_live_reload();
  init_gsap();
  gsapWithCSS.registerPlugin(SplitText);
  var pInfoParent = [...document.querySelectorAll(".home-featured_info-item")];
  var pInfoItem = [...document.querySelectorAll(".home-featured_item-wrap")];
  var pNumbers = [...document.querySelectorAll(".home-featured_number")];
  var initSliderContent = () => {
    for (let i = 0; i < pInfoParent.length; i++) {
      const parentTemp = pInfoParent[i];
      const itemTemp = pInfoItem[i];
      const numberTemp = pNumbers[i];
      numberTemp.innerHTML = "0" + (i + 1);
      if (i > 0) {
        gsapWithCSS.set(parentTemp, { display: "none" });
        gsapWithCSS.set(itemTemp, { y: "100%", opacity: 0 });
      }
    }
  };
  var showNextContent = (curIndex, prevIndex) => {
    const curParent = pInfoParent[curIndex];
    const prevParent = pInfoParent[prevIndex];
    const curItem = pInfoItem[curIndex];
    const prevItem = pInfoItem[prevIndex];
    const animation = gsapWithCSS.timeline();
    animation.set(curParent, { display: "flex" });
    animation.to(curItem, { duration: 0.8, opacity: 1, y: "0%", ease: "power4.inOut" });
    animation.to(
      prevItem,
      {
        duration: 0.8,
        opacity: 0,
        y: "-100%",
        ease: "power4.inOut"
      },
      "<"
    );
    animation.set(prevItem, { y: "100%" });
    animation.set(prevParent, { display: "none" });
  };
  var showPrevContent = (curIndex, prevIndex) => {
    const curParent = pInfoParent[curIndex];
    const prevParent = pInfoParent[prevIndex];
    const curItem = pInfoItem[curIndex];
    const prevItem = pInfoItem[prevIndex];
    const animation = gsapWithCSS.timeline();
    animation.set(curParent, { display: "flex" });
    animation.set(curItem, { y: "-100%" });
    animation.to(curItem, { duration: 0.8, opacity: 1, y: "0%", ease: "power4.inOut" });
    animation.to(
      prevItem,
      {
        duration: 0.8,
        opacity: 0,
        y: "100%",
        ease: "power4.inOut"
      },
      "<"
    );
    animation.set(prevParent, { display: "none" });
  };
  var viewMoreHoverIn = (element) => {
    const linkIcon = element.children[1];
    const animation = gsapWithCSS.timeline();
    animation.to(linkIcon, { duration: 1, scale: 0.8, rotate: "45deg", ease: "expo.inOut" }, "<");
  };
  var viewMoreHoverOut = (element) => {
    const linkIcon = element.children[1];
    const animation = gsapWithCSS.timeline();
    animation.to(linkIcon, { duration: 1, scale: 1, rotate: "0deg", ease: "expo.inOut" }, "<");
  };

  // src/components/featuredWork.ts
  var featuredWork = () => {
    const featuredWrap = document.querySelector(".home-featured_cursor-wrap");
    const wrapperWidth = featuredWrap.offsetWidth;
    let curCursorType = "next";
    featuredWrap.addEventListener("mouseenter", (e2) => {
      const mouseX = e2.pageX;
      if (mouseX <= wrapperWidth / 2) {
        curCursorType = "prev";
      } else {
        curCursorType = "next";
      }
      cursorArrowSliderChange(curCursorType);
    });
    featuredWrap.addEventListener("mouseleave", () => {
      cursorIconReset();
    });
    featuredWrap.addEventListener("mousemove", (e2) => {
      const mouseX = e2.pageX;
      const mouseYMovement = e2.movementY;
      let setCursor = "default";
      if (mouseX <= wrapperWidth / 2) {
        setCursor = "rotate";
        if (setCursor !== curCursorType) {
          curCursorType = setCursor;
          cursorArrowSliderChange(curCursorType);
        }
      } else {
        const setCursor2 = "default";
        if (setCursor2 !== curCursorType) {
          curCursorType = setCursor2;
          cursorArrowSliderChange(curCursorType);
        }
      }
      cursorArrowYMovement(setCursor, mouseYMovement);
    });
    let curIndex = 0;
    let prevIndex = 0;
    const countIndex = [...document.querySelectorAll(".home-featured_image-item")].length;
    initSliderContent();
    initSliderImages();
    featuredWrap.addEventListener("click", (e2) => {
      const clickX = e2.pageX;
      if (clickX <= wrapperWidth / 2) {
        curIndex -= 1;
        prevIndex = curIndex + 1;
        if (curIndex < 0) {
          curIndex = countIndex - 1;
        }
        showPrevImage(curIndex, prevIndex);
        showPrevContent(curIndex, prevIndex);
      } else {
        curIndex += 1;
        prevIndex = curIndex - 1;
        if (curIndex > countIndex - 1) {
          curIndex = 0;
        }
        showNextImage(curIndex, prevIndex);
        showNextContent(curIndex, prevIndex);
      }
    });
    const largeTextLink = document.querySelector(".text-link_large");
    largeTextLink.addEventListener("mouseenter", (e2) => {
      const target = e2.target;
      viewMoreHoverIn(target);
    });
    largeTextLink.addEventListener("mouseleave", (e2) => {
      const target = e2.target;
      viewMoreHoverOut(target);
    });
  };

  // src/pages/home.ts
  init_videoPlayer();

  // src/motion/homeMotion.ts
  init_live_reload();
  init_getDevice();
  init_gsap();
  gsapWithCSS.registerPlugin(SplitText, InertiaPlugin2);
  var heroScroll = () => {
    const prodcutionScene = document.querySelector(
      ".home-hero_3d-embed.is-production"
    );
    const designerScene = document.querySelector(".home-hero_3d-embed.is-designer");
    designerScene.classList.add("hide");
    prodcutionScene.classList.remove("hide");
    const heroParent = document.querySelector(".section_home-hero");
    const maskedComponent = heroParent.querySelector(".home-hero_masked-component");
    const scrolledComponent = heroParent.querySelector(".home-hero_scrolled");
    const scrollSections = [...heroParent.querySelectorAll(".home-hero_sizing-wrap")];
    const heroMainComponent = heroParent.querySelector(".home-hero_main-component");
    const maskElement = maskedComponent.querySelector(".home-hero_bg-mask");
    const heroMaskText = maskedComponent.querySelector(".home-hero_text-track");
    const heroIconWrap = maskedComponent.querySelector(".home-hero_indicator");
    const heroIcon = maskedComponent.querySelector(".hero-scrolled_indicator-wrap");
    const heroBgText = scrolledComponent.querySelector(".home-hero_text-track");
    let setWidth = "40%";
    let setHeight = "80%";
    let setCornerRadius = "50vw 50vw 4rem 4rem";
    const device12 = getDeviceType();
    if (device12 === "tablet") {
      setWidth = "80%";
      setHeight = "80%";
      setCornerRadius = "3rem 3rem 3rem 3rem";
    } else if (device12 === "mobile") {
      setWidth = "75%";
      setHeight = "50%";
      setCornerRadius = "2rem 2rem 2rem 2rem";
    }
    gsapWithCSS.set(heroMainComponent, { zIndex: 2 });
    const stMain = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: scrollSections[0],
        start: "5% top",
        end: "bottom top",
        // markers: true,
        toggleActions: "play none none reverse",
        scrub: 1,
        onLeave: () => {
          gsapWithCSS.to(heroMaskText, { duration: 1, opacity: 1, ease: "power4.out" });
        },
        onEnterBack: () => {
          gsapWithCSS.to(heroMaskText, { duration: 1, opacity: 0, ease: "power4.out" });
        }
      }
    });
    stMain.to(maskElement, {
      width: setWidth,
      height: setHeight,
      bottom: 0,
      borderRadius: setCornerRadius,
      ease: "linear"
    });
    stMain.to(heroMainComponent, { opacity: 0, ease: "power4.out" }, "<");
    stMain.to(heroIconWrap, { bottom: "7%", opacity: 1, ease: "linear" }, "<");
    stMain.to(heroIcon, { width: "4rem", height: "4rem", padding: "1rem" }, "<");
    const textScrollAniamtion = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: scrollSections[2],
        start: "top top",
        end: "bottom top",
        // markers: true,
        toggleActions: "play none none reverse",
        scrub: 1
      }
    });
    textScrollAniamtion.to([heroBgText, heroMaskText], { rotate: "4deg", scale: 1.05 });
  };
  var heroTextMovement = () => {
    const heroSection = document.querySelector(".section_home-hero");
    const maskedTrack = heroSection.querySelector(".home-hero_text-track.is-masked");
    const bgTrack = heroSection.querySelector(".home-hero_text-track.is-bg");
    const maskedChildren = [...maskedTrack.childNodes];
    const bgChildren = [...bgTrack.childNodes];
    const midChildren = [];
    const outChildren = [];
    for (let i = 0; i < 3; i++) {
      const maskedTemp = maskedChildren[i];
      const bgTemp = bgChildren[i];
      if (maskedTemp.classList.contains("is-mid") || bgTemp.classList.contains("is-mid")) {
        midChildren.push(maskedTemp);
        midChildren.push(bgTemp);
      } else {
        outChildren.push(maskedTemp);
        outChildren.push(bgTemp);
      }
    }
    const paddingGlobal = document.querySelector(".padding-global");
    const paddingObject = window.getComputedStyle(paddingGlobal, null).getPropertyValue("padding-left");
    const paddingValue = parseInt(paddingObject);
    const textWidth = bgTrack.scrollWidth;
    const computedMovement = textWidth - textWidth / 3;
    const textSpeed = 35;
    const midAnimation = gsapWithCSS.timeline({
      onComplete: () => {
        midAnimation.restart();
      }
    });
    midAnimation.set(midChildren, { x: -computedMovement - paddingValue });
    midAnimation.to(midChildren, { duration: textSpeed, x: 0, ease: "linear" });
    const outAnimation = gsapWithCSS.timeline({
      onComplete: () => {
        outAnimation.restart();
      }
    });
    outAnimation.to(outChildren, {
      duration: textSpeed,
      x: -computedMovement - paddingValue,
      ease: "linear"
    });
  };
  var scrollTriggerStart5 = "top 70%";
  var scrollTriggerEnd5 = "top 70%";
  var setDuration = 2;
  var setYOffset = "4rem";
  var device6 = getDeviceType();
  if (device6 === "tablet" || device6 === "mobile") {
    setDuration = 1;
    setYOffset = "1rem";
    scrollTriggerStart5 = "top 85%";
    scrollTriggerEnd5 = "top 85%";
  }
  var heroReveal = () => {
    const heroSection = document.querySelector(".section_home-hero");
    const heroHeaders = [...heroSection.querySelectorAll(".home-hero_header")];
    const heroOverview = heroSection.querySelector(".home-hero_description");
    const hero3D = heroSection.querySelector(".home-hero_3d-embed.is-production");
    const animation = gsapWithCSS.timeline();
    animation.from(heroHeaders, {
      delay: 2,
      duration: 1,
      opacity: 0,
      y: "2rem",
      stagger: 0.1,
      ease: "power4.inOut"
    });
    animation.from(heroOverview, { duration: 1.3, y: "2rem", opacity: 0, ease: "power4.inOut" }, "<");
    animation.from(hero3D, { duration: 1.3, y: "2rem", opacity: 0, ease: "power3.inOut" }, "<");
  };
  var overviewReveal = () => {
    const overviewSection = document.querySelector(".section_home-overview");
    const header = overviewSection.querySelector("h2");
    const headerSplit = new SplitText(header, { type: "lines", linesClass: "lines" });
    const textSplitParent = new SplitText(header, {
      type: "words",
      linesClass: "split-text_parent"
    });
    const overviewText = overviewSection.querySelector("p");
    const overviewStamp = overviewSection.querySelector(".text-left_image");
    const overviewTexture = overviewSection.querySelector(".home-overview_texture-overlay");
    const overviewLabel = overviewSection.querySelector(".module_label-container");
    const overviewVideo = overviewSection.querySelector(".home-overview_video-embed");
    const overviewAwards = [...overviewSection.querySelectorAll(".about-awards_item")];
    const animation = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: overviewSection,
        start: scrollTriggerStart5,
        end: scrollTriggerEnd5
        // markers: true,
      },
      onComplete: () => {
        textSplitParent.revert();
        headerSplit.revert();
      }
    });
    animation.from(overviewLabel, {
      duration: setDuration,
      opacity: 0,
      ease: "power4.out"
    });
    animation.from(overviewTexture, { opacity: 0, duration: 2 }, "<");
    animation.from(
      overviewText,
      { duration: setDuration, y: setYOffset, opacity: 0, ease: "power4.out" },
      "<"
    );
    animation.from(
      overviewStamp,
      { duration: setDuration, opacity: 0, scale: 1.2, ease: "power4.out" },
      "<"
    );
    animation.from(
      headerSplit.lines,
      {
        duration: 1,
        opacity: 0,
        stagger: 0.1,
        y: "2rem",
        ease: "power4.out"
      },
      "<"
    );
    animation.from(
      overviewAwards,
      { duration: 1, opacity: 0, y: setYOffset, stagger: 0.2, ease: "power4.out" },
      "<0.8"
    );
    animation.from(
      overviewVideo,
      {
        duration: setDuration,
        y: setYOffset,
        opacity: 0,
        ease: "power4.out"
      },
      "<0.2"
    );
  };
  var featuredReveal = () => {
    const featuredSection = document.querySelector(".section_home-featured");
    const featuedContent = featuredSection.querySelector(".home-featured_item-wrap");
    const animation = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: featuredSection,
        start: "top 10%",
        end: "top 10%"
        // toggleActions: 'play none none reverse',
        // markers: { startColor: 'green', endColor: 'olive' },
      }
    });
    animation.from(featuedContent, {
      duration: 1,
      opacity: 0,
      y: "100%",
      ease: "power4.out"
    });
  };
  var servicesReveal = () => {
    const servicesSection = document.querySelector(".section_home-services");
    const servicesLabel = servicesSection.querySelector(".module_label-container");
    const servicesOverview = servicesSection.querySelector("p");
    const servicesImageMask = servicesSection.querySelector(".home-services_image-mask");
    const serviceItems = [...servicesSection.querySelectorAll(".home-services_item")];
    const animation = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: servicesSection,
        start: scrollTriggerStart5,
        end: scrollTriggerEnd5
        // markers: true,
        // toggleActions: 'play none none reverse',
      }
    });
    animation.from(servicesLabel, { duration: 2, opacity: 0, ease: "power4.out" });
    animation.from(
      servicesImageMask,
      { duration: 2, y: "4rem", opacity: 0, ease: "power4.out" },
      "<"
    );
    animation.from(servicesOverview, { duration: 2, y: "4rem", opacity: 0, ease: "power4.out" }, "<");
    animation.from(
      serviceItems,
      { duration: 2, y: "4rem", opacity: 0, stagger: 0.2, ease: "expo.out" },
      "<"
    );
  };
  var focusReveal = () => {
    const focusSection = document.querySelector(".section_home-agency");
    const focusLabel = focusSection.querySelector(".module_label");
    const focusText = focusSection.querySelector("h2");
    const textSplit = new SplitText(focusText, { type: "lines", linesClass: "lineChild" });
    const textSplitParent = new SplitText(focusText, {
      type: "lines",
      linesClass: "split-text_parent"
    });
    const focusParagraph = focusSection.querySelector("p");
    const focusStamp = focusSection.querySelector("img");
    const animation = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: focusSection,
        start: scrollTriggerStart5,
        end: scrollTriggerEnd5
        // markers: true,
        // toggleActions: 'play none none reverse',
      },
      onComplete: () => {
        textSplitParent.revert();
        textSplit.revert();
      }
    });
    animation.from(focusLabel, { duration: 2, opacity: 0, ease: "power4.out" });
    animation.from(
      textSplit.lines,
      {
        duration: 0.8,
        y: "4rem",
        opacity: 0,
        stagger: 0.1,
        ease: "power4.out"
      },
      "<"
    );
    animation.from(
      focusParagraph,
      { duration: 2, opacity: 0, y: "4rem", ease: "power4.out" },
      "<0.4"
    );
    animation.from(focusStamp, { duration: 2, scale: 1.2, opacity: 0, ease: "power4.out" }, "<");
  };

  // src/motion/preloaderMotion.ts
  init_live_reload();
  init_gsap();
  var preloaderMotion = () => {
    const preloaderElement = document.querySelector(".preloader_component");
    const preloaderImage = preloaderElement.querySelector("img");
    const pageTransition2 = document.querySelector(".transition_component");
    const lenisContainer2 = document.querySelector("html");
    const animation = gsapWithCSS.timeline();
    animation.set(lenisContainer2, { height: "100%" });
    animation.set(preloaderElement, { display: "flex", opacity: 1 });
    animation.set(preloaderImage, { opacity: 0, y: "2rem" });
    animation.set(pageTransition2, { display: "none", opacity: 0 });
    animation.to(preloaderImage, {
      delay: 0.4,
      duration: 1,
      y: "0rem",
      opacity: 1,
      ease: "power4.out"
    });
    animation.to(preloaderImage, {
      delay: 0.4,
      duration: 1,
      y: "-2rem",
      opacity: 0,
      ease: "power4.out"
    });
    animation.to(preloaderElement, { duration: 1, opacity: 0, ease: "power4.out" }, "<0.3");
    animation.set(preloaderElement, { display: "none" });
    animation.set(lenisContainer2, { height: "auto" });
  };

  // src/pages/home.ts
  var home = () => {
    preloaderMotion();
    heroReveal();
    heroScroll();
    heroTextMovement();
    overviewReveal();
    videoPlayer();
    horizontalScrollText();
    featuredReveal();
    featuredWork();
    initSVGMorph();
    servicesReveal();
    accordianList();
    focusReveal();
  };

  // src/pages/insightsOverview.ts
  init_live_reload();
  init_cursorMotion();

  // src/motion/insightsOverviewMotion.ts
  init_live_reload();
  init_getDevice();
  init_gsap();
  gsapWithCSS.registerPlugin(SplitText);
  var scrollTriggerStart6 = "top 70%";
  var scrollTriggerEnd6 = "top 70%";
  var device7 = getDeviceType();
  if (device7 === "tablet" || device7 === "mobile") {
    scrollTriggerStart6 = "top 80%";
    scrollTriggerEnd6 = "top 80%";
  }
  var isoRevealAnimation = () => {
    const fixedHeaderSection = document.querySelector(".section_sticky-header");
    const heroSection = document.querySelector(".work-list_module");
    const heroTitle = fixedHeaderSection.querySelector("h1");
    const headerSplit = new SplitText(heroTitle, { type: "lines", linesClass: "lineChild" });
    const textSplitParent = new SplitText(heroTitle, {
      type: "lines",
      linesClass: "split-text_parent"
    });
    const headerOverview = fixedHeaderSection.querySelector("p");
    const overline = heroSection.querySelector(".fixed-header_overline");
    const filterButton = [...document.querySelectorAll(".work-filter_item")];
    const searchInput = document.querySelector("[data-search-input]");
    const workGrid = [...document.querySelectorAll(".insights_wrapper")];
    const animation = gsapWithCSS.timeline({
      onComplete: () => {
        textSplitParent.revert();
        headerSplit.revert();
      }
    });
    animation.from(headerSplit.lines, {
      delay: 1,
      duration: 1,
      y: "4rem",
      opacity: 0,
      stagger: 0.1,
      ease: "power4.inOut"
    });
    animation.from(overline, { duration: 1, width: "0%", ease: "expo.inOut" }, "<");
    animation.from(headerOverview, { duration: 1.5, opacity: 0, ease: "power4.inOut" }, "<");
    animation.from(
      [filterButton, searchInput],
      {
        duration: 1,
        y: "2rem",
        opacity: 0,
        stagger: 0.1,
        ease: "power4.out"
      },
      "<0.2"
    );
    animation.from(
      workGrid,
      {
        duration: 1,
        y: "2rem",
        opacity: 0,
        stagger: { each: 0.1 },
        ease: "power4.out"
      },
      "<0.2"
    );
  };
  var insightHover = () => {
    const items = [...document.querySelectorAll(".insights_item")];
    for (const i in items) {
      const temp = items[i];
      const tempImage = temp.querySelector("img");
      temp.addEventListener("mouseenter", (e2) => {
        const target = e2.target;
        const targetImage = target.querySelector("img");
        const animation = gsapWithCSS.timeline();
        animation.to(targetImage, { scale: 1.1, ease: "power3.out" });
      });
      temp.addEventListener("mouseleave", (e2) => {
        const target = e2.target;
        const targetImage = target.querySelector("img");
        const animation = gsapWithCSS.timeline();
        animation.to(targetImage, { duration: 0.6, scale: 1, ease: "power3.out" });
      });
    }
  };

  // src/utils/filterContentUpdated.ts
  init_live_reload();
  var FilterContent = class {
    activeFilters = [];
    renderQueue = [];
    filterForm;
    masterList;
    filterCheckboxes;
    searchInput;
    initialFilter;
    constructor() {
      this.filterForm = document.querySelector("#filter-form");
      this.masterList = Array.from(document.querySelectorAll("[data-filter-item]"));
      this.filterCheckboxes = Array.from(
        document.querySelectorAll("[data-filter-checkbox]")
      );
      this.searchInput = document.querySelector("[data-search-input]");
      this.initialFilter = this.filterCheckboxes[0].parentElement;
      this.initEventListeners();
    }
    initEventListeners() {
      this.filterForm.addEventListener("submit", (e2) => e2.preventDefault());
      this.filterCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("click", (e2) => this.handleFilterClick(e2));
      });
      this.searchInput.addEventListener("input", (e2) => this.handleSearchInput(e2));
    }
    handleFilterClick(e2) {
      const clickedCheckbox = e2.target;
      const clickedParent = clickedCheckbox.parentElement;
      const clickedSpan = clickedParent.querySelector("span");
      const filterText = clickedSpan?.innerHTML.split(" ")[0] || "";
      this.renderQueue = [...this.masterList];
      if (filterText === "All") {
        this.activeFilters = [];
        this.resetAllCheckboxes();
        this.renderQueue = [...this.masterList];
        this.hideAll();
        filterReveal(this.renderQueue);
        this.updateInitialCheckbox("show");
      } else {
        if (clickedCheckbox.checked) {
          clickedSpan.style.color = "#EEEBE6";
          if (filterText !== "All") {
            this.activeFilters.push(filterText);
            this.renderQueue = this.filterList(this.renderQueue, this.activeFilters);
            this.hideAll();
            filterReveal(this.renderQueue);
            this.updateInitialCheckbox("hide");
          } else {
            this.resetFilters();
          }
        } else {
          clickedSpan.style.color = "#EC2543";
          if (filterText !== "All") {
            this.activeFilters = this.activeFilters.filter((filter) => filter !== filterText);
            if (this.activeFilters.length === 0) {
              this.hideAll();
              filterReveal(this.renderQueue);
              this.updateInitialCheckbox("show");
            } else {
              this.renderQueue = this.filterList(this.renderQueue, this.activeFilters);
              this.hideAll();
              filterReveal(this.renderQueue);
            }
          }
        }
      }
      updateScrollEffect();
    }
    handleSearchInput(e2) {
      const searchTerm = e2.target.value.toLowerCase();
      const filteredList = this.filterList(this.masterList, this.activeFilters);
      const searchResults = this.searchList(filteredList, searchTerm);
      this.renderUpdate(searchResults);
    }
    updateInitialCheckbox(state) {
      const checkboxInput = this.initialFilter.querySelector("input");
      const checkboxText = this.initialFilter.querySelector("span");
      const checkboxBG = this.initialFilter.querySelector(".work-filter_checkbox");
      if (state === "hide") {
        checkboxInput.checked = false;
        checkboxBG.style.backgroundColor = "#EEEBE6";
        checkboxText.style.color = "#EC2543";
      } else {
        checkboxInput.checked = true;
        checkboxBG.style.backgroundColor = "#EC2543";
        checkboxText.style.color = "#EEEBE6";
      }
    }
    resetFilters() {
      this.activeFilters = [];
      this.renderQueue = [...this.masterList];
      this.hideAll();
      filterReveal(this.renderQueue);
      this.resetAllCheckboxes();
    }
    resetAllCheckboxes() {
      this.filterCheckboxes.forEach((checkbox, index) => {
        const parent = checkbox.parentElement;
        const tempContainer = parent.children[0];
        const textElement = parent.querySelector("span");
        if (index !== 0) {
          checkbox.checked = false;
          tempContainer.classList.remove("w--redirected-checked");
          textElement.style.color = "#EC2543";
        }
      });
    }
    renderUpdate(items) {
      this.hideAll();
      items.forEach((item) => {
        item.style.display = "";
        item.classList.remove("hide");
      });
    }
    filterList(items, filters) {
      if (filters.length === 0)
        return items;
      return items.filter((item) => {
        const itemTypes = Array.from(item.querySelectorAll("[data-filter-item-type]"));
        return itemTypes.some((ele) => filters.includes(ele.innerHTML.split(" ")[0]));
      });
    }
    searchList(items, searchTerm) {
      if (!searchTerm)
        return items;
      return items.filter((item) => {
        const itemText = item.textContent?.toLowerCase() || "";
        return itemText.includes(searchTerm);
      });
    }
    hideAll() {
      this.masterList.forEach((item) => {
        item.style.display = "none";
      });
    }
  };
  var filterContentUpdated = () => {
    new FilterContent();
  };

  // src/pages/insightsOverview.ts
  var insights = () => {
    stickyHeader();
    isoRevealAnimation();
    filterContentUpdated();
    insightHover();
    loadContent();
    const cursorArea = document.querySelector(".insights_list");
    cursorArea.addEventListener("mousemove", (e2) => {
      const mouseY = e2.movementY;
      cursorArrowYMovement("default", mouseY);
    });
  };

  // src/pages/insightsTemplate.ts
  init_live_reload();

  // src/motion/insightsTemplateMotion.ts
  init_live_reload();
  init_getDevice();
  init_gsap();
  gsapWithCSS.registerPlugin(SplitText);
  var scrollTriggerStart7 = "top 70%";
  var scrollTriggerEnd7 = "top 70%";
  var device8 = getDeviceType();
  if (device8 === "tablet" || device8 === "mobile") {
    scrollTriggerStart7 = "top 80%";
    scrollTriggerEnd7 = "top 80%";
  }
  var istRevealAnimation = () => {
    const fixedHeaderSection = document.querySelector(".section_sticky-header");
    const heroSection = document.querySelector(".news-hero_component");
    const heroTitle = fixedHeaderSection.querySelector("h1");
    const headerSplit = new SplitText(heroTitle, { type: "lines", linesClass: "lineChild" });
    const textSplitParent = new SplitText(heroTitle, {
      type: "lines",
      linesClass: "split-text_parent"
    });
    const headerOverview = fixedHeaderSection.querySelector(".fixed-head_info-wrap");
    const overline = heroSection.querySelector(".fixed-header_overline");
    const heroContent = heroSection.querySelector(".news_featured-wrap");
    const richText = document.querySelector(".news-overview_text");
    const animation = gsapWithCSS.timeline({
      onComplete: () => {
        textSplitParent.revert();
        headerSplit.revert();
      }
    });
    animation.from(headerSplit.lines, {
      delay: 1,
      duration: 1,
      y: "4rem",
      opacity: 0,
      stagger: 0.1,
      ease: "power4.inOut"
    });
    animation.from(overline, { duration: 1, width: "0%", ease: "expo.inOut" }, "<");
    animation.from(headerOverview, { duration: 1.5, opacity: 0, ease: "power4.inOut" }, "<");
    animation.from(
      heroContent,
      {
        duration: 1,
        y: "2rem",
        opacity: 0,
        ease: "power4.out"
      },
      "<0.6"
    );
    animation.from(richText, { duration: 1, opacity: 0, y: "2rem", ease: "power4.out" }, "<");
  };

  // src/pages/insightsTemplate.ts
  var insightsTemplate = () => {
    mediaSlider();
    istRevealAnimation();
    const shareLinks = [...document.querySelectorAll(".social_text-link")];
    const curUrl = window.location.pathname;
    const subLink = curUrl.split("/")[2];
    for (const i in shareLinks) {
      const temp = shareLinks[i];
      const tempLink = temp.href;
      const insightLink = tempLink + subLink;
      temp.href = insightLink;
    }
  };

  // src/pages/links.ts
  init_live_reload();
  init_videoPlayer();
  init_gsap();
  var links = () => {
    videoPlayer();
    const footer3 = document.querySelector(".footer_component");
    const nav = document.querySelector(".nav-ui_component");
    gsapWithCSS.set([footer3, nav], { display: "none" });
    console.log("LINKS", footer3);
  };

  // src/pages/peopleTemplate.ts
  init_live_reload();

  // src/motion/peopleTemplateMotion.ts
  init_live_reload();
  init_getDevice();
  init_gsap();
  gsapWithCSS.registerPlugin(SplitText);
  var scrollTriggerStart8 = "top 70%";
  var scrollTriggerEnd8 = "top 70%";
  var device9 = getDeviceType();
  if (device9 === "tablet" || device9 === "mobile") {
    scrollTriggerStart8 = "top 80%";
    scrollTriggerEnd8 = "top 80%";
  }
  var peopleRevealAnimation = () => {
    const fixedHeaderSection = document.querySelector(".section_sticky-header");
    const heroSection = document.querySelector(".people_component");
    const heroTitle = fixedHeaderSection.querySelector("h1");
    const headerSplit = new SplitText(heroTitle, { type: "lines", linesClass: "lineChild" });
    const textSplitParent = new SplitText(heroTitle, {
      type: "lines",
      linesClass: "split-text_parent"
    });
    const headerOverview = fixedHeaderSection.querySelector("h2");
    const overline = heroSection.querySelector(".fixed-header_overline");
    const heroContent = heroSection.querySelector(".people_main-wrap");
    const animation = gsapWithCSS.timeline({
      onComplete: () => {
        textSplitParent.revert();
        headerSplit.revert();
      }
    });
    animation.from(headerSplit.lines, {
      delay: 1,
      duration: 1,
      y: "4rem",
      opacity: 0,
      stagger: 0.1,
      ease: "power4.inOut"
    });
    animation.from(overline, { duration: 1, width: 0, ease: "expo.inOut" }, "<");
    animation.from(headerOverview, { duration: 1.5, opacity: 0, ease: "power4.inOut" }, "<");
    animation.from(
      heroContent,
      {
        duration: 1,
        y: "2rem",
        opacity: 0,
        ease: "power4.out"
      },
      "<0.6"
    );
  };

  // src/pages/peopleTemplate.ts
  var peopleTemplate = () => {
    stickyHeader();
    peopleRevealAnimation();
  };

  // src/pages/services.ts
  init_live_reload();

  // src/components/servicesScroll.ts
  init_live_reload();
  init_getDevice();
  init_gsap();
  gsapWithCSS.registerPlugin([SplitText, ScrollToPlugin, ScrollTrigger2]);
  gsapWithCSS.registerPlugin(MorphSVGPlugin);
  var device10 = getDeviceType();
  var servicesScrollEffect = () => {
    const sectionBG = document.querySelector(".section_services");
    const docStyle2 = getComputedStyle(document.documentElement);
    let colorMode = "false";
    const colorPalette = [
      docStyle2.getPropertyValue("--brand-red"),
      docStyle2.getPropertyValue("--dark-orange"),
      docStyle2.getPropertyValue("--orange"),
      docStyle2.getPropertyValue("--brand-blue"),
      docStyle2.getPropertyValue("--brand-green"),
      docStyle2.getPropertyValue("--dark-blue"),
      docStyle2.getPropertyValue("--dark-green")
    ];
    const colorCombos = [
      [
        docStyle2.getPropertyValue("--paper-light"),
        docStyle2.getPropertyValue("--brand-red"),
        docStyle2.getPropertyValue("--paper-light")
      ],
      [
        docStyle2.getPropertyValue("--brand-red"),
        docStyle2.getPropertyValue("--paper-light"),
        docStyle2.getPropertyValue("--dark")
      ],
      [
        docStyle2.getPropertyValue("--orange"),
        docStyle2.getPropertyValue("--paper-light"),
        docStyle2.getPropertyValue("--dark")
      ],
      [
        docStyle2.getPropertyValue("--brand-green"),
        docStyle2.getPropertyValue("--paper-light"),
        docStyle2.getPropertyValue("--dark")
      ]
    ];
    if (device10 === "mobile") {
      if (window.innerWidth > window.innerHeight) {
        const servicesWrapper = document.querySelector(".services_wrapper");
        const sectionHeaders = [...servicesWrapper.querySelectorAll("h2")];
        for (const i in sectionHeaders) {
          const temp = sectionHeaders[i];
          temp.style.fontSize = "4rem";
        }
      }
    }
    setupMarkers();
    if (device10 === "desktop") {
      infoHover();
    }
    setTimeout(() => {
      scrollProgress();
      scrollSVG();
      scrollEffect();
    }, 500);
    function scrollEffect() {
      const sItems = [...document.querySelectorAll(".services_item")];
      const sMarkers = [...document.querySelectorAll(".services_scroll-spacer")].filter(
        (e2) => !e2.classList.contains("hide")
      );
      const splitMain = generateSplitText();
      sMarkers.forEach((marker, i) => {
        const isFirst = i === 0, isLast = i === sMarkers.length - 1;
        gsapWithCSS.set(sItems.slice(1), { opacity: 0, pointerEvents: "none" });
        if (!isFirst) {
          const st = gsapWithCSS.timeline({
            scrollTrigger: {
              trigger: marker,
              start: "top 20%",
              end: "+=100%",
              // markers: true,
              toggleActions: "play complete none reverse",
              preventOverlaps: true
            }
          });
          const outSection = sItems[i - 1];
          const outHeader = splitMain[i - 1][0];
          const outSpan = outSection.querySelector(".span");
          const outDesc = outSection.querySelector(".services-info_description");
          const outButton = outSection.querySelector("a");
          const outInfoParent = outSection.querySelector(".services_info-grid");
          const outInfo = [...outSection.querySelectorAll("li")];
          const inSection = sItems[i];
          const inHeader = splitMain[i][0];
          const inSpan = inSection.querySelector(".span");
          const inDesc = inSection.querySelector(".services-info_description");
          const inButton = inSection.querySelector("a");
          const inInfoParent = inSection.querySelector(".services_info-grid");
          const inInfo = [...inSection.querySelectorAll("li")];
          st.to(outHeader.lines, {
            duration: 1,
            y: "-100%",
            skewX: "15deg",
            skewY: "-4deg",
            perspective: 400,
            opacity: 0,
            stagger: 0.1,
            ease: "power4.inOut"
          });
          st.to(outSpan.parentElement, { duration: 1, y: "-2rem", ease: "power4.inOut" }, "<");
          st.to(outSpan, { duration: 1, x: "100%", ease: "power4.inOut" }, "<");
          st.to(outDesc, { duration: 1, y: "-2rem", opacity: 0, ease: "power4.inOut" }, "<");
          st.to(outButton, { duration: 1, y: "-100%", opacity: 0, ease: "power4.inOut" }, "<");
          st.to(
            outInfo,
            { duration: 1, y: "-2rem", opacity: 0, stagger: 0.1, ease: "power4.inOut" },
            "<"
          );
          st.to(outInfoParent, { duration: 1, opacity: 0, ease: "power4.inOut" }, "<0.2");
          st.to(outSection, { pointerEvents: "none" }, "<0.6");
          st.to(inSection, { opacity: 1, pointerEvents: "auto" }, "<");
          st.from(
            inHeader.lines,
            {
              duration: 1,
              y: "100%",
              skewX: "-15deg",
              skewY: "4deg",
              perspective: 400,
              opacity: 0,
              stagger: 0.1,
              ease: "power4.inOut"
            },
            "<"
          );
          st.from(inSpan.parentElement, { duration: 1, y: "2rem", ease: "power4.inOut" }, "<");
          st.from(inSpan, { duration: 1, x: "-100%", ease: "power4.inOut" }, "<");
          st.from(inDesc, { duration: 1, y: "2rem", opacity: 0, ease: "power4.inOut" }, "<");
          st.from(inButton, { duration: 1, y: "100%", opacity: 0, ease: "power4.inOut" }, "<");
          st.from(
            inInfo,
            { duration: 1, y: "2rem", opacity: 0, stagger: 0.1, ease: "power4.inOut" },
            "<"
          );
          st.from(inInfoParent, { duration: 1, opacity: 0, ease: "power4.inOut" }, "<");
          st.to(outSection, { opacity: 0 });
        }
      });
    }
    function setupMarkers() {
      const sWrapper = document.querySelector(".services_wrapper");
      const sItems = [...document.querySelectorAll(".services_item")];
      const markerWrapper = document.querySelector(".services_scroll-spacers");
      const markerTemplate = document.querySelector(".services_scroll-spacer");
      sWrapper.style.height = String(sWrapper.dataset.nativeSize);
      markerWrapper.style.top = String("-" + sWrapper.dataset.nativeSize);
      colorMode = String(sWrapper.dataset.colorMode);
      for (let i = 0; i < sItems.length; i++) {
        const item = sItems[i];
        item.style.position = "absolute";
        const newMarker = cloneNode(markerTemplate);
        newMarker.classList.remove("hide");
        markerWrapper.appendChild(newMarker);
      }
      if (device10 === "mobile") {
        const servicesWrapper = document.querySelector(".services_wrapper");
        const servicesDescription = [...document.querySelectorAll(".services-info_description")];
        const graphicWrap = document.querySelector(".services_graphic-wrap");
        const morphGraphic = graphicWrap.children[0];
        const sectionInfo = [...document.querySelectorAll(".services_info-cursor-wrap")];
        if (window.innerWidth > window.innerHeight) {
          gsapWithCSS.set(servicesWrapper, { height: "100vh" });
          gsapWithCSS.set(morphGraphic, { width: "25vh" });
          servicesDescription.forEach((i) => {
            gsapWithCSS.set(i, { fontSize: "3.5vh" });
          });
          gsapWithCSS.set(graphicWrap, {
            position: "absolute",
            bottom: "3rem",
            justifyContent: "flex-end",
            alignItems: "flex-end"
          });
          for (const i in sectionInfo) {
            const temp = sectionInfo[i];
            temp.style.display = "none";
          }
        }
      }
    }
    function generateSplitText() {
      const headerParent = [...document.querySelectorAll(".services-info_wrap")];
      const splitHeaders = [];
      for (const i in headerParent) {
        const temp = headerParent[i];
        const tempHeader = temp.querySelector("h2");
        gsapWithCSS.set(tempHeader, { perspective: 100 });
        const gSplit = new SplitText(tempHeader, { linesClass: "lineChild" });
        const gSplitParent = new SplitText(tempHeader, {
          type: "lines",
          linesClass: "split-text_parent"
        });
        splitHeaders.push([gSplit, gSplitParent]);
      }
      return splitHeaders;
    }
    function infoHover() {
      const infoAreas = [...document.querySelectorAll(".services_info-cursor-wrap")];
      for (const i in infoAreas) {
        const temp = infoAreas[i];
        const bounds = temp.getBoundingClientRect();
        const tempBolt = temp.querySelector(".services-info_float-image");
        const boltFill = tempBolt.querySelector(".bolt");
        const cursorRange = bounds.bottom - bounds.top;
        const paletteRange = colorPalette.length;
        const segmentRange = Math.floor(cursorRange / paletteRange);
        temp.addEventListener("mousemove", (e2) => {
          const bounds2 = temp.getBoundingClientRect();
          const cursorY = e2.clientY - bounds2.top;
          gsapWithCSS.to(tempBolt, { y: cursorY, ease: "power2.out" });
          if (cursorY <= segmentRange) {
            gsapWithCSS.to(boltFill, { fill: colorPalette[0], ease: "power2.out" });
          } else if (cursorY > segmentRange && cursorY <= segmentRange * 2) {
            gsapWithCSS.to(boltFill, { fill: colorPalette[1], ease: "power2.out" });
          } else if (cursorY > segmentRange * 2 && cursorY <= segmentRange * 3) {
            gsapWithCSS.to(boltFill, { fill: colorPalette[2], ease: "power2.out" });
          } else if (cursorY > segmentRange * 3 && cursorY <= segmentRange * 4) {
            gsapWithCSS.to(boltFill, { fill: colorPalette[3], ease: "power2.out" });
          } else if (cursorY > segmentRange * 4 && cursorY <= segmentRange * 5) {
            gsapWithCSS.to(boltFill, { fill: colorPalette[4], ease: "power2.out" });
          } else if (cursorY > segmentRange * 5 && cursorY <= segmentRange * 6) {
            gsapWithCSS.to(boltFill, { fill: colorPalette[5], ease: "power2.out" });
          } else if (cursorY > segmentRange * 6 && cursorY <= segmentRange * 7) {
            gsapWithCSS.to(boltFill, { fill: colorPalette[6], ease: "power2.out" });
          }
        });
        temp.addEventListener("mouseenter", () => {
          gsapWithCSS.to(tempBolt, { scale: 1.5 });
        });
        temp.addEventListener("mouseleave", () => {
          gsapWithCSS.to(tempBolt, { scale: 1 });
          gsapWithCSS.to(boltFill, { fill: colorPalette[0], ease: "power2.out" });
        });
      }
    }
    function scrollSVG() {
      const svgData = getSVGPathData();
      const kBase = svgData[0];
      const kPoints = svgData[1];
      const hBase = svgData[2];
      const hPoints = svgData[3];
      const hideElement = svgData[4];
      const sMarkers = [...document.querySelectorAll(".services_scroll-spacer")].filter(
        (e2) => !e2.classList.contains("hide")
      );
      sMarkers.forEach((marker, i) => {
        const isFirst = i === 0;
        const st = gsapWithCSS.timeline({
          scrollTrigger: {
            trigger: marker,
            start: "top 20%",
            end: "+=100%",
            // markers: true,
            toggleActions: "play none none reverse",
            preventOverlaps: true
          }
        });
        if (!isFirst) {
          const inGraphicKPoints = kPoints[i];
          const inGraphicHPoints = hPoints[i];
          st.to(kBase, {
            duration: 1,
            morphSVG: { shape: inGraphicKPoints },
            ease: "power4.out"
          });
          st.to(
            hBase,
            {
              duration: 1,
              morphSVG: { shape: inGraphicHPoints },
              ease: "power4.out"
            },
            "<"
          );
          st.to(hideElement, { opacity: 0, ease: "power4.out" }, "<");
        }
      });
    }
    function scrollProgress() {
      const sMarkers = [...document.querySelectorAll(".services_scroll-spacer")].filter(
        (e2) => !e2.classList.contains("hide")
      );
      const sSpans = [...document.querySelectorAll(".services-info_span-wrap")];
      sMarkers.forEach((marker, i) => {
        const isFirst = i === 0, isLast = i === sMarkers.length - 1;
        const st = gsapWithCSS.timeline({
          scrollTrigger: {
            trigger: marker,
            start: "top 20%",
            end: "+=100%",
            scrub: 1,
            // markers: true,
            onLeave: () => {
              if (!isLast) {
                gsapWithCSS.to(sSpans[i].children[0], { y: st.progress() + 100 + "%" });
              }
            }
          }
        });
        st.to(sSpans[i].children[0], { y: st.progress() + "%", ease: "linear" });
      });
    }
  };
  var scrollToServices = () => {
    const serviceLinks = [...document.querySelectorAll(".services_link-item")];
    const sMarkers = [...document.querySelectorAll(".services_scroll-spacer")].filter((e2) => {
      if (!e2.classList.contains("hide")) {
        return e2;
      }
    });
    for (const i in sMarkers) {
      const tMarker = sMarkers[i];
      const tLink = serviceLinks[i];
      const tag = tLink.children[0].innerHTML.split(" ")[0];
      tMarker.id = tag;
    }
    for (let i = 0; i < serviceLinks.length; i++) {
      const tempLink = serviceLinks[i];
      const matchTag = tempLink.children[0].innerHTML.split(" ")[0];
      tempLink.addEventListener("click", () => {
        gsapWithCSS.to(window, {
          duration: 0.2,
          scrollTo: { y: "#" + matchTag, offsetY: 50 },
          ease: "power4.out"
        });
      });
    }
  };

  // src/motion/servicesMotion.ts
  init_live_reload();
  init_getDevice();
  init_gsap();
  gsapWithCSS.registerPlugin([SplitText, ScrollToPlugin]);
  gsapWithCSS.registerPlugin(MorphSVGPlugin);
  var scrollTriggerStart9 = "top 70%";
  var scrollTriggerEnd9 = "top 70%";
  var device11 = getDeviceType();
  if (device11 === "tablet" || device11 === "mobile") {
    scrollTriggerStart9 = "top 80%";
    scrollTriggerEnd9 = "top 80%";
  }
  var servicesPageReveal = () => {
    const fixedHeaderSection = document.querySelector(".section_sticky-header");
    const heroSection = document.querySelector(".section_services");
    const heroTitle = fixedHeaderSection.querySelector("h1");
    const headerSplit = new SplitText(heroTitle, { type: "lines", linesClass: "lineChild" });
    const textSplitParent = new SplitText(heroTitle, {
      type: "lines",
      linesClass: "split-text_parent"
    });
    const headerOverview = fixedHeaderSection.querySelector("p");
    const overline = heroSection.querySelector(".fixed-header_overline");
    const filterButtons = [...document.querySelectorAll(".services_link-item")];
    const scrollSection2 = heroSection.querySelector(".services_sticky-section");
    const sectionTexture = heroSection.querySelector(".services_scroll-texture");
    const animation = gsapWithCSS.timeline({
      onComplete: () => {
        textSplitParent.revert();
        headerSplit.revert();
      }
    });
    animation.from(headerSplit.lines, {
      delay: 1,
      duration: 1,
      y: "4rem",
      opacity: 0,
      stagger: 0.1,
      ease: "power4.inOut"
    });
    animation.from(overline, { duration: 1, width: "0%", ease: "expo.inOut" }, "<");
    animation.from(headerOverview, { duration: 1, opacity: 0, y: "1rem", ease: "power4.inOut" }, "<");
    animation.from(
      filterButtons,
      {
        duration: 1,
        y: "2rem",
        opacity: 0,
        stagger: 0.1,
        ease: "power4.out"
      },
      "<0.2"
    );
    animation.from(scrollSection2, { duration: 1, opacity: 0, y: "10%", ease: "Power4.out" }, "<");
    animation.from(sectionTexture, { duration: 1.5, opacity: 0, ease: "power4.out" }, "<0.5");
  };
  var servicesOverviewReveal = () => {
    const parentElement = document.querySelector(".section_services-overview");
    const overviewHeader = parentElement.querySelector(".services-overview_header");
    const overviewImageParent = parentElement.querySelector(
      ".services-overview_image-wrap"
    );
    const overviewGridItems = [...parentElement.querySelectorAll(".services-overview_grid-wrap")];
    const animation = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: parentElement,
        start: scrollTriggerStart9,
        end: scrollTriggerEnd9
        // markers: true,
        // toggleActions: 'play none none reverse',
      }
    });
    animation.from(overviewHeader, { duration: 1, opacity: 0, y: "2rem", ease: "power4.out" });
    animation.from(
      overviewImageParent,
      { duration: 1, opacity: 0, y: "2rem", ease: "power4.out" },
      "<0.2"
    );
    animation.from(
      overviewGridItems,
      { duration: 1, opacity: 0, y: "2rem", stagger: 0.1, ease: "power4.out" },
      "<0.5"
    );
  };
  var servicesIndustriesReveal = () => {
    const parentElement = document.querySelector(".section_serivces-industries");
    const overviewHeader = parentElement.querySelector(".services-info_industries-header");
    const overviewSpan = parentElement.querySelector(".span");
    const industriesTags = [...parentElement.querySelectorAll(".serivces-industries_text")];
    const animation = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: parentElement,
        start: scrollTriggerStart9,
        end: scrollTriggerEnd9
        // markers: true,
        // toggleActions: 'play none none reverse',
      }
    });
    animation.from(overviewHeader, { duration: 1, opacity: 0, y: "2rem", ease: "power4.out" });
    animation.from(overviewSpan, { duration: 1, width: 0, ease: "power4.out" }, "<");
    animation.from(
      industriesTags,
      {
        duration: 1,
        opacity: 0,
        y: "2rem",
        // stagger: 0.1,
        ease: "power4.out"
      },
      "<"
    );
  };

  // src/pages/services.ts
  var services2 = () => {
    initSVGMorph();
    servicesScrollEffect();
    scrollToDeepLinks();
    scrollToServices();
    servicesPageReveal();
    servicesOverviewReveal();
    servicesIndustriesReveal();
  };

  // src/pages/terms.ts
  init_live_reload();
  var terms = () => {
  };

  // src/utils/editorCheck.ts
  init_live_reload();
  var editorCheck = () => {
    let isEditor;
    if (Webflow.env("editor") === void 0) {
      isEditor = false;
    } else {
      isEditor = true;
      const body = document.querySelector("body");
      body.style.cursor = "default";
    }
    return isEditor;
  };

  // src/utils/intertiaMovement.ts
  init_live_reload();
  init_getDevice();
  init_gsap();
  gsapWithCSS.registerPlugin(InertiaPlugin2);
  var inertiaMovement = () => {
    const scrollSections = [...document.querySelectorAll("[data-scroll-section]")];
    let movementMuliplier = 5;
    const device12 = getDeviceType();
    if (device12 === "tablet" || device12 === "mobile") {
      movementMuliplier = 3;
    }
    for (const i in scrollSections) {
      const tempSection = scrollSections[i];
      const scrollElements = [...tempSection.querySelectorAll("[data-scroll-speed]")];
      const animation = gsapWithCSS.timeline({
        scrollTrigger: {
          trigger: tempSection,
          start: "top 50%",
          end: "bottom top",
          scrub: true,
          toggleActions: "play none none reverse"
          // markers: {
          //   startColor: 'yellow',
          //   endColor: 'orange',
          // },
        }
      });
      for (const j in scrollElements) {
        const tempElement = scrollElements[j];
        const elementSpeed = Number(tempElement.dataset.scrollSpeed);
        const setSpeed = elementSpeed;
        animation.to(tempElement, { yPercent: setSpeed * movementMuliplier, ease: "none" }, "<");
      }
    }
  };

  // src/utils/loadComponent.ts
  init_live_reload();
  var loadComponent = (selector3, importModule) => {
    const element = document.querySelector(selector3);
    if (element) {
      importModule().then((module) => {
        module.default();
      });
    }
  };

  // src/utils/smoothScroll.ts
  init_live_reload();

  // node_modules/@studio-freight/lenis/dist/lenis.mjs
  init_live_reload();
  function t(t2, e2, i) {
    return Math.max(t2, Math.min(e2, i));
  }
  var Animate = class {
    advance(e2) {
      if (!this.isRunning)
        return;
      let i = false;
      if (this.lerp)
        this.value = (s = this.value, o = this.to, n = 60 * this.lerp, r = e2, function(t2, e3, i2) {
          return (1 - i2) * t2 + i2 * e3;
        }(s, o, 1 - Math.exp(-n * r))), Math.round(this.value) === this.to && (this.value = this.to, i = true);
      else {
        this.currentTime += e2;
        const s2 = t(0, this.currentTime / this.duration, 1);
        i = s2 >= 1;
        const o2 = i ? 1 : this.easing(s2);
        this.value = this.from + (this.to - this.from) * o2;
      }
      var s, o, n, r;
      this.onUpdate?.(this.value, i), i && this.stop();
    }
    stop() {
      this.isRunning = false;
    }
    fromTo(t2, e2, { lerp: i = 0.1, duration: s = 1, easing: o = (t3) => t3, onStart: n, onUpdate: r }) {
      this.from = this.value = t2, this.to = e2, this.lerp = i, this.duration = s, this.easing = o, this.currentTime = 0, this.isRunning = true, n?.(), this.onUpdate = r;
    }
  };
  var Dimensions = class {
    constructor({ wrapper: t2, content: e2, autoResize: i = true, debounce: s = 250 } = {}) {
      this.wrapper = t2, this.content = e2, i && (this.debouncedResize = function(t3, e3) {
        let i2;
        return function() {
          let s2 = arguments, o = this;
          clearTimeout(i2), i2 = setTimeout(function() {
            t3.apply(o, s2);
          }, e3);
        };
      }(this.resize, s), this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, false) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
    }
    destroy() {
      this.wrapperResizeObserver?.disconnect(), this.contentResizeObserver?.disconnect(), window.removeEventListener("resize", this.debouncedResize, false);
    }
    resize = () => {
      this.onWrapperResize(), this.onContentResize();
    };
    onWrapperResize = () => {
      this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
    };
    onContentResize = () => {
      this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth);
    };
    get limit() {
      return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
    }
  };
  var Emitter = class {
    constructor() {
      this.events = {};
    }
    emit(t2, ...e2) {
      let i = this.events[t2] || [];
      for (let t3 = 0, s = i.length; t3 < s; t3++)
        i[t3](...e2);
    }
    on(t2, e2) {
      return this.events[t2]?.push(e2) || (this.events[t2] = [e2]), () => {
        this.events[t2] = this.events[t2]?.filter((t3) => e2 !== t3);
      };
    }
    off(t2, e2) {
      this.events[t2] = this.events[t2]?.filter((t3) => e2 !== t3);
    }
    destroy() {
      this.events = {};
    }
  };
  var e = 100 / 6;
  var VirtualScroll = class {
    constructor(t2, { wheelMultiplier: e2 = 1, touchMultiplier: i = 1 }) {
      this.element = t2, this.wheelMultiplier = e2, this.touchMultiplier = i, this.touchStart = { x: null, y: null }, this.emitter = new Emitter(), window.addEventListener("resize", this.onWindowResize, false), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, { passive: false }), this.element.addEventListener("touchstart", this.onTouchStart, { passive: false }), this.element.addEventListener("touchmove", this.onTouchMove, { passive: false }), this.element.addEventListener("touchend", this.onTouchEnd, { passive: false });
    }
    on(t2, e2) {
      return this.emitter.on(t2, e2);
    }
    destroy() {
      this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, false), this.element.removeEventListener("wheel", this.onWheel, { passive: false }), this.element.removeEventListener("touchstart", this.onTouchStart, { passive: false }), this.element.removeEventListener("touchmove", this.onTouchMove, { passive: false }), this.element.removeEventListener("touchend", this.onTouchEnd, { passive: false });
    }
    onTouchStart = (t2) => {
      const { clientX: e2, clientY: i } = t2.targetTouches ? t2.targetTouches[0] : t2;
      this.touchStart.x = e2, this.touchStart.y = i, this.lastDelta = { x: 0, y: 0 }, this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t2 });
    };
    onTouchMove = (t2) => {
      const { clientX: e2, clientY: i } = t2.targetTouches ? t2.targetTouches[0] : t2, s = -(e2 - this.touchStart.x) * this.touchMultiplier, o = -(i - this.touchStart.y) * this.touchMultiplier;
      this.touchStart.x = e2, this.touchStart.y = i, this.lastDelta = { x: s, y: o }, this.emitter.emit("scroll", { deltaX: s, deltaY: o, event: t2 });
    };
    onTouchEnd = (t2) => {
      this.emitter.emit("scroll", { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: t2 });
    };
    onWheel = (t2) => {
      let { deltaX: i, deltaY: s, deltaMode: o } = t2;
      i *= 1 === o ? e : 2 === o ? this.windowWidth : 1, s *= 1 === o ? e : 2 === o ? this.windowHeight : 1, i *= this.wheelMultiplier, s *= this.wheelMultiplier, this.emitter.emit("scroll", { deltaX: i, deltaY: s, event: t2 });
    };
    onWindowResize = () => {
      this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight;
    };
  };
  var Lenis = class {
    constructor({ wrapper: t2 = window, content: e2 = document.documentElement, wheelEventsTarget: i = t2, eventsTarget: s = i, smoothWheel: o = true, syncTouch: n = false, syncTouchLerp: r = 0.075, touchInertiaMultiplier: l = 35, duration: h, easing: a = (t3) => Math.min(1, 1.001 - Math.pow(2, -10 * t3)), lerp: c = !h && 0.1, infinite: d = false, orientation: p = "vertical", gestureOrientation: u = "vertical", touchMultiplier: m = 1, wheelMultiplier: v = 1, autoResize: g = true, __experimental__naiveDimensions: S = false } = {}) {
      this.__isSmooth = false, this.__isScrolling = false, this.__isStopped = false, this.__isLocked = false, this.onVirtualScroll = ({ deltaX: t3, deltaY: e3, event: i2 }) => {
        if (i2.ctrlKey)
          return;
        const s2 = i2.type.includes("touch"), o2 = i2.type.includes("wheel");
        if (this.options.syncTouch && s2 && "touchstart" === i2.type && !this.isStopped && !this.isLocked)
          return void this.reset();
        const n2 = 0 === t3 && 0 === e3, r2 = "vertical" === this.options.gestureOrientation && 0 === e3 || "horizontal" === this.options.gestureOrientation && 0 === t3;
        if (n2 || r2)
          return;
        let l2 = i2.composedPath();
        if (l2 = l2.slice(0, l2.indexOf(this.rootElement)), l2.find((t4) => {
          var e4, i3, n3, r3, l3;
          return (null === (e4 = t4.hasAttribute) || void 0 === e4 ? void 0 : e4.call(t4, "data-lenis-prevent")) || s2 && (null === (i3 = t4.hasAttribute) || void 0 === i3 ? void 0 : i3.call(t4, "data-lenis-prevent-touch")) || o2 && (null === (n3 = t4.hasAttribute) || void 0 === n3 ? void 0 : n3.call(t4, "data-lenis-prevent-wheel")) || (null === (r3 = t4.classList) || void 0 === r3 ? void 0 : r3.contains("lenis")) && !(null === (l3 = t4.classList) || void 0 === l3 ? void 0 : l3.contains("lenis-stopped"));
        }))
          return;
        if (this.isStopped || this.isLocked)
          return void i2.preventDefault();
        if (this.isSmooth = this.options.syncTouch && s2 || this.options.smoothWheel && o2, !this.isSmooth)
          return this.isScrolling = false, void this.animate.stop();
        i2.preventDefault();
        let h2 = e3;
        "both" === this.options.gestureOrientation ? h2 = Math.abs(e3) > Math.abs(t3) ? e3 : t3 : "horizontal" === this.options.gestureOrientation && (h2 = t3);
        const a2 = s2 && this.options.syncTouch, c2 = s2 && "touchend" === i2.type && Math.abs(h2) > 5;
        c2 && (h2 = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + h2, Object.assign({ programmatic: false }, a2 ? { lerp: c2 ? this.options.syncTouchLerp : 1 } : { lerp: this.options.lerp, duration: this.options.duration, easing: this.options.easing }));
      }, this.onNativeScroll = () => {
        if (!this.__preventNextScrollEvent && !this.isScrolling) {
          const t3 = this.animatedScroll;
          this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.direction = Math.sign(this.animatedScroll - t3), this.emit();
        }
      }, window.lenisVersion = "1.0.42", t2 !== document.documentElement && t2 !== document.body || (t2 = window), this.options = { wrapper: t2, content: e2, wheelEventsTarget: i, eventsTarget: s, smoothWheel: o, syncTouch: n, syncTouchLerp: r, touchInertiaMultiplier: l, duration: h, easing: a, lerp: c, infinite: d, gestureOrientation: u, orientation: p, touchMultiplier: m, wheelMultiplier: v, autoResize: g, __experimental__naiveDimensions: S }, this.animate = new Animate(), this.emitter = new Emitter(), this.dimensions = new Dimensions({ wrapper: t2, content: e2, autoResize: g }), this.toggleClassName("lenis", true), this.velocity = 0, this.isLocked = false, this.isStopped = false, this.isSmooth = n || o, this.isScrolling = false, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, false), this.virtualScroll = new VirtualScroll(s, { touchMultiplier: m, wheelMultiplier: v }), this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    destroy() {
      this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, false), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClassName("lenis", false), this.toggleClassName("lenis-smooth", false), this.toggleClassName("lenis-scrolling", false), this.toggleClassName("lenis-stopped", false), this.toggleClassName("lenis-locked", false);
    }
    on(t2, e2) {
      return this.emitter.on(t2, e2);
    }
    off(t2, e2) {
      return this.emitter.off(t2, e2);
    }
    setScroll(t2) {
      this.isHorizontal ? this.rootElement.scrollLeft = t2 : this.rootElement.scrollTop = t2;
    }
    resize() {
      this.dimensions.resize();
    }
    emit() {
      this.emitter.emit("scroll", this);
    }
    reset() {
      this.isLocked = false, this.isScrolling = false, this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.animate.stop();
    }
    start() {
      this.isStopped && (this.isStopped = false, this.reset());
    }
    stop() {
      this.isStopped || (this.isStopped = true, this.animate.stop(), this.reset());
    }
    raf(t2) {
      const e2 = t2 - (this.time || t2);
      this.time = t2, this.animate.advance(1e-3 * e2);
    }
    scrollTo(e2, { offset: i = 0, immediate: s = false, lock: o = false, duration: n = this.options.duration, easing: r = this.options.easing, lerp: l = !n && this.options.lerp, onComplete: h, force: a = false, programmatic: c = true } = {}) {
      if (!this.isStopped && !this.isLocked || a) {
        if (["top", "left", "start"].includes(e2))
          e2 = 0;
        else if (["bottom", "right", "end"].includes(e2))
          e2 = this.limit;
        else {
          let t2;
          if ("string" == typeof e2 ? t2 = document.querySelector(e2) : (null == e2 ? void 0 : e2.nodeType) && (t2 = e2), t2) {
            if (this.options.wrapper !== window) {
              const t3 = this.options.wrapper.getBoundingClientRect();
              i -= this.isHorizontal ? t3.left : t3.top;
            }
            const s2 = t2.getBoundingClientRect();
            e2 = (this.isHorizontal ? s2.left : s2.top) + this.animatedScroll;
          }
        }
        if ("number" == typeof e2) {
          if (e2 += i, e2 = Math.round(e2), this.options.infinite ? c && (this.targetScroll = this.animatedScroll = this.scroll) : e2 = t(0, e2, this.limit), s)
            return this.animatedScroll = this.targetScroll = e2, this.setScroll(this.scroll), this.reset(), void (null == h || h(this));
          if (!c) {
            if (e2 === this.targetScroll)
              return;
            this.targetScroll = e2;
          }
          this.animate.fromTo(this.animatedScroll, e2, { duration: n, easing: r, lerp: l, onStart: () => {
            o && (this.isLocked = true), this.isScrolling = true;
          }, onUpdate: (t2, e3) => {
            this.isScrolling = true, this.velocity = t2 - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = t2, this.setScroll(this.scroll), c && (this.targetScroll = t2), e3 || this.emit(), e3 && (this.reset(), this.emit(), null == h || h(this), this.__preventNextScrollEvent = true, requestAnimationFrame(() => {
              delete this.__preventNextScrollEvent;
            }));
          } });
        }
      }
    }
    get rootElement() {
      return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
    }
    get limit() {
      return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }
    get isHorizontal() {
      return "horizontal" === this.options.orientation;
    }
    get actualScroll() {
      return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
    }
    get scroll() {
      return this.options.infinite ? (t2 = this.animatedScroll, e2 = this.limit, (t2 % e2 + e2) % e2) : this.animatedScroll;
      var t2, e2;
    }
    get progress() {
      return 0 === this.limit ? 1 : this.scroll / this.limit;
    }
    get isSmooth() {
      return this.__isSmooth;
    }
    set isSmooth(t2) {
      this.__isSmooth !== t2 && (this.__isSmooth = t2, this.toggleClassName("lenis-smooth", t2));
    }
    get isScrolling() {
      return this.__isScrolling;
    }
    set isScrolling(t2) {
      this.__isScrolling !== t2 && (this.__isScrolling = t2, this.toggleClassName("lenis-scrolling", t2));
    }
    get isStopped() {
      return this.__isStopped;
    }
    set isStopped(t2) {
      this.__isStopped !== t2 && (this.__isStopped = t2, this.toggleClassName("lenis-stopped", t2));
    }
    get isLocked() {
      return this.__isLocked;
    }
    set isLocked(t2) {
      this.__isLocked !== t2 && (this.__isLocked = t2, this.toggleClassName("lenis-locked", t2));
    }
    get className() {
      let t2 = "lenis";
      return this.isStopped && (t2 += " lenis-stopped"), this.isLocked && (t2 += " lenis-locked"), this.isScrolling && (t2 += " lenis-scrolling"), this.isSmooth && (t2 += " lenis-smooth"), t2;
    }
    toggleClassName(t2, e2) {
      this.rootElement.classList.toggle(t2, e2), this.emitter.emit("className change", this);
    }
  };

  // src/utils/smoothScroll.ts
  init_gsap();
  gsapWithCSS.registerPlugin(ScrollTrigger2);
  var lenis = new Lenis({
    duration: 1.2,
    easing: (t2) => Math.min(1, 1.001 - Math.pow(90, -2 * t2)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 0.8,
    touchMultiplier: 2,
    infinite: false
  });
  function raf(time) {
    lenis.raf(time);
    ScrollTrigger2.update();
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  var smoothScroll_default = lenis;

  // src/index.ts
  window.Webflow ||= [];
  window.Webflow.push(() => {
    const windowLocation = window.location.pathname;
    const isEditor = editorCheck();
    if (!isEditor) {
      smoothScroll_default.start();
    }
    menu();
    inertiaMovement();
    pageTransition();
    setDeepLinks();
    loadComponent(".inter-map_component", () => Promise.resolve().then(() => (init_interactiveMap(), interactiveMap_exports)));
    loadComponent(".cursor_component", () => Promise.resolve().then(() => (init_cursor(), cursor_exports)));
    loadComponent(".clients_component", () => Promise.resolve().then(() => (init_logoHover(), logoHover_exports)));
    loadComponent(".footer_component", () => Promise.resolve().then(() => (init_footer(), footer_exports)));
    if (windowLocation === "/") {
      home();
    } else if (windowLocation === "/about") {
      about();
    } else if (windowLocation.includes("/services")) {
      services2();
    } else if (windowLocation.includes("/jobs")) {
      careers();
    } else if (windowLocation.includes("/case-studies")) {
      const hasFurtherIndex = windowLocation.substring(13);
      if (hasFurtherIndex === "") {
        caseOverview();
      } else {
        caseTemplate();
      }
    } else if (windowLocation.includes("/insights")) {
      const hasFurtherIndex = windowLocation.substring(14);
      if (hasFurtherIndex === "") {
        insights();
      } else {
        insightsTemplate();
      }
    } else if (windowLocation.includes("/contact")) {
      contact();
    } else if (windowLocation.includes("/terms")) {
      terms();
    } else if (windowLocation.includes("/people")) {
      peopleTemplate();
    } else if (windowLocation.includes("/links")) {
      links();
    }
  });
})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.11.3
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.11.3
   * https://greensock.com
   *
   * Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/utils/strings.js:
  (*!
   * strings: 3.11.3
   * https://greensock.com
   *
   * Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/SplitText.js:
  (*!
   * SplitText: 3.11.3
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/utils/matrix.js:
  (*!
   * matrix 3.11.3
   * https://greensock.com
   *
   * Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Draggable.js:
  (*!
   * Draggable 3.11.3
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   *)

gsap/utils/VelocityTracker.js:
  (*!
   * VelocityTracker: 3.11.3
   * https://greensock.com
   *
   * Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/InertiaPlugin.js:
  (*!
   * InertiaPlugin 3.11.3
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.11.3
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.11.3
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollToPlugin.js:
  (*!
   * ScrollToPlugin 3.11.3
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/utils/paths.js:
  (*!
   * paths 3.11.3
   * https://greensock.com
   *
   * Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/MorphSVGPlugin.js:
  (*!
   * MorphSVGPlugin 3.11.3
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
//# sourceMappingURL=index.js.map
