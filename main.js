"use strict";

$(function () {
  const imgWidth = $(".fv-right__lower-item").width() + 64; // $img-width + margin-right
  const length = $(".fv-right__lower-item").length; // 実績の数
  const innerWidth = imgWidth * length;
  let current = 1;
  let prevItem = ".fv-right__works li img:nth-child(" + (current - 1) + ")"; // 左の画像
  let nextItem = ".fv-right__works li img:nth-child(" + (current + 1) + ")"; // 右の画像
  const rows = $(".fv-right__works li");
  const initialLeft =
    ($(".fv-right").width()
      - $(".fv-right__lower-item").width()) / 2;
      console.log(current);
      console.log($(prevItem));
      console.log($(nextItem));

  $(nextItem).click(function () {
    console.log("クリックされました");
    if (current == length) {
      rows.stop().css({
        left: initialLeft,
      });
      // rows.stop().css({
      //   left: initialLeft,
      // });
      current = 1;
      prevItem = ".fv-right__works li img:nth-child(" + (current - 1) + ")";
      nextItem = ".fv-right__works li img:nth-child(" + (current + 1) + ")";
    } else {
      rows.stop().css({
        left: initialLeft - imgWidth,
      });
      current++;
      prevItem = ".fv-right__works li img:nth-child(" + (current - 1) + ")";
      nextItem = ".fv-right__works li img:nth-child(" + (current + 1) + ")";
    }
    console.log(current);
    console.log($(prevItem));
    console.log($(nextItem));
  });

  // 縦方向のアニメーション

  let state = "完成品";
  const firstAnimation = () => {
    // liタグの位置の移動
    $(".fv-right__upper-row").toggleClass("hidden-to-upper_position");
    $(".fv-right__middle-row").toggleClass("upper-to-middle_position");
    $(".fv-right__lower-row").toggleClass("middle-to-lower_position");
    // imgタグの変形
    $(".fv-right__upper-item").toggleClass("hidden-to-upper_transform");
    $(".fv-right__middle-item").toggleClass("upper-to-middle_transform");
    $(".fv-right__lower-item").toggleClass("middle-to-lower_transform");
  };
  const secondAnimation = () => {
    // liタグの位置の移動
    $(".fv-right__upper-row").toggleClass("upper-to-middle_position");
    $(".fv-right__middle-row").toggleClass("middle-to-lower_position");
    $(".fv-right__lower-row").toggleClass("lower-to-hidden_position");
    // imgタグの変形
    $(".fv-right__upper-item").toggleClass("upper-to-middle_transform");
    $(".fv-right__middle-item").toggleClass("middle-to-lower_transform");
    $(".fv-right__lower-item").toggleClass("lower-to-hidden_transform");
  };
  $(".fv-right__upper-item").click(() => {
    if (state === "デザインカンプ") {
      state = "ワイヤーフレーム";
      // console.log(`上の段をクリックしました。${state}`);
      secondAnimation();
    } else if (state === "ワイヤーフレーム") {
      // console.log("詳細をクリックしました");
    } else {
      // console.log("無効");
    }
  });
  $(".fv-right__middle-item").click(() => {
    if (state === "完成品") {
      state = "デザインカンプ";
      // console.log(`上の段をクリックしました。${state}`);
      firstAnimation();
    } else if (state === "ワイヤーフレーム") {
      state = "デザインカンプ";
      secondAnimation();
      // console.log(`下の段をクリックしました。${state}`);
    } else {
      // console.log("詳細をクリックしました");
    }
  });
  $(".fv-right__lower-item").click(() => {
    if (state === "デザインカンプ") {
      state = "完成品";
      // console.log(`下の段をクリックしました。${state}`);
      firstAnimation();
    } else if (state === "完成品") {
      // console.log("詳細をクリックしました");
    } else {
      // console.log("無効");
    }
  });

});
