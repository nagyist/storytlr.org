!function(b){var c=function(e,d){this.$element=b(e);
this.options=b.extend({},b.fn.collapse.defaults,d);
if(this.options.parent){this.$parent=b(this.options.parent)
}this.options.toggle&&this.toggle()
};
c.prototype={constructor:c,dimension:function(){var d=this.$element.hasClass("width");
return d?"width":"height"
},show:function(){var g,d,f,e;
if(this.transitioning||this.$element.hasClass("in")){return
}g=this.dimension();
d=b.camelCase(["scroll",g].join("-"));
f=this.$parent&&this.$parent.find("> .accordion-group > .in");
if(f&&f.length){e=f.data("collapse");
if(e&&e.transitioning){return
}f.collapse("hide");
e||f.data("collapse",null)
}this.$element[g](0);
this.transition("addClass",b.Event("show"),"shown");
b.support.transition&&this.$element[g](this.$element[0][d])
},hide:function(){var d;
if(this.transitioning||!this.$element.hasClass("in")){return
}d=this.dimension();
this.reset(this.$element[d]());
this.transition("removeClass",b.Event("hide"),"hidden");
this.$element[d](0)
},reset:function(d){var e=this.dimension();
this.$element.removeClass("collapse")[e](d||"auto")[0].offsetWidth;
this.$element[d!==null?"addClass":"removeClass"]("collapse");
return this
},transition:function(h,e,f){var g=this,d=function(){if(e.type=="show"){g.reset()
}g.transitioning=0;
g.$element.trigger(f)
};
this.$element.trigger(e);
if(e.isDefaultPrevented()){return
}this.transitioning=1;
this.$element[h]("in");
b.support.transition&&this.$element.hasClass("collapse")?this.$element.one(b.support.transition.end,d):d()
},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()
}};
var a=b.fn.collapse;
b.fn.collapse=function(d){return this.each(function(){var g=b(this),f=g.data("collapse"),e=b.extend({},b.fn.collapse.defaults,g.data(),typeof d=="object"&&d);
if(!f){g.data("collapse",(f=new c(this,e)))
}if(typeof d=="string"){f[d]()
}})
};
b.fn.collapse.defaults={toggle:true};
b.fn.collapse.Constructor=c;
b.fn.collapse.noConflict=function(){b.fn.collapse=a;
return this
};
b(document).on("click.collapse.data-api","[data-toggle=collapse]",function(i){var h=b(this),d,g=h.attr("data-target")||i.preventDefault()||(d=h.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),f=b(g).data("collapse")?"toggle":h.data();
h[b(g).hasClass("in")?"addClass":"removeClass"]("collapsed");
b(g).collapse(f)
})
}(window.jQuery);