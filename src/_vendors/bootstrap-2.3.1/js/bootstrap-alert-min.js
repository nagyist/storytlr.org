!function(d){var c='[data-dismiss="alert"]',b=function(e){d(e).on("click",c,this.close)
};
b.prototype.close=function(j){var i=d(this),g=i.attr("data-target"),h;
if(!g){g=i.attr("href");
g=g&&g.replace(/.*(?=#[^\s]*$)/,"")
}h=d(g);
j&&j.preventDefault();
h.length||(h=i.hasClass("alert")?i:i.parent());
h.trigger(j=d.Event("close"));
if(j.isDefaultPrevented()){return
}h.removeClass("in");
function f(){h.trigger("closed").remove()
}d.support.transition&&h.hasClass("fade")?h.on(d.support.transition.end,f):f()
};
var a=d.fn.alert;
d.fn.alert=function(e){return this.each(function(){var g=d(this),f=g.data("alert");
if(!f){g.data("alert",(f=new b(this)))
}if(typeof e=="string"){f[e].call(g)
}})
};
d.fn.alert.Constructor=b;
d.fn.alert.noConflict=function(){d.fn.alert=a;
return this
};
d(document).on("click.alert.data-api",c,b.prototype.close)
}(window.jQuery);