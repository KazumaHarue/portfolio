"use strict";

$(function () {

  // 横方向のアニメーション
  
  const imgWidth = $(".fv-right__lower-item").width() + 2 + 64; // $img-width(2px少なく出るので+2px) + margin-right
  const length = $(".fv-right__lower-item").length; // 実績の数
  let current = 1;
  const prev = $(".fv-right__prev-btn");
  const next = $(".fv-right__next-btn");
  const rows = $(".fv-right__works li");
  const initialLeft =
    ($(".fv-right").width() - $(".fv-right__lower-item").width()) / 2;
  next.click(function () {
    if (current == length) {
      rows.stop().css({
        left: initialLeft,
      });
      current = 1;
    } else {
      rows.stop().css({
        left: initialLeft - imgWidth * current,
      });
      current++;
    }
    console.log(current);
  });
  prev.click(function () {
    if (current == 1) {
      rows.stop().css({
        left: initialLeft - imgWidth * (length - 1),
      });
      current = length;
    } else {
      rows.stop().css({
        left: initialLeft - imgWidth * (current - 2),
      });
      current--;
    }
    console.log(current);
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
