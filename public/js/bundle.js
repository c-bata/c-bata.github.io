!function e(t,n,r){function s(o,l){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!l&&a)return a(o,!0);if(i)return i(o,!0);var h=new Error("Cannot find module '"+o+"'");throw h.code="MODULE_NOT_FOUND",h}var u=n[o]={exports:{}};t[o][0].call(u.exports,function(e){var n=t[o][1][e];return s(n?n:e)},u,u.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var s=e("marked"),i=r(s),o=e("../markdown/links"),l=r(o),a=e("../markdown/about"),h=r(a),u=e("../markdown/development"),p=r(u),c=e("../markdown/research"),g=r(c),d=document.getElementById("content"),f=[{content:l["default"],button:document.getElementById("links")},{content:h["default"],button:document.getElementById("about")},{content:p["default"],button:document.getElementById("development")},{content:g["default"],button:document.getElementById("research")}];f.map(function(e){e.button.addEventListener("click",function(){d.innerHTML=i["default"](e.content)})}),d.innerHTML=i["default"](l["default"])},{"../markdown/about":2,"../markdown/development":3,"../markdown/links":4,"../markdown/research":5,marked:6}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]="\n## 自己紹介\n\n芝田 将\n\n## 所属\n\n- 明石高専 専攻科 1年(2017年度卒業予定)\n- BeProud アルバイト\n- PyCon JP 2015 メディア・スタッフ\n- akashi.py (Python勉強会) 主催\n\nDjangoやFlaskでWebアプリを開発しつつ，研究ではpandasなどPythonを積極的に使ってます。\n出来るだけ作ったものや勉強した内容は公開することを大事にしています。\n",t.exports=n["default"]},{}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]="\n# Development\n\n#### Machine\n\n- Macbook Air 11インチ(2012)\n\n#### Languages\n\n- **Python**\n- JavaScript\n- Java\n- CSS\n- Arduino\n\n\n#### Framework and Libraries\n\n**Python**\n\n- **Django**\n- **Pandas**\n- Flask\n- Bottle\n- SQLAlchemy\n- unittest / pytest\n\n\n**JavaScript**\n\n- **React.js**\n- Babel(ES6)\n- Electron\n- Backbone.js\n- jQuery\n- mocha\n- power-assert/espower-babel\n\n**Java**\n\n- Android\n\n**CSS**\n\n- Sass\n- Compass\n- Twitter Bootstrap\n\n\n#### Infrastructure\n\n- Ansible\n- Vagrant\n- Heroku\n- AWS / EC2\n\n\n#### Others\n\n- Git\n- Mercurial\n- Vim\n- jetbrains IDE\n- Travis CI\n\n",t.exports=n["default"]},{}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]="\n\n## 自己紹介\n\n芝田 将 (Masashi Shibata)\n\nDjangoやFlaskでWebアプリを開発しつつ，研究ではpandasなどPythonを積極的に使ってます。\n出来るだけ作ったものや勉強した内容は公開することを大事にしています。\n\n## 所属\n\n- 明石高専 専攻科 1年(2017年度卒業予定)\n- BeProud アルバイト\n- PyCon JP 2015 メディア・スタッフ\n- akashi.py (Python勉強会) 主催\n\n\n## 執筆歴\n\n- [2014.09 PIN入力認証の実装における一考察 (MEとバイオサイバネティックス)](http://ci.nii.ac.jp/naid/40020225048)\n- [2014.11 スマートフォンにおけるPIN入力認証における閾値決定手法](http://www.ieice.org/ess/biox/sbra2014/)\n- [2015.06 台湾で開催された「PyCon APAC 2015」参加レポート | gihyo.jp 技術評論社](http://gihyo.jp/news/report/01/pycon-apac-2015)\n- [2015.08 PyCon JP 2015の作り方 | gihyo.jp 技術評論社](http://gihyo.jp/dev/serial/01/pycon-jp-2015)\n- [2015.09 PyCon JP 2015 開催前レポート | CodeZine](http://codezine.jp/article/detail/8923)\n\n\n## 受賞歴\n\n- 2014.11 電子情報通信学会第4回バイオメトリクスと認識・認証シンポジウム 優秀ポスター発表賞\n- 2015.03 au Firefox OS WoTハッカソン on ホワイトデー Mozilla賞\n- 2015.09 CyberAgent TechDesignCAMPエンタメ編 優勝\n\n\n## 資格\n\n- TOEIC 620\n\n\n## Social Account\n\na.k.a id: c-bata or `c_bata_`\n\n- Github: [c-bata](http://github.com/c-bata)\n- Twitter: [`@c_bata_`](http://twitter.com/c_bata_)\n- Facebook: [masashi.cbata](http://facebook.com/masashi.cbata)\n- Hatena blog: [c-bata web](http://nwpct1.hatenablog.com)\n- Wantedly: [芝田 将](https://www.wantedly.com/users/3087528)\n- BitBucket: [c-bata](https://bitbucket.org/c-bata/)\n- Email: contact (at) c-bata.link\n\nPlease feel free to contact me !\n\n",t.exports=n["default"]},{}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]="\n# Research\n\nスマートフォンにおけるPIN入力タッチスクリーンバイオメトリクス\n\n- 芝田 将，泉 将之，西村 友佑，佐村 敏治，西村 治彦：\n  スマートフォンを用いたPIN入力認証の実装における一考察，\n  バイオメトリクス研究会，pp77-78，2014.\n\n- 芝田 将，泉 将之，西村 友佑，佐村 敏治，西村 治彦：\n  スマートフォンにおける PIN入力生体認証における識別手法，\n  第 3 回バイオメトリクスと認識・認証シンポジウム，2014)\n  （優秀ポスター発表賞受賞）\n\n",t.exports=n["default"]},{}],6:[function(e,t,n){(function(e){(function(){function e(e){this.tokens=[],this.tokens.links={},this.options=e||p.defaults,this.rules=c.normal,this.options.gfm&&(this.options.tables?this.rules=c.tables:this.rules=c.gfm)}function r(e,t){if(this.options=t||p.defaults,this.links=e,this.rules=g.normal,this.renderer=this.options.renderer||new s,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=g.breaks:this.rules=g.gfm:this.options.pedantic&&(this.rules=g.pedantic)}function s(e){this.options=e||{}}function i(e){this.tokens=[],this.token=null,this.options=e||p.defaults,this.options.renderer=this.options.renderer||new s,this.renderer=this.options.renderer,this.renderer.options=this.options}function o(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function l(e){return e.replace(/&([#\w]+);/g,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function a(e,t){return e=e.source,t=t||"",function n(r,s){return r?(s=s.source||s,s=s.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(r,s),n):new RegExp(e,t)}}function h(){}function u(e){for(var t,n,r=1;r<arguments.length;r++){t=arguments[r];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}function p(t,n,r){if(r||"function"==typeof n){r||(r=n,n=null),n=u({},p.defaults,n||{});var s,l,a=n.highlight,h=0;try{s=e.lex(t,n)}catch(c){return r(c)}l=s.length;var g=function(e){if(e)return n.highlight=a,r(e);var t;try{t=i.parse(s,n)}catch(o){e=o}return n.highlight=a,e?r(e):r(null,t)};if(!a||a.length<3)return g();if(delete n.highlight,!l)return g();for(;h<s.length;h++)!function(e){return"code"!==e.type?--l||g():a(e.text,e.lang,function(t,n){return t?g(t):null==n||n===e.text?--l||g():(e.text=n,e.escaped=!0,void(--l||g()))})}(s[h])}else try{return n&&(n=u({},p.defaults,n)),i.parse(e.lex(t,n),n)}catch(c){if(c.message+="\nPlease report this to https://github.com/chjj/marked.",(n||p.defaults).silent)return"<p>An error occured:</p><pre>"+o(c.message+"",!0)+"</pre>";throw c}}var c={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:h,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:h,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:h,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};c.bullet=/(?:[*+-]|\d+\.)/,c.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,c.item=a(c.item,"gm")(/bull/g,c.bullet)(),c.list=a(c.list)(/bull/g,c.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+c.def.source+")")(),c.blockquote=a(c.blockquote)("def",c.def)(),c._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",c.html=a(c.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,c._tag)(),c.paragraph=a(c.paragraph)("hr",c.hr)("heading",c.heading)("lheading",c.lheading)("blockquote",c.blockquote)("tag","<"+c._tag)("def",c.def)(),c.normal=u({},c),c.gfm=u({},c.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),c.gfm.paragraph=a(c.paragraph)("(?!","(?!"+c.gfm.fences.source.replace("\\1","\\2")+"|"+c.list.source.replace("\\1","\\3")+"|")(),c.tables=u({},c.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),e.rules=c,e.lex=function(t,n){var r=new e(n);return r.lex(t)},e.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},e.prototype.token=function(e,t,n){for(var r,s,i,o,l,a,h,u,p,e=e.replace(/^ +$/gm,"");e;)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),i[0].length>1&&this.tokens.push({type:"space"})),i=this.rules.code.exec(e))e=e.substring(i[0].length),i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?i:i.replace(/\n+$/,"")});else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2],text:i[3]||""});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if(t&&(i=this.rules.nptable.exec(e))){for(e=e.substring(i[0].length),a={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/\n$/,"").split("\n")},u=0;u<a.align.length;u++)/^ *-+: *$/.test(a.align[u])?a.align[u]="right":/^ *:-+: *$/.test(a.align[u])?a.align[u]="center":/^ *:-+ *$/.test(a.align[u])?a.align[u]="left":a.align[u]=null;for(u=0;u<a.cells.length;u++)a.cells[u]=a.cells[u].split(/ *\| */);this.tokens.push(a)}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2]?1:2,text:i[1]});else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t,!0),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(e)){for(e=e.substring(i[0].length),o=i[2],this.tokens.push({type:"list_start",ordered:o.length>1}),i=i[0].match(this.rules.item),r=!1,p=i.length,u=0;p>u;u++)a=i[u],h=a.length,a=a.replace(/^ *([*+-]|\d+\.) +/,""),~a.indexOf("\n ")&&(h-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+h+"}","gm"),"")),this.options.smartLists&&u!==p-1&&(l=c.bullet.exec(i[u+1])[0],o===l||o.length>1&&l.length>1||(e=i.slice(u+1).join("\n")+e,u=p-1)),s=r||/\n\n(?!\s*$)/.test(a),u!==p-1&&(r="\n"===a.charAt(a.length-1),s||(s=r)),this.tokens.push({type:s?"loose_item_start":"list_item_start"}),this.token(a,!1,n),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),text:i[0]});else if(!n&&t&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),this.tokens.links[i[1].toLowerCase()]={href:i[2],title:i[3]};else if(t&&(i=this.rules.table.exec(e))){for(e=e.substring(i[0].length),a={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/(?: *\| *)?\n$/,"").split("\n")},u=0;u<a.align.length;u++)/^ *-+: *$/.test(a.align[u])?a.align[u]="right":/^ *:-+: *$/.test(a.align[u])?a.align[u]="center":/^ *:-+ *$/.test(a.align[u])?a.align[u]="left":a.align[u]=null;for(u=0;u<a.cells.length;u++)a.cells[u]=a.cells[u].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(a)}else if(t&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var g={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:h,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:h,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};g._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,g._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,g.link=a(g.link)("inside",g._inside)("href",g._href)(),g.reflink=a(g.reflink)("inside",g._inside)(),g.normal=u({},g),g.pedantic=u({},g.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),g.gfm=u({},g.normal,{escape:a(g.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:a(g.text)("]|","~]|")("|","|https?://|")()}),g.breaks=u({},g.gfm,{br:a(g.br)("{2,}","*")(),text:a(g.gfm.text)("{2,}","*")()}),r.rules=g,r.output=function(e,t,n){var s=new r(t,n);return s.output(e)},r.prototype.output=function(e){for(var t,n,r,s,i="";e;)if(s=this.rules.escape.exec(e))e=e.substring(s[0].length),i+=s[1];else if(s=this.rules.autolink.exec(e))e=e.substring(s[0].length),"@"===s[2]?(n=":"===s[1].charAt(6)?this.mangle(s[1].substring(7)):this.mangle(s[1]),r=this.mangle("mailto:")+n):(n=o(s[1]),r=n),i+=this.renderer.link(r,null,n);else if(this.inLink||!(s=this.rules.url.exec(e))){if(s=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(s[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(s[0])&&(this.inLink=!1),e=e.substring(s[0].length),i+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):o(s[0]):s[0];else if(s=this.rules.link.exec(e))e=e.substring(s[0].length),this.inLink=!0,i+=this.outputLink(s,{href:s[2],title:s[3]}),this.inLink=!1;else if((s=this.rules.reflink.exec(e))||(s=this.rules.nolink.exec(e))){if(e=e.substring(s[0].length),t=(s[2]||s[1]).replace(/\s+/g," "),t=this.links[t.toLowerCase()],!t||!t.href){i+=s[0].charAt(0),e=s[0].substring(1)+e;continue}this.inLink=!0,i+=this.outputLink(s,t),this.inLink=!1}else if(s=this.rules.strong.exec(e))e=e.substring(s[0].length),i+=this.renderer.strong(this.output(s[2]||s[1]));else if(s=this.rules.em.exec(e))e=e.substring(s[0].length),i+=this.renderer.em(this.output(s[2]||s[1]));else if(s=this.rules.code.exec(e))e=e.substring(s[0].length),i+=this.renderer.codespan(o(s[2],!0));else if(s=this.rules.br.exec(e))e=e.substring(s[0].length),i+=this.renderer.br();else if(s=this.rules.del.exec(e))e=e.substring(s[0].length),i+=this.renderer.del(this.output(s[1]));else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),i+=this.renderer.text(o(this.smartypants(s[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(s[0].length),n=o(s[1]),r=n,i+=this.renderer.link(r,null,n);return i},r.prototype.outputLink=function(e,t){var n=o(t.href),r=t.title?o(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,o(e[1]))},r.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},r.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,s=0;r>s;s++)t=e.charCodeAt(s),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},s.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t);null!=r&&r!==e&&(n=!0,e=r)}return t?'<pre><code class="'+this.options.langPrefix+o(t,!0)+'">'+(n?e:o(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:o(e,!0))+"\n</code></pre>"},s.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},s.prototype.html=function(e){return e},s.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},s.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},s.prototype.list=function(e,t){var n=t?"ol":"ul";return"<"+n+">\n"+e+"</"+n+">\n"},s.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},s.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},s.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},s.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},s.prototype.tablecell=function(e,t){var n=t.header?"th":"td",r=t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">";return r+e+"</"+n+">\n"},s.prototype.strong=function(e){return"<strong>"+e+"</strong>"},s.prototype.em=function(e){return"<em>"+e+"</em>"},s.prototype.codespan=function(e){return"<code>"+e+"</code>"},s.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},s.prototype.del=function(e){return"<del>"+e+"</del>"},s.prototype.link=function(e,t,n){if(this.options.sanitize){try{var r=decodeURIComponent(l(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(s){return""}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:"))return""}var i='<a href="'+e+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>"},s.prototype.image=function(e,t,n){var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},s.prototype.text=function(e){return e},i.parse=function(e,t,n){var r=new i(t,n);return r.parse(e)},i.prototype.parse=function(e){this.inline=new r(e.links,this.options,this.renderer),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},i.prototype.next=function(){return this.token=this.tokens.pop()},i.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},i.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},i.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,s,i="",o="";for(n="",e=0;e<this.token.header.length;e++)r={header:!0,align:this.token.align[e]},n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(i+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",s=0;s<t.length;s++)n+=this.renderer.tablecell(this.inline.output(t[s]),{header:!1,align:this.token.align[s]});o+=this.renderer.tablerow(n)}return this.renderer.table(i,o);case"blockquote_start":for(var o="";"blockquote_end"!==this.next().type;)o+=this.tok();return this.renderer.blockquote(o);case"list_start":for(var o="",l=this.token.ordered;"list_end"!==this.next().type;)o+=this.tok();return this.renderer.list(o,l);case"list_item_start":for(var o="";"list_item_end"!==this.next().type;)o+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(o);case"loose_item_start":for(var o="";"list_item_end"!==this.next().type;)o+=this.tok();return this.renderer.listitem(o);case"html":var a=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(a);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},h.exec=h,p.options=p.setOptions=function(e){return u(p.defaults,e),p},p.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new s,xhtml:!1},p.Parser=i,p.parser=i.parse,p.Renderer=s,p.Lexer=e,p.lexer=e.lex,p.InlineLexer=r,p.inlineLexer=r.output,p.parse=p,"undefined"!=typeof t&&"object"==typeof n?t.exports=p:"function"==typeof define&&define.amd?define(function(){return p}):this.marked=p}).call(function(){return this||("undefined"!=typeof window?window:e)}())}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1]);
//# sourceMappingURL=bundle.js.map