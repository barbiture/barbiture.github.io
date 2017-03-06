'use strict';
// console.log('msg');

// Awesomplete - Lea Verou - MIT license
(function(){function h(a){a=Array.isArray(a)?{label:a[0],value:a[1]}:"object"===typeof a&&"label"in a&&"value"in a?a:{label:a,value:a};this.label=a.label||a.value;this.value=a.value}function n(a,b,d){for(var g in b){var f=b[g],c=a.input.getAttribute("data-"+g.toLowerCase());a[g]="number"===typeof f?parseInt(c):!1===f?null!==c:f instanceof Function?null:c;a[g]||0===a[g]||(a[g]=g in d?d[g]:f)}}function c(a,b){return"string"===typeof a?(b||document).querySelector(a):a||null}function k(a,b){return l.call((b||
document).querySelectorAll(a))}function m(){k("input.awesomplete").forEach(function(a){new e(a)})}var e=function(a,b){var d=this;this.input=c(a);this.input.setAttribute("autocomplete","off");this.input.setAttribute("aria-autocomplete","list");b=b||{};n(this,{minChars:2,maxItems:10,autoFirst:!1,data:e.DATA,filter:e.FILTER_CONTAINS,sort:e.SORT_BYLENGTH,item:e.ITEM,replace:e.REPLACE},b);this.index=-1;this.container=c.create("div",{className:"awesomplete",around:a});this.ul=c.create("ul",{hidden:"hidden",
inside:this.container});this.status=c.create("span",{className:"visually-hidden",role:"status","aria-live":"assertive","aria-relevant":"additions",inside:this.container});c.bind(this.input,{input:this.evaluate.bind(this),blur:this.close.bind(this),keydown:function(a){var b=a.keyCode;if(d.opened)if(13===b&&d.selected)a.preventDefault(),d.select();else if(27===b)d.close();else if(38===b||40===b)a.preventDefault(),d[38===b?"previous":"next"]()}});c.bind(this.input.form,{submit:this.close.bind(this)});
c.bind(this.ul,{mousedown:function(a){var b=a.target;if(b!==this){for(;b&&!/li/i.test(b.nodeName);)b=b.parentNode;b&&0===a.button&&(a.preventDefault(),d.select(b,a.target))}}});this.input.hasAttribute("list")?(this.list="#"+this.input.getAttribute("list"),this.input.removeAttribute("list")):this.list=this.input.getAttribute("data-list")||b.list||[];e.all.push(this)};e.prototype={set list(a){if(Array.isArray(a))this._list=a;else if("string"===typeof a&&-1<a.indexOf(","))this._list=a.split(/\s*,\s*/);
else if((a=c(a))&&a.children){var b=[];l.apply(a.children).forEach(function(a){if(!a.disabled){var c=a.textContent.trim(),f=a.value||c;a=a.label||c;""!==f&&b.push({label:a,value:f})}});this._list=b}document.activeElement===this.input&&this.evaluate()},get selected(){return-1<this.index},get opened(){return!this.ul.hasAttribute("hidden")},close:function(){this.ul.setAttribute("hidden","");this.index=-1;c.fire(this.input,"awesomplete-close")},open:function(){this.ul.removeAttribute("hidden");this.autoFirst&&
-1===this.index&&this["goto"](0);c.fire(this.input,"awesomplete-open")},next:function(){this["goto"](this.index<this.ul.children.length-1?this.index+1:-1)},previous:function(){var a=this.ul.children.length;this["goto"](this.selected?this.index-1:a-1)},"goto":function(a){var b=this.ul.children;this.selected&&b[this.index].setAttribute("aria-selected","false");this.index=a;-1<a&&0<b.length&&(b[a].setAttribute("aria-selected","true"),this.status.textContent=b[a].textContent,c.fire(this.input,"awesomplete-highlight",
{text:this.suggestions[this.index]}))},select:function(a,b){a?this.index=c.siblingIndex(a):a=this.ul.children[this.index];if(a){var d=this.suggestions[this.index];c.fire(this.input,"awesomplete-select",{text:d,origin:b||a})&&(this.replace(d),this.close(),c.fire(this.input,"awesomplete-selectcomplete",{text:d}))}},evaluate:function(){var a=this,b=this.input.value;b.length>=this.minChars&&0<this._list.length?(this.index=-1,this.ul.innerHTML="",this.suggestions=this._list.map(function(d){return new h(a.data(d,
b))}).filter(function(d){return a.filter(d,b)}).sort(this.sort).slice(0,this.maxItems),this.suggestions.forEach(function(d){a.ul.appendChild(a.item(d,b))}),0===this.ul.children.length?this.close():this.open()):this.close()}};e.all=[];e.FILTER_CONTAINS=function(a,b){return RegExp(c.regExpEscape(b.trim()),"i").test(a)};e.FILTER_STARTSWITH=function(a,b){return RegExp("^"+c.regExpEscape(b.trim()),"i").test(a)};e.SORT_BYLENGTH=function(a,b){return a.length!==b.length?a.length-b.length:a<b?-1:1};e.ITEM=
function(a,b){var d=""===b?a:a.replace(RegExp(c.regExpEscape(b.trim()),"gi"),"<mark>$&</mark>");return c.create("li",{innerHTML:d,"aria-selected":"false"})};e.REPLACE=function(a){this.input.value=a.value};e.DATA=function(a){return a};Object.defineProperty(h.prototype=Object.create(String.prototype),"length",{get:function(){return this.label.length}});h.prototype.toString=h.prototype.valueOf=function(){return""+this.label};var l=Array.prototype.slice;c.create=function(a,b){var d=document.createElement(a),
g;for(g in b){var f=b[g];"inside"===g?c(f).appendChild(d):"around"===g?(f=c(f),f.parentNode.insertBefore(d,f),d.appendChild(f)):g in d?d[g]=f:d.setAttribute(g,f)}return d};c.bind=function(a,b){if(a)for(var d in b){var c=b[d];d.split(/\s+/).forEach(function(b){a.addEventListener(b,c)})}};c.fire=function(a,b,c){var e=document.createEvent("HTMLEvents");e.initEvent(b,!0,!0);for(var f in c)e[f]=c[f];return a.dispatchEvent(e)};c.regExpEscape=function(a){return a.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&")};
c.siblingIndex=function(a){for(var b=0;a=a.previousElementSibling;b++);return b};"undefined"!==typeof Document&&("loading"!==document.readyState?m():document.addEventListener("DOMContentLoaded",m));e.$=c;e.$$=k;"undefined"!==typeof self&&(self.Awesomplete=e);"object"===typeof module&&module.exports&&(module.exports=e);return e})();

;(function(){
    var dropdownDilever = document.getElementById('dropdownDilever');
    var rus = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск', 'Омск', 'Самара', 'Красноярск', 'Пермь', 'Ростов-на-Дону', 'Волгоград', 'Уфа', 'Воронеж', 'Саратов', 'Иркутск', 'Ульяновск', 'Хабаровск', 'Пенза', 'Белгород', 'Миас', 'Троицк (Челяб. обл)'];
    var int = ['Белорусь', 'Украина', 'Грузия', 'Испания', 'США', 'Венесуэла', 'Канада', 'Франция', 'Италия', 'Нидерланды', 'Великобритания', 'Тайланд', 'Китай', 'Аргентина', 'Куба', 'Бразилия', 'Люксембург', 'Чехия', 'Австрия', 'Германия', 'Чили', 'Индия', 'Швеция', 'Швейцария', 'ЮАР', 'Япония', 'Австралия'];

    /////////////Заполнениие меню//////////////////

    function fillUl(id, arr, classes) {
      var ul = document.getElementById(id),
          title = document.getElementById('dropdownDilever').children[0];
      for (var i=0; i<arr.length; i++) {
        if ( arr[i] == title.innerHTML )
          ul.innerHTML += '<li class="'+classes+
            ' selected">'+arr[i]+'</li>';
        else
          ul.innerHTML += '<li class="'+classes+'">'+
            arr[i]+'</li>';
      }
    }

    fillUl('rus',rus,'tabs__content-list-item');
    fillUl('int',int,'tabs__content-list-item');

    function clearUl(id) {
      var ul = document.getElementById(id);
      while (ul.firstChild)
        ul.removeChild(ul.firstChild);
    }


  /////////////Доп. функции//////////////////

    var addClass = function(el, className) {
      if ( !hasClass(el, className) )
        el.className += ' ' + className;
    };

    var hasClass = function(str, className) {
      var classList = str.className.split(' ');
      for (var i=0; i<classList.length; i++) {
        if ( classList[i] == className ) {
          return true;
        }
      }
      return false;
    };

    var removeClass = function(str, className) {
      var classList = str.className.split(' ');
      for (var i=0; i<classList.length; i++) {
        if ( classList[i] == className ) {
          classList.splice(i,1);
          break;
        }
      }
      return classList.join(' ');
    };

  ///////////////////////////////////////////////

    function Menu(obj,type,index) {
      var id = (typeof obj == 'object') ? obj.id : obj;
      if (!type)
        this.el = document.getElementById(id);
      else
        this.el = document.getElementsByClassName(id)[index];
      this.delay = obj.delay || 0.5;
      this.content = this.el.children[1];
      this.li = this.el.getElementsByClassName('tabs__content-list-item');
      this.inputs = this.el.getElementsByTagName('input');
      this.menuName = this.el.children[0];
      this.content.style.transition = 'all '+this.delay+'s';
      this.timeOut;
      this.close = obj.close || true;
      this.list = obj.list;
      this.addEventToItems();
      this.clickEvent();
      this.closeByClickBody();
    }

    Menu.prototype.closeByClickBody = function() {
      var $this = this;
      document.body.onclick = function(e) {
        console.log(e.target.parentElement.className);
        // if ( e.target.nodeName == 'HTML' || e.target.nodeName == 'BODY') {
        if ( e.target.parentElement.className != 'dropdown' &&
          e.target.parentElement.className != 'tabs__nav' &&
          e.target.parentElement.className != 'awesomplete') {
          if ($this.content.style.display == 'block')
            $this.fadeOut();
        }
      };
    };


    Menu.prototype.awesomplete = function() {
      var $this = this;
      for (var i=0; i<this.inputs.length; i++) {
        new Awesomplete($this.inputs[i], {
          list: $this.list[i],
          replace: function(e) {
            for (var j=0; j<$this.inputs.length; j++)
              $this.inputs[j].value = '';
            $this.menuName.innerHTML = e.value;
            $this.selectItemFromSearch(e.value);
            $this.fadeOut();
          }
        });
      }
    };

    Menu.prototype.fadeIn = function() {
      var $this = this;
      this.content.style.display = 'block';
      this.content.style.opacity = 0;
      setTimeout(function() {
        $this.content.style.opacity = 1;
      }, 10);
    };

    Menu.prototype.fadeOut = function() {
      var $this = this;
      this.content.style.opacity = 0;
      this.timeOut = setTimeout(function(){
        $this.content.style.display = '';
      }, this.delay*1000);
    };

    Menu.prototype.stop = function() {
      clearTimeout(this.timeOut);
    };

    Menu.prototype.clickEvent = function() {
      var $this = this;
      this.menuName.onclick = function(e) {
        if ($this.content.style.display == '')
          $this.fadeIn();
        else $this.fadeOut();
      };
    };

    Menu.prototype.hoverEvent = function() {
      var $this = this;
      this.el.onmouseenter = function(e) {
        $this.stop();
        $this.fadeIn();
      };
        this.el.onmouseleave = function(e) {
          $this.fadeOut();
      };
    };

    Menu.prototype.clearSelected = function(str, className) {
      for (var i=0; i<this.li.length; i++ ) {
        if ( hasClass(this.li[i],'selected') )
          this.li[i].className = removeClass(this.li[i],'selected');
      }
    };

    Menu.prototype.selectItem = function(el) {
      this.clearSelected(el,'selected');
      addClass(el);
    };

    Menu.prototype.selectItemFromSearch = function(val) {
      this.clearSelected(this.li);
      for (var i=1; i<this.li.length; i++) {
        if ( this.li[i].innerHTML == val )
        addClass(this.li[i]);
      }
    };

    Menu.prototype.addEventToItems = function() {
      var $this = this;
      for (var i=0; i<this.li.length; i++ ) {
        this.li[i].onclick = function() {
          $this.selectItem(this);
          $this.el.children[0].innerHTML = this.innerHTML;
          if ($this.close) $this.fadeOut();
        };
      }
    };

     ////// Как использовать //////////////////
     // use: Id
     // new Menu('bb1').clickEvent();
     // new Menu({id:'aa1',close:true});
     // use: Class
     // new Menu({id:'bb',close:true,delay:1},1,1);
     //////////////////////////////////////////////

    new Menu({id:'dropdownDilever',list:[rus,int]}).awesomplete();

    var tabRus = document.getElementById('tabRus'),
        tabInt = document.getElementById('tabInt'),
        linkRus = document.getElementById('linkRus'),
        linkInt = document.getElementById('linkInt');

    linkRus.onclick = function() {
      if (!hasClass(this, 'tabs__nav_item_active')) {
        linkInt.className = removeClass(linkInt, 'tabs__nav_item_active');
        addClass(this, 'tabs__nav_item_active');
      }
      tabInt.style.display = 'none';
      tabRus.style.display = 'block';
    };

    linkInt.onclick = function() {
      if (!hasClass(this, 'tabs__nav_item_active')) {
        linkRus.className = removeClass(linkRus, 'tabs__nav_item_active');
        addClass(this, 'tabs__nav_item_active');
      }
      tabRus.style.display = 'none';
      tabInt.style.display = 'block';
    };
})();