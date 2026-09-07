/* @ds-bundle: {"format":4,"namespace":"KanshokuDesignSystem_6ded9c","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Label","sourcePath":"components/core/Label.jsx"},{"name":"Progress","sourcePath":"components/core/Progress.jsx"},{"name":"SpeechBubble","sourcePath":"components/core/SpeechBubble.jsx"},{"name":"StickyNote","sourcePath":"components/core/StickyNote.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Button.jsx":"659abdcf6589","components/core/Card.jsx":"0b937b1ae6f6","components/core/Label.jsx":"5a4bdda4d19a","components/core/Progress.jsx":"c38c887e7cf7","components/core/SpeechBubble.jsx":"c341a1687f93","components/core/StickyNote.jsx":"ce41a6fe30e0","components/core/Tag.jsx":"82de5cadc932"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KanshokuDesignSystem_6ded9c = window.KanshokuDesignSystem_6ded9c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kanshoku Button — pill-shaped, rounded, friendly.
 * Variants: primary (navy), accent (coral), secondary (cream outline), ghost.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  full = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: "var(--fs-sm)"
    },
    md: {
      padding: "12px 24px",
      fontSize: "var(--fs-body)"
    },
    lg: {
      padding: "16px 32px",
      fontSize: "var(--fs-lg)"
    }
  };
  const variants = {
    primary: {
      background: "var(--primary)",
      color: "var(--cream)",
      border: "2px solid var(--primary)"
    },
    accent: {
      background: "var(--accent)",
      color: "var(--text-on-coral)",
      border: "2px solid var(--accent)",
      boxShadow: "var(--shadow-coral)"
    },
    secondary: {
      background: "transparent",
      color: "var(--primary)",
      border: "2px solid var(--primary)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-body)",
      border: "2px solid transparent"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      fontFamily: "var(--font-base)",
      fontWeight: "var(--fw-bold)",
      lineHeight: 1,
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      width: full ? "100%" : "auto",
      transition: "transform var(--dur-fast) var(--ease-bite), filter var(--dur-base) var(--ease-out)",
      ...sizes[size],
      ...variants[variant],
      ...style
    },
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = "scale(0.96)"),
    onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.filter = "none";
    },
    onMouseEnter: e => !disabled && (e.currentTarget.style.filter = "brightness(1.06)")
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — rounded warm surface. `pad`, `tone` (white | cream | navy), and
 * `hover` (lift on hover) control it. Compose freely.
 */
function Card({
  children,
  tone = "white",
  pad = "var(--space-5)",
  hover = false,
  style = {},
  ...rest
}) {
  const tones = {
    white: {
      background: "var(--surface-card)",
      color: "var(--text-body)"
    },
    cream: {
      background: "var(--surface-card-warm)",
      color: "var(--text-body)"
    },
    navy: {
      background: "var(--navy)",
      color: "var(--cream)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: "var(--radius-lg)",
      padding: pad,
      boxShadow: "var(--shadow-md)",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      ...tones[tone],
      ...style
    },
    onMouseEnter: e => {
      if (!hover) return;
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
    },
    onMouseLeave: e => {
      if (!hover) return;
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "var(--shadow-md)";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Label — bold rounded-rect callout used on slides and diagrams.
 * Heavier and chunkier than `Tag`. `tone` sets the color; `variant`
 * switches between a filled chip (cream text) and a cream outline chip.
 */
function Label({
  children,
  tone = "navy",
  variant = "solid",
  size = "md",
  style = {},
  ...rest
}) {
  const tones = {
    navy: "var(--navy)",
    coral: "var(--coral)",
    ink: "var(--ink)"
  };
  const c = tones[tone] || tones.navy;
  const solid = variant === "solid";
  const sizes = {
    sm: {
      fontSize: "var(--fs-lg)",
      padding: "8px 16px",
      radius: "11px"
    },
    md: {
      fontSize: "var(--fs-h4)",
      padding: "11px 22px",
      radius: "14px"
    },
    lg: {
      fontSize: "var(--fs-h3)",
      padding: "14px 28px",
      radius: "16px"
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-heavy)",
      fontSize: s.fontSize,
      lineHeight: 1,
      letterSpacing: "var(--ls-normal)",
      padding: s.padding,
      borderRadius: s.radius,
      background: solid ? c : "var(--cream-50)",
      color: solid ? "var(--cream)" : c,
      border: solid ? "3px solid var(--cream)" : "3px solid " + c,
      boxShadow: "var(--shadow-sm)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Label.jsx", error: String((e && e.message) || e) }); }

// components/core/Progress.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Progress meter — the brand's "完食 / clean plate" indicator. Rounded track,
 * coral (or honey) fill. At 100% it reads as "finished the plate".
 */
function Progress({
  value = 0,
  tone = "coral",
  height = 12,
  showLabel = false,
  label,
  style = {},
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  const fills = {
    coral: "var(--coral)",
    honey: "var(--honey)",
    leaf: "var(--leaf)",
    navy: "var(--navy)"
  };
  const done = pct >= 100;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-base)",
      ...style
    }
  }, rest), showLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)",
      marginBottom: "8px"
    }
  }, /*#__PURE__*/React.createElement("span", null, label || "學習進度"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: done ? "var(--leaf)" : "var(--accent)"
    }
  }, done ? "完食 ✓" : `${Math.round(pct)}%`)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: `${height}px`,
      background: "var(--cream-200)",
      borderRadius: "var(--radius-pill)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      background: done ? "var(--leaf)" : fills[tone],
      borderRadius: "var(--radius-pill)",
      transition: "width var(--dur-slow) var(--ease-bite)"
    }
  })));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Progress.jsx", error: String((e && e.message) || e) }); }

