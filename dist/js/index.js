"use strict";

$(function () {
  /* 顶部导航菜单 */
  function headerNavMenu() {
    $(".nav-list li").hover(function () {
      $(this).find(".ns-menu").stop(true, false).show();
    }, function () {
      $(this).find(".ns-menu").stop(true, false).hide();
    });
  }
  headerNavMenu();

  $(".box1-t .list li").mouseenter(function () {
    var $this = $(this);
    $this.parent().parent().find('li').removeClass("active");
    $this.addClass("active");
    // $this.parents('.qh').find('.c').removeClass("active");
    // $this.parents('.qh').find('.c').eq( $this.index() ).addClass("active");
    $this.parents('.qh').find('.ul').removeClass("cur");
    $this.parents('.qh').find('.ul').eq($this.index()).addClass("cur");
  });

  $(".box1-c2 .list li").mouseenter(function () {
    var $this = $(this);
    $this.parent().parent().find('li').removeClass("active");
    $this.addClass("active");
    $this.parents('.box1-c2').find('.qhlist').removeClass("active");
    $this.parents('.box1-c2').find('.qhlist').eq($this.index()).addClass("active");
  });

  $(".box5 .list li").click(function () {
    var $this = $(this);
    $this.parent().parent().find('li').removeClass("active");
    $this.addClass("active");
    $this.parents('.qh').find('.c').removeClass("active");
    $this.parents('.qh').find('.c').eq($this.index()).addClass("active");
  });

  $(".jt").click(function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(".xl").show();
    } else {
      $(".xl").hide();
    }
  });

  /* 滑动切换
     *   togBox:整个切换的盒子
     *   tagBox：切换按钮的盒子
     *   conBox：需要切换的div
     *   addclasses ：给切换按钮加上的class类名
  */
  function toggleTag(togBox, tagBox, conBox, addclasses) {
    $(togBox).each(function () {
      $(this).find(tagBox).children().eq(0).addClass(addclasses);
      $(this).find(conBox).children().eq(0).show().siblings().hide();
      $(this).find(tagBox).children().click(function () {
        var index = $(this).index();
        $(this).addClass(addclasses).siblings().removeClass(addclasses);
        $(this).parents(togBox).find(conBox).children().eq(index).show().siblings().hide();
      });
    });
  }
  toggleTag('.toggleMaxBox', '.toggleTag', '.toggleShowBox', 'active');
  toggleTag('.toggleMaxBox1', '.toggleTag1', '.toggleShowBox1', 'active');

  //文章折叠
  function clickFold() {
    $(".foldbox").eq(0).find("ul").hide();
    $(".foldbox").eq(0).find(".tag-title").addClass("active");
    $(".foldbox").each(function () {
      $(this).find(".tag-title").click(function () {
        $(this).toggleClass("active");
        $(this).parents(".foldbox").find("ul").slideToggle();
      });
    });
  }
  clickFold();
});