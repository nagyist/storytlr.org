!function(c){function b(g,f){var h=c.proxy(this.process,this),d=c(g).is("body")?c(window):c(g),e;
this.options=c.extend({},c.fn.scrollspy.defaults,f);
this.$scrollElement=d.on("scroll.scroll-spy.data-api",h);
this.selector=(this.options.target||((e=c(g).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,""))||"")+" .nav li > a";
this.$body=c("body");
this.refresh();
this.process()
}b.prototype={constructor:b,refresh:function(){var d=this,e;
this.offsets=c([]);
this.targets=c([]);
e=this.$body.find(this.selector).map(function(){var g=c(this),f=g.data("target")||g.attr("href"),h=/^#\w/.test(f)&&c(f);
return(h&&h.length&&[[h.position().top+(!c.isWindow(d.$scrollElement.get(0))&&d.$scrollElement.scrollTop()),f]])||null
}).sort(function(g,f){return g[0]-f[0]
}).each(function(){d.offsets.push(this[0]);
d.targets.push(this[1])
})
},process:function(){var j=this.$scrollElement.scrollTop()+this.options.offset,f=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,h=f-this.$scrollElement.height(),g=this.offsets,d=this.targets,k=this.activeTarget,e;
if(j>=h){return k!=(e=d.last()[0])&&this.activate(e)
}for(e=g.length;
e--;
){k!=d[e]&&j>=g[e]&&(!g[e+1]||j<=g[e+1])&&this.activate(d[e])
}},activate:function(f){var e,d;
this.activeTarget=f;
c(this.selector).parent(".active").removeClass("active");
d=this.selector+'[data-target="'+f+'"],'+this.selector+'[href="'+f+'"]';
e=c(d).parent("li").addClass("active");
if(e.parent(".dropdown-menu").length){e=e.closest("li.dropdown").addClass("active")
}e.trigger("activate")
}};
var a=c.fn.scrollspy;
c.fn.scrollspy=function(d){return this.each(function(){var g=c(this),f=g.data("scrollspy"),e=typeof d=="object"&&d;
if(!f){g.data("scrollspy",(f=new b(this,e)))
}if(typeof d=="string"){f[d]()
}})
};
c.fn.scrollspy.Constructor=b;
c.fn.scrollspy.defaults={offset:10};
c.fn.scrollspy.noConflict=function(){c.fn.scrollspy=a;
return this
};
c(window).on("load",function(){c('[data-spy="scroll"]').each(function(){var d=c(this);
d.scrollspy(d.data())
})
})
}(window.jQuery);