<template>
  <!-- <div class="container-fluid">
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
  </div> -->
  <section>
    <div class="form-container">
      <div class="twin-input left-inputs">
        <div class="inputBox ">
          <input type="text" name="" class="input" placeholder="Konu">
        </div>
        <div class="inputBox">
          <input type="text" name="" class="input" placeholder="İsim">
        </div>
      </div>
      <div class="twin-input right-inputs">
        <div class="inputBox">
          <input type="email" name="" class="input" placeholder="E-mail">
        </div>
        <div class="inputBox">
          <input type="text" name="" class="input" placeholder="Telefon">
        </div>
      </div>
      <div class="text-container">
        <div class="inputBox">
          <textarea class="input" placeholder="Mesajınız" />
          <button class="form-btn">
            Gönder
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="less" scoped>

.twin-input{
  width: 50%;
  float: left;
  margin-bottom: 1.2rem;
}
.left-inputs{
  padding-right: 1rem;
}
.right-inputs{
  padding-left: 1rem;
}

input,textarea{
  padding: 0.7rem;
  width: 100%;
  margin: 0.5rem;
  border: none;
  border-radius: 0.2em;
}
textarea{
  height: 14rem;
}
.text-container{
 position: relative;
 .form-btn {
  position: absolute;
  border: 1px solid;
  padding: .6rem;
  border-radius: .5rem;
  color: #9A9A9A;
  background: none;
  bottom: 2rem;
  right: 1rem;
  transition: 0.2s;
}
.form-btn:hover{
    color: lightgreen;
    border-color: lightgreen;
}

}
</style>
