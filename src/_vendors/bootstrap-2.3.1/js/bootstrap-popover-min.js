!function(c){var b=function(e,d){this.init("popover",e,d)
};
b.prototype=c.extend({},c.fn.tooltip.Constructor.prototype,{constructor:b,setContent:function(){var f=this.tip(),e=this.getTitle(),d=this.getContent();
f.find(".popover-title")[this.options.html?"html":"text"](e);
f.find(".popover-content")[this.options.html?"html":"text"](d);
f.removeClass("fade top bottom left right in")
},hasContent:function(){return this.getTitle()||this.getContent()
},getContent:function(){var e,d=this.$element,f=this.options;
e=(typeof f.content=="function"?f.content.call(d[0]):f.content)||d.attr("data-content");
return e
},tip:function(){if(!this.$tip){this.$tip=c(this.options.template)
}return this.$tip
},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)
}});
var a=c.fn.popover;
c.fn.popover=function(d){return this.each(function(){var g=c(this),f=g.data("popover"),e=typeof d=="object"&&d;
if(!f){g.data("popover",(f=new b(this,e)))
}if(typeof d=="string"){f[d]()
}})
};
c.fn.popover.Constructor=b;
c.fn.popover.defaults=c.extend({},c.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});
c.fn.popover.noConflict=function(){c.fn.popover=a;
return this
}
}(window.jQuery);