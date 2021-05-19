import $ from 'jquery';
import './app2.css';

const $tabBar = $("#app2 .tab-bar")
const $tabContent = $("#app2 .tab-content")

$tabBar.on("click","li",(e)=>{
  const $li = $(e.currentTarget) //拿到用户点击的li
  $li.addClass('selected').siblings().removeClass('selected')
  const index = $li.index() //拿到index
  $tabContent.children().eq(index).addClass('active').siblings().removeClass('active')
})

$tabBar.children().eq(0).trigger("click")//初始化点击