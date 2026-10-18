/* Placeholder illustrations for items. Swap for real product photos later. */
(function () {
  var S = function (body) {
    return '<svg aria-hidden="true" focusable="false" viewBox="0 0 240 240" preserveAspectRatio="xMidYMid meet">' + body + '</svg>';
  };
  var shadow = function (cy, rx) { return '<ellipse cx="120" cy="' + cy + '" rx="' + rx + '" ry="8" fill="#1B2140" opacity=".1"/>'; };
  var A = {
    console: function (t) { return S(shadow(196, 92) +
      '<polygon points="38,72 58,56 214,56 194,72" fill="' + t + '"/><polygon points="38,72 58,56 214,56 194,72" fill="#fff" opacity=".28"/>' +
      '<polygon points="194,72 214,56 214,176 194,192" fill="' + t + '"/><polygon points="194,72 214,56 214,176 194,192" fill="#000" opacity=".22"/>' +
      '<rect x="38" y="72" width="156" height="120" fill="' + t + '"/><rect x="50" y="84" width="132" height="96" rx="2" fill="#FAFAF8"/>' +
      '<rect x="72" y="104" width="88" height="34" rx="3" fill="#E9E2D6" stroke="#1B2140" stroke-width="1.5"/><rect class="a-cart" x="94" y="99" width="44" height="8" rx="1" fill="#8C1A22"/>' +
      '<rect x="80" y="126" width="16" height="5" rx="1" fill="#8C1A22"/><rect x="136" y="126" width="16" height="5" rx="1" fill="#8C1A22"/>' +
      '<rect x="60" y="148" width="48" height="20" rx="4" fill="#B3202A"/><rect x="124" y="148" width="48" height="20" rx="4" fill="#B3202A"/>' +
      '<path d="M70 158h10M75 153v10M134 158h10M139 153v10" stroke="#1B2140" stroke-width="3" stroke-linecap="round"/>' +
      '<circle class="a-blink" cx="96" cy="158" r="3" fill="#FAFAF8"/><circle class="a-blink b2" cx="160" cy="158" r="3" fill="#FAFAF8"/>'); },
    handheld: function (t) { return S(shadow(204, 66) +
      '<rect x="68" y="34" width="104" height="80" rx="10" fill="' + t + '"/><rect x="80" y="46" width="80" height="56" rx="3" fill="#1B2140"/>' +
      '<path d="M86 52 L118 52 L92 94 L86 94 Z" fill="#fff" opacity=".12"/><rect class="a-glow" x="80" y="46" width="80" height="56" rx="3" fill="#5D6BA8" opacity=".05"/><rect class="a-pixel" x="90" y="70" width="8" height="8" fill="#E8B12E"/><rect x="74" y="114" width="92" height="8" rx="3" fill="#000" opacity=".2"/>' +
      '<rect x="68" y="120" width="104" height="80" rx="10" fill="' + t + '"/><rect x="68" y="120" width="104" height="80" rx="10" fill="#000" opacity=".08"/>' +
      '<rect x="100" y="132" width="40" height="30" rx="2" fill="#2B3352"/><path d="M78 148h14M85 141v14" stroke="#1B2140" stroke-width="5" stroke-linecap="round"/>' +
      '<circle class="a-blink" cx="154" cy="142" r="5" fill="#B3202A"/><circle class="a-blink b2" cx="160" cy="154" r="5" fill="#B3202A"/><rect x="104" y="178" width="32" height="5" rx="2.5" fill="#1B2140" opacity=".5"/>'); },
    tv: function (t) { return S(shadow(204, 84) +
      '<g class="a-antenna"><path d="M108 74 L80 34" stroke="#1B2140" stroke-width="3" stroke-linecap="round"/><circle cx="80" cy="34" r="4" fill="#1B2140"/></g><g class="a-antenna r"><path d="M132 74 L162 30" stroke="#1B2140" stroke-width="3" stroke-linecap="round"/><circle cx="162" cy="30" r="4" fill="#1B2140"/></g>' +
      '<rect x="44" y="72" width="152" height="122" rx="16" fill="' + t + '"/><rect x="58" y="86" width="102" height="92" rx="12" fill="#5D6BA8"/><rect class="a-flicker" x="58" y="86" width="102" height="92" rx="12" fill="#1B2140" opacity=".35"/><rect class="a-scan" x="60" y="88" width="98" height="6" fill="#fff" opacity="0"/>' +
      '<path d="M62 98h94M62 108h94M62 118h94M62 128h94M62 138h94M62 148h94M62 158h94M62 168h94" stroke="#fff" stroke-width="1" opacity=".12"/>' +
      '<path d="M68 94 L104 94 L74 132 L68 132 Z" fill="#fff" opacity=".16"/><circle cx="178" cy="104" r="8" fill="#E8B12E"/><circle cx="178" cy="130" r="8" fill="#E8B12E" opacity=".7"/>' +
      '<rect x="170" y="152" width="16" height="4" rx="2" fill="#fff" opacity=".4"/><rect x="170" y="160" width="16" height="4" rx="2" fill="#fff" opacity=".4"/>'); },
    vcr: function (t) { return S(shadow(190, 100) +
      '<g class="a-tape"><rect x="76" y="62" width="88" height="48" rx="3" fill="#1B2140"/><rect x="88" y="70" width="64" height="12" rx="1" fill="#FAFAF8"/>' +
      '<circle cx="100" cy="97" r="7" fill="#FAFAF8" opacity=".85"/><circle cx="140" cy="97" r="7" fill="#FAFAF8" opacity=".85"/></g>' +
      '<rect x="24" y="116" width="192" height="66" rx="4" fill="' + t + '"/><rect x="24" y="116" width="192" height="10" rx="4" fill="#fff" opacity=".25"/>' +
      '<rect x="40" y="138" width="104" height="10" rx="2" fill="#1B2140"/><rect x="156" y="136" width="46" height="16" rx="2" fill="#1B2140"/><rect class="a-blink" x="162" y="141" width="22" height="6" rx="1" fill="#E8B12E"/>' +
      '<rect x="40" y="160" width="14" height="8" rx="2" fill="#1B2140" opacity=".6"/><rect x="60" y="160" width="14" height="8" rx="2" fill="#1B2140" opacity=".6"/>' +
      '<rect x="80" y="160" width="14" height="8" rx="2" fill="#B3202A"/><rect x="100" y="160" width="14" height="8" rx="2" fill="#1B2140" opacity=".6"/>'); },
    figure: function (t) { return S('<ellipse cx="124" cy="214" rx="66" ry="7" fill="#1B2140" opacity=".1"/>' +
      '<polygon points="174,40 186,32 186,202 174,212" fill="' + t + '"/><polygon points="174,40 186,32 186,202 174,212" fill="#000" opacity=".25"/>' +
      '<rect x="64" y="40" width="110" height="172" rx="3" fill="' + t + '"/><rect x="64" y="40" width="110" height="26" fill="#E8B12E"/>' +
      '<rect x="78" y="76" width="82" height="114" rx="4" fill="#FAFAF8" opacity=".92"/><circle cx="119" cy="102" r="14" fill="#E8C79A"/>' +
      '<path d="M103 96 Q119 78 135 96 Z" fill="#8C1A22"/><rect x="103" y="118" width="32" height="40" rx="7" fill="#B3202A"/>' +
      '<rect x="93" y="122" width="10" height="28" rx="5" fill="#B3202A"/><rect class="a-wave" x="135" y="122" width="10" height="28" rx="5" fill="#B3202A"/>' +
      '<rect x="106" y="156" width="11" height="28" rx="4" fill="#5D6BA8"/><rect x="121" y="156" width="11" height="28" rx="4" fill="#5D6BA8"/>' +
      '<path d="M82 80 L104 80 L84 120 Z" fill="#fff" opacity=".5"/>'); },
    cart: function (t) { return S(shadow(200, 76) +
      '<g class="a-back"><g transform="rotate(-10 140 120)"><rect x="104" y="46" width="84" height="116" rx="6" fill="#8D93A6"/><rect x="116" y="76" width="60" height="64" rx="2" fill="#E8B12E"/></g></g>' +
      '<path d="M60 52 H148 V184 Q148 192 140 192 H68 Q60 192 60 184 Z" fill="' + t + '"/><path d="M60 52 H148 V64 H60 Z" fill="#000" opacity=".2"/>' +
      '<path d="M72 70h64M72 76h64" stroke="#fff" stroke-width="2" opacity=".35"/><rect x="72" y="88" width="64" height="76" rx="2" fill="#FAFAF8"/>' +
      '<rect x="80" y="96" width="48" height="36" rx="1" fill="#5D6BA8"/><circle cx="104" cy="112" r="9" fill="#E8B12E"/>' +
      '<rect x="80" y="140" width="40" height="5" rx="2" fill="#1B2140"/><rect x="80" y="150" width="28" height="5" rx="2" fill="#1B2140" opacity=".5"/>'); },
    pad: function (t) { return S(shadow(184, 90) +
      '<path class="a-cable" d="M120 102 C120 70 150 66 150 40" stroke="#1B2140" stroke-width="4" fill="none" stroke-linecap="round"/>' +
      '<rect x="34" y="100" width="172" height="72" rx="36" fill="' + t + '"/><rect x="34" y="100" width="172" height="20" rx="10" fill="#fff" opacity=".18"/>' +
      '<path d="M60 136h28M74 122v28" stroke="#1B2140" stroke-width="9" stroke-linecap="round"/><circle class="a-blink" cx="160" cy="128" r="9" fill="#B3202A"/><circle class="a-blink b2" cx="180" cy="144" r="9" fill="#E8B12E"/>' +
      '<rect x="104" y="140" width="14" height="6" rx="3" fill="#1B2140" opacity=".55"/><rect x="124" y="140" width="14" height="6" rx="3" fill="#1B2140" opacity=".55"/>'); },
    disc: function (t) { return S(shadow(206, 70) +
      '<g class="a-disc"><circle cx="150" cy="110" r="52" fill="#D9DCE3"/><circle cx="150" cy="110" r="52" fill="none" stroke="#fff" stroke-width="10" opacity=".5"/><path d="M150 62 A48 48 0 0 1 196 98" stroke="#fff" stroke-width="6" fill="none" opacity=".7"/><circle cx="150" cy="110" r="10" fill="#FAFAF8"/></g>' +
      '<rect x="66" y="36" width="100" height="164" rx="4" fill="' + t + '"/><rect x="66" y="36" width="100" height="22" rx="4" fill="#fff" opacity=".2"/>' +
      '<rect x="76" y="66" width="80" height="96" rx="2" fill="#5D6BA8"/><path d="M76 140 L104 104 L124 124 L140 110 L156 132 V162 H76 Z" fill="#1B2140" opacity=".55"/>' +
      '<circle cx="132" cy="86" r="10" fill="#E8B12E"/><rect x="76" y="172" width="54" height="6" rx="3" fill="#fff" opacity=".8"/><rect x="76" y="184" width="34" height="5" rx="2.5" fill="#fff" opacity=".45"/>'); }
  };
  function paint(el) {
    var k = el.getAttribute('data-kind') || 'console';
    var t = el.getAttribute('data-tint') || '#B3202A';
    var bg = el.getAttribute('data-bg');
    if (bg) el.style.background = bg;
    el.innerHTML = (A[k] || A.console)(t);
  }
  window.DarArt = { paint: paint, paintAll: function (root) { (root || document).querySelectorAll('.art[data-kind]').forEach(paint); } };
  window.DarArt.paintAll();
})();
