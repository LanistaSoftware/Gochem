<template>
  <div class="container-fluid">
    <div class="container">
      <div class="formBox">
        <form>
          <div class="row">
            <div class="col-sm-6">
              <div class="inputBox ">
                <input type="text" name="" class="input" placeholder="Konu">
              </div>
            </div>

            <div class="col-sm-6">
              <div class="inputBox">
                <input type="text" name="" class="input" placeholder="İsim">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6">
              <div class="inputBox">
                <input type="text" name="" class="input" placeholder="E-mail">
              </div>
            </div>

            <div class="col-sm-6">
              <div class="inputBox">
                <input type="text" name="" class="input" placeholder="Telefon">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12">
              <div class="inputBox">
                <textarea class="input" placeholder="Mesajınız" />
                <input type="submit" name="" class="button" value="Gönder">
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.formBox  h1{
margin: 0;
padding: 0;
text-align: center;
margin-bottom: 50px;
text-transform: uppercase;
font-size: 48px;
}
.inputBox{
position: relative;
box-sizing: border-box;
margin-bottom: 1rem;
}
.inputBox .inputText{
position: absolute;
    font-size: 24px;
    line-height: 50px;
    transition: .5s;
    opacity: .5;
}
.inputBox .input{
position: relative;
width: 100%;
border: none;
padding: 1rem;
border-radius: .6rem;
}
.focus .inputText{
transform: translateY(-30px);
font-size: 18px;
opacity: 1;
color: #9A9A9A;
}
textarea{
height: 100px !important;
margin-top: 3rem;
}
.button{
    position: absolute;
    border: 1px solid;
    padding: .6rem;
    border-radius: .5rem;
    color: #9A9A9A;
    background: none;
    bottom: 15%;
    right: 4%;
}
</style>
