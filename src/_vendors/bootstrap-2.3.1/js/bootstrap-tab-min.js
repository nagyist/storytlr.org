!function(c){var b=function(d){this.element=c(d)
};
b.prototype={constructor:b,show:function(){var j=this.element,g=j.closest("ul:not(.dropdown-menu)"),f=j.attr("data-target"),h,d,i;
if(!f){f=j.attr("href");
f=f&&f.replace(/.*(?=#[^\s]*$)/,"")
}if(j.parent("li").hasClass("active")){return
}h=g.find(".active:last a")[0];
i=c.Event("show",{relatedTarget:h});
j.trigger(i);
if(i.isDefaultPrevented()){return
}d=c(f);
this.activate(j.parent("li"),g);
this.activate(d,d.parent(),function(){j.trigger({type:"shown",relatedTarget:h})
})
},activate:function(f,e,i){var d=e.find("> .active"),h=i&&c.support.transition&&d.hasClass("fade");
function g(){d.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
f.addClass("active");
if(h){f[0].offsetWidth;
f.addClass("in")
}else{f.removeClass("fade")
}if(f.parent(".dropdown-menu")){f.closest("li.dropdown").addClass("active")
}i&&i()
}h?d.one(c.support.transition.end,g):g();
d.removeClass("in")
}};
var a=c.fn.tab;
c.fn.tab=function(d){return this.each(function(){var f=c(this),e=f.data("tab");
if(!e){f.data("tab",(e=new b(this)))
}if(typeof d=="string"){e[d]()
}})
};
c.fn.tab.Constructor=b;
c.fn.tab.noConflict=function(){c.fn.tab=a;
return this
};
c(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(d){d.preventDefault();
c(this).tab("show")
})
}(window.jQuery);