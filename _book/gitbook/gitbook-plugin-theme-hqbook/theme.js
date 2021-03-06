require(["gitbook", "jQuery"], function (a, b) {
    function h() {
        b(".page-inner .markdown-section").find("h1,h2,h3").each(function () {
            var c, d, a = "anchor-h1";
            b(this).is("h2") && (a = "anchor-h2"), b(this).is("h3") && (a = "anchor-h3"), c = b(this).text(), d = b(this).attr("id"), b(".book-anchor-body").append("<a id='an_" + c + "' class='anchor-text " + a + "' title='" + c + "'  href='#" + d + "'>" + c + "</a>")
        }), b(".book-anchor-title").click(function () {
        }), b(".book-anchor-body>a").click(function () {
            b(".book-anchor-body>a").removeClass("selected"), b(this).addClass("selected")
        });
        var a = decodeURIComponent(location.hash);
        a && (a = a.substring(1), b("#an_" + a).addClass("selected"))
    }

    function i() {
        var f, g, h, i, c = d["logo"] || "./gitbook/gitbook-plugin-theme-hqbook/logo.png";
        b(".header-inner .logo img").attr("src", c), f = b(".header-inner .title"), f.text(a.state.config.title), g = b("#book-search-input"), h = d["search-placeholder"] || "输入关键字搜索", g.find("input").attr("placeholder", h), g.append(""), g.focus(), b("#searchBtn").click(function () {
        }), i = ['<div class="book-toTop"><i class="fa fa-arrow-up"></i></div>'].join(""), b(".book").append(i), b(".book-toTop").hide(), b(".book-body,.body-inner").on("scroll", function () {
            b(this).scrollTop() > 100 ? b(".book-toTop").fadeIn() : b(".book-toTop").fadeOut()
        }), b(".book-toTop").click(function () {
            return b(".book-body,.body-inner").animate({scrollTop: 0}, 800), !1
        }), b.map(e, function (a) {
            b(a).hide()
        })
    }

    function j(a) {
        a.append(b('<i class="fa fa-clone t-copy"></i>').click(function () {
            l(b(this))
        }))
    }

    function k() {
        b("body").append('<textarea id="code-textarea" />')
    }

    function l(a) {
        pre = a.parent(), textarea = b("#code-textarea"), textarea.val(pre.text()), textarea.focus(), textarea.select(), document.execCommand("copy"), pre.focus(), n(a)
    }

    function m(a) {
        code = a.children("code"), lines = code.html().split("\n"), "" == lines[lines.length - 1] && lines.splice(-1, 1), d.copyLines && lines.length > 1 && (lines = lines.map(function (a) {
            return '<span class="code-line">' + a + "</span>"
        }), code.html(lines.join("\n"))), wrapper = a.wrap('<div class="code-wrapper"></div>'), d.copyButtons && j(wrapper)
    }

    function n(a) {
        id = a.attr("data-command"), a.removeClass("fa-clone").addClass("fa-check"), id in f && clearTimeout(f[id]), f[id] = window.setTimeout(function () {
            a.removeClass("fa-check").addClass("fa-clone")
        }, 1e3)
    }

    function o() {
        function n() {
            var a = JSON.parse(sessionStorage.getItem(c));
            return a || (a = {}), a.summaryWidth || (a.summaryWidth = k.outerWidth()), a.summaryOffset || (a.summaryOffset = k.position().left), a.bookBodyOffset || (a.bookBodyOffset = l.position().left), a
        }

        function o(a, b, d) {
            sessionStorage.setItem(c, JSON.stringify({summaryWidth: a, summaryOffset: b, bookBodyOffset: d}))
        }

        function p(a, b, c) {
            k.outerWidth(a), k.offset({left: b}), l.offset({left: c}), k.css({position: "absolute"}), l.css({position: "absolute"})
        }

        var c = "plugin_gitbook_split", d = null, e = !1, f = null, g = null, h = null, i = b("body"), j = b(".book"),
            k = b(".book-summary"), l = b(".book-body"),
            m = b('<div class="divider-content-summary"><div class="divider-content-summary__icon"><i class="fa fa-ellipsis-v"></i></div></div>');
        k.append(m), d = m.outerWidth(), f = m.outerWidth() / 2, g = n(), p(g.summaryWidth, g.summaryOffset, g.bookBodyOffset), setTimeout(function () {
            var c = !Boolean(b(".toggle-summary").length),
                d = c ? b(".fa.fa-align-justify").parent() : b(".toggle-summary");
            d.on("click", function () {
                var b = null, d = null, e = c ? !a.sidebar.isOpen() : j.hasClass("with-summary");
                e ? (b = -k.outerWidth(), d = 0) : (b = 0, d = k.outerWidth()), p(k.outerWidth(), b, d), o(k.outerWidth(), b, d)
            })
        }, 1), m.on("mousedown", function (a) {
            a.stopPropagation(), e = !0, h = k.outerWidth() - a.pageX
        }), i.on("mouseup", function (a) {
            a.stopPropagation(), e = !1, o(k.outerWidth(), k.position().left, l.position().left)
        }), i.on("mousemove", function (a) {
            e && (a.stopPropagation(), a.preventDefault(), k.outerWidth(a.pageX + h), l.offset({left: a.pageX + h}))
        })
    }

    function p() {
        var a = d["flexible-linkcard"];
        b("blockquote").each(function () {
            var c = b(this).html(),
                d = c.replace(/@\[([\s\S]*)\]\{<code>(\S*)<\/code>[ "]*(\w*)"?\}\n?([\s\S]*)(?=<\/p>)/g, function (b, d, e, f, g) {
                    var h, i, j, k, l;
                    return b ? (h = /^<code>(\S*)<\/code>[ "]*(\w*)"?/, g && (i = g.match(h), !i) ? c : (j = e ? e : a["hrefUrl"], k = i && i[1] ? i[1] : a["imgSrc"], l = i && i[2] ? i[2] : a["imgClass"], '<div class="linkcard"><div class="linkcard-backdrop" style="background-image:url(' + k + ')"></div>' + '<a class="linkcard-content" target="' + (f ? f : a["target"]) + '" href="' + j + '">' + '<div class="linkcard-text">' + '<p class="linkcard-title">' + (d ? d : a["title"]) + "</p>" + '<p class="linkcard-url"><i class="fa fa-link fa-rotate-90"></i>' + j + "</p>" + "</div>" + '<div class="linkcard-imagecell ' + l + '">' + '<img class="linkcard-image" src="' + k + '">' + "</div>" + "</a>" + "</div>")) : c
                });
            d !== c && b(this).replaceWith(d)
        })
    }

    var e, d = {}, f = {};
    a.events.on("start", function (a, b) {
        d = b["theme-hqbook"], e = d["hide-elements"], d.copyButtons && k()
    }), a.events.on("page.change", function () {
        i(), h(), p(), b("pre").each(function () {
            m(b(this))
        }), d.dragSplitter && o()
    })
});