// components/core/SpeechBubble.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SpeechBubble — rounded callout balloon with a tail. Used for the mascot's
 * lines, prompts, and questions on slides. `tone` sets fill; `tail` sets the
 * pointer side.
 */
function SpeechBubble({
  children,
  tone = "cream",
  tail = "bottom-right",
  style = {},
  ...rest
}) {
  const tones = {
    cream: {
      bg: "var(--cream-50)",
      fg: "var(--navy)"
    },
    navy: {
      bg: "var(--navy)",
      fg: "var(--cream)"
    },
    coral: {
      bg: "var(--coral)",
      fg: "var(--cream)"
    }
  };
  const t = tones[tone] || tones.cream;
  const tailPos = {
    "bottom-right": {
      right: "38px",
      bottom: "-12px",
      left: "auto"
    },
    "bottom-left": {
      left: "38px",
      bottom: "-12px",
      right: "auto"
    },
    "bottom-center": {
      left: "50%",
      bottom: "-12px",
      marginLeft: "-9px"
    }
  };
  const tp = tailPos[tail] || tailPos["bottom-right"];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      display: "inline-block",
      maxWidth: "520px",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-heavy)",
      fontSize: "var(--fs-h3)",
      lineHeight: "var(--lh-snug)",
      color: t.fg,
      background: t.bg,
      padding: "20px 30px",
      borderRadius: "22px",
      boxShadow: "var(--shadow-md)",
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      width: "20px",
      height: "20px",
      background: t.bg,
      borderRadius: "0 0 5px 0",
      transform: "rotate(45deg)",
      ...tp
    }
  }));
}
Object.assign(__ds_scope, { SpeechBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SpeechBubble.jsx", error: String((e && e.message) || e) }); }

// components/core/StickyNote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StickyNote — a pinned cream memo for "type here" notes and asides on slides.
 * A navy pushpin sits at the top. `tone` sets the paper color.
 */
function StickyNote({
  children,
  tone = "cream",
  pin = true,
  style = {},
  ...rest
}) {
  const tones = {
    cream: {
      bg: "var(--cream)",
      fg: "var(--ink)"
    },
    white: {
      bg: "var(--white)",
      fg: "var(--ink)"
    },
    navy: {
      bg: "var(--navy)",
      fg: "var(--cream)"
    }
  };
  const t = tones[tone] || tones.cream;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      display: "inline-block",
      minWidth: "180px",
      minHeight: "180px",
      boxSizing: "border-box",
      padding: pin ? "48px 26px 26px" : "26px",
      fontFamily: "var(--font-base)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-h4)",
      lineHeight: "var(--lh-snug)",
      color: t.fg,
      background: t.bg,
      borderRadius: "10px",
      boxShadow: "var(--shadow-md)",
      ...style
    }
  }, rest), pin && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "14px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "44px",
      height: "30px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "26px",
      top: "16px",
      width: "5px",
      height: "16px",
      background: "var(--ink-400)",
      borderRadius: "3px",
      transform: "rotate(32deg)",
      transformOrigin: "top center"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "6px",
      top: "0",
      width: "22px",
      height: "22px",
      borderRadius: "50%",
      background: "radial-gradient(circle at 32% 30%, #4a5f93 0%, var(--navy) 55%, var(--navy-900) 100%)",
      boxShadow: "var(--shadow-xs)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "11px",
      top: "4px",
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      background: "rgba(255,255,255,0.85)"
    }
  })), children);
}
Object.assign(__ds_scope, { StickyNote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StickyNote.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag / Badge — small rounded label. `tone` sets the color; `solid` fills it.
 */
function Tag({
  children,
  tone = "navy",
  solid = false,
  style = {},
  ...rest
}) {
  const tones = {
    navy: {
      soft: "#e7ebf3",
      softText: "var(--navy)",
      solid: "var(--navy)"
    },
    coral: {
      soft: "var(--coral-100)",
      softText: "var(--coral-700)",
      solid: "var(--coral)"
    },
    honey: {
      soft: "var(--honey-100)",
      softText: "#8a6510",
      solid: "var(--honey)"
    },
    leaf: {
      soft: "var(--leaf-100)",
      softText: "#347355",
      solid: "var(--leaf)"
    },
    ink: {
      soft: "var(--cream-200)",
      softText: "var(--ink)",
      solid: "var(--ink)"
    }
  };
  const t = tones[tone] || tones.navy;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-base)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-xs)",
      lineHeight: 1,
      padding: "6px 12px",
      borderRadius: "var(--radius-pill)",
      background: solid ? t.solid : t.soft,
      color: solid ? "var(--white)" : t.softText,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.SpeechBubble = __ds_scope.SpeechBubble;

__ds_ns.StickyNote = __ds_scope.StickyNote;

__ds_ns.Tag = __ds_scope.Tag;

})();
