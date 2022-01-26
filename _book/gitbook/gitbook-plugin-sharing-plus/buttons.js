require(['gitbook', 'jquery'], function(gitbook, $) {
    function site(type, label, icon, link) {
        return {
            label: label,
            icon: type+' fa-' + icon,
            onClick: function (e) {
                e.preventDefault();
                window.open(link);
            }
        };
    }

    var url = encodeURIComponent(location.href);
    var title = encodeURIComponent(document.title);

    var SITES = {
        youtube: site('fab','youtube', 'youtube', 'https://www.youtube.com/channel/UC4vFRyVgvK7RnlkkLDmp23w/featured'),
        medium: site('fab','medium', 'medium', 'https://polynetwork.medium.com'),
        twitter: site('fab','Twitter', 'twitter', 'https://twitter.com/PolyNetwork2'),
        email: site('fa','email', 'envelope', 'mailto:contact@poly.network'),
        telegram: site('fab','telegram', 'telegram', 'https://t.me/polynetworkgroup'),
        discord: site('fab','discord', 'discord', 'https://discord.com/invite/y6MuEnq'),
        github: site('fab','github', 'github', 'https://github.com/polynetwork'),
        douban: site('fab','豆瓣', 'share', 'http://shuo.douban.com/!service/share?href=' + url + '&name=' + title),
        facebook: site('fab','Facebook', 'facebook', 'http://www.facebook.com/sharer/sharer.php?s=100&p[url]=' + url),
        google: site('fab','Google+', 'google-plus', 'https://plus.google.com/share?url=' + url),
        hatenaBookmark: site('fab','はてなブックマーク', 'bold', 'http://b.hatena.ne.jp/entry/' + url),
        instapaper: site('fab','instapaper', 'instapaper', 'http://www.instapaper.com/text?u=' + url),
        line: site('fab','LINE', 'comment', 'http://line.me/R/msg/text/?' + title + ' ' + url),
        linkedin: site('fab','Linkedin', 'linkedin', 'https://www.linkedin.com/shareArticle?mini=true&url=' + url),
        messenger: site('fab','Facebook Messenger', 'commenting', 'fb-messenger://share?link=' + url),
        pocket: site('fab','Pocket', 'get-pocket', 'https://getpocket.com/save?url=' + url + '&title=' + title),
        qq: site('fab','QQ', 'qq', 'http://connect.qq.com/widget/shareqq/index.html?url=' + url + '&title=' + title),
        qzone: site('fab','QQ空间', 'star', 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + url + '&title=' + title),
        stumbleupon: site('fab','StumbleUpon', 'stumbleupon', 'http://www.stumbleupon.com/submit?url=' + url + '&title=' + title),
        viber: site('fab','Viber', 'volume-control-phone', 'viber://forward?text='+ url + ' ' + title),
        vk: site('fab','VK', 'vk', 'http://vkontakte.ru/share.php?url=' + url),
        weibo: site('fab','新浪微博', 'weibo', 'http://service.weibo.com/share/share.php?content=utf-8&url=' + url + '&title=' + title),
        whatsapp: site('fab','WhatsApp', 'whatsapp', 'whatsapp://send?text='+ url + ' ' + title),
    };

    gitbook.events.bind('start', function(e, config) {
        var opts = config.sharing;

        // Create dropdown menu
        var menu = $.map(opts.all, function(id) {
            var site = SITES[id];

            return {
                text: site.label,
                onClick: site.onClick
            };
        });

        // Create main button with dropdown
        if (menu.length > 0) {
            gitbook.toolbar.createButton({
                icon: 'fa fa-share-alt',
                label: 'Share',
                position: 'right',
                dropdown: [menu]
            });
        }

        // Direct actions to share
        $.each(SITES, function(sideId, site) {
            if (!opts[sideId]) return;

            gitbook.toolbar.createButton({
                icon: site.icon,
                label: site.text,
                position: 'right',
                onClick: site.onClick
            });
        });
    });
});
