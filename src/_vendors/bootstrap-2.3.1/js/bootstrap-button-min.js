!function(c){var b=function(e,d){this.$element=c(e);
this.options=c.extend({},c.fn.button.defaults,d)
};
b.prototype.setState=function(g){var i="disabled",e=this.$element,f=e.data(),h=e.is("input")?"val":"html";
g=g+"Text";
f.resetText||e.data("resetText",e[h]());
e[h](f[g]||this.options[g]);
setTimeout(function(){g=="loadingText"?e.addClass(i).attr(i,i):e.removeClass(i).removeAttr(i)
},0)
};
b.prototype.toggle=function(){var d=this.$element.closest('[data-toggle="buttons-radio"]');
d&&d.find(".active").removeClass("active");
this.$element.toggleClass("active")
};
var a=c.fn.button;
c.fn.button=function(d){return this.each(function(){var g=c(this),f=g.data("button"),e=typeof d=="object"&&d;
if(!f){g.data("button",(f=new b(this,e)))
}if(d=="toggle"){f.toggle()
}else{if(d){f.setState(d)
}}})
};
c.fn.button.defaults={loadingText:"loading..."};
c.fn.button.Constructor=b;
c.fn.button.noConflict=function(){c.fn.button=a;
return this
};
c(document).on("click.button.data-api","[data-toggle^=button]",function(f){var d=c(f.target);
if(!d.hasClass("btn")){d=d.closest(".btn")
}d.button("toggle")
})
}(window.jQuery);