var Adoromar_Home={methods:{sliderMainBanner:function(){$(".e-main-banner .e-carousel").slick({slidesToShow:1,autoplay:!1,infinite:!0,adaptiveHeight:!0,fade:!1,dots:!0,arrows:!1})},slidersEstampas:function(){$(".e-estampa-buy .e-carousel").slick({slidesToShow:8,slidesToScroll:8,autoplay:!1,infinite:!0,fade:!1,dots:!1,arrows:!0})},slidersLancamentos:function(){$(".e-product-list .vitrine ul").slick({slidesToShow:4,autoplay:!1,infinite:!0,fade:!1,dots:!0,arrows:!0})},homeInstagram:function(){$("#instafeed");new Instafeed({get:"user",userId:718928585,accessToken:"718928585.1677ed0.bf8da11b0b894e26ad5d6bc904548441",limit:8,resolution:"standard_resolution",mock:!0,success:function(response){var url=[],links=[],caption=[];$.each(response.data,function(i,v){url.push(v.images.standard_resolution.url),links.push(v.link),caption.push(v.caption.text)}),$("#instafeed .e-insta-photo").append("<div class='e-insta-thumbnail'><a href='"+links[0]+"' target='_blank' title='"+caption[0]+"'><img src="+url[0]+" /> </a></div>"),$("#instafeed .e-insta-photo").append("<div class='e-insta-thumbnail'><a href='"+links[1]+"' target='_blank' title='"+caption[1]+"'><img src="+url[1]+" /> </a></div>"),$("#instafeed .e-insta-photo").append("<div class='e-insta-thumbnail'><a href='"+links[2]+"' target='_blank' title='"+caption[2]+"'><img src="+url[2]+" /> </a></div>"),$("#instafeed .e-insta-photo").append("<div class='e-insta-thumbnail'><a href='"+links[3]+"' target='_blank' title='"+caption[3]+"'><img src="+url[3]+" /> </a></div>"),$("#instafeed .e-insta-photo").append("<div class='e-insta-thumbnail'><a href='"+links[4]+"' target='_blank' title='"+caption[4]+"'><img src="+url[4]+" /> </a></div>"),$("#instafeed .e-insta-photo").append("<div class='e-insta-thumbnail'><a href='"+links[5]+"' target='_blank' title='"+caption[5]+"'><img src="+url[5]+" /> </a></div>")}}).run()},init:function(){this.sliderMainBanner(),this.slidersEstampas(),this.slidersLancamentos(),this.homeInstagram()},init_ajax:function(){}},ajax:function(){return this.methods.init_ajax()},mounted:function(){return this.methods.init()}};$(document).ready(function(){Adoromar_Home.mounted()}),$(document).ajaxStop(function(){Adoromar_Home.ajax()});