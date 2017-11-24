<template>
  <button class="btn-default btn">ボタン</button>
</template>
<script>
  export default {
    name:"btn"
  }
</script>
<style lang="scss" scoped>
  $r:188;
  $g:38;
  $b:38;

  .btn-default{
    padding: 10px 15px;
    text-align: center;
    border-radius: 4px;
    color: #fff;
    outline: none;
    display: inline-block;
    border:1px solid;
  }
  .btn-default:hover{
    cursor: pointer;
  }
  .btn{
    border-color: rgb($r,$g,$b);
    box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.15);
    background: linear-gradient(rgb($r+42,$g+44,$b+6),rgb($r,$g,$b));
  }
  .btn:hover{
    background: linear-gradient(rgb($r+54,$g+57,$b+6),rgb($r,$g,$b));
  }
  .btn:active{
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
    color: rgb($r - 20,$g - 20,$b+6);
    background: rgb($r+28,$g+30,$b);
    border-color: rgb($r - 28,$g - 30,$b+6);
    box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 0px white;
  }
</style>
