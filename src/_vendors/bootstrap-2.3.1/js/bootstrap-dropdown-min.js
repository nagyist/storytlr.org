!function(f){var b="[data-toggle=dropdown]",a=function(h){var g=f(h).on("click.dropdown.data-api",this.toggle);
f("html").on("click.dropdown.data-api",function(){g.parent().removeClass("open")
})
};
a.prototype={constructor:a,toggle:function(j){var i=f(this),h,g;
if(i.is(".disabled, :disabled")){return
}h=e(i);
g=h.hasClass("open");
d();
if(!g){h.toggleClass("open")
}i.focus();
return false
},keydown:function(l){var k,m,g,j,i,h;
if(!/(38|40|27)/.test(l.keyCode)){return
}k=f(this);
l.preventDefault();
l.stopPropagation();
if(k.is(".disabled, :disabled")){return
}j=e(k);
i=j.hasClass("open");
if(!i||(i&&l.keyCode==27)){if(l.which==27){j.find(b).focus()
}return k.click()
}m=f("[role=menu] li:not(.divider):visible a",j);
if(!m.length){return
}h=m.index(m.filter(":focus"));
if(l.keyCode==38&&h>0){h--
}if(l.keyCode==40&&h<m.length-1){h++
}if(!~h){h=0
}m.eq(h).focus()
}};
function d(){f(b).each(function(){e(f(this)).removeClass("open")
})
}function e(i){var g=i.attr("data-target"),h;
if(!g){g=i.attr("href");
g=g&&/#/.test(g)&&g.replace(/.*(?=#[^\s]*$)/,"")
}h=g&&f(g);
if(!h||!h.length){h=i.parent()
}return h
}var c=f.fn.dropdown;
f.fn.dropdown=function(g){return this.each(function(){var i=f(this),h=i.data("dropdown");
if(!h){i.data("dropdown",(h=new a(this)))
}if(typeof g=="string"){h[g].call(i)
}})
};
f.fn.dropdown.Constructor=a;
f.fn.dropdown.noConflict=function(){f.fn.dropdown=c;
return this
};
f(document).on("click.dropdown.data-api",d).on("click.dropdown.data-api",".dropdown form",function(g){g.stopPropagation()
}).on("click.dropdown-menu",function(g){g.stopPropagation()
}).on("click.dropdown.data-api",b,a.prototype.toggle).on("keydown.dropdown.data-api",b+", [role=menu]",a.prototype.keydown)
}(window.jQuery);