/*!
 * Kopa set view count (http://kopatheme.com)
 * Copyright 2014 Kopasoft.
 * Licensed under GNU General Public License v3
 */

/* =========================================================
 Set view count (post, page, portfolio)
 ============================================================ */
jQuery(document).ready(function() {
    if (kopa_front_variable.template.post_id > 0) {
        jQuery.ajax({
            type: 'POST',
            url: kopa_front_variable.ajax.url,
            dataType: 'json',
            async: true,
            timeout: 5000,
            data: {
                action: 'news_mix_lite_ajax_set_view_count',
                wpnonce: jQuery('#news_mix_lite_set_view_count_wpnonce').val(),
                post_id: kopa_front_variable.template.post_id
            },
            beforeSend: function(XMLHttpRequest, settings) {
            },
            complete: function(XMLHttpRequest, textStatus) {
            },
            success: function(data) {
                data = JSON.stringify(data);
                jQuery(document).find('.post .entry-view').remove();
                jQuery(document).find('.post .meta-box .entry-view').remove();
                jQuery(document).find('.post .meta-box').append('<span class="entry-view"><span class="fa fa-eye"></span>'+data+'</span>');
                jQuery(document).find('.post header').append('<span class="entry-view"><span class="fa fa-eye"></span>'+data+'</span>');
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
            }
        });
    }
});