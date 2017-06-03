<div id="modal-callback" class="modal fade" tab-index="-1" role="dialog" aria-labelledby="modal-callback">
	<div class="modal-dialog" role="document">
		<div class="modal-content modal-callback-wrap">
			<div class="form-title">Заказать обратный звонок</div>
			<form action="#" class="contact-form">
            <div class="form-group">
               <input type="text" class="form-control" name="uname" placeholder="Ваше имя">
            </div>
            <div class="form-group">
               <input type="text" class="form-control" name="phone" placeholder="Ваш телефон">
            </div>
            <div class="form-group submit-wrap"><input type="submit" name="submit" class="btn btn-submit" value="Отправить"></div>
         </form>
		</div>
      <button class="close" data-dismiss="modal"></button>
	</div>
</div>
<!--  -->
<div id="modal-mes" class="modal fade" tab-index="-1" role="dialog" aria-labelledby="success message">
   <div class="modal-dialog" role="document">
      <div class="modal-content">
         <div class="modal-body">
            <div class="mess-body">
            	<div class="mes-title">Спасибо</div>
            	<div class="mes-text">Заявка отправлена!<br/>Мы свяжемся с Вами в ближайшее время.</div>
            </div>
         	<button type="button" class="btn btn-red" data-dismiss="modal" aria-label="Close">Вернуться на сайт</button>
         </div>
      </div>
   </div>
</div>
<!--  -->
<div class="calculator modal fade" id="calculator" role="dialog">
   <div class="container">
      <div class="calculator-head">Расчет стоимости топлива<button type="button" class="close" data-dismiss="modal" aria-label="Close"></button></div>
      <div class="calculator-body">
         <form action="" class="calculator_form">
            <div class="form-group">
               <label for="gas_type">Выберите сорт:</label>
               <div class="st-select">
                  <select name="gas_type" id="gas_type">
                     <option value="39">ЕВРО 3 ГОСТ Зимнее 30</option>
                     <option value="40">ЕВРО 3 ГОСТ Зимнее 10</option>
                     <option value="30">ЕВРО 3 ГОСТ Летнее 25</option>
                     <option value="20">ЕВРО 3 ГОСТ Летнее 12</option>
                  </select>
               </div>
            </div>
            <div class="form-group">
               <div class="range-slider-wrap">
                  <div class="range-slider order_capacity">
                     <div class="pull-left">
                        <span class="slider-label">Укажите объём:</span>
                        <div id="order_capacity" class="range-slider-field"></div>
                     </div>
                     <div class="pull-right">
                        <input type="text" class="range-slider__value" id="capacity_value" value="5000">
                        <i>Л</i>
                     </div>
                  </div>
                  <div class="range-slider order_distance">
                     <div class="pull-left">
                        <span class="slider-label">Доставка Москва:</span>
                        <div id="order_distance" class="range-slider-field"></div>
                     </div>
                     <div class="pull-right">
                     <input type="text" class="range-slider__value" id="distance_value" value="500">
                     <i>КМ<span>от МКАД</span></i>
                     </div>
                  </div>
               </div>
            </div>
            <div class="overall">
               <div class="pull-left">
                  <div class="price-wrap">Стоимость топлива с учетом доставки: <span class="overall-price">29 руб/л</span></div>
                  <div class="asterisk-text">*указана ориентировочная стоимость, подробности уточняйте у менеджера</div>
               </div>
               <div class="submit-wrap pull-right">
                  <input type="submit" class="btn btn-red" name="order" value="Оформить заказ">
               </div>
            </div>
         </form>
      </div>
   </div>
</div>
