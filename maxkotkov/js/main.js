jQuery(function(t){function n(t,n){t.css({transform:"none","-webkit-transform":"none","-moz-transform":"none","-ms-transform":"none","-o-transform":"none"}).removeClass(n)}function e(n,e){"all"==e?n.each(function(){t(this).addClass("active")}):n.each(function(){t(this).data("cat")!=e?t(this).removeClass("active"):t(this).addClass("active")})}function o(n){n.siblings().each(function(){t(this).hasClass("active")&&t(this).removeClass("active")}),n.addClass("active")}function a(n,e,o){var a;n.find(".tab-content").each(function(){t(this).data("tab-block")==o&&(t(this).hasClass("active")&&t(this).removeClass("active"),t(this).data("tab")==e&&(a=t(this)))}),a.addClass("active"),t.ionSound.play("wuf-4")}function i(t){var n=new ymaps.Placemark([55.768658,37.601115],{iconCaption:"Старопименовский переулок, д. 4, стр. 2"},{preset:"islands#blueCircleDotIconWithCaption",iconCaptionMaxWidth:"300"});t.geoObjects.add(n)}t(function(){var n=t("#mainSlider").fotorama().data("fotorama"),e=t("#addSlider .add-slider");n.setOptions({width:"100%",height:"345px",nav:"dots",arrows:!1,fit:"cover",loop:!0,autoplay:5e3}),t("#mainSlider").on("fotorama:load fotorama:show",function(t,n){e.eq(n.activeIndex).fadeIn(200).siblings().hide()}),t("#mainSlider, #addSlider").on("mouseenter",function(){n.stopAutoplay()}).on("mouseleave",function(){n.startAutoplay(5e3)})}),t(function(){t("#whoLearn").fotorama().data("fotorama").setOptions({width:"100%",height:"370px",nav:!1,arrows:!1,fit:"cover",loop:!0,autoplay:!1}),t("#whoLearn").on("mouseenter",function(){}).on("mouseleave",function(){})}),/MSIE [6-8]|Mac/i.test(navigator.userAgent)||t("header, article, footer").each(function(){if("fixed"==t(this).css("backgroundAttachment")){var n=t(this),e=/WebKit/i.test(navigator.userAgent)?9:8;n.addClass("froid-fixed-bg").data({bgX:n.css("backgroundPosition").slice(0,n.css("backgroundPosition").indexOf(" ")),bgY:n.css("backgroundPosition").slice(n.css("backgroundPosition").indexOf(" ")),margin:e})}}),t(window).bind("SIModals.modalsOpen",function(){t(".froid-fixed-bg").each(function(){var n=t(this);n.css("backgroundPosition","calc("+n.data("bgX")+" - "+n.data("margin")+"px) "+n.data("bgY"))})}),t(window).bind("SIModals.modalsClose",function(){t(".froid-fixed-bg").each(function(){var n=t(this);n.css("backgroundPosition",n.data("bgX")+" "+n.data("bgY"))})}),is_mobile()?(t("header, section, article, footer, .section-bg-block::before").each(function(){"fixed"==t(this).css("backgroundAttachment")&&t(this).css("backgroundAttachment","scroll")}),function(t,n){t.css({transform:"none","-webkit-transform":"none","-moz-transform":"none","-ms-transform":"none","-o-transform":"none",transition:"none","-webkit-transition":"none",opacity:1}).removeClass(n)}(t(".cre-animate"),"cre-animate"),n(t(".si-floating"),"si-floating"),n(t(".si-floating2"),"si-floating2"),n(t(".si-floating3"),"si-floating3"),n(t(".si-floating4"),"si-floating4"),t("html, body").css("min-width","1280px").addClass("mobile"),t("html").css("width",window.innerWidth+"px"),t.ionSound({sounds:["bip-1","bip-2","wuf-1","wuf-2","wuf-3","wuf-4"],path:template_url+"/sounds/",volume:0})):(t.ionSound({sounds:["bip-1","bip-2","wuf-1","wuf-2","wuf-3","wuf-4"],path:template_url+"/sounds/",volume:.3}),t(document).on("mouseenter",".btn, .si-close, .si-close-popup, .phone-link, .si-jump, .swiper-button-prev, .swiper-button-next, .swiper-pagination-bullet, .tab-link",function(){t.ionSound.play("bip-2")}),SIModals.beforeOpen=function(){t.ionSound.play("wuf-4")},SIModals.beforeClose=function(){t.ionSound.play("wuf-3")},SmoothScroll({stepSize:100}),navigator.userAgent.match(/Trident\/7\./)&&t("body").on("mousewheel",function(){event.preventDefault();var t=event.wheelDelta,n=window.pageYOffset;window.scrollTo(0,n-t)})),is_OSX()&&t("html, body").addClass("osx"),t.fn.SIInit=function(){t("a[data-rel]").each(function(){t(this).attr("rel",t(this).data("rel"))}),t("a[rel^=fancybox]").not(".cloned a").fancybox({helpers:{thumbs:!0}}),t(".send-form").SIForms({validateFields:{client_name:"Укажите ваше имя",client_phone:"Укажите ваш телефон",client_mail:"Укажите ваш e-mail"},sendSuccess:function(t){}}),t(".send-form1").SIForms({validateFields:{client_phone:"Укажите ваш телефон",client_mail:"Укажите ваш e-mail"},sendSuccess:function(t){}}),t(".si-jump").SIJump(),SIPageMessages.init()},t.fn.SIInit(),t.fn.SIModalInit=function(){SIModals.init(),SIModals.attachModal(".open-phone-modal",".phone-modal",{".send-extra":"extra",".send-extra2":"extra2"}),SIModals.attachModal(".open-text-modal",".text-modal",!1,function(){return".text-modal-"+t(this).data("id")}),SIModals.attachModal(".open-registration-modal",".registration-modal",{".send-extra":"extra",".send-extra2":"extra2"}),SIModals.attachClose(".si-close")},t.fn.SIModalInit(),t(".show-video").click(function(){return t.fancybox({padding:0,autoScale:!1,transitionIn:"none",transitionOut:"none",title:this.title,width:640,height:385,href:this.href.replace(new RegExp("watch\\?v=","i"),"v/"),type:"swf",swf:{wmode:"transparent",allowfullscreen:"true"}}),!1}),t("select").styler(),t(".spoiler").spoiler();new Swiper(".main-review-block",{slidesPerView:1,pagination:".main-review-pagination",nextButton:".main-review-next",prevButton:".main-review-prev",paginationClickable:!0,loop:!0,onSlideChangeStart:function(n){t.ionSound.play("wuf-1")}}),new Swiper(".tutors-block",{slidesPerView:1,pagination:".tutors-pagination",nextButton:".tutors-next",prevButton:".tutors-prev",paginationClickable:!0,loop:!0,onSlideChangeStart:function(n){t.ionSound.play("wuf-1")}}),new Swiper(".article-block",{slidesPerView:2,spaceBetween:10,pagination:".article-pagination",paginationClickable:!0,loop:!0,onSlideChangeStart:function(n){t.ionSound.play("wuf-1")}}),new Swiper(".course-reviews-block",{slidesPerView:2,spaceBetween:10,pagination:".course-reviews-pagination",nextButton:".course-reviews-next",prevButton:".course-reviews-prev",paginationClickable:!0,loop:!0,onSlideChangeStart:function(n){t.ionSound.play("wuf-1")}});t(".ellipsis").dotdotdot(),e(t(".catalogue-item-holder"),t(".catalogue-link.active").data("cat")),t(".catalogue-link").click(function(){var n=t(this),o=t(".catalogue-item-holder"),a=t(this).data("cat");n.siblings().removeClass("active"),t(this).addClass("active"),e(o,a)}),t(".tab-link").click(function(){var n,e=t(this),i=t(this).data("tab"),s=t(this).data("tab-block");t(this).parents(".tabs-block").each(function(){t(this).data("tab-block")==s&&(n=t(this))}),o(e),a(n,i,s)});!function(t,n){ymaps.ready(function(){(t=new ymaps.Map(n,{center:[55.768658,37.603],zoom:16},{searchControlProvider:"yandex#search"})).behaviors.disable("scrollZoom"),i(t)})}(void 0,"map"),setTimeout(function(){t("html").removeClass("loading"),setTimeout(function(){t(".loader").hide()},500)},1e3),t(".more").click(function(){t(this).parents("tr").next(".form_more").toggle()}),t(".close_more").click(function(){t(this).parents(".form_more").hide()})});
//# sourceMappingURL=maps/main.js.map
