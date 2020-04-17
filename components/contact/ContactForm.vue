<template>
  <section>
    <div id="form-container" class="form-container">
      <div class="twin-input left-inputs">
        <div class="inputBox ">
          <select id="konu" name="Konu" placeholder="Konu">
            <option value="">
              Bilgi almak istiyorum.
            </option>
            <option value="">
              Ürün işlemleri.
            </option>
            <option value="">
              Stok işlemleri.
            </option>
            <option value="">
              Sipariş işlemleri.
            </option>
          </select>
        </div>
        <div class="inputBox">
          <input type="text" name="" class="input" placeholder="İsim">
        </div>
      </div>
      <div class="twin-input right-inputs clearfix">
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
        </div>
        <button class="form-btn">
          Gönder
        </button>
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

input,textarea,select{
  font-family: Arial, Helvetica, sans-serif;
  padding: 1rem 0.8rem 1rem 1.2rem;
  width: 100%;
  margin: 0.5rem;
  border: none;
  border-radius: 0.8em;
  z-index: 500;
}
textarea{
  height: 11rem;
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
  transition: 0.2s;
  bottom: 1.5rem;
  right: 0.5rem;
}
.form-btn:hover{
    color: lightgreen;
    border-color: lightgreen;
}

}
</style>
