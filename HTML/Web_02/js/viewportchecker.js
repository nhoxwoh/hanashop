!function(e){e.fn.viewportChecker=function(s){var d={classToAdd:"visible",offset:100,callbackFunction:function(e){}};e.extend(d,s);var i=this,a=e(window).height();this.checkElements=function(){var s=-1!=navigator.userAgent.toLowerCase().indexOf("webkit")?"body":"html",o=e(s).scrollTop(),n=o+a;i.each(function(){var s=e(this);if(!s.hasClass(d.classToAdd)){var i=Math.round(s.offset().top)+d.offset,a=i+s.height();i<n&&a>o&&(s.addClass(d.classToAdd),d.callbackFunction(s))}})},e(window).scroll(this.checkElements),this.checkElements(),e(window).resize(function(e){a=e.currentTarget.innerHeight})}}(jQuery),jQuery(document).ready(function(){jQuery(".notification-area").addClass("hidden1").viewportChecker({classToAdd:"visible animated bounceInUp",offset:1}),jQuery(".box-about").addClass("hidden1").viewportChecker({classToAdd:"visible animated bounceInUp",offset:1}),jQuery(".news-category-area").addClass("hidden1").viewportChecker({classToAdd:"visible animated bounceInUp",offset:1}),jQuery(".category-other-area").addClass("hidden1").viewportChecker({classToAdd:"visible animated bounceInUp",offset:1}),jQuery(".single-video-root").addClass("hidden1").viewportChecker({classToAdd:"visible animated bounceInLeft",offset:1}),jQuery(".single-video").addClass("hidden1").viewportChecker({classToAdd:"visible animated bounceIn",offset:1}),jQuery(".group-news").addClass("hidden1").viewportChecker({classToAdd:"visible animated bounceInLeft",offset:1}),jQuery(".group-download").addClass("hidden1").viewportChecker({classToAdd:"visible animated bounceInRight",offset:1}),jQuery(".banner-link-area").addClass("hidden1").viewportChecker({classToAdd:"visible animated bounceIn",offset:1}),jQuery(".single-footer").addClass("hidden1").viewportChecker({classToAdd:"visible animated fadeIn",offset:1})